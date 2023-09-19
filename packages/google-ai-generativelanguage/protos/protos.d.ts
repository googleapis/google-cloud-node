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

    /** Namespace ai. */
    namespace ai {

        /** Namespace generativelanguage. */
        namespace generativelanguage {

            /** Namespace v1beta2. */
            namespace v1beta2 {

                /** Properties of a CitationMetadata. */
                interface ICitationMetadata {

                    /** CitationMetadata citationSources */
                    citationSources?: (google.ai.generativelanguage.v1beta2.ICitationSource[]|null);
                }

                /** Represents a CitationMetadata. */
                class CitationMetadata implements ICitationMetadata {

                    /**
                     * Constructs a new CitationMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ai.generativelanguage.v1beta2.ICitationMetadata);

                    /** CitationMetadata citationSources. */
                    public citationSources: google.ai.generativelanguage.v1beta2.ICitationSource[];

                    /**
                     * Creates a new CitationMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CitationMetadata instance
                     */
                    public static create(properties?: google.ai.generativelanguage.v1beta2.ICitationMetadata): google.ai.generativelanguage.v1beta2.CitationMetadata;

                    /**
                     * Encodes the specified CitationMetadata message. Does not implicitly {@link google.ai.generativelanguage.v1beta2.CitationMetadata.verify|verify} messages.
                     * @param message CitationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ai.generativelanguage.v1beta2.ICitationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CitationMetadata message, length delimited. Does not implicitly {@link google.ai.generativelanguage.v1beta2.CitationMetadata.verify|verify} messages.
                     * @param message CitationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ai.generativelanguage.v1beta2.ICitationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CitationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CitationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ai.generativelanguage.v1beta2.CitationMetadata;

                    /**
                     * Decodes a CitationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CitationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ai.generativelanguage.v1beta2.CitationMetadata;

                    /**
                     * Verifies a CitationMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CitationMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CitationMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.ai.generativelanguage.v1beta2.CitationMetadata;

                    /**
                     * Creates a plain object from a CitationMetadata message. Also converts values to other types if specified.
                     * @param message CitationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ai.generativelanguage.v1beta2.CitationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CitationMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CitationMetadata
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CitationSource. */
                interface ICitationSource {

                    /** CitationSource startIndex */
                    startIndex?: (number|null);

                    /** CitationSource endIndex */
                    endIndex?: (number|null);

                    /** CitationSource uri */
                    uri?: (string|null);

                    /** CitationSource license */
                    license?: (string|null);
                }

                /** Represents a CitationSource. */
                class CitationSource implements ICitationSource {

                    /**
                     * Constructs a new CitationSource.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ai.generativelanguage.v1beta2.ICitationSource);

                    /** CitationSource startIndex. */
                    public startIndex?: (number|null);

                    /** CitationSource endIndex. */
                    public endIndex?: (number|null);

                    /** CitationSource uri. */
                    public uri?: (string|null);

                    /** CitationSource license. */
                    public license?: (string|null);

                    /** CitationSource _startIndex. */
                    public _startIndex?: "startIndex";

                    /** CitationSource _endIndex. */
                    public _endIndex?: "endIndex";

                    /** CitationSource _uri. */
                    public _uri?: "uri";

                    /** CitationSource _license. */
                    public _license?: "license";

                    /**
                     * Creates a new CitationSource instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CitationSource instance
                     */
                    public static create(properties?: google.ai.generativelanguage.v1beta2.ICitationSource): google.ai.generativelanguage.v1beta2.CitationSource;

                    /**
                     * Encodes the specified CitationSource message. Does not implicitly {@link google.ai.generativelanguage.v1beta2.CitationSource.verify|verify} messages.
                     * @param message CitationSource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ai.generativelanguage.v1beta2.ICitationSource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CitationSource message, length delimited. Does not implicitly {@link google.ai.generativelanguage.v1beta2.CitationSource.verify|verify} messages.
                     * @param message CitationSource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ai.generativelanguage.v1beta2.ICitationSource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CitationSource message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CitationSource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ai.generativelanguage.v1beta2.CitationSource;

                    /**
                     * Decodes a CitationSource message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CitationSource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ai.generativelanguage.v1beta2.CitationSource;

                    /**
                     * Verifies a CitationSource message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CitationSource message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CitationSource
                     */
                    public static fromObject(object: { [k: string]: any }): google.ai.generativelanguage.v1beta2.CitationSource;

                    /**
                     * Creates a plain object from a CitationSource message. Also converts values to other types if specified.
                     * @param message CitationSource
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ai.generativelanguage.v1beta2.CitationSource, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CitationSource to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CitationSource
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Represents a DiscussService */
                class DiscussService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new DiscussService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new DiscussService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): DiscussService;

                    /**
                     * Calls GenerateMessage.
                     * @param request GenerateMessageRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and GenerateMessageResponse
                     */
                    public generateMessage(request: google.ai.generativelanguage.v1beta2.IGenerateMessageRequest, callback: google.ai.generativelanguage.v1beta2.DiscussService.GenerateMessageCallback): void;

                    /**
                     * Calls GenerateMessage.
                     * @param request GenerateMessageRequest message or plain object
                     * @returns Promise
                     */
                    public generateMessage(request: google.ai.generativelanguage.v1beta2.IGenerateMessageRequest): Promise<google.ai.generativelanguage.v1beta2.GenerateMessageResponse>;

                    /**
                     * Calls CountMessageTokens.
                     * @param request CountMessageTokensRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and CountMessageTokensResponse
                     */
                    public countMessageTokens(request: google.ai.generativelanguage.v1beta2.ICountMessageTokensRequest, callback: google.ai.generativelanguage.v1beta2.DiscussService.CountMessageTokensCallback): void;

                    /**
                     * Calls CountMessageTokens.
                     * @param request CountMessageTokensRequest message or plain object
                     * @returns Promise
                     */
                    public countMessageTokens(request: google.ai.generativelanguage.v1beta2.ICountMessageTokensRequest): Promise<google.ai.generativelanguage.v1beta2.CountMessageTokensResponse>;
                }

                namespace DiscussService {

                    /**
                     * Callback as used by {@link google.ai.generativelanguage.v1beta2.DiscussService|generateMessage}.
                     * @param error Error, if any
                     * @param [response] GenerateMessageResponse
                     */
                    type GenerateMessageCallback = (error: (Error|null), response?: google.ai.generativelanguage.v1beta2.GenerateMessageResponse) => void;

                    /**
                     * Callback as used by {@link google.ai.generativelanguage.v1beta2.DiscussService|countMessageTokens}.
                     * @param error Error, if any
                     * @param [response] CountMessageTokensResponse
                     */
                    type CountMessageTokensCallback = (error: (Error|null), response?: google.ai.generativelanguage.v1beta2.CountMessageTokensResponse) => void;
                }

                /** Properties of a GenerateMessageRequest. */
                interface IGenerateMessageRequest {

                    /** GenerateMessageRequest model */
                    model?: (string|null);

                    /** GenerateMessageRequest prompt */
                    prompt?: (google.ai.generativelanguage.v1beta2.IMessagePrompt|null);

                    /** GenerateMessageRequest temperature */
                    temperature?: (number|null);

                    /** GenerateMessageRequest candidateCount */
                    candidateCount?: (number|null);

                    /** GenerateMessageRequest topP */
                    topP?: (number|null);

                    /** GenerateMessageRequest topK */
                    topK?: (number|null);
                }

                /** Represents a GenerateMessageRequest. */
                class GenerateMessageRequest implements IGenerateMessageRequest {

                    /**
                     * Constructs a new GenerateMessageRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ai.generativelanguage.v1beta2.IGenerateMessageRequest);

                    /** GenerateMessageRequest model. */
                    public model: string;

                    /** GenerateMessageRequest prompt. */
                    public prompt?: (google.ai.generativelanguage.v1beta2.IMessagePrompt|null);

                    /** GenerateMessageRequest temperature. */
                    public temperature?: (number|null);

                    /** GenerateMessageRequest candidateCount. */
                    public candidateCount?: (number|null);

                    /** GenerateMessageRequest topP. */
                    public topP?: (number|null);

                    /** GenerateMessageRequest topK. */
                    public topK?: (number|null);

                    /** GenerateMessageRequest _temperature. */
                    public _temperature?: "temperature";

                    /** GenerateMessageRequest _candidateCount. */
                    public _candidateCount?: "candidateCount";

                    /** GenerateMessageRequest _topP. */
                    public _topP?: "topP";

                    /** GenerateMessageRequest _topK. */
                    public _topK?: "topK";

                    /**
                     * Creates a new GenerateMessageRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GenerateMessageRequest instance
                     */
                    public static create(properties?: google.ai.generativelanguage.v1beta2.IGenerateMessageRequest): google.ai.generativelanguage.v1beta2.GenerateMessageRequest;

                    /**
                     * Encodes the specified GenerateMessageRequest message. Does not implicitly {@link google.ai.generativelanguage.v1beta2.GenerateMessageRequest.verify|verify} messages.
                     * @param message GenerateMessageRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ai.generativelanguage.v1beta2.IGenerateMessageRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GenerateMessageRequest message, length delimited. Does not implicitly {@link google.ai.generativelanguage.v1beta2.GenerateMessageRequest.verify|verify} messages.
                     * @param message GenerateMessageRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ai.generativelanguage.v1beta2.IGenerateMessageRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GenerateMessageRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GenerateMessageRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ai.generativelanguage.v1beta2.GenerateMessageRequest;

                    /**
                     * Decodes a GenerateMessageRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GenerateMessageRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ai.generativelanguage.v1beta2.GenerateMessageRequest;

                    /**
                     * Verifies a GenerateMessageRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GenerateMessageRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GenerateMessageRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.ai.generativelanguage.v1beta2.GenerateMessageRequest;

                    /**
                     * Creates a plain object from a GenerateMessageRequest message. Also converts values to other types if specified.
                     * @param message GenerateMessageRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ai.generativelanguage.v1beta2.GenerateMessageRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GenerateMessageRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GenerateMessageRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GenerateMessageResponse. */
                interface IGenerateMessageResponse {

                    /** GenerateMessageResponse candidates */
                    candidates?: (google.ai.generativelanguage.v1beta2.IMessage[]|null);

                    /** GenerateMessageResponse messages */
                    messages?: (google.ai.generativelanguage.v1beta2.IMessage[]|null);

                    /** GenerateMessageResponse filters */
                    filters?: (google.ai.generativelanguage.v1beta2.IContentFilter[]|null);
                }

                /** Represents a GenerateMessageResponse. */
                class GenerateMessageResponse implements IGenerateMessageResponse {

                    /**
                     * Constructs a new GenerateMessageResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ai.generativelanguage.v1beta2.IGenerateMessageResponse);

                    /** GenerateMessageResponse candidates. */
                    public candidates: google.ai.generativelanguage.v1beta2.IMessage[];

                    /** GenerateMessageResponse messages. */
                    public messages: google.ai.generativelanguage.v1beta2.IMessage[];

                    /** GenerateMessageResponse filters. */
                    public filters: google.ai.generativelanguage.v1beta2.IContentFilter[];

                    /**
                     * Creates a new GenerateMessageResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GenerateMessageResponse instance
                     */
                    public static create(properties?: google.ai.generativelanguage.v1beta2.IGenerateMessageResponse): google.ai.generativelanguage.v1beta2.GenerateMessageResponse;

                    /**
                     * Encodes the specified GenerateMessageResponse message. Does not implicitly {@link google.ai.generativelanguage.v1beta2.GenerateMessageResponse.verify|verify} messages.
                     * @param message GenerateMessageResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ai.generativelanguage.v1beta2.IGenerateMessageResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GenerateMessageResponse message, length delimited. Does not implicitly {@link google.ai.generativelanguage.v1beta2.GenerateMessageResponse.verify|verify} messages.
                     * @param message GenerateMessageResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ai.generativelanguage.v1beta2.IGenerateMessageResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GenerateMessageResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GenerateMessageResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ai.generativelanguage.v1beta2.GenerateMessageResponse;

                    /**
                     * Decodes a GenerateMessageResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GenerateMessageResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ai.generativelanguage.v1beta2.GenerateMessageResponse;

                    /**
                     * Verifies a GenerateMessageResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GenerateMessageResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GenerateMessageResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.ai.generativelanguage.v1beta2.GenerateMessageResponse;

                    /**
                     * Creates a plain object from a GenerateMessageResponse message. Also converts values to other types if specified.
                     * @param message GenerateMessageResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ai.generativelanguage.v1beta2.GenerateMessageResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GenerateMessageResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GenerateMessageResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Message. */
                interface IMessage {

                    /** Message author */
                    author?: (string|null);

                    /** Message content */
                    content?: (string|null);

                    /** Message citationMetadata */
                    citationMetadata?: (google.ai.generativelanguage.v1beta2.ICitationMetadata|null);
                }

                /** Represents a Message. */
                class Message implements IMessage {

                    /**
                     * Constructs a new Message.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ai.generativelanguage.v1beta2.IMessage);

                    /** Message author. */
                    public author: string;

                    /** Message content. */
                    public content: string;

                    /** Message citationMetadata. */
                    public citationMetadata?: (google.ai.generativelanguage.v1beta2.ICitationMetadata|null);

                    /** Message _citationMetadata. */
                    public _citationMetadata?: "citationMetadata";

                    /**
                     * Creates a new Message instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Message instance
                     */
                    public static create(properties?: google.ai.generativelanguage.v1beta2.IMessage): google.ai.generativelanguage.v1beta2.Message;

                    /**
                     * Encodes the specified Message message. Does not implicitly {@link google.ai.generativelanguage.v1beta2.Message.verify|verify} messages.
                     * @param message Message message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ai.generativelanguage.v1beta2.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Message message, length delimited. Does not implicitly {@link google.ai.generativelanguage.v1beta2.Message.verify|verify} messages.
                     * @param message Message message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ai.generativelanguage.v1beta2.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Message message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Message
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ai.generativelanguage.v1beta2.Message;

                    /**
                     * Decodes a Message message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Message
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ai.generativelanguage.v1beta2.Message;

                    /**
                     * Verifies a Message message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Message message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Message
                     */
                    public static fromObject(object: { [k: string]: any }): google.ai.generativelanguage.v1beta2.Message;

                    /**
                     * Creates a plain object from a Message message. Also converts values to other types if specified.
                     * @param message Message
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ai.generativelanguage.v1beta2.Message, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Message to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Message
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a MessagePrompt. */
                interface IMessagePrompt {

                    /** MessagePrompt context */
                    context?: (string|null);

                    /** MessagePrompt examples */
                    examples?: (google.ai.generativelanguage.v1beta2.IExample[]|null);

                    /** MessagePrompt messages */
                    messages?: (google.ai.generativelanguage.v1beta2.IMessage[]|null);
                }

                /** Represents a MessagePrompt. */
                class MessagePrompt implements IMessagePrompt {

                    /**
                     * Constructs a new MessagePrompt.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ai.generativelanguage.v1beta2.IMessagePrompt);

                    /** MessagePrompt context. */
                    public context: string;

                    /** MessagePrompt examples. */
                    public examples: google.ai.generativelanguage.v1beta2.IExample[];

                    /** MessagePrompt messages. */
                    public messages: google.ai.generativelanguage.v1beta2.IMessage[];

                    /**
                     * Creates a new MessagePrompt instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MessagePrompt instance
                     */
                    public static create(properties?: google.ai.generativelanguage.v1beta2.IMessagePrompt): google.ai.generativelanguage.v1beta2.MessagePrompt;

                    /**
                     * Encodes the specified MessagePrompt message. Does not implicitly {@link google.ai.generativelanguage.v1beta2.MessagePrompt.verify|verify} messages.
                     * @param message MessagePrompt message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ai.generativelanguage.v1beta2.IMessagePrompt, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MessagePrompt message, length delimited. Does not implicitly {@link google.ai.generativelanguage.v1beta2.MessagePrompt.verify|verify} messages.
                     * @param message MessagePrompt message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ai.generativelanguage.v1beta2.IMessagePrompt, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MessagePrompt message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MessagePrompt
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ai.generativelanguage.v1beta2.MessagePrompt;

                    /**
                     * Decodes a MessagePrompt message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MessagePrompt
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ai.generativelanguage.v1beta2.MessagePrompt;

                    /**
                     * Verifies a MessagePrompt message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MessagePrompt message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MessagePrompt
                     */
                    public static fromObject(object: { [k: string]: any }): google.ai.generativelanguage.v1beta2.MessagePrompt;

                    /**
                     * Creates a plain object from a MessagePrompt message. Also converts values to other types if specified.
                     * @param message MessagePrompt
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ai.generativelanguage.v1beta2.MessagePrompt, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MessagePrompt to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for MessagePrompt
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an Example. */
                interface IExample {

                    /** Example input */
                    input?: (google.ai.generativelanguage.v1beta2.IMessage|null);

                    /** Example output */
                    output?: (google.ai.generativelanguage.v1beta2.IMessage|null);
                }

                /** Represents an Example. */
                class Example implements IExample {

                    /**
                     * Constructs a new Example.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ai.generativelanguage.v1beta2.IExample);

                    /** Example input. */
                    public input?: (google.ai.generativelanguage.v1beta2.IMessage|null);

                    /** Example output. */
                    public output?: (google.ai.generativelanguage.v1beta2.IMessage|null);

                    /**
                     * Creates a new Example instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Example instance
                     */
                    public static create(properties?: google.ai.generativelanguage.v1beta2.IExample): google.ai.generativelanguage.v1beta2.Example;

                    /**
                     * Encodes the specified Example message. Does not implicitly {@link google.ai.generativelanguage.v1beta2.Example.verify|verify} messages.
                     * @param message Example message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ai.generativelanguage.v1beta2.IExample, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Example message, length delimited. Does not implicitly {@link google.ai.generativelanguage.v1beta2.Example.verify|verify} messages.
                     * @param message Example message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ai.generativelanguage.v1beta2.IExample, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Example message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Example
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ai.generativelanguage.v1beta2.Example;

                    /**
                     * Decodes an Example message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Example
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ai.generativelanguage.v1beta2.Example;

                    /**
                     * Verifies an Example message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Example message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Example
                     */
                    public static fromObject(object: { [k: string]: any }): google.ai.generativelanguage.v1beta2.Example;

                    /**
                     * Creates a plain object from an Example message. Also converts values to other types if specified.
                     * @param message Example
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ai.generativelanguage.v1beta2.Example, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Example to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Example
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CountMessageTokensRequest. */
                interface ICountMessageTokensRequest {

                    /** CountMessageTokensRequest model */
                    model?: (string|null);

                    /** CountMessageTokensRequest prompt */
                    prompt?: (google.ai.generativelanguage.v1beta2.IMessagePrompt|null);
                }

                /** Represents a CountMessageTokensRequest. */
                class CountMessageTokensRequest implements ICountMessageTokensRequest {

                    /**
                     * Constructs a new CountMessageTokensRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ai.generativelanguage.v1beta2.ICountMessageTokensRequest);

                    /** CountMessageTokensRequest model. */
                    public model: string;

                    /** CountMessageTokensRequest prompt. */
                    public prompt?: (google.ai.generativelanguage.v1beta2.IMessagePrompt|null);

                    /**
                     * Creates a new CountMessageTokensRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CountMessageTokensRequest instance
                     */
                    public static create(properties?: google.ai.generativelanguage.v1beta2.ICountMessageTokensRequest): google.ai.generativelanguage.v1beta2.CountMessageTokensRequest;

                    /**
                     * Encodes the specified CountMessageTokensRequest message. Does not implicitly {@link google.ai.generativelanguage.v1beta2.CountMessageTokensRequest.verify|verify} messages.
                     * @param message CountMessageTokensRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ai.generativelanguage.v1beta2.ICountMessageTokensRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CountMessageTokensRequest message, length delimited. Does not implicitly {@link google.ai.generativelanguage.v1beta2.CountMessageTokensRequest.verify|verify} messages.
                     * @param message CountMessageTokensRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ai.generativelanguage.v1beta2.ICountMessageTokensRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CountMessageTokensRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CountMessageTokensRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ai.generativelanguage.v1beta2.CountMessageTokensRequest;

                    /**
                     * Decodes a CountMessageTokensRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CountMessageTokensRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ai.generativelanguage.v1beta2.CountMessageTokensRequest;

                    /**
                     * Verifies a CountMessageTokensRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CountMessageTokensRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CountMessageTokensRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.ai.generativelanguage.v1beta2.CountMessageTokensRequest;

                    /**
                     * Creates a plain object from a CountMessageTokensRequest message. Also converts values to other types if specified.
                     * @param message CountMessageTokensRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ai.generativelanguage.v1beta2.CountMessageTokensRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CountMessageTokensRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CountMessageTokensRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CountMessageTokensResponse. */
                interface ICountMessageTokensResponse {

                    /** CountMessageTokensResponse tokenCount */
                    tokenCount?: (number|null);
                }

                /** Represents a CountMessageTokensResponse. */
                class CountMessageTokensResponse implements ICountMessageTokensResponse {

                    /**
                     * Constructs a new CountMessageTokensResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ai.generativelanguage.v1beta2.ICountMessageTokensResponse);

                    /** CountMessageTokensResponse tokenCount. */
                    public tokenCount: number;

                    /**
                     * Creates a new CountMessageTokensResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CountMessageTokensResponse instance
                     */
                    public static create(properties?: google.ai.generativelanguage.v1beta2.ICountMessageTokensResponse): google.ai.generativelanguage.v1beta2.CountMessageTokensResponse;

                    /**
                     * Encodes the specified CountMessageTokensResponse message. Does not implicitly {@link google.ai.generativelanguage.v1beta2.CountMessageTokensResponse.verify|verify} messages.
                     * @param message CountMessageTokensResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ai.generativelanguage.v1beta2.ICountMessageTokensResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CountMessageTokensResponse message, length delimited. Does not implicitly {@link google.ai.generativelanguage.v1beta2.CountMessageTokensResponse.verify|verify} messages.
                     * @param message CountMessageTokensResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ai.generativelanguage.v1beta2.ICountMessageTokensResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CountMessageTokensResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CountMessageTokensResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ai.generativelanguage.v1beta2.CountMessageTokensResponse;

                    /**
                     * Decodes a CountMessageTokensResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CountMessageTokensResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ai.generativelanguage.v1beta2.CountMessageTokensResponse;

                    /**
                     * Verifies a CountMessageTokensResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CountMessageTokensResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CountMessageTokensResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.ai.generativelanguage.v1beta2.CountMessageTokensResponse;

                    /**
                     * Creates a plain object from a CountMessageTokensResponse message. Also converts values to other types if specified.
                     * @param message CountMessageTokensResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ai.generativelanguage.v1beta2.CountMessageTokensResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CountMessageTokensResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CountMessageTokensResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** HarmCategory enum. */
                enum HarmCategory {
                    HARM_CATEGORY_UNSPECIFIED = 0,
                    HARM_CATEGORY_DEROGATORY = 1,
                    HARM_CATEGORY_TOXICITY = 2,
                    HARM_CATEGORY_VIOLENCE = 3,
                    HARM_CATEGORY_SEXUAL = 4,
                    HARM_CATEGORY_MEDICAL = 5,
                    HARM_CATEGORY_DANGEROUS = 6
                }

                /** Properties of a ContentFilter. */
                interface IContentFilter {

                    /** ContentFilter reason */
                    reason?: (google.ai.generativelanguage.v1beta2.ContentFilter.BlockedReason|keyof typeof google.ai.generativelanguage.v1beta2.ContentFilter.BlockedReason|null);

                    /** ContentFilter message */
                    message?: (string|null);
                }

                /** Represents a ContentFilter. */
                class ContentFilter implements IContentFilter {

                    /**
                     * Constructs a new ContentFilter.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ai.generativelanguage.v1beta2.IContentFilter);

                    /** ContentFilter reason. */
                    public reason: (google.ai.generativelanguage.v1beta2.ContentFilter.BlockedReason|keyof typeof google.ai.generativelanguage.v1beta2.ContentFilter.BlockedReason);

                    /** ContentFilter message. */
                    public message?: (string|null);

                    /** ContentFilter _message. */
                    public _message?: "message";

                    /**
                     * Creates a new ContentFilter instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ContentFilter instance
                     */
                    public static create(properties?: google.ai.generativelanguage.v1beta2.IContentFilter): google.ai.generativelanguage.v1beta2.ContentFilter;

                    /**
                     * Encodes the specified ContentFilter message. Does not implicitly {@link google.ai.generativelanguage.v1beta2.ContentFilter.verify|verify} messages.
                     * @param message ContentFilter message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ai.generativelanguage.v1beta2.IContentFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ContentFilter message, length delimited. Does not implicitly {@link google.ai.generativelanguage.v1beta2.ContentFilter.verify|verify} messages.
                     * @param message ContentFilter message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ai.generativelanguage.v1beta2.IContentFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ContentFilter message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ContentFilter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ai.generativelanguage.v1beta2.ContentFilter;

                    /**
                     * Decodes a ContentFilter message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ContentFilter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ai.generativelanguage.v1beta2.ContentFilter;

                    /**
                     * Verifies a ContentFilter message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ContentFilter message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ContentFilter
                     */
                    public static fromObject(object: { [k: string]: any }): google.ai.generativelanguage.v1beta2.ContentFilter;

                    /**
                     * Creates a plain object from a ContentFilter message. Also converts values to other types if specified.
                     * @param message ContentFilter
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ai.generativelanguage.v1beta2.ContentFilter, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ContentFilter to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ContentFilter
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace ContentFilter {

                    /** BlockedReason enum. */
                    enum BlockedReason {
                        BLOCKED_REASON_UNSPECIFIED = 0,
                        SAFETY = 1,
                        OTHER = 2
                    }
                }

                /** Properties of a SafetyFeedback. */
                interface ISafetyFeedback {

                    /** SafetyFeedback rating */
                    rating?: (google.ai.generativelanguage.v1beta2.ISafetyRating|null);

                    /** SafetyFeedback setting */
                    setting?: (google.ai.generativelanguage.v1beta2.ISafetySetting|null);
                }

                /** Represents a SafetyFeedback. */
                class SafetyFeedback implements ISafetyFeedback {

                    /**
                     * Constructs a new SafetyFeedback.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ai.generativelanguage.v1beta2.ISafetyFeedback);

                    /** SafetyFeedback rating. */
                    public rating?: (google.ai.generativelanguage.v1beta2.ISafetyRating|null);

                    /** SafetyFeedback setting. */
                    public setting?: (google.ai.generativelanguage.v1beta2.ISafetySetting|null);

                    /**
                     * Creates a new SafetyFeedback instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SafetyFeedback instance
                     */
                    public static create(properties?: google.ai.generativelanguage.v1beta2.ISafetyFeedback): google.ai.generativelanguage.v1beta2.SafetyFeedback;

                    /**
                     * Encodes the specified SafetyFeedback message. Does not implicitly {@link google.ai.generativelanguage.v1beta2.SafetyFeedback.verify|verify} messages.
                     * @param message SafetyFeedback message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ai.generativelanguage.v1beta2.ISafetyFeedback, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SafetyFeedback message, length delimited. Does not implicitly {@link google.ai.generativelanguage.v1beta2.SafetyFeedback.verify|verify} messages.
                     * @param message SafetyFeedback message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ai.generativelanguage.v1beta2.ISafetyFeedback, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SafetyFeedback message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SafetyFeedback
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ai.generativelanguage.v1beta2.SafetyFeedback;

                    /**
                     * Decodes a SafetyFeedback message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SafetyFeedback
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ai.generativelanguage.v1beta2.SafetyFeedback;

                    /**
                     * Verifies a SafetyFeedback message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SafetyFeedback message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SafetyFeedback
                     */
                    public static fromObject(object: { [k: string]: any }): google.ai.generativelanguage.v1beta2.SafetyFeedback;

                    /**
                     * Creates a plain object from a SafetyFeedback message. Also converts values to other types if specified.
                     * @param message SafetyFeedback
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ai.generativelanguage.v1beta2.SafetyFeedback, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SafetyFeedback to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SafetyFeedback
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a SafetyRating. */
                interface ISafetyRating {

                    /** SafetyRating category */
                    category?: (google.ai.generativelanguage.v1beta2.HarmCategory|keyof typeof google.ai.generativelanguage.v1beta2.HarmCategory|null);

                    /** SafetyRating probability */
                    probability?: (google.ai.generativelanguage.v1beta2.SafetyRating.HarmProbability|keyof typeof google.ai.generativelanguage.v1beta2.SafetyRating.HarmProbability|null);
                }

                /** Represents a SafetyRating. */
                class SafetyRating implements ISafetyRating {

                    /**
                     * Constructs a new SafetyRating.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ai.generativelanguage.v1beta2.ISafetyRating);

                    /** SafetyRating category. */
                    public category: (google.ai.generativelanguage.v1beta2.HarmCategory|keyof typeof google.ai.generativelanguage.v1beta2.HarmCategory);

                    /** SafetyRating probability. */
                    public probability: (google.ai.generativelanguage.v1beta2.SafetyRating.HarmProbability|keyof typeof google.ai.generativelanguage.v1beta2.SafetyRating.HarmProbability);

                    /**
                     * Creates a new SafetyRating instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SafetyRating instance
                     */
                    public static create(properties?: google.ai.generativelanguage.v1beta2.ISafetyRating): google.ai.generativelanguage.v1beta2.SafetyRating;

                    /**
                     * Encodes the specified SafetyRating message. Does not implicitly {@link google.ai.generativelanguage.v1beta2.SafetyRating.verify|verify} messages.
                     * @param message SafetyRating message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ai.generativelanguage.v1beta2.ISafetyRating, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SafetyRating message, length delimited. Does not implicitly {@link google.ai.generativelanguage.v1beta2.SafetyRating.verify|verify} messages.
                     * @param message SafetyRating message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ai.generativelanguage.v1beta2.ISafetyRating, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SafetyRating message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SafetyRating
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ai.generativelanguage.v1beta2.SafetyRating;

                    /**
                     * Decodes a SafetyRating message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SafetyRating
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ai.generativelanguage.v1beta2.SafetyRating;

                    /**
                     * Verifies a SafetyRating message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SafetyRating message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SafetyRating
                     */
                    public static fromObject(object: { [k: string]: any }): google.ai.generativelanguage.v1beta2.SafetyRating;

                    /**
                     * Creates a plain object from a SafetyRating message. Also converts values to other types if specified.
                     * @param message SafetyRating
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ai.generativelanguage.v1beta2.SafetyRating, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SafetyRating to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SafetyRating
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace SafetyRating {

                    /** HarmProbability enum. */
                    enum HarmProbability {
                        HARM_PROBABILITY_UNSPECIFIED = 0,
                        NEGLIGIBLE = 1,
                        LOW = 2,
                        MEDIUM = 3,
                        HIGH = 4
                    }
                }

                /** Properties of a SafetySetting. */
                interface ISafetySetting {

                    /** SafetySetting category */
                    category?: (google.ai.generativelanguage.v1beta2.HarmCategory|keyof typeof google.ai.generativelanguage.v1beta2.HarmCategory|null);

                    /** SafetySetting threshold */
                    threshold?: (google.ai.generativelanguage.v1beta2.SafetySetting.HarmBlockThreshold|keyof typeof google.ai.generativelanguage.v1beta2.SafetySetting.HarmBlockThreshold|null);
                }

                /** Represents a SafetySetting. */
                class SafetySetting implements ISafetySetting {

                    /**
                     * Constructs a new SafetySetting.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ai.generativelanguage.v1beta2.ISafetySetting);

                    /** SafetySetting category. */
                    public category: (google.ai.generativelanguage.v1beta2.HarmCategory|keyof typeof google.ai.generativelanguage.v1beta2.HarmCategory);

                    /** SafetySetting threshold. */
                    public threshold: (google.ai.generativelanguage.v1beta2.SafetySetting.HarmBlockThreshold|keyof typeof google.ai.generativelanguage.v1beta2.SafetySetting.HarmBlockThreshold);

                    /**
                     * Creates a new SafetySetting instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SafetySetting instance
                     */
                    public static create(properties?: google.ai.generativelanguage.v1beta2.ISafetySetting): google.ai.generativelanguage.v1beta2.SafetySetting;

                    /**
                     * Encodes the specified SafetySetting message. Does not implicitly {@link google.ai.generativelanguage.v1beta2.SafetySetting.verify|verify} messages.
                     * @param message SafetySetting message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ai.generativelanguage.v1beta2.ISafetySetting, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SafetySetting message, length delimited. Does not implicitly {@link google.ai.generativelanguage.v1beta2.SafetySetting.verify|verify} messages.
                     * @param message SafetySetting message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ai.generativelanguage.v1beta2.ISafetySetting, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SafetySetting message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SafetySetting
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ai.generativelanguage.v1beta2.SafetySetting;

                    /**
                     * Decodes a SafetySetting message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SafetySetting
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ai.generativelanguage.v1beta2.SafetySetting;

                    /**
                     * Verifies a SafetySetting message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SafetySetting message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SafetySetting
                     */
                    public static fromObject(object: { [k: string]: any }): google.ai.generativelanguage.v1beta2.SafetySetting;

                    /**
                     * Creates a plain object from a SafetySetting message. Also converts values to other types if specified.
                     * @param message SafetySetting
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ai.generativelanguage.v1beta2.SafetySetting, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SafetySetting to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SafetySetting
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace SafetySetting {

                    /** HarmBlockThreshold enum. */
                    enum HarmBlockThreshold {
                        HARM_BLOCK_THRESHOLD_UNSPECIFIED = 0,
                        BLOCK_LOW_AND_ABOVE = 1,
                        BLOCK_MEDIUM_AND_ABOVE = 2,
                        BLOCK_ONLY_HIGH = 3
                    }
                }

                /** Properties of a Model. */
                interface IModel {

                    /** Model name */
                    name?: (string|null);

                    /** Model baseModelId */
                    baseModelId?: (string|null);

                    /** Model version */
                    version?: (string|null);

                    /** Model displayName */
                    displayName?: (string|null);

                    /** Model description */
                    description?: (string|null);

                    /** Model inputTokenLimit */
                    inputTokenLimit?: (number|null);

                    /** Model outputTokenLimit */
                    outputTokenLimit?: (number|null);

                    /** Model supportedGenerationMethods */
                    supportedGenerationMethods?: (string[]|null);

                    /** Model temperature */
                    temperature?: (number|null);

                    /** Model topP */
                    topP?: (number|null);

                    /** Model topK */
                    topK?: (number|null);
                }

                /** Represents a Model. */
                class Model implements IModel {

                    /**
                     * Constructs a new Model.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ai.generativelanguage.v1beta2.IModel);

                    /** Model name. */
                    public name: string;

                    /** Model baseModelId. */
                    public baseModelId: string;

                    /** Model version. */
                    public version: string;

                    /** Model displayName. */
                    public displayName: string;

                    /** Model description. */
                    public description: string;

                    /** Model inputTokenLimit. */
                    public inputTokenLimit: number;

                    /** Model outputTokenLimit. */
                    public outputTokenLimit: number;

                    /** Model supportedGenerationMethods. */
                    public supportedGenerationMethods: string[];

                    /** Model temperature. */
                    public temperature?: (number|null);

                    /** Model topP. */
                    public topP?: (number|null);

                    /** Model topK. */
                    public topK?: (number|null);

                    /** Model _temperature. */
                    public _temperature?: "temperature";

                    /** Model _topP. */
                    public _topP?: "topP";

                    /** Model _topK. */
                    public _topK?: "topK";

                    /**
                     * Creates a new Model instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Model instance
                     */
                    public static create(properties?: google.ai.generativelanguage.v1beta2.IModel): google.ai.generativelanguage.v1beta2.Model;

                    /**
                     * Encodes the specified Model message. Does not implicitly {@link google.ai.generativelanguage.v1beta2.Model.verify|verify} messages.
                     * @param message Model message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ai.generativelanguage.v1beta2.IModel, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Model message, length delimited. Does not implicitly {@link google.ai.generativelanguage.v1beta2.Model.verify|verify} messages.
                     * @param message Model message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ai.generativelanguage.v1beta2.IModel, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Model message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Model
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ai.generativelanguage.v1beta2.Model;

                    /**
                     * Decodes a Model message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Model
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ai.generativelanguage.v1beta2.Model;

                    /**
                     * Verifies a Model message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Model message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Model
                     */
                    public static fromObject(object: { [k: string]: any }): google.ai.generativelanguage.v1beta2.Model;

                    /**
                     * Creates a plain object from a Model message. Also converts values to other types if specified.
                     * @param message Model
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ai.generativelanguage.v1beta2.Model, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Model to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Model
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Represents a ModelService */
                class ModelService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new ModelService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new ModelService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): ModelService;

                    /**
                     * Calls GetModel.
                     * @param request GetModelRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Model
                     */
                    public getModel(request: google.ai.generativelanguage.v1beta2.IGetModelRequest, callback: google.ai.generativelanguage.v1beta2.ModelService.GetModelCallback): void;

                    /**
                     * Calls GetModel.
                     * @param request GetModelRequest message or plain object
                     * @returns Promise
                     */
                    public getModel(request: google.ai.generativelanguage.v1beta2.IGetModelRequest): Promise<google.ai.generativelanguage.v1beta2.Model>;

                    /**
                     * Calls ListModels.
                     * @param request ListModelsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListModelsResponse
                     */
                    public listModels(request: google.ai.generativelanguage.v1beta2.IListModelsRequest, callback: google.ai.generativelanguage.v1beta2.ModelService.ListModelsCallback): void;

                    /**
                     * Calls ListModels.
                     * @param request ListModelsRequest message or plain object
                     * @returns Promise
                     */
                    public listModels(request: google.ai.generativelanguage.v1beta2.IListModelsRequest): Promise<google.ai.generativelanguage.v1beta2.ListModelsResponse>;
                }

                namespace ModelService {

                    /**
                     * Callback as used by {@link google.ai.generativelanguage.v1beta2.ModelService|getModel}.
                     * @param error Error, if any
                     * @param [response] Model
                     */
                    type GetModelCallback = (error: (Error|null), response?: google.ai.generativelanguage.v1beta2.Model) => void;

                    /**
                     * Callback as used by {@link google.ai.generativelanguage.v1beta2.ModelService|listModels}.
                     * @param error Error, if any
                     * @param [response] ListModelsResponse
                     */
                    type ListModelsCallback = (error: (Error|null), response?: google.ai.generativelanguage.v1beta2.ListModelsResponse) => void;
                }

                /** Properties of a GetModelRequest. */
                interface IGetModelRequest {

                    /** GetModelRequest name */
                    name?: (string|null);
                }

                /** Represents a GetModelRequest. */
                class GetModelRequest implements IGetModelRequest {

                    /**
                     * Constructs a new GetModelRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ai.generativelanguage.v1beta2.IGetModelRequest);

                    /** GetModelRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetModelRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetModelRequest instance
                     */
                    public static create(properties?: google.ai.generativelanguage.v1beta2.IGetModelRequest): google.ai.generativelanguage.v1beta2.GetModelRequest;

                    /**
                     * Encodes the specified GetModelRequest message. Does not implicitly {@link google.ai.generativelanguage.v1beta2.GetModelRequest.verify|verify} messages.
                     * @param message GetModelRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ai.generativelanguage.v1beta2.IGetModelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetModelRequest message, length delimited. Does not implicitly {@link google.ai.generativelanguage.v1beta2.GetModelRequest.verify|verify} messages.
                     * @param message GetModelRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ai.generativelanguage.v1beta2.IGetModelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetModelRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetModelRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ai.generativelanguage.v1beta2.GetModelRequest;

                    /**
                     * Decodes a GetModelRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetModelRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ai.generativelanguage.v1beta2.GetModelRequest;

                    /**
                     * Verifies a GetModelRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetModelRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetModelRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.ai.generativelanguage.v1beta2.GetModelRequest;

                    /**
                     * Creates a plain object from a GetModelRequest message. Also converts values to other types if specified.
                     * @param message GetModelRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ai.generativelanguage.v1beta2.GetModelRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetModelRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetModelRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListModelsRequest. */
                interface IListModelsRequest {

                    /** ListModelsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListModelsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListModelsRequest. */
                class ListModelsRequest implements IListModelsRequest {

                    /**
                     * Constructs a new ListModelsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ai.generativelanguage.v1beta2.IListModelsRequest);

                    /** ListModelsRequest pageSize. */
                    public pageSize: number;

                    /** ListModelsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListModelsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListModelsRequest instance
                     */
                    public static create(properties?: google.ai.generativelanguage.v1beta2.IListModelsRequest): google.ai.generativelanguage.v1beta2.ListModelsRequest;

                    /**
                     * Encodes the specified ListModelsRequest message. Does not implicitly {@link google.ai.generativelanguage.v1beta2.ListModelsRequest.verify|verify} messages.
                     * @param message ListModelsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ai.generativelanguage.v1beta2.IListModelsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListModelsRequest message, length delimited. Does not implicitly {@link google.ai.generativelanguage.v1beta2.ListModelsRequest.verify|verify} messages.
                     * @param message ListModelsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ai.generativelanguage.v1beta2.IListModelsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListModelsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListModelsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ai.generativelanguage.v1beta2.ListModelsRequest;

                    /**
                     * Decodes a ListModelsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListModelsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ai.generativelanguage.v1beta2.ListModelsRequest;

                    /**
                     * Verifies a ListModelsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListModelsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListModelsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.ai.generativelanguage.v1beta2.ListModelsRequest;

                    /**
                     * Creates a plain object from a ListModelsRequest message. Also converts values to other types if specified.
                     * @param message ListModelsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ai.generativelanguage.v1beta2.ListModelsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListModelsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListModelsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListModelsResponse. */
                interface IListModelsResponse {

                    /** ListModelsResponse models */
                    models?: (google.ai.generativelanguage.v1beta2.IModel[]|null);

                    /** ListModelsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListModelsResponse. */
                class ListModelsResponse implements IListModelsResponse {

                    /**
                     * Constructs a new ListModelsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ai.generativelanguage.v1beta2.IListModelsResponse);

                    /** ListModelsResponse models. */
                    public models: google.ai.generativelanguage.v1beta2.IModel[];

                    /** ListModelsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListModelsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListModelsResponse instance
                     */
                    public static create(properties?: google.ai.generativelanguage.v1beta2.IListModelsResponse): google.ai.generativelanguage.v1beta2.ListModelsResponse;

                    /**
                     * Encodes the specified ListModelsResponse message. Does not implicitly {@link google.ai.generativelanguage.v1beta2.ListModelsResponse.verify|verify} messages.
                     * @param message ListModelsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ai.generativelanguage.v1beta2.IListModelsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListModelsResponse message, length delimited. Does not implicitly {@link google.ai.generativelanguage.v1beta2.ListModelsResponse.verify|verify} messages.
                     * @param message ListModelsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ai.generativelanguage.v1beta2.IListModelsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListModelsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListModelsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ai.generativelanguage.v1beta2.ListModelsResponse;

                    /**
                     * Decodes a ListModelsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListModelsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ai.generativelanguage.v1beta2.ListModelsResponse;

                    /**
                     * Verifies a ListModelsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListModelsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListModelsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.ai.generativelanguage.v1beta2.ListModelsResponse;

                    /**
                     * Creates a plain object from a ListModelsResponse message. Also converts values to other types if specified.
                     * @param message ListModelsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ai.generativelanguage.v1beta2.ListModelsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListModelsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListModelsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Represents a TextService */
                class TextService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new TextService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new TextService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): TextService;

                    /**
                     * Calls GenerateText.
                     * @param request GenerateTextRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and GenerateTextResponse
                     */
                    public generateText(request: google.ai.generativelanguage.v1beta2.IGenerateTextRequest, callback: google.ai.generativelanguage.v1beta2.TextService.GenerateTextCallback): void;

                    /**
                     * Calls GenerateText.
                     * @param request GenerateTextRequest message or plain object
                     * @returns Promise
                     */
                    public generateText(request: google.ai.generativelanguage.v1beta2.IGenerateTextRequest): Promise<google.ai.generativelanguage.v1beta2.GenerateTextResponse>;

                    /**
                     * Calls EmbedText.
                     * @param request EmbedTextRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and EmbedTextResponse
                     */
                    public embedText(request: google.ai.generativelanguage.v1beta2.IEmbedTextRequest, callback: google.ai.generativelanguage.v1beta2.TextService.EmbedTextCallback): void;

                    /**
                     * Calls EmbedText.
                     * @param request EmbedTextRequest message or plain object
                     * @returns Promise
                     */
                    public embedText(request: google.ai.generativelanguage.v1beta2.IEmbedTextRequest): Promise<google.ai.generativelanguage.v1beta2.EmbedTextResponse>;
                }

                namespace TextService {

                    /**
                     * Callback as used by {@link google.ai.generativelanguage.v1beta2.TextService|generateText}.
                     * @param error Error, if any
                     * @param [response] GenerateTextResponse
                     */
                    type GenerateTextCallback = (error: (Error|null), response?: google.ai.generativelanguage.v1beta2.GenerateTextResponse) => void;

                    /**
                     * Callback as used by {@link google.ai.generativelanguage.v1beta2.TextService|embedText}.
                     * @param error Error, if any
                     * @param [response] EmbedTextResponse
                     */
                    type EmbedTextCallback = (error: (Error|null), response?: google.ai.generativelanguage.v1beta2.EmbedTextResponse) => void;
                }

                /** Properties of a GenerateTextRequest. */
                interface IGenerateTextRequest {

                    /** GenerateTextRequest model */
                    model?: (string|null);

                    /** GenerateTextRequest prompt */
                    prompt?: (google.ai.generativelanguage.v1beta2.ITextPrompt|null);

                    /** GenerateTextRequest temperature */
                    temperature?: (number|null);

                    /** GenerateTextRequest candidateCount */
                    candidateCount?: (number|null);

                    /** GenerateTextRequest maxOutputTokens */
                    maxOutputTokens?: (number|null);

                    /** GenerateTextRequest topP */
                    topP?: (number|null);

                    /** GenerateTextRequest topK */
                    topK?: (number|null);

                    /** GenerateTextRequest safetySettings */
                    safetySettings?: (google.ai.generativelanguage.v1beta2.ISafetySetting[]|null);

                    /** GenerateTextRequest stopSequences */
                    stopSequences?: (string[]|null);
                }

                /** Represents a GenerateTextRequest. */
                class GenerateTextRequest implements IGenerateTextRequest {

                    /**
                     * Constructs a new GenerateTextRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ai.generativelanguage.v1beta2.IGenerateTextRequest);

                    /** GenerateTextRequest model. */
                    public model: string;

                    /** GenerateTextRequest prompt. */
                    public prompt?: (google.ai.generativelanguage.v1beta2.ITextPrompt|null);

                    /** GenerateTextRequest temperature. */
                    public temperature?: (number|null);

                    /** GenerateTextRequest candidateCount. */
                    public candidateCount?: (number|null);

                    /** GenerateTextRequest maxOutputTokens. */
                    public maxOutputTokens?: (number|null);

                    /** GenerateTextRequest topP. */
                    public topP?: (number|null);

                    /** GenerateTextRequest topK. */
                    public topK?: (number|null);

                    /** GenerateTextRequest safetySettings. */
                    public safetySettings: google.ai.generativelanguage.v1beta2.ISafetySetting[];

                    /** GenerateTextRequest stopSequences. */
                    public stopSequences: string[];

                    /** GenerateTextRequest _temperature. */
                    public _temperature?: "temperature";

                    /** GenerateTextRequest _candidateCount. */
                    public _candidateCount?: "candidateCount";

                    /** GenerateTextRequest _maxOutputTokens. */
                    public _maxOutputTokens?: "maxOutputTokens";

                    /** GenerateTextRequest _topP. */
                    public _topP?: "topP";

                    /** GenerateTextRequest _topK. */
                    public _topK?: "topK";

                    /**
                     * Creates a new GenerateTextRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GenerateTextRequest instance
                     */
                    public static create(properties?: google.ai.generativelanguage.v1beta2.IGenerateTextRequest): google.ai.generativelanguage.v1beta2.GenerateTextRequest;

                    /**
                     * Encodes the specified GenerateTextRequest message. Does not implicitly {@link google.ai.generativelanguage.v1beta2.GenerateTextRequest.verify|verify} messages.
                     * @param message GenerateTextRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ai.generativelanguage.v1beta2.IGenerateTextRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GenerateTextRequest message, length delimited. Does not implicitly {@link google.ai.generativelanguage.v1beta2.GenerateTextRequest.verify|verify} messages.
                     * @param message GenerateTextRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ai.generativelanguage.v1beta2.IGenerateTextRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GenerateTextRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GenerateTextRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ai.generativelanguage.v1beta2.GenerateTextRequest;

                    /**
                     * Decodes a GenerateTextRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GenerateTextRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ai.generativelanguage.v1beta2.GenerateTextRequest;

                    /**
                     * Verifies a GenerateTextRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GenerateTextRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GenerateTextRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.ai.generativelanguage.v1beta2.GenerateTextRequest;

                    /**
                     * Creates a plain object from a GenerateTextRequest message. Also converts values to other types if specified.
                     * @param message GenerateTextRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ai.generativelanguage.v1beta2.GenerateTextRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GenerateTextRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GenerateTextRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GenerateTextResponse. */
                interface IGenerateTextResponse {

                    /** GenerateTextResponse candidates */
                    candidates?: (google.ai.generativelanguage.v1beta2.ITextCompletion[]|null);

                    /** GenerateTextResponse filters */
                    filters?: (google.ai.generativelanguage.v1beta2.IContentFilter[]|null);

                    /** GenerateTextResponse safetyFeedback */
                    safetyFeedback?: (google.ai.generativelanguage.v1beta2.ISafetyFeedback[]|null);
                }

                /** Represents a GenerateTextResponse. */
                class GenerateTextResponse implements IGenerateTextResponse {

                    /**
                     * Constructs a new GenerateTextResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ai.generativelanguage.v1beta2.IGenerateTextResponse);

                    /** GenerateTextResponse candidates. */
                    public candidates: google.ai.generativelanguage.v1beta2.ITextCompletion[];

                    /** GenerateTextResponse filters. */
                    public filters: google.ai.generativelanguage.v1beta2.IContentFilter[];

                    /** GenerateTextResponse safetyFeedback. */
                    public safetyFeedback: google.ai.generativelanguage.v1beta2.ISafetyFeedback[];

                    /**
                     * Creates a new GenerateTextResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GenerateTextResponse instance
                     */
                    public static create(properties?: google.ai.generativelanguage.v1beta2.IGenerateTextResponse): google.ai.generativelanguage.v1beta2.GenerateTextResponse;

                    /**
                     * Encodes the specified GenerateTextResponse message. Does not implicitly {@link google.ai.generativelanguage.v1beta2.GenerateTextResponse.verify|verify} messages.
                     * @param message GenerateTextResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ai.generativelanguage.v1beta2.IGenerateTextResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GenerateTextResponse message, length delimited. Does not implicitly {@link google.ai.generativelanguage.v1beta2.GenerateTextResponse.verify|verify} messages.
                     * @param message GenerateTextResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ai.generativelanguage.v1beta2.IGenerateTextResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GenerateTextResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GenerateTextResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ai.generativelanguage.v1beta2.GenerateTextResponse;

                    /**
                     * Decodes a GenerateTextResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GenerateTextResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ai.generativelanguage.v1beta2.GenerateTextResponse;

                    /**
                     * Verifies a GenerateTextResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GenerateTextResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GenerateTextResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.ai.generativelanguage.v1beta2.GenerateTextResponse;

                    /**
                     * Creates a plain object from a GenerateTextResponse message. Also converts values to other types if specified.
                     * @param message GenerateTextResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ai.generativelanguage.v1beta2.GenerateTextResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GenerateTextResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GenerateTextResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a TextPrompt. */
                interface ITextPrompt {

                    /** TextPrompt text */
                    text?: (string|null);
                }

                /** Represents a TextPrompt. */
                class TextPrompt implements ITextPrompt {

                    /**
                     * Constructs a new TextPrompt.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ai.generativelanguage.v1beta2.ITextPrompt);

                    /** TextPrompt text. */
                    public text: string;

                    /**
                     * Creates a new TextPrompt instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TextPrompt instance
                     */
                    public static create(properties?: google.ai.generativelanguage.v1beta2.ITextPrompt): google.ai.generativelanguage.v1beta2.TextPrompt;

                    /**
                     * Encodes the specified TextPrompt message. Does not implicitly {@link google.ai.generativelanguage.v1beta2.TextPrompt.verify|verify} messages.
                     * @param message TextPrompt message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ai.generativelanguage.v1beta2.ITextPrompt, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TextPrompt message, length delimited. Does not implicitly {@link google.ai.generativelanguage.v1beta2.TextPrompt.verify|verify} messages.
                     * @param message TextPrompt message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ai.generativelanguage.v1beta2.ITextPrompt, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TextPrompt message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TextPrompt
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ai.generativelanguage.v1beta2.TextPrompt;

                    /**
                     * Decodes a TextPrompt message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TextPrompt
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ai.generativelanguage.v1beta2.TextPrompt;

                    /**
                     * Verifies a TextPrompt message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TextPrompt message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TextPrompt
                     */
                    public static fromObject(object: { [k: string]: any }): google.ai.generativelanguage.v1beta2.TextPrompt;

                    /**
                     * Creates a plain object from a TextPrompt message. Also converts values to other types if specified.
                     * @param message TextPrompt
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ai.generativelanguage.v1beta2.TextPrompt, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TextPrompt to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TextPrompt
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a TextCompletion. */
                interface ITextCompletion {

                    /** TextCompletion output */
                    output?: (string|null);

                    /** TextCompletion safetyRatings */
                    safetyRatings?: (google.ai.generativelanguage.v1beta2.ISafetyRating[]|null);

                    /** TextCompletion citationMetadata */
                    citationMetadata?: (google.ai.generativelanguage.v1beta2.ICitationMetadata|null);
                }

                /** Represents a TextCompletion. */
                class TextCompletion implements ITextCompletion {

                    /**
                     * Constructs a new TextCompletion.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ai.generativelanguage.v1beta2.ITextCompletion);

                    /** TextCompletion output. */
                    public output: string;

                    /** TextCompletion safetyRatings. */
                    public safetyRatings: google.ai.generativelanguage.v1beta2.ISafetyRating[];

                    /** TextCompletion citationMetadata. */
                    public citationMetadata?: (google.ai.generativelanguage.v1beta2.ICitationMetadata|null);

                    /** TextCompletion _citationMetadata. */
                    public _citationMetadata?: "citationMetadata";

                    /**
                     * Creates a new TextCompletion instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TextCompletion instance
                     */
                    public static create(properties?: google.ai.generativelanguage.v1beta2.ITextCompletion): google.ai.generativelanguage.v1beta2.TextCompletion;

                    /**
                     * Encodes the specified TextCompletion message. Does not implicitly {@link google.ai.generativelanguage.v1beta2.TextCompletion.verify|verify} messages.
                     * @param message TextCompletion message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ai.generativelanguage.v1beta2.ITextCompletion, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TextCompletion message, length delimited. Does not implicitly {@link google.ai.generativelanguage.v1beta2.TextCompletion.verify|verify} messages.
                     * @param message TextCompletion message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ai.generativelanguage.v1beta2.ITextCompletion, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TextCompletion message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TextCompletion
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ai.generativelanguage.v1beta2.TextCompletion;

                    /**
                     * Decodes a TextCompletion message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TextCompletion
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ai.generativelanguage.v1beta2.TextCompletion;

                    /**
                     * Verifies a TextCompletion message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TextCompletion message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TextCompletion
                     */
                    public static fromObject(object: { [k: string]: any }): google.ai.generativelanguage.v1beta2.TextCompletion;

                    /**
                     * Creates a plain object from a TextCompletion message. Also converts values to other types if specified.
                     * @param message TextCompletion
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ai.generativelanguage.v1beta2.TextCompletion, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TextCompletion to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TextCompletion
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an EmbedTextRequest. */
                interface IEmbedTextRequest {

                    /** EmbedTextRequest model */
                    model?: (string|null);

                    /** EmbedTextRequest text */
                    text?: (string|null);
                }

                /** Represents an EmbedTextRequest. */
                class EmbedTextRequest implements IEmbedTextRequest {

                    /**
                     * Constructs a new EmbedTextRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ai.generativelanguage.v1beta2.IEmbedTextRequest);

                    /** EmbedTextRequest model. */
                    public model: string;

                    /** EmbedTextRequest text. */
                    public text: string;

                    /**
                     * Creates a new EmbedTextRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns EmbedTextRequest instance
                     */
                    public static create(properties?: google.ai.generativelanguage.v1beta2.IEmbedTextRequest): google.ai.generativelanguage.v1beta2.EmbedTextRequest;

                    /**
                     * Encodes the specified EmbedTextRequest message. Does not implicitly {@link google.ai.generativelanguage.v1beta2.EmbedTextRequest.verify|verify} messages.
                     * @param message EmbedTextRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ai.generativelanguage.v1beta2.IEmbedTextRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified EmbedTextRequest message, length delimited. Does not implicitly {@link google.ai.generativelanguage.v1beta2.EmbedTextRequest.verify|verify} messages.
                     * @param message EmbedTextRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ai.generativelanguage.v1beta2.IEmbedTextRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an EmbedTextRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns EmbedTextRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ai.generativelanguage.v1beta2.EmbedTextRequest;

                    /**
                     * Decodes an EmbedTextRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns EmbedTextRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ai.generativelanguage.v1beta2.EmbedTextRequest;

                    /**
                     * Verifies an EmbedTextRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an EmbedTextRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns EmbedTextRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.ai.generativelanguage.v1beta2.EmbedTextRequest;

                    /**
                     * Creates a plain object from an EmbedTextRequest message. Also converts values to other types if specified.
                     * @param message EmbedTextRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ai.generativelanguage.v1beta2.EmbedTextRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this EmbedTextRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for EmbedTextRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an EmbedTextResponse. */
                interface IEmbedTextResponse {

                    /** EmbedTextResponse embedding */
                    embedding?: (google.ai.generativelanguage.v1beta2.IEmbedding|null);
                }

                /** Represents an EmbedTextResponse. */
                class EmbedTextResponse implements IEmbedTextResponse {

                    /**
                     * Constructs a new EmbedTextResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ai.generativelanguage.v1beta2.IEmbedTextResponse);

                    /** EmbedTextResponse embedding. */
                    public embedding?: (google.ai.generativelanguage.v1beta2.IEmbedding|null);

                    /** EmbedTextResponse _embedding. */
                    public _embedding?: "embedding";

                    /**
                     * Creates a new EmbedTextResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns EmbedTextResponse instance
                     */
                    public static create(properties?: google.ai.generativelanguage.v1beta2.IEmbedTextResponse): google.ai.generativelanguage.v1beta2.EmbedTextResponse;

                    /**
                     * Encodes the specified EmbedTextResponse message. Does not implicitly {@link google.ai.generativelanguage.v1beta2.EmbedTextResponse.verify|verify} messages.
                     * @param message EmbedTextResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ai.generativelanguage.v1beta2.IEmbedTextResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified EmbedTextResponse message, length delimited. Does not implicitly {@link google.ai.generativelanguage.v1beta2.EmbedTextResponse.verify|verify} messages.
                     * @param message EmbedTextResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ai.generativelanguage.v1beta2.IEmbedTextResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an EmbedTextResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns EmbedTextResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ai.generativelanguage.v1beta2.EmbedTextResponse;

                    /**
                     * Decodes an EmbedTextResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns EmbedTextResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ai.generativelanguage.v1beta2.EmbedTextResponse;

                    /**
                     * Verifies an EmbedTextResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an EmbedTextResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns EmbedTextResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.ai.generativelanguage.v1beta2.EmbedTextResponse;

                    /**
                     * Creates a plain object from an EmbedTextResponse message. Also converts values to other types if specified.
                     * @param message EmbedTextResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ai.generativelanguage.v1beta2.EmbedTextResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this EmbedTextResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for EmbedTextResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an Embedding. */
                interface IEmbedding {

                    /** Embedding value */
                    value?: (number[]|null);
                }

                /** Represents an Embedding. */
                class Embedding implements IEmbedding {

                    /**
                     * Constructs a new Embedding.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ai.generativelanguage.v1beta2.IEmbedding);

                    /** Embedding value. */
                    public value: number[];

                    /**
                     * Creates a new Embedding instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Embedding instance
                     */
                    public static create(properties?: google.ai.generativelanguage.v1beta2.IEmbedding): google.ai.generativelanguage.v1beta2.Embedding;

                    /**
                     * Encodes the specified Embedding message. Does not implicitly {@link google.ai.generativelanguage.v1beta2.Embedding.verify|verify} messages.
                     * @param message Embedding message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ai.generativelanguage.v1beta2.IEmbedding, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Embedding message, length delimited. Does not implicitly {@link google.ai.generativelanguage.v1beta2.Embedding.verify|verify} messages.
                     * @param message Embedding message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ai.generativelanguage.v1beta2.IEmbedding, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Embedding message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Embedding
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ai.generativelanguage.v1beta2.Embedding;

                    /**
                     * Decodes an Embedding message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Embedding
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ai.generativelanguage.v1beta2.Embedding;

                    /**
                     * Verifies an Embedding message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Embedding message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Embedding
                     */
                    public static fromObject(object: { [k: string]: any }): google.ai.generativelanguage.v1beta2.Embedding;

                    /**
                     * Creates a plain object from an Embedding message. Also converts values to other types if specified.
                     * @param message Embedding
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ai.generativelanguage.v1beta2.Embedding, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Embedding to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Embedding
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }

            /** Namespace v1beta3. */
            namespace v1beta3 {

                /** Properties of a CitationMetadata. */
                interface ICitationMetadata {

                    /** CitationMetadata citationSources */
                    citationSources?: (google.ai.generativelanguage.v1beta3.ICitationSource[]|null);
                }

                /** Represents a CitationMetadata. */
                class CitationMetadata implements ICitationMetadata {

                    /**
                     * Constructs a new CitationMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ai.generativelanguage.v1beta3.ICitationMetadata);

                    /** CitationMetadata citationSources. */
                    public citationSources: google.ai.generativelanguage.v1beta3.ICitationSource[];

                    /**
                     * Creates a new CitationMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CitationMetadata instance
                     */
                    public static create(properties?: google.ai.generativelanguage.v1beta3.ICitationMetadata): google.ai.generativelanguage.v1beta3.CitationMetadata;

                    /**
                     * Encodes the specified CitationMetadata message. Does not implicitly {@link google.ai.generativelanguage.v1beta3.CitationMetadata.verify|verify} messages.
                     * @param message CitationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ai.generativelanguage.v1beta3.ICitationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CitationMetadata message, length delimited. Does not implicitly {@link google.ai.generativelanguage.v1beta3.CitationMetadata.verify|verify} messages.
                     * @param message CitationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ai.generativelanguage.v1beta3.ICitationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CitationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CitationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ai.generativelanguage.v1beta3.CitationMetadata;

                    /**
                     * Decodes a CitationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CitationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ai.generativelanguage.v1beta3.CitationMetadata;

                    /**
                     * Verifies a CitationMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CitationMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CitationMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.ai.generativelanguage.v1beta3.CitationMetadata;

                    /**
                     * Creates a plain object from a CitationMetadata message. Also converts values to other types if specified.
                     * @param message CitationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ai.generativelanguage.v1beta3.CitationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CitationMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CitationMetadata
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CitationSource. */
                interface ICitationSource {

                    /** CitationSource startIndex */
                    startIndex?: (number|null);

                    /** CitationSource endIndex */
                    endIndex?: (number|null);

                    /** CitationSource uri */
                    uri?: (string|null);

                    /** CitationSource license */
                    license?: (string|null);
                }

                /** Represents a CitationSource. */
                class CitationSource implements ICitationSource {

                    /**
                     * Constructs a new CitationSource.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ai.generativelanguage.v1beta3.ICitationSource);

                    /** CitationSource startIndex. */
                    public startIndex?: (number|null);

                    /** CitationSource endIndex. */
                    public endIndex?: (number|null);

                    /** CitationSource uri. */
                    public uri?: (string|null);

                    /** CitationSource license. */
                    public license?: (string|null);

                    /** CitationSource _startIndex. */
                    public _startIndex?: "startIndex";

                    /** CitationSource _endIndex. */
                    public _endIndex?: "endIndex";

                    /** CitationSource _uri. */
                    public _uri?: "uri";

                    /** CitationSource _license. */
                    public _license?: "license";

                    /**
                     * Creates a new CitationSource instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CitationSource instance
                     */
                    public static create(properties?: google.ai.generativelanguage.v1beta3.ICitationSource): google.ai.generativelanguage.v1beta3.CitationSource;

                    /**
                     * Encodes the specified CitationSource message. Does not implicitly {@link google.ai.generativelanguage.v1beta3.CitationSource.verify|verify} messages.
                     * @param message CitationSource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ai.generativelanguage.v1beta3.ICitationSource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CitationSource message, length delimited. Does not implicitly {@link google.ai.generativelanguage.v1beta3.CitationSource.verify|verify} messages.
                     * @param message CitationSource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ai.generativelanguage.v1beta3.ICitationSource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CitationSource message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CitationSource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ai.generativelanguage.v1beta3.CitationSource;

                    /**
                     * Decodes a CitationSource message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CitationSource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ai.generativelanguage.v1beta3.CitationSource;

                    /**
                     * Verifies a CitationSource message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CitationSource message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CitationSource
                     */
                    public static fromObject(object: { [k: string]: any }): google.ai.generativelanguage.v1beta3.CitationSource;

                    /**
                     * Creates a plain object from a CitationSource message. Also converts values to other types if specified.
                     * @param message CitationSource
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ai.generativelanguage.v1beta3.CitationSource, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CitationSource to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CitationSource
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Represents a DiscussService */
                class DiscussService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new DiscussService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new DiscussService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): DiscussService;

                    /**
                     * Calls GenerateMessage.
                     * @param request GenerateMessageRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and GenerateMessageResponse
                     */
                    public generateMessage(request: google.ai.generativelanguage.v1beta3.IGenerateMessageRequest, callback: google.ai.generativelanguage.v1beta3.DiscussService.GenerateMessageCallback): void;

                    /**
                     * Calls GenerateMessage.
                     * @param request GenerateMessageRequest message or plain object
                     * @returns Promise
                     */
                    public generateMessage(request: google.ai.generativelanguage.v1beta3.IGenerateMessageRequest): Promise<google.ai.generativelanguage.v1beta3.GenerateMessageResponse>;

                    /**
                     * Calls CountMessageTokens.
                     * @param request CountMessageTokensRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and CountMessageTokensResponse
                     */
                    public countMessageTokens(request: google.ai.generativelanguage.v1beta3.ICountMessageTokensRequest, callback: google.ai.generativelanguage.v1beta3.DiscussService.CountMessageTokensCallback): void;

                    /**
                     * Calls CountMessageTokens.
                     * @param request CountMessageTokensRequest message or plain object
                     * @returns Promise
                     */
                    public countMessageTokens(request: google.ai.generativelanguage.v1beta3.ICountMessageTokensRequest): Promise<google.ai.generativelanguage.v1beta3.CountMessageTokensResponse>;
                }

                namespace DiscussService {

                    /**
                     * Callback as used by {@link google.ai.generativelanguage.v1beta3.DiscussService|generateMessage}.
                     * @param error Error, if any
                     * @param [response] GenerateMessageResponse
                     */
                    type GenerateMessageCallback = (error: (Error|null), response?: google.ai.generativelanguage.v1beta3.GenerateMessageResponse) => void;

                    /**
                     * Callback as used by {@link google.ai.generativelanguage.v1beta3.DiscussService|countMessageTokens}.
                     * @param error Error, if any
                     * @param [response] CountMessageTokensResponse
                     */
                    type CountMessageTokensCallback = (error: (Error|null), response?: google.ai.generativelanguage.v1beta3.CountMessageTokensResponse) => void;
                }

                /** Properties of a GenerateMessageRequest. */
                interface IGenerateMessageRequest {

                    /** GenerateMessageRequest model */
                    model?: (string|null);

                    /** GenerateMessageRequest prompt */
                    prompt?: (google.ai.generativelanguage.v1beta3.IMessagePrompt|null);

                    /** GenerateMessageRequest temperature */
                    temperature?: (number|null);

                    /** GenerateMessageRequest candidateCount */
                    candidateCount?: (number|null);

                    /** GenerateMessageRequest topP */
                    topP?: (number|null);

                    /** GenerateMessageRequest topK */
                    topK?: (number|null);
                }

                /** Represents a GenerateMessageRequest. */
                class GenerateMessageRequest implements IGenerateMessageRequest {

                    /**
                     * Constructs a new GenerateMessageRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ai.generativelanguage.v1beta3.IGenerateMessageRequest);

                    /** GenerateMessageRequest model. */
                    public model: string;

                    /** GenerateMessageRequest prompt. */
                    public prompt?: (google.ai.generativelanguage.v1beta3.IMessagePrompt|null);

                    /** GenerateMessageRequest temperature. */
                    public temperature?: (number|null);

                    /** GenerateMessageRequest candidateCount. */
                    public candidateCount?: (number|null);

                    /** GenerateMessageRequest topP. */
                    public topP?: (number|null);

                    /** GenerateMessageRequest topK. */
                    public topK?: (number|null);

                    /** GenerateMessageRequest _temperature. */
                    public _temperature?: "temperature";

                    /** GenerateMessageRequest _candidateCount. */
                    public _candidateCount?: "candidateCount";

                    /** GenerateMessageRequest _topP. */
                    public _topP?: "topP";

                    /** GenerateMessageRequest _topK. */
                    public _topK?: "topK";

                    /**
                     * Creates a new GenerateMessageRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GenerateMessageRequest instance
                     */
                    public static create(properties?: google.ai.generativelanguage.v1beta3.IGenerateMessageRequest): google.ai.generativelanguage.v1beta3.GenerateMessageRequest;

                    /**
                     * Encodes the specified GenerateMessageRequest message. Does not implicitly {@link google.ai.generativelanguage.v1beta3.GenerateMessageRequest.verify|verify} messages.
                     * @param message GenerateMessageRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ai.generativelanguage.v1beta3.IGenerateMessageRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GenerateMessageRequest message, length delimited. Does not implicitly {@link google.ai.generativelanguage.v1beta3.GenerateMessageRequest.verify|verify} messages.
                     * @param message GenerateMessageRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ai.generativelanguage.v1beta3.IGenerateMessageRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GenerateMessageRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GenerateMessageRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ai.generativelanguage.v1beta3.GenerateMessageRequest;

                    /**
                     * Decodes a GenerateMessageRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GenerateMessageRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ai.generativelanguage.v1beta3.GenerateMessageRequest;

                    /**
                     * Verifies a GenerateMessageRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GenerateMessageRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GenerateMessageRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.ai.generativelanguage.v1beta3.GenerateMessageRequest;

                    /**
                     * Creates a plain object from a GenerateMessageRequest message. Also converts values to other types if specified.
                     * @param message GenerateMessageRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ai.generativelanguage.v1beta3.GenerateMessageRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GenerateMessageRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GenerateMessageRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GenerateMessageResponse. */
                interface IGenerateMessageResponse {

                    /** GenerateMessageResponse candidates */
                    candidates?: (google.ai.generativelanguage.v1beta3.IMessage[]|null);

                    /** GenerateMessageResponse messages */
                    messages?: (google.ai.generativelanguage.v1beta3.IMessage[]|null);

                    /** GenerateMessageResponse filters */
                    filters?: (google.ai.generativelanguage.v1beta3.IContentFilter[]|null);
                }

                /** Represents a GenerateMessageResponse. */
                class GenerateMessageResponse implements IGenerateMessageResponse {

                    /**
                     * Constructs a new GenerateMessageResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ai.generativelanguage.v1beta3.IGenerateMessageResponse);

                    /** GenerateMessageResponse candidates. */
                    public candidates: google.ai.generativelanguage.v1beta3.IMessage[];

                    /** GenerateMessageResponse messages. */
                    public messages: google.ai.generativelanguage.v1beta3.IMessage[];

                    /** GenerateMessageResponse filters. */
                    public filters: google.ai.generativelanguage.v1beta3.IContentFilter[];

                    /**
                     * Creates a new GenerateMessageResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GenerateMessageResponse instance
                     */
                    public static create(properties?: google.ai.generativelanguage.v1beta3.IGenerateMessageResponse): google.ai.generativelanguage.v1beta3.GenerateMessageResponse;

                    /**
                     * Encodes the specified GenerateMessageResponse message. Does not implicitly {@link google.ai.generativelanguage.v1beta3.GenerateMessageResponse.verify|verify} messages.
                     * @param message GenerateMessageResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ai.generativelanguage.v1beta3.IGenerateMessageResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GenerateMessageResponse message, length delimited. Does not implicitly {@link google.ai.generativelanguage.v1beta3.GenerateMessageResponse.verify|verify} messages.
                     * @param message GenerateMessageResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ai.generativelanguage.v1beta3.IGenerateMessageResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GenerateMessageResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GenerateMessageResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ai.generativelanguage.v1beta3.GenerateMessageResponse;

                    /**
                     * Decodes a GenerateMessageResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GenerateMessageResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ai.generativelanguage.v1beta3.GenerateMessageResponse;

                    /**
                     * Verifies a GenerateMessageResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GenerateMessageResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GenerateMessageResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.ai.generativelanguage.v1beta3.GenerateMessageResponse;

                    /**
                     * Creates a plain object from a GenerateMessageResponse message. Also converts values to other types if specified.
                     * @param message GenerateMessageResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ai.generativelanguage.v1beta3.GenerateMessageResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GenerateMessageResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GenerateMessageResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Message. */
                interface IMessage {

                    /** Message author */
                    author?: (string|null);

                    /** Message content */
                    content?: (string|null);

                    /** Message citationMetadata */
                    citationMetadata?: (google.ai.generativelanguage.v1beta3.ICitationMetadata|null);
                }

                /** Represents a Message. */
                class Message implements IMessage {

                    /**
                     * Constructs a new Message.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ai.generativelanguage.v1beta3.IMessage);

                    /** Message author. */
                    public author: string;

                    /** Message content. */
                    public content: string;

                    /** Message citationMetadata. */
                    public citationMetadata?: (google.ai.generativelanguage.v1beta3.ICitationMetadata|null);

                    /** Message _citationMetadata. */
                    public _citationMetadata?: "citationMetadata";

                    /**
                     * Creates a new Message instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Message instance
                     */
                    public static create(properties?: google.ai.generativelanguage.v1beta3.IMessage): google.ai.generativelanguage.v1beta3.Message;

                    /**
                     * Encodes the specified Message message. Does not implicitly {@link google.ai.generativelanguage.v1beta3.Message.verify|verify} messages.
                     * @param message Message message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ai.generativelanguage.v1beta3.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Message message, length delimited. Does not implicitly {@link google.ai.generativelanguage.v1beta3.Message.verify|verify} messages.
                     * @param message Message message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ai.generativelanguage.v1beta3.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Message message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Message
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ai.generativelanguage.v1beta3.Message;

                    /**
                     * Decodes a Message message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Message
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ai.generativelanguage.v1beta3.Message;

                    /**
                     * Verifies a Message message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Message message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Message
                     */
                    public static fromObject(object: { [k: string]: any }): google.ai.generativelanguage.v1beta3.Message;

                    /**
                     * Creates a plain object from a Message message. Also converts values to other types if specified.
                     * @param message Message
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ai.generativelanguage.v1beta3.Message, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Message to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Message
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a MessagePrompt. */
                interface IMessagePrompt {

                    /** MessagePrompt context */
                    context?: (string|null);

                    /** MessagePrompt examples */
                    examples?: (google.ai.generativelanguage.v1beta3.IExample[]|null);

                    /** MessagePrompt messages */
                    messages?: (google.ai.generativelanguage.v1beta3.IMessage[]|null);
                }

                /** Represents a MessagePrompt. */
                class MessagePrompt implements IMessagePrompt {

                    /**
                     * Constructs a new MessagePrompt.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ai.generativelanguage.v1beta3.IMessagePrompt);

                    /** MessagePrompt context. */
                    public context: string;

                    /** MessagePrompt examples. */
                    public examples: google.ai.generativelanguage.v1beta3.IExample[];

                    /** MessagePrompt messages. */
                    public messages: google.ai.generativelanguage.v1beta3.IMessage[];

                    /**
                     * Creates a new MessagePrompt instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MessagePrompt instance
                     */
                    public static create(properties?: google.ai.generativelanguage.v1beta3.IMessagePrompt): google.ai.generativelanguage.v1beta3.MessagePrompt;

                    /**
                     * Encodes the specified MessagePrompt message. Does not implicitly {@link google.ai.generativelanguage.v1beta3.MessagePrompt.verify|verify} messages.
                     * @param message MessagePrompt message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ai.generativelanguage.v1beta3.IMessagePrompt, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MessagePrompt message, length delimited. Does not implicitly {@link google.ai.generativelanguage.v1beta3.MessagePrompt.verify|verify} messages.
                     * @param message MessagePrompt message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ai.generativelanguage.v1beta3.IMessagePrompt, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MessagePrompt message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MessagePrompt
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ai.generativelanguage.v1beta3.MessagePrompt;

                    /**
                     * Decodes a MessagePrompt message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MessagePrompt
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ai.generativelanguage.v1beta3.MessagePrompt;

                    /**
                     * Verifies a MessagePrompt message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MessagePrompt message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MessagePrompt
                     */
                    public static fromObject(object: { [k: string]: any }): google.ai.generativelanguage.v1beta3.MessagePrompt;

                    /**
                     * Creates a plain object from a MessagePrompt message. Also converts values to other types if specified.
                     * @param message MessagePrompt
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ai.generativelanguage.v1beta3.MessagePrompt, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MessagePrompt to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for MessagePrompt
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an Example. */
                interface IExample {

                    /** Example input */
                    input?: (google.ai.generativelanguage.v1beta3.IMessage|null);

                    /** Example output */
                    output?: (google.ai.generativelanguage.v1beta3.IMessage|null);
                }

                /** Represents an Example. */
                class Example implements IExample {

                    /**
                     * Constructs a new Example.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ai.generativelanguage.v1beta3.IExample);

                    /** Example input. */
                    public input?: (google.ai.generativelanguage.v1beta3.IMessage|null);

                    /** Example output. */
                    public output?: (google.ai.generativelanguage.v1beta3.IMessage|null);

                    /**
                     * Creates a new Example instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Example instance
                     */
                    public static create(properties?: google.ai.generativelanguage.v1beta3.IExample): google.ai.generativelanguage.v1beta3.Example;

                    /**
                     * Encodes the specified Example message. Does not implicitly {@link google.ai.generativelanguage.v1beta3.Example.verify|verify} messages.
                     * @param message Example message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ai.generativelanguage.v1beta3.IExample, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Example message, length delimited. Does not implicitly {@link google.ai.generativelanguage.v1beta3.Example.verify|verify} messages.
                     * @param message Example message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ai.generativelanguage.v1beta3.IExample, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Example message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Example
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ai.generativelanguage.v1beta3.Example;

                    /**
                     * Decodes an Example message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Example
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ai.generativelanguage.v1beta3.Example;

                    /**
                     * Verifies an Example message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Example message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Example
                     */
                    public static fromObject(object: { [k: string]: any }): google.ai.generativelanguage.v1beta3.Example;

                    /**
                     * Creates a plain object from an Example message. Also converts values to other types if specified.
                     * @param message Example
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ai.generativelanguage.v1beta3.Example, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Example to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Example
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CountMessageTokensRequest. */
                interface ICountMessageTokensRequest {

                    /** CountMessageTokensRequest model */
                    model?: (string|null);

                    /** CountMessageTokensRequest prompt */
                    prompt?: (google.ai.generativelanguage.v1beta3.IMessagePrompt|null);
                }

                /** Represents a CountMessageTokensRequest. */
                class CountMessageTokensRequest implements ICountMessageTokensRequest {

                    /**
                     * Constructs a new CountMessageTokensRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ai.generativelanguage.v1beta3.ICountMessageTokensRequest);

                    /** CountMessageTokensRequest model. */
                    public model: string;

                    /** CountMessageTokensRequest prompt. */
                    public prompt?: (google.ai.generativelanguage.v1beta3.IMessagePrompt|null);

                    /**
                     * Creates a new CountMessageTokensRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CountMessageTokensRequest instance
                     */
                    public static create(properties?: google.ai.generativelanguage.v1beta3.ICountMessageTokensRequest): google.ai.generativelanguage.v1beta3.CountMessageTokensRequest;

                    /**
                     * Encodes the specified CountMessageTokensRequest message. Does not implicitly {@link google.ai.generativelanguage.v1beta3.CountMessageTokensRequest.verify|verify} messages.
                     * @param message CountMessageTokensRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ai.generativelanguage.v1beta3.ICountMessageTokensRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CountMessageTokensRequest message, length delimited. Does not implicitly {@link google.ai.generativelanguage.v1beta3.CountMessageTokensRequest.verify|verify} messages.
                     * @param message CountMessageTokensRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ai.generativelanguage.v1beta3.ICountMessageTokensRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CountMessageTokensRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CountMessageTokensRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ai.generativelanguage.v1beta3.CountMessageTokensRequest;

                    /**
                     * Decodes a CountMessageTokensRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CountMessageTokensRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ai.generativelanguage.v1beta3.CountMessageTokensRequest;

                    /**
                     * Verifies a CountMessageTokensRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CountMessageTokensRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CountMessageTokensRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.ai.generativelanguage.v1beta3.CountMessageTokensRequest;

                    /**
                     * Creates a plain object from a CountMessageTokensRequest message. Also converts values to other types if specified.
                     * @param message CountMessageTokensRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ai.generativelanguage.v1beta3.CountMessageTokensRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CountMessageTokensRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CountMessageTokensRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CountMessageTokensResponse. */
                interface ICountMessageTokensResponse {

                    /** CountMessageTokensResponse tokenCount */
                    tokenCount?: (number|null);
                }

                /** Represents a CountMessageTokensResponse. */
                class CountMessageTokensResponse implements ICountMessageTokensResponse {

                    /**
                     * Constructs a new CountMessageTokensResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ai.generativelanguage.v1beta3.ICountMessageTokensResponse);

                    /** CountMessageTokensResponse tokenCount. */
                    public tokenCount: number;

                    /**
                     * Creates a new CountMessageTokensResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CountMessageTokensResponse instance
                     */
                    public static create(properties?: google.ai.generativelanguage.v1beta3.ICountMessageTokensResponse): google.ai.generativelanguage.v1beta3.CountMessageTokensResponse;

                    /**
                     * Encodes the specified CountMessageTokensResponse message. Does not implicitly {@link google.ai.generativelanguage.v1beta3.CountMessageTokensResponse.verify|verify} messages.
                     * @param message CountMessageTokensResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ai.generativelanguage.v1beta3.ICountMessageTokensResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CountMessageTokensResponse message, length delimited. Does not implicitly {@link google.ai.generativelanguage.v1beta3.CountMessageTokensResponse.verify|verify} messages.
                     * @param message CountMessageTokensResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ai.generativelanguage.v1beta3.ICountMessageTokensResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CountMessageTokensResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CountMessageTokensResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ai.generativelanguage.v1beta3.CountMessageTokensResponse;

                    /**
                     * Decodes a CountMessageTokensResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CountMessageTokensResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ai.generativelanguage.v1beta3.CountMessageTokensResponse;

                    /**
                     * Verifies a CountMessageTokensResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CountMessageTokensResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CountMessageTokensResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.ai.generativelanguage.v1beta3.CountMessageTokensResponse;

                    /**
                     * Creates a plain object from a CountMessageTokensResponse message. Also converts values to other types if specified.
                     * @param message CountMessageTokensResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ai.generativelanguage.v1beta3.CountMessageTokensResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CountMessageTokensResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CountMessageTokensResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** HarmCategory enum. */
                enum HarmCategory {
                    HARM_CATEGORY_UNSPECIFIED = 0,
                    HARM_CATEGORY_DEROGATORY = 1,
                    HARM_CATEGORY_TOXICITY = 2,
                    HARM_CATEGORY_VIOLENCE = 3,
                    HARM_CATEGORY_SEXUAL = 4,
                    HARM_CATEGORY_MEDICAL = 5,
                    HARM_CATEGORY_DANGEROUS = 6
                }

                /** Properties of a ContentFilter. */
                interface IContentFilter {

                    /** ContentFilter reason */
                    reason?: (google.ai.generativelanguage.v1beta3.ContentFilter.BlockedReason|keyof typeof google.ai.generativelanguage.v1beta3.ContentFilter.BlockedReason|null);

                    /** ContentFilter message */
                    message?: (string|null);
                }

                /** Represents a ContentFilter. */
                class ContentFilter implements IContentFilter {

                    /**
                     * Constructs a new ContentFilter.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ai.generativelanguage.v1beta3.IContentFilter);

                    /** ContentFilter reason. */
                    public reason: (google.ai.generativelanguage.v1beta3.ContentFilter.BlockedReason|keyof typeof google.ai.generativelanguage.v1beta3.ContentFilter.BlockedReason);

                    /** ContentFilter message. */
                    public message?: (string|null);

                    /** ContentFilter _message. */
                    public _message?: "message";

                    /**
                     * Creates a new ContentFilter instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ContentFilter instance
                     */
                    public static create(properties?: google.ai.generativelanguage.v1beta3.IContentFilter): google.ai.generativelanguage.v1beta3.ContentFilter;

                    /**
                     * Encodes the specified ContentFilter message. Does not implicitly {@link google.ai.generativelanguage.v1beta3.ContentFilter.verify|verify} messages.
                     * @param message ContentFilter message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ai.generativelanguage.v1beta3.IContentFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ContentFilter message, length delimited. Does not implicitly {@link google.ai.generativelanguage.v1beta3.ContentFilter.verify|verify} messages.
                     * @param message ContentFilter message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ai.generativelanguage.v1beta3.IContentFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ContentFilter message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ContentFilter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ai.generativelanguage.v1beta3.ContentFilter;

                    /**
                     * Decodes a ContentFilter message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ContentFilter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ai.generativelanguage.v1beta3.ContentFilter;

                    /**
                     * Verifies a ContentFilter message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ContentFilter message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ContentFilter
                     */
                    public static fromObject(object: { [k: string]: any }): google.ai.generativelanguage.v1beta3.ContentFilter;

                    /**
                     * Creates a plain object from a ContentFilter message. Also converts values to other types if specified.
                     * @param message ContentFilter
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ai.generativelanguage.v1beta3.ContentFilter, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ContentFilter to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ContentFilter
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace ContentFilter {

                    /** BlockedReason enum. */
                    enum BlockedReason {
                        BLOCKED_REASON_UNSPECIFIED = 0,
                        SAFETY = 1,
                        OTHER = 2
                    }
                }

                /** Properties of a SafetyFeedback. */
                interface ISafetyFeedback {

                    /** SafetyFeedback rating */
                    rating?: (google.ai.generativelanguage.v1beta3.ISafetyRating|null);

                    /** SafetyFeedback setting */
                    setting?: (google.ai.generativelanguage.v1beta3.ISafetySetting|null);
                }

                /** Represents a SafetyFeedback. */
                class SafetyFeedback implements ISafetyFeedback {

                    /**
                     * Constructs a new SafetyFeedback.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ai.generativelanguage.v1beta3.ISafetyFeedback);

                    /** SafetyFeedback rating. */
                    public rating?: (google.ai.generativelanguage.v1beta3.ISafetyRating|null);

                    /** SafetyFeedback setting. */
                    public setting?: (google.ai.generativelanguage.v1beta3.ISafetySetting|null);

                    /**
                     * Creates a new SafetyFeedback instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SafetyFeedback instance
                     */
                    public static create(properties?: google.ai.generativelanguage.v1beta3.ISafetyFeedback): google.ai.generativelanguage.v1beta3.SafetyFeedback;

                    /**
                     * Encodes the specified SafetyFeedback message. Does not implicitly {@link google.ai.generativelanguage.v1beta3.SafetyFeedback.verify|verify} messages.
                     * @param message SafetyFeedback message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ai.generativelanguage.v1beta3.ISafetyFeedback, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SafetyFeedback message, length delimited. Does not implicitly {@link google.ai.generativelanguage.v1beta3.SafetyFeedback.verify|verify} messages.
                     * @param message SafetyFeedback message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ai.generativelanguage.v1beta3.ISafetyFeedback, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SafetyFeedback message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SafetyFeedback
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ai.generativelanguage.v1beta3.SafetyFeedback;

                    /**
                     * Decodes a SafetyFeedback message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SafetyFeedback
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ai.generativelanguage.v1beta3.SafetyFeedback;

                    /**
                     * Verifies a SafetyFeedback message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SafetyFeedback message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SafetyFeedback
                     */
                    public static fromObject(object: { [k: string]: any }): google.ai.generativelanguage.v1beta3.SafetyFeedback;

                    /**
                     * Creates a plain object from a SafetyFeedback message. Also converts values to other types if specified.
                     * @param message SafetyFeedback
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ai.generativelanguage.v1beta3.SafetyFeedback, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SafetyFeedback to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SafetyFeedback
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a SafetyRating. */
                interface ISafetyRating {

                    /** SafetyRating category */
                    category?: (google.ai.generativelanguage.v1beta3.HarmCategory|keyof typeof google.ai.generativelanguage.v1beta3.HarmCategory|null);

                    /** SafetyRating probability */
                    probability?: (google.ai.generativelanguage.v1beta3.SafetyRating.HarmProbability|keyof typeof google.ai.generativelanguage.v1beta3.SafetyRating.HarmProbability|null);
                }

                /** Represents a SafetyRating. */
                class SafetyRating implements ISafetyRating {

                    /**
                     * Constructs a new SafetyRating.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ai.generativelanguage.v1beta3.ISafetyRating);

                    /** SafetyRating category. */
                    public category: (google.ai.generativelanguage.v1beta3.HarmCategory|keyof typeof google.ai.generativelanguage.v1beta3.HarmCategory);

                    /** SafetyRating probability. */
                    public probability: (google.ai.generativelanguage.v1beta3.SafetyRating.HarmProbability|keyof typeof google.ai.generativelanguage.v1beta3.SafetyRating.HarmProbability);

                    /**
                     * Creates a new SafetyRating instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SafetyRating instance
                     */
                    public static create(properties?: google.ai.generativelanguage.v1beta3.ISafetyRating): google.ai.generativelanguage.v1beta3.SafetyRating;

                    /**
                     * Encodes the specified SafetyRating message. Does not implicitly {@link google.ai.generativelanguage.v1beta3.SafetyRating.verify|verify} messages.
                     * @param message SafetyRating message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ai.generativelanguage.v1beta3.ISafetyRating, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SafetyRating message, length delimited. Does not implicitly {@link google.ai.generativelanguage.v1beta3.SafetyRating.verify|verify} messages.
                     * @param message SafetyRating message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ai.generativelanguage.v1beta3.ISafetyRating, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SafetyRating message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SafetyRating
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ai.generativelanguage.v1beta3.SafetyRating;

                    /**
                     * Decodes a SafetyRating message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SafetyRating
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ai.generativelanguage.v1beta3.SafetyRating;

                    /**
                     * Verifies a SafetyRating message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SafetyRating message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SafetyRating
                     */
                    public static fromObject(object: { [k: string]: any }): google.ai.generativelanguage.v1beta3.SafetyRating;

                    /**
                     * Creates a plain object from a SafetyRating message. Also converts values to other types if specified.
                     * @param message SafetyRating
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ai.generativelanguage.v1beta3.SafetyRating, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SafetyRating to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SafetyRating
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace SafetyRating {

                    /** HarmProbability enum. */
                    enum HarmProbability {
                        HARM_PROBABILITY_UNSPECIFIED = 0,
                        NEGLIGIBLE = 1,
                        LOW = 2,
                        MEDIUM = 3,
                        HIGH = 4
                    }
                }

                /** Properties of a SafetySetting. */
                interface ISafetySetting {

                    /** SafetySetting category */
                    category?: (google.ai.generativelanguage.v1beta3.HarmCategory|keyof typeof google.ai.generativelanguage.v1beta3.HarmCategory|null);

                    /** SafetySetting threshold */
                    threshold?: (google.ai.generativelanguage.v1beta3.SafetySetting.HarmBlockThreshold|keyof typeof google.ai.generativelanguage.v1beta3.SafetySetting.HarmBlockThreshold|null);
                }

                /** Represents a SafetySetting. */
                class SafetySetting implements ISafetySetting {

                    /**
                     * Constructs a new SafetySetting.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ai.generativelanguage.v1beta3.ISafetySetting);

                    /** SafetySetting category. */
                    public category: (google.ai.generativelanguage.v1beta3.HarmCategory|keyof typeof google.ai.generativelanguage.v1beta3.HarmCategory);

                    /** SafetySetting threshold. */
                    public threshold: (google.ai.generativelanguage.v1beta3.SafetySetting.HarmBlockThreshold|keyof typeof google.ai.generativelanguage.v1beta3.SafetySetting.HarmBlockThreshold);

                    /**
                     * Creates a new SafetySetting instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SafetySetting instance
                     */
                    public static create(properties?: google.ai.generativelanguage.v1beta3.ISafetySetting): google.ai.generativelanguage.v1beta3.SafetySetting;

                    /**
                     * Encodes the specified SafetySetting message. Does not implicitly {@link google.ai.generativelanguage.v1beta3.SafetySetting.verify|verify} messages.
                     * @param message SafetySetting message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ai.generativelanguage.v1beta3.ISafetySetting, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SafetySetting message, length delimited. Does not implicitly {@link google.ai.generativelanguage.v1beta3.SafetySetting.verify|verify} messages.
                     * @param message SafetySetting message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ai.generativelanguage.v1beta3.ISafetySetting, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SafetySetting message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SafetySetting
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ai.generativelanguage.v1beta3.SafetySetting;

                    /**
                     * Decodes a SafetySetting message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SafetySetting
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ai.generativelanguage.v1beta3.SafetySetting;

                    /**
                     * Verifies a SafetySetting message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SafetySetting message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SafetySetting
                     */
                    public static fromObject(object: { [k: string]: any }): google.ai.generativelanguage.v1beta3.SafetySetting;

                    /**
                     * Creates a plain object from a SafetySetting message. Also converts values to other types if specified.
                     * @param message SafetySetting
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ai.generativelanguage.v1beta3.SafetySetting, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SafetySetting to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SafetySetting
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace SafetySetting {

                    /** HarmBlockThreshold enum. */
                    enum HarmBlockThreshold {
                        HARM_BLOCK_THRESHOLD_UNSPECIFIED = 0,
                        BLOCK_LOW_AND_ABOVE = 1,
                        BLOCK_MEDIUM_AND_ABOVE = 2,
                        BLOCK_ONLY_HIGH = 3,
                        BLOCK_NONE = 4
                    }
                }

                /** Properties of a Model. */
                interface IModel {

                    /** Model name */
                    name?: (string|null);

                    /** Model baseModelId */
                    baseModelId?: (string|null);

                    /** Model version */
                    version?: (string|null);

                    /** Model displayName */
                    displayName?: (string|null);

                    /** Model description */
                    description?: (string|null);

                    /** Model inputTokenLimit */
                    inputTokenLimit?: (number|null);

                    /** Model outputTokenLimit */
                    outputTokenLimit?: (number|null);

                    /** Model supportedGenerationMethods */
                    supportedGenerationMethods?: (string[]|null);

                    /** Model temperature */
                    temperature?: (number|null);

                    /** Model topP */
                    topP?: (number|null);

                    /** Model topK */
                    topK?: (number|null);
                }

                /** Represents a Model. */
                class Model implements IModel {

                    /**
                     * Constructs a new Model.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ai.generativelanguage.v1beta3.IModel);

                    /** Model name. */
                    public name: string;

                    /** Model baseModelId. */
                    public baseModelId: string;

                    /** Model version. */
                    public version: string;

                    /** Model displayName. */
                    public displayName: string;

                    /** Model description. */
                    public description: string;

                    /** Model inputTokenLimit. */
                    public inputTokenLimit: number;

                    /** Model outputTokenLimit. */
                    public outputTokenLimit: number;

                    /** Model supportedGenerationMethods. */
                    public supportedGenerationMethods: string[];

                    /** Model temperature. */
                    public temperature?: (number|null);

                    /** Model topP. */
                    public topP?: (number|null);

                    /** Model topK. */
                    public topK?: (number|null);

                    /** Model _temperature. */
                    public _temperature?: "temperature";

                    /** Model _topP. */
                    public _topP?: "topP";

                    /** Model _topK. */
                    public _topK?: "topK";

                    /**
                     * Creates a new Model instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Model instance
                     */
                    public static create(properties?: google.ai.generativelanguage.v1beta3.IModel): google.ai.generativelanguage.v1beta3.Model;

                    /**
                     * Encodes the specified Model message. Does not implicitly {@link google.ai.generativelanguage.v1beta3.Model.verify|verify} messages.
                     * @param message Model message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ai.generativelanguage.v1beta3.IModel, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Model message, length delimited. Does not implicitly {@link google.ai.generativelanguage.v1beta3.Model.verify|verify} messages.
                     * @param message Model message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ai.generativelanguage.v1beta3.IModel, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Model message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Model
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ai.generativelanguage.v1beta3.Model;

                    /**
                     * Decodes a Model message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Model
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ai.generativelanguage.v1beta3.Model;

                    /**
                     * Verifies a Model message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Model message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Model
                     */
                    public static fromObject(object: { [k: string]: any }): google.ai.generativelanguage.v1beta3.Model;

                    /**
                     * Creates a plain object from a Model message. Also converts values to other types if specified.
                     * @param message Model
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ai.generativelanguage.v1beta3.Model, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Model to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Model
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Represents a ModelService */
                class ModelService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new ModelService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new ModelService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): ModelService;

                    /**
                     * Calls GetModel.
                     * @param request GetModelRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Model
                     */
                    public getModel(request: google.ai.generativelanguage.v1beta3.IGetModelRequest, callback: google.ai.generativelanguage.v1beta3.ModelService.GetModelCallback): void;

                    /**
                     * Calls GetModel.
                     * @param request GetModelRequest message or plain object
                     * @returns Promise
                     */
                    public getModel(request: google.ai.generativelanguage.v1beta3.IGetModelRequest): Promise<google.ai.generativelanguage.v1beta3.Model>;

                    /**
                     * Calls ListModels.
                     * @param request ListModelsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListModelsResponse
                     */
                    public listModels(request: google.ai.generativelanguage.v1beta3.IListModelsRequest, callback: google.ai.generativelanguage.v1beta3.ModelService.ListModelsCallback): void;

                    /**
                     * Calls ListModels.
                     * @param request ListModelsRequest message or plain object
                     * @returns Promise
                     */
                    public listModels(request: google.ai.generativelanguage.v1beta3.IListModelsRequest): Promise<google.ai.generativelanguage.v1beta3.ListModelsResponse>;

                    /**
                     * Calls GetTunedModel.
                     * @param request GetTunedModelRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and TunedModel
                     */
                    public getTunedModel(request: google.ai.generativelanguage.v1beta3.IGetTunedModelRequest, callback: google.ai.generativelanguage.v1beta3.ModelService.GetTunedModelCallback): void;

                    /**
                     * Calls GetTunedModel.
                     * @param request GetTunedModelRequest message or plain object
                     * @returns Promise
                     */
                    public getTunedModel(request: google.ai.generativelanguage.v1beta3.IGetTunedModelRequest): Promise<google.ai.generativelanguage.v1beta3.TunedModel>;

                    /**
                     * Calls ListTunedModels.
                     * @param request ListTunedModelsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListTunedModelsResponse
                     */
                    public listTunedModels(request: google.ai.generativelanguage.v1beta3.IListTunedModelsRequest, callback: google.ai.generativelanguage.v1beta3.ModelService.ListTunedModelsCallback): void;

                    /**
                     * Calls ListTunedModels.
                     * @param request ListTunedModelsRequest message or plain object
                     * @returns Promise
                     */
                    public listTunedModels(request: google.ai.generativelanguage.v1beta3.IListTunedModelsRequest): Promise<google.ai.generativelanguage.v1beta3.ListTunedModelsResponse>;

                    /**
                     * Calls CreateTunedModel.
                     * @param request CreateTunedModelRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createTunedModel(request: google.ai.generativelanguage.v1beta3.ICreateTunedModelRequest, callback: google.ai.generativelanguage.v1beta3.ModelService.CreateTunedModelCallback): void;

                    /**
                     * Calls CreateTunedModel.
                     * @param request CreateTunedModelRequest message or plain object
                     * @returns Promise
                     */
                    public createTunedModel(request: google.ai.generativelanguage.v1beta3.ICreateTunedModelRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateTunedModel.
                     * @param request UpdateTunedModelRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and TunedModel
                     */
                    public updateTunedModel(request: google.ai.generativelanguage.v1beta3.IUpdateTunedModelRequest, callback: google.ai.generativelanguage.v1beta3.ModelService.UpdateTunedModelCallback): void;

                    /**
                     * Calls UpdateTunedModel.
                     * @param request UpdateTunedModelRequest message or plain object
                     * @returns Promise
                     */
                    public updateTunedModel(request: google.ai.generativelanguage.v1beta3.IUpdateTunedModelRequest): Promise<google.ai.generativelanguage.v1beta3.TunedModel>;

                    /**
                     * Calls DeleteTunedModel.
                     * @param request DeleteTunedModelRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteTunedModel(request: google.ai.generativelanguage.v1beta3.IDeleteTunedModelRequest, callback: google.ai.generativelanguage.v1beta3.ModelService.DeleteTunedModelCallback): void;

                    /**
                     * Calls DeleteTunedModel.
                     * @param request DeleteTunedModelRequest message or plain object
                     * @returns Promise
                     */
                    public deleteTunedModel(request: google.ai.generativelanguage.v1beta3.IDeleteTunedModelRequest): Promise<google.protobuf.Empty>;
                }

                namespace ModelService {

                    /**
                     * Callback as used by {@link google.ai.generativelanguage.v1beta3.ModelService|getModel}.
                     * @param error Error, if any
                     * @param [response] Model
                     */
                    type GetModelCallback = (error: (Error|null), response?: google.ai.generativelanguage.v1beta3.Model) => void;

                    /**
                     * Callback as used by {@link google.ai.generativelanguage.v1beta3.ModelService|listModels}.
                     * @param error Error, if any
                     * @param [response] ListModelsResponse
                     */
                    type ListModelsCallback = (error: (Error|null), response?: google.ai.generativelanguage.v1beta3.ListModelsResponse) => void;

                    /**
                     * Callback as used by {@link google.ai.generativelanguage.v1beta3.ModelService|getTunedModel}.
                     * @param error Error, if any
                     * @param [response] TunedModel
                     */
                    type GetTunedModelCallback = (error: (Error|null), response?: google.ai.generativelanguage.v1beta3.TunedModel) => void;

                    /**
                     * Callback as used by {@link google.ai.generativelanguage.v1beta3.ModelService|listTunedModels}.
                     * @param error Error, if any
                     * @param [response] ListTunedModelsResponse
                     */
                    type ListTunedModelsCallback = (error: (Error|null), response?: google.ai.generativelanguage.v1beta3.ListTunedModelsResponse) => void;

                    /**
                     * Callback as used by {@link google.ai.generativelanguage.v1beta3.ModelService|createTunedModel}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateTunedModelCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.ai.generativelanguage.v1beta3.ModelService|updateTunedModel}.
                     * @param error Error, if any
                     * @param [response] TunedModel
                     */
                    type UpdateTunedModelCallback = (error: (Error|null), response?: google.ai.generativelanguage.v1beta3.TunedModel) => void;

                    /**
                     * Callback as used by {@link google.ai.generativelanguage.v1beta3.ModelService|deleteTunedModel}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteTunedModelCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;
                }

                /** Properties of a GetModelRequest. */
                interface IGetModelRequest {

                    /** GetModelRequest name */
                    name?: (string|null);
                }

                /** Represents a GetModelRequest. */
                class GetModelRequest implements IGetModelRequest {

                    /**
                     * Constructs a new GetModelRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ai.generativelanguage.v1beta3.IGetModelRequest);

                    /** GetModelRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetModelRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetModelRequest instance
                     */
                    public static create(properties?: google.ai.generativelanguage.v1beta3.IGetModelRequest): google.ai.generativelanguage.v1beta3.GetModelRequest;

                    /**
                     * Encodes the specified GetModelRequest message. Does not implicitly {@link google.ai.generativelanguage.v1beta3.GetModelRequest.verify|verify} messages.
                     * @param message GetModelRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ai.generativelanguage.v1beta3.IGetModelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetModelRequest message, length delimited. Does not implicitly {@link google.ai.generativelanguage.v1beta3.GetModelRequest.verify|verify} messages.
                     * @param message GetModelRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ai.generativelanguage.v1beta3.IGetModelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetModelRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetModelRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ai.generativelanguage.v1beta3.GetModelRequest;

                    /**
                     * Decodes a GetModelRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetModelRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ai.generativelanguage.v1beta3.GetModelRequest;

                    /**
                     * Verifies a GetModelRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetModelRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetModelRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.ai.generativelanguage.v1beta3.GetModelRequest;

                    /**
                     * Creates a plain object from a GetModelRequest message. Also converts values to other types if specified.
                     * @param message GetModelRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ai.generativelanguage.v1beta3.GetModelRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetModelRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetModelRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListModelsRequest. */
                interface IListModelsRequest {

                    /** ListModelsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListModelsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListModelsRequest. */
                class ListModelsRequest implements IListModelsRequest {

                    /**
                     * Constructs a new ListModelsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ai.generativelanguage.v1beta3.IListModelsRequest);

                    /** ListModelsRequest pageSize. */
                    public pageSize: number;

                    /** ListModelsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListModelsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListModelsRequest instance
                     */
                    public static create(properties?: google.ai.generativelanguage.v1beta3.IListModelsRequest): google.ai.generativelanguage.v1beta3.ListModelsRequest;

                    /**
                     * Encodes the specified ListModelsRequest message. Does not implicitly {@link google.ai.generativelanguage.v1beta3.ListModelsRequest.verify|verify} messages.
                     * @param message ListModelsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ai.generativelanguage.v1beta3.IListModelsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListModelsRequest message, length delimited. Does not implicitly {@link google.ai.generativelanguage.v1beta3.ListModelsRequest.verify|verify} messages.
                     * @param message ListModelsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ai.generativelanguage.v1beta3.IListModelsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListModelsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListModelsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ai.generativelanguage.v1beta3.ListModelsRequest;

                    /**
                     * Decodes a ListModelsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListModelsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ai.generativelanguage.v1beta3.ListModelsRequest;

                    /**
                     * Verifies a ListModelsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListModelsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListModelsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.ai.generativelanguage.v1beta3.ListModelsRequest;

                    /**
                     * Creates a plain object from a ListModelsRequest message. Also converts values to other types if specified.
                     * @param message ListModelsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ai.generativelanguage.v1beta3.ListModelsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListModelsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListModelsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListModelsResponse. */
                interface IListModelsResponse {

                    /** ListModelsResponse models */
                    models?: (google.ai.generativelanguage.v1beta3.IModel[]|null);

                    /** ListModelsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListModelsResponse. */
                class ListModelsResponse implements IListModelsResponse {

                    /**
                     * Constructs a new ListModelsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ai.generativelanguage.v1beta3.IListModelsResponse);

                    /** ListModelsResponse models. */
                    public models: google.ai.generativelanguage.v1beta3.IModel[];

                    /** ListModelsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListModelsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListModelsResponse instance
                     */
                    public static create(properties?: google.ai.generativelanguage.v1beta3.IListModelsResponse): google.ai.generativelanguage.v1beta3.ListModelsResponse;

                    /**
                     * Encodes the specified ListModelsResponse message. Does not implicitly {@link google.ai.generativelanguage.v1beta3.ListModelsResponse.verify|verify} messages.
                     * @param message ListModelsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ai.generativelanguage.v1beta3.IListModelsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListModelsResponse message, length delimited. Does not implicitly {@link google.ai.generativelanguage.v1beta3.ListModelsResponse.verify|verify} messages.
                     * @param message ListModelsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ai.generativelanguage.v1beta3.IListModelsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListModelsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListModelsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ai.generativelanguage.v1beta3.ListModelsResponse;

                    /**
                     * Decodes a ListModelsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListModelsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ai.generativelanguage.v1beta3.ListModelsResponse;

                    /**
                     * Verifies a ListModelsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListModelsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListModelsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.ai.generativelanguage.v1beta3.ListModelsResponse;

                    /**
                     * Creates a plain object from a ListModelsResponse message. Also converts values to other types if specified.
                     * @param message ListModelsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ai.generativelanguage.v1beta3.ListModelsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListModelsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListModelsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetTunedModelRequest. */
                interface IGetTunedModelRequest {

                    /** GetTunedModelRequest name */
                    name?: (string|null);
                }

                /** Represents a GetTunedModelRequest. */
                class GetTunedModelRequest implements IGetTunedModelRequest {

                    /**
                     * Constructs a new GetTunedModelRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ai.generativelanguage.v1beta3.IGetTunedModelRequest);

                    /** GetTunedModelRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetTunedModelRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetTunedModelRequest instance
                     */
                    public static create(properties?: google.ai.generativelanguage.v1beta3.IGetTunedModelRequest): google.ai.generativelanguage.v1beta3.GetTunedModelRequest;

                    /**
                     * Encodes the specified GetTunedModelRequest message. Does not implicitly {@link google.ai.generativelanguage.v1beta3.GetTunedModelRequest.verify|verify} messages.
                     * @param message GetTunedModelRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ai.generativelanguage.v1beta3.IGetTunedModelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetTunedModelRequest message, length delimited. Does not implicitly {@link google.ai.generativelanguage.v1beta3.GetTunedModelRequest.verify|verify} messages.
                     * @param message GetTunedModelRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ai.generativelanguage.v1beta3.IGetTunedModelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetTunedModelRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetTunedModelRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ai.generativelanguage.v1beta3.GetTunedModelRequest;

                    /**
                     * Decodes a GetTunedModelRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetTunedModelRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ai.generativelanguage.v1beta3.GetTunedModelRequest;

                    /**
                     * Verifies a GetTunedModelRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetTunedModelRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetTunedModelRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.ai.generativelanguage.v1beta3.GetTunedModelRequest;

                    /**
                     * Creates a plain object from a GetTunedModelRequest message. Also converts values to other types if specified.
                     * @param message GetTunedModelRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ai.generativelanguage.v1beta3.GetTunedModelRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetTunedModelRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetTunedModelRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListTunedModelsRequest. */
                interface IListTunedModelsRequest {

                    /** ListTunedModelsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListTunedModelsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListTunedModelsRequest. */
                class ListTunedModelsRequest implements IListTunedModelsRequest {

                    /**
                     * Constructs a new ListTunedModelsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ai.generativelanguage.v1beta3.IListTunedModelsRequest);

                    /** ListTunedModelsRequest pageSize. */
                    public pageSize: number;

                    /** ListTunedModelsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListTunedModelsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListTunedModelsRequest instance
                     */
                    public static create(properties?: google.ai.generativelanguage.v1beta3.IListTunedModelsRequest): google.ai.generativelanguage.v1beta3.ListTunedModelsRequest;

                    /**
                     * Encodes the specified ListTunedModelsRequest message. Does not implicitly {@link google.ai.generativelanguage.v1beta3.ListTunedModelsRequest.verify|verify} messages.
                     * @param message ListTunedModelsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ai.generativelanguage.v1beta3.IListTunedModelsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListTunedModelsRequest message, length delimited. Does not implicitly {@link google.ai.generativelanguage.v1beta3.ListTunedModelsRequest.verify|verify} messages.
                     * @param message ListTunedModelsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ai.generativelanguage.v1beta3.IListTunedModelsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListTunedModelsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListTunedModelsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ai.generativelanguage.v1beta3.ListTunedModelsRequest;

                    /**
                     * Decodes a ListTunedModelsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListTunedModelsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ai.generativelanguage.v1beta3.ListTunedModelsRequest;

                    /**
                     * Verifies a ListTunedModelsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListTunedModelsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListTunedModelsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.ai.generativelanguage.v1beta3.ListTunedModelsRequest;

                    /**
                     * Creates a plain object from a ListTunedModelsRequest message. Also converts values to other types if specified.
                     * @param message ListTunedModelsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ai.generativelanguage.v1beta3.ListTunedModelsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListTunedModelsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListTunedModelsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListTunedModelsResponse. */
                interface IListTunedModelsResponse {

                    /** ListTunedModelsResponse tunedModels */
                    tunedModels?: (google.ai.generativelanguage.v1beta3.ITunedModel[]|null);

                    /** ListTunedModelsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListTunedModelsResponse. */
                class ListTunedModelsResponse implements IListTunedModelsResponse {

                    /**
                     * Constructs a new ListTunedModelsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ai.generativelanguage.v1beta3.IListTunedModelsResponse);

                    /** ListTunedModelsResponse tunedModels. */
                    public tunedModels: google.ai.generativelanguage.v1beta3.ITunedModel[];

                    /** ListTunedModelsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListTunedModelsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListTunedModelsResponse instance
                     */
                    public static create(properties?: google.ai.generativelanguage.v1beta3.IListTunedModelsResponse): google.ai.generativelanguage.v1beta3.ListTunedModelsResponse;

                    /**
                     * Encodes the specified ListTunedModelsResponse message. Does not implicitly {@link google.ai.generativelanguage.v1beta3.ListTunedModelsResponse.verify|verify} messages.
                     * @param message ListTunedModelsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ai.generativelanguage.v1beta3.IListTunedModelsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListTunedModelsResponse message, length delimited. Does not implicitly {@link google.ai.generativelanguage.v1beta3.ListTunedModelsResponse.verify|verify} messages.
                     * @param message ListTunedModelsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ai.generativelanguage.v1beta3.IListTunedModelsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListTunedModelsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListTunedModelsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ai.generativelanguage.v1beta3.ListTunedModelsResponse;

                    /**
                     * Decodes a ListTunedModelsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListTunedModelsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ai.generativelanguage.v1beta3.ListTunedModelsResponse;

                    /**
                     * Verifies a ListTunedModelsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListTunedModelsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListTunedModelsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.ai.generativelanguage.v1beta3.ListTunedModelsResponse;

                    /**
                     * Creates a plain object from a ListTunedModelsResponse message. Also converts values to other types if specified.
                     * @param message ListTunedModelsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ai.generativelanguage.v1beta3.ListTunedModelsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListTunedModelsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListTunedModelsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateTunedModelRequest. */
                interface ICreateTunedModelRequest {

                    /** CreateTunedModelRequest tunedModelId */
                    tunedModelId?: (string|null);

                    /** CreateTunedModelRequest tunedModel */
                    tunedModel?: (google.ai.generativelanguage.v1beta3.ITunedModel|null);
                }

                /** Represents a CreateTunedModelRequest. */
                class CreateTunedModelRequest implements ICreateTunedModelRequest {

                    /**
                     * Constructs a new CreateTunedModelRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ai.generativelanguage.v1beta3.ICreateTunedModelRequest);

                    /** CreateTunedModelRequest tunedModelId. */
                    public tunedModelId?: (string|null);

                    /** CreateTunedModelRequest tunedModel. */
                    public tunedModel?: (google.ai.generativelanguage.v1beta3.ITunedModel|null);

                    /** CreateTunedModelRequest _tunedModelId. */
                    public _tunedModelId?: "tunedModelId";

                    /**
                     * Creates a new CreateTunedModelRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateTunedModelRequest instance
                     */
                    public static create(properties?: google.ai.generativelanguage.v1beta3.ICreateTunedModelRequest): google.ai.generativelanguage.v1beta3.CreateTunedModelRequest;

                    /**
                     * Encodes the specified CreateTunedModelRequest message. Does not implicitly {@link google.ai.generativelanguage.v1beta3.CreateTunedModelRequest.verify|verify} messages.
                     * @param message CreateTunedModelRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ai.generativelanguage.v1beta3.ICreateTunedModelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateTunedModelRequest message, length delimited. Does not implicitly {@link google.ai.generativelanguage.v1beta3.CreateTunedModelRequest.verify|verify} messages.
                     * @param message CreateTunedModelRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ai.generativelanguage.v1beta3.ICreateTunedModelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateTunedModelRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateTunedModelRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ai.generativelanguage.v1beta3.CreateTunedModelRequest;

                    /**
                     * Decodes a CreateTunedModelRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateTunedModelRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ai.generativelanguage.v1beta3.CreateTunedModelRequest;

                    /**
                     * Verifies a CreateTunedModelRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateTunedModelRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateTunedModelRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.ai.generativelanguage.v1beta3.CreateTunedModelRequest;

                    /**
                     * Creates a plain object from a CreateTunedModelRequest message. Also converts values to other types if specified.
                     * @param message CreateTunedModelRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ai.generativelanguage.v1beta3.CreateTunedModelRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateTunedModelRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateTunedModelRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateTunedModelMetadata. */
                interface ICreateTunedModelMetadata {

                    /** CreateTunedModelMetadata tunedModel */
                    tunedModel?: (string|null);

                    /** CreateTunedModelMetadata totalSteps */
                    totalSteps?: (number|null);

                    /** CreateTunedModelMetadata completedSteps */
                    completedSteps?: (number|null);

                    /** CreateTunedModelMetadata completedPercent */
                    completedPercent?: (number|null);

                    /** CreateTunedModelMetadata snapshots */
                    snapshots?: (google.ai.generativelanguage.v1beta3.ITuningSnapshot[]|null);
                }

                /** Represents a CreateTunedModelMetadata. */
                class CreateTunedModelMetadata implements ICreateTunedModelMetadata {

                    /**
                     * Constructs a new CreateTunedModelMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ai.generativelanguage.v1beta3.ICreateTunedModelMetadata);

                    /** CreateTunedModelMetadata tunedModel. */
                    public tunedModel: string;

                    /** CreateTunedModelMetadata totalSteps. */
                    public totalSteps: number;

                    /** CreateTunedModelMetadata completedSteps. */
                    public completedSteps: number;

                    /** CreateTunedModelMetadata completedPercent. */
                    public completedPercent: number;

                    /** CreateTunedModelMetadata snapshots. */
                    public snapshots: google.ai.generativelanguage.v1beta3.ITuningSnapshot[];

                    /**
                     * Creates a new CreateTunedModelMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateTunedModelMetadata instance
                     */
                    public static create(properties?: google.ai.generativelanguage.v1beta3.ICreateTunedModelMetadata): google.ai.generativelanguage.v1beta3.CreateTunedModelMetadata;

                    /**
                     * Encodes the specified CreateTunedModelMetadata message. Does not implicitly {@link google.ai.generativelanguage.v1beta3.CreateTunedModelMetadata.verify|verify} messages.
                     * @param message CreateTunedModelMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ai.generativelanguage.v1beta3.ICreateTunedModelMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateTunedModelMetadata message, length delimited. Does not implicitly {@link google.ai.generativelanguage.v1beta3.CreateTunedModelMetadata.verify|verify} messages.
                     * @param message CreateTunedModelMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ai.generativelanguage.v1beta3.ICreateTunedModelMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateTunedModelMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateTunedModelMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ai.generativelanguage.v1beta3.CreateTunedModelMetadata;

                    /**
                     * Decodes a CreateTunedModelMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateTunedModelMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ai.generativelanguage.v1beta3.CreateTunedModelMetadata;

                    /**
                     * Verifies a CreateTunedModelMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateTunedModelMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateTunedModelMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.ai.generativelanguage.v1beta3.CreateTunedModelMetadata;

                    /**
                     * Creates a plain object from a CreateTunedModelMetadata message. Also converts values to other types if specified.
                     * @param message CreateTunedModelMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ai.generativelanguage.v1beta3.CreateTunedModelMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateTunedModelMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateTunedModelMetadata
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateTunedModelRequest. */
                interface IUpdateTunedModelRequest {

                    /** UpdateTunedModelRequest tunedModel */
                    tunedModel?: (google.ai.generativelanguage.v1beta3.ITunedModel|null);

                    /** UpdateTunedModelRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateTunedModelRequest. */
                class UpdateTunedModelRequest implements IUpdateTunedModelRequest {

                    /**
                     * Constructs a new UpdateTunedModelRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ai.generativelanguage.v1beta3.IUpdateTunedModelRequest);

                    /** UpdateTunedModelRequest tunedModel. */
                    public tunedModel?: (google.ai.generativelanguage.v1beta3.ITunedModel|null);

                    /** UpdateTunedModelRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateTunedModelRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateTunedModelRequest instance
                     */
                    public static create(properties?: google.ai.generativelanguage.v1beta3.IUpdateTunedModelRequest): google.ai.generativelanguage.v1beta3.UpdateTunedModelRequest;

                    /**
                     * Encodes the specified UpdateTunedModelRequest message. Does not implicitly {@link google.ai.generativelanguage.v1beta3.UpdateTunedModelRequest.verify|verify} messages.
                     * @param message UpdateTunedModelRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ai.generativelanguage.v1beta3.IUpdateTunedModelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateTunedModelRequest message, length delimited. Does not implicitly {@link google.ai.generativelanguage.v1beta3.UpdateTunedModelRequest.verify|verify} messages.
                     * @param message UpdateTunedModelRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ai.generativelanguage.v1beta3.IUpdateTunedModelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateTunedModelRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateTunedModelRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ai.generativelanguage.v1beta3.UpdateTunedModelRequest;

                    /**
                     * Decodes an UpdateTunedModelRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateTunedModelRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ai.generativelanguage.v1beta3.UpdateTunedModelRequest;

                    /**
                     * Verifies an UpdateTunedModelRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateTunedModelRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateTunedModelRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.ai.generativelanguage.v1beta3.UpdateTunedModelRequest;

                    /**
                     * Creates a plain object from an UpdateTunedModelRequest message. Also converts values to other types if specified.
                     * @param message UpdateTunedModelRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ai.generativelanguage.v1beta3.UpdateTunedModelRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateTunedModelRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateTunedModelRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteTunedModelRequest. */
                interface IDeleteTunedModelRequest {

                    /** DeleteTunedModelRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteTunedModelRequest. */
                class DeleteTunedModelRequest implements IDeleteTunedModelRequest {

                    /**
                     * Constructs a new DeleteTunedModelRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ai.generativelanguage.v1beta3.IDeleteTunedModelRequest);

                    /** DeleteTunedModelRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteTunedModelRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteTunedModelRequest instance
                     */
                    public static create(properties?: google.ai.generativelanguage.v1beta3.IDeleteTunedModelRequest): google.ai.generativelanguage.v1beta3.DeleteTunedModelRequest;

                    /**
                     * Encodes the specified DeleteTunedModelRequest message. Does not implicitly {@link google.ai.generativelanguage.v1beta3.DeleteTunedModelRequest.verify|verify} messages.
                     * @param message DeleteTunedModelRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ai.generativelanguage.v1beta3.IDeleteTunedModelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteTunedModelRequest message, length delimited. Does not implicitly {@link google.ai.generativelanguage.v1beta3.DeleteTunedModelRequest.verify|verify} messages.
                     * @param message DeleteTunedModelRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ai.generativelanguage.v1beta3.IDeleteTunedModelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteTunedModelRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteTunedModelRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ai.generativelanguage.v1beta3.DeleteTunedModelRequest;

                    /**
                     * Decodes a DeleteTunedModelRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteTunedModelRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ai.generativelanguage.v1beta3.DeleteTunedModelRequest;

                    /**
                     * Verifies a DeleteTunedModelRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteTunedModelRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteTunedModelRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.ai.generativelanguage.v1beta3.DeleteTunedModelRequest;

                    /**
                     * Creates a plain object from a DeleteTunedModelRequest message. Also converts values to other types if specified.
                     * @param message DeleteTunedModelRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ai.generativelanguage.v1beta3.DeleteTunedModelRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteTunedModelRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteTunedModelRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a TunedModel. */
                interface ITunedModel {

                    /** TunedModel tunedModelSource */
                    tunedModelSource?: (google.ai.generativelanguage.v1beta3.ITunedModelSource|null);

                    /** TunedModel baseModel */
                    baseModel?: (string|null);

                    /** TunedModel name */
                    name?: (string|null);

                    /** TunedModel displayName */
                    displayName?: (string|null);

                    /** TunedModel description */
                    description?: (string|null);

                    /** TunedModel temperature */
                    temperature?: (number|null);

                    /** TunedModel topP */
                    topP?: (number|null);

                    /** TunedModel topK */
                    topK?: (number|null);

                    /** TunedModel state */
                    state?: (google.ai.generativelanguage.v1beta3.TunedModel.State|keyof typeof google.ai.generativelanguage.v1beta3.TunedModel.State|null);

                    /** TunedModel createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** TunedModel updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** TunedModel tuningTask */
                    tuningTask?: (google.ai.generativelanguage.v1beta3.ITuningTask|null);
                }

                /** Represents a TunedModel. */
                class TunedModel implements ITunedModel {

                    /**
                     * Constructs a new TunedModel.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ai.generativelanguage.v1beta3.ITunedModel);

                    /** TunedModel tunedModelSource. */
                    public tunedModelSource?: (google.ai.generativelanguage.v1beta3.ITunedModelSource|null);

                    /** TunedModel baseModel. */
                    public baseModel?: (string|null);

                    /** TunedModel name. */
                    public name: string;

                    /** TunedModel displayName. */
                    public displayName: string;

                    /** TunedModel description. */
                    public description: string;

                    /** TunedModel temperature. */
                    public temperature?: (number|null);

                    /** TunedModel topP. */
                    public topP?: (number|null);

                    /** TunedModel topK. */
                    public topK?: (number|null);

                    /** TunedModel state. */
                    public state: (google.ai.generativelanguage.v1beta3.TunedModel.State|keyof typeof google.ai.generativelanguage.v1beta3.TunedModel.State);

                    /** TunedModel createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** TunedModel updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** TunedModel tuningTask. */
                    public tuningTask?: (google.ai.generativelanguage.v1beta3.ITuningTask|null);

                    /** TunedModel sourceModel. */
                    public sourceModel?: ("tunedModelSource"|"baseModel");

                    /** TunedModel _temperature. */
                    public _temperature?: "temperature";

                    /** TunedModel _topP. */
                    public _topP?: "topP";

                    /** TunedModel _topK. */
                    public _topK?: "topK";

                    /**
                     * Creates a new TunedModel instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TunedModel instance
                     */
                    public static create(properties?: google.ai.generativelanguage.v1beta3.ITunedModel): google.ai.generativelanguage.v1beta3.TunedModel;

                    /**
                     * Encodes the specified TunedModel message. Does not implicitly {@link google.ai.generativelanguage.v1beta3.TunedModel.verify|verify} messages.
                     * @param message TunedModel message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ai.generativelanguage.v1beta3.ITunedModel, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TunedModel message, length delimited. Does not implicitly {@link google.ai.generativelanguage.v1beta3.TunedModel.verify|verify} messages.
                     * @param message TunedModel message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ai.generativelanguage.v1beta3.ITunedModel, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TunedModel message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TunedModel
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ai.generativelanguage.v1beta3.TunedModel;

                    /**
                     * Decodes a TunedModel message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TunedModel
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ai.generativelanguage.v1beta3.TunedModel;

                    /**
                     * Verifies a TunedModel message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TunedModel message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TunedModel
                     */
                    public static fromObject(object: { [k: string]: any }): google.ai.generativelanguage.v1beta3.TunedModel;

                    /**
                     * Creates a plain object from a TunedModel message. Also converts values to other types if specified.
                     * @param message TunedModel
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ai.generativelanguage.v1beta3.TunedModel, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TunedModel to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TunedModel
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace TunedModel {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        CREATING = 1,
                        ACTIVE = 2,
                        FAILED = 3
                    }
                }

                /** Properties of a TunedModelSource. */
                interface ITunedModelSource {

                    /** TunedModelSource tunedModel */
                    tunedModel?: (string|null);

                    /** TunedModelSource baseModel */
                    baseModel?: (string|null);
                }

                /** Represents a TunedModelSource. */
                class TunedModelSource implements ITunedModelSource {

                    /**
                     * Constructs a new TunedModelSource.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ai.generativelanguage.v1beta3.ITunedModelSource);

                    /** TunedModelSource tunedModel. */
                    public tunedModel: string;

                    /** TunedModelSource baseModel. */
                    public baseModel: string;

                    /**
                     * Creates a new TunedModelSource instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TunedModelSource instance
                     */
                    public static create(properties?: google.ai.generativelanguage.v1beta3.ITunedModelSource): google.ai.generativelanguage.v1beta3.TunedModelSource;

                    /**
                     * Encodes the specified TunedModelSource message. Does not implicitly {@link google.ai.generativelanguage.v1beta3.TunedModelSource.verify|verify} messages.
                     * @param message TunedModelSource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ai.generativelanguage.v1beta3.ITunedModelSource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TunedModelSource message, length delimited. Does not implicitly {@link google.ai.generativelanguage.v1beta3.TunedModelSource.verify|verify} messages.
                     * @param message TunedModelSource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ai.generativelanguage.v1beta3.ITunedModelSource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TunedModelSource message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TunedModelSource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ai.generativelanguage.v1beta3.TunedModelSource;

                    /**
                     * Decodes a TunedModelSource message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TunedModelSource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ai.generativelanguage.v1beta3.TunedModelSource;

                    /**
                     * Verifies a TunedModelSource message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TunedModelSource message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TunedModelSource
                     */
                    public static fromObject(object: { [k: string]: any }): google.ai.generativelanguage.v1beta3.TunedModelSource;

                    /**
                     * Creates a plain object from a TunedModelSource message. Also converts values to other types if specified.
                     * @param message TunedModelSource
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ai.generativelanguage.v1beta3.TunedModelSource, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TunedModelSource to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TunedModelSource
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a TuningTask. */
                interface ITuningTask {

                    /** TuningTask startTime */
                    startTime?: (google.protobuf.ITimestamp|null);

                    /** TuningTask completeTime */
                    completeTime?: (google.protobuf.ITimestamp|null);

                    /** TuningTask snapshots */
                    snapshots?: (google.ai.generativelanguage.v1beta3.ITuningSnapshot[]|null);

                    /** TuningTask trainingData */
                    trainingData?: (google.ai.generativelanguage.v1beta3.IDataset|null);

                    /** TuningTask hyperparameters */
                    hyperparameters?: (google.ai.generativelanguage.v1beta3.IHyperparameters|null);
                }

                /** Represents a TuningTask. */
                class TuningTask implements ITuningTask {

                    /**
                     * Constructs a new TuningTask.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ai.generativelanguage.v1beta3.ITuningTask);

                    /** TuningTask startTime. */
                    public startTime?: (google.protobuf.ITimestamp|null);

                    /** TuningTask completeTime. */
                    public completeTime?: (google.protobuf.ITimestamp|null);

                    /** TuningTask snapshots. */
                    public snapshots: google.ai.generativelanguage.v1beta3.ITuningSnapshot[];

                    /** TuningTask trainingData. */
                    public trainingData?: (google.ai.generativelanguage.v1beta3.IDataset|null);

                    /** TuningTask hyperparameters. */
                    public hyperparameters?: (google.ai.generativelanguage.v1beta3.IHyperparameters|null);

                    /**
                     * Creates a new TuningTask instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TuningTask instance
                     */
                    public static create(properties?: google.ai.generativelanguage.v1beta3.ITuningTask): google.ai.generativelanguage.v1beta3.TuningTask;

                    /**
                     * Encodes the specified TuningTask message. Does not implicitly {@link google.ai.generativelanguage.v1beta3.TuningTask.verify|verify} messages.
                     * @param message TuningTask message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ai.generativelanguage.v1beta3.ITuningTask, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TuningTask message, length delimited. Does not implicitly {@link google.ai.generativelanguage.v1beta3.TuningTask.verify|verify} messages.
                     * @param message TuningTask message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ai.generativelanguage.v1beta3.ITuningTask, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TuningTask message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TuningTask
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ai.generativelanguage.v1beta3.TuningTask;

                    /**
                     * Decodes a TuningTask message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TuningTask
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ai.generativelanguage.v1beta3.TuningTask;

                    /**
                     * Verifies a TuningTask message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TuningTask message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TuningTask
                     */
                    public static fromObject(object: { [k: string]: any }): google.ai.generativelanguage.v1beta3.TuningTask;

                    /**
                     * Creates a plain object from a TuningTask message. Also converts values to other types if specified.
                     * @param message TuningTask
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ai.generativelanguage.v1beta3.TuningTask, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TuningTask to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TuningTask
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Hyperparameters. */
                interface IHyperparameters {

                    /** Hyperparameters epochCount */
                    epochCount?: (number|null);

                    /** Hyperparameters batchSize */
                    batchSize?: (number|null);

                    /** Hyperparameters learningRate */
                    learningRate?: (number|null);
                }

                /** Represents a Hyperparameters. */
                class Hyperparameters implements IHyperparameters {

                    /**
                     * Constructs a new Hyperparameters.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ai.generativelanguage.v1beta3.IHyperparameters);

                    /** Hyperparameters epochCount. */
                    public epochCount?: (number|null);

                    /** Hyperparameters batchSize. */
                    public batchSize?: (number|null);

                    /** Hyperparameters learningRate. */
                    public learningRate?: (number|null);

                    /** Hyperparameters _epochCount. */
                    public _epochCount?: "epochCount";

                    /** Hyperparameters _batchSize. */
                    public _batchSize?: "batchSize";

                    /** Hyperparameters _learningRate. */
                    public _learningRate?: "learningRate";

                    /**
                     * Creates a new Hyperparameters instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Hyperparameters instance
                     */
                    public static create(properties?: google.ai.generativelanguage.v1beta3.IHyperparameters): google.ai.generativelanguage.v1beta3.Hyperparameters;

                    /**
                     * Encodes the specified Hyperparameters message. Does not implicitly {@link google.ai.generativelanguage.v1beta3.Hyperparameters.verify|verify} messages.
                     * @param message Hyperparameters message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ai.generativelanguage.v1beta3.IHyperparameters, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Hyperparameters message, length delimited. Does not implicitly {@link google.ai.generativelanguage.v1beta3.Hyperparameters.verify|verify} messages.
                     * @param message Hyperparameters message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ai.generativelanguage.v1beta3.IHyperparameters, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Hyperparameters message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Hyperparameters
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ai.generativelanguage.v1beta3.Hyperparameters;

                    /**
                     * Decodes a Hyperparameters message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Hyperparameters
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ai.generativelanguage.v1beta3.Hyperparameters;

                    /**
                     * Verifies a Hyperparameters message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Hyperparameters message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Hyperparameters
                     */
                    public static fromObject(object: { [k: string]: any }): google.ai.generativelanguage.v1beta3.Hyperparameters;

                    /**
                     * Creates a plain object from a Hyperparameters message. Also converts values to other types if specified.
                     * @param message Hyperparameters
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ai.generativelanguage.v1beta3.Hyperparameters, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Hyperparameters to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Hyperparameters
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Dataset. */
                interface IDataset {

                    /** Dataset examples */
                    examples?: (google.ai.generativelanguage.v1beta3.ITuningExamples|null);
                }

                /** Represents a Dataset. */
                class Dataset implements IDataset {

                    /**
                     * Constructs a new Dataset.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ai.generativelanguage.v1beta3.IDataset);

                    /** Dataset examples. */
                    public examples?: (google.ai.generativelanguage.v1beta3.ITuningExamples|null);

                    /** Dataset dataset. */
                    public dataset?: "examples";

                    /**
                     * Creates a new Dataset instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Dataset instance
                     */
                    public static create(properties?: google.ai.generativelanguage.v1beta3.IDataset): google.ai.generativelanguage.v1beta3.Dataset;

                    /**
                     * Encodes the specified Dataset message. Does not implicitly {@link google.ai.generativelanguage.v1beta3.Dataset.verify|verify} messages.
                     * @param message Dataset message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ai.generativelanguage.v1beta3.IDataset, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Dataset message, length delimited. Does not implicitly {@link google.ai.generativelanguage.v1beta3.Dataset.verify|verify} messages.
                     * @param message Dataset message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ai.generativelanguage.v1beta3.IDataset, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Dataset message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Dataset
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ai.generativelanguage.v1beta3.Dataset;

                    /**
                     * Decodes a Dataset message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Dataset
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ai.generativelanguage.v1beta3.Dataset;

                    /**
                     * Verifies a Dataset message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Dataset message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Dataset
                     */
                    public static fromObject(object: { [k: string]: any }): google.ai.generativelanguage.v1beta3.Dataset;

                    /**
                     * Creates a plain object from a Dataset message. Also converts values to other types if specified.
                     * @param message Dataset
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ai.generativelanguage.v1beta3.Dataset, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Dataset to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Dataset
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a TuningExamples. */
                interface ITuningExamples {

                    /** TuningExamples examples */
                    examples?: (google.ai.generativelanguage.v1beta3.ITuningExample[]|null);
                }

                /** Represents a TuningExamples. */
                class TuningExamples implements ITuningExamples {

                    /**
                     * Constructs a new TuningExamples.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ai.generativelanguage.v1beta3.ITuningExamples);

                    /** TuningExamples examples. */
                    public examples: google.ai.generativelanguage.v1beta3.ITuningExample[];

                    /**
                     * Creates a new TuningExamples instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TuningExamples instance
                     */
                    public static create(properties?: google.ai.generativelanguage.v1beta3.ITuningExamples): google.ai.generativelanguage.v1beta3.TuningExamples;

                    /**
                     * Encodes the specified TuningExamples message. Does not implicitly {@link google.ai.generativelanguage.v1beta3.TuningExamples.verify|verify} messages.
                     * @param message TuningExamples message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ai.generativelanguage.v1beta3.ITuningExamples, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TuningExamples message, length delimited. Does not implicitly {@link google.ai.generativelanguage.v1beta3.TuningExamples.verify|verify} messages.
                     * @param message TuningExamples message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ai.generativelanguage.v1beta3.ITuningExamples, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TuningExamples message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TuningExamples
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ai.generativelanguage.v1beta3.TuningExamples;

                    /**
                     * Decodes a TuningExamples message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TuningExamples
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ai.generativelanguage.v1beta3.TuningExamples;

                    /**
                     * Verifies a TuningExamples message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TuningExamples message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TuningExamples
                     */
                    public static fromObject(object: { [k: string]: any }): google.ai.generativelanguage.v1beta3.TuningExamples;

                    /**
                     * Creates a plain object from a TuningExamples message. Also converts values to other types if specified.
                     * @param message TuningExamples
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ai.generativelanguage.v1beta3.TuningExamples, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TuningExamples to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TuningExamples
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a TuningExample. */
                interface ITuningExample {

                    /** TuningExample textInput */
                    textInput?: (string|null);

                    /** TuningExample output */
                    output?: (string|null);
                }

                /** Represents a TuningExample. */
                class TuningExample implements ITuningExample {

                    /**
                     * Constructs a new TuningExample.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ai.generativelanguage.v1beta3.ITuningExample);

                    /** TuningExample textInput. */
                    public textInput?: (string|null);

                    /** TuningExample output. */
                    public output: string;

                    /** TuningExample modelInput. */
                    public modelInput?: "textInput";

                    /**
                     * Creates a new TuningExample instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TuningExample instance
                     */
                    public static create(properties?: google.ai.generativelanguage.v1beta3.ITuningExample): google.ai.generativelanguage.v1beta3.TuningExample;

                    /**
                     * Encodes the specified TuningExample message. Does not implicitly {@link google.ai.generativelanguage.v1beta3.TuningExample.verify|verify} messages.
                     * @param message TuningExample message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ai.generativelanguage.v1beta3.ITuningExample, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TuningExample message, length delimited. Does not implicitly {@link google.ai.generativelanguage.v1beta3.TuningExample.verify|verify} messages.
                     * @param message TuningExample message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ai.generativelanguage.v1beta3.ITuningExample, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TuningExample message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TuningExample
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ai.generativelanguage.v1beta3.TuningExample;

                    /**
                     * Decodes a TuningExample message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TuningExample
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ai.generativelanguage.v1beta3.TuningExample;

                    /**
                     * Verifies a TuningExample message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TuningExample message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TuningExample
                     */
                    public static fromObject(object: { [k: string]: any }): google.ai.generativelanguage.v1beta3.TuningExample;

                    /**
                     * Creates a plain object from a TuningExample message. Also converts values to other types if specified.
                     * @param message TuningExample
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ai.generativelanguage.v1beta3.TuningExample, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TuningExample to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TuningExample
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a TuningSnapshot. */
                interface ITuningSnapshot {

                    /** TuningSnapshot step */
                    step?: (number|null);

                    /** TuningSnapshot epoch */
                    epoch?: (number|null);

                    /** TuningSnapshot meanLoss */
                    meanLoss?: (number|null);

                    /** TuningSnapshot computeTime */
                    computeTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a TuningSnapshot. */
                class TuningSnapshot implements ITuningSnapshot {

                    /**
                     * Constructs a new TuningSnapshot.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ai.generativelanguage.v1beta3.ITuningSnapshot);

                    /** TuningSnapshot step. */
                    public step: number;

                    /** TuningSnapshot epoch. */
                    public epoch: number;

                    /** TuningSnapshot meanLoss. */
                    public meanLoss: number;

                    /** TuningSnapshot computeTime. */
                    public computeTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new TuningSnapshot instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TuningSnapshot instance
                     */
                    public static create(properties?: google.ai.generativelanguage.v1beta3.ITuningSnapshot): google.ai.generativelanguage.v1beta3.TuningSnapshot;

                    /**
                     * Encodes the specified TuningSnapshot message. Does not implicitly {@link google.ai.generativelanguage.v1beta3.TuningSnapshot.verify|verify} messages.
                     * @param message TuningSnapshot message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ai.generativelanguage.v1beta3.ITuningSnapshot, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TuningSnapshot message, length delimited. Does not implicitly {@link google.ai.generativelanguage.v1beta3.TuningSnapshot.verify|verify} messages.
                     * @param message TuningSnapshot message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ai.generativelanguage.v1beta3.ITuningSnapshot, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TuningSnapshot message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TuningSnapshot
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ai.generativelanguage.v1beta3.TuningSnapshot;

                    /**
                     * Decodes a TuningSnapshot message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TuningSnapshot
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ai.generativelanguage.v1beta3.TuningSnapshot;

                    /**
                     * Verifies a TuningSnapshot message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TuningSnapshot message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TuningSnapshot
                     */
                    public static fromObject(object: { [k: string]: any }): google.ai.generativelanguage.v1beta3.TuningSnapshot;

                    /**
                     * Creates a plain object from a TuningSnapshot message. Also converts values to other types if specified.
                     * @param message TuningSnapshot
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ai.generativelanguage.v1beta3.TuningSnapshot, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TuningSnapshot to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TuningSnapshot
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Permission. */
                interface IPermission {

                    /** Permission name */
                    name?: (string|null);

                    /** Permission granteeType */
                    granteeType?: (google.ai.generativelanguage.v1beta3.Permission.GranteeType|keyof typeof google.ai.generativelanguage.v1beta3.Permission.GranteeType|null);

                    /** Permission emailAddress */
                    emailAddress?: (string|null);

                    /** Permission role */
                    role?: (google.ai.generativelanguage.v1beta3.Permission.Role|keyof typeof google.ai.generativelanguage.v1beta3.Permission.Role|null);
                }

                /** Represents a Permission. */
                class Permission implements IPermission {

                    /**
                     * Constructs a new Permission.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ai.generativelanguage.v1beta3.IPermission);

                    /** Permission name. */
                    public name: string;

                    /** Permission granteeType. */
                    public granteeType?: (google.ai.generativelanguage.v1beta3.Permission.GranteeType|keyof typeof google.ai.generativelanguage.v1beta3.Permission.GranteeType|null);

                    /** Permission emailAddress. */
                    public emailAddress?: (string|null);

                    /** Permission role. */
                    public role?: (google.ai.generativelanguage.v1beta3.Permission.Role|keyof typeof google.ai.generativelanguage.v1beta3.Permission.Role|null);

                    /** Permission _granteeType. */
                    public _granteeType?: "granteeType";

                    /** Permission _emailAddress. */
                    public _emailAddress?: "emailAddress";

                    /** Permission _role. */
                    public _role?: "role";

                    /**
                     * Creates a new Permission instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Permission instance
                     */
                    public static create(properties?: google.ai.generativelanguage.v1beta3.IPermission): google.ai.generativelanguage.v1beta3.Permission;

                    /**
                     * Encodes the specified Permission message. Does not implicitly {@link google.ai.generativelanguage.v1beta3.Permission.verify|verify} messages.
                     * @param message Permission message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ai.generativelanguage.v1beta3.IPermission, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Permission message, length delimited. Does not implicitly {@link google.ai.generativelanguage.v1beta3.Permission.verify|verify} messages.
                     * @param message Permission message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ai.generativelanguage.v1beta3.IPermission, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Permission message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Permission
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ai.generativelanguage.v1beta3.Permission;

                    /**
                     * Decodes a Permission message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Permission
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ai.generativelanguage.v1beta3.Permission;

                    /**
                     * Verifies a Permission message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Permission message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Permission
                     */
                    public static fromObject(object: { [k: string]: any }): google.ai.generativelanguage.v1beta3.Permission;

                    /**
                     * Creates a plain object from a Permission message. Also converts values to other types if specified.
                     * @param message Permission
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ai.generativelanguage.v1beta3.Permission, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Permission to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Permission
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Permission {

                    /** GranteeType enum. */
                    enum GranteeType {
                        GRANTEE_TYPE_UNSPECIFIED = 0,
                        USER = 1,
                        GROUP = 2,
                        EVERYONE = 3
                    }

                    /** Role enum. */
                    enum Role {
                        ROLE_UNSPECIFIED = 0,
                        OWNER = 1,
                        WRITER = 2,
                        READER = 3
                    }
                }

                /** Represents a PermissionService */
                class PermissionService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new PermissionService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new PermissionService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): PermissionService;

                    /**
                     * Calls CreatePermission.
                     * @param request CreatePermissionRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Permission
                     */
                    public createPermission(request: google.ai.generativelanguage.v1beta3.ICreatePermissionRequest, callback: google.ai.generativelanguage.v1beta3.PermissionService.CreatePermissionCallback): void;

                    /**
                     * Calls CreatePermission.
                     * @param request CreatePermissionRequest message or plain object
                     * @returns Promise
                     */
                    public createPermission(request: google.ai.generativelanguage.v1beta3.ICreatePermissionRequest): Promise<google.ai.generativelanguage.v1beta3.Permission>;

                    /**
                     * Calls GetPermission.
                     * @param request GetPermissionRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Permission
                     */
                    public getPermission(request: google.ai.generativelanguage.v1beta3.IGetPermissionRequest, callback: google.ai.generativelanguage.v1beta3.PermissionService.GetPermissionCallback): void;

                    /**
                     * Calls GetPermission.
                     * @param request GetPermissionRequest message or plain object
                     * @returns Promise
                     */
                    public getPermission(request: google.ai.generativelanguage.v1beta3.IGetPermissionRequest): Promise<google.ai.generativelanguage.v1beta3.Permission>;

                    /**
                     * Calls ListPermissions.
                     * @param request ListPermissionsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListPermissionsResponse
                     */
                    public listPermissions(request: google.ai.generativelanguage.v1beta3.IListPermissionsRequest, callback: google.ai.generativelanguage.v1beta3.PermissionService.ListPermissionsCallback): void;

                    /**
                     * Calls ListPermissions.
                     * @param request ListPermissionsRequest message or plain object
                     * @returns Promise
                     */
                    public listPermissions(request: google.ai.generativelanguage.v1beta3.IListPermissionsRequest): Promise<google.ai.generativelanguage.v1beta3.ListPermissionsResponse>;

                    /**
                     * Calls UpdatePermission.
                     * @param request UpdatePermissionRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Permission
                     */
                    public updatePermission(request: google.ai.generativelanguage.v1beta3.IUpdatePermissionRequest, callback: google.ai.generativelanguage.v1beta3.PermissionService.UpdatePermissionCallback): void;

                    /**
                     * Calls UpdatePermission.
                     * @param request UpdatePermissionRequest message or plain object
                     * @returns Promise
                     */
                    public updatePermission(request: google.ai.generativelanguage.v1beta3.IUpdatePermissionRequest): Promise<google.ai.generativelanguage.v1beta3.Permission>;

                    /**
                     * Calls DeletePermission.
                     * @param request DeletePermissionRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deletePermission(request: google.ai.generativelanguage.v1beta3.IDeletePermissionRequest, callback: google.ai.generativelanguage.v1beta3.PermissionService.DeletePermissionCallback): void;

                    /**
                     * Calls DeletePermission.
                     * @param request DeletePermissionRequest message or plain object
                     * @returns Promise
                     */
                    public deletePermission(request: google.ai.generativelanguage.v1beta3.IDeletePermissionRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls TransferOwnership.
                     * @param request TransferOwnershipRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and TransferOwnershipResponse
                     */
                    public transferOwnership(request: google.ai.generativelanguage.v1beta3.ITransferOwnershipRequest, callback: google.ai.generativelanguage.v1beta3.PermissionService.TransferOwnershipCallback): void;

                    /**
                     * Calls TransferOwnership.
                     * @param request TransferOwnershipRequest message or plain object
                     * @returns Promise
                     */
                    public transferOwnership(request: google.ai.generativelanguage.v1beta3.ITransferOwnershipRequest): Promise<google.ai.generativelanguage.v1beta3.TransferOwnershipResponse>;
                }

                namespace PermissionService {

                    /**
                     * Callback as used by {@link google.ai.generativelanguage.v1beta3.PermissionService|createPermission}.
                     * @param error Error, if any
                     * @param [response] Permission
                     */
                    type CreatePermissionCallback = (error: (Error|null), response?: google.ai.generativelanguage.v1beta3.Permission) => void;

                    /**
                     * Callback as used by {@link google.ai.generativelanguage.v1beta3.PermissionService|getPermission}.
                     * @param error Error, if any
                     * @param [response] Permission
                     */
                    type GetPermissionCallback = (error: (Error|null), response?: google.ai.generativelanguage.v1beta3.Permission) => void;

                    /**
                     * Callback as used by {@link google.ai.generativelanguage.v1beta3.PermissionService|listPermissions}.
                     * @param error Error, if any
                     * @param [response] ListPermissionsResponse
                     */
                    type ListPermissionsCallback = (error: (Error|null), response?: google.ai.generativelanguage.v1beta3.ListPermissionsResponse) => void;

                    /**
                     * Callback as used by {@link google.ai.generativelanguage.v1beta3.PermissionService|updatePermission}.
                     * @param error Error, if any
                     * @param [response] Permission
                     */
                    type UpdatePermissionCallback = (error: (Error|null), response?: google.ai.generativelanguage.v1beta3.Permission) => void;

                    /**
                     * Callback as used by {@link google.ai.generativelanguage.v1beta3.PermissionService|deletePermission}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeletePermissionCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.ai.generativelanguage.v1beta3.PermissionService|transferOwnership}.
                     * @param error Error, if any
                     * @param [response] TransferOwnershipResponse
                     */
                    type TransferOwnershipCallback = (error: (Error|null), response?: google.ai.generativelanguage.v1beta3.TransferOwnershipResponse) => void;
                }

                /** Properties of a CreatePermissionRequest. */
                interface ICreatePermissionRequest {

                    /** CreatePermissionRequest parent */
                    parent?: (string|null);

                    /** CreatePermissionRequest permission */
                    permission?: (google.ai.generativelanguage.v1beta3.IPermission|null);
                }

                /** Represents a CreatePermissionRequest. */
                class CreatePermissionRequest implements ICreatePermissionRequest {

                    /**
                     * Constructs a new CreatePermissionRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ai.generativelanguage.v1beta3.ICreatePermissionRequest);

                    /** CreatePermissionRequest parent. */
                    public parent: string;

                    /** CreatePermissionRequest permission. */
                    public permission?: (google.ai.generativelanguage.v1beta3.IPermission|null);

                    /**
                     * Creates a new CreatePermissionRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreatePermissionRequest instance
                     */
                    public static create(properties?: google.ai.generativelanguage.v1beta3.ICreatePermissionRequest): google.ai.generativelanguage.v1beta3.CreatePermissionRequest;

                    /**
                     * Encodes the specified CreatePermissionRequest message. Does not implicitly {@link google.ai.generativelanguage.v1beta3.CreatePermissionRequest.verify|verify} messages.
                     * @param message CreatePermissionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ai.generativelanguage.v1beta3.ICreatePermissionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreatePermissionRequest message, length delimited. Does not implicitly {@link google.ai.generativelanguage.v1beta3.CreatePermissionRequest.verify|verify} messages.
                     * @param message CreatePermissionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ai.generativelanguage.v1beta3.ICreatePermissionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreatePermissionRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreatePermissionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ai.generativelanguage.v1beta3.CreatePermissionRequest;

                    /**
                     * Decodes a CreatePermissionRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreatePermissionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ai.generativelanguage.v1beta3.CreatePermissionRequest;

                    /**
                     * Verifies a CreatePermissionRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreatePermissionRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreatePermissionRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.ai.generativelanguage.v1beta3.CreatePermissionRequest;

                    /**
                     * Creates a plain object from a CreatePermissionRequest message. Also converts values to other types if specified.
                     * @param message CreatePermissionRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ai.generativelanguage.v1beta3.CreatePermissionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreatePermissionRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreatePermissionRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetPermissionRequest. */
                interface IGetPermissionRequest {

                    /** GetPermissionRequest name */
                    name?: (string|null);
                }

                /** Represents a GetPermissionRequest. */
                class GetPermissionRequest implements IGetPermissionRequest {

                    /**
                     * Constructs a new GetPermissionRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ai.generativelanguage.v1beta3.IGetPermissionRequest);

                    /** GetPermissionRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetPermissionRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetPermissionRequest instance
                     */
                    public static create(properties?: google.ai.generativelanguage.v1beta3.IGetPermissionRequest): google.ai.generativelanguage.v1beta3.GetPermissionRequest;

                    /**
                     * Encodes the specified GetPermissionRequest message. Does not implicitly {@link google.ai.generativelanguage.v1beta3.GetPermissionRequest.verify|verify} messages.
                     * @param message GetPermissionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ai.generativelanguage.v1beta3.IGetPermissionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetPermissionRequest message, length delimited. Does not implicitly {@link google.ai.generativelanguage.v1beta3.GetPermissionRequest.verify|verify} messages.
                     * @param message GetPermissionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ai.generativelanguage.v1beta3.IGetPermissionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetPermissionRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetPermissionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ai.generativelanguage.v1beta3.GetPermissionRequest;

                    /**
                     * Decodes a GetPermissionRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetPermissionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ai.generativelanguage.v1beta3.GetPermissionRequest;

                    /**
                     * Verifies a GetPermissionRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetPermissionRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetPermissionRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.ai.generativelanguage.v1beta3.GetPermissionRequest;

                    /**
                     * Creates a plain object from a GetPermissionRequest message. Also converts values to other types if specified.
                     * @param message GetPermissionRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ai.generativelanguage.v1beta3.GetPermissionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetPermissionRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetPermissionRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListPermissionsRequest. */
                interface IListPermissionsRequest {

                    /** ListPermissionsRequest parent */
                    parent?: (string|null);

                    /** ListPermissionsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListPermissionsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListPermissionsRequest. */
                class ListPermissionsRequest implements IListPermissionsRequest {

                    /**
                     * Constructs a new ListPermissionsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ai.generativelanguage.v1beta3.IListPermissionsRequest);

                    /** ListPermissionsRequest parent. */
                    public parent: string;

                    /** ListPermissionsRequest pageSize. */
                    public pageSize: number;

                    /** ListPermissionsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListPermissionsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListPermissionsRequest instance
                     */
                    public static create(properties?: google.ai.generativelanguage.v1beta3.IListPermissionsRequest): google.ai.generativelanguage.v1beta3.ListPermissionsRequest;

                    /**
                     * Encodes the specified ListPermissionsRequest message. Does not implicitly {@link google.ai.generativelanguage.v1beta3.ListPermissionsRequest.verify|verify} messages.
                     * @param message ListPermissionsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ai.generativelanguage.v1beta3.IListPermissionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListPermissionsRequest message, length delimited. Does not implicitly {@link google.ai.generativelanguage.v1beta3.ListPermissionsRequest.verify|verify} messages.
                     * @param message ListPermissionsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ai.generativelanguage.v1beta3.IListPermissionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListPermissionsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListPermissionsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ai.generativelanguage.v1beta3.ListPermissionsRequest;

                    /**
                     * Decodes a ListPermissionsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListPermissionsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ai.generativelanguage.v1beta3.ListPermissionsRequest;

                    /**
                     * Verifies a ListPermissionsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListPermissionsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListPermissionsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.ai.generativelanguage.v1beta3.ListPermissionsRequest;

                    /**
                     * Creates a plain object from a ListPermissionsRequest message. Also converts values to other types if specified.
                     * @param message ListPermissionsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ai.generativelanguage.v1beta3.ListPermissionsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListPermissionsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListPermissionsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListPermissionsResponse. */
                interface IListPermissionsResponse {

                    /** ListPermissionsResponse permissions */
                    permissions?: (google.ai.generativelanguage.v1beta3.IPermission[]|null);

                    /** ListPermissionsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListPermissionsResponse. */
                class ListPermissionsResponse implements IListPermissionsResponse {

                    /**
                     * Constructs a new ListPermissionsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ai.generativelanguage.v1beta3.IListPermissionsResponse);

                    /** ListPermissionsResponse permissions. */
                    public permissions: google.ai.generativelanguage.v1beta3.IPermission[];

                    /** ListPermissionsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListPermissionsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListPermissionsResponse instance
                     */
                    public static create(properties?: google.ai.generativelanguage.v1beta3.IListPermissionsResponse): google.ai.generativelanguage.v1beta3.ListPermissionsResponse;

                    /**
                     * Encodes the specified ListPermissionsResponse message. Does not implicitly {@link google.ai.generativelanguage.v1beta3.ListPermissionsResponse.verify|verify} messages.
                     * @param message ListPermissionsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ai.generativelanguage.v1beta3.IListPermissionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListPermissionsResponse message, length delimited. Does not implicitly {@link google.ai.generativelanguage.v1beta3.ListPermissionsResponse.verify|verify} messages.
                     * @param message ListPermissionsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ai.generativelanguage.v1beta3.IListPermissionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListPermissionsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListPermissionsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ai.generativelanguage.v1beta3.ListPermissionsResponse;

                    /**
                     * Decodes a ListPermissionsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListPermissionsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ai.generativelanguage.v1beta3.ListPermissionsResponse;

                    /**
                     * Verifies a ListPermissionsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListPermissionsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListPermissionsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.ai.generativelanguage.v1beta3.ListPermissionsResponse;

                    /**
                     * Creates a plain object from a ListPermissionsResponse message. Also converts values to other types if specified.
                     * @param message ListPermissionsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ai.generativelanguage.v1beta3.ListPermissionsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListPermissionsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListPermissionsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdatePermissionRequest. */
                interface IUpdatePermissionRequest {

                    /** UpdatePermissionRequest permission */
                    permission?: (google.ai.generativelanguage.v1beta3.IPermission|null);

                    /** UpdatePermissionRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdatePermissionRequest. */
                class UpdatePermissionRequest implements IUpdatePermissionRequest {

                    /**
                     * Constructs a new UpdatePermissionRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ai.generativelanguage.v1beta3.IUpdatePermissionRequest);

                    /** UpdatePermissionRequest permission. */
                    public permission?: (google.ai.generativelanguage.v1beta3.IPermission|null);

                    /** UpdatePermissionRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdatePermissionRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdatePermissionRequest instance
                     */
                    public static create(properties?: google.ai.generativelanguage.v1beta3.IUpdatePermissionRequest): google.ai.generativelanguage.v1beta3.UpdatePermissionRequest;

                    /**
                     * Encodes the specified UpdatePermissionRequest message. Does not implicitly {@link google.ai.generativelanguage.v1beta3.UpdatePermissionRequest.verify|verify} messages.
                     * @param message UpdatePermissionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ai.generativelanguage.v1beta3.IUpdatePermissionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdatePermissionRequest message, length delimited. Does not implicitly {@link google.ai.generativelanguage.v1beta3.UpdatePermissionRequest.verify|verify} messages.
                     * @param message UpdatePermissionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ai.generativelanguage.v1beta3.IUpdatePermissionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdatePermissionRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdatePermissionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ai.generativelanguage.v1beta3.UpdatePermissionRequest;

                    /**
                     * Decodes an UpdatePermissionRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdatePermissionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ai.generativelanguage.v1beta3.UpdatePermissionRequest;

                    /**
                     * Verifies an UpdatePermissionRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdatePermissionRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdatePermissionRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.ai.generativelanguage.v1beta3.UpdatePermissionRequest;

                    /**
                     * Creates a plain object from an UpdatePermissionRequest message. Also converts values to other types if specified.
                     * @param message UpdatePermissionRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ai.generativelanguage.v1beta3.UpdatePermissionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdatePermissionRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdatePermissionRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeletePermissionRequest. */
                interface IDeletePermissionRequest {

                    /** DeletePermissionRequest name */
                    name?: (string|null);
                }

                /** Represents a DeletePermissionRequest. */
                class DeletePermissionRequest implements IDeletePermissionRequest {

                    /**
                     * Constructs a new DeletePermissionRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ai.generativelanguage.v1beta3.IDeletePermissionRequest);

                    /** DeletePermissionRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeletePermissionRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeletePermissionRequest instance
                     */
                    public static create(properties?: google.ai.generativelanguage.v1beta3.IDeletePermissionRequest): google.ai.generativelanguage.v1beta3.DeletePermissionRequest;

                    /**
                     * Encodes the specified DeletePermissionRequest message. Does not implicitly {@link google.ai.generativelanguage.v1beta3.DeletePermissionRequest.verify|verify} messages.
                     * @param message DeletePermissionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ai.generativelanguage.v1beta3.IDeletePermissionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeletePermissionRequest message, length delimited. Does not implicitly {@link google.ai.generativelanguage.v1beta3.DeletePermissionRequest.verify|verify} messages.
                     * @param message DeletePermissionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ai.generativelanguage.v1beta3.IDeletePermissionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeletePermissionRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeletePermissionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ai.generativelanguage.v1beta3.DeletePermissionRequest;

                    /**
                     * Decodes a DeletePermissionRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeletePermissionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ai.generativelanguage.v1beta3.DeletePermissionRequest;

                    /**
                     * Verifies a DeletePermissionRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeletePermissionRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeletePermissionRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.ai.generativelanguage.v1beta3.DeletePermissionRequest;

                    /**
                     * Creates a plain object from a DeletePermissionRequest message. Also converts values to other types if specified.
                     * @param message DeletePermissionRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ai.generativelanguage.v1beta3.DeletePermissionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeletePermissionRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeletePermissionRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a TransferOwnershipRequest. */
                interface ITransferOwnershipRequest {

                    /** TransferOwnershipRequest name */
                    name?: (string|null);

                    /** TransferOwnershipRequest emailAddress */
                    emailAddress?: (string|null);
                }

                /** Represents a TransferOwnershipRequest. */
                class TransferOwnershipRequest implements ITransferOwnershipRequest {

                    /**
                     * Constructs a new TransferOwnershipRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ai.generativelanguage.v1beta3.ITransferOwnershipRequest);

                    /** TransferOwnershipRequest name. */
                    public name: string;

                    /** TransferOwnershipRequest emailAddress. */
                    public emailAddress: string;

                    /**
                     * Creates a new TransferOwnershipRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TransferOwnershipRequest instance
                     */
                    public static create(properties?: google.ai.generativelanguage.v1beta3.ITransferOwnershipRequest): google.ai.generativelanguage.v1beta3.TransferOwnershipRequest;

                    /**
                     * Encodes the specified TransferOwnershipRequest message. Does not implicitly {@link google.ai.generativelanguage.v1beta3.TransferOwnershipRequest.verify|verify} messages.
                     * @param message TransferOwnershipRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ai.generativelanguage.v1beta3.ITransferOwnershipRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TransferOwnershipRequest message, length delimited. Does not implicitly {@link google.ai.generativelanguage.v1beta3.TransferOwnershipRequest.verify|verify} messages.
                     * @param message TransferOwnershipRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ai.generativelanguage.v1beta3.ITransferOwnershipRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TransferOwnershipRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TransferOwnershipRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ai.generativelanguage.v1beta3.TransferOwnershipRequest;

                    /**
                     * Decodes a TransferOwnershipRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TransferOwnershipRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ai.generativelanguage.v1beta3.TransferOwnershipRequest;

                    /**
                     * Verifies a TransferOwnershipRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TransferOwnershipRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TransferOwnershipRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.ai.generativelanguage.v1beta3.TransferOwnershipRequest;

                    /**
                     * Creates a plain object from a TransferOwnershipRequest message. Also converts values to other types if specified.
                     * @param message TransferOwnershipRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ai.generativelanguage.v1beta3.TransferOwnershipRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TransferOwnershipRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TransferOwnershipRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a TransferOwnershipResponse. */
                interface ITransferOwnershipResponse {
                }

                /** Represents a TransferOwnershipResponse. */
                class TransferOwnershipResponse implements ITransferOwnershipResponse {

                    /**
                     * Constructs a new TransferOwnershipResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ai.generativelanguage.v1beta3.ITransferOwnershipResponse);

                    /**
                     * Creates a new TransferOwnershipResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TransferOwnershipResponse instance
                     */
                    public static create(properties?: google.ai.generativelanguage.v1beta3.ITransferOwnershipResponse): google.ai.generativelanguage.v1beta3.TransferOwnershipResponse;

                    /**
                     * Encodes the specified TransferOwnershipResponse message. Does not implicitly {@link google.ai.generativelanguage.v1beta3.TransferOwnershipResponse.verify|verify} messages.
                     * @param message TransferOwnershipResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ai.generativelanguage.v1beta3.ITransferOwnershipResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TransferOwnershipResponse message, length delimited. Does not implicitly {@link google.ai.generativelanguage.v1beta3.TransferOwnershipResponse.verify|verify} messages.
                     * @param message TransferOwnershipResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ai.generativelanguage.v1beta3.ITransferOwnershipResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TransferOwnershipResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TransferOwnershipResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ai.generativelanguage.v1beta3.TransferOwnershipResponse;

                    /**
                     * Decodes a TransferOwnershipResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TransferOwnershipResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ai.generativelanguage.v1beta3.TransferOwnershipResponse;

                    /**
                     * Verifies a TransferOwnershipResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TransferOwnershipResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TransferOwnershipResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.ai.generativelanguage.v1beta3.TransferOwnershipResponse;

                    /**
                     * Creates a plain object from a TransferOwnershipResponse message. Also converts values to other types if specified.
                     * @param message TransferOwnershipResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ai.generativelanguage.v1beta3.TransferOwnershipResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TransferOwnershipResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TransferOwnershipResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Represents a TextService */
                class TextService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new TextService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new TextService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): TextService;

                    /**
                     * Calls GenerateText.
                     * @param request GenerateTextRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and GenerateTextResponse
                     */
                    public generateText(request: google.ai.generativelanguage.v1beta3.IGenerateTextRequest, callback: google.ai.generativelanguage.v1beta3.TextService.GenerateTextCallback): void;

                    /**
                     * Calls GenerateText.
                     * @param request GenerateTextRequest message or plain object
                     * @returns Promise
                     */
                    public generateText(request: google.ai.generativelanguage.v1beta3.IGenerateTextRequest): Promise<google.ai.generativelanguage.v1beta3.GenerateTextResponse>;

                    /**
                     * Calls EmbedText.
                     * @param request EmbedTextRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and EmbedTextResponse
                     */
                    public embedText(request: google.ai.generativelanguage.v1beta3.IEmbedTextRequest, callback: google.ai.generativelanguage.v1beta3.TextService.EmbedTextCallback): void;

                    /**
                     * Calls EmbedText.
                     * @param request EmbedTextRequest message or plain object
                     * @returns Promise
                     */
                    public embedText(request: google.ai.generativelanguage.v1beta3.IEmbedTextRequest): Promise<google.ai.generativelanguage.v1beta3.EmbedTextResponse>;

                    /**
                     * Calls BatchEmbedText.
                     * @param request BatchEmbedTextRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and BatchEmbedTextResponse
                     */
                    public batchEmbedText(request: google.ai.generativelanguage.v1beta3.IBatchEmbedTextRequest, callback: google.ai.generativelanguage.v1beta3.TextService.BatchEmbedTextCallback): void;

                    /**
                     * Calls BatchEmbedText.
                     * @param request BatchEmbedTextRequest message or plain object
                     * @returns Promise
                     */
                    public batchEmbedText(request: google.ai.generativelanguage.v1beta3.IBatchEmbedTextRequest): Promise<google.ai.generativelanguage.v1beta3.BatchEmbedTextResponse>;

                    /**
                     * Calls CountTextTokens.
                     * @param request CountTextTokensRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and CountTextTokensResponse
                     */
                    public countTextTokens(request: google.ai.generativelanguage.v1beta3.ICountTextTokensRequest, callback: google.ai.generativelanguage.v1beta3.TextService.CountTextTokensCallback): void;

                    /**
                     * Calls CountTextTokens.
                     * @param request CountTextTokensRequest message or plain object
                     * @returns Promise
                     */
                    public countTextTokens(request: google.ai.generativelanguage.v1beta3.ICountTextTokensRequest): Promise<google.ai.generativelanguage.v1beta3.CountTextTokensResponse>;
                }

                namespace TextService {

                    /**
                     * Callback as used by {@link google.ai.generativelanguage.v1beta3.TextService|generateText}.
                     * @param error Error, if any
                     * @param [response] GenerateTextResponse
                     */
                    type GenerateTextCallback = (error: (Error|null), response?: google.ai.generativelanguage.v1beta3.GenerateTextResponse) => void;

                    /**
                     * Callback as used by {@link google.ai.generativelanguage.v1beta3.TextService|embedText}.
                     * @param error Error, if any
                     * @param [response] EmbedTextResponse
                     */
                    type EmbedTextCallback = (error: (Error|null), response?: google.ai.generativelanguage.v1beta3.EmbedTextResponse) => void;

                    /**
                     * Callback as used by {@link google.ai.generativelanguage.v1beta3.TextService|batchEmbedText}.
                     * @param error Error, if any
                     * @param [response] BatchEmbedTextResponse
                     */
                    type BatchEmbedTextCallback = (error: (Error|null), response?: google.ai.generativelanguage.v1beta3.BatchEmbedTextResponse) => void;

                    /**
                     * Callback as used by {@link google.ai.generativelanguage.v1beta3.TextService|countTextTokens}.
                     * @param error Error, if any
                     * @param [response] CountTextTokensResponse
                     */
                    type CountTextTokensCallback = (error: (Error|null), response?: google.ai.generativelanguage.v1beta3.CountTextTokensResponse) => void;
                }

                /** Properties of a GenerateTextRequest. */
                interface IGenerateTextRequest {

                    /** GenerateTextRequest model */
                    model?: (string|null);

                    /** GenerateTextRequest prompt */
                    prompt?: (google.ai.generativelanguage.v1beta3.ITextPrompt|null);

                    /** GenerateTextRequest temperature */
                    temperature?: (number|null);

                    /** GenerateTextRequest candidateCount */
                    candidateCount?: (number|null);

                    /** GenerateTextRequest maxOutputTokens */
                    maxOutputTokens?: (number|null);

                    /** GenerateTextRequest topP */
                    topP?: (number|null);

                    /** GenerateTextRequest topK */
                    topK?: (number|null);

                    /** GenerateTextRequest safetySettings */
                    safetySettings?: (google.ai.generativelanguage.v1beta3.ISafetySetting[]|null);

                    /** GenerateTextRequest stopSequences */
                    stopSequences?: (string[]|null);
                }

                /** Represents a GenerateTextRequest. */
                class GenerateTextRequest implements IGenerateTextRequest {

                    /**
                     * Constructs a new GenerateTextRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ai.generativelanguage.v1beta3.IGenerateTextRequest);

                    /** GenerateTextRequest model. */
                    public model: string;

                    /** GenerateTextRequest prompt. */
                    public prompt?: (google.ai.generativelanguage.v1beta3.ITextPrompt|null);

                    /** GenerateTextRequest temperature. */
                    public temperature?: (number|null);

                    /** GenerateTextRequest candidateCount. */
                    public candidateCount?: (number|null);

                    /** GenerateTextRequest maxOutputTokens. */
                    public maxOutputTokens?: (number|null);

                    /** GenerateTextRequest topP. */
                    public topP?: (number|null);

                    /** GenerateTextRequest topK. */
                    public topK?: (number|null);

                    /** GenerateTextRequest safetySettings. */
                    public safetySettings: google.ai.generativelanguage.v1beta3.ISafetySetting[];

                    /** GenerateTextRequest stopSequences. */
                    public stopSequences: string[];

                    /** GenerateTextRequest _temperature. */
                    public _temperature?: "temperature";

                    /** GenerateTextRequest _candidateCount. */
                    public _candidateCount?: "candidateCount";

                    /** GenerateTextRequest _maxOutputTokens. */
                    public _maxOutputTokens?: "maxOutputTokens";

                    /** GenerateTextRequest _topP. */
                    public _topP?: "topP";

                    /** GenerateTextRequest _topK. */
                    public _topK?: "topK";

                    /**
                     * Creates a new GenerateTextRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GenerateTextRequest instance
                     */
                    public static create(properties?: google.ai.generativelanguage.v1beta3.IGenerateTextRequest): google.ai.generativelanguage.v1beta3.GenerateTextRequest;

                    /**
                     * Encodes the specified GenerateTextRequest message. Does not implicitly {@link google.ai.generativelanguage.v1beta3.GenerateTextRequest.verify|verify} messages.
                     * @param message GenerateTextRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ai.generativelanguage.v1beta3.IGenerateTextRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GenerateTextRequest message, length delimited. Does not implicitly {@link google.ai.generativelanguage.v1beta3.GenerateTextRequest.verify|verify} messages.
                     * @param message GenerateTextRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ai.generativelanguage.v1beta3.IGenerateTextRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GenerateTextRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GenerateTextRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ai.generativelanguage.v1beta3.GenerateTextRequest;

                    /**
                     * Decodes a GenerateTextRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GenerateTextRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ai.generativelanguage.v1beta3.GenerateTextRequest;

                    /**
                     * Verifies a GenerateTextRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GenerateTextRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GenerateTextRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.ai.generativelanguage.v1beta3.GenerateTextRequest;

                    /**
                     * Creates a plain object from a GenerateTextRequest message. Also converts values to other types if specified.
                     * @param message GenerateTextRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ai.generativelanguage.v1beta3.GenerateTextRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GenerateTextRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GenerateTextRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GenerateTextResponse. */
                interface IGenerateTextResponse {

                    /** GenerateTextResponse candidates */
                    candidates?: (google.ai.generativelanguage.v1beta3.ITextCompletion[]|null);

                    /** GenerateTextResponse filters */
                    filters?: (google.ai.generativelanguage.v1beta3.IContentFilter[]|null);

                    /** GenerateTextResponse safetyFeedback */
                    safetyFeedback?: (google.ai.generativelanguage.v1beta3.ISafetyFeedback[]|null);
                }

                /** Represents a GenerateTextResponse. */
                class GenerateTextResponse implements IGenerateTextResponse {

                    /**
                     * Constructs a new GenerateTextResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ai.generativelanguage.v1beta3.IGenerateTextResponse);

                    /** GenerateTextResponse candidates. */
                    public candidates: google.ai.generativelanguage.v1beta3.ITextCompletion[];

                    /** GenerateTextResponse filters. */
                    public filters: google.ai.generativelanguage.v1beta3.IContentFilter[];

                    /** GenerateTextResponse safetyFeedback. */
                    public safetyFeedback: google.ai.generativelanguage.v1beta3.ISafetyFeedback[];

                    /**
                     * Creates a new GenerateTextResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GenerateTextResponse instance
                     */
                    public static create(properties?: google.ai.generativelanguage.v1beta3.IGenerateTextResponse): google.ai.generativelanguage.v1beta3.GenerateTextResponse;

                    /**
                     * Encodes the specified GenerateTextResponse message. Does not implicitly {@link google.ai.generativelanguage.v1beta3.GenerateTextResponse.verify|verify} messages.
                     * @param message GenerateTextResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ai.generativelanguage.v1beta3.IGenerateTextResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GenerateTextResponse message, length delimited. Does not implicitly {@link google.ai.generativelanguage.v1beta3.GenerateTextResponse.verify|verify} messages.
                     * @param message GenerateTextResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ai.generativelanguage.v1beta3.IGenerateTextResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GenerateTextResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GenerateTextResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ai.generativelanguage.v1beta3.GenerateTextResponse;

                    /**
                     * Decodes a GenerateTextResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GenerateTextResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ai.generativelanguage.v1beta3.GenerateTextResponse;

                    /**
                     * Verifies a GenerateTextResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GenerateTextResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GenerateTextResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.ai.generativelanguage.v1beta3.GenerateTextResponse;

                    /**
                     * Creates a plain object from a GenerateTextResponse message. Also converts values to other types if specified.
                     * @param message GenerateTextResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ai.generativelanguage.v1beta3.GenerateTextResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GenerateTextResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GenerateTextResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a TextPrompt. */
                interface ITextPrompt {

                    /** TextPrompt text */
                    text?: (string|null);
                }

                /** Represents a TextPrompt. */
                class TextPrompt implements ITextPrompt {

                    /**
                     * Constructs a new TextPrompt.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ai.generativelanguage.v1beta3.ITextPrompt);

                    /** TextPrompt text. */
                    public text: string;

                    /**
                     * Creates a new TextPrompt instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TextPrompt instance
                     */
                    public static create(properties?: google.ai.generativelanguage.v1beta3.ITextPrompt): google.ai.generativelanguage.v1beta3.TextPrompt;

                    /**
                     * Encodes the specified TextPrompt message. Does not implicitly {@link google.ai.generativelanguage.v1beta3.TextPrompt.verify|verify} messages.
                     * @param message TextPrompt message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ai.generativelanguage.v1beta3.ITextPrompt, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TextPrompt message, length delimited. Does not implicitly {@link google.ai.generativelanguage.v1beta3.TextPrompt.verify|verify} messages.
                     * @param message TextPrompt message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ai.generativelanguage.v1beta3.ITextPrompt, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TextPrompt message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TextPrompt
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ai.generativelanguage.v1beta3.TextPrompt;

                    /**
                     * Decodes a TextPrompt message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TextPrompt
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ai.generativelanguage.v1beta3.TextPrompt;

                    /**
                     * Verifies a TextPrompt message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TextPrompt message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TextPrompt
                     */
                    public static fromObject(object: { [k: string]: any }): google.ai.generativelanguage.v1beta3.TextPrompt;

                    /**
                     * Creates a plain object from a TextPrompt message. Also converts values to other types if specified.
                     * @param message TextPrompt
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ai.generativelanguage.v1beta3.TextPrompt, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TextPrompt to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TextPrompt
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a TextCompletion. */
                interface ITextCompletion {

                    /** TextCompletion output */
                    output?: (string|null);

                    /** TextCompletion safetyRatings */
                    safetyRatings?: (google.ai.generativelanguage.v1beta3.ISafetyRating[]|null);

                    /** TextCompletion citationMetadata */
                    citationMetadata?: (google.ai.generativelanguage.v1beta3.ICitationMetadata|null);
                }

                /** Represents a TextCompletion. */
                class TextCompletion implements ITextCompletion {

                    /**
                     * Constructs a new TextCompletion.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ai.generativelanguage.v1beta3.ITextCompletion);

                    /** TextCompletion output. */
                    public output: string;

                    /** TextCompletion safetyRatings. */
                    public safetyRatings: google.ai.generativelanguage.v1beta3.ISafetyRating[];

                    /** TextCompletion citationMetadata. */
                    public citationMetadata?: (google.ai.generativelanguage.v1beta3.ICitationMetadata|null);

                    /** TextCompletion _citationMetadata. */
                    public _citationMetadata?: "citationMetadata";

                    /**
                     * Creates a new TextCompletion instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TextCompletion instance
                     */
                    public static create(properties?: google.ai.generativelanguage.v1beta3.ITextCompletion): google.ai.generativelanguage.v1beta3.TextCompletion;

                    /**
                     * Encodes the specified TextCompletion message. Does not implicitly {@link google.ai.generativelanguage.v1beta3.TextCompletion.verify|verify} messages.
                     * @param message TextCompletion message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ai.generativelanguage.v1beta3.ITextCompletion, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TextCompletion message, length delimited. Does not implicitly {@link google.ai.generativelanguage.v1beta3.TextCompletion.verify|verify} messages.
                     * @param message TextCompletion message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ai.generativelanguage.v1beta3.ITextCompletion, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TextCompletion message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TextCompletion
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ai.generativelanguage.v1beta3.TextCompletion;

                    /**
                     * Decodes a TextCompletion message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TextCompletion
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ai.generativelanguage.v1beta3.TextCompletion;

                    /**
                     * Verifies a TextCompletion message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TextCompletion message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TextCompletion
                     */
                    public static fromObject(object: { [k: string]: any }): google.ai.generativelanguage.v1beta3.TextCompletion;

                    /**
                     * Creates a plain object from a TextCompletion message. Also converts values to other types if specified.
                     * @param message TextCompletion
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ai.generativelanguage.v1beta3.TextCompletion, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TextCompletion to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TextCompletion
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an EmbedTextRequest. */
                interface IEmbedTextRequest {

                    /** EmbedTextRequest model */
                    model?: (string|null);

                    /** EmbedTextRequest text */
                    text?: (string|null);
                }

                /** Represents an EmbedTextRequest. */
                class EmbedTextRequest implements IEmbedTextRequest {

                    /**
                     * Constructs a new EmbedTextRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ai.generativelanguage.v1beta3.IEmbedTextRequest);

                    /** EmbedTextRequest model. */
                    public model: string;

                    /** EmbedTextRequest text. */
                    public text: string;

                    /**
                     * Creates a new EmbedTextRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns EmbedTextRequest instance
                     */
                    public static create(properties?: google.ai.generativelanguage.v1beta3.IEmbedTextRequest): google.ai.generativelanguage.v1beta3.EmbedTextRequest;

                    /**
                     * Encodes the specified EmbedTextRequest message. Does not implicitly {@link google.ai.generativelanguage.v1beta3.EmbedTextRequest.verify|verify} messages.
                     * @param message EmbedTextRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ai.generativelanguage.v1beta3.IEmbedTextRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified EmbedTextRequest message, length delimited. Does not implicitly {@link google.ai.generativelanguage.v1beta3.EmbedTextRequest.verify|verify} messages.
                     * @param message EmbedTextRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ai.generativelanguage.v1beta3.IEmbedTextRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an EmbedTextRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns EmbedTextRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ai.generativelanguage.v1beta3.EmbedTextRequest;

                    /**
                     * Decodes an EmbedTextRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns EmbedTextRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ai.generativelanguage.v1beta3.EmbedTextRequest;

                    /**
                     * Verifies an EmbedTextRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an EmbedTextRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns EmbedTextRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.ai.generativelanguage.v1beta3.EmbedTextRequest;

                    /**
                     * Creates a plain object from an EmbedTextRequest message. Also converts values to other types if specified.
                     * @param message EmbedTextRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ai.generativelanguage.v1beta3.EmbedTextRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this EmbedTextRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for EmbedTextRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an EmbedTextResponse. */
                interface IEmbedTextResponse {

                    /** EmbedTextResponse embedding */
                    embedding?: (google.ai.generativelanguage.v1beta3.IEmbedding|null);
                }

                /** Represents an EmbedTextResponse. */
                class EmbedTextResponse implements IEmbedTextResponse {

                    /**
                     * Constructs a new EmbedTextResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ai.generativelanguage.v1beta3.IEmbedTextResponse);

                    /** EmbedTextResponse embedding. */
                    public embedding?: (google.ai.generativelanguage.v1beta3.IEmbedding|null);

                    /** EmbedTextResponse _embedding. */
                    public _embedding?: "embedding";

                    /**
                     * Creates a new EmbedTextResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns EmbedTextResponse instance
                     */
                    public static create(properties?: google.ai.generativelanguage.v1beta3.IEmbedTextResponse): google.ai.generativelanguage.v1beta3.EmbedTextResponse;

                    /**
                     * Encodes the specified EmbedTextResponse message. Does not implicitly {@link google.ai.generativelanguage.v1beta3.EmbedTextResponse.verify|verify} messages.
                     * @param message EmbedTextResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ai.generativelanguage.v1beta3.IEmbedTextResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified EmbedTextResponse message, length delimited. Does not implicitly {@link google.ai.generativelanguage.v1beta3.EmbedTextResponse.verify|verify} messages.
                     * @param message EmbedTextResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ai.generativelanguage.v1beta3.IEmbedTextResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an EmbedTextResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns EmbedTextResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ai.generativelanguage.v1beta3.EmbedTextResponse;

                    /**
                     * Decodes an EmbedTextResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns EmbedTextResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ai.generativelanguage.v1beta3.EmbedTextResponse;

                    /**
                     * Verifies an EmbedTextResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an EmbedTextResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns EmbedTextResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.ai.generativelanguage.v1beta3.EmbedTextResponse;

                    /**
                     * Creates a plain object from an EmbedTextResponse message. Also converts values to other types if specified.
                     * @param message EmbedTextResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ai.generativelanguage.v1beta3.EmbedTextResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this EmbedTextResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for EmbedTextResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a BatchEmbedTextRequest. */
                interface IBatchEmbedTextRequest {

                    /** BatchEmbedTextRequest model */
                    model?: (string|null);

                    /** BatchEmbedTextRequest texts */
                    texts?: (string[]|null);
                }

                /** Represents a BatchEmbedTextRequest. */
                class BatchEmbedTextRequest implements IBatchEmbedTextRequest {

                    /**
                     * Constructs a new BatchEmbedTextRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ai.generativelanguage.v1beta3.IBatchEmbedTextRequest);

                    /** BatchEmbedTextRequest model. */
                    public model: string;

                    /** BatchEmbedTextRequest texts. */
                    public texts: string[];

                    /**
                     * Creates a new BatchEmbedTextRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BatchEmbedTextRequest instance
                     */
                    public static create(properties?: google.ai.generativelanguage.v1beta3.IBatchEmbedTextRequest): google.ai.generativelanguage.v1beta3.BatchEmbedTextRequest;

                    /**
                     * Encodes the specified BatchEmbedTextRequest message. Does not implicitly {@link google.ai.generativelanguage.v1beta3.BatchEmbedTextRequest.verify|verify} messages.
                     * @param message BatchEmbedTextRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ai.generativelanguage.v1beta3.IBatchEmbedTextRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BatchEmbedTextRequest message, length delimited. Does not implicitly {@link google.ai.generativelanguage.v1beta3.BatchEmbedTextRequest.verify|verify} messages.
                     * @param message BatchEmbedTextRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ai.generativelanguage.v1beta3.IBatchEmbedTextRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BatchEmbedTextRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BatchEmbedTextRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ai.generativelanguage.v1beta3.BatchEmbedTextRequest;

                    /**
                     * Decodes a BatchEmbedTextRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BatchEmbedTextRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ai.generativelanguage.v1beta3.BatchEmbedTextRequest;

                    /**
                     * Verifies a BatchEmbedTextRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BatchEmbedTextRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BatchEmbedTextRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.ai.generativelanguage.v1beta3.BatchEmbedTextRequest;

                    /**
                     * Creates a plain object from a BatchEmbedTextRequest message. Also converts values to other types if specified.
                     * @param message BatchEmbedTextRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ai.generativelanguage.v1beta3.BatchEmbedTextRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BatchEmbedTextRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for BatchEmbedTextRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a BatchEmbedTextResponse. */
                interface IBatchEmbedTextResponse {

                    /** BatchEmbedTextResponse embeddings */
                    embeddings?: (google.ai.generativelanguage.v1beta3.IEmbedding[]|null);
                }

                /** Represents a BatchEmbedTextResponse. */
                class BatchEmbedTextResponse implements IBatchEmbedTextResponse {

                    /**
                     * Constructs a new BatchEmbedTextResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ai.generativelanguage.v1beta3.IBatchEmbedTextResponse);

                    /** BatchEmbedTextResponse embeddings. */
                    public embeddings: google.ai.generativelanguage.v1beta3.IEmbedding[];

                    /**
                     * Creates a new BatchEmbedTextResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BatchEmbedTextResponse instance
                     */
                    public static create(properties?: google.ai.generativelanguage.v1beta3.IBatchEmbedTextResponse): google.ai.generativelanguage.v1beta3.BatchEmbedTextResponse;

                    /**
                     * Encodes the specified BatchEmbedTextResponse message. Does not implicitly {@link google.ai.generativelanguage.v1beta3.BatchEmbedTextResponse.verify|verify} messages.
                     * @param message BatchEmbedTextResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ai.generativelanguage.v1beta3.IBatchEmbedTextResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BatchEmbedTextResponse message, length delimited. Does not implicitly {@link google.ai.generativelanguage.v1beta3.BatchEmbedTextResponse.verify|verify} messages.
                     * @param message BatchEmbedTextResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ai.generativelanguage.v1beta3.IBatchEmbedTextResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BatchEmbedTextResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BatchEmbedTextResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ai.generativelanguage.v1beta3.BatchEmbedTextResponse;

                    /**
                     * Decodes a BatchEmbedTextResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BatchEmbedTextResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ai.generativelanguage.v1beta3.BatchEmbedTextResponse;

                    /**
                     * Verifies a BatchEmbedTextResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BatchEmbedTextResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BatchEmbedTextResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.ai.generativelanguage.v1beta3.BatchEmbedTextResponse;

                    /**
                     * Creates a plain object from a BatchEmbedTextResponse message. Also converts values to other types if specified.
                     * @param message BatchEmbedTextResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ai.generativelanguage.v1beta3.BatchEmbedTextResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BatchEmbedTextResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for BatchEmbedTextResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an Embedding. */
                interface IEmbedding {

                    /** Embedding value */
                    value?: (number[]|null);
                }

                /** Represents an Embedding. */
                class Embedding implements IEmbedding {

                    /**
                     * Constructs a new Embedding.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ai.generativelanguage.v1beta3.IEmbedding);

                    /** Embedding value. */
                    public value: number[];

                    /**
                     * Creates a new Embedding instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Embedding instance
                     */
                    public static create(properties?: google.ai.generativelanguage.v1beta3.IEmbedding): google.ai.generativelanguage.v1beta3.Embedding;

                    /**
                     * Encodes the specified Embedding message. Does not implicitly {@link google.ai.generativelanguage.v1beta3.Embedding.verify|verify} messages.
                     * @param message Embedding message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ai.generativelanguage.v1beta3.IEmbedding, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Embedding message, length delimited. Does not implicitly {@link google.ai.generativelanguage.v1beta3.Embedding.verify|verify} messages.
                     * @param message Embedding message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ai.generativelanguage.v1beta3.IEmbedding, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Embedding message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Embedding
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ai.generativelanguage.v1beta3.Embedding;

                    /**
                     * Decodes an Embedding message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Embedding
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ai.generativelanguage.v1beta3.Embedding;

                    /**
                     * Verifies an Embedding message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Embedding message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Embedding
                     */
                    public static fromObject(object: { [k: string]: any }): google.ai.generativelanguage.v1beta3.Embedding;

                    /**
                     * Creates a plain object from an Embedding message. Also converts values to other types if specified.
                     * @param message Embedding
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ai.generativelanguage.v1beta3.Embedding, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Embedding to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Embedding
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CountTextTokensRequest. */
                interface ICountTextTokensRequest {

                    /** CountTextTokensRequest model */
                    model?: (string|null);

                    /** CountTextTokensRequest prompt */
                    prompt?: (google.ai.generativelanguage.v1beta3.ITextPrompt|null);
                }

                /** Represents a CountTextTokensRequest. */
                class CountTextTokensRequest implements ICountTextTokensRequest {

                    /**
                     * Constructs a new CountTextTokensRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ai.generativelanguage.v1beta3.ICountTextTokensRequest);

                    /** CountTextTokensRequest model. */
                    public model: string;

                    /** CountTextTokensRequest prompt. */
                    public prompt?: (google.ai.generativelanguage.v1beta3.ITextPrompt|null);

                    /**
                     * Creates a new CountTextTokensRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CountTextTokensRequest instance
                     */
                    public static create(properties?: google.ai.generativelanguage.v1beta3.ICountTextTokensRequest): google.ai.generativelanguage.v1beta3.CountTextTokensRequest;

                    /**
                     * Encodes the specified CountTextTokensRequest message. Does not implicitly {@link google.ai.generativelanguage.v1beta3.CountTextTokensRequest.verify|verify} messages.
                     * @param message CountTextTokensRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ai.generativelanguage.v1beta3.ICountTextTokensRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CountTextTokensRequest message, length delimited. Does not implicitly {@link google.ai.generativelanguage.v1beta3.CountTextTokensRequest.verify|verify} messages.
                     * @param message CountTextTokensRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ai.generativelanguage.v1beta3.ICountTextTokensRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CountTextTokensRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CountTextTokensRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ai.generativelanguage.v1beta3.CountTextTokensRequest;

                    /**
                     * Decodes a CountTextTokensRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CountTextTokensRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ai.generativelanguage.v1beta3.CountTextTokensRequest;

                    /**
                     * Verifies a CountTextTokensRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CountTextTokensRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CountTextTokensRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.ai.generativelanguage.v1beta3.CountTextTokensRequest;

                    /**
                     * Creates a plain object from a CountTextTokensRequest message. Also converts values to other types if specified.
                     * @param message CountTextTokensRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ai.generativelanguage.v1beta3.CountTextTokensRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CountTextTokensRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CountTextTokensRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CountTextTokensResponse. */
                interface ICountTextTokensResponse {

                    /** CountTextTokensResponse tokenCount */
                    tokenCount?: (number|null);
                }

                /** Represents a CountTextTokensResponse. */
                class CountTextTokensResponse implements ICountTextTokensResponse {

                    /**
                     * Constructs a new CountTextTokensResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.ai.generativelanguage.v1beta3.ICountTextTokensResponse);

                    /** CountTextTokensResponse tokenCount. */
                    public tokenCount: number;

                    /**
                     * Creates a new CountTextTokensResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CountTextTokensResponse instance
                     */
                    public static create(properties?: google.ai.generativelanguage.v1beta3.ICountTextTokensResponse): google.ai.generativelanguage.v1beta3.CountTextTokensResponse;

                    /**
                     * Encodes the specified CountTextTokensResponse message. Does not implicitly {@link google.ai.generativelanguage.v1beta3.CountTextTokensResponse.verify|verify} messages.
                     * @param message CountTextTokensResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.ai.generativelanguage.v1beta3.ICountTextTokensResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CountTextTokensResponse message, length delimited. Does not implicitly {@link google.ai.generativelanguage.v1beta3.CountTextTokensResponse.verify|verify} messages.
                     * @param message CountTextTokensResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.ai.generativelanguage.v1beta3.ICountTextTokensResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CountTextTokensResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CountTextTokensResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ai.generativelanguage.v1beta3.CountTextTokensResponse;

                    /**
                     * Decodes a CountTextTokensResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CountTextTokensResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ai.generativelanguage.v1beta3.CountTextTokensResponse;

                    /**
                     * Verifies a CountTextTokensResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CountTextTokensResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CountTextTokensResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.ai.generativelanguage.v1beta3.CountTextTokensResponse;

                    /**
                     * Creates a plain object from a CountTextTokensResponse message. Also converts values to other types if specified.
                     * @param message CountTextTokensResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.ai.generativelanguage.v1beta3.CountTextTokensResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CountTextTokensResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CountTextTokensResponse
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
