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

        /** Namespace dataqna. */
        namespace dataqna {

            /** Namespace v1alpha. */
            namespace v1alpha {

                /** Properties of an AnnotatedString. */
                interface IAnnotatedString {

                    /** AnnotatedString textFormatted */
                    textFormatted?: (string|null);

                    /** AnnotatedString htmlFormatted */
                    htmlFormatted?: (string|null);

                    /** AnnotatedString markups */
                    markups?: (google.cloud.dataqna.v1alpha.AnnotatedString.ISemanticMarkup[]|null);
                }

                /** Represents an AnnotatedString. */
                class AnnotatedString implements IAnnotatedString {

                    /**
                     * Constructs a new AnnotatedString.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataqna.v1alpha.IAnnotatedString);

                    /** AnnotatedString textFormatted. */
                    public textFormatted: string;

                    /** AnnotatedString htmlFormatted. */
                    public htmlFormatted: string;

                    /** AnnotatedString markups. */
                    public markups: google.cloud.dataqna.v1alpha.AnnotatedString.ISemanticMarkup[];

                    /**
                     * Creates a new AnnotatedString instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AnnotatedString instance
                     */
                    public static create(properties?: google.cloud.dataqna.v1alpha.IAnnotatedString): google.cloud.dataqna.v1alpha.AnnotatedString;

                    /**
                     * Encodes the specified AnnotatedString message. Does not implicitly {@link google.cloud.dataqna.v1alpha.AnnotatedString.verify|verify} messages.
                     * @param message AnnotatedString message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataqna.v1alpha.IAnnotatedString, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AnnotatedString message, length delimited. Does not implicitly {@link google.cloud.dataqna.v1alpha.AnnotatedString.verify|verify} messages.
                     * @param message AnnotatedString message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataqna.v1alpha.IAnnotatedString, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AnnotatedString message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AnnotatedString
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataqna.v1alpha.AnnotatedString;

                    /**
                     * Decodes an AnnotatedString message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AnnotatedString
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataqna.v1alpha.AnnotatedString;

                    /**
                     * Verifies an AnnotatedString message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AnnotatedString message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AnnotatedString
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataqna.v1alpha.AnnotatedString;

                    /**
                     * Creates a plain object from an AnnotatedString message. Also converts values to other types if specified.
                     * @param message AnnotatedString
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataqna.v1alpha.AnnotatedString, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AnnotatedString to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace AnnotatedString {

                    /** Properties of a SemanticMarkup. */
                    interface ISemanticMarkup {

                        /** SemanticMarkup type */
                        type?: (google.cloud.dataqna.v1alpha.AnnotatedString.SemanticMarkupType|keyof typeof google.cloud.dataqna.v1alpha.AnnotatedString.SemanticMarkupType|null);

                        /** SemanticMarkup startCharIndex */
                        startCharIndex?: (number|null);

                        /** SemanticMarkup length */
                        length?: (number|null);
                    }

                    /** Represents a SemanticMarkup. */
                    class SemanticMarkup implements ISemanticMarkup {

                        /**
                         * Constructs a new SemanticMarkup.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.dataqna.v1alpha.AnnotatedString.ISemanticMarkup);

                        /** SemanticMarkup type. */
                        public type: (google.cloud.dataqna.v1alpha.AnnotatedString.SemanticMarkupType|keyof typeof google.cloud.dataqna.v1alpha.AnnotatedString.SemanticMarkupType);

                        /** SemanticMarkup startCharIndex. */
                        public startCharIndex: number;

                        /** SemanticMarkup length. */
                        public length: number;

                        /**
                         * Creates a new SemanticMarkup instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SemanticMarkup instance
                         */
                        public static create(properties?: google.cloud.dataqna.v1alpha.AnnotatedString.ISemanticMarkup): google.cloud.dataqna.v1alpha.AnnotatedString.SemanticMarkup;

                        /**
                         * Encodes the specified SemanticMarkup message. Does not implicitly {@link google.cloud.dataqna.v1alpha.AnnotatedString.SemanticMarkup.verify|verify} messages.
                         * @param message SemanticMarkup message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.dataqna.v1alpha.AnnotatedString.ISemanticMarkup, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SemanticMarkup message, length delimited. Does not implicitly {@link google.cloud.dataqna.v1alpha.AnnotatedString.SemanticMarkup.verify|verify} messages.
                         * @param message SemanticMarkup message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.dataqna.v1alpha.AnnotatedString.ISemanticMarkup, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SemanticMarkup message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SemanticMarkup
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataqna.v1alpha.AnnotatedString.SemanticMarkup;

                        /**
                         * Decodes a SemanticMarkup message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SemanticMarkup
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataqna.v1alpha.AnnotatedString.SemanticMarkup;

                        /**
                         * Verifies a SemanticMarkup message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SemanticMarkup message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SemanticMarkup
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.dataqna.v1alpha.AnnotatedString.SemanticMarkup;

                        /**
                         * Creates a plain object from a SemanticMarkup message. Also converts values to other types if specified.
                         * @param message SemanticMarkup
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.dataqna.v1alpha.AnnotatedString.SemanticMarkup, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SemanticMarkup to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** SemanticMarkupType enum. */
                    enum SemanticMarkupType {
                        MARKUP_TYPE_UNSPECIFIED = 0,
                        METRIC = 1,
                        DIMENSION = 2,
                        FILTER = 3,
                        UNUSED = 4,
                        BLOCKED = 5,
                        ROW = 6
                    }
                }

                /** Represents an AutoSuggestionService */
                class AutoSuggestionService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new AutoSuggestionService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new AutoSuggestionService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): AutoSuggestionService;

                    /**
                     * Calls SuggestQueries.
                     * @param request SuggestQueriesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and SuggestQueriesResponse
                     */
                    public suggestQueries(request: google.cloud.dataqna.v1alpha.ISuggestQueriesRequest, callback: google.cloud.dataqna.v1alpha.AutoSuggestionService.SuggestQueriesCallback): void;

                    /**
                     * Calls SuggestQueries.
                     * @param request SuggestQueriesRequest message or plain object
                     * @returns Promise
                     */
                    public suggestQueries(request: google.cloud.dataqna.v1alpha.ISuggestQueriesRequest): Promise<google.cloud.dataqna.v1alpha.SuggestQueriesResponse>;
                }

                namespace AutoSuggestionService {

                    /**
                     * Callback as used by {@link google.cloud.dataqna.v1alpha.AutoSuggestionService#suggestQueries}.
                     * @param error Error, if any
                     * @param [response] SuggestQueriesResponse
                     */
                    type SuggestQueriesCallback = (error: (Error|null), response?: google.cloud.dataqna.v1alpha.SuggestQueriesResponse) => void;
                }

                /** Properties of a SuggestQueriesRequest. */
                interface ISuggestQueriesRequest {

                    /** SuggestQueriesRequest parent */
                    parent?: (string|null);

                    /** SuggestQueriesRequest scopes */
                    scopes?: (string[]|null);

                    /** SuggestQueriesRequest query */
                    query?: (string|null);

                    /** SuggestQueriesRequest suggestionTypes */
                    suggestionTypes?: (google.cloud.dataqna.v1alpha.SuggestionType[]|null);
                }

                /** Represents a SuggestQueriesRequest. */
                class SuggestQueriesRequest implements ISuggestQueriesRequest {

                    /**
                     * Constructs a new SuggestQueriesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataqna.v1alpha.ISuggestQueriesRequest);

                    /** SuggestQueriesRequest parent. */
                    public parent: string;

                    /** SuggestQueriesRequest scopes. */
                    public scopes: string[];

                    /** SuggestQueriesRequest query. */
                    public query: string;

                    /** SuggestQueriesRequest suggestionTypes. */
                    public suggestionTypes: google.cloud.dataqna.v1alpha.SuggestionType[];

                    /**
                     * Creates a new SuggestQueriesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SuggestQueriesRequest instance
                     */
                    public static create(properties?: google.cloud.dataqna.v1alpha.ISuggestQueriesRequest): google.cloud.dataqna.v1alpha.SuggestQueriesRequest;

                    /**
                     * Encodes the specified SuggestQueriesRequest message. Does not implicitly {@link google.cloud.dataqna.v1alpha.SuggestQueriesRequest.verify|verify} messages.
                     * @param message SuggestQueriesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataqna.v1alpha.ISuggestQueriesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SuggestQueriesRequest message, length delimited. Does not implicitly {@link google.cloud.dataqna.v1alpha.SuggestQueriesRequest.verify|verify} messages.
                     * @param message SuggestQueriesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataqna.v1alpha.ISuggestQueriesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SuggestQueriesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SuggestQueriesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataqna.v1alpha.SuggestQueriesRequest;

                    /**
                     * Decodes a SuggestQueriesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SuggestQueriesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataqna.v1alpha.SuggestQueriesRequest;

                    /**
                     * Verifies a SuggestQueriesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SuggestQueriesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SuggestQueriesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataqna.v1alpha.SuggestQueriesRequest;

                    /**
                     * Creates a plain object from a SuggestQueriesRequest message. Also converts values to other types if specified.
                     * @param message SuggestQueriesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataqna.v1alpha.SuggestQueriesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SuggestQueriesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Suggestion. */
                interface ISuggestion {

                    /** Suggestion suggestionInfo */
                    suggestionInfo?: (google.cloud.dataqna.v1alpha.ISuggestionInfo|null);

                    /** Suggestion rankingScore */
                    rankingScore?: (number|null);

                    /** Suggestion suggestionType */
                    suggestionType?: (google.cloud.dataqna.v1alpha.SuggestionType|keyof typeof google.cloud.dataqna.v1alpha.SuggestionType|null);
                }

                /** Represents a Suggestion. */
                class Suggestion implements ISuggestion {

                    /**
                     * Constructs a new Suggestion.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataqna.v1alpha.ISuggestion);

                    /** Suggestion suggestionInfo. */
                    public suggestionInfo?: (google.cloud.dataqna.v1alpha.ISuggestionInfo|null);

                    /** Suggestion rankingScore. */
                    public rankingScore: number;

                    /** Suggestion suggestionType. */
                    public suggestionType: (google.cloud.dataqna.v1alpha.SuggestionType|keyof typeof google.cloud.dataqna.v1alpha.SuggestionType);

                    /**
                     * Creates a new Suggestion instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Suggestion instance
                     */
                    public static create(properties?: google.cloud.dataqna.v1alpha.ISuggestion): google.cloud.dataqna.v1alpha.Suggestion;

                    /**
                     * Encodes the specified Suggestion message. Does not implicitly {@link google.cloud.dataqna.v1alpha.Suggestion.verify|verify} messages.
                     * @param message Suggestion message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataqna.v1alpha.ISuggestion, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Suggestion message, length delimited. Does not implicitly {@link google.cloud.dataqna.v1alpha.Suggestion.verify|verify} messages.
                     * @param message Suggestion message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataqna.v1alpha.ISuggestion, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Suggestion message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Suggestion
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataqna.v1alpha.Suggestion;

                    /**
                     * Decodes a Suggestion message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Suggestion
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataqna.v1alpha.Suggestion;

                    /**
                     * Verifies a Suggestion message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Suggestion message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Suggestion
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataqna.v1alpha.Suggestion;

                    /**
                     * Creates a plain object from a Suggestion message. Also converts values to other types if specified.
                     * @param message Suggestion
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataqna.v1alpha.Suggestion, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Suggestion to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SuggestionInfo. */
                interface ISuggestionInfo {

                    /** SuggestionInfo annotatedSuggestion */
                    annotatedSuggestion?: (google.cloud.dataqna.v1alpha.IAnnotatedString|null);

                    /** SuggestionInfo queryMatches */
                    queryMatches?: (google.cloud.dataqna.v1alpha.SuggestionInfo.IMatchInfo[]|null);
                }

                /** Represents a SuggestionInfo. */
                class SuggestionInfo implements ISuggestionInfo {

                    /**
                     * Constructs a new SuggestionInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataqna.v1alpha.ISuggestionInfo);

                    /** SuggestionInfo annotatedSuggestion. */
                    public annotatedSuggestion?: (google.cloud.dataqna.v1alpha.IAnnotatedString|null);

                    /** SuggestionInfo queryMatches. */
                    public queryMatches: google.cloud.dataqna.v1alpha.SuggestionInfo.IMatchInfo[];

                    /**
                     * Creates a new SuggestionInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SuggestionInfo instance
                     */
                    public static create(properties?: google.cloud.dataqna.v1alpha.ISuggestionInfo): google.cloud.dataqna.v1alpha.SuggestionInfo;

                    /**
                     * Encodes the specified SuggestionInfo message. Does not implicitly {@link google.cloud.dataqna.v1alpha.SuggestionInfo.verify|verify} messages.
                     * @param message SuggestionInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataqna.v1alpha.ISuggestionInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SuggestionInfo message, length delimited. Does not implicitly {@link google.cloud.dataqna.v1alpha.SuggestionInfo.verify|verify} messages.
                     * @param message SuggestionInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataqna.v1alpha.ISuggestionInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SuggestionInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SuggestionInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataqna.v1alpha.SuggestionInfo;

                    /**
                     * Decodes a SuggestionInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SuggestionInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataqna.v1alpha.SuggestionInfo;

                    /**
                     * Verifies a SuggestionInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SuggestionInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SuggestionInfo
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataqna.v1alpha.SuggestionInfo;

                    /**
                     * Creates a plain object from a SuggestionInfo message. Also converts values to other types if specified.
                     * @param message SuggestionInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataqna.v1alpha.SuggestionInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SuggestionInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace SuggestionInfo {

                    /** Properties of a MatchInfo. */
                    interface IMatchInfo {

                        /** MatchInfo startCharIndex */
                        startCharIndex?: (number|null);

                        /** MatchInfo length */
                        length?: (number|null);
                    }

                    /** Represents a MatchInfo. */
                    class MatchInfo implements IMatchInfo {

                        /**
                         * Constructs a new MatchInfo.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.dataqna.v1alpha.SuggestionInfo.IMatchInfo);

                        /** MatchInfo startCharIndex. */
                        public startCharIndex: number;

                        /** MatchInfo length. */
                        public length: number;

                        /**
                         * Creates a new MatchInfo instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns MatchInfo instance
                         */
                        public static create(properties?: google.cloud.dataqna.v1alpha.SuggestionInfo.IMatchInfo): google.cloud.dataqna.v1alpha.SuggestionInfo.MatchInfo;

                        /**
                         * Encodes the specified MatchInfo message. Does not implicitly {@link google.cloud.dataqna.v1alpha.SuggestionInfo.MatchInfo.verify|verify} messages.
                         * @param message MatchInfo message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.dataqna.v1alpha.SuggestionInfo.IMatchInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified MatchInfo message, length delimited. Does not implicitly {@link google.cloud.dataqna.v1alpha.SuggestionInfo.MatchInfo.verify|verify} messages.
                         * @param message MatchInfo message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.dataqna.v1alpha.SuggestionInfo.IMatchInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a MatchInfo message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns MatchInfo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataqna.v1alpha.SuggestionInfo.MatchInfo;

                        /**
                         * Decodes a MatchInfo message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns MatchInfo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataqna.v1alpha.SuggestionInfo.MatchInfo;

                        /**
                         * Verifies a MatchInfo message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a MatchInfo message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns MatchInfo
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.dataqna.v1alpha.SuggestionInfo.MatchInfo;

                        /**
                         * Creates a plain object from a MatchInfo message. Also converts values to other types if specified.
                         * @param message MatchInfo
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.dataqna.v1alpha.SuggestionInfo.MatchInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this MatchInfo to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Properties of a SuggestQueriesResponse. */
                interface ISuggestQueriesResponse {

                    /** SuggestQueriesResponse suggestions */
                    suggestions?: (google.cloud.dataqna.v1alpha.ISuggestion[]|null);
                }

                /** Represents a SuggestQueriesResponse. */
                class SuggestQueriesResponse implements ISuggestQueriesResponse {

                    /**
                     * Constructs a new SuggestQueriesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataqna.v1alpha.ISuggestQueriesResponse);

                    /** SuggestQueriesResponse suggestions. */
                    public suggestions: google.cloud.dataqna.v1alpha.ISuggestion[];

                    /**
                     * Creates a new SuggestQueriesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SuggestQueriesResponse instance
                     */
                    public static create(properties?: google.cloud.dataqna.v1alpha.ISuggestQueriesResponse): google.cloud.dataqna.v1alpha.SuggestQueriesResponse;

                    /**
                     * Encodes the specified SuggestQueriesResponse message. Does not implicitly {@link google.cloud.dataqna.v1alpha.SuggestQueriesResponse.verify|verify} messages.
                     * @param message SuggestQueriesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataqna.v1alpha.ISuggestQueriesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SuggestQueriesResponse message, length delimited. Does not implicitly {@link google.cloud.dataqna.v1alpha.SuggestQueriesResponse.verify|verify} messages.
                     * @param message SuggestQueriesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataqna.v1alpha.ISuggestQueriesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SuggestQueriesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SuggestQueriesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataqna.v1alpha.SuggestQueriesResponse;

                    /**
                     * Decodes a SuggestQueriesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SuggestQueriesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataqna.v1alpha.SuggestQueriesResponse;

                    /**
                     * Verifies a SuggestQueriesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SuggestQueriesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SuggestQueriesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataqna.v1alpha.SuggestQueriesResponse;

                    /**
                     * Creates a plain object from a SuggestQueriesResponse message. Also converts values to other types if specified.
                     * @param message SuggestQueriesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataqna.v1alpha.SuggestQueriesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SuggestQueriesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** SuggestionType enum. */
                enum SuggestionType {
                    SUGGESTION_TYPE_UNSPECIFIED = 0,
                    ENTITY = 1,
                    TEMPLATE = 2
                }

                /** Properties of a Question. */
                interface IQuestion {

                    /** Question name */
                    name?: (string|null);

                    /** Question scopes */
                    scopes?: (string[]|null);

                    /** Question query */
                    query?: (string|null);

                    /** Question dataSourceAnnotations */
                    dataSourceAnnotations?: (string[]|null);

                    /** Question interpretError */
                    interpretError?: (google.cloud.dataqna.v1alpha.IInterpretError|null);

                    /** Question interpretations */
                    interpretations?: (google.cloud.dataqna.v1alpha.IInterpretation[]|null);

                    /** Question createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Question userEmail */
                    userEmail?: (string|null);

                    /** Question debugFlags */
                    debugFlags?: (google.cloud.dataqna.v1alpha.IDebugFlags|null);

                    /** Question debugInfo */
                    debugInfo?: (google.protobuf.IAny|null);
                }

                /** Represents a Question. */
                class Question implements IQuestion {

                    /**
                     * Constructs a new Question.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataqna.v1alpha.IQuestion);

                    /** Question name. */
                    public name: string;

                    /** Question scopes. */
                    public scopes: string[];

                    /** Question query. */
                    public query: string;

                    /** Question dataSourceAnnotations. */
                    public dataSourceAnnotations: string[];

                    /** Question interpretError. */
                    public interpretError?: (google.cloud.dataqna.v1alpha.IInterpretError|null);

                    /** Question interpretations. */
                    public interpretations: google.cloud.dataqna.v1alpha.IInterpretation[];

                    /** Question createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Question userEmail. */
                    public userEmail: string;

                    /** Question debugFlags. */
                    public debugFlags?: (google.cloud.dataqna.v1alpha.IDebugFlags|null);

                    /** Question debugInfo. */
                    public debugInfo?: (google.protobuf.IAny|null);

                    /**
                     * Creates a new Question instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Question instance
                     */
                    public static create(properties?: google.cloud.dataqna.v1alpha.IQuestion): google.cloud.dataqna.v1alpha.Question;

                    /**
                     * Encodes the specified Question message. Does not implicitly {@link google.cloud.dataqna.v1alpha.Question.verify|verify} messages.
                     * @param message Question message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataqna.v1alpha.IQuestion, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Question message, length delimited. Does not implicitly {@link google.cloud.dataqna.v1alpha.Question.verify|verify} messages.
                     * @param message Question message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataqna.v1alpha.IQuestion, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Question message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Question
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataqna.v1alpha.Question;

                    /**
                     * Decodes a Question message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Question
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataqna.v1alpha.Question;

                    /**
                     * Verifies a Question message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Question message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Question
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataqna.v1alpha.Question;

                    /**
                     * Creates a plain object from a Question message. Also converts values to other types if specified.
                     * @param message Question
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataqna.v1alpha.Question, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Question to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an InterpretError. */
                interface IInterpretError {

                    /** InterpretError message */
                    message?: (string|null);

                    /** InterpretError code */
                    code?: (google.cloud.dataqna.v1alpha.InterpretError.InterpretErrorCode|keyof typeof google.cloud.dataqna.v1alpha.InterpretError.InterpretErrorCode|null);

                    /** InterpretError details */
                    details?: (google.cloud.dataqna.v1alpha.InterpretError.IInterpretErrorDetails|null);
                }

                /** Represents an InterpretError. */
                class InterpretError implements IInterpretError {

                    /**
                     * Constructs a new InterpretError.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataqna.v1alpha.IInterpretError);

                    /** InterpretError message. */
                    public message: string;

                    /** InterpretError code. */
                    public code: (google.cloud.dataqna.v1alpha.InterpretError.InterpretErrorCode|keyof typeof google.cloud.dataqna.v1alpha.InterpretError.InterpretErrorCode);

                    /** InterpretError details. */
                    public details?: (google.cloud.dataqna.v1alpha.InterpretError.IInterpretErrorDetails|null);

                    /**
                     * Creates a new InterpretError instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns InterpretError instance
                     */
                    public static create(properties?: google.cloud.dataqna.v1alpha.IInterpretError): google.cloud.dataqna.v1alpha.InterpretError;

                    /**
                     * Encodes the specified InterpretError message. Does not implicitly {@link google.cloud.dataqna.v1alpha.InterpretError.verify|verify} messages.
                     * @param message InterpretError message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataqna.v1alpha.IInterpretError, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified InterpretError message, length delimited. Does not implicitly {@link google.cloud.dataqna.v1alpha.InterpretError.verify|verify} messages.
                     * @param message InterpretError message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataqna.v1alpha.IInterpretError, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an InterpretError message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns InterpretError
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataqna.v1alpha.InterpretError;

                    /**
                     * Decodes an InterpretError message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns InterpretError
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataqna.v1alpha.InterpretError;

                    /**
                     * Verifies an InterpretError message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an InterpretError message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns InterpretError
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataqna.v1alpha.InterpretError;

                    /**
                     * Creates a plain object from an InterpretError message. Also converts values to other types if specified.
                     * @param message InterpretError
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataqna.v1alpha.InterpretError, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this InterpretError to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace InterpretError {

                    /** Properties of an InterpretErrorDetails. */
                    interface IInterpretErrorDetails {

                        /** InterpretErrorDetails unsupportedDetails */
                        unsupportedDetails?: (google.cloud.dataqna.v1alpha.InterpretError.IInterpretUnsupportedDetails|null);

                        /** InterpretErrorDetails incompleteQueryDetails */
                        incompleteQueryDetails?: (google.cloud.dataqna.v1alpha.InterpretError.IInterpretIncompleteQueryDetails|null);

                        /** InterpretErrorDetails ambiguityDetails */
                        ambiguityDetails?: (google.cloud.dataqna.v1alpha.InterpretError.IInterpretAmbiguityDetails|null);
                    }

                    /** Represents an InterpretErrorDetails. */
                    class InterpretErrorDetails implements IInterpretErrorDetails {

                        /**
                         * Constructs a new InterpretErrorDetails.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.dataqna.v1alpha.InterpretError.IInterpretErrorDetails);

                        /** InterpretErrorDetails unsupportedDetails. */
                        public unsupportedDetails?: (google.cloud.dataqna.v1alpha.InterpretError.IInterpretUnsupportedDetails|null);

                        /** InterpretErrorDetails incompleteQueryDetails. */
                        public incompleteQueryDetails?: (google.cloud.dataqna.v1alpha.InterpretError.IInterpretIncompleteQueryDetails|null);

                        /** InterpretErrorDetails ambiguityDetails. */
                        public ambiguityDetails?: (google.cloud.dataqna.v1alpha.InterpretError.IInterpretAmbiguityDetails|null);

                        /**
                         * Creates a new InterpretErrorDetails instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns InterpretErrorDetails instance
                         */
                        public static create(properties?: google.cloud.dataqna.v1alpha.InterpretError.IInterpretErrorDetails): google.cloud.dataqna.v1alpha.InterpretError.InterpretErrorDetails;

                        /**
                         * Encodes the specified InterpretErrorDetails message. Does not implicitly {@link google.cloud.dataqna.v1alpha.InterpretError.InterpretErrorDetails.verify|verify} messages.
                         * @param message InterpretErrorDetails message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.dataqna.v1alpha.InterpretError.IInterpretErrorDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified InterpretErrorDetails message, length delimited. Does not implicitly {@link google.cloud.dataqna.v1alpha.InterpretError.InterpretErrorDetails.verify|verify} messages.
                         * @param message InterpretErrorDetails message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.dataqna.v1alpha.InterpretError.IInterpretErrorDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an InterpretErrorDetails message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns InterpretErrorDetails
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataqna.v1alpha.InterpretError.InterpretErrorDetails;

                        /**
                         * Decodes an InterpretErrorDetails message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns InterpretErrorDetails
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataqna.v1alpha.InterpretError.InterpretErrorDetails;

                        /**
                         * Verifies an InterpretErrorDetails message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an InterpretErrorDetails message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns InterpretErrorDetails
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.dataqna.v1alpha.InterpretError.InterpretErrorDetails;

                        /**
                         * Creates a plain object from an InterpretErrorDetails message. Also converts values to other types if specified.
                         * @param message InterpretErrorDetails
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.dataqna.v1alpha.InterpretError.InterpretErrorDetails, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this InterpretErrorDetails to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an InterpretUnsupportedDetails. */
                    interface IInterpretUnsupportedDetails {

                        /** InterpretUnsupportedDetails operators */
                        operators?: (string[]|null);

                        /** InterpretUnsupportedDetails intent */
                        intent?: (string[]|null);
                    }

                    /** Represents an InterpretUnsupportedDetails. */
                    class InterpretUnsupportedDetails implements IInterpretUnsupportedDetails {

                        /**
                         * Constructs a new InterpretUnsupportedDetails.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.dataqna.v1alpha.InterpretError.IInterpretUnsupportedDetails);

                        /** InterpretUnsupportedDetails operators. */
                        public operators: string[];

                        /** InterpretUnsupportedDetails intent. */
                        public intent: string[];

                        /**
                         * Creates a new InterpretUnsupportedDetails instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns InterpretUnsupportedDetails instance
                         */
                        public static create(properties?: google.cloud.dataqna.v1alpha.InterpretError.IInterpretUnsupportedDetails): google.cloud.dataqna.v1alpha.InterpretError.InterpretUnsupportedDetails;

                        /**
                         * Encodes the specified InterpretUnsupportedDetails message. Does not implicitly {@link google.cloud.dataqna.v1alpha.InterpretError.InterpretUnsupportedDetails.verify|verify} messages.
                         * @param message InterpretUnsupportedDetails message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.dataqna.v1alpha.InterpretError.IInterpretUnsupportedDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified InterpretUnsupportedDetails message, length delimited. Does not implicitly {@link google.cloud.dataqna.v1alpha.InterpretError.InterpretUnsupportedDetails.verify|verify} messages.
                         * @param message InterpretUnsupportedDetails message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.dataqna.v1alpha.InterpretError.IInterpretUnsupportedDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an InterpretUnsupportedDetails message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns InterpretUnsupportedDetails
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataqna.v1alpha.InterpretError.InterpretUnsupportedDetails;

                        /**
                         * Decodes an InterpretUnsupportedDetails message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns InterpretUnsupportedDetails
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataqna.v1alpha.InterpretError.InterpretUnsupportedDetails;

                        /**
                         * Verifies an InterpretUnsupportedDetails message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an InterpretUnsupportedDetails message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns InterpretUnsupportedDetails
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.dataqna.v1alpha.InterpretError.InterpretUnsupportedDetails;

                        /**
                         * Creates a plain object from an InterpretUnsupportedDetails message. Also converts values to other types if specified.
                         * @param message InterpretUnsupportedDetails
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.dataqna.v1alpha.InterpretError.InterpretUnsupportedDetails, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this InterpretUnsupportedDetails to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an InterpretIncompleteQueryDetails. */
                    interface IInterpretIncompleteQueryDetails {

                        /** InterpretIncompleteQueryDetails entities */
                        entities?: (google.cloud.dataqna.v1alpha.InterpretEntity[]|null);
                    }

                    /** Represents an InterpretIncompleteQueryDetails. */
                    class InterpretIncompleteQueryDetails implements IInterpretIncompleteQueryDetails {

                        /**
                         * Constructs a new InterpretIncompleteQueryDetails.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.dataqna.v1alpha.InterpretError.IInterpretIncompleteQueryDetails);

                        /** InterpretIncompleteQueryDetails entities. */
                        public entities: google.cloud.dataqna.v1alpha.InterpretEntity[];

                        /**
                         * Creates a new InterpretIncompleteQueryDetails instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns InterpretIncompleteQueryDetails instance
                         */
                        public static create(properties?: google.cloud.dataqna.v1alpha.InterpretError.IInterpretIncompleteQueryDetails): google.cloud.dataqna.v1alpha.InterpretError.InterpretIncompleteQueryDetails;

                        /**
                         * Encodes the specified InterpretIncompleteQueryDetails message. Does not implicitly {@link google.cloud.dataqna.v1alpha.InterpretError.InterpretIncompleteQueryDetails.verify|verify} messages.
                         * @param message InterpretIncompleteQueryDetails message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.dataqna.v1alpha.InterpretError.IInterpretIncompleteQueryDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified InterpretIncompleteQueryDetails message, length delimited. Does not implicitly {@link google.cloud.dataqna.v1alpha.InterpretError.InterpretIncompleteQueryDetails.verify|verify} messages.
                         * @param message InterpretIncompleteQueryDetails message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.dataqna.v1alpha.InterpretError.IInterpretIncompleteQueryDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an InterpretIncompleteQueryDetails message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns InterpretIncompleteQueryDetails
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataqna.v1alpha.InterpretError.InterpretIncompleteQueryDetails;

                        /**
                         * Decodes an InterpretIncompleteQueryDetails message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns InterpretIncompleteQueryDetails
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataqna.v1alpha.InterpretError.InterpretIncompleteQueryDetails;

                        /**
                         * Verifies an InterpretIncompleteQueryDetails message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an InterpretIncompleteQueryDetails message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns InterpretIncompleteQueryDetails
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.dataqna.v1alpha.InterpretError.InterpretIncompleteQueryDetails;

                        /**
                         * Creates a plain object from an InterpretIncompleteQueryDetails message. Also converts values to other types if specified.
                         * @param message InterpretIncompleteQueryDetails
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.dataqna.v1alpha.InterpretError.InterpretIncompleteQueryDetails, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this InterpretIncompleteQueryDetails to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an InterpretAmbiguityDetails. */
                    interface IInterpretAmbiguityDetails {
                    }

                    /** Represents an InterpretAmbiguityDetails. */
                    class InterpretAmbiguityDetails implements IInterpretAmbiguityDetails {

                        /**
                         * Constructs a new InterpretAmbiguityDetails.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.dataqna.v1alpha.InterpretError.IInterpretAmbiguityDetails);

                        /**
                         * Creates a new InterpretAmbiguityDetails instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns InterpretAmbiguityDetails instance
                         */
                        public static create(properties?: google.cloud.dataqna.v1alpha.InterpretError.IInterpretAmbiguityDetails): google.cloud.dataqna.v1alpha.InterpretError.InterpretAmbiguityDetails;

                        /**
                         * Encodes the specified InterpretAmbiguityDetails message. Does not implicitly {@link google.cloud.dataqna.v1alpha.InterpretError.InterpretAmbiguityDetails.verify|verify} messages.
                         * @param message InterpretAmbiguityDetails message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.dataqna.v1alpha.InterpretError.IInterpretAmbiguityDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified InterpretAmbiguityDetails message, length delimited. Does not implicitly {@link google.cloud.dataqna.v1alpha.InterpretError.InterpretAmbiguityDetails.verify|verify} messages.
                         * @param message InterpretAmbiguityDetails message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.dataqna.v1alpha.InterpretError.IInterpretAmbiguityDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an InterpretAmbiguityDetails message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns InterpretAmbiguityDetails
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataqna.v1alpha.InterpretError.InterpretAmbiguityDetails;

                        /**
                         * Decodes an InterpretAmbiguityDetails message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns InterpretAmbiguityDetails
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataqna.v1alpha.InterpretError.InterpretAmbiguityDetails;

                        /**
                         * Verifies an InterpretAmbiguityDetails message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an InterpretAmbiguityDetails message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns InterpretAmbiguityDetails
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.dataqna.v1alpha.InterpretError.InterpretAmbiguityDetails;

                        /**
                         * Creates a plain object from an InterpretAmbiguityDetails message. Also converts values to other types if specified.
                         * @param message InterpretAmbiguityDetails
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.dataqna.v1alpha.InterpretError.InterpretAmbiguityDetails, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this InterpretAmbiguityDetails to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** InterpretErrorCode enum. */
                    enum InterpretErrorCode {
                        INTERPRET_ERROR_CODE_UNSPECIFIED = 0,
                        INVALID_QUERY = 1,
                        FAILED_TO_UNDERSTAND = 2,
                        FAILED_TO_ANSWER = 3
                    }
                }

                /** Properties of an ExecutionInfo. */
                interface IExecutionInfo {

                    /** ExecutionInfo jobCreationStatus */
                    jobCreationStatus?: (google.rpc.IStatus|null);

                    /** ExecutionInfo jobExecutionState */
                    jobExecutionState?: (google.cloud.dataqna.v1alpha.ExecutionInfo.JobExecutionState|keyof typeof google.cloud.dataqna.v1alpha.ExecutionInfo.JobExecutionState|null);

                    /** ExecutionInfo createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** ExecutionInfo bigqueryJob */
                    bigqueryJob?: (google.cloud.dataqna.v1alpha.IBigQueryJob|null);
                }

                /** Represents an ExecutionInfo. */
                class ExecutionInfo implements IExecutionInfo {

                    /**
                     * Constructs a new ExecutionInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataqna.v1alpha.IExecutionInfo);

                    /** ExecutionInfo jobCreationStatus. */
                    public jobCreationStatus?: (google.rpc.IStatus|null);

                    /** ExecutionInfo jobExecutionState. */
                    public jobExecutionState: (google.cloud.dataqna.v1alpha.ExecutionInfo.JobExecutionState|keyof typeof google.cloud.dataqna.v1alpha.ExecutionInfo.JobExecutionState);

                    /** ExecutionInfo createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** ExecutionInfo bigqueryJob. */
                    public bigqueryJob?: (google.cloud.dataqna.v1alpha.IBigQueryJob|null);

                    /**
                     * Creates a new ExecutionInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ExecutionInfo instance
                     */
                    public static create(properties?: google.cloud.dataqna.v1alpha.IExecutionInfo): google.cloud.dataqna.v1alpha.ExecutionInfo;

                    /**
                     * Encodes the specified ExecutionInfo message. Does not implicitly {@link google.cloud.dataqna.v1alpha.ExecutionInfo.verify|verify} messages.
                     * @param message ExecutionInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataqna.v1alpha.IExecutionInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ExecutionInfo message, length delimited. Does not implicitly {@link google.cloud.dataqna.v1alpha.ExecutionInfo.verify|verify} messages.
                     * @param message ExecutionInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataqna.v1alpha.IExecutionInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ExecutionInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ExecutionInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataqna.v1alpha.ExecutionInfo;

                    /**
                     * Decodes an ExecutionInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ExecutionInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataqna.v1alpha.ExecutionInfo;

                    /**
                     * Verifies an ExecutionInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ExecutionInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ExecutionInfo
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataqna.v1alpha.ExecutionInfo;

                    /**
                     * Creates a plain object from an ExecutionInfo message. Also converts values to other types if specified.
                     * @param message ExecutionInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataqna.v1alpha.ExecutionInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ExecutionInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace ExecutionInfo {

                    /** JobExecutionState enum. */
                    enum JobExecutionState {
                        JOB_EXECUTION_STATE_UNSPECIFIED = 0,
                        NOT_EXECUTED = 1,
                        RUNNING = 2,
                        SUCCEEDED = 3,
                        FAILED = 4
                    }
                }

                /** Properties of a BigQueryJob. */
                interface IBigQueryJob {

                    /** BigQueryJob jobId */
                    jobId?: (string|null);

                    /** BigQueryJob projectId */
                    projectId?: (string|null);

                    /** BigQueryJob location */
                    location?: (string|null);
                }

                /** Represents a BigQueryJob. */
                class BigQueryJob implements IBigQueryJob {

                    /**
                     * Constructs a new BigQueryJob.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataqna.v1alpha.IBigQueryJob);

                    /** BigQueryJob jobId. */
                    public jobId: string;

                    /** BigQueryJob projectId. */
                    public projectId: string;

                    /** BigQueryJob location. */
                    public location: string;

                    /**
                     * Creates a new BigQueryJob instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BigQueryJob instance
                     */
                    public static create(properties?: google.cloud.dataqna.v1alpha.IBigQueryJob): google.cloud.dataqna.v1alpha.BigQueryJob;

                    /**
                     * Encodes the specified BigQueryJob message. Does not implicitly {@link google.cloud.dataqna.v1alpha.BigQueryJob.verify|verify} messages.
                     * @param message BigQueryJob message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataqna.v1alpha.IBigQueryJob, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BigQueryJob message, length delimited. Does not implicitly {@link google.cloud.dataqna.v1alpha.BigQueryJob.verify|verify} messages.
                     * @param message BigQueryJob message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataqna.v1alpha.IBigQueryJob, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BigQueryJob message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BigQueryJob
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataqna.v1alpha.BigQueryJob;

                    /**
                     * Decodes a BigQueryJob message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BigQueryJob
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataqna.v1alpha.BigQueryJob;

                    /**
                     * Verifies a BigQueryJob message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BigQueryJob message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BigQueryJob
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataqna.v1alpha.BigQueryJob;

                    /**
                     * Creates a plain object from a BigQueryJob message. Also converts values to other types if specified.
                     * @param message BigQueryJob
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataqna.v1alpha.BigQueryJob, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BigQueryJob to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an Interpretation. */
                interface IInterpretation {

                    /** Interpretation dataSources */
                    dataSources?: (string[]|null);

                    /** Interpretation confidence */
                    confidence?: (number|null);

                    /** Interpretation unusedPhrases */
                    unusedPhrases?: (string[]|null);

                    /** Interpretation humanReadable */
                    humanReadable?: (google.cloud.dataqna.v1alpha.IHumanReadable|null);

                    /** Interpretation interpretationStructure */
                    interpretationStructure?: (google.cloud.dataqna.v1alpha.IInterpretationStructure|null);

                    /** Interpretation dataQuery */
                    dataQuery?: (google.cloud.dataqna.v1alpha.IDataQuery|null);

                    /** Interpretation executionInfo */
                    executionInfo?: (google.cloud.dataqna.v1alpha.IExecutionInfo|null);
                }

                /** Represents an Interpretation. */
                class Interpretation implements IInterpretation {

                    /**
                     * Constructs a new Interpretation.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataqna.v1alpha.IInterpretation);

                    /** Interpretation dataSources. */
                    public dataSources: string[];

                    /** Interpretation confidence. */
                    public confidence: number;

                    /** Interpretation unusedPhrases. */
                    public unusedPhrases: string[];

                    /** Interpretation humanReadable. */
                    public humanReadable?: (google.cloud.dataqna.v1alpha.IHumanReadable|null);

                    /** Interpretation interpretationStructure. */
                    public interpretationStructure?: (google.cloud.dataqna.v1alpha.IInterpretationStructure|null);

                    /** Interpretation dataQuery. */
                    public dataQuery?: (google.cloud.dataqna.v1alpha.IDataQuery|null);

                    /** Interpretation executionInfo. */
                    public executionInfo?: (google.cloud.dataqna.v1alpha.IExecutionInfo|null);

                    /**
                     * Creates a new Interpretation instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Interpretation instance
                     */
                    public static create(properties?: google.cloud.dataqna.v1alpha.IInterpretation): google.cloud.dataqna.v1alpha.Interpretation;

                    /**
                     * Encodes the specified Interpretation message. Does not implicitly {@link google.cloud.dataqna.v1alpha.Interpretation.verify|verify} messages.
                     * @param message Interpretation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataqna.v1alpha.IInterpretation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Interpretation message, length delimited. Does not implicitly {@link google.cloud.dataqna.v1alpha.Interpretation.verify|verify} messages.
                     * @param message Interpretation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataqna.v1alpha.IInterpretation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Interpretation message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Interpretation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataqna.v1alpha.Interpretation;

                    /**
                     * Decodes an Interpretation message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Interpretation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataqna.v1alpha.Interpretation;

                    /**
                     * Verifies an Interpretation message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Interpretation message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Interpretation
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataqna.v1alpha.Interpretation;

                    /**
                     * Creates a plain object from an Interpretation message. Also converts values to other types if specified.
                     * @param message Interpretation
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataqna.v1alpha.Interpretation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Interpretation to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DataQuery. */
                interface IDataQuery {

                    /** DataQuery sql */
                    sql?: (string|null);
                }

                /** Represents a DataQuery. */
                class DataQuery implements IDataQuery {

                    /**
                     * Constructs a new DataQuery.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataqna.v1alpha.IDataQuery);

                    /** DataQuery sql. */
                    public sql: string;

                    /**
                     * Creates a new DataQuery instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DataQuery instance
                     */
                    public static create(properties?: google.cloud.dataqna.v1alpha.IDataQuery): google.cloud.dataqna.v1alpha.DataQuery;

                    /**
                     * Encodes the specified DataQuery message. Does not implicitly {@link google.cloud.dataqna.v1alpha.DataQuery.verify|verify} messages.
                     * @param message DataQuery message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataqna.v1alpha.IDataQuery, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DataQuery message, length delimited. Does not implicitly {@link google.cloud.dataqna.v1alpha.DataQuery.verify|verify} messages.
                     * @param message DataQuery message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataqna.v1alpha.IDataQuery, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DataQuery message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DataQuery
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataqna.v1alpha.DataQuery;

                    /**
                     * Decodes a DataQuery message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DataQuery
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataqna.v1alpha.DataQuery;

                    /**
                     * Verifies a DataQuery message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DataQuery message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DataQuery
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataqna.v1alpha.DataQuery;

                    /**
                     * Creates a plain object from a DataQuery message. Also converts values to other types if specified.
                     * @param message DataQuery
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataqna.v1alpha.DataQuery, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DataQuery to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a HumanReadable. */
                interface IHumanReadable {

                    /** HumanReadable generatedInterpretation */
                    generatedInterpretation?: (google.cloud.dataqna.v1alpha.IAnnotatedString|null);

                    /** HumanReadable originalQuestion */
                    originalQuestion?: (google.cloud.dataqna.v1alpha.IAnnotatedString|null);
                }

                /** Represents a HumanReadable. */
                class HumanReadable implements IHumanReadable {

                    /**
                     * Constructs a new HumanReadable.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataqna.v1alpha.IHumanReadable);

                    /** HumanReadable generatedInterpretation. */
                    public generatedInterpretation?: (google.cloud.dataqna.v1alpha.IAnnotatedString|null);

                    /** HumanReadable originalQuestion. */
                    public originalQuestion?: (google.cloud.dataqna.v1alpha.IAnnotatedString|null);

                    /**
                     * Creates a new HumanReadable instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns HumanReadable instance
                     */
                    public static create(properties?: google.cloud.dataqna.v1alpha.IHumanReadable): google.cloud.dataqna.v1alpha.HumanReadable;

                    /**
                     * Encodes the specified HumanReadable message. Does not implicitly {@link google.cloud.dataqna.v1alpha.HumanReadable.verify|verify} messages.
                     * @param message HumanReadable message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataqna.v1alpha.IHumanReadable, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified HumanReadable message, length delimited. Does not implicitly {@link google.cloud.dataqna.v1alpha.HumanReadable.verify|verify} messages.
                     * @param message HumanReadable message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataqna.v1alpha.IHumanReadable, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a HumanReadable message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns HumanReadable
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataqna.v1alpha.HumanReadable;

                    /**
                     * Decodes a HumanReadable message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns HumanReadable
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataqna.v1alpha.HumanReadable;

                    /**
                     * Verifies a HumanReadable message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a HumanReadable message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns HumanReadable
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataqna.v1alpha.HumanReadable;

                    /**
                     * Creates a plain object from a HumanReadable message. Also converts values to other types if specified.
                     * @param message HumanReadable
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataqna.v1alpha.HumanReadable, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this HumanReadable to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an InterpretationStructure. */
                interface IInterpretationStructure {

                    /** InterpretationStructure visualizationTypes */
                    visualizationTypes?: (google.cloud.dataqna.v1alpha.InterpretationStructure.VisualizationType[]|null);

                    /** InterpretationStructure columnInfo */
                    columnInfo?: (google.cloud.dataqna.v1alpha.InterpretationStructure.IColumnInfo[]|null);
                }

                /** Represents an InterpretationStructure. */
                class InterpretationStructure implements IInterpretationStructure {

                    /**
                     * Constructs a new InterpretationStructure.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataqna.v1alpha.IInterpretationStructure);

                    /** InterpretationStructure visualizationTypes. */
                    public visualizationTypes: google.cloud.dataqna.v1alpha.InterpretationStructure.VisualizationType[];

                    /** InterpretationStructure columnInfo. */
                    public columnInfo: google.cloud.dataqna.v1alpha.InterpretationStructure.IColumnInfo[];

                    /**
                     * Creates a new InterpretationStructure instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns InterpretationStructure instance
                     */
                    public static create(properties?: google.cloud.dataqna.v1alpha.IInterpretationStructure): google.cloud.dataqna.v1alpha.InterpretationStructure;

                    /**
                     * Encodes the specified InterpretationStructure message. Does not implicitly {@link google.cloud.dataqna.v1alpha.InterpretationStructure.verify|verify} messages.
                     * @param message InterpretationStructure message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataqna.v1alpha.IInterpretationStructure, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified InterpretationStructure message, length delimited. Does not implicitly {@link google.cloud.dataqna.v1alpha.InterpretationStructure.verify|verify} messages.
                     * @param message InterpretationStructure message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataqna.v1alpha.IInterpretationStructure, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an InterpretationStructure message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns InterpretationStructure
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataqna.v1alpha.InterpretationStructure;

                    /**
                     * Decodes an InterpretationStructure message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns InterpretationStructure
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataqna.v1alpha.InterpretationStructure;

                    /**
                     * Verifies an InterpretationStructure message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an InterpretationStructure message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns InterpretationStructure
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataqna.v1alpha.InterpretationStructure;

                    /**
                     * Creates a plain object from an InterpretationStructure message. Also converts values to other types if specified.
                     * @param message InterpretationStructure
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataqna.v1alpha.InterpretationStructure, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this InterpretationStructure to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace InterpretationStructure {

                    /** Properties of a ColumnInfo. */
                    interface IColumnInfo {

                        /** ColumnInfo outputAlias */
                        outputAlias?: (string|null);

                        /** ColumnInfo displayName */
                        displayName?: (string|null);
                    }

                    /** Represents a ColumnInfo. */
                    class ColumnInfo implements IColumnInfo {

                        /**
                         * Constructs a new ColumnInfo.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.dataqna.v1alpha.InterpretationStructure.IColumnInfo);

                        /** ColumnInfo outputAlias. */
                        public outputAlias: string;

                        /** ColumnInfo displayName. */
                        public displayName: string;

                        /**
                         * Creates a new ColumnInfo instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ColumnInfo instance
                         */
                        public static create(properties?: google.cloud.dataqna.v1alpha.InterpretationStructure.IColumnInfo): google.cloud.dataqna.v1alpha.InterpretationStructure.ColumnInfo;

                        /**
                         * Encodes the specified ColumnInfo message. Does not implicitly {@link google.cloud.dataqna.v1alpha.InterpretationStructure.ColumnInfo.verify|verify} messages.
                         * @param message ColumnInfo message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.dataqna.v1alpha.InterpretationStructure.IColumnInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ColumnInfo message, length delimited. Does not implicitly {@link google.cloud.dataqna.v1alpha.InterpretationStructure.ColumnInfo.verify|verify} messages.
                         * @param message ColumnInfo message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.dataqna.v1alpha.InterpretationStructure.IColumnInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ColumnInfo message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ColumnInfo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataqna.v1alpha.InterpretationStructure.ColumnInfo;

                        /**
                         * Decodes a ColumnInfo message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ColumnInfo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataqna.v1alpha.InterpretationStructure.ColumnInfo;

                        /**
                         * Verifies a ColumnInfo message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ColumnInfo message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ColumnInfo
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.dataqna.v1alpha.InterpretationStructure.ColumnInfo;

                        /**
                         * Creates a plain object from a ColumnInfo message. Also converts values to other types if specified.
                         * @param message ColumnInfo
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.dataqna.v1alpha.InterpretationStructure.ColumnInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ColumnInfo to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** VisualizationType enum. */
                    enum VisualizationType {
                        VISUALIZATION_TYPE_UNSPECIFIED = 0,
                        TABLE = 1,
                        BAR_CHART = 2,
                        COLUMN_CHART = 3,
                        TIMELINE = 4,
                        SCATTER_PLOT = 5,
                        PIE_CHART = 6,
                        LINE_CHART = 7,
                        AREA_CHART = 8,
                        COMBO_CHART = 9,
                        HISTOGRAM = 10,
                        GENERIC_CHART = 11,
                        CHART_NOT_UNDERSTOOD = 12
                    }
                }

                /** Properties of a DebugFlags. */
                interface IDebugFlags {

                    /** DebugFlags includeVaQuery */
                    includeVaQuery?: (boolean|null);

                    /** DebugFlags includeNestedVaQuery */
                    includeNestedVaQuery?: (boolean|null);

                    /** DebugFlags includeHumanInterpretation */
                    includeHumanInterpretation?: (boolean|null);

                    /** DebugFlags includeAquaDebugResponse */
                    includeAquaDebugResponse?: (boolean|null);

                    /** DebugFlags timeOverride */
                    timeOverride?: (number|Long|string|null);

                    /** DebugFlags isInternalGoogleUser */
                    isInternalGoogleUser?: (boolean|null);

                    /** DebugFlags ignoreCache */
                    ignoreCache?: (boolean|null);

                    /** DebugFlags includeSearchEntitiesRpc */
                    includeSearchEntitiesRpc?: (boolean|null);

                    /** DebugFlags includeListColumnAnnotationsRpc */
                    includeListColumnAnnotationsRpc?: (boolean|null);

                    /** DebugFlags includeVirtualAnalystEntities */
                    includeVirtualAnalystEntities?: (boolean|null);

                    /** DebugFlags includeTableList */
                    includeTableList?: (boolean|null);

                    /** DebugFlags includeDomainList */
                    includeDomainList?: (boolean|null);
                }

                /** Represents a DebugFlags. */
                class DebugFlags implements IDebugFlags {

                    /**
                     * Constructs a new DebugFlags.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataqna.v1alpha.IDebugFlags);

                    /** DebugFlags includeVaQuery. */
                    public includeVaQuery: boolean;

                    /** DebugFlags includeNestedVaQuery. */
                    public includeNestedVaQuery: boolean;

                    /** DebugFlags includeHumanInterpretation. */
                    public includeHumanInterpretation: boolean;

                    /** DebugFlags includeAquaDebugResponse. */
                    public includeAquaDebugResponse: boolean;

                    /** DebugFlags timeOverride. */
                    public timeOverride: (number|Long|string);

                    /** DebugFlags isInternalGoogleUser. */
                    public isInternalGoogleUser: boolean;

                    /** DebugFlags ignoreCache. */
                    public ignoreCache: boolean;

                    /** DebugFlags includeSearchEntitiesRpc. */
                    public includeSearchEntitiesRpc: boolean;

                    /** DebugFlags includeListColumnAnnotationsRpc. */
                    public includeListColumnAnnotationsRpc: boolean;

                    /** DebugFlags includeVirtualAnalystEntities. */
                    public includeVirtualAnalystEntities: boolean;

                    /** DebugFlags includeTableList. */
                    public includeTableList: boolean;

                    /** DebugFlags includeDomainList. */
                    public includeDomainList: boolean;

                    /**
                     * Creates a new DebugFlags instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DebugFlags instance
                     */
                    public static create(properties?: google.cloud.dataqna.v1alpha.IDebugFlags): google.cloud.dataqna.v1alpha.DebugFlags;

                    /**
                     * Encodes the specified DebugFlags message. Does not implicitly {@link google.cloud.dataqna.v1alpha.DebugFlags.verify|verify} messages.
                     * @param message DebugFlags message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataqna.v1alpha.IDebugFlags, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DebugFlags message, length delimited. Does not implicitly {@link google.cloud.dataqna.v1alpha.DebugFlags.verify|verify} messages.
                     * @param message DebugFlags message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataqna.v1alpha.IDebugFlags, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DebugFlags message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DebugFlags
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataqna.v1alpha.DebugFlags;

                    /**
                     * Decodes a DebugFlags message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DebugFlags
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataqna.v1alpha.DebugFlags;

                    /**
                     * Verifies a DebugFlags message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DebugFlags message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DebugFlags
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataqna.v1alpha.DebugFlags;

                    /**
                     * Creates a plain object from a DebugFlags message. Also converts values to other types if specified.
                     * @param message DebugFlags
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataqna.v1alpha.DebugFlags, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DebugFlags to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** InterpretEntity enum. */
                enum InterpretEntity {
                    INTERPRET_ENTITY_UNSPECIFIED = 0,
                    DIMENSION = 1,
                    METRIC = 2
                }

                /** Represents a QuestionService */
                class QuestionService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new QuestionService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new QuestionService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): QuestionService;

                    /**
                     * Calls GetQuestion.
                     * @param request GetQuestionRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Question
                     */
                    public getQuestion(request: google.cloud.dataqna.v1alpha.IGetQuestionRequest, callback: google.cloud.dataqna.v1alpha.QuestionService.GetQuestionCallback): void;

                    /**
                     * Calls GetQuestion.
                     * @param request GetQuestionRequest message or plain object
                     * @returns Promise
                     */
                    public getQuestion(request: google.cloud.dataqna.v1alpha.IGetQuestionRequest): Promise<google.cloud.dataqna.v1alpha.Question>;

                    /**
                     * Calls CreateQuestion.
                     * @param request CreateQuestionRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Question
                     */
                    public createQuestion(request: google.cloud.dataqna.v1alpha.ICreateQuestionRequest, callback: google.cloud.dataqna.v1alpha.QuestionService.CreateQuestionCallback): void;

                    /**
                     * Calls CreateQuestion.
                     * @param request CreateQuestionRequest message or plain object
                     * @returns Promise
                     */
                    public createQuestion(request: google.cloud.dataqna.v1alpha.ICreateQuestionRequest): Promise<google.cloud.dataqna.v1alpha.Question>;

                    /**
                     * Calls ExecuteQuestion.
                     * @param request ExecuteQuestionRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Question
                     */
                    public executeQuestion(request: google.cloud.dataqna.v1alpha.IExecuteQuestionRequest, callback: google.cloud.dataqna.v1alpha.QuestionService.ExecuteQuestionCallback): void;

                    /**
                     * Calls ExecuteQuestion.
                     * @param request ExecuteQuestionRequest message or plain object
                     * @returns Promise
                     */
                    public executeQuestion(request: google.cloud.dataqna.v1alpha.IExecuteQuestionRequest): Promise<google.cloud.dataqna.v1alpha.Question>;

                    /**
                     * Calls GetUserFeedback.
                     * @param request GetUserFeedbackRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and UserFeedback
                     */
                    public getUserFeedback(request: google.cloud.dataqna.v1alpha.IGetUserFeedbackRequest, callback: google.cloud.dataqna.v1alpha.QuestionService.GetUserFeedbackCallback): void;

                    /**
                     * Calls GetUserFeedback.
                     * @param request GetUserFeedbackRequest message or plain object
                     * @returns Promise
                     */
                    public getUserFeedback(request: google.cloud.dataqna.v1alpha.IGetUserFeedbackRequest): Promise<google.cloud.dataqna.v1alpha.UserFeedback>;

                    /**
                     * Calls UpdateUserFeedback.
                     * @param request UpdateUserFeedbackRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and UserFeedback
                     */
                    public updateUserFeedback(request: google.cloud.dataqna.v1alpha.IUpdateUserFeedbackRequest, callback: google.cloud.dataqna.v1alpha.QuestionService.UpdateUserFeedbackCallback): void;

                    /**
                     * Calls UpdateUserFeedback.
                     * @param request UpdateUserFeedbackRequest message or plain object
                     * @returns Promise
                     */
                    public updateUserFeedback(request: google.cloud.dataqna.v1alpha.IUpdateUserFeedbackRequest): Promise<google.cloud.dataqna.v1alpha.UserFeedback>;
                }

                namespace QuestionService {

                    /**
                     * Callback as used by {@link google.cloud.dataqna.v1alpha.QuestionService#getQuestion}.
                     * @param error Error, if any
                     * @param [response] Question
                     */
                    type GetQuestionCallback = (error: (Error|null), response?: google.cloud.dataqna.v1alpha.Question) => void;

                    /**
                     * Callback as used by {@link google.cloud.dataqna.v1alpha.QuestionService#createQuestion}.
                     * @param error Error, if any
                     * @param [response] Question
                     */
                    type CreateQuestionCallback = (error: (Error|null), response?: google.cloud.dataqna.v1alpha.Question) => void;

                    /**
                     * Callback as used by {@link google.cloud.dataqna.v1alpha.QuestionService#executeQuestion}.
                     * @param error Error, if any
                     * @param [response] Question
                     */
                    type ExecuteQuestionCallback = (error: (Error|null), response?: google.cloud.dataqna.v1alpha.Question) => void;

                    /**
                     * Callback as used by {@link google.cloud.dataqna.v1alpha.QuestionService#getUserFeedback}.
                     * @param error Error, if any
                     * @param [response] UserFeedback
                     */
                    type GetUserFeedbackCallback = (error: (Error|null), response?: google.cloud.dataqna.v1alpha.UserFeedback) => void;

                    /**
                     * Callback as used by {@link google.cloud.dataqna.v1alpha.QuestionService#updateUserFeedback}.
                     * @param error Error, if any
                     * @param [response] UserFeedback
                     */
                    type UpdateUserFeedbackCallback = (error: (Error|null), response?: google.cloud.dataqna.v1alpha.UserFeedback) => void;
                }

                /** Properties of a GetQuestionRequest. */
                interface IGetQuestionRequest {

                    /** GetQuestionRequest name */
                    name?: (string|null);

                    /** GetQuestionRequest readMask */
                    readMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents a GetQuestionRequest. */
                class GetQuestionRequest implements IGetQuestionRequest {

                    /**
                     * Constructs a new GetQuestionRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataqna.v1alpha.IGetQuestionRequest);

                    /** GetQuestionRequest name. */
                    public name: string;

                    /** GetQuestionRequest readMask. */
                    public readMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new GetQuestionRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetQuestionRequest instance
                     */
                    public static create(properties?: google.cloud.dataqna.v1alpha.IGetQuestionRequest): google.cloud.dataqna.v1alpha.GetQuestionRequest;

                    /**
                     * Encodes the specified GetQuestionRequest message. Does not implicitly {@link google.cloud.dataqna.v1alpha.GetQuestionRequest.verify|verify} messages.
                     * @param message GetQuestionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataqna.v1alpha.IGetQuestionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetQuestionRequest message, length delimited. Does not implicitly {@link google.cloud.dataqna.v1alpha.GetQuestionRequest.verify|verify} messages.
                     * @param message GetQuestionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataqna.v1alpha.IGetQuestionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetQuestionRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetQuestionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataqna.v1alpha.GetQuestionRequest;

                    /**
                     * Decodes a GetQuestionRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetQuestionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataqna.v1alpha.GetQuestionRequest;

                    /**
                     * Verifies a GetQuestionRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetQuestionRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetQuestionRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataqna.v1alpha.GetQuestionRequest;

                    /**
                     * Creates a plain object from a GetQuestionRequest message. Also converts values to other types if specified.
                     * @param message GetQuestionRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataqna.v1alpha.GetQuestionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetQuestionRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateQuestionRequest. */
                interface ICreateQuestionRequest {

                    /** CreateQuestionRequest parent */
                    parent?: (string|null);

                    /** CreateQuestionRequest question */
                    question?: (google.cloud.dataqna.v1alpha.IQuestion|null);
                }

                /** Represents a CreateQuestionRequest. */
                class CreateQuestionRequest implements ICreateQuestionRequest {

                    /**
                     * Constructs a new CreateQuestionRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataqna.v1alpha.ICreateQuestionRequest);

                    /** CreateQuestionRequest parent. */
                    public parent: string;

                    /** CreateQuestionRequest question. */
                    public question?: (google.cloud.dataqna.v1alpha.IQuestion|null);

                    /**
                     * Creates a new CreateQuestionRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateQuestionRequest instance
                     */
                    public static create(properties?: google.cloud.dataqna.v1alpha.ICreateQuestionRequest): google.cloud.dataqna.v1alpha.CreateQuestionRequest;

                    /**
                     * Encodes the specified CreateQuestionRequest message. Does not implicitly {@link google.cloud.dataqna.v1alpha.CreateQuestionRequest.verify|verify} messages.
                     * @param message CreateQuestionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataqna.v1alpha.ICreateQuestionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateQuestionRequest message, length delimited. Does not implicitly {@link google.cloud.dataqna.v1alpha.CreateQuestionRequest.verify|verify} messages.
                     * @param message CreateQuestionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataqna.v1alpha.ICreateQuestionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateQuestionRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateQuestionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataqna.v1alpha.CreateQuestionRequest;

                    /**
                     * Decodes a CreateQuestionRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateQuestionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataqna.v1alpha.CreateQuestionRequest;

                    /**
                     * Verifies a CreateQuestionRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateQuestionRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateQuestionRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataqna.v1alpha.CreateQuestionRequest;

                    /**
                     * Creates a plain object from a CreateQuestionRequest message. Also converts values to other types if specified.
                     * @param message CreateQuestionRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataqna.v1alpha.CreateQuestionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateQuestionRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an ExecuteQuestionRequest. */
                interface IExecuteQuestionRequest {

                    /** ExecuteQuestionRequest name */
                    name?: (string|null);

                    /** ExecuteQuestionRequest interpretationIndex */
                    interpretationIndex?: (number|null);
                }

                /** Represents an ExecuteQuestionRequest. */
                class ExecuteQuestionRequest implements IExecuteQuestionRequest {

                    /**
                     * Constructs a new ExecuteQuestionRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataqna.v1alpha.IExecuteQuestionRequest);

                    /** ExecuteQuestionRequest name. */
                    public name: string;

                    /** ExecuteQuestionRequest interpretationIndex. */
                    public interpretationIndex: number;

                    /**
                     * Creates a new ExecuteQuestionRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ExecuteQuestionRequest instance
                     */
                    public static create(properties?: google.cloud.dataqna.v1alpha.IExecuteQuestionRequest): google.cloud.dataqna.v1alpha.ExecuteQuestionRequest;

                    /**
                     * Encodes the specified ExecuteQuestionRequest message. Does not implicitly {@link google.cloud.dataqna.v1alpha.ExecuteQuestionRequest.verify|verify} messages.
                     * @param message ExecuteQuestionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataqna.v1alpha.IExecuteQuestionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ExecuteQuestionRequest message, length delimited. Does not implicitly {@link google.cloud.dataqna.v1alpha.ExecuteQuestionRequest.verify|verify} messages.
                     * @param message ExecuteQuestionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataqna.v1alpha.IExecuteQuestionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ExecuteQuestionRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ExecuteQuestionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataqna.v1alpha.ExecuteQuestionRequest;

                    /**
                     * Decodes an ExecuteQuestionRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ExecuteQuestionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataqna.v1alpha.ExecuteQuestionRequest;

                    /**
                     * Verifies an ExecuteQuestionRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ExecuteQuestionRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ExecuteQuestionRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataqna.v1alpha.ExecuteQuestionRequest;

                    /**
                     * Creates a plain object from an ExecuteQuestionRequest message. Also converts values to other types if specified.
                     * @param message ExecuteQuestionRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataqna.v1alpha.ExecuteQuestionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ExecuteQuestionRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetUserFeedbackRequest. */
                interface IGetUserFeedbackRequest {

                    /** GetUserFeedbackRequest name */
                    name?: (string|null);
                }

                /** Represents a GetUserFeedbackRequest. */
                class GetUserFeedbackRequest implements IGetUserFeedbackRequest {

                    /**
                     * Constructs a new GetUserFeedbackRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataqna.v1alpha.IGetUserFeedbackRequest);

                    /** GetUserFeedbackRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetUserFeedbackRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetUserFeedbackRequest instance
                     */
                    public static create(properties?: google.cloud.dataqna.v1alpha.IGetUserFeedbackRequest): google.cloud.dataqna.v1alpha.GetUserFeedbackRequest;

                    /**
                     * Encodes the specified GetUserFeedbackRequest message. Does not implicitly {@link google.cloud.dataqna.v1alpha.GetUserFeedbackRequest.verify|verify} messages.
                     * @param message GetUserFeedbackRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataqna.v1alpha.IGetUserFeedbackRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetUserFeedbackRequest message, length delimited. Does not implicitly {@link google.cloud.dataqna.v1alpha.GetUserFeedbackRequest.verify|verify} messages.
                     * @param message GetUserFeedbackRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataqna.v1alpha.IGetUserFeedbackRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetUserFeedbackRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetUserFeedbackRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataqna.v1alpha.GetUserFeedbackRequest;

                    /**
                     * Decodes a GetUserFeedbackRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetUserFeedbackRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataqna.v1alpha.GetUserFeedbackRequest;

                    /**
                     * Verifies a GetUserFeedbackRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetUserFeedbackRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetUserFeedbackRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataqna.v1alpha.GetUserFeedbackRequest;

                    /**
                     * Creates a plain object from a GetUserFeedbackRequest message. Also converts values to other types if specified.
                     * @param message GetUserFeedbackRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataqna.v1alpha.GetUserFeedbackRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetUserFeedbackRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateUserFeedbackRequest. */
                interface IUpdateUserFeedbackRequest {

                    /** UpdateUserFeedbackRequest userFeedback */
                    userFeedback?: (google.cloud.dataqna.v1alpha.IUserFeedback|null);

                    /** UpdateUserFeedbackRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateUserFeedbackRequest. */
                class UpdateUserFeedbackRequest implements IUpdateUserFeedbackRequest {

                    /**
                     * Constructs a new UpdateUserFeedbackRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataqna.v1alpha.IUpdateUserFeedbackRequest);

                    /** UpdateUserFeedbackRequest userFeedback. */
                    public userFeedback?: (google.cloud.dataqna.v1alpha.IUserFeedback|null);

                    /** UpdateUserFeedbackRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateUserFeedbackRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateUserFeedbackRequest instance
                     */
                    public static create(properties?: google.cloud.dataqna.v1alpha.IUpdateUserFeedbackRequest): google.cloud.dataqna.v1alpha.UpdateUserFeedbackRequest;

                    /**
                     * Encodes the specified UpdateUserFeedbackRequest message. Does not implicitly {@link google.cloud.dataqna.v1alpha.UpdateUserFeedbackRequest.verify|verify} messages.
                     * @param message UpdateUserFeedbackRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataqna.v1alpha.IUpdateUserFeedbackRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateUserFeedbackRequest message, length delimited. Does not implicitly {@link google.cloud.dataqna.v1alpha.UpdateUserFeedbackRequest.verify|verify} messages.
                     * @param message UpdateUserFeedbackRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataqna.v1alpha.IUpdateUserFeedbackRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateUserFeedbackRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateUserFeedbackRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataqna.v1alpha.UpdateUserFeedbackRequest;

                    /**
                     * Decodes an UpdateUserFeedbackRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateUserFeedbackRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataqna.v1alpha.UpdateUserFeedbackRequest;

                    /**
                     * Verifies an UpdateUserFeedbackRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateUserFeedbackRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateUserFeedbackRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataqna.v1alpha.UpdateUserFeedbackRequest;

                    /**
                     * Creates a plain object from an UpdateUserFeedbackRequest message. Also converts values to other types if specified.
                     * @param message UpdateUserFeedbackRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataqna.v1alpha.UpdateUserFeedbackRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateUserFeedbackRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a UserFeedback. */
                interface IUserFeedback {

                    /** UserFeedback name */
                    name?: (string|null);

                    /** UserFeedback freeFormFeedback */
                    freeFormFeedback?: (string|null);

                    /** UserFeedback rating */
                    rating?: (google.cloud.dataqna.v1alpha.UserFeedback.UserFeedbackRating|keyof typeof google.cloud.dataqna.v1alpha.UserFeedback.UserFeedbackRating|null);
                }

                /** Represents a UserFeedback. */
                class UserFeedback implements IUserFeedback {

                    /**
                     * Constructs a new UserFeedback.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.dataqna.v1alpha.IUserFeedback);

                    /** UserFeedback name. */
                    public name: string;

                    /** UserFeedback freeFormFeedback. */
                    public freeFormFeedback: string;

                    /** UserFeedback rating. */
                    public rating: (google.cloud.dataqna.v1alpha.UserFeedback.UserFeedbackRating|keyof typeof google.cloud.dataqna.v1alpha.UserFeedback.UserFeedbackRating);

                    /**
                     * Creates a new UserFeedback instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UserFeedback instance
                     */
                    public static create(properties?: google.cloud.dataqna.v1alpha.IUserFeedback): google.cloud.dataqna.v1alpha.UserFeedback;

                    /**
                     * Encodes the specified UserFeedback message. Does not implicitly {@link google.cloud.dataqna.v1alpha.UserFeedback.verify|verify} messages.
                     * @param message UserFeedback message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.dataqna.v1alpha.IUserFeedback, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UserFeedback message, length delimited. Does not implicitly {@link google.cloud.dataqna.v1alpha.UserFeedback.verify|verify} messages.
                     * @param message UserFeedback message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.dataqna.v1alpha.IUserFeedback, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a UserFeedback message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UserFeedback
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.dataqna.v1alpha.UserFeedback;

                    /**
                     * Decodes a UserFeedback message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UserFeedback
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.dataqna.v1alpha.UserFeedback;

                    /**
                     * Verifies a UserFeedback message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a UserFeedback message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UserFeedback
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.dataqna.v1alpha.UserFeedback;

                    /**
                     * Creates a plain object from a UserFeedback message. Also converts values to other types if specified.
                     * @param message UserFeedback
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.dataqna.v1alpha.UserFeedback, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UserFeedback to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace UserFeedback {

                    /** UserFeedbackRating enum. */
                    enum UserFeedbackRating {
                        USER_FEEDBACK_RATING_UNSPECIFIED = 0,
                        POSITIVE = 1,
                        NEGATIVE = 2
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
}
