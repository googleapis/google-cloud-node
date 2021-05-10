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

        /** Namespace language. */
        namespace language {

            /** Namespace v1. */
            namespace v1 {

                /** Represents a LanguageService */
                class LanguageService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new LanguageService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new LanguageService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): LanguageService;

                    /**
                     * Calls AnalyzeSentiment.
                     * @param request AnalyzeSentimentRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and AnalyzeSentimentResponse
                     */
                    public analyzeSentiment(request: google.cloud.language.v1.IAnalyzeSentimentRequest, callback: google.cloud.language.v1.LanguageService.AnalyzeSentimentCallback): void;

                    /**
                     * Calls AnalyzeSentiment.
                     * @param request AnalyzeSentimentRequest message or plain object
                     * @returns Promise
                     */
                    public analyzeSentiment(request: google.cloud.language.v1.IAnalyzeSentimentRequest): Promise<google.cloud.language.v1.AnalyzeSentimentResponse>;

                    /**
                     * Calls AnalyzeEntities.
                     * @param request AnalyzeEntitiesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and AnalyzeEntitiesResponse
                     */
                    public analyzeEntities(request: google.cloud.language.v1.IAnalyzeEntitiesRequest, callback: google.cloud.language.v1.LanguageService.AnalyzeEntitiesCallback): void;

                    /**
                     * Calls AnalyzeEntities.
                     * @param request AnalyzeEntitiesRequest message or plain object
                     * @returns Promise
                     */
                    public analyzeEntities(request: google.cloud.language.v1.IAnalyzeEntitiesRequest): Promise<google.cloud.language.v1.AnalyzeEntitiesResponse>;

                    /**
                     * Calls AnalyzeEntitySentiment.
                     * @param request AnalyzeEntitySentimentRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and AnalyzeEntitySentimentResponse
                     */
                    public analyzeEntitySentiment(request: google.cloud.language.v1.IAnalyzeEntitySentimentRequest, callback: google.cloud.language.v1.LanguageService.AnalyzeEntitySentimentCallback): void;

                    /**
                     * Calls AnalyzeEntitySentiment.
                     * @param request AnalyzeEntitySentimentRequest message or plain object
                     * @returns Promise
                     */
                    public analyzeEntitySentiment(request: google.cloud.language.v1.IAnalyzeEntitySentimentRequest): Promise<google.cloud.language.v1.AnalyzeEntitySentimentResponse>;

                    /**
                     * Calls AnalyzeSyntax.
                     * @param request AnalyzeSyntaxRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and AnalyzeSyntaxResponse
                     */
                    public analyzeSyntax(request: google.cloud.language.v1.IAnalyzeSyntaxRequest, callback: google.cloud.language.v1.LanguageService.AnalyzeSyntaxCallback): void;

                    /**
                     * Calls AnalyzeSyntax.
                     * @param request AnalyzeSyntaxRequest message or plain object
                     * @returns Promise
                     */
                    public analyzeSyntax(request: google.cloud.language.v1.IAnalyzeSyntaxRequest): Promise<google.cloud.language.v1.AnalyzeSyntaxResponse>;

                    /**
                     * Calls ClassifyText.
                     * @param request ClassifyTextRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ClassifyTextResponse
                     */
                    public classifyText(request: google.cloud.language.v1.IClassifyTextRequest, callback: google.cloud.language.v1.LanguageService.ClassifyTextCallback): void;

                    /**
                     * Calls ClassifyText.
                     * @param request ClassifyTextRequest message or plain object
                     * @returns Promise
                     */
                    public classifyText(request: google.cloud.language.v1.IClassifyTextRequest): Promise<google.cloud.language.v1.ClassifyTextResponse>;

                    /**
                     * Calls AnnotateText.
                     * @param request AnnotateTextRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and AnnotateTextResponse
                     */
                    public annotateText(request: google.cloud.language.v1.IAnnotateTextRequest, callback: google.cloud.language.v1.LanguageService.AnnotateTextCallback): void;

                    /**
                     * Calls AnnotateText.
                     * @param request AnnotateTextRequest message or plain object
                     * @returns Promise
                     */
                    public annotateText(request: google.cloud.language.v1.IAnnotateTextRequest): Promise<google.cloud.language.v1.AnnotateTextResponse>;
                }

                namespace LanguageService {

                    /**
                     * Callback as used by {@link google.cloud.language.v1.LanguageService#analyzeSentiment}.
                     * @param error Error, if any
                     * @param [response] AnalyzeSentimentResponse
                     */
                    type AnalyzeSentimentCallback = (error: (Error|null), response?: google.cloud.language.v1.AnalyzeSentimentResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.language.v1.LanguageService#analyzeEntities}.
                     * @param error Error, if any
                     * @param [response] AnalyzeEntitiesResponse
                     */
                    type AnalyzeEntitiesCallback = (error: (Error|null), response?: google.cloud.language.v1.AnalyzeEntitiesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.language.v1.LanguageService#analyzeEntitySentiment}.
                     * @param error Error, if any
                     * @param [response] AnalyzeEntitySentimentResponse
                     */
                    type AnalyzeEntitySentimentCallback = (error: (Error|null), response?: google.cloud.language.v1.AnalyzeEntitySentimentResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.language.v1.LanguageService#analyzeSyntax}.
                     * @param error Error, if any
                     * @param [response] AnalyzeSyntaxResponse
                     */
                    type AnalyzeSyntaxCallback = (error: (Error|null), response?: google.cloud.language.v1.AnalyzeSyntaxResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.language.v1.LanguageService#classifyText}.
                     * @param error Error, if any
                     * @param [response] ClassifyTextResponse
                     */
                    type ClassifyTextCallback = (error: (Error|null), response?: google.cloud.language.v1.ClassifyTextResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.language.v1.LanguageService#annotateText}.
                     * @param error Error, if any
                     * @param [response] AnnotateTextResponse
                     */
                    type AnnotateTextCallback = (error: (Error|null), response?: google.cloud.language.v1.AnnotateTextResponse) => void;
                }

                /** Properties of a Document. */
                interface IDocument {

                    /** Document type */
                    type?: (google.cloud.language.v1.Document.Type|keyof typeof google.cloud.language.v1.Document.Type|null);

                    /** Document content */
                    content?: (string|null);

                    /** Document gcsContentUri */
                    gcsContentUri?: (string|null);

                    /** Document language */
                    language?: (string|null);
                }

                /** Represents a Document. */
                class Document implements IDocument {

                    /**
                     * Constructs a new Document.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.language.v1.IDocument);

                    /** Document type. */
                    public type: (google.cloud.language.v1.Document.Type|keyof typeof google.cloud.language.v1.Document.Type);

                    /** Document content. */
                    public content?: (string|null);

                    /** Document gcsContentUri. */
                    public gcsContentUri?: (string|null);

                    /** Document language. */
                    public language: string;

                    /** Document source. */
                    public source?: ("content"|"gcsContentUri");

                    /**
                     * Creates a new Document instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Document instance
                     */
                    public static create(properties?: google.cloud.language.v1.IDocument): google.cloud.language.v1.Document;

                    /**
                     * Encodes the specified Document message. Does not implicitly {@link google.cloud.language.v1.Document.verify|verify} messages.
                     * @param message Document message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.language.v1.IDocument, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Document message, length delimited. Does not implicitly {@link google.cloud.language.v1.Document.verify|verify} messages.
                     * @param message Document message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.language.v1.IDocument, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Document message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Document
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.language.v1.Document;

                    /**
                     * Decodes a Document message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Document
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.language.v1.Document;

                    /**
                     * Verifies a Document message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Document message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Document
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.language.v1.Document;

                    /**
                     * Creates a plain object from a Document message. Also converts values to other types if specified.
                     * @param message Document
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.language.v1.Document, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Document to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Document {

                    /** Type enum. */
                    enum Type {
                        TYPE_UNSPECIFIED = 0,
                        PLAIN_TEXT = 1,
                        HTML = 2
                    }
                }

                /** Properties of a Sentence. */
                interface ISentence {

                    /** Sentence text */
                    text?: (google.cloud.language.v1.ITextSpan|null);

                    /** Sentence sentiment */
                    sentiment?: (google.cloud.language.v1.ISentiment|null);
                }

                /** Represents a Sentence. */
                class Sentence implements ISentence {

                    /**
                     * Constructs a new Sentence.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.language.v1.ISentence);

                    /** Sentence text. */
                    public text?: (google.cloud.language.v1.ITextSpan|null);

                    /** Sentence sentiment. */
                    public sentiment?: (google.cloud.language.v1.ISentiment|null);

                    /**
                     * Creates a new Sentence instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Sentence instance
                     */
                    public static create(properties?: google.cloud.language.v1.ISentence): google.cloud.language.v1.Sentence;

                    /**
                     * Encodes the specified Sentence message. Does not implicitly {@link google.cloud.language.v1.Sentence.verify|verify} messages.
                     * @param message Sentence message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.language.v1.ISentence, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Sentence message, length delimited. Does not implicitly {@link google.cloud.language.v1.Sentence.verify|verify} messages.
                     * @param message Sentence message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.language.v1.ISentence, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Sentence message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Sentence
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.language.v1.Sentence;

                    /**
                     * Decodes a Sentence message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Sentence
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.language.v1.Sentence;

                    /**
                     * Verifies a Sentence message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Sentence message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Sentence
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.language.v1.Sentence;

                    /**
                     * Creates a plain object from a Sentence message. Also converts values to other types if specified.
                     * @param message Sentence
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.language.v1.Sentence, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Sentence to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an Entity. */
                interface IEntity {

                    /** Entity name */
                    name?: (string|null);

                    /** Entity type */
                    type?: (google.cloud.language.v1.Entity.Type|keyof typeof google.cloud.language.v1.Entity.Type|null);

                    /** Entity metadata */
                    metadata?: ({ [k: string]: string }|null);

                    /** Entity salience */
                    salience?: (number|null);

                    /** Entity mentions */
                    mentions?: (google.cloud.language.v1.IEntityMention[]|null);

                    /** Entity sentiment */
                    sentiment?: (google.cloud.language.v1.ISentiment|null);
                }

                /** Represents an Entity. */
                class Entity implements IEntity {

                    /**
                     * Constructs a new Entity.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.language.v1.IEntity);

                    /** Entity name. */
                    public name: string;

                    /** Entity type. */
                    public type: (google.cloud.language.v1.Entity.Type|keyof typeof google.cloud.language.v1.Entity.Type);

                    /** Entity metadata. */
                    public metadata: { [k: string]: string };

                    /** Entity salience. */
                    public salience: number;

                    /** Entity mentions. */
                    public mentions: google.cloud.language.v1.IEntityMention[];

                    /** Entity sentiment. */
                    public sentiment?: (google.cloud.language.v1.ISentiment|null);

                    /**
                     * Creates a new Entity instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Entity instance
                     */
                    public static create(properties?: google.cloud.language.v1.IEntity): google.cloud.language.v1.Entity;

                    /**
                     * Encodes the specified Entity message. Does not implicitly {@link google.cloud.language.v1.Entity.verify|verify} messages.
                     * @param message Entity message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.language.v1.IEntity, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Entity message, length delimited. Does not implicitly {@link google.cloud.language.v1.Entity.verify|verify} messages.
                     * @param message Entity message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.language.v1.IEntity, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Entity message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Entity
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.language.v1.Entity;

                    /**
                     * Decodes an Entity message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Entity
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.language.v1.Entity;

                    /**
                     * Verifies an Entity message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Entity message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Entity
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.language.v1.Entity;

                    /**
                     * Creates a plain object from an Entity message. Also converts values to other types if specified.
                     * @param message Entity
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.language.v1.Entity, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Entity to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Entity {

                    /** Type enum. */
                    enum Type {
                        UNKNOWN = 0,
                        PERSON = 1,
                        LOCATION = 2,
                        ORGANIZATION = 3,
                        EVENT = 4,
                        WORK_OF_ART = 5,
                        CONSUMER_GOOD = 6,
                        OTHER = 7,
                        PHONE_NUMBER = 9,
                        ADDRESS = 10,
                        DATE = 11,
                        NUMBER = 12,
                        PRICE = 13
                    }
                }

                /** EncodingType enum. */
                enum EncodingType {
                    NONE = 0,
                    UTF8 = 1,
                    UTF16 = 2,
                    UTF32 = 3
                }

                /** Properties of a Token. */
                interface IToken {

                    /** Token text */
                    text?: (google.cloud.language.v1.ITextSpan|null);

                    /** Token partOfSpeech */
                    partOfSpeech?: (google.cloud.language.v1.IPartOfSpeech|null);

                    /** Token dependencyEdge */
                    dependencyEdge?: (google.cloud.language.v1.IDependencyEdge|null);

                    /** Token lemma */
                    lemma?: (string|null);
                }

                /** Represents a Token. */
                class Token implements IToken {

                    /**
                     * Constructs a new Token.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.language.v1.IToken);

                    /** Token text. */
                    public text?: (google.cloud.language.v1.ITextSpan|null);

                    /** Token partOfSpeech. */
                    public partOfSpeech?: (google.cloud.language.v1.IPartOfSpeech|null);

                    /** Token dependencyEdge. */
                    public dependencyEdge?: (google.cloud.language.v1.IDependencyEdge|null);

                    /** Token lemma. */
                    public lemma: string;

                    /**
                     * Creates a new Token instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Token instance
                     */
                    public static create(properties?: google.cloud.language.v1.IToken): google.cloud.language.v1.Token;

                    /**
                     * Encodes the specified Token message. Does not implicitly {@link google.cloud.language.v1.Token.verify|verify} messages.
                     * @param message Token message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.language.v1.IToken, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Token message, length delimited. Does not implicitly {@link google.cloud.language.v1.Token.verify|verify} messages.
                     * @param message Token message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.language.v1.IToken, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Token message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Token
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.language.v1.Token;

                    /**
                     * Decodes a Token message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Token
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.language.v1.Token;

                    /**
                     * Verifies a Token message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Token message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Token
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.language.v1.Token;

                    /**
                     * Creates a plain object from a Token message. Also converts values to other types if specified.
                     * @param message Token
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.language.v1.Token, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Token to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Sentiment. */
                interface ISentiment {

                    /** Sentiment magnitude */
                    magnitude?: (number|null);

                    /** Sentiment score */
                    score?: (number|null);
                }

                /** Represents a Sentiment. */
                class Sentiment implements ISentiment {

                    /**
                     * Constructs a new Sentiment.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.language.v1.ISentiment);

                    /** Sentiment magnitude. */
                    public magnitude: number;

                    /** Sentiment score. */
                    public score: number;

                    /**
                     * Creates a new Sentiment instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Sentiment instance
                     */
                    public static create(properties?: google.cloud.language.v1.ISentiment): google.cloud.language.v1.Sentiment;

                    /**
                     * Encodes the specified Sentiment message. Does not implicitly {@link google.cloud.language.v1.Sentiment.verify|verify} messages.
                     * @param message Sentiment message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.language.v1.ISentiment, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Sentiment message, length delimited. Does not implicitly {@link google.cloud.language.v1.Sentiment.verify|verify} messages.
                     * @param message Sentiment message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.language.v1.ISentiment, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Sentiment message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Sentiment
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.language.v1.Sentiment;

                    /**
                     * Decodes a Sentiment message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Sentiment
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.language.v1.Sentiment;

                    /**
                     * Verifies a Sentiment message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Sentiment message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Sentiment
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.language.v1.Sentiment;

                    /**
                     * Creates a plain object from a Sentiment message. Also converts values to other types if specified.
                     * @param message Sentiment
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.language.v1.Sentiment, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Sentiment to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PartOfSpeech. */
                interface IPartOfSpeech {

                    /** PartOfSpeech tag */
                    tag?: (google.cloud.language.v1.PartOfSpeech.Tag|keyof typeof google.cloud.language.v1.PartOfSpeech.Tag|null);

                    /** PartOfSpeech aspect */
                    aspect?: (google.cloud.language.v1.PartOfSpeech.Aspect|keyof typeof google.cloud.language.v1.PartOfSpeech.Aspect|null);

                    /** PartOfSpeech case */
                    "case"?: (google.cloud.language.v1.PartOfSpeech.Case|keyof typeof google.cloud.language.v1.PartOfSpeech.Case|null);

                    /** PartOfSpeech form */
                    form?: (google.cloud.language.v1.PartOfSpeech.Form|keyof typeof google.cloud.language.v1.PartOfSpeech.Form|null);

                    /** PartOfSpeech gender */
                    gender?: (google.cloud.language.v1.PartOfSpeech.Gender|keyof typeof google.cloud.language.v1.PartOfSpeech.Gender|null);

                    /** PartOfSpeech mood */
                    mood?: (google.cloud.language.v1.PartOfSpeech.Mood|keyof typeof google.cloud.language.v1.PartOfSpeech.Mood|null);

                    /** PartOfSpeech number */
                    number?: (google.cloud.language.v1.PartOfSpeech.Number|keyof typeof google.cloud.language.v1.PartOfSpeech.Number|null);

                    /** PartOfSpeech person */
                    person?: (google.cloud.language.v1.PartOfSpeech.Person|keyof typeof google.cloud.language.v1.PartOfSpeech.Person|null);

                    /** PartOfSpeech proper */
                    proper?: (google.cloud.language.v1.PartOfSpeech.Proper|keyof typeof google.cloud.language.v1.PartOfSpeech.Proper|null);

                    /** PartOfSpeech reciprocity */
                    reciprocity?: (google.cloud.language.v1.PartOfSpeech.Reciprocity|keyof typeof google.cloud.language.v1.PartOfSpeech.Reciprocity|null);

                    /** PartOfSpeech tense */
                    tense?: (google.cloud.language.v1.PartOfSpeech.Tense|keyof typeof google.cloud.language.v1.PartOfSpeech.Tense|null);

                    /** PartOfSpeech voice */
                    voice?: (google.cloud.language.v1.PartOfSpeech.Voice|keyof typeof google.cloud.language.v1.PartOfSpeech.Voice|null);
                }

                /** Represents a PartOfSpeech. */
                class PartOfSpeech implements IPartOfSpeech {

                    /**
                     * Constructs a new PartOfSpeech.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.language.v1.IPartOfSpeech);

                    /** PartOfSpeech tag. */
                    public tag: (google.cloud.language.v1.PartOfSpeech.Tag|keyof typeof google.cloud.language.v1.PartOfSpeech.Tag);

                    /** PartOfSpeech aspect. */
                    public aspect: (google.cloud.language.v1.PartOfSpeech.Aspect|keyof typeof google.cloud.language.v1.PartOfSpeech.Aspect);

                    /** PartOfSpeech case. */
                    public case: (google.cloud.language.v1.PartOfSpeech.Case|keyof typeof google.cloud.language.v1.PartOfSpeech.Case);

                    /** PartOfSpeech form. */
                    public form: (google.cloud.language.v1.PartOfSpeech.Form|keyof typeof google.cloud.language.v1.PartOfSpeech.Form);

                    /** PartOfSpeech gender. */
                    public gender: (google.cloud.language.v1.PartOfSpeech.Gender|keyof typeof google.cloud.language.v1.PartOfSpeech.Gender);

                    /** PartOfSpeech mood. */
                    public mood: (google.cloud.language.v1.PartOfSpeech.Mood|keyof typeof google.cloud.language.v1.PartOfSpeech.Mood);

                    /** PartOfSpeech number. */
                    public number: (google.cloud.language.v1.PartOfSpeech.Number|keyof typeof google.cloud.language.v1.PartOfSpeech.Number);

                    /** PartOfSpeech person. */
                    public person: (google.cloud.language.v1.PartOfSpeech.Person|keyof typeof google.cloud.language.v1.PartOfSpeech.Person);

                    /** PartOfSpeech proper. */
                    public proper: (google.cloud.language.v1.PartOfSpeech.Proper|keyof typeof google.cloud.language.v1.PartOfSpeech.Proper);

                    /** PartOfSpeech reciprocity. */
                    public reciprocity: (google.cloud.language.v1.PartOfSpeech.Reciprocity|keyof typeof google.cloud.language.v1.PartOfSpeech.Reciprocity);

                    /** PartOfSpeech tense. */
                    public tense: (google.cloud.language.v1.PartOfSpeech.Tense|keyof typeof google.cloud.language.v1.PartOfSpeech.Tense);

                    /** PartOfSpeech voice. */
                    public voice: (google.cloud.language.v1.PartOfSpeech.Voice|keyof typeof google.cloud.language.v1.PartOfSpeech.Voice);

                    /**
                     * Creates a new PartOfSpeech instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PartOfSpeech instance
                     */
                    public static create(properties?: google.cloud.language.v1.IPartOfSpeech): google.cloud.language.v1.PartOfSpeech;

                    /**
                     * Encodes the specified PartOfSpeech message. Does not implicitly {@link google.cloud.language.v1.PartOfSpeech.verify|verify} messages.
                     * @param message PartOfSpeech message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.language.v1.IPartOfSpeech, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PartOfSpeech message, length delimited. Does not implicitly {@link google.cloud.language.v1.PartOfSpeech.verify|verify} messages.
                     * @param message PartOfSpeech message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.language.v1.IPartOfSpeech, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PartOfSpeech message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PartOfSpeech
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.language.v1.PartOfSpeech;

                    /**
                     * Decodes a PartOfSpeech message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PartOfSpeech
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.language.v1.PartOfSpeech;

                    /**
                     * Verifies a PartOfSpeech message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PartOfSpeech message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PartOfSpeech
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.language.v1.PartOfSpeech;

                    /**
                     * Creates a plain object from a PartOfSpeech message. Also converts values to other types if specified.
                     * @param message PartOfSpeech
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.language.v1.PartOfSpeech, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PartOfSpeech to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace PartOfSpeech {

                    /** Tag enum. */
                    enum Tag {
                        UNKNOWN = 0,
                        ADJ = 1,
                        ADP = 2,
                        ADV = 3,
                        CONJ = 4,
                        DET = 5,
                        NOUN = 6,
                        NUM = 7,
                        PRON = 8,
                        PRT = 9,
                        PUNCT = 10,
                        VERB = 11,
                        X = 12,
                        AFFIX = 13
                    }

                    /** Aspect enum. */
                    enum Aspect {
                        ASPECT_UNKNOWN = 0,
                        PERFECTIVE = 1,
                        IMPERFECTIVE = 2,
                        PROGRESSIVE = 3
                    }

                    /** Case enum. */
                    enum Case {
                        CASE_UNKNOWN = 0,
                        ACCUSATIVE = 1,
                        ADVERBIAL = 2,
                        COMPLEMENTIVE = 3,
                        DATIVE = 4,
                        GENITIVE = 5,
                        INSTRUMENTAL = 6,
                        LOCATIVE = 7,
                        NOMINATIVE = 8,
                        OBLIQUE = 9,
                        PARTITIVE = 10,
                        PREPOSITIONAL = 11,
                        REFLEXIVE_CASE = 12,
                        RELATIVE_CASE = 13,
                        VOCATIVE = 14
                    }

                    /** Form enum. */
                    enum Form {
                        FORM_UNKNOWN = 0,
                        ADNOMIAL = 1,
                        AUXILIARY = 2,
                        COMPLEMENTIZER = 3,
                        FINAL_ENDING = 4,
                        GERUND = 5,
                        REALIS = 6,
                        IRREALIS = 7,
                        SHORT = 8,
                        LONG = 9,
                        ORDER = 10,
                        SPECIFIC = 11
                    }

                    /** Gender enum. */
                    enum Gender {
                        GENDER_UNKNOWN = 0,
                        FEMININE = 1,
                        MASCULINE = 2,
                        NEUTER = 3
                    }

                    /** Mood enum. */
                    enum Mood {
                        MOOD_UNKNOWN = 0,
                        CONDITIONAL_MOOD = 1,
                        IMPERATIVE = 2,
                        INDICATIVE = 3,
                        INTERROGATIVE = 4,
                        JUSSIVE = 5,
                        SUBJUNCTIVE = 6
                    }

                    /** Number enum. */
                    enum Number {
                        NUMBER_UNKNOWN = 0,
                        SINGULAR = 1,
                        PLURAL = 2,
                        DUAL = 3
                    }

                    /** Person enum. */
                    enum Person {
                        PERSON_UNKNOWN = 0,
                        FIRST = 1,
                        SECOND = 2,
                        THIRD = 3,
                        REFLEXIVE_PERSON = 4
                    }

                    /** Proper enum. */
                    enum Proper {
                        PROPER_UNKNOWN = 0,
                        PROPER = 1,
                        NOT_PROPER = 2
                    }

                    /** Reciprocity enum. */
                    enum Reciprocity {
                        RECIPROCITY_UNKNOWN = 0,
                        RECIPROCAL = 1,
                        NON_RECIPROCAL = 2
                    }

                    /** Tense enum. */
                    enum Tense {
                        TENSE_UNKNOWN = 0,
                        CONDITIONAL_TENSE = 1,
                        FUTURE = 2,
                        PAST = 3,
                        PRESENT = 4,
                        IMPERFECT = 5,
                        PLUPERFECT = 6
                    }

                    /** Voice enum. */
                    enum Voice {
                        VOICE_UNKNOWN = 0,
                        ACTIVE = 1,
                        CAUSATIVE = 2,
                        PASSIVE = 3
                    }
                }

                /** Properties of a DependencyEdge. */
                interface IDependencyEdge {

                    /** DependencyEdge headTokenIndex */
                    headTokenIndex?: (number|null);

                    /** DependencyEdge label */
                    label?: (google.cloud.language.v1.DependencyEdge.Label|keyof typeof google.cloud.language.v1.DependencyEdge.Label|null);
                }

                /** Represents a DependencyEdge. */
                class DependencyEdge implements IDependencyEdge {

                    /**
                     * Constructs a new DependencyEdge.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.language.v1.IDependencyEdge);

                    /** DependencyEdge headTokenIndex. */
                    public headTokenIndex: number;

                    /** DependencyEdge label. */
                    public label: (google.cloud.language.v1.DependencyEdge.Label|keyof typeof google.cloud.language.v1.DependencyEdge.Label);

                    /**
                     * Creates a new DependencyEdge instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DependencyEdge instance
                     */
                    public static create(properties?: google.cloud.language.v1.IDependencyEdge): google.cloud.language.v1.DependencyEdge;

                    /**
                     * Encodes the specified DependencyEdge message. Does not implicitly {@link google.cloud.language.v1.DependencyEdge.verify|verify} messages.
                     * @param message DependencyEdge message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.language.v1.IDependencyEdge, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DependencyEdge message, length delimited. Does not implicitly {@link google.cloud.language.v1.DependencyEdge.verify|verify} messages.
                     * @param message DependencyEdge message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.language.v1.IDependencyEdge, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DependencyEdge message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DependencyEdge
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.language.v1.DependencyEdge;

                    /**
                     * Decodes a DependencyEdge message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DependencyEdge
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.language.v1.DependencyEdge;

                    /**
                     * Verifies a DependencyEdge message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DependencyEdge message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DependencyEdge
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.language.v1.DependencyEdge;

                    /**
                     * Creates a plain object from a DependencyEdge message. Also converts values to other types if specified.
                     * @param message DependencyEdge
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.language.v1.DependencyEdge, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DependencyEdge to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace DependencyEdge {

                    /** Label enum. */
                    enum Label {
                        UNKNOWN = 0,
                        ABBREV = 1,
                        ACOMP = 2,
                        ADVCL = 3,
                        ADVMOD = 4,
                        AMOD = 5,
                        APPOS = 6,
                        ATTR = 7,
                        AUX = 8,
                        AUXPASS = 9,
                        CC = 10,
                        CCOMP = 11,
                        CONJ = 12,
                        CSUBJ = 13,
                        CSUBJPASS = 14,
                        DEP = 15,
                        DET = 16,
                        DISCOURSE = 17,
                        DOBJ = 18,
                        EXPL = 19,
                        GOESWITH = 20,
                        IOBJ = 21,
                        MARK = 22,
                        MWE = 23,
                        MWV = 24,
                        NEG = 25,
                        NN = 26,
                        NPADVMOD = 27,
                        NSUBJ = 28,
                        NSUBJPASS = 29,
                        NUM = 30,
                        NUMBER = 31,
                        P = 32,
                        PARATAXIS = 33,
                        PARTMOD = 34,
                        PCOMP = 35,
                        POBJ = 36,
                        POSS = 37,
                        POSTNEG = 38,
                        PRECOMP = 39,
                        PRECONJ = 40,
                        PREDET = 41,
                        PREF = 42,
                        PREP = 43,
                        PRONL = 44,
                        PRT = 45,
                        PS = 46,
                        QUANTMOD = 47,
                        RCMOD = 48,
                        RCMODREL = 49,
                        RDROP = 50,
                        REF = 51,
                        REMNANT = 52,
                        REPARANDUM = 53,
                        ROOT = 54,
                        SNUM = 55,
                        SUFF = 56,
                        TMOD = 57,
                        TOPIC = 58,
                        VMOD = 59,
                        VOCATIVE = 60,
                        XCOMP = 61,
                        SUFFIX = 62,
                        TITLE = 63,
                        ADVPHMOD = 64,
                        AUXCAUS = 65,
                        AUXVV = 66,
                        DTMOD = 67,
                        FOREIGN = 68,
                        KW = 69,
                        LIST = 70,
                        NOMC = 71,
                        NOMCSUBJ = 72,
                        NOMCSUBJPASS = 73,
                        NUMC = 74,
                        COP = 75,
                        DISLOCATED = 76,
                        ASP = 77,
                        GMOD = 78,
                        GOBJ = 79,
                        INFMOD = 80,
                        MES = 81,
                        NCOMP = 82
                    }
                }

                /** Properties of an EntityMention. */
                interface IEntityMention {

                    /** EntityMention text */
                    text?: (google.cloud.language.v1.ITextSpan|null);

                    /** EntityMention type */
                    type?: (google.cloud.language.v1.EntityMention.Type|keyof typeof google.cloud.language.v1.EntityMention.Type|null);

                    /** EntityMention sentiment */
                    sentiment?: (google.cloud.language.v1.ISentiment|null);
                }

                /** Represents an EntityMention. */
                class EntityMention implements IEntityMention {

                    /**
                     * Constructs a new EntityMention.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.language.v1.IEntityMention);

                    /** EntityMention text. */
                    public text?: (google.cloud.language.v1.ITextSpan|null);

                    /** EntityMention type. */
                    public type: (google.cloud.language.v1.EntityMention.Type|keyof typeof google.cloud.language.v1.EntityMention.Type);

                    /** EntityMention sentiment. */
                    public sentiment?: (google.cloud.language.v1.ISentiment|null);

                    /**
                     * Creates a new EntityMention instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns EntityMention instance
                     */
                    public static create(properties?: google.cloud.language.v1.IEntityMention): google.cloud.language.v1.EntityMention;

                    /**
                     * Encodes the specified EntityMention message. Does not implicitly {@link google.cloud.language.v1.EntityMention.verify|verify} messages.
                     * @param message EntityMention message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.language.v1.IEntityMention, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified EntityMention message, length delimited. Does not implicitly {@link google.cloud.language.v1.EntityMention.verify|verify} messages.
                     * @param message EntityMention message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.language.v1.IEntityMention, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an EntityMention message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns EntityMention
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.language.v1.EntityMention;

                    /**
                     * Decodes an EntityMention message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns EntityMention
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.language.v1.EntityMention;

                    /**
                     * Verifies an EntityMention message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an EntityMention message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns EntityMention
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.language.v1.EntityMention;

                    /**
                     * Creates a plain object from an EntityMention message. Also converts values to other types if specified.
                     * @param message EntityMention
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.language.v1.EntityMention, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this EntityMention to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace EntityMention {

                    /** Type enum. */
                    enum Type {
                        TYPE_UNKNOWN = 0,
                        PROPER = 1,
                        COMMON = 2
                    }
                }

                /** Properties of a TextSpan. */
                interface ITextSpan {

                    /** TextSpan content */
                    content?: (string|null);

                    /** TextSpan beginOffset */
                    beginOffset?: (number|null);
                }

                /** Represents a TextSpan. */
                class TextSpan implements ITextSpan {

                    /**
                     * Constructs a new TextSpan.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.language.v1.ITextSpan);

                    /** TextSpan content. */
                    public content: string;

                    /** TextSpan beginOffset. */
                    public beginOffset: number;

                    /**
                     * Creates a new TextSpan instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TextSpan instance
                     */
                    public static create(properties?: google.cloud.language.v1.ITextSpan): google.cloud.language.v1.TextSpan;

                    /**
                     * Encodes the specified TextSpan message. Does not implicitly {@link google.cloud.language.v1.TextSpan.verify|verify} messages.
                     * @param message TextSpan message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.language.v1.ITextSpan, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TextSpan message, length delimited. Does not implicitly {@link google.cloud.language.v1.TextSpan.verify|verify} messages.
                     * @param message TextSpan message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.language.v1.ITextSpan, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TextSpan message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TextSpan
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.language.v1.TextSpan;

                    /**
                     * Decodes a TextSpan message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TextSpan
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.language.v1.TextSpan;

                    /**
                     * Verifies a TextSpan message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TextSpan message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TextSpan
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.language.v1.TextSpan;

                    /**
                     * Creates a plain object from a TextSpan message. Also converts values to other types if specified.
                     * @param message TextSpan
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.language.v1.TextSpan, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TextSpan to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ClassificationCategory. */
                interface IClassificationCategory {

                    /** ClassificationCategory name */
                    name?: (string|null);

                    /** ClassificationCategory confidence */
                    confidence?: (number|null);
                }

                /** Represents a ClassificationCategory. */
                class ClassificationCategory implements IClassificationCategory {

                    /**
                     * Constructs a new ClassificationCategory.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.language.v1.IClassificationCategory);

                    /** ClassificationCategory name. */
                    public name: string;

                    /** ClassificationCategory confidence. */
                    public confidence: number;

                    /**
                     * Creates a new ClassificationCategory instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ClassificationCategory instance
                     */
                    public static create(properties?: google.cloud.language.v1.IClassificationCategory): google.cloud.language.v1.ClassificationCategory;

                    /**
                     * Encodes the specified ClassificationCategory message. Does not implicitly {@link google.cloud.language.v1.ClassificationCategory.verify|verify} messages.
                     * @param message ClassificationCategory message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.language.v1.IClassificationCategory, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ClassificationCategory message, length delimited. Does not implicitly {@link google.cloud.language.v1.ClassificationCategory.verify|verify} messages.
                     * @param message ClassificationCategory message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.language.v1.IClassificationCategory, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ClassificationCategory message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ClassificationCategory
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.language.v1.ClassificationCategory;

                    /**
                     * Decodes a ClassificationCategory message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ClassificationCategory
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.language.v1.ClassificationCategory;

                    /**
                     * Verifies a ClassificationCategory message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ClassificationCategory message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ClassificationCategory
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.language.v1.ClassificationCategory;

                    /**
                     * Creates a plain object from a ClassificationCategory message. Also converts values to other types if specified.
                     * @param message ClassificationCategory
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.language.v1.ClassificationCategory, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ClassificationCategory to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an AnalyzeSentimentRequest. */
                interface IAnalyzeSentimentRequest {

                    /** AnalyzeSentimentRequest document */
                    document?: (google.cloud.language.v1.IDocument|null);

                    /** AnalyzeSentimentRequest encodingType */
                    encodingType?: (google.cloud.language.v1.EncodingType|keyof typeof google.cloud.language.v1.EncodingType|null);
                }

                /** Represents an AnalyzeSentimentRequest. */
                class AnalyzeSentimentRequest implements IAnalyzeSentimentRequest {

                    /**
                     * Constructs a new AnalyzeSentimentRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.language.v1.IAnalyzeSentimentRequest);

                    /** AnalyzeSentimentRequest document. */
                    public document?: (google.cloud.language.v1.IDocument|null);

                    /** AnalyzeSentimentRequest encodingType. */
                    public encodingType: (google.cloud.language.v1.EncodingType|keyof typeof google.cloud.language.v1.EncodingType);

                    /**
                     * Creates a new AnalyzeSentimentRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AnalyzeSentimentRequest instance
                     */
                    public static create(properties?: google.cloud.language.v1.IAnalyzeSentimentRequest): google.cloud.language.v1.AnalyzeSentimentRequest;

                    /**
                     * Encodes the specified AnalyzeSentimentRequest message. Does not implicitly {@link google.cloud.language.v1.AnalyzeSentimentRequest.verify|verify} messages.
                     * @param message AnalyzeSentimentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.language.v1.IAnalyzeSentimentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AnalyzeSentimentRequest message, length delimited. Does not implicitly {@link google.cloud.language.v1.AnalyzeSentimentRequest.verify|verify} messages.
                     * @param message AnalyzeSentimentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.language.v1.IAnalyzeSentimentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AnalyzeSentimentRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AnalyzeSentimentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.language.v1.AnalyzeSentimentRequest;

                    /**
                     * Decodes an AnalyzeSentimentRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AnalyzeSentimentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.language.v1.AnalyzeSentimentRequest;

                    /**
                     * Verifies an AnalyzeSentimentRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AnalyzeSentimentRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AnalyzeSentimentRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.language.v1.AnalyzeSentimentRequest;

                    /**
                     * Creates a plain object from an AnalyzeSentimentRequest message. Also converts values to other types if specified.
                     * @param message AnalyzeSentimentRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.language.v1.AnalyzeSentimentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AnalyzeSentimentRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an AnalyzeSentimentResponse. */
                interface IAnalyzeSentimentResponse {

                    /** AnalyzeSentimentResponse documentSentiment */
                    documentSentiment?: (google.cloud.language.v1.ISentiment|null);

                    /** AnalyzeSentimentResponse language */
                    language?: (string|null);

                    /** AnalyzeSentimentResponse sentences */
                    sentences?: (google.cloud.language.v1.ISentence[]|null);
                }

                /** Represents an AnalyzeSentimentResponse. */
                class AnalyzeSentimentResponse implements IAnalyzeSentimentResponse {

                    /**
                     * Constructs a new AnalyzeSentimentResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.language.v1.IAnalyzeSentimentResponse);

                    /** AnalyzeSentimentResponse documentSentiment. */
                    public documentSentiment?: (google.cloud.language.v1.ISentiment|null);

                    /** AnalyzeSentimentResponse language. */
                    public language: string;

                    /** AnalyzeSentimentResponse sentences. */
                    public sentences: google.cloud.language.v1.ISentence[];

                    /**
                     * Creates a new AnalyzeSentimentResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AnalyzeSentimentResponse instance
                     */
                    public static create(properties?: google.cloud.language.v1.IAnalyzeSentimentResponse): google.cloud.language.v1.AnalyzeSentimentResponse;

                    /**
                     * Encodes the specified AnalyzeSentimentResponse message. Does not implicitly {@link google.cloud.language.v1.AnalyzeSentimentResponse.verify|verify} messages.
                     * @param message AnalyzeSentimentResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.language.v1.IAnalyzeSentimentResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AnalyzeSentimentResponse message, length delimited. Does not implicitly {@link google.cloud.language.v1.AnalyzeSentimentResponse.verify|verify} messages.
                     * @param message AnalyzeSentimentResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.language.v1.IAnalyzeSentimentResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AnalyzeSentimentResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AnalyzeSentimentResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.language.v1.AnalyzeSentimentResponse;

                    /**
                     * Decodes an AnalyzeSentimentResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AnalyzeSentimentResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.language.v1.AnalyzeSentimentResponse;

                    /**
                     * Verifies an AnalyzeSentimentResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AnalyzeSentimentResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AnalyzeSentimentResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.language.v1.AnalyzeSentimentResponse;

                    /**
                     * Creates a plain object from an AnalyzeSentimentResponse message. Also converts values to other types if specified.
                     * @param message AnalyzeSentimentResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.language.v1.AnalyzeSentimentResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AnalyzeSentimentResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an AnalyzeEntitySentimentRequest. */
                interface IAnalyzeEntitySentimentRequest {

                    /** AnalyzeEntitySentimentRequest document */
                    document?: (google.cloud.language.v1.IDocument|null);

                    /** AnalyzeEntitySentimentRequest encodingType */
                    encodingType?: (google.cloud.language.v1.EncodingType|keyof typeof google.cloud.language.v1.EncodingType|null);
                }

                /** Represents an AnalyzeEntitySentimentRequest. */
                class AnalyzeEntitySentimentRequest implements IAnalyzeEntitySentimentRequest {

                    /**
                     * Constructs a new AnalyzeEntitySentimentRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.language.v1.IAnalyzeEntitySentimentRequest);

                    /** AnalyzeEntitySentimentRequest document. */
                    public document?: (google.cloud.language.v1.IDocument|null);

                    /** AnalyzeEntitySentimentRequest encodingType. */
                    public encodingType: (google.cloud.language.v1.EncodingType|keyof typeof google.cloud.language.v1.EncodingType);

                    /**
                     * Creates a new AnalyzeEntitySentimentRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AnalyzeEntitySentimentRequest instance
                     */
                    public static create(properties?: google.cloud.language.v1.IAnalyzeEntitySentimentRequest): google.cloud.language.v1.AnalyzeEntitySentimentRequest;

                    /**
                     * Encodes the specified AnalyzeEntitySentimentRequest message. Does not implicitly {@link google.cloud.language.v1.AnalyzeEntitySentimentRequest.verify|verify} messages.
                     * @param message AnalyzeEntitySentimentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.language.v1.IAnalyzeEntitySentimentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AnalyzeEntitySentimentRequest message, length delimited. Does not implicitly {@link google.cloud.language.v1.AnalyzeEntitySentimentRequest.verify|verify} messages.
                     * @param message AnalyzeEntitySentimentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.language.v1.IAnalyzeEntitySentimentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AnalyzeEntitySentimentRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AnalyzeEntitySentimentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.language.v1.AnalyzeEntitySentimentRequest;

                    /**
                     * Decodes an AnalyzeEntitySentimentRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AnalyzeEntitySentimentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.language.v1.AnalyzeEntitySentimentRequest;

                    /**
                     * Verifies an AnalyzeEntitySentimentRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AnalyzeEntitySentimentRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AnalyzeEntitySentimentRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.language.v1.AnalyzeEntitySentimentRequest;

                    /**
                     * Creates a plain object from an AnalyzeEntitySentimentRequest message. Also converts values to other types if specified.
                     * @param message AnalyzeEntitySentimentRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.language.v1.AnalyzeEntitySentimentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AnalyzeEntitySentimentRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an AnalyzeEntitySentimentResponse. */
                interface IAnalyzeEntitySentimentResponse {

                    /** AnalyzeEntitySentimentResponse entities */
                    entities?: (google.cloud.language.v1.IEntity[]|null);

                    /** AnalyzeEntitySentimentResponse language */
                    language?: (string|null);
                }

                /** Represents an AnalyzeEntitySentimentResponse. */
                class AnalyzeEntitySentimentResponse implements IAnalyzeEntitySentimentResponse {

                    /**
                     * Constructs a new AnalyzeEntitySentimentResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.language.v1.IAnalyzeEntitySentimentResponse);

                    /** AnalyzeEntitySentimentResponse entities. */
                    public entities: google.cloud.language.v1.IEntity[];

                    /** AnalyzeEntitySentimentResponse language. */
                    public language: string;

                    /**
                     * Creates a new AnalyzeEntitySentimentResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AnalyzeEntitySentimentResponse instance
                     */
                    public static create(properties?: google.cloud.language.v1.IAnalyzeEntitySentimentResponse): google.cloud.language.v1.AnalyzeEntitySentimentResponse;

                    /**
                     * Encodes the specified AnalyzeEntitySentimentResponse message. Does not implicitly {@link google.cloud.language.v1.AnalyzeEntitySentimentResponse.verify|verify} messages.
                     * @param message AnalyzeEntitySentimentResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.language.v1.IAnalyzeEntitySentimentResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AnalyzeEntitySentimentResponse message, length delimited. Does not implicitly {@link google.cloud.language.v1.AnalyzeEntitySentimentResponse.verify|verify} messages.
                     * @param message AnalyzeEntitySentimentResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.language.v1.IAnalyzeEntitySentimentResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AnalyzeEntitySentimentResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AnalyzeEntitySentimentResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.language.v1.AnalyzeEntitySentimentResponse;

                    /**
                     * Decodes an AnalyzeEntitySentimentResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AnalyzeEntitySentimentResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.language.v1.AnalyzeEntitySentimentResponse;

                    /**
                     * Verifies an AnalyzeEntitySentimentResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AnalyzeEntitySentimentResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AnalyzeEntitySentimentResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.language.v1.AnalyzeEntitySentimentResponse;

                    /**
                     * Creates a plain object from an AnalyzeEntitySentimentResponse message. Also converts values to other types if specified.
                     * @param message AnalyzeEntitySentimentResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.language.v1.AnalyzeEntitySentimentResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AnalyzeEntitySentimentResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an AnalyzeEntitiesRequest. */
                interface IAnalyzeEntitiesRequest {

                    /** AnalyzeEntitiesRequest document */
                    document?: (google.cloud.language.v1.IDocument|null);

                    /** AnalyzeEntitiesRequest encodingType */
                    encodingType?: (google.cloud.language.v1.EncodingType|keyof typeof google.cloud.language.v1.EncodingType|null);
                }

                /** Represents an AnalyzeEntitiesRequest. */
                class AnalyzeEntitiesRequest implements IAnalyzeEntitiesRequest {

                    /**
                     * Constructs a new AnalyzeEntitiesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.language.v1.IAnalyzeEntitiesRequest);

                    /** AnalyzeEntitiesRequest document. */
                    public document?: (google.cloud.language.v1.IDocument|null);

                    /** AnalyzeEntitiesRequest encodingType. */
                    public encodingType: (google.cloud.language.v1.EncodingType|keyof typeof google.cloud.language.v1.EncodingType);

                    /**
                     * Creates a new AnalyzeEntitiesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AnalyzeEntitiesRequest instance
                     */
                    public static create(properties?: google.cloud.language.v1.IAnalyzeEntitiesRequest): google.cloud.language.v1.AnalyzeEntitiesRequest;

                    /**
                     * Encodes the specified AnalyzeEntitiesRequest message. Does not implicitly {@link google.cloud.language.v1.AnalyzeEntitiesRequest.verify|verify} messages.
                     * @param message AnalyzeEntitiesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.language.v1.IAnalyzeEntitiesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AnalyzeEntitiesRequest message, length delimited. Does not implicitly {@link google.cloud.language.v1.AnalyzeEntitiesRequest.verify|verify} messages.
                     * @param message AnalyzeEntitiesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.language.v1.IAnalyzeEntitiesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AnalyzeEntitiesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AnalyzeEntitiesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.language.v1.AnalyzeEntitiesRequest;

                    /**
                     * Decodes an AnalyzeEntitiesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AnalyzeEntitiesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.language.v1.AnalyzeEntitiesRequest;

                    /**
                     * Verifies an AnalyzeEntitiesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AnalyzeEntitiesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AnalyzeEntitiesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.language.v1.AnalyzeEntitiesRequest;

                    /**
                     * Creates a plain object from an AnalyzeEntitiesRequest message. Also converts values to other types if specified.
                     * @param message AnalyzeEntitiesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.language.v1.AnalyzeEntitiesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AnalyzeEntitiesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an AnalyzeEntitiesResponse. */
                interface IAnalyzeEntitiesResponse {

                    /** AnalyzeEntitiesResponse entities */
                    entities?: (google.cloud.language.v1.IEntity[]|null);

                    /** AnalyzeEntitiesResponse language */
                    language?: (string|null);
                }

                /** Represents an AnalyzeEntitiesResponse. */
                class AnalyzeEntitiesResponse implements IAnalyzeEntitiesResponse {

                    /**
                     * Constructs a new AnalyzeEntitiesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.language.v1.IAnalyzeEntitiesResponse);

                    /** AnalyzeEntitiesResponse entities. */
                    public entities: google.cloud.language.v1.IEntity[];

                    /** AnalyzeEntitiesResponse language. */
                    public language: string;

                    /**
                     * Creates a new AnalyzeEntitiesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AnalyzeEntitiesResponse instance
                     */
                    public static create(properties?: google.cloud.language.v1.IAnalyzeEntitiesResponse): google.cloud.language.v1.AnalyzeEntitiesResponse;

                    /**
                     * Encodes the specified AnalyzeEntitiesResponse message. Does not implicitly {@link google.cloud.language.v1.AnalyzeEntitiesResponse.verify|verify} messages.
                     * @param message AnalyzeEntitiesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.language.v1.IAnalyzeEntitiesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AnalyzeEntitiesResponse message, length delimited. Does not implicitly {@link google.cloud.language.v1.AnalyzeEntitiesResponse.verify|verify} messages.
                     * @param message AnalyzeEntitiesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.language.v1.IAnalyzeEntitiesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AnalyzeEntitiesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AnalyzeEntitiesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.language.v1.AnalyzeEntitiesResponse;

                    /**
                     * Decodes an AnalyzeEntitiesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AnalyzeEntitiesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.language.v1.AnalyzeEntitiesResponse;

                    /**
                     * Verifies an AnalyzeEntitiesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AnalyzeEntitiesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AnalyzeEntitiesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.language.v1.AnalyzeEntitiesResponse;

                    /**
                     * Creates a plain object from an AnalyzeEntitiesResponse message. Also converts values to other types if specified.
                     * @param message AnalyzeEntitiesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.language.v1.AnalyzeEntitiesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AnalyzeEntitiesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an AnalyzeSyntaxRequest. */
                interface IAnalyzeSyntaxRequest {

                    /** AnalyzeSyntaxRequest document */
                    document?: (google.cloud.language.v1.IDocument|null);

                    /** AnalyzeSyntaxRequest encodingType */
                    encodingType?: (google.cloud.language.v1.EncodingType|keyof typeof google.cloud.language.v1.EncodingType|null);
                }

                /** Represents an AnalyzeSyntaxRequest. */
                class AnalyzeSyntaxRequest implements IAnalyzeSyntaxRequest {

                    /**
                     * Constructs a new AnalyzeSyntaxRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.language.v1.IAnalyzeSyntaxRequest);

                    /** AnalyzeSyntaxRequest document. */
                    public document?: (google.cloud.language.v1.IDocument|null);

                    /** AnalyzeSyntaxRequest encodingType. */
                    public encodingType: (google.cloud.language.v1.EncodingType|keyof typeof google.cloud.language.v1.EncodingType);

                    /**
                     * Creates a new AnalyzeSyntaxRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AnalyzeSyntaxRequest instance
                     */
                    public static create(properties?: google.cloud.language.v1.IAnalyzeSyntaxRequest): google.cloud.language.v1.AnalyzeSyntaxRequest;

                    /**
                     * Encodes the specified AnalyzeSyntaxRequest message. Does not implicitly {@link google.cloud.language.v1.AnalyzeSyntaxRequest.verify|verify} messages.
                     * @param message AnalyzeSyntaxRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.language.v1.IAnalyzeSyntaxRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AnalyzeSyntaxRequest message, length delimited. Does not implicitly {@link google.cloud.language.v1.AnalyzeSyntaxRequest.verify|verify} messages.
                     * @param message AnalyzeSyntaxRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.language.v1.IAnalyzeSyntaxRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AnalyzeSyntaxRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AnalyzeSyntaxRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.language.v1.AnalyzeSyntaxRequest;

                    /**
                     * Decodes an AnalyzeSyntaxRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AnalyzeSyntaxRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.language.v1.AnalyzeSyntaxRequest;

                    /**
                     * Verifies an AnalyzeSyntaxRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AnalyzeSyntaxRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AnalyzeSyntaxRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.language.v1.AnalyzeSyntaxRequest;

                    /**
                     * Creates a plain object from an AnalyzeSyntaxRequest message. Also converts values to other types if specified.
                     * @param message AnalyzeSyntaxRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.language.v1.AnalyzeSyntaxRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AnalyzeSyntaxRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an AnalyzeSyntaxResponse. */
                interface IAnalyzeSyntaxResponse {

                    /** AnalyzeSyntaxResponse sentences */
                    sentences?: (google.cloud.language.v1.ISentence[]|null);

                    /** AnalyzeSyntaxResponse tokens */
                    tokens?: (google.cloud.language.v1.IToken[]|null);

                    /** AnalyzeSyntaxResponse language */
                    language?: (string|null);
                }

                /** Represents an AnalyzeSyntaxResponse. */
                class AnalyzeSyntaxResponse implements IAnalyzeSyntaxResponse {

                    /**
                     * Constructs a new AnalyzeSyntaxResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.language.v1.IAnalyzeSyntaxResponse);

                    /** AnalyzeSyntaxResponse sentences. */
                    public sentences: google.cloud.language.v1.ISentence[];

                    /** AnalyzeSyntaxResponse tokens. */
                    public tokens: google.cloud.language.v1.IToken[];

                    /** AnalyzeSyntaxResponse language. */
                    public language: string;

                    /**
                     * Creates a new AnalyzeSyntaxResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AnalyzeSyntaxResponse instance
                     */
                    public static create(properties?: google.cloud.language.v1.IAnalyzeSyntaxResponse): google.cloud.language.v1.AnalyzeSyntaxResponse;

                    /**
                     * Encodes the specified AnalyzeSyntaxResponse message. Does not implicitly {@link google.cloud.language.v1.AnalyzeSyntaxResponse.verify|verify} messages.
                     * @param message AnalyzeSyntaxResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.language.v1.IAnalyzeSyntaxResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AnalyzeSyntaxResponse message, length delimited. Does not implicitly {@link google.cloud.language.v1.AnalyzeSyntaxResponse.verify|verify} messages.
                     * @param message AnalyzeSyntaxResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.language.v1.IAnalyzeSyntaxResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AnalyzeSyntaxResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AnalyzeSyntaxResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.language.v1.AnalyzeSyntaxResponse;

                    /**
                     * Decodes an AnalyzeSyntaxResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AnalyzeSyntaxResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.language.v1.AnalyzeSyntaxResponse;

                    /**
                     * Verifies an AnalyzeSyntaxResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AnalyzeSyntaxResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AnalyzeSyntaxResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.language.v1.AnalyzeSyntaxResponse;

                    /**
                     * Creates a plain object from an AnalyzeSyntaxResponse message. Also converts values to other types if specified.
                     * @param message AnalyzeSyntaxResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.language.v1.AnalyzeSyntaxResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AnalyzeSyntaxResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ClassifyTextRequest. */
                interface IClassifyTextRequest {

                    /** ClassifyTextRequest document */
                    document?: (google.cloud.language.v1.IDocument|null);
                }

                /** Represents a ClassifyTextRequest. */
                class ClassifyTextRequest implements IClassifyTextRequest {

                    /**
                     * Constructs a new ClassifyTextRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.language.v1.IClassifyTextRequest);

                    /** ClassifyTextRequest document. */
                    public document?: (google.cloud.language.v1.IDocument|null);

                    /**
                     * Creates a new ClassifyTextRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ClassifyTextRequest instance
                     */
                    public static create(properties?: google.cloud.language.v1.IClassifyTextRequest): google.cloud.language.v1.ClassifyTextRequest;

                    /**
                     * Encodes the specified ClassifyTextRequest message. Does not implicitly {@link google.cloud.language.v1.ClassifyTextRequest.verify|verify} messages.
                     * @param message ClassifyTextRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.language.v1.IClassifyTextRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ClassifyTextRequest message, length delimited. Does not implicitly {@link google.cloud.language.v1.ClassifyTextRequest.verify|verify} messages.
                     * @param message ClassifyTextRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.language.v1.IClassifyTextRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ClassifyTextRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ClassifyTextRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.language.v1.ClassifyTextRequest;

                    /**
                     * Decodes a ClassifyTextRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ClassifyTextRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.language.v1.ClassifyTextRequest;

                    /**
                     * Verifies a ClassifyTextRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ClassifyTextRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ClassifyTextRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.language.v1.ClassifyTextRequest;

                    /**
                     * Creates a plain object from a ClassifyTextRequest message. Also converts values to other types if specified.
                     * @param message ClassifyTextRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.language.v1.ClassifyTextRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ClassifyTextRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ClassifyTextResponse. */
                interface IClassifyTextResponse {

                    /** ClassifyTextResponse categories */
                    categories?: (google.cloud.language.v1.IClassificationCategory[]|null);
                }

                /** Represents a ClassifyTextResponse. */
                class ClassifyTextResponse implements IClassifyTextResponse {

                    /**
                     * Constructs a new ClassifyTextResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.language.v1.IClassifyTextResponse);

                    /** ClassifyTextResponse categories. */
                    public categories: google.cloud.language.v1.IClassificationCategory[];

                    /**
                     * Creates a new ClassifyTextResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ClassifyTextResponse instance
                     */
                    public static create(properties?: google.cloud.language.v1.IClassifyTextResponse): google.cloud.language.v1.ClassifyTextResponse;

                    /**
                     * Encodes the specified ClassifyTextResponse message. Does not implicitly {@link google.cloud.language.v1.ClassifyTextResponse.verify|verify} messages.
                     * @param message ClassifyTextResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.language.v1.IClassifyTextResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ClassifyTextResponse message, length delimited. Does not implicitly {@link google.cloud.language.v1.ClassifyTextResponse.verify|verify} messages.
                     * @param message ClassifyTextResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.language.v1.IClassifyTextResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ClassifyTextResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ClassifyTextResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.language.v1.ClassifyTextResponse;

                    /**
                     * Decodes a ClassifyTextResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ClassifyTextResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.language.v1.ClassifyTextResponse;

                    /**
                     * Verifies a ClassifyTextResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ClassifyTextResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ClassifyTextResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.language.v1.ClassifyTextResponse;

                    /**
                     * Creates a plain object from a ClassifyTextResponse message. Also converts values to other types if specified.
                     * @param message ClassifyTextResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.language.v1.ClassifyTextResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ClassifyTextResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an AnnotateTextRequest. */
                interface IAnnotateTextRequest {

                    /** AnnotateTextRequest document */
                    document?: (google.cloud.language.v1.IDocument|null);

                    /** AnnotateTextRequest features */
                    features?: (google.cloud.language.v1.AnnotateTextRequest.IFeatures|null);

                    /** AnnotateTextRequest encodingType */
                    encodingType?: (google.cloud.language.v1.EncodingType|keyof typeof google.cloud.language.v1.EncodingType|null);
                }

                /** Represents an AnnotateTextRequest. */
                class AnnotateTextRequest implements IAnnotateTextRequest {

                    /**
                     * Constructs a new AnnotateTextRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.language.v1.IAnnotateTextRequest);

                    /** AnnotateTextRequest document. */
                    public document?: (google.cloud.language.v1.IDocument|null);

                    /** AnnotateTextRequest features. */
                    public features?: (google.cloud.language.v1.AnnotateTextRequest.IFeatures|null);

                    /** AnnotateTextRequest encodingType. */
                    public encodingType: (google.cloud.language.v1.EncodingType|keyof typeof google.cloud.language.v1.EncodingType);

                    /**
                     * Creates a new AnnotateTextRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AnnotateTextRequest instance
                     */
                    public static create(properties?: google.cloud.language.v1.IAnnotateTextRequest): google.cloud.language.v1.AnnotateTextRequest;

                    /**
                     * Encodes the specified AnnotateTextRequest message. Does not implicitly {@link google.cloud.language.v1.AnnotateTextRequest.verify|verify} messages.
                     * @param message AnnotateTextRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.language.v1.IAnnotateTextRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AnnotateTextRequest message, length delimited. Does not implicitly {@link google.cloud.language.v1.AnnotateTextRequest.verify|verify} messages.
                     * @param message AnnotateTextRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.language.v1.IAnnotateTextRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AnnotateTextRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AnnotateTextRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.language.v1.AnnotateTextRequest;

                    /**
                     * Decodes an AnnotateTextRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AnnotateTextRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.language.v1.AnnotateTextRequest;

                    /**
                     * Verifies an AnnotateTextRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AnnotateTextRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AnnotateTextRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.language.v1.AnnotateTextRequest;

                    /**
                     * Creates a plain object from an AnnotateTextRequest message. Also converts values to other types if specified.
                     * @param message AnnotateTextRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.language.v1.AnnotateTextRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AnnotateTextRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace AnnotateTextRequest {

                    /** Properties of a Features. */
                    interface IFeatures {

                        /** Features extractSyntax */
                        extractSyntax?: (boolean|null);

                        /** Features extractEntities */
                        extractEntities?: (boolean|null);

                        /** Features extractDocumentSentiment */
                        extractDocumentSentiment?: (boolean|null);

                        /** Features extractEntitySentiment */
                        extractEntitySentiment?: (boolean|null);

                        /** Features classifyText */
                        classifyText?: (boolean|null);
                    }

                    /** Represents a Features. */
                    class Features implements IFeatures {

                        /**
                         * Constructs a new Features.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.language.v1.AnnotateTextRequest.IFeatures);

                        /** Features extractSyntax. */
                        public extractSyntax: boolean;

                        /** Features extractEntities. */
                        public extractEntities: boolean;

                        /** Features extractDocumentSentiment. */
                        public extractDocumentSentiment: boolean;

                        /** Features extractEntitySentiment. */
                        public extractEntitySentiment: boolean;

                        /** Features classifyText. */
                        public classifyText: boolean;

                        /**
                         * Creates a new Features instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Features instance
                         */
                        public static create(properties?: google.cloud.language.v1.AnnotateTextRequest.IFeatures): google.cloud.language.v1.AnnotateTextRequest.Features;

                        /**
                         * Encodes the specified Features message. Does not implicitly {@link google.cloud.language.v1.AnnotateTextRequest.Features.verify|verify} messages.
                         * @param message Features message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.language.v1.AnnotateTextRequest.IFeatures, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Features message, length delimited. Does not implicitly {@link google.cloud.language.v1.AnnotateTextRequest.Features.verify|verify} messages.
                         * @param message Features message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.language.v1.AnnotateTextRequest.IFeatures, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Features message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Features
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.language.v1.AnnotateTextRequest.Features;

                        /**
                         * Decodes a Features message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Features
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.language.v1.AnnotateTextRequest.Features;

                        /**
                         * Verifies a Features message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Features message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Features
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.language.v1.AnnotateTextRequest.Features;

                        /**
                         * Creates a plain object from a Features message. Also converts values to other types if specified.
                         * @param message Features
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.language.v1.AnnotateTextRequest.Features, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Features to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Properties of an AnnotateTextResponse. */
                interface IAnnotateTextResponse {

                    /** AnnotateTextResponse sentences */
                    sentences?: (google.cloud.language.v1.ISentence[]|null);

                    /** AnnotateTextResponse tokens */
                    tokens?: (google.cloud.language.v1.IToken[]|null);

                    /** AnnotateTextResponse entities */
                    entities?: (google.cloud.language.v1.IEntity[]|null);

                    /** AnnotateTextResponse documentSentiment */
                    documentSentiment?: (google.cloud.language.v1.ISentiment|null);

                    /** AnnotateTextResponse language */
                    language?: (string|null);

                    /** AnnotateTextResponse categories */
                    categories?: (google.cloud.language.v1.IClassificationCategory[]|null);
                }

                /** Represents an AnnotateTextResponse. */
                class AnnotateTextResponse implements IAnnotateTextResponse {

                    /**
                     * Constructs a new AnnotateTextResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.language.v1.IAnnotateTextResponse);

                    /** AnnotateTextResponse sentences. */
                    public sentences: google.cloud.language.v1.ISentence[];

                    /** AnnotateTextResponse tokens. */
                    public tokens: google.cloud.language.v1.IToken[];

                    /** AnnotateTextResponse entities. */
                    public entities: google.cloud.language.v1.IEntity[];

                    /** AnnotateTextResponse documentSentiment. */
                    public documentSentiment?: (google.cloud.language.v1.ISentiment|null);

                    /** AnnotateTextResponse language. */
                    public language: string;

                    /** AnnotateTextResponse categories. */
                    public categories: google.cloud.language.v1.IClassificationCategory[];

                    /**
                     * Creates a new AnnotateTextResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AnnotateTextResponse instance
                     */
                    public static create(properties?: google.cloud.language.v1.IAnnotateTextResponse): google.cloud.language.v1.AnnotateTextResponse;

                    /**
                     * Encodes the specified AnnotateTextResponse message. Does not implicitly {@link google.cloud.language.v1.AnnotateTextResponse.verify|verify} messages.
                     * @param message AnnotateTextResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.language.v1.IAnnotateTextResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AnnotateTextResponse message, length delimited. Does not implicitly {@link google.cloud.language.v1.AnnotateTextResponse.verify|verify} messages.
                     * @param message AnnotateTextResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.language.v1.IAnnotateTextResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AnnotateTextResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AnnotateTextResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.language.v1.AnnotateTextResponse;

                    /**
                     * Decodes an AnnotateTextResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AnnotateTextResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.language.v1.AnnotateTextResponse;

                    /**
                     * Verifies an AnnotateTextResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AnnotateTextResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AnnotateTextResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.language.v1.AnnotateTextResponse;

                    /**
                     * Creates a plain object from an AnnotateTextResponse message. Also converts values to other types if specified.
                     * @param message AnnotateTextResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.language.v1.AnnotateTextResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AnnotateTextResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Namespace v1beta2. */
            namespace v1beta2 {

                /** Represents a LanguageService */
                class LanguageService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new LanguageService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new LanguageService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): LanguageService;

                    /**
                     * Calls AnalyzeSentiment.
                     * @param request AnalyzeSentimentRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and AnalyzeSentimentResponse
                     */
                    public analyzeSentiment(request: google.cloud.language.v1beta2.IAnalyzeSentimentRequest, callback: google.cloud.language.v1beta2.LanguageService.AnalyzeSentimentCallback): void;

                    /**
                     * Calls AnalyzeSentiment.
                     * @param request AnalyzeSentimentRequest message or plain object
                     * @returns Promise
                     */
                    public analyzeSentiment(request: google.cloud.language.v1beta2.IAnalyzeSentimentRequest): Promise<google.cloud.language.v1beta2.AnalyzeSentimentResponse>;

                    /**
                     * Calls AnalyzeEntities.
                     * @param request AnalyzeEntitiesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and AnalyzeEntitiesResponse
                     */
                    public analyzeEntities(request: google.cloud.language.v1beta2.IAnalyzeEntitiesRequest, callback: google.cloud.language.v1beta2.LanguageService.AnalyzeEntitiesCallback): void;

                    /**
                     * Calls AnalyzeEntities.
                     * @param request AnalyzeEntitiesRequest message or plain object
                     * @returns Promise
                     */
                    public analyzeEntities(request: google.cloud.language.v1beta2.IAnalyzeEntitiesRequest): Promise<google.cloud.language.v1beta2.AnalyzeEntitiesResponse>;

                    /**
                     * Calls AnalyzeEntitySentiment.
                     * @param request AnalyzeEntitySentimentRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and AnalyzeEntitySentimentResponse
                     */
                    public analyzeEntitySentiment(request: google.cloud.language.v1beta2.IAnalyzeEntitySentimentRequest, callback: google.cloud.language.v1beta2.LanguageService.AnalyzeEntitySentimentCallback): void;

                    /**
                     * Calls AnalyzeEntitySentiment.
                     * @param request AnalyzeEntitySentimentRequest message or plain object
                     * @returns Promise
                     */
                    public analyzeEntitySentiment(request: google.cloud.language.v1beta2.IAnalyzeEntitySentimentRequest): Promise<google.cloud.language.v1beta2.AnalyzeEntitySentimentResponse>;

                    /**
                     * Calls AnalyzeSyntax.
                     * @param request AnalyzeSyntaxRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and AnalyzeSyntaxResponse
                     */
                    public analyzeSyntax(request: google.cloud.language.v1beta2.IAnalyzeSyntaxRequest, callback: google.cloud.language.v1beta2.LanguageService.AnalyzeSyntaxCallback): void;

                    /**
                     * Calls AnalyzeSyntax.
                     * @param request AnalyzeSyntaxRequest message or plain object
                     * @returns Promise
                     */
                    public analyzeSyntax(request: google.cloud.language.v1beta2.IAnalyzeSyntaxRequest): Promise<google.cloud.language.v1beta2.AnalyzeSyntaxResponse>;

                    /**
                     * Calls ClassifyText.
                     * @param request ClassifyTextRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ClassifyTextResponse
                     */
                    public classifyText(request: google.cloud.language.v1beta2.IClassifyTextRequest, callback: google.cloud.language.v1beta2.LanguageService.ClassifyTextCallback): void;

                    /**
                     * Calls ClassifyText.
                     * @param request ClassifyTextRequest message or plain object
                     * @returns Promise
                     */
                    public classifyText(request: google.cloud.language.v1beta2.IClassifyTextRequest): Promise<google.cloud.language.v1beta2.ClassifyTextResponse>;

                    /**
                     * Calls AnnotateText.
                     * @param request AnnotateTextRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and AnnotateTextResponse
                     */
                    public annotateText(request: google.cloud.language.v1beta2.IAnnotateTextRequest, callback: google.cloud.language.v1beta2.LanguageService.AnnotateTextCallback): void;

                    /**
                     * Calls AnnotateText.
                     * @param request AnnotateTextRequest message or plain object
                     * @returns Promise
                     */
                    public annotateText(request: google.cloud.language.v1beta2.IAnnotateTextRequest): Promise<google.cloud.language.v1beta2.AnnotateTextResponse>;
                }

                namespace LanguageService {

                    /**
                     * Callback as used by {@link google.cloud.language.v1beta2.LanguageService#analyzeSentiment}.
                     * @param error Error, if any
                     * @param [response] AnalyzeSentimentResponse
                     */
                    type AnalyzeSentimentCallback = (error: (Error|null), response?: google.cloud.language.v1beta2.AnalyzeSentimentResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.language.v1beta2.LanguageService#analyzeEntities}.
                     * @param error Error, if any
                     * @param [response] AnalyzeEntitiesResponse
                     */
                    type AnalyzeEntitiesCallback = (error: (Error|null), response?: google.cloud.language.v1beta2.AnalyzeEntitiesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.language.v1beta2.LanguageService#analyzeEntitySentiment}.
                     * @param error Error, if any
                     * @param [response] AnalyzeEntitySentimentResponse
                     */
                    type AnalyzeEntitySentimentCallback = (error: (Error|null), response?: google.cloud.language.v1beta2.AnalyzeEntitySentimentResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.language.v1beta2.LanguageService#analyzeSyntax}.
                     * @param error Error, if any
                     * @param [response] AnalyzeSyntaxResponse
                     */
                    type AnalyzeSyntaxCallback = (error: (Error|null), response?: google.cloud.language.v1beta2.AnalyzeSyntaxResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.language.v1beta2.LanguageService#classifyText}.
                     * @param error Error, if any
                     * @param [response] ClassifyTextResponse
                     */
                    type ClassifyTextCallback = (error: (Error|null), response?: google.cloud.language.v1beta2.ClassifyTextResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.language.v1beta2.LanguageService#annotateText}.
                     * @param error Error, if any
                     * @param [response] AnnotateTextResponse
                     */
                    type AnnotateTextCallback = (error: (Error|null), response?: google.cloud.language.v1beta2.AnnotateTextResponse) => void;
                }

                /** Properties of a Document. */
                interface IDocument {

                    /** Document type */
                    type?: (google.cloud.language.v1beta2.Document.Type|keyof typeof google.cloud.language.v1beta2.Document.Type|null);

                    /** Document content */
                    content?: (string|null);

                    /** Document gcsContentUri */
                    gcsContentUri?: (string|null);

                    /** Document language */
                    language?: (string|null);
                }

                /** Represents a Document. */
                class Document implements IDocument {

                    /**
                     * Constructs a new Document.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.language.v1beta2.IDocument);

                    /** Document type. */
                    public type: (google.cloud.language.v1beta2.Document.Type|keyof typeof google.cloud.language.v1beta2.Document.Type);

                    /** Document content. */
                    public content?: (string|null);

                    /** Document gcsContentUri. */
                    public gcsContentUri?: (string|null);

                    /** Document language. */
                    public language: string;

                    /** Document source. */
                    public source?: ("content"|"gcsContentUri");

                    /**
                     * Creates a new Document instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Document instance
                     */
                    public static create(properties?: google.cloud.language.v1beta2.IDocument): google.cloud.language.v1beta2.Document;

                    /**
                     * Encodes the specified Document message. Does not implicitly {@link google.cloud.language.v1beta2.Document.verify|verify} messages.
                     * @param message Document message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.language.v1beta2.IDocument, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Document message, length delimited. Does not implicitly {@link google.cloud.language.v1beta2.Document.verify|verify} messages.
                     * @param message Document message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.language.v1beta2.IDocument, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Document message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Document
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.language.v1beta2.Document;

                    /**
                     * Decodes a Document message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Document
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.language.v1beta2.Document;

                    /**
                     * Verifies a Document message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Document message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Document
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.language.v1beta2.Document;

                    /**
                     * Creates a plain object from a Document message. Also converts values to other types if specified.
                     * @param message Document
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.language.v1beta2.Document, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Document to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Document {

                    /** Type enum. */
                    enum Type {
                        TYPE_UNSPECIFIED = 0,
                        PLAIN_TEXT = 1,
                        HTML = 2
                    }
                }

                /** Properties of a Sentence. */
                interface ISentence {

                    /** Sentence text */
                    text?: (google.cloud.language.v1beta2.ITextSpan|null);

                    /** Sentence sentiment */
                    sentiment?: (google.cloud.language.v1beta2.ISentiment|null);
                }

                /** Represents a Sentence. */
                class Sentence implements ISentence {

                    /**
                     * Constructs a new Sentence.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.language.v1beta2.ISentence);

                    /** Sentence text. */
                    public text?: (google.cloud.language.v1beta2.ITextSpan|null);

                    /** Sentence sentiment. */
                    public sentiment?: (google.cloud.language.v1beta2.ISentiment|null);

                    /**
                     * Creates a new Sentence instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Sentence instance
                     */
                    public static create(properties?: google.cloud.language.v1beta2.ISentence): google.cloud.language.v1beta2.Sentence;

                    /**
                     * Encodes the specified Sentence message. Does not implicitly {@link google.cloud.language.v1beta2.Sentence.verify|verify} messages.
                     * @param message Sentence message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.language.v1beta2.ISentence, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Sentence message, length delimited. Does not implicitly {@link google.cloud.language.v1beta2.Sentence.verify|verify} messages.
                     * @param message Sentence message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.language.v1beta2.ISentence, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Sentence message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Sentence
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.language.v1beta2.Sentence;

                    /**
                     * Decodes a Sentence message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Sentence
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.language.v1beta2.Sentence;

                    /**
                     * Verifies a Sentence message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Sentence message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Sentence
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.language.v1beta2.Sentence;

                    /**
                     * Creates a plain object from a Sentence message. Also converts values to other types if specified.
                     * @param message Sentence
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.language.v1beta2.Sentence, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Sentence to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an Entity. */
                interface IEntity {

                    /** Entity name */
                    name?: (string|null);

                    /** Entity type */
                    type?: (google.cloud.language.v1beta2.Entity.Type|keyof typeof google.cloud.language.v1beta2.Entity.Type|null);

                    /** Entity metadata */
                    metadata?: ({ [k: string]: string }|null);

                    /** Entity salience */
                    salience?: (number|null);

                    /** Entity mentions */
                    mentions?: (google.cloud.language.v1beta2.IEntityMention[]|null);

                    /** Entity sentiment */
                    sentiment?: (google.cloud.language.v1beta2.ISentiment|null);
                }

                /** Represents an Entity. */
                class Entity implements IEntity {

                    /**
                     * Constructs a new Entity.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.language.v1beta2.IEntity);

                    /** Entity name. */
                    public name: string;

                    /** Entity type. */
                    public type: (google.cloud.language.v1beta2.Entity.Type|keyof typeof google.cloud.language.v1beta2.Entity.Type);

                    /** Entity metadata. */
                    public metadata: { [k: string]: string };

                    /** Entity salience. */
                    public salience: number;

                    /** Entity mentions. */
                    public mentions: google.cloud.language.v1beta2.IEntityMention[];

                    /** Entity sentiment. */
                    public sentiment?: (google.cloud.language.v1beta2.ISentiment|null);

                    /**
                     * Creates a new Entity instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Entity instance
                     */
                    public static create(properties?: google.cloud.language.v1beta2.IEntity): google.cloud.language.v1beta2.Entity;

                    /**
                     * Encodes the specified Entity message. Does not implicitly {@link google.cloud.language.v1beta2.Entity.verify|verify} messages.
                     * @param message Entity message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.language.v1beta2.IEntity, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Entity message, length delimited. Does not implicitly {@link google.cloud.language.v1beta2.Entity.verify|verify} messages.
                     * @param message Entity message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.language.v1beta2.IEntity, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Entity message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Entity
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.language.v1beta2.Entity;

                    /**
                     * Decodes an Entity message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Entity
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.language.v1beta2.Entity;

                    /**
                     * Verifies an Entity message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Entity message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Entity
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.language.v1beta2.Entity;

                    /**
                     * Creates a plain object from an Entity message. Also converts values to other types if specified.
                     * @param message Entity
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.language.v1beta2.Entity, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Entity to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Entity {

                    /** Type enum. */
                    enum Type {
                        UNKNOWN = 0,
                        PERSON = 1,
                        LOCATION = 2,
                        ORGANIZATION = 3,
                        EVENT = 4,
                        WORK_OF_ART = 5,
                        CONSUMER_GOOD = 6,
                        OTHER = 7,
                        PHONE_NUMBER = 9,
                        ADDRESS = 10,
                        DATE = 11,
                        NUMBER = 12,
                        PRICE = 13
                    }
                }

                /** Properties of a Token. */
                interface IToken {

                    /** Token text */
                    text?: (google.cloud.language.v1beta2.ITextSpan|null);

                    /** Token partOfSpeech */
                    partOfSpeech?: (google.cloud.language.v1beta2.IPartOfSpeech|null);

                    /** Token dependencyEdge */
                    dependencyEdge?: (google.cloud.language.v1beta2.IDependencyEdge|null);

                    /** Token lemma */
                    lemma?: (string|null);
                }

                /** Represents a Token. */
                class Token implements IToken {

                    /**
                     * Constructs a new Token.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.language.v1beta2.IToken);

                    /** Token text. */
                    public text?: (google.cloud.language.v1beta2.ITextSpan|null);

                    /** Token partOfSpeech. */
                    public partOfSpeech?: (google.cloud.language.v1beta2.IPartOfSpeech|null);

                    /** Token dependencyEdge. */
                    public dependencyEdge?: (google.cloud.language.v1beta2.IDependencyEdge|null);

                    /** Token lemma. */
                    public lemma: string;

                    /**
                     * Creates a new Token instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Token instance
                     */
                    public static create(properties?: google.cloud.language.v1beta2.IToken): google.cloud.language.v1beta2.Token;

                    /**
                     * Encodes the specified Token message. Does not implicitly {@link google.cloud.language.v1beta2.Token.verify|verify} messages.
                     * @param message Token message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.language.v1beta2.IToken, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Token message, length delimited. Does not implicitly {@link google.cloud.language.v1beta2.Token.verify|verify} messages.
                     * @param message Token message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.language.v1beta2.IToken, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Token message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Token
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.language.v1beta2.Token;

                    /**
                     * Decodes a Token message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Token
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.language.v1beta2.Token;

                    /**
                     * Verifies a Token message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Token message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Token
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.language.v1beta2.Token;

                    /**
                     * Creates a plain object from a Token message. Also converts values to other types if specified.
                     * @param message Token
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.language.v1beta2.Token, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Token to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** EncodingType enum. */
                enum EncodingType {
                    NONE = 0,
                    UTF8 = 1,
                    UTF16 = 2,
                    UTF32 = 3
                }

                /** Properties of a Sentiment. */
                interface ISentiment {

                    /** Sentiment magnitude */
                    magnitude?: (number|null);

                    /** Sentiment score */
                    score?: (number|null);
                }

                /** Represents a Sentiment. */
                class Sentiment implements ISentiment {

                    /**
                     * Constructs a new Sentiment.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.language.v1beta2.ISentiment);

                    /** Sentiment magnitude. */
                    public magnitude: number;

                    /** Sentiment score. */
                    public score: number;

                    /**
                     * Creates a new Sentiment instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Sentiment instance
                     */
                    public static create(properties?: google.cloud.language.v1beta2.ISentiment): google.cloud.language.v1beta2.Sentiment;

                    /**
                     * Encodes the specified Sentiment message. Does not implicitly {@link google.cloud.language.v1beta2.Sentiment.verify|verify} messages.
                     * @param message Sentiment message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.language.v1beta2.ISentiment, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Sentiment message, length delimited. Does not implicitly {@link google.cloud.language.v1beta2.Sentiment.verify|verify} messages.
                     * @param message Sentiment message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.language.v1beta2.ISentiment, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Sentiment message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Sentiment
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.language.v1beta2.Sentiment;

                    /**
                     * Decodes a Sentiment message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Sentiment
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.language.v1beta2.Sentiment;

                    /**
                     * Verifies a Sentiment message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Sentiment message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Sentiment
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.language.v1beta2.Sentiment;

                    /**
                     * Creates a plain object from a Sentiment message. Also converts values to other types if specified.
                     * @param message Sentiment
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.language.v1beta2.Sentiment, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Sentiment to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PartOfSpeech. */
                interface IPartOfSpeech {

                    /** PartOfSpeech tag */
                    tag?: (google.cloud.language.v1beta2.PartOfSpeech.Tag|keyof typeof google.cloud.language.v1beta2.PartOfSpeech.Tag|null);

                    /** PartOfSpeech aspect */
                    aspect?: (google.cloud.language.v1beta2.PartOfSpeech.Aspect|keyof typeof google.cloud.language.v1beta2.PartOfSpeech.Aspect|null);

                    /** PartOfSpeech case */
                    "case"?: (google.cloud.language.v1beta2.PartOfSpeech.Case|keyof typeof google.cloud.language.v1beta2.PartOfSpeech.Case|null);

                    /** PartOfSpeech form */
                    form?: (google.cloud.language.v1beta2.PartOfSpeech.Form|keyof typeof google.cloud.language.v1beta2.PartOfSpeech.Form|null);

                    /** PartOfSpeech gender */
                    gender?: (google.cloud.language.v1beta2.PartOfSpeech.Gender|keyof typeof google.cloud.language.v1beta2.PartOfSpeech.Gender|null);

                    /** PartOfSpeech mood */
                    mood?: (google.cloud.language.v1beta2.PartOfSpeech.Mood|keyof typeof google.cloud.language.v1beta2.PartOfSpeech.Mood|null);

                    /** PartOfSpeech number */
                    number?: (google.cloud.language.v1beta2.PartOfSpeech.Number|keyof typeof google.cloud.language.v1beta2.PartOfSpeech.Number|null);

                    /** PartOfSpeech person */
                    person?: (google.cloud.language.v1beta2.PartOfSpeech.Person|keyof typeof google.cloud.language.v1beta2.PartOfSpeech.Person|null);

                    /** PartOfSpeech proper */
                    proper?: (google.cloud.language.v1beta2.PartOfSpeech.Proper|keyof typeof google.cloud.language.v1beta2.PartOfSpeech.Proper|null);

                    /** PartOfSpeech reciprocity */
                    reciprocity?: (google.cloud.language.v1beta2.PartOfSpeech.Reciprocity|keyof typeof google.cloud.language.v1beta2.PartOfSpeech.Reciprocity|null);

                    /** PartOfSpeech tense */
                    tense?: (google.cloud.language.v1beta2.PartOfSpeech.Tense|keyof typeof google.cloud.language.v1beta2.PartOfSpeech.Tense|null);

                    /** PartOfSpeech voice */
                    voice?: (google.cloud.language.v1beta2.PartOfSpeech.Voice|keyof typeof google.cloud.language.v1beta2.PartOfSpeech.Voice|null);
                }

                /** Represents a PartOfSpeech. */
                class PartOfSpeech implements IPartOfSpeech {

                    /**
                     * Constructs a new PartOfSpeech.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.language.v1beta2.IPartOfSpeech);

                    /** PartOfSpeech tag. */
                    public tag: (google.cloud.language.v1beta2.PartOfSpeech.Tag|keyof typeof google.cloud.language.v1beta2.PartOfSpeech.Tag);

                    /** PartOfSpeech aspect. */
                    public aspect: (google.cloud.language.v1beta2.PartOfSpeech.Aspect|keyof typeof google.cloud.language.v1beta2.PartOfSpeech.Aspect);

                    /** PartOfSpeech case. */
                    public case: (google.cloud.language.v1beta2.PartOfSpeech.Case|keyof typeof google.cloud.language.v1beta2.PartOfSpeech.Case);

                    /** PartOfSpeech form. */
                    public form: (google.cloud.language.v1beta2.PartOfSpeech.Form|keyof typeof google.cloud.language.v1beta2.PartOfSpeech.Form);

                    /** PartOfSpeech gender. */
                    public gender: (google.cloud.language.v1beta2.PartOfSpeech.Gender|keyof typeof google.cloud.language.v1beta2.PartOfSpeech.Gender);

                    /** PartOfSpeech mood. */
                    public mood: (google.cloud.language.v1beta2.PartOfSpeech.Mood|keyof typeof google.cloud.language.v1beta2.PartOfSpeech.Mood);

                    /** PartOfSpeech number. */
                    public number: (google.cloud.language.v1beta2.PartOfSpeech.Number|keyof typeof google.cloud.language.v1beta2.PartOfSpeech.Number);

                    /** PartOfSpeech person. */
                    public person: (google.cloud.language.v1beta2.PartOfSpeech.Person|keyof typeof google.cloud.language.v1beta2.PartOfSpeech.Person);

                    /** PartOfSpeech proper. */
                    public proper: (google.cloud.language.v1beta2.PartOfSpeech.Proper|keyof typeof google.cloud.language.v1beta2.PartOfSpeech.Proper);

                    /** PartOfSpeech reciprocity. */
                    public reciprocity: (google.cloud.language.v1beta2.PartOfSpeech.Reciprocity|keyof typeof google.cloud.language.v1beta2.PartOfSpeech.Reciprocity);

                    /** PartOfSpeech tense. */
                    public tense: (google.cloud.language.v1beta2.PartOfSpeech.Tense|keyof typeof google.cloud.language.v1beta2.PartOfSpeech.Tense);

                    /** PartOfSpeech voice. */
                    public voice: (google.cloud.language.v1beta2.PartOfSpeech.Voice|keyof typeof google.cloud.language.v1beta2.PartOfSpeech.Voice);

                    /**
                     * Creates a new PartOfSpeech instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PartOfSpeech instance
                     */
                    public static create(properties?: google.cloud.language.v1beta2.IPartOfSpeech): google.cloud.language.v1beta2.PartOfSpeech;

                    /**
                     * Encodes the specified PartOfSpeech message. Does not implicitly {@link google.cloud.language.v1beta2.PartOfSpeech.verify|verify} messages.
                     * @param message PartOfSpeech message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.language.v1beta2.IPartOfSpeech, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PartOfSpeech message, length delimited. Does not implicitly {@link google.cloud.language.v1beta2.PartOfSpeech.verify|verify} messages.
                     * @param message PartOfSpeech message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.language.v1beta2.IPartOfSpeech, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PartOfSpeech message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PartOfSpeech
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.language.v1beta2.PartOfSpeech;

                    /**
                     * Decodes a PartOfSpeech message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PartOfSpeech
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.language.v1beta2.PartOfSpeech;

                    /**
                     * Verifies a PartOfSpeech message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PartOfSpeech message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PartOfSpeech
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.language.v1beta2.PartOfSpeech;

                    /**
                     * Creates a plain object from a PartOfSpeech message. Also converts values to other types if specified.
                     * @param message PartOfSpeech
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.language.v1beta2.PartOfSpeech, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PartOfSpeech to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace PartOfSpeech {

                    /** Tag enum. */
                    enum Tag {
                        UNKNOWN = 0,
                        ADJ = 1,
                        ADP = 2,
                        ADV = 3,
                        CONJ = 4,
                        DET = 5,
                        NOUN = 6,
                        NUM = 7,
                        PRON = 8,
                        PRT = 9,
                        PUNCT = 10,
                        VERB = 11,
                        X = 12,
                        AFFIX = 13
                    }

                    /** Aspect enum. */
                    enum Aspect {
                        ASPECT_UNKNOWN = 0,
                        PERFECTIVE = 1,
                        IMPERFECTIVE = 2,
                        PROGRESSIVE = 3
                    }

                    /** Case enum. */
                    enum Case {
                        CASE_UNKNOWN = 0,
                        ACCUSATIVE = 1,
                        ADVERBIAL = 2,
                        COMPLEMENTIVE = 3,
                        DATIVE = 4,
                        GENITIVE = 5,
                        INSTRUMENTAL = 6,
                        LOCATIVE = 7,
                        NOMINATIVE = 8,
                        OBLIQUE = 9,
                        PARTITIVE = 10,
                        PREPOSITIONAL = 11,
                        REFLEXIVE_CASE = 12,
                        RELATIVE_CASE = 13,
                        VOCATIVE = 14
                    }

                    /** Form enum. */
                    enum Form {
                        FORM_UNKNOWN = 0,
                        ADNOMIAL = 1,
                        AUXILIARY = 2,
                        COMPLEMENTIZER = 3,
                        FINAL_ENDING = 4,
                        GERUND = 5,
                        REALIS = 6,
                        IRREALIS = 7,
                        SHORT = 8,
                        LONG = 9,
                        ORDER = 10,
                        SPECIFIC = 11
                    }

                    /** Gender enum. */
                    enum Gender {
                        GENDER_UNKNOWN = 0,
                        FEMININE = 1,
                        MASCULINE = 2,
                        NEUTER = 3
                    }

                    /** Mood enum. */
                    enum Mood {
                        MOOD_UNKNOWN = 0,
                        CONDITIONAL_MOOD = 1,
                        IMPERATIVE = 2,
                        INDICATIVE = 3,
                        INTERROGATIVE = 4,
                        JUSSIVE = 5,
                        SUBJUNCTIVE = 6
                    }

                    /** Number enum. */
                    enum Number {
                        NUMBER_UNKNOWN = 0,
                        SINGULAR = 1,
                        PLURAL = 2,
                        DUAL = 3
                    }

                    /** Person enum. */
                    enum Person {
                        PERSON_UNKNOWN = 0,
                        FIRST = 1,
                        SECOND = 2,
                        THIRD = 3,
                        REFLEXIVE_PERSON = 4
                    }

                    /** Proper enum. */
                    enum Proper {
                        PROPER_UNKNOWN = 0,
                        PROPER = 1,
                        NOT_PROPER = 2
                    }

                    /** Reciprocity enum. */
                    enum Reciprocity {
                        RECIPROCITY_UNKNOWN = 0,
                        RECIPROCAL = 1,
                        NON_RECIPROCAL = 2
                    }

                    /** Tense enum. */
                    enum Tense {
                        TENSE_UNKNOWN = 0,
                        CONDITIONAL_TENSE = 1,
                        FUTURE = 2,
                        PAST = 3,
                        PRESENT = 4,
                        IMPERFECT = 5,
                        PLUPERFECT = 6
                    }

                    /** Voice enum. */
                    enum Voice {
                        VOICE_UNKNOWN = 0,
                        ACTIVE = 1,
                        CAUSATIVE = 2,
                        PASSIVE = 3
                    }
                }

                /** Properties of a DependencyEdge. */
                interface IDependencyEdge {

                    /** DependencyEdge headTokenIndex */
                    headTokenIndex?: (number|null);

                    /** DependencyEdge label */
                    label?: (google.cloud.language.v1beta2.DependencyEdge.Label|keyof typeof google.cloud.language.v1beta2.DependencyEdge.Label|null);
                }

                /** Represents a DependencyEdge. */
                class DependencyEdge implements IDependencyEdge {

                    /**
                     * Constructs a new DependencyEdge.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.language.v1beta2.IDependencyEdge);

                    /** DependencyEdge headTokenIndex. */
                    public headTokenIndex: number;

                    /** DependencyEdge label. */
                    public label: (google.cloud.language.v1beta2.DependencyEdge.Label|keyof typeof google.cloud.language.v1beta2.DependencyEdge.Label);

                    /**
                     * Creates a new DependencyEdge instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DependencyEdge instance
                     */
                    public static create(properties?: google.cloud.language.v1beta2.IDependencyEdge): google.cloud.language.v1beta2.DependencyEdge;

                    /**
                     * Encodes the specified DependencyEdge message. Does not implicitly {@link google.cloud.language.v1beta2.DependencyEdge.verify|verify} messages.
                     * @param message DependencyEdge message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.language.v1beta2.IDependencyEdge, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DependencyEdge message, length delimited. Does not implicitly {@link google.cloud.language.v1beta2.DependencyEdge.verify|verify} messages.
                     * @param message DependencyEdge message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.language.v1beta2.IDependencyEdge, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DependencyEdge message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DependencyEdge
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.language.v1beta2.DependencyEdge;

                    /**
                     * Decodes a DependencyEdge message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DependencyEdge
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.language.v1beta2.DependencyEdge;

                    /**
                     * Verifies a DependencyEdge message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DependencyEdge message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DependencyEdge
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.language.v1beta2.DependencyEdge;

                    /**
                     * Creates a plain object from a DependencyEdge message. Also converts values to other types if specified.
                     * @param message DependencyEdge
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.language.v1beta2.DependencyEdge, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DependencyEdge to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace DependencyEdge {

                    /** Label enum. */
                    enum Label {
                        UNKNOWN = 0,
                        ABBREV = 1,
                        ACOMP = 2,
                        ADVCL = 3,
                        ADVMOD = 4,
                        AMOD = 5,
                        APPOS = 6,
                        ATTR = 7,
                        AUX = 8,
                        AUXPASS = 9,
                        CC = 10,
                        CCOMP = 11,
                        CONJ = 12,
                        CSUBJ = 13,
                        CSUBJPASS = 14,
                        DEP = 15,
                        DET = 16,
                        DISCOURSE = 17,
                        DOBJ = 18,
                        EXPL = 19,
                        GOESWITH = 20,
                        IOBJ = 21,
                        MARK = 22,
                        MWE = 23,
                        MWV = 24,
                        NEG = 25,
                        NN = 26,
                        NPADVMOD = 27,
                        NSUBJ = 28,
                        NSUBJPASS = 29,
                        NUM = 30,
                        NUMBER = 31,
                        P = 32,
                        PARATAXIS = 33,
                        PARTMOD = 34,
                        PCOMP = 35,
                        POBJ = 36,
                        POSS = 37,
                        POSTNEG = 38,
                        PRECOMP = 39,
                        PRECONJ = 40,
                        PREDET = 41,
                        PREF = 42,
                        PREP = 43,
                        PRONL = 44,
                        PRT = 45,
                        PS = 46,
                        QUANTMOD = 47,
                        RCMOD = 48,
                        RCMODREL = 49,
                        RDROP = 50,
                        REF = 51,
                        REMNANT = 52,
                        REPARANDUM = 53,
                        ROOT = 54,
                        SNUM = 55,
                        SUFF = 56,
                        TMOD = 57,
                        TOPIC = 58,
                        VMOD = 59,
                        VOCATIVE = 60,
                        XCOMP = 61,
                        SUFFIX = 62,
                        TITLE = 63,
                        ADVPHMOD = 64,
                        AUXCAUS = 65,
                        AUXVV = 66,
                        DTMOD = 67,
                        FOREIGN = 68,
                        KW = 69,
                        LIST = 70,
                        NOMC = 71,
                        NOMCSUBJ = 72,
                        NOMCSUBJPASS = 73,
                        NUMC = 74,
                        COP = 75,
                        DISLOCATED = 76,
                        ASP = 77,
                        GMOD = 78,
                        GOBJ = 79,
                        INFMOD = 80,
                        MES = 81,
                        NCOMP = 82
                    }
                }

                /** Properties of an EntityMention. */
                interface IEntityMention {

                    /** EntityMention text */
                    text?: (google.cloud.language.v1beta2.ITextSpan|null);

                    /** EntityMention type */
                    type?: (google.cloud.language.v1beta2.EntityMention.Type|keyof typeof google.cloud.language.v1beta2.EntityMention.Type|null);

                    /** EntityMention sentiment */
                    sentiment?: (google.cloud.language.v1beta2.ISentiment|null);
                }

                /** Represents an EntityMention. */
                class EntityMention implements IEntityMention {

                    /**
                     * Constructs a new EntityMention.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.language.v1beta2.IEntityMention);

                    /** EntityMention text. */
                    public text?: (google.cloud.language.v1beta2.ITextSpan|null);

                    /** EntityMention type. */
                    public type: (google.cloud.language.v1beta2.EntityMention.Type|keyof typeof google.cloud.language.v1beta2.EntityMention.Type);

                    /** EntityMention sentiment. */
                    public sentiment?: (google.cloud.language.v1beta2.ISentiment|null);

                    /**
                     * Creates a new EntityMention instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns EntityMention instance
                     */
                    public static create(properties?: google.cloud.language.v1beta2.IEntityMention): google.cloud.language.v1beta2.EntityMention;

                    /**
                     * Encodes the specified EntityMention message. Does not implicitly {@link google.cloud.language.v1beta2.EntityMention.verify|verify} messages.
                     * @param message EntityMention message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.language.v1beta2.IEntityMention, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified EntityMention message, length delimited. Does not implicitly {@link google.cloud.language.v1beta2.EntityMention.verify|verify} messages.
                     * @param message EntityMention message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.language.v1beta2.IEntityMention, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an EntityMention message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns EntityMention
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.language.v1beta2.EntityMention;

                    /**
                     * Decodes an EntityMention message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns EntityMention
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.language.v1beta2.EntityMention;

                    /**
                     * Verifies an EntityMention message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an EntityMention message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns EntityMention
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.language.v1beta2.EntityMention;

                    /**
                     * Creates a plain object from an EntityMention message. Also converts values to other types if specified.
                     * @param message EntityMention
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.language.v1beta2.EntityMention, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this EntityMention to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace EntityMention {

                    /** Type enum. */
                    enum Type {
                        TYPE_UNKNOWN = 0,
                        PROPER = 1,
                        COMMON = 2
                    }
                }

                /** Properties of a TextSpan. */
                interface ITextSpan {

                    /** TextSpan content */
                    content?: (string|null);

                    /** TextSpan beginOffset */
                    beginOffset?: (number|null);
                }

                /** Represents a TextSpan. */
                class TextSpan implements ITextSpan {

                    /**
                     * Constructs a new TextSpan.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.language.v1beta2.ITextSpan);

                    /** TextSpan content. */
                    public content: string;

                    /** TextSpan beginOffset. */
                    public beginOffset: number;

                    /**
                     * Creates a new TextSpan instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TextSpan instance
                     */
                    public static create(properties?: google.cloud.language.v1beta2.ITextSpan): google.cloud.language.v1beta2.TextSpan;

                    /**
                     * Encodes the specified TextSpan message. Does not implicitly {@link google.cloud.language.v1beta2.TextSpan.verify|verify} messages.
                     * @param message TextSpan message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.language.v1beta2.ITextSpan, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TextSpan message, length delimited. Does not implicitly {@link google.cloud.language.v1beta2.TextSpan.verify|verify} messages.
                     * @param message TextSpan message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.language.v1beta2.ITextSpan, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TextSpan message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TextSpan
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.language.v1beta2.TextSpan;

                    /**
                     * Decodes a TextSpan message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TextSpan
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.language.v1beta2.TextSpan;

                    /**
                     * Verifies a TextSpan message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TextSpan message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TextSpan
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.language.v1beta2.TextSpan;

                    /**
                     * Creates a plain object from a TextSpan message. Also converts values to other types if specified.
                     * @param message TextSpan
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.language.v1beta2.TextSpan, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TextSpan to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ClassificationCategory. */
                interface IClassificationCategory {

                    /** ClassificationCategory name */
                    name?: (string|null);

                    /** ClassificationCategory confidence */
                    confidence?: (number|null);
                }

                /** Represents a ClassificationCategory. */
                class ClassificationCategory implements IClassificationCategory {

                    /**
                     * Constructs a new ClassificationCategory.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.language.v1beta2.IClassificationCategory);

                    /** ClassificationCategory name. */
                    public name: string;

                    /** ClassificationCategory confidence. */
                    public confidence: number;

                    /**
                     * Creates a new ClassificationCategory instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ClassificationCategory instance
                     */
                    public static create(properties?: google.cloud.language.v1beta2.IClassificationCategory): google.cloud.language.v1beta2.ClassificationCategory;

                    /**
                     * Encodes the specified ClassificationCategory message. Does not implicitly {@link google.cloud.language.v1beta2.ClassificationCategory.verify|verify} messages.
                     * @param message ClassificationCategory message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.language.v1beta2.IClassificationCategory, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ClassificationCategory message, length delimited. Does not implicitly {@link google.cloud.language.v1beta2.ClassificationCategory.verify|verify} messages.
                     * @param message ClassificationCategory message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.language.v1beta2.IClassificationCategory, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ClassificationCategory message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ClassificationCategory
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.language.v1beta2.ClassificationCategory;

                    /**
                     * Decodes a ClassificationCategory message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ClassificationCategory
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.language.v1beta2.ClassificationCategory;

                    /**
                     * Verifies a ClassificationCategory message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ClassificationCategory message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ClassificationCategory
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.language.v1beta2.ClassificationCategory;

                    /**
                     * Creates a plain object from a ClassificationCategory message. Also converts values to other types if specified.
                     * @param message ClassificationCategory
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.language.v1beta2.ClassificationCategory, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ClassificationCategory to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an AnalyzeSentimentRequest. */
                interface IAnalyzeSentimentRequest {

                    /** AnalyzeSentimentRequest document */
                    document?: (google.cloud.language.v1beta2.IDocument|null);

                    /** AnalyzeSentimentRequest encodingType */
                    encodingType?: (google.cloud.language.v1beta2.EncodingType|keyof typeof google.cloud.language.v1beta2.EncodingType|null);
                }

                /** Represents an AnalyzeSentimentRequest. */
                class AnalyzeSentimentRequest implements IAnalyzeSentimentRequest {

                    /**
                     * Constructs a new AnalyzeSentimentRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.language.v1beta2.IAnalyzeSentimentRequest);

                    /** AnalyzeSentimentRequest document. */
                    public document?: (google.cloud.language.v1beta2.IDocument|null);

                    /** AnalyzeSentimentRequest encodingType. */
                    public encodingType: (google.cloud.language.v1beta2.EncodingType|keyof typeof google.cloud.language.v1beta2.EncodingType);

                    /**
                     * Creates a new AnalyzeSentimentRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AnalyzeSentimentRequest instance
                     */
                    public static create(properties?: google.cloud.language.v1beta2.IAnalyzeSentimentRequest): google.cloud.language.v1beta2.AnalyzeSentimentRequest;

                    /**
                     * Encodes the specified AnalyzeSentimentRequest message. Does not implicitly {@link google.cloud.language.v1beta2.AnalyzeSentimentRequest.verify|verify} messages.
                     * @param message AnalyzeSentimentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.language.v1beta2.IAnalyzeSentimentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AnalyzeSentimentRequest message, length delimited. Does not implicitly {@link google.cloud.language.v1beta2.AnalyzeSentimentRequest.verify|verify} messages.
                     * @param message AnalyzeSentimentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.language.v1beta2.IAnalyzeSentimentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AnalyzeSentimentRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AnalyzeSentimentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.language.v1beta2.AnalyzeSentimentRequest;

                    /**
                     * Decodes an AnalyzeSentimentRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AnalyzeSentimentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.language.v1beta2.AnalyzeSentimentRequest;

                    /**
                     * Verifies an AnalyzeSentimentRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AnalyzeSentimentRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AnalyzeSentimentRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.language.v1beta2.AnalyzeSentimentRequest;

                    /**
                     * Creates a plain object from an AnalyzeSentimentRequest message. Also converts values to other types if specified.
                     * @param message AnalyzeSentimentRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.language.v1beta2.AnalyzeSentimentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AnalyzeSentimentRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an AnalyzeSentimentResponse. */
                interface IAnalyzeSentimentResponse {

                    /** AnalyzeSentimentResponse documentSentiment */
                    documentSentiment?: (google.cloud.language.v1beta2.ISentiment|null);

                    /** AnalyzeSentimentResponse language */
                    language?: (string|null);

                    /** AnalyzeSentimentResponse sentences */
                    sentences?: (google.cloud.language.v1beta2.ISentence[]|null);
                }

                /** Represents an AnalyzeSentimentResponse. */
                class AnalyzeSentimentResponse implements IAnalyzeSentimentResponse {

                    /**
                     * Constructs a new AnalyzeSentimentResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.language.v1beta2.IAnalyzeSentimentResponse);

                    /** AnalyzeSentimentResponse documentSentiment. */
                    public documentSentiment?: (google.cloud.language.v1beta2.ISentiment|null);

                    /** AnalyzeSentimentResponse language. */
                    public language: string;

                    /** AnalyzeSentimentResponse sentences. */
                    public sentences: google.cloud.language.v1beta2.ISentence[];

                    /**
                     * Creates a new AnalyzeSentimentResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AnalyzeSentimentResponse instance
                     */
                    public static create(properties?: google.cloud.language.v1beta2.IAnalyzeSentimentResponse): google.cloud.language.v1beta2.AnalyzeSentimentResponse;

                    /**
                     * Encodes the specified AnalyzeSentimentResponse message. Does not implicitly {@link google.cloud.language.v1beta2.AnalyzeSentimentResponse.verify|verify} messages.
                     * @param message AnalyzeSentimentResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.language.v1beta2.IAnalyzeSentimentResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AnalyzeSentimentResponse message, length delimited. Does not implicitly {@link google.cloud.language.v1beta2.AnalyzeSentimentResponse.verify|verify} messages.
                     * @param message AnalyzeSentimentResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.language.v1beta2.IAnalyzeSentimentResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AnalyzeSentimentResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AnalyzeSentimentResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.language.v1beta2.AnalyzeSentimentResponse;

                    /**
                     * Decodes an AnalyzeSentimentResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AnalyzeSentimentResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.language.v1beta2.AnalyzeSentimentResponse;

                    /**
                     * Verifies an AnalyzeSentimentResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AnalyzeSentimentResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AnalyzeSentimentResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.language.v1beta2.AnalyzeSentimentResponse;

                    /**
                     * Creates a plain object from an AnalyzeSentimentResponse message. Also converts values to other types if specified.
                     * @param message AnalyzeSentimentResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.language.v1beta2.AnalyzeSentimentResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AnalyzeSentimentResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an AnalyzeEntitySentimentRequest. */
                interface IAnalyzeEntitySentimentRequest {

                    /** AnalyzeEntitySentimentRequest document */
                    document?: (google.cloud.language.v1beta2.IDocument|null);

                    /** AnalyzeEntitySentimentRequest encodingType */
                    encodingType?: (google.cloud.language.v1beta2.EncodingType|keyof typeof google.cloud.language.v1beta2.EncodingType|null);
                }

                /** Represents an AnalyzeEntitySentimentRequest. */
                class AnalyzeEntitySentimentRequest implements IAnalyzeEntitySentimentRequest {

                    /**
                     * Constructs a new AnalyzeEntitySentimentRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.language.v1beta2.IAnalyzeEntitySentimentRequest);

                    /** AnalyzeEntitySentimentRequest document. */
                    public document?: (google.cloud.language.v1beta2.IDocument|null);

                    /** AnalyzeEntitySentimentRequest encodingType. */
                    public encodingType: (google.cloud.language.v1beta2.EncodingType|keyof typeof google.cloud.language.v1beta2.EncodingType);

                    /**
                     * Creates a new AnalyzeEntitySentimentRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AnalyzeEntitySentimentRequest instance
                     */
                    public static create(properties?: google.cloud.language.v1beta2.IAnalyzeEntitySentimentRequest): google.cloud.language.v1beta2.AnalyzeEntitySentimentRequest;

                    /**
                     * Encodes the specified AnalyzeEntitySentimentRequest message. Does not implicitly {@link google.cloud.language.v1beta2.AnalyzeEntitySentimentRequest.verify|verify} messages.
                     * @param message AnalyzeEntitySentimentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.language.v1beta2.IAnalyzeEntitySentimentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AnalyzeEntitySentimentRequest message, length delimited. Does not implicitly {@link google.cloud.language.v1beta2.AnalyzeEntitySentimentRequest.verify|verify} messages.
                     * @param message AnalyzeEntitySentimentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.language.v1beta2.IAnalyzeEntitySentimentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AnalyzeEntitySentimentRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AnalyzeEntitySentimentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.language.v1beta2.AnalyzeEntitySentimentRequest;

                    /**
                     * Decodes an AnalyzeEntitySentimentRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AnalyzeEntitySentimentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.language.v1beta2.AnalyzeEntitySentimentRequest;

                    /**
                     * Verifies an AnalyzeEntitySentimentRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AnalyzeEntitySentimentRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AnalyzeEntitySentimentRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.language.v1beta2.AnalyzeEntitySentimentRequest;

                    /**
                     * Creates a plain object from an AnalyzeEntitySentimentRequest message. Also converts values to other types if specified.
                     * @param message AnalyzeEntitySentimentRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.language.v1beta2.AnalyzeEntitySentimentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AnalyzeEntitySentimentRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an AnalyzeEntitySentimentResponse. */
                interface IAnalyzeEntitySentimentResponse {

                    /** AnalyzeEntitySentimentResponse entities */
                    entities?: (google.cloud.language.v1beta2.IEntity[]|null);

                    /** AnalyzeEntitySentimentResponse language */
                    language?: (string|null);
                }

                /** Represents an AnalyzeEntitySentimentResponse. */
                class AnalyzeEntitySentimentResponse implements IAnalyzeEntitySentimentResponse {

                    /**
                     * Constructs a new AnalyzeEntitySentimentResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.language.v1beta2.IAnalyzeEntitySentimentResponse);

                    /** AnalyzeEntitySentimentResponse entities. */
                    public entities: google.cloud.language.v1beta2.IEntity[];

                    /** AnalyzeEntitySentimentResponse language. */
                    public language: string;

                    /**
                     * Creates a new AnalyzeEntitySentimentResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AnalyzeEntitySentimentResponse instance
                     */
                    public static create(properties?: google.cloud.language.v1beta2.IAnalyzeEntitySentimentResponse): google.cloud.language.v1beta2.AnalyzeEntitySentimentResponse;

                    /**
                     * Encodes the specified AnalyzeEntitySentimentResponse message. Does not implicitly {@link google.cloud.language.v1beta2.AnalyzeEntitySentimentResponse.verify|verify} messages.
                     * @param message AnalyzeEntitySentimentResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.language.v1beta2.IAnalyzeEntitySentimentResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AnalyzeEntitySentimentResponse message, length delimited. Does not implicitly {@link google.cloud.language.v1beta2.AnalyzeEntitySentimentResponse.verify|verify} messages.
                     * @param message AnalyzeEntitySentimentResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.language.v1beta2.IAnalyzeEntitySentimentResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AnalyzeEntitySentimentResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AnalyzeEntitySentimentResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.language.v1beta2.AnalyzeEntitySentimentResponse;

                    /**
                     * Decodes an AnalyzeEntitySentimentResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AnalyzeEntitySentimentResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.language.v1beta2.AnalyzeEntitySentimentResponse;

                    /**
                     * Verifies an AnalyzeEntitySentimentResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AnalyzeEntitySentimentResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AnalyzeEntitySentimentResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.language.v1beta2.AnalyzeEntitySentimentResponse;

                    /**
                     * Creates a plain object from an AnalyzeEntitySentimentResponse message. Also converts values to other types if specified.
                     * @param message AnalyzeEntitySentimentResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.language.v1beta2.AnalyzeEntitySentimentResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AnalyzeEntitySentimentResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an AnalyzeEntitiesRequest. */
                interface IAnalyzeEntitiesRequest {

                    /** AnalyzeEntitiesRequest document */
                    document?: (google.cloud.language.v1beta2.IDocument|null);

                    /** AnalyzeEntitiesRequest encodingType */
                    encodingType?: (google.cloud.language.v1beta2.EncodingType|keyof typeof google.cloud.language.v1beta2.EncodingType|null);
                }

                /** Represents an AnalyzeEntitiesRequest. */
                class AnalyzeEntitiesRequest implements IAnalyzeEntitiesRequest {

                    /**
                     * Constructs a new AnalyzeEntitiesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.language.v1beta2.IAnalyzeEntitiesRequest);

                    /** AnalyzeEntitiesRequest document. */
                    public document?: (google.cloud.language.v1beta2.IDocument|null);

                    /** AnalyzeEntitiesRequest encodingType. */
                    public encodingType: (google.cloud.language.v1beta2.EncodingType|keyof typeof google.cloud.language.v1beta2.EncodingType);

                    /**
                     * Creates a new AnalyzeEntitiesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AnalyzeEntitiesRequest instance
                     */
                    public static create(properties?: google.cloud.language.v1beta2.IAnalyzeEntitiesRequest): google.cloud.language.v1beta2.AnalyzeEntitiesRequest;

                    /**
                     * Encodes the specified AnalyzeEntitiesRequest message. Does not implicitly {@link google.cloud.language.v1beta2.AnalyzeEntitiesRequest.verify|verify} messages.
                     * @param message AnalyzeEntitiesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.language.v1beta2.IAnalyzeEntitiesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AnalyzeEntitiesRequest message, length delimited. Does not implicitly {@link google.cloud.language.v1beta2.AnalyzeEntitiesRequest.verify|verify} messages.
                     * @param message AnalyzeEntitiesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.language.v1beta2.IAnalyzeEntitiesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AnalyzeEntitiesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AnalyzeEntitiesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.language.v1beta2.AnalyzeEntitiesRequest;

                    /**
                     * Decodes an AnalyzeEntitiesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AnalyzeEntitiesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.language.v1beta2.AnalyzeEntitiesRequest;

                    /**
                     * Verifies an AnalyzeEntitiesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AnalyzeEntitiesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AnalyzeEntitiesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.language.v1beta2.AnalyzeEntitiesRequest;

                    /**
                     * Creates a plain object from an AnalyzeEntitiesRequest message. Also converts values to other types if specified.
                     * @param message AnalyzeEntitiesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.language.v1beta2.AnalyzeEntitiesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AnalyzeEntitiesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an AnalyzeEntitiesResponse. */
                interface IAnalyzeEntitiesResponse {

                    /** AnalyzeEntitiesResponse entities */
                    entities?: (google.cloud.language.v1beta2.IEntity[]|null);

                    /** AnalyzeEntitiesResponse language */
                    language?: (string|null);
                }

                /** Represents an AnalyzeEntitiesResponse. */
                class AnalyzeEntitiesResponse implements IAnalyzeEntitiesResponse {

                    /**
                     * Constructs a new AnalyzeEntitiesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.language.v1beta2.IAnalyzeEntitiesResponse);

                    /** AnalyzeEntitiesResponse entities. */
                    public entities: google.cloud.language.v1beta2.IEntity[];

                    /** AnalyzeEntitiesResponse language. */
                    public language: string;

                    /**
                     * Creates a new AnalyzeEntitiesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AnalyzeEntitiesResponse instance
                     */
                    public static create(properties?: google.cloud.language.v1beta2.IAnalyzeEntitiesResponse): google.cloud.language.v1beta2.AnalyzeEntitiesResponse;

                    /**
                     * Encodes the specified AnalyzeEntitiesResponse message. Does not implicitly {@link google.cloud.language.v1beta2.AnalyzeEntitiesResponse.verify|verify} messages.
                     * @param message AnalyzeEntitiesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.language.v1beta2.IAnalyzeEntitiesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AnalyzeEntitiesResponse message, length delimited. Does not implicitly {@link google.cloud.language.v1beta2.AnalyzeEntitiesResponse.verify|verify} messages.
                     * @param message AnalyzeEntitiesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.language.v1beta2.IAnalyzeEntitiesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AnalyzeEntitiesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AnalyzeEntitiesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.language.v1beta2.AnalyzeEntitiesResponse;

                    /**
                     * Decodes an AnalyzeEntitiesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AnalyzeEntitiesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.language.v1beta2.AnalyzeEntitiesResponse;

                    /**
                     * Verifies an AnalyzeEntitiesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AnalyzeEntitiesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AnalyzeEntitiesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.language.v1beta2.AnalyzeEntitiesResponse;

                    /**
                     * Creates a plain object from an AnalyzeEntitiesResponse message. Also converts values to other types if specified.
                     * @param message AnalyzeEntitiesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.language.v1beta2.AnalyzeEntitiesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AnalyzeEntitiesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an AnalyzeSyntaxRequest. */
                interface IAnalyzeSyntaxRequest {

                    /** AnalyzeSyntaxRequest document */
                    document?: (google.cloud.language.v1beta2.IDocument|null);

                    /** AnalyzeSyntaxRequest encodingType */
                    encodingType?: (google.cloud.language.v1beta2.EncodingType|keyof typeof google.cloud.language.v1beta2.EncodingType|null);
                }

                /** Represents an AnalyzeSyntaxRequest. */
                class AnalyzeSyntaxRequest implements IAnalyzeSyntaxRequest {

                    /**
                     * Constructs a new AnalyzeSyntaxRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.language.v1beta2.IAnalyzeSyntaxRequest);

                    /** AnalyzeSyntaxRequest document. */
                    public document?: (google.cloud.language.v1beta2.IDocument|null);

                    /** AnalyzeSyntaxRequest encodingType. */
                    public encodingType: (google.cloud.language.v1beta2.EncodingType|keyof typeof google.cloud.language.v1beta2.EncodingType);

                    /**
                     * Creates a new AnalyzeSyntaxRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AnalyzeSyntaxRequest instance
                     */
                    public static create(properties?: google.cloud.language.v1beta2.IAnalyzeSyntaxRequest): google.cloud.language.v1beta2.AnalyzeSyntaxRequest;

                    /**
                     * Encodes the specified AnalyzeSyntaxRequest message. Does not implicitly {@link google.cloud.language.v1beta2.AnalyzeSyntaxRequest.verify|verify} messages.
                     * @param message AnalyzeSyntaxRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.language.v1beta2.IAnalyzeSyntaxRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AnalyzeSyntaxRequest message, length delimited. Does not implicitly {@link google.cloud.language.v1beta2.AnalyzeSyntaxRequest.verify|verify} messages.
                     * @param message AnalyzeSyntaxRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.language.v1beta2.IAnalyzeSyntaxRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AnalyzeSyntaxRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AnalyzeSyntaxRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.language.v1beta2.AnalyzeSyntaxRequest;

                    /**
                     * Decodes an AnalyzeSyntaxRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AnalyzeSyntaxRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.language.v1beta2.AnalyzeSyntaxRequest;

                    /**
                     * Verifies an AnalyzeSyntaxRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AnalyzeSyntaxRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AnalyzeSyntaxRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.language.v1beta2.AnalyzeSyntaxRequest;

                    /**
                     * Creates a plain object from an AnalyzeSyntaxRequest message. Also converts values to other types if specified.
                     * @param message AnalyzeSyntaxRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.language.v1beta2.AnalyzeSyntaxRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AnalyzeSyntaxRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an AnalyzeSyntaxResponse. */
                interface IAnalyzeSyntaxResponse {

                    /** AnalyzeSyntaxResponse sentences */
                    sentences?: (google.cloud.language.v1beta2.ISentence[]|null);

                    /** AnalyzeSyntaxResponse tokens */
                    tokens?: (google.cloud.language.v1beta2.IToken[]|null);

                    /** AnalyzeSyntaxResponse language */
                    language?: (string|null);
                }

                /** Represents an AnalyzeSyntaxResponse. */
                class AnalyzeSyntaxResponse implements IAnalyzeSyntaxResponse {

                    /**
                     * Constructs a new AnalyzeSyntaxResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.language.v1beta2.IAnalyzeSyntaxResponse);

                    /** AnalyzeSyntaxResponse sentences. */
                    public sentences: google.cloud.language.v1beta2.ISentence[];

                    /** AnalyzeSyntaxResponse tokens. */
                    public tokens: google.cloud.language.v1beta2.IToken[];

                    /** AnalyzeSyntaxResponse language. */
                    public language: string;

                    /**
                     * Creates a new AnalyzeSyntaxResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AnalyzeSyntaxResponse instance
                     */
                    public static create(properties?: google.cloud.language.v1beta2.IAnalyzeSyntaxResponse): google.cloud.language.v1beta2.AnalyzeSyntaxResponse;

                    /**
                     * Encodes the specified AnalyzeSyntaxResponse message. Does not implicitly {@link google.cloud.language.v1beta2.AnalyzeSyntaxResponse.verify|verify} messages.
                     * @param message AnalyzeSyntaxResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.language.v1beta2.IAnalyzeSyntaxResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AnalyzeSyntaxResponse message, length delimited. Does not implicitly {@link google.cloud.language.v1beta2.AnalyzeSyntaxResponse.verify|verify} messages.
                     * @param message AnalyzeSyntaxResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.language.v1beta2.IAnalyzeSyntaxResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AnalyzeSyntaxResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AnalyzeSyntaxResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.language.v1beta2.AnalyzeSyntaxResponse;

                    /**
                     * Decodes an AnalyzeSyntaxResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AnalyzeSyntaxResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.language.v1beta2.AnalyzeSyntaxResponse;

                    /**
                     * Verifies an AnalyzeSyntaxResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AnalyzeSyntaxResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AnalyzeSyntaxResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.language.v1beta2.AnalyzeSyntaxResponse;

                    /**
                     * Creates a plain object from an AnalyzeSyntaxResponse message. Also converts values to other types if specified.
                     * @param message AnalyzeSyntaxResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.language.v1beta2.AnalyzeSyntaxResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AnalyzeSyntaxResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ClassifyTextRequest. */
                interface IClassifyTextRequest {

                    /** ClassifyTextRequest document */
                    document?: (google.cloud.language.v1beta2.IDocument|null);
                }

                /** Represents a ClassifyTextRequest. */
                class ClassifyTextRequest implements IClassifyTextRequest {

                    /**
                     * Constructs a new ClassifyTextRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.language.v1beta2.IClassifyTextRequest);

                    /** ClassifyTextRequest document. */
                    public document?: (google.cloud.language.v1beta2.IDocument|null);

                    /**
                     * Creates a new ClassifyTextRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ClassifyTextRequest instance
                     */
                    public static create(properties?: google.cloud.language.v1beta2.IClassifyTextRequest): google.cloud.language.v1beta2.ClassifyTextRequest;

                    /**
                     * Encodes the specified ClassifyTextRequest message. Does not implicitly {@link google.cloud.language.v1beta2.ClassifyTextRequest.verify|verify} messages.
                     * @param message ClassifyTextRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.language.v1beta2.IClassifyTextRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ClassifyTextRequest message, length delimited. Does not implicitly {@link google.cloud.language.v1beta2.ClassifyTextRequest.verify|verify} messages.
                     * @param message ClassifyTextRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.language.v1beta2.IClassifyTextRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ClassifyTextRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ClassifyTextRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.language.v1beta2.ClassifyTextRequest;

                    /**
                     * Decodes a ClassifyTextRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ClassifyTextRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.language.v1beta2.ClassifyTextRequest;

                    /**
                     * Verifies a ClassifyTextRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ClassifyTextRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ClassifyTextRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.language.v1beta2.ClassifyTextRequest;

                    /**
                     * Creates a plain object from a ClassifyTextRequest message. Also converts values to other types if specified.
                     * @param message ClassifyTextRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.language.v1beta2.ClassifyTextRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ClassifyTextRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ClassifyTextResponse. */
                interface IClassifyTextResponse {

                    /** ClassifyTextResponse categories */
                    categories?: (google.cloud.language.v1beta2.IClassificationCategory[]|null);
                }

                /** Represents a ClassifyTextResponse. */
                class ClassifyTextResponse implements IClassifyTextResponse {

                    /**
                     * Constructs a new ClassifyTextResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.language.v1beta2.IClassifyTextResponse);

                    /** ClassifyTextResponse categories. */
                    public categories: google.cloud.language.v1beta2.IClassificationCategory[];

                    /**
                     * Creates a new ClassifyTextResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ClassifyTextResponse instance
                     */
                    public static create(properties?: google.cloud.language.v1beta2.IClassifyTextResponse): google.cloud.language.v1beta2.ClassifyTextResponse;

                    /**
                     * Encodes the specified ClassifyTextResponse message. Does not implicitly {@link google.cloud.language.v1beta2.ClassifyTextResponse.verify|verify} messages.
                     * @param message ClassifyTextResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.language.v1beta2.IClassifyTextResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ClassifyTextResponse message, length delimited. Does not implicitly {@link google.cloud.language.v1beta2.ClassifyTextResponse.verify|verify} messages.
                     * @param message ClassifyTextResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.language.v1beta2.IClassifyTextResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ClassifyTextResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ClassifyTextResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.language.v1beta2.ClassifyTextResponse;

                    /**
                     * Decodes a ClassifyTextResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ClassifyTextResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.language.v1beta2.ClassifyTextResponse;

                    /**
                     * Verifies a ClassifyTextResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ClassifyTextResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ClassifyTextResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.language.v1beta2.ClassifyTextResponse;

                    /**
                     * Creates a plain object from a ClassifyTextResponse message. Also converts values to other types if specified.
                     * @param message ClassifyTextResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.language.v1beta2.ClassifyTextResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ClassifyTextResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an AnnotateTextRequest. */
                interface IAnnotateTextRequest {

                    /** AnnotateTextRequest document */
                    document?: (google.cloud.language.v1beta2.IDocument|null);

                    /** AnnotateTextRequest features */
                    features?: (google.cloud.language.v1beta2.AnnotateTextRequest.IFeatures|null);

                    /** AnnotateTextRequest encodingType */
                    encodingType?: (google.cloud.language.v1beta2.EncodingType|keyof typeof google.cloud.language.v1beta2.EncodingType|null);
                }

                /** Represents an AnnotateTextRequest. */
                class AnnotateTextRequest implements IAnnotateTextRequest {

                    /**
                     * Constructs a new AnnotateTextRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.language.v1beta2.IAnnotateTextRequest);

                    /** AnnotateTextRequest document. */
                    public document?: (google.cloud.language.v1beta2.IDocument|null);

                    /** AnnotateTextRequest features. */
                    public features?: (google.cloud.language.v1beta2.AnnotateTextRequest.IFeatures|null);

                    /** AnnotateTextRequest encodingType. */
                    public encodingType: (google.cloud.language.v1beta2.EncodingType|keyof typeof google.cloud.language.v1beta2.EncodingType);

                    /**
                     * Creates a new AnnotateTextRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AnnotateTextRequest instance
                     */
                    public static create(properties?: google.cloud.language.v1beta2.IAnnotateTextRequest): google.cloud.language.v1beta2.AnnotateTextRequest;

                    /**
                     * Encodes the specified AnnotateTextRequest message. Does not implicitly {@link google.cloud.language.v1beta2.AnnotateTextRequest.verify|verify} messages.
                     * @param message AnnotateTextRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.language.v1beta2.IAnnotateTextRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AnnotateTextRequest message, length delimited. Does not implicitly {@link google.cloud.language.v1beta2.AnnotateTextRequest.verify|verify} messages.
                     * @param message AnnotateTextRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.language.v1beta2.IAnnotateTextRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AnnotateTextRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AnnotateTextRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.language.v1beta2.AnnotateTextRequest;

                    /**
                     * Decodes an AnnotateTextRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AnnotateTextRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.language.v1beta2.AnnotateTextRequest;

                    /**
                     * Verifies an AnnotateTextRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AnnotateTextRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AnnotateTextRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.language.v1beta2.AnnotateTextRequest;

                    /**
                     * Creates a plain object from an AnnotateTextRequest message. Also converts values to other types if specified.
                     * @param message AnnotateTextRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.language.v1beta2.AnnotateTextRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AnnotateTextRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace AnnotateTextRequest {

                    /** Properties of a Features. */
                    interface IFeatures {

                        /** Features extractSyntax */
                        extractSyntax?: (boolean|null);

                        /** Features extractEntities */
                        extractEntities?: (boolean|null);

                        /** Features extractDocumentSentiment */
                        extractDocumentSentiment?: (boolean|null);

                        /** Features extractEntitySentiment */
                        extractEntitySentiment?: (boolean|null);

                        /** Features classifyText */
                        classifyText?: (boolean|null);
                    }

                    /** Represents a Features. */
                    class Features implements IFeatures {

                        /**
                         * Constructs a new Features.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.language.v1beta2.AnnotateTextRequest.IFeatures);

                        /** Features extractSyntax. */
                        public extractSyntax: boolean;

                        /** Features extractEntities. */
                        public extractEntities: boolean;

                        /** Features extractDocumentSentiment. */
                        public extractDocumentSentiment: boolean;

                        /** Features extractEntitySentiment. */
                        public extractEntitySentiment: boolean;

                        /** Features classifyText. */
                        public classifyText: boolean;

                        /**
                         * Creates a new Features instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Features instance
                         */
                        public static create(properties?: google.cloud.language.v1beta2.AnnotateTextRequest.IFeatures): google.cloud.language.v1beta2.AnnotateTextRequest.Features;

                        /**
                         * Encodes the specified Features message. Does not implicitly {@link google.cloud.language.v1beta2.AnnotateTextRequest.Features.verify|verify} messages.
                         * @param message Features message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.language.v1beta2.AnnotateTextRequest.IFeatures, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Features message, length delimited. Does not implicitly {@link google.cloud.language.v1beta2.AnnotateTextRequest.Features.verify|verify} messages.
                         * @param message Features message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.language.v1beta2.AnnotateTextRequest.IFeatures, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Features message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Features
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.language.v1beta2.AnnotateTextRequest.Features;

                        /**
                         * Decodes a Features message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Features
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.language.v1beta2.AnnotateTextRequest.Features;

                        /**
                         * Verifies a Features message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Features message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Features
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.language.v1beta2.AnnotateTextRequest.Features;

                        /**
                         * Creates a plain object from a Features message. Also converts values to other types if specified.
                         * @param message Features
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.language.v1beta2.AnnotateTextRequest.Features, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Features to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Properties of an AnnotateTextResponse. */
                interface IAnnotateTextResponse {

                    /** AnnotateTextResponse sentences */
                    sentences?: (google.cloud.language.v1beta2.ISentence[]|null);

                    /** AnnotateTextResponse tokens */
                    tokens?: (google.cloud.language.v1beta2.IToken[]|null);

                    /** AnnotateTextResponse entities */
                    entities?: (google.cloud.language.v1beta2.IEntity[]|null);

                    /** AnnotateTextResponse documentSentiment */
                    documentSentiment?: (google.cloud.language.v1beta2.ISentiment|null);

                    /** AnnotateTextResponse language */
                    language?: (string|null);

                    /** AnnotateTextResponse categories */
                    categories?: (google.cloud.language.v1beta2.IClassificationCategory[]|null);
                }

                /** Represents an AnnotateTextResponse. */
                class AnnotateTextResponse implements IAnnotateTextResponse {

                    /**
                     * Constructs a new AnnotateTextResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.language.v1beta2.IAnnotateTextResponse);

                    /** AnnotateTextResponse sentences. */
                    public sentences: google.cloud.language.v1beta2.ISentence[];

                    /** AnnotateTextResponse tokens. */
                    public tokens: google.cloud.language.v1beta2.IToken[];

                    /** AnnotateTextResponse entities. */
                    public entities: google.cloud.language.v1beta2.IEntity[];

                    /** AnnotateTextResponse documentSentiment. */
                    public documentSentiment?: (google.cloud.language.v1beta2.ISentiment|null);

                    /** AnnotateTextResponse language. */
                    public language: string;

                    /** AnnotateTextResponse categories. */
                    public categories: google.cloud.language.v1beta2.IClassificationCategory[];

                    /**
                     * Creates a new AnnotateTextResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AnnotateTextResponse instance
                     */
                    public static create(properties?: google.cloud.language.v1beta2.IAnnotateTextResponse): google.cloud.language.v1beta2.AnnotateTextResponse;

                    /**
                     * Encodes the specified AnnotateTextResponse message. Does not implicitly {@link google.cloud.language.v1beta2.AnnotateTextResponse.verify|verify} messages.
                     * @param message AnnotateTextResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.language.v1beta2.IAnnotateTextResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AnnotateTextResponse message, length delimited. Does not implicitly {@link google.cloud.language.v1beta2.AnnotateTextResponse.verify|verify} messages.
                     * @param message AnnotateTextResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.language.v1beta2.IAnnotateTextResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AnnotateTextResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AnnotateTextResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.language.v1beta2.AnnotateTextResponse;

                    /**
                     * Decodes an AnnotateTextResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AnnotateTextResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.language.v1beta2.AnnotateTextResponse;

                    /**
                     * Verifies an AnnotateTextResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AnnotateTextResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AnnotateTextResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.language.v1beta2.AnnotateTextResponse;

                    /**
                     * Creates a plain object from an AnnotateTextResponse message. Also converts values to other types if specified.
                     * @param message AnnotateTextResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.language.v1beta2.AnnotateTextResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AnnotateTextResponse to JSON.
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
            UNORDERED_LIST = 6
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
