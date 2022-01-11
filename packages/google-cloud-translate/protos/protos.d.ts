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

        /** Namespace translation. */
        namespace translation {

            /** Namespace v3. */
            namespace v3 {

                /** Represents a TranslationService */
                class TranslationService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new TranslationService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new TranslationService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): TranslationService;

                    /**
                     * Calls TranslateText.
                     * @param request TranslateTextRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and TranslateTextResponse
                     */
                    public translateText(request: google.cloud.translation.v3.ITranslateTextRequest, callback: google.cloud.translation.v3.TranslationService.TranslateTextCallback): void;

                    /**
                     * Calls TranslateText.
                     * @param request TranslateTextRequest message or plain object
                     * @returns Promise
                     */
                    public translateText(request: google.cloud.translation.v3.ITranslateTextRequest): Promise<google.cloud.translation.v3.TranslateTextResponse>;

                    /**
                     * Calls DetectLanguage.
                     * @param request DetectLanguageRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and DetectLanguageResponse
                     */
                    public detectLanguage(request: google.cloud.translation.v3.IDetectLanguageRequest, callback: google.cloud.translation.v3.TranslationService.DetectLanguageCallback): void;

                    /**
                     * Calls DetectLanguage.
                     * @param request DetectLanguageRequest message or plain object
                     * @returns Promise
                     */
                    public detectLanguage(request: google.cloud.translation.v3.IDetectLanguageRequest): Promise<google.cloud.translation.v3.DetectLanguageResponse>;

                    /**
                     * Calls GetSupportedLanguages.
                     * @param request GetSupportedLanguagesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and SupportedLanguages
                     */
                    public getSupportedLanguages(request: google.cloud.translation.v3.IGetSupportedLanguagesRequest, callback: google.cloud.translation.v3.TranslationService.GetSupportedLanguagesCallback): void;

                    /**
                     * Calls GetSupportedLanguages.
                     * @param request GetSupportedLanguagesRequest message or plain object
                     * @returns Promise
                     */
                    public getSupportedLanguages(request: google.cloud.translation.v3.IGetSupportedLanguagesRequest): Promise<google.cloud.translation.v3.SupportedLanguages>;

                    /**
                     * Calls TranslateDocument.
                     * @param request TranslateDocumentRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and TranslateDocumentResponse
                     */
                    public translateDocument(request: google.cloud.translation.v3.ITranslateDocumentRequest, callback: google.cloud.translation.v3.TranslationService.TranslateDocumentCallback): void;

                    /**
                     * Calls TranslateDocument.
                     * @param request TranslateDocumentRequest message or plain object
                     * @returns Promise
                     */
                    public translateDocument(request: google.cloud.translation.v3.ITranslateDocumentRequest): Promise<google.cloud.translation.v3.TranslateDocumentResponse>;

                    /**
                     * Calls BatchTranslateText.
                     * @param request BatchTranslateTextRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public batchTranslateText(request: google.cloud.translation.v3.IBatchTranslateTextRequest, callback: google.cloud.translation.v3.TranslationService.BatchTranslateTextCallback): void;

                    /**
                     * Calls BatchTranslateText.
                     * @param request BatchTranslateTextRequest message or plain object
                     * @returns Promise
                     */
                    public batchTranslateText(request: google.cloud.translation.v3.IBatchTranslateTextRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls BatchTranslateDocument.
                     * @param request BatchTranslateDocumentRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public batchTranslateDocument(request: google.cloud.translation.v3.IBatchTranslateDocumentRequest, callback: google.cloud.translation.v3.TranslationService.BatchTranslateDocumentCallback): void;

                    /**
                     * Calls BatchTranslateDocument.
                     * @param request BatchTranslateDocumentRequest message or plain object
                     * @returns Promise
                     */
                    public batchTranslateDocument(request: google.cloud.translation.v3.IBatchTranslateDocumentRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls CreateGlossary.
                     * @param request CreateGlossaryRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createGlossary(request: google.cloud.translation.v3.ICreateGlossaryRequest, callback: google.cloud.translation.v3.TranslationService.CreateGlossaryCallback): void;

                    /**
                     * Calls CreateGlossary.
                     * @param request CreateGlossaryRequest message or plain object
                     * @returns Promise
                     */
                    public createGlossary(request: google.cloud.translation.v3.ICreateGlossaryRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListGlossaries.
                     * @param request ListGlossariesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListGlossariesResponse
                     */
                    public listGlossaries(request: google.cloud.translation.v3.IListGlossariesRequest, callback: google.cloud.translation.v3.TranslationService.ListGlossariesCallback): void;

                    /**
                     * Calls ListGlossaries.
                     * @param request ListGlossariesRequest message or plain object
                     * @returns Promise
                     */
                    public listGlossaries(request: google.cloud.translation.v3.IListGlossariesRequest): Promise<google.cloud.translation.v3.ListGlossariesResponse>;

                    /**
                     * Calls GetGlossary.
                     * @param request GetGlossaryRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Glossary
                     */
                    public getGlossary(request: google.cloud.translation.v3.IGetGlossaryRequest, callback: google.cloud.translation.v3.TranslationService.GetGlossaryCallback): void;

                    /**
                     * Calls GetGlossary.
                     * @param request GetGlossaryRequest message or plain object
                     * @returns Promise
                     */
                    public getGlossary(request: google.cloud.translation.v3.IGetGlossaryRequest): Promise<google.cloud.translation.v3.Glossary>;

                    /**
                     * Calls DeleteGlossary.
                     * @param request DeleteGlossaryRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteGlossary(request: google.cloud.translation.v3.IDeleteGlossaryRequest, callback: google.cloud.translation.v3.TranslationService.DeleteGlossaryCallback): void;

                    /**
                     * Calls DeleteGlossary.
                     * @param request DeleteGlossaryRequest message or plain object
                     * @returns Promise
                     */
                    public deleteGlossary(request: google.cloud.translation.v3.IDeleteGlossaryRequest): Promise<google.longrunning.Operation>;
                }

                namespace TranslationService {

                    /**
                     * Callback as used by {@link google.cloud.translation.v3.TranslationService#translateText}.
                     * @param error Error, if any
                     * @param [response] TranslateTextResponse
                     */
                    type TranslateTextCallback = (error: (Error|null), response?: google.cloud.translation.v3.TranslateTextResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.translation.v3.TranslationService#detectLanguage}.
                     * @param error Error, if any
                     * @param [response] DetectLanguageResponse
                     */
                    type DetectLanguageCallback = (error: (Error|null), response?: google.cloud.translation.v3.DetectLanguageResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.translation.v3.TranslationService#getSupportedLanguages}.
                     * @param error Error, if any
                     * @param [response] SupportedLanguages
                     */
                    type GetSupportedLanguagesCallback = (error: (Error|null), response?: google.cloud.translation.v3.SupportedLanguages) => void;

                    /**
                     * Callback as used by {@link google.cloud.translation.v3.TranslationService#translateDocument}.
                     * @param error Error, if any
                     * @param [response] TranslateDocumentResponse
                     */
                    type TranslateDocumentCallback = (error: (Error|null), response?: google.cloud.translation.v3.TranslateDocumentResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.translation.v3.TranslationService#batchTranslateText}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type BatchTranslateTextCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.translation.v3.TranslationService#batchTranslateDocument}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type BatchTranslateDocumentCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.translation.v3.TranslationService#createGlossary}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateGlossaryCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.translation.v3.TranslationService#listGlossaries}.
                     * @param error Error, if any
                     * @param [response] ListGlossariesResponse
                     */
                    type ListGlossariesCallback = (error: (Error|null), response?: google.cloud.translation.v3.ListGlossariesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.translation.v3.TranslationService#getGlossary}.
                     * @param error Error, if any
                     * @param [response] Glossary
                     */
                    type GetGlossaryCallback = (error: (Error|null), response?: google.cloud.translation.v3.Glossary) => void;

                    /**
                     * Callback as used by {@link google.cloud.translation.v3.TranslationService#deleteGlossary}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteGlossaryCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;
                }

                /** Properties of a TranslateTextGlossaryConfig. */
                interface ITranslateTextGlossaryConfig {

                    /** TranslateTextGlossaryConfig glossary */
                    glossary?: (string|null);

                    /** TranslateTextGlossaryConfig ignoreCase */
                    ignoreCase?: (boolean|null);
                }

                /** Represents a TranslateTextGlossaryConfig. */
                class TranslateTextGlossaryConfig implements ITranslateTextGlossaryConfig {

                    /**
                     * Constructs a new TranslateTextGlossaryConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.translation.v3.ITranslateTextGlossaryConfig);

                    /** TranslateTextGlossaryConfig glossary. */
                    public glossary: string;

                    /** TranslateTextGlossaryConfig ignoreCase. */
                    public ignoreCase: boolean;

                    /**
                     * Creates a new TranslateTextGlossaryConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TranslateTextGlossaryConfig instance
                     */
                    public static create(properties?: google.cloud.translation.v3.ITranslateTextGlossaryConfig): google.cloud.translation.v3.TranslateTextGlossaryConfig;

                    /**
                     * Encodes the specified TranslateTextGlossaryConfig message. Does not implicitly {@link google.cloud.translation.v3.TranslateTextGlossaryConfig.verify|verify} messages.
                     * @param message TranslateTextGlossaryConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.translation.v3.ITranslateTextGlossaryConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TranslateTextGlossaryConfig message, length delimited. Does not implicitly {@link google.cloud.translation.v3.TranslateTextGlossaryConfig.verify|verify} messages.
                     * @param message TranslateTextGlossaryConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.translation.v3.ITranslateTextGlossaryConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TranslateTextGlossaryConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TranslateTextGlossaryConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.translation.v3.TranslateTextGlossaryConfig;

                    /**
                     * Decodes a TranslateTextGlossaryConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TranslateTextGlossaryConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.translation.v3.TranslateTextGlossaryConfig;

                    /**
                     * Verifies a TranslateTextGlossaryConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TranslateTextGlossaryConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TranslateTextGlossaryConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.translation.v3.TranslateTextGlossaryConfig;

                    /**
                     * Creates a plain object from a TranslateTextGlossaryConfig message. Also converts values to other types if specified.
                     * @param message TranslateTextGlossaryConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.translation.v3.TranslateTextGlossaryConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TranslateTextGlossaryConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a TranslateTextRequest. */
                interface ITranslateTextRequest {

                    /** TranslateTextRequest contents */
                    contents?: (string[]|null);

                    /** TranslateTextRequest mimeType */
                    mimeType?: (string|null);

                    /** TranslateTextRequest sourceLanguageCode */
                    sourceLanguageCode?: (string|null);

                    /** TranslateTextRequest targetLanguageCode */
                    targetLanguageCode?: (string|null);

                    /** TranslateTextRequest parent */
                    parent?: (string|null);

                    /** TranslateTextRequest model */
                    model?: (string|null);

                    /** TranslateTextRequest glossaryConfig */
                    glossaryConfig?: (google.cloud.translation.v3.ITranslateTextGlossaryConfig|null);

                    /** TranslateTextRequest labels */
                    labels?: ({ [k: string]: string }|null);
                }

                /** Represents a TranslateTextRequest. */
                class TranslateTextRequest implements ITranslateTextRequest {

                    /**
                     * Constructs a new TranslateTextRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.translation.v3.ITranslateTextRequest);

                    /** TranslateTextRequest contents. */
                    public contents: string[];

                    /** TranslateTextRequest mimeType. */
                    public mimeType: string;

                    /** TranslateTextRequest sourceLanguageCode. */
                    public sourceLanguageCode: string;

                    /** TranslateTextRequest targetLanguageCode. */
                    public targetLanguageCode: string;

                    /** TranslateTextRequest parent. */
                    public parent: string;

                    /** TranslateTextRequest model. */
                    public model: string;

                    /** TranslateTextRequest glossaryConfig. */
                    public glossaryConfig?: (google.cloud.translation.v3.ITranslateTextGlossaryConfig|null);

                    /** TranslateTextRequest labels. */
                    public labels: { [k: string]: string };

                    /**
                     * Creates a new TranslateTextRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TranslateTextRequest instance
                     */
                    public static create(properties?: google.cloud.translation.v3.ITranslateTextRequest): google.cloud.translation.v3.TranslateTextRequest;

                    /**
                     * Encodes the specified TranslateTextRequest message. Does not implicitly {@link google.cloud.translation.v3.TranslateTextRequest.verify|verify} messages.
                     * @param message TranslateTextRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.translation.v3.ITranslateTextRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TranslateTextRequest message, length delimited. Does not implicitly {@link google.cloud.translation.v3.TranslateTextRequest.verify|verify} messages.
                     * @param message TranslateTextRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.translation.v3.ITranslateTextRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TranslateTextRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TranslateTextRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.translation.v3.TranslateTextRequest;

                    /**
                     * Decodes a TranslateTextRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TranslateTextRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.translation.v3.TranslateTextRequest;

                    /**
                     * Verifies a TranslateTextRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TranslateTextRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TranslateTextRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.translation.v3.TranslateTextRequest;

                    /**
                     * Creates a plain object from a TranslateTextRequest message. Also converts values to other types if specified.
                     * @param message TranslateTextRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.translation.v3.TranslateTextRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TranslateTextRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a TranslateTextResponse. */
                interface ITranslateTextResponse {

                    /** TranslateTextResponse translations */
                    translations?: (google.cloud.translation.v3.ITranslation[]|null);

                    /** TranslateTextResponse glossaryTranslations */
                    glossaryTranslations?: (google.cloud.translation.v3.ITranslation[]|null);
                }

                /** Represents a TranslateTextResponse. */
                class TranslateTextResponse implements ITranslateTextResponse {

                    /**
                     * Constructs a new TranslateTextResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.translation.v3.ITranslateTextResponse);

                    /** TranslateTextResponse translations. */
                    public translations: google.cloud.translation.v3.ITranslation[];

                    /** TranslateTextResponse glossaryTranslations. */
                    public glossaryTranslations: google.cloud.translation.v3.ITranslation[];

                    /**
                     * Creates a new TranslateTextResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TranslateTextResponse instance
                     */
                    public static create(properties?: google.cloud.translation.v3.ITranslateTextResponse): google.cloud.translation.v3.TranslateTextResponse;

                    /**
                     * Encodes the specified TranslateTextResponse message. Does not implicitly {@link google.cloud.translation.v3.TranslateTextResponse.verify|verify} messages.
                     * @param message TranslateTextResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.translation.v3.ITranslateTextResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TranslateTextResponse message, length delimited. Does not implicitly {@link google.cloud.translation.v3.TranslateTextResponse.verify|verify} messages.
                     * @param message TranslateTextResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.translation.v3.ITranslateTextResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TranslateTextResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TranslateTextResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.translation.v3.TranslateTextResponse;

                    /**
                     * Decodes a TranslateTextResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TranslateTextResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.translation.v3.TranslateTextResponse;

                    /**
                     * Verifies a TranslateTextResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TranslateTextResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TranslateTextResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.translation.v3.TranslateTextResponse;

                    /**
                     * Creates a plain object from a TranslateTextResponse message. Also converts values to other types if specified.
                     * @param message TranslateTextResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.translation.v3.TranslateTextResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TranslateTextResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Translation. */
                interface ITranslation {

                    /** Translation translatedText */
                    translatedText?: (string|null);

                    /** Translation model */
                    model?: (string|null);

                    /** Translation detectedLanguageCode */
                    detectedLanguageCode?: (string|null);

                    /** Translation glossaryConfig */
                    glossaryConfig?: (google.cloud.translation.v3.ITranslateTextGlossaryConfig|null);
                }

                /** Represents a Translation. */
                class Translation implements ITranslation {

                    /**
                     * Constructs a new Translation.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.translation.v3.ITranslation);

                    /** Translation translatedText. */
                    public translatedText: string;

                    /** Translation model. */
                    public model: string;

                    /** Translation detectedLanguageCode. */
                    public detectedLanguageCode: string;

                    /** Translation glossaryConfig. */
                    public glossaryConfig?: (google.cloud.translation.v3.ITranslateTextGlossaryConfig|null);

                    /**
                     * Creates a new Translation instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Translation instance
                     */
                    public static create(properties?: google.cloud.translation.v3.ITranslation): google.cloud.translation.v3.Translation;

                    /**
                     * Encodes the specified Translation message. Does not implicitly {@link google.cloud.translation.v3.Translation.verify|verify} messages.
                     * @param message Translation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.translation.v3.ITranslation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Translation message, length delimited. Does not implicitly {@link google.cloud.translation.v3.Translation.verify|verify} messages.
                     * @param message Translation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.translation.v3.ITranslation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Translation message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Translation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.translation.v3.Translation;

                    /**
                     * Decodes a Translation message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Translation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.translation.v3.Translation;

                    /**
                     * Verifies a Translation message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Translation message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Translation
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.translation.v3.Translation;

                    /**
                     * Creates a plain object from a Translation message. Also converts values to other types if specified.
                     * @param message Translation
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.translation.v3.Translation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Translation to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DetectLanguageRequest. */
                interface IDetectLanguageRequest {

                    /** DetectLanguageRequest parent */
                    parent?: (string|null);

                    /** DetectLanguageRequest model */
                    model?: (string|null);

                    /** DetectLanguageRequest content */
                    content?: (string|null);

                    /** DetectLanguageRequest mimeType */
                    mimeType?: (string|null);

                    /** DetectLanguageRequest labels */
                    labels?: ({ [k: string]: string }|null);
                }

                /** Represents a DetectLanguageRequest. */
                class DetectLanguageRequest implements IDetectLanguageRequest {

                    /**
                     * Constructs a new DetectLanguageRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.translation.v3.IDetectLanguageRequest);

                    /** DetectLanguageRequest parent. */
                    public parent: string;

                    /** DetectLanguageRequest model. */
                    public model: string;

                    /** DetectLanguageRequest content. */
                    public content?: (string|null);

                    /** DetectLanguageRequest mimeType. */
                    public mimeType: string;

                    /** DetectLanguageRequest labels. */
                    public labels: { [k: string]: string };

                    /** DetectLanguageRequest source. */
                    public source?: "content";

                    /**
                     * Creates a new DetectLanguageRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DetectLanguageRequest instance
                     */
                    public static create(properties?: google.cloud.translation.v3.IDetectLanguageRequest): google.cloud.translation.v3.DetectLanguageRequest;

                    /**
                     * Encodes the specified DetectLanguageRequest message. Does not implicitly {@link google.cloud.translation.v3.DetectLanguageRequest.verify|verify} messages.
                     * @param message DetectLanguageRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.translation.v3.IDetectLanguageRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DetectLanguageRequest message, length delimited. Does not implicitly {@link google.cloud.translation.v3.DetectLanguageRequest.verify|verify} messages.
                     * @param message DetectLanguageRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.translation.v3.IDetectLanguageRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DetectLanguageRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DetectLanguageRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.translation.v3.DetectLanguageRequest;

                    /**
                     * Decodes a DetectLanguageRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DetectLanguageRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.translation.v3.DetectLanguageRequest;

                    /**
                     * Verifies a DetectLanguageRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DetectLanguageRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DetectLanguageRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.translation.v3.DetectLanguageRequest;

                    /**
                     * Creates a plain object from a DetectLanguageRequest message. Also converts values to other types if specified.
                     * @param message DetectLanguageRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.translation.v3.DetectLanguageRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DetectLanguageRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DetectedLanguage. */
                interface IDetectedLanguage {

                    /** DetectedLanguage languageCode */
                    languageCode?: (string|null);

                    /** DetectedLanguage confidence */
                    confidence?: (number|null);
                }

                /** Represents a DetectedLanguage. */
                class DetectedLanguage implements IDetectedLanguage {

                    /**
                     * Constructs a new DetectedLanguage.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.translation.v3.IDetectedLanguage);

                    /** DetectedLanguage languageCode. */
                    public languageCode: string;

                    /** DetectedLanguage confidence. */
                    public confidence: number;

                    /**
                     * Creates a new DetectedLanguage instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DetectedLanguage instance
                     */
                    public static create(properties?: google.cloud.translation.v3.IDetectedLanguage): google.cloud.translation.v3.DetectedLanguage;

                    /**
                     * Encodes the specified DetectedLanguage message. Does not implicitly {@link google.cloud.translation.v3.DetectedLanguage.verify|verify} messages.
                     * @param message DetectedLanguage message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.translation.v3.IDetectedLanguage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DetectedLanguage message, length delimited. Does not implicitly {@link google.cloud.translation.v3.DetectedLanguage.verify|verify} messages.
                     * @param message DetectedLanguage message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.translation.v3.IDetectedLanguage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DetectedLanguage message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DetectedLanguage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.translation.v3.DetectedLanguage;

                    /**
                     * Decodes a DetectedLanguage message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DetectedLanguage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.translation.v3.DetectedLanguage;

                    /**
                     * Verifies a DetectedLanguage message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DetectedLanguage message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DetectedLanguage
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.translation.v3.DetectedLanguage;

                    /**
                     * Creates a plain object from a DetectedLanguage message. Also converts values to other types if specified.
                     * @param message DetectedLanguage
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.translation.v3.DetectedLanguage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DetectedLanguage to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DetectLanguageResponse. */
                interface IDetectLanguageResponse {

                    /** DetectLanguageResponse languages */
                    languages?: (google.cloud.translation.v3.IDetectedLanguage[]|null);
                }

                /** Represents a DetectLanguageResponse. */
                class DetectLanguageResponse implements IDetectLanguageResponse {

                    /**
                     * Constructs a new DetectLanguageResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.translation.v3.IDetectLanguageResponse);

                    /** DetectLanguageResponse languages. */
                    public languages: google.cloud.translation.v3.IDetectedLanguage[];

                    /**
                     * Creates a new DetectLanguageResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DetectLanguageResponse instance
                     */
                    public static create(properties?: google.cloud.translation.v3.IDetectLanguageResponse): google.cloud.translation.v3.DetectLanguageResponse;

                    /**
                     * Encodes the specified DetectLanguageResponse message. Does not implicitly {@link google.cloud.translation.v3.DetectLanguageResponse.verify|verify} messages.
                     * @param message DetectLanguageResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.translation.v3.IDetectLanguageResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DetectLanguageResponse message, length delimited. Does not implicitly {@link google.cloud.translation.v3.DetectLanguageResponse.verify|verify} messages.
                     * @param message DetectLanguageResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.translation.v3.IDetectLanguageResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DetectLanguageResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DetectLanguageResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.translation.v3.DetectLanguageResponse;

                    /**
                     * Decodes a DetectLanguageResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DetectLanguageResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.translation.v3.DetectLanguageResponse;

                    /**
                     * Verifies a DetectLanguageResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DetectLanguageResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DetectLanguageResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.translation.v3.DetectLanguageResponse;

                    /**
                     * Creates a plain object from a DetectLanguageResponse message. Also converts values to other types if specified.
                     * @param message DetectLanguageResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.translation.v3.DetectLanguageResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DetectLanguageResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetSupportedLanguagesRequest. */
                interface IGetSupportedLanguagesRequest {

                    /** GetSupportedLanguagesRequest parent */
                    parent?: (string|null);

                    /** GetSupportedLanguagesRequest displayLanguageCode */
                    displayLanguageCode?: (string|null);

                    /** GetSupportedLanguagesRequest model */
                    model?: (string|null);
                }

                /** Represents a GetSupportedLanguagesRequest. */
                class GetSupportedLanguagesRequest implements IGetSupportedLanguagesRequest {

                    /**
                     * Constructs a new GetSupportedLanguagesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.translation.v3.IGetSupportedLanguagesRequest);

                    /** GetSupportedLanguagesRequest parent. */
                    public parent: string;

                    /** GetSupportedLanguagesRequest displayLanguageCode. */
                    public displayLanguageCode: string;

                    /** GetSupportedLanguagesRequest model. */
                    public model: string;

                    /**
                     * Creates a new GetSupportedLanguagesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetSupportedLanguagesRequest instance
                     */
                    public static create(properties?: google.cloud.translation.v3.IGetSupportedLanguagesRequest): google.cloud.translation.v3.GetSupportedLanguagesRequest;

                    /**
                     * Encodes the specified GetSupportedLanguagesRequest message. Does not implicitly {@link google.cloud.translation.v3.GetSupportedLanguagesRequest.verify|verify} messages.
                     * @param message GetSupportedLanguagesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.translation.v3.IGetSupportedLanguagesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetSupportedLanguagesRequest message, length delimited. Does not implicitly {@link google.cloud.translation.v3.GetSupportedLanguagesRequest.verify|verify} messages.
                     * @param message GetSupportedLanguagesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.translation.v3.IGetSupportedLanguagesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetSupportedLanguagesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetSupportedLanguagesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.translation.v3.GetSupportedLanguagesRequest;

                    /**
                     * Decodes a GetSupportedLanguagesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetSupportedLanguagesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.translation.v3.GetSupportedLanguagesRequest;

                    /**
                     * Verifies a GetSupportedLanguagesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetSupportedLanguagesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetSupportedLanguagesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.translation.v3.GetSupportedLanguagesRequest;

                    /**
                     * Creates a plain object from a GetSupportedLanguagesRequest message. Also converts values to other types if specified.
                     * @param message GetSupportedLanguagesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.translation.v3.GetSupportedLanguagesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetSupportedLanguagesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SupportedLanguages. */
                interface ISupportedLanguages {

                    /** SupportedLanguages languages */
                    languages?: (google.cloud.translation.v3.ISupportedLanguage[]|null);
                }

                /** Represents a SupportedLanguages. */
                class SupportedLanguages implements ISupportedLanguages {

                    /**
                     * Constructs a new SupportedLanguages.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.translation.v3.ISupportedLanguages);

                    /** SupportedLanguages languages. */
                    public languages: google.cloud.translation.v3.ISupportedLanguage[];

                    /**
                     * Creates a new SupportedLanguages instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SupportedLanguages instance
                     */
                    public static create(properties?: google.cloud.translation.v3.ISupportedLanguages): google.cloud.translation.v3.SupportedLanguages;

                    /**
                     * Encodes the specified SupportedLanguages message. Does not implicitly {@link google.cloud.translation.v3.SupportedLanguages.verify|verify} messages.
                     * @param message SupportedLanguages message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.translation.v3.ISupportedLanguages, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SupportedLanguages message, length delimited. Does not implicitly {@link google.cloud.translation.v3.SupportedLanguages.verify|verify} messages.
                     * @param message SupportedLanguages message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.translation.v3.ISupportedLanguages, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SupportedLanguages message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SupportedLanguages
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.translation.v3.SupportedLanguages;

                    /**
                     * Decodes a SupportedLanguages message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SupportedLanguages
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.translation.v3.SupportedLanguages;

                    /**
                     * Verifies a SupportedLanguages message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SupportedLanguages message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SupportedLanguages
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.translation.v3.SupportedLanguages;

                    /**
                     * Creates a plain object from a SupportedLanguages message. Also converts values to other types if specified.
                     * @param message SupportedLanguages
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.translation.v3.SupportedLanguages, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SupportedLanguages to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SupportedLanguage. */
                interface ISupportedLanguage {

                    /** SupportedLanguage languageCode */
                    languageCode?: (string|null);

                    /** SupportedLanguage displayName */
                    displayName?: (string|null);

                    /** SupportedLanguage supportSource */
                    supportSource?: (boolean|null);

                    /** SupportedLanguage supportTarget */
                    supportTarget?: (boolean|null);
                }

                /** Represents a SupportedLanguage. */
                class SupportedLanguage implements ISupportedLanguage {

                    /**
                     * Constructs a new SupportedLanguage.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.translation.v3.ISupportedLanguage);

                    /** SupportedLanguage languageCode. */
                    public languageCode: string;

                    /** SupportedLanguage displayName. */
                    public displayName: string;

                    /** SupportedLanguage supportSource. */
                    public supportSource: boolean;

                    /** SupportedLanguage supportTarget. */
                    public supportTarget: boolean;

                    /**
                     * Creates a new SupportedLanguage instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SupportedLanguage instance
                     */
                    public static create(properties?: google.cloud.translation.v3.ISupportedLanguage): google.cloud.translation.v3.SupportedLanguage;

                    /**
                     * Encodes the specified SupportedLanguage message. Does not implicitly {@link google.cloud.translation.v3.SupportedLanguage.verify|verify} messages.
                     * @param message SupportedLanguage message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.translation.v3.ISupportedLanguage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SupportedLanguage message, length delimited. Does not implicitly {@link google.cloud.translation.v3.SupportedLanguage.verify|verify} messages.
                     * @param message SupportedLanguage message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.translation.v3.ISupportedLanguage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SupportedLanguage message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SupportedLanguage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.translation.v3.SupportedLanguage;

                    /**
                     * Decodes a SupportedLanguage message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SupportedLanguage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.translation.v3.SupportedLanguage;

                    /**
                     * Verifies a SupportedLanguage message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SupportedLanguage message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SupportedLanguage
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.translation.v3.SupportedLanguage;

                    /**
                     * Creates a plain object from a SupportedLanguage message. Also converts values to other types if specified.
                     * @param message SupportedLanguage
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.translation.v3.SupportedLanguage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SupportedLanguage to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GcsSource. */
                interface IGcsSource {

                    /** GcsSource inputUri */
                    inputUri?: (string|null);
                }

                /** Represents a GcsSource. */
                class GcsSource implements IGcsSource {

                    /**
                     * Constructs a new GcsSource.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.translation.v3.IGcsSource);

                    /** GcsSource inputUri. */
                    public inputUri: string;

                    /**
                     * Creates a new GcsSource instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GcsSource instance
                     */
                    public static create(properties?: google.cloud.translation.v3.IGcsSource): google.cloud.translation.v3.GcsSource;

                    /**
                     * Encodes the specified GcsSource message. Does not implicitly {@link google.cloud.translation.v3.GcsSource.verify|verify} messages.
                     * @param message GcsSource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.translation.v3.IGcsSource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GcsSource message, length delimited. Does not implicitly {@link google.cloud.translation.v3.GcsSource.verify|verify} messages.
                     * @param message GcsSource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.translation.v3.IGcsSource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GcsSource message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GcsSource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.translation.v3.GcsSource;

                    /**
                     * Decodes a GcsSource message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GcsSource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.translation.v3.GcsSource;

                    /**
                     * Verifies a GcsSource message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GcsSource message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GcsSource
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.translation.v3.GcsSource;

                    /**
                     * Creates a plain object from a GcsSource message. Also converts values to other types if specified.
                     * @param message GcsSource
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.translation.v3.GcsSource, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GcsSource to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an InputConfig. */
                interface IInputConfig {

                    /** InputConfig mimeType */
                    mimeType?: (string|null);

                    /** InputConfig gcsSource */
                    gcsSource?: (google.cloud.translation.v3.IGcsSource|null);
                }

                /** Represents an InputConfig. */
                class InputConfig implements IInputConfig {

                    /**
                     * Constructs a new InputConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.translation.v3.IInputConfig);

                    /** InputConfig mimeType. */
                    public mimeType: string;

                    /** InputConfig gcsSource. */
                    public gcsSource?: (google.cloud.translation.v3.IGcsSource|null);

                    /** InputConfig source. */
                    public source?: "gcsSource";

                    /**
                     * Creates a new InputConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns InputConfig instance
                     */
                    public static create(properties?: google.cloud.translation.v3.IInputConfig): google.cloud.translation.v3.InputConfig;

                    /**
                     * Encodes the specified InputConfig message. Does not implicitly {@link google.cloud.translation.v3.InputConfig.verify|verify} messages.
                     * @param message InputConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.translation.v3.IInputConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified InputConfig message, length delimited. Does not implicitly {@link google.cloud.translation.v3.InputConfig.verify|verify} messages.
                     * @param message InputConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.translation.v3.IInputConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an InputConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns InputConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.translation.v3.InputConfig;

                    /**
                     * Decodes an InputConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns InputConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.translation.v3.InputConfig;

                    /**
                     * Verifies an InputConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an InputConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns InputConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.translation.v3.InputConfig;

                    /**
                     * Creates a plain object from an InputConfig message. Also converts values to other types if specified.
                     * @param message InputConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.translation.v3.InputConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this InputConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GcsDestination. */
                interface IGcsDestination {

                    /** GcsDestination outputUriPrefix */
                    outputUriPrefix?: (string|null);
                }

                /** Represents a GcsDestination. */
                class GcsDestination implements IGcsDestination {

                    /**
                     * Constructs a new GcsDestination.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.translation.v3.IGcsDestination);

                    /** GcsDestination outputUriPrefix. */
                    public outputUriPrefix: string;

                    /**
                     * Creates a new GcsDestination instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GcsDestination instance
                     */
                    public static create(properties?: google.cloud.translation.v3.IGcsDestination): google.cloud.translation.v3.GcsDestination;

                    /**
                     * Encodes the specified GcsDestination message. Does not implicitly {@link google.cloud.translation.v3.GcsDestination.verify|verify} messages.
                     * @param message GcsDestination message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.translation.v3.IGcsDestination, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GcsDestination message, length delimited. Does not implicitly {@link google.cloud.translation.v3.GcsDestination.verify|verify} messages.
                     * @param message GcsDestination message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.translation.v3.IGcsDestination, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GcsDestination message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GcsDestination
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.translation.v3.GcsDestination;

                    /**
                     * Decodes a GcsDestination message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GcsDestination
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.translation.v3.GcsDestination;

                    /**
                     * Verifies a GcsDestination message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GcsDestination message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GcsDestination
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.translation.v3.GcsDestination;

                    /**
                     * Creates a plain object from a GcsDestination message. Also converts values to other types if specified.
                     * @param message GcsDestination
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.translation.v3.GcsDestination, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GcsDestination to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an OutputConfig. */
                interface IOutputConfig {

                    /** OutputConfig gcsDestination */
                    gcsDestination?: (google.cloud.translation.v3.IGcsDestination|null);
                }

                /** Represents an OutputConfig. */
                class OutputConfig implements IOutputConfig {

                    /**
                     * Constructs a new OutputConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.translation.v3.IOutputConfig);

                    /** OutputConfig gcsDestination. */
                    public gcsDestination?: (google.cloud.translation.v3.IGcsDestination|null);

                    /** OutputConfig destination. */
                    public destination?: "gcsDestination";

                    /**
                     * Creates a new OutputConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OutputConfig instance
                     */
                    public static create(properties?: google.cloud.translation.v3.IOutputConfig): google.cloud.translation.v3.OutputConfig;

                    /**
                     * Encodes the specified OutputConfig message. Does not implicitly {@link google.cloud.translation.v3.OutputConfig.verify|verify} messages.
                     * @param message OutputConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.translation.v3.IOutputConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OutputConfig message, length delimited. Does not implicitly {@link google.cloud.translation.v3.OutputConfig.verify|verify} messages.
                     * @param message OutputConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.translation.v3.IOutputConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OutputConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OutputConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.translation.v3.OutputConfig;

                    /**
                     * Decodes an OutputConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OutputConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.translation.v3.OutputConfig;

                    /**
                     * Verifies an OutputConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an OutputConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns OutputConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.translation.v3.OutputConfig;

                    /**
                     * Creates a plain object from an OutputConfig message. Also converts values to other types if specified.
                     * @param message OutputConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.translation.v3.OutputConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OutputConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DocumentInputConfig. */
                interface IDocumentInputConfig {

                    /** DocumentInputConfig content */
                    content?: (Uint8Array|string|null);

                    /** DocumentInputConfig gcsSource */
                    gcsSource?: (google.cloud.translation.v3.IGcsSource|null);

                    /** DocumentInputConfig mimeType */
                    mimeType?: (string|null);
                }

                /** Represents a DocumentInputConfig. */
                class DocumentInputConfig implements IDocumentInputConfig {

                    /**
                     * Constructs a new DocumentInputConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.translation.v3.IDocumentInputConfig);

                    /** DocumentInputConfig content. */
                    public content?: (Uint8Array|string|null);

                    /** DocumentInputConfig gcsSource. */
                    public gcsSource?: (google.cloud.translation.v3.IGcsSource|null);

                    /** DocumentInputConfig mimeType. */
                    public mimeType: string;

                    /** DocumentInputConfig source. */
                    public source?: ("content"|"gcsSource");

                    /**
                     * Creates a new DocumentInputConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DocumentInputConfig instance
                     */
                    public static create(properties?: google.cloud.translation.v3.IDocumentInputConfig): google.cloud.translation.v3.DocumentInputConfig;

                    /**
                     * Encodes the specified DocumentInputConfig message. Does not implicitly {@link google.cloud.translation.v3.DocumentInputConfig.verify|verify} messages.
                     * @param message DocumentInputConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.translation.v3.IDocumentInputConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DocumentInputConfig message, length delimited. Does not implicitly {@link google.cloud.translation.v3.DocumentInputConfig.verify|verify} messages.
                     * @param message DocumentInputConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.translation.v3.IDocumentInputConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DocumentInputConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DocumentInputConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.translation.v3.DocumentInputConfig;

                    /**
                     * Decodes a DocumentInputConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DocumentInputConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.translation.v3.DocumentInputConfig;

                    /**
                     * Verifies a DocumentInputConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DocumentInputConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DocumentInputConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.translation.v3.DocumentInputConfig;

                    /**
                     * Creates a plain object from a DocumentInputConfig message. Also converts values to other types if specified.
                     * @param message DocumentInputConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.translation.v3.DocumentInputConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DocumentInputConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DocumentOutputConfig. */
                interface IDocumentOutputConfig {

                    /** DocumentOutputConfig gcsDestination */
                    gcsDestination?: (google.cloud.translation.v3.IGcsDestination|null);

                    /** DocumentOutputConfig mimeType */
                    mimeType?: (string|null);
                }

                /** Represents a DocumentOutputConfig. */
                class DocumentOutputConfig implements IDocumentOutputConfig {

                    /**
                     * Constructs a new DocumentOutputConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.translation.v3.IDocumentOutputConfig);

                    /** DocumentOutputConfig gcsDestination. */
                    public gcsDestination?: (google.cloud.translation.v3.IGcsDestination|null);

                    /** DocumentOutputConfig mimeType. */
                    public mimeType: string;

                    /** DocumentOutputConfig destination. */
                    public destination?: "gcsDestination";

                    /**
                     * Creates a new DocumentOutputConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DocumentOutputConfig instance
                     */
                    public static create(properties?: google.cloud.translation.v3.IDocumentOutputConfig): google.cloud.translation.v3.DocumentOutputConfig;

                    /**
                     * Encodes the specified DocumentOutputConfig message. Does not implicitly {@link google.cloud.translation.v3.DocumentOutputConfig.verify|verify} messages.
                     * @param message DocumentOutputConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.translation.v3.IDocumentOutputConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DocumentOutputConfig message, length delimited. Does not implicitly {@link google.cloud.translation.v3.DocumentOutputConfig.verify|verify} messages.
                     * @param message DocumentOutputConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.translation.v3.IDocumentOutputConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DocumentOutputConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DocumentOutputConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.translation.v3.DocumentOutputConfig;

                    /**
                     * Decodes a DocumentOutputConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DocumentOutputConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.translation.v3.DocumentOutputConfig;

                    /**
                     * Verifies a DocumentOutputConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DocumentOutputConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DocumentOutputConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.translation.v3.DocumentOutputConfig;

                    /**
                     * Creates a plain object from a DocumentOutputConfig message. Also converts values to other types if specified.
                     * @param message DocumentOutputConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.translation.v3.DocumentOutputConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DocumentOutputConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a TranslateDocumentRequest. */
                interface ITranslateDocumentRequest {

                    /** TranslateDocumentRequest parent */
                    parent?: (string|null);

                    /** TranslateDocumentRequest sourceLanguageCode */
                    sourceLanguageCode?: (string|null);

                    /** TranslateDocumentRequest targetLanguageCode */
                    targetLanguageCode?: (string|null);

                    /** TranslateDocumentRequest documentInputConfig */
                    documentInputConfig?: (google.cloud.translation.v3.IDocumentInputConfig|null);

                    /** TranslateDocumentRequest documentOutputConfig */
                    documentOutputConfig?: (google.cloud.translation.v3.IDocumentOutputConfig|null);

                    /** TranslateDocumentRequest model */
                    model?: (string|null);

                    /** TranslateDocumentRequest glossaryConfig */
                    glossaryConfig?: (google.cloud.translation.v3.ITranslateTextGlossaryConfig|null);

                    /** TranslateDocumentRequest labels */
                    labels?: ({ [k: string]: string }|null);
                }

                /** Represents a TranslateDocumentRequest. */
                class TranslateDocumentRequest implements ITranslateDocumentRequest {

                    /**
                     * Constructs a new TranslateDocumentRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.translation.v3.ITranslateDocumentRequest);

                    /** TranslateDocumentRequest parent. */
                    public parent: string;

                    /** TranslateDocumentRequest sourceLanguageCode. */
                    public sourceLanguageCode: string;

                    /** TranslateDocumentRequest targetLanguageCode. */
                    public targetLanguageCode: string;

                    /** TranslateDocumentRequest documentInputConfig. */
                    public documentInputConfig?: (google.cloud.translation.v3.IDocumentInputConfig|null);

                    /** TranslateDocumentRequest documentOutputConfig. */
                    public documentOutputConfig?: (google.cloud.translation.v3.IDocumentOutputConfig|null);

                    /** TranslateDocumentRequest model. */
                    public model: string;

                    /** TranslateDocumentRequest glossaryConfig. */
                    public glossaryConfig?: (google.cloud.translation.v3.ITranslateTextGlossaryConfig|null);

                    /** TranslateDocumentRequest labels. */
                    public labels: { [k: string]: string };

                    /**
                     * Creates a new TranslateDocumentRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TranslateDocumentRequest instance
                     */
                    public static create(properties?: google.cloud.translation.v3.ITranslateDocumentRequest): google.cloud.translation.v3.TranslateDocumentRequest;

                    /**
                     * Encodes the specified TranslateDocumentRequest message. Does not implicitly {@link google.cloud.translation.v3.TranslateDocumentRequest.verify|verify} messages.
                     * @param message TranslateDocumentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.translation.v3.ITranslateDocumentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TranslateDocumentRequest message, length delimited. Does not implicitly {@link google.cloud.translation.v3.TranslateDocumentRequest.verify|verify} messages.
                     * @param message TranslateDocumentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.translation.v3.ITranslateDocumentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TranslateDocumentRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TranslateDocumentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.translation.v3.TranslateDocumentRequest;

                    /**
                     * Decodes a TranslateDocumentRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TranslateDocumentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.translation.v3.TranslateDocumentRequest;

                    /**
                     * Verifies a TranslateDocumentRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TranslateDocumentRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TranslateDocumentRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.translation.v3.TranslateDocumentRequest;

                    /**
                     * Creates a plain object from a TranslateDocumentRequest message. Also converts values to other types if specified.
                     * @param message TranslateDocumentRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.translation.v3.TranslateDocumentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TranslateDocumentRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DocumentTranslation. */
                interface IDocumentTranslation {

                    /** DocumentTranslation byteStreamOutputs */
                    byteStreamOutputs?: (Uint8Array[]|null);

                    /** DocumentTranslation mimeType */
                    mimeType?: (string|null);

                    /** DocumentTranslation detectedLanguageCode */
                    detectedLanguageCode?: (string|null);
                }

                /** Represents a DocumentTranslation. */
                class DocumentTranslation implements IDocumentTranslation {

                    /**
                     * Constructs a new DocumentTranslation.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.translation.v3.IDocumentTranslation);

                    /** DocumentTranslation byteStreamOutputs. */
                    public byteStreamOutputs: Uint8Array[];

                    /** DocumentTranslation mimeType. */
                    public mimeType: string;

                    /** DocumentTranslation detectedLanguageCode. */
                    public detectedLanguageCode: string;

                    /**
                     * Creates a new DocumentTranslation instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DocumentTranslation instance
                     */
                    public static create(properties?: google.cloud.translation.v3.IDocumentTranslation): google.cloud.translation.v3.DocumentTranslation;

                    /**
                     * Encodes the specified DocumentTranslation message. Does not implicitly {@link google.cloud.translation.v3.DocumentTranslation.verify|verify} messages.
                     * @param message DocumentTranslation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.translation.v3.IDocumentTranslation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DocumentTranslation message, length delimited. Does not implicitly {@link google.cloud.translation.v3.DocumentTranslation.verify|verify} messages.
                     * @param message DocumentTranslation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.translation.v3.IDocumentTranslation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DocumentTranslation message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DocumentTranslation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.translation.v3.DocumentTranslation;

                    /**
                     * Decodes a DocumentTranslation message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DocumentTranslation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.translation.v3.DocumentTranslation;

                    /**
                     * Verifies a DocumentTranslation message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DocumentTranslation message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DocumentTranslation
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.translation.v3.DocumentTranslation;

                    /**
                     * Creates a plain object from a DocumentTranslation message. Also converts values to other types if specified.
                     * @param message DocumentTranslation
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.translation.v3.DocumentTranslation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DocumentTranslation to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a TranslateDocumentResponse. */
                interface ITranslateDocumentResponse {

                    /** TranslateDocumentResponse documentTranslation */
                    documentTranslation?: (google.cloud.translation.v3.IDocumentTranslation|null);

                    /** TranslateDocumentResponse glossaryDocumentTranslation */
                    glossaryDocumentTranslation?: (google.cloud.translation.v3.IDocumentTranslation|null);

                    /** TranslateDocumentResponse model */
                    model?: (string|null);

                    /** TranslateDocumentResponse glossaryConfig */
                    glossaryConfig?: (google.cloud.translation.v3.ITranslateTextGlossaryConfig|null);
                }

                /** Represents a TranslateDocumentResponse. */
                class TranslateDocumentResponse implements ITranslateDocumentResponse {

                    /**
                     * Constructs a new TranslateDocumentResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.translation.v3.ITranslateDocumentResponse);

                    /** TranslateDocumentResponse documentTranslation. */
                    public documentTranslation?: (google.cloud.translation.v3.IDocumentTranslation|null);

                    /** TranslateDocumentResponse glossaryDocumentTranslation. */
                    public glossaryDocumentTranslation?: (google.cloud.translation.v3.IDocumentTranslation|null);

                    /** TranslateDocumentResponse model. */
                    public model: string;

                    /** TranslateDocumentResponse glossaryConfig. */
                    public glossaryConfig?: (google.cloud.translation.v3.ITranslateTextGlossaryConfig|null);

                    /**
                     * Creates a new TranslateDocumentResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TranslateDocumentResponse instance
                     */
                    public static create(properties?: google.cloud.translation.v3.ITranslateDocumentResponse): google.cloud.translation.v3.TranslateDocumentResponse;

                    /**
                     * Encodes the specified TranslateDocumentResponse message. Does not implicitly {@link google.cloud.translation.v3.TranslateDocumentResponse.verify|verify} messages.
                     * @param message TranslateDocumentResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.translation.v3.ITranslateDocumentResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TranslateDocumentResponse message, length delimited. Does not implicitly {@link google.cloud.translation.v3.TranslateDocumentResponse.verify|verify} messages.
                     * @param message TranslateDocumentResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.translation.v3.ITranslateDocumentResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TranslateDocumentResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TranslateDocumentResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.translation.v3.TranslateDocumentResponse;

                    /**
                     * Decodes a TranslateDocumentResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TranslateDocumentResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.translation.v3.TranslateDocumentResponse;

                    /**
                     * Verifies a TranslateDocumentResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TranslateDocumentResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TranslateDocumentResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.translation.v3.TranslateDocumentResponse;

                    /**
                     * Creates a plain object from a TranslateDocumentResponse message. Also converts values to other types if specified.
                     * @param message TranslateDocumentResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.translation.v3.TranslateDocumentResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TranslateDocumentResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a BatchTranslateTextRequest. */
                interface IBatchTranslateTextRequest {

                    /** BatchTranslateTextRequest parent */
                    parent?: (string|null);

                    /** BatchTranslateTextRequest sourceLanguageCode */
                    sourceLanguageCode?: (string|null);

                    /** BatchTranslateTextRequest targetLanguageCodes */
                    targetLanguageCodes?: (string[]|null);

                    /** BatchTranslateTextRequest models */
                    models?: ({ [k: string]: string }|null);

                    /** BatchTranslateTextRequest inputConfigs */
                    inputConfigs?: (google.cloud.translation.v3.IInputConfig[]|null);

                    /** BatchTranslateTextRequest outputConfig */
                    outputConfig?: (google.cloud.translation.v3.IOutputConfig|null);

                    /** BatchTranslateTextRequest glossaries */
                    glossaries?: ({ [k: string]: google.cloud.translation.v3.ITranslateTextGlossaryConfig }|null);

                    /** BatchTranslateTextRequest labels */
                    labels?: ({ [k: string]: string }|null);
                }

                /** Represents a BatchTranslateTextRequest. */
                class BatchTranslateTextRequest implements IBatchTranslateTextRequest {

                    /**
                     * Constructs a new BatchTranslateTextRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.translation.v3.IBatchTranslateTextRequest);

                    /** BatchTranslateTextRequest parent. */
                    public parent: string;

                    /** BatchTranslateTextRequest sourceLanguageCode. */
                    public sourceLanguageCode: string;

                    /** BatchTranslateTextRequest targetLanguageCodes. */
                    public targetLanguageCodes: string[];

                    /** BatchTranslateTextRequest models. */
                    public models: { [k: string]: string };

                    /** BatchTranslateTextRequest inputConfigs. */
                    public inputConfigs: google.cloud.translation.v3.IInputConfig[];

                    /** BatchTranslateTextRequest outputConfig. */
                    public outputConfig?: (google.cloud.translation.v3.IOutputConfig|null);

                    /** BatchTranslateTextRequest glossaries. */
                    public glossaries: { [k: string]: google.cloud.translation.v3.ITranslateTextGlossaryConfig };

                    /** BatchTranslateTextRequest labels. */
                    public labels: { [k: string]: string };

                    /**
                     * Creates a new BatchTranslateTextRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BatchTranslateTextRequest instance
                     */
                    public static create(properties?: google.cloud.translation.v3.IBatchTranslateTextRequest): google.cloud.translation.v3.BatchTranslateTextRequest;

                    /**
                     * Encodes the specified BatchTranslateTextRequest message. Does not implicitly {@link google.cloud.translation.v3.BatchTranslateTextRequest.verify|verify} messages.
                     * @param message BatchTranslateTextRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.translation.v3.IBatchTranslateTextRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BatchTranslateTextRequest message, length delimited. Does not implicitly {@link google.cloud.translation.v3.BatchTranslateTextRequest.verify|verify} messages.
                     * @param message BatchTranslateTextRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.translation.v3.IBatchTranslateTextRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BatchTranslateTextRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BatchTranslateTextRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.translation.v3.BatchTranslateTextRequest;

                    /**
                     * Decodes a BatchTranslateTextRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BatchTranslateTextRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.translation.v3.BatchTranslateTextRequest;

                    /**
                     * Verifies a BatchTranslateTextRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BatchTranslateTextRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BatchTranslateTextRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.translation.v3.BatchTranslateTextRequest;

                    /**
                     * Creates a plain object from a BatchTranslateTextRequest message. Also converts values to other types if specified.
                     * @param message BatchTranslateTextRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.translation.v3.BatchTranslateTextRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BatchTranslateTextRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a BatchTranslateMetadata. */
                interface IBatchTranslateMetadata {

                    /** BatchTranslateMetadata state */
                    state?: (google.cloud.translation.v3.BatchTranslateMetadata.State|keyof typeof google.cloud.translation.v3.BatchTranslateMetadata.State|null);

                    /** BatchTranslateMetadata translatedCharacters */
                    translatedCharacters?: (number|Long|string|null);

                    /** BatchTranslateMetadata failedCharacters */
                    failedCharacters?: (number|Long|string|null);

                    /** BatchTranslateMetadata totalCharacters */
                    totalCharacters?: (number|Long|string|null);

                    /** BatchTranslateMetadata submitTime */
                    submitTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a BatchTranslateMetadata. */
                class BatchTranslateMetadata implements IBatchTranslateMetadata {

                    /**
                     * Constructs a new BatchTranslateMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.translation.v3.IBatchTranslateMetadata);

                    /** BatchTranslateMetadata state. */
                    public state: (google.cloud.translation.v3.BatchTranslateMetadata.State|keyof typeof google.cloud.translation.v3.BatchTranslateMetadata.State);

                    /** BatchTranslateMetadata translatedCharacters. */
                    public translatedCharacters: (number|Long|string);

                    /** BatchTranslateMetadata failedCharacters. */
                    public failedCharacters: (number|Long|string);

                    /** BatchTranslateMetadata totalCharacters. */
                    public totalCharacters: (number|Long|string);

                    /** BatchTranslateMetadata submitTime. */
                    public submitTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new BatchTranslateMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BatchTranslateMetadata instance
                     */
                    public static create(properties?: google.cloud.translation.v3.IBatchTranslateMetadata): google.cloud.translation.v3.BatchTranslateMetadata;

                    /**
                     * Encodes the specified BatchTranslateMetadata message. Does not implicitly {@link google.cloud.translation.v3.BatchTranslateMetadata.verify|verify} messages.
                     * @param message BatchTranslateMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.translation.v3.IBatchTranslateMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BatchTranslateMetadata message, length delimited. Does not implicitly {@link google.cloud.translation.v3.BatchTranslateMetadata.verify|verify} messages.
                     * @param message BatchTranslateMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.translation.v3.IBatchTranslateMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BatchTranslateMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BatchTranslateMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.translation.v3.BatchTranslateMetadata;

                    /**
                     * Decodes a BatchTranslateMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BatchTranslateMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.translation.v3.BatchTranslateMetadata;

                    /**
                     * Verifies a BatchTranslateMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BatchTranslateMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BatchTranslateMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.translation.v3.BatchTranslateMetadata;

                    /**
                     * Creates a plain object from a BatchTranslateMetadata message. Also converts values to other types if specified.
                     * @param message BatchTranslateMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.translation.v3.BatchTranslateMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BatchTranslateMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace BatchTranslateMetadata {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        RUNNING = 1,
                        SUCCEEDED = 2,
                        FAILED = 3,
                        CANCELLING = 4,
                        CANCELLED = 5
                    }
                }

                /** Properties of a BatchTranslateResponse. */
                interface IBatchTranslateResponse {

                    /** BatchTranslateResponse totalCharacters */
                    totalCharacters?: (number|Long|string|null);

                    /** BatchTranslateResponse translatedCharacters */
                    translatedCharacters?: (number|Long|string|null);

                    /** BatchTranslateResponse failedCharacters */
                    failedCharacters?: (number|Long|string|null);

                    /** BatchTranslateResponse submitTime */
                    submitTime?: (google.protobuf.ITimestamp|null);

                    /** BatchTranslateResponse endTime */
                    endTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a BatchTranslateResponse. */
                class BatchTranslateResponse implements IBatchTranslateResponse {

                    /**
                     * Constructs a new BatchTranslateResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.translation.v3.IBatchTranslateResponse);

                    /** BatchTranslateResponse totalCharacters. */
                    public totalCharacters: (number|Long|string);

                    /** BatchTranslateResponse translatedCharacters. */
                    public translatedCharacters: (number|Long|string);

                    /** BatchTranslateResponse failedCharacters. */
                    public failedCharacters: (number|Long|string);

                    /** BatchTranslateResponse submitTime. */
                    public submitTime?: (google.protobuf.ITimestamp|null);

                    /** BatchTranslateResponse endTime. */
                    public endTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new BatchTranslateResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BatchTranslateResponse instance
                     */
                    public static create(properties?: google.cloud.translation.v3.IBatchTranslateResponse): google.cloud.translation.v3.BatchTranslateResponse;

                    /**
                     * Encodes the specified BatchTranslateResponse message. Does not implicitly {@link google.cloud.translation.v3.BatchTranslateResponse.verify|verify} messages.
                     * @param message BatchTranslateResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.translation.v3.IBatchTranslateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BatchTranslateResponse message, length delimited. Does not implicitly {@link google.cloud.translation.v3.BatchTranslateResponse.verify|verify} messages.
                     * @param message BatchTranslateResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.translation.v3.IBatchTranslateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BatchTranslateResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BatchTranslateResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.translation.v3.BatchTranslateResponse;

                    /**
                     * Decodes a BatchTranslateResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BatchTranslateResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.translation.v3.BatchTranslateResponse;

                    /**
                     * Verifies a BatchTranslateResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BatchTranslateResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BatchTranslateResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.translation.v3.BatchTranslateResponse;

                    /**
                     * Creates a plain object from a BatchTranslateResponse message. Also converts values to other types if specified.
                     * @param message BatchTranslateResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.translation.v3.BatchTranslateResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BatchTranslateResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GlossaryInputConfig. */
                interface IGlossaryInputConfig {

                    /** GlossaryInputConfig gcsSource */
                    gcsSource?: (google.cloud.translation.v3.IGcsSource|null);
                }

                /** Represents a GlossaryInputConfig. */
                class GlossaryInputConfig implements IGlossaryInputConfig {

                    /**
                     * Constructs a new GlossaryInputConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.translation.v3.IGlossaryInputConfig);

                    /** GlossaryInputConfig gcsSource. */
                    public gcsSource?: (google.cloud.translation.v3.IGcsSource|null);

                    /** GlossaryInputConfig source. */
                    public source?: "gcsSource";

                    /**
                     * Creates a new GlossaryInputConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GlossaryInputConfig instance
                     */
                    public static create(properties?: google.cloud.translation.v3.IGlossaryInputConfig): google.cloud.translation.v3.GlossaryInputConfig;

                    /**
                     * Encodes the specified GlossaryInputConfig message. Does not implicitly {@link google.cloud.translation.v3.GlossaryInputConfig.verify|verify} messages.
                     * @param message GlossaryInputConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.translation.v3.IGlossaryInputConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GlossaryInputConfig message, length delimited. Does not implicitly {@link google.cloud.translation.v3.GlossaryInputConfig.verify|verify} messages.
                     * @param message GlossaryInputConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.translation.v3.IGlossaryInputConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GlossaryInputConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GlossaryInputConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.translation.v3.GlossaryInputConfig;

                    /**
                     * Decodes a GlossaryInputConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GlossaryInputConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.translation.v3.GlossaryInputConfig;

                    /**
                     * Verifies a GlossaryInputConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GlossaryInputConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GlossaryInputConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.translation.v3.GlossaryInputConfig;

                    /**
                     * Creates a plain object from a GlossaryInputConfig message. Also converts values to other types if specified.
                     * @param message GlossaryInputConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.translation.v3.GlossaryInputConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GlossaryInputConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Glossary. */
                interface IGlossary {

                    /** Glossary name */
                    name?: (string|null);

                    /** Glossary languagePair */
                    languagePair?: (google.cloud.translation.v3.Glossary.ILanguageCodePair|null);

                    /** Glossary languageCodesSet */
                    languageCodesSet?: (google.cloud.translation.v3.Glossary.ILanguageCodesSet|null);

                    /** Glossary inputConfig */
                    inputConfig?: (google.cloud.translation.v3.IGlossaryInputConfig|null);

                    /** Glossary entryCount */
                    entryCount?: (number|null);

                    /** Glossary submitTime */
                    submitTime?: (google.protobuf.ITimestamp|null);

                    /** Glossary endTime */
                    endTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a Glossary. */
                class Glossary implements IGlossary {

                    /**
                     * Constructs a new Glossary.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.translation.v3.IGlossary);

                    /** Glossary name. */
                    public name: string;

                    /** Glossary languagePair. */
                    public languagePair?: (google.cloud.translation.v3.Glossary.ILanguageCodePair|null);

                    /** Glossary languageCodesSet. */
                    public languageCodesSet?: (google.cloud.translation.v3.Glossary.ILanguageCodesSet|null);

                    /** Glossary inputConfig. */
                    public inputConfig?: (google.cloud.translation.v3.IGlossaryInputConfig|null);

                    /** Glossary entryCount. */
                    public entryCount: number;

                    /** Glossary submitTime. */
                    public submitTime?: (google.protobuf.ITimestamp|null);

                    /** Glossary endTime. */
                    public endTime?: (google.protobuf.ITimestamp|null);

                    /** Glossary languages. */
                    public languages?: ("languagePair"|"languageCodesSet");

                    /**
                     * Creates a new Glossary instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Glossary instance
                     */
                    public static create(properties?: google.cloud.translation.v3.IGlossary): google.cloud.translation.v3.Glossary;

                    /**
                     * Encodes the specified Glossary message. Does not implicitly {@link google.cloud.translation.v3.Glossary.verify|verify} messages.
                     * @param message Glossary message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.translation.v3.IGlossary, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Glossary message, length delimited. Does not implicitly {@link google.cloud.translation.v3.Glossary.verify|verify} messages.
                     * @param message Glossary message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.translation.v3.IGlossary, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Glossary message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Glossary
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.translation.v3.Glossary;

                    /**
                     * Decodes a Glossary message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Glossary
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.translation.v3.Glossary;

                    /**
                     * Verifies a Glossary message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Glossary message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Glossary
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.translation.v3.Glossary;

                    /**
                     * Creates a plain object from a Glossary message. Also converts values to other types if specified.
                     * @param message Glossary
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.translation.v3.Glossary, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Glossary to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Glossary {

                    /** Properties of a LanguageCodePair. */
                    interface ILanguageCodePair {

                        /** LanguageCodePair sourceLanguageCode */
                        sourceLanguageCode?: (string|null);

                        /** LanguageCodePair targetLanguageCode */
                        targetLanguageCode?: (string|null);
                    }

                    /** Represents a LanguageCodePair. */
                    class LanguageCodePair implements ILanguageCodePair {

                        /**
                         * Constructs a new LanguageCodePair.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.translation.v3.Glossary.ILanguageCodePair);

                        /** LanguageCodePair sourceLanguageCode. */
                        public sourceLanguageCode: string;

                        /** LanguageCodePair targetLanguageCode. */
                        public targetLanguageCode: string;

                        /**
                         * Creates a new LanguageCodePair instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns LanguageCodePair instance
                         */
                        public static create(properties?: google.cloud.translation.v3.Glossary.ILanguageCodePair): google.cloud.translation.v3.Glossary.LanguageCodePair;

                        /**
                         * Encodes the specified LanguageCodePair message. Does not implicitly {@link google.cloud.translation.v3.Glossary.LanguageCodePair.verify|verify} messages.
                         * @param message LanguageCodePair message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.translation.v3.Glossary.ILanguageCodePair, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified LanguageCodePair message, length delimited. Does not implicitly {@link google.cloud.translation.v3.Glossary.LanguageCodePair.verify|verify} messages.
                         * @param message LanguageCodePair message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.translation.v3.Glossary.ILanguageCodePair, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a LanguageCodePair message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns LanguageCodePair
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.translation.v3.Glossary.LanguageCodePair;

                        /**
                         * Decodes a LanguageCodePair message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns LanguageCodePair
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.translation.v3.Glossary.LanguageCodePair;

                        /**
                         * Verifies a LanguageCodePair message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a LanguageCodePair message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns LanguageCodePair
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.translation.v3.Glossary.LanguageCodePair;

                        /**
                         * Creates a plain object from a LanguageCodePair message. Also converts values to other types if specified.
                         * @param message LanguageCodePair
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.translation.v3.Glossary.LanguageCodePair, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this LanguageCodePair to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a LanguageCodesSet. */
                    interface ILanguageCodesSet {

                        /** LanguageCodesSet languageCodes */
                        languageCodes?: (string[]|null);
                    }

                    /** Represents a LanguageCodesSet. */
                    class LanguageCodesSet implements ILanguageCodesSet {

                        /**
                         * Constructs a new LanguageCodesSet.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.translation.v3.Glossary.ILanguageCodesSet);

                        /** LanguageCodesSet languageCodes. */
                        public languageCodes: string[];

                        /**
                         * Creates a new LanguageCodesSet instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns LanguageCodesSet instance
                         */
                        public static create(properties?: google.cloud.translation.v3.Glossary.ILanguageCodesSet): google.cloud.translation.v3.Glossary.LanguageCodesSet;

                        /**
                         * Encodes the specified LanguageCodesSet message. Does not implicitly {@link google.cloud.translation.v3.Glossary.LanguageCodesSet.verify|verify} messages.
                         * @param message LanguageCodesSet message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.translation.v3.Glossary.ILanguageCodesSet, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified LanguageCodesSet message, length delimited. Does not implicitly {@link google.cloud.translation.v3.Glossary.LanguageCodesSet.verify|verify} messages.
                         * @param message LanguageCodesSet message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.translation.v3.Glossary.ILanguageCodesSet, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a LanguageCodesSet message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns LanguageCodesSet
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.translation.v3.Glossary.LanguageCodesSet;

                        /**
                         * Decodes a LanguageCodesSet message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns LanguageCodesSet
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.translation.v3.Glossary.LanguageCodesSet;

                        /**
                         * Verifies a LanguageCodesSet message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a LanguageCodesSet message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns LanguageCodesSet
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.translation.v3.Glossary.LanguageCodesSet;

                        /**
                         * Creates a plain object from a LanguageCodesSet message. Also converts values to other types if specified.
                         * @param message LanguageCodesSet
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.translation.v3.Glossary.LanguageCodesSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this LanguageCodesSet to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Properties of a CreateGlossaryRequest. */
                interface ICreateGlossaryRequest {

                    /** CreateGlossaryRequest parent */
                    parent?: (string|null);

                    /** CreateGlossaryRequest glossary */
                    glossary?: (google.cloud.translation.v3.IGlossary|null);
                }

                /** Represents a CreateGlossaryRequest. */
                class CreateGlossaryRequest implements ICreateGlossaryRequest {

                    /**
                     * Constructs a new CreateGlossaryRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.translation.v3.ICreateGlossaryRequest);

                    /** CreateGlossaryRequest parent. */
                    public parent: string;

                    /** CreateGlossaryRequest glossary. */
                    public glossary?: (google.cloud.translation.v3.IGlossary|null);

                    /**
                     * Creates a new CreateGlossaryRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateGlossaryRequest instance
                     */
                    public static create(properties?: google.cloud.translation.v3.ICreateGlossaryRequest): google.cloud.translation.v3.CreateGlossaryRequest;

                    /**
                     * Encodes the specified CreateGlossaryRequest message. Does not implicitly {@link google.cloud.translation.v3.CreateGlossaryRequest.verify|verify} messages.
                     * @param message CreateGlossaryRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.translation.v3.ICreateGlossaryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateGlossaryRequest message, length delimited. Does not implicitly {@link google.cloud.translation.v3.CreateGlossaryRequest.verify|verify} messages.
                     * @param message CreateGlossaryRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.translation.v3.ICreateGlossaryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateGlossaryRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateGlossaryRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.translation.v3.CreateGlossaryRequest;

                    /**
                     * Decodes a CreateGlossaryRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateGlossaryRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.translation.v3.CreateGlossaryRequest;

                    /**
                     * Verifies a CreateGlossaryRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateGlossaryRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateGlossaryRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.translation.v3.CreateGlossaryRequest;

                    /**
                     * Creates a plain object from a CreateGlossaryRequest message. Also converts values to other types if specified.
                     * @param message CreateGlossaryRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.translation.v3.CreateGlossaryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateGlossaryRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetGlossaryRequest. */
                interface IGetGlossaryRequest {

                    /** GetGlossaryRequest name */
                    name?: (string|null);
                }

                /** Represents a GetGlossaryRequest. */
                class GetGlossaryRequest implements IGetGlossaryRequest {

                    /**
                     * Constructs a new GetGlossaryRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.translation.v3.IGetGlossaryRequest);

                    /** GetGlossaryRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetGlossaryRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetGlossaryRequest instance
                     */
                    public static create(properties?: google.cloud.translation.v3.IGetGlossaryRequest): google.cloud.translation.v3.GetGlossaryRequest;

                    /**
                     * Encodes the specified GetGlossaryRequest message. Does not implicitly {@link google.cloud.translation.v3.GetGlossaryRequest.verify|verify} messages.
                     * @param message GetGlossaryRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.translation.v3.IGetGlossaryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetGlossaryRequest message, length delimited. Does not implicitly {@link google.cloud.translation.v3.GetGlossaryRequest.verify|verify} messages.
                     * @param message GetGlossaryRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.translation.v3.IGetGlossaryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetGlossaryRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetGlossaryRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.translation.v3.GetGlossaryRequest;

                    /**
                     * Decodes a GetGlossaryRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetGlossaryRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.translation.v3.GetGlossaryRequest;

                    /**
                     * Verifies a GetGlossaryRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetGlossaryRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetGlossaryRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.translation.v3.GetGlossaryRequest;

                    /**
                     * Creates a plain object from a GetGlossaryRequest message. Also converts values to other types if specified.
                     * @param message GetGlossaryRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.translation.v3.GetGlossaryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetGlossaryRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteGlossaryRequest. */
                interface IDeleteGlossaryRequest {

                    /** DeleteGlossaryRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteGlossaryRequest. */
                class DeleteGlossaryRequest implements IDeleteGlossaryRequest {

                    /**
                     * Constructs a new DeleteGlossaryRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.translation.v3.IDeleteGlossaryRequest);

                    /** DeleteGlossaryRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteGlossaryRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteGlossaryRequest instance
                     */
                    public static create(properties?: google.cloud.translation.v3.IDeleteGlossaryRequest): google.cloud.translation.v3.DeleteGlossaryRequest;

                    /**
                     * Encodes the specified DeleteGlossaryRequest message. Does not implicitly {@link google.cloud.translation.v3.DeleteGlossaryRequest.verify|verify} messages.
                     * @param message DeleteGlossaryRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.translation.v3.IDeleteGlossaryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteGlossaryRequest message, length delimited. Does not implicitly {@link google.cloud.translation.v3.DeleteGlossaryRequest.verify|verify} messages.
                     * @param message DeleteGlossaryRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.translation.v3.IDeleteGlossaryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteGlossaryRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteGlossaryRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.translation.v3.DeleteGlossaryRequest;

                    /**
                     * Decodes a DeleteGlossaryRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteGlossaryRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.translation.v3.DeleteGlossaryRequest;

                    /**
                     * Verifies a DeleteGlossaryRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteGlossaryRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteGlossaryRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.translation.v3.DeleteGlossaryRequest;

                    /**
                     * Creates a plain object from a DeleteGlossaryRequest message. Also converts values to other types if specified.
                     * @param message DeleteGlossaryRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.translation.v3.DeleteGlossaryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteGlossaryRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListGlossariesRequest. */
                interface IListGlossariesRequest {

                    /** ListGlossariesRequest parent */
                    parent?: (string|null);

                    /** ListGlossariesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListGlossariesRequest pageToken */
                    pageToken?: (string|null);

                    /** ListGlossariesRequest filter */
                    filter?: (string|null);
                }

                /** Represents a ListGlossariesRequest. */
                class ListGlossariesRequest implements IListGlossariesRequest {

                    /**
                     * Constructs a new ListGlossariesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.translation.v3.IListGlossariesRequest);

                    /** ListGlossariesRequest parent. */
                    public parent: string;

                    /** ListGlossariesRequest pageSize. */
                    public pageSize: number;

                    /** ListGlossariesRequest pageToken. */
                    public pageToken: string;

                    /** ListGlossariesRequest filter. */
                    public filter: string;

                    /**
                     * Creates a new ListGlossariesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListGlossariesRequest instance
                     */
                    public static create(properties?: google.cloud.translation.v3.IListGlossariesRequest): google.cloud.translation.v3.ListGlossariesRequest;

                    /**
                     * Encodes the specified ListGlossariesRequest message. Does not implicitly {@link google.cloud.translation.v3.ListGlossariesRequest.verify|verify} messages.
                     * @param message ListGlossariesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.translation.v3.IListGlossariesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListGlossariesRequest message, length delimited. Does not implicitly {@link google.cloud.translation.v3.ListGlossariesRequest.verify|verify} messages.
                     * @param message ListGlossariesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.translation.v3.IListGlossariesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListGlossariesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListGlossariesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.translation.v3.ListGlossariesRequest;

                    /**
                     * Decodes a ListGlossariesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListGlossariesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.translation.v3.ListGlossariesRequest;

                    /**
                     * Verifies a ListGlossariesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListGlossariesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListGlossariesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.translation.v3.ListGlossariesRequest;

                    /**
                     * Creates a plain object from a ListGlossariesRequest message. Also converts values to other types if specified.
                     * @param message ListGlossariesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.translation.v3.ListGlossariesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListGlossariesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListGlossariesResponse. */
                interface IListGlossariesResponse {

                    /** ListGlossariesResponse glossaries */
                    glossaries?: (google.cloud.translation.v3.IGlossary[]|null);

                    /** ListGlossariesResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListGlossariesResponse. */
                class ListGlossariesResponse implements IListGlossariesResponse {

                    /**
                     * Constructs a new ListGlossariesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.translation.v3.IListGlossariesResponse);

                    /** ListGlossariesResponse glossaries. */
                    public glossaries: google.cloud.translation.v3.IGlossary[];

                    /** ListGlossariesResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListGlossariesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListGlossariesResponse instance
                     */
                    public static create(properties?: google.cloud.translation.v3.IListGlossariesResponse): google.cloud.translation.v3.ListGlossariesResponse;

                    /**
                     * Encodes the specified ListGlossariesResponse message. Does not implicitly {@link google.cloud.translation.v3.ListGlossariesResponse.verify|verify} messages.
                     * @param message ListGlossariesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.translation.v3.IListGlossariesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListGlossariesResponse message, length delimited. Does not implicitly {@link google.cloud.translation.v3.ListGlossariesResponse.verify|verify} messages.
                     * @param message ListGlossariesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.translation.v3.IListGlossariesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListGlossariesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListGlossariesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.translation.v3.ListGlossariesResponse;

                    /**
                     * Decodes a ListGlossariesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListGlossariesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.translation.v3.ListGlossariesResponse;

                    /**
                     * Verifies a ListGlossariesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListGlossariesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListGlossariesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.translation.v3.ListGlossariesResponse;

                    /**
                     * Creates a plain object from a ListGlossariesResponse message. Also converts values to other types if specified.
                     * @param message ListGlossariesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.translation.v3.ListGlossariesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListGlossariesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateGlossaryMetadata. */
                interface ICreateGlossaryMetadata {

                    /** CreateGlossaryMetadata name */
                    name?: (string|null);

                    /** CreateGlossaryMetadata state */
                    state?: (google.cloud.translation.v3.CreateGlossaryMetadata.State|keyof typeof google.cloud.translation.v3.CreateGlossaryMetadata.State|null);

                    /** CreateGlossaryMetadata submitTime */
                    submitTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a CreateGlossaryMetadata. */
                class CreateGlossaryMetadata implements ICreateGlossaryMetadata {

                    /**
                     * Constructs a new CreateGlossaryMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.translation.v3.ICreateGlossaryMetadata);

                    /** CreateGlossaryMetadata name. */
                    public name: string;

                    /** CreateGlossaryMetadata state. */
                    public state: (google.cloud.translation.v3.CreateGlossaryMetadata.State|keyof typeof google.cloud.translation.v3.CreateGlossaryMetadata.State);

                    /** CreateGlossaryMetadata submitTime. */
                    public submitTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new CreateGlossaryMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateGlossaryMetadata instance
                     */
                    public static create(properties?: google.cloud.translation.v3.ICreateGlossaryMetadata): google.cloud.translation.v3.CreateGlossaryMetadata;

                    /**
                     * Encodes the specified CreateGlossaryMetadata message. Does not implicitly {@link google.cloud.translation.v3.CreateGlossaryMetadata.verify|verify} messages.
                     * @param message CreateGlossaryMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.translation.v3.ICreateGlossaryMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateGlossaryMetadata message, length delimited. Does not implicitly {@link google.cloud.translation.v3.CreateGlossaryMetadata.verify|verify} messages.
                     * @param message CreateGlossaryMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.translation.v3.ICreateGlossaryMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateGlossaryMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateGlossaryMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.translation.v3.CreateGlossaryMetadata;

                    /**
                     * Decodes a CreateGlossaryMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateGlossaryMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.translation.v3.CreateGlossaryMetadata;

                    /**
                     * Verifies a CreateGlossaryMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateGlossaryMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateGlossaryMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.translation.v3.CreateGlossaryMetadata;

                    /**
                     * Creates a plain object from a CreateGlossaryMetadata message. Also converts values to other types if specified.
                     * @param message CreateGlossaryMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.translation.v3.CreateGlossaryMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateGlossaryMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace CreateGlossaryMetadata {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        RUNNING = 1,
                        SUCCEEDED = 2,
                        FAILED = 3,
                        CANCELLING = 4,
                        CANCELLED = 5
                    }
                }

                /** Properties of a DeleteGlossaryMetadata. */
                interface IDeleteGlossaryMetadata {

                    /** DeleteGlossaryMetadata name */
                    name?: (string|null);

                    /** DeleteGlossaryMetadata state */
                    state?: (google.cloud.translation.v3.DeleteGlossaryMetadata.State|keyof typeof google.cloud.translation.v3.DeleteGlossaryMetadata.State|null);

                    /** DeleteGlossaryMetadata submitTime */
                    submitTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a DeleteGlossaryMetadata. */
                class DeleteGlossaryMetadata implements IDeleteGlossaryMetadata {

                    /**
                     * Constructs a new DeleteGlossaryMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.translation.v3.IDeleteGlossaryMetadata);

                    /** DeleteGlossaryMetadata name. */
                    public name: string;

                    /** DeleteGlossaryMetadata state. */
                    public state: (google.cloud.translation.v3.DeleteGlossaryMetadata.State|keyof typeof google.cloud.translation.v3.DeleteGlossaryMetadata.State);

                    /** DeleteGlossaryMetadata submitTime. */
                    public submitTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new DeleteGlossaryMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteGlossaryMetadata instance
                     */
                    public static create(properties?: google.cloud.translation.v3.IDeleteGlossaryMetadata): google.cloud.translation.v3.DeleteGlossaryMetadata;

                    /**
                     * Encodes the specified DeleteGlossaryMetadata message. Does not implicitly {@link google.cloud.translation.v3.DeleteGlossaryMetadata.verify|verify} messages.
                     * @param message DeleteGlossaryMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.translation.v3.IDeleteGlossaryMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteGlossaryMetadata message, length delimited. Does not implicitly {@link google.cloud.translation.v3.DeleteGlossaryMetadata.verify|verify} messages.
                     * @param message DeleteGlossaryMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.translation.v3.IDeleteGlossaryMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteGlossaryMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteGlossaryMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.translation.v3.DeleteGlossaryMetadata;

                    /**
                     * Decodes a DeleteGlossaryMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteGlossaryMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.translation.v3.DeleteGlossaryMetadata;

                    /**
                     * Verifies a DeleteGlossaryMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteGlossaryMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteGlossaryMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.translation.v3.DeleteGlossaryMetadata;

                    /**
                     * Creates a plain object from a DeleteGlossaryMetadata message. Also converts values to other types if specified.
                     * @param message DeleteGlossaryMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.translation.v3.DeleteGlossaryMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteGlossaryMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace DeleteGlossaryMetadata {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        RUNNING = 1,
                        SUCCEEDED = 2,
                        FAILED = 3,
                        CANCELLING = 4,
                        CANCELLED = 5
                    }
                }

                /** Properties of a DeleteGlossaryResponse. */
                interface IDeleteGlossaryResponse {

                    /** DeleteGlossaryResponse name */
                    name?: (string|null);

                    /** DeleteGlossaryResponse submitTime */
                    submitTime?: (google.protobuf.ITimestamp|null);

                    /** DeleteGlossaryResponse endTime */
                    endTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a DeleteGlossaryResponse. */
                class DeleteGlossaryResponse implements IDeleteGlossaryResponse {

                    /**
                     * Constructs a new DeleteGlossaryResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.translation.v3.IDeleteGlossaryResponse);

                    /** DeleteGlossaryResponse name. */
                    public name: string;

                    /** DeleteGlossaryResponse submitTime. */
                    public submitTime?: (google.protobuf.ITimestamp|null);

                    /** DeleteGlossaryResponse endTime. */
                    public endTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new DeleteGlossaryResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteGlossaryResponse instance
                     */
                    public static create(properties?: google.cloud.translation.v3.IDeleteGlossaryResponse): google.cloud.translation.v3.DeleteGlossaryResponse;

                    /**
                     * Encodes the specified DeleteGlossaryResponse message. Does not implicitly {@link google.cloud.translation.v3.DeleteGlossaryResponse.verify|verify} messages.
                     * @param message DeleteGlossaryResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.translation.v3.IDeleteGlossaryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteGlossaryResponse message, length delimited. Does not implicitly {@link google.cloud.translation.v3.DeleteGlossaryResponse.verify|verify} messages.
                     * @param message DeleteGlossaryResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.translation.v3.IDeleteGlossaryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteGlossaryResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteGlossaryResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.translation.v3.DeleteGlossaryResponse;

                    /**
                     * Decodes a DeleteGlossaryResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteGlossaryResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.translation.v3.DeleteGlossaryResponse;

                    /**
                     * Verifies a DeleteGlossaryResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteGlossaryResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteGlossaryResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.translation.v3.DeleteGlossaryResponse;

                    /**
                     * Creates a plain object from a DeleteGlossaryResponse message. Also converts values to other types if specified.
                     * @param message DeleteGlossaryResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.translation.v3.DeleteGlossaryResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteGlossaryResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a BatchTranslateDocumentRequest. */
                interface IBatchTranslateDocumentRequest {

                    /** BatchTranslateDocumentRequest parent */
                    parent?: (string|null);

                    /** BatchTranslateDocumentRequest sourceLanguageCode */
                    sourceLanguageCode?: (string|null);

                    /** BatchTranslateDocumentRequest targetLanguageCodes */
                    targetLanguageCodes?: (string[]|null);

                    /** BatchTranslateDocumentRequest inputConfigs */
                    inputConfigs?: (google.cloud.translation.v3.IBatchDocumentInputConfig[]|null);

                    /** BatchTranslateDocumentRequest outputConfig */
                    outputConfig?: (google.cloud.translation.v3.IBatchDocumentOutputConfig|null);

                    /** BatchTranslateDocumentRequest models */
                    models?: ({ [k: string]: string }|null);

                    /** BatchTranslateDocumentRequest glossaries */
                    glossaries?: ({ [k: string]: google.cloud.translation.v3.ITranslateTextGlossaryConfig }|null);

                    /** BatchTranslateDocumentRequest formatConversions */
                    formatConversions?: ({ [k: string]: string }|null);
                }

                /** Represents a BatchTranslateDocumentRequest. */
                class BatchTranslateDocumentRequest implements IBatchTranslateDocumentRequest {

                    /**
                     * Constructs a new BatchTranslateDocumentRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.translation.v3.IBatchTranslateDocumentRequest);

                    /** BatchTranslateDocumentRequest parent. */
                    public parent: string;

                    /** BatchTranslateDocumentRequest sourceLanguageCode. */
                    public sourceLanguageCode: string;

                    /** BatchTranslateDocumentRequest targetLanguageCodes. */
                    public targetLanguageCodes: string[];

                    /** BatchTranslateDocumentRequest inputConfigs. */
                    public inputConfigs: google.cloud.translation.v3.IBatchDocumentInputConfig[];

                    /** BatchTranslateDocumentRequest outputConfig. */
                    public outputConfig?: (google.cloud.translation.v3.IBatchDocumentOutputConfig|null);

                    /** BatchTranslateDocumentRequest models. */
                    public models: { [k: string]: string };

                    /** BatchTranslateDocumentRequest glossaries. */
                    public glossaries: { [k: string]: google.cloud.translation.v3.ITranslateTextGlossaryConfig };

                    /** BatchTranslateDocumentRequest formatConversions. */
                    public formatConversions: { [k: string]: string };

                    /**
                     * Creates a new BatchTranslateDocumentRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BatchTranslateDocumentRequest instance
                     */
                    public static create(properties?: google.cloud.translation.v3.IBatchTranslateDocumentRequest): google.cloud.translation.v3.BatchTranslateDocumentRequest;

                    /**
                     * Encodes the specified BatchTranslateDocumentRequest message. Does not implicitly {@link google.cloud.translation.v3.BatchTranslateDocumentRequest.verify|verify} messages.
                     * @param message BatchTranslateDocumentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.translation.v3.IBatchTranslateDocumentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BatchTranslateDocumentRequest message, length delimited. Does not implicitly {@link google.cloud.translation.v3.BatchTranslateDocumentRequest.verify|verify} messages.
                     * @param message BatchTranslateDocumentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.translation.v3.IBatchTranslateDocumentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BatchTranslateDocumentRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BatchTranslateDocumentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.translation.v3.BatchTranslateDocumentRequest;

                    /**
                     * Decodes a BatchTranslateDocumentRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BatchTranslateDocumentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.translation.v3.BatchTranslateDocumentRequest;

                    /**
                     * Verifies a BatchTranslateDocumentRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BatchTranslateDocumentRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BatchTranslateDocumentRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.translation.v3.BatchTranslateDocumentRequest;

                    /**
                     * Creates a plain object from a BatchTranslateDocumentRequest message. Also converts values to other types if specified.
                     * @param message BatchTranslateDocumentRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.translation.v3.BatchTranslateDocumentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BatchTranslateDocumentRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a BatchDocumentInputConfig. */
                interface IBatchDocumentInputConfig {

                    /** BatchDocumentInputConfig gcsSource */
                    gcsSource?: (google.cloud.translation.v3.IGcsSource|null);
                }

                /** Represents a BatchDocumentInputConfig. */
                class BatchDocumentInputConfig implements IBatchDocumentInputConfig {

                    /**
                     * Constructs a new BatchDocumentInputConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.translation.v3.IBatchDocumentInputConfig);

                    /** BatchDocumentInputConfig gcsSource. */
                    public gcsSource?: (google.cloud.translation.v3.IGcsSource|null);

                    /** BatchDocumentInputConfig source. */
                    public source?: "gcsSource";

                    /**
                     * Creates a new BatchDocumentInputConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BatchDocumentInputConfig instance
                     */
                    public static create(properties?: google.cloud.translation.v3.IBatchDocumentInputConfig): google.cloud.translation.v3.BatchDocumentInputConfig;

                    /**
                     * Encodes the specified BatchDocumentInputConfig message. Does not implicitly {@link google.cloud.translation.v3.BatchDocumentInputConfig.verify|verify} messages.
                     * @param message BatchDocumentInputConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.translation.v3.IBatchDocumentInputConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BatchDocumentInputConfig message, length delimited. Does not implicitly {@link google.cloud.translation.v3.BatchDocumentInputConfig.verify|verify} messages.
                     * @param message BatchDocumentInputConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.translation.v3.IBatchDocumentInputConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BatchDocumentInputConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BatchDocumentInputConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.translation.v3.BatchDocumentInputConfig;

                    /**
                     * Decodes a BatchDocumentInputConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BatchDocumentInputConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.translation.v3.BatchDocumentInputConfig;

                    /**
                     * Verifies a BatchDocumentInputConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BatchDocumentInputConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BatchDocumentInputConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.translation.v3.BatchDocumentInputConfig;

                    /**
                     * Creates a plain object from a BatchDocumentInputConfig message. Also converts values to other types if specified.
                     * @param message BatchDocumentInputConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.translation.v3.BatchDocumentInputConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BatchDocumentInputConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a BatchDocumentOutputConfig. */
                interface IBatchDocumentOutputConfig {

                    /** BatchDocumentOutputConfig gcsDestination */
                    gcsDestination?: (google.cloud.translation.v3.IGcsDestination|null);
                }

                /** Represents a BatchDocumentOutputConfig. */
                class BatchDocumentOutputConfig implements IBatchDocumentOutputConfig {

                    /**
                     * Constructs a new BatchDocumentOutputConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.translation.v3.IBatchDocumentOutputConfig);

                    /** BatchDocumentOutputConfig gcsDestination. */
                    public gcsDestination?: (google.cloud.translation.v3.IGcsDestination|null);

                    /** BatchDocumentOutputConfig destination. */
                    public destination?: "gcsDestination";

                    /**
                     * Creates a new BatchDocumentOutputConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BatchDocumentOutputConfig instance
                     */
                    public static create(properties?: google.cloud.translation.v3.IBatchDocumentOutputConfig): google.cloud.translation.v3.BatchDocumentOutputConfig;

                    /**
                     * Encodes the specified BatchDocumentOutputConfig message. Does not implicitly {@link google.cloud.translation.v3.BatchDocumentOutputConfig.verify|verify} messages.
                     * @param message BatchDocumentOutputConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.translation.v3.IBatchDocumentOutputConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BatchDocumentOutputConfig message, length delimited. Does not implicitly {@link google.cloud.translation.v3.BatchDocumentOutputConfig.verify|verify} messages.
                     * @param message BatchDocumentOutputConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.translation.v3.IBatchDocumentOutputConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BatchDocumentOutputConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BatchDocumentOutputConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.translation.v3.BatchDocumentOutputConfig;

                    /**
                     * Decodes a BatchDocumentOutputConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BatchDocumentOutputConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.translation.v3.BatchDocumentOutputConfig;

                    /**
                     * Verifies a BatchDocumentOutputConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BatchDocumentOutputConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BatchDocumentOutputConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.translation.v3.BatchDocumentOutputConfig;

                    /**
                     * Creates a plain object from a BatchDocumentOutputConfig message. Also converts values to other types if specified.
                     * @param message BatchDocumentOutputConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.translation.v3.BatchDocumentOutputConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BatchDocumentOutputConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a BatchTranslateDocumentResponse. */
                interface IBatchTranslateDocumentResponse {

                    /** BatchTranslateDocumentResponse totalPages */
                    totalPages?: (number|Long|string|null);

                    /** BatchTranslateDocumentResponse translatedPages */
                    translatedPages?: (number|Long|string|null);

                    /** BatchTranslateDocumentResponse failedPages */
                    failedPages?: (number|Long|string|null);

                    /** BatchTranslateDocumentResponse totalBillablePages */
                    totalBillablePages?: (number|Long|string|null);

                    /** BatchTranslateDocumentResponse totalCharacters */
                    totalCharacters?: (number|Long|string|null);

                    /** BatchTranslateDocumentResponse translatedCharacters */
                    translatedCharacters?: (number|Long|string|null);

                    /** BatchTranslateDocumentResponse failedCharacters */
                    failedCharacters?: (number|Long|string|null);

                    /** BatchTranslateDocumentResponse totalBillableCharacters */
                    totalBillableCharacters?: (number|Long|string|null);

                    /** BatchTranslateDocumentResponse submitTime */
                    submitTime?: (google.protobuf.ITimestamp|null);

                    /** BatchTranslateDocumentResponse endTime */
                    endTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a BatchTranslateDocumentResponse. */
                class BatchTranslateDocumentResponse implements IBatchTranslateDocumentResponse {

                    /**
                     * Constructs a new BatchTranslateDocumentResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.translation.v3.IBatchTranslateDocumentResponse);

                    /** BatchTranslateDocumentResponse totalPages. */
                    public totalPages: (number|Long|string);

                    /** BatchTranslateDocumentResponse translatedPages. */
                    public translatedPages: (number|Long|string);

                    /** BatchTranslateDocumentResponse failedPages. */
                    public failedPages: (number|Long|string);

                    /** BatchTranslateDocumentResponse totalBillablePages. */
                    public totalBillablePages: (number|Long|string);

                    /** BatchTranslateDocumentResponse totalCharacters. */
                    public totalCharacters: (number|Long|string);

                    /** BatchTranslateDocumentResponse translatedCharacters. */
                    public translatedCharacters: (number|Long|string);

                    /** BatchTranslateDocumentResponse failedCharacters. */
                    public failedCharacters: (number|Long|string);

                    /** BatchTranslateDocumentResponse totalBillableCharacters. */
                    public totalBillableCharacters: (number|Long|string);

                    /** BatchTranslateDocumentResponse submitTime. */
                    public submitTime?: (google.protobuf.ITimestamp|null);

                    /** BatchTranslateDocumentResponse endTime. */
                    public endTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new BatchTranslateDocumentResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BatchTranslateDocumentResponse instance
                     */
                    public static create(properties?: google.cloud.translation.v3.IBatchTranslateDocumentResponse): google.cloud.translation.v3.BatchTranslateDocumentResponse;

                    /**
                     * Encodes the specified BatchTranslateDocumentResponse message. Does not implicitly {@link google.cloud.translation.v3.BatchTranslateDocumentResponse.verify|verify} messages.
                     * @param message BatchTranslateDocumentResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.translation.v3.IBatchTranslateDocumentResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BatchTranslateDocumentResponse message, length delimited. Does not implicitly {@link google.cloud.translation.v3.BatchTranslateDocumentResponse.verify|verify} messages.
                     * @param message BatchTranslateDocumentResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.translation.v3.IBatchTranslateDocumentResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BatchTranslateDocumentResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BatchTranslateDocumentResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.translation.v3.BatchTranslateDocumentResponse;

                    /**
                     * Decodes a BatchTranslateDocumentResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BatchTranslateDocumentResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.translation.v3.BatchTranslateDocumentResponse;

                    /**
                     * Verifies a BatchTranslateDocumentResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BatchTranslateDocumentResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BatchTranslateDocumentResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.translation.v3.BatchTranslateDocumentResponse;

                    /**
                     * Creates a plain object from a BatchTranslateDocumentResponse message. Also converts values to other types if specified.
                     * @param message BatchTranslateDocumentResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.translation.v3.BatchTranslateDocumentResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BatchTranslateDocumentResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a BatchTranslateDocumentMetadata. */
                interface IBatchTranslateDocumentMetadata {

                    /** BatchTranslateDocumentMetadata state */
                    state?: (google.cloud.translation.v3.BatchTranslateDocumentMetadata.State|keyof typeof google.cloud.translation.v3.BatchTranslateDocumentMetadata.State|null);

                    /** BatchTranslateDocumentMetadata totalPages */
                    totalPages?: (number|Long|string|null);

                    /** BatchTranslateDocumentMetadata translatedPages */
                    translatedPages?: (number|Long|string|null);

                    /** BatchTranslateDocumentMetadata failedPages */
                    failedPages?: (number|Long|string|null);

                    /** BatchTranslateDocumentMetadata totalBillablePages */
                    totalBillablePages?: (number|Long|string|null);

                    /** BatchTranslateDocumentMetadata totalCharacters */
                    totalCharacters?: (number|Long|string|null);

                    /** BatchTranslateDocumentMetadata translatedCharacters */
                    translatedCharacters?: (number|Long|string|null);

                    /** BatchTranslateDocumentMetadata failedCharacters */
                    failedCharacters?: (number|Long|string|null);

                    /** BatchTranslateDocumentMetadata totalBillableCharacters */
                    totalBillableCharacters?: (number|Long|string|null);

                    /** BatchTranslateDocumentMetadata submitTime */
                    submitTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a BatchTranslateDocumentMetadata. */
                class BatchTranslateDocumentMetadata implements IBatchTranslateDocumentMetadata {

                    /**
                     * Constructs a new BatchTranslateDocumentMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.translation.v3.IBatchTranslateDocumentMetadata);

                    /** BatchTranslateDocumentMetadata state. */
                    public state: (google.cloud.translation.v3.BatchTranslateDocumentMetadata.State|keyof typeof google.cloud.translation.v3.BatchTranslateDocumentMetadata.State);

                    /** BatchTranslateDocumentMetadata totalPages. */
                    public totalPages: (number|Long|string);

                    /** BatchTranslateDocumentMetadata translatedPages. */
                    public translatedPages: (number|Long|string);

                    /** BatchTranslateDocumentMetadata failedPages. */
                    public failedPages: (number|Long|string);

                    /** BatchTranslateDocumentMetadata totalBillablePages. */
                    public totalBillablePages: (number|Long|string);

                    /** BatchTranslateDocumentMetadata totalCharacters. */
                    public totalCharacters: (number|Long|string);

                    /** BatchTranslateDocumentMetadata translatedCharacters. */
                    public translatedCharacters: (number|Long|string);

                    /** BatchTranslateDocumentMetadata failedCharacters. */
                    public failedCharacters: (number|Long|string);

                    /** BatchTranslateDocumentMetadata totalBillableCharacters. */
                    public totalBillableCharacters: (number|Long|string);

                    /** BatchTranslateDocumentMetadata submitTime. */
                    public submitTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new BatchTranslateDocumentMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BatchTranslateDocumentMetadata instance
                     */
                    public static create(properties?: google.cloud.translation.v3.IBatchTranslateDocumentMetadata): google.cloud.translation.v3.BatchTranslateDocumentMetadata;

                    /**
                     * Encodes the specified BatchTranslateDocumentMetadata message. Does not implicitly {@link google.cloud.translation.v3.BatchTranslateDocumentMetadata.verify|verify} messages.
                     * @param message BatchTranslateDocumentMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.translation.v3.IBatchTranslateDocumentMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BatchTranslateDocumentMetadata message, length delimited. Does not implicitly {@link google.cloud.translation.v3.BatchTranslateDocumentMetadata.verify|verify} messages.
                     * @param message BatchTranslateDocumentMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.translation.v3.IBatchTranslateDocumentMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BatchTranslateDocumentMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BatchTranslateDocumentMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.translation.v3.BatchTranslateDocumentMetadata;

                    /**
                     * Decodes a BatchTranslateDocumentMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BatchTranslateDocumentMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.translation.v3.BatchTranslateDocumentMetadata;

                    /**
                     * Verifies a BatchTranslateDocumentMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BatchTranslateDocumentMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BatchTranslateDocumentMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.translation.v3.BatchTranslateDocumentMetadata;

                    /**
                     * Creates a plain object from a BatchTranslateDocumentMetadata message. Also converts values to other types if specified.
                     * @param message BatchTranslateDocumentMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.translation.v3.BatchTranslateDocumentMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BatchTranslateDocumentMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace BatchTranslateDocumentMetadata {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        RUNNING = 1,
                        SUCCEEDED = 2,
                        FAILED = 3,
                        CANCELLING = 4,
                        CANCELLED = 5
                    }
                }
            }

            /** Namespace v3beta1. */
            namespace v3beta1 {

                /** Represents a TranslationService */
                class TranslationService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new TranslationService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new TranslationService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): TranslationService;

                    /**
                     * Calls TranslateText.
                     * @param request TranslateTextRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and TranslateTextResponse
                     */
                    public translateText(request: google.cloud.translation.v3beta1.ITranslateTextRequest, callback: google.cloud.translation.v3beta1.TranslationService.TranslateTextCallback): void;

                    /**
                     * Calls TranslateText.
                     * @param request TranslateTextRequest message or plain object
                     * @returns Promise
                     */
                    public translateText(request: google.cloud.translation.v3beta1.ITranslateTextRequest): Promise<google.cloud.translation.v3beta1.TranslateTextResponse>;

                    /**
                     * Calls DetectLanguage.
                     * @param request DetectLanguageRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and DetectLanguageResponse
                     */
                    public detectLanguage(request: google.cloud.translation.v3beta1.IDetectLanguageRequest, callback: google.cloud.translation.v3beta1.TranslationService.DetectLanguageCallback): void;

                    /**
                     * Calls DetectLanguage.
                     * @param request DetectLanguageRequest message or plain object
                     * @returns Promise
                     */
                    public detectLanguage(request: google.cloud.translation.v3beta1.IDetectLanguageRequest): Promise<google.cloud.translation.v3beta1.DetectLanguageResponse>;

                    /**
                     * Calls GetSupportedLanguages.
                     * @param request GetSupportedLanguagesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and SupportedLanguages
                     */
                    public getSupportedLanguages(request: google.cloud.translation.v3beta1.IGetSupportedLanguagesRequest, callback: google.cloud.translation.v3beta1.TranslationService.GetSupportedLanguagesCallback): void;

                    /**
                     * Calls GetSupportedLanguages.
                     * @param request GetSupportedLanguagesRequest message or plain object
                     * @returns Promise
                     */
                    public getSupportedLanguages(request: google.cloud.translation.v3beta1.IGetSupportedLanguagesRequest): Promise<google.cloud.translation.v3beta1.SupportedLanguages>;

                    /**
                     * Calls TranslateDocument.
                     * @param request TranslateDocumentRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and TranslateDocumentResponse
                     */
                    public translateDocument(request: google.cloud.translation.v3beta1.ITranslateDocumentRequest, callback: google.cloud.translation.v3beta1.TranslationService.TranslateDocumentCallback): void;

                    /**
                     * Calls TranslateDocument.
                     * @param request TranslateDocumentRequest message or plain object
                     * @returns Promise
                     */
                    public translateDocument(request: google.cloud.translation.v3beta1.ITranslateDocumentRequest): Promise<google.cloud.translation.v3beta1.TranslateDocumentResponse>;

                    /**
                     * Calls BatchTranslateText.
                     * @param request BatchTranslateTextRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public batchTranslateText(request: google.cloud.translation.v3beta1.IBatchTranslateTextRequest, callback: google.cloud.translation.v3beta1.TranslationService.BatchTranslateTextCallback): void;

                    /**
                     * Calls BatchTranslateText.
                     * @param request BatchTranslateTextRequest message or plain object
                     * @returns Promise
                     */
                    public batchTranslateText(request: google.cloud.translation.v3beta1.IBatchTranslateTextRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls BatchTranslateDocument.
                     * @param request BatchTranslateDocumentRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public batchTranslateDocument(request: google.cloud.translation.v3beta1.IBatchTranslateDocumentRequest, callback: google.cloud.translation.v3beta1.TranslationService.BatchTranslateDocumentCallback): void;

                    /**
                     * Calls BatchTranslateDocument.
                     * @param request BatchTranslateDocumentRequest message or plain object
                     * @returns Promise
                     */
                    public batchTranslateDocument(request: google.cloud.translation.v3beta1.IBatchTranslateDocumentRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls CreateGlossary.
                     * @param request CreateGlossaryRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createGlossary(request: google.cloud.translation.v3beta1.ICreateGlossaryRequest, callback: google.cloud.translation.v3beta1.TranslationService.CreateGlossaryCallback): void;

                    /**
                     * Calls CreateGlossary.
                     * @param request CreateGlossaryRequest message or plain object
                     * @returns Promise
                     */
                    public createGlossary(request: google.cloud.translation.v3beta1.ICreateGlossaryRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListGlossaries.
                     * @param request ListGlossariesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListGlossariesResponse
                     */
                    public listGlossaries(request: google.cloud.translation.v3beta1.IListGlossariesRequest, callback: google.cloud.translation.v3beta1.TranslationService.ListGlossariesCallback): void;

                    /**
                     * Calls ListGlossaries.
                     * @param request ListGlossariesRequest message or plain object
                     * @returns Promise
                     */
                    public listGlossaries(request: google.cloud.translation.v3beta1.IListGlossariesRequest): Promise<google.cloud.translation.v3beta1.ListGlossariesResponse>;

                    /**
                     * Calls GetGlossary.
                     * @param request GetGlossaryRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Glossary
                     */
                    public getGlossary(request: google.cloud.translation.v3beta1.IGetGlossaryRequest, callback: google.cloud.translation.v3beta1.TranslationService.GetGlossaryCallback): void;

                    /**
                     * Calls GetGlossary.
                     * @param request GetGlossaryRequest message or plain object
                     * @returns Promise
                     */
                    public getGlossary(request: google.cloud.translation.v3beta1.IGetGlossaryRequest): Promise<google.cloud.translation.v3beta1.Glossary>;

                    /**
                     * Calls DeleteGlossary.
                     * @param request DeleteGlossaryRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteGlossary(request: google.cloud.translation.v3beta1.IDeleteGlossaryRequest, callback: google.cloud.translation.v3beta1.TranslationService.DeleteGlossaryCallback): void;

                    /**
                     * Calls DeleteGlossary.
                     * @param request DeleteGlossaryRequest message or plain object
                     * @returns Promise
                     */
                    public deleteGlossary(request: google.cloud.translation.v3beta1.IDeleteGlossaryRequest): Promise<google.longrunning.Operation>;
                }

                namespace TranslationService {

                    /**
                     * Callback as used by {@link google.cloud.translation.v3beta1.TranslationService#translateText}.
                     * @param error Error, if any
                     * @param [response] TranslateTextResponse
                     */
                    type TranslateTextCallback = (error: (Error|null), response?: google.cloud.translation.v3beta1.TranslateTextResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.translation.v3beta1.TranslationService#detectLanguage}.
                     * @param error Error, if any
                     * @param [response] DetectLanguageResponse
                     */
                    type DetectLanguageCallback = (error: (Error|null), response?: google.cloud.translation.v3beta1.DetectLanguageResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.translation.v3beta1.TranslationService#getSupportedLanguages}.
                     * @param error Error, if any
                     * @param [response] SupportedLanguages
                     */
                    type GetSupportedLanguagesCallback = (error: (Error|null), response?: google.cloud.translation.v3beta1.SupportedLanguages) => void;

                    /**
                     * Callback as used by {@link google.cloud.translation.v3beta1.TranslationService#translateDocument}.
                     * @param error Error, if any
                     * @param [response] TranslateDocumentResponse
                     */
                    type TranslateDocumentCallback = (error: (Error|null), response?: google.cloud.translation.v3beta1.TranslateDocumentResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.translation.v3beta1.TranslationService#batchTranslateText}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type BatchTranslateTextCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.translation.v3beta1.TranslationService#batchTranslateDocument}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type BatchTranslateDocumentCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.translation.v3beta1.TranslationService#createGlossary}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateGlossaryCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.translation.v3beta1.TranslationService#listGlossaries}.
                     * @param error Error, if any
                     * @param [response] ListGlossariesResponse
                     */
                    type ListGlossariesCallback = (error: (Error|null), response?: google.cloud.translation.v3beta1.ListGlossariesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.translation.v3beta1.TranslationService#getGlossary}.
                     * @param error Error, if any
                     * @param [response] Glossary
                     */
                    type GetGlossaryCallback = (error: (Error|null), response?: google.cloud.translation.v3beta1.Glossary) => void;

                    /**
                     * Callback as used by {@link google.cloud.translation.v3beta1.TranslationService#deleteGlossary}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteGlossaryCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;
                }

                /** Properties of a TranslateTextGlossaryConfig. */
                interface ITranslateTextGlossaryConfig {

                    /** TranslateTextGlossaryConfig glossary */
                    glossary?: (string|null);

                    /** TranslateTextGlossaryConfig ignoreCase */
                    ignoreCase?: (boolean|null);
                }

                /** Represents a TranslateTextGlossaryConfig. */
                class TranslateTextGlossaryConfig implements ITranslateTextGlossaryConfig {

                    /**
                     * Constructs a new TranslateTextGlossaryConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.translation.v3beta1.ITranslateTextGlossaryConfig);

                    /** TranslateTextGlossaryConfig glossary. */
                    public glossary: string;

                    /** TranslateTextGlossaryConfig ignoreCase. */
                    public ignoreCase: boolean;

                    /**
                     * Creates a new TranslateTextGlossaryConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TranslateTextGlossaryConfig instance
                     */
                    public static create(properties?: google.cloud.translation.v3beta1.ITranslateTextGlossaryConfig): google.cloud.translation.v3beta1.TranslateTextGlossaryConfig;

                    /**
                     * Encodes the specified TranslateTextGlossaryConfig message. Does not implicitly {@link google.cloud.translation.v3beta1.TranslateTextGlossaryConfig.verify|verify} messages.
                     * @param message TranslateTextGlossaryConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.translation.v3beta1.ITranslateTextGlossaryConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TranslateTextGlossaryConfig message, length delimited. Does not implicitly {@link google.cloud.translation.v3beta1.TranslateTextGlossaryConfig.verify|verify} messages.
                     * @param message TranslateTextGlossaryConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.translation.v3beta1.ITranslateTextGlossaryConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TranslateTextGlossaryConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TranslateTextGlossaryConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.translation.v3beta1.TranslateTextGlossaryConfig;

                    /**
                     * Decodes a TranslateTextGlossaryConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TranslateTextGlossaryConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.translation.v3beta1.TranslateTextGlossaryConfig;

                    /**
                     * Verifies a TranslateTextGlossaryConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TranslateTextGlossaryConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TranslateTextGlossaryConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.translation.v3beta1.TranslateTextGlossaryConfig;

                    /**
                     * Creates a plain object from a TranslateTextGlossaryConfig message. Also converts values to other types if specified.
                     * @param message TranslateTextGlossaryConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.translation.v3beta1.TranslateTextGlossaryConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TranslateTextGlossaryConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a TranslateTextRequest. */
                interface ITranslateTextRequest {

                    /** TranslateTextRequest contents */
                    contents?: (string[]|null);

                    /** TranslateTextRequest mimeType */
                    mimeType?: (string|null);

                    /** TranslateTextRequest sourceLanguageCode */
                    sourceLanguageCode?: (string|null);

                    /** TranslateTextRequest targetLanguageCode */
                    targetLanguageCode?: (string|null);

                    /** TranslateTextRequest parent */
                    parent?: (string|null);

                    /** TranslateTextRequest model */
                    model?: (string|null);

                    /** TranslateTextRequest glossaryConfig */
                    glossaryConfig?: (google.cloud.translation.v3beta1.ITranslateTextGlossaryConfig|null);

                    /** TranslateTextRequest labels */
                    labels?: ({ [k: string]: string }|null);
                }

                /** Represents a TranslateTextRequest. */
                class TranslateTextRequest implements ITranslateTextRequest {

                    /**
                     * Constructs a new TranslateTextRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.translation.v3beta1.ITranslateTextRequest);

                    /** TranslateTextRequest contents. */
                    public contents: string[];

                    /** TranslateTextRequest mimeType. */
                    public mimeType: string;

                    /** TranslateTextRequest sourceLanguageCode. */
                    public sourceLanguageCode: string;

                    /** TranslateTextRequest targetLanguageCode. */
                    public targetLanguageCode: string;

                    /** TranslateTextRequest parent. */
                    public parent: string;

                    /** TranslateTextRequest model. */
                    public model: string;

                    /** TranslateTextRequest glossaryConfig. */
                    public glossaryConfig?: (google.cloud.translation.v3beta1.ITranslateTextGlossaryConfig|null);

                    /** TranslateTextRequest labels. */
                    public labels: { [k: string]: string };

                    /**
                     * Creates a new TranslateTextRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TranslateTextRequest instance
                     */
                    public static create(properties?: google.cloud.translation.v3beta1.ITranslateTextRequest): google.cloud.translation.v3beta1.TranslateTextRequest;

                    /**
                     * Encodes the specified TranslateTextRequest message. Does not implicitly {@link google.cloud.translation.v3beta1.TranslateTextRequest.verify|verify} messages.
                     * @param message TranslateTextRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.translation.v3beta1.ITranslateTextRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TranslateTextRequest message, length delimited. Does not implicitly {@link google.cloud.translation.v3beta1.TranslateTextRequest.verify|verify} messages.
                     * @param message TranslateTextRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.translation.v3beta1.ITranslateTextRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TranslateTextRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TranslateTextRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.translation.v3beta1.TranslateTextRequest;

                    /**
                     * Decodes a TranslateTextRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TranslateTextRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.translation.v3beta1.TranslateTextRequest;

                    /**
                     * Verifies a TranslateTextRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TranslateTextRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TranslateTextRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.translation.v3beta1.TranslateTextRequest;

                    /**
                     * Creates a plain object from a TranslateTextRequest message. Also converts values to other types if specified.
                     * @param message TranslateTextRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.translation.v3beta1.TranslateTextRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TranslateTextRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a TranslateTextResponse. */
                interface ITranslateTextResponse {

                    /** TranslateTextResponse translations */
                    translations?: (google.cloud.translation.v3beta1.ITranslation[]|null);

                    /** TranslateTextResponse glossaryTranslations */
                    glossaryTranslations?: (google.cloud.translation.v3beta1.ITranslation[]|null);
                }

                /** Represents a TranslateTextResponse. */
                class TranslateTextResponse implements ITranslateTextResponse {

                    /**
                     * Constructs a new TranslateTextResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.translation.v3beta1.ITranslateTextResponse);

                    /** TranslateTextResponse translations. */
                    public translations: google.cloud.translation.v3beta1.ITranslation[];

                    /** TranslateTextResponse glossaryTranslations. */
                    public glossaryTranslations: google.cloud.translation.v3beta1.ITranslation[];

                    /**
                     * Creates a new TranslateTextResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TranslateTextResponse instance
                     */
                    public static create(properties?: google.cloud.translation.v3beta1.ITranslateTextResponse): google.cloud.translation.v3beta1.TranslateTextResponse;

                    /**
                     * Encodes the specified TranslateTextResponse message. Does not implicitly {@link google.cloud.translation.v3beta1.TranslateTextResponse.verify|verify} messages.
                     * @param message TranslateTextResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.translation.v3beta1.ITranslateTextResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TranslateTextResponse message, length delimited. Does not implicitly {@link google.cloud.translation.v3beta1.TranslateTextResponse.verify|verify} messages.
                     * @param message TranslateTextResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.translation.v3beta1.ITranslateTextResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TranslateTextResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TranslateTextResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.translation.v3beta1.TranslateTextResponse;

                    /**
                     * Decodes a TranslateTextResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TranslateTextResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.translation.v3beta1.TranslateTextResponse;

                    /**
                     * Verifies a TranslateTextResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TranslateTextResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TranslateTextResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.translation.v3beta1.TranslateTextResponse;

                    /**
                     * Creates a plain object from a TranslateTextResponse message. Also converts values to other types if specified.
                     * @param message TranslateTextResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.translation.v3beta1.TranslateTextResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TranslateTextResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Translation. */
                interface ITranslation {

                    /** Translation translatedText */
                    translatedText?: (string|null);

                    /** Translation model */
                    model?: (string|null);

                    /** Translation detectedLanguageCode */
                    detectedLanguageCode?: (string|null);

                    /** Translation glossaryConfig */
                    glossaryConfig?: (google.cloud.translation.v3beta1.ITranslateTextGlossaryConfig|null);
                }

                /** Represents a Translation. */
                class Translation implements ITranslation {

                    /**
                     * Constructs a new Translation.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.translation.v3beta1.ITranslation);

                    /** Translation translatedText. */
                    public translatedText: string;

                    /** Translation model. */
                    public model: string;

                    /** Translation detectedLanguageCode. */
                    public detectedLanguageCode: string;

                    /** Translation glossaryConfig. */
                    public glossaryConfig?: (google.cloud.translation.v3beta1.ITranslateTextGlossaryConfig|null);

                    /**
                     * Creates a new Translation instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Translation instance
                     */
                    public static create(properties?: google.cloud.translation.v3beta1.ITranslation): google.cloud.translation.v3beta1.Translation;

                    /**
                     * Encodes the specified Translation message. Does not implicitly {@link google.cloud.translation.v3beta1.Translation.verify|verify} messages.
                     * @param message Translation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.translation.v3beta1.ITranslation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Translation message, length delimited. Does not implicitly {@link google.cloud.translation.v3beta1.Translation.verify|verify} messages.
                     * @param message Translation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.translation.v3beta1.ITranslation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Translation message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Translation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.translation.v3beta1.Translation;

                    /**
                     * Decodes a Translation message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Translation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.translation.v3beta1.Translation;

                    /**
                     * Verifies a Translation message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Translation message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Translation
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.translation.v3beta1.Translation;

                    /**
                     * Creates a plain object from a Translation message. Also converts values to other types if specified.
                     * @param message Translation
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.translation.v3beta1.Translation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Translation to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DetectLanguageRequest. */
                interface IDetectLanguageRequest {

                    /** DetectLanguageRequest parent */
                    parent?: (string|null);

                    /** DetectLanguageRequest model */
                    model?: (string|null);

                    /** DetectLanguageRequest content */
                    content?: (string|null);

                    /** DetectLanguageRequest mimeType */
                    mimeType?: (string|null);

                    /** DetectLanguageRequest labels */
                    labels?: ({ [k: string]: string }|null);
                }

                /** Represents a DetectLanguageRequest. */
                class DetectLanguageRequest implements IDetectLanguageRequest {

                    /**
                     * Constructs a new DetectLanguageRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.translation.v3beta1.IDetectLanguageRequest);

                    /** DetectLanguageRequest parent. */
                    public parent: string;

                    /** DetectLanguageRequest model. */
                    public model: string;

                    /** DetectLanguageRequest content. */
                    public content?: (string|null);

                    /** DetectLanguageRequest mimeType. */
                    public mimeType: string;

                    /** DetectLanguageRequest labels. */
                    public labels: { [k: string]: string };

                    /** DetectLanguageRequest source. */
                    public source?: "content";

                    /**
                     * Creates a new DetectLanguageRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DetectLanguageRequest instance
                     */
                    public static create(properties?: google.cloud.translation.v3beta1.IDetectLanguageRequest): google.cloud.translation.v3beta1.DetectLanguageRequest;

                    /**
                     * Encodes the specified DetectLanguageRequest message. Does not implicitly {@link google.cloud.translation.v3beta1.DetectLanguageRequest.verify|verify} messages.
                     * @param message DetectLanguageRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.translation.v3beta1.IDetectLanguageRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DetectLanguageRequest message, length delimited. Does not implicitly {@link google.cloud.translation.v3beta1.DetectLanguageRequest.verify|verify} messages.
                     * @param message DetectLanguageRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.translation.v3beta1.IDetectLanguageRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DetectLanguageRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DetectLanguageRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.translation.v3beta1.DetectLanguageRequest;

                    /**
                     * Decodes a DetectLanguageRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DetectLanguageRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.translation.v3beta1.DetectLanguageRequest;

                    /**
                     * Verifies a DetectLanguageRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DetectLanguageRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DetectLanguageRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.translation.v3beta1.DetectLanguageRequest;

                    /**
                     * Creates a plain object from a DetectLanguageRequest message. Also converts values to other types if specified.
                     * @param message DetectLanguageRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.translation.v3beta1.DetectLanguageRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DetectLanguageRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DetectedLanguage. */
                interface IDetectedLanguage {

                    /** DetectedLanguage languageCode */
                    languageCode?: (string|null);

                    /** DetectedLanguage confidence */
                    confidence?: (number|null);
                }

                /** Represents a DetectedLanguage. */
                class DetectedLanguage implements IDetectedLanguage {

                    /**
                     * Constructs a new DetectedLanguage.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.translation.v3beta1.IDetectedLanguage);

                    /** DetectedLanguage languageCode. */
                    public languageCode: string;

                    /** DetectedLanguage confidence. */
                    public confidence: number;

                    /**
                     * Creates a new DetectedLanguage instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DetectedLanguage instance
                     */
                    public static create(properties?: google.cloud.translation.v3beta1.IDetectedLanguage): google.cloud.translation.v3beta1.DetectedLanguage;

                    /**
                     * Encodes the specified DetectedLanguage message. Does not implicitly {@link google.cloud.translation.v3beta1.DetectedLanguage.verify|verify} messages.
                     * @param message DetectedLanguage message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.translation.v3beta1.IDetectedLanguage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DetectedLanguage message, length delimited. Does not implicitly {@link google.cloud.translation.v3beta1.DetectedLanguage.verify|verify} messages.
                     * @param message DetectedLanguage message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.translation.v3beta1.IDetectedLanguage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DetectedLanguage message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DetectedLanguage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.translation.v3beta1.DetectedLanguage;

                    /**
                     * Decodes a DetectedLanguage message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DetectedLanguage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.translation.v3beta1.DetectedLanguage;

                    /**
                     * Verifies a DetectedLanguage message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DetectedLanguage message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DetectedLanguage
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.translation.v3beta1.DetectedLanguage;

                    /**
                     * Creates a plain object from a DetectedLanguage message. Also converts values to other types if specified.
                     * @param message DetectedLanguage
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.translation.v3beta1.DetectedLanguage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DetectedLanguage to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DetectLanguageResponse. */
                interface IDetectLanguageResponse {

                    /** DetectLanguageResponse languages */
                    languages?: (google.cloud.translation.v3beta1.IDetectedLanguage[]|null);
                }

                /** Represents a DetectLanguageResponse. */
                class DetectLanguageResponse implements IDetectLanguageResponse {

                    /**
                     * Constructs a new DetectLanguageResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.translation.v3beta1.IDetectLanguageResponse);

                    /** DetectLanguageResponse languages. */
                    public languages: google.cloud.translation.v3beta1.IDetectedLanguage[];

                    /**
                     * Creates a new DetectLanguageResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DetectLanguageResponse instance
                     */
                    public static create(properties?: google.cloud.translation.v3beta1.IDetectLanguageResponse): google.cloud.translation.v3beta1.DetectLanguageResponse;

                    /**
                     * Encodes the specified DetectLanguageResponse message. Does not implicitly {@link google.cloud.translation.v3beta1.DetectLanguageResponse.verify|verify} messages.
                     * @param message DetectLanguageResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.translation.v3beta1.IDetectLanguageResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DetectLanguageResponse message, length delimited. Does not implicitly {@link google.cloud.translation.v3beta1.DetectLanguageResponse.verify|verify} messages.
                     * @param message DetectLanguageResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.translation.v3beta1.IDetectLanguageResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DetectLanguageResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DetectLanguageResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.translation.v3beta1.DetectLanguageResponse;

                    /**
                     * Decodes a DetectLanguageResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DetectLanguageResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.translation.v3beta1.DetectLanguageResponse;

                    /**
                     * Verifies a DetectLanguageResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DetectLanguageResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DetectLanguageResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.translation.v3beta1.DetectLanguageResponse;

                    /**
                     * Creates a plain object from a DetectLanguageResponse message. Also converts values to other types if specified.
                     * @param message DetectLanguageResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.translation.v3beta1.DetectLanguageResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DetectLanguageResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetSupportedLanguagesRequest. */
                interface IGetSupportedLanguagesRequest {

                    /** GetSupportedLanguagesRequest parent */
                    parent?: (string|null);

                    /** GetSupportedLanguagesRequest displayLanguageCode */
                    displayLanguageCode?: (string|null);

                    /** GetSupportedLanguagesRequest model */
                    model?: (string|null);
                }

                /** Represents a GetSupportedLanguagesRequest. */
                class GetSupportedLanguagesRequest implements IGetSupportedLanguagesRequest {

                    /**
                     * Constructs a new GetSupportedLanguagesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.translation.v3beta1.IGetSupportedLanguagesRequest);

                    /** GetSupportedLanguagesRequest parent. */
                    public parent: string;

                    /** GetSupportedLanguagesRequest displayLanguageCode. */
                    public displayLanguageCode: string;

                    /** GetSupportedLanguagesRequest model. */
                    public model: string;

                    /**
                     * Creates a new GetSupportedLanguagesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetSupportedLanguagesRequest instance
                     */
                    public static create(properties?: google.cloud.translation.v3beta1.IGetSupportedLanguagesRequest): google.cloud.translation.v3beta1.GetSupportedLanguagesRequest;

                    /**
                     * Encodes the specified GetSupportedLanguagesRequest message. Does not implicitly {@link google.cloud.translation.v3beta1.GetSupportedLanguagesRequest.verify|verify} messages.
                     * @param message GetSupportedLanguagesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.translation.v3beta1.IGetSupportedLanguagesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetSupportedLanguagesRequest message, length delimited. Does not implicitly {@link google.cloud.translation.v3beta1.GetSupportedLanguagesRequest.verify|verify} messages.
                     * @param message GetSupportedLanguagesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.translation.v3beta1.IGetSupportedLanguagesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetSupportedLanguagesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetSupportedLanguagesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.translation.v3beta1.GetSupportedLanguagesRequest;

                    /**
                     * Decodes a GetSupportedLanguagesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetSupportedLanguagesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.translation.v3beta1.GetSupportedLanguagesRequest;

                    /**
                     * Verifies a GetSupportedLanguagesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetSupportedLanguagesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetSupportedLanguagesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.translation.v3beta1.GetSupportedLanguagesRequest;

                    /**
                     * Creates a plain object from a GetSupportedLanguagesRequest message. Also converts values to other types if specified.
                     * @param message GetSupportedLanguagesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.translation.v3beta1.GetSupportedLanguagesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetSupportedLanguagesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SupportedLanguages. */
                interface ISupportedLanguages {

                    /** SupportedLanguages languages */
                    languages?: (google.cloud.translation.v3beta1.ISupportedLanguage[]|null);
                }

                /** Represents a SupportedLanguages. */
                class SupportedLanguages implements ISupportedLanguages {

                    /**
                     * Constructs a new SupportedLanguages.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.translation.v3beta1.ISupportedLanguages);

                    /** SupportedLanguages languages. */
                    public languages: google.cloud.translation.v3beta1.ISupportedLanguage[];

                    /**
                     * Creates a new SupportedLanguages instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SupportedLanguages instance
                     */
                    public static create(properties?: google.cloud.translation.v3beta1.ISupportedLanguages): google.cloud.translation.v3beta1.SupportedLanguages;

                    /**
                     * Encodes the specified SupportedLanguages message. Does not implicitly {@link google.cloud.translation.v3beta1.SupportedLanguages.verify|verify} messages.
                     * @param message SupportedLanguages message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.translation.v3beta1.ISupportedLanguages, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SupportedLanguages message, length delimited. Does not implicitly {@link google.cloud.translation.v3beta1.SupportedLanguages.verify|verify} messages.
                     * @param message SupportedLanguages message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.translation.v3beta1.ISupportedLanguages, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SupportedLanguages message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SupportedLanguages
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.translation.v3beta1.SupportedLanguages;

                    /**
                     * Decodes a SupportedLanguages message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SupportedLanguages
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.translation.v3beta1.SupportedLanguages;

                    /**
                     * Verifies a SupportedLanguages message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SupportedLanguages message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SupportedLanguages
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.translation.v3beta1.SupportedLanguages;

                    /**
                     * Creates a plain object from a SupportedLanguages message. Also converts values to other types if specified.
                     * @param message SupportedLanguages
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.translation.v3beta1.SupportedLanguages, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SupportedLanguages to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SupportedLanguage. */
                interface ISupportedLanguage {

                    /** SupportedLanguage languageCode */
                    languageCode?: (string|null);

                    /** SupportedLanguage displayName */
                    displayName?: (string|null);

                    /** SupportedLanguage supportSource */
                    supportSource?: (boolean|null);

                    /** SupportedLanguage supportTarget */
                    supportTarget?: (boolean|null);
                }

                /** Represents a SupportedLanguage. */
                class SupportedLanguage implements ISupportedLanguage {

                    /**
                     * Constructs a new SupportedLanguage.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.translation.v3beta1.ISupportedLanguage);

                    /** SupportedLanguage languageCode. */
                    public languageCode: string;

                    /** SupportedLanguage displayName. */
                    public displayName: string;

                    /** SupportedLanguage supportSource. */
                    public supportSource: boolean;

                    /** SupportedLanguage supportTarget. */
                    public supportTarget: boolean;

                    /**
                     * Creates a new SupportedLanguage instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SupportedLanguage instance
                     */
                    public static create(properties?: google.cloud.translation.v3beta1.ISupportedLanguage): google.cloud.translation.v3beta1.SupportedLanguage;

                    /**
                     * Encodes the specified SupportedLanguage message. Does not implicitly {@link google.cloud.translation.v3beta1.SupportedLanguage.verify|verify} messages.
                     * @param message SupportedLanguage message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.translation.v3beta1.ISupportedLanguage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SupportedLanguage message, length delimited. Does not implicitly {@link google.cloud.translation.v3beta1.SupportedLanguage.verify|verify} messages.
                     * @param message SupportedLanguage message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.translation.v3beta1.ISupportedLanguage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SupportedLanguage message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SupportedLanguage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.translation.v3beta1.SupportedLanguage;

                    /**
                     * Decodes a SupportedLanguage message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SupportedLanguage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.translation.v3beta1.SupportedLanguage;

                    /**
                     * Verifies a SupportedLanguage message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SupportedLanguage message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SupportedLanguage
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.translation.v3beta1.SupportedLanguage;

                    /**
                     * Creates a plain object from a SupportedLanguage message. Also converts values to other types if specified.
                     * @param message SupportedLanguage
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.translation.v3beta1.SupportedLanguage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SupportedLanguage to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GcsSource. */
                interface IGcsSource {

                    /** GcsSource inputUri */
                    inputUri?: (string|null);
                }

                /** Represents a GcsSource. */
                class GcsSource implements IGcsSource {

                    /**
                     * Constructs a new GcsSource.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.translation.v3beta1.IGcsSource);

                    /** GcsSource inputUri. */
                    public inputUri: string;

                    /**
                     * Creates a new GcsSource instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GcsSource instance
                     */
                    public static create(properties?: google.cloud.translation.v3beta1.IGcsSource): google.cloud.translation.v3beta1.GcsSource;

                    /**
                     * Encodes the specified GcsSource message. Does not implicitly {@link google.cloud.translation.v3beta1.GcsSource.verify|verify} messages.
                     * @param message GcsSource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.translation.v3beta1.IGcsSource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GcsSource message, length delimited. Does not implicitly {@link google.cloud.translation.v3beta1.GcsSource.verify|verify} messages.
                     * @param message GcsSource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.translation.v3beta1.IGcsSource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GcsSource message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GcsSource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.translation.v3beta1.GcsSource;

                    /**
                     * Decodes a GcsSource message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GcsSource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.translation.v3beta1.GcsSource;

                    /**
                     * Verifies a GcsSource message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GcsSource message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GcsSource
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.translation.v3beta1.GcsSource;

                    /**
                     * Creates a plain object from a GcsSource message. Also converts values to other types if specified.
                     * @param message GcsSource
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.translation.v3beta1.GcsSource, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GcsSource to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an InputConfig. */
                interface IInputConfig {

                    /** InputConfig mimeType */
                    mimeType?: (string|null);

                    /** InputConfig gcsSource */
                    gcsSource?: (google.cloud.translation.v3beta1.IGcsSource|null);
                }

                /** Represents an InputConfig. */
                class InputConfig implements IInputConfig {

                    /**
                     * Constructs a new InputConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.translation.v3beta1.IInputConfig);

                    /** InputConfig mimeType. */
                    public mimeType: string;

                    /** InputConfig gcsSource. */
                    public gcsSource?: (google.cloud.translation.v3beta1.IGcsSource|null);

                    /** InputConfig source. */
                    public source?: "gcsSource";

                    /**
                     * Creates a new InputConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns InputConfig instance
                     */
                    public static create(properties?: google.cloud.translation.v3beta1.IInputConfig): google.cloud.translation.v3beta1.InputConfig;

                    /**
                     * Encodes the specified InputConfig message. Does not implicitly {@link google.cloud.translation.v3beta1.InputConfig.verify|verify} messages.
                     * @param message InputConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.translation.v3beta1.IInputConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified InputConfig message, length delimited. Does not implicitly {@link google.cloud.translation.v3beta1.InputConfig.verify|verify} messages.
                     * @param message InputConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.translation.v3beta1.IInputConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an InputConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns InputConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.translation.v3beta1.InputConfig;

                    /**
                     * Decodes an InputConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns InputConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.translation.v3beta1.InputConfig;

                    /**
                     * Verifies an InputConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an InputConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns InputConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.translation.v3beta1.InputConfig;

                    /**
                     * Creates a plain object from an InputConfig message. Also converts values to other types if specified.
                     * @param message InputConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.translation.v3beta1.InputConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this InputConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GcsDestination. */
                interface IGcsDestination {

                    /** GcsDestination outputUriPrefix */
                    outputUriPrefix?: (string|null);
                }

                /** Represents a GcsDestination. */
                class GcsDestination implements IGcsDestination {

                    /**
                     * Constructs a new GcsDestination.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.translation.v3beta1.IGcsDestination);

                    /** GcsDestination outputUriPrefix. */
                    public outputUriPrefix: string;

                    /**
                     * Creates a new GcsDestination instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GcsDestination instance
                     */
                    public static create(properties?: google.cloud.translation.v3beta1.IGcsDestination): google.cloud.translation.v3beta1.GcsDestination;

                    /**
                     * Encodes the specified GcsDestination message. Does not implicitly {@link google.cloud.translation.v3beta1.GcsDestination.verify|verify} messages.
                     * @param message GcsDestination message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.translation.v3beta1.IGcsDestination, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GcsDestination message, length delimited. Does not implicitly {@link google.cloud.translation.v3beta1.GcsDestination.verify|verify} messages.
                     * @param message GcsDestination message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.translation.v3beta1.IGcsDestination, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GcsDestination message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GcsDestination
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.translation.v3beta1.GcsDestination;

                    /**
                     * Decodes a GcsDestination message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GcsDestination
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.translation.v3beta1.GcsDestination;

                    /**
                     * Verifies a GcsDestination message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GcsDestination message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GcsDestination
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.translation.v3beta1.GcsDestination;

                    /**
                     * Creates a plain object from a GcsDestination message. Also converts values to other types if specified.
                     * @param message GcsDestination
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.translation.v3beta1.GcsDestination, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GcsDestination to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an OutputConfig. */
                interface IOutputConfig {

                    /** OutputConfig gcsDestination */
                    gcsDestination?: (google.cloud.translation.v3beta1.IGcsDestination|null);
                }

                /** Represents an OutputConfig. */
                class OutputConfig implements IOutputConfig {

                    /**
                     * Constructs a new OutputConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.translation.v3beta1.IOutputConfig);

                    /** OutputConfig gcsDestination. */
                    public gcsDestination?: (google.cloud.translation.v3beta1.IGcsDestination|null);

                    /** OutputConfig destination. */
                    public destination?: "gcsDestination";

                    /**
                     * Creates a new OutputConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OutputConfig instance
                     */
                    public static create(properties?: google.cloud.translation.v3beta1.IOutputConfig): google.cloud.translation.v3beta1.OutputConfig;

                    /**
                     * Encodes the specified OutputConfig message. Does not implicitly {@link google.cloud.translation.v3beta1.OutputConfig.verify|verify} messages.
                     * @param message OutputConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.translation.v3beta1.IOutputConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OutputConfig message, length delimited. Does not implicitly {@link google.cloud.translation.v3beta1.OutputConfig.verify|verify} messages.
                     * @param message OutputConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.translation.v3beta1.IOutputConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OutputConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OutputConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.translation.v3beta1.OutputConfig;

                    /**
                     * Decodes an OutputConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OutputConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.translation.v3beta1.OutputConfig;

                    /**
                     * Verifies an OutputConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an OutputConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns OutputConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.translation.v3beta1.OutputConfig;

                    /**
                     * Creates a plain object from an OutputConfig message. Also converts values to other types if specified.
                     * @param message OutputConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.translation.v3beta1.OutputConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OutputConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DocumentInputConfig. */
                interface IDocumentInputConfig {

                    /** DocumentInputConfig content */
                    content?: (Uint8Array|string|null);

                    /** DocumentInputConfig gcsSource */
                    gcsSource?: (google.cloud.translation.v3beta1.IGcsSource|null);

                    /** DocumentInputConfig mimeType */
                    mimeType?: (string|null);
                }

                /** Represents a DocumentInputConfig. */
                class DocumentInputConfig implements IDocumentInputConfig {

                    /**
                     * Constructs a new DocumentInputConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.translation.v3beta1.IDocumentInputConfig);

                    /** DocumentInputConfig content. */
                    public content?: (Uint8Array|string|null);

                    /** DocumentInputConfig gcsSource. */
                    public gcsSource?: (google.cloud.translation.v3beta1.IGcsSource|null);

                    /** DocumentInputConfig mimeType. */
                    public mimeType: string;

                    /** DocumentInputConfig source. */
                    public source?: ("content"|"gcsSource");

                    /**
                     * Creates a new DocumentInputConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DocumentInputConfig instance
                     */
                    public static create(properties?: google.cloud.translation.v3beta1.IDocumentInputConfig): google.cloud.translation.v3beta1.DocumentInputConfig;

                    /**
                     * Encodes the specified DocumentInputConfig message. Does not implicitly {@link google.cloud.translation.v3beta1.DocumentInputConfig.verify|verify} messages.
                     * @param message DocumentInputConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.translation.v3beta1.IDocumentInputConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DocumentInputConfig message, length delimited. Does not implicitly {@link google.cloud.translation.v3beta1.DocumentInputConfig.verify|verify} messages.
                     * @param message DocumentInputConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.translation.v3beta1.IDocumentInputConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DocumentInputConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DocumentInputConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.translation.v3beta1.DocumentInputConfig;

                    /**
                     * Decodes a DocumentInputConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DocumentInputConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.translation.v3beta1.DocumentInputConfig;

                    /**
                     * Verifies a DocumentInputConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DocumentInputConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DocumentInputConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.translation.v3beta1.DocumentInputConfig;

                    /**
                     * Creates a plain object from a DocumentInputConfig message. Also converts values to other types if specified.
                     * @param message DocumentInputConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.translation.v3beta1.DocumentInputConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DocumentInputConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DocumentOutputConfig. */
                interface IDocumentOutputConfig {

                    /** DocumentOutputConfig gcsDestination */
                    gcsDestination?: (google.cloud.translation.v3beta1.IGcsDestination|null);

                    /** DocumentOutputConfig mimeType */
                    mimeType?: (string|null);
                }

                /** Represents a DocumentOutputConfig. */
                class DocumentOutputConfig implements IDocumentOutputConfig {

                    /**
                     * Constructs a new DocumentOutputConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.translation.v3beta1.IDocumentOutputConfig);

                    /** DocumentOutputConfig gcsDestination. */
                    public gcsDestination?: (google.cloud.translation.v3beta1.IGcsDestination|null);

                    /** DocumentOutputConfig mimeType. */
                    public mimeType: string;

                    /** DocumentOutputConfig destination. */
                    public destination?: "gcsDestination";

                    /**
                     * Creates a new DocumentOutputConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DocumentOutputConfig instance
                     */
                    public static create(properties?: google.cloud.translation.v3beta1.IDocumentOutputConfig): google.cloud.translation.v3beta1.DocumentOutputConfig;

                    /**
                     * Encodes the specified DocumentOutputConfig message. Does not implicitly {@link google.cloud.translation.v3beta1.DocumentOutputConfig.verify|verify} messages.
                     * @param message DocumentOutputConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.translation.v3beta1.IDocumentOutputConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DocumentOutputConfig message, length delimited. Does not implicitly {@link google.cloud.translation.v3beta1.DocumentOutputConfig.verify|verify} messages.
                     * @param message DocumentOutputConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.translation.v3beta1.IDocumentOutputConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DocumentOutputConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DocumentOutputConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.translation.v3beta1.DocumentOutputConfig;

                    /**
                     * Decodes a DocumentOutputConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DocumentOutputConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.translation.v3beta1.DocumentOutputConfig;

                    /**
                     * Verifies a DocumentOutputConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DocumentOutputConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DocumentOutputConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.translation.v3beta1.DocumentOutputConfig;

                    /**
                     * Creates a plain object from a DocumentOutputConfig message. Also converts values to other types if specified.
                     * @param message DocumentOutputConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.translation.v3beta1.DocumentOutputConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DocumentOutputConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a TranslateDocumentRequest. */
                interface ITranslateDocumentRequest {

                    /** TranslateDocumentRequest parent */
                    parent?: (string|null);

                    /** TranslateDocumentRequest sourceLanguageCode */
                    sourceLanguageCode?: (string|null);

                    /** TranslateDocumentRequest targetLanguageCode */
                    targetLanguageCode?: (string|null);

                    /** TranslateDocumentRequest documentInputConfig */
                    documentInputConfig?: (google.cloud.translation.v3beta1.IDocumentInputConfig|null);

                    /** TranslateDocumentRequest documentOutputConfig */
                    documentOutputConfig?: (google.cloud.translation.v3beta1.IDocumentOutputConfig|null);

                    /** TranslateDocumentRequest model */
                    model?: (string|null);

                    /** TranslateDocumentRequest glossaryConfig */
                    glossaryConfig?: (google.cloud.translation.v3beta1.ITranslateTextGlossaryConfig|null);

                    /** TranslateDocumentRequest labels */
                    labels?: ({ [k: string]: string }|null);
                }

                /** Represents a TranslateDocumentRequest. */
                class TranslateDocumentRequest implements ITranslateDocumentRequest {

                    /**
                     * Constructs a new TranslateDocumentRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.translation.v3beta1.ITranslateDocumentRequest);

                    /** TranslateDocumentRequest parent. */
                    public parent: string;

                    /** TranslateDocumentRequest sourceLanguageCode. */
                    public sourceLanguageCode: string;

                    /** TranslateDocumentRequest targetLanguageCode. */
                    public targetLanguageCode: string;

                    /** TranslateDocumentRequest documentInputConfig. */
                    public documentInputConfig?: (google.cloud.translation.v3beta1.IDocumentInputConfig|null);

                    /** TranslateDocumentRequest documentOutputConfig. */
                    public documentOutputConfig?: (google.cloud.translation.v3beta1.IDocumentOutputConfig|null);

                    /** TranslateDocumentRequest model. */
                    public model: string;

                    /** TranslateDocumentRequest glossaryConfig. */
                    public glossaryConfig?: (google.cloud.translation.v3beta1.ITranslateTextGlossaryConfig|null);

                    /** TranslateDocumentRequest labels. */
                    public labels: { [k: string]: string };

                    /**
                     * Creates a new TranslateDocumentRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TranslateDocumentRequest instance
                     */
                    public static create(properties?: google.cloud.translation.v3beta1.ITranslateDocumentRequest): google.cloud.translation.v3beta1.TranslateDocumentRequest;

                    /**
                     * Encodes the specified TranslateDocumentRequest message. Does not implicitly {@link google.cloud.translation.v3beta1.TranslateDocumentRequest.verify|verify} messages.
                     * @param message TranslateDocumentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.translation.v3beta1.ITranslateDocumentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TranslateDocumentRequest message, length delimited. Does not implicitly {@link google.cloud.translation.v3beta1.TranslateDocumentRequest.verify|verify} messages.
                     * @param message TranslateDocumentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.translation.v3beta1.ITranslateDocumentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TranslateDocumentRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TranslateDocumentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.translation.v3beta1.TranslateDocumentRequest;

                    /**
                     * Decodes a TranslateDocumentRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TranslateDocumentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.translation.v3beta1.TranslateDocumentRequest;

                    /**
                     * Verifies a TranslateDocumentRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TranslateDocumentRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TranslateDocumentRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.translation.v3beta1.TranslateDocumentRequest;

                    /**
                     * Creates a plain object from a TranslateDocumentRequest message. Also converts values to other types if specified.
                     * @param message TranslateDocumentRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.translation.v3beta1.TranslateDocumentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TranslateDocumentRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DocumentTranslation. */
                interface IDocumentTranslation {

                    /** DocumentTranslation byteStreamOutputs */
                    byteStreamOutputs?: (Uint8Array[]|null);

                    /** DocumentTranslation mimeType */
                    mimeType?: (string|null);

                    /** DocumentTranslation detectedLanguageCode */
                    detectedLanguageCode?: (string|null);
                }

                /** Represents a DocumentTranslation. */
                class DocumentTranslation implements IDocumentTranslation {

                    /**
                     * Constructs a new DocumentTranslation.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.translation.v3beta1.IDocumentTranslation);

                    /** DocumentTranslation byteStreamOutputs. */
                    public byteStreamOutputs: Uint8Array[];

                    /** DocumentTranslation mimeType. */
                    public mimeType: string;

                    /** DocumentTranslation detectedLanguageCode. */
                    public detectedLanguageCode: string;

                    /**
                     * Creates a new DocumentTranslation instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DocumentTranslation instance
                     */
                    public static create(properties?: google.cloud.translation.v3beta1.IDocumentTranslation): google.cloud.translation.v3beta1.DocumentTranslation;

                    /**
                     * Encodes the specified DocumentTranslation message. Does not implicitly {@link google.cloud.translation.v3beta1.DocumentTranslation.verify|verify} messages.
                     * @param message DocumentTranslation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.translation.v3beta1.IDocumentTranslation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DocumentTranslation message, length delimited. Does not implicitly {@link google.cloud.translation.v3beta1.DocumentTranslation.verify|verify} messages.
                     * @param message DocumentTranslation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.translation.v3beta1.IDocumentTranslation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DocumentTranslation message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DocumentTranslation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.translation.v3beta1.DocumentTranslation;

                    /**
                     * Decodes a DocumentTranslation message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DocumentTranslation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.translation.v3beta1.DocumentTranslation;

                    /**
                     * Verifies a DocumentTranslation message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DocumentTranslation message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DocumentTranslation
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.translation.v3beta1.DocumentTranslation;

                    /**
                     * Creates a plain object from a DocumentTranslation message. Also converts values to other types if specified.
                     * @param message DocumentTranslation
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.translation.v3beta1.DocumentTranslation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DocumentTranslation to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a TranslateDocumentResponse. */
                interface ITranslateDocumentResponse {

                    /** TranslateDocumentResponse documentTranslation */
                    documentTranslation?: (google.cloud.translation.v3beta1.IDocumentTranslation|null);

                    /** TranslateDocumentResponse glossaryDocumentTranslation */
                    glossaryDocumentTranslation?: (google.cloud.translation.v3beta1.IDocumentTranslation|null);

                    /** TranslateDocumentResponse model */
                    model?: (string|null);

                    /** TranslateDocumentResponse glossaryConfig */
                    glossaryConfig?: (google.cloud.translation.v3beta1.ITranslateTextGlossaryConfig|null);
                }

                /** Represents a TranslateDocumentResponse. */
                class TranslateDocumentResponse implements ITranslateDocumentResponse {

                    /**
                     * Constructs a new TranslateDocumentResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.translation.v3beta1.ITranslateDocumentResponse);

                    /** TranslateDocumentResponse documentTranslation. */
                    public documentTranslation?: (google.cloud.translation.v3beta1.IDocumentTranslation|null);

                    /** TranslateDocumentResponse glossaryDocumentTranslation. */
                    public glossaryDocumentTranslation?: (google.cloud.translation.v3beta1.IDocumentTranslation|null);

                    /** TranslateDocumentResponse model. */
                    public model: string;

                    /** TranslateDocumentResponse glossaryConfig. */
                    public glossaryConfig?: (google.cloud.translation.v3beta1.ITranslateTextGlossaryConfig|null);

                    /**
                     * Creates a new TranslateDocumentResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TranslateDocumentResponse instance
                     */
                    public static create(properties?: google.cloud.translation.v3beta1.ITranslateDocumentResponse): google.cloud.translation.v3beta1.TranslateDocumentResponse;

                    /**
                     * Encodes the specified TranslateDocumentResponse message. Does not implicitly {@link google.cloud.translation.v3beta1.TranslateDocumentResponse.verify|verify} messages.
                     * @param message TranslateDocumentResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.translation.v3beta1.ITranslateDocumentResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TranslateDocumentResponse message, length delimited. Does not implicitly {@link google.cloud.translation.v3beta1.TranslateDocumentResponse.verify|verify} messages.
                     * @param message TranslateDocumentResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.translation.v3beta1.ITranslateDocumentResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TranslateDocumentResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TranslateDocumentResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.translation.v3beta1.TranslateDocumentResponse;

                    /**
                     * Decodes a TranslateDocumentResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TranslateDocumentResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.translation.v3beta1.TranslateDocumentResponse;

                    /**
                     * Verifies a TranslateDocumentResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TranslateDocumentResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TranslateDocumentResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.translation.v3beta1.TranslateDocumentResponse;

                    /**
                     * Creates a plain object from a TranslateDocumentResponse message. Also converts values to other types if specified.
                     * @param message TranslateDocumentResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.translation.v3beta1.TranslateDocumentResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TranslateDocumentResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a BatchTranslateTextRequest. */
                interface IBatchTranslateTextRequest {

                    /** BatchTranslateTextRequest parent */
                    parent?: (string|null);

                    /** BatchTranslateTextRequest sourceLanguageCode */
                    sourceLanguageCode?: (string|null);

                    /** BatchTranslateTextRequest targetLanguageCodes */
                    targetLanguageCodes?: (string[]|null);

                    /** BatchTranslateTextRequest models */
                    models?: ({ [k: string]: string }|null);

                    /** BatchTranslateTextRequest inputConfigs */
                    inputConfigs?: (google.cloud.translation.v3beta1.IInputConfig[]|null);

                    /** BatchTranslateTextRequest outputConfig */
                    outputConfig?: (google.cloud.translation.v3beta1.IOutputConfig|null);

                    /** BatchTranslateTextRequest glossaries */
                    glossaries?: ({ [k: string]: google.cloud.translation.v3beta1.ITranslateTextGlossaryConfig }|null);

                    /** BatchTranslateTextRequest labels */
                    labels?: ({ [k: string]: string }|null);
                }

                /** Represents a BatchTranslateTextRequest. */
                class BatchTranslateTextRequest implements IBatchTranslateTextRequest {

                    /**
                     * Constructs a new BatchTranslateTextRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.translation.v3beta1.IBatchTranslateTextRequest);

                    /** BatchTranslateTextRequest parent. */
                    public parent: string;

                    /** BatchTranslateTextRequest sourceLanguageCode. */
                    public sourceLanguageCode: string;

                    /** BatchTranslateTextRequest targetLanguageCodes. */
                    public targetLanguageCodes: string[];

                    /** BatchTranslateTextRequest models. */
                    public models: { [k: string]: string };

                    /** BatchTranslateTextRequest inputConfigs. */
                    public inputConfigs: google.cloud.translation.v3beta1.IInputConfig[];

                    /** BatchTranslateTextRequest outputConfig. */
                    public outputConfig?: (google.cloud.translation.v3beta1.IOutputConfig|null);

                    /** BatchTranslateTextRequest glossaries. */
                    public glossaries: { [k: string]: google.cloud.translation.v3beta1.ITranslateTextGlossaryConfig };

                    /** BatchTranslateTextRequest labels. */
                    public labels: { [k: string]: string };

                    /**
                     * Creates a new BatchTranslateTextRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BatchTranslateTextRequest instance
                     */
                    public static create(properties?: google.cloud.translation.v3beta1.IBatchTranslateTextRequest): google.cloud.translation.v3beta1.BatchTranslateTextRequest;

                    /**
                     * Encodes the specified BatchTranslateTextRequest message. Does not implicitly {@link google.cloud.translation.v3beta1.BatchTranslateTextRequest.verify|verify} messages.
                     * @param message BatchTranslateTextRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.translation.v3beta1.IBatchTranslateTextRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BatchTranslateTextRequest message, length delimited. Does not implicitly {@link google.cloud.translation.v3beta1.BatchTranslateTextRequest.verify|verify} messages.
                     * @param message BatchTranslateTextRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.translation.v3beta1.IBatchTranslateTextRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BatchTranslateTextRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BatchTranslateTextRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.translation.v3beta1.BatchTranslateTextRequest;

                    /**
                     * Decodes a BatchTranslateTextRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BatchTranslateTextRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.translation.v3beta1.BatchTranslateTextRequest;

                    /**
                     * Verifies a BatchTranslateTextRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BatchTranslateTextRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BatchTranslateTextRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.translation.v3beta1.BatchTranslateTextRequest;

                    /**
                     * Creates a plain object from a BatchTranslateTextRequest message. Also converts values to other types if specified.
                     * @param message BatchTranslateTextRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.translation.v3beta1.BatchTranslateTextRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BatchTranslateTextRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a BatchTranslateMetadata. */
                interface IBatchTranslateMetadata {

                    /** BatchTranslateMetadata state */
                    state?: (google.cloud.translation.v3beta1.BatchTranslateMetadata.State|keyof typeof google.cloud.translation.v3beta1.BatchTranslateMetadata.State|null);

                    /** BatchTranslateMetadata translatedCharacters */
                    translatedCharacters?: (number|Long|string|null);

                    /** BatchTranslateMetadata failedCharacters */
                    failedCharacters?: (number|Long|string|null);

                    /** BatchTranslateMetadata totalCharacters */
                    totalCharacters?: (number|Long|string|null);

                    /** BatchTranslateMetadata submitTime */
                    submitTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a BatchTranslateMetadata. */
                class BatchTranslateMetadata implements IBatchTranslateMetadata {

                    /**
                     * Constructs a new BatchTranslateMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.translation.v3beta1.IBatchTranslateMetadata);

                    /** BatchTranslateMetadata state. */
                    public state: (google.cloud.translation.v3beta1.BatchTranslateMetadata.State|keyof typeof google.cloud.translation.v3beta1.BatchTranslateMetadata.State);

                    /** BatchTranslateMetadata translatedCharacters. */
                    public translatedCharacters: (number|Long|string);

                    /** BatchTranslateMetadata failedCharacters. */
                    public failedCharacters: (number|Long|string);

                    /** BatchTranslateMetadata totalCharacters. */
                    public totalCharacters: (number|Long|string);

                    /** BatchTranslateMetadata submitTime. */
                    public submitTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new BatchTranslateMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BatchTranslateMetadata instance
                     */
                    public static create(properties?: google.cloud.translation.v3beta1.IBatchTranslateMetadata): google.cloud.translation.v3beta1.BatchTranslateMetadata;

                    /**
                     * Encodes the specified BatchTranslateMetadata message. Does not implicitly {@link google.cloud.translation.v3beta1.BatchTranslateMetadata.verify|verify} messages.
                     * @param message BatchTranslateMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.translation.v3beta1.IBatchTranslateMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BatchTranslateMetadata message, length delimited. Does not implicitly {@link google.cloud.translation.v3beta1.BatchTranslateMetadata.verify|verify} messages.
                     * @param message BatchTranslateMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.translation.v3beta1.IBatchTranslateMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BatchTranslateMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BatchTranslateMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.translation.v3beta1.BatchTranslateMetadata;

                    /**
                     * Decodes a BatchTranslateMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BatchTranslateMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.translation.v3beta1.BatchTranslateMetadata;

                    /**
                     * Verifies a BatchTranslateMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BatchTranslateMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BatchTranslateMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.translation.v3beta1.BatchTranslateMetadata;

                    /**
                     * Creates a plain object from a BatchTranslateMetadata message. Also converts values to other types if specified.
                     * @param message BatchTranslateMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.translation.v3beta1.BatchTranslateMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BatchTranslateMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace BatchTranslateMetadata {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        RUNNING = 1,
                        SUCCEEDED = 2,
                        FAILED = 3,
                        CANCELLING = 4,
                        CANCELLED = 5
                    }
                }

                /** Properties of a BatchTranslateResponse. */
                interface IBatchTranslateResponse {

                    /** BatchTranslateResponse totalCharacters */
                    totalCharacters?: (number|Long|string|null);

                    /** BatchTranslateResponse translatedCharacters */
                    translatedCharacters?: (number|Long|string|null);

                    /** BatchTranslateResponse failedCharacters */
                    failedCharacters?: (number|Long|string|null);

                    /** BatchTranslateResponse submitTime */
                    submitTime?: (google.protobuf.ITimestamp|null);

                    /** BatchTranslateResponse endTime */
                    endTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a BatchTranslateResponse. */
                class BatchTranslateResponse implements IBatchTranslateResponse {

                    /**
                     * Constructs a new BatchTranslateResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.translation.v3beta1.IBatchTranslateResponse);

                    /** BatchTranslateResponse totalCharacters. */
                    public totalCharacters: (number|Long|string);

                    /** BatchTranslateResponse translatedCharacters. */
                    public translatedCharacters: (number|Long|string);

                    /** BatchTranslateResponse failedCharacters. */
                    public failedCharacters: (number|Long|string);

                    /** BatchTranslateResponse submitTime. */
                    public submitTime?: (google.protobuf.ITimestamp|null);

                    /** BatchTranslateResponse endTime. */
                    public endTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new BatchTranslateResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BatchTranslateResponse instance
                     */
                    public static create(properties?: google.cloud.translation.v3beta1.IBatchTranslateResponse): google.cloud.translation.v3beta1.BatchTranslateResponse;

                    /**
                     * Encodes the specified BatchTranslateResponse message. Does not implicitly {@link google.cloud.translation.v3beta1.BatchTranslateResponse.verify|verify} messages.
                     * @param message BatchTranslateResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.translation.v3beta1.IBatchTranslateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BatchTranslateResponse message, length delimited. Does not implicitly {@link google.cloud.translation.v3beta1.BatchTranslateResponse.verify|verify} messages.
                     * @param message BatchTranslateResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.translation.v3beta1.IBatchTranslateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BatchTranslateResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BatchTranslateResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.translation.v3beta1.BatchTranslateResponse;

                    /**
                     * Decodes a BatchTranslateResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BatchTranslateResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.translation.v3beta1.BatchTranslateResponse;

                    /**
                     * Verifies a BatchTranslateResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BatchTranslateResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BatchTranslateResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.translation.v3beta1.BatchTranslateResponse;

                    /**
                     * Creates a plain object from a BatchTranslateResponse message. Also converts values to other types if specified.
                     * @param message BatchTranslateResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.translation.v3beta1.BatchTranslateResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BatchTranslateResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GlossaryInputConfig. */
                interface IGlossaryInputConfig {

                    /** GlossaryInputConfig gcsSource */
                    gcsSource?: (google.cloud.translation.v3beta1.IGcsSource|null);
                }

                /** Represents a GlossaryInputConfig. */
                class GlossaryInputConfig implements IGlossaryInputConfig {

                    /**
                     * Constructs a new GlossaryInputConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.translation.v3beta1.IGlossaryInputConfig);

                    /** GlossaryInputConfig gcsSource. */
                    public gcsSource?: (google.cloud.translation.v3beta1.IGcsSource|null);

                    /** GlossaryInputConfig source. */
                    public source?: "gcsSource";

                    /**
                     * Creates a new GlossaryInputConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GlossaryInputConfig instance
                     */
                    public static create(properties?: google.cloud.translation.v3beta1.IGlossaryInputConfig): google.cloud.translation.v3beta1.GlossaryInputConfig;

                    /**
                     * Encodes the specified GlossaryInputConfig message. Does not implicitly {@link google.cloud.translation.v3beta1.GlossaryInputConfig.verify|verify} messages.
                     * @param message GlossaryInputConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.translation.v3beta1.IGlossaryInputConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GlossaryInputConfig message, length delimited. Does not implicitly {@link google.cloud.translation.v3beta1.GlossaryInputConfig.verify|verify} messages.
                     * @param message GlossaryInputConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.translation.v3beta1.IGlossaryInputConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GlossaryInputConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GlossaryInputConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.translation.v3beta1.GlossaryInputConfig;

                    /**
                     * Decodes a GlossaryInputConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GlossaryInputConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.translation.v3beta1.GlossaryInputConfig;

                    /**
                     * Verifies a GlossaryInputConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GlossaryInputConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GlossaryInputConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.translation.v3beta1.GlossaryInputConfig;

                    /**
                     * Creates a plain object from a GlossaryInputConfig message. Also converts values to other types if specified.
                     * @param message GlossaryInputConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.translation.v3beta1.GlossaryInputConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GlossaryInputConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Glossary. */
                interface IGlossary {

                    /** Glossary name */
                    name?: (string|null);

                    /** Glossary languagePair */
                    languagePair?: (google.cloud.translation.v3beta1.Glossary.ILanguageCodePair|null);

                    /** Glossary languageCodesSet */
                    languageCodesSet?: (google.cloud.translation.v3beta1.Glossary.ILanguageCodesSet|null);

                    /** Glossary inputConfig */
                    inputConfig?: (google.cloud.translation.v3beta1.IGlossaryInputConfig|null);

                    /** Glossary entryCount */
                    entryCount?: (number|null);

                    /** Glossary submitTime */
                    submitTime?: (google.protobuf.ITimestamp|null);

                    /** Glossary endTime */
                    endTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a Glossary. */
                class Glossary implements IGlossary {

                    /**
                     * Constructs a new Glossary.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.translation.v3beta1.IGlossary);

                    /** Glossary name. */
                    public name: string;

                    /** Glossary languagePair. */
                    public languagePair?: (google.cloud.translation.v3beta1.Glossary.ILanguageCodePair|null);

                    /** Glossary languageCodesSet. */
                    public languageCodesSet?: (google.cloud.translation.v3beta1.Glossary.ILanguageCodesSet|null);

                    /** Glossary inputConfig. */
                    public inputConfig?: (google.cloud.translation.v3beta1.IGlossaryInputConfig|null);

                    /** Glossary entryCount. */
                    public entryCount: number;

                    /** Glossary submitTime. */
                    public submitTime?: (google.protobuf.ITimestamp|null);

                    /** Glossary endTime. */
                    public endTime?: (google.protobuf.ITimestamp|null);

                    /** Glossary languages. */
                    public languages?: ("languagePair"|"languageCodesSet");

                    /**
                     * Creates a new Glossary instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Glossary instance
                     */
                    public static create(properties?: google.cloud.translation.v3beta1.IGlossary): google.cloud.translation.v3beta1.Glossary;

                    /**
                     * Encodes the specified Glossary message. Does not implicitly {@link google.cloud.translation.v3beta1.Glossary.verify|verify} messages.
                     * @param message Glossary message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.translation.v3beta1.IGlossary, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Glossary message, length delimited. Does not implicitly {@link google.cloud.translation.v3beta1.Glossary.verify|verify} messages.
                     * @param message Glossary message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.translation.v3beta1.IGlossary, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Glossary message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Glossary
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.translation.v3beta1.Glossary;

                    /**
                     * Decodes a Glossary message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Glossary
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.translation.v3beta1.Glossary;

                    /**
                     * Verifies a Glossary message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Glossary message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Glossary
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.translation.v3beta1.Glossary;

                    /**
                     * Creates a plain object from a Glossary message. Also converts values to other types if specified.
                     * @param message Glossary
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.translation.v3beta1.Glossary, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Glossary to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Glossary {

                    /** Properties of a LanguageCodePair. */
                    interface ILanguageCodePair {

                        /** LanguageCodePair sourceLanguageCode */
                        sourceLanguageCode?: (string|null);

                        /** LanguageCodePair targetLanguageCode */
                        targetLanguageCode?: (string|null);
                    }

                    /** Represents a LanguageCodePair. */
                    class LanguageCodePair implements ILanguageCodePair {

                        /**
                         * Constructs a new LanguageCodePair.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.translation.v3beta1.Glossary.ILanguageCodePair);

                        /** LanguageCodePair sourceLanguageCode. */
                        public sourceLanguageCode: string;

                        /** LanguageCodePair targetLanguageCode. */
                        public targetLanguageCode: string;

                        /**
                         * Creates a new LanguageCodePair instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns LanguageCodePair instance
                         */
                        public static create(properties?: google.cloud.translation.v3beta1.Glossary.ILanguageCodePair): google.cloud.translation.v3beta1.Glossary.LanguageCodePair;

                        /**
                         * Encodes the specified LanguageCodePair message. Does not implicitly {@link google.cloud.translation.v3beta1.Glossary.LanguageCodePair.verify|verify} messages.
                         * @param message LanguageCodePair message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.translation.v3beta1.Glossary.ILanguageCodePair, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified LanguageCodePair message, length delimited. Does not implicitly {@link google.cloud.translation.v3beta1.Glossary.LanguageCodePair.verify|verify} messages.
                         * @param message LanguageCodePair message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.translation.v3beta1.Glossary.ILanguageCodePair, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a LanguageCodePair message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns LanguageCodePair
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.translation.v3beta1.Glossary.LanguageCodePair;

                        /**
                         * Decodes a LanguageCodePair message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns LanguageCodePair
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.translation.v3beta1.Glossary.LanguageCodePair;

                        /**
                         * Verifies a LanguageCodePair message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a LanguageCodePair message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns LanguageCodePair
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.translation.v3beta1.Glossary.LanguageCodePair;

                        /**
                         * Creates a plain object from a LanguageCodePair message. Also converts values to other types if specified.
                         * @param message LanguageCodePair
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.translation.v3beta1.Glossary.LanguageCodePair, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this LanguageCodePair to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a LanguageCodesSet. */
                    interface ILanguageCodesSet {

                        /** LanguageCodesSet languageCodes */
                        languageCodes?: (string[]|null);
                    }

                    /** Represents a LanguageCodesSet. */
                    class LanguageCodesSet implements ILanguageCodesSet {

                        /**
                         * Constructs a new LanguageCodesSet.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.translation.v3beta1.Glossary.ILanguageCodesSet);

                        /** LanguageCodesSet languageCodes. */
                        public languageCodes: string[];

                        /**
                         * Creates a new LanguageCodesSet instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns LanguageCodesSet instance
                         */
                        public static create(properties?: google.cloud.translation.v3beta1.Glossary.ILanguageCodesSet): google.cloud.translation.v3beta1.Glossary.LanguageCodesSet;

                        /**
                         * Encodes the specified LanguageCodesSet message. Does not implicitly {@link google.cloud.translation.v3beta1.Glossary.LanguageCodesSet.verify|verify} messages.
                         * @param message LanguageCodesSet message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.translation.v3beta1.Glossary.ILanguageCodesSet, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified LanguageCodesSet message, length delimited. Does not implicitly {@link google.cloud.translation.v3beta1.Glossary.LanguageCodesSet.verify|verify} messages.
                         * @param message LanguageCodesSet message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.translation.v3beta1.Glossary.ILanguageCodesSet, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a LanguageCodesSet message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns LanguageCodesSet
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.translation.v3beta1.Glossary.LanguageCodesSet;

                        /**
                         * Decodes a LanguageCodesSet message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns LanguageCodesSet
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.translation.v3beta1.Glossary.LanguageCodesSet;

                        /**
                         * Verifies a LanguageCodesSet message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a LanguageCodesSet message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns LanguageCodesSet
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.translation.v3beta1.Glossary.LanguageCodesSet;

                        /**
                         * Creates a plain object from a LanguageCodesSet message. Also converts values to other types if specified.
                         * @param message LanguageCodesSet
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.translation.v3beta1.Glossary.LanguageCodesSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this LanguageCodesSet to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Properties of a CreateGlossaryRequest. */
                interface ICreateGlossaryRequest {

                    /** CreateGlossaryRequest parent */
                    parent?: (string|null);

                    /** CreateGlossaryRequest glossary */
                    glossary?: (google.cloud.translation.v3beta1.IGlossary|null);
                }

                /** Represents a CreateGlossaryRequest. */
                class CreateGlossaryRequest implements ICreateGlossaryRequest {

                    /**
                     * Constructs a new CreateGlossaryRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.translation.v3beta1.ICreateGlossaryRequest);

                    /** CreateGlossaryRequest parent. */
                    public parent: string;

                    /** CreateGlossaryRequest glossary. */
                    public glossary?: (google.cloud.translation.v3beta1.IGlossary|null);

                    /**
                     * Creates a new CreateGlossaryRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateGlossaryRequest instance
                     */
                    public static create(properties?: google.cloud.translation.v3beta1.ICreateGlossaryRequest): google.cloud.translation.v3beta1.CreateGlossaryRequest;

                    /**
                     * Encodes the specified CreateGlossaryRequest message. Does not implicitly {@link google.cloud.translation.v3beta1.CreateGlossaryRequest.verify|verify} messages.
                     * @param message CreateGlossaryRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.translation.v3beta1.ICreateGlossaryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateGlossaryRequest message, length delimited. Does not implicitly {@link google.cloud.translation.v3beta1.CreateGlossaryRequest.verify|verify} messages.
                     * @param message CreateGlossaryRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.translation.v3beta1.ICreateGlossaryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateGlossaryRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateGlossaryRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.translation.v3beta1.CreateGlossaryRequest;

                    /**
                     * Decodes a CreateGlossaryRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateGlossaryRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.translation.v3beta1.CreateGlossaryRequest;

                    /**
                     * Verifies a CreateGlossaryRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateGlossaryRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateGlossaryRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.translation.v3beta1.CreateGlossaryRequest;

                    /**
                     * Creates a plain object from a CreateGlossaryRequest message. Also converts values to other types if specified.
                     * @param message CreateGlossaryRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.translation.v3beta1.CreateGlossaryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateGlossaryRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetGlossaryRequest. */
                interface IGetGlossaryRequest {

                    /** GetGlossaryRequest name */
                    name?: (string|null);
                }

                /** Represents a GetGlossaryRequest. */
                class GetGlossaryRequest implements IGetGlossaryRequest {

                    /**
                     * Constructs a new GetGlossaryRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.translation.v3beta1.IGetGlossaryRequest);

                    /** GetGlossaryRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetGlossaryRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetGlossaryRequest instance
                     */
                    public static create(properties?: google.cloud.translation.v3beta1.IGetGlossaryRequest): google.cloud.translation.v3beta1.GetGlossaryRequest;

                    /**
                     * Encodes the specified GetGlossaryRequest message. Does not implicitly {@link google.cloud.translation.v3beta1.GetGlossaryRequest.verify|verify} messages.
                     * @param message GetGlossaryRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.translation.v3beta1.IGetGlossaryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetGlossaryRequest message, length delimited. Does not implicitly {@link google.cloud.translation.v3beta1.GetGlossaryRequest.verify|verify} messages.
                     * @param message GetGlossaryRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.translation.v3beta1.IGetGlossaryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetGlossaryRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetGlossaryRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.translation.v3beta1.GetGlossaryRequest;

                    /**
                     * Decodes a GetGlossaryRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetGlossaryRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.translation.v3beta1.GetGlossaryRequest;

                    /**
                     * Verifies a GetGlossaryRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetGlossaryRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetGlossaryRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.translation.v3beta1.GetGlossaryRequest;

                    /**
                     * Creates a plain object from a GetGlossaryRequest message. Also converts values to other types if specified.
                     * @param message GetGlossaryRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.translation.v3beta1.GetGlossaryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetGlossaryRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteGlossaryRequest. */
                interface IDeleteGlossaryRequest {

                    /** DeleteGlossaryRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteGlossaryRequest. */
                class DeleteGlossaryRequest implements IDeleteGlossaryRequest {

                    /**
                     * Constructs a new DeleteGlossaryRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.translation.v3beta1.IDeleteGlossaryRequest);

                    /** DeleteGlossaryRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteGlossaryRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteGlossaryRequest instance
                     */
                    public static create(properties?: google.cloud.translation.v3beta1.IDeleteGlossaryRequest): google.cloud.translation.v3beta1.DeleteGlossaryRequest;

                    /**
                     * Encodes the specified DeleteGlossaryRequest message. Does not implicitly {@link google.cloud.translation.v3beta1.DeleteGlossaryRequest.verify|verify} messages.
                     * @param message DeleteGlossaryRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.translation.v3beta1.IDeleteGlossaryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteGlossaryRequest message, length delimited. Does not implicitly {@link google.cloud.translation.v3beta1.DeleteGlossaryRequest.verify|verify} messages.
                     * @param message DeleteGlossaryRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.translation.v3beta1.IDeleteGlossaryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteGlossaryRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteGlossaryRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.translation.v3beta1.DeleteGlossaryRequest;

                    /**
                     * Decodes a DeleteGlossaryRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteGlossaryRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.translation.v3beta1.DeleteGlossaryRequest;

                    /**
                     * Verifies a DeleteGlossaryRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteGlossaryRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteGlossaryRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.translation.v3beta1.DeleteGlossaryRequest;

                    /**
                     * Creates a plain object from a DeleteGlossaryRequest message. Also converts values to other types if specified.
                     * @param message DeleteGlossaryRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.translation.v3beta1.DeleteGlossaryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteGlossaryRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListGlossariesRequest. */
                interface IListGlossariesRequest {

                    /** ListGlossariesRequest parent */
                    parent?: (string|null);

                    /** ListGlossariesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListGlossariesRequest pageToken */
                    pageToken?: (string|null);

                    /** ListGlossariesRequest filter */
                    filter?: (string|null);
                }

                /** Represents a ListGlossariesRequest. */
                class ListGlossariesRequest implements IListGlossariesRequest {

                    /**
                     * Constructs a new ListGlossariesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.translation.v3beta1.IListGlossariesRequest);

                    /** ListGlossariesRequest parent. */
                    public parent: string;

                    /** ListGlossariesRequest pageSize. */
                    public pageSize: number;

                    /** ListGlossariesRequest pageToken. */
                    public pageToken: string;

                    /** ListGlossariesRequest filter. */
                    public filter: string;

                    /**
                     * Creates a new ListGlossariesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListGlossariesRequest instance
                     */
                    public static create(properties?: google.cloud.translation.v3beta1.IListGlossariesRequest): google.cloud.translation.v3beta1.ListGlossariesRequest;

                    /**
                     * Encodes the specified ListGlossariesRequest message. Does not implicitly {@link google.cloud.translation.v3beta1.ListGlossariesRequest.verify|verify} messages.
                     * @param message ListGlossariesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.translation.v3beta1.IListGlossariesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListGlossariesRequest message, length delimited. Does not implicitly {@link google.cloud.translation.v3beta1.ListGlossariesRequest.verify|verify} messages.
                     * @param message ListGlossariesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.translation.v3beta1.IListGlossariesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListGlossariesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListGlossariesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.translation.v3beta1.ListGlossariesRequest;

                    /**
                     * Decodes a ListGlossariesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListGlossariesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.translation.v3beta1.ListGlossariesRequest;

                    /**
                     * Verifies a ListGlossariesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListGlossariesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListGlossariesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.translation.v3beta1.ListGlossariesRequest;

                    /**
                     * Creates a plain object from a ListGlossariesRequest message. Also converts values to other types if specified.
                     * @param message ListGlossariesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.translation.v3beta1.ListGlossariesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListGlossariesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListGlossariesResponse. */
                interface IListGlossariesResponse {

                    /** ListGlossariesResponse glossaries */
                    glossaries?: (google.cloud.translation.v3beta1.IGlossary[]|null);

                    /** ListGlossariesResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListGlossariesResponse. */
                class ListGlossariesResponse implements IListGlossariesResponse {

                    /**
                     * Constructs a new ListGlossariesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.translation.v3beta1.IListGlossariesResponse);

                    /** ListGlossariesResponse glossaries. */
                    public glossaries: google.cloud.translation.v3beta1.IGlossary[];

                    /** ListGlossariesResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListGlossariesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListGlossariesResponse instance
                     */
                    public static create(properties?: google.cloud.translation.v3beta1.IListGlossariesResponse): google.cloud.translation.v3beta1.ListGlossariesResponse;

                    /**
                     * Encodes the specified ListGlossariesResponse message. Does not implicitly {@link google.cloud.translation.v3beta1.ListGlossariesResponse.verify|verify} messages.
                     * @param message ListGlossariesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.translation.v3beta1.IListGlossariesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListGlossariesResponse message, length delimited. Does not implicitly {@link google.cloud.translation.v3beta1.ListGlossariesResponse.verify|verify} messages.
                     * @param message ListGlossariesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.translation.v3beta1.IListGlossariesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListGlossariesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListGlossariesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.translation.v3beta1.ListGlossariesResponse;

                    /**
                     * Decodes a ListGlossariesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListGlossariesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.translation.v3beta1.ListGlossariesResponse;

                    /**
                     * Verifies a ListGlossariesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListGlossariesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListGlossariesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.translation.v3beta1.ListGlossariesResponse;

                    /**
                     * Creates a plain object from a ListGlossariesResponse message. Also converts values to other types if specified.
                     * @param message ListGlossariesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.translation.v3beta1.ListGlossariesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListGlossariesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateGlossaryMetadata. */
                interface ICreateGlossaryMetadata {

                    /** CreateGlossaryMetadata name */
                    name?: (string|null);

                    /** CreateGlossaryMetadata state */
                    state?: (google.cloud.translation.v3beta1.CreateGlossaryMetadata.State|keyof typeof google.cloud.translation.v3beta1.CreateGlossaryMetadata.State|null);

                    /** CreateGlossaryMetadata submitTime */
                    submitTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a CreateGlossaryMetadata. */
                class CreateGlossaryMetadata implements ICreateGlossaryMetadata {

                    /**
                     * Constructs a new CreateGlossaryMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.translation.v3beta1.ICreateGlossaryMetadata);

                    /** CreateGlossaryMetadata name. */
                    public name: string;

                    /** CreateGlossaryMetadata state. */
                    public state: (google.cloud.translation.v3beta1.CreateGlossaryMetadata.State|keyof typeof google.cloud.translation.v3beta1.CreateGlossaryMetadata.State);

                    /** CreateGlossaryMetadata submitTime. */
                    public submitTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new CreateGlossaryMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateGlossaryMetadata instance
                     */
                    public static create(properties?: google.cloud.translation.v3beta1.ICreateGlossaryMetadata): google.cloud.translation.v3beta1.CreateGlossaryMetadata;

                    /**
                     * Encodes the specified CreateGlossaryMetadata message. Does not implicitly {@link google.cloud.translation.v3beta1.CreateGlossaryMetadata.verify|verify} messages.
                     * @param message CreateGlossaryMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.translation.v3beta1.ICreateGlossaryMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateGlossaryMetadata message, length delimited. Does not implicitly {@link google.cloud.translation.v3beta1.CreateGlossaryMetadata.verify|verify} messages.
                     * @param message CreateGlossaryMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.translation.v3beta1.ICreateGlossaryMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateGlossaryMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateGlossaryMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.translation.v3beta1.CreateGlossaryMetadata;

                    /**
                     * Decodes a CreateGlossaryMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateGlossaryMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.translation.v3beta1.CreateGlossaryMetadata;

                    /**
                     * Verifies a CreateGlossaryMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateGlossaryMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateGlossaryMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.translation.v3beta1.CreateGlossaryMetadata;

                    /**
                     * Creates a plain object from a CreateGlossaryMetadata message. Also converts values to other types if specified.
                     * @param message CreateGlossaryMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.translation.v3beta1.CreateGlossaryMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateGlossaryMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace CreateGlossaryMetadata {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        RUNNING = 1,
                        SUCCEEDED = 2,
                        FAILED = 3,
                        CANCELLING = 4,
                        CANCELLED = 5
                    }
                }

                /** Properties of a DeleteGlossaryMetadata. */
                interface IDeleteGlossaryMetadata {

                    /** DeleteGlossaryMetadata name */
                    name?: (string|null);

                    /** DeleteGlossaryMetadata state */
                    state?: (google.cloud.translation.v3beta1.DeleteGlossaryMetadata.State|keyof typeof google.cloud.translation.v3beta1.DeleteGlossaryMetadata.State|null);

                    /** DeleteGlossaryMetadata submitTime */
                    submitTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a DeleteGlossaryMetadata. */
                class DeleteGlossaryMetadata implements IDeleteGlossaryMetadata {

                    /**
                     * Constructs a new DeleteGlossaryMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.translation.v3beta1.IDeleteGlossaryMetadata);

                    /** DeleteGlossaryMetadata name. */
                    public name: string;

                    /** DeleteGlossaryMetadata state. */
                    public state: (google.cloud.translation.v3beta1.DeleteGlossaryMetadata.State|keyof typeof google.cloud.translation.v3beta1.DeleteGlossaryMetadata.State);

                    /** DeleteGlossaryMetadata submitTime. */
                    public submitTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new DeleteGlossaryMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteGlossaryMetadata instance
                     */
                    public static create(properties?: google.cloud.translation.v3beta1.IDeleteGlossaryMetadata): google.cloud.translation.v3beta1.DeleteGlossaryMetadata;

                    /**
                     * Encodes the specified DeleteGlossaryMetadata message. Does not implicitly {@link google.cloud.translation.v3beta1.DeleteGlossaryMetadata.verify|verify} messages.
                     * @param message DeleteGlossaryMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.translation.v3beta1.IDeleteGlossaryMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteGlossaryMetadata message, length delimited. Does not implicitly {@link google.cloud.translation.v3beta1.DeleteGlossaryMetadata.verify|verify} messages.
                     * @param message DeleteGlossaryMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.translation.v3beta1.IDeleteGlossaryMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteGlossaryMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteGlossaryMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.translation.v3beta1.DeleteGlossaryMetadata;

                    /**
                     * Decodes a DeleteGlossaryMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteGlossaryMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.translation.v3beta1.DeleteGlossaryMetadata;

                    /**
                     * Verifies a DeleteGlossaryMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteGlossaryMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteGlossaryMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.translation.v3beta1.DeleteGlossaryMetadata;

                    /**
                     * Creates a plain object from a DeleteGlossaryMetadata message. Also converts values to other types if specified.
                     * @param message DeleteGlossaryMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.translation.v3beta1.DeleteGlossaryMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteGlossaryMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace DeleteGlossaryMetadata {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        RUNNING = 1,
                        SUCCEEDED = 2,
                        FAILED = 3,
                        CANCELLING = 4,
                        CANCELLED = 5
                    }
                }

                /** Properties of a DeleteGlossaryResponse. */
                interface IDeleteGlossaryResponse {

                    /** DeleteGlossaryResponse name */
                    name?: (string|null);

                    /** DeleteGlossaryResponse submitTime */
                    submitTime?: (google.protobuf.ITimestamp|null);

                    /** DeleteGlossaryResponse endTime */
                    endTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a DeleteGlossaryResponse. */
                class DeleteGlossaryResponse implements IDeleteGlossaryResponse {

                    /**
                     * Constructs a new DeleteGlossaryResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.translation.v3beta1.IDeleteGlossaryResponse);

                    /** DeleteGlossaryResponse name. */
                    public name: string;

                    /** DeleteGlossaryResponse submitTime. */
                    public submitTime?: (google.protobuf.ITimestamp|null);

                    /** DeleteGlossaryResponse endTime. */
                    public endTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new DeleteGlossaryResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteGlossaryResponse instance
                     */
                    public static create(properties?: google.cloud.translation.v3beta1.IDeleteGlossaryResponse): google.cloud.translation.v3beta1.DeleteGlossaryResponse;

                    /**
                     * Encodes the specified DeleteGlossaryResponse message. Does not implicitly {@link google.cloud.translation.v3beta1.DeleteGlossaryResponse.verify|verify} messages.
                     * @param message DeleteGlossaryResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.translation.v3beta1.IDeleteGlossaryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteGlossaryResponse message, length delimited. Does not implicitly {@link google.cloud.translation.v3beta1.DeleteGlossaryResponse.verify|verify} messages.
                     * @param message DeleteGlossaryResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.translation.v3beta1.IDeleteGlossaryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteGlossaryResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteGlossaryResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.translation.v3beta1.DeleteGlossaryResponse;

                    /**
                     * Decodes a DeleteGlossaryResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteGlossaryResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.translation.v3beta1.DeleteGlossaryResponse;

                    /**
                     * Verifies a DeleteGlossaryResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteGlossaryResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteGlossaryResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.translation.v3beta1.DeleteGlossaryResponse;

                    /**
                     * Creates a plain object from a DeleteGlossaryResponse message. Also converts values to other types if specified.
                     * @param message DeleteGlossaryResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.translation.v3beta1.DeleteGlossaryResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteGlossaryResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a BatchTranslateDocumentRequest. */
                interface IBatchTranslateDocumentRequest {

                    /** BatchTranslateDocumentRequest parent */
                    parent?: (string|null);

                    /** BatchTranslateDocumentRequest sourceLanguageCode */
                    sourceLanguageCode?: (string|null);

                    /** BatchTranslateDocumentRequest targetLanguageCodes */
                    targetLanguageCodes?: (string[]|null);

                    /** BatchTranslateDocumentRequest inputConfigs */
                    inputConfigs?: (google.cloud.translation.v3beta1.IBatchDocumentInputConfig[]|null);

                    /** BatchTranslateDocumentRequest outputConfig */
                    outputConfig?: (google.cloud.translation.v3beta1.IBatchDocumentOutputConfig|null);

                    /** BatchTranslateDocumentRequest models */
                    models?: ({ [k: string]: string }|null);

                    /** BatchTranslateDocumentRequest glossaries */
                    glossaries?: ({ [k: string]: google.cloud.translation.v3beta1.ITranslateTextGlossaryConfig }|null);

                    /** BatchTranslateDocumentRequest formatConversions */
                    formatConversions?: ({ [k: string]: string }|null);
                }

                /** Represents a BatchTranslateDocumentRequest. */
                class BatchTranslateDocumentRequest implements IBatchTranslateDocumentRequest {

                    /**
                     * Constructs a new BatchTranslateDocumentRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.translation.v3beta1.IBatchTranslateDocumentRequest);

                    /** BatchTranslateDocumentRequest parent. */
                    public parent: string;

                    /** BatchTranslateDocumentRequest sourceLanguageCode. */
                    public sourceLanguageCode: string;

                    /** BatchTranslateDocumentRequest targetLanguageCodes. */
                    public targetLanguageCodes: string[];

                    /** BatchTranslateDocumentRequest inputConfigs. */
                    public inputConfigs: google.cloud.translation.v3beta1.IBatchDocumentInputConfig[];

                    /** BatchTranslateDocumentRequest outputConfig. */
                    public outputConfig?: (google.cloud.translation.v3beta1.IBatchDocumentOutputConfig|null);

                    /** BatchTranslateDocumentRequest models. */
                    public models: { [k: string]: string };

                    /** BatchTranslateDocumentRequest glossaries. */
                    public glossaries: { [k: string]: google.cloud.translation.v3beta1.ITranslateTextGlossaryConfig };

                    /** BatchTranslateDocumentRequest formatConversions. */
                    public formatConversions: { [k: string]: string };

                    /**
                     * Creates a new BatchTranslateDocumentRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BatchTranslateDocumentRequest instance
                     */
                    public static create(properties?: google.cloud.translation.v3beta1.IBatchTranslateDocumentRequest): google.cloud.translation.v3beta1.BatchTranslateDocumentRequest;

                    /**
                     * Encodes the specified BatchTranslateDocumentRequest message. Does not implicitly {@link google.cloud.translation.v3beta1.BatchTranslateDocumentRequest.verify|verify} messages.
                     * @param message BatchTranslateDocumentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.translation.v3beta1.IBatchTranslateDocumentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BatchTranslateDocumentRequest message, length delimited. Does not implicitly {@link google.cloud.translation.v3beta1.BatchTranslateDocumentRequest.verify|verify} messages.
                     * @param message BatchTranslateDocumentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.translation.v3beta1.IBatchTranslateDocumentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BatchTranslateDocumentRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BatchTranslateDocumentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.translation.v3beta1.BatchTranslateDocumentRequest;

                    /**
                     * Decodes a BatchTranslateDocumentRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BatchTranslateDocumentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.translation.v3beta1.BatchTranslateDocumentRequest;

                    /**
                     * Verifies a BatchTranslateDocumentRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BatchTranslateDocumentRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BatchTranslateDocumentRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.translation.v3beta1.BatchTranslateDocumentRequest;

                    /**
                     * Creates a plain object from a BatchTranslateDocumentRequest message. Also converts values to other types if specified.
                     * @param message BatchTranslateDocumentRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.translation.v3beta1.BatchTranslateDocumentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BatchTranslateDocumentRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a BatchDocumentInputConfig. */
                interface IBatchDocumentInputConfig {

                    /** BatchDocumentInputConfig gcsSource */
                    gcsSource?: (google.cloud.translation.v3beta1.IGcsSource|null);
                }

                /** Represents a BatchDocumentInputConfig. */
                class BatchDocumentInputConfig implements IBatchDocumentInputConfig {

                    /**
                     * Constructs a new BatchDocumentInputConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.translation.v3beta1.IBatchDocumentInputConfig);

                    /** BatchDocumentInputConfig gcsSource. */
                    public gcsSource?: (google.cloud.translation.v3beta1.IGcsSource|null);

                    /** BatchDocumentInputConfig source. */
                    public source?: "gcsSource";

                    /**
                     * Creates a new BatchDocumentInputConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BatchDocumentInputConfig instance
                     */
                    public static create(properties?: google.cloud.translation.v3beta1.IBatchDocumentInputConfig): google.cloud.translation.v3beta1.BatchDocumentInputConfig;

                    /**
                     * Encodes the specified BatchDocumentInputConfig message. Does not implicitly {@link google.cloud.translation.v3beta1.BatchDocumentInputConfig.verify|verify} messages.
                     * @param message BatchDocumentInputConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.translation.v3beta1.IBatchDocumentInputConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BatchDocumentInputConfig message, length delimited. Does not implicitly {@link google.cloud.translation.v3beta1.BatchDocumentInputConfig.verify|verify} messages.
                     * @param message BatchDocumentInputConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.translation.v3beta1.IBatchDocumentInputConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BatchDocumentInputConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BatchDocumentInputConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.translation.v3beta1.BatchDocumentInputConfig;

                    /**
                     * Decodes a BatchDocumentInputConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BatchDocumentInputConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.translation.v3beta1.BatchDocumentInputConfig;

                    /**
                     * Verifies a BatchDocumentInputConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BatchDocumentInputConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BatchDocumentInputConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.translation.v3beta1.BatchDocumentInputConfig;

                    /**
                     * Creates a plain object from a BatchDocumentInputConfig message. Also converts values to other types if specified.
                     * @param message BatchDocumentInputConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.translation.v3beta1.BatchDocumentInputConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BatchDocumentInputConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a BatchDocumentOutputConfig. */
                interface IBatchDocumentOutputConfig {

                    /** BatchDocumentOutputConfig gcsDestination */
                    gcsDestination?: (google.cloud.translation.v3beta1.IGcsDestination|null);
                }

                /** Represents a BatchDocumentOutputConfig. */
                class BatchDocumentOutputConfig implements IBatchDocumentOutputConfig {

                    /**
                     * Constructs a new BatchDocumentOutputConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.translation.v3beta1.IBatchDocumentOutputConfig);

                    /** BatchDocumentOutputConfig gcsDestination. */
                    public gcsDestination?: (google.cloud.translation.v3beta1.IGcsDestination|null);

                    /** BatchDocumentOutputConfig destination. */
                    public destination?: "gcsDestination";

                    /**
                     * Creates a new BatchDocumentOutputConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BatchDocumentOutputConfig instance
                     */
                    public static create(properties?: google.cloud.translation.v3beta1.IBatchDocumentOutputConfig): google.cloud.translation.v3beta1.BatchDocumentOutputConfig;

                    /**
                     * Encodes the specified BatchDocumentOutputConfig message. Does not implicitly {@link google.cloud.translation.v3beta1.BatchDocumentOutputConfig.verify|verify} messages.
                     * @param message BatchDocumentOutputConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.translation.v3beta1.IBatchDocumentOutputConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BatchDocumentOutputConfig message, length delimited. Does not implicitly {@link google.cloud.translation.v3beta1.BatchDocumentOutputConfig.verify|verify} messages.
                     * @param message BatchDocumentOutputConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.translation.v3beta1.IBatchDocumentOutputConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BatchDocumentOutputConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BatchDocumentOutputConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.translation.v3beta1.BatchDocumentOutputConfig;

                    /**
                     * Decodes a BatchDocumentOutputConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BatchDocumentOutputConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.translation.v3beta1.BatchDocumentOutputConfig;

                    /**
                     * Verifies a BatchDocumentOutputConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BatchDocumentOutputConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BatchDocumentOutputConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.translation.v3beta1.BatchDocumentOutputConfig;

                    /**
                     * Creates a plain object from a BatchDocumentOutputConfig message. Also converts values to other types if specified.
                     * @param message BatchDocumentOutputConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.translation.v3beta1.BatchDocumentOutputConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BatchDocumentOutputConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a BatchTranslateDocumentResponse. */
                interface IBatchTranslateDocumentResponse {

                    /** BatchTranslateDocumentResponse totalPages */
                    totalPages?: (number|Long|string|null);

                    /** BatchTranslateDocumentResponse translatedPages */
                    translatedPages?: (number|Long|string|null);

                    /** BatchTranslateDocumentResponse failedPages */
                    failedPages?: (number|Long|string|null);

                    /** BatchTranslateDocumentResponse totalBillablePages */
                    totalBillablePages?: (number|Long|string|null);

                    /** BatchTranslateDocumentResponse totalCharacters */
                    totalCharacters?: (number|Long|string|null);

                    /** BatchTranslateDocumentResponse translatedCharacters */
                    translatedCharacters?: (number|Long|string|null);

                    /** BatchTranslateDocumentResponse failedCharacters */
                    failedCharacters?: (number|Long|string|null);

                    /** BatchTranslateDocumentResponse totalBillableCharacters */
                    totalBillableCharacters?: (number|Long|string|null);

                    /** BatchTranslateDocumentResponse submitTime */
                    submitTime?: (google.protobuf.ITimestamp|null);

                    /** BatchTranslateDocumentResponse endTime */
                    endTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a BatchTranslateDocumentResponse. */
                class BatchTranslateDocumentResponse implements IBatchTranslateDocumentResponse {

                    /**
                     * Constructs a new BatchTranslateDocumentResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.translation.v3beta1.IBatchTranslateDocumentResponse);

                    /** BatchTranslateDocumentResponse totalPages. */
                    public totalPages: (number|Long|string);

                    /** BatchTranslateDocumentResponse translatedPages. */
                    public translatedPages: (number|Long|string);

                    /** BatchTranslateDocumentResponse failedPages. */
                    public failedPages: (number|Long|string);

                    /** BatchTranslateDocumentResponse totalBillablePages. */
                    public totalBillablePages: (number|Long|string);

                    /** BatchTranslateDocumentResponse totalCharacters. */
                    public totalCharacters: (number|Long|string);

                    /** BatchTranslateDocumentResponse translatedCharacters. */
                    public translatedCharacters: (number|Long|string);

                    /** BatchTranslateDocumentResponse failedCharacters. */
                    public failedCharacters: (number|Long|string);

                    /** BatchTranslateDocumentResponse totalBillableCharacters. */
                    public totalBillableCharacters: (number|Long|string);

                    /** BatchTranslateDocumentResponse submitTime. */
                    public submitTime?: (google.protobuf.ITimestamp|null);

                    /** BatchTranslateDocumentResponse endTime. */
                    public endTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new BatchTranslateDocumentResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BatchTranslateDocumentResponse instance
                     */
                    public static create(properties?: google.cloud.translation.v3beta1.IBatchTranslateDocumentResponse): google.cloud.translation.v3beta1.BatchTranslateDocumentResponse;

                    /**
                     * Encodes the specified BatchTranslateDocumentResponse message. Does not implicitly {@link google.cloud.translation.v3beta1.BatchTranslateDocumentResponse.verify|verify} messages.
                     * @param message BatchTranslateDocumentResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.translation.v3beta1.IBatchTranslateDocumentResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BatchTranslateDocumentResponse message, length delimited. Does not implicitly {@link google.cloud.translation.v3beta1.BatchTranslateDocumentResponse.verify|verify} messages.
                     * @param message BatchTranslateDocumentResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.translation.v3beta1.IBatchTranslateDocumentResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BatchTranslateDocumentResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BatchTranslateDocumentResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.translation.v3beta1.BatchTranslateDocumentResponse;

                    /**
                     * Decodes a BatchTranslateDocumentResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BatchTranslateDocumentResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.translation.v3beta1.BatchTranslateDocumentResponse;

                    /**
                     * Verifies a BatchTranslateDocumentResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BatchTranslateDocumentResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BatchTranslateDocumentResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.translation.v3beta1.BatchTranslateDocumentResponse;

                    /**
                     * Creates a plain object from a BatchTranslateDocumentResponse message. Also converts values to other types if specified.
                     * @param message BatchTranslateDocumentResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.translation.v3beta1.BatchTranslateDocumentResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BatchTranslateDocumentResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a BatchTranslateDocumentMetadata. */
                interface IBatchTranslateDocumentMetadata {

                    /** BatchTranslateDocumentMetadata state */
                    state?: (google.cloud.translation.v3beta1.BatchTranslateDocumentMetadata.State|keyof typeof google.cloud.translation.v3beta1.BatchTranslateDocumentMetadata.State|null);

                    /** BatchTranslateDocumentMetadata totalPages */
                    totalPages?: (number|Long|string|null);

                    /** BatchTranslateDocumentMetadata translatedPages */
                    translatedPages?: (number|Long|string|null);

                    /** BatchTranslateDocumentMetadata failedPages */
                    failedPages?: (number|Long|string|null);

                    /** BatchTranslateDocumentMetadata totalBillablePages */
                    totalBillablePages?: (number|Long|string|null);

                    /** BatchTranslateDocumentMetadata totalCharacters */
                    totalCharacters?: (number|Long|string|null);

                    /** BatchTranslateDocumentMetadata translatedCharacters */
                    translatedCharacters?: (number|Long|string|null);

                    /** BatchTranslateDocumentMetadata failedCharacters */
                    failedCharacters?: (number|Long|string|null);

                    /** BatchTranslateDocumentMetadata totalBillableCharacters */
                    totalBillableCharacters?: (number|Long|string|null);

                    /** BatchTranslateDocumentMetadata submitTime */
                    submitTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a BatchTranslateDocumentMetadata. */
                class BatchTranslateDocumentMetadata implements IBatchTranslateDocumentMetadata {

                    /**
                     * Constructs a new BatchTranslateDocumentMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.translation.v3beta1.IBatchTranslateDocumentMetadata);

                    /** BatchTranslateDocumentMetadata state. */
                    public state: (google.cloud.translation.v3beta1.BatchTranslateDocumentMetadata.State|keyof typeof google.cloud.translation.v3beta1.BatchTranslateDocumentMetadata.State);

                    /** BatchTranslateDocumentMetadata totalPages. */
                    public totalPages: (number|Long|string);

                    /** BatchTranslateDocumentMetadata translatedPages. */
                    public translatedPages: (number|Long|string);

                    /** BatchTranslateDocumentMetadata failedPages. */
                    public failedPages: (number|Long|string);

                    /** BatchTranslateDocumentMetadata totalBillablePages. */
                    public totalBillablePages: (number|Long|string);

                    /** BatchTranslateDocumentMetadata totalCharacters. */
                    public totalCharacters: (number|Long|string);

                    /** BatchTranslateDocumentMetadata translatedCharacters. */
                    public translatedCharacters: (number|Long|string);

                    /** BatchTranslateDocumentMetadata failedCharacters. */
                    public failedCharacters: (number|Long|string);

                    /** BatchTranslateDocumentMetadata totalBillableCharacters. */
                    public totalBillableCharacters: (number|Long|string);

                    /** BatchTranslateDocumentMetadata submitTime. */
                    public submitTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new BatchTranslateDocumentMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BatchTranslateDocumentMetadata instance
                     */
                    public static create(properties?: google.cloud.translation.v3beta1.IBatchTranslateDocumentMetadata): google.cloud.translation.v3beta1.BatchTranslateDocumentMetadata;

                    /**
                     * Encodes the specified BatchTranslateDocumentMetadata message. Does not implicitly {@link google.cloud.translation.v3beta1.BatchTranslateDocumentMetadata.verify|verify} messages.
                     * @param message BatchTranslateDocumentMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.translation.v3beta1.IBatchTranslateDocumentMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BatchTranslateDocumentMetadata message, length delimited. Does not implicitly {@link google.cloud.translation.v3beta1.BatchTranslateDocumentMetadata.verify|verify} messages.
                     * @param message BatchTranslateDocumentMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.translation.v3beta1.IBatchTranslateDocumentMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BatchTranslateDocumentMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BatchTranslateDocumentMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.translation.v3beta1.BatchTranslateDocumentMetadata;

                    /**
                     * Decodes a BatchTranslateDocumentMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BatchTranslateDocumentMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.translation.v3beta1.BatchTranslateDocumentMetadata;

                    /**
                     * Verifies a BatchTranslateDocumentMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BatchTranslateDocumentMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BatchTranslateDocumentMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.translation.v3beta1.BatchTranslateDocumentMetadata;

                    /**
                     * Creates a plain object from a BatchTranslateDocumentMetadata message. Also converts values to other types if specified.
                     * @param message BatchTranslateDocumentMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.translation.v3beta1.BatchTranslateDocumentMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BatchTranslateDocumentMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace BatchTranslateDocumentMetadata {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        RUNNING = 1,
                        SUCCEEDED = 2,
                        FAILED = 3,
                        CANCELLING = 4,
                        CANCELLED = 5
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
    }
}
