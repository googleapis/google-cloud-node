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

        /** Namespace modelarmor. */
        namespace modelarmor {

            /** Namespace v1. */
            namespace v1 {

                /** Represents a ModelArmor */
                class ModelArmor extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new ModelArmor service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new ModelArmor service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): ModelArmor;

                    /**
                     * Calls ListTemplates.
                     * @param request ListTemplatesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListTemplatesResponse
                     */
                    public listTemplates(request: google.cloud.modelarmor.v1.IListTemplatesRequest, callback: google.cloud.modelarmor.v1.ModelArmor.ListTemplatesCallback): void;

                    /**
                     * Calls ListTemplates.
                     * @param request ListTemplatesRequest message or plain object
                     * @returns Promise
                     */
                    public listTemplates(request: google.cloud.modelarmor.v1.IListTemplatesRequest): Promise<google.cloud.modelarmor.v1.ListTemplatesResponse>;

                    /**
                     * Calls GetTemplate.
                     * @param request GetTemplateRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Template
                     */
                    public getTemplate(request: google.cloud.modelarmor.v1.IGetTemplateRequest, callback: google.cloud.modelarmor.v1.ModelArmor.GetTemplateCallback): void;

                    /**
                     * Calls GetTemplate.
                     * @param request GetTemplateRequest message or plain object
                     * @returns Promise
                     */
                    public getTemplate(request: google.cloud.modelarmor.v1.IGetTemplateRequest): Promise<google.cloud.modelarmor.v1.Template>;

                    /**
                     * Calls CreateTemplate.
                     * @param request CreateTemplateRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Template
                     */
                    public createTemplate(request: google.cloud.modelarmor.v1.ICreateTemplateRequest, callback: google.cloud.modelarmor.v1.ModelArmor.CreateTemplateCallback): void;

                    /**
                     * Calls CreateTemplate.
                     * @param request CreateTemplateRequest message or plain object
                     * @returns Promise
                     */
                    public createTemplate(request: google.cloud.modelarmor.v1.ICreateTemplateRequest): Promise<google.cloud.modelarmor.v1.Template>;

                    /**
                     * Calls UpdateTemplate.
                     * @param request UpdateTemplateRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Template
                     */
                    public updateTemplate(request: google.cloud.modelarmor.v1.IUpdateTemplateRequest, callback: google.cloud.modelarmor.v1.ModelArmor.UpdateTemplateCallback): void;

                    /**
                     * Calls UpdateTemplate.
                     * @param request UpdateTemplateRequest message or plain object
                     * @returns Promise
                     */
                    public updateTemplate(request: google.cloud.modelarmor.v1.IUpdateTemplateRequest): Promise<google.cloud.modelarmor.v1.Template>;

                    /**
                     * Calls DeleteTemplate.
                     * @param request DeleteTemplateRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteTemplate(request: google.cloud.modelarmor.v1.IDeleteTemplateRequest, callback: google.cloud.modelarmor.v1.ModelArmor.DeleteTemplateCallback): void;

                    /**
                     * Calls DeleteTemplate.
                     * @param request DeleteTemplateRequest message or plain object
                     * @returns Promise
                     */
                    public deleteTemplate(request: google.cloud.modelarmor.v1.IDeleteTemplateRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls GetFloorSetting.
                     * @param request GetFloorSettingRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and FloorSetting
                     */
                    public getFloorSetting(request: google.cloud.modelarmor.v1.IGetFloorSettingRequest, callback: google.cloud.modelarmor.v1.ModelArmor.GetFloorSettingCallback): void;

                    /**
                     * Calls GetFloorSetting.
                     * @param request GetFloorSettingRequest message or plain object
                     * @returns Promise
                     */
                    public getFloorSetting(request: google.cloud.modelarmor.v1.IGetFloorSettingRequest): Promise<google.cloud.modelarmor.v1.FloorSetting>;

                    /**
                     * Calls UpdateFloorSetting.
                     * @param request UpdateFloorSettingRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and FloorSetting
                     */
                    public updateFloorSetting(request: google.cloud.modelarmor.v1.IUpdateFloorSettingRequest, callback: google.cloud.modelarmor.v1.ModelArmor.UpdateFloorSettingCallback): void;

                    /**
                     * Calls UpdateFloorSetting.
                     * @param request UpdateFloorSettingRequest message or plain object
                     * @returns Promise
                     */
                    public updateFloorSetting(request: google.cloud.modelarmor.v1.IUpdateFloorSettingRequest): Promise<google.cloud.modelarmor.v1.FloorSetting>;

                    /**
                     * Calls SanitizeUserPrompt.
                     * @param request SanitizeUserPromptRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and SanitizeUserPromptResponse
                     */
                    public sanitizeUserPrompt(request: google.cloud.modelarmor.v1.ISanitizeUserPromptRequest, callback: google.cloud.modelarmor.v1.ModelArmor.SanitizeUserPromptCallback): void;

                    /**
                     * Calls SanitizeUserPrompt.
                     * @param request SanitizeUserPromptRequest message or plain object
                     * @returns Promise
                     */
                    public sanitizeUserPrompt(request: google.cloud.modelarmor.v1.ISanitizeUserPromptRequest): Promise<google.cloud.modelarmor.v1.SanitizeUserPromptResponse>;

                    /**
                     * Calls SanitizeModelResponse.
                     * @param request SanitizeModelResponseRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and SanitizeModelResponseResponse
                     */
                    public sanitizeModelResponse(request: google.cloud.modelarmor.v1.ISanitizeModelResponseRequest, callback: google.cloud.modelarmor.v1.ModelArmor.SanitizeModelResponseCallback): void;

                    /**
                     * Calls SanitizeModelResponse.
                     * @param request SanitizeModelResponseRequest message or plain object
                     * @returns Promise
                     */
                    public sanitizeModelResponse(request: google.cloud.modelarmor.v1.ISanitizeModelResponseRequest): Promise<google.cloud.modelarmor.v1.SanitizeModelResponseResponse>;
                }

                namespace ModelArmor {

                    /**
                     * Callback as used by {@link google.cloud.modelarmor.v1.ModelArmor|listTemplates}.
                     * @param error Error, if any
                     * @param [response] ListTemplatesResponse
                     */
                    type ListTemplatesCallback = (error: (Error|null), response?: google.cloud.modelarmor.v1.ListTemplatesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.modelarmor.v1.ModelArmor|getTemplate}.
                     * @param error Error, if any
                     * @param [response] Template
                     */
                    type GetTemplateCallback = (error: (Error|null), response?: google.cloud.modelarmor.v1.Template) => void;

                    /**
                     * Callback as used by {@link google.cloud.modelarmor.v1.ModelArmor|createTemplate}.
                     * @param error Error, if any
                     * @param [response] Template
                     */
                    type CreateTemplateCallback = (error: (Error|null), response?: google.cloud.modelarmor.v1.Template) => void;

                    /**
                     * Callback as used by {@link google.cloud.modelarmor.v1.ModelArmor|updateTemplate}.
                     * @param error Error, if any
                     * @param [response] Template
                     */
                    type UpdateTemplateCallback = (error: (Error|null), response?: google.cloud.modelarmor.v1.Template) => void;

                    /**
                     * Callback as used by {@link google.cloud.modelarmor.v1.ModelArmor|deleteTemplate}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteTemplateCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.modelarmor.v1.ModelArmor|getFloorSetting}.
                     * @param error Error, if any
                     * @param [response] FloorSetting
                     */
                    type GetFloorSettingCallback = (error: (Error|null), response?: google.cloud.modelarmor.v1.FloorSetting) => void;

                    /**
                     * Callback as used by {@link google.cloud.modelarmor.v1.ModelArmor|updateFloorSetting}.
                     * @param error Error, if any
                     * @param [response] FloorSetting
                     */
                    type UpdateFloorSettingCallback = (error: (Error|null), response?: google.cloud.modelarmor.v1.FloorSetting) => void;

                    /**
                     * Callback as used by {@link google.cloud.modelarmor.v1.ModelArmor|sanitizeUserPrompt}.
                     * @param error Error, if any
                     * @param [response] SanitizeUserPromptResponse
                     */
                    type SanitizeUserPromptCallback = (error: (Error|null), response?: google.cloud.modelarmor.v1.SanitizeUserPromptResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.modelarmor.v1.ModelArmor|sanitizeModelResponse}.
                     * @param error Error, if any
                     * @param [response] SanitizeModelResponseResponse
                     */
                    type SanitizeModelResponseCallback = (error: (Error|null), response?: google.cloud.modelarmor.v1.SanitizeModelResponseResponse) => void;
                }

                /** FilterMatchState enum. */
                enum FilterMatchState {
                    FILTER_MATCH_STATE_UNSPECIFIED = 0,
                    NO_MATCH_FOUND = 1,
                    MATCH_FOUND = 2
                }

                /** FilterExecutionState enum. */
                enum FilterExecutionState {
                    FILTER_EXECUTION_STATE_UNSPECIFIED = 0,
                    EXECUTION_SUCCESS = 1,
                    EXECUTION_SKIPPED = 2
                }

                /** RaiFilterType enum. */
                enum RaiFilterType {
                    RAI_FILTER_TYPE_UNSPECIFIED = 0,
                    SEXUALLY_EXPLICIT = 2,
                    HATE_SPEECH = 3,
                    HARASSMENT = 6,
                    DANGEROUS = 17
                }

                /** DetectionConfidenceLevel enum. */
                enum DetectionConfidenceLevel {
                    DETECTION_CONFIDENCE_LEVEL_UNSPECIFIED = 0,
                    LOW_AND_ABOVE = 1,
                    MEDIUM_AND_ABOVE = 2,
                    HIGH = 3
                }

                /** SdpFindingLikelihood enum. */
                enum SdpFindingLikelihood {
                    SDP_FINDING_LIKELIHOOD_UNSPECIFIED = 0,
                    VERY_UNLIKELY = 1,
                    UNLIKELY = 2,
                    POSSIBLE = 3,
                    LIKELY = 4,
                    VERY_LIKELY = 5
                }

                /** InvocationResult enum. */
                enum InvocationResult {
                    INVOCATION_RESULT_UNSPECIFIED = 0,
                    SUCCESS = 1,
                    PARTIAL = 2,
                    FAILURE = 3
                }

                /** Properties of a Template. */
                interface ITemplate {

                    /** Template name */
                    name?: (string|null);

                    /** Template createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Template updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** Template labels */
                    labels?: ({ [k: string]: string }|null);

                    /** Template filterConfig */
                    filterConfig?: (google.cloud.modelarmor.v1.IFilterConfig|null);

                    /** Template templateMetadata */
                    templateMetadata?: (google.cloud.modelarmor.v1.Template.ITemplateMetadata|null);
                }

                /** Represents a Template. */
                class Template implements ITemplate {

                    /**
                     * Constructs a new Template.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.modelarmor.v1.ITemplate);

                    /** Template name. */
                    public name: string;

                    /** Template createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Template updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** Template labels. */
                    public labels: { [k: string]: string };

                    /** Template filterConfig. */
                    public filterConfig?: (google.cloud.modelarmor.v1.IFilterConfig|null);

                    /** Template templateMetadata. */
                    public templateMetadata?: (google.cloud.modelarmor.v1.Template.ITemplateMetadata|null);

                    /**
                     * Creates a new Template instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Template instance
                     */
                    public static create(properties?: google.cloud.modelarmor.v1.ITemplate): google.cloud.modelarmor.v1.Template;

                    /**
                     * Encodes the specified Template message. Does not implicitly {@link google.cloud.modelarmor.v1.Template.verify|verify} messages.
                     * @param message Template message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.modelarmor.v1.ITemplate, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Template message, length delimited. Does not implicitly {@link google.cloud.modelarmor.v1.Template.verify|verify} messages.
                     * @param message Template message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.modelarmor.v1.ITemplate, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Template message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Template
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.modelarmor.v1.Template;

                    /**
                     * Decodes a Template message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Template
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.modelarmor.v1.Template;

                    /**
                     * Verifies a Template message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Template message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Template
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.modelarmor.v1.Template;

                    /**
                     * Creates a plain object from a Template message. Also converts values to other types if specified.
                     * @param message Template
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.modelarmor.v1.Template, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Template to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Template
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Template {

                    /** Properties of a TemplateMetadata. */
                    interface ITemplateMetadata {

                        /** TemplateMetadata ignorePartialInvocationFailures */
                        ignorePartialInvocationFailures?: (boolean|null);

                        /** TemplateMetadata customPromptSafetyErrorCode */
                        customPromptSafetyErrorCode?: (number|null);

                        /** TemplateMetadata customPromptSafetyErrorMessage */
                        customPromptSafetyErrorMessage?: (string|null);

                        /** TemplateMetadata customLlmResponseSafetyErrorCode */
                        customLlmResponseSafetyErrorCode?: (number|null);

                        /** TemplateMetadata customLlmResponseSafetyErrorMessage */
                        customLlmResponseSafetyErrorMessage?: (string|null);

                        /** TemplateMetadata logTemplateOperations */
                        logTemplateOperations?: (boolean|null);

                        /** TemplateMetadata logSanitizeOperations */
                        logSanitizeOperations?: (boolean|null);

                        /** TemplateMetadata enforcementType */
                        enforcementType?: (google.cloud.modelarmor.v1.Template.TemplateMetadata.EnforcementType|keyof typeof google.cloud.modelarmor.v1.Template.TemplateMetadata.EnforcementType|null);

                        /** TemplateMetadata multiLanguageDetection */
                        multiLanguageDetection?: (google.cloud.modelarmor.v1.Template.TemplateMetadata.IMultiLanguageDetection|null);
                    }

                    /** Represents a TemplateMetadata. */
                    class TemplateMetadata implements ITemplateMetadata {

                        /**
                         * Constructs a new TemplateMetadata.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.modelarmor.v1.Template.ITemplateMetadata);

                        /** TemplateMetadata ignorePartialInvocationFailures. */
                        public ignorePartialInvocationFailures: boolean;

                        /** TemplateMetadata customPromptSafetyErrorCode. */
                        public customPromptSafetyErrorCode: number;

                        /** TemplateMetadata customPromptSafetyErrorMessage. */
                        public customPromptSafetyErrorMessage: string;

                        /** TemplateMetadata customLlmResponseSafetyErrorCode. */
                        public customLlmResponseSafetyErrorCode: number;

                        /** TemplateMetadata customLlmResponseSafetyErrorMessage. */
                        public customLlmResponseSafetyErrorMessage: string;

                        /** TemplateMetadata logTemplateOperations. */
                        public logTemplateOperations: boolean;

                        /** TemplateMetadata logSanitizeOperations. */
                        public logSanitizeOperations: boolean;

                        /** TemplateMetadata enforcementType. */
                        public enforcementType: (google.cloud.modelarmor.v1.Template.TemplateMetadata.EnforcementType|keyof typeof google.cloud.modelarmor.v1.Template.TemplateMetadata.EnforcementType);

                        /** TemplateMetadata multiLanguageDetection. */
                        public multiLanguageDetection?: (google.cloud.modelarmor.v1.Template.TemplateMetadata.IMultiLanguageDetection|null);

                        /**
                         * Creates a new TemplateMetadata instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns TemplateMetadata instance
                         */
                        public static create(properties?: google.cloud.modelarmor.v1.Template.ITemplateMetadata): google.cloud.modelarmor.v1.Template.TemplateMetadata;

                        /**
                         * Encodes the specified TemplateMetadata message. Does not implicitly {@link google.cloud.modelarmor.v1.Template.TemplateMetadata.verify|verify} messages.
                         * @param message TemplateMetadata message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.modelarmor.v1.Template.ITemplateMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified TemplateMetadata message, length delimited. Does not implicitly {@link google.cloud.modelarmor.v1.Template.TemplateMetadata.verify|verify} messages.
                         * @param message TemplateMetadata message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.modelarmor.v1.Template.ITemplateMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a TemplateMetadata message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns TemplateMetadata
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.modelarmor.v1.Template.TemplateMetadata;

                        /**
                         * Decodes a TemplateMetadata message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns TemplateMetadata
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.modelarmor.v1.Template.TemplateMetadata;

                        /**
                         * Verifies a TemplateMetadata message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a TemplateMetadata message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns TemplateMetadata
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.modelarmor.v1.Template.TemplateMetadata;

                        /**
                         * Creates a plain object from a TemplateMetadata message. Also converts values to other types if specified.
                         * @param message TemplateMetadata
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.modelarmor.v1.Template.TemplateMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this TemplateMetadata to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for TemplateMetadata
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace TemplateMetadata {

                        /** Properties of a MultiLanguageDetection. */
                        interface IMultiLanguageDetection {

                            /** MultiLanguageDetection enableMultiLanguageDetection */
                            enableMultiLanguageDetection?: (boolean|null);
                        }

                        /** Represents a MultiLanguageDetection. */
                        class MultiLanguageDetection implements IMultiLanguageDetection {

                            /**
                             * Constructs a new MultiLanguageDetection.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.modelarmor.v1.Template.TemplateMetadata.IMultiLanguageDetection);

                            /** MultiLanguageDetection enableMultiLanguageDetection. */
                            public enableMultiLanguageDetection: boolean;

                            /**
                             * Creates a new MultiLanguageDetection instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns MultiLanguageDetection instance
                             */
                            public static create(properties?: google.cloud.modelarmor.v1.Template.TemplateMetadata.IMultiLanguageDetection): google.cloud.modelarmor.v1.Template.TemplateMetadata.MultiLanguageDetection;

                            /**
                             * Encodes the specified MultiLanguageDetection message. Does not implicitly {@link google.cloud.modelarmor.v1.Template.TemplateMetadata.MultiLanguageDetection.verify|verify} messages.
                             * @param message MultiLanguageDetection message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.modelarmor.v1.Template.TemplateMetadata.IMultiLanguageDetection, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified MultiLanguageDetection message, length delimited. Does not implicitly {@link google.cloud.modelarmor.v1.Template.TemplateMetadata.MultiLanguageDetection.verify|verify} messages.
                             * @param message MultiLanguageDetection message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.modelarmor.v1.Template.TemplateMetadata.IMultiLanguageDetection, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a MultiLanguageDetection message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns MultiLanguageDetection
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.modelarmor.v1.Template.TemplateMetadata.MultiLanguageDetection;

                            /**
                             * Decodes a MultiLanguageDetection message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns MultiLanguageDetection
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.modelarmor.v1.Template.TemplateMetadata.MultiLanguageDetection;

                            /**
                             * Verifies a MultiLanguageDetection message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a MultiLanguageDetection message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns MultiLanguageDetection
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.modelarmor.v1.Template.TemplateMetadata.MultiLanguageDetection;

                            /**
                             * Creates a plain object from a MultiLanguageDetection message. Also converts values to other types if specified.
                             * @param message MultiLanguageDetection
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.modelarmor.v1.Template.TemplateMetadata.MultiLanguageDetection, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this MultiLanguageDetection to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for MultiLanguageDetection
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** EnforcementType enum. */
                        enum EnforcementType {
                            ENFORCEMENT_TYPE_UNSPECIFIED = 0,
                            INSPECT_ONLY = 1,
                            INSPECT_AND_BLOCK = 2
                        }
                    }
                }

                /** Properties of a FloorSetting. */
                interface IFloorSetting {

                    /** FloorSetting name */
                    name?: (string|null);

                    /** FloorSetting createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** FloorSetting updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** FloorSetting filterConfig */
                    filterConfig?: (google.cloud.modelarmor.v1.IFilterConfig|null);

                    /** FloorSetting enableFloorSettingEnforcement */
                    enableFloorSettingEnforcement?: (boolean|null);

                    /** FloorSetting integratedServices */
                    integratedServices?: (google.cloud.modelarmor.v1.FloorSetting.IntegratedService[]|null);

                    /** FloorSetting aiPlatformFloorSetting */
                    aiPlatformFloorSetting?: (google.cloud.modelarmor.v1.IAiPlatformFloorSetting|null);

                    /** FloorSetting floorSettingMetadata */
                    floorSettingMetadata?: (google.cloud.modelarmor.v1.FloorSetting.IFloorSettingMetadata|null);
                }

                /** Represents a FloorSetting. */
                class FloorSetting implements IFloorSetting {

                    /**
                     * Constructs a new FloorSetting.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.modelarmor.v1.IFloorSetting);

                    /** FloorSetting name. */
                    public name: string;

                    /** FloorSetting createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** FloorSetting updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** FloorSetting filterConfig. */
                    public filterConfig?: (google.cloud.modelarmor.v1.IFilterConfig|null);

                    /** FloorSetting enableFloorSettingEnforcement. */
                    public enableFloorSettingEnforcement?: (boolean|null);

                    /** FloorSetting integratedServices. */
                    public integratedServices: google.cloud.modelarmor.v1.FloorSetting.IntegratedService[];

                    /** FloorSetting aiPlatformFloorSetting. */
                    public aiPlatformFloorSetting?: (google.cloud.modelarmor.v1.IAiPlatformFloorSetting|null);

                    /** FloorSetting floorSettingMetadata. */
                    public floorSettingMetadata?: (google.cloud.modelarmor.v1.FloorSetting.IFloorSettingMetadata|null);

                    /**
                     * Creates a new FloorSetting instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns FloorSetting instance
                     */
                    public static create(properties?: google.cloud.modelarmor.v1.IFloorSetting): google.cloud.modelarmor.v1.FloorSetting;

                    /**
                     * Encodes the specified FloorSetting message. Does not implicitly {@link google.cloud.modelarmor.v1.FloorSetting.verify|verify} messages.
                     * @param message FloorSetting message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.modelarmor.v1.IFloorSetting, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified FloorSetting message, length delimited. Does not implicitly {@link google.cloud.modelarmor.v1.FloorSetting.verify|verify} messages.
                     * @param message FloorSetting message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.modelarmor.v1.IFloorSetting, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a FloorSetting message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FloorSetting
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.modelarmor.v1.FloorSetting;

                    /**
                     * Decodes a FloorSetting message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns FloorSetting
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.modelarmor.v1.FloorSetting;

                    /**
                     * Verifies a FloorSetting message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a FloorSetting message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns FloorSetting
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.modelarmor.v1.FloorSetting;

                    /**
                     * Creates a plain object from a FloorSetting message. Also converts values to other types if specified.
                     * @param message FloorSetting
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.modelarmor.v1.FloorSetting, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this FloorSetting to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for FloorSetting
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace FloorSetting {

                    /** Properties of a FloorSettingMetadata. */
                    interface IFloorSettingMetadata {

                        /** FloorSettingMetadata multiLanguageDetection */
                        multiLanguageDetection?: (google.cloud.modelarmor.v1.FloorSetting.FloorSettingMetadata.IMultiLanguageDetection|null);
                    }

                    /** Represents a FloorSettingMetadata. */
                    class FloorSettingMetadata implements IFloorSettingMetadata {

                        /**
                         * Constructs a new FloorSettingMetadata.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.modelarmor.v1.FloorSetting.IFloorSettingMetadata);

                        /** FloorSettingMetadata multiLanguageDetection. */
                        public multiLanguageDetection?: (google.cloud.modelarmor.v1.FloorSetting.FloorSettingMetadata.IMultiLanguageDetection|null);

                        /**
                         * Creates a new FloorSettingMetadata instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns FloorSettingMetadata instance
                         */
                        public static create(properties?: google.cloud.modelarmor.v1.FloorSetting.IFloorSettingMetadata): google.cloud.modelarmor.v1.FloorSetting.FloorSettingMetadata;

                        /**
                         * Encodes the specified FloorSettingMetadata message. Does not implicitly {@link google.cloud.modelarmor.v1.FloorSetting.FloorSettingMetadata.verify|verify} messages.
                         * @param message FloorSettingMetadata message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.modelarmor.v1.FloorSetting.IFloorSettingMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified FloorSettingMetadata message, length delimited. Does not implicitly {@link google.cloud.modelarmor.v1.FloorSetting.FloorSettingMetadata.verify|verify} messages.
                         * @param message FloorSettingMetadata message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.modelarmor.v1.FloorSetting.IFloorSettingMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a FloorSettingMetadata message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns FloorSettingMetadata
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.modelarmor.v1.FloorSetting.FloorSettingMetadata;

                        /**
                         * Decodes a FloorSettingMetadata message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns FloorSettingMetadata
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.modelarmor.v1.FloorSetting.FloorSettingMetadata;

                        /**
                         * Verifies a FloorSettingMetadata message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a FloorSettingMetadata message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns FloorSettingMetadata
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.modelarmor.v1.FloorSetting.FloorSettingMetadata;

                        /**
                         * Creates a plain object from a FloorSettingMetadata message. Also converts values to other types if specified.
                         * @param message FloorSettingMetadata
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.modelarmor.v1.FloorSetting.FloorSettingMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this FloorSettingMetadata to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for FloorSettingMetadata
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace FloorSettingMetadata {

                        /** Properties of a MultiLanguageDetection. */
                        interface IMultiLanguageDetection {

                            /** MultiLanguageDetection enableMultiLanguageDetection */
                            enableMultiLanguageDetection?: (boolean|null);
                        }

                        /** Represents a MultiLanguageDetection. */
                        class MultiLanguageDetection implements IMultiLanguageDetection {

                            /**
                             * Constructs a new MultiLanguageDetection.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.modelarmor.v1.FloorSetting.FloorSettingMetadata.IMultiLanguageDetection);

                            /** MultiLanguageDetection enableMultiLanguageDetection. */
                            public enableMultiLanguageDetection: boolean;

                            /**
                             * Creates a new MultiLanguageDetection instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns MultiLanguageDetection instance
                             */
                            public static create(properties?: google.cloud.modelarmor.v1.FloorSetting.FloorSettingMetadata.IMultiLanguageDetection): google.cloud.modelarmor.v1.FloorSetting.FloorSettingMetadata.MultiLanguageDetection;

                            /**
                             * Encodes the specified MultiLanguageDetection message. Does not implicitly {@link google.cloud.modelarmor.v1.FloorSetting.FloorSettingMetadata.MultiLanguageDetection.verify|verify} messages.
                             * @param message MultiLanguageDetection message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.modelarmor.v1.FloorSetting.FloorSettingMetadata.IMultiLanguageDetection, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified MultiLanguageDetection message, length delimited. Does not implicitly {@link google.cloud.modelarmor.v1.FloorSetting.FloorSettingMetadata.MultiLanguageDetection.verify|verify} messages.
                             * @param message MultiLanguageDetection message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.modelarmor.v1.FloorSetting.FloorSettingMetadata.IMultiLanguageDetection, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a MultiLanguageDetection message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns MultiLanguageDetection
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.modelarmor.v1.FloorSetting.FloorSettingMetadata.MultiLanguageDetection;

                            /**
                             * Decodes a MultiLanguageDetection message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns MultiLanguageDetection
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.modelarmor.v1.FloorSetting.FloorSettingMetadata.MultiLanguageDetection;

                            /**
                             * Verifies a MultiLanguageDetection message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a MultiLanguageDetection message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns MultiLanguageDetection
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.modelarmor.v1.FloorSetting.FloorSettingMetadata.MultiLanguageDetection;

                            /**
                             * Creates a plain object from a MultiLanguageDetection message. Also converts values to other types if specified.
                             * @param message MultiLanguageDetection
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.modelarmor.v1.FloorSetting.FloorSettingMetadata.MultiLanguageDetection, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this MultiLanguageDetection to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for MultiLanguageDetection
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }
                    }

                    /** IntegratedService enum. */
                    enum IntegratedService {
                        INTEGRATED_SERVICE_UNSPECIFIED = 0,
                        AI_PLATFORM = 1
                    }
                }

                /** Properties of an AiPlatformFloorSetting. */
                interface IAiPlatformFloorSetting {

                    /** AiPlatformFloorSetting inspectOnly */
                    inspectOnly?: (boolean|null);

                    /** AiPlatformFloorSetting inspectAndBlock */
                    inspectAndBlock?: (boolean|null);

                    /** AiPlatformFloorSetting enableCloudLogging */
                    enableCloudLogging?: (boolean|null);
                }

                /** Represents an AiPlatformFloorSetting. */
                class AiPlatformFloorSetting implements IAiPlatformFloorSetting {

                    /**
                     * Constructs a new AiPlatformFloorSetting.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.modelarmor.v1.IAiPlatformFloorSetting);

                    /** AiPlatformFloorSetting inspectOnly. */
                    public inspectOnly?: (boolean|null);

                    /** AiPlatformFloorSetting inspectAndBlock. */
                    public inspectAndBlock?: (boolean|null);

                    /** AiPlatformFloorSetting enableCloudLogging. */
                    public enableCloudLogging: boolean;

                    /** AiPlatformFloorSetting enforcementType. */
                    public enforcementType?: ("inspectOnly"|"inspectAndBlock");

                    /**
                     * Creates a new AiPlatformFloorSetting instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AiPlatformFloorSetting instance
                     */
                    public static create(properties?: google.cloud.modelarmor.v1.IAiPlatformFloorSetting): google.cloud.modelarmor.v1.AiPlatformFloorSetting;

                    /**
                     * Encodes the specified AiPlatformFloorSetting message. Does not implicitly {@link google.cloud.modelarmor.v1.AiPlatformFloorSetting.verify|verify} messages.
                     * @param message AiPlatformFloorSetting message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.modelarmor.v1.IAiPlatformFloorSetting, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AiPlatformFloorSetting message, length delimited. Does not implicitly {@link google.cloud.modelarmor.v1.AiPlatformFloorSetting.verify|verify} messages.
                     * @param message AiPlatformFloorSetting message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.modelarmor.v1.IAiPlatformFloorSetting, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AiPlatformFloorSetting message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AiPlatformFloorSetting
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.modelarmor.v1.AiPlatformFloorSetting;

                    /**
                     * Decodes an AiPlatformFloorSetting message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AiPlatformFloorSetting
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.modelarmor.v1.AiPlatformFloorSetting;

                    /**
                     * Verifies an AiPlatformFloorSetting message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AiPlatformFloorSetting message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AiPlatformFloorSetting
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.modelarmor.v1.AiPlatformFloorSetting;

                    /**
                     * Creates a plain object from an AiPlatformFloorSetting message. Also converts values to other types if specified.
                     * @param message AiPlatformFloorSetting
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.modelarmor.v1.AiPlatformFloorSetting, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AiPlatformFloorSetting to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AiPlatformFloorSetting
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListTemplatesRequest. */
                interface IListTemplatesRequest {

                    /** ListTemplatesRequest parent */
                    parent?: (string|null);

                    /** ListTemplatesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListTemplatesRequest pageToken */
                    pageToken?: (string|null);

                    /** ListTemplatesRequest filter */
                    filter?: (string|null);

                    /** ListTemplatesRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListTemplatesRequest. */
                class ListTemplatesRequest implements IListTemplatesRequest {

                    /**
                     * Constructs a new ListTemplatesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.modelarmor.v1.IListTemplatesRequest);

                    /** ListTemplatesRequest parent. */
                    public parent: string;

                    /** ListTemplatesRequest pageSize. */
                    public pageSize: number;

                    /** ListTemplatesRequest pageToken. */
                    public pageToken: string;

                    /** ListTemplatesRequest filter. */
                    public filter: string;

                    /** ListTemplatesRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListTemplatesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListTemplatesRequest instance
                     */
                    public static create(properties?: google.cloud.modelarmor.v1.IListTemplatesRequest): google.cloud.modelarmor.v1.ListTemplatesRequest;

                    /**
                     * Encodes the specified ListTemplatesRequest message. Does not implicitly {@link google.cloud.modelarmor.v1.ListTemplatesRequest.verify|verify} messages.
                     * @param message ListTemplatesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.modelarmor.v1.IListTemplatesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListTemplatesRequest message, length delimited. Does not implicitly {@link google.cloud.modelarmor.v1.ListTemplatesRequest.verify|verify} messages.
                     * @param message ListTemplatesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.modelarmor.v1.IListTemplatesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListTemplatesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListTemplatesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.modelarmor.v1.ListTemplatesRequest;

                    /**
                     * Decodes a ListTemplatesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListTemplatesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.modelarmor.v1.ListTemplatesRequest;

                    /**
                     * Verifies a ListTemplatesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListTemplatesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListTemplatesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.modelarmor.v1.ListTemplatesRequest;

                    /**
                     * Creates a plain object from a ListTemplatesRequest message. Also converts values to other types if specified.
                     * @param message ListTemplatesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.modelarmor.v1.ListTemplatesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListTemplatesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListTemplatesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListTemplatesResponse. */
                interface IListTemplatesResponse {

                    /** ListTemplatesResponse templates */
                    templates?: (google.cloud.modelarmor.v1.ITemplate[]|null);

                    /** ListTemplatesResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListTemplatesResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListTemplatesResponse. */
                class ListTemplatesResponse implements IListTemplatesResponse {

                    /**
                     * Constructs a new ListTemplatesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.modelarmor.v1.IListTemplatesResponse);

                    /** ListTemplatesResponse templates. */
                    public templates: google.cloud.modelarmor.v1.ITemplate[];

                    /** ListTemplatesResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListTemplatesResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListTemplatesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListTemplatesResponse instance
                     */
                    public static create(properties?: google.cloud.modelarmor.v1.IListTemplatesResponse): google.cloud.modelarmor.v1.ListTemplatesResponse;

                    /**
                     * Encodes the specified ListTemplatesResponse message. Does not implicitly {@link google.cloud.modelarmor.v1.ListTemplatesResponse.verify|verify} messages.
                     * @param message ListTemplatesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.modelarmor.v1.IListTemplatesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListTemplatesResponse message, length delimited. Does not implicitly {@link google.cloud.modelarmor.v1.ListTemplatesResponse.verify|verify} messages.
                     * @param message ListTemplatesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.modelarmor.v1.IListTemplatesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListTemplatesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListTemplatesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.modelarmor.v1.ListTemplatesResponse;

                    /**
                     * Decodes a ListTemplatesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListTemplatesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.modelarmor.v1.ListTemplatesResponse;

                    /**
                     * Verifies a ListTemplatesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListTemplatesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListTemplatesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.modelarmor.v1.ListTemplatesResponse;

                    /**
                     * Creates a plain object from a ListTemplatesResponse message. Also converts values to other types if specified.
                     * @param message ListTemplatesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.modelarmor.v1.ListTemplatesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListTemplatesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListTemplatesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetTemplateRequest. */
                interface IGetTemplateRequest {

                    /** GetTemplateRequest name */
                    name?: (string|null);
                }

                /** Represents a GetTemplateRequest. */
                class GetTemplateRequest implements IGetTemplateRequest {

                    /**
                     * Constructs a new GetTemplateRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.modelarmor.v1.IGetTemplateRequest);

                    /** GetTemplateRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetTemplateRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetTemplateRequest instance
                     */
                    public static create(properties?: google.cloud.modelarmor.v1.IGetTemplateRequest): google.cloud.modelarmor.v1.GetTemplateRequest;

                    /**
                     * Encodes the specified GetTemplateRequest message. Does not implicitly {@link google.cloud.modelarmor.v1.GetTemplateRequest.verify|verify} messages.
                     * @param message GetTemplateRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.modelarmor.v1.IGetTemplateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetTemplateRequest message, length delimited. Does not implicitly {@link google.cloud.modelarmor.v1.GetTemplateRequest.verify|verify} messages.
                     * @param message GetTemplateRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.modelarmor.v1.IGetTemplateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetTemplateRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetTemplateRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.modelarmor.v1.GetTemplateRequest;

                    /**
                     * Decodes a GetTemplateRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetTemplateRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.modelarmor.v1.GetTemplateRequest;

                    /**
                     * Verifies a GetTemplateRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetTemplateRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetTemplateRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.modelarmor.v1.GetTemplateRequest;

                    /**
                     * Creates a plain object from a GetTemplateRequest message. Also converts values to other types if specified.
                     * @param message GetTemplateRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.modelarmor.v1.GetTemplateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetTemplateRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetTemplateRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateTemplateRequest. */
                interface ICreateTemplateRequest {

                    /** CreateTemplateRequest parent */
                    parent?: (string|null);

                    /** CreateTemplateRequest templateId */
                    templateId?: (string|null);

                    /** CreateTemplateRequest template */
                    template?: (google.cloud.modelarmor.v1.ITemplate|null);

                    /** CreateTemplateRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a CreateTemplateRequest. */
                class CreateTemplateRequest implements ICreateTemplateRequest {

                    /**
                     * Constructs a new CreateTemplateRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.modelarmor.v1.ICreateTemplateRequest);

                    /** CreateTemplateRequest parent. */
                    public parent: string;

                    /** CreateTemplateRequest templateId. */
                    public templateId: string;

                    /** CreateTemplateRequest template. */
                    public template?: (google.cloud.modelarmor.v1.ITemplate|null);

                    /** CreateTemplateRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new CreateTemplateRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateTemplateRequest instance
                     */
                    public static create(properties?: google.cloud.modelarmor.v1.ICreateTemplateRequest): google.cloud.modelarmor.v1.CreateTemplateRequest;

                    /**
                     * Encodes the specified CreateTemplateRequest message. Does not implicitly {@link google.cloud.modelarmor.v1.CreateTemplateRequest.verify|verify} messages.
                     * @param message CreateTemplateRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.modelarmor.v1.ICreateTemplateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateTemplateRequest message, length delimited. Does not implicitly {@link google.cloud.modelarmor.v1.CreateTemplateRequest.verify|verify} messages.
                     * @param message CreateTemplateRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.modelarmor.v1.ICreateTemplateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateTemplateRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateTemplateRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.modelarmor.v1.CreateTemplateRequest;

                    /**
                     * Decodes a CreateTemplateRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateTemplateRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.modelarmor.v1.CreateTemplateRequest;

                    /**
                     * Verifies a CreateTemplateRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateTemplateRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateTemplateRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.modelarmor.v1.CreateTemplateRequest;

                    /**
                     * Creates a plain object from a CreateTemplateRequest message. Also converts values to other types if specified.
                     * @param message CreateTemplateRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.modelarmor.v1.CreateTemplateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateTemplateRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateTemplateRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateTemplateRequest. */
                interface IUpdateTemplateRequest {

                    /** UpdateTemplateRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateTemplateRequest template */
                    template?: (google.cloud.modelarmor.v1.ITemplate|null);

                    /** UpdateTemplateRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents an UpdateTemplateRequest. */
                class UpdateTemplateRequest implements IUpdateTemplateRequest {

                    /**
                     * Constructs a new UpdateTemplateRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.modelarmor.v1.IUpdateTemplateRequest);

                    /** UpdateTemplateRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateTemplateRequest template. */
                    public template?: (google.cloud.modelarmor.v1.ITemplate|null);

                    /** UpdateTemplateRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new UpdateTemplateRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateTemplateRequest instance
                     */
                    public static create(properties?: google.cloud.modelarmor.v1.IUpdateTemplateRequest): google.cloud.modelarmor.v1.UpdateTemplateRequest;

                    /**
                     * Encodes the specified UpdateTemplateRequest message. Does not implicitly {@link google.cloud.modelarmor.v1.UpdateTemplateRequest.verify|verify} messages.
                     * @param message UpdateTemplateRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.modelarmor.v1.IUpdateTemplateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateTemplateRequest message, length delimited. Does not implicitly {@link google.cloud.modelarmor.v1.UpdateTemplateRequest.verify|verify} messages.
                     * @param message UpdateTemplateRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.modelarmor.v1.IUpdateTemplateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateTemplateRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateTemplateRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.modelarmor.v1.UpdateTemplateRequest;

                    /**
                     * Decodes an UpdateTemplateRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateTemplateRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.modelarmor.v1.UpdateTemplateRequest;

                    /**
                     * Verifies an UpdateTemplateRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateTemplateRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateTemplateRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.modelarmor.v1.UpdateTemplateRequest;

                    /**
                     * Creates a plain object from an UpdateTemplateRequest message. Also converts values to other types if specified.
                     * @param message UpdateTemplateRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.modelarmor.v1.UpdateTemplateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateTemplateRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateTemplateRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteTemplateRequest. */
                interface IDeleteTemplateRequest {

                    /** DeleteTemplateRequest name */
                    name?: (string|null);

                    /** DeleteTemplateRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a DeleteTemplateRequest. */
                class DeleteTemplateRequest implements IDeleteTemplateRequest {

                    /**
                     * Constructs a new DeleteTemplateRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.modelarmor.v1.IDeleteTemplateRequest);

                    /** DeleteTemplateRequest name. */
                    public name: string;

                    /** DeleteTemplateRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new DeleteTemplateRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteTemplateRequest instance
                     */
                    public static create(properties?: google.cloud.modelarmor.v1.IDeleteTemplateRequest): google.cloud.modelarmor.v1.DeleteTemplateRequest;

                    /**
                     * Encodes the specified DeleteTemplateRequest message. Does not implicitly {@link google.cloud.modelarmor.v1.DeleteTemplateRequest.verify|verify} messages.
                     * @param message DeleteTemplateRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.modelarmor.v1.IDeleteTemplateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteTemplateRequest message, length delimited. Does not implicitly {@link google.cloud.modelarmor.v1.DeleteTemplateRequest.verify|verify} messages.
                     * @param message DeleteTemplateRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.modelarmor.v1.IDeleteTemplateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteTemplateRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteTemplateRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.modelarmor.v1.DeleteTemplateRequest;

                    /**
                     * Decodes a DeleteTemplateRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteTemplateRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.modelarmor.v1.DeleteTemplateRequest;

                    /**
                     * Verifies a DeleteTemplateRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteTemplateRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteTemplateRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.modelarmor.v1.DeleteTemplateRequest;

                    /**
                     * Creates a plain object from a DeleteTemplateRequest message. Also converts values to other types if specified.
                     * @param message DeleteTemplateRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.modelarmor.v1.DeleteTemplateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteTemplateRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteTemplateRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetFloorSettingRequest. */
                interface IGetFloorSettingRequest {

                    /** GetFloorSettingRequest name */
                    name?: (string|null);
                }

                /** Represents a GetFloorSettingRequest. */
                class GetFloorSettingRequest implements IGetFloorSettingRequest {

                    /**
                     * Constructs a new GetFloorSettingRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.modelarmor.v1.IGetFloorSettingRequest);

                    /** GetFloorSettingRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetFloorSettingRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetFloorSettingRequest instance
                     */
                    public static create(properties?: google.cloud.modelarmor.v1.IGetFloorSettingRequest): google.cloud.modelarmor.v1.GetFloorSettingRequest;

                    /**
                     * Encodes the specified GetFloorSettingRequest message. Does not implicitly {@link google.cloud.modelarmor.v1.GetFloorSettingRequest.verify|verify} messages.
                     * @param message GetFloorSettingRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.modelarmor.v1.IGetFloorSettingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetFloorSettingRequest message, length delimited. Does not implicitly {@link google.cloud.modelarmor.v1.GetFloorSettingRequest.verify|verify} messages.
                     * @param message GetFloorSettingRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.modelarmor.v1.IGetFloorSettingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetFloorSettingRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetFloorSettingRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.modelarmor.v1.GetFloorSettingRequest;

                    /**
                     * Decodes a GetFloorSettingRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetFloorSettingRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.modelarmor.v1.GetFloorSettingRequest;

                    /**
                     * Verifies a GetFloorSettingRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetFloorSettingRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetFloorSettingRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.modelarmor.v1.GetFloorSettingRequest;

                    /**
                     * Creates a plain object from a GetFloorSettingRequest message. Also converts values to other types if specified.
                     * @param message GetFloorSettingRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.modelarmor.v1.GetFloorSettingRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetFloorSettingRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetFloorSettingRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateFloorSettingRequest. */
                interface IUpdateFloorSettingRequest {

                    /** UpdateFloorSettingRequest floorSetting */
                    floorSetting?: (google.cloud.modelarmor.v1.IFloorSetting|null);

                    /** UpdateFloorSettingRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateFloorSettingRequest. */
                class UpdateFloorSettingRequest implements IUpdateFloorSettingRequest {

                    /**
                     * Constructs a new UpdateFloorSettingRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.modelarmor.v1.IUpdateFloorSettingRequest);

                    /** UpdateFloorSettingRequest floorSetting. */
                    public floorSetting?: (google.cloud.modelarmor.v1.IFloorSetting|null);

                    /** UpdateFloorSettingRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateFloorSettingRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateFloorSettingRequest instance
                     */
                    public static create(properties?: google.cloud.modelarmor.v1.IUpdateFloorSettingRequest): google.cloud.modelarmor.v1.UpdateFloorSettingRequest;

                    /**
                     * Encodes the specified UpdateFloorSettingRequest message. Does not implicitly {@link google.cloud.modelarmor.v1.UpdateFloorSettingRequest.verify|verify} messages.
                     * @param message UpdateFloorSettingRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.modelarmor.v1.IUpdateFloorSettingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateFloorSettingRequest message, length delimited. Does not implicitly {@link google.cloud.modelarmor.v1.UpdateFloorSettingRequest.verify|verify} messages.
                     * @param message UpdateFloorSettingRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.modelarmor.v1.IUpdateFloorSettingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateFloorSettingRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateFloorSettingRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.modelarmor.v1.UpdateFloorSettingRequest;

                    /**
                     * Decodes an UpdateFloorSettingRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateFloorSettingRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.modelarmor.v1.UpdateFloorSettingRequest;

                    /**
                     * Verifies an UpdateFloorSettingRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateFloorSettingRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateFloorSettingRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.modelarmor.v1.UpdateFloorSettingRequest;

                    /**
                     * Creates a plain object from an UpdateFloorSettingRequest message. Also converts values to other types if specified.
                     * @param message UpdateFloorSettingRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.modelarmor.v1.UpdateFloorSettingRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateFloorSettingRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateFloorSettingRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a FilterConfig. */
                interface IFilterConfig {

                    /** FilterConfig raiSettings */
                    raiSettings?: (google.cloud.modelarmor.v1.IRaiFilterSettings|null);

                    /** FilterConfig sdpSettings */
                    sdpSettings?: (google.cloud.modelarmor.v1.ISdpFilterSettings|null);

                    /** FilterConfig piAndJailbreakFilterSettings */
                    piAndJailbreakFilterSettings?: (google.cloud.modelarmor.v1.IPiAndJailbreakFilterSettings|null);

                    /** FilterConfig maliciousUriFilterSettings */
                    maliciousUriFilterSettings?: (google.cloud.modelarmor.v1.IMaliciousUriFilterSettings|null);
                }

                /** Represents a FilterConfig. */
                class FilterConfig implements IFilterConfig {

                    /**
                     * Constructs a new FilterConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.modelarmor.v1.IFilterConfig);

                    /** FilterConfig raiSettings. */
                    public raiSettings?: (google.cloud.modelarmor.v1.IRaiFilterSettings|null);

                    /** FilterConfig sdpSettings. */
                    public sdpSettings?: (google.cloud.modelarmor.v1.ISdpFilterSettings|null);

                    /** FilterConfig piAndJailbreakFilterSettings. */
                    public piAndJailbreakFilterSettings?: (google.cloud.modelarmor.v1.IPiAndJailbreakFilterSettings|null);

                    /** FilterConfig maliciousUriFilterSettings. */
                    public maliciousUriFilterSettings?: (google.cloud.modelarmor.v1.IMaliciousUriFilterSettings|null);

                    /**
                     * Creates a new FilterConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns FilterConfig instance
                     */
                    public static create(properties?: google.cloud.modelarmor.v1.IFilterConfig): google.cloud.modelarmor.v1.FilterConfig;

                    /**
                     * Encodes the specified FilterConfig message. Does not implicitly {@link google.cloud.modelarmor.v1.FilterConfig.verify|verify} messages.
                     * @param message FilterConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.modelarmor.v1.IFilterConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified FilterConfig message, length delimited. Does not implicitly {@link google.cloud.modelarmor.v1.FilterConfig.verify|verify} messages.
                     * @param message FilterConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.modelarmor.v1.IFilterConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a FilterConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FilterConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.modelarmor.v1.FilterConfig;

                    /**
                     * Decodes a FilterConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns FilterConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.modelarmor.v1.FilterConfig;

                    /**
                     * Verifies a FilterConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a FilterConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns FilterConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.modelarmor.v1.FilterConfig;

                    /**
                     * Creates a plain object from a FilterConfig message. Also converts values to other types if specified.
                     * @param message FilterConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.modelarmor.v1.FilterConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this FilterConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for FilterConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a PiAndJailbreakFilterSettings. */
                interface IPiAndJailbreakFilterSettings {

                    /** PiAndJailbreakFilterSettings filterEnforcement */
                    filterEnforcement?: (google.cloud.modelarmor.v1.PiAndJailbreakFilterSettings.PiAndJailbreakFilterEnforcement|keyof typeof google.cloud.modelarmor.v1.PiAndJailbreakFilterSettings.PiAndJailbreakFilterEnforcement|null);

                    /** PiAndJailbreakFilterSettings confidenceLevel */
                    confidenceLevel?: (google.cloud.modelarmor.v1.DetectionConfidenceLevel|keyof typeof google.cloud.modelarmor.v1.DetectionConfidenceLevel|null);
                }

                /** Represents a PiAndJailbreakFilterSettings. */
                class PiAndJailbreakFilterSettings implements IPiAndJailbreakFilterSettings {

                    /**
                     * Constructs a new PiAndJailbreakFilterSettings.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.modelarmor.v1.IPiAndJailbreakFilterSettings);

                    /** PiAndJailbreakFilterSettings filterEnforcement. */
                    public filterEnforcement: (google.cloud.modelarmor.v1.PiAndJailbreakFilterSettings.PiAndJailbreakFilterEnforcement|keyof typeof google.cloud.modelarmor.v1.PiAndJailbreakFilterSettings.PiAndJailbreakFilterEnforcement);

                    /** PiAndJailbreakFilterSettings confidenceLevel. */
                    public confidenceLevel: (google.cloud.modelarmor.v1.DetectionConfidenceLevel|keyof typeof google.cloud.modelarmor.v1.DetectionConfidenceLevel);

                    /**
                     * Creates a new PiAndJailbreakFilterSettings instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PiAndJailbreakFilterSettings instance
                     */
                    public static create(properties?: google.cloud.modelarmor.v1.IPiAndJailbreakFilterSettings): google.cloud.modelarmor.v1.PiAndJailbreakFilterSettings;

                    /**
                     * Encodes the specified PiAndJailbreakFilterSettings message. Does not implicitly {@link google.cloud.modelarmor.v1.PiAndJailbreakFilterSettings.verify|verify} messages.
                     * @param message PiAndJailbreakFilterSettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.modelarmor.v1.IPiAndJailbreakFilterSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PiAndJailbreakFilterSettings message, length delimited. Does not implicitly {@link google.cloud.modelarmor.v1.PiAndJailbreakFilterSettings.verify|verify} messages.
                     * @param message PiAndJailbreakFilterSettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.modelarmor.v1.IPiAndJailbreakFilterSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PiAndJailbreakFilterSettings message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PiAndJailbreakFilterSettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.modelarmor.v1.PiAndJailbreakFilterSettings;

                    /**
                     * Decodes a PiAndJailbreakFilterSettings message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PiAndJailbreakFilterSettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.modelarmor.v1.PiAndJailbreakFilterSettings;

                    /**
                     * Verifies a PiAndJailbreakFilterSettings message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PiAndJailbreakFilterSettings message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PiAndJailbreakFilterSettings
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.modelarmor.v1.PiAndJailbreakFilterSettings;

                    /**
                     * Creates a plain object from a PiAndJailbreakFilterSettings message. Also converts values to other types if specified.
                     * @param message PiAndJailbreakFilterSettings
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.modelarmor.v1.PiAndJailbreakFilterSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PiAndJailbreakFilterSettings to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for PiAndJailbreakFilterSettings
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace PiAndJailbreakFilterSettings {

                    /** PiAndJailbreakFilterEnforcement enum. */
                    enum PiAndJailbreakFilterEnforcement {
                        PI_AND_JAILBREAK_FILTER_ENFORCEMENT_UNSPECIFIED = 0,
                        ENABLED = 1,
                        DISABLED = 2
                    }
                }

                /** Properties of a MaliciousUriFilterSettings. */
                interface IMaliciousUriFilterSettings {

                    /** MaliciousUriFilterSettings filterEnforcement */
                    filterEnforcement?: (google.cloud.modelarmor.v1.MaliciousUriFilterSettings.MaliciousUriFilterEnforcement|keyof typeof google.cloud.modelarmor.v1.MaliciousUriFilterSettings.MaliciousUriFilterEnforcement|null);
                }

                /** Represents a MaliciousUriFilterSettings. */
                class MaliciousUriFilterSettings implements IMaliciousUriFilterSettings {

                    /**
                     * Constructs a new MaliciousUriFilterSettings.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.modelarmor.v1.IMaliciousUriFilterSettings);

                    /** MaliciousUriFilterSettings filterEnforcement. */
                    public filterEnforcement: (google.cloud.modelarmor.v1.MaliciousUriFilterSettings.MaliciousUriFilterEnforcement|keyof typeof google.cloud.modelarmor.v1.MaliciousUriFilterSettings.MaliciousUriFilterEnforcement);

                    /**
                     * Creates a new MaliciousUriFilterSettings instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MaliciousUriFilterSettings instance
                     */
                    public static create(properties?: google.cloud.modelarmor.v1.IMaliciousUriFilterSettings): google.cloud.modelarmor.v1.MaliciousUriFilterSettings;

                    /**
                     * Encodes the specified MaliciousUriFilterSettings message. Does not implicitly {@link google.cloud.modelarmor.v1.MaliciousUriFilterSettings.verify|verify} messages.
                     * @param message MaliciousUriFilterSettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.modelarmor.v1.IMaliciousUriFilterSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MaliciousUriFilterSettings message, length delimited. Does not implicitly {@link google.cloud.modelarmor.v1.MaliciousUriFilterSettings.verify|verify} messages.
                     * @param message MaliciousUriFilterSettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.modelarmor.v1.IMaliciousUriFilterSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MaliciousUriFilterSettings message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MaliciousUriFilterSettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.modelarmor.v1.MaliciousUriFilterSettings;

                    /**
                     * Decodes a MaliciousUriFilterSettings message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MaliciousUriFilterSettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.modelarmor.v1.MaliciousUriFilterSettings;

                    /**
                     * Verifies a MaliciousUriFilterSettings message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MaliciousUriFilterSettings message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MaliciousUriFilterSettings
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.modelarmor.v1.MaliciousUriFilterSettings;

                    /**
                     * Creates a plain object from a MaliciousUriFilterSettings message. Also converts values to other types if specified.
                     * @param message MaliciousUriFilterSettings
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.modelarmor.v1.MaliciousUriFilterSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MaliciousUriFilterSettings to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for MaliciousUriFilterSettings
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace MaliciousUriFilterSettings {

                    /** MaliciousUriFilterEnforcement enum. */
                    enum MaliciousUriFilterEnforcement {
                        MALICIOUS_URI_FILTER_ENFORCEMENT_UNSPECIFIED = 0,
                        ENABLED = 1,
                        DISABLED = 2
                    }
                }

                /** Properties of a RaiFilterSettings. */
                interface IRaiFilterSettings {

                    /** RaiFilterSettings raiFilters */
                    raiFilters?: (google.cloud.modelarmor.v1.RaiFilterSettings.IRaiFilter[]|null);
                }

                /** Represents a RaiFilterSettings. */
                class RaiFilterSettings implements IRaiFilterSettings {

                    /**
                     * Constructs a new RaiFilterSettings.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.modelarmor.v1.IRaiFilterSettings);

                    /** RaiFilterSettings raiFilters. */
                    public raiFilters: google.cloud.modelarmor.v1.RaiFilterSettings.IRaiFilter[];

                    /**
                     * Creates a new RaiFilterSettings instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RaiFilterSettings instance
                     */
                    public static create(properties?: google.cloud.modelarmor.v1.IRaiFilterSettings): google.cloud.modelarmor.v1.RaiFilterSettings;

                    /**
                     * Encodes the specified RaiFilterSettings message. Does not implicitly {@link google.cloud.modelarmor.v1.RaiFilterSettings.verify|verify} messages.
                     * @param message RaiFilterSettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.modelarmor.v1.IRaiFilterSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RaiFilterSettings message, length delimited. Does not implicitly {@link google.cloud.modelarmor.v1.RaiFilterSettings.verify|verify} messages.
                     * @param message RaiFilterSettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.modelarmor.v1.IRaiFilterSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RaiFilterSettings message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RaiFilterSettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.modelarmor.v1.RaiFilterSettings;

                    /**
                     * Decodes a RaiFilterSettings message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RaiFilterSettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.modelarmor.v1.RaiFilterSettings;

                    /**
                     * Verifies a RaiFilterSettings message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RaiFilterSettings message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RaiFilterSettings
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.modelarmor.v1.RaiFilterSettings;

                    /**
                     * Creates a plain object from a RaiFilterSettings message. Also converts values to other types if specified.
                     * @param message RaiFilterSettings
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.modelarmor.v1.RaiFilterSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RaiFilterSettings to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RaiFilterSettings
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace RaiFilterSettings {

                    /** Properties of a RaiFilter. */
                    interface IRaiFilter {

                        /** RaiFilter filterType */
                        filterType?: (google.cloud.modelarmor.v1.RaiFilterType|keyof typeof google.cloud.modelarmor.v1.RaiFilterType|null);

                        /** RaiFilter confidenceLevel */
                        confidenceLevel?: (google.cloud.modelarmor.v1.DetectionConfidenceLevel|keyof typeof google.cloud.modelarmor.v1.DetectionConfidenceLevel|null);
                    }

                    /** Represents a RaiFilter. */
                    class RaiFilter implements IRaiFilter {

                        /**
                         * Constructs a new RaiFilter.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.modelarmor.v1.RaiFilterSettings.IRaiFilter);

                        /** RaiFilter filterType. */
                        public filterType: (google.cloud.modelarmor.v1.RaiFilterType|keyof typeof google.cloud.modelarmor.v1.RaiFilterType);

                        /** RaiFilter confidenceLevel. */
                        public confidenceLevel: (google.cloud.modelarmor.v1.DetectionConfidenceLevel|keyof typeof google.cloud.modelarmor.v1.DetectionConfidenceLevel);

                        /**
                         * Creates a new RaiFilter instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns RaiFilter instance
                         */
                        public static create(properties?: google.cloud.modelarmor.v1.RaiFilterSettings.IRaiFilter): google.cloud.modelarmor.v1.RaiFilterSettings.RaiFilter;

                        /**
                         * Encodes the specified RaiFilter message. Does not implicitly {@link google.cloud.modelarmor.v1.RaiFilterSettings.RaiFilter.verify|verify} messages.
                         * @param message RaiFilter message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.modelarmor.v1.RaiFilterSettings.IRaiFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified RaiFilter message, length delimited. Does not implicitly {@link google.cloud.modelarmor.v1.RaiFilterSettings.RaiFilter.verify|verify} messages.
                         * @param message RaiFilter message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.modelarmor.v1.RaiFilterSettings.IRaiFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a RaiFilter message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns RaiFilter
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.modelarmor.v1.RaiFilterSettings.RaiFilter;

                        /**
                         * Decodes a RaiFilter message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns RaiFilter
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.modelarmor.v1.RaiFilterSettings.RaiFilter;

                        /**
                         * Verifies a RaiFilter message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a RaiFilter message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns RaiFilter
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.modelarmor.v1.RaiFilterSettings.RaiFilter;

                        /**
                         * Creates a plain object from a RaiFilter message. Also converts values to other types if specified.
                         * @param message RaiFilter
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.modelarmor.v1.RaiFilterSettings.RaiFilter, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this RaiFilter to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for RaiFilter
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of a SdpFilterSettings. */
                interface ISdpFilterSettings {

                    /** SdpFilterSettings basicConfig */
                    basicConfig?: (google.cloud.modelarmor.v1.ISdpBasicConfig|null);

                    /** SdpFilterSettings advancedConfig */
                    advancedConfig?: (google.cloud.modelarmor.v1.ISdpAdvancedConfig|null);
                }

                /** Represents a SdpFilterSettings. */
                class SdpFilterSettings implements ISdpFilterSettings {

                    /**
                     * Constructs a new SdpFilterSettings.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.modelarmor.v1.ISdpFilterSettings);

                    /** SdpFilterSettings basicConfig. */
                    public basicConfig?: (google.cloud.modelarmor.v1.ISdpBasicConfig|null);

                    /** SdpFilterSettings advancedConfig. */
                    public advancedConfig?: (google.cloud.modelarmor.v1.ISdpAdvancedConfig|null);

                    /** SdpFilterSettings sdpConfiguration. */
                    public sdpConfiguration?: ("basicConfig"|"advancedConfig");

                    /**
                     * Creates a new SdpFilterSettings instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SdpFilterSettings instance
                     */
                    public static create(properties?: google.cloud.modelarmor.v1.ISdpFilterSettings): google.cloud.modelarmor.v1.SdpFilterSettings;

                    /**
                     * Encodes the specified SdpFilterSettings message. Does not implicitly {@link google.cloud.modelarmor.v1.SdpFilterSettings.verify|verify} messages.
                     * @param message SdpFilterSettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.modelarmor.v1.ISdpFilterSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SdpFilterSettings message, length delimited. Does not implicitly {@link google.cloud.modelarmor.v1.SdpFilterSettings.verify|verify} messages.
                     * @param message SdpFilterSettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.modelarmor.v1.ISdpFilterSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SdpFilterSettings message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SdpFilterSettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.modelarmor.v1.SdpFilterSettings;

                    /**
                     * Decodes a SdpFilterSettings message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SdpFilterSettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.modelarmor.v1.SdpFilterSettings;

                    /**
                     * Verifies a SdpFilterSettings message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SdpFilterSettings message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SdpFilterSettings
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.modelarmor.v1.SdpFilterSettings;

                    /**
                     * Creates a plain object from a SdpFilterSettings message. Also converts values to other types if specified.
                     * @param message SdpFilterSettings
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.modelarmor.v1.SdpFilterSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SdpFilterSettings to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SdpFilterSettings
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a SdpBasicConfig. */
                interface ISdpBasicConfig {

                    /** SdpBasicConfig filterEnforcement */
                    filterEnforcement?: (google.cloud.modelarmor.v1.SdpBasicConfig.SdpBasicConfigEnforcement|keyof typeof google.cloud.modelarmor.v1.SdpBasicConfig.SdpBasicConfigEnforcement|null);
                }

                /** Represents a SdpBasicConfig. */
                class SdpBasicConfig implements ISdpBasicConfig {

                    /**
                     * Constructs a new SdpBasicConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.modelarmor.v1.ISdpBasicConfig);

                    /** SdpBasicConfig filterEnforcement. */
                    public filterEnforcement: (google.cloud.modelarmor.v1.SdpBasicConfig.SdpBasicConfigEnforcement|keyof typeof google.cloud.modelarmor.v1.SdpBasicConfig.SdpBasicConfigEnforcement);

                    /**
                     * Creates a new SdpBasicConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SdpBasicConfig instance
                     */
                    public static create(properties?: google.cloud.modelarmor.v1.ISdpBasicConfig): google.cloud.modelarmor.v1.SdpBasicConfig;

                    /**
                     * Encodes the specified SdpBasicConfig message. Does not implicitly {@link google.cloud.modelarmor.v1.SdpBasicConfig.verify|verify} messages.
                     * @param message SdpBasicConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.modelarmor.v1.ISdpBasicConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SdpBasicConfig message, length delimited. Does not implicitly {@link google.cloud.modelarmor.v1.SdpBasicConfig.verify|verify} messages.
                     * @param message SdpBasicConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.modelarmor.v1.ISdpBasicConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SdpBasicConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SdpBasicConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.modelarmor.v1.SdpBasicConfig;

                    /**
                     * Decodes a SdpBasicConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SdpBasicConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.modelarmor.v1.SdpBasicConfig;

                    /**
                     * Verifies a SdpBasicConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SdpBasicConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SdpBasicConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.modelarmor.v1.SdpBasicConfig;

                    /**
                     * Creates a plain object from a SdpBasicConfig message. Also converts values to other types if specified.
                     * @param message SdpBasicConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.modelarmor.v1.SdpBasicConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SdpBasicConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SdpBasicConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace SdpBasicConfig {

                    /** SdpBasicConfigEnforcement enum. */
                    enum SdpBasicConfigEnforcement {
                        SDP_BASIC_CONFIG_ENFORCEMENT_UNSPECIFIED = 0,
                        ENABLED = 1,
                        DISABLED = 2
                    }
                }

                /** Properties of a SdpAdvancedConfig. */
                interface ISdpAdvancedConfig {

                    /** SdpAdvancedConfig inspectTemplate */
                    inspectTemplate?: (string|null);

                    /** SdpAdvancedConfig deidentifyTemplate */
                    deidentifyTemplate?: (string|null);
                }

                /** Represents a SdpAdvancedConfig. */
                class SdpAdvancedConfig implements ISdpAdvancedConfig {

                    /**
                     * Constructs a new SdpAdvancedConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.modelarmor.v1.ISdpAdvancedConfig);

                    /** SdpAdvancedConfig inspectTemplate. */
                    public inspectTemplate: string;

                    /** SdpAdvancedConfig deidentifyTemplate. */
                    public deidentifyTemplate: string;

                    /**
                     * Creates a new SdpAdvancedConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SdpAdvancedConfig instance
                     */
                    public static create(properties?: google.cloud.modelarmor.v1.ISdpAdvancedConfig): google.cloud.modelarmor.v1.SdpAdvancedConfig;

                    /**
                     * Encodes the specified SdpAdvancedConfig message. Does not implicitly {@link google.cloud.modelarmor.v1.SdpAdvancedConfig.verify|verify} messages.
                     * @param message SdpAdvancedConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.modelarmor.v1.ISdpAdvancedConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SdpAdvancedConfig message, length delimited. Does not implicitly {@link google.cloud.modelarmor.v1.SdpAdvancedConfig.verify|verify} messages.
                     * @param message SdpAdvancedConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.modelarmor.v1.ISdpAdvancedConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SdpAdvancedConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SdpAdvancedConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.modelarmor.v1.SdpAdvancedConfig;

                    /**
                     * Decodes a SdpAdvancedConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SdpAdvancedConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.modelarmor.v1.SdpAdvancedConfig;

                    /**
                     * Verifies a SdpAdvancedConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SdpAdvancedConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SdpAdvancedConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.modelarmor.v1.SdpAdvancedConfig;

                    /**
                     * Creates a plain object from a SdpAdvancedConfig message. Also converts values to other types if specified.
                     * @param message SdpAdvancedConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.modelarmor.v1.SdpAdvancedConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SdpAdvancedConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SdpAdvancedConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a SanitizeUserPromptRequest. */
                interface ISanitizeUserPromptRequest {

                    /** SanitizeUserPromptRequest name */
                    name?: (string|null);

                    /** SanitizeUserPromptRequest userPromptData */
                    userPromptData?: (google.cloud.modelarmor.v1.IDataItem|null);

                    /** SanitizeUserPromptRequest multiLanguageDetectionMetadata */
                    multiLanguageDetectionMetadata?: (google.cloud.modelarmor.v1.IMultiLanguageDetectionMetadata|null);
                }

                /** Represents a SanitizeUserPromptRequest. */
                class SanitizeUserPromptRequest implements ISanitizeUserPromptRequest {

                    /**
                     * Constructs a new SanitizeUserPromptRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.modelarmor.v1.ISanitizeUserPromptRequest);

                    /** SanitizeUserPromptRequest name. */
                    public name: string;

                    /** SanitizeUserPromptRequest userPromptData. */
                    public userPromptData?: (google.cloud.modelarmor.v1.IDataItem|null);

                    /** SanitizeUserPromptRequest multiLanguageDetectionMetadata. */
                    public multiLanguageDetectionMetadata?: (google.cloud.modelarmor.v1.IMultiLanguageDetectionMetadata|null);

                    /**
                     * Creates a new SanitizeUserPromptRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SanitizeUserPromptRequest instance
                     */
                    public static create(properties?: google.cloud.modelarmor.v1.ISanitizeUserPromptRequest): google.cloud.modelarmor.v1.SanitizeUserPromptRequest;

                    /**
                     * Encodes the specified SanitizeUserPromptRequest message. Does not implicitly {@link google.cloud.modelarmor.v1.SanitizeUserPromptRequest.verify|verify} messages.
                     * @param message SanitizeUserPromptRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.modelarmor.v1.ISanitizeUserPromptRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SanitizeUserPromptRequest message, length delimited. Does not implicitly {@link google.cloud.modelarmor.v1.SanitizeUserPromptRequest.verify|verify} messages.
                     * @param message SanitizeUserPromptRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.modelarmor.v1.ISanitizeUserPromptRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SanitizeUserPromptRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SanitizeUserPromptRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.modelarmor.v1.SanitizeUserPromptRequest;

                    /**
                     * Decodes a SanitizeUserPromptRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SanitizeUserPromptRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.modelarmor.v1.SanitizeUserPromptRequest;

                    /**
                     * Verifies a SanitizeUserPromptRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SanitizeUserPromptRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SanitizeUserPromptRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.modelarmor.v1.SanitizeUserPromptRequest;

                    /**
                     * Creates a plain object from a SanitizeUserPromptRequest message. Also converts values to other types if specified.
                     * @param message SanitizeUserPromptRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.modelarmor.v1.SanitizeUserPromptRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SanitizeUserPromptRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SanitizeUserPromptRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a SanitizeModelResponseRequest. */
                interface ISanitizeModelResponseRequest {

                    /** SanitizeModelResponseRequest name */
                    name?: (string|null);

                    /** SanitizeModelResponseRequest modelResponseData */
                    modelResponseData?: (google.cloud.modelarmor.v1.IDataItem|null);

                    /** SanitizeModelResponseRequest userPrompt */
                    userPrompt?: (string|null);

                    /** SanitizeModelResponseRequest multiLanguageDetectionMetadata */
                    multiLanguageDetectionMetadata?: (google.cloud.modelarmor.v1.IMultiLanguageDetectionMetadata|null);
                }

                /** Represents a SanitizeModelResponseRequest. */
                class SanitizeModelResponseRequest implements ISanitizeModelResponseRequest {

                    /**
                     * Constructs a new SanitizeModelResponseRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.modelarmor.v1.ISanitizeModelResponseRequest);

                    /** SanitizeModelResponseRequest name. */
                    public name: string;

                    /** SanitizeModelResponseRequest modelResponseData. */
                    public modelResponseData?: (google.cloud.modelarmor.v1.IDataItem|null);

                    /** SanitizeModelResponseRequest userPrompt. */
                    public userPrompt: string;

                    /** SanitizeModelResponseRequest multiLanguageDetectionMetadata. */
                    public multiLanguageDetectionMetadata?: (google.cloud.modelarmor.v1.IMultiLanguageDetectionMetadata|null);

                    /**
                     * Creates a new SanitizeModelResponseRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SanitizeModelResponseRequest instance
                     */
                    public static create(properties?: google.cloud.modelarmor.v1.ISanitizeModelResponseRequest): google.cloud.modelarmor.v1.SanitizeModelResponseRequest;

                    /**
                     * Encodes the specified SanitizeModelResponseRequest message. Does not implicitly {@link google.cloud.modelarmor.v1.SanitizeModelResponseRequest.verify|verify} messages.
                     * @param message SanitizeModelResponseRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.modelarmor.v1.ISanitizeModelResponseRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SanitizeModelResponseRequest message, length delimited. Does not implicitly {@link google.cloud.modelarmor.v1.SanitizeModelResponseRequest.verify|verify} messages.
                     * @param message SanitizeModelResponseRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.modelarmor.v1.ISanitizeModelResponseRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SanitizeModelResponseRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SanitizeModelResponseRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.modelarmor.v1.SanitizeModelResponseRequest;

                    /**
                     * Decodes a SanitizeModelResponseRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SanitizeModelResponseRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.modelarmor.v1.SanitizeModelResponseRequest;

                    /**
                     * Verifies a SanitizeModelResponseRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SanitizeModelResponseRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SanitizeModelResponseRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.modelarmor.v1.SanitizeModelResponseRequest;

                    /**
                     * Creates a plain object from a SanitizeModelResponseRequest message. Also converts values to other types if specified.
                     * @param message SanitizeModelResponseRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.modelarmor.v1.SanitizeModelResponseRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SanitizeModelResponseRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SanitizeModelResponseRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a SanitizeUserPromptResponse. */
                interface ISanitizeUserPromptResponse {

                    /** SanitizeUserPromptResponse sanitizationResult */
                    sanitizationResult?: (google.cloud.modelarmor.v1.ISanitizationResult|null);
                }

                /** Represents a SanitizeUserPromptResponse. */
                class SanitizeUserPromptResponse implements ISanitizeUserPromptResponse {

                    /**
                     * Constructs a new SanitizeUserPromptResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.modelarmor.v1.ISanitizeUserPromptResponse);

                    /** SanitizeUserPromptResponse sanitizationResult. */
                    public sanitizationResult?: (google.cloud.modelarmor.v1.ISanitizationResult|null);

                    /**
                     * Creates a new SanitizeUserPromptResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SanitizeUserPromptResponse instance
                     */
                    public static create(properties?: google.cloud.modelarmor.v1.ISanitizeUserPromptResponse): google.cloud.modelarmor.v1.SanitizeUserPromptResponse;

                    /**
                     * Encodes the specified SanitizeUserPromptResponse message. Does not implicitly {@link google.cloud.modelarmor.v1.SanitizeUserPromptResponse.verify|verify} messages.
                     * @param message SanitizeUserPromptResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.modelarmor.v1.ISanitizeUserPromptResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SanitizeUserPromptResponse message, length delimited. Does not implicitly {@link google.cloud.modelarmor.v1.SanitizeUserPromptResponse.verify|verify} messages.
                     * @param message SanitizeUserPromptResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.modelarmor.v1.ISanitizeUserPromptResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SanitizeUserPromptResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SanitizeUserPromptResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.modelarmor.v1.SanitizeUserPromptResponse;

                    /**
                     * Decodes a SanitizeUserPromptResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SanitizeUserPromptResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.modelarmor.v1.SanitizeUserPromptResponse;

                    /**
                     * Verifies a SanitizeUserPromptResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SanitizeUserPromptResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SanitizeUserPromptResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.modelarmor.v1.SanitizeUserPromptResponse;

                    /**
                     * Creates a plain object from a SanitizeUserPromptResponse message. Also converts values to other types if specified.
                     * @param message SanitizeUserPromptResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.modelarmor.v1.SanitizeUserPromptResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SanitizeUserPromptResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SanitizeUserPromptResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a SanitizeModelResponseResponse. */
                interface ISanitizeModelResponseResponse {

                    /** SanitizeModelResponseResponse sanitizationResult */
                    sanitizationResult?: (google.cloud.modelarmor.v1.ISanitizationResult|null);
                }

                /** Represents a SanitizeModelResponseResponse. */
                class SanitizeModelResponseResponse implements ISanitizeModelResponseResponse {

                    /**
                     * Constructs a new SanitizeModelResponseResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.modelarmor.v1.ISanitizeModelResponseResponse);

                    /** SanitizeModelResponseResponse sanitizationResult. */
                    public sanitizationResult?: (google.cloud.modelarmor.v1.ISanitizationResult|null);

                    /**
                     * Creates a new SanitizeModelResponseResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SanitizeModelResponseResponse instance
                     */
                    public static create(properties?: google.cloud.modelarmor.v1.ISanitizeModelResponseResponse): google.cloud.modelarmor.v1.SanitizeModelResponseResponse;

                    /**
                     * Encodes the specified SanitizeModelResponseResponse message. Does not implicitly {@link google.cloud.modelarmor.v1.SanitizeModelResponseResponse.verify|verify} messages.
                     * @param message SanitizeModelResponseResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.modelarmor.v1.ISanitizeModelResponseResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SanitizeModelResponseResponse message, length delimited. Does not implicitly {@link google.cloud.modelarmor.v1.SanitizeModelResponseResponse.verify|verify} messages.
                     * @param message SanitizeModelResponseResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.modelarmor.v1.ISanitizeModelResponseResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SanitizeModelResponseResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SanitizeModelResponseResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.modelarmor.v1.SanitizeModelResponseResponse;

                    /**
                     * Decodes a SanitizeModelResponseResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SanitizeModelResponseResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.modelarmor.v1.SanitizeModelResponseResponse;

                    /**
                     * Verifies a SanitizeModelResponseResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SanitizeModelResponseResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SanitizeModelResponseResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.modelarmor.v1.SanitizeModelResponseResponse;

                    /**
                     * Creates a plain object from a SanitizeModelResponseResponse message. Also converts values to other types if specified.
                     * @param message SanitizeModelResponseResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.modelarmor.v1.SanitizeModelResponseResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SanitizeModelResponseResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SanitizeModelResponseResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a SanitizationResult. */
                interface ISanitizationResult {

                    /** SanitizationResult filterMatchState */
                    filterMatchState?: (google.cloud.modelarmor.v1.FilterMatchState|keyof typeof google.cloud.modelarmor.v1.FilterMatchState|null);

                    /** SanitizationResult filterResults */
                    filterResults?: ({ [k: string]: google.cloud.modelarmor.v1.IFilterResult }|null);

                    /** SanitizationResult invocationResult */
                    invocationResult?: (google.cloud.modelarmor.v1.InvocationResult|keyof typeof google.cloud.modelarmor.v1.InvocationResult|null);

                    /** SanitizationResult sanitizationMetadata */
                    sanitizationMetadata?: (google.cloud.modelarmor.v1.SanitizationResult.ISanitizationMetadata|null);
                }

                /** Represents a SanitizationResult. */
                class SanitizationResult implements ISanitizationResult {

                    /**
                     * Constructs a new SanitizationResult.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.modelarmor.v1.ISanitizationResult);

                    /** SanitizationResult filterMatchState. */
                    public filterMatchState: (google.cloud.modelarmor.v1.FilterMatchState|keyof typeof google.cloud.modelarmor.v1.FilterMatchState);

                    /** SanitizationResult filterResults. */
                    public filterResults: { [k: string]: google.cloud.modelarmor.v1.IFilterResult };

                    /** SanitizationResult invocationResult. */
                    public invocationResult: (google.cloud.modelarmor.v1.InvocationResult|keyof typeof google.cloud.modelarmor.v1.InvocationResult);

                    /** SanitizationResult sanitizationMetadata. */
                    public sanitizationMetadata?: (google.cloud.modelarmor.v1.SanitizationResult.ISanitizationMetadata|null);

                    /**
                     * Creates a new SanitizationResult instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SanitizationResult instance
                     */
                    public static create(properties?: google.cloud.modelarmor.v1.ISanitizationResult): google.cloud.modelarmor.v1.SanitizationResult;

                    /**
                     * Encodes the specified SanitizationResult message. Does not implicitly {@link google.cloud.modelarmor.v1.SanitizationResult.verify|verify} messages.
                     * @param message SanitizationResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.modelarmor.v1.ISanitizationResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SanitizationResult message, length delimited. Does not implicitly {@link google.cloud.modelarmor.v1.SanitizationResult.verify|verify} messages.
                     * @param message SanitizationResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.modelarmor.v1.ISanitizationResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SanitizationResult message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SanitizationResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.modelarmor.v1.SanitizationResult;

                    /**
                     * Decodes a SanitizationResult message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SanitizationResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.modelarmor.v1.SanitizationResult;

                    /**
                     * Verifies a SanitizationResult message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SanitizationResult message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SanitizationResult
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.modelarmor.v1.SanitizationResult;

                    /**
                     * Creates a plain object from a SanitizationResult message. Also converts values to other types if specified.
                     * @param message SanitizationResult
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.modelarmor.v1.SanitizationResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SanitizationResult to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SanitizationResult
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace SanitizationResult {

                    /** Properties of a SanitizationMetadata. */
                    interface ISanitizationMetadata {

                        /** SanitizationMetadata errorCode */
                        errorCode?: (number|Long|string|null);

                        /** SanitizationMetadata errorMessage */
                        errorMessage?: (string|null);

                        /** SanitizationMetadata ignorePartialInvocationFailures */
                        ignorePartialInvocationFailures?: (boolean|null);
                    }

                    /** Represents a SanitizationMetadata. */
                    class SanitizationMetadata implements ISanitizationMetadata {

                        /**
                         * Constructs a new SanitizationMetadata.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.modelarmor.v1.SanitizationResult.ISanitizationMetadata);

                        /** SanitizationMetadata errorCode. */
                        public errorCode: (number|Long|string);

                        /** SanitizationMetadata errorMessage. */
                        public errorMessage: string;

                        /** SanitizationMetadata ignorePartialInvocationFailures. */
                        public ignorePartialInvocationFailures: boolean;

                        /**
                         * Creates a new SanitizationMetadata instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SanitizationMetadata instance
                         */
                        public static create(properties?: google.cloud.modelarmor.v1.SanitizationResult.ISanitizationMetadata): google.cloud.modelarmor.v1.SanitizationResult.SanitizationMetadata;

                        /**
                         * Encodes the specified SanitizationMetadata message. Does not implicitly {@link google.cloud.modelarmor.v1.SanitizationResult.SanitizationMetadata.verify|verify} messages.
                         * @param message SanitizationMetadata message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.modelarmor.v1.SanitizationResult.ISanitizationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SanitizationMetadata message, length delimited. Does not implicitly {@link google.cloud.modelarmor.v1.SanitizationResult.SanitizationMetadata.verify|verify} messages.
                         * @param message SanitizationMetadata message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.modelarmor.v1.SanitizationResult.ISanitizationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SanitizationMetadata message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SanitizationMetadata
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.modelarmor.v1.SanitizationResult.SanitizationMetadata;

                        /**
                         * Decodes a SanitizationMetadata message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SanitizationMetadata
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.modelarmor.v1.SanitizationResult.SanitizationMetadata;

                        /**
                         * Verifies a SanitizationMetadata message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SanitizationMetadata message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SanitizationMetadata
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.modelarmor.v1.SanitizationResult.SanitizationMetadata;

                        /**
                         * Creates a plain object from a SanitizationMetadata message. Also converts values to other types if specified.
                         * @param message SanitizationMetadata
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.modelarmor.v1.SanitizationResult.SanitizationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SanitizationMetadata to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for SanitizationMetadata
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of a MultiLanguageDetectionMetadata. */
                interface IMultiLanguageDetectionMetadata {

                    /** MultiLanguageDetectionMetadata sourceLanguage */
                    sourceLanguage?: (string|null);

                    /** MultiLanguageDetectionMetadata enableMultiLanguageDetection */
                    enableMultiLanguageDetection?: (boolean|null);
                }

                /** Represents a MultiLanguageDetectionMetadata. */
                class MultiLanguageDetectionMetadata implements IMultiLanguageDetectionMetadata {

                    /**
                     * Constructs a new MultiLanguageDetectionMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.modelarmor.v1.IMultiLanguageDetectionMetadata);

                    /** MultiLanguageDetectionMetadata sourceLanguage. */
                    public sourceLanguage: string;

                    /** MultiLanguageDetectionMetadata enableMultiLanguageDetection. */
                    public enableMultiLanguageDetection: boolean;

                    /**
                     * Creates a new MultiLanguageDetectionMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MultiLanguageDetectionMetadata instance
                     */
                    public static create(properties?: google.cloud.modelarmor.v1.IMultiLanguageDetectionMetadata): google.cloud.modelarmor.v1.MultiLanguageDetectionMetadata;

                    /**
                     * Encodes the specified MultiLanguageDetectionMetadata message. Does not implicitly {@link google.cloud.modelarmor.v1.MultiLanguageDetectionMetadata.verify|verify} messages.
                     * @param message MultiLanguageDetectionMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.modelarmor.v1.IMultiLanguageDetectionMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MultiLanguageDetectionMetadata message, length delimited. Does not implicitly {@link google.cloud.modelarmor.v1.MultiLanguageDetectionMetadata.verify|verify} messages.
                     * @param message MultiLanguageDetectionMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.modelarmor.v1.IMultiLanguageDetectionMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MultiLanguageDetectionMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MultiLanguageDetectionMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.modelarmor.v1.MultiLanguageDetectionMetadata;

                    /**
                     * Decodes a MultiLanguageDetectionMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MultiLanguageDetectionMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.modelarmor.v1.MultiLanguageDetectionMetadata;

                    /**
                     * Verifies a MultiLanguageDetectionMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MultiLanguageDetectionMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MultiLanguageDetectionMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.modelarmor.v1.MultiLanguageDetectionMetadata;

                    /**
                     * Creates a plain object from a MultiLanguageDetectionMetadata message. Also converts values to other types if specified.
                     * @param message MultiLanguageDetectionMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.modelarmor.v1.MultiLanguageDetectionMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MultiLanguageDetectionMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for MultiLanguageDetectionMetadata
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a FilterResult. */
                interface IFilterResult {

                    /** FilterResult raiFilterResult */
                    raiFilterResult?: (google.cloud.modelarmor.v1.IRaiFilterResult|null);

                    /** FilterResult sdpFilterResult */
                    sdpFilterResult?: (google.cloud.modelarmor.v1.ISdpFilterResult|null);

                    /** FilterResult piAndJailbreakFilterResult */
                    piAndJailbreakFilterResult?: (google.cloud.modelarmor.v1.IPiAndJailbreakFilterResult|null);

                    /** FilterResult maliciousUriFilterResult */
                    maliciousUriFilterResult?: (google.cloud.modelarmor.v1.IMaliciousUriFilterResult|null);

                    /** FilterResult csamFilterFilterResult */
                    csamFilterFilterResult?: (google.cloud.modelarmor.v1.ICsamFilterResult|null);

                    /** FilterResult virusScanFilterResult */
                    virusScanFilterResult?: (google.cloud.modelarmor.v1.IVirusScanFilterResult|null);
                }

                /** Represents a FilterResult. */
                class FilterResult implements IFilterResult {

                    /**
                     * Constructs a new FilterResult.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.modelarmor.v1.IFilterResult);

                    /** FilterResult raiFilterResult. */
                    public raiFilterResult?: (google.cloud.modelarmor.v1.IRaiFilterResult|null);

                    /** FilterResult sdpFilterResult. */
                    public sdpFilterResult?: (google.cloud.modelarmor.v1.ISdpFilterResult|null);

                    /** FilterResult piAndJailbreakFilterResult. */
                    public piAndJailbreakFilterResult?: (google.cloud.modelarmor.v1.IPiAndJailbreakFilterResult|null);

                    /** FilterResult maliciousUriFilterResult. */
                    public maliciousUriFilterResult?: (google.cloud.modelarmor.v1.IMaliciousUriFilterResult|null);

                    /** FilterResult csamFilterFilterResult. */
                    public csamFilterFilterResult?: (google.cloud.modelarmor.v1.ICsamFilterResult|null);

                    /** FilterResult virusScanFilterResult. */
                    public virusScanFilterResult?: (google.cloud.modelarmor.v1.IVirusScanFilterResult|null);

                    /** FilterResult filterResult. */
                    public filterResult?: ("raiFilterResult"|"sdpFilterResult"|"piAndJailbreakFilterResult"|"maliciousUriFilterResult"|"csamFilterFilterResult"|"virusScanFilterResult");

                    /**
                     * Creates a new FilterResult instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns FilterResult instance
                     */
                    public static create(properties?: google.cloud.modelarmor.v1.IFilterResult): google.cloud.modelarmor.v1.FilterResult;

                    /**
                     * Encodes the specified FilterResult message. Does not implicitly {@link google.cloud.modelarmor.v1.FilterResult.verify|verify} messages.
                     * @param message FilterResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.modelarmor.v1.IFilterResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified FilterResult message, length delimited. Does not implicitly {@link google.cloud.modelarmor.v1.FilterResult.verify|verify} messages.
                     * @param message FilterResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.modelarmor.v1.IFilterResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a FilterResult message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FilterResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.modelarmor.v1.FilterResult;

                    /**
                     * Decodes a FilterResult message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns FilterResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.modelarmor.v1.FilterResult;

                    /**
                     * Verifies a FilterResult message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a FilterResult message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns FilterResult
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.modelarmor.v1.FilterResult;

                    /**
                     * Creates a plain object from a FilterResult message. Also converts values to other types if specified.
                     * @param message FilterResult
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.modelarmor.v1.FilterResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this FilterResult to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for FilterResult
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a RaiFilterResult. */
                interface IRaiFilterResult {

                    /** RaiFilterResult executionState */
                    executionState?: (google.cloud.modelarmor.v1.FilterExecutionState|keyof typeof google.cloud.modelarmor.v1.FilterExecutionState|null);

                    /** RaiFilterResult messageItems */
                    messageItems?: (google.cloud.modelarmor.v1.IMessageItem[]|null);

                    /** RaiFilterResult matchState */
                    matchState?: (google.cloud.modelarmor.v1.FilterMatchState|keyof typeof google.cloud.modelarmor.v1.FilterMatchState|null);

                    /** RaiFilterResult raiFilterTypeResults */
                    raiFilterTypeResults?: ({ [k: string]: google.cloud.modelarmor.v1.RaiFilterResult.IRaiFilterTypeResult }|null);
                }

                /** Represents a RaiFilterResult. */
                class RaiFilterResult implements IRaiFilterResult {

                    /**
                     * Constructs a new RaiFilterResult.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.modelarmor.v1.IRaiFilterResult);

                    /** RaiFilterResult executionState. */
                    public executionState: (google.cloud.modelarmor.v1.FilterExecutionState|keyof typeof google.cloud.modelarmor.v1.FilterExecutionState);

                    /** RaiFilterResult messageItems. */
                    public messageItems: google.cloud.modelarmor.v1.IMessageItem[];

                    /** RaiFilterResult matchState. */
                    public matchState: (google.cloud.modelarmor.v1.FilterMatchState|keyof typeof google.cloud.modelarmor.v1.FilterMatchState);

                    /** RaiFilterResult raiFilterTypeResults. */
                    public raiFilterTypeResults: { [k: string]: google.cloud.modelarmor.v1.RaiFilterResult.IRaiFilterTypeResult };

                    /**
                     * Creates a new RaiFilterResult instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RaiFilterResult instance
                     */
                    public static create(properties?: google.cloud.modelarmor.v1.IRaiFilterResult): google.cloud.modelarmor.v1.RaiFilterResult;

                    /**
                     * Encodes the specified RaiFilterResult message. Does not implicitly {@link google.cloud.modelarmor.v1.RaiFilterResult.verify|verify} messages.
                     * @param message RaiFilterResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.modelarmor.v1.IRaiFilterResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RaiFilterResult message, length delimited. Does not implicitly {@link google.cloud.modelarmor.v1.RaiFilterResult.verify|verify} messages.
                     * @param message RaiFilterResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.modelarmor.v1.IRaiFilterResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RaiFilterResult message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RaiFilterResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.modelarmor.v1.RaiFilterResult;

                    /**
                     * Decodes a RaiFilterResult message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RaiFilterResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.modelarmor.v1.RaiFilterResult;

                    /**
                     * Verifies a RaiFilterResult message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RaiFilterResult message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RaiFilterResult
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.modelarmor.v1.RaiFilterResult;

                    /**
                     * Creates a plain object from a RaiFilterResult message. Also converts values to other types if specified.
                     * @param message RaiFilterResult
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.modelarmor.v1.RaiFilterResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RaiFilterResult to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RaiFilterResult
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace RaiFilterResult {

                    /** Properties of a RaiFilterTypeResult. */
                    interface IRaiFilterTypeResult {

                        /** RaiFilterTypeResult filterType */
                        filterType?: (google.cloud.modelarmor.v1.RaiFilterType|keyof typeof google.cloud.modelarmor.v1.RaiFilterType|null);

                        /** RaiFilterTypeResult confidenceLevel */
                        confidenceLevel?: (google.cloud.modelarmor.v1.DetectionConfidenceLevel|keyof typeof google.cloud.modelarmor.v1.DetectionConfidenceLevel|null);

                        /** RaiFilterTypeResult matchState */
                        matchState?: (google.cloud.modelarmor.v1.FilterMatchState|keyof typeof google.cloud.modelarmor.v1.FilterMatchState|null);
                    }

                    /** Represents a RaiFilterTypeResult. */
                    class RaiFilterTypeResult implements IRaiFilterTypeResult {

                        /**
                         * Constructs a new RaiFilterTypeResult.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.modelarmor.v1.RaiFilterResult.IRaiFilterTypeResult);

                        /** RaiFilterTypeResult filterType. */
                        public filterType: (google.cloud.modelarmor.v1.RaiFilterType|keyof typeof google.cloud.modelarmor.v1.RaiFilterType);

                        /** RaiFilterTypeResult confidenceLevel. */
                        public confidenceLevel: (google.cloud.modelarmor.v1.DetectionConfidenceLevel|keyof typeof google.cloud.modelarmor.v1.DetectionConfidenceLevel);

                        /** RaiFilterTypeResult matchState. */
                        public matchState: (google.cloud.modelarmor.v1.FilterMatchState|keyof typeof google.cloud.modelarmor.v1.FilterMatchState);

                        /**
                         * Creates a new RaiFilterTypeResult instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns RaiFilterTypeResult instance
                         */
                        public static create(properties?: google.cloud.modelarmor.v1.RaiFilterResult.IRaiFilterTypeResult): google.cloud.modelarmor.v1.RaiFilterResult.RaiFilterTypeResult;

                        /**
                         * Encodes the specified RaiFilterTypeResult message. Does not implicitly {@link google.cloud.modelarmor.v1.RaiFilterResult.RaiFilterTypeResult.verify|verify} messages.
                         * @param message RaiFilterTypeResult message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.modelarmor.v1.RaiFilterResult.IRaiFilterTypeResult, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified RaiFilterTypeResult message, length delimited. Does not implicitly {@link google.cloud.modelarmor.v1.RaiFilterResult.RaiFilterTypeResult.verify|verify} messages.
                         * @param message RaiFilterTypeResult message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.modelarmor.v1.RaiFilterResult.IRaiFilterTypeResult, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a RaiFilterTypeResult message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns RaiFilterTypeResult
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.modelarmor.v1.RaiFilterResult.RaiFilterTypeResult;

                        /**
                         * Decodes a RaiFilterTypeResult message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns RaiFilterTypeResult
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.modelarmor.v1.RaiFilterResult.RaiFilterTypeResult;

                        /**
                         * Verifies a RaiFilterTypeResult message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a RaiFilterTypeResult message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns RaiFilterTypeResult
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.modelarmor.v1.RaiFilterResult.RaiFilterTypeResult;

                        /**
                         * Creates a plain object from a RaiFilterTypeResult message. Also converts values to other types if specified.
                         * @param message RaiFilterTypeResult
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.modelarmor.v1.RaiFilterResult.RaiFilterTypeResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this RaiFilterTypeResult to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for RaiFilterTypeResult
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of a SdpFilterResult. */
                interface ISdpFilterResult {

                    /** SdpFilterResult inspectResult */
                    inspectResult?: (google.cloud.modelarmor.v1.ISdpInspectResult|null);

                    /** SdpFilterResult deidentifyResult */
                    deidentifyResult?: (google.cloud.modelarmor.v1.ISdpDeidentifyResult|null);
                }

                /** Represents a SdpFilterResult. */
                class SdpFilterResult implements ISdpFilterResult {

                    /**
                     * Constructs a new SdpFilterResult.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.modelarmor.v1.ISdpFilterResult);

                    /** SdpFilterResult inspectResult. */
                    public inspectResult?: (google.cloud.modelarmor.v1.ISdpInspectResult|null);

                    /** SdpFilterResult deidentifyResult. */
                    public deidentifyResult?: (google.cloud.modelarmor.v1.ISdpDeidentifyResult|null);

                    /** SdpFilterResult result. */
                    public result?: ("inspectResult"|"deidentifyResult");

                    /**
                     * Creates a new SdpFilterResult instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SdpFilterResult instance
                     */
                    public static create(properties?: google.cloud.modelarmor.v1.ISdpFilterResult): google.cloud.modelarmor.v1.SdpFilterResult;

                    /**
                     * Encodes the specified SdpFilterResult message. Does not implicitly {@link google.cloud.modelarmor.v1.SdpFilterResult.verify|verify} messages.
                     * @param message SdpFilterResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.modelarmor.v1.ISdpFilterResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SdpFilterResult message, length delimited. Does not implicitly {@link google.cloud.modelarmor.v1.SdpFilterResult.verify|verify} messages.
                     * @param message SdpFilterResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.modelarmor.v1.ISdpFilterResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SdpFilterResult message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SdpFilterResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.modelarmor.v1.SdpFilterResult;

                    /**
                     * Decodes a SdpFilterResult message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SdpFilterResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.modelarmor.v1.SdpFilterResult;

                    /**
                     * Verifies a SdpFilterResult message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SdpFilterResult message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SdpFilterResult
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.modelarmor.v1.SdpFilterResult;

                    /**
                     * Creates a plain object from a SdpFilterResult message. Also converts values to other types if specified.
                     * @param message SdpFilterResult
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.modelarmor.v1.SdpFilterResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SdpFilterResult to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SdpFilterResult
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a SdpInspectResult. */
                interface ISdpInspectResult {

                    /** SdpInspectResult executionState */
                    executionState?: (google.cloud.modelarmor.v1.FilterExecutionState|keyof typeof google.cloud.modelarmor.v1.FilterExecutionState|null);

                    /** SdpInspectResult messageItems */
                    messageItems?: (google.cloud.modelarmor.v1.IMessageItem[]|null);

                    /** SdpInspectResult matchState */
                    matchState?: (google.cloud.modelarmor.v1.FilterMatchState|keyof typeof google.cloud.modelarmor.v1.FilterMatchState|null);

                    /** SdpInspectResult findings */
                    findings?: (google.cloud.modelarmor.v1.ISdpFinding[]|null);

                    /** SdpInspectResult findingsTruncated */
                    findingsTruncated?: (boolean|null);
                }

                /** Represents a SdpInspectResult. */
                class SdpInspectResult implements ISdpInspectResult {

                    /**
                     * Constructs a new SdpInspectResult.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.modelarmor.v1.ISdpInspectResult);

                    /** SdpInspectResult executionState. */
                    public executionState: (google.cloud.modelarmor.v1.FilterExecutionState|keyof typeof google.cloud.modelarmor.v1.FilterExecutionState);

                    /** SdpInspectResult messageItems. */
                    public messageItems: google.cloud.modelarmor.v1.IMessageItem[];

                    /** SdpInspectResult matchState. */
                    public matchState: (google.cloud.modelarmor.v1.FilterMatchState|keyof typeof google.cloud.modelarmor.v1.FilterMatchState);

                    /** SdpInspectResult findings. */
                    public findings: google.cloud.modelarmor.v1.ISdpFinding[];

                    /** SdpInspectResult findingsTruncated. */
                    public findingsTruncated: boolean;

                    /**
                     * Creates a new SdpInspectResult instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SdpInspectResult instance
                     */
                    public static create(properties?: google.cloud.modelarmor.v1.ISdpInspectResult): google.cloud.modelarmor.v1.SdpInspectResult;

                    /**
                     * Encodes the specified SdpInspectResult message. Does not implicitly {@link google.cloud.modelarmor.v1.SdpInspectResult.verify|verify} messages.
                     * @param message SdpInspectResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.modelarmor.v1.ISdpInspectResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SdpInspectResult message, length delimited. Does not implicitly {@link google.cloud.modelarmor.v1.SdpInspectResult.verify|verify} messages.
                     * @param message SdpInspectResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.modelarmor.v1.ISdpInspectResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SdpInspectResult message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SdpInspectResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.modelarmor.v1.SdpInspectResult;

                    /**
                     * Decodes a SdpInspectResult message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SdpInspectResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.modelarmor.v1.SdpInspectResult;

                    /**
                     * Verifies a SdpInspectResult message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SdpInspectResult message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SdpInspectResult
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.modelarmor.v1.SdpInspectResult;

                    /**
                     * Creates a plain object from a SdpInspectResult message. Also converts values to other types if specified.
                     * @param message SdpInspectResult
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.modelarmor.v1.SdpInspectResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SdpInspectResult to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SdpInspectResult
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DataItem. */
                interface IDataItem {

                    /** DataItem text */
                    text?: (string|null);

                    /** DataItem byteItem */
                    byteItem?: (google.cloud.modelarmor.v1.IByteDataItem|null);
                }

                /** Represents a DataItem. */
                class DataItem implements IDataItem {

                    /**
                     * Constructs a new DataItem.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.modelarmor.v1.IDataItem);

                    /** DataItem text. */
                    public text?: (string|null);

                    /** DataItem byteItem. */
                    public byteItem?: (google.cloud.modelarmor.v1.IByteDataItem|null);

                    /** DataItem dataItem. */
                    public dataItem?: ("text"|"byteItem");

                    /**
                     * Creates a new DataItem instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DataItem instance
                     */
                    public static create(properties?: google.cloud.modelarmor.v1.IDataItem): google.cloud.modelarmor.v1.DataItem;

                    /**
                     * Encodes the specified DataItem message. Does not implicitly {@link google.cloud.modelarmor.v1.DataItem.verify|verify} messages.
                     * @param message DataItem message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.modelarmor.v1.IDataItem, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DataItem message, length delimited. Does not implicitly {@link google.cloud.modelarmor.v1.DataItem.verify|verify} messages.
                     * @param message DataItem message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.modelarmor.v1.IDataItem, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DataItem message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DataItem
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.modelarmor.v1.DataItem;

                    /**
                     * Decodes a DataItem message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DataItem
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.modelarmor.v1.DataItem;

                    /**
                     * Verifies a DataItem message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DataItem message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DataItem
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.modelarmor.v1.DataItem;

                    /**
                     * Creates a plain object from a DataItem message. Also converts values to other types if specified.
                     * @param message DataItem
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.modelarmor.v1.DataItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DataItem to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DataItem
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ByteDataItem. */
                interface IByteDataItem {

                    /** ByteDataItem byteDataType */
                    byteDataType?: (google.cloud.modelarmor.v1.ByteDataItem.ByteItemType|keyof typeof google.cloud.modelarmor.v1.ByteDataItem.ByteItemType|null);

                    /** ByteDataItem byteData */
                    byteData?: (Uint8Array|Buffer|string|null);
                }

                /** Represents a ByteDataItem. */
                class ByteDataItem implements IByteDataItem {

                    /**
                     * Constructs a new ByteDataItem.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.modelarmor.v1.IByteDataItem);

                    /** ByteDataItem byteDataType. */
                    public byteDataType: (google.cloud.modelarmor.v1.ByteDataItem.ByteItemType|keyof typeof google.cloud.modelarmor.v1.ByteDataItem.ByteItemType);

                    /** ByteDataItem byteData. */
                    public byteData: (Uint8Array|Buffer|string);

                    /**
                     * Creates a new ByteDataItem instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ByteDataItem instance
                     */
                    public static create(properties?: google.cloud.modelarmor.v1.IByteDataItem): google.cloud.modelarmor.v1.ByteDataItem;

                    /**
                     * Encodes the specified ByteDataItem message. Does not implicitly {@link google.cloud.modelarmor.v1.ByteDataItem.verify|verify} messages.
                     * @param message ByteDataItem message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.modelarmor.v1.IByteDataItem, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ByteDataItem message, length delimited. Does not implicitly {@link google.cloud.modelarmor.v1.ByteDataItem.verify|verify} messages.
                     * @param message ByteDataItem message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.modelarmor.v1.IByteDataItem, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ByteDataItem message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ByteDataItem
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.modelarmor.v1.ByteDataItem;

                    /**
                     * Decodes a ByteDataItem message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ByteDataItem
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.modelarmor.v1.ByteDataItem;

                    /**
                     * Verifies a ByteDataItem message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ByteDataItem message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ByteDataItem
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.modelarmor.v1.ByteDataItem;

                    /**
                     * Creates a plain object from a ByteDataItem message. Also converts values to other types if specified.
                     * @param message ByteDataItem
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.modelarmor.v1.ByteDataItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ByteDataItem to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ByteDataItem
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace ByteDataItem {

                    /** ByteItemType enum. */
                    enum ByteItemType {
                        BYTE_ITEM_TYPE_UNSPECIFIED = 0,
                        PLAINTEXT_UTF8 = 1,
                        PDF = 2,
                        WORD_DOCUMENT = 3,
                        EXCEL_DOCUMENT = 4,
                        POWERPOINT_DOCUMENT = 5,
                        TXT = 6,
                        CSV = 7
                    }
                }

                /** Properties of a SdpDeidentifyResult. */
                interface ISdpDeidentifyResult {

                    /** SdpDeidentifyResult executionState */
                    executionState?: (google.cloud.modelarmor.v1.FilterExecutionState|keyof typeof google.cloud.modelarmor.v1.FilterExecutionState|null);

                    /** SdpDeidentifyResult messageItems */
                    messageItems?: (google.cloud.modelarmor.v1.IMessageItem[]|null);

                    /** SdpDeidentifyResult matchState */
                    matchState?: (google.cloud.modelarmor.v1.FilterMatchState|keyof typeof google.cloud.modelarmor.v1.FilterMatchState|null);

                    /** SdpDeidentifyResult data */
                    data?: (google.cloud.modelarmor.v1.IDataItem|null);

                    /** SdpDeidentifyResult transformedBytes */
                    transformedBytes?: (number|Long|string|null);

                    /** SdpDeidentifyResult infoTypes */
                    infoTypes?: (string[]|null);
                }

                /** Represents a SdpDeidentifyResult. */
                class SdpDeidentifyResult implements ISdpDeidentifyResult {

                    /**
                     * Constructs a new SdpDeidentifyResult.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.modelarmor.v1.ISdpDeidentifyResult);

                    /** SdpDeidentifyResult executionState. */
                    public executionState: (google.cloud.modelarmor.v1.FilterExecutionState|keyof typeof google.cloud.modelarmor.v1.FilterExecutionState);

                    /** SdpDeidentifyResult messageItems. */
                    public messageItems: google.cloud.modelarmor.v1.IMessageItem[];

                    /** SdpDeidentifyResult matchState. */
                    public matchState: (google.cloud.modelarmor.v1.FilterMatchState|keyof typeof google.cloud.modelarmor.v1.FilterMatchState);

                    /** SdpDeidentifyResult data. */
                    public data?: (google.cloud.modelarmor.v1.IDataItem|null);

                    /** SdpDeidentifyResult transformedBytes. */
                    public transformedBytes: (number|Long|string);

                    /** SdpDeidentifyResult infoTypes. */
                    public infoTypes: string[];

                    /**
                     * Creates a new SdpDeidentifyResult instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SdpDeidentifyResult instance
                     */
                    public static create(properties?: google.cloud.modelarmor.v1.ISdpDeidentifyResult): google.cloud.modelarmor.v1.SdpDeidentifyResult;

                    /**
                     * Encodes the specified SdpDeidentifyResult message. Does not implicitly {@link google.cloud.modelarmor.v1.SdpDeidentifyResult.verify|verify} messages.
                     * @param message SdpDeidentifyResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.modelarmor.v1.ISdpDeidentifyResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SdpDeidentifyResult message, length delimited. Does not implicitly {@link google.cloud.modelarmor.v1.SdpDeidentifyResult.verify|verify} messages.
                     * @param message SdpDeidentifyResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.modelarmor.v1.ISdpDeidentifyResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SdpDeidentifyResult message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SdpDeidentifyResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.modelarmor.v1.SdpDeidentifyResult;

                    /**
                     * Decodes a SdpDeidentifyResult message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SdpDeidentifyResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.modelarmor.v1.SdpDeidentifyResult;

                    /**
                     * Verifies a SdpDeidentifyResult message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SdpDeidentifyResult message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SdpDeidentifyResult
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.modelarmor.v1.SdpDeidentifyResult;

                    /**
                     * Creates a plain object from a SdpDeidentifyResult message. Also converts values to other types if specified.
                     * @param message SdpDeidentifyResult
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.modelarmor.v1.SdpDeidentifyResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SdpDeidentifyResult to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SdpDeidentifyResult
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a SdpFinding. */
                interface ISdpFinding {

                    /** SdpFinding infoType */
                    infoType?: (string|null);

                    /** SdpFinding likelihood */
                    likelihood?: (google.cloud.modelarmor.v1.SdpFindingLikelihood|keyof typeof google.cloud.modelarmor.v1.SdpFindingLikelihood|null);

                    /** SdpFinding location */
                    location?: (google.cloud.modelarmor.v1.SdpFinding.ISdpFindingLocation|null);
                }

                /** Represents a SdpFinding. */
                class SdpFinding implements ISdpFinding {

                    /**
                     * Constructs a new SdpFinding.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.modelarmor.v1.ISdpFinding);

                    /** SdpFinding infoType. */
                    public infoType: string;

                    /** SdpFinding likelihood. */
                    public likelihood: (google.cloud.modelarmor.v1.SdpFindingLikelihood|keyof typeof google.cloud.modelarmor.v1.SdpFindingLikelihood);

                    /** SdpFinding location. */
                    public location?: (google.cloud.modelarmor.v1.SdpFinding.ISdpFindingLocation|null);

                    /**
                     * Creates a new SdpFinding instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SdpFinding instance
                     */
                    public static create(properties?: google.cloud.modelarmor.v1.ISdpFinding): google.cloud.modelarmor.v1.SdpFinding;

                    /**
                     * Encodes the specified SdpFinding message. Does not implicitly {@link google.cloud.modelarmor.v1.SdpFinding.verify|verify} messages.
                     * @param message SdpFinding message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.modelarmor.v1.ISdpFinding, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SdpFinding message, length delimited. Does not implicitly {@link google.cloud.modelarmor.v1.SdpFinding.verify|verify} messages.
                     * @param message SdpFinding message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.modelarmor.v1.ISdpFinding, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SdpFinding message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SdpFinding
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.modelarmor.v1.SdpFinding;

                    /**
                     * Decodes a SdpFinding message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SdpFinding
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.modelarmor.v1.SdpFinding;

                    /**
                     * Verifies a SdpFinding message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SdpFinding message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SdpFinding
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.modelarmor.v1.SdpFinding;

                    /**
                     * Creates a plain object from a SdpFinding message. Also converts values to other types if specified.
                     * @param message SdpFinding
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.modelarmor.v1.SdpFinding, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SdpFinding to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SdpFinding
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace SdpFinding {

                    /** Properties of a SdpFindingLocation. */
                    interface ISdpFindingLocation {

                        /** SdpFindingLocation byteRange */
                        byteRange?: (google.cloud.modelarmor.v1.IRangeInfo|null);

                        /** SdpFindingLocation codepointRange */
                        codepointRange?: (google.cloud.modelarmor.v1.IRangeInfo|null);
                    }

                    /** Represents a SdpFindingLocation. */
                    class SdpFindingLocation implements ISdpFindingLocation {

                        /**
                         * Constructs a new SdpFindingLocation.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.modelarmor.v1.SdpFinding.ISdpFindingLocation);

                        /** SdpFindingLocation byteRange. */
                        public byteRange?: (google.cloud.modelarmor.v1.IRangeInfo|null);

                        /** SdpFindingLocation codepointRange. */
                        public codepointRange?: (google.cloud.modelarmor.v1.IRangeInfo|null);

                        /**
                         * Creates a new SdpFindingLocation instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SdpFindingLocation instance
                         */
                        public static create(properties?: google.cloud.modelarmor.v1.SdpFinding.ISdpFindingLocation): google.cloud.modelarmor.v1.SdpFinding.SdpFindingLocation;

                        /**
                         * Encodes the specified SdpFindingLocation message. Does not implicitly {@link google.cloud.modelarmor.v1.SdpFinding.SdpFindingLocation.verify|verify} messages.
                         * @param message SdpFindingLocation message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.modelarmor.v1.SdpFinding.ISdpFindingLocation, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SdpFindingLocation message, length delimited. Does not implicitly {@link google.cloud.modelarmor.v1.SdpFinding.SdpFindingLocation.verify|verify} messages.
                         * @param message SdpFindingLocation message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.modelarmor.v1.SdpFinding.ISdpFindingLocation, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SdpFindingLocation message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SdpFindingLocation
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.modelarmor.v1.SdpFinding.SdpFindingLocation;

                        /**
                         * Decodes a SdpFindingLocation message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SdpFindingLocation
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.modelarmor.v1.SdpFinding.SdpFindingLocation;

                        /**
                         * Verifies a SdpFindingLocation message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SdpFindingLocation message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SdpFindingLocation
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.modelarmor.v1.SdpFinding.SdpFindingLocation;

                        /**
                         * Creates a plain object from a SdpFindingLocation message. Also converts values to other types if specified.
                         * @param message SdpFindingLocation
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.modelarmor.v1.SdpFinding.SdpFindingLocation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SdpFindingLocation to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for SdpFindingLocation
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of a PiAndJailbreakFilterResult. */
                interface IPiAndJailbreakFilterResult {

                    /** PiAndJailbreakFilterResult executionState */
                    executionState?: (google.cloud.modelarmor.v1.FilterExecutionState|keyof typeof google.cloud.modelarmor.v1.FilterExecutionState|null);

                    /** PiAndJailbreakFilterResult messageItems */
                    messageItems?: (google.cloud.modelarmor.v1.IMessageItem[]|null);

                    /** PiAndJailbreakFilterResult matchState */
                    matchState?: (google.cloud.modelarmor.v1.FilterMatchState|keyof typeof google.cloud.modelarmor.v1.FilterMatchState|null);

                    /** PiAndJailbreakFilterResult confidenceLevel */
                    confidenceLevel?: (google.cloud.modelarmor.v1.DetectionConfidenceLevel|keyof typeof google.cloud.modelarmor.v1.DetectionConfidenceLevel|null);
                }

                /** Represents a PiAndJailbreakFilterResult. */
                class PiAndJailbreakFilterResult implements IPiAndJailbreakFilterResult {

                    /**
                     * Constructs a new PiAndJailbreakFilterResult.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.modelarmor.v1.IPiAndJailbreakFilterResult);

                    /** PiAndJailbreakFilterResult executionState. */
                    public executionState: (google.cloud.modelarmor.v1.FilterExecutionState|keyof typeof google.cloud.modelarmor.v1.FilterExecutionState);

                    /** PiAndJailbreakFilterResult messageItems. */
                    public messageItems: google.cloud.modelarmor.v1.IMessageItem[];

                    /** PiAndJailbreakFilterResult matchState. */
                    public matchState: (google.cloud.modelarmor.v1.FilterMatchState|keyof typeof google.cloud.modelarmor.v1.FilterMatchState);

                    /** PiAndJailbreakFilterResult confidenceLevel. */
                    public confidenceLevel: (google.cloud.modelarmor.v1.DetectionConfidenceLevel|keyof typeof google.cloud.modelarmor.v1.DetectionConfidenceLevel);

                    /**
                     * Creates a new PiAndJailbreakFilterResult instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PiAndJailbreakFilterResult instance
                     */
                    public static create(properties?: google.cloud.modelarmor.v1.IPiAndJailbreakFilterResult): google.cloud.modelarmor.v1.PiAndJailbreakFilterResult;

                    /**
                     * Encodes the specified PiAndJailbreakFilterResult message. Does not implicitly {@link google.cloud.modelarmor.v1.PiAndJailbreakFilterResult.verify|verify} messages.
                     * @param message PiAndJailbreakFilterResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.modelarmor.v1.IPiAndJailbreakFilterResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PiAndJailbreakFilterResult message, length delimited. Does not implicitly {@link google.cloud.modelarmor.v1.PiAndJailbreakFilterResult.verify|verify} messages.
                     * @param message PiAndJailbreakFilterResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.modelarmor.v1.IPiAndJailbreakFilterResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PiAndJailbreakFilterResult message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PiAndJailbreakFilterResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.modelarmor.v1.PiAndJailbreakFilterResult;

                    /**
                     * Decodes a PiAndJailbreakFilterResult message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PiAndJailbreakFilterResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.modelarmor.v1.PiAndJailbreakFilterResult;

                    /**
                     * Verifies a PiAndJailbreakFilterResult message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PiAndJailbreakFilterResult message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PiAndJailbreakFilterResult
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.modelarmor.v1.PiAndJailbreakFilterResult;

                    /**
                     * Creates a plain object from a PiAndJailbreakFilterResult message. Also converts values to other types if specified.
                     * @param message PiAndJailbreakFilterResult
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.modelarmor.v1.PiAndJailbreakFilterResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PiAndJailbreakFilterResult to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for PiAndJailbreakFilterResult
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a MaliciousUriFilterResult. */
                interface IMaliciousUriFilterResult {

                    /** MaliciousUriFilterResult executionState */
                    executionState?: (google.cloud.modelarmor.v1.FilterExecutionState|keyof typeof google.cloud.modelarmor.v1.FilterExecutionState|null);

                    /** MaliciousUriFilterResult messageItems */
                    messageItems?: (google.cloud.modelarmor.v1.IMessageItem[]|null);

                    /** MaliciousUriFilterResult matchState */
                    matchState?: (google.cloud.modelarmor.v1.FilterMatchState|keyof typeof google.cloud.modelarmor.v1.FilterMatchState|null);

                    /** MaliciousUriFilterResult maliciousUriMatchedItems */
                    maliciousUriMatchedItems?: (google.cloud.modelarmor.v1.MaliciousUriFilterResult.IMaliciousUriMatchedItem[]|null);
                }

                /** Represents a MaliciousUriFilterResult. */
                class MaliciousUriFilterResult implements IMaliciousUriFilterResult {

                    /**
                     * Constructs a new MaliciousUriFilterResult.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.modelarmor.v1.IMaliciousUriFilterResult);

                    /** MaliciousUriFilterResult executionState. */
                    public executionState: (google.cloud.modelarmor.v1.FilterExecutionState|keyof typeof google.cloud.modelarmor.v1.FilterExecutionState);

                    /** MaliciousUriFilterResult messageItems. */
                    public messageItems: google.cloud.modelarmor.v1.IMessageItem[];

                    /** MaliciousUriFilterResult matchState. */
                    public matchState: (google.cloud.modelarmor.v1.FilterMatchState|keyof typeof google.cloud.modelarmor.v1.FilterMatchState);

                    /** MaliciousUriFilterResult maliciousUriMatchedItems. */
                    public maliciousUriMatchedItems: google.cloud.modelarmor.v1.MaliciousUriFilterResult.IMaliciousUriMatchedItem[];

                    /**
                     * Creates a new MaliciousUriFilterResult instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MaliciousUriFilterResult instance
                     */
                    public static create(properties?: google.cloud.modelarmor.v1.IMaliciousUriFilterResult): google.cloud.modelarmor.v1.MaliciousUriFilterResult;

                    /**
                     * Encodes the specified MaliciousUriFilterResult message. Does not implicitly {@link google.cloud.modelarmor.v1.MaliciousUriFilterResult.verify|verify} messages.
                     * @param message MaliciousUriFilterResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.modelarmor.v1.IMaliciousUriFilterResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MaliciousUriFilterResult message, length delimited. Does not implicitly {@link google.cloud.modelarmor.v1.MaliciousUriFilterResult.verify|verify} messages.
                     * @param message MaliciousUriFilterResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.modelarmor.v1.IMaliciousUriFilterResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MaliciousUriFilterResult message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MaliciousUriFilterResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.modelarmor.v1.MaliciousUriFilterResult;

                    /**
                     * Decodes a MaliciousUriFilterResult message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MaliciousUriFilterResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.modelarmor.v1.MaliciousUriFilterResult;

                    /**
                     * Verifies a MaliciousUriFilterResult message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MaliciousUriFilterResult message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MaliciousUriFilterResult
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.modelarmor.v1.MaliciousUriFilterResult;

                    /**
                     * Creates a plain object from a MaliciousUriFilterResult message. Also converts values to other types if specified.
                     * @param message MaliciousUriFilterResult
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.modelarmor.v1.MaliciousUriFilterResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MaliciousUriFilterResult to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for MaliciousUriFilterResult
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace MaliciousUriFilterResult {

                    /** Properties of a MaliciousUriMatchedItem. */
                    interface IMaliciousUriMatchedItem {

                        /** MaliciousUriMatchedItem uri */
                        uri?: (string|null);

                        /** MaliciousUriMatchedItem locations */
                        locations?: (google.cloud.modelarmor.v1.IRangeInfo[]|null);
                    }

                    /** Represents a MaliciousUriMatchedItem. */
                    class MaliciousUriMatchedItem implements IMaliciousUriMatchedItem {

                        /**
                         * Constructs a new MaliciousUriMatchedItem.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.modelarmor.v1.MaliciousUriFilterResult.IMaliciousUriMatchedItem);

                        /** MaliciousUriMatchedItem uri. */
                        public uri: string;

                        /** MaliciousUriMatchedItem locations. */
                        public locations: google.cloud.modelarmor.v1.IRangeInfo[];

                        /**
                         * Creates a new MaliciousUriMatchedItem instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns MaliciousUriMatchedItem instance
                         */
                        public static create(properties?: google.cloud.modelarmor.v1.MaliciousUriFilterResult.IMaliciousUriMatchedItem): google.cloud.modelarmor.v1.MaliciousUriFilterResult.MaliciousUriMatchedItem;

                        /**
                         * Encodes the specified MaliciousUriMatchedItem message. Does not implicitly {@link google.cloud.modelarmor.v1.MaliciousUriFilterResult.MaliciousUriMatchedItem.verify|verify} messages.
                         * @param message MaliciousUriMatchedItem message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.modelarmor.v1.MaliciousUriFilterResult.IMaliciousUriMatchedItem, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified MaliciousUriMatchedItem message, length delimited. Does not implicitly {@link google.cloud.modelarmor.v1.MaliciousUriFilterResult.MaliciousUriMatchedItem.verify|verify} messages.
                         * @param message MaliciousUriMatchedItem message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.modelarmor.v1.MaliciousUriFilterResult.IMaliciousUriMatchedItem, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a MaliciousUriMatchedItem message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns MaliciousUriMatchedItem
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.modelarmor.v1.MaliciousUriFilterResult.MaliciousUriMatchedItem;

                        /**
                         * Decodes a MaliciousUriMatchedItem message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns MaliciousUriMatchedItem
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.modelarmor.v1.MaliciousUriFilterResult.MaliciousUriMatchedItem;

                        /**
                         * Verifies a MaliciousUriMatchedItem message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a MaliciousUriMatchedItem message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns MaliciousUriMatchedItem
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.modelarmor.v1.MaliciousUriFilterResult.MaliciousUriMatchedItem;

                        /**
                         * Creates a plain object from a MaliciousUriMatchedItem message. Also converts values to other types if specified.
                         * @param message MaliciousUriMatchedItem
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.modelarmor.v1.MaliciousUriFilterResult.MaliciousUriMatchedItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this MaliciousUriMatchedItem to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for MaliciousUriMatchedItem
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of a VirusScanFilterResult. */
                interface IVirusScanFilterResult {

                    /** VirusScanFilterResult executionState */
                    executionState?: (google.cloud.modelarmor.v1.FilterExecutionState|keyof typeof google.cloud.modelarmor.v1.FilterExecutionState|null);

                    /** VirusScanFilterResult messageItems */
                    messageItems?: (google.cloud.modelarmor.v1.IMessageItem[]|null);

                    /** VirusScanFilterResult matchState */
                    matchState?: (google.cloud.modelarmor.v1.FilterMatchState|keyof typeof google.cloud.modelarmor.v1.FilterMatchState|null);

                    /** VirusScanFilterResult scannedContentType */
                    scannedContentType?: (google.cloud.modelarmor.v1.VirusScanFilterResult.ScannedContentType|keyof typeof google.cloud.modelarmor.v1.VirusScanFilterResult.ScannedContentType|null);

                    /** VirusScanFilterResult scannedSize */
                    scannedSize?: (number|Long|string|null);

                    /** VirusScanFilterResult virusDetails */
                    virusDetails?: (google.cloud.modelarmor.v1.IVirusDetail[]|null);
                }

                /** Represents a VirusScanFilterResult. */
                class VirusScanFilterResult implements IVirusScanFilterResult {

                    /**
                     * Constructs a new VirusScanFilterResult.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.modelarmor.v1.IVirusScanFilterResult);

                    /** VirusScanFilterResult executionState. */
                    public executionState: (google.cloud.modelarmor.v1.FilterExecutionState|keyof typeof google.cloud.modelarmor.v1.FilterExecutionState);

                    /** VirusScanFilterResult messageItems. */
                    public messageItems: google.cloud.modelarmor.v1.IMessageItem[];

                    /** VirusScanFilterResult matchState. */
                    public matchState: (google.cloud.modelarmor.v1.FilterMatchState|keyof typeof google.cloud.modelarmor.v1.FilterMatchState);

                    /** VirusScanFilterResult scannedContentType. */
                    public scannedContentType: (google.cloud.modelarmor.v1.VirusScanFilterResult.ScannedContentType|keyof typeof google.cloud.modelarmor.v1.VirusScanFilterResult.ScannedContentType);

                    /** VirusScanFilterResult scannedSize. */
                    public scannedSize?: (number|Long|string|null);

                    /** VirusScanFilterResult virusDetails. */
                    public virusDetails: google.cloud.modelarmor.v1.IVirusDetail[];

                    /**
                     * Creates a new VirusScanFilterResult instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns VirusScanFilterResult instance
                     */
                    public static create(properties?: google.cloud.modelarmor.v1.IVirusScanFilterResult): google.cloud.modelarmor.v1.VirusScanFilterResult;

                    /**
                     * Encodes the specified VirusScanFilterResult message. Does not implicitly {@link google.cloud.modelarmor.v1.VirusScanFilterResult.verify|verify} messages.
                     * @param message VirusScanFilterResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.modelarmor.v1.IVirusScanFilterResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified VirusScanFilterResult message, length delimited. Does not implicitly {@link google.cloud.modelarmor.v1.VirusScanFilterResult.verify|verify} messages.
                     * @param message VirusScanFilterResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.modelarmor.v1.IVirusScanFilterResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a VirusScanFilterResult message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns VirusScanFilterResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.modelarmor.v1.VirusScanFilterResult;

                    /**
                     * Decodes a VirusScanFilterResult message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns VirusScanFilterResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.modelarmor.v1.VirusScanFilterResult;

                    /**
                     * Verifies a VirusScanFilterResult message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a VirusScanFilterResult message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns VirusScanFilterResult
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.modelarmor.v1.VirusScanFilterResult;

                    /**
                     * Creates a plain object from a VirusScanFilterResult message. Also converts values to other types if specified.
                     * @param message VirusScanFilterResult
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.modelarmor.v1.VirusScanFilterResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this VirusScanFilterResult to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for VirusScanFilterResult
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace VirusScanFilterResult {

                    /** ScannedContentType enum. */
                    enum ScannedContentType {
                        SCANNED_CONTENT_TYPE_UNSPECIFIED = 0,
                        UNKNOWN = 1,
                        PLAINTEXT = 2,
                        PDF = 3
                    }
                }

                /** Properties of a VirusDetail. */
                interface IVirusDetail {

                    /** VirusDetail vendor */
                    vendor?: (string|null);

                    /** VirusDetail names */
                    names?: (string[]|null);

                    /** VirusDetail threatType */
                    threatType?: (google.cloud.modelarmor.v1.VirusDetail.ThreatType|keyof typeof google.cloud.modelarmor.v1.VirusDetail.ThreatType|null);
                }

                /** Represents a VirusDetail. */
                class VirusDetail implements IVirusDetail {

                    /**
                     * Constructs a new VirusDetail.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.modelarmor.v1.IVirusDetail);

                    /** VirusDetail vendor. */
                    public vendor: string;

                    /** VirusDetail names. */
                    public names: string[];

                    /** VirusDetail threatType. */
                    public threatType: (google.cloud.modelarmor.v1.VirusDetail.ThreatType|keyof typeof google.cloud.modelarmor.v1.VirusDetail.ThreatType);

                    /**
                     * Creates a new VirusDetail instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns VirusDetail instance
                     */
                    public static create(properties?: google.cloud.modelarmor.v1.IVirusDetail): google.cloud.modelarmor.v1.VirusDetail;

                    /**
                     * Encodes the specified VirusDetail message. Does not implicitly {@link google.cloud.modelarmor.v1.VirusDetail.verify|verify} messages.
                     * @param message VirusDetail message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.modelarmor.v1.IVirusDetail, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified VirusDetail message, length delimited. Does not implicitly {@link google.cloud.modelarmor.v1.VirusDetail.verify|verify} messages.
                     * @param message VirusDetail message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.modelarmor.v1.IVirusDetail, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a VirusDetail message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns VirusDetail
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.modelarmor.v1.VirusDetail;

                    /**
                     * Decodes a VirusDetail message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns VirusDetail
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.modelarmor.v1.VirusDetail;

                    /**
                     * Verifies a VirusDetail message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a VirusDetail message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns VirusDetail
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.modelarmor.v1.VirusDetail;

                    /**
                     * Creates a plain object from a VirusDetail message. Also converts values to other types if specified.
                     * @param message VirusDetail
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.modelarmor.v1.VirusDetail, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this VirusDetail to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for VirusDetail
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace VirusDetail {

                    /** ThreatType enum. */
                    enum ThreatType {
                        THREAT_TYPE_UNSPECIFIED = 0,
                        UNKNOWN = 1,
                        VIRUS_OR_WORM = 2,
                        MALICIOUS_PROGRAM = 3,
                        POTENTIALLY_HARMFUL_CONTENT = 4,
                        POTENTIALLY_UNWANTED_CONTENT = 5
                    }
                }

                /** Properties of a CsamFilterResult. */
                interface ICsamFilterResult {

                    /** CsamFilterResult executionState */
                    executionState?: (google.cloud.modelarmor.v1.FilterExecutionState|keyof typeof google.cloud.modelarmor.v1.FilterExecutionState|null);

                    /** CsamFilterResult messageItems */
                    messageItems?: (google.cloud.modelarmor.v1.IMessageItem[]|null);

                    /** CsamFilterResult matchState */
                    matchState?: (google.cloud.modelarmor.v1.FilterMatchState|keyof typeof google.cloud.modelarmor.v1.FilterMatchState|null);
                }

                /** Represents a CsamFilterResult. */
                class CsamFilterResult implements ICsamFilterResult {

                    /**
                     * Constructs a new CsamFilterResult.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.modelarmor.v1.ICsamFilterResult);

                    /** CsamFilterResult executionState. */
                    public executionState: (google.cloud.modelarmor.v1.FilterExecutionState|keyof typeof google.cloud.modelarmor.v1.FilterExecutionState);

                    /** CsamFilterResult messageItems. */
                    public messageItems: google.cloud.modelarmor.v1.IMessageItem[];

                    /** CsamFilterResult matchState. */
                    public matchState: (google.cloud.modelarmor.v1.FilterMatchState|keyof typeof google.cloud.modelarmor.v1.FilterMatchState);

                    /**
                     * Creates a new CsamFilterResult instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CsamFilterResult instance
                     */
                    public static create(properties?: google.cloud.modelarmor.v1.ICsamFilterResult): google.cloud.modelarmor.v1.CsamFilterResult;

                    /**
                     * Encodes the specified CsamFilterResult message. Does not implicitly {@link google.cloud.modelarmor.v1.CsamFilterResult.verify|verify} messages.
                     * @param message CsamFilterResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.modelarmor.v1.ICsamFilterResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CsamFilterResult message, length delimited. Does not implicitly {@link google.cloud.modelarmor.v1.CsamFilterResult.verify|verify} messages.
                     * @param message CsamFilterResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.modelarmor.v1.ICsamFilterResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CsamFilterResult message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CsamFilterResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.modelarmor.v1.CsamFilterResult;

                    /**
                     * Decodes a CsamFilterResult message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CsamFilterResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.modelarmor.v1.CsamFilterResult;

                    /**
                     * Verifies a CsamFilterResult message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CsamFilterResult message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CsamFilterResult
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.modelarmor.v1.CsamFilterResult;

                    /**
                     * Creates a plain object from a CsamFilterResult message. Also converts values to other types if specified.
                     * @param message CsamFilterResult
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.modelarmor.v1.CsamFilterResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CsamFilterResult to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CsamFilterResult
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a MessageItem. */
                interface IMessageItem {

                    /** MessageItem messageType */
                    messageType?: (google.cloud.modelarmor.v1.MessageItem.MessageType|keyof typeof google.cloud.modelarmor.v1.MessageItem.MessageType|null);

                    /** MessageItem message */
                    message?: (string|null);
                }

                /** Represents a MessageItem. */
                class MessageItem implements IMessageItem {

                    /**
                     * Constructs a new MessageItem.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.modelarmor.v1.IMessageItem);

                    /** MessageItem messageType. */
                    public messageType: (google.cloud.modelarmor.v1.MessageItem.MessageType|keyof typeof google.cloud.modelarmor.v1.MessageItem.MessageType);

                    /** MessageItem message. */
                    public message: string;

                    /**
                     * Creates a new MessageItem instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MessageItem instance
                     */
                    public static create(properties?: google.cloud.modelarmor.v1.IMessageItem): google.cloud.modelarmor.v1.MessageItem;

                    /**
                     * Encodes the specified MessageItem message. Does not implicitly {@link google.cloud.modelarmor.v1.MessageItem.verify|verify} messages.
                     * @param message MessageItem message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.modelarmor.v1.IMessageItem, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MessageItem message, length delimited. Does not implicitly {@link google.cloud.modelarmor.v1.MessageItem.verify|verify} messages.
                     * @param message MessageItem message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.modelarmor.v1.IMessageItem, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MessageItem message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MessageItem
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.modelarmor.v1.MessageItem;

                    /**
                     * Decodes a MessageItem message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MessageItem
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.modelarmor.v1.MessageItem;

                    /**
                     * Verifies a MessageItem message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MessageItem message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MessageItem
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.modelarmor.v1.MessageItem;

                    /**
                     * Creates a plain object from a MessageItem message. Also converts values to other types if specified.
                     * @param message MessageItem
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.modelarmor.v1.MessageItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MessageItem to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for MessageItem
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace MessageItem {

                    /** MessageType enum. */
                    enum MessageType {
                        MESSAGE_TYPE_UNSPECIFIED = 0,
                        INFO = 1,
                        WARNING = 2,
                        ERROR = 3
                    }
                }

                /** Properties of a RangeInfo. */
                interface IRangeInfo {

                    /** RangeInfo start */
                    start?: (number|Long|string|null);

                    /** RangeInfo end */
                    end?: (number|Long|string|null);
                }

                /** Represents a RangeInfo. */
                class RangeInfo implements IRangeInfo {

                    /**
                     * Constructs a new RangeInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.modelarmor.v1.IRangeInfo);

                    /** RangeInfo start. */
                    public start?: (number|Long|string|null);

                    /** RangeInfo end. */
                    public end?: (number|Long|string|null);

                    /**
                     * Creates a new RangeInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RangeInfo instance
                     */
                    public static create(properties?: google.cloud.modelarmor.v1.IRangeInfo): google.cloud.modelarmor.v1.RangeInfo;

                    /**
                     * Encodes the specified RangeInfo message. Does not implicitly {@link google.cloud.modelarmor.v1.RangeInfo.verify|verify} messages.
                     * @param message RangeInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.modelarmor.v1.IRangeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RangeInfo message, length delimited. Does not implicitly {@link google.cloud.modelarmor.v1.RangeInfo.verify|verify} messages.
                     * @param message RangeInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.modelarmor.v1.IRangeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RangeInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RangeInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.modelarmor.v1.RangeInfo;

                    /**
                     * Decodes a RangeInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RangeInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.modelarmor.v1.RangeInfo;

                    /**
                     * Verifies a RangeInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RangeInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RangeInfo
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.modelarmor.v1.RangeInfo;

                    /**
                     * Creates a plain object from a RangeInfo message. Also converts values to other types if specified.
                     * @param message RangeInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.modelarmor.v1.RangeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RangeInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RangeInfo
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }

            /** Namespace v1beta. */
            namespace v1beta {

                /** Represents a ModelArmor */
                class ModelArmor extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new ModelArmor service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new ModelArmor service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): ModelArmor;

                    /**
                     * Calls ListTemplates.
                     * @param request ListTemplatesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListTemplatesResponse
                     */
                    public listTemplates(request: google.cloud.modelarmor.v1beta.IListTemplatesRequest, callback: google.cloud.modelarmor.v1beta.ModelArmor.ListTemplatesCallback): void;

                    /**
                     * Calls ListTemplates.
                     * @param request ListTemplatesRequest message or plain object
                     * @returns Promise
                     */
                    public listTemplates(request: google.cloud.modelarmor.v1beta.IListTemplatesRequest): Promise<google.cloud.modelarmor.v1beta.ListTemplatesResponse>;

                    /**
                     * Calls GetTemplate.
                     * @param request GetTemplateRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Template
                     */
                    public getTemplate(request: google.cloud.modelarmor.v1beta.IGetTemplateRequest, callback: google.cloud.modelarmor.v1beta.ModelArmor.GetTemplateCallback): void;

                    /**
                     * Calls GetTemplate.
                     * @param request GetTemplateRequest message or plain object
                     * @returns Promise
                     */
                    public getTemplate(request: google.cloud.modelarmor.v1beta.IGetTemplateRequest): Promise<google.cloud.modelarmor.v1beta.Template>;

                    /**
                     * Calls CreateTemplate.
                     * @param request CreateTemplateRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Template
                     */
                    public createTemplate(request: google.cloud.modelarmor.v1beta.ICreateTemplateRequest, callback: google.cloud.modelarmor.v1beta.ModelArmor.CreateTemplateCallback): void;

                    /**
                     * Calls CreateTemplate.
                     * @param request CreateTemplateRequest message or plain object
                     * @returns Promise
                     */
                    public createTemplate(request: google.cloud.modelarmor.v1beta.ICreateTemplateRequest): Promise<google.cloud.modelarmor.v1beta.Template>;

                    /**
                     * Calls UpdateTemplate.
                     * @param request UpdateTemplateRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Template
                     */
                    public updateTemplate(request: google.cloud.modelarmor.v1beta.IUpdateTemplateRequest, callback: google.cloud.modelarmor.v1beta.ModelArmor.UpdateTemplateCallback): void;

                    /**
                     * Calls UpdateTemplate.
                     * @param request UpdateTemplateRequest message or plain object
                     * @returns Promise
                     */
                    public updateTemplate(request: google.cloud.modelarmor.v1beta.IUpdateTemplateRequest): Promise<google.cloud.modelarmor.v1beta.Template>;

                    /**
                     * Calls DeleteTemplate.
                     * @param request DeleteTemplateRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteTemplate(request: google.cloud.modelarmor.v1beta.IDeleteTemplateRequest, callback: google.cloud.modelarmor.v1beta.ModelArmor.DeleteTemplateCallback): void;

                    /**
                     * Calls DeleteTemplate.
                     * @param request DeleteTemplateRequest message or plain object
                     * @returns Promise
                     */
                    public deleteTemplate(request: google.cloud.modelarmor.v1beta.IDeleteTemplateRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls GetFloorSetting.
                     * @param request GetFloorSettingRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and FloorSetting
                     */
                    public getFloorSetting(request: google.cloud.modelarmor.v1beta.IGetFloorSettingRequest, callback: google.cloud.modelarmor.v1beta.ModelArmor.GetFloorSettingCallback): void;

                    /**
                     * Calls GetFloorSetting.
                     * @param request GetFloorSettingRequest message or plain object
                     * @returns Promise
                     */
                    public getFloorSetting(request: google.cloud.modelarmor.v1beta.IGetFloorSettingRequest): Promise<google.cloud.modelarmor.v1beta.FloorSetting>;

                    /**
                     * Calls UpdateFloorSetting.
                     * @param request UpdateFloorSettingRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and FloorSetting
                     */
                    public updateFloorSetting(request: google.cloud.modelarmor.v1beta.IUpdateFloorSettingRequest, callback: google.cloud.modelarmor.v1beta.ModelArmor.UpdateFloorSettingCallback): void;

                    /**
                     * Calls UpdateFloorSetting.
                     * @param request UpdateFloorSettingRequest message or plain object
                     * @returns Promise
                     */
                    public updateFloorSetting(request: google.cloud.modelarmor.v1beta.IUpdateFloorSettingRequest): Promise<google.cloud.modelarmor.v1beta.FloorSetting>;

                    /**
                     * Calls SanitizeUserPrompt.
                     * @param request SanitizeUserPromptRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and SanitizeUserPromptResponse
                     */
                    public sanitizeUserPrompt(request: google.cloud.modelarmor.v1beta.ISanitizeUserPromptRequest, callback: google.cloud.modelarmor.v1beta.ModelArmor.SanitizeUserPromptCallback): void;

                    /**
                     * Calls SanitizeUserPrompt.
                     * @param request SanitizeUserPromptRequest message or plain object
                     * @returns Promise
                     */
                    public sanitizeUserPrompt(request: google.cloud.modelarmor.v1beta.ISanitizeUserPromptRequest): Promise<google.cloud.modelarmor.v1beta.SanitizeUserPromptResponse>;

                    /**
                     * Calls SanitizeModelResponse.
                     * @param request SanitizeModelResponseRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and SanitizeModelResponseResponse
                     */
                    public sanitizeModelResponse(request: google.cloud.modelarmor.v1beta.ISanitizeModelResponseRequest, callback: google.cloud.modelarmor.v1beta.ModelArmor.SanitizeModelResponseCallback): void;

                    /**
                     * Calls SanitizeModelResponse.
                     * @param request SanitizeModelResponseRequest message or plain object
                     * @returns Promise
                     */
                    public sanitizeModelResponse(request: google.cloud.modelarmor.v1beta.ISanitizeModelResponseRequest): Promise<google.cloud.modelarmor.v1beta.SanitizeModelResponseResponse>;
                }

                namespace ModelArmor {

                    /**
                     * Callback as used by {@link google.cloud.modelarmor.v1beta.ModelArmor|listTemplates}.
                     * @param error Error, if any
                     * @param [response] ListTemplatesResponse
                     */
                    type ListTemplatesCallback = (error: (Error|null), response?: google.cloud.modelarmor.v1beta.ListTemplatesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.modelarmor.v1beta.ModelArmor|getTemplate}.
                     * @param error Error, if any
                     * @param [response] Template
                     */
                    type GetTemplateCallback = (error: (Error|null), response?: google.cloud.modelarmor.v1beta.Template) => void;

                    /**
                     * Callback as used by {@link google.cloud.modelarmor.v1beta.ModelArmor|createTemplate}.
                     * @param error Error, if any
                     * @param [response] Template
                     */
                    type CreateTemplateCallback = (error: (Error|null), response?: google.cloud.modelarmor.v1beta.Template) => void;

                    /**
                     * Callback as used by {@link google.cloud.modelarmor.v1beta.ModelArmor|updateTemplate}.
                     * @param error Error, if any
                     * @param [response] Template
                     */
                    type UpdateTemplateCallback = (error: (Error|null), response?: google.cloud.modelarmor.v1beta.Template) => void;

                    /**
                     * Callback as used by {@link google.cloud.modelarmor.v1beta.ModelArmor|deleteTemplate}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteTemplateCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.modelarmor.v1beta.ModelArmor|getFloorSetting}.
                     * @param error Error, if any
                     * @param [response] FloorSetting
                     */
                    type GetFloorSettingCallback = (error: (Error|null), response?: google.cloud.modelarmor.v1beta.FloorSetting) => void;

                    /**
                     * Callback as used by {@link google.cloud.modelarmor.v1beta.ModelArmor|updateFloorSetting}.
                     * @param error Error, if any
                     * @param [response] FloorSetting
                     */
                    type UpdateFloorSettingCallback = (error: (Error|null), response?: google.cloud.modelarmor.v1beta.FloorSetting) => void;

                    /**
                     * Callback as used by {@link google.cloud.modelarmor.v1beta.ModelArmor|sanitizeUserPrompt}.
                     * @param error Error, if any
                     * @param [response] SanitizeUserPromptResponse
                     */
                    type SanitizeUserPromptCallback = (error: (Error|null), response?: google.cloud.modelarmor.v1beta.SanitizeUserPromptResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.modelarmor.v1beta.ModelArmor|sanitizeModelResponse}.
                     * @param error Error, if any
                     * @param [response] SanitizeModelResponseResponse
                     */
                    type SanitizeModelResponseCallback = (error: (Error|null), response?: google.cloud.modelarmor.v1beta.SanitizeModelResponseResponse) => void;
                }

                /** FilterMatchState enum. */
                enum FilterMatchState {
                    FILTER_MATCH_STATE_UNSPECIFIED = 0,
                    NO_MATCH_FOUND = 1,
                    MATCH_FOUND = 2
                }

                /** FilterExecutionState enum. */
                enum FilterExecutionState {
                    FILTER_EXECUTION_STATE_UNSPECIFIED = 0,
                    EXECUTION_SUCCESS = 1,
                    EXECUTION_SKIPPED = 2
                }

                /** RaiFilterType enum. */
                enum RaiFilterType {
                    RAI_FILTER_TYPE_UNSPECIFIED = 0,
                    SEXUALLY_EXPLICIT = 2,
                    HATE_SPEECH = 3,
                    HARASSMENT = 6,
                    DANGEROUS = 17
                }

                /** DetectionConfidenceLevel enum. */
                enum DetectionConfidenceLevel {
                    DETECTION_CONFIDENCE_LEVEL_UNSPECIFIED = 0,
                    LOW_AND_ABOVE = 1,
                    MEDIUM_AND_ABOVE = 2,
                    HIGH = 3
                }

                /** SdpFindingLikelihood enum. */
                enum SdpFindingLikelihood {
                    SDP_FINDING_LIKELIHOOD_UNSPECIFIED = 0,
                    VERY_UNLIKELY = 1,
                    UNLIKELY = 2,
                    POSSIBLE = 3,
                    LIKELY = 4,
                    VERY_LIKELY = 5
                }

                /** InvocationResult enum. */
                enum InvocationResult {
                    INVOCATION_RESULT_UNSPECIFIED = 0,
                    SUCCESS = 1,
                    PARTIAL = 2,
                    FAILURE = 3
                }

                /** Properties of a Template. */
                interface ITemplate {

                    /** Template name */
                    name?: (string|null);

                    /** Template createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Template updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** Template labels */
                    labels?: ({ [k: string]: string }|null);

                    /** Template filterConfig */
                    filterConfig?: (google.cloud.modelarmor.v1beta.IFilterConfig|null);

                    /** Template templateMetadata */
                    templateMetadata?: (google.cloud.modelarmor.v1beta.Template.ITemplateMetadata|null);
                }

                /** Represents a Template. */
                class Template implements ITemplate {

                    /**
                     * Constructs a new Template.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.modelarmor.v1beta.ITemplate);

                    /** Template name. */
                    public name: string;

                    /** Template createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Template updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** Template labels. */
                    public labels: { [k: string]: string };

                    /** Template filterConfig. */
                    public filterConfig?: (google.cloud.modelarmor.v1beta.IFilterConfig|null);

                    /** Template templateMetadata. */
                    public templateMetadata?: (google.cloud.modelarmor.v1beta.Template.ITemplateMetadata|null);

                    /**
                     * Creates a new Template instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Template instance
                     */
                    public static create(properties?: google.cloud.modelarmor.v1beta.ITemplate): google.cloud.modelarmor.v1beta.Template;

                    /**
                     * Encodes the specified Template message. Does not implicitly {@link google.cloud.modelarmor.v1beta.Template.verify|verify} messages.
                     * @param message Template message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.modelarmor.v1beta.ITemplate, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Template message, length delimited. Does not implicitly {@link google.cloud.modelarmor.v1beta.Template.verify|verify} messages.
                     * @param message Template message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.modelarmor.v1beta.ITemplate, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Template message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Template
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.modelarmor.v1beta.Template;

                    /**
                     * Decodes a Template message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Template
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.modelarmor.v1beta.Template;

                    /**
                     * Verifies a Template message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Template message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Template
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.modelarmor.v1beta.Template;

                    /**
                     * Creates a plain object from a Template message. Also converts values to other types if specified.
                     * @param message Template
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.modelarmor.v1beta.Template, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Template to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Template
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Template {

                    /** Properties of a TemplateMetadata. */
                    interface ITemplateMetadata {

                        /** TemplateMetadata ignorePartialInvocationFailures */
                        ignorePartialInvocationFailures?: (boolean|null);

                        /** TemplateMetadata customPromptSafetyErrorCode */
                        customPromptSafetyErrorCode?: (number|null);

                        /** TemplateMetadata customPromptSafetyErrorMessage */
                        customPromptSafetyErrorMessage?: (string|null);

                        /** TemplateMetadata customLlmResponseSafetyErrorCode */
                        customLlmResponseSafetyErrorCode?: (number|null);

                        /** TemplateMetadata customLlmResponseSafetyErrorMessage */
                        customLlmResponseSafetyErrorMessage?: (string|null);

                        /** TemplateMetadata logTemplateOperations */
                        logTemplateOperations?: (boolean|null);

                        /** TemplateMetadata logSanitizeOperations */
                        logSanitizeOperations?: (boolean|null);

                        /** TemplateMetadata enforcementType */
                        enforcementType?: (google.cloud.modelarmor.v1beta.Template.TemplateMetadata.EnforcementType|keyof typeof google.cloud.modelarmor.v1beta.Template.TemplateMetadata.EnforcementType|null);

                        /** TemplateMetadata multiLanguageDetection */
                        multiLanguageDetection?: (google.cloud.modelarmor.v1beta.Template.TemplateMetadata.IMultiLanguageDetection|null);
                    }

                    /** Represents a TemplateMetadata. */
                    class TemplateMetadata implements ITemplateMetadata {

                        /**
                         * Constructs a new TemplateMetadata.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.modelarmor.v1beta.Template.ITemplateMetadata);

                        /** TemplateMetadata ignorePartialInvocationFailures. */
                        public ignorePartialInvocationFailures: boolean;

                        /** TemplateMetadata customPromptSafetyErrorCode. */
                        public customPromptSafetyErrorCode: number;

                        /** TemplateMetadata customPromptSafetyErrorMessage. */
                        public customPromptSafetyErrorMessage: string;

                        /** TemplateMetadata customLlmResponseSafetyErrorCode. */
                        public customLlmResponseSafetyErrorCode: number;

                        /** TemplateMetadata customLlmResponseSafetyErrorMessage. */
                        public customLlmResponseSafetyErrorMessage: string;

                        /** TemplateMetadata logTemplateOperations. */
                        public logTemplateOperations: boolean;

                        /** TemplateMetadata logSanitizeOperations. */
                        public logSanitizeOperations: boolean;

                        /** TemplateMetadata enforcementType. */
                        public enforcementType: (google.cloud.modelarmor.v1beta.Template.TemplateMetadata.EnforcementType|keyof typeof google.cloud.modelarmor.v1beta.Template.TemplateMetadata.EnforcementType);

                        /** TemplateMetadata multiLanguageDetection. */
                        public multiLanguageDetection?: (google.cloud.modelarmor.v1beta.Template.TemplateMetadata.IMultiLanguageDetection|null);

                        /**
                         * Creates a new TemplateMetadata instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns TemplateMetadata instance
                         */
                        public static create(properties?: google.cloud.modelarmor.v1beta.Template.ITemplateMetadata): google.cloud.modelarmor.v1beta.Template.TemplateMetadata;

                        /**
                         * Encodes the specified TemplateMetadata message. Does not implicitly {@link google.cloud.modelarmor.v1beta.Template.TemplateMetadata.verify|verify} messages.
                         * @param message TemplateMetadata message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.modelarmor.v1beta.Template.ITemplateMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified TemplateMetadata message, length delimited. Does not implicitly {@link google.cloud.modelarmor.v1beta.Template.TemplateMetadata.verify|verify} messages.
                         * @param message TemplateMetadata message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.modelarmor.v1beta.Template.ITemplateMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a TemplateMetadata message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns TemplateMetadata
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.modelarmor.v1beta.Template.TemplateMetadata;

                        /**
                         * Decodes a TemplateMetadata message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns TemplateMetadata
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.modelarmor.v1beta.Template.TemplateMetadata;

                        /**
                         * Verifies a TemplateMetadata message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a TemplateMetadata message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns TemplateMetadata
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.modelarmor.v1beta.Template.TemplateMetadata;

                        /**
                         * Creates a plain object from a TemplateMetadata message. Also converts values to other types if specified.
                         * @param message TemplateMetadata
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.modelarmor.v1beta.Template.TemplateMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this TemplateMetadata to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for TemplateMetadata
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace TemplateMetadata {

                        /** Properties of a MultiLanguageDetection. */
                        interface IMultiLanguageDetection {

                            /** MultiLanguageDetection enableMultiLanguageDetection */
                            enableMultiLanguageDetection?: (boolean|null);
                        }

                        /** Represents a MultiLanguageDetection. */
                        class MultiLanguageDetection implements IMultiLanguageDetection {

                            /**
                             * Constructs a new MultiLanguageDetection.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.modelarmor.v1beta.Template.TemplateMetadata.IMultiLanguageDetection);

                            /** MultiLanguageDetection enableMultiLanguageDetection. */
                            public enableMultiLanguageDetection: boolean;

                            /**
                             * Creates a new MultiLanguageDetection instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns MultiLanguageDetection instance
                             */
                            public static create(properties?: google.cloud.modelarmor.v1beta.Template.TemplateMetadata.IMultiLanguageDetection): google.cloud.modelarmor.v1beta.Template.TemplateMetadata.MultiLanguageDetection;

                            /**
                             * Encodes the specified MultiLanguageDetection message. Does not implicitly {@link google.cloud.modelarmor.v1beta.Template.TemplateMetadata.MultiLanguageDetection.verify|verify} messages.
                             * @param message MultiLanguageDetection message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.modelarmor.v1beta.Template.TemplateMetadata.IMultiLanguageDetection, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified MultiLanguageDetection message, length delimited. Does not implicitly {@link google.cloud.modelarmor.v1beta.Template.TemplateMetadata.MultiLanguageDetection.verify|verify} messages.
                             * @param message MultiLanguageDetection message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.modelarmor.v1beta.Template.TemplateMetadata.IMultiLanguageDetection, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a MultiLanguageDetection message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns MultiLanguageDetection
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.modelarmor.v1beta.Template.TemplateMetadata.MultiLanguageDetection;

                            /**
                             * Decodes a MultiLanguageDetection message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns MultiLanguageDetection
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.modelarmor.v1beta.Template.TemplateMetadata.MultiLanguageDetection;

                            /**
                             * Verifies a MultiLanguageDetection message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a MultiLanguageDetection message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns MultiLanguageDetection
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.modelarmor.v1beta.Template.TemplateMetadata.MultiLanguageDetection;

                            /**
                             * Creates a plain object from a MultiLanguageDetection message. Also converts values to other types if specified.
                             * @param message MultiLanguageDetection
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.modelarmor.v1beta.Template.TemplateMetadata.MultiLanguageDetection, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this MultiLanguageDetection to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for MultiLanguageDetection
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** EnforcementType enum. */
                        enum EnforcementType {
                            ENFORCEMENT_TYPE_UNSPECIFIED = 0,
                            INSPECT_ONLY = 1,
                            INSPECT_AND_BLOCK = 2
                        }
                    }
                }

                /** Properties of a FloorSetting. */
                interface IFloorSetting {

                    /** FloorSetting name */
                    name?: (string|null);

                    /** FloorSetting createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** FloorSetting updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** FloorSetting filterConfig */
                    filterConfig?: (google.cloud.modelarmor.v1beta.IFilterConfig|null);

                    /** FloorSetting enableFloorSettingEnforcement */
                    enableFloorSettingEnforcement?: (boolean|null);

                    /** FloorSetting integratedServices */
                    integratedServices?: (google.cloud.modelarmor.v1beta.FloorSetting.IntegratedService[]|null);

                    /** FloorSetting aiPlatformFloorSetting */
                    aiPlatformFloorSetting?: (google.cloud.modelarmor.v1beta.IAiPlatformFloorSetting|null);

                    /** FloorSetting floorSettingMetadata */
                    floorSettingMetadata?: (google.cloud.modelarmor.v1beta.FloorSetting.IFloorSettingMetadata|null);
                }

                /** Represents a FloorSetting. */
                class FloorSetting implements IFloorSetting {

                    /**
                     * Constructs a new FloorSetting.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.modelarmor.v1beta.IFloorSetting);

                    /** FloorSetting name. */
                    public name: string;

                    /** FloorSetting createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** FloorSetting updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** FloorSetting filterConfig. */
                    public filterConfig?: (google.cloud.modelarmor.v1beta.IFilterConfig|null);

                    /** FloorSetting enableFloorSettingEnforcement. */
                    public enableFloorSettingEnforcement?: (boolean|null);

                    /** FloorSetting integratedServices. */
                    public integratedServices: google.cloud.modelarmor.v1beta.FloorSetting.IntegratedService[];

                    /** FloorSetting aiPlatformFloorSetting. */
                    public aiPlatformFloorSetting?: (google.cloud.modelarmor.v1beta.IAiPlatformFloorSetting|null);

                    /** FloorSetting floorSettingMetadata. */
                    public floorSettingMetadata?: (google.cloud.modelarmor.v1beta.FloorSetting.IFloorSettingMetadata|null);

                    /**
                     * Creates a new FloorSetting instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns FloorSetting instance
                     */
                    public static create(properties?: google.cloud.modelarmor.v1beta.IFloorSetting): google.cloud.modelarmor.v1beta.FloorSetting;

                    /**
                     * Encodes the specified FloorSetting message. Does not implicitly {@link google.cloud.modelarmor.v1beta.FloorSetting.verify|verify} messages.
                     * @param message FloorSetting message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.modelarmor.v1beta.IFloorSetting, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified FloorSetting message, length delimited. Does not implicitly {@link google.cloud.modelarmor.v1beta.FloorSetting.verify|verify} messages.
                     * @param message FloorSetting message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.modelarmor.v1beta.IFloorSetting, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a FloorSetting message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FloorSetting
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.modelarmor.v1beta.FloorSetting;

                    /**
                     * Decodes a FloorSetting message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns FloorSetting
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.modelarmor.v1beta.FloorSetting;

                    /**
                     * Verifies a FloorSetting message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a FloorSetting message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns FloorSetting
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.modelarmor.v1beta.FloorSetting;

                    /**
                     * Creates a plain object from a FloorSetting message. Also converts values to other types if specified.
                     * @param message FloorSetting
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.modelarmor.v1beta.FloorSetting, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this FloorSetting to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for FloorSetting
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace FloorSetting {

                    /** Properties of a FloorSettingMetadata. */
                    interface IFloorSettingMetadata {

                        /** FloorSettingMetadata multiLanguageDetection */
                        multiLanguageDetection?: (google.cloud.modelarmor.v1beta.FloorSetting.FloorSettingMetadata.IMultiLanguageDetection|null);
                    }

                    /** Represents a FloorSettingMetadata. */
                    class FloorSettingMetadata implements IFloorSettingMetadata {

                        /**
                         * Constructs a new FloorSettingMetadata.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.modelarmor.v1beta.FloorSetting.IFloorSettingMetadata);

                        /** FloorSettingMetadata multiLanguageDetection. */
                        public multiLanguageDetection?: (google.cloud.modelarmor.v1beta.FloorSetting.FloorSettingMetadata.IMultiLanguageDetection|null);

                        /**
                         * Creates a new FloorSettingMetadata instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns FloorSettingMetadata instance
                         */
                        public static create(properties?: google.cloud.modelarmor.v1beta.FloorSetting.IFloorSettingMetadata): google.cloud.modelarmor.v1beta.FloorSetting.FloorSettingMetadata;

                        /**
                         * Encodes the specified FloorSettingMetadata message. Does not implicitly {@link google.cloud.modelarmor.v1beta.FloorSetting.FloorSettingMetadata.verify|verify} messages.
                         * @param message FloorSettingMetadata message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.modelarmor.v1beta.FloorSetting.IFloorSettingMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified FloorSettingMetadata message, length delimited. Does not implicitly {@link google.cloud.modelarmor.v1beta.FloorSetting.FloorSettingMetadata.verify|verify} messages.
                         * @param message FloorSettingMetadata message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.modelarmor.v1beta.FloorSetting.IFloorSettingMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a FloorSettingMetadata message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns FloorSettingMetadata
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.modelarmor.v1beta.FloorSetting.FloorSettingMetadata;

                        /**
                         * Decodes a FloorSettingMetadata message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns FloorSettingMetadata
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.modelarmor.v1beta.FloorSetting.FloorSettingMetadata;

                        /**
                         * Verifies a FloorSettingMetadata message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a FloorSettingMetadata message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns FloorSettingMetadata
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.modelarmor.v1beta.FloorSetting.FloorSettingMetadata;

                        /**
                         * Creates a plain object from a FloorSettingMetadata message. Also converts values to other types if specified.
                         * @param message FloorSettingMetadata
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.modelarmor.v1beta.FloorSetting.FloorSettingMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this FloorSettingMetadata to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for FloorSettingMetadata
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace FloorSettingMetadata {

                        /** Properties of a MultiLanguageDetection. */
                        interface IMultiLanguageDetection {

                            /** MultiLanguageDetection enableMultiLanguageDetection */
                            enableMultiLanguageDetection?: (boolean|null);
                        }

                        /** Represents a MultiLanguageDetection. */
                        class MultiLanguageDetection implements IMultiLanguageDetection {

                            /**
                             * Constructs a new MultiLanguageDetection.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.modelarmor.v1beta.FloorSetting.FloorSettingMetadata.IMultiLanguageDetection);

                            /** MultiLanguageDetection enableMultiLanguageDetection. */
                            public enableMultiLanguageDetection: boolean;

                            /**
                             * Creates a new MultiLanguageDetection instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns MultiLanguageDetection instance
                             */
                            public static create(properties?: google.cloud.modelarmor.v1beta.FloorSetting.FloorSettingMetadata.IMultiLanguageDetection): google.cloud.modelarmor.v1beta.FloorSetting.FloorSettingMetadata.MultiLanguageDetection;

                            /**
                             * Encodes the specified MultiLanguageDetection message. Does not implicitly {@link google.cloud.modelarmor.v1beta.FloorSetting.FloorSettingMetadata.MultiLanguageDetection.verify|verify} messages.
                             * @param message MultiLanguageDetection message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.modelarmor.v1beta.FloorSetting.FloorSettingMetadata.IMultiLanguageDetection, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified MultiLanguageDetection message, length delimited. Does not implicitly {@link google.cloud.modelarmor.v1beta.FloorSetting.FloorSettingMetadata.MultiLanguageDetection.verify|verify} messages.
                             * @param message MultiLanguageDetection message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.modelarmor.v1beta.FloorSetting.FloorSettingMetadata.IMultiLanguageDetection, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a MultiLanguageDetection message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns MultiLanguageDetection
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.modelarmor.v1beta.FloorSetting.FloorSettingMetadata.MultiLanguageDetection;

                            /**
                             * Decodes a MultiLanguageDetection message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns MultiLanguageDetection
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.modelarmor.v1beta.FloorSetting.FloorSettingMetadata.MultiLanguageDetection;

                            /**
                             * Verifies a MultiLanguageDetection message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a MultiLanguageDetection message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns MultiLanguageDetection
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.modelarmor.v1beta.FloorSetting.FloorSettingMetadata.MultiLanguageDetection;

                            /**
                             * Creates a plain object from a MultiLanguageDetection message. Also converts values to other types if specified.
                             * @param message MultiLanguageDetection
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.modelarmor.v1beta.FloorSetting.FloorSettingMetadata.MultiLanguageDetection, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this MultiLanguageDetection to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for MultiLanguageDetection
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }
                    }

                    /** IntegratedService enum. */
                    enum IntegratedService {
                        INTEGRATED_SERVICE_UNSPECIFIED = 0,
                        AI_PLATFORM = 1
                    }
                }

                /** Properties of an AiPlatformFloorSetting. */
                interface IAiPlatformFloorSetting {

                    /** AiPlatformFloorSetting inspectOnly */
                    inspectOnly?: (boolean|null);

                    /** AiPlatformFloorSetting inspectAndBlock */
                    inspectAndBlock?: (boolean|null);

                    /** AiPlatformFloorSetting enableCloudLogging */
                    enableCloudLogging?: (boolean|null);
                }

                /** Represents an AiPlatformFloorSetting. */
                class AiPlatformFloorSetting implements IAiPlatformFloorSetting {

                    /**
                     * Constructs a new AiPlatformFloorSetting.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.modelarmor.v1beta.IAiPlatformFloorSetting);

                    /** AiPlatformFloorSetting inspectOnly. */
                    public inspectOnly?: (boolean|null);

                    /** AiPlatformFloorSetting inspectAndBlock. */
                    public inspectAndBlock?: (boolean|null);

                    /** AiPlatformFloorSetting enableCloudLogging. */
                    public enableCloudLogging: boolean;

                    /** AiPlatformFloorSetting enforcementType. */
                    public enforcementType?: ("inspectOnly"|"inspectAndBlock");

                    /**
                     * Creates a new AiPlatformFloorSetting instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AiPlatformFloorSetting instance
                     */
                    public static create(properties?: google.cloud.modelarmor.v1beta.IAiPlatformFloorSetting): google.cloud.modelarmor.v1beta.AiPlatformFloorSetting;

                    /**
                     * Encodes the specified AiPlatformFloorSetting message. Does not implicitly {@link google.cloud.modelarmor.v1beta.AiPlatformFloorSetting.verify|verify} messages.
                     * @param message AiPlatformFloorSetting message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.modelarmor.v1beta.IAiPlatformFloorSetting, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AiPlatformFloorSetting message, length delimited. Does not implicitly {@link google.cloud.modelarmor.v1beta.AiPlatformFloorSetting.verify|verify} messages.
                     * @param message AiPlatformFloorSetting message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.modelarmor.v1beta.IAiPlatformFloorSetting, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AiPlatformFloorSetting message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AiPlatformFloorSetting
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.modelarmor.v1beta.AiPlatformFloorSetting;

                    /**
                     * Decodes an AiPlatformFloorSetting message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AiPlatformFloorSetting
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.modelarmor.v1beta.AiPlatformFloorSetting;

                    /**
                     * Verifies an AiPlatformFloorSetting message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AiPlatformFloorSetting message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AiPlatformFloorSetting
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.modelarmor.v1beta.AiPlatformFloorSetting;

                    /**
                     * Creates a plain object from an AiPlatformFloorSetting message. Also converts values to other types if specified.
                     * @param message AiPlatformFloorSetting
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.modelarmor.v1beta.AiPlatformFloorSetting, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AiPlatformFloorSetting to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AiPlatformFloorSetting
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListTemplatesRequest. */
                interface IListTemplatesRequest {

                    /** ListTemplatesRequest parent */
                    parent?: (string|null);

                    /** ListTemplatesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListTemplatesRequest pageToken */
                    pageToken?: (string|null);

                    /** ListTemplatesRequest filter */
                    filter?: (string|null);

                    /** ListTemplatesRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListTemplatesRequest. */
                class ListTemplatesRequest implements IListTemplatesRequest {

                    /**
                     * Constructs a new ListTemplatesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.modelarmor.v1beta.IListTemplatesRequest);

                    /** ListTemplatesRequest parent. */
                    public parent: string;

                    /** ListTemplatesRequest pageSize. */
                    public pageSize: number;

                    /** ListTemplatesRequest pageToken. */
                    public pageToken: string;

                    /** ListTemplatesRequest filter. */
                    public filter: string;

                    /** ListTemplatesRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListTemplatesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListTemplatesRequest instance
                     */
                    public static create(properties?: google.cloud.modelarmor.v1beta.IListTemplatesRequest): google.cloud.modelarmor.v1beta.ListTemplatesRequest;

                    /**
                     * Encodes the specified ListTemplatesRequest message. Does not implicitly {@link google.cloud.modelarmor.v1beta.ListTemplatesRequest.verify|verify} messages.
                     * @param message ListTemplatesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.modelarmor.v1beta.IListTemplatesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListTemplatesRequest message, length delimited. Does not implicitly {@link google.cloud.modelarmor.v1beta.ListTemplatesRequest.verify|verify} messages.
                     * @param message ListTemplatesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.modelarmor.v1beta.IListTemplatesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListTemplatesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListTemplatesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.modelarmor.v1beta.ListTemplatesRequest;

                    /**
                     * Decodes a ListTemplatesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListTemplatesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.modelarmor.v1beta.ListTemplatesRequest;

                    /**
                     * Verifies a ListTemplatesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListTemplatesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListTemplatesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.modelarmor.v1beta.ListTemplatesRequest;

                    /**
                     * Creates a plain object from a ListTemplatesRequest message. Also converts values to other types if specified.
                     * @param message ListTemplatesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.modelarmor.v1beta.ListTemplatesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListTemplatesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListTemplatesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListTemplatesResponse. */
                interface IListTemplatesResponse {

                    /** ListTemplatesResponse templates */
                    templates?: (google.cloud.modelarmor.v1beta.ITemplate[]|null);

                    /** ListTemplatesResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListTemplatesResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListTemplatesResponse. */
                class ListTemplatesResponse implements IListTemplatesResponse {

                    /**
                     * Constructs a new ListTemplatesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.modelarmor.v1beta.IListTemplatesResponse);

                    /** ListTemplatesResponse templates. */
                    public templates: google.cloud.modelarmor.v1beta.ITemplate[];

                    /** ListTemplatesResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListTemplatesResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListTemplatesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListTemplatesResponse instance
                     */
                    public static create(properties?: google.cloud.modelarmor.v1beta.IListTemplatesResponse): google.cloud.modelarmor.v1beta.ListTemplatesResponse;

                    /**
                     * Encodes the specified ListTemplatesResponse message. Does not implicitly {@link google.cloud.modelarmor.v1beta.ListTemplatesResponse.verify|verify} messages.
                     * @param message ListTemplatesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.modelarmor.v1beta.IListTemplatesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListTemplatesResponse message, length delimited. Does not implicitly {@link google.cloud.modelarmor.v1beta.ListTemplatesResponse.verify|verify} messages.
                     * @param message ListTemplatesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.modelarmor.v1beta.IListTemplatesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListTemplatesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListTemplatesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.modelarmor.v1beta.ListTemplatesResponse;

                    /**
                     * Decodes a ListTemplatesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListTemplatesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.modelarmor.v1beta.ListTemplatesResponse;

                    /**
                     * Verifies a ListTemplatesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListTemplatesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListTemplatesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.modelarmor.v1beta.ListTemplatesResponse;

                    /**
                     * Creates a plain object from a ListTemplatesResponse message. Also converts values to other types if specified.
                     * @param message ListTemplatesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.modelarmor.v1beta.ListTemplatesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListTemplatesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListTemplatesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetTemplateRequest. */
                interface IGetTemplateRequest {

                    /** GetTemplateRequest name */
                    name?: (string|null);
                }

                /** Represents a GetTemplateRequest. */
                class GetTemplateRequest implements IGetTemplateRequest {

                    /**
                     * Constructs a new GetTemplateRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.modelarmor.v1beta.IGetTemplateRequest);

                    /** GetTemplateRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetTemplateRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetTemplateRequest instance
                     */
                    public static create(properties?: google.cloud.modelarmor.v1beta.IGetTemplateRequest): google.cloud.modelarmor.v1beta.GetTemplateRequest;

                    /**
                     * Encodes the specified GetTemplateRequest message. Does not implicitly {@link google.cloud.modelarmor.v1beta.GetTemplateRequest.verify|verify} messages.
                     * @param message GetTemplateRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.modelarmor.v1beta.IGetTemplateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetTemplateRequest message, length delimited. Does not implicitly {@link google.cloud.modelarmor.v1beta.GetTemplateRequest.verify|verify} messages.
                     * @param message GetTemplateRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.modelarmor.v1beta.IGetTemplateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetTemplateRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetTemplateRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.modelarmor.v1beta.GetTemplateRequest;

                    /**
                     * Decodes a GetTemplateRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetTemplateRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.modelarmor.v1beta.GetTemplateRequest;

                    /**
                     * Verifies a GetTemplateRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetTemplateRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetTemplateRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.modelarmor.v1beta.GetTemplateRequest;

                    /**
                     * Creates a plain object from a GetTemplateRequest message. Also converts values to other types if specified.
                     * @param message GetTemplateRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.modelarmor.v1beta.GetTemplateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetTemplateRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetTemplateRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateTemplateRequest. */
                interface ICreateTemplateRequest {

                    /** CreateTemplateRequest parent */
                    parent?: (string|null);

                    /** CreateTemplateRequest templateId */
                    templateId?: (string|null);

                    /** CreateTemplateRequest template */
                    template?: (google.cloud.modelarmor.v1beta.ITemplate|null);

                    /** CreateTemplateRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a CreateTemplateRequest. */
                class CreateTemplateRequest implements ICreateTemplateRequest {

                    /**
                     * Constructs a new CreateTemplateRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.modelarmor.v1beta.ICreateTemplateRequest);

                    /** CreateTemplateRequest parent. */
                    public parent: string;

                    /** CreateTemplateRequest templateId. */
                    public templateId: string;

                    /** CreateTemplateRequest template. */
                    public template?: (google.cloud.modelarmor.v1beta.ITemplate|null);

                    /** CreateTemplateRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new CreateTemplateRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateTemplateRequest instance
                     */
                    public static create(properties?: google.cloud.modelarmor.v1beta.ICreateTemplateRequest): google.cloud.modelarmor.v1beta.CreateTemplateRequest;

                    /**
                     * Encodes the specified CreateTemplateRequest message. Does not implicitly {@link google.cloud.modelarmor.v1beta.CreateTemplateRequest.verify|verify} messages.
                     * @param message CreateTemplateRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.modelarmor.v1beta.ICreateTemplateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateTemplateRequest message, length delimited. Does not implicitly {@link google.cloud.modelarmor.v1beta.CreateTemplateRequest.verify|verify} messages.
                     * @param message CreateTemplateRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.modelarmor.v1beta.ICreateTemplateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateTemplateRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateTemplateRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.modelarmor.v1beta.CreateTemplateRequest;

                    /**
                     * Decodes a CreateTemplateRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateTemplateRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.modelarmor.v1beta.CreateTemplateRequest;

                    /**
                     * Verifies a CreateTemplateRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateTemplateRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateTemplateRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.modelarmor.v1beta.CreateTemplateRequest;

                    /**
                     * Creates a plain object from a CreateTemplateRequest message. Also converts values to other types if specified.
                     * @param message CreateTemplateRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.modelarmor.v1beta.CreateTemplateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateTemplateRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateTemplateRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateTemplateRequest. */
                interface IUpdateTemplateRequest {

                    /** UpdateTemplateRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateTemplateRequest template */
                    template?: (google.cloud.modelarmor.v1beta.ITemplate|null);

                    /** UpdateTemplateRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents an UpdateTemplateRequest. */
                class UpdateTemplateRequest implements IUpdateTemplateRequest {

                    /**
                     * Constructs a new UpdateTemplateRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.modelarmor.v1beta.IUpdateTemplateRequest);

                    /** UpdateTemplateRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateTemplateRequest template. */
                    public template?: (google.cloud.modelarmor.v1beta.ITemplate|null);

                    /** UpdateTemplateRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new UpdateTemplateRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateTemplateRequest instance
                     */
                    public static create(properties?: google.cloud.modelarmor.v1beta.IUpdateTemplateRequest): google.cloud.modelarmor.v1beta.UpdateTemplateRequest;

                    /**
                     * Encodes the specified UpdateTemplateRequest message. Does not implicitly {@link google.cloud.modelarmor.v1beta.UpdateTemplateRequest.verify|verify} messages.
                     * @param message UpdateTemplateRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.modelarmor.v1beta.IUpdateTemplateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateTemplateRequest message, length delimited. Does not implicitly {@link google.cloud.modelarmor.v1beta.UpdateTemplateRequest.verify|verify} messages.
                     * @param message UpdateTemplateRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.modelarmor.v1beta.IUpdateTemplateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateTemplateRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateTemplateRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.modelarmor.v1beta.UpdateTemplateRequest;

                    /**
                     * Decodes an UpdateTemplateRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateTemplateRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.modelarmor.v1beta.UpdateTemplateRequest;

                    /**
                     * Verifies an UpdateTemplateRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateTemplateRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateTemplateRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.modelarmor.v1beta.UpdateTemplateRequest;

                    /**
                     * Creates a plain object from an UpdateTemplateRequest message. Also converts values to other types if specified.
                     * @param message UpdateTemplateRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.modelarmor.v1beta.UpdateTemplateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateTemplateRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateTemplateRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteTemplateRequest. */
                interface IDeleteTemplateRequest {

                    /** DeleteTemplateRequest name */
                    name?: (string|null);

                    /** DeleteTemplateRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a DeleteTemplateRequest. */
                class DeleteTemplateRequest implements IDeleteTemplateRequest {

                    /**
                     * Constructs a new DeleteTemplateRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.modelarmor.v1beta.IDeleteTemplateRequest);

                    /** DeleteTemplateRequest name. */
                    public name: string;

                    /** DeleteTemplateRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new DeleteTemplateRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteTemplateRequest instance
                     */
                    public static create(properties?: google.cloud.modelarmor.v1beta.IDeleteTemplateRequest): google.cloud.modelarmor.v1beta.DeleteTemplateRequest;

                    /**
                     * Encodes the specified DeleteTemplateRequest message. Does not implicitly {@link google.cloud.modelarmor.v1beta.DeleteTemplateRequest.verify|verify} messages.
                     * @param message DeleteTemplateRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.modelarmor.v1beta.IDeleteTemplateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteTemplateRequest message, length delimited. Does not implicitly {@link google.cloud.modelarmor.v1beta.DeleteTemplateRequest.verify|verify} messages.
                     * @param message DeleteTemplateRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.modelarmor.v1beta.IDeleteTemplateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteTemplateRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteTemplateRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.modelarmor.v1beta.DeleteTemplateRequest;

                    /**
                     * Decodes a DeleteTemplateRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteTemplateRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.modelarmor.v1beta.DeleteTemplateRequest;

                    /**
                     * Verifies a DeleteTemplateRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteTemplateRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteTemplateRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.modelarmor.v1beta.DeleteTemplateRequest;

                    /**
                     * Creates a plain object from a DeleteTemplateRequest message. Also converts values to other types if specified.
                     * @param message DeleteTemplateRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.modelarmor.v1beta.DeleteTemplateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteTemplateRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteTemplateRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetFloorSettingRequest. */
                interface IGetFloorSettingRequest {

                    /** GetFloorSettingRequest name */
                    name?: (string|null);
                }

                /** Represents a GetFloorSettingRequest. */
                class GetFloorSettingRequest implements IGetFloorSettingRequest {

                    /**
                     * Constructs a new GetFloorSettingRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.modelarmor.v1beta.IGetFloorSettingRequest);

                    /** GetFloorSettingRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetFloorSettingRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetFloorSettingRequest instance
                     */
                    public static create(properties?: google.cloud.modelarmor.v1beta.IGetFloorSettingRequest): google.cloud.modelarmor.v1beta.GetFloorSettingRequest;

                    /**
                     * Encodes the specified GetFloorSettingRequest message. Does not implicitly {@link google.cloud.modelarmor.v1beta.GetFloorSettingRequest.verify|verify} messages.
                     * @param message GetFloorSettingRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.modelarmor.v1beta.IGetFloorSettingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetFloorSettingRequest message, length delimited. Does not implicitly {@link google.cloud.modelarmor.v1beta.GetFloorSettingRequest.verify|verify} messages.
                     * @param message GetFloorSettingRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.modelarmor.v1beta.IGetFloorSettingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetFloorSettingRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetFloorSettingRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.modelarmor.v1beta.GetFloorSettingRequest;

                    /**
                     * Decodes a GetFloorSettingRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetFloorSettingRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.modelarmor.v1beta.GetFloorSettingRequest;

                    /**
                     * Verifies a GetFloorSettingRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetFloorSettingRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetFloorSettingRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.modelarmor.v1beta.GetFloorSettingRequest;

                    /**
                     * Creates a plain object from a GetFloorSettingRequest message. Also converts values to other types if specified.
                     * @param message GetFloorSettingRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.modelarmor.v1beta.GetFloorSettingRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetFloorSettingRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetFloorSettingRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateFloorSettingRequest. */
                interface IUpdateFloorSettingRequest {

                    /** UpdateFloorSettingRequest floorSetting */
                    floorSetting?: (google.cloud.modelarmor.v1beta.IFloorSetting|null);

                    /** UpdateFloorSettingRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateFloorSettingRequest. */
                class UpdateFloorSettingRequest implements IUpdateFloorSettingRequest {

                    /**
                     * Constructs a new UpdateFloorSettingRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.modelarmor.v1beta.IUpdateFloorSettingRequest);

                    /** UpdateFloorSettingRequest floorSetting. */
                    public floorSetting?: (google.cloud.modelarmor.v1beta.IFloorSetting|null);

                    /** UpdateFloorSettingRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateFloorSettingRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateFloorSettingRequest instance
                     */
                    public static create(properties?: google.cloud.modelarmor.v1beta.IUpdateFloorSettingRequest): google.cloud.modelarmor.v1beta.UpdateFloorSettingRequest;

                    /**
                     * Encodes the specified UpdateFloorSettingRequest message. Does not implicitly {@link google.cloud.modelarmor.v1beta.UpdateFloorSettingRequest.verify|verify} messages.
                     * @param message UpdateFloorSettingRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.modelarmor.v1beta.IUpdateFloorSettingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateFloorSettingRequest message, length delimited. Does not implicitly {@link google.cloud.modelarmor.v1beta.UpdateFloorSettingRequest.verify|verify} messages.
                     * @param message UpdateFloorSettingRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.modelarmor.v1beta.IUpdateFloorSettingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateFloorSettingRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateFloorSettingRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.modelarmor.v1beta.UpdateFloorSettingRequest;

                    /**
                     * Decodes an UpdateFloorSettingRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateFloorSettingRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.modelarmor.v1beta.UpdateFloorSettingRequest;

                    /**
                     * Verifies an UpdateFloorSettingRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateFloorSettingRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateFloorSettingRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.modelarmor.v1beta.UpdateFloorSettingRequest;

                    /**
                     * Creates a plain object from an UpdateFloorSettingRequest message. Also converts values to other types if specified.
                     * @param message UpdateFloorSettingRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.modelarmor.v1beta.UpdateFloorSettingRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateFloorSettingRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateFloorSettingRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a FilterConfig. */
                interface IFilterConfig {

                    /** FilterConfig raiSettings */
                    raiSettings?: (google.cloud.modelarmor.v1beta.IRaiFilterSettings|null);

                    /** FilterConfig sdpSettings */
                    sdpSettings?: (google.cloud.modelarmor.v1beta.ISdpFilterSettings|null);

                    /** FilterConfig piAndJailbreakFilterSettings */
                    piAndJailbreakFilterSettings?: (google.cloud.modelarmor.v1beta.IPiAndJailbreakFilterSettings|null);

                    /** FilterConfig maliciousUriFilterSettings */
                    maliciousUriFilterSettings?: (google.cloud.modelarmor.v1beta.IMaliciousUriFilterSettings|null);
                }

                /** Represents a FilterConfig. */
                class FilterConfig implements IFilterConfig {

                    /**
                     * Constructs a new FilterConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.modelarmor.v1beta.IFilterConfig);

                    /** FilterConfig raiSettings. */
                    public raiSettings?: (google.cloud.modelarmor.v1beta.IRaiFilterSettings|null);

                    /** FilterConfig sdpSettings. */
                    public sdpSettings?: (google.cloud.modelarmor.v1beta.ISdpFilterSettings|null);

                    /** FilterConfig piAndJailbreakFilterSettings. */
                    public piAndJailbreakFilterSettings?: (google.cloud.modelarmor.v1beta.IPiAndJailbreakFilterSettings|null);

                    /** FilterConfig maliciousUriFilterSettings. */
                    public maliciousUriFilterSettings?: (google.cloud.modelarmor.v1beta.IMaliciousUriFilterSettings|null);

                    /**
                     * Creates a new FilterConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns FilterConfig instance
                     */
                    public static create(properties?: google.cloud.modelarmor.v1beta.IFilterConfig): google.cloud.modelarmor.v1beta.FilterConfig;

                    /**
                     * Encodes the specified FilterConfig message. Does not implicitly {@link google.cloud.modelarmor.v1beta.FilterConfig.verify|verify} messages.
                     * @param message FilterConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.modelarmor.v1beta.IFilterConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified FilterConfig message, length delimited. Does not implicitly {@link google.cloud.modelarmor.v1beta.FilterConfig.verify|verify} messages.
                     * @param message FilterConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.modelarmor.v1beta.IFilterConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a FilterConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FilterConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.modelarmor.v1beta.FilterConfig;

                    /**
                     * Decodes a FilterConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns FilterConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.modelarmor.v1beta.FilterConfig;

                    /**
                     * Verifies a FilterConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a FilterConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns FilterConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.modelarmor.v1beta.FilterConfig;

                    /**
                     * Creates a plain object from a FilterConfig message. Also converts values to other types if specified.
                     * @param message FilterConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.modelarmor.v1beta.FilterConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this FilterConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for FilterConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a PiAndJailbreakFilterSettings. */
                interface IPiAndJailbreakFilterSettings {

                    /** PiAndJailbreakFilterSettings filterEnforcement */
                    filterEnforcement?: (google.cloud.modelarmor.v1beta.PiAndJailbreakFilterSettings.PiAndJailbreakFilterEnforcement|keyof typeof google.cloud.modelarmor.v1beta.PiAndJailbreakFilterSettings.PiAndJailbreakFilterEnforcement|null);

                    /** PiAndJailbreakFilterSettings confidenceLevel */
                    confidenceLevel?: (google.cloud.modelarmor.v1beta.DetectionConfidenceLevel|keyof typeof google.cloud.modelarmor.v1beta.DetectionConfidenceLevel|null);
                }

                /** Represents a PiAndJailbreakFilterSettings. */
                class PiAndJailbreakFilterSettings implements IPiAndJailbreakFilterSettings {

                    /**
                     * Constructs a new PiAndJailbreakFilterSettings.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.modelarmor.v1beta.IPiAndJailbreakFilterSettings);

                    /** PiAndJailbreakFilterSettings filterEnforcement. */
                    public filterEnforcement: (google.cloud.modelarmor.v1beta.PiAndJailbreakFilterSettings.PiAndJailbreakFilterEnforcement|keyof typeof google.cloud.modelarmor.v1beta.PiAndJailbreakFilterSettings.PiAndJailbreakFilterEnforcement);

                    /** PiAndJailbreakFilterSettings confidenceLevel. */
                    public confidenceLevel: (google.cloud.modelarmor.v1beta.DetectionConfidenceLevel|keyof typeof google.cloud.modelarmor.v1beta.DetectionConfidenceLevel);

                    /**
                     * Creates a new PiAndJailbreakFilterSettings instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PiAndJailbreakFilterSettings instance
                     */
                    public static create(properties?: google.cloud.modelarmor.v1beta.IPiAndJailbreakFilterSettings): google.cloud.modelarmor.v1beta.PiAndJailbreakFilterSettings;

                    /**
                     * Encodes the specified PiAndJailbreakFilterSettings message. Does not implicitly {@link google.cloud.modelarmor.v1beta.PiAndJailbreakFilterSettings.verify|verify} messages.
                     * @param message PiAndJailbreakFilterSettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.modelarmor.v1beta.IPiAndJailbreakFilterSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PiAndJailbreakFilterSettings message, length delimited. Does not implicitly {@link google.cloud.modelarmor.v1beta.PiAndJailbreakFilterSettings.verify|verify} messages.
                     * @param message PiAndJailbreakFilterSettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.modelarmor.v1beta.IPiAndJailbreakFilterSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PiAndJailbreakFilterSettings message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PiAndJailbreakFilterSettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.modelarmor.v1beta.PiAndJailbreakFilterSettings;

                    /**
                     * Decodes a PiAndJailbreakFilterSettings message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PiAndJailbreakFilterSettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.modelarmor.v1beta.PiAndJailbreakFilterSettings;

                    /**
                     * Verifies a PiAndJailbreakFilterSettings message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PiAndJailbreakFilterSettings message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PiAndJailbreakFilterSettings
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.modelarmor.v1beta.PiAndJailbreakFilterSettings;

                    /**
                     * Creates a plain object from a PiAndJailbreakFilterSettings message. Also converts values to other types if specified.
                     * @param message PiAndJailbreakFilterSettings
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.modelarmor.v1beta.PiAndJailbreakFilterSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PiAndJailbreakFilterSettings to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for PiAndJailbreakFilterSettings
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace PiAndJailbreakFilterSettings {

                    /** PiAndJailbreakFilterEnforcement enum. */
                    enum PiAndJailbreakFilterEnforcement {
                        PI_AND_JAILBREAK_FILTER_ENFORCEMENT_UNSPECIFIED = 0,
                        ENABLED = 1,
                        DISABLED = 2
                    }
                }

                /** Properties of a MaliciousUriFilterSettings. */
                interface IMaliciousUriFilterSettings {

                    /** MaliciousUriFilterSettings filterEnforcement */
                    filterEnforcement?: (google.cloud.modelarmor.v1beta.MaliciousUriFilterSettings.MaliciousUriFilterEnforcement|keyof typeof google.cloud.modelarmor.v1beta.MaliciousUriFilterSettings.MaliciousUriFilterEnforcement|null);
                }

                /** Represents a MaliciousUriFilterSettings. */
                class MaliciousUriFilterSettings implements IMaliciousUriFilterSettings {

                    /**
                     * Constructs a new MaliciousUriFilterSettings.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.modelarmor.v1beta.IMaliciousUriFilterSettings);

                    /** MaliciousUriFilterSettings filterEnforcement. */
                    public filterEnforcement: (google.cloud.modelarmor.v1beta.MaliciousUriFilterSettings.MaliciousUriFilterEnforcement|keyof typeof google.cloud.modelarmor.v1beta.MaliciousUriFilterSettings.MaliciousUriFilterEnforcement);

                    /**
                     * Creates a new MaliciousUriFilterSettings instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MaliciousUriFilterSettings instance
                     */
                    public static create(properties?: google.cloud.modelarmor.v1beta.IMaliciousUriFilterSettings): google.cloud.modelarmor.v1beta.MaliciousUriFilterSettings;

                    /**
                     * Encodes the specified MaliciousUriFilterSettings message. Does not implicitly {@link google.cloud.modelarmor.v1beta.MaliciousUriFilterSettings.verify|verify} messages.
                     * @param message MaliciousUriFilterSettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.modelarmor.v1beta.IMaliciousUriFilterSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MaliciousUriFilterSettings message, length delimited. Does not implicitly {@link google.cloud.modelarmor.v1beta.MaliciousUriFilterSettings.verify|verify} messages.
                     * @param message MaliciousUriFilterSettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.modelarmor.v1beta.IMaliciousUriFilterSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MaliciousUriFilterSettings message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MaliciousUriFilterSettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.modelarmor.v1beta.MaliciousUriFilterSettings;

                    /**
                     * Decodes a MaliciousUriFilterSettings message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MaliciousUriFilterSettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.modelarmor.v1beta.MaliciousUriFilterSettings;

                    /**
                     * Verifies a MaliciousUriFilterSettings message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MaliciousUriFilterSettings message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MaliciousUriFilterSettings
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.modelarmor.v1beta.MaliciousUriFilterSettings;

                    /**
                     * Creates a plain object from a MaliciousUriFilterSettings message. Also converts values to other types if specified.
                     * @param message MaliciousUriFilterSettings
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.modelarmor.v1beta.MaliciousUriFilterSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MaliciousUriFilterSettings to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for MaliciousUriFilterSettings
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace MaliciousUriFilterSettings {

                    /** MaliciousUriFilterEnforcement enum. */
                    enum MaliciousUriFilterEnforcement {
                        MALICIOUS_URI_FILTER_ENFORCEMENT_UNSPECIFIED = 0,
                        ENABLED = 1,
                        DISABLED = 2
                    }
                }

                /** Properties of a RaiFilterSettings. */
                interface IRaiFilterSettings {

                    /** RaiFilterSettings raiFilters */
                    raiFilters?: (google.cloud.modelarmor.v1beta.RaiFilterSettings.IRaiFilter[]|null);
                }

                /** Represents a RaiFilterSettings. */
                class RaiFilterSettings implements IRaiFilterSettings {

                    /**
                     * Constructs a new RaiFilterSettings.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.modelarmor.v1beta.IRaiFilterSettings);

                    /** RaiFilterSettings raiFilters. */
                    public raiFilters: google.cloud.modelarmor.v1beta.RaiFilterSettings.IRaiFilter[];

                    /**
                     * Creates a new RaiFilterSettings instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RaiFilterSettings instance
                     */
                    public static create(properties?: google.cloud.modelarmor.v1beta.IRaiFilterSettings): google.cloud.modelarmor.v1beta.RaiFilterSettings;

                    /**
                     * Encodes the specified RaiFilterSettings message. Does not implicitly {@link google.cloud.modelarmor.v1beta.RaiFilterSettings.verify|verify} messages.
                     * @param message RaiFilterSettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.modelarmor.v1beta.IRaiFilterSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RaiFilterSettings message, length delimited. Does not implicitly {@link google.cloud.modelarmor.v1beta.RaiFilterSettings.verify|verify} messages.
                     * @param message RaiFilterSettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.modelarmor.v1beta.IRaiFilterSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RaiFilterSettings message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RaiFilterSettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.modelarmor.v1beta.RaiFilterSettings;

                    /**
                     * Decodes a RaiFilterSettings message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RaiFilterSettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.modelarmor.v1beta.RaiFilterSettings;

                    /**
                     * Verifies a RaiFilterSettings message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RaiFilterSettings message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RaiFilterSettings
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.modelarmor.v1beta.RaiFilterSettings;

                    /**
                     * Creates a plain object from a RaiFilterSettings message. Also converts values to other types if specified.
                     * @param message RaiFilterSettings
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.modelarmor.v1beta.RaiFilterSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RaiFilterSettings to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RaiFilterSettings
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace RaiFilterSettings {

                    /** Properties of a RaiFilter. */
                    interface IRaiFilter {

                        /** RaiFilter filterType */
                        filterType?: (google.cloud.modelarmor.v1beta.RaiFilterType|keyof typeof google.cloud.modelarmor.v1beta.RaiFilterType|null);

                        /** RaiFilter confidenceLevel */
                        confidenceLevel?: (google.cloud.modelarmor.v1beta.DetectionConfidenceLevel|keyof typeof google.cloud.modelarmor.v1beta.DetectionConfidenceLevel|null);
                    }

                    /** Represents a RaiFilter. */
                    class RaiFilter implements IRaiFilter {

                        /**
                         * Constructs a new RaiFilter.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.modelarmor.v1beta.RaiFilterSettings.IRaiFilter);

                        /** RaiFilter filterType. */
                        public filterType: (google.cloud.modelarmor.v1beta.RaiFilterType|keyof typeof google.cloud.modelarmor.v1beta.RaiFilterType);

                        /** RaiFilter confidenceLevel. */
                        public confidenceLevel: (google.cloud.modelarmor.v1beta.DetectionConfidenceLevel|keyof typeof google.cloud.modelarmor.v1beta.DetectionConfidenceLevel);

                        /**
                         * Creates a new RaiFilter instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns RaiFilter instance
                         */
                        public static create(properties?: google.cloud.modelarmor.v1beta.RaiFilterSettings.IRaiFilter): google.cloud.modelarmor.v1beta.RaiFilterSettings.RaiFilter;

                        /**
                         * Encodes the specified RaiFilter message. Does not implicitly {@link google.cloud.modelarmor.v1beta.RaiFilterSettings.RaiFilter.verify|verify} messages.
                         * @param message RaiFilter message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.modelarmor.v1beta.RaiFilterSettings.IRaiFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified RaiFilter message, length delimited. Does not implicitly {@link google.cloud.modelarmor.v1beta.RaiFilterSettings.RaiFilter.verify|verify} messages.
                         * @param message RaiFilter message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.modelarmor.v1beta.RaiFilterSettings.IRaiFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a RaiFilter message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns RaiFilter
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.modelarmor.v1beta.RaiFilterSettings.RaiFilter;

                        /**
                         * Decodes a RaiFilter message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns RaiFilter
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.modelarmor.v1beta.RaiFilterSettings.RaiFilter;

                        /**
                         * Verifies a RaiFilter message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a RaiFilter message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns RaiFilter
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.modelarmor.v1beta.RaiFilterSettings.RaiFilter;

                        /**
                         * Creates a plain object from a RaiFilter message. Also converts values to other types if specified.
                         * @param message RaiFilter
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.modelarmor.v1beta.RaiFilterSettings.RaiFilter, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this RaiFilter to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for RaiFilter
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of a SdpFilterSettings. */
                interface ISdpFilterSettings {

                    /** SdpFilterSettings basicConfig */
                    basicConfig?: (google.cloud.modelarmor.v1beta.ISdpBasicConfig|null);

                    /** SdpFilterSettings advancedConfig */
                    advancedConfig?: (google.cloud.modelarmor.v1beta.ISdpAdvancedConfig|null);
                }

                /** Represents a SdpFilterSettings. */
                class SdpFilterSettings implements ISdpFilterSettings {

                    /**
                     * Constructs a new SdpFilterSettings.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.modelarmor.v1beta.ISdpFilterSettings);

                    /** SdpFilterSettings basicConfig. */
                    public basicConfig?: (google.cloud.modelarmor.v1beta.ISdpBasicConfig|null);

                    /** SdpFilterSettings advancedConfig. */
                    public advancedConfig?: (google.cloud.modelarmor.v1beta.ISdpAdvancedConfig|null);

                    /** SdpFilterSettings sdpConfiguration. */
                    public sdpConfiguration?: ("basicConfig"|"advancedConfig");

                    /**
                     * Creates a new SdpFilterSettings instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SdpFilterSettings instance
                     */
                    public static create(properties?: google.cloud.modelarmor.v1beta.ISdpFilterSettings): google.cloud.modelarmor.v1beta.SdpFilterSettings;

                    /**
                     * Encodes the specified SdpFilterSettings message. Does not implicitly {@link google.cloud.modelarmor.v1beta.SdpFilterSettings.verify|verify} messages.
                     * @param message SdpFilterSettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.modelarmor.v1beta.ISdpFilterSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SdpFilterSettings message, length delimited. Does not implicitly {@link google.cloud.modelarmor.v1beta.SdpFilterSettings.verify|verify} messages.
                     * @param message SdpFilterSettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.modelarmor.v1beta.ISdpFilterSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SdpFilterSettings message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SdpFilterSettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.modelarmor.v1beta.SdpFilterSettings;

                    /**
                     * Decodes a SdpFilterSettings message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SdpFilterSettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.modelarmor.v1beta.SdpFilterSettings;

                    /**
                     * Verifies a SdpFilterSettings message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SdpFilterSettings message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SdpFilterSettings
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.modelarmor.v1beta.SdpFilterSettings;

                    /**
                     * Creates a plain object from a SdpFilterSettings message. Also converts values to other types if specified.
                     * @param message SdpFilterSettings
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.modelarmor.v1beta.SdpFilterSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SdpFilterSettings to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SdpFilterSettings
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a SdpBasicConfig. */
                interface ISdpBasicConfig {

                    /** SdpBasicConfig filterEnforcement */
                    filterEnforcement?: (google.cloud.modelarmor.v1beta.SdpBasicConfig.SdpBasicConfigEnforcement|keyof typeof google.cloud.modelarmor.v1beta.SdpBasicConfig.SdpBasicConfigEnforcement|null);
                }

                /** Represents a SdpBasicConfig. */
                class SdpBasicConfig implements ISdpBasicConfig {

                    /**
                     * Constructs a new SdpBasicConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.modelarmor.v1beta.ISdpBasicConfig);

                    /** SdpBasicConfig filterEnforcement. */
                    public filterEnforcement: (google.cloud.modelarmor.v1beta.SdpBasicConfig.SdpBasicConfigEnforcement|keyof typeof google.cloud.modelarmor.v1beta.SdpBasicConfig.SdpBasicConfigEnforcement);

                    /**
                     * Creates a new SdpBasicConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SdpBasicConfig instance
                     */
                    public static create(properties?: google.cloud.modelarmor.v1beta.ISdpBasicConfig): google.cloud.modelarmor.v1beta.SdpBasicConfig;

                    /**
                     * Encodes the specified SdpBasicConfig message. Does not implicitly {@link google.cloud.modelarmor.v1beta.SdpBasicConfig.verify|verify} messages.
                     * @param message SdpBasicConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.modelarmor.v1beta.ISdpBasicConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SdpBasicConfig message, length delimited. Does not implicitly {@link google.cloud.modelarmor.v1beta.SdpBasicConfig.verify|verify} messages.
                     * @param message SdpBasicConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.modelarmor.v1beta.ISdpBasicConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SdpBasicConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SdpBasicConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.modelarmor.v1beta.SdpBasicConfig;

                    /**
                     * Decodes a SdpBasicConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SdpBasicConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.modelarmor.v1beta.SdpBasicConfig;

                    /**
                     * Verifies a SdpBasicConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SdpBasicConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SdpBasicConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.modelarmor.v1beta.SdpBasicConfig;

                    /**
                     * Creates a plain object from a SdpBasicConfig message. Also converts values to other types if specified.
                     * @param message SdpBasicConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.modelarmor.v1beta.SdpBasicConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SdpBasicConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SdpBasicConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace SdpBasicConfig {

                    /** SdpBasicConfigEnforcement enum. */
                    enum SdpBasicConfigEnforcement {
                        SDP_BASIC_CONFIG_ENFORCEMENT_UNSPECIFIED = 0,
                        ENABLED = 1,
                        DISABLED = 2
                    }
                }

                /** Properties of a SdpAdvancedConfig. */
                interface ISdpAdvancedConfig {

                    /** SdpAdvancedConfig inspectTemplate */
                    inspectTemplate?: (string|null);

                    /** SdpAdvancedConfig deidentifyTemplate */
                    deidentifyTemplate?: (string|null);
                }

                /** Represents a SdpAdvancedConfig. */
                class SdpAdvancedConfig implements ISdpAdvancedConfig {

                    /**
                     * Constructs a new SdpAdvancedConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.modelarmor.v1beta.ISdpAdvancedConfig);

                    /** SdpAdvancedConfig inspectTemplate. */
                    public inspectTemplate: string;

                    /** SdpAdvancedConfig deidentifyTemplate. */
                    public deidentifyTemplate: string;

                    /**
                     * Creates a new SdpAdvancedConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SdpAdvancedConfig instance
                     */
                    public static create(properties?: google.cloud.modelarmor.v1beta.ISdpAdvancedConfig): google.cloud.modelarmor.v1beta.SdpAdvancedConfig;

                    /**
                     * Encodes the specified SdpAdvancedConfig message. Does not implicitly {@link google.cloud.modelarmor.v1beta.SdpAdvancedConfig.verify|verify} messages.
                     * @param message SdpAdvancedConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.modelarmor.v1beta.ISdpAdvancedConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SdpAdvancedConfig message, length delimited. Does not implicitly {@link google.cloud.modelarmor.v1beta.SdpAdvancedConfig.verify|verify} messages.
                     * @param message SdpAdvancedConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.modelarmor.v1beta.ISdpAdvancedConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SdpAdvancedConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SdpAdvancedConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.modelarmor.v1beta.SdpAdvancedConfig;

                    /**
                     * Decodes a SdpAdvancedConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SdpAdvancedConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.modelarmor.v1beta.SdpAdvancedConfig;

                    /**
                     * Verifies a SdpAdvancedConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SdpAdvancedConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SdpAdvancedConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.modelarmor.v1beta.SdpAdvancedConfig;

                    /**
                     * Creates a plain object from a SdpAdvancedConfig message. Also converts values to other types if specified.
                     * @param message SdpAdvancedConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.modelarmor.v1beta.SdpAdvancedConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SdpAdvancedConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SdpAdvancedConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a SanitizeUserPromptRequest. */
                interface ISanitizeUserPromptRequest {

                    /** SanitizeUserPromptRequest name */
                    name?: (string|null);

                    /** SanitizeUserPromptRequest userPromptData */
                    userPromptData?: (google.cloud.modelarmor.v1beta.IDataItem|null);

                    /** SanitizeUserPromptRequest multiLanguageDetectionMetadata */
                    multiLanguageDetectionMetadata?: (google.cloud.modelarmor.v1beta.IMultiLanguageDetectionMetadata|null);
                }

                /** Represents a SanitizeUserPromptRequest. */
                class SanitizeUserPromptRequest implements ISanitizeUserPromptRequest {

                    /**
                     * Constructs a new SanitizeUserPromptRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.modelarmor.v1beta.ISanitizeUserPromptRequest);

                    /** SanitizeUserPromptRequest name. */
                    public name: string;

                    /** SanitizeUserPromptRequest userPromptData. */
                    public userPromptData?: (google.cloud.modelarmor.v1beta.IDataItem|null);

                    /** SanitizeUserPromptRequest multiLanguageDetectionMetadata. */
                    public multiLanguageDetectionMetadata?: (google.cloud.modelarmor.v1beta.IMultiLanguageDetectionMetadata|null);

                    /**
                     * Creates a new SanitizeUserPromptRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SanitizeUserPromptRequest instance
                     */
                    public static create(properties?: google.cloud.modelarmor.v1beta.ISanitizeUserPromptRequest): google.cloud.modelarmor.v1beta.SanitizeUserPromptRequest;

                    /**
                     * Encodes the specified SanitizeUserPromptRequest message. Does not implicitly {@link google.cloud.modelarmor.v1beta.SanitizeUserPromptRequest.verify|verify} messages.
                     * @param message SanitizeUserPromptRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.modelarmor.v1beta.ISanitizeUserPromptRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SanitizeUserPromptRequest message, length delimited. Does not implicitly {@link google.cloud.modelarmor.v1beta.SanitizeUserPromptRequest.verify|verify} messages.
                     * @param message SanitizeUserPromptRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.modelarmor.v1beta.ISanitizeUserPromptRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SanitizeUserPromptRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SanitizeUserPromptRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.modelarmor.v1beta.SanitizeUserPromptRequest;

                    /**
                     * Decodes a SanitizeUserPromptRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SanitizeUserPromptRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.modelarmor.v1beta.SanitizeUserPromptRequest;

                    /**
                     * Verifies a SanitizeUserPromptRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SanitizeUserPromptRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SanitizeUserPromptRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.modelarmor.v1beta.SanitizeUserPromptRequest;

                    /**
                     * Creates a plain object from a SanitizeUserPromptRequest message. Also converts values to other types if specified.
                     * @param message SanitizeUserPromptRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.modelarmor.v1beta.SanitizeUserPromptRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SanitizeUserPromptRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SanitizeUserPromptRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a SanitizeModelResponseRequest. */
                interface ISanitizeModelResponseRequest {

                    /** SanitizeModelResponseRequest name */
                    name?: (string|null);

                    /** SanitizeModelResponseRequest modelResponseData */
                    modelResponseData?: (google.cloud.modelarmor.v1beta.IDataItem|null);

                    /** SanitizeModelResponseRequest userPrompt */
                    userPrompt?: (string|null);

                    /** SanitizeModelResponseRequest multiLanguageDetectionMetadata */
                    multiLanguageDetectionMetadata?: (google.cloud.modelarmor.v1beta.IMultiLanguageDetectionMetadata|null);
                }

                /** Represents a SanitizeModelResponseRequest. */
                class SanitizeModelResponseRequest implements ISanitizeModelResponseRequest {

                    /**
                     * Constructs a new SanitizeModelResponseRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.modelarmor.v1beta.ISanitizeModelResponseRequest);

                    /** SanitizeModelResponseRequest name. */
                    public name: string;

                    /** SanitizeModelResponseRequest modelResponseData. */
                    public modelResponseData?: (google.cloud.modelarmor.v1beta.IDataItem|null);

                    /** SanitizeModelResponseRequest userPrompt. */
                    public userPrompt: string;

                    /** SanitizeModelResponseRequest multiLanguageDetectionMetadata. */
                    public multiLanguageDetectionMetadata?: (google.cloud.modelarmor.v1beta.IMultiLanguageDetectionMetadata|null);

                    /**
                     * Creates a new SanitizeModelResponseRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SanitizeModelResponseRequest instance
                     */
                    public static create(properties?: google.cloud.modelarmor.v1beta.ISanitizeModelResponseRequest): google.cloud.modelarmor.v1beta.SanitizeModelResponseRequest;

                    /**
                     * Encodes the specified SanitizeModelResponseRequest message. Does not implicitly {@link google.cloud.modelarmor.v1beta.SanitizeModelResponseRequest.verify|verify} messages.
                     * @param message SanitizeModelResponseRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.modelarmor.v1beta.ISanitizeModelResponseRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SanitizeModelResponseRequest message, length delimited. Does not implicitly {@link google.cloud.modelarmor.v1beta.SanitizeModelResponseRequest.verify|verify} messages.
                     * @param message SanitizeModelResponseRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.modelarmor.v1beta.ISanitizeModelResponseRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SanitizeModelResponseRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SanitizeModelResponseRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.modelarmor.v1beta.SanitizeModelResponseRequest;

                    /**
                     * Decodes a SanitizeModelResponseRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SanitizeModelResponseRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.modelarmor.v1beta.SanitizeModelResponseRequest;

                    /**
                     * Verifies a SanitizeModelResponseRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SanitizeModelResponseRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SanitizeModelResponseRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.modelarmor.v1beta.SanitizeModelResponseRequest;

                    /**
                     * Creates a plain object from a SanitizeModelResponseRequest message. Also converts values to other types if specified.
                     * @param message SanitizeModelResponseRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.modelarmor.v1beta.SanitizeModelResponseRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SanitizeModelResponseRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SanitizeModelResponseRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a SanitizeUserPromptResponse. */
                interface ISanitizeUserPromptResponse {

                    /** SanitizeUserPromptResponse sanitizationResult */
                    sanitizationResult?: (google.cloud.modelarmor.v1beta.ISanitizationResult|null);
                }

                /** Represents a SanitizeUserPromptResponse. */
                class SanitizeUserPromptResponse implements ISanitizeUserPromptResponse {

                    /**
                     * Constructs a new SanitizeUserPromptResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.modelarmor.v1beta.ISanitizeUserPromptResponse);

                    /** SanitizeUserPromptResponse sanitizationResult. */
                    public sanitizationResult?: (google.cloud.modelarmor.v1beta.ISanitizationResult|null);

                    /**
                     * Creates a new SanitizeUserPromptResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SanitizeUserPromptResponse instance
                     */
                    public static create(properties?: google.cloud.modelarmor.v1beta.ISanitizeUserPromptResponse): google.cloud.modelarmor.v1beta.SanitizeUserPromptResponse;

                    /**
                     * Encodes the specified SanitizeUserPromptResponse message. Does not implicitly {@link google.cloud.modelarmor.v1beta.SanitizeUserPromptResponse.verify|verify} messages.
                     * @param message SanitizeUserPromptResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.modelarmor.v1beta.ISanitizeUserPromptResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SanitizeUserPromptResponse message, length delimited. Does not implicitly {@link google.cloud.modelarmor.v1beta.SanitizeUserPromptResponse.verify|verify} messages.
                     * @param message SanitizeUserPromptResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.modelarmor.v1beta.ISanitizeUserPromptResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SanitizeUserPromptResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SanitizeUserPromptResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.modelarmor.v1beta.SanitizeUserPromptResponse;

                    /**
                     * Decodes a SanitizeUserPromptResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SanitizeUserPromptResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.modelarmor.v1beta.SanitizeUserPromptResponse;

                    /**
                     * Verifies a SanitizeUserPromptResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SanitizeUserPromptResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SanitizeUserPromptResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.modelarmor.v1beta.SanitizeUserPromptResponse;

                    /**
                     * Creates a plain object from a SanitizeUserPromptResponse message. Also converts values to other types if specified.
                     * @param message SanitizeUserPromptResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.modelarmor.v1beta.SanitizeUserPromptResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SanitizeUserPromptResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SanitizeUserPromptResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a SanitizeModelResponseResponse. */
                interface ISanitizeModelResponseResponse {

                    /** SanitizeModelResponseResponse sanitizationResult */
                    sanitizationResult?: (google.cloud.modelarmor.v1beta.ISanitizationResult|null);
                }

                /** Represents a SanitizeModelResponseResponse. */
                class SanitizeModelResponseResponse implements ISanitizeModelResponseResponse {

                    /**
                     * Constructs a new SanitizeModelResponseResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.modelarmor.v1beta.ISanitizeModelResponseResponse);

                    /** SanitizeModelResponseResponse sanitizationResult. */
                    public sanitizationResult?: (google.cloud.modelarmor.v1beta.ISanitizationResult|null);

                    /**
                     * Creates a new SanitizeModelResponseResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SanitizeModelResponseResponse instance
                     */
                    public static create(properties?: google.cloud.modelarmor.v1beta.ISanitizeModelResponseResponse): google.cloud.modelarmor.v1beta.SanitizeModelResponseResponse;

                    /**
                     * Encodes the specified SanitizeModelResponseResponse message. Does not implicitly {@link google.cloud.modelarmor.v1beta.SanitizeModelResponseResponse.verify|verify} messages.
                     * @param message SanitizeModelResponseResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.modelarmor.v1beta.ISanitizeModelResponseResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SanitizeModelResponseResponse message, length delimited. Does not implicitly {@link google.cloud.modelarmor.v1beta.SanitizeModelResponseResponse.verify|verify} messages.
                     * @param message SanitizeModelResponseResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.modelarmor.v1beta.ISanitizeModelResponseResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SanitizeModelResponseResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SanitizeModelResponseResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.modelarmor.v1beta.SanitizeModelResponseResponse;

                    /**
                     * Decodes a SanitizeModelResponseResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SanitizeModelResponseResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.modelarmor.v1beta.SanitizeModelResponseResponse;

                    /**
                     * Verifies a SanitizeModelResponseResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SanitizeModelResponseResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SanitizeModelResponseResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.modelarmor.v1beta.SanitizeModelResponseResponse;

                    /**
                     * Creates a plain object from a SanitizeModelResponseResponse message. Also converts values to other types if specified.
                     * @param message SanitizeModelResponseResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.modelarmor.v1beta.SanitizeModelResponseResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SanitizeModelResponseResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SanitizeModelResponseResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a SanitizationResult. */
                interface ISanitizationResult {

                    /** SanitizationResult filterMatchState */
                    filterMatchState?: (google.cloud.modelarmor.v1beta.FilterMatchState|keyof typeof google.cloud.modelarmor.v1beta.FilterMatchState|null);

                    /** SanitizationResult filterResults */
                    filterResults?: ({ [k: string]: google.cloud.modelarmor.v1beta.IFilterResult }|null);

                    /** SanitizationResult invocationResult */
                    invocationResult?: (google.cloud.modelarmor.v1beta.InvocationResult|keyof typeof google.cloud.modelarmor.v1beta.InvocationResult|null);

                    /** SanitizationResult sanitizationMetadata */
                    sanitizationMetadata?: (google.cloud.modelarmor.v1beta.SanitizationResult.ISanitizationMetadata|null);
                }

                /** Represents a SanitizationResult. */
                class SanitizationResult implements ISanitizationResult {

                    /**
                     * Constructs a new SanitizationResult.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.modelarmor.v1beta.ISanitizationResult);

                    /** SanitizationResult filterMatchState. */
                    public filterMatchState: (google.cloud.modelarmor.v1beta.FilterMatchState|keyof typeof google.cloud.modelarmor.v1beta.FilterMatchState);

                    /** SanitizationResult filterResults. */
                    public filterResults: { [k: string]: google.cloud.modelarmor.v1beta.IFilterResult };

                    /** SanitizationResult invocationResult. */
                    public invocationResult: (google.cloud.modelarmor.v1beta.InvocationResult|keyof typeof google.cloud.modelarmor.v1beta.InvocationResult);

                    /** SanitizationResult sanitizationMetadata. */
                    public sanitizationMetadata?: (google.cloud.modelarmor.v1beta.SanitizationResult.ISanitizationMetadata|null);

                    /**
                     * Creates a new SanitizationResult instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SanitizationResult instance
                     */
                    public static create(properties?: google.cloud.modelarmor.v1beta.ISanitizationResult): google.cloud.modelarmor.v1beta.SanitizationResult;

                    /**
                     * Encodes the specified SanitizationResult message. Does not implicitly {@link google.cloud.modelarmor.v1beta.SanitizationResult.verify|verify} messages.
                     * @param message SanitizationResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.modelarmor.v1beta.ISanitizationResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SanitizationResult message, length delimited. Does not implicitly {@link google.cloud.modelarmor.v1beta.SanitizationResult.verify|verify} messages.
                     * @param message SanitizationResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.modelarmor.v1beta.ISanitizationResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SanitizationResult message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SanitizationResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.modelarmor.v1beta.SanitizationResult;

                    /**
                     * Decodes a SanitizationResult message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SanitizationResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.modelarmor.v1beta.SanitizationResult;

                    /**
                     * Verifies a SanitizationResult message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SanitizationResult message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SanitizationResult
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.modelarmor.v1beta.SanitizationResult;

                    /**
                     * Creates a plain object from a SanitizationResult message. Also converts values to other types if specified.
                     * @param message SanitizationResult
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.modelarmor.v1beta.SanitizationResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SanitizationResult to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SanitizationResult
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace SanitizationResult {

                    /** Properties of a SanitizationMetadata. */
                    interface ISanitizationMetadata {

                        /** SanitizationMetadata errorCode */
                        errorCode?: (number|Long|string|null);

                        /** SanitizationMetadata errorMessage */
                        errorMessage?: (string|null);

                        /** SanitizationMetadata ignorePartialInvocationFailures */
                        ignorePartialInvocationFailures?: (boolean|null);
                    }

                    /** Represents a SanitizationMetadata. */
                    class SanitizationMetadata implements ISanitizationMetadata {

                        /**
                         * Constructs a new SanitizationMetadata.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.modelarmor.v1beta.SanitizationResult.ISanitizationMetadata);

                        /** SanitizationMetadata errorCode. */
                        public errorCode: (number|Long|string);

                        /** SanitizationMetadata errorMessage. */
                        public errorMessage: string;

                        /** SanitizationMetadata ignorePartialInvocationFailures. */
                        public ignorePartialInvocationFailures: boolean;

                        /**
                         * Creates a new SanitizationMetadata instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SanitizationMetadata instance
                         */
                        public static create(properties?: google.cloud.modelarmor.v1beta.SanitizationResult.ISanitizationMetadata): google.cloud.modelarmor.v1beta.SanitizationResult.SanitizationMetadata;

                        /**
                         * Encodes the specified SanitizationMetadata message. Does not implicitly {@link google.cloud.modelarmor.v1beta.SanitizationResult.SanitizationMetadata.verify|verify} messages.
                         * @param message SanitizationMetadata message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.modelarmor.v1beta.SanitizationResult.ISanitizationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SanitizationMetadata message, length delimited. Does not implicitly {@link google.cloud.modelarmor.v1beta.SanitizationResult.SanitizationMetadata.verify|verify} messages.
                         * @param message SanitizationMetadata message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.modelarmor.v1beta.SanitizationResult.ISanitizationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SanitizationMetadata message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SanitizationMetadata
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.modelarmor.v1beta.SanitizationResult.SanitizationMetadata;

                        /**
                         * Decodes a SanitizationMetadata message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SanitizationMetadata
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.modelarmor.v1beta.SanitizationResult.SanitizationMetadata;

                        /**
                         * Verifies a SanitizationMetadata message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SanitizationMetadata message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SanitizationMetadata
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.modelarmor.v1beta.SanitizationResult.SanitizationMetadata;

                        /**
                         * Creates a plain object from a SanitizationMetadata message. Also converts values to other types if specified.
                         * @param message SanitizationMetadata
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.modelarmor.v1beta.SanitizationResult.SanitizationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SanitizationMetadata to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for SanitizationMetadata
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of a MultiLanguageDetectionMetadata. */
                interface IMultiLanguageDetectionMetadata {

                    /** MultiLanguageDetectionMetadata sourceLanguage */
                    sourceLanguage?: (string|null);

                    /** MultiLanguageDetectionMetadata enableMultiLanguageDetection */
                    enableMultiLanguageDetection?: (boolean|null);
                }

                /** Represents a MultiLanguageDetectionMetadata. */
                class MultiLanguageDetectionMetadata implements IMultiLanguageDetectionMetadata {

                    /**
                     * Constructs a new MultiLanguageDetectionMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.modelarmor.v1beta.IMultiLanguageDetectionMetadata);

                    /** MultiLanguageDetectionMetadata sourceLanguage. */
                    public sourceLanguage: string;

                    /** MultiLanguageDetectionMetadata enableMultiLanguageDetection. */
                    public enableMultiLanguageDetection: boolean;

                    /**
                     * Creates a new MultiLanguageDetectionMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MultiLanguageDetectionMetadata instance
                     */
                    public static create(properties?: google.cloud.modelarmor.v1beta.IMultiLanguageDetectionMetadata): google.cloud.modelarmor.v1beta.MultiLanguageDetectionMetadata;

                    /**
                     * Encodes the specified MultiLanguageDetectionMetadata message. Does not implicitly {@link google.cloud.modelarmor.v1beta.MultiLanguageDetectionMetadata.verify|verify} messages.
                     * @param message MultiLanguageDetectionMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.modelarmor.v1beta.IMultiLanguageDetectionMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MultiLanguageDetectionMetadata message, length delimited. Does not implicitly {@link google.cloud.modelarmor.v1beta.MultiLanguageDetectionMetadata.verify|verify} messages.
                     * @param message MultiLanguageDetectionMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.modelarmor.v1beta.IMultiLanguageDetectionMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MultiLanguageDetectionMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MultiLanguageDetectionMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.modelarmor.v1beta.MultiLanguageDetectionMetadata;

                    /**
                     * Decodes a MultiLanguageDetectionMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MultiLanguageDetectionMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.modelarmor.v1beta.MultiLanguageDetectionMetadata;

                    /**
                     * Verifies a MultiLanguageDetectionMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MultiLanguageDetectionMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MultiLanguageDetectionMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.modelarmor.v1beta.MultiLanguageDetectionMetadata;

                    /**
                     * Creates a plain object from a MultiLanguageDetectionMetadata message. Also converts values to other types if specified.
                     * @param message MultiLanguageDetectionMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.modelarmor.v1beta.MultiLanguageDetectionMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MultiLanguageDetectionMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for MultiLanguageDetectionMetadata
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a FilterResult. */
                interface IFilterResult {

                    /** FilterResult raiFilterResult */
                    raiFilterResult?: (google.cloud.modelarmor.v1beta.IRaiFilterResult|null);

                    /** FilterResult sdpFilterResult */
                    sdpFilterResult?: (google.cloud.modelarmor.v1beta.ISdpFilterResult|null);

                    /** FilterResult piAndJailbreakFilterResult */
                    piAndJailbreakFilterResult?: (google.cloud.modelarmor.v1beta.IPiAndJailbreakFilterResult|null);

                    /** FilterResult maliciousUriFilterResult */
                    maliciousUriFilterResult?: (google.cloud.modelarmor.v1beta.IMaliciousUriFilterResult|null);

                    /** FilterResult csamFilterFilterResult */
                    csamFilterFilterResult?: (google.cloud.modelarmor.v1beta.ICsamFilterResult|null);

                    /** FilterResult virusScanFilterResult */
                    virusScanFilterResult?: (google.cloud.modelarmor.v1beta.IVirusScanFilterResult|null);
                }

                /** Represents a FilterResult. */
                class FilterResult implements IFilterResult {

                    /**
                     * Constructs a new FilterResult.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.modelarmor.v1beta.IFilterResult);

                    /** FilterResult raiFilterResult. */
                    public raiFilterResult?: (google.cloud.modelarmor.v1beta.IRaiFilterResult|null);

                    /** FilterResult sdpFilterResult. */
                    public sdpFilterResult?: (google.cloud.modelarmor.v1beta.ISdpFilterResult|null);

                    /** FilterResult piAndJailbreakFilterResult. */
                    public piAndJailbreakFilterResult?: (google.cloud.modelarmor.v1beta.IPiAndJailbreakFilterResult|null);

                    /** FilterResult maliciousUriFilterResult. */
                    public maliciousUriFilterResult?: (google.cloud.modelarmor.v1beta.IMaliciousUriFilterResult|null);

                    /** FilterResult csamFilterFilterResult. */
                    public csamFilterFilterResult?: (google.cloud.modelarmor.v1beta.ICsamFilterResult|null);

                    /** FilterResult virusScanFilterResult. */
                    public virusScanFilterResult?: (google.cloud.modelarmor.v1beta.IVirusScanFilterResult|null);

                    /** FilterResult filterResult. */
                    public filterResult?: ("raiFilterResult"|"sdpFilterResult"|"piAndJailbreakFilterResult"|"maliciousUriFilterResult"|"csamFilterFilterResult"|"virusScanFilterResult");

                    /**
                     * Creates a new FilterResult instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns FilterResult instance
                     */
                    public static create(properties?: google.cloud.modelarmor.v1beta.IFilterResult): google.cloud.modelarmor.v1beta.FilterResult;

                    /**
                     * Encodes the specified FilterResult message. Does not implicitly {@link google.cloud.modelarmor.v1beta.FilterResult.verify|verify} messages.
                     * @param message FilterResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.modelarmor.v1beta.IFilterResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified FilterResult message, length delimited. Does not implicitly {@link google.cloud.modelarmor.v1beta.FilterResult.verify|verify} messages.
                     * @param message FilterResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.modelarmor.v1beta.IFilterResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a FilterResult message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FilterResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.modelarmor.v1beta.FilterResult;

                    /**
                     * Decodes a FilterResult message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns FilterResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.modelarmor.v1beta.FilterResult;

                    /**
                     * Verifies a FilterResult message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a FilterResult message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns FilterResult
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.modelarmor.v1beta.FilterResult;

                    /**
                     * Creates a plain object from a FilterResult message. Also converts values to other types if specified.
                     * @param message FilterResult
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.modelarmor.v1beta.FilterResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this FilterResult to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for FilterResult
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a RaiFilterResult. */
                interface IRaiFilterResult {

                    /** RaiFilterResult executionState */
                    executionState?: (google.cloud.modelarmor.v1beta.FilterExecutionState|keyof typeof google.cloud.modelarmor.v1beta.FilterExecutionState|null);

                    /** RaiFilterResult messageItems */
                    messageItems?: (google.cloud.modelarmor.v1beta.IMessageItem[]|null);

                    /** RaiFilterResult matchState */
                    matchState?: (google.cloud.modelarmor.v1beta.FilterMatchState|keyof typeof google.cloud.modelarmor.v1beta.FilterMatchState|null);

                    /** RaiFilterResult raiFilterTypeResults */
                    raiFilterTypeResults?: ({ [k: string]: google.cloud.modelarmor.v1beta.RaiFilterResult.IRaiFilterTypeResult }|null);
                }

                /** Represents a RaiFilterResult. */
                class RaiFilterResult implements IRaiFilterResult {

                    /**
                     * Constructs a new RaiFilterResult.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.modelarmor.v1beta.IRaiFilterResult);

                    /** RaiFilterResult executionState. */
                    public executionState: (google.cloud.modelarmor.v1beta.FilterExecutionState|keyof typeof google.cloud.modelarmor.v1beta.FilterExecutionState);

                    /** RaiFilterResult messageItems. */
                    public messageItems: google.cloud.modelarmor.v1beta.IMessageItem[];

                    /** RaiFilterResult matchState. */
                    public matchState: (google.cloud.modelarmor.v1beta.FilterMatchState|keyof typeof google.cloud.modelarmor.v1beta.FilterMatchState);

                    /** RaiFilterResult raiFilterTypeResults. */
                    public raiFilterTypeResults: { [k: string]: google.cloud.modelarmor.v1beta.RaiFilterResult.IRaiFilterTypeResult };

                    /**
                     * Creates a new RaiFilterResult instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RaiFilterResult instance
                     */
                    public static create(properties?: google.cloud.modelarmor.v1beta.IRaiFilterResult): google.cloud.modelarmor.v1beta.RaiFilterResult;

                    /**
                     * Encodes the specified RaiFilterResult message. Does not implicitly {@link google.cloud.modelarmor.v1beta.RaiFilterResult.verify|verify} messages.
                     * @param message RaiFilterResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.modelarmor.v1beta.IRaiFilterResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RaiFilterResult message, length delimited. Does not implicitly {@link google.cloud.modelarmor.v1beta.RaiFilterResult.verify|verify} messages.
                     * @param message RaiFilterResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.modelarmor.v1beta.IRaiFilterResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RaiFilterResult message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RaiFilterResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.modelarmor.v1beta.RaiFilterResult;

                    /**
                     * Decodes a RaiFilterResult message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RaiFilterResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.modelarmor.v1beta.RaiFilterResult;

                    /**
                     * Verifies a RaiFilterResult message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RaiFilterResult message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RaiFilterResult
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.modelarmor.v1beta.RaiFilterResult;

                    /**
                     * Creates a plain object from a RaiFilterResult message. Also converts values to other types if specified.
                     * @param message RaiFilterResult
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.modelarmor.v1beta.RaiFilterResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RaiFilterResult to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RaiFilterResult
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace RaiFilterResult {

                    /** Properties of a RaiFilterTypeResult. */
                    interface IRaiFilterTypeResult {

                        /** RaiFilterTypeResult filterType */
                        filterType?: (google.cloud.modelarmor.v1beta.RaiFilterType|keyof typeof google.cloud.modelarmor.v1beta.RaiFilterType|null);

                        /** RaiFilterTypeResult confidenceLevel */
                        confidenceLevel?: (google.cloud.modelarmor.v1beta.DetectionConfidenceLevel|keyof typeof google.cloud.modelarmor.v1beta.DetectionConfidenceLevel|null);

                        /** RaiFilterTypeResult matchState */
                        matchState?: (google.cloud.modelarmor.v1beta.FilterMatchState|keyof typeof google.cloud.modelarmor.v1beta.FilterMatchState|null);
                    }

                    /** Represents a RaiFilterTypeResult. */
                    class RaiFilterTypeResult implements IRaiFilterTypeResult {

                        /**
                         * Constructs a new RaiFilterTypeResult.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.modelarmor.v1beta.RaiFilterResult.IRaiFilterTypeResult);

                        /** RaiFilterTypeResult filterType. */
                        public filterType: (google.cloud.modelarmor.v1beta.RaiFilterType|keyof typeof google.cloud.modelarmor.v1beta.RaiFilterType);

                        /** RaiFilterTypeResult confidenceLevel. */
                        public confidenceLevel: (google.cloud.modelarmor.v1beta.DetectionConfidenceLevel|keyof typeof google.cloud.modelarmor.v1beta.DetectionConfidenceLevel);

                        /** RaiFilterTypeResult matchState. */
                        public matchState: (google.cloud.modelarmor.v1beta.FilterMatchState|keyof typeof google.cloud.modelarmor.v1beta.FilterMatchState);

                        /**
                         * Creates a new RaiFilterTypeResult instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns RaiFilterTypeResult instance
                         */
                        public static create(properties?: google.cloud.modelarmor.v1beta.RaiFilterResult.IRaiFilterTypeResult): google.cloud.modelarmor.v1beta.RaiFilterResult.RaiFilterTypeResult;

                        /**
                         * Encodes the specified RaiFilterTypeResult message. Does not implicitly {@link google.cloud.modelarmor.v1beta.RaiFilterResult.RaiFilterTypeResult.verify|verify} messages.
                         * @param message RaiFilterTypeResult message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.modelarmor.v1beta.RaiFilterResult.IRaiFilterTypeResult, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified RaiFilterTypeResult message, length delimited. Does not implicitly {@link google.cloud.modelarmor.v1beta.RaiFilterResult.RaiFilterTypeResult.verify|verify} messages.
                         * @param message RaiFilterTypeResult message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.modelarmor.v1beta.RaiFilterResult.IRaiFilterTypeResult, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a RaiFilterTypeResult message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns RaiFilterTypeResult
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.modelarmor.v1beta.RaiFilterResult.RaiFilterTypeResult;

                        /**
                         * Decodes a RaiFilterTypeResult message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns RaiFilterTypeResult
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.modelarmor.v1beta.RaiFilterResult.RaiFilterTypeResult;

                        /**
                         * Verifies a RaiFilterTypeResult message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a RaiFilterTypeResult message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns RaiFilterTypeResult
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.modelarmor.v1beta.RaiFilterResult.RaiFilterTypeResult;

                        /**
                         * Creates a plain object from a RaiFilterTypeResult message. Also converts values to other types if specified.
                         * @param message RaiFilterTypeResult
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.modelarmor.v1beta.RaiFilterResult.RaiFilterTypeResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this RaiFilterTypeResult to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for RaiFilterTypeResult
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of a SdpFilterResult. */
                interface ISdpFilterResult {

                    /** SdpFilterResult inspectResult */
                    inspectResult?: (google.cloud.modelarmor.v1beta.ISdpInspectResult|null);

                    /** SdpFilterResult deidentifyResult */
                    deidentifyResult?: (google.cloud.modelarmor.v1beta.ISdpDeidentifyResult|null);
                }

                /** Represents a SdpFilterResult. */
                class SdpFilterResult implements ISdpFilterResult {

                    /**
                     * Constructs a new SdpFilterResult.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.modelarmor.v1beta.ISdpFilterResult);

                    /** SdpFilterResult inspectResult. */
                    public inspectResult?: (google.cloud.modelarmor.v1beta.ISdpInspectResult|null);

                    /** SdpFilterResult deidentifyResult. */
                    public deidentifyResult?: (google.cloud.modelarmor.v1beta.ISdpDeidentifyResult|null);

                    /** SdpFilterResult result. */
                    public result?: ("inspectResult"|"deidentifyResult");

                    /**
                     * Creates a new SdpFilterResult instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SdpFilterResult instance
                     */
                    public static create(properties?: google.cloud.modelarmor.v1beta.ISdpFilterResult): google.cloud.modelarmor.v1beta.SdpFilterResult;

                    /**
                     * Encodes the specified SdpFilterResult message. Does not implicitly {@link google.cloud.modelarmor.v1beta.SdpFilterResult.verify|verify} messages.
                     * @param message SdpFilterResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.modelarmor.v1beta.ISdpFilterResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SdpFilterResult message, length delimited. Does not implicitly {@link google.cloud.modelarmor.v1beta.SdpFilterResult.verify|verify} messages.
                     * @param message SdpFilterResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.modelarmor.v1beta.ISdpFilterResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SdpFilterResult message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SdpFilterResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.modelarmor.v1beta.SdpFilterResult;

                    /**
                     * Decodes a SdpFilterResult message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SdpFilterResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.modelarmor.v1beta.SdpFilterResult;

                    /**
                     * Verifies a SdpFilterResult message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SdpFilterResult message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SdpFilterResult
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.modelarmor.v1beta.SdpFilterResult;

                    /**
                     * Creates a plain object from a SdpFilterResult message. Also converts values to other types if specified.
                     * @param message SdpFilterResult
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.modelarmor.v1beta.SdpFilterResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SdpFilterResult to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SdpFilterResult
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a SdpInspectResult. */
                interface ISdpInspectResult {

                    /** SdpInspectResult executionState */
                    executionState?: (google.cloud.modelarmor.v1beta.FilterExecutionState|keyof typeof google.cloud.modelarmor.v1beta.FilterExecutionState|null);

                    /** SdpInspectResult messageItems */
                    messageItems?: (google.cloud.modelarmor.v1beta.IMessageItem[]|null);

                    /** SdpInspectResult matchState */
                    matchState?: (google.cloud.modelarmor.v1beta.FilterMatchState|keyof typeof google.cloud.modelarmor.v1beta.FilterMatchState|null);

                    /** SdpInspectResult findings */
                    findings?: (google.cloud.modelarmor.v1beta.ISdpFinding[]|null);

                    /** SdpInspectResult findingsTruncated */
                    findingsTruncated?: (boolean|null);
                }

                /** Represents a SdpInspectResult. */
                class SdpInspectResult implements ISdpInspectResult {

                    /**
                     * Constructs a new SdpInspectResult.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.modelarmor.v1beta.ISdpInspectResult);

                    /** SdpInspectResult executionState. */
                    public executionState: (google.cloud.modelarmor.v1beta.FilterExecutionState|keyof typeof google.cloud.modelarmor.v1beta.FilterExecutionState);

                    /** SdpInspectResult messageItems. */
                    public messageItems: google.cloud.modelarmor.v1beta.IMessageItem[];

                    /** SdpInspectResult matchState. */
                    public matchState: (google.cloud.modelarmor.v1beta.FilterMatchState|keyof typeof google.cloud.modelarmor.v1beta.FilterMatchState);

                    /** SdpInspectResult findings. */
                    public findings: google.cloud.modelarmor.v1beta.ISdpFinding[];

                    /** SdpInspectResult findingsTruncated. */
                    public findingsTruncated: boolean;

                    /**
                     * Creates a new SdpInspectResult instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SdpInspectResult instance
                     */
                    public static create(properties?: google.cloud.modelarmor.v1beta.ISdpInspectResult): google.cloud.modelarmor.v1beta.SdpInspectResult;

                    /**
                     * Encodes the specified SdpInspectResult message. Does not implicitly {@link google.cloud.modelarmor.v1beta.SdpInspectResult.verify|verify} messages.
                     * @param message SdpInspectResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.modelarmor.v1beta.ISdpInspectResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SdpInspectResult message, length delimited. Does not implicitly {@link google.cloud.modelarmor.v1beta.SdpInspectResult.verify|verify} messages.
                     * @param message SdpInspectResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.modelarmor.v1beta.ISdpInspectResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SdpInspectResult message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SdpInspectResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.modelarmor.v1beta.SdpInspectResult;

                    /**
                     * Decodes a SdpInspectResult message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SdpInspectResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.modelarmor.v1beta.SdpInspectResult;

                    /**
                     * Verifies a SdpInspectResult message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SdpInspectResult message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SdpInspectResult
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.modelarmor.v1beta.SdpInspectResult;

                    /**
                     * Creates a plain object from a SdpInspectResult message. Also converts values to other types if specified.
                     * @param message SdpInspectResult
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.modelarmor.v1beta.SdpInspectResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SdpInspectResult to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SdpInspectResult
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DataItem. */
                interface IDataItem {

                    /** DataItem text */
                    text?: (string|null);

                    /** DataItem byteItem */
                    byteItem?: (google.cloud.modelarmor.v1beta.IByteDataItem|null);
                }

                /** Represents a DataItem. */
                class DataItem implements IDataItem {

                    /**
                     * Constructs a new DataItem.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.modelarmor.v1beta.IDataItem);

                    /** DataItem text. */
                    public text?: (string|null);

                    /** DataItem byteItem. */
                    public byteItem?: (google.cloud.modelarmor.v1beta.IByteDataItem|null);

                    /** DataItem dataItem. */
                    public dataItem?: ("text"|"byteItem");

                    /**
                     * Creates a new DataItem instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DataItem instance
                     */
                    public static create(properties?: google.cloud.modelarmor.v1beta.IDataItem): google.cloud.modelarmor.v1beta.DataItem;

                    /**
                     * Encodes the specified DataItem message. Does not implicitly {@link google.cloud.modelarmor.v1beta.DataItem.verify|verify} messages.
                     * @param message DataItem message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.modelarmor.v1beta.IDataItem, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DataItem message, length delimited. Does not implicitly {@link google.cloud.modelarmor.v1beta.DataItem.verify|verify} messages.
                     * @param message DataItem message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.modelarmor.v1beta.IDataItem, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DataItem message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DataItem
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.modelarmor.v1beta.DataItem;

                    /**
                     * Decodes a DataItem message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DataItem
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.modelarmor.v1beta.DataItem;

                    /**
                     * Verifies a DataItem message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DataItem message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DataItem
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.modelarmor.v1beta.DataItem;

                    /**
                     * Creates a plain object from a DataItem message. Also converts values to other types if specified.
                     * @param message DataItem
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.modelarmor.v1beta.DataItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DataItem to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DataItem
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ByteDataItem. */
                interface IByteDataItem {

                    /** ByteDataItem byteDataType */
                    byteDataType?: (google.cloud.modelarmor.v1beta.ByteDataItem.ByteItemType|keyof typeof google.cloud.modelarmor.v1beta.ByteDataItem.ByteItemType|null);

                    /** ByteDataItem byteData */
                    byteData?: (Uint8Array|Buffer|string|null);
                }

                /** Represents a ByteDataItem. */
                class ByteDataItem implements IByteDataItem {

                    /**
                     * Constructs a new ByteDataItem.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.modelarmor.v1beta.IByteDataItem);

                    /** ByteDataItem byteDataType. */
                    public byteDataType: (google.cloud.modelarmor.v1beta.ByteDataItem.ByteItemType|keyof typeof google.cloud.modelarmor.v1beta.ByteDataItem.ByteItemType);

                    /** ByteDataItem byteData. */
                    public byteData: (Uint8Array|Buffer|string);

                    /**
                     * Creates a new ByteDataItem instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ByteDataItem instance
                     */
                    public static create(properties?: google.cloud.modelarmor.v1beta.IByteDataItem): google.cloud.modelarmor.v1beta.ByteDataItem;

                    /**
                     * Encodes the specified ByteDataItem message. Does not implicitly {@link google.cloud.modelarmor.v1beta.ByteDataItem.verify|verify} messages.
                     * @param message ByteDataItem message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.modelarmor.v1beta.IByteDataItem, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ByteDataItem message, length delimited. Does not implicitly {@link google.cloud.modelarmor.v1beta.ByteDataItem.verify|verify} messages.
                     * @param message ByteDataItem message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.modelarmor.v1beta.IByteDataItem, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ByteDataItem message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ByteDataItem
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.modelarmor.v1beta.ByteDataItem;

                    /**
                     * Decodes a ByteDataItem message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ByteDataItem
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.modelarmor.v1beta.ByteDataItem;

                    /**
                     * Verifies a ByteDataItem message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ByteDataItem message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ByteDataItem
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.modelarmor.v1beta.ByteDataItem;

                    /**
                     * Creates a plain object from a ByteDataItem message. Also converts values to other types if specified.
                     * @param message ByteDataItem
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.modelarmor.v1beta.ByteDataItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ByteDataItem to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ByteDataItem
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace ByteDataItem {

                    /** ByteItemType enum. */
                    enum ByteItemType {
                        BYTE_ITEM_TYPE_UNSPECIFIED = 0,
                        PLAINTEXT_UTF8 = 1,
                        PDF = 2,
                        WORD_DOCUMENT = 3,
                        EXCEL_DOCUMENT = 4,
                        POWERPOINT_DOCUMENT = 5,
                        TXT = 6,
                        CSV = 7
                    }
                }

                /** Properties of a SdpDeidentifyResult. */
                interface ISdpDeidentifyResult {

                    /** SdpDeidentifyResult executionState */
                    executionState?: (google.cloud.modelarmor.v1beta.FilterExecutionState|keyof typeof google.cloud.modelarmor.v1beta.FilterExecutionState|null);

                    /** SdpDeidentifyResult messageItems */
                    messageItems?: (google.cloud.modelarmor.v1beta.IMessageItem[]|null);

                    /** SdpDeidentifyResult matchState */
                    matchState?: (google.cloud.modelarmor.v1beta.FilterMatchState|keyof typeof google.cloud.modelarmor.v1beta.FilterMatchState|null);

                    /** SdpDeidentifyResult data */
                    data?: (google.cloud.modelarmor.v1beta.IDataItem|null);

                    /** SdpDeidentifyResult transformedBytes */
                    transformedBytes?: (number|Long|string|null);

                    /** SdpDeidentifyResult infoTypes */
                    infoTypes?: (string[]|null);
                }

                /** Represents a SdpDeidentifyResult. */
                class SdpDeidentifyResult implements ISdpDeidentifyResult {

                    /**
                     * Constructs a new SdpDeidentifyResult.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.modelarmor.v1beta.ISdpDeidentifyResult);

                    /** SdpDeidentifyResult executionState. */
                    public executionState: (google.cloud.modelarmor.v1beta.FilterExecutionState|keyof typeof google.cloud.modelarmor.v1beta.FilterExecutionState);

                    /** SdpDeidentifyResult messageItems. */
                    public messageItems: google.cloud.modelarmor.v1beta.IMessageItem[];

                    /** SdpDeidentifyResult matchState. */
                    public matchState: (google.cloud.modelarmor.v1beta.FilterMatchState|keyof typeof google.cloud.modelarmor.v1beta.FilterMatchState);

                    /** SdpDeidentifyResult data. */
                    public data?: (google.cloud.modelarmor.v1beta.IDataItem|null);

                    /** SdpDeidentifyResult transformedBytes. */
                    public transformedBytes: (number|Long|string);

                    /** SdpDeidentifyResult infoTypes. */
                    public infoTypes: string[];

                    /**
                     * Creates a new SdpDeidentifyResult instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SdpDeidentifyResult instance
                     */
                    public static create(properties?: google.cloud.modelarmor.v1beta.ISdpDeidentifyResult): google.cloud.modelarmor.v1beta.SdpDeidentifyResult;

                    /**
                     * Encodes the specified SdpDeidentifyResult message. Does not implicitly {@link google.cloud.modelarmor.v1beta.SdpDeidentifyResult.verify|verify} messages.
                     * @param message SdpDeidentifyResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.modelarmor.v1beta.ISdpDeidentifyResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SdpDeidentifyResult message, length delimited. Does not implicitly {@link google.cloud.modelarmor.v1beta.SdpDeidentifyResult.verify|verify} messages.
                     * @param message SdpDeidentifyResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.modelarmor.v1beta.ISdpDeidentifyResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SdpDeidentifyResult message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SdpDeidentifyResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.modelarmor.v1beta.SdpDeidentifyResult;

                    /**
                     * Decodes a SdpDeidentifyResult message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SdpDeidentifyResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.modelarmor.v1beta.SdpDeidentifyResult;

                    /**
                     * Verifies a SdpDeidentifyResult message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SdpDeidentifyResult message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SdpDeidentifyResult
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.modelarmor.v1beta.SdpDeidentifyResult;

                    /**
                     * Creates a plain object from a SdpDeidentifyResult message. Also converts values to other types if specified.
                     * @param message SdpDeidentifyResult
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.modelarmor.v1beta.SdpDeidentifyResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SdpDeidentifyResult to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SdpDeidentifyResult
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a SdpFinding. */
                interface ISdpFinding {

                    /** SdpFinding infoType */
                    infoType?: (string|null);

                    /** SdpFinding likelihood */
                    likelihood?: (google.cloud.modelarmor.v1beta.SdpFindingLikelihood|keyof typeof google.cloud.modelarmor.v1beta.SdpFindingLikelihood|null);

                    /** SdpFinding location */
                    location?: (google.cloud.modelarmor.v1beta.SdpFinding.ISdpFindingLocation|null);
                }

                /** Represents a SdpFinding. */
                class SdpFinding implements ISdpFinding {

                    /**
                     * Constructs a new SdpFinding.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.modelarmor.v1beta.ISdpFinding);

                    /** SdpFinding infoType. */
                    public infoType: string;

                    /** SdpFinding likelihood. */
                    public likelihood: (google.cloud.modelarmor.v1beta.SdpFindingLikelihood|keyof typeof google.cloud.modelarmor.v1beta.SdpFindingLikelihood);

                    /** SdpFinding location. */
                    public location?: (google.cloud.modelarmor.v1beta.SdpFinding.ISdpFindingLocation|null);

                    /**
                     * Creates a new SdpFinding instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SdpFinding instance
                     */
                    public static create(properties?: google.cloud.modelarmor.v1beta.ISdpFinding): google.cloud.modelarmor.v1beta.SdpFinding;

                    /**
                     * Encodes the specified SdpFinding message. Does not implicitly {@link google.cloud.modelarmor.v1beta.SdpFinding.verify|verify} messages.
                     * @param message SdpFinding message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.modelarmor.v1beta.ISdpFinding, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SdpFinding message, length delimited. Does not implicitly {@link google.cloud.modelarmor.v1beta.SdpFinding.verify|verify} messages.
                     * @param message SdpFinding message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.modelarmor.v1beta.ISdpFinding, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SdpFinding message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SdpFinding
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.modelarmor.v1beta.SdpFinding;

                    /**
                     * Decodes a SdpFinding message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SdpFinding
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.modelarmor.v1beta.SdpFinding;

                    /**
                     * Verifies a SdpFinding message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SdpFinding message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SdpFinding
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.modelarmor.v1beta.SdpFinding;

                    /**
                     * Creates a plain object from a SdpFinding message. Also converts values to other types if specified.
                     * @param message SdpFinding
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.modelarmor.v1beta.SdpFinding, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SdpFinding to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SdpFinding
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace SdpFinding {

                    /** Properties of a SdpFindingLocation. */
                    interface ISdpFindingLocation {

                        /** SdpFindingLocation byteRange */
                        byteRange?: (google.cloud.modelarmor.v1beta.IRangeInfo|null);

                        /** SdpFindingLocation codepointRange */
                        codepointRange?: (google.cloud.modelarmor.v1beta.IRangeInfo|null);
                    }

                    /** Represents a SdpFindingLocation. */
                    class SdpFindingLocation implements ISdpFindingLocation {

                        /**
                         * Constructs a new SdpFindingLocation.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.modelarmor.v1beta.SdpFinding.ISdpFindingLocation);

                        /** SdpFindingLocation byteRange. */
                        public byteRange?: (google.cloud.modelarmor.v1beta.IRangeInfo|null);

                        /** SdpFindingLocation codepointRange. */
                        public codepointRange?: (google.cloud.modelarmor.v1beta.IRangeInfo|null);

                        /**
                         * Creates a new SdpFindingLocation instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SdpFindingLocation instance
                         */
                        public static create(properties?: google.cloud.modelarmor.v1beta.SdpFinding.ISdpFindingLocation): google.cloud.modelarmor.v1beta.SdpFinding.SdpFindingLocation;

                        /**
                         * Encodes the specified SdpFindingLocation message. Does not implicitly {@link google.cloud.modelarmor.v1beta.SdpFinding.SdpFindingLocation.verify|verify} messages.
                         * @param message SdpFindingLocation message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.modelarmor.v1beta.SdpFinding.ISdpFindingLocation, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SdpFindingLocation message, length delimited. Does not implicitly {@link google.cloud.modelarmor.v1beta.SdpFinding.SdpFindingLocation.verify|verify} messages.
                         * @param message SdpFindingLocation message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.modelarmor.v1beta.SdpFinding.ISdpFindingLocation, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SdpFindingLocation message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SdpFindingLocation
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.modelarmor.v1beta.SdpFinding.SdpFindingLocation;

                        /**
                         * Decodes a SdpFindingLocation message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SdpFindingLocation
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.modelarmor.v1beta.SdpFinding.SdpFindingLocation;

                        /**
                         * Verifies a SdpFindingLocation message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SdpFindingLocation message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SdpFindingLocation
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.modelarmor.v1beta.SdpFinding.SdpFindingLocation;

                        /**
                         * Creates a plain object from a SdpFindingLocation message. Also converts values to other types if specified.
                         * @param message SdpFindingLocation
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.modelarmor.v1beta.SdpFinding.SdpFindingLocation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SdpFindingLocation to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for SdpFindingLocation
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of a PiAndJailbreakFilterResult. */
                interface IPiAndJailbreakFilterResult {

                    /** PiAndJailbreakFilterResult executionState */
                    executionState?: (google.cloud.modelarmor.v1beta.FilterExecutionState|keyof typeof google.cloud.modelarmor.v1beta.FilterExecutionState|null);

                    /** PiAndJailbreakFilterResult messageItems */
                    messageItems?: (google.cloud.modelarmor.v1beta.IMessageItem[]|null);

                    /** PiAndJailbreakFilterResult matchState */
                    matchState?: (google.cloud.modelarmor.v1beta.FilterMatchState|keyof typeof google.cloud.modelarmor.v1beta.FilterMatchState|null);

                    /** PiAndJailbreakFilterResult confidenceLevel */
                    confidenceLevel?: (google.cloud.modelarmor.v1beta.DetectionConfidenceLevel|keyof typeof google.cloud.modelarmor.v1beta.DetectionConfidenceLevel|null);
                }

                /** Represents a PiAndJailbreakFilterResult. */
                class PiAndJailbreakFilterResult implements IPiAndJailbreakFilterResult {

                    /**
                     * Constructs a new PiAndJailbreakFilterResult.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.modelarmor.v1beta.IPiAndJailbreakFilterResult);

                    /** PiAndJailbreakFilterResult executionState. */
                    public executionState: (google.cloud.modelarmor.v1beta.FilterExecutionState|keyof typeof google.cloud.modelarmor.v1beta.FilterExecutionState);

                    /** PiAndJailbreakFilterResult messageItems. */
                    public messageItems: google.cloud.modelarmor.v1beta.IMessageItem[];

                    /** PiAndJailbreakFilterResult matchState. */
                    public matchState: (google.cloud.modelarmor.v1beta.FilterMatchState|keyof typeof google.cloud.modelarmor.v1beta.FilterMatchState);

                    /** PiAndJailbreakFilterResult confidenceLevel. */
                    public confidenceLevel: (google.cloud.modelarmor.v1beta.DetectionConfidenceLevel|keyof typeof google.cloud.modelarmor.v1beta.DetectionConfidenceLevel);

                    /**
                     * Creates a new PiAndJailbreakFilterResult instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PiAndJailbreakFilterResult instance
                     */
                    public static create(properties?: google.cloud.modelarmor.v1beta.IPiAndJailbreakFilterResult): google.cloud.modelarmor.v1beta.PiAndJailbreakFilterResult;

                    /**
                     * Encodes the specified PiAndJailbreakFilterResult message. Does not implicitly {@link google.cloud.modelarmor.v1beta.PiAndJailbreakFilterResult.verify|verify} messages.
                     * @param message PiAndJailbreakFilterResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.modelarmor.v1beta.IPiAndJailbreakFilterResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PiAndJailbreakFilterResult message, length delimited. Does not implicitly {@link google.cloud.modelarmor.v1beta.PiAndJailbreakFilterResult.verify|verify} messages.
                     * @param message PiAndJailbreakFilterResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.modelarmor.v1beta.IPiAndJailbreakFilterResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PiAndJailbreakFilterResult message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PiAndJailbreakFilterResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.modelarmor.v1beta.PiAndJailbreakFilterResult;

                    /**
                     * Decodes a PiAndJailbreakFilterResult message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PiAndJailbreakFilterResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.modelarmor.v1beta.PiAndJailbreakFilterResult;

                    /**
                     * Verifies a PiAndJailbreakFilterResult message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PiAndJailbreakFilterResult message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PiAndJailbreakFilterResult
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.modelarmor.v1beta.PiAndJailbreakFilterResult;

                    /**
                     * Creates a plain object from a PiAndJailbreakFilterResult message. Also converts values to other types if specified.
                     * @param message PiAndJailbreakFilterResult
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.modelarmor.v1beta.PiAndJailbreakFilterResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PiAndJailbreakFilterResult to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for PiAndJailbreakFilterResult
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a MaliciousUriFilterResult. */
                interface IMaliciousUriFilterResult {

                    /** MaliciousUriFilterResult executionState */
                    executionState?: (google.cloud.modelarmor.v1beta.FilterExecutionState|keyof typeof google.cloud.modelarmor.v1beta.FilterExecutionState|null);

                    /** MaliciousUriFilterResult messageItems */
                    messageItems?: (google.cloud.modelarmor.v1beta.IMessageItem[]|null);

                    /** MaliciousUriFilterResult matchState */
                    matchState?: (google.cloud.modelarmor.v1beta.FilterMatchState|keyof typeof google.cloud.modelarmor.v1beta.FilterMatchState|null);

                    /** MaliciousUriFilterResult maliciousUriMatchedItems */
                    maliciousUriMatchedItems?: (google.cloud.modelarmor.v1beta.MaliciousUriFilterResult.IMaliciousUriMatchedItem[]|null);
                }

                /** Represents a MaliciousUriFilterResult. */
                class MaliciousUriFilterResult implements IMaliciousUriFilterResult {

                    /**
                     * Constructs a new MaliciousUriFilterResult.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.modelarmor.v1beta.IMaliciousUriFilterResult);

                    /** MaliciousUriFilterResult executionState. */
                    public executionState: (google.cloud.modelarmor.v1beta.FilterExecutionState|keyof typeof google.cloud.modelarmor.v1beta.FilterExecutionState);

                    /** MaliciousUriFilterResult messageItems. */
                    public messageItems: google.cloud.modelarmor.v1beta.IMessageItem[];

                    /** MaliciousUriFilterResult matchState. */
                    public matchState: (google.cloud.modelarmor.v1beta.FilterMatchState|keyof typeof google.cloud.modelarmor.v1beta.FilterMatchState);

                    /** MaliciousUriFilterResult maliciousUriMatchedItems. */
                    public maliciousUriMatchedItems: google.cloud.modelarmor.v1beta.MaliciousUriFilterResult.IMaliciousUriMatchedItem[];

                    /**
                     * Creates a new MaliciousUriFilterResult instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MaliciousUriFilterResult instance
                     */
                    public static create(properties?: google.cloud.modelarmor.v1beta.IMaliciousUriFilterResult): google.cloud.modelarmor.v1beta.MaliciousUriFilterResult;

                    /**
                     * Encodes the specified MaliciousUriFilterResult message. Does not implicitly {@link google.cloud.modelarmor.v1beta.MaliciousUriFilterResult.verify|verify} messages.
                     * @param message MaliciousUriFilterResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.modelarmor.v1beta.IMaliciousUriFilterResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MaliciousUriFilterResult message, length delimited. Does not implicitly {@link google.cloud.modelarmor.v1beta.MaliciousUriFilterResult.verify|verify} messages.
                     * @param message MaliciousUriFilterResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.modelarmor.v1beta.IMaliciousUriFilterResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MaliciousUriFilterResult message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MaliciousUriFilterResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.modelarmor.v1beta.MaliciousUriFilterResult;

                    /**
                     * Decodes a MaliciousUriFilterResult message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MaliciousUriFilterResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.modelarmor.v1beta.MaliciousUriFilterResult;

                    /**
                     * Verifies a MaliciousUriFilterResult message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MaliciousUriFilterResult message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MaliciousUriFilterResult
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.modelarmor.v1beta.MaliciousUriFilterResult;

                    /**
                     * Creates a plain object from a MaliciousUriFilterResult message. Also converts values to other types if specified.
                     * @param message MaliciousUriFilterResult
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.modelarmor.v1beta.MaliciousUriFilterResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MaliciousUriFilterResult to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for MaliciousUriFilterResult
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace MaliciousUriFilterResult {

                    /** Properties of a MaliciousUriMatchedItem. */
                    interface IMaliciousUriMatchedItem {

                        /** MaliciousUriMatchedItem uri */
                        uri?: (string|null);

                        /** MaliciousUriMatchedItem locations */
                        locations?: (google.cloud.modelarmor.v1beta.IRangeInfo[]|null);
                    }

                    /** Represents a MaliciousUriMatchedItem. */
                    class MaliciousUriMatchedItem implements IMaliciousUriMatchedItem {

                        /**
                         * Constructs a new MaliciousUriMatchedItem.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.modelarmor.v1beta.MaliciousUriFilterResult.IMaliciousUriMatchedItem);

                        /** MaliciousUriMatchedItem uri. */
                        public uri: string;

                        /** MaliciousUriMatchedItem locations. */
                        public locations: google.cloud.modelarmor.v1beta.IRangeInfo[];

                        /**
                         * Creates a new MaliciousUriMatchedItem instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns MaliciousUriMatchedItem instance
                         */
                        public static create(properties?: google.cloud.modelarmor.v1beta.MaliciousUriFilterResult.IMaliciousUriMatchedItem): google.cloud.modelarmor.v1beta.MaliciousUriFilterResult.MaliciousUriMatchedItem;

                        /**
                         * Encodes the specified MaliciousUriMatchedItem message. Does not implicitly {@link google.cloud.modelarmor.v1beta.MaliciousUriFilterResult.MaliciousUriMatchedItem.verify|verify} messages.
                         * @param message MaliciousUriMatchedItem message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.modelarmor.v1beta.MaliciousUriFilterResult.IMaliciousUriMatchedItem, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified MaliciousUriMatchedItem message, length delimited. Does not implicitly {@link google.cloud.modelarmor.v1beta.MaliciousUriFilterResult.MaliciousUriMatchedItem.verify|verify} messages.
                         * @param message MaliciousUriMatchedItem message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.modelarmor.v1beta.MaliciousUriFilterResult.IMaliciousUriMatchedItem, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a MaliciousUriMatchedItem message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns MaliciousUriMatchedItem
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.modelarmor.v1beta.MaliciousUriFilterResult.MaliciousUriMatchedItem;

                        /**
                         * Decodes a MaliciousUriMatchedItem message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns MaliciousUriMatchedItem
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.modelarmor.v1beta.MaliciousUriFilterResult.MaliciousUriMatchedItem;

                        /**
                         * Verifies a MaliciousUriMatchedItem message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a MaliciousUriMatchedItem message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns MaliciousUriMatchedItem
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.modelarmor.v1beta.MaliciousUriFilterResult.MaliciousUriMatchedItem;

                        /**
                         * Creates a plain object from a MaliciousUriMatchedItem message. Also converts values to other types if specified.
                         * @param message MaliciousUriMatchedItem
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.modelarmor.v1beta.MaliciousUriFilterResult.MaliciousUriMatchedItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this MaliciousUriMatchedItem to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for MaliciousUriMatchedItem
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of a VirusScanFilterResult. */
                interface IVirusScanFilterResult {

                    /** VirusScanFilterResult executionState */
                    executionState?: (google.cloud.modelarmor.v1beta.FilterExecutionState|keyof typeof google.cloud.modelarmor.v1beta.FilterExecutionState|null);

                    /** VirusScanFilterResult messageItems */
                    messageItems?: (google.cloud.modelarmor.v1beta.IMessageItem[]|null);

                    /** VirusScanFilterResult matchState */
                    matchState?: (google.cloud.modelarmor.v1beta.FilterMatchState|keyof typeof google.cloud.modelarmor.v1beta.FilterMatchState|null);

                    /** VirusScanFilterResult scannedContentType */
                    scannedContentType?: (google.cloud.modelarmor.v1beta.VirusScanFilterResult.ScannedContentType|keyof typeof google.cloud.modelarmor.v1beta.VirusScanFilterResult.ScannedContentType|null);

                    /** VirusScanFilterResult scannedSize */
                    scannedSize?: (number|Long|string|null);

                    /** VirusScanFilterResult virusDetails */
                    virusDetails?: (google.cloud.modelarmor.v1beta.IVirusDetail[]|null);
                }

                /** Represents a VirusScanFilterResult. */
                class VirusScanFilterResult implements IVirusScanFilterResult {

                    /**
                     * Constructs a new VirusScanFilterResult.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.modelarmor.v1beta.IVirusScanFilterResult);

                    /** VirusScanFilterResult executionState. */
                    public executionState: (google.cloud.modelarmor.v1beta.FilterExecutionState|keyof typeof google.cloud.modelarmor.v1beta.FilterExecutionState);

                    /** VirusScanFilterResult messageItems. */
                    public messageItems: google.cloud.modelarmor.v1beta.IMessageItem[];

                    /** VirusScanFilterResult matchState. */
                    public matchState: (google.cloud.modelarmor.v1beta.FilterMatchState|keyof typeof google.cloud.modelarmor.v1beta.FilterMatchState);

                    /** VirusScanFilterResult scannedContentType. */
                    public scannedContentType: (google.cloud.modelarmor.v1beta.VirusScanFilterResult.ScannedContentType|keyof typeof google.cloud.modelarmor.v1beta.VirusScanFilterResult.ScannedContentType);

                    /** VirusScanFilterResult scannedSize. */
                    public scannedSize?: (number|Long|string|null);

                    /** VirusScanFilterResult virusDetails. */
                    public virusDetails: google.cloud.modelarmor.v1beta.IVirusDetail[];

                    /**
                     * Creates a new VirusScanFilterResult instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns VirusScanFilterResult instance
                     */
                    public static create(properties?: google.cloud.modelarmor.v1beta.IVirusScanFilterResult): google.cloud.modelarmor.v1beta.VirusScanFilterResult;

                    /**
                     * Encodes the specified VirusScanFilterResult message. Does not implicitly {@link google.cloud.modelarmor.v1beta.VirusScanFilterResult.verify|verify} messages.
                     * @param message VirusScanFilterResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.modelarmor.v1beta.IVirusScanFilterResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified VirusScanFilterResult message, length delimited. Does not implicitly {@link google.cloud.modelarmor.v1beta.VirusScanFilterResult.verify|verify} messages.
                     * @param message VirusScanFilterResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.modelarmor.v1beta.IVirusScanFilterResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a VirusScanFilterResult message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns VirusScanFilterResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.modelarmor.v1beta.VirusScanFilterResult;

                    /**
                     * Decodes a VirusScanFilterResult message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns VirusScanFilterResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.modelarmor.v1beta.VirusScanFilterResult;

                    /**
                     * Verifies a VirusScanFilterResult message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a VirusScanFilterResult message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns VirusScanFilterResult
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.modelarmor.v1beta.VirusScanFilterResult;

                    /**
                     * Creates a plain object from a VirusScanFilterResult message. Also converts values to other types if specified.
                     * @param message VirusScanFilterResult
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.modelarmor.v1beta.VirusScanFilterResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this VirusScanFilterResult to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for VirusScanFilterResult
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace VirusScanFilterResult {

                    /** ScannedContentType enum. */
                    enum ScannedContentType {
                        SCANNED_CONTENT_TYPE_UNSPECIFIED = 0,
                        UNKNOWN = 1,
                        PLAINTEXT = 2,
                        PDF = 3
                    }
                }

                /** Properties of a VirusDetail. */
                interface IVirusDetail {

                    /** VirusDetail vendor */
                    vendor?: (string|null);

                    /** VirusDetail names */
                    names?: (string[]|null);

                    /** VirusDetail threatType */
                    threatType?: (google.cloud.modelarmor.v1beta.VirusDetail.ThreatType|keyof typeof google.cloud.modelarmor.v1beta.VirusDetail.ThreatType|null);
                }

                /** Represents a VirusDetail. */
                class VirusDetail implements IVirusDetail {

                    /**
                     * Constructs a new VirusDetail.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.modelarmor.v1beta.IVirusDetail);

                    /** VirusDetail vendor. */
                    public vendor: string;

                    /** VirusDetail names. */
                    public names: string[];

                    /** VirusDetail threatType. */
                    public threatType: (google.cloud.modelarmor.v1beta.VirusDetail.ThreatType|keyof typeof google.cloud.modelarmor.v1beta.VirusDetail.ThreatType);

                    /**
                     * Creates a new VirusDetail instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns VirusDetail instance
                     */
                    public static create(properties?: google.cloud.modelarmor.v1beta.IVirusDetail): google.cloud.modelarmor.v1beta.VirusDetail;

                    /**
                     * Encodes the specified VirusDetail message. Does not implicitly {@link google.cloud.modelarmor.v1beta.VirusDetail.verify|verify} messages.
                     * @param message VirusDetail message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.modelarmor.v1beta.IVirusDetail, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified VirusDetail message, length delimited. Does not implicitly {@link google.cloud.modelarmor.v1beta.VirusDetail.verify|verify} messages.
                     * @param message VirusDetail message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.modelarmor.v1beta.IVirusDetail, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a VirusDetail message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns VirusDetail
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.modelarmor.v1beta.VirusDetail;

                    /**
                     * Decodes a VirusDetail message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns VirusDetail
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.modelarmor.v1beta.VirusDetail;

                    /**
                     * Verifies a VirusDetail message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a VirusDetail message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns VirusDetail
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.modelarmor.v1beta.VirusDetail;

                    /**
                     * Creates a plain object from a VirusDetail message. Also converts values to other types if specified.
                     * @param message VirusDetail
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.modelarmor.v1beta.VirusDetail, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this VirusDetail to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for VirusDetail
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace VirusDetail {

                    /** ThreatType enum. */
                    enum ThreatType {
                        THREAT_TYPE_UNSPECIFIED = 0,
                        UNKNOWN = 1,
                        VIRUS_OR_WORM = 2,
                        MALICIOUS_PROGRAM = 3,
                        POTENTIALLY_HARMFUL_CONTENT = 4,
                        POTENTIALLY_UNWANTED_CONTENT = 5
                    }
                }

                /** Properties of a CsamFilterResult. */
                interface ICsamFilterResult {

                    /** CsamFilterResult executionState */
                    executionState?: (google.cloud.modelarmor.v1beta.FilterExecutionState|keyof typeof google.cloud.modelarmor.v1beta.FilterExecutionState|null);

                    /** CsamFilterResult messageItems */
                    messageItems?: (google.cloud.modelarmor.v1beta.IMessageItem[]|null);

                    /** CsamFilterResult matchState */
                    matchState?: (google.cloud.modelarmor.v1beta.FilterMatchState|keyof typeof google.cloud.modelarmor.v1beta.FilterMatchState|null);
                }

                /** Represents a CsamFilterResult. */
                class CsamFilterResult implements ICsamFilterResult {

                    /**
                     * Constructs a new CsamFilterResult.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.modelarmor.v1beta.ICsamFilterResult);

                    /** CsamFilterResult executionState. */
                    public executionState: (google.cloud.modelarmor.v1beta.FilterExecutionState|keyof typeof google.cloud.modelarmor.v1beta.FilterExecutionState);

                    /** CsamFilterResult messageItems. */
                    public messageItems: google.cloud.modelarmor.v1beta.IMessageItem[];

                    /** CsamFilterResult matchState. */
                    public matchState: (google.cloud.modelarmor.v1beta.FilterMatchState|keyof typeof google.cloud.modelarmor.v1beta.FilterMatchState);

                    /**
                     * Creates a new CsamFilterResult instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CsamFilterResult instance
                     */
                    public static create(properties?: google.cloud.modelarmor.v1beta.ICsamFilterResult): google.cloud.modelarmor.v1beta.CsamFilterResult;

                    /**
                     * Encodes the specified CsamFilterResult message. Does not implicitly {@link google.cloud.modelarmor.v1beta.CsamFilterResult.verify|verify} messages.
                     * @param message CsamFilterResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.modelarmor.v1beta.ICsamFilterResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CsamFilterResult message, length delimited. Does not implicitly {@link google.cloud.modelarmor.v1beta.CsamFilterResult.verify|verify} messages.
                     * @param message CsamFilterResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.modelarmor.v1beta.ICsamFilterResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CsamFilterResult message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CsamFilterResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.modelarmor.v1beta.CsamFilterResult;

                    /**
                     * Decodes a CsamFilterResult message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CsamFilterResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.modelarmor.v1beta.CsamFilterResult;

                    /**
                     * Verifies a CsamFilterResult message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CsamFilterResult message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CsamFilterResult
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.modelarmor.v1beta.CsamFilterResult;

                    /**
                     * Creates a plain object from a CsamFilterResult message. Also converts values to other types if specified.
                     * @param message CsamFilterResult
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.modelarmor.v1beta.CsamFilterResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CsamFilterResult to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CsamFilterResult
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a MessageItem. */
                interface IMessageItem {

                    /** MessageItem messageType */
                    messageType?: (google.cloud.modelarmor.v1beta.MessageItem.MessageType|keyof typeof google.cloud.modelarmor.v1beta.MessageItem.MessageType|null);

                    /** MessageItem message */
                    message?: (string|null);
                }

                /** Represents a MessageItem. */
                class MessageItem implements IMessageItem {

                    /**
                     * Constructs a new MessageItem.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.modelarmor.v1beta.IMessageItem);

                    /** MessageItem messageType. */
                    public messageType: (google.cloud.modelarmor.v1beta.MessageItem.MessageType|keyof typeof google.cloud.modelarmor.v1beta.MessageItem.MessageType);

                    /** MessageItem message. */
                    public message: string;

                    /**
                     * Creates a new MessageItem instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MessageItem instance
                     */
                    public static create(properties?: google.cloud.modelarmor.v1beta.IMessageItem): google.cloud.modelarmor.v1beta.MessageItem;

                    /**
                     * Encodes the specified MessageItem message. Does not implicitly {@link google.cloud.modelarmor.v1beta.MessageItem.verify|verify} messages.
                     * @param message MessageItem message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.modelarmor.v1beta.IMessageItem, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MessageItem message, length delimited. Does not implicitly {@link google.cloud.modelarmor.v1beta.MessageItem.verify|verify} messages.
                     * @param message MessageItem message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.modelarmor.v1beta.IMessageItem, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MessageItem message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MessageItem
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.modelarmor.v1beta.MessageItem;

                    /**
                     * Decodes a MessageItem message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MessageItem
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.modelarmor.v1beta.MessageItem;

                    /**
                     * Verifies a MessageItem message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MessageItem message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MessageItem
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.modelarmor.v1beta.MessageItem;

                    /**
                     * Creates a plain object from a MessageItem message. Also converts values to other types if specified.
                     * @param message MessageItem
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.modelarmor.v1beta.MessageItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MessageItem to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for MessageItem
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace MessageItem {

                    /** MessageType enum. */
                    enum MessageType {
                        MESSAGE_TYPE_UNSPECIFIED = 0,
                        INFO = 1,
                        WARNING = 2,
                        ERROR = 3
                    }
                }

                /** Properties of a RangeInfo. */
                interface IRangeInfo {

                    /** RangeInfo start */
                    start?: (number|Long|string|null);

                    /** RangeInfo end */
                    end?: (number|Long|string|null);
                }

                /** Represents a RangeInfo. */
                class RangeInfo implements IRangeInfo {

                    /**
                     * Constructs a new RangeInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.modelarmor.v1beta.IRangeInfo);

                    /** RangeInfo start. */
                    public start?: (number|Long|string|null);

                    /** RangeInfo end. */
                    public end?: (number|Long|string|null);

                    /**
                     * Creates a new RangeInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RangeInfo instance
                     */
                    public static create(properties?: google.cloud.modelarmor.v1beta.IRangeInfo): google.cloud.modelarmor.v1beta.RangeInfo;

                    /**
                     * Encodes the specified RangeInfo message. Does not implicitly {@link google.cloud.modelarmor.v1beta.RangeInfo.verify|verify} messages.
                     * @param message RangeInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.modelarmor.v1beta.IRangeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RangeInfo message, length delimited. Does not implicitly {@link google.cloud.modelarmor.v1beta.RangeInfo.verify|verify} messages.
                     * @param message RangeInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.modelarmor.v1beta.IRangeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RangeInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RangeInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.modelarmor.v1beta.RangeInfo;

                    /**
                     * Decodes a RangeInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RangeInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.modelarmor.v1beta.RangeInfo;

                    /**
                     * Verifies a RangeInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RangeInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RangeInfo
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.modelarmor.v1beta.RangeInfo;

                    /**
                     * Creates a plain object from a RangeInfo message. Also converts values to other types if specified.
                     * @param message RangeInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.modelarmor.v1beta.RangeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RangeInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RangeInfo
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

            /** CommonLanguageSettings selectiveGapicGeneration */
            selectiveGapicGeneration?: (google.api.ISelectiveGapicGeneration|null);
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

            /** CommonLanguageSettings selectiveGapicGeneration. */
            public selectiveGapicGeneration?: (google.api.ISelectiveGapicGeneration|null);

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

            /** PythonSettings experimentalFeatures */
            experimentalFeatures?: (google.api.PythonSettings.IExperimentalFeatures|null);
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

            /** PythonSettings experimentalFeatures. */
            public experimentalFeatures?: (google.api.PythonSettings.IExperimentalFeatures|null);

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

        namespace PythonSettings {

            /** Properties of an ExperimentalFeatures. */
            interface IExperimentalFeatures {

                /** ExperimentalFeatures restAsyncIoEnabled */
                restAsyncIoEnabled?: (boolean|null);

                /** ExperimentalFeatures protobufPythonicTypesEnabled */
                protobufPythonicTypesEnabled?: (boolean|null);

                /** ExperimentalFeatures unversionedPackageDisabled */
                unversionedPackageDisabled?: (boolean|null);
            }

            /** Represents an ExperimentalFeatures. */
            class ExperimentalFeatures implements IExperimentalFeatures {

                /**
                 * Constructs a new ExperimentalFeatures.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.api.PythonSettings.IExperimentalFeatures);

                /** ExperimentalFeatures restAsyncIoEnabled. */
                public restAsyncIoEnabled: boolean;

                /** ExperimentalFeatures protobufPythonicTypesEnabled. */
                public protobufPythonicTypesEnabled: boolean;

                /** ExperimentalFeatures unversionedPackageDisabled. */
                public unversionedPackageDisabled: boolean;

                /**
                 * Creates a new ExperimentalFeatures instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ExperimentalFeatures instance
                 */
                public static create(properties?: google.api.PythonSettings.IExperimentalFeatures): google.api.PythonSettings.ExperimentalFeatures;

                /**
                 * Encodes the specified ExperimentalFeatures message. Does not implicitly {@link google.api.PythonSettings.ExperimentalFeatures.verify|verify} messages.
                 * @param message ExperimentalFeatures message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.api.PythonSettings.IExperimentalFeatures, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ExperimentalFeatures message, length delimited. Does not implicitly {@link google.api.PythonSettings.ExperimentalFeatures.verify|verify} messages.
                 * @param message ExperimentalFeatures message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.api.PythonSettings.IExperimentalFeatures, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ExperimentalFeatures message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ExperimentalFeatures
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.PythonSettings.ExperimentalFeatures;

                /**
                 * Decodes an ExperimentalFeatures message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ExperimentalFeatures
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.PythonSettings.ExperimentalFeatures;

                /**
                 * Verifies an ExperimentalFeatures message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ExperimentalFeatures message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ExperimentalFeatures
                 */
                public static fromObject(object: { [k: string]: any }): google.api.PythonSettings.ExperimentalFeatures;

                /**
                 * Creates a plain object from an ExperimentalFeatures message. Also converts values to other types if specified.
                 * @param message ExperimentalFeatures
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.api.PythonSettings.ExperimentalFeatures, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ExperimentalFeatures to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ExperimentalFeatures
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
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

            /** GoSettings renamedServices */
            renamedServices?: ({ [k: string]: string }|null);
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

            /** GoSettings renamedServices. */
            public renamedServices: { [k: string]: string };

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

        /** Properties of a SelectiveGapicGeneration. */
        interface ISelectiveGapicGeneration {

            /** SelectiveGapicGeneration methods */
            methods?: (string[]|null);

            /** SelectiveGapicGeneration generateOmittedAsInternal */
            generateOmittedAsInternal?: (boolean|null);
        }

        /** Represents a SelectiveGapicGeneration. */
        class SelectiveGapicGeneration implements ISelectiveGapicGeneration {

            /**
             * Constructs a new SelectiveGapicGeneration.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.ISelectiveGapicGeneration);

            /** SelectiveGapicGeneration methods. */
            public methods: string[];

            /** SelectiveGapicGeneration generateOmittedAsInternal. */
            public generateOmittedAsInternal: boolean;

            /**
             * Creates a new SelectiveGapicGeneration instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SelectiveGapicGeneration instance
             */
            public static create(properties?: google.api.ISelectiveGapicGeneration): google.api.SelectiveGapicGeneration;

            /**
             * Encodes the specified SelectiveGapicGeneration message. Does not implicitly {@link google.api.SelectiveGapicGeneration.verify|verify} messages.
             * @param message SelectiveGapicGeneration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.ISelectiveGapicGeneration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SelectiveGapicGeneration message, length delimited. Does not implicitly {@link google.api.SelectiveGapicGeneration.verify|verify} messages.
             * @param message SelectiveGapicGeneration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.ISelectiveGapicGeneration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SelectiveGapicGeneration message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SelectiveGapicGeneration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.SelectiveGapicGeneration;

            /**
             * Decodes a SelectiveGapicGeneration message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SelectiveGapicGeneration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.SelectiveGapicGeneration;

            /**
             * Verifies a SelectiveGapicGeneration message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SelectiveGapicGeneration message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SelectiveGapicGeneration
             */
            public static fromObject(object: { [k: string]: any }): google.api.SelectiveGapicGeneration;

            /**
             * Creates a plain object from a SelectiveGapicGeneration message. Also converts values to other types if specified.
             * @param message SelectiveGapicGeneration
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.SelectiveGapicGeneration, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SelectiveGapicGeneration to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SelectiveGapicGeneration
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
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

            /** FieldInfo referencedTypes */
            referencedTypes?: (google.api.ITypeReference[]|null);
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

            /** FieldInfo referencedTypes. */
            public referencedTypes: google.api.ITypeReference[];

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

        /** Properties of a TypeReference. */
        interface ITypeReference {

            /** TypeReference typeName */
            typeName?: (string|null);
        }

        /** Represents a TypeReference. */
        class TypeReference implements ITypeReference {

            /**
             * Constructs a new TypeReference.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.ITypeReference);

            /** TypeReference typeName. */
            public typeName: string;

            /**
             * Creates a new TypeReference instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TypeReference instance
             */
            public static create(properties?: google.api.ITypeReference): google.api.TypeReference;

            /**
             * Encodes the specified TypeReference message. Does not implicitly {@link google.api.TypeReference.verify|verify} messages.
             * @param message TypeReference message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.ITypeReference, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TypeReference message, length delimited. Does not implicitly {@link google.api.TypeReference.verify|verify} messages.
             * @param message TypeReference message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.ITypeReference, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TypeReference message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TypeReference
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.TypeReference;

            /**
             * Decodes a TypeReference message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TypeReference
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.TypeReference;

            /**
             * Verifies a TypeReference message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TypeReference message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TypeReference
             */
            public static fromObject(object: { [k: string]: any }): google.api.TypeReference;

            /**
             * Creates a plain object from a TypeReference message. Also converts values to other types if specified.
             * @param message TypeReference
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.TypeReference, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TypeReference to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for TypeReference
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
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
            EDITION_LEGACY = 900,
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

            /** FileDescriptorProto optionDependency */
            optionDependency?: (string[]|null);

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

            /** FileDescriptorProto optionDependency. */
            public optionDependency: string[];

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

            /** DescriptorProto visibility */
            visibility?: (google.protobuf.SymbolVisibility|keyof typeof google.protobuf.SymbolVisibility|null);
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

            /** DescriptorProto visibility. */
            public visibility: (google.protobuf.SymbolVisibility|keyof typeof google.protobuf.SymbolVisibility);

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

            /** EnumDescriptorProto visibility */
            visibility?: (google.protobuf.SymbolVisibility|keyof typeof google.protobuf.SymbolVisibility|null);
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

            /** EnumDescriptorProto visibility. */
            public visibility: (google.protobuf.SymbolVisibility|keyof typeof google.protobuf.SymbolVisibility);

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

            /** FieldOptions featureSupport */
            featureSupport?: (google.protobuf.FieldOptions.IFeatureSupport|null);

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

            /** FieldOptions featureSupport. */
            public featureSupport?: (google.protobuf.FieldOptions.IFeatureSupport|null);

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

            /** Properties of a FeatureSupport. */
            interface IFeatureSupport {

                /** FeatureSupport editionIntroduced */
                editionIntroduced?: (google.protobuf.Edition|keyof typeof google.protobuf.Edition|null);

                /** FeatureSupport editionDeprecated */
                editionDeprecated?: (google.protobuf.Edition|keyof typeof google.protobuf.Edition|null);

                /** FeatureSupport deprecationWarning */
                deprecationWarning?: (string|null);

                /** FeatureSupport editionRemoved */
                editionRemoved?: (google.protobuf.Edition|keyof typeof google.protobuf.Edition|null);
            }

            /** Represents a FeatureSupport. */
            class FeatureSupport implements IFeatureSupport {

                /**
                 * Constructs a new FeatureSupport.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.FieldOptions.IFeatureSupport);

                /** FeatureSupport editionIntroduced. */
                public editionIntroduced: (google.protobuf.Edition|keyof typeof google.protobuf.Edition);

                /** FeatureSupport editionDeprecated. */
                public editionDeprecated: (google.protobuf.Edition|keyof typeof google.protobuf.Edition);

                /** FeatureSupport deprecationWarning. */
                public deprecationWarning: string;

                /** FeatureSupport editionRemoved. */
                public editionRemoved: (google.protobuf.Edition|keyof typeof google.protobuf.Edition);

                /**
                 * Creates a new FeatureSupport instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns FeatureSupport instance
                 */
                public static create(properties?: google.protobuf.FieldOptions.IFeatureSupport): google.protobuf.FieldOptions.FeatureSupport;

                /**
                 * Encodes the specified FeatureSupport message. Does not implicitly {@link google.protobuf.FieldOptions.FeatureSupport.verify|verify} messages.
                 * @param message FeatureSupport message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.FieldOptions.IFeatureSupport, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified FeatureSupport message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.FeatureSupport.verify|verify} messages.
                 * @param message FeatureSupport message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.FieldOptions.IFeatureSupport, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a FeatureSupport message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns FeatureSupport
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldOptions.FeatureSupport;

                /**
                 * Decodes a FeatureSupport message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns FeatureSupport
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldOptions.FeatureSupport;

                /**
                 * Verifies a FeatureSupport message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a FeatureSupport message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns FeatureSupport
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.FieldOptions.FeatureSupport;

                /**
                 * Creates a plain object from a FeatureSupport message. Also converts values to other types if specified.
                 * @param message FeatureSupport
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.FieldOptions.FeatureSupport, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this FeatureSupport to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for FeatureSupport
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

            /** EnumValueOptions featureSupport */
            featureSupport?: (google.protobuf.FieldOptions.IFeatureSupport|null);

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

            /** EnumValueOptions featureSupport. */
            public featureSupport?: (google.protobuf.FieldOptions.IFeatureSupport|null);

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

            /** FeatureSet enforceNamingStyle */
            enforceNamingStyle?: (google.protobuf.FeatureSet.EnforceNamingStyle|keyof typeof google.protobuf.FeatureSet.EnforceNamingStyle|null);

            /** FeatureSet defaultSymbolVisibility */
            defaultSymbolVisibility?: (google.protobuf.FeatureSet.VisibilityFeature.DefaultSymbolVisibility|keyof typeof google.protobuf.FeatureSet.VisibilityFeature.DefaultSymbolVisibility|null);
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

            /** FeatureSet enforceNamingStyle. */
            public enforceNamingStyle: (google.protobuf.FeatureSet.EnforceNamingStyle|keyof typeof google.protobuf.FeatureSet.EnforceNamingStyle);

            /** FeatureSet defaultSymbolVisibility. */
            public defaultSymbolVisibility: (google.protobuf.FeatureSet.VisibilityFeature.DefaultSymbolVisibility|keyof typeof google.protobuf.FeatureSet.VisibilityFeature.DefaultSymbolVisibility);

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

            /** EnforceNamingStyle enum. */
            enum EnforceNamingStyle {
                ENFORCE_NAMING_STYLE_UNKNOWN = 0,
                STYLE2024 = 1,
                STYLE_LEGACY = 2
            }

            /** Properties of a VisibilityFeature. */
            interface IVisibilityFeature {
            }

            /** Represents a VisibilityFeature. */
            class VisibilityFeature implements IVisibilityFeature {

                /**
                 * Constructs a new VisibilityFeature.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.FeatureSet.IVisibilityFeature);

                /**
                 * Creates a new VisibilityFeature instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns VisibilityFeature instance
                 */
                public static create(properties?: google.protobuf.FeatureSet.IVisibilityFeature): google.protobuf.FeatureSet.VisibilityFeature;

                /**
                 * Encodes the specified VisibilityFeature message. Does not implicitly {@link google.protobuf.FeatureSet.VisibilityFeature.verify|verify} messages.
                 * @param message VisibilityFeature message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.FeatureSet.IVisibilityFeature, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified VisibilityFeature message, length delimited. Does not implicitly {@link google.protobuf.FeatureSet.VisibilityFeature.verify|verify} messages.
                 * @param message VisibilityFeature message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.FeatureSet.IVisibilityFeature, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a VisibilityFeature message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns VisibilityFeature
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FeatureSet.VisibilityFeature;

                /**
                 * Decodes a VisibilityFeature message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns VisibilityFeature
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FeatureSet.VisibilityFeature;

                /**
                 * Verifies a VisibilityFeature message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a VisibilityFeature message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns VisibilityFeature
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.FeatureSet.VisibilityFeature;

                /**
                 * Creates a plain object from a VisibilityFeature message. Also converts values to other types if specified.
                 * @param message VisibilityFeature
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.FeatureSet.VisibilityFeature, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this VisibilityFeature to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for VisibilityFeature
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace VisibilityFeature {

                /** DefaultSymbolVisibility enum. */
                enum DefaultSymbolVisibility {
                    DEFAULT_SYMBOL_VISIBILITY_UNKNOWN = 0,
                    EXPORT_ALL = 1,
                    EXPORT_TOP_LEVEL = 2,
                    LOCAL_ALL = 3,
                    STRICT = 4
                }
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

                /** FeatureSetEditionDefault overridableFeatures */
                overridableFeatures?: (google.protobuf.IFeatureSet|null);

                /** FeatureSetEditionDefault fixedFeatures */
                fixedFeatures?: (google.protobuf.IFeatureSet|null);
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

                /** FeatureSetEditionDefault overridableFeatures. */
                public overridableFeatures?: (google.protobuf.IFeatureSet|null);

                /** FeatureSetEditionDefault fixedFeatures. */
                public fixedFeatures?: (google.protobuf.IFeatureSet|null);

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

        /** SymbolVisibility enum. */
        enum SymbolVisibility {
            VISIBILITY_UNSET = 0,
            VISIBILITY_LOCAL = 1,
            VISIBILITY_EXPORT = 2
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
}
