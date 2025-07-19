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

        /** Namespace speech. */
        namespace speech {

            /** Namespace v2. */
            namespace v2 {

                /** Represents a Speech */
                class Speech extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new Speech service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new Speech service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Speech;

                    /**
                     * Calls CreateRecognizer.
                     * @param request CreateRecognizerRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createRecognizer(request: google.cloud.speech.v2.ICreateRecognizerRequest, callback: google.cloud.speech.v2.Speech.CreateRecognizerCallback): void;

                    /**
                     * Calls CreateRecognizer.
                     * @param request CreateRecognizerRequest message or plain object
                     * @returns Promise
                     */
                    public createRecognizer(request: google.cloud.speech.v2.ICreateRecognizerRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListRecognizers.
                     * @param request ListRecognizersRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListRecognizersResponse
                     */
                    public listRecognizers(request: google.cloud.speech.v2.IListRecognizersRequest, callback: google.cloud.speech.v2.Speech.ListRecognizersCallback): void;

                    /**
                     * Calls ListRecognizers.
                     * @param request ListRecognizersRequest message or plain object
                     * @returns Promise
                     */
                    public listRecognizers(request: google.cloud.speech.v2.IListRecognizersRequest): Promise<google.cloud.speech.v2.ListRecognizersResponse>;

                    /**
                     * Calls GetRecognizer.
                     * @param request GetRecognizerRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Recognizer
                     */
                    public getRecognizer(request: google.cloud.speech.v2.IGetRecognizerRequest, callback: google.cloud.speech.v2.Speech.GetRecognizerCallback): void;

                    /**
                     * Calls GetRecognizer.
                     * @param request GetRecognizerRequest message or plain object
                     * @returns Promise
                     */
                    public getRecognizer(request: google.cloud.speech.v2.IGetRecognizerRequest): Promise<google.cloud.speech.v2.Recognizer>;

                    /**
                     * Calls UpdateRecognizer.
                     * @param request UpdateRecognizerRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateRecognizer(request: google.cloud.speech.v2.IUpdateRecognizerRequest, callback: google.cloud.speech.v2.Speech.UpdateRecognizerCallback): void;

                    /**
                     * Calls UpdateRecognizer.
                     * @param request UpdateRecognizerRequest message or plain object
                     * @returns Promise
                     */
                    public updateRecognizer(request: google.cloud.speech.v2.IUpdateRecognizerRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteRecognizer.
                     * @param request DeleteRecognizerRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteRecognizer(request: google.cloud.speech.v2.IDeleteRecognizerRequest, callback: google.cloud.speech.v2.Speech.DeleteRecognizerCallback): void;

                    /**
                     * Calls DeleteRecognizer.
                     * @param request DeleteRecognizerRequest message or plain object
                     * @returns Promise
                     */
                    public deleteRecognizer(request: google.cloud.speech.v2.IDeleteRecognizerRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UndeleteRecognizer.
                     * @param request UndeleteRecognizerRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public undeleteRecognizer(request: google.cloud.speech.v2.IUndeleteRecognizerRequest, callback: google.cloud.speech.v2.Speech.UndeleteRecognizerCallback): void;

                    /**
                     * Calls UndeleteRecognizer.
                     * @param request UndeleteRecognizerRequest message or plain object
                     * @returns Promise
                     */
                    public undeleteRecognizer(request: google.cloud.speech.v2.IUndeleteRecognizerRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls Recognize.
                     * @param request RecognizeRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and RecognizeResponse
                     */
                    public recognize(request: google.cloud.speech.v2.IRecognizeRequest, callback: google.cloud.speech.v2.Speech.RecognizeCallback): void;

                    /**
                     * Calls Recognize.
                     * @param request RecognizeRequest message or plain object
                     * @returns Promise
                     */
                    public recognize(request: google.cloud.speech.v2.IRecognizeRequest): Promise<google.cloud.speech.v2.RecognizeResponse>;

                    /**
                     * Calls StreamingRecognize.
                     * @param request StreamingRecognizeRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and StreamingRecognizeResponse
                     */
                    public streamingRecognize(request: google.cloud.speech.v2.IStreamingRecognizeRequest, callback: google.cloud.speech.v2.Speech.StreamingRecognizeCallback): void;

                    /**
                     * Calls StreamingRecognize.
                     * @param request StreamingRecognizeRequest message or plain object
                     * @returns Promise
                     */
                    public streamingRecognize(request: google.cloud.speech.v2.IStreamingRecognizeRequest): Promise<google.cloud.speech.v2.StreamingRecognizeResponse>;

                    /**
                     * Calls BatchRecognize.
                     * @param request BatchRecognizeRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public batchRecognize(request: google.cloud.speech.v2.IBatchRecognizeRequest, callback: google.cloud.speech.v2.Speech.BatchRecognizeCallback): void;

                    /**
                     * Calls BatchRecognize.
                     * @param request BatchRecognizeRequest message or plain object
                     * @returns Promise
                     */
                    public batchRecognize(request: google.cloud.speech.v2.IBatchRecognizeRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls GetConfig.
                     * @param request GetConfigRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Config
                     */
                    public getConfig(request: google.cloud.speech.v2.IGetConfigRequest, callback: google.cloud.speech.v2.Speech.GetConfigCallback): void;

                    /**
                     * Calls GetConfig.
                     * @param request GetConfigRequest message or plain object
                     * @returns Promise
                     */
                    public getConfig(request: google.cloud.speech.v2.IGetConfigRequest): Promise<google.cloud.speech.v2.Config>;

                    /**
                     * Calls UpdateConfig.
                     * @param request UpdateConfigRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Config
                     */
                    public updateConfig(request: google.cloud.speech.v2.IUpdateConfigRequest, callback: google.cloud.speech.v2.Speech.UpdateConfigCallback): void;

                    /**
                     * Calls UpdateConfig.
                     * @param request UpdateConfigRequest message or plain object
                     * @returns Promise
                     */
                    public updateConfig(request: google.cloud.speech.v2.IUpdateConfigRequest): Promise<google.cloud.speech.v2.Config>;

                    /**
                     * Calls CreateCustomClass.
                     * @param request CreateCustomClassRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createCustomClass(request: google.cloud.speech.v2.ICreateCustomClassRequest, callback: google.cloud.speech.v2.Speech.CreateCustomClassCallback): void;

                    /**
                     * Calls CreateCustomClass.
                     * @param request CreateCustomClassRequest message or plain object
                     * @returns Promise
                     */
                    public createCustomClass(request: google.cloud.speech.v2.ICreateCustomClassRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListCustomClasses.
                     * @param request ListCustomClassesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListCustomClassesResponse
                     */
                    public listCustomClasses(request: google.cloud.speech.v2.IListCustomClassesRequest, callback: google.cloud.speech.v2.Speech.ListCustomClassesCallback): void;

                    /**
                     * Calls ListCustomClasses.
                     * @param request ListCustomClassesRequest message or plain object
                     * @returns Promise
                     */
                    public listCustomClasses(request: google.cloud.speech.v2.IListCustomClassesRequest): Promise<google.cloud.speech.v2.ListCustomClassesResponse>;

                    /**
                     * Calls GetCustomClass.
                     * @param request GetCustomClassRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and CustomClass
                     */
                    public getCustomClass(request: google.cloud.speech.v2.IGetCustomClassRequest, callback: google.cloud.speech.v2.Speech.GetCustomClassCallback): void;

                    /**
                     * Calls GetCustomClass.
                     * @param request GetCustomClassRequest message or plain object
                     * @returns Promise
                     */
                    public getCustomClass(request: google.cloud.speech.v2.IGetCustomClassRequest): Promise<google.cloud.speech.v2.CustomClass>;

                    /**
                     * Calls UpdateCustomClass.
                     * @param request UpdateCustomClassRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateCustomClass(request: google.cloud.speech.v2.IUpdateCustomClassRequest, callback: google.cloud.speech.v2.Speech.UpdateCustomClassCallback): void;

                    /**
                     * Calls UpdateCustomClass.
                     * @param request UpdateCustomClassRequest message or plain object
                     * @returns Promise
                     */
                    public updateCustomClass(request: google.cloud.speech.v2.IUpdateCustomClassRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteCustomClass.
                     * @param request DeleteCustomClassRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteCustomClass(request: google.cloud.speech.v2.IDeleteCustomClassRequest, callback: google.cloud.speech.v2.Speech.DeleteCustomClassCallback): void;

                    /**
                     * Calls DeleteCustomClass.
                     * @param request DeleteCustomClassRequest message or plain object
                     * @returns Promise
                     */
                    public deleteCustomClass(request: google.cloud.speech.v2.IDeleteCustomClassRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UndeleteCustomClass.
                     * @param request UndeleteCustomClassRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public undeleteCustomClass(request: google.cloud.speech.v2.IUndeleteCustomClassRequest, callback: google.cloud.speech.v2.Speech.UndeleteCustomClassCallback): void;

                    /**
                     * Calls UndeleteCustomClass.
                     * @param request UndeleteCustomClassRequest message or plain object
                     * @returns Promise
                     */
                    public undeleteCustomClass(request: google.cloud.speech.v2.IUndeleteCustomClassRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls CreatePhraseSet.
                     * @param request CreatePhraseSetRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createPhraseSet(request: google.cloud.speech.v2.ICreatePhraseSetRequest, callback: google.cloud.speech.v2.Speech.CreatePhraseSetCallback): void;

                    /**
                     * Calls CreatePhraseSet.
                     * @param request CreatePhraseSetRequest message or plain object
                     * @returns Promise
                     */
                    public createPhraseSet(request: google.cloud.speech.v2.ICreatePhraseSetRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListPhraseSets.
                     * @param request ListPhraseSetsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListPhraseSetsResponse
                     */
                    public listPhraseSets(request: google.cloud.speech.v2.IListPhraseSetsRequest, callback: google.cloud.speech.v2.Speech.ListPhraseSetsCallback): void;

                    /**
                     * Calls ListPhraseSets.
                     * @param request ListPhraseSetsRequest message or plain object
                     * @returns Promise
                     */
                    public listPhraseSets(request: google.cloud.speech.v2.IListPhraseSetsRequest): Promise<google.cloud.speech.v2.ListPhraseSetsResponse>;

                    /**
                     * Calls GetPhraseSet.
                     * @param request GetPhraseSetRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and PhraseSet
                     */
                    public getPhraseSet(request: google.cloud.speech.v2.IGetPhraseSetRequest, callback: google.cloud.speech.v2.Speech.GetPhraseSetCallback): void;

                    /**
                     * Calls GetPhraseSet.
                     * @param request GetPhraseSetRequest message or plain object
                     * @returns Promise
                     */
                    public getPhraseSet(request: google.cloud.speech.v2.IGetPhraseSetRequest): Promise<google.cloud.speech.v2.PhraseSet>;

                    /**
                     * Calls UpdatePhraseSet.
                     * @param request UpdatePhraseSetRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updatePhraseSet(request: google.cloud.speech.v2.IUpdatePhraseSetRequest, callback: google.cloud.speech.v2.Speech.UpdatePhraseSetCallback): void;

                    /**
                     * Calls UpdatePhraseSet.
                     * @param request UpdatePhraseSetRequest message or plain object
                     * @returns Promise
                     */
                    public updatePhraseSet(request: google.cloud.speech.v2.IUpdatePhraseSetRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeletePhraseSet.
                     * @param request DeletePhraseSetRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deletePhraseSet(request: google.cloud.speech.v2.IDeletePhraseSetRequest, callback: google.cloud.speech.v2.Speech.DeletePhraseSetCallback): void;

                    /**
                     * Calls DeletePhraseSet.
                     * @param request DeletePhraseSetRequest message or plain object
                     * @returns Promise
                     */
                    public deletePhraseSet(request: google.cloud.speech.v2.IDeletePhraseSetRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UndeletePhraseSet.
                     * @param request UndeletePhraseSetRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public undeletePhraseSet(request: google.cloud.speech.v2.IUndeletePhraseSetRequest, callback: google.cloud.speech.v2.Speech.UndeletePhraseSetCallback): void;

                    /**
                     * Calls UndeletePhraseSet.
                     * @param request UndeletePhraseSetRequest message or plain object
                     * @returns Promise
                     */
                    public undeletePhraseSet(request: google.cloud.speech.v2.IUndeletePhraseSetRequest): Promise<google.longrunning.Operation>;
                }

                namespace Speech {

                    /**
                     * Callback as used by {@link google.cloud.speech.v2.Speech|createRecognizer}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateRecognizerCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.speech.v2.Speech|listRecognizers}.
                     * @param error Error, if any
                     * @param [response] ListRecognizersResponse
                     */
                    type ListRecognizersCallback = (error: (Error|null), response?: google.cloud.speech.v2.ListRecognizersResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.speech.v2.Speech|getRecognizer}.
                     * @param error Error, if any
                     * @param [response] Recognizer
                     */
                    type GetRecognizerCallback = (error: (Error|null), response?: google.cloud.speech.v2.Recognizer) => void;

                    /**
                     * Callback as used by {@link google.cloud.speech.v2.Speech|updateRecognizer}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateRecognizerCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.speech.v2.Speech|deleteRecognizer}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteRecognizerCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.speech.v2.Speech|undeleteRecognizer}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UndeleteRecognizerCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.speech.v2.Speech|recognize}.
                     * @param error Error, if any
                     * @param [response] RecognizeResponse
                     */
                    type RecognizeCallback = (error: (Error|null), response?: google.cloud.speech.v2.RecognizeResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.speech.v2.Speech|streamingRecognize}.
                     * @param error Error, if any
                     * @param [response] StreamingRecognizeResponse
                     */
                    type StreamingRecognizeCallback = (error: (Error|null), response?: google.cloud.speech.v2.StreamingRecognizeResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.speech.v2.Speech|batchRecognize}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type BatchRecognizeCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.speech.v2.Speech|getConfig}.
                     * @param error Error, if any
                     * @param [response] Config
                     */
                    type GetConfigCallback = (error: (Error|null), response?: google.cloud.speech.v2.Config) => void;

                    /**
                     * Callback as used by {@link google.cloud.speech.v2.Speech|updateConfig}.
                     * @param error Error, if any
                     * @param [response] Config
                     */
                    type UpdateConfigCallback = (error: (Error|null), response?: google.cloud.speech.v2.Config) => void;

                    /**
                     * Callback as used by {@link google.cloud.speech.v2.Speech|createCustomClass}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateCustomClassCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.speech.v2.Speech|listCustomClasses}.
                     * @param error Error, if any
                     * @param [response] ListCustomClassesResponse
                     */
                    type ListCustomClassesCallback = (error: (Error|null), response?: google.cloud.speech.v2.ListCustomClassesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.speech.v2.Speech|getCustomClass}.
                     * @param error Error, if any
                     * @param [response] CustomClass
                     */
                    type GetCustomClassCallback = (error: (Error|null), response?: google.cloud.speech.v2.CustomClass) => void;

                    /**
                     * Callback as used by {@link google.cloud.speech.v2.Speech|updateCustomClass}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateCustomClassCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.speech.v2.Speech|deleteCustomClass}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteCustomClassCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.speech.v2.Speech|undeleteCustomClass}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UndeleteCustomClassCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.speech.v2.Speech|createPhraseSet}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreatePhraseSetCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.speech.v2.Speech|listPhraseSets}.
                     * @param error Error, if any
                     * @param [response] ListPhraseSetsResponse
                     */
                    type ListPhraseSetsCallback = (error: (Error|null), response?: google.cloud.speech.v2.ListPhraseSetsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.speech.v2.Speech|getPhraseSet}.
                     * @param error Error, if any
                     * @param [response] PhraseSet
                     */
                    type GetPhraseSetCallback = (error: (Error|null), response?: google.cloud.speech.v2.PhraseSet) => void;

                    /**
                     * Callback as used by {@link google.cloud.speech.v2.Speech|updatePhraseSet}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdatePhraseSetCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.speech.v2.Speech|deletePhraseSet}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeletePhraseSetCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.speech.v2.Speech|undeletePhraseSet}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UndeletePhraseSetCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;
                }

                /** Properties of a CreateRecognizerRequest. */
                interface ICreateRecognizerRequest {

                    /** CreateRecognizerRequest recognizer */
                    recognizer?: (google.cloud.speech.v2.IRecognizer|null);

                    /** CreateRecognizerRequest validateOnly */
                    validateOnly?: (boolean|null);

                    /** CreateRecognizerRequest recognizerId */
                    recognizerId?: (string|null);

                    /** CreateRecognizerRequest parent */
                    parent?: (string|null);
                }

                /** Represents a CreateRecognizerRequest. */
                class CreateRecognizerRequest implements ICreateRecognizerRequest {

                    /**
                     * Constructs a new CreateRecognizerRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.ICreateRecognizerRequest);

                    /** CreateRecognizerRequest recognizer. */
                    public recognizer?: (google.cloud.speech.v2.IRecognizer|null);

                    /** CreateRecognizerRequest validateOnly. */
                    public validateOnly: boolean;

                    /** CreateRecognizerRequest recognizerId. */
                    public recognizerId: string;

                    /** CreateRecognizerRequest parent. */
                    public parent: string;

                    /**
                     * Creates a new CreateRecognizerRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateRecognizerRequest instance
                     */
                    public static create(properties?: google.cloud.speech.v2.ICreateRecognizerRequest): google.cloud.speech.v2.CreateRecognizerRequest;

                    /**
                     * Encodes the specified CreateRecognizerRequest message. Does not implicitly {@link google.cloud.speech.v2.CreateRecognizerRequest.verify|verify} messages.
                     * @param message CreateRecognizerRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.ICreateRecognizerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateRecognizerRequest message, length delimited. Does not implicitly {@link google.cloud.speech.v2.CreateRecognizerRequest.verify|verify} messages.
                     * @param message CreateRecognizerRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.ICreateRecognizerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateRecognizerRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateRecognizerRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.CreateRecognizerRequest;

                    /**
                     * Decodes a CreateRecognizerRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateRecognizerRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.CreateRecognizerRequest;

                    /**
                     * Verifies a CreateRecognizerRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateRecognizerRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateRecognizerRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.CreateRecognizerRequest;

                    /**
                     * Creates a plain object from a CreateRecognizerRequest message. Also converts values to other types if specified.
                     * @param message CreateRecognizerRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.CreateRecognizerRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateRecognizerRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateRecognizerRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an OperationMetadata. */
                interface IOperationMetadata {

                    /** OperationMetadata createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** OperationMetadata updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** OperationMetadata resource */
                    resource?: (string|null);

                    /** OperationMetadata method */
                    method?: (string|null);

                    /** OperationMetadata kmsKeyName */
                    kmsKeyName?: (string|null);

                    /** OperationMetadata kmsKeyVersionName */
                    kmsKeyVersionName?: (string|null);

                    /** OperationMetadata batchRecognizeRequest */
                    batchRecognizeRequest?: (google.cloud.speech.v2.IBatchRecognizeRequest|null);

                    /** OperationMetadata createRecognizerRequest */
                    createRecognizerRequest?: (google.cloud.speech.v2.ICreateRecognizerRequest|null);

                    /** OperationMetadata updateRecognizerRequest */
                    updateRecognizerRequest?: (google.cloud.speech.v2.IUpdateRecognizerRequest|null);

                    /** OperationMetadata deleteRecognizerRequest */
                    deleteRecognizerRequest?: (google.cloud.speech.v2.IDeleteRecognizerRequest|null);

                    /** OperationMetadata undeleteRecognizerRequest */
                    undeleteRecognizerRequest?: (google.cloud.speech.v2.IUndeleteRecognizerRequest|null);

                    /** OperationMetadata createCustomClassRequest */
                    createCustomClassRequest?: (google.cloud.speech.v2.ICreateCustomClassRequest|null);

                    /** OperationMetadata updateCustomClassRequest */
                    updateCustomClassRequest?: (google.cloud.speech.v2.IUpdateCustomClassRequest|null);

                    /** OperationMetadata deleteCustomClassRequest */
                    deleteCustomClassRequest?: (google.cloud.speech.v2.IDeleteCustomClassRequest|null);

                    /** OperationMetadata undeleteCustomClassRequest */
                    undeleteCustomClassRequest?: (google.cloud.speech.v2.IUndeleteCustomClassRequest|null);

                    /** OperationMetadata createPhraseSetRequest */
                    createPhraseSetRequest?: (google.cloud.speech.v2.ICreatePhraseSetRequest|null);

                    /** OperationMetadata updatePhraseSetRequest */
                    updatePhraseSetRequest?: (google.cloud.speech.v2.IUpdatePhraseSetRequest|null);

                    /** OperationMetadata deletePhraseSetRequest */
                    deletePhraseSetRequest?: (google.cloud.speech.v2.IDeletePhraseSetRequest|null);

                    /** OperationMetadata undeletePhraseSetRequest */
                    undeletePhraseSetRequest?: (google.cloud.speech.v2.IUndeletePhraseSetRequest|null);

                    /** OperationMetadata updateConfigRequest */
                    updateConfigRequest?: (google.cloud.speech.v2.IUpdateConfigRequest|null);

                    /** OperationMetadata progressPercent */
                    progressPercent?: (number|null);

                    /** OperationMetadata batchRecognizeMetadata */
                    batchRecognizeMetadata?: (google.cloud.speech.v2.IBatchRecognizeMetadata|null);
                }

                /** Represents an OperationMetadata. */
                class OperationMetadata implements IOperationMetadata {

                    /**
                     * Constructs a new OperationMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IOperationMetadata);

                    /** OperationMetadata createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** OperationMetadata updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** OperationMetadata resource. */
                    public resource: string;

                    /** OperationMetadata method. */
                    public method: string;

                    /** OperationMetadata kmsKeyName. */
                    public kmsKeyName: string;

                    /** OperationMetadata kmsKeyVersionName. */
                    public kmsKeyVersionName: string;

                    /** OperationMetadata batchRecognizeRequest. */
                    public batchRecognizeRequest?: (google.cloud.speech.v2.IBatchRecognizeRequest|null);

                    /** OperationMetadata createRecognizerRequest. */
                    public createRecognizerRequest?: (google.cloud.speech.v2.ICreateRecognizerRequest|null);

                    /** OperationMetadata updateRecognizerRequest. */
                    public updateRecognizerRequest?: (google.cloud.speech.v2.IUpdateRecognizerRequest|null);

                    /** OperationMetadata deleteRecognizerRequest. */
                    public deleteRecognizerRequest?: (google.cloud.speech.v2.IDeleteRecognizerRequest|null);

                    /** OperationMetadata undeleteRecognizerRequest. */
                    public undeleteRecognizerRequest?: (google.cloud.speech.v2.IUndeleteRecognizerRequest|null);

                    /** OperationMetadata createCustomClassRequest. */
                    public createCustomClassRequest?: (google.cloud.speech.v2.ICreateCustomClassRequest|null);

                    /** OperationMetadata updateCustomClassRequest. */
                    public updateCustomClassRequest?: (google.cloud.speech.v2.IUpdateCustomClassRequest|null);

                    /** OperationMetadata deleteCustomClassRequest. */
                    public deleteCustomClassRequest?: (google.cloud.speech.v2.IDeleteCustomClassRequest|null);

                    /** OperationMetadata undeleteCustomClassRequest. */
                    public undeleteCustomClassRequest?: (google.cloud.speech.v2.IUndeleteCustomClassRequest|null);

                    /** OperationMetadata createPhraseSetRequest. */
                    public createPhraseSetRequest?: (google.cloud.speech.v2.ICreatePhraseSetRequest|null);

                    /** OperationMetadata updatePhraseSetRequest. */
                    public updatePhraseSetRequest?: (google.cloud.speech.v2.IUpdatePhraseSetRequest|null);

                    /** OperationMetadata deletePhraseSetRequest. */
                    public deletePhraseSetRequest?: (google.cloud.speech.v2.IDeletePhraseSetRequest|null);

                    /** OperationMetadata undeletePhraseSetRequest. */
                    public undeletePhraseSetRequest?: (google.cloud.speech.v2.IUndeletePhraseSetRequest|null);

                    /** OperationMetadata updateConfigRequest. */
                    public updateConfigRequest?: (google.cloud.speech.v2.IUpdateConfigRequest|null);

                    /** OperationMetadata progressPercent. */
                    public progressPercent: number;

                    /** OperationMetadata batchRecognizeMetadata. */
                    public batchRecognizeMetadata?: (google.cloud.speech.v2.IBatchRecognizeMetadata|null);

                    /** OperationMetadata request. */
                    public request?: ("batchRecognizeRequest"|"createRecognizerRequest"|"updateRecognizerRequest"|"deleteRecognizerRequest"|"undeleteRecognizerRequest"|"createCustomClassRequest"|"updateCustomClassRequest"|"deleteCustomClassRequest"|"undeleteCustomClassRequest"|"createPhraseSetRequest"|"updatePhraseSetRequest"|"deletePhraseSetRequest"|"undeletePhraseSetRequest"|"updateConfigRequest");

                    /** OperationMetadata metadata. */
                    public metadata?: "batchRecognizeMetadata";

                    /**
                     * Creates a new OperationMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OperationMetadata instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IOperationMetadata): google.cloud.speech.v2.OperationMetadata;

                    /**
                     * Encodes the specified OperationMetadata message. Does not implicitly {@link google.cloud.speech.v2.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OperationMetadata message, length delimited. Does not implicitly {@link google.cloud.speech.v2.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.OperationMetadata;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.OperationMetadata;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.OperationMetadata;

                    /**
                     * Creates a plain object from an OperationMetadata message. Also converts values to other types if specified.
                     * @param message OperationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.OperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                /** Properties of a ListRecognizersRequest. */
                interface IListRecognizersRequest {

                    /** ListRecognizersRequest parent */
                    parent?: (string|null);

                    /** ListRecognizersRequest pageSize */
                    pageSize?: (number|null);

                    /** ListRecognizersRequest pageToken */
                    pageToken?: (string|null);

                    /** ListRecognizersRequest showDeleted */
                    showDeleted?: (boolean|null);
                }

                /** Represents a ListRecognizersRequest. */
                class ListRecognizersRequest implements IListRecognizersRequest {

                    /**
                     * Constructs a new ListRecognizersRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IListRecognizersRequest);

                    /** ListRecognizersRequest parent. */
                    public parent: string;

                    /** ListRecognizersRequest pageSize. */
                    public pageSize: number;

                    /** ListRecognizersRequest pageToken. */
                    public pageToken: string;

                    /** ListRecognizersRequest showDeleted. */
                    public showDeleted: boolean;

                    /**
                     * Creates a new ListRecognizersRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListRecognizersRequest instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IListRecognizersRequest): google.cloud.speech.v2.ListRecognizersRequest;

                    /**
                     * Encodes the specified ListRecognizersRequest message. Does not implicitly {@link google.cloud.speech.v2.ListRecognizersRequest.verify|verify} messages.
                     * @param message ListRecognizersRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IListRecognizersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListRecognizersRequest message, length delimited. Does not implicitly {@link google.cloud.speech.v2.ListRecognizersRequest.verify|verify} messages.
                     * @param message ListRecognizersRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IListRecognizersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListRecognizersRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListRecognizersRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.ListRecognizersRequest;

                    /**
                     * Decodes a ListRecognizersRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListRecognizersRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.ListRecognizersRequest;

                    /**
                     * Verifies a ListRecognizersRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListRecognizersRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListRecognizersRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.ListRecognizersRequest;

                    /**
                     * Creates a plain object from a ListRecognizersRequest message. Also converts values to other types if specified.
                     * @param message ListRecognizersRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.ListRecognizersRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListRecognizersRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListRecognizersRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListRecognizersResponse. */
                interface IListRecognizersResponse {

                    /** ListRecognizersResponse recognizers */
                    recognizers?: (google.cloud.speech.v2.IRecognizer[]|null);

                    /** ListRecognizersResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListRecognizersResponse. */
                class ListRecognizersResponse implements IListRecognizersResponse {

                    /**
                     * Constructs a new ListRecognizersResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IListRecognizersResponse);

                    /** ListRecognizersResponse recognizers. */
                    public recognizers: google.cloud.speech.v2.IRecognizer[];

                    /** ListRecognizersResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListRecognizersResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListRecognizersResponse instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IListRecognizersResponse): google.cloud.speech.v2.ListRecognizersResponse;

                    /**
                     * Encodes the specified ListRecognizersResponse message. Does not implicitly {@link google.cloud.speech.v2.ListRecognizersResponse.verify|verify} messages.
                     * @param message ListRecognizersResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IListRecognizersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListRecognizersResponse message, length delimited. Does not implicitly {@link google.cloud.speech.v2.ListRecognizersResponse.verify|verify} messages.
                     * @param message ListRecognizersResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IListRecognizersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListRecognizersResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListRecognizersResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.ListRecognizersResponse;

                    /**
                     * Decodes a ListRecognizersResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListRecognizersResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.ListRecognizersResponse;

                    /**
                     * Verifies a ListRecognizersResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListRecognizersResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListRecognizersResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.ListRecognizersResponse;

                    /**
                     * Creates a plain object from a ListRecognizersResponse message. Also converts values to other types if specified.
                     * @param message ListRecognizersResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.ListRecognizersResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListRecognizersResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListRecognizersResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetRecognizerRequest. */
                interface IGetRecognizerRequest {

                    /** GetRecognizerRequest name */
                    name?: (string|null);
                }

                /** Represents a GetRecognizerRequest. */
                class GetRecognizerRequest implements IGetRecognizerRequest {

                    /**
                     * Constructs a new GetRecognizerRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IGetRecognizerRequest);

                    /** GetRecognizerRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetRecognizerRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetRecognizerRequest instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IGetRecognizerRequest): google.cloud.speech.v2.GetRecognizerRequest;

                    /**
                     * Encodes the specified GetRecognizerRequest message. Does not implicitly {@link google.cloud.speech.v2.GetRecognizerRequest.verify|verify} messages.
                     * @param message GetRecognizerRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IGetRecognizerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetRecognizerRequest message, length delimited. Does not implicitly {@link google.cloud.speech.v2.GetRecognizerRequest.verify|verify} messages.
                     * @param message GetRecognizerRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IGetRecognizerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetRecognizerRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetRecognizerRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.GetRecognizerRequest;

                    /**
                     * Decodes a GetRecognizerRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetRecognizerRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.GetRecognizerRequest;

                    /**
                     * Verifies a GetRecognizerRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetRecognizerRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetRecognizerRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.GetRecognizerRequest;

                    /**
                     * Creates a plain object from a GetRecognizerRequest message. Also converts values to other types if specified.
                     * @param message GetRecognizerRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.GetRecognizerRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetRecognizerRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetRecognizerRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateRecognizerRequest. */
                interface IUpdateRecognizerRequest {

                    /** UpdateRecognizerRequest recognizer */
                    recognizer?: (google.cloud.speech.v2.IRecognizer|null);

                    /** UpdateRecognizerRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateRecognizerRequest validateOnly */
                    validateOnly?: (boolean|null);
                }

                /** Represents an UpdateRecognizerRequest. */
                class UpdateRecognizerRequest implements IUpdateRecognizerRequest {

                    /**
                     * Constructs a new UpdateRecognizerRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IUpdateRecognizerRequest);

                    /** UpdateRecognizerRequest recognizer. */
                    public recognizer?: (google.cloud.speech.v2.IRecognizer|null);

                    /** UpdateRecognizerRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateRecognizerRequest validateOnly. */
                    public validateOnly: boolean;

                    /**
                     * Creates a new UpdateRecognizerRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateRecognizerRequest instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IUpdateRecognizerRequest): google.cloud.speech.v2.UpdateRecognizerRequest;

                    /**
                     * Encodes the specified UpdateRecognizerRequest message. Does not implicitly {@link google.cloud.speech.v2.UpdateRecognizerRequest.verify|verify} messages.
                     * @param message UpdateRecognizerRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IUpdateRecognizerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateRecognizerRequest message, length delimited. Does not implicitly {@link google.cloud.speech.v2.UpdateRecognizerRequest.verify|verify} messages.
                     * @param message UpdateRecognizerRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IUpdateRecognizerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateRecognizerRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateRecognizerRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.UpdateRecognizerRequest;

                    /**
                     * Decodes an UpdateRecognizerRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateRecognizerRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.UpdateRecognizerRequest;

                    /**
                     * Verifies an UpdateRecognizerRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateRecognizerRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateRecognizerRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.UpdateRecognizerRequest;

                    /**
                     * Creates a plain object from an UpdateRecognizerRequest message. Also converts values to other types if specified.
                     * @param message UpdateRecognizerRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.UpdateRecognizerRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateRecognizerRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateRecognizerRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteRecognizerRequest. */
                interface IDeleteRecognizerRequest {

                    /** DeleteRecognizerRequest name */
                    name?: (string|null);

                    /** DeleteRecognizerRequest validateOnly */
                    validateOnly?: (boolean|null);

                    /** DeleteRecognizerRequest allowMissing */
                    allowMissing?: (boolean|null);

                    /** DeleteRecognizerRequest etag */
                    etag?: (string|null);
                }

                /** Represents a DeleteRecognizerRequest. */
                class DeleteRecognizerRequest implements IDeleteRecognizerRequest {

                    /**
                     * Constructs a new DeleteRecognizerRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IDeleteRecognizerRequest);

                    /** DeleteRecognizerRequest name. */
                    public name: string;

                    /** DeleteRecognizerRequest validateOnly. */
                    public validateOnly: boolean;

                    /** DeleteRecognizerRequest allowMissing. */
                    public allowMissing: boolean;

                    /** DeleteRecognizerRequest etag. */
                    public etag: string;

                    /**
                     * Creates a new DeleteRecognizerRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteRecognizerRequest instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IDeleteRecognizerRequest): google.cloud.speech.v2.DeleteRecognizerRequest;

                    /**
                     * Encodes the specified DeleteRecognizerRequest message. Does not implicitly {@link google.cloud.speech.v2.DeleteRecognizerRequest.verify|verify} messages.
                     * @param message DeleteRecognizerRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IDeleteRecognizerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteRecognizerRequest message, length delimited. Does not implicitly {@link google.cloud.speech.v2.DeleteRecognizerRequest.verify|verify} messages.
                     * @param message DeleteRecognizerRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IDeleteRecognizerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteRecognizerRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteRecognizerRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.DeleteRecognizerRequest;

                    /**
                     * Decodes a DeleteRecognizerRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteRecognizerRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.DeleteRecognizerRequest;

                    /**
                     * Verifies a DeleteRecognizerRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteRecognizerRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteRecognizerRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.DeleteRecognizerRequest;

                    /**
                     * Creates a plain object from a DeleteRecognizerRequest message. Also converts values to other types if specified.
                     * @param message DeleteRecognizerRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.DeleteRecognizerRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteRecognizerRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteRecognizerRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UndeleteRecognizerRequest. */
                interface IUndeleteRecognizerRequest {

                    /** UndeleteRecognizerRequest name */
                    name?: (string|null);

                    /** UndeleteRecognizerRequest validateOnly */
                    validateOnly?: (boolean|null);

                    /** UndeleteRecognizerRequest etag */
                    etag?: (string|null);
                }

                /** Represents an UndeleteRecognizerRequest. */
                class UndeleteRecognizerRequest implements IUndeleteRecognizerRequest {

                    /**
                     * Constructs a new UndeleteRecognizerRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IUndeleteRecognizerRequest);

                    /** UndeleteRecognizerRequest name. */
                    public name: string;

                    /** UndeleteRecognizerRequest validateOnly. */
                    public validateOnly: boolean;

                    /** UndeleteRecognizerRequest etag. */
                    public etag: string;

                    /**
                     * Creates a new UndeleteRecognizerRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UndeleteRecognizerRequest instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IUndeleteRecognizerRequest): google.cloud.speech.v2.UndeleteRecognizerRequest;

                    /**
                     * Encodes the specified UndeleteRecognizerRequest message. Does not implicitly {@link google.cloud.speech.v2.UndeleteRecognizerRequest.verify|verify} messages.
                     * @param message UndeleteRecognizerRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IUndeleteRecognizerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UndeleteRecognizerRequest message, length delimited. Does not implicitly {@link google.cloud.speech.v2.UndeleteRecognizerRequest.verify|verify} messages.
                     * @param message UndeleteRecognizerRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IUndeleteRecognizerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UndeleteRecognizerRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UndeleteRecognizerRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.UndeleteRecognizerRequest;

                    /**
                     * Decodes an UndeleteRecognizerRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UndeleteRecognizerRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.UndeleteRecognizerRequest;

                    /**
                     * Verifies an UndeleteRecognizerRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UndeleteRecognizerRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UndeleteRecognizerRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.UndeleteRecognizerRequest;

                    /**
                     * Creates a plain object from an UndeleteRecognizerRequest message. Also converts values to other types if specified.
                     * @param message UndeleteRecognizerRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.UndeleteRecognizerRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UndeleteRecognizerRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UndeleteRecognizerRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Recognizer. */
                interface IRecognizer {

                    /** Recognizer name */
                    name?: (string|null);

                    /** Recognizer uid */
                    uid?: (string|null);

                    /** Recognizer displayName */
                    displayName?: (string|null);

                    /** Recognizer model */
                    model?: (string|null);

                    /** Recognizer languageCodes */
                    languageCodes?: (string[]|null);

                    /** Recognizer defaultRecognitionConfig */
                    defaultRecognitionConfig?: (google.cloud.speech.v2.IRecognitionConfig|null);

                    /** Recognizer annotations */
                    annotations?: ({ [k: string]: string }|null);

                    /** Recognizer state */
                    state?: (google.cloud.speech.v2.Recognizer.State|keyof typeof google.cloud.speech.v2.Recognizer.State|null);

                    /** Recognizer createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Recognizer updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** Recognizer deleteTime */
                    deleteTime?: (google.protobuf.ITimestamp|null);

                    /** Recognizer expireTime */
                    expireTime?: (google.protobuf.ITimestamp|null);

                    /** Recognizer etag */
                    etag?: (string|null);

                    /** Recognizer reconciling */
                    reconciling?: (boolean|null);

                    /** Recognizer kmsKeyName */
                    kmsKeyName?: (string|null);

                    /** Recognizer kmsKeyVersionName */
                    kmsKeyVersionName?: (string|null);
                }

                /** Represents a Recognizer. */
                class Recognizer implements IRecognizer {

                    /**
                     * Constructs a new Recognizer.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IRecognizer);

                    /** Recognizer name. */
                    public name: string;

                    /** Recognizer uid. */
                    public uid: string;

                    /** Recognizer displayName. */
                    public displayName: string;

                    /** Recognizer model. */
                    public model: string;

                    /** Recognizer languageCodes. */
                    public languageCodes: string[];

                    /** Recognizer defaultRecognitionConfig. */
                    public defaultRecognitionConfig?: (google.cloud.speech.v2.IRecognitionConfig|null);

                    /** Recognizer annotations. */
                    public annotations: { [k: string]: string };

                    /** Recognizer state. */
                    public state: (google.cloud.speech.v2.Recognizer.State|keyof typeof google.cloud.speech.v2.Recognizer.State);

                    /** Recognizer createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Recognizer updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** Recognizer deleteTime. */
                    public deleteTime?: (google.protobuf.ITimestamp|null);

                    /** Recognizer expireTime. */
                    public expireTime?: (google.protobuf.ITimestamp|null);

                    /** Recognizer etag. */
                    public etag: string;

                    /** Recognizer reconciling. */
                    public reconciling: boolean;

                    /** Recognizer kmsKeyName. */
                    public kmsKeyName: string;

                    /** Recognizer kmsKeyVersionName. */
                    public kmsKeyVersionName: string;

                    /**
                     * Creates a new Recognizer instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Recognizer instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IRecognizer): google.cloud.speech.v2.Recognizer;

                    /**
                     * Encodes the specified Recognizer message. Does not implicitly {@link google.cloud.speech.v2.Recognizer.verify|verify} messages.
                     * @param message Recognizer message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IRecognizer, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Recognizer message, length delimited. Does not implicitly {@link google.cloud.speech.v2.Recognizer.verify|verify} messages.
                     * @param message Recognizer message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IRecognizer, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Recognizer message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Recognizer
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.Recognizer;

                    /**
                     * Decodes a Recognizer message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Recognizer
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.Recognizer;

                    /**
                     * Verifies a Recognizer message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Recognizer message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Recognizer
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.Recognizer;

                    /**
                     * Creates a plain object from a Recognizer message. Also converts values to other types if specified.
                     * @param message Recognizer
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.Recognizer, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Recognizer to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Recognizer
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Recognizer {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        ACTIVE = 2,
                        DELETED = 4
                    }
                }

                /** Properties of an AutoDetectDecodingConfig. */
                interface IAutoDetectDecodingConfig {
                }

                /** Represents an AutoDetectDecodingConfig. */
                class AutoDetectDecodingConfig implements IAutoDetectDecodingConfig {

                    /**
                     * Constructs a new AutoDetectDecodingConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IAutoDetectDecodingConfig);

                    /**
                     * Creates a new AutoDetectDecodingConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AutoDetectDecodingConfig instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IAutoDetectDecodingConfig): google.cloud.speech.v2.AutoDetectDecodingConfig;

                    /**
                     * Encodes the specified AutoDetectDecodingConfig message. Does not implicitly {@link google.cloud.speech.v2.AutoDetectDecodingConfig.verify|verify} messages.
                     * @param message AutoDetectDecodingConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IAutoDetectDecodingConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AutoDetectDecodingConfig message, length delimited. Does not implicitly {@link google.cloud.speech.v2.AutoDetectDecodingConfig.verify|verify} messages.
                     * @param message AutoDetectDecodingConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IAutoDetectDecodingConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AutoDetectDecodingConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AutoDetectDecodingConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.AutoDetectDecodingConfig;

                    /**
                     * Decodes an AutoDetectDecodingConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AutoDetectDecodingConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.AutoDetectDecodingConfig;

                    /**
                     * Verifies an AutoDetectDecodingConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AutoDetectDecodingConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AutoDetectDecodingConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.AutoDetectDecodingConfig;

                    /**
                     * Creates a plain object from an AutoDetectDecodingConfig message. Also converts values to other types if specified.
                     * @param message AutoDetectDecodingConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.AutoDetectDecodingConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AutoDetectDecodingConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AutoDetectDecodingConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ExplicitDecodingConfig. */
                interface IExplicitDecodingConfig {

                    /** ExplicitDecodingConfig encoding */
                    encoding?: (google.cloud.speech.v2.ExplicitDecodingConfig.AudioEncoding|keyof typeof google.cloud.speech.v2.ExplicitDecodingConfig.AudioEncoding|null);

                    /** ExplicitDecodingConfig sampleRateHertz */
                    sampleRateHertz?: (number|null);

                    /** ExplicitDecodingConfig audioChannelCount */
                    audioChannelCount?: (number|null);
                }

                /** Represents an ExplicitDecodingConfig. */
                class ExplicitDecodingConfig implements IExplicitDecodingConfig {

                    /**
                     * Constructs a new ExplicitDecodingConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IExplicitDecodingConfig);

                    /** ExplicitDecodingConfig encoding. */
                    public encoding: (google.cloud.speech.v2.ExplicitDecodingConfig.AudioEncoding|keyof typeof google.cloud.speech.v2.ExplicitDecodingConfig.AudioEncoding);

                    /** ExplicitDecodingConfig sampleRateHertz. */
                    public sampleRateHertz: number;

                    /** ExplicitDecodingConfig audioChannelCount. */
                    public audioChannelCount: number;

                    /**
                     * Creates a new ExplicitDecodingConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ExplicitDecodingConfig instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IExplicitDecodingConfig): google.cloud.speech.v2.ExplicitDecodingConfig;

                    /**
                     * Encodes the specified ExplicitDecodingConfig message. Does not implicitly {@link google.cloud.speech.v2.ExplicitDecodingConfig.verify|verify} messages.
                     * @param message ExplicitDecodingConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IExplicitDecodingConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ExplicitDecodingConfig message, length delimited. Does not implicitly {@link google.cloud.speech.v2.ExplicitDecodingConfig.verify|verify} messages.
                     * @param message ExplicitDecodingConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IExplicitDecodingConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ExplicitDecodingConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ExplicitDecodingConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.ExplicitDecodingConfig;

                    /**
                     * Decodes an ExplicitDecodingConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ExplicitDecodingConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.ExplicitDecodingConfig;

                    /**
                     * Verifies an ExplicitDecodingConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ExplicitDecodingConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ExplicitDecodingConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.ExplicitDecodingConfig;

                    /**
                     * Creates a plain object from an ExplicitDecodingConfig message. Also converts values to other types if specified.
                     * @param message ExplicitDecodingConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.ExplicitDecodingConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ExplicitDecodingConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ExplicitDecodingConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace ExplicitDecodingConfig {

                    /** AudioEncoding enum. */
                    enum AudioEncoding {
                        AUDIO_ENCODING_UNSPECIFIED = 0,
                        LINEAR16 = 1,
                        MULAW = 2,
                        ALAW = 3,
                        AMR = 4,
                        AMR_WB = 5,
                        FLAC = 6,
                        MP3 = 7,
                        OGG_OPUS = 8,
                        WEBM_OPUS = 9,
                        MP4_AAC = 10,
                        M4A_AAC = 11,
                        MOV_AAC = 12
                    }
                }

                /** Properties of a SpeakerDiarizationConfig. */
                interface ISpeakerDiarizationConfig {

                    /** SpeakerDiarizationConfig minSpeakerCount */
                    minSpeakerCount?: (number|null);

                    /** SpeakerDiarizationConfig maxSpeakerCount */
                    maxSpeakerCount?: (number|null);
                }

                /** Represents a SpeakerDiarizationConfig. */
                class SpeakerDiarizationConfig implements ISpeakerDiarizationConfig {

                    /**
                     * Constructs a new SpeakerDiarizationConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.ISpeakerDiarizationConfig);

                    /** SpeakerDiarizationConfig minSpeakerCount. */
                    public minSpeakerCount: number;

                    /** SpeakerDiarizationConfig maxSpeakerCount. */
                    public maxSpeakerCount: number;

                    /**
                     * Creates a new SpeakerDiarizationConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SpeakerDiarizationConfig instance
                     */
                    public static create(properties?: google.cloud.speech.v2.ISpeakerDiarizationConfig): google.cloud.speech.v2.SpeakerDiarizationConfig;

                    /**
                     * Encodes the specified SpeakerDiarizationConfig message. Does not implicitly {@link google.cloud.speech.v2.SpeakerDiarizationConfig.verify|verify} messages.
                     * @param message SpeakerDiarizationConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.ISpeakerDiarizationConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SpeakerDiarizationConfig message, length delimited. Does not implicitly {@link google.cloud.speech.v2.SpeakerDiarizationConfig.verify|verify} messages.
                     * @param message SpeakerDiarizationConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.ISpeakerDiarizationConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SpeakerDiarizationConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SpeakerDiarizationConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.SpeakerDiarizationConfig;

                    /**
                     * Decodes a SpeakerDiarizationConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SpeakerDiarizationConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.SpeakerDiarizationConfig;

                    /**
                     * Verifies a SpeakerDiarizationConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SpeakerDiarizationConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SpeakerDiarizationConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.SpeakerDiarizationConfig;

                    /**
                     * Creates a plain object from a SpeakerDiarizationConfig message. Also converts values to other types if specified.
                     * @param message SpeakerDiarizationConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.SpeakerDiarizationConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SpeakerDiarizationConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SpeakerDiarizationConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a RecognitionFeatures. */
                interface IRecognitionFeatures {

                    /** RecognitionFeatures profanityFilter */
                    profanityFilter?: (boolean|null);

                    /** RecognitionFeatures enableWordTimeOffsets */
                    enableWordTimeOffsets?: (boolean|null);

                    /** RecognitionFeatures enableWordConfidence */
                    enableWordConfidence?: (boolean|null);

                    /** RecognitionFeatures enableAutomaticPunctuation */
                    enableAutomaticPunctuation?: (boolean|null);

                    /** RecognitionFeatures enableSpokenPunctuation */
                    enableSpokenPunctuation?: (boolean|null);

                    /** RecognitionFeatures enableSpokenEmojis */
                    enableSpokenEmojis?: (boolean|null);

                    /** RecognitionFeatures multiChannelMode */
                    multiChannelMode?: (google.cloud.speech.v2.RecognitionFeatures.MultiChannelMode|keyof typeof google.cloud.speech.v2.RecognitionFeatures.MultiChannelMode|null);

                    /** RecognitionFeatures diarizationConfig */
                    diarizationConfig?: (google.cloud.speech.v2.ISpeakerDiarizationConfig|null);

                    /** RecognitionFeatures maxAlternatives */
                    maxAlternatives?: (number|null);
                }

                /** Represents a RecognitionFeatures. */
                class RecognitionFeatures implements IRecognitionFeatures {

                    /**
                     * Constructs a new RecognitionFeatures.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IRecognitionFeatures);

                    /** RecognitionFeatures profanityFilter. */
                    public profanityFilter: boolean;

                    /** RecognitionFeatures enableWordTimeOffsets. */
                    public enableWordTimeOffsets: boolean;

                    /** RecognitionFeatures enableWordConfidence. */
                    public enableWordConfidence: boolean;

                    /** RecognitionFeatures enableAutomaticPunctuation. */
                    public enableAutomaticPunctuation: boolean;

                    /** RecognitionFeatures enableSpokenPunctuation. */
                    public enableSpokenPunctuation: boolean;

                    /** RecognitionFeatures enableSpokenEmojis. */
                    public enableSpokenEmojis: boolean;

                    /** RecognitionFeatures multiChannelMode. */
                    public multiChannelMode: (google.cloud.speech.v2.RecognitionFeatures.MultiChannelMode|keyof typeof google.cloud.speech.v2.RecognitionFeatures.MultiChannelMode);

                    /** RecognitionFeatures diarizationConfig. */
                    public diarizationConfig?: (google.cloud.speech.v2.ISpeakerDiarizationConfig|null);

                    /** RecognitionFeatures maxAlternatives. */
                    public maxAlternatives: number;

                    /**
                     * Creates a new RecognitionFeatures instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RecognitionFeatures instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IRecognitionFeatures): google.cloud.speech.v2.RecognitionFeatures;

                    /**
                     * Encodes the specified RecognitionFeatures message. Does not implicitly {@link google.cloud.speech.v2.RecognitionFeatures.verify|verify} messages.
                     * @param message RecognitionFeatures message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IRecognitionFeatures, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RecognitionFeatures message, length delimited. Does not implicitly {@link google.cloud.speech.v2.RecognitionFeatures.verify|verify} messages.
                     * @param message RecognitionFeatures message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IRecognitionFeatures, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RecognitionFeatures message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RecognitionFeatures
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.RecognitionFeatures;

                    /**
                     * Decodes a RecognitionFeatures message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RecognitionFeatures
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.RecognitionFeatures;

                    /**
                     * Verifies a RecognitionFeatures message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RecognitionFeatures message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RecognitionFeatures
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.RecognitionFeatures;

                    /**
                     * Creates a plain object from a RecognitionFeatures message. Also converts values to other types if specified.
                     * @param message RecognitionFeatures
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.RecognitionFeatures, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RecognitionFeatures to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RecognitionFeatures
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace RecognitionFeatures {

                    /** MultiChannelMode enum. */
                    enum MultiChannelMode {
                        MULTI_CHANNEL_MODE_UNSPECIFIED = 0,
                        SEPARATE_RECOGNITION_PER_CHANNEL = 1
                    }
                }

                /** Properties of a TranscriptNormalization. */
                interface ITranscriptNormalization {

                    /** TranscriptNormalization entries */
                    entries?: (google.cloud.speech.v2.TranscriptNormalization.IEntry[]|null);
                }

                /** Represents a TranscriptNormalization. */
                class TranscriptNormalization implements ITranscriptNormalization {

                    /**
                     * Constructs a new TranscriptNormalization.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.ITranscriptNormalization);

                    /** TranscriptNormalization entries. */
                    public entries: google.cloud.speech.v2.TranscriptNormalization.IEntry[];

                    /**
                     * Creates a new TranscriptNormalization instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TranscriptNormalization instance
                     */
                    public static create(properties?: google.cloud.speech.v2.ITranscriptNormalization): google.cloud.speech.v2.TranscriptNormalization;

                    /**
                     * Encodes the specified TranscriptNormalization message. Does not implicitly {@link google.cloud.speech.v2.TranscriptNormalization.verify|verify} messages.
                     * @param message TranscriptNormalization message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.ITranscriptNormalization, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TranscriptNormalization message, length delimited. Does not implicitly {@link google.cloud.speech.v2.TranscriptNormalization.verify|verify} messages.
                     * @param message TranscriptNormalization message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.ITranscriptNormalization, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TranscriptNormalization message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TranscriptNormalization
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.TranscriptNormalization;

                    /**
                     * Decodes a TranscriptNormalization message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TranscriptNormalization
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.TranscriptNormalization;

                    /**
                     * Verifies a TranscriptNormalization message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TranscriptNormalization message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TranscriptNormalization
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.TranscriptNormalization;

                    /**
                     * Creates a plain object from a TranscriptNormalization message. Also converts values to other types if specified.
                     * @param message TranscriptNormalization
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.TranscriptNormalization, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TranscriptNormalization to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TranscriptNormalization
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace TranscriptNormalization {

                    /** Properties of an Entry. */
                    interface IEntry {

                        /** Entry search */
                        search?: (string|null);

                        /** Entry replace */
                        replace?: (string|null);

                        /** Entry caseSensitive */
                        caseSensitive?: (boolean|null);
                    }

                    /** Represents an Entry. */
                    class Entry implements IEntry {

                        /**
                         * Constructs a new Entry.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.speech.v2.TranscriptNormalization.IEntry);

                        /** Entry search. */
                        public search: string;

                        /** Entry replace. */
                        public replace: string;

                        /** Entry caseSensitive. */
                        public caseSensitive: boolean;

                        /**
                         * Creates a new Entry instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Entry instance
                         */
                        public static create(properties?: google.cloud.speech.v2.TranscriptNormalization.IEntry): google.cloud.speech.v2.TranscriptNormalization.Entry;

                        /**
                         * Encodes the specified Entry message. Does not implicitly {@link google.cloud.speech.v2.TranscriptNormalization.Entry.verify|verify} messages.
                         * @param message Entry message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.speech.v2.TranscriptNormalization.IEntry, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Entry message, length delimited. Does not implicitly {@link google.cloud.speech.v2.TranscriptNormalization.Entry.verify|verify} messages.
                         * @param message Entry message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.speech.v2.TranscriptNormalization.IEntry, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an Entry message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Entry
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.TranscriptNormalization.Entry;

                        /**
                         * Decodes an Entry message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Entry
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.TranscriptNormalization.Entry;

                        /**
                         * Verifies an Entry message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an Entry message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Entry
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.TranscriptNormalization.Entry;

                        /**
                         * Creates a plain object from an Entry message. Also converts values to other types if specified.
                         * @param message Entry
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.speech.v2.TranscriptNormalization.Entry, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Entry to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Entry
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of a TranslationConfig. */
                interface ITranslationConfig {

                    /** TranslationConfig targetLanguage */
                    targetLanguage?: (string|null);
                }

                /** Represents a TranslationConfig. */
                class TranslationConfig implements ITranslationConfig {

                    /**
                     * Constructs a new TranslationConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.ITranslationConfig);

                    /** TranslationConfig targetLanguage. */
                    public targetLanguage: string;

                    /**
                     * Creates a new TranslationConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TranslationConfig instance
                     */
                    public static create(properties?: google.cloud.speech.v2.ITranslationConfig): google.cloud.speech.v2.TranslationConfig;

                    /**
                     * Encodes the specified TranslationConfig message. Does not implicitly {@link google.cloud.speech.v2.TranslationConfig.verify|verify} messages.
                     * @param message TranslationConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.ITranslationConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TranslationConfig message, length delimited. Does not implicitly {@link google.cloud.speech.v2.TranslationConfig.verify|verify} messages.
                     * @param message TranslationConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.ITranslationConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TranslationConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TranslationConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.TranslationConfig;

                    /**
                     * Decodes a TranslationConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TranslationConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.TranslationConfig;

                    /**
                     * Verifies a TranslationConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TranslationConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TranslationConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.TranslationConfig;

                    /**
                     * Creates a plain object from a TranslationConfig message. Also converts values to other types if specified.
                     * @param message TranslationConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.TranslationConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TranslationConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TranslationConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a SpeechAdaptation. */
                interface ISpeechAdaptation {

                    /** SpeechAdaptation phraseSets */
                    phraseSets?: (google.cloud.speech.v2.SpeechAdaptation.IAdaptationPhraseSet[]|null);

                    /** SpeechAdaptation customClasses */
                    customClasses?: (google.cloud.speech.v2.ICustomClass[]|null);
                }

                /** Represents a SpeechAdaptation. */
                class SpeechAdaptation implements ISpeechAdaptation {

                    /**
                     * Constructs a new SpeechAdaptation.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.ISpeechAdaptation);

                    /** SpeechAdaptation phraseSets. */
                    public phraseSets: google.cloud.speech.v2.SpeechAdaptation.IAdaptationPhraseSet[];

                    /** SpeechAdaptation customClasses. */
                    public customClasses: google.cloud.speech.v2.ICustomClass[];

                    /**
                     * Creates a new SpeechAdaptation instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SpeechAdaptation instance
                     */
                    public static create(properties?: google.cloud.speech.v2.ISpeechAdaptation): google.cloud.speech.v2.SpeechAdaptation;

                    /**
                     * Encodes the specified SpeechAdaptation message. Does not implicitly {@link google.cloud.speech.v2.SpeechAdaptation.verify|verify} messages.
                     * @param message SpeechAdaptation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.ISpeechAdaptation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SpeechAdaptation message, length delimited. Does not implicitly {@link google.cloud.speech.v2.SpeechAdaptation.verify|verify} messages.
                     * @param message SpeechAdaptation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.ISpeechAdaptation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SpeechAdaptation message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SpeechAdaptation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.SpeechAdaptation;

                    /**
                     * Decodes a SpeechAdaptation message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SpeechAdaptation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.SpeechAdaptation;

                    /**
                     * Verifies a SpeechAdaptation message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SpeechAdaptation message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SpeechAdaptation
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.SpeechAdaptation;

                    /**
                     * Creates a plain object from a SpeechAdaptation message. Also converts values to other types if specified.
                     * @param message SpeechAdaptation
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.SpeechAdaptation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SpeechAdaptation to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SpeechAdaptation
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace SpeechAdaptation {

                    /** Properties of an AdaptationPhraseSet. */
                    interface IAdaptationPhraseSet {

                        /** AdaptationPhraseSet phraseSet */
                        phraseSet?: (string|null);

                        /** AdaptationPhraseSet inlinePhraseSet */
                        inlinePhraseSet?: (google.cloud.speech.v2.IPhraseSet|null);
                    }

                    /** Represents an AdaptationPhraseSet. */
                    class AdaptationPhraseSet implements IAdaptationPhraseSet {

                        /**
                         * Constructs a new AdaptationPhraseSet.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.speech.v2.SpeechAdaptation.IAdaptationPhraseSet);

                        /** AdaptationPhraseSet phraseSet. */
                        public phraseSet?: (string|null);

                        /** AdaptationPhraseSet inlinePhraseSet. */
                        public inlinePhraseSet?: (google.cloud.speech.v2.IPhraseSet|null);

                        /** AdaptationPhraseSet value. */
                        public value?: ("phraseSet"|"inlinePhraseSet");

                        /**
                         * Creates a new AdaptationPhraseSet instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns AdaptationPhraseSet instance
                         */
                        public static create(properties?: google.cloud.speech.v2.SpeechAdaptation.IAdaptationPhraseSet): google.cloud.speech.v2.SpeechAdaptation.AdaptationPhraseSet;

                        /**
                         * Encodes the specified AdaptationPhraseSet message. Does not implicitly {@link google.cloud.speech.v2.SpeechAdaptation.AdaptationPhraseSet.verify|verify} messages.
                         * @param message AdaptationPhraseSet message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.speech.v2.SpeechAdaptation.IAdaptationPhraseSet, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified AdaptationPhraseSet message, length delimited. Does not implicitly {@link google.cloud.speech.v2.SpeechAdaptation.AdaptationPhraseSet.verify|verify} messages.
                         * @param message AdaptationPhraseSet message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.speech.v2.SpeechAdaptation.IAdaptationPhraseSet, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an AdaptationPhraseSet message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns AdaptationPhraseSet
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.SpeechAdaptation.AdaptationPhraseSet;

                        /**
                         * Decodes an AdaptationPhraseSet message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns AdaptationPhraseSet
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.SpeechAdaptation.AdaptationPhraseSet;

                        /**
                         * Verifies an AdaptationPhraseSet message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an AdaptationPhraseSet message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns AdaptationPhraseSet
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.SpeechAdaptation.AdaptationPhraseSet;

                        /**
                         * Creates a plain object from an AdaptationPhraseSet message. Also converts values to other types if specified.
                         * @param message AdaptationPhraseSet
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.speech.v2.SpeechAdaptation.AdaptationPhraseSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this AdaptationPhraseSet to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for AdaptationPhraseSet
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of a RecognitionConfig. */
                interface IRecognitionConfig {

                    /** RecognitionConfig autoDecodingConfig */
                    autoDecodingConfig?: (google.cloud.speech.v2.IAutoDetectDecodingConfig|null);

                    /** RecognitionConfig explicitDecodingConfig */
                    explicitDecodingConfig?: (google.cloud.speech.v2.IExplicitDecodingConfig|null);

                    /** RecognitionConfig model */
                    model?: (string|null);

                    /** RecognitionConfig languageCodes */
                    languageCodes?: (string[]|null);

                    /** RecognitionConfig features */
                    features?: (google.cloud.speech.v2.IRecognitionFeatures|null);

                    /** RecognitionConfig adaptation */
                    adaptation?: (google.cloud.speech.v2.ISpeechAdaptation|null);

                    /** RecognitionConfig transcriptNormalization */
                    transcriptNormalization?: (google.cloud.speech.v2.ITranscriptNormalization|null);

                    /** RecognitionConfig translationConfig */
                    translationConfig?: (google.cloud.speech.v2.ITranslationConfig|null);
                }

                /** Represents a RecognitionConfig. */
                class RecognitionConfig implements IRecognitionConfig {

                    /**
                     * Constructs a new RecognitionConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IRecognitionConfig);

                    /** RecognitionConfig autoDecodingConfig. */
                    public autoDecodingConfig?: (google.cloud.speech.v2.IAutoDetectDecodingConfig|null);

                    /** RecognitionConfig explicitDecodingConfig. */
                    public explicitDecodingConfig?: (google.cloud.speech.v2.IExplicitDecodingConfig|null);

                    /** RecognitionConfig model. */
                    public model: string;

                    /** RecognitionConfig languageCodes. */
                    public languageCodes: string[];

                    /** RecognitionConfig features. */
                    public features?: (google.cloud.speech.v2.IRecognitionFeatures|null);

                    /** RecognitionConfig adaptation. */
                    public adaptation?: (google.cloud.speech.v2.ISpeechAdaptation|null);

                    /** RecognitionConfig transcriptNormalization. */
                    public transcriptNormalization?: (google.cloud.speech.v2.ITranscriptNormalization|null);

                    /** RecognitionConfig translationConfig. */
                    public translationConfig?: (google.cloud.speech.v2.ITranslationConfig|null);

                    /** RecognitionConfig decodingConfig. */
                    public decodingConfig?: ("autoDecodingConfig"|"explicitDecodingConfig");

                    /**
                     * Creates a new RecognitionConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RecognitionConfig instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IRecognitionConfig): google.cloud.speech.v2.RecognitionConfig;

                    /**
                     * Encodes the specified RecognitionConfig message. Does not implicitly {@link google.cloud.speech.v2.RecognitionConfig.verify|verify} messages.
                     * @param message RecognitionConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IRecognitionConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RecognitionConfig message, length delimited. Does not implicitly {@link google.cloud.speech.v2.RecognitionConfig.verify|verify} messages.
                     * @param message RecognitionConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IRecognitionConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RecognitionConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RecognitionConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.RecognitionConfig;

                    /**
                     * Decodes a RecognitionConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RecognitionConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.RecognitionConfig;

                    /**
                     * Verifies a RecognitionConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RecognitionConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RecognitionConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.RecognitionConfig;

                    /**
                     * Creates a plain object from a RecognitionConfig message. Also converts values to other types if specified.
                     * @param message RecognitionConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.RecognitionConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RecognitionConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RecognitionConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a RecognizeRequest. */
                interface IRecognizeRequest {

                    /** RecognizeRequest recognizer */
                    recognizer?: (string|null);

                    /** RecognizeRequest config */
                    config?: (google.cloud.speech.v2.IRecognitionConfig|null);

                    /** RecognizeRequest configMask */
                    configMask?: (google.protobuf.IFieldMask|null);

                    /** RecognizeRequest content */
                    content?: (Uint8Array|Buffer|string|null);

                    /** RecognizeRequest uri */
                    uri?: (string|null);
                }

                /** Represents a RecognizeRequest. */
                class RecognizeRequest implements IRecognizeRequest {

                    /**
                     * Constructs a new RecognizeRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IRecognizeRequest);

                    /** RecognizeRequest recognizer. */
                    public recognizer: string;

                    /** RecognizeRequest config. */
                    public config?: (google.cloud.speech.v2.IRecognitionConfig|null);

                    /** RecognizeRequest configMask. */
                    public configMask?: (google.protobuf.IFieldMask|null);

                    /** RecognizeRequest content. */
                    public content?: (Uint8Array|Buffer|string|null);

                    /** RecognizeRequest uri. */
                    public uri?: (string|null);

                    /** RecognizeRequest audioSource. */
                    public audioSource?: ("content"|"uri");

                    /**
                     * Creates a new RecognizeRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RecognizeRequest instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IRecognizeRequest): google.cloud.speech.v2.RecognizeRequest;

                    /**
                     * Encodes the specified RecognizeRequest message. Does not implicitly {@link google.cloud.speech.v2.RecognizeRequest.verify|verify} messages.
                     * @param message RecognizeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IRecognizeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RecognizeRequest message, length delimited. Does not implicitly {@link google.cloud.speech.v2.RecognizeRequest.verify|verify} messages.
                     * @param message RecognizeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IRecognizeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RecognizeRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RecognizeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.RecognizeRequest;

                    /**
                     * Decodes a RecognizeRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RecognizeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.RecognizeRequest;

                    /**
                     * Verifies a RecognizeRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RecognizeRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RecognizeRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.RecognizeRequest;

                    /**
                     * Creates a plain object from a RecognizeRequest message. Also converts values to other types if specified.
                     * @param message RecognizeRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.RecognizeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RecognizeRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RecognizeRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a RecognitionResponseMetadata. */
                interface IRecognitionResponseMetadata {

                    /** RecognitionResponseMetadata requestId */
                    requestId?: (string|null);

                    /** RecognitionResponseMetadata totalBilledDuration */
                    totalBilledDuration?: (google.protobuf.IDuration|null);
                }

                /** Represents a RecognitionResponseMetadata. */
                class RecognitionResponseMetadata implements IRecognitionResponseMetadata {

                    /**
                     * Constructs a new RecognitionResponseMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IRecognitionResponseMetadata);

                    /** RecognitionResponseMetadata requestId. */
                    public requestId: string;

                    /** RecognitionResponseMetadata totalBilledDuration. */
                    public totalBilledDuration?: (google.protobuf.IDuration|null);

                    /**
                     * Creates a new RecognitionResponseMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RecognitionResponseMetadata instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IRecognitionResponseMetadata): google.cloud.speech.v2.RecognitionResponseMetadata;

                    /**
                     * Encodes the specified RecognitionResponseMetadata message. Does not implicitly {@link google.cloud.speech.v2.RecognitionResponseMetadata.verify|verify} messages.
                     * @param message RecognitionResponseMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IRecognitionResponseMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RecognitionResponseMetadata message, length delimited. Does not implicitly {@link google.cloud.speech.v2.RecognitionResponseMetadata.verify|verify} messages.
                     * @param message RecognitionResponseMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IRecognitionResponseMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RecognitionResponseMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RecognitionResponseMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.RecognitionResponseMetadata;

                    /**
                     * Decodes a RecognitionResponseMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RecognitionResponseMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.RecognitionResponseMetadata;

                    /**
                     * Verifies a RecognitionResponseMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RecognitionResponseMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RecognitionResponseMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.RecognitionResponseMetadata;

                    /**
                     * Creates a plain object from a RecognitionResponseMetadata message. Also converts values to other types if specified.
                     * @param message RecognitionResponseMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.RecognitionResponseMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RecognitionResponseMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RecognitionResponseMetadata
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a SpeechRecognitionAlternative. */
                interface ISpeechRecognitionAlternative {

                    /** SpeechRecognitionAlternative transcript */
                    transcript?: (string|null);

                    /** SpeechRecognitionAlternative confidence */
                    confidence?: (number|null);

                    /** SpeechRecognitionAlternative words */
                    words?: (google.cloud.speech.v2.IWordInfo[]|null);
                }

                /** Represents a SpeechRecognitionAlternative. */
                class SpeechRecognitionAlternative implements ISpeechRecognitionAlternative {

                    /**
                     * Constructs a new SpeechRecognitionAlternative.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.ISpeechRecognitionAlternative);

                    /** SpeechRecognitionAlternative transcript. */
                    public transcript: string;

                    /** SpeechRecognitionAlternative confidence. */
                    public confidence: number;

                    /** SpeechRecognitionAlternative words. */
                    public words: google.cloud.speech.v2.IWordInfo[];

                    /**
                     * Creates a new SpeechRecognitionAlternative instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SpeechRecognitionAlternative instance
                     */
                    public static create(properties?: google.cloud.speech.v2.ISpeechRecognitionAlternative): google.cloud.speech.v2.SpeechRecognitionAlternative;

                    /**
                     * Encodes the specified SpeechRecognitionAlternative message. Does not implicitly {@link google.cloud.speech.v2.SpeechRecognitionAlternative.verify|verify} messages.
                     * @param message SpeechRecognitionAlternative message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.ISpeechRecognitionAlternative, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SpeechRecognitionAlternative message, length delimited. Does not implicitly {@link google.cloud.speech.v2.SpeechRecognitionAlternative.verify|verify} messages.
                     * @param message SpeechRecognitionAlternative message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.ISpeechRecognitionAlternative, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SpeechRecognitionAlternative message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SpeechRecognitionAlternative
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.SpeechRecognitionAlternative;

                    /**
                     * Decodes a SpeechRecognitionAlternative message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SpeechRecognitionAlternative
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.SpeechRecognitionAlternative;

                    /**
                     * Verifies a SpeechRecognitionAlternative message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SpeechRecognitionAlternative message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SpeechRecognitionAlternative
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.SpeechRecognitionAlternative;

                    /**
                     * Creates a plain object from a SpeechRecognitionAlternative message. Also converts values to other types if specified.
                     * @param message SpeechRecognitionAlternative
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.SpeechRecognitionAlternative, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SpeechRecognitionAlternative to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SpeechRecognitionAlternative
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a WordInfo. */
                interface IWordInfo {

                    /** WordInfo startOffset */
                    startOffset?: (google.protobuf.IDuration|null);

                    /** WordInfo endOffset */
                    endOffset?: (google.protobuf.IDuration|null);

                    /** WordInfo word */
                    word?: (string|null);

                    /** WordInfo confidence */
                    confidence?: (number|null);

                    /** WordInfo speakerLabel */
                    speakerLabel?: (string|null);
                }

                /** Represents a WordInfo. */
                class WordInfo implements IWordInfo {

                    /**
                     * Constructs a new WordInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IWordInfo);

                    /** WordInfo startOffset. */
                    public startOffset?: (google.protobuf.IDuration|null);

                    /** WordInfo endOffset. */
                    public endOffset?: (google.protobuf.IDuration|null);

                    /** WordInfo word. */
                    public word: string;

                    /** WordInfo confidence. */
                    public confidence: number;

                    /** WordInfo speakerLabel. */
                    public speakerLabel: string;

                    /**
                     * Creates a new WordInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns WordInfo instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IWordInfo): google.cloud.speech.v2.WordInfo;

                    /**
                     * Encodes the specified WordInfo message. Does not implicitly {@link google.cloud.speech.v2.WordInfo.verify|verify} messages.
                     * @param message WordInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IWordInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified WordInfo message, length delimited. Does not implicitly {@link google.cloud.speech.v2.WordInfo.verify|verify} messages.
                     * @param message WordInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IWordInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a WordInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns WordInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.WordInfo;

                    /**
                     * Decodes a WordInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns WordInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.WordInfo;

                    /**
                     * Verifies a WordInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a WordInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns WordInfo
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.WordInfo;

                    /**
                     * Creates a plain object from a WordInfo message. Also converts values to other types if specified.
                     * @param message WordInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.WordInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this WordInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for WordInfo
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a SpeechRecognitionResult. */
                interface ISpeechRecognitionResult {

                    /** SpeechRecognitionResult alternatives */
                    alternatives?: (google.cloud.speech.v2.ISpeechRecognitionAlternative[]|null);

                    /** SpeechRecognitionResult channelTag */
                    channelTag?: (number|null);

                    /** SpeechRecognitionResult resultEndOffset */
                    resultEndOffset?: (google.protobuf.IDuration|null);

                    /** SpeechRecognitionResult languageCode */
                    languageCode?: (string|null);
                }

                /** Represents a SpeechRecognitionResult. */
                class SpeechRecognitionResult implements ISpeechRecognitionResult {

                    /**
                     * Constructs a new SpeechRecognitionResult.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.ISpeechRecognitionResult);

                    /** SpeechRecognitionResult alternatives. */
                    public alternatives: google.cloud.speech.v2.ISpeechRecognitionAlternative[];

                    /** SpeechRecognitionResult channelTag. */
                    public channelTag: number;

                    /** SpeechRecognitionResult resultEndOffset. */
                    public resultEndOffset?: (google.protobuf.IDuration|null);

                    /** SpeechRecognitionResult languageCode. */
                    public languageCode: string;

                    /**
                     * Creates a new SpeechRecognitionResult instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SpeechRecognitionResult instance
                     */
                    public static create(properties?: google.cloud.speech.v2.ISpeechRecognitionResult): google.cloud.speech.v2.SpeechRecognitionResult;

                    /**
                     * Encodes the specified SpeechRecognitionResult message. Does not implicitly {@link google.cloud.speech.v2.SpeechRecognitionResult.verify|verify} messages.
                     * @param message SpeechRecognitionResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.ISpeechRecognitionResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SpeechRecognitionResult message, length delimited. Does not implicitly {@link google.cloud.speech.v2.SpeechRecognitionResult.verify|verify} messages.
                     * @param message SpeechRecognitionResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.ISpeechRecognitionResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SpeechRecognitionResult message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SpeechRecognitionResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.SpeechRecognitionResult;

                    /**
                     * Decodes a SpeechRecognitionResult message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SpeechRecognitionResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.SpeechRecognitionResult;

                    /**
                     * Verifies a SpeechRecognitionResult message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SpeechRecognitionResult message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SpeechRecognitionResult
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.SpeechRecognitionResult;

                    /**
                     * Creates a plain object from a SpeechRecognitionResult message. Also converts values to other types if specified.
                     * @param message SpeechRecognitionResult
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.SpeechRecognitionResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SpeechRecognitionResult to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SpeechRecognitionResult
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a RecognizeResponse. */
                interface IRecognizeResponse {

                    /** RecognizeResponse results */
                    results?: (google.cloud.speech.v2.ISpeechRecognitionResult[]|null);

                    /** RecognizeResponse metadata */
                    metadata?: (google.cloud.speech.v2.IRecognitionResponseMetadata|null);
                }

                /** Represents a RecognizeResponse. */
                class RecognizeResponse implements IRecognizeResponse {

                    /**
                     * Constructs a new RecognizeResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IRecognizeResponse);

                    /** RecognizeResponse results. */
                    public results: google.cloud.speech.v2.ISpeechRecognitionResult[];

                    /** RecognizeResponse metadata. */
                    public metadata?: (google.cloud.speech.v2.IRecognitionResponseMetadata|null);

                    /**
                     * Creates a new RecognizeResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RecognizeResponse instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IRecognizeResponse): google.cloud.speech.v2.RecognizeResponse;

                    /**
                     * Encodes the specified RecognizeResponse message. Does not implicitly {@link google.cloud.speech.v2.RecognizeResponse.verify|verify} messages.
                     * @param message RecognizeResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IRecognizeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RecognizeResponse message, length delimited. Does not implicitly {@link google.cloud.speech.v2.RecognizeResponse.verify|verify} messages.
                     * @param message RecognizeResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IRecognizeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RecognizeResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RecognizeResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.RecognizeResponse;

                    /**
                     * Decodes a RecognizeResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RecognizeResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.RecognizeResponse;

                    /**
                     * Verifies a RecognizeResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RecognizeResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RecognizeResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.RecognizeResponse;

                    /**
                     * Creates a plain object from a RecognizeResponse message. Also converts values to other types if specified.
                     * @param message RecognizeResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.RecognizeResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RecognizeResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RecognizeResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a StreamingRecognitionFeatures. */
                interface IStreamingRecognitionFeatures {

                    /** StreamingRecognitionFeatures enableVoiceActivityEvents */
                    enableVoiceActivityEvents?: (boolean|null);

                    /** StreamingRecognitionFeatures interimResults */
                    interimResults?: (boolean|null);

                    /** StreamingRecognitionFeatures voiceActivityTimeout */
                    voiceActivityTimeout?: (google.cloud.speech.v2.StreamingRecognitionFeatures.IVoiceActivityTimeout|null);
                }

                /** Represents a StreamingRecognitionFeatures. */
                class StreamingRecognitionFeatures implements IStreamingRecognitionFeatures {

                    /**
                     * Constructs a new StreamingRecognitionFeatures.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IStreamingRecognitionFeatures);

                    /** StreamingRecognitionFeatures enableVoiceActivityEvents. */
                    public enableVoiceActivityEvents: boolean;

                    /** StreamingRecognitionFeatures interimResults. */
                    public interimResults: boolean;

                    /** StreamingRecognitionFeatures voiceActivityTimeout. */
                    public voiceActivityTimeout?: (google.cloud.speech.v2.StreamingRecognitionFeatures.IVoiceActivityTimeout|null);

                    /**
                     * Creates a new StreamingRecognitionFeatures instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StreamingRecognitionFeatures instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IStreamingRecognitionFeatures): google.cloud.speech.v2.StreamingRecognitionFeatures;

                    /**
                     * Encodes the specified StreamingRecognitionFeatures message. Does not implicitly {@link google.cloud.speech.v2.StreamingRecognitionFeatures.verify|verify} messages.
                     * @param message StreamingRecognitionFeatures message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IStreamingRecognitionFeatures, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified StreamingRecognitionFeatures message, length delimited. Does not implicitly {@link google.cloud.speech.v2.StreamingRecognitionFeatures.verify|verify} messages.
                     * @param message StreamingRecognitionFeatures message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IStreamingRecognitionFeatures, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StreamingRecognitionFeatures message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StreamingRecognitionFeatures
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.StreamingRecognitionFeatures;

                    /**
                     * Decodes a StreamingRecognitionFeatures message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns StreamingRecognitionFeatures
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.StreamingRecognitionFeatures;

                    /**
                     * Verifies a StreamingRecognitionFeatures message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a StreamingRecognitionFeatures message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns StreamingRecognitionFeatures
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.StreamingRecognitionFeatures;

                    /**
                     * Creates a plain object from a StreamingRecognitionFeatures message. Also converts values to other types if specified.
                     * @param message StreamingRecognitionFeatures
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.StreamingRecognitionFeatures, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this StreamingRecognitionFeatures to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for StreamingRecognitionFeatures
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace StreamingRecognitionFeatures {

                    /** Properties of a VoiceActivityTimeout. */
                    interface IVoiceActivityTimeout {

                        /** VoiceActivityTimeout speechStartTimeout */
                        speechStartTimeout?: (google.protobuf.IDuration|null);

                        /** VoiceActivityTimeout speechEndTimeout */
                        speechEndTimeout?: (google.protobuf.IDuration|null);
                    }

                    /** Represents a VoiceActivityTimeout. */
                    class VoiceActivityTimeout implements IVoiceActivityTimeout {

                        /**
                         * Constructs a new VoiceActivityTimeout.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.speech.v2.StreamingRecognitionFeatures.IVoiceActivityTimeout);

                        /** VoiceActivityTimeout speechStartTimeout. */
                        public speechStartTimeout?: (google.protobuf.IDuration|null);

                        /** VoiceActivityTimeout speechEndTimeout. */
                        public speechEndTimeout?: (google.protobuf.IDuration|null);

                        /**
                         * Creates a new VoiceActivityTimeout instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns VoiceActivityTimeout instance
                         */
                        public static create(properties?: google.cloud.speech.v2.StreamingRecognitionFeatures.IVoiceActivityTimeout): google.cloud.speech.v2.StreamingRecognitionFeatures.VoiceActivityTimeout;

                        /**
                         * Encodes the specified VoiceActivityTimeout message. Does not implicitly {@link google.cloud.speech.v2.StreamingRecognitionFeatures.VoiceActivityTimeout.verify|verify} messages.
                         * @param message VoiceActivityTimeout message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.speech.v2.StreamingRecognitionFeatures.IVoiceActivityTimeout, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified VoiceActivityTimeout message, length delimited. Does not implicitly {@link google.cloud.speech.v2.StreamingRecognitionFeatures.VoiceActivityTimeout.verify|verify} messages.
                         * @param message VoiceActivityTimeout message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.speech.v2.StreamingRecognitionFeatures.IVoiceActivityTimeout, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a VoiceActivityTimeout message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns VoiceActivityTimeout
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.StreamingRecognitionFeatures.VoiceActivityTimeout;

                        /**
                         * Decodes a VoiceActivityTimeout message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns VoiceActivityTimeout
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.StreamingRecognitionFeatures.VoiceActivityTimeout;

                        /**
                         * Verifies a VoiceActivityTimeout message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a VoiceActivityTimeout message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns VoiceActivityTimeout
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.StreamingRecognitionFeatures.VoiceActivityTimeout;

                        /**
                         * Creates a plain object from a VoiceActivityTimeout message. Also converts values to other types if specified.
                         * @param message VoiceActivityTimeout
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.speech.v2.StreamingRecognitionFeatures.VoiceActivityTimeout, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this VoiceActivityTimeout to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for VoiceActivityTimeout
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of a StreamingRecognitionConfig. */
                interface IStreamingRecognitionConfig {

                    /** StreamingRecognitionConfig config */
                    config?: (google.cloud.speech.v2.IRecognitionConfig|null);

                    /** StreamingRecognitionConfig configMask */
                    configMask?: (google.protobuf.IFieldMask|null);

                    /** StreamingRecognitionConfig streamingFeatures */
                    streamingFeatures?: (google.cloud.speech.v2.IStreamingRecognitionFeatures|null);
                }

                /** Represents a StreamingRecognitionConfig. */
                class StreamingRecognitionConfig implements IStreamingRecognitionConfig {

                    /**
                     * Constructs a new StreamingRecognitionConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IStreamingRecognitionConfig);

                    /** StreamingRecognitionConfig config. */
                    public config?: (google.cloud.speech.v2.IRecognitionConfig|null);

                    /** StreamingRecognitionConfig configMask. */
                    public configMask?: (google.protobuf.IFieldMask|null);

                    /** StreamingRecognitionConfig streamingFeatures. */
                    public streamingFeatures?: (google.cloud.speech.v2.IStreamingRecognitionFeatures|null);

                    /**
                     * Creates a new StreamingRecognitionConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StreamingRecognitionConfig instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IStreamingRecognitionConfig): google.cloud.speech.v2.StreamingRecognitionConfig;

                    /**
                     * Encodes the specified StreamingRecognitionConfig message. Does not implicitly {@link google.cloud.speech.v2.StreamingRecognitionConfig.verify|verify} messages.
                     * @param message StreamingRecognitionConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IStreamingRecognitionConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified StreamingRecognitionConfig message, length delimited. Does not implicitly {@link google.cloud.speech.v2.StreamingRecognitionConfig.verify|verify} messages.
                     * @param message StreamingRecognitionConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IStreamingRecognitionConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StreamingRecognitionConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StreamingRecognitionConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.StreamingRecognitionConfig;

                    /**
                     * Decodes a StreamingRecognitionConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns StreamingRecognitionConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.StreamingRecognitionConfig;

                    /**
                     * Verifies a StreamingRecognitionConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a StreamingRecognitionConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns StreamingRecognitionConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.StreamingRecognitionConfig;

                    /**
                     * Creates a plain object from a StreamingRecognitionConfig message. Also converts values to other types if specified.
                     * @param message StreamingRecognitionConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.StreamingRecognitionConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this StreamingRecognitionConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for StreamingRecognitionConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a StreamingRecognizeRequest. */
                interface IStreamingRecognizeRequest {

                    /** StreamingRecognizeRequest recognizer */
                    recognizer?: (string|null);

                    /** StreamingRecognizeRequest streamingConfig */
                    streamingConfig?: (google.cloud.speech.v2.IStreamingRecognitionConfig|null);

                    /** StreamingRecognizeRequest audio */
                    audio?: (Uint8Array|Buffer|string|null);
                }

                /** Represents a StreamingRecognizeRequest. */
                class StreamingRecognizeRequest implements IStreamingRecognizeRequest {

                    /**
                     * Constructs a new StreamingRecognizeRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IStreamingRecognizeRequest);

                    /** StreamingRecognizeRequest recognizer. */
                    public recognizer: string;

                    /** StreamingRecognizeRequest streamingConfig. */
                    public streamingConfig?: (google.cloud.speech.v2.IStreamingRecognitionConfig|null);

                    /** StreamingRecognizeRequest audio. */
                    public audio?: (Uint8Array|Buffer|string|null);

                    /** StreamingRecognizeRequest streamingRequest. */
                    public streamingRequest?: ("streamingConfig"|"audio");

                    /**
                     * Creates a new StreamingRecognizeRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StreamingRecognizeRequest instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IStreamingRecognizeRequest): google.cloud.speech.v2.StreamingRecognizeRequest;

                    /**
                     * Encodes the specified StreamingRecognizeRequest message. Does not implicitly {@link google.cloud.speech.v2.StreamingRecognizeRequest.verify|verify} messages.
                     * @param message StreamingRecognizeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IStreamingRecognizeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified StreamingRecognizeRequest message, length delimited. Does not implicitly {@link google.cloud.speech.v2.StreamingRecognizeRequest.verify|verify} messages.
                     * @param message StreamingRecognizeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IStreamingRecognizeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StreamingRecognizeRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StreamingRecognizeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.StreamingRecognizeRequest;

                    /**
                     * Decodes a StreamingRecognizeRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns StreamingRecognizeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.StreamingRecognizeRequest;

                    /**
                     * Verifies a StreamingRecognizeRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a StreamingRecognizeRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns StreamingRecognizeRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.StreamingRecognizeRequest;

                    /**
                     * Creates a plain object from a StreamingRecognizeRequest message. Also converts values to other types if specified.
                     * @param message StreamingRecognizeRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.StreamingRecognizeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this StreamingRecognizeRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for StreamingRecognizeRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a BatchRecognizeRequest. */
                interface IBatchRecognizeRequest {

                    /** BatchRecognizeRequest recognizer */
                    recognizer?: (string|null);

                    /** BatchRecognizeRequest config */
                    config?: (google.cloud.speech.v2.IRecognitionConfig|null);

                    /** BatchRecognizeRequest configMask */
                    configMask?: (google.protobuf.IFieldMask|null);

                    /** BatchRecognizeRequest files */
                    files?: (google.cloud.speech.v2.IBatchRecognizeFileMetadata[]|null);

                    /** BatchRecognizeRequest recognitionOutputConfig */
                    recognitionOutputConfig?: (google.cloud.speech.v2.IRecognitionOutputConfig|null);

                    /** BatchRecognizeRequest processingStrategy */
                    processingStrategy?: (google.cloud.speech.v2.BatchRecognizeRequest.ProcessingStrategy|keyof typeof google.cloud.speech.v2.BatchRecognizeRequest.ProcessingStrategy|null);
                }

                /** Represents a BatchRecognizeRequest. */
                class BatchRecognizeRequest implements IBatchRecognizeRequest {

                    /**
                     * Constructs a new BatchRecognizeRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IBatchRecognizeRequest);

                    /** BatchRecognizeRequest recognizer. */
                    public recognizer: string;

                    /** BatchRecognizeRequest config. */
                    public config?: (google.cloud.speech.v2.IRecognitionConfig|null);

                    /** BatchRecognizeRequest configMask. */
                    public configMask?: (google.protobuf.IFieldMask|null);

                    /** BatchRecognizeRequest files. */
                    public files: google.cloud.speech.v2.IBatchRecognizeFileMetadata[];

                    /** BatchRecognizeRequest recognitionOutputConfig. */
                    public recognitionOutputConfig?: (google.cloud.speech.v2.IRecognitionOutputConfig|null);

                    /** BatchRecognizeRequest processingStrategy. */
                    public processingStrategy: (google.cloud.speech.v2.BatchRecognizeRequest.ProcessingStrategy|keyof typeof google.cloud.speech.v2.BatchRecognizeRequest.ProcessingStrategy);

                    /**
                     * Creates a new BatchRecognizeRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BatchRecognizeRequest instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IBatchRecognizeRequest): google.cloud.speech.v2.BatchRecognizeRequest;

                    /**
                     * Encodes the specified BatchRecognizeRequest message. Does not implicitly {@link google.cloud.speech.v2.BatchRecognizeRequest.verify|verify} messages.
                     * @param message BatchRecognizeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IBatchRecognizeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BatchRecognizeRequest message, length delimited. Does not implicitly {@link google.cloud.speech.v2.BatchRecognizeRequest.verify|verify} messages.
                     * @param message BatchRecognizeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IBatchRecognizeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BatchRecognizeRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BatchRecognizeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.BatchRecognizeRequest;

                    /**
                     * Decodes a BatchRecognizeRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BatchRecognizeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.BatchRecognizeRequest;

                    /**
                     * Verifies a BatchRecognizeRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BatchRecognizeRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BatchRecognizeRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.BatchRecognizeRequest;

                    /**
                     * Creates a plain object from a BatchRecognizeRequest message. Also converts values to other types if specified.
                     * @param message BatchRecognizeRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.BatchRecognizeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BatchRecognizeRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for BatchRecognizeRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace BatchRecognizeRequest {

                    /** ProcessingStrategy enum. */
                    enum ProcessingStrategy {
                        PROCESSING_STRATEGY_UNSPECIFIED = 0,
                        DYNAMIC_BATCHING = 1
                    }
                }

                /** Properties of a GcsOutputConfig. */
                interface IGcsOutputConfig {

                    /** GcsOutputConfig uri */
                    uri?: (string|null);
                }

                /** Represents a GcsOutputConfig. */
                class GcsOutputConfig implements IGcsOutputConfig {

                    /**
                     * Constructs a new GcsOutputConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IGcsOutputConfig);

                    /** GcsOutputConfig uri. */
                    public uri: string;

                    /**
                     * Creates a new GcsOutputConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GcsOutputConfig instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IGcsOutputConfig): google.cloud.speech.v2.GcsOutputConfig;

                    /**
                     * Encodes the specified GcsOutputConfig message. Does not implicitly {@link google.cloud.speech.v2.GcsOutputConfig.verify|verify} messages.
                     * @param message GcsOutputConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IGcsOutputConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GcsOutputConfig message, length delimited. Does not implicitly {@link google.cloud.speech.v2.GcsOutputConfig.verify|verify} messages.
                     * @param message GcsOutputConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IGcsOutputConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GcsOutputConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GcsOutputConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.GcsOutputConfig;

                    /**
                     * Decodes a GcsOutputConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GcsOutputConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.GcsOutputConfig;

                    /**
                     * Verifies a GcsOutputConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GcsOutputConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GcsOutputConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.GcsOutputConfig;

                    /**
                     * Creates a plain object from a GcsOutputConfig message. Also converts values to other types if specified.
                     * @param message GcsOutputConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.GcsOutputConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GcsOutputConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GcsOutputConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an InlineOutputConfig. */
                interface IInlineOutputConfig {
                }

                /** Represents an InlineOutputConfig. */
                class InlineOutputConfig implements IInlineOutputConfig {

                    /**
                     * Constructs a new InlineOutputConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IInlineOutputConfig);

                    /**
                     * Creates a new InlineOutputConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns InlineOutputConfig instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IInlineOutputConfig): google.cloud.speech.v2.InlineOutputConfig;

                    /**
                     * Encodes the specified InlineOutputConfig message. Does not implicitly {@link google.cloud.speech.v2.InlineOutputConfig.verify|verify} messages.
                     * @param message InlineOutputConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IInlineOutputConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified InlineOutputConfig message, length delimited. Does not implicitly {@link google.cloud.speech.v2.InlineOutputConfig.verify|verify} messages.
                     * @param message InlineOutputConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IInlineOutputConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an InlineOutputConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns InlineOutputConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.InlineOutputConfig;

                    /**
                     * Decodes an InlineOutputConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns InlineOutputConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.InlineOutputConfig;

                    /**
                     * Verifies an InlineOutputConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an InlineOutputConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns InlineOutputConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.InlineOutputConfig;

                    /**
                     * Creates a plain object from an InlineOutputConfig message. Also converts values to other types if specified.
                     * @param message InlineOutputConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.InlineOutputConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this InlineOutputConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for InlineOutputConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a NativeOutputFileFormatConfig. */
                interface INativeOutputFileFormatConfig {
                }

                /** Represents a NativeOutputFileFormatConfig. */
                class NativeOutputFileFormatConfig implements INativeOutputFileFormatConfig {

                    /**
                     * Constructs a new NativeOutputFileFormatConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.INativeOutputFileFormatConfig);

                    /**
                     * Creates a new NativeOutputFileFormatConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns NativeOutputFileFormatConfig instance
                     */
                    public static create(properties?: google.cloud.speech.v2.INativeOutputFileFormatConfig): google.cloud.speech.v2.NativeOutputFileFormatConfig;

                    /**
                     * Encodes the specified NativeOutputFileFormatConfig message. Does not implicitly {@link google.cloud.speech.v2.NativeOutputFileFormatConfig.verify|verify} messages.
                     * @param message NativeOutputFileFormatConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.INativeOutputFileFormatConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified NativeOutputFileFormatConfig message, length delimited. Does not implicitly {@link google.cloud.speech.v2.NativeOutputFileFormatConfig.verify|verify} messages.
                     * @param message NativeOutputFileFormatConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.INativeOutputFileFormatConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a NativeOutputFileFormatConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns NativeOutputFileFormatConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.NativeOutputFileFormatConfig;

                    /**
                     * Decodes a NativeOutputFileFormatConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns NativeOutputFileFormatConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.NativeOutputFileFormatConfig;

                    /**
                     * Verifies a NativeOutputFileFormatConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a NativeOutputFileFormatConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns NativeOutputFileFormatConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.NativeOutputFileFormatConfig;

                    /**
                     * Creates a plain object from a NativeOutputFileFormatConfig message. Also converts values to other types if specified.
                     * @param message NativeOutputFileFormatConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.NativeOutputFileFormatConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this NativeOutputFileFormatConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for NativeOutputFileFormatConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a VttOutputFileFormatConfig. */
                interface IVttOutputFileFormatConfig {
                }

                /** Represents a VttOutputFileFormatConfig. */
                class VttOutputFileFormatConfig implements IVttOutputFileFormatConfig {

                    /**
                     * Constructs a new VttOutputFileFormatConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IVttOutputFileFormatConfig);

                    /**
                     * Creates a new VttOutputFileFormatConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns VttOutputFileFormatConfig instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IVttOutputFileFormatConfig): google.cloud.speech.v2.VttOutputFileFormatConfig;

                    /**
                     * Encodes the specified VttOutputFileFormatConfig message. Does not implicitly {@link google.cloud.speech.v2.VttOutputFileFormatConfig.verify|verify} messages.
                     * @param message VttOutputFileFormatConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IVttOutputFileFormatConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified VttOutputFileFormatConfig message, length delimited. Does not implicitly {@link google.cloud.speech.v2.VttOutputFileFormatConfig.verify|verify} messages.
                     * @param message VttOutputFileFormatConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IVttOutputFileFormatConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a VttOutputFileFormatConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns VttOutputFileFormatConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.VttOutputFileFormatConfig;

                    /**
                     * Decodes a VttOutputFileFormatConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns VttOutputFileFormatConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.VttOutputFileFormatConfig;

                    /**
                     * Verifies a VttOutputFileFormatConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a VttOutputFileFormatConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns VttOutputFileFormatConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.VttOutputFileFormatConfig;

                    /**
                     * Creates a plain object from a VttOutputFileFormatConfig message. Also converts values to other types if specified.
                     * @param message VttOutputFileFormatConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.VttOutputFileFormatConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this VttOutputFileFormatConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for VttOutputFileFormatConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a SrtOutputFileFormatConfig. */
                interface ISrtOutputFileFormatConfig {
                }

                /** Represents a SrtOutputFileFormatConfig. */
                class SrtOutputFileFormatConfig implements ISrtOutputFileFormatConfig {

                    /**
                     * Constructs a new SrtOutputFileFormatConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.ISrtOutputFileFormatConfig);

                    /**
                     * Creates a new SrtOutputFileFormatConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SrtOutputFileFormatConfig instance
                     */
                    public static create(properties?: google.cloud.speech.v2.ISrtOutputFileFormatConfig): google.cloud.speech.v2.SrtOutputFileFormatConfig;

                    /**
                     * Encodes the specified SrtOutputFileFormatConfig message. Does not implicitly {@link google.cloud.speech.v2.SrtOutputFileFormatConfig.verify|verify} messages.
                     * @param message SrtOutputFileFormatConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.ISrtOutputFileFormatConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SrtOutputFileFormatConfig message, length delimited. Does not implicitly {@link google.cloud.speech.v2.SrtOutputFileFormatConfig.verify|verify} messages.
                     * @param message SrtOutputFileFormatConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.ISrtOutputFileFormatConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SrtOutputFileFormatConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SrtOutputFileFormatConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.SrtOutputFileFormatConfig;

                    /**
                     * Decodes a SrtOutputFileFormatConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SrtOutputFileFormatConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.SrtOutputFileFormatConfig;

                    /**
                     * Verifies a SrtOutputFileFormatConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SrtOutputFileFormatConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SrtOutputFileFormatConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.SrtOutputFileFormatConfig;

                    /**
                     * Creates a plain object from a SrtOutputFileFormatConfig message. Also converts values to other types if specified.
                     * @param message SrtOutputFileFormatConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.SrtOutputFileFormatConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SrtOutputFileFormatConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SrtOutputFileFormatConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an OutputFormatConfig. */
                interface IOutputFormatConfig {

                    /** OutputFormatConfig native */
                    native?: (google.cloud.speech.v2.INativeOutputFileFormatConfig|null);

                    /** OutputFormatConfig vtt */
                    vtt?: (google.cloud.speech.v2.IVttOutputFileFormatConfig|null);

                    /** OutputFormatConfig srt */
                    srt?: (google.cloud.speech.v2.ISrtOutputFileFormatConfig|null);
                }

                /** Represents an OutputFormatConfig. */
                class OutputFormatConfig implements IOutputFormatConfig {

                    /**
                     * Constructs a new OutputFormatConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IOutputFormatConfig);

                    /** OutputFormatConfig native. */
                    public native?: (google.cloud.speech.v2.INativeOutputFileFormatConfig|null);

                    /** OutputFormatConfig vtt. */
                    public vtt?: (google.cloud.speech.v2.IVttOutputFileFormatConfig|null);

                    /** OutputFormatConfig srt. */
                    public srt?: (google.cloud.speech.v2.ISrtOutputFileFormatConfig|null);

                    /**
                     * Creates a new OutputFormatConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OutputFormatConfig instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IOutputFormatConfig): google.cloud.speech.v2.OutputFormatConfig;

                    /**
                     * Encodes the specified OutputFormatConfig message. Does not implicitly {@link google.cloud.speech.v2.OutputFormatConfig.verify|verify} messages.
                     * @param message OutputFormatConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IOutputFormatConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OutputFormatConfig message, length delimited. Does not implicitly {@link google.cloud.speech.v2.OutputFormatConfig.verify|verify} messages.
                     * @param message OutputFormatConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IOutputFormatConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OutputFormatConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OutputFormatConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.OutputFormatConfig;

                    /**
                     * Decodes an OutputFormatConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OutputFormatConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.OutputFormatConfig;

                    /**
                     * Verifies an OutputFormatConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an OutputFormatConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns OutputFormatConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.OutputFormatConfig;

                    /**
                     * Creates a plain object from an OutputFormatConfig message. Also converts values to other types if specified.
                     * @param message OutputFormatConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.OutputFormatConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OutputFormatConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for OutputFormatConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a RecognitionOutputConfig. */
                interface IRecognitionOutputConfig {

                    /** RecognitionOutputConfig gcsOutputConfig */
                    gcsOutputConfig?: (google.cloud.speech.v2.IGcsOutputConfig|null);

                    /** RecognitionOutputConfig inlineResponseConfig */
                    inlineResponseConfig?: (google.cloud.speech.v2.IInlineOutputConfig|null);

                    /** RecognitionOutputConfig outputFormatConfig */
                    outputFormatConfig?: (google.cloud.speech.v2.IOutputFormatConfig|null);
                }

                /** Represents a RecognitionOutputConfig. */
                class RecognitionOutputConfig implements IRecognitionOutputConfig {

                    /**
                     * Constructs a new RecognitionOutputConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IRecognitionOutputConfig);

                    /** RecognitionOutputConfig gcsOutputConfig. */
                    public gcsOutputConfig?: (google.cloud.speech.v2.IGcsOutputConfig|null);

                    /** RecognitionOutputConfig inlineResponseConfig. */
                    public inlineResponseConfig?: (google.cloud.speech.v2.IInlineOutputConfig|null);

                    /** RecognitionOutputConfig outputFormatConfig. */
                    public outputFormatConfig?: (google.cloud.speech.v2.IOutputFormatConfig|null);

                    /** RecognitionOutputConfig output. */
                    public output?: ("gcsOutputConfig"|"inlineResponseConfig");

                    /**
                     * Creates a new RecognitionOutputConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RecognitionOutputConfig instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IRecognitionOutputConfig): google.cloud.speech.v2.RecognitionOutputConfig;

                    /**
                     * Encodes the specified RecognitionOutputConfig message. Does not implicitly {@link google.cloud.speech.v2.RecognitionOutputConfig.verify|verify} messages.
                     * @param message RecognitionOutputConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IRecognitionOutputConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RecognitionOutputConfig message, length delimited. Does not implicitly {@link google.cloud.speech.v2.RecognitionOutputConfig.verify|verify} messages.
                     * @param message RecognitionOutputConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IRecognitionOutputConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RecognitionOutputConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RecognitionOutputConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.RecognitionOutputConfig;

                    /**
                     * Decodes a RecognitionOutputConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RecognitionOutputConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.RecognitionOutputConfig;

                    /**
                     * Verifies a RecognitionOutputConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RecognitionOutputConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RecognitionOutputConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.RecognitionOutputConfig;

                    /**
                     * Creates a plain object from a RecognitionOutputConfig message. Also converts values to other types if specified.
                     * @param message RecognitionOutputConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.RecognitionOutputConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RecognitionOutputConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RecognitionOutputConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a BatchRecognizeResponse. */
                interface IBatchRecognizeResponse {

                    /** BatchRecognizeResponse results */
                    results?: ({ [k: string]: google.cloud.speech.v2.IBatchRecognizeFileResult }|null);

                    /** BatchRecognizeResponse totalBilledDuration */
                    totalBilledDuration?: (google.protobuf.IDuration|null);
                }

                /** Represents a BatchRecognizeResponse. */
                class BatchRecognizeResponse implements IBatchRecognizeResponse {

                    /**
                     * Constructs a new BatchRecognizeResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IBatchRecognizeResponse);

                    /** BatchRecognizeResponse results. */
                    public results: { [k: string]: google.cloud.speech.v2.IBatchRecognizeFileResult };

                    /** BatchRecognizeResponse totalBilledDuration. */
                    public totalBilledDuration?: (google.protobuf.IDuration|null);

                    /**
                     * Creates a new BatchRecognizeResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BatchRecognizeResponse instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IBatchRecognizeResponse): google.cloud.speech.v2.BatchRecognizeResponse;

                    /**
                     * Encodes the specified BatchRecognizeResponse message. Does not implicitly {@link google.cloud.speech.v2.BatchRecognizeResponse.verify|verify} messages.
                     * @param message BatchRecognizeResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IBatchRecognizeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BatchRecognizeResponse message, length delimited. Does not implicitly {@link google.cloud.speech.v2.BatchRecognizeResponse.verify|verify} messages.
                     * @param message BatchRecognizeResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IBatchRecognizeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BatchRecognizeResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BatchRecognizeResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.BatchRecognizeResponse;

                    /**
                     * Decodes a BatchRecognizeResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BatchRecognizeResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.BatchRecognizeResponse;

                    /**
                     * Verifies a BatchRecognizeResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BatchRecognizeResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BatchRecognizeResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.BatchRecognizeResponse;

                    /**
                     * Creates a plain object from a BatchRecognizeResponse message. Also converts values to other types if specified.
                     * @param message BatchRecognizeResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.BatchRecognizeResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BatchRecognizeResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for BatchRecognizeResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a BatchRecognizeResults. */
                interface IBatchRecognizeResults {

                    /** BatchRecognizeResults results */
                    results?: (google.cloud.speech.v2.ISpeechRecognitionResult[]|null);

                    /** BatchRecognizeResults metadata */
                    metadata?: (google.cloud.speech.v2.IRecognitionResponseMetadata|null);
                }

                /** Represents a BatchRecognizeResults. */
                class BatchRecognizeResults implements IBatchRecognizeResults {

                    /**
                     * Constructs a new BatchRecognizeResults.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IBatchRecognizeResults);

                    /** BatchRecognizeResults results. */
                    public results: google.cloud.speech.v2.ISpeechRecognitionResult[];

                    /** BatchRecognizeResults metadata. */
                    public metadata?: (google.cloud.speech.v2.IRecognitionResponseMetadata|null);

                    /**
                     * Creates a new BatchRecognizeResults instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BatchRecognizeResults instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IBatchRecognizeResults): google.cloud.speech.v2.BatchRecognizeResults;

                    /**
                     * Encodes the specified BatchRecognizeResults message. Does not implicitly {@link google.cloud.speech.v2.BatchRecognizeResults.verify|verify} messages.
                     * @param message BatchRecognizeResults message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IBatchRecognizeResults, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BatchRecognizeResults message, length delimited. Does not implicitly {@link google.cloud.speech.v2.BatchRecognizeResults.verify|verify} messages.
                     * @param message BatchRecognizeResults message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IBatchRecognizeResults, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BatchRecognizeResults message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BatchRecognizeResults
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.BatchRecognizeResults;

                    /**
                     * Decodes a BatchRecognizeResults message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BatchRecognizeResults
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.BatchRecognizeResults;

                    /**
                     * Verifies a BatchRecognizeResults message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BatchRecognizeResults message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BatchRecognizeResults
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.BatchRecognizeResults;

                    /**
                     * Creates a plain object from a BatchRecognizeResults message. Also converts values to other types if specified.
                     * @param message BatchRecognizeResults
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.BatchRecognizeResults, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BatchRecognizeResults to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for BatchRecognizeResults
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CloudStorageResult. */
                interface ICloudStorageResult {

                    /** CloudStorageResult uri */
                    uri?: (string|null);

                    /** CloudStorageResult vttFormatUri */
                    vttFormatUri?: (string|null);

                    /** CloudStorageResult srtFormatUri */
                    srtFormatUri?: (string|null);
                }

                /** Represents a CloudStorageResult. */
                class CloudStorageResult implements ICloudStorageResult {

                    /**
                     * Constructs a new CloudStorageResult.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.ICloudStorageResult);

                    /** CloudStorageResult uri. */
                    public uri: string;

                    /** CloudStorageResult vttFormatUri. */
                    public vttFormatUri: string;

                    /** CloudStorageResult srtFormatUri. */
                    public srtFormatUri: string;

                    /**
                     * Creates a new CloudStorageResult instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CloudStorageResult instance
                     */
                    public static create(properties?: google.cloud.speech.v2.ICloudStorageResult): google.cloud.speech.v2.CloudStorageResult;

                    /**
                     * Encodes the specified CloudStorageResult message. Does not implicitly {@link google.cloud.speech.v2.CloudStorageResult.verify|verify} messages.
                     * @param message CloudStorageResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.ICloudStorageResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CloudStorageResult message, length delimited. Does not implicitly {@link google.cloud.speech.v2.CloudStorageResult.verify|verify} messages.
                     * @param message CloudStorageResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.ICloudStorageResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CloudStorageResult message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CloudStorageResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.CloudStorageResult;

                    /**
                     * Decodes a CloudStorageResult message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CloudStorageResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.CloudStorageResult;

                    /**
                     * Verifies a CloudStorageResult message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CloudStorageResult message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CloudStorageResult
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.CloudStorageResult;

                    /**
                     * Creates a plain object from a CloudStorageResult message. Also converts values to other types if specified.
                     * @param message CloudStorageResult
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.CloudStorageResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CloudStorageResult to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CloudStorageResult
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an InlineResult. */
                interface IInlineResult {

                    /** InlineResult transcript */
                    transcript?: (google.cloud.speech.v2.IBatchRecognizeResults|null);

                    /** InlineResult vttCaptions */
                    vttCaptions?: (string|null);

                    /** InlineResult srtCaptions */
                    srtCaptions?: (string|null);
                }

                /** Represents an InlineResult. */
                class InlineResult implements IInlineResult {

                    /**
                     * Constructs a new InlineResult.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IInlineResult);

                    /** InlineResult transcript. */
                    public transcript?: (google.cloud.speech.v2.IBatchRecognizeResults|null);

                    /** InlineResult vttCaptions. */
                    public vttCaptions: string;

                    /** InlineResult srtCaptions. */
                    public srtCaptions: string;

                    /**
                     * Creates a new InlineResult instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns InlineResult instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IInlineResult): google.cloud.speech.v2.InlineResult;

                    /**
                     * Encodes the specified InlineResult message. Does not implicitly {@link google.cloud.speech.v2.InlineResult.verify|verify} messages.
                     * @param message InlineResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IInlineResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified InlineResult message, length delimited. Does not implicitly {@link google.cloud.speech.v2.InlineResult.verify|verify} messages.
                     * @param message InlineResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IInlineResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an InlineResult message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns InlineResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.InlineResult;

                    /**
                     * Decodes an InlineResult message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns InlineResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.InlineResult;

                    /**
                     * Verifies an InlineResult message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an InlineResult message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns InlineResult
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.InlineResult;

                    /**
                     * Creates a plain object from an InlineResult message. Also converts values to other types if specified.
                     * @param message InlineResult
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.InlineResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this InlineResult to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for InlineResult
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a BatchRecognizeFileResult. */
                interface IBatchRecognizeFileResult {

                    /** BatchRecognizeFileResult error */
                    error?: (google.rpc.IStatus|null);

                    /** BatchRecognizeFileResult metadata */
                    metadata?: (google.cloud.speech.v2.IRecognitionResponseMetadata|null);

                    /** BatchRecognizeFileResult cloudStorageResult */
                    cloudStorageResult?: (google.cloud.speech.v2.ICloudStorageResult|null);

                    /** BatchRecognizeFileResult inlineResult */
                    inlineResult?: (google.cloud.speech.v2.IInlineResult|null);

                    /** BatchRecognizeFileResult uri */
                    uri?: (string|null);

                    /** BatchRecognizeFileResult transcript */
                    transcript?: (google.cloud.speech.v2.IBatchRecognizeResults|null);
                }

                /** Represents a BatchRecognizeFileResult. */
                class BatchRecognizeFileResult implements IBatchRecognizeFileResult {

                    /**
                     * Constructs a new BatchRecognizeFileResult.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IBatchRecognizeFileResult);

                    /** BatchRecognizeFileResult error. */
                    public error?: (google.rpc.IStatus|null);

                    /** BatchRecognizeFileResult metadata. */
                    public metadata?: (google.cloud.speech.v2.IRecognitionResponseMetadata|null);

                    /** BatchRecognizeFileResult cloudStorageResult. */
                    public cloudStorageResult?: (google.cloud.speech.v2.ICloudStorageResult|null);

                    /** BatchRecognizeFileResult inlineResult. */
                    public inlineResult?: (google.cloud.speech.v2.IInlineResult|null);

                    /** BatchRecognizeFileResult uri. */
                    public uri: string;

                    /** BatchRecognizeFileResult transcript. */
                    public transcript?: (google.cloud.speech.v2.IBatchRecognizeResults|null);

                    /** BatchRecognizeFileResult result. */
                    public result?: ("cloudStorageResult"|"inlineResult");

                    /**
                     * Creates a new BatchRecognizeFileResult instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BatchRecognizeFileResult instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IBatchRecognizeFileResult): google.cloud.speech.v2.BatchRecognizeFileResult;

                    /**
                     * Encodes the specified BatchRecognizeFileResult message. Does not implicitly {@link google.cloud.speech.v2.BatchRecognizeFileResult.verify|verify} messages.
                     * @param message BatchRecognizeFileResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IBatchRecognizeFileResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BatchRecognizeFileResult message, length delimited. Does not implicitly {@link google.cloud.speech.v2.BatchRecognizeFileResult.verify|verify} messages.
                     * @param message BatchRecognizeFileResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IBatchRecognizeFileResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BatchRecognizeFileResult message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BatchRecognizeFileResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.BatchRecognizeFileResult;

                    /**
                     * Decodes a BatchRecognizeFileResult message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BatchRecognizeFileResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.BatchRecognizeFileResult;

                    /**
                     * Verifies a BatchRecognizeFileResult message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BatchRecognizeFileResult message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BatchRecognizeFileResult
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.BatchRecognizeFileResult;

                    /**
                     * Creates a plain object from a BatchRecognizeFileResult message. Also converts values to other types if specified.
                     * @param message BatchRecognizeFileResult
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.BatchRecognizeFileResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BatchRecognizeFileResult to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for BatchRecognizeFileResult
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a BatchRecognizeTranscriptionMetadata. */
                interface IBatchRecognizeTranscriptionMetadata {

                    /** BatchRecognizeTranscriptionMetadata progressPercent */
                    progressPercent?: (number|null);

                    /** BatchRecognizeTranscriptionMetadata error */
                    error?: (google.rpc.IStatus|null);

                    /** BatchRecognizeTranscriptionMetadata uri */
                    uri?: (string|null);
                }

                /** Represents a BatchRecognizeTranscriptionMetadata. */
                class BatchRecognizeTranscriptionMetadata implements IBatchRecognizeTranscriptionMetadata {

                    /**
                     * Constructs a new BatchRecognizeTranscriptionMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IBatchRecognizeTranscriptionMetadata);

                    /** BatchRecognizeTranscriptionMetadata progressPercent. */
                    public progressPercent: number;

                    /** BatchRecognizeTranscriptionMetadata error. */
                    public error?: (google.rpc.IStatus|null);

                    /** BatchRecognizeTranscriptionMetadata uri. */
                    public uri: string;

                    /**
                     * Creates a new BatchRecognizeTranscriptionMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BatchRecognizeTranscriptionMetadata instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IBatchRecognizeTranscriptionMetadata): google.cloud.speech.v2.BatchRecognizeTranscriptionMetadata;

                    /**
                     * Encodes the specified BatchRecognizeTranscriptionMetadata message. Does not implicitly {@link google.cloud.speech.v2.BatchRecognizeTranscriptionMetadata.verify|verify} messages.
                     * @param message BatchRecognizeTranscriptionMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IBatchRecognizeTranscriptionMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BatchRecognizeTranscriptionMetadata message, length delimited. Does not implicitly {@link google.cloud.speech.v2.BatchRecognizeTranscriptionMetadata.verify|verify} messages.
                     * @param message BatchRecognizeTranscriptionMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IBatchRecognizeTranscriptionMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BatchRecognizeTranscriptionMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BatchRecognizeTranscriptionMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.BatchRecognizeTranscriptionMetadata;

                    /**
                     * Decodes a BatchRecognizeTranscriptionMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BatchRecognizeTranscriptionMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.BatchRecognizeTranscriptionMetadata;

                    /**
                     * Verifies a BatchRecognizeTranscriptionMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BatchRecognizeTranscriptionMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BatchRecognizeTranscriptionMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.BatchRecognizeTranscriptionMetadata;

                    /**
                     * Creates a plain object from a BatchRecognizeTranscriptionMetadata message. Also converts values to other types if specified.
                     * @param message BatchRecognizeTranscriptionMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.BatchRecognizeTranscriptionMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BatchRecognizeTranscriptionMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for BatchRecognizeTranscriptionMetadata
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a BatchRecognizeMetadata. */
                interface IBatchRecognizeMetadata {

                    /** BatchRecognizeMetadata transcriptionMetadata */
                    transcriptionMetadata?: ({ [k: string]: google.cloud.speech.v2.IBatchRecognizeTranscriptionMetadata }|null);
                }

                /** Represents a BatchRecognizeMetadata. */
                class BatchRecognizeMetadata implements IBatchRecognizeMetadata {

                    /**
                     * Constructs a new BatchRecognizeMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IBatchRecognizeMetadata);

                    /** BatchRecognizeMetadata transcriptionMetadata. */
                    public transcriptionMetadata: { [k: string]: google.cloud.speech.v2.IBatchRecognizeTranscriptionMetadata };

                    /**
                     * Creates a new BatchRecognizeMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BatchRecognizeMetadata instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IBatchRecognizeMetadata): google.cloud.speech.v2.BatchRecognizeMetadata;

                    /**
                     * Encodes the specified BatchRecognizeMetadata message. Does not implicitly {@link google.cloud.speech.v2.BatchRecognizeMetadata.verify|verify} messages.
                     * @param message BatchRecognizeMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IBatchRecognizeMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BatchRecognizeMetadata message, length delimited. Does not implicitly {@link google.cloud.speech.v2.BatchRecognizeMetadata.verify|verify} messages.
                     * @param message BatchRecognizeMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IBatchRecognizeMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BatchRecognizeMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BatchRecognizeMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.BatchRecognizeMetadata;

                    /**
                     * Decodes a BatchRecognizeMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BatchRecognizeMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.BatchRecognizeMetadata;

                    /**
                     * Verifies a BatchRecognizeMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BatchRecognizeMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BatchRecognizeMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.BatchRecognizeMetadata;

                    /**
                     * Creates a plain object from a BatchRecognizeMetadata message. Also converts values to other types if specified.
                     * @param message BatchRecognizeMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.BatchRecognizeMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BatchRecognizeMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for BatchRecognizeMetadata
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a BatchRecognizeFileMetadata. */
                interface IBatchRecognizeFileMetadata {

                    /** BatchRecognizeFileMetadata uri */
                    uri?: (string|null);

                    /** BatchRecognizeFileMetadata config */
                    config?: (google.cloud.speech.v2.IRecognitionConfig|null);

                    /** BatchRecognizeFileMetadata configMask */
                    configMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents a BatchRecognizeFileMetadata. */
                class BatchRecognizeFileMetadata implements IBatchRecognizeFileMetadata {

                    /**
                     * Constructs a new BatchRecognizeFileMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IBatchRecognizeFileMetadata);

                    /** BatchRecognizeFileMetadata uri. */
                    public uri?: (string|null);

                    /** BatchRecognizeFileMetadata config. */
                    public config?: (google.cloud.speech.v2.IRecognitionConfig|null);

                    /** BatchRecognizeFileMetadata configMask. */
                    public configMask?: (google.protobuf.IFieldMask|null);

                    /** BatchRecognizeFileMetadata audioSource. */
                    public audioSource?: "uri";

                    /**
                     * Creates a new BatchRecognizeFileMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BatchRecognizeFileMetadata instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IBatchRecognizeFileMetadata): google.cloud.speech.v2.BatchRecognizeFileMetadata;

                    /**
                     * Encodes the specified BatchRecognizeFileMetadata message. Does not implicitly {@link google.cloud.speech.v2.BatchRecognizeFileMetadata.verify|verify} messages.
                     * @param message BatchRecognizeFileMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IBatchRecognizeFileMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BatchRecognizeFileMetadata message, length delimited. Does not implicitly {@link google.cloud.speech.v2.BatchRecognizeFileMetadata.verify|verify} messages.
                     * @param message BatchRecognizeFileMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IBatchRecognizeFileMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BatchRecognizeFileMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BatchRecognizeFileMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.BatchRecognizeFileMetadata;

                    /**
                     * Decodes a BatchRecognizeFileMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BatchRecognizeFileMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.BatchRecognizeFileMetadata;

                    /**
                     * Verifies a BatchRecognizeFileMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BatchRecognizeFileMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BatchRecognizeFileMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.BatchRecognizeFileMetadata;

                    /**
                     * Creates a plain object from a BatchRecognizeFileMetadata message. Also converts values to other types if specified.
                     * @param message BatchRecognizeFileMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.BatchRecognizeFileMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BatchRecognizeFileMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for BatchRecognizeFileMetadata
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a StreamingRecognitionResult. */
                interface IStreamingRecognitionResult {

                    /** StreamingRecognitionResult alternatives */
                    alternatives?: (google.cloud.speech.v2.ISpeechRecognitionAlternative[]|null);

                    /** StreamingRecognitionResult isFinal */
                    isFinal?: (boolean|null);

                    /** StreamingRecognitionResult stability */
                    stability?: (number|null);

                    /** StreamingRecognitionResult resultEndOffset */
                    resultEndOffset?: (google.protobuf.IDuration|null);

                    /** StreamingRecognitionResult channelTag */
                    channelTag?: (number|null);

                    /** StreamingRecognitionResult languageCode */
                    languageCode?: (string|null);
                }

                /** Represents a StreamingRecognitionResult. */
                class StreamingRecognitionResult implements IStreamingRecognitionResult {

                    /**
                     * Constructs a new StreamingRecognitionResult.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IStreamingRecognitionResult);

                    /** StreamingRecognitionResult alternatives. */
                    public alternatives: google.cloud.speech.v2.ISpeechRecognitionAlternative[];

                    /** StreamingRecognitionResult isFinal. */
                    public isFinal: boolean;

                    /** StreamingRecognitionResult stability. */
                    public stability: number;

                    /** StreamingRecognitionResult resultEndOffset. */
                    public resultEndOffset?: (google.protobuf.IDuration|null);

                    /** StreamingRecognitionResult channelTag. */
                    public channelTag: number;

                    /** StreamingRecognitionResult languageCode. */
                    public languageCode: string;

                    /**
                     * Creates a new StreamingRecognitionResult instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StreamingRecognitionResult instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IStreamingRecognitionResult): google.cloud.speech.v2.StreamingRecognitionResult;

                    /**
                     * Encodes the specified StreamingRecognitionResult message. Does not implicitly {@link google.cloud.speech.v2.StreamingRecognitionResult.verify|verify} messages.
                     * @param message StreamingRecognitionResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IStreamingRecognitionResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified StreamingRecognitionResult message, length delimited. Does not implicitly {@link google.cloud.speech.v2.StreamingRecognitionResult.verify|verify} messages.
                     * @param message StreamingRecognitionResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IStreamingRecognitionResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StreamingRecognitionResult message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StreamingRecognitionResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.StreamingRecognitionResult;

                    /**
                     * Decodes a StreamingRecognitionResult message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns StreamingRecognitionResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.StreamingRecognitionResult;

                    /**
                     * Verifies a StreamingRecognitionResult message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a StreamingRecognitionResult message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns StreamingRecognitionResult
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.StreamingRecognitionResult;

                    /**
                     * Creates a plain object from a StreamingRecognitionResult message. Also converts values to other types if specified.
                     * @param message StreamingRecognitionResult
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.StreamingRecognitionResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this StreamingRecognitionResult to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for StreamingRecognitionResult
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a StreamingRecognizeResponse. */
                interface IStreamingRecognizeResponse {

                    /** StreamingRecognizeResponse results */
                    results?: (google.cloud.speech.v2.IStreamingRecognitionResult[]|null);

                    /** StreamingRecognizeResponse speechEventType */
                    speechEventType?: (google.cloud.speech.v2.StreamingRecognizeResponse.SpeechEventType|keyof typeof google.cloud.speech.v2.StreamingRecognizeResponse.SpeechEventType|null);

                    /** StreamingRecognizeResponse speechEventOffset */
                    speechEventOffset?: (google.protobuf.IDuration|null);

                    /** StreamingRecognizeResponse metadata */
                    metadata?: (google.cloud.speech.v2.IRecognitionResponseMetadata|null);
                }

                /** Represents a StreamingRecognizeResponse. */
                class StreamingRecognizeResponse implements IStreamingRecognizeResponse {

                    /**
                     * Constructs a new StreamingRecognizeResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IStreamingRecognizeResponse);

                    /** StreamingRecognizeResponse results. */
                    public results: google.cloud.speech.v2.IStreamingRecognitionResult[];

                    /** StreamingRecognizeResponse speechEventType. */
                    public speechEventType: (google.cloud.speech.v2.StreamingRecognizeResponse.SpeechEventType|keyof typeof google.cloud.speech.v2.StreamingRecognizeResponse.SpeechEventType);

                    /** StreamingRecognizeResponse speechEventOffset. */
                    public speechEventOffset?: (google.protobuf.IDuration|null);

                    /** StreamingRecognizeResponse metadata. */
                    public metadata?: (google.cloud.speech.v2.IRecognitionResponseMetadata|null);

                    /**
                     * Creates a new StreamingRecognizeResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StreamingRecognizeResponse instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IStreamingRecognizeResponse): google.cloud.speech.v2.StreamingRecognizeResponse;

                    /**
                     * Encodes the specified StreamingRecognizeResponse message. Does not implicitly {@link google.cloud.speech.v2.StreamingRecognizeResponse.verify|verify} messages.
                     * @param message StreamingRecognizeResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IStreamingRecognizeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified StreamingRecognizeResponse message, length delimited. Does not implicitly {@link google.cloud.speech.v2.StreamingRecognizeResponse.verify|verify} messages.
                     * @param message StreamingRecognizeResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IStreamingRecognizeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StreamingRecognizeResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StreamingRecognizeResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.StreamingRecognizeResponse;

                    /**
                     * Decodes a StreamingRecognizeResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns StreamingRecognizeResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.StreamingRecognizeResponse;

                    /**
                     * Verifies a StreamingRecognizeResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a StreamingRecognizeResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns StreamingRecognizeResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.StreamingRecognizeResponse;

                    /**
                     * Creates a plain object from a StreamingRecognizeResponse message. Also converts values to other types if specified.
                     * @param message StreamingRecognizeResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.StreamingRecognizeResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this StreamingRecognizeResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for StreamingRecognizeResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace StreamingRecognizeResponse {

                    /** SpeechEventType enum. */
                    enum SpeechEventType {
                        SPEECH_EVENT_TYPE_UNSPECIFIED = 0,
                        END_OF_SINGLE_UTTERANCE = 1,
                        SPEECH_ACTIVITY_BEGIN = 2,
                        SPEECH_ACTIVITY_END = 3
                    }
                }

                /** Properties of a Config. */
                interface IConfig {

                    /** Config name */
                    name?: (string|null);

                    /** Config kmsKeyName */
                    kmsKeyName?: (string|null);

                    /** Config updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a Config. */
                class Config implements IConfig {

                    /**
                     * Constructs a new Config.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IConfig);

                    /** Config name. */
                    public name: string;

                    /** Config kmsKeyName. */
                    public kmsKeyName: string;

                    /** Config updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new Config instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Config instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IConfig): google.cloud.speech.v2.Config;

                    /**
                     * Encodes the specified Config message. Does not implicitly {@link google.cloud.speech.v2.Config.verify|verify} messages.
                     * @param message Config message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Config message, length delimited. Does not implicitly {@link google.cloud.speech.v2.Config.verify|verify} messages.
                     * @param message Config message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Config message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Config
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.Config;

                    /**
                     * Decodes a Config message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Config
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.Config;

                    /**
                     * Verifies a Config message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Config message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Config
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.Config;

                    /**
                     * Creates a plain object from a Config message. Also converts values to other types if specified.
                     * @param message Config
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.Config, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Config to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Config
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetConfigRequest. */
                interface IGetConfigRequest {

                    /** GetConfigRequest name */
                    name?: (string|null);
                }

                /** Represents a GetConfigRequest. */
                class GetConfigRequest implements IGetConfigRequest {

                    /**
                     * Constructs a new GetConfigRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IGetConfigRequest);

                    /** GetConfigRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetConfigRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetConfigRequest instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IGetConfigRequest): google.cloud.speech.v2.GetConfigRequest;

                    /**
                     * Encodes the specified GetConfigRequest message. Does not implicitly {@link google.cloud.speech.v2.GetConfigRequest.verify|verify} messages.
                     * @param message GetConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IGetConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetConfigRequest message, length delimited. Does not implicitly {@link google.cloud.speech.v2.GetConfigRequest.verify|verify} messages.
                     * @param message GetConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IGetConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetConfigRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.GetConfigRequest;

                    /**
                     * Decodes a GetConfigRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.GetConfigRequest;

                    /**
                     * Verifies a GetConfigRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetConfigRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetConfigRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.GetConfigRequest;

                    /**
                     * Creates a plain object from a GetConfigRequest message. Also converts values to other types if specified.
                     * @param message GetConfigRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.GetConfigRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetConfigRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetConfigRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateConfigRequest. */
                interface IUpdateConfigRequest {

                    /** UpdateConfigRequest config */
                    config?: (google.cloud.speech.v2.IConfig|null);

                    /** UpdateConfigRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateConfigRequest. */
                class UpdateConfigRequest implements IUpdateConfigRequest {

                    /**
                     * Constructs a new UpdateConfigRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IUpdateConfigRequest);

                    /** UpdateConfigRequest config. */
                    public config?: (google.cloud.speech.v2.IConfig|null);

                    /** UpdateConfigRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateConfigRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateConfigRequest instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IUpdateConfigRequest): google.cloud.speech.v2.UpdateConfigRequest;

                    /**
                     * Encodes the specified UpdateConfigRequest message. Does not implicitly {@link google.cloud.speech.v2.UpdateConfigRequest.verify|verify} messages.
                     * @param message UpdateConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IUpdateConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateConfigRequest message, length delimited. Does not implicitly {@link google.cloud.speech.v2.UpdateConfigRequest.verify|verify} messages.
                     * @param message UpdateConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IUpdateConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateConfigRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.UpdateConfigRequest;

                    /**
                     * Decodes an UpdateConfigRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.UpdateConfigRequest;

                    /**
                     * Verifies an UpdateConfigRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateConfigRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateConfigRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.UpdateConfigRequest;

                    /**
                     * Creates a plain object from an UpdateConfigRequest message. Also converts values to other types if specified.
                     * @param message UpdateConfigRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.UpdateConfigRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateConfigRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateConfigRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CustomClass. */
                interface ICustomClass {

                    /** CustomClass name */
                    name?: (string|null);

                    /** CustomClass uid */
                    uid?: (string|null);

                    /** CustomClass displayName */
                    displayName?: (string|null);

                    /** CustomClass items */
                    items?: (google.cloud.speech.v2.CustomClass.IClassItem[]|null);

                    /** CustomClass state */
                    state?: (google.cloud.speech.v2.CustomClass.State|keyof typeof google.cloud.speech.v2.CustomClass.State|null);

                    /** CustomClass createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** CustomClass updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** CustomClass deleteTime */
                    deleteTime?: (google.protobuf.ITimestamp|null);

                    /** CustomClass expireTime */
                    expireTime?: (google.protobuf.ITimestamp|null);

                    /** CustomClass annotations */
                    annotations?: ({ [k: string]: string }|null);

                    /** CustomClass etag */
                    etag?: (string|null);

                    /** CustomClass reconciling */
                    reconciling?: (boolean|null);

                    /** CustomClass kmsKeyName */
                    kmsKeyName?: (string|null);

                    /** CustomClass kmsKeyVersionName */
                    kmsKeyVersionName?: (string|null);
                }

                /** Represents a CustomClass. */
                class CustomClass implements ICustomClass {

                    /**
                     * Constructs a new CustomClass.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.ICustomClass);

                    /** CustomClass name. */
                    public name: string;

                    /** CustomClass uid. */
                    public uid: string;

                    /** CustomClass displayName. */
                    public displayName: string;

                    /** CustomClass items. */
                    public items: google.cloud.speech.v2.CustomClass.IClassItem[];

                    /** CustomClass state. */
                    public state: (google.cloud.speech.v2.CustomClass.State|keyof typeof google.cloud.speech.v2.CustomClass.State);

                    /** CustomClass createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** CustomClass updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** CustomClass deleteTime. */
                    public deleteTime?: (google.protobuf.ITimestamp|null);

                    /** CustomClass expireTime. */
                    public expireTime?: (google.protobuf.ITimestamp|null);

                    /** CustomClass annotations. */
                    public annotations: { [k: string]: string };

                    /** CustomClass etag. */
                    public etag: string;

                    /** CustomClass reconciling. */
                    public reconciling: boolean;

                    /** CustomClass kmsKeyName. */
                    public kmsKeyName: string;

                    /** CustomClass kmsKeyVersionName. */
                    public kmsKeyVersionName: string;

                    /**
                     * Creates a new CustomClass instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CustomClass instance
                     */
                    public static create(properties?: google.cloud.speech.v2.ICustomClass): google.cloud.speech.v2.CustomClass;

                    /**
                     * Encodes the specified CustomClass message. Does not implicitly {@link google.cloud.speech.v2.CustomClass.verify|verify} messages.
                     * @param message CustomClass message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.ICustomClass, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CustomClass message, length delimited. Does not implicitly {@link google.cloud.speech.v2.CustomClass.verify|verify} messages.
                     * @param message CustomClass message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.ICustomClass, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CustomClass message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CustomClass
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.CustomClass;

                    /**
                     * Decodes a CustomClass message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CustomClass
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.CustomClass;

                    /**
                     * Verifies a CustomClass message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CustomClass message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CustomClass
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.CustomClass;

                    /**
                     * Creates a plain object from a CustomClass message. Also converts values to other types if specified.
                     * @param message CustomClass
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.CustomClass, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CustomClass to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CustomClass
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace CustomClass {

                    /** Properties of a ClassItem. */
                    interface IClassItem {

                        /** ClassItem value */
                        value?: (string|null);
                    }

                    /** Represents a ClassItem. */
                    class ClassItem implements IClassItem {

                        /**
                         * Constructs a new ClassItem.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.speech.v2.CustomClass.IClassItem);

                        /** ClassItem value. */
                        public value: string;

                        /**
                         * Creates a new ClassItem instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ClassItem instance
                         */
                        public static create(properties?: google.cloud.speech.v2.CustomClass.IClassItem): google.cloud.speech.v2.CustomClass.ClassItem;

                        /**
                         * Encodes the specified ClassItem message. Does not implicitly {@link google.cloud.speech.v2.CustomClass.ClassItem.verify|verify} messages.
                         * @param message ClassItem message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.speech.v2.CustomClass.IClassItem, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ClassItem message, length delimited. Does not implicitly {@link google.cloud.speech.v2.CustomClass.ClassItem.verify|verify} messages.
                         * @param message ClassItem message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.speech.v2.CustomClass.IClassItem, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ClassItem message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ClassItem
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.CustomClass.ClassItem;

                        /**
                         * Decodes a ClassItem message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ClassItem
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.CustomClass.ClassItem;

                        /**
                         * Verifies a ClassItem message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ClassItem message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ClassItem
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.CustomClass.ClassItem;

                        /**
                         * Creates a plain object from a ClassItem message. Also converts values to other types if specified.
                         * @param message ClassItem
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.speech.v2.CustomClass.ClassItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ClassItem to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ClassItem
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        ACTIVE = 2,
                        DELETED = 4
                    }
                }

                /** Properties of a PhraseSet. */
                interface IPhraseSet {

                    /** PhraseSet name */
                    name?: (string|null);

                    /** PhraseSet uid */
                    uid?: (string|null);

                    /** PhraseSet phrases */
                    phrases?: (google.cloud.speech.v2.PhraseSet.IPhrase[]|null);

                    /** PhraseSet boost */
                    boost?: (number|null);

                    /** PhraseSet displayName */
                    displayName?: (string|null);

                    /** PhraseSet state */
                    state?: (google.cloud.speech.v2.PhraseSet.State|keyof typeof google.cloud.speech.v2.PhraseSet.State|null);

                    /** PhraseSet createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** PhraseSet updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** PhraseSet deleteTime */
                    deleteTime?: (google.protobuf.ITimestamp|null);

                    /** PhraseSet expireTime */
                    expireTime?: (google.protobuf.ITimestamp|null);

                    /** PhraseSet annotations */
                    annotations?: ({ [k: string]: string }|null);

                    /** PhraseSet etag */
                    etag?: (string|null);

                    /** PhraseSet reconciling */
                    reconciling?: (boolean|null);

                    /** PhraseSet kmsKeyName */
                    kmsKeyName?: (string|null);

                    /** PhraseSet kmsKeyVersionName */
                    kmsKeyVersionName?: (string|null);
                }

                /** Represents a PhraseSet. */
                class PhraseSet implements IPhraseSet {

                    /**
                     * Constructs a new PhraseSet.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IPhraseSet);

                    /** PhraseSet name. */
                    public name: string;

                    /** PhraseSet uid. */
                    public uid: string;

                    /** PhraseSet phrases. */
                    public phrases: google.cloud.speech.v2.PhraseSet.IPhrase[];

                    /** PhraseSet boost. */
                    public boost: number;

                    /** PhraseSet displayName. */
                    public displayName: string;

                    /** PhraseSet state. */
                    public state: (google.cloud.speech.v2.PhraseSet.State|keyof typeof google.cloud.speech.v2.PhraseSet.State);

                    /** PhraseSet createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** PhraseSet updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** PhraseSet deleteTime. */
                    public deleteTime?: (google.protobuf.ITimestamp|null);

                    /** PhraseSet expireTime. */
                    public expireTime?: (google.protobuf.ITimestamp|null);

                    /** PhraseSet annotations. */
                    public annotations: { [k: string]: string };

                    /** PhraseSet etag. */
                    public etag: string;

                    /** PhraseSet reconciling. */
                    public reconciling: boolean;

                    /** PhraseSet kmsKeyName. */
                    public kmsKeyName: string;

                    /** PhraseSet kmsKeyVersionName. */
                    public kmsKeyVersionName: string;

                    /**
                     * Creates a new PhraseSet instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PhraseSet instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IPhraseSet): google.cloud.speech.v2.PhraseSet;

                    /**
                     * Encodes the specified PhraseSet message. Does not implicitly {@link google.cloud.speech.v2.PhraseSet.verify|verify} messages.
                     * @param message PhraseSet message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IPhraseSet, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PhraseSet message, length delimited. Does not implicitly {@link google.cloud.speech.v2.PhraseSet.verify|verify} messages.
                     * @param message PhraseSet message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IPhraseSet, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PhraseSet message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PhraseSet
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.PhraseSet;

                    /**
                     * Decodes a PhraseSet message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PhraseSet
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.PhraseSet;

                    /**
                     * Verifies a PhraseSet message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PhraseSet message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PhraseSet
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.PhraseSet;

                    /**
                     * Creates a plain object from a PhraseSet message. Also converts values to other types if specified.
                     * @param message PhraseSet
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.PhraseSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PhraseSet to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for PhraseSet
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace PhraseSet {

                    /** Properties of a Phrase. */
                    interface IPhrase {

                        /** Phrase value */
                        value?: (string|null);

                        /** Phrase boost */
                        boost?: (number|null);
                    }

                    /** Represents a Phrase. */
                    class Phrase implements IPhrase {

                        /**
                         * Constructs a new Phrase.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.speech.v2.PhraseSet.IPhrase);

                        /** Phrase value. */
                        public value: string;

                        /** Phrase boost. */
                        public boost: number;

                        /**
                         * Creates a new Phrase instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Phrase instance
                         */
                        public static create(properties?: google.cloud.speech.v2.PhraseSet.IPhrase): google.cloud.speech.v2.PhraseSet.Phrase;

                        /**
                         * Encodes the specified Phrase message. Does not implicitly {@link google.cloud.speech.v2.PhraseSet.Phrase.verify|verify} messages.
                         * @param message Phrase message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.speech.v2.PhraseSet.IPhrase, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Phrase message, length delimited. Does not implicitly {@link google.cloud.speech.v2.PhraseSet.Phrase.verify|verify} messages.
                         * @param message Phrase message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.speech.v2.PhraseSet.IPhrase, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Phrase message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Phrase
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.PhraseSet.Phrase;

                        /**
                         * Decodes a Phrase message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Phrase
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.PhraseSet.Phrase;

                        /**
                         * Verifies a Phrase message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Phrase message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Phrase
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.PhraseSet.Phrase;

                        /**
                         * Creates a plain object from a Phrase message. Also converts values to other types if specified.
                         * @param message Phrase
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.speech.v2.PhraseSet.Phrase, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Phrase to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Phrase
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        ACTIVE = 2,
                        DELETED = 4
                    }
                }

                /** Properties of a CreateCustomClassRequest. */
                interface ICreateCustomClassRequest {

                    /** CreateCustomClassRequest customClass */
                    customClass?: (google.cloud.speech.v2.ICustomClass|null);

                    /** CreateCustomClassRequest validateOnly */
                    validateOnly?: (boolean|null);

                    /** CreateCustomClassRequest customClassId */
                    customClassId?: (string|null);

                    /** CreateCustomClassRequest parent */
                    parent?: (string|null);
                }

                /** Represents a CreateCustomClassRequest. */
                class CreateCustomClassRequest implements ICreateCustomClassRequest {

                    /**
                     * Constructs a new CreateCustomClassRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.ICreateCustomClassRequest);

                    /** CreateCustomClassRequest customClass. */
                    public customClass?: (google.cloud.speech.v2.ICustomClass|null);

                    /** CreateCustomClassRequest validateOnly. */
                    public validateOnly: boolean;

                    /** CreateCustomClassRequest customClassId. */
                    public customClassId: string;

                    /** CreateCustomClassRequest parent. */
                    public parent: string;

                    /**
                     * Creates a new CreateCustomClassRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateCustomClassRequest instance
                     */
                    public static create(properties?: google.cloud.speech.v2.ICreateCustomClassRequest): google.cloud.speech.v2.CreateCustomClassRequest;

                    /**
                     * Encodes the specified CreateCustomClassRequest message. Does not implicitly {@link google.cloud.speech.v2.CreateCustomClassRequest.verify|verify} messages.
                     * @param message CreateCustomClassRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.ICreateCustomClassRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateCustomClassRequest message, length delimited. Does not implicitly {@link google.cloud.speech.v2.CreateCustomClassRequest.verify|verify} messages.
                     * @param message CreateCustomClassRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.ICreateCustomClassRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateCustomClassRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateCustomClassRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.CreateCustomClassRequest;

                    /**
                     * Decodes a CreateCustomClassRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateCustomClassRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.CreateCustomClassRequest;

                    /**
                     * Verifies a CreateCustomClassRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateCustomClassRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateCustomClassRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.CreateCustomClassRequest;

                    /**
                     * Creates a plain object from a CreateCustomClassRequest message. Also converts values to other types if specified.
                     * @param message CreateCustomClassRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.CreateCustomClassRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateCustomClassRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateCustomClassRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListCustomClassesRequest. */
                interface IListCustomClassesRequest {

                    /** ListCustomClassesRequest parent */
                    parent?: (string|null);

                    /** ListCustomClassesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListCustomClassesRequest pageToken */
                    pageToken?: (string|null);

                    /** ListCustomClassesRequest showDeleted */
                    showDeleted?: (boolean|null);
                }

                /** Represents a ListCustomClassesRequest. */
                class ListCustomClassesRequest implements IListCustomClassesRequest {

                    /**
                     * Constructs a new ListCustomClassesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IListCustomClassesRequest);

                    /** ListCustomClassesRequest parent. */
                    public parent: string;

                    /** ListCustomClassesRequest pageSize. */
                    public pageSize: number;

                    /** ListCustomClassesRequest pageToken. */
                    public pageToken: string;

                    /** ListCustomClassesRequest showDeleted. */
                    public showDeleted: boolean;

                    /**
                     * Creates a new ListCustomClassesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListCustomClassesRequest instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IListCustomClassesRequest): google.cloud.speech.v2.ListCustomClassesRequest;

                    /**
                     * Encodes the specified ListCustomClassesRequest message. Does not implicitly {@link google.cloud.speech.v2.ListCustomClassesRequest.verify|verify} messages.
                     * @param message ListCustomClassesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IListCustomClassesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListCustomClassesRequest message, length delimited. Does not implicitly {@link google.cloud.speech.v2.ListCustomClassesRequest.verify|verify} messages.
                     * @param message ListCustomClassesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IListCustomClassesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListCustomClassesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListCustomClassesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.ListCustomClassesRequest;

                    /**
                     * Decodes a ListCustomClassesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListCustomClassesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.ListCustomClassesRequest;

                    /**
                     * Verifies a ListCustomClassesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListCustomClassesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListCustomClassesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.ListCustomClassesRequest;

                    /**
                     * Creates a plain object from a ListCustomClassesRequest message. Also converts values to other types if specified.
                     * @param message ListCustomClassesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.ListCustomClassesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListCustomClassesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListCustomClassesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListCustomClassesResponse. */
                interface IListCustomClassesResponse {

                    /** ListCustomClassesResponse customClasses */
                    customClasses?: (google.cloud.speech.v2.ICustomClass[]|null);

                    /** ListCustomClassesResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListCustomClassesResponse. */
                class ListCustomClassesResponse implements IListCustomClassesResponse {

                    /**
                     * Constructs a new ListCustomClassesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IListCustomClassesResponse);

                    /** ListCustomClassesResponse customClasses. */
                    public customClasses: google.cloud.speech.v2.ICustomClass[];

                    /** ListCustomClassesResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListCustomClassesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListCustomClassesResponse instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IListCustomClassesResponse): google.cloud.speech.v2.ListCustomClassesResponse;

                    /**
                     * Encodes the specified ListCustomClassesResponse message. Does not implicitly {@link google.cloud.speech.v2.ListCustomClassesResponse.verify|verify} messages.
                     * @param message ListCustomClassesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IListCustomClassesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListCustomClassesResponse message, length delimited. Does not implicitly {@link google.cloud.speech.v2.ListCustomClassesResponse.verify|verify} messages.
                     * @param message ListCustomClassesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IListCustomClassesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListCustomClassesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListCustomClassesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.ListCustomClassesResponse;

                    /**
                     * Decodes a ListCustomClassesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListCustomClassesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.ListCustomClassesResponse;

                    /**
                     * Verifies a ListCustomClassesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListCustomClassesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListCustomClassesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.ListCustomClassesResponse;

                    /**
                     * Creates a plain object from a ListCustomClassesResponse message. Also converts values to other types if specified.
                     * @param message ListCustomClassesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.ListCustomClassesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListCustomClassesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListCustomClassesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetCustomClassRequest. */
                interface IGetCustomClassRequest {

                    /** GetCustomClassRequest name */
                    name?: (string|null);
                }

                /** Represents a GetCustomClassRequest. */
                class GetCustomClassRequest implements IGetCustomClassRequest {

                    /**
                     * Constructs a new GetCustomClassRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IGetCustomClassRequest);

                    /** GetCustomClassRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetCustomClassRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetCustomClassRequest instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IGetCustomClassRequest): google.cloud.speech.v2.GetCustomClassRequest;

                    /**
                     * Encodes the specified GetCustomClassRequest message. Does not implicitly {@link google.cloud.speech.v2.GetCustomClassRequest.verify|verify} messages.
                     * @param message GetCustomClassRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IGetCustomClassRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetCustomClassRequest message, length delimited. Does not implicitly {@link google.cloud.speech.v2.GetCustomClassRequest.verify|verify} messages.
                     * @param message GetCustomClassRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IGetCustomClassRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetCustomClassRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetCustomClassRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.GetCustomClassRequest;

                    /**
                     * Decodes a GetCustomClassRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetCustomClassRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.GetCustomClassRequest;

                    /**
                     * Verifies a GetCustomClassRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetCustomClassRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetCustomClassRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.GetCustomClassRequest;

                    /**
                     * Creates a plain object from a GetCustomClassRequest message. Also converts values to other types if specified.
                     * @param message GetCustomClassRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.GetCustomClassRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetCustomClassRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetCustomClassRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateCustomClassRequest. */
                interface IUpdateCustomClassRequest {

                    /** UpdateCustomClassRequest customClass */
                    customClass?: (google.cloud.speech.v2.ICustomClass|null);

                    /** UpdateCustomClassRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateCustomClassRequest validateOnly */
                    validateOnly?: (boolean|null);
                }

                /** Represents an UpdateCustomClassRequest. */
                class UpdateCustomClassRequest implements IUpdateCustomClassRequest {

                    /**
                     * Constructs a new UpdateCustomClassRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IUpdateCustomClassRequest);

                    /** UpdateCustomClassRequest customClass. */
                    public customClass?: (google.cloud.speech.v2.ICustomClass|null);

                    /** UpdateCustomClassRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateCustomClassRequest validateOnly. */
                    public validateOnly: boolean;

                    /**
                     * Creates a new UpdateCustomClassRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateCustomClassRequest instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IUpdateCustomClassRequest): google.cloud.speech.v2.UpdateCustomClassRequest;

                    /**
                     * Encodes the specified UpdateCustomClassRequest message. Does not implicitly {@link google.cloud.speech.v2.UpdateCustomClassRequest.verify|verify} messages.
                     * @param message UpdateCustomClassRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IUpdateCustomClassRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateCustomClassRequest message, length delimited. Does not implicitly {@link google.cloud.speech.v2.UpdateCustomClassRequest.verify|verify} messages.
                     * @param message UpdateCustomClassRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IUpdateCustomClassRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateCustomClassRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateCustomClassRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.UpdateCustomClassRequest;

                    /**
                     * Decodes an UpdateCustomClassRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateCustomClassRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.UpdateCustomClassRequest;

                    /**
                     * Verifies an UpdateCustomClassRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateCustomClassRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateCustomClassRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.UpdateCustomClassRequest;

                    /**
                     * Creates a plain object from an UpdateCustomClassRequest message. Also converts values to other types if specified.
                     * @param message UpdateCustomClassRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.UpdateCustomClassRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateCustomClassRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateCustomClassRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteCustomClassRequest. */
                interface IDeleteCustomClassRequest {

                    /** DeleteCustomClassRequest name */
                    name?: (string|null);

                    /** DeleteCustomClassRequest validateOnly */
                    validateOnly?: (boolean|null);

                    /** DeleteCustomClassRequest allowMissing */
                    allowMissing?: (boolean|null);

                    /** DeleteCustomClassRequest etag */
                    etag?: (string|null);
                }

                /** Represents a DeleteCustomClassRequest. */
                class DeleteCustomClassRequest implements IDeleteCustomClassRequest {

                    /**
                     * Constructs a new DeleteCustomClassRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IDeleteCustomClassRequest);

                    /** DeleteCustomClassRequest name. */
                    public name: string;

                    /** DeleteCustomClassRequest validateOnly. */
                    public validateOnly: boolean;

                    /** DeleteCustomClassRequest allowMissing. */
                    public allowMissing: boolean;

                    /** DeleteCustomClassRequest etag. */
                    public etag: string;

                    /**
                     * Creates a new DeleteCustomClassRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteCustomClassRequest instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IDeleteCustomClassRequest): google.cloud.speech.v2.DeleteCustomClassRequest;

                    /**
                     * Encodes the specified DeleteCustomClassRequest message. Does not implicitly {@link google.cloud.speech.v2.DeleteCustomClassRequest.verify|verify} messages.
                     * @param message DeleteCustomClassRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IDeleteCustomClassRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteCustomClassRequest message, length delimited. Does not implicitly {@link google.cloud.speech.v2.DeleteCustomClassRequest.verify|verify} messages.
                     * @param message DeleteCustomClassRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IDeleteCustomClassRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteCustomClassRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteCustomClassRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.DeleteCustomClassRequest;

                    /**
                     * Decodes a DeleteCustomClassRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteCustomClassRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.DeleteCustomClassRequest;

                    /**
                     * Verifies a DeleteCustomClassRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteCustomClassRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteCustomClassRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.DeleteCustomClassRequest;

                    /**
                     * Creates a plain object from a DeleteCustomClassRequest message. Also converts values to other types if specified.
                     * @param message DeleteCustomClassRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.DeleteCustomClassRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteCustomClassRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteCustomClassRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UndeleteCustomClassRequest. */
                interface IUndeleteCustomClassRequest {

                    /** UndeleteCustomClassRequest name */
                    name?: (string|null);

                    /** UndeleteCustomClassRequest validateOnly */
                    validateOnly?: (boolean|null);

                    /** UndeleteCustomClassRequest etag */
                    etag?: (string|null);
                }

                /** Represents an UndeleteCustomClassRequest. */
                class UndeleteCustomClassRequest implements IUndeleteCustomClassRequest {

                    /**
                     * Constructs a new UndeleteCustomClassRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IUndeleteCustomClassRequest);

                    /** UndeleteCustomClassRequest name. */
                    public name: string;

                    /** UndeleteCustomClassRequest validateOnly. */
                    public validateOnly: boolean;

                    /** UndeleteCustomClassRequest etag. */
                    public etag: string;

                    /**
                     * Creates a new UndeleteCustomClassRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UndeleteCustomClassRequest instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IUndeleteCustomClassRequest): google.cloud.speech.v2.UndeleteCustomClassRequest;

                    /**
                     * Encodes the specified UndeleteCustomClassRequest message. Does not implicitly {@link google.cloud.speech.v2.UndeleteCustomClassRequest.verify|verify} messages.
                     * @param message UndeleteCustomClassRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IUndeleteCustomClassRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UndeleteCustomClassRequest message, length delimited. Does not implicitly {@link google.cloud.speech.v2.UndeleteCustomClassRequest.verify|verify} messages.
                     * @param message UndeleteCustomClassRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IUndeleteCustomClassRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UndeleteCustomClassRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UndeleteCustomClassRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.UndeleteCustomClassRequest;

                    /**
                     * Decodes an UndeleteCustomClassRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UndeleteCustomClassRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.UndeleteCustomClassRequest;

                    /**
                     * Verifies an UndeleteCustomClassRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UndeleteCustomClassRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UndeleteCustomClassRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.UndeleteCustomClassRequest;

                    /**
                     * Creates a plain object from an UndeleteCustomClassRequest message. Also converts values to other types if specified.
                     * @param message UndeleteCustomClassRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.UndeleteCustomClassRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UndeleteCustomClassRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UndeleteCustomClassRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreatePhraseSetRequest. */
                interface ICreatePhraseSetRequest {

                    /** CreatePhraseSetRequest phraseSet */
                    phraseSet?: (google.cloud.speech.v2.IPhraseSet|null);

                    /** CreatePhraseSetRequest validateOnly */
                    validateOnly?: (boolean|null);

                    /** CreatePhraseSetRequest phraseSetId */
                    phraseSetId?: (string|null);

                    /** CreatePhraseSetRequest parent */
                    parent?: (string|null);
                }

                /** Represents a CreatePhraseSetRequest. */
                class CreatePhraseSetRequest implements ICreatePhraseSetRequest {

                    /**
                     * Constructs a new CreatePhraseSetRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.ICreatePhraseSetRequest);

                    /** CreatePhraseSetRequest phraseSet. */
                    public phraseSet?: (google.cloud.speech.v2.IPhraseSet|null);

                    /** CreatePhraseSetRequest validateOnly. */
                    public validateOnly: boolean;

                    /** CreatePhraseSetRequest phraseSetId. */
                    public phraseSetId: string;

                    /** CreatePhraseSetRequest parent. */
                    public parent: string;

                    /**
                     * Creates a new CreatePhraseSetRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreatePhraseSetRequest instance
                     */
                    public static create(properties?: google.cloud.speech.v2.ICreatePhraseSetRequest): google.cloud.speech.v2.CreatePhraseSetRequest;

                    /**
                     * Encodes the specified CreatePhraseSetRequest message. Does not implicitly {@link google.cloud.speech.v2.CreatePhraseSetRequest.verify|verify} messages.
                     * @param message CreatePhraseSetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.ICreatePhraseSetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreatePhraseSetRequest message, length delimited. Does not implicitly {@link google.cloud.speech.v2.CreatePhraseSetRequest.verify|verify} messages.
                     * @param message CreatePhraseSetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.ICreatePhraseSetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreatePhraseSetRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreatePhraseSetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.CreatePhraseSetRequest;

                    /**
                     * Decodes a CreatePhraseSetRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreatePhraseSetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.CreatePhraseSetRequest;

                    /**
                     * Verifies a CreatePhraseSetRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreatePhraseSetRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreatePhraseSetRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.CreatePhraseSetRequest;

                    /**
                     * Creates a plain object from a CreatePhraseSetRequest message. Also converts values to other types if specified.
                     * @param message CreatePhraseSetRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.CreatePhraseSetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreatePhraseSetRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreatePhraseSetRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListPhraseSetsRequest. */
                interface IListPhraseSetsRequest {

                    /** ListPhraseSetsRequest parent */
                    parent?: (string|null);

                    /** ListPhraseSetsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListPhraseSetsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListPhraseSetsRequest showDeleted */
                    showDeleted?: (boolean|null);
                }

                /** Represents a ListPhraseSetsRequest. */
                class ListPhraseSetsRequest implements IListPhraseSetsRequest {

                    /**
                     * Constructs a new ListPhraseSetsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IListPhraseSetsRequest);

                    /** ListPhraseSetsRequest parent. */
                    public parent: string;

                    /** ListPhraseSetsRequest pageSize. */
                    public pageSize: number;

                    /** ListPhraseSetsRequest pageToken. */
                    public pageToken: string;

                    /** ListPhraseSetsRequest showDeleted. */
                    public showDeleted: boolean;

                    /**
                     * Creates a new ListPhraseSetsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListPhraseSetsRequest instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IListPhraseSetsRequest): google.cloud.speech.v2.ListPhraseSetsRequest;

                    /**
                     * Encodes the specified ListPhraseSetsRequest message. Does not implicitly {@link google.cloud.speech.v2.ListPhraseSetsRequest.verify|verify} messages.
                     * @param message ListPhraseSetsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IListPhraseSetsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListPhraseSetsRequest message, length delimited. Does not implicitly {@link google.cloud.speech.v2.ListPhraseSetsRequest.verify|verify} messages.
                     * @param message ListPhraseSetsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IListPhraseSetsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListPhraseSetsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListPhraseSetsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.ListPhraseSetsRequest;

                    /**
                     * Decodes a ListPhraseSetsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListPhraseSetsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.ListPhraseSetsRequest;

                    /**
                     * Verifies a ListPhraseSetsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListPhraseSetsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListPhraseSetsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.ListPhraseSetsRequest;

                    /**
                     * Creates a plain object from a ListPhraseSetsRequest message. Also converts values to other types if specified.
                     * @param message ListPhraseSetsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.ListPhraseSetsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListPhraseSetsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListPhraseSetsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListPhraseSetsResponse. */
                interface IListPhraseSetsResponse {

                    /** ListPhraseSetsResponse phraseSets */
                    phraseSets?: (google.cloud.speech.v2.IPhraseSet[]|null);

                    /** ListPhraseSetsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListPhraseSetsResponse. */
                class ListPhraseSetsResponse implements IListPhraseSetsResponse {

                    /**
                     * Constructs a new ListPhraseSetsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IListPhraseSetsResponse);

                    /** ListPhraseSetsResponse phraseSets. */
                    public phraseSets: google.cloud.speech.v2.IPhraseSet[];

                    /** ListPhraseSetsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListPhraseSetsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListPhraseSetsResponse instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IListPhraseSetsResponse): google.cloud.speech.v2.ListPhraseSetsResponse;

                    /**
                     * Encodes the specified ListPhraseSetsResponse message. Does not implicitly {@link google.cloud.speech.v2.ListPhraseSetsResponse.verify|verify} messages.
                     * @param message ListPhraseSetsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IListPhraseSetsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListPhraseSetsResponse message, length delimited. Does not implicitly {@link google.cloud.speech.v2.ListPhraseSetsResponse.verify|verify} messages.
                     * @param message ListPhraseSetsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IListPhraseSetsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListPhraseSetsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListPhraseSetsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.ListPhraseSetsResponse;

                    /**
                     * Decodes a ListPhraseSetsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListPhraseSetsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.ListPhraseSetsResponse;

                    /**
                     * Verifies a ListPhraseSetsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListPhraseSetsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListPhraseSetsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.ListPhraseSetsResponse;

                    /**
                     * Creates a plain object from a ListPhraseSetsResponse message. Also converts values to other types if specified.
                     * @param message ListPhraseSetsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.ListPhraseSetsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListPhraseSetsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListPhraseSetsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetPhraseSetRequest. */
                interface IGetPhraseSetRequest {

                    /** GetPhraseSetRequest name */
                    name?: (string|null);
                }

                /** Represents a GetPhraseSetRequest. */
                class GetPhraseSetRequest implements IGetPhraseSetRequest {

                    /**
                     * Constructs a new GetPhraseSetRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IGetPhraseSetRequest);

                    /** GetPhraseSetRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetPhraseSetRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetPhraseSetRequest instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IGetPhraseSetRequest): google.cloud.speech.v2.GetPhraseSetRequest;

                    /**
                     * Encodes the specified GetPhraseSetRequest message. Does not implicitly {@link google.cloud.speech.v2.GetPhraseSetRequest.verify|verify} messages.
                     * @param message GetPhraseSetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IGetPhraseSetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetPhraseSetRequest message, length delimited. Does not implicitly {@link google.cloud.speech.v2.GetPhraseSetRequest.verify|verify} messages.
                     * @param message GetPhraseSetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IGetPhraseSetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetPhraseSetRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetPhraseSetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.GetPhraseSetRequest;

                    /**
                     * Decodes a GetPhraseSetRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetPhraseSetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.GetPhraseSetRequest;

                    /**
                     * Verifies a GetPhraseSetRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetPhraseSetRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetPhraseSetRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.GetPhraseSetRequest;

                    /**
                     * Creates a plain object from a GetPhraseSetRequest message. Also converts values to other types if specified.
                     * @param message GetPhraseSetRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.GetPhraseSetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetPhraseSetRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetPhraseSetRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdatePhraseSetRequest. */
                interface IUpdatePhraseSetRequest {

                    /** UpdatePhraseSetRequest phraseSet */
                    phraseSet?: (google.cloud.speech.v2.IPhraseSet|null);

                    /** UpdatePhraseSetRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdatePhraseSetRequest validateOnly */
                    validateOnly?: (boolean|null);
                }

                /** Represents an UpdatePhraseSetRequest. */
                class UpdatePhraseSetRequest implements IUpdatePhraseSetRequest {

                    /**
                     * Constructs a new UpdatePhraseSetRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IUpdatePhraseSetRequest);

                    /** UpdatePhraseSetRequest phraseSet. */
                    public phraseSet?: (google.cloud.speech.v2.IPhraseSet|null);

                    /** UpdatePhraseSetRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdatePhraseSetRequest validateOnly. */
                    public validateOnly: boolean;

                    /**
                     * Creates a new UpdatePhraseSetRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdatePhraseSetRequest instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IUpdatePhraseSetRequest): google.cloud.speech.v2.UpdatePhraseSetRequest;

                    /**
                     * Encodes the specified UpdatePhraseSetRequest message. Does not implicitly {@link google.cloud.speech.v2.UpdatePhraseSetRequest.verify|verify} messages.
                     * @param message UpdatePhraseSetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IUpdatePhraseSetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdatePhraseSetRequest message, length delimited. Does not implicitly {@link google.cloud.speech.v2.UpdatePhraseSetRequest.verify|verify} messages.
                     * @param message UpdatePhraseSetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IUpdatePhraseSetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdatePhraseSetRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdatePhraseSetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.UpdatePhraseSetRequest;

                    /**
                     * Decodes an UpdatePhraseSetRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdatePhraseSetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.UpdatePhraseSetRequest;

                    /**
                     * Verifies an UpdatePhraseSetRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdatePhraseSetRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdatePhraseSetRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.UpdatePhraseSetRequest;

                    /**
                     * Creates a plain object from an UpdatePhraseSetRequest message. Also converts values to other types if specified.
                     * @param message UpdatePhraseSetRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.UpdatePhraseSetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdatePhraseSetRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdatePhraseSetRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeletePhraseSetRequest. */
                interface IDeletePhraseSetRequest {

                    /** DeletePhraseSetRequest name */
                    name?: (string|null);

                    /** DeletePhraseSetRequest validateOnly */
                    validateOnly?: (boolean|null);

                    /** DeletePhraseSetRequest allowMissing */
                    allowMissing?: (boolean|null);

                    /** DeletePhraseSetRequest etag */
                    etag?: (string|null);
                }

                /** Represents a DeletePhraseSetRequest. */
                class DeletePhraseSetRequest implements IDeletePhraseSetRequest {

                    /**
                     * Constructs a new DeletePhraseSetRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IDeletePhraseSetRequest);

                    /** DeletePhraseSetRequest name. */
                    public name: string;

                    /** DeletePhraseSetRequest validateOnly. */
                    public validateOnly: boolean;

                    /** DeletePhraseSetRequest allowMissing. */
                    public allowMissing: boolean;

                    /** DeletePhraseSetRequest etag. */
                    public etag: string;

                    /**
                     * Creates a new DeletePhraseSetRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeletePhraseSetRequest instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IDeletePhraseSetRequest): google.cloud.speech.v2.DeletePhraseSetRequest;

                    /**
                     * Encodes the specified DeletePhraseSetRequest message. Does not implicitly {@link google.cloud.speech.v2.DeletePhraseSetRequest.verify|verify} messages.
                     * @param message DeletePhraseSetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IDeletePhraseSetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeletePhraseSetRequest message, length delimited. Does not implicitly {@link google.cloud.speech.v2.DeletePhraseSetRequest.verify|verify} messages.
                     * @param message DeletePhraseSetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IDeletePhraseSetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeletePhraseSetRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeletePhraseSetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.DeletePhraseSetRequest;

                    /**
                     * Decodes a DeletePhraseSetRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeletePhraseSetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.DeletePhraseSetRequest;

                    /**
                     * Verifies a DeletePhraseSetRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeletePhraseSetRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeletePhraseSetRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.DeletePhraseSetRequest;

                    /**
                     * Creates a plain object from a DeletePhraseSetRequest message. Also converts values to other types if specified.
                     * @param message DeletePhraseSetRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.DeletePhraseSetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeletePhraseSetRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeletePhraseSetRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UndeletePhraseSetRequest. */
                interface IUndeletePhraseSetRequest {

                    /** UndeletePhraseSetRequest name */
                    name?: (string|null);

                    /** UndeletePhraseSetRequest validateOnly */
                    validateOnly?: (boolean|null);

                    /** UndeletePhraseSetRequest etag */
                    etag?: (string|null);
                }

                /** Represents an UndeletePhraseSetRequest. */
                class UndeletePhraseSetRequest implements IUndeletePhraseSetRequest {

                    /**
                     * Constructs a new UndeletePhraseSetRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IUndeletePhraseSetRequest);

                    /** UndeletePhraseSetRequest name. */
                    public name: string;

                    /** UndeletePhraseSetRequest validateOnly. */
                    public validateOnly: boolean;

                    /** UndeletePhraseSetRequest etag. */
                    public etag: string;

                    /**
                     * Creates a new UndeletePhraseSetRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UndeletePhraseSetRequest instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IUndeletePhraseSetRequest): google.cloud.speech.v2.UndeletePhraseSetRequest;

                    /**
                     * Encodes the specified UndeletePhraseSetRequest message. Does not implicitly {@link google.cloud.speech.v2.UndeletePhraseSetRequest.verify|verify} messages.
                     * @param message UndeletePhraseSetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IUndeletePhraseSetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UndeletePhraseSetRequest message, length delimited. Does not implicitly {@link google.cloud.speech.v2.UndeletePhraseSetRequest.verify|verify} messages.
                     * @param message UndeletePhraseSetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IUndeletePhraseSetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UndeletePhraseSetRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UndeletePhraseSetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.UndeletePhraseSetRequest;

                    /**
                     * Decodes an UndeletePhraseSetRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UndeletePhraseSetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.UndeletePhraseSetRequest;

                    /**
                     * Verifies an UndeletePhraseSetRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UndeletePhraseSetRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UndeletePhraseSetRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.UndeletePhraseSetRequest;

                    /**
                     * Creates a plain object from an UndeletePhraseSetRequest message. Also converts values to other types if specified.
                     * @param message UndeletePhraseSetRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.UndeletePhraseSetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UndeletePhraseSetRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UndeletePhraseSetRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ModelFeature. */
                interface IModelFeature {

                    /** ModelFeature feature */
                    feature?: (string|null);

                    /** ModelFeature releaseState */
                    releaseState?: (string|null);
                }

                /** Represents a ModelFeature. */
                class ModelFeature implements IModelFeature {

                    /**
                     * Constructs a new ModelFeature.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IModelFeature);

                    /** ModelFeature feature. */
                    public feature: string;

                    /** ModelFeature releaseState. */
                    public releaseState: string;

                    /**
                     * Creates a new ModelFeature instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ModelFeature instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IModelFeature): google.cloud.speech.v2.ModelFeature;

                    /**
                     * Encodes the specified ModelFeature message. Does not implicitly {@link google.cloud.speech.v2.ModelFeature.verify|verify} messages.
                     * @param message ModelFeature message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IModelFeature, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ModelFeature message, length delimited. Does not implicitly {@link google.cloud.speech.v2.ModelFeature.verify|verify} messages.
                     * @param message ModelFeature message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IModelFeature, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ModelFeature message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ModelFeature
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.ModelFeature;

                    /**
                     * Decodes a ModelFeature message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ModelFeature
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.ModelFeature;

                    /**
                     * Verifies a ModelFeature message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ModelFeature message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ModelFeature
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.ModelFeature;

                    /**
                     * Creates a plain object from a ModelFeature message. Also converts values to other types if specified.
                     * @param message ModelFeature
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.ModelFeature, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ModelFeature to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ModelFeature
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ModelFeatures. */
                interface IModelFeatures {

                    /** ModelFeatures modelFeature */
                    modelFeature?: (google.cloud.speech.v2.IModelFeature[]|null);
                }

                /** Represents a ModelFeatures. */
                class ModelFeatures implements IModelFeatures {

                    /**
                     * Constructs a new ModelFeatures.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IModelFeatures);

                    /** ModelFeatures modelFeature. */
                    public modelFeature: google.cloud.speech.v2.IModelFeature[];

                    /**
                     * Creates a new ModelFeatures instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ModelFeatures instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IModelFeatures): google.cloud.speech.v2.ModelFeatures;

                    /**
                     * Encodes the specified ModelFeatures message. Does not implicitly {@link google.cloud.speech.v2.ModelFeatures.verify|verify} messages.
                     * @param message ModelFeatures message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IModelFeatures, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ModelFeatures message, length delimited. Does not implicitly {@link google.cloud.speech.v2.ModelFeatures.verify|verify} messages.
                     * @param message ModelFeatures message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IModelFeatures, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ModelFeatures message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ModelFeatures
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.ModelFeatures;

                    /**
                     * Decodes a ModelFeatures message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ModelFeatures
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.ModelFeatures;

                    /**
                     * Verifies a ModelFeatures message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ModelFeatures message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ModelFeatures
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.ModelFeatures;

                    /**
                     * Creates a plain object from a ModelFeatures message. Also converts values to other types if specified.
                     * @param message ModelFeatures
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.ModelFeatures, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ModelFeatures to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ModelFeatures
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ModelMetadata. */
                interface IModelMetadata {

                    /** ModelMetadata modelFeatures */
                    modelFeatures?: ({ [k: string]: google.cloud.speech.v2.IModelFeatures }|null);
                }

                /** Represents a ModelMetadata. */
                class ModelMetadata implements IModelMetadata {

                    /**
                     * Constructs a new ModelMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IModelMetadata);

                    /** ModelMetadata modelFeatures. */
                    public modelFeatures: { [k: string]: google.cloud.speech.v2.IModelFeatures };

                    /**
                     * Creates a new ModelMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ModelMetadata instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IModelMetadata): google.cloud.speech.v2.ModelMetadata;

                    /**
                     * Encodes the specified ModelMetadata message. Does not implicitly {@link google.cloud.speech.v2.ModelMetadata.verify|verify} messages.
                     * @param message ModelMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IModelMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ModelMetadata message, length delimited. Does not implicitly {@link google.cloud.speech.v2.ModelMetadata.verify|verify} messages.
                     * @param message ModelMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IModelMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ModelMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ModelMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.ModelMetadata;

                    /**
                     * Decodes a ModelMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ModelMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.ModelMetadata;

                    /**
                     * Verifies a ModelMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ModelMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ModelMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.ModelMetadata;

                    /**
                     * Creates a plain object from a ModelMetadata message. Also converts values to other types if specified.
                     * @param message ModelMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.ModelMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ModelMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ModelMetadata
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a LanguageMetadata. */
                interface ILanguageMetadata {

                    /** LanguageMetadata models */
                    models?: ({ [k: string]: google.cloud.speech.v2.IModelMetadata }|null);
                }

                /** Represents a LanguageMetadata. */
                class LanguageMetadata implements ILanguageMetadata {

                    /**
                     * Constructs a new LanguageMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.ILanguageMetadata);

                    /** LanguageMetadata models. */
                    public models: { [k: string]: google.cloud.speech.v2.IModelMetadata };

                    /**
                     * Creates a new LanguageMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns LanguageMetadata instance
                     */
                    public static create(properties?: google.cloud.speech.v2.ILanguageMetadata): google.cloud.speech.v2.LanguageMetadata;

                    /**
                     * Encodes the specified LanguageMetadata message. Does not implicitly {@link google.cloud.speech.v2.LanguageMetadata.verify|verify} messages.
                     * @param message LanguageMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.ILanguageMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified LanguageMetadata message, length delimited. Does not implicitly {@link google.cloud.speech.v2.LanguageMetadata.verify|verify} messages.
                     * @param message LanguageMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.ILanguageMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a LanguageMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns LanguageMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.LanguageMetadata;

                    /**
                     * Decodes a LanguageMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns LanguageMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.LanguageMetadata;

                    /**
                     * Verifies a LanguageMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a LanguageMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns LanguageMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.LanguageMetadata;

                    /**
                     * Creates a plain object from a LanguageMetadata message. Also converts values to other types if specified.
                     * @param message LanguageMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.LanguageMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this LanguageMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for LanguageMetadata
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AccessMetadata. */
                interface IAccessMetadata {

                    /** AccessMetadata constraintType */
                    constraintType?: (google.cloud.speech.v2.AccessMetadata.ConstraintType|keyof typeof google.cloud.speech.v2.AccessMetadata.ConstraintType|null);
                }

                /** Represents an AccessMetadata. */
                class AccessMetadata implements IAccessMetadata {

                    /**
                     * Constructs a new AccessMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.IAccessMetadata);

                    /** AccessMetadata constraintType. */
                    public constraintType: (google.cloud.speech.v2.AccessMetadata.ConstraintType|keyof typeof google.cloud.speech.v2.AccessMetadata.ConstraintType);

                    /**
                     * Creates a new AccessMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AccessMetadata instance
                     */
                    public static create(properties?: google.cloud.speech.v2.IAccessMetadata): google.cloud.speech.v2.AccessMetadata;

                    /**
                     * Encodes the specified AccessMetadata message. Does not implicitly {@link google.cloud.speech.v2.AccessMetadata.verify|verify} messages.
                     * @param message AccessMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.IAccessMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AccessMetadata message, length delimited. Does not implicitly {@link google.cloud.speech.v2.AccessMetadata.verify|verify} messages.
                     * @param message AccessMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.IAccessMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AccessMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AccessMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.AccessMetadata;

                    /**
                     * Decodes an AccessMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AccessMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.AccessMetadata;

                    /**
                     * Verifies an AccessMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AccessMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AccessMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.AccessMetadata;

                    /**
                     * Creates a plain object from an AccessMetadata message. Also converts values to other types if specified.
                     * @param message AccessMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.AccessMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AccessMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AccessMetadata
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace AccessMetadata {

                    /** ConstraintType enum. */
                    enum ConstraintType {
                        CONSTRAINT_TYPE_UNSPECIFIED = 0,
                        RESOURCE_LOCATIONS_ORG_POLICY_CREATE_CONSTRAINT = 1
                    }
                }

                /** Properties of a LocationsMetadata. */
                interface ILocationsMetadata {

                    /** LocationsMetadata languages */
                    languages?: (google.cloud.speech.v2.ILanguageMetadata|null);

                    /** LocationsMetadata accessMetadata */
                    accessMetadata?: (google.cloud.speech.v2.IAccessMetadata|null);
                }

                /** Represents a LocationsMetadata. */
                class LocationsMetadata implements ILocationsMetadata {

                    /**
                     * Constructs a new LocationsMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.speech.v2.ILocationsMetadata);

                    /** LocationsMetadata languages. */
                    public languages?: (google.cloud.speech.v2.ILanguageMetadata|null);

                    /** LocationsMetadata accessMetadata. */
                    public accessMetadata?: (google.cloud.speech.v2.IAccessMetadata|null);

                    /**
                     * Creates a new LocationsMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns LocationsMetadata instance
                     */
                    public static create(properties?: google.cloud.speech.v2.ILocationsMetadata): google.cloud.speech.v2.LocationsMetadata;

                    /**
                     * Encodes the specified LocationsMetadata message. Does not implicitly {@link google.cloud.speech.v2.LocationsMetadata.verify|verify} messages.
                     * @param message LocationsMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.speech.v2.ILocationsMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified LocationsMetadata message, length delimited. Does not implicitly {@link google.cloud.speech.v2.LocationsMetadata.verify|verify} messages.
                     * @param message LocationsMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.speech.v2.ILocationsMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a LocationsMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns LocationsMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.speech.v2.LocationsMetadata;

                    /**
                     * Decodes a LocationsMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns LocationsMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.speech.v2.LocationsMetadata;

                    /**
                     * Verifies a LocationsMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a LocationsMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns LocationsMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.speech.v2.LocationsMetadata;

                    /**
                     * Creates a plain object from a LocationsMetadata message. Also converts values to other types if specified.
                     * @param message LocationsMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.speech.v2.LocationsMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this LocationsMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for LocationsMetadata
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
             * @throws {Error}