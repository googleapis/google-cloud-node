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

        /** Namespace recommender. */
        namespace recommender {

            /** Namespace v1. */
            namespace v1 {

                /** Properties of an Insight. */
                interface IInsight {

                    /** Insight name */
                    name?: (string|null);

                    /** Insight description */
                    description?: (string|null);

                    /** Insight targetResources */
                    targetResources?: (string[]|null);

                    /** Insight insightSubtype */
                    insightSubtype?: (string|null);

                    /** Insight content */
                    content?: (google.protobuf.IStruct|null);

                    /** Insight lastRefreshTime */
                    lastRefreshTime?: (google.protobuf.ITimestamp|null);

                    /** Insight observationPeriod */
                    observationPeriod?: (google.protobuf.IDuration|null);

                    /** Insight stateInfo */
                    stateInfo?: (google.cloud.recommender.v1.IInsightStateInfo|null);

                    /** Insight category */
                    category?: (google.cloud.recommender.v1.Insight.Category|keyof typeof google.cloud.recommender.v1.Insight.Category|null);

                    /** Insight severity */
                    severity?: (google.cloud.recommender.v1.Insight.Severity|keyof typeof google.cloud.recommender.v1.Insight.Severity|null);

                    /** Insight etag */
                    etag?: (string|null);

                    /** Insight associatedRecommendations */
                    associatedRecommendations?: (google.cloud.recommender.v1.Insight.IRecommendationReference[]|null);
                }

                /** Represents an Insight. */
                class Insight implements IInsight {

                    /**
                     * Constructs a new Insight.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommender.v1.IInsight);

                    /** Insight name. */
                    public name: string;

                    /** Insight description. */
                    public description: string;

                    /** Insight targetResources. */
                    public targetResources: string[];

                    /** Insight insightSubtype. */
                    public insightSubtype: string;

                    /** Insight content. */
                    public content?: (google.protobuf.IStruct|null);

                    /** Insight lastRefreshTime. */
                    public lastRefreshTime?: (google.protobuf.ITimestamp|null);

                    /** Insight observationPeriod. */
                    public observationPeriod?: (google.protobuf.IDuration|null);

                    /** Insight stateInfo. */
                    public stateInfo?: (google.cloud.recommender.v1.IInsightStateInfo|null);

                    /** Insight category. */
                    public category: (google.cloud.recommender.v1.Insight.Category|keyof typeof google.cloud.recommender.v1.Insight.Category);

                    /** Insight severity. */
                    public severity: (google.cloud.recommender.v1.Insight.Severity|keyof typeof google.cloud.recommender.v1.Insight.Severity);

                    /** Insight etag. */
                    public etag: string;

                    /** Insight associatedRecommendations. */
                    public associatedRecommendations: google.cloud.recommender.v1.Insight.IRecommendationReference[];

                    /**
                     * Creates a new Insight instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Insight instance
                     */
                    public static create(properties?: google.cloud.recommender.v1.IInsight): google.cloud.recommender.v1.Insight;

                    /**
                     * Encodes the specified Insight message. Does not implicitly {@link google.cloud.recommender.v1.Insight.verify|verify} messages.
                     * @param message Insight message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommender.v1.IInsight, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Insight message, length delimited. Does not implicitly {@link google.cloud.recommender.v1.Insight.verify|verify} messages.
                     * @param message Insight message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommender.v1.IInsight, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Insight message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Insight
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommender.v1.Insight;

                    /**
                     * Decodes an Insight message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Insight
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommender.v1.Insight;

                    /**
                     * Verifies an Insight message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Insight message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Insight
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommender.v1.Insight;

                    /**
                     * Creates a plain object from an Insight message. Also converts values to other types if specified.
                     * @param message Insight
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommender.v1.Insight, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Insight to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Insight
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Insight {

                    /** Category enum. */
                    enum Category {
                        CATEGORY_UNSPECIFIED = 0,
                        COST = 1,
                        SECURITY = 2,
                        PERFORMANCE = 3,
                        MANAGEABILITY = 4,
                        SUSTAINABILITY = 5,
                        RELIABILITY = 6
                    }

                    /** Severity enum. */
                    enum Severity {
                        SEVERITY_UNSPECIFIED = 0,
                        LOW = 1,
                        MEDIUM = 2,
                        HIGH = 3,
                        CRITICAL = 4
                    }

                    /** Properties of a RecommendationReference. */
                    interface IRecommendationReference {

                        /** RecommendationReference recommendation */
                        recommendation?: (string|null);
                    }

                    /** Represents a RecommendationReference. */
                    class RecommendationReference implements IRecommendationReference {

                        /**
                         * Constructs a new RecommendationReference.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.recommender.v1.Insight.IRecommendationReference);

                        /** RecommendationReference recommendation. */
                        public recommendation: string;

                        /**
                         * Creates a new RecommendationReference instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns RecommendationReference instance
                         */
                        public static create(properties?: google.cloud.recommender.v1.Insight.IRecommendationReference): google.cloud.recommender.v1.Insight.RecommendationReference;

                        /**
                         * Encodes the specified RecommendationReference message. Does not implicitly {@link google.cloud.recommender.v1.Insight.RecommendationReference.verify|verify} messages.
                         * @param message RecommendationReference message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.recommender.v1.Insight.IRecommendationReference, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified RecommendationReference message, length delimited. Does not implicitly {@link google.cloud.recommender.v1.Insight.RecommendationReference.verify|verify} messages.
                         * @param message RecommendationReference message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.recommender.v1.Insight.IRecommendationReference, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a RecommendationReference message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns RecommendationReference
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommender.v1.Insight.RecommendationReference;

                        /**
                         * Decodes a RecommendationReference message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns RecommendationReference
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommender.v1.Insight.RecommendationReference;

                        /**
                         * Verifies a RecommendationReference message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a RecommendationReference message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns RecommendationReference
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.recommender.v1.Insight.RecommendationReference;

                        /**
                         * Creates a plain object from a RecommendationReference message. Also converts values to other types if specified.
                         * @param message RecommendationReference
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.recommender.v1.Insight.RecommendationReference, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this RecommendationReference to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for RecommendationReference
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of an InsightStateInfo. */
                interface IInsightStateInfo {

                    /** InsightStateInfo state */
                    state?: (google.cloud.recommender.v1.InsightStateInfo.State|keyof typeof google.cloud.recommender.v1.InsightStateInfo.State|null);

                    /** InsightStateInfo stateMetadata */
                    stateMetadata?: ({ [k: string]: string }|null);
                }

                /** Represents an InsightStateInfo. */
                class InsightStateInfo implements IInsightStateInfo {

                    /**
                     * Constructs a new InsightStateInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommender.v1.IInsightStateInfo);

                    /** InsightStateInfo state. */
                    public state: (google.cloud.recommender.v1.InsightStateInfo.State|keyof typeof google.cloud.recommender.v1.InsightStateInfo.State);

                    /** InsightStateInfo stateMetadata. */
                    public stateMetadata: { [k: string]: string };

                    /**
                     * Creates a new InsightStateInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns InsightStateInfo instance
                     */
                    public static create(properties?: google.cloud.recommender.v1.IInsightStateInfo): google.cloud.recommender.v1.InsightStateInfo;

                    /**
                     * Encodes the specified InsightStateInfo message. Does not implicitly {@link google.cloud.recommender.v1.InsightStateInfo.verify|verify} messages.
                     * @param message InsightStateInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommender.v1.IInsightStateInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified InsightStateInfo message, length delimited. Does not implicitly {@link google.cloud.recommender.v1.InsightStateInfo.verify|verify} messages.
                     * @param message InsightStateInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommender.v1.IInsightStateInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an InsightStateInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns InsightStateInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommender.v1.InsightStateInfo;

                    /**
                     * Decodes an InsightStateInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns InsightStateInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommender.v1.InsightStateInfo;

                    /**
                     * Verifies an InsightStateInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an InsightStateInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns InsightStateInfo
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommender.v1.InsightStateInfo;

                    /**
                     * Creates a plain object from an InsightStateInfo message. Also converts values to other types if specified.
                     * @param message InsightStateInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommender.v1.InsightStateInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this InsightStateInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for InsightStateInfo
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace InsightStateInfo {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        ACTIVE = 1,
                        ACCEPTED = 2,
                        DISMISSED = 3
                    }
                }

                /** Properties of an InsightTypeConfig. */
                interface IInsightTypeConfig {

                    /** InsightTypeConfig name */
                    name?: (string|null);

                    /** InsightTypeConfig insightTypeGenerationConfig */
                    insightTypeGenerationConfig?: (google.cloud.recommender.v1.IInsightTypeGenerationConfig|null);

                    /** InsightTypeConfig etag */
                    etag?: (string|null);

                    /** InsightTypeConfig updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** InsightTypeConfig revisionId */
                    revisionId?: (string|null);

                    /** InsightTypeConfig annotations */
                    annotations?: ({ [k: string]: string }|null);

                    /** InsightTypeConfig displayName */
                    displayName?: (string|null);
                }

                /** Represents an InsightTypeConfig. */
                class InsightTypeConfig implements IInsightTypeConfig {

                    /**
                     * Constructs a new InsightTypeConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommender.v1.IInsightTypeConfig);

                    /** InsightTypeConfig name. */
                    public name: string;

                    /** InsightTypeConfig insightTypeGenerationConfig. */
                    public insightTypeGenerationConfig?: (google.cloud.recommender.v1.IInsightTypeGenerationConfig|null);

                    /** InsightTypeConfig etag. */
                    public etag: string;

                    /** InsightTypeConfig updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** InsightTypeConfig revisionId. */
                    public revisionId: string;

                    /** InsightTypeConfig annotations. */
                    public annotations: { [k: string]: string };

                    /** InsightTypeConfig displayName. */
                    public displayName: string;

                    /**
                     * Creates a new InsightTypeConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns InsightTypeConfig instance
                     */
                    public static create(properties?: google.cloud.recommender.v1.IInsightTypeConfig): google.cloud.recommender.v1.InsightTypeConfig;

                    /**
                     * Encodes the specified InsightTypeConfig message. Does not implicitly {@link google.cloud.recommender.v1.InsightTypeConfig.verify|verify} messages.
                     * @param message InsightTypeConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommender.v1.IInsightTypeConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified InsightTypeConfig message, length delimited. Does not implicitly {@link google.cloud.recommender.v1.InsightTypeConfig.verify|verify} messages.
                     * @param message InsightTypeConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommender.v1.IInsightTypeConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an InsightTypeConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns InsightTypeConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommender.v1.InsightTypeConfig;

                    /**
                     * Decodes an InsightTypeConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns InsightTypeConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommender.v1.InsightTypeConfig;

                    /**
                     * Verifies an InsightTypeConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an InsightTypeConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns InsightTypeConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommender.v1.InsightTypeConfig;

                    /**
                     * Creates a plain object from an InsightTypeConfig message. Also converts values to other types if specified.
                     * @param message InsightTypeConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommender.v1.InsightTypeConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this InsightTypeConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for InsightTypeConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an InsightTypeGenerationConfig. */
                interface IInsightTypeGenerationConfig {

                    /** InsightTypeGenerationConfig params */
                    params?: (google.protobuf.IStruct|null);
                }

                /** Represents an InsightTypeGenerationConfig. */
                class InsightTypeGenerationConfig implements IInsightTypeGenerationConfig {

                    /**
                     * Constructs a new InsightTypeGenerationConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommender.v1.IInsightTypeGenerationConfig);

                    /** InsightTypeGenerationConfig params. */
                    public params?: (google.protobuf.IStruct|null);

                    /**
                     * Creates a new InsightTypeGenerationConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns InsightTypeGenerationConfig instance
                     */
                    public static create(properties?: google.cloud.recommender.v1.IInsightTypeGenerationConfig): google.cloud.recommender.v1.InsightTypeGenerationConfig;

                    /**
                     * Encodes the specified InsightTypeGenerationConfig message. Does not implicitly {@link google.cloud.recommender.v1.InsightTypeGenerationConfig.verify|verify} messages.
                     * @param message InsightTypeGenerationConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommender.v1.IInsightTypeGenerationConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified InsightTypeGenerationConfig message, length delimited. Does not implicitly {@link google.cloud.recommender.v1.InsightTypeGenerationConfig.verify|verify} messages.
                     * @param message InsightTypeGenerationConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommender.v1.IInsightTypeGenerationConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an InsightTypeGenerationConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns InsightTypeGenerationConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommender.v1.InsightTypeGenerationConfig;

                    /**
                     * Decodes an InsightTypeGenerationConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns InsightTypeGenerationConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommender.v1.InsightTypeGenerationConfig;

                    /**
                     * Verifies an InsightTypeGenerationConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an InsightTypeGenerationConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns InsightTypeGenerationConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommender.v1.InsightTypeGenerationConfig;

                    /**
                     * Creates a plain object from an InsightTypeGenerationConfig message. Also converts values to other types if specified.
                     * @param message InsightTypeGenerationConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommender.v1.InsightTypeGenerationConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this InsightTypeGenerationConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for InsightTypeGenerationConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Recommendation. */
                interface IRecommendation {

                    /** Recommendation name */
                    name?: (string|null);

                    /** Recommendation description */
                    description?: (string|null);

                    /** Recommendation recommenderSubtype */
                    recommenderSubtype?: (string|null);

                    /** Recommendation lastRefreshTime */
                    lastRefreshTime?: (google.protobuf.ITimestamp|null);

                    /** Recommendation primaryImpact */
                    primaryImpact?: (google.cloud.recommender.v1.IImpact|null);

                    /** Recommendation additionalImpact */
                    additionalImpact?: (google.cloud.recommender.v1.IImpact[]|null);

                    /** Recommendation priority */
                    priority?: (google.cloud.recommender.v1.Recommendation.Priority|keyof typeof google.cloud.recommender.v1.Recommendation.Priority|null);

                    /** Recommendation content */
                    content?: (google.cloud.recommender.v1.IRecommendationContent|null);

                    /** Recommendation stateInfo */
                    stateInfo?: (google.cloud.recommender.v1.IRecommendationStateInfo|null);

                    /** Recommendation etag */
                    etag?: (string|null);

                    /** Recommendation associatedInsights */
                    associatedInsights?: (google.cloud.recommender.v1.Recommendation.IInsightReference[]|null);

                    /** Recommendation xorGroupId */
                    xorGroupId?: (string|null);
                }

                /** Represents a Recommendation. */
                class Recommendation implements IRecommendation {

                    /**
                     * Constructs a new Recommendation.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommender.v1.IRecommendation);

                    /** Recommendation name. */
                    public name: string;

                    /** Recommendation description. */
                    public description: string;

                    /** Recommendation recommenderSubtype. */
                    public recommenderSubtype: string;

                    /** Recommendation lastRefreshTime. */
                    public lastRefreshTime?: (google.protobuf.ITimestamp|null);

                    /** Recommendation primaryImpact. */
                    public primaryImpact?: (google.cloud.recommender.v1.IImpact|null);

                    /** Recommendation additionalImpact. */
                    public additionalImpact: google.cloud.recommender.v1.IImpact[];

                    /** Recommendation priority. */
                    public priority: (google.cloud.recommender.v1.Recommendation.Priority|keyof typeof google.cloud.recommender.v1.Recommendation.Priority);

                    /** Recommendation content. */
                    public content?: (google.cloud.recommender.v1.IRecommendationContent|null);

                    /** Recommendation stateInfo. */
                    public stateInfo?: (google.cloud.recommender.v1.IRecommendationStateInfo|null);

                    /** Recommendation etag. */
                    public etag: string;

                    /** Recommendation associatedInsights. */
                    public associatedInsights: google.cloud.recommender.v1.Recommendation.IInsightReference[];

                    /** Recommendation xorGroupId. */
                    public xorGroupId: string;

                    /**
                     * Creates a new Recommendation instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Recommendation instance
                     */
                    public static create(properties?: google.cloud.recommender.v1.IRecommendation): google.cloud.recommender.v1.Recommendation;

                    /**
                     * Encodes the specified Recommendation message. Does not implicitly {@link google.cloud.recommender.v1.Recommendation.verify|verify} messages.
                     * @param message Recommendation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommender.v1.IRecommendation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Recommendation message, length delimited. Does not implicitly {@link google.cloud.recommender.v1.Recommendation.verify|verify} messages.
                     * @param message Recommendation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommender.v1.IRecommendation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Recommendation message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Recommendation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommender.v1.Recommendation;

                    /**
                     * Decodes a Recommendation message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Recommendation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommender.v1.Recommendation;

                    /**
                     * Verifies a Recommendation message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Recommendation message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Recommendation
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommender.v1.Recommendation;

                    /**
                     * Creates a plain object from a Recommendation message. Also converts values to other types if specified.
                     * @param message Recommendation
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommender.v1.Recommendation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Recommendation to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Recommendation
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Recommendation {

                    /** Priority enum. */
                    enum Priority {
                        PRIORITY_UNSPECIFIED = 0,
                        P4 = 1,
                        P3 = 2,
                        P2 = 3,
                        P1 = 4
                    }

                    /** Properties of an InsightReference. */
                    interface IInsightReference {

                        /** InsightReference insight */
                        insight?: (string|null);
                    }

                    /** Represents an InsightReference. */
                    class InsightReference implements IInsightReference {

                        /**
                         * Constructs a new InsightReference.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.recommender.v1.Recommendation.IInsightReference);

                        /** InsightReference insight. */
                        public insight: string;

                        /**
                         * Creates a new InsightReference instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns InsightReference instance
                         */
                        public static create(properties?: google.cloud.recommender.v1.Recommendation.IInsightReference): google.cloud.recommender.v1.Recommendation.InsightReference;

                        /**
                         * Encodes the specified InsightReference message. Does not implicitly {@link google.cloud.recommender.v1.Recommendation.InsightReference.verify|verify} messages.
                         * @param message InsightReference message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.recommender.v1.Recommendation.IInsightReference, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified InsightReference message, length delimited. Does not implicitly {@link google.cloud.recommender.v1.Recommendation.InsightReference.verify|verify} messages.
                         * @param message InsightReference message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.recommender.v1.Recommendation.IInsightReference, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an InsightReference message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns InsightReference
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommender.v1.Recommendation.InsightReference;

                        /**
                         * Decodes an InsightReference message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns InsightReference
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommender.v1.Recommendation.InsightReference;

                        /**
                         * Verifies an InsightReference message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an InsightReference message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns InsightReference
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.recommender.v1.Recommendation.InsightReference;

                        /**
                         * Creates a plain object from an InsightReference message. Also converts values to other types if specified.
                         * @param message InsightReference
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.recommender.v1.Recommendation.InsightReference, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this InsightReference to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for InsightReference
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of a RecommendationContent. */
                interface IRecommendationContent {

                    /** RecommendationContent operationGroups */
                    operationGroups?: (google.cloud.recommender.v1.IOperationGroup[]|null);

                    /** RecommendationContent overview */
                    overview?: (google.protobuf.IStruct|null);
                }

                /** Represents a RecommendationContent. */
                class RecommendationContent implements IRecommendationContent {

                    /**
                     * Constructs a new RecommendationContent.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommender.v1.IRecommendationContent);

                    /** RecommendationContent operationGroups. */
                    public operationGroups: google.cloud.recommender.v1.IOperationGroup[];

                    /** RecommendationContent overview. */
                    public overview?: (google.protobuf.IStruct|null);

                    /**
                     * Creates a new RecommendationContent instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RecommendationContent instance
                     */
                    public static create(properties?: google.cloud.recommender.v1.IRecommendationContent): google.cloud.recommender.v1.RecommendationContent;

                    /**
                     * Encodes the specified RecommendationContent message. Does not implicitly {@link google.cloud.recommender.v1.RecommendationContent.verify|verify} messages.
                     * @param message RecommendationContent message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommender.v1.IRecommendationContent, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RecommendationContent message, length delimited. Does not implicitly {@link google.cloud.recommender.v1.RecommendationContent.verify|verify} messages.
                     * @param message RecommendationContent message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommender.v1.IRecommendationContent, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RecommendationContent message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RecommendationContent
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommender.v1.RecommendationContent;

                    /**
                     * Decodes a RecommendationContent message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RecommendationContent
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommender.v1.RecommendationContent;

                    /**
                     * Verifies a RecommendationContent message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RecommendationContent message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RecommendationContent
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommender.v1.RecommendationContent;

                    /**
                     * Creates a plain object from a RecommendationContent message. Also converts values to other types if specified.
                     * @param message RecommendationContent
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommender.v1.RecommendationContent, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RecommendationContent to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RecommendationContent
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an OperationGroup. */
                interface IOperationGroup {

                    /** OperationGroup operations */
                    operations?: (google.cloud.recommender.v1.IOperation[]|null);
                }

                /** Represents an OperationGroup. */
                class OperationGroup implements IOperationGroup {

                    /**
                     * Constructs a new OperationGroup.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommender.v1.IOperationGroup);

                    /** OperationGroup operations. */
                    public operations: google.cloud.recommender.v1.IOperation[];

                    /**
                     * Creates a new OperationGroup instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OperationGroup instance
                     */
                    public static create(properties?: google.cloud.recommender.v1.IOperationGroup): google.cloud.recommender.v1.OperationGroup;

                    /**
                     * Encodes the specified OperationGroup message. Does not implicitly {@link google.cloud.recommender.v1.OperationGroup.verify|verify} messages.
                     * @param message OperationGroup message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommender.v1.IOperationGroup, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OperationGroup message, length delimited. Does not implicitly {@link google.cloud.recommender.v1.OperationGroup.verify|verify} messages.
                     * @param message OperationGroup message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommender.v1.IOperationGroup, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OperationGroup message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OperationGroup
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommender.v1.OperationGroup;

                    /**
                     * Decodes an OperationGroup message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OperationGroup
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommender.v1.OperationGroup;

                    /**
                     * Verifies an OperationGroup message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an OperationGroup message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns OperationGroup
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommender.v1.OperationGroup;

                    /**
                     * Creates a plain object from an OperationGroup message. Also converts values to other types if specified.
                     * @param message OperationGroup
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommender.v1.OperationGroup, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OperationGroup to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for OperationGroup
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an Operation. */
                interface IOperation {

                    /** Operation action */
                    action?: (string|null);

                    /** Operation resourceType */
                    resourceType?: (string|null);

                    /** Operation resource */
                    resource?: (string|null);

                    /** Operation path */
                    path?: (string|null);

                    /** Operation sourceResource */
                    sourceResource?: (string|null);

                    /** Operation sourcePath */
                    sourcePath?: (string|null);

                    /** Operation value */
                    value?: (google.protobuf.IValue|null);

                    /** Operation valueMatcher */
                    valueMatcher?: (google.cloud.recommender.v1.IValueMatcher|null);

                    /** Operation pathFilters */
                    pathFilters?: ({ [k: string]: google.protobuf.IValue }|null);

                    /** Operation pathValueMatchers */
                    pathValueMatchers?: ({ [k: string]: google.cloud.recommender.v1.IValueMatcher }|null);
                }

                /** Represents an Operation. */
                class Operation implements IOperation {

                    /**
                     * Constructs a new Operation.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommender.v1.IOperation);

                    /** Operation action. */
                    public action: string;

                    /** Operation resourceType. */
                    public resourceType: string;

                    /** Operation resource. */
                    public resource: string;

                    /** Operation path. */
                    public path: string;

                    /** Operation sourceResource. */
                    public sourceResource: string;

                    /** Operation sourcePath. */
                    public sourcePath: string;

                    /** Operation value. */
                    public value?: (google.protobuf.IValue|null);

                    /** Operation valueMatcher. */
                    public valueMatcher?: (google.cloud.recommender.v1.IValueMatcher|null);

                    /** Operation pathFilters. */
                    public pathFilters: { [k: string]: google.protobuf.IValue };

                    /** Operation pathValueMatchers. */
                    public pathValueMatchers: { [k: string]: google.cloud.recommender.v1.IValueMatcher };

                    /** Operation pathValue. */
                    public pathValue?: ("value"|"valueMatcher");

                    /**
                     * Creates a new Operation instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Operation instance
                     */
                    public static create(properties?: google.cloud.recommender.v1.IOperation): google.cloud.recommender.v1.Operation;

                    /**
                     * Encodes the specified Operation message. Does not implicitly {@link google.cloud.recommender.v1.Operation.verify|verify} messages.
                     * @param message Operation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommender.v1.IOperation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Operation message, length delimited. Does not implicitly {@link google.cloud.recommender.v1.Operation.verify|verify} messages.
                     * @param message Operation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommender.v1.IOperation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Operation message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Operation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommender.v1.Operation;

                    /**
                     * Decodes an Operation message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Operation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommender.v1.Operation;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommender.v1.Operation;

                    /**
                     * Creates a plain object from an Operation message. Also converts values to other types if specified.
                     * @param message Operation
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommender.v1.Operation, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                /** Properties of a ValueMatcher. */
                interface IValueMatcher {

                    /** ValueMatcher matchesPattern */
                    matchesPattern?: (string|null);
                }

                /** Represents a ValueMatcher. */
                class ValueMatcher implements IValueMatcher {

                    /**
                     * Constructs a new ValueMatcher.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommender.v1.IValueMatcher);

                    /** ValueMatcher matchesPattern. */
                    public matchesPattern?: (string|null);

                    /** ValueMatcher matchVariant. */
                    public matchVariant?: "matchesPattern";

                    /**
                     * Creates a new ValueMatcher instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ValueMatcher instance
                     */
                    public static create(properties?: google.cloud.recommender.v1.IValueMatcher): google.cloud.recommender.v1.ValueMatcher;

                    /**
                     * Encodes the specified ValueMatcher message. Does not implicitly {@link google.cloud.recommender.v1.ValueMatcher.verify|verify} messages.
                     * @param message ValueMatcher message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommender.v1.IValueMatcher, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ValueMatcher message, length delimited. Does not implicitly {@link google.cloud.recommender.v1.ValueMatcher.verify|verify} messages.
                     * @param message ValueMatcher message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommender.v1.IValueMatcher, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ValueMatcher message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ValueMatcher
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommender.v1.ValueMatcher;

                    /**
                     * Decodes a ValueMatcher message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ValueMatcher
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommender.v1.ValueMatcher;

                    /**
                     * Verifies a ValueMatcher message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ValueMatcher message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ValueMatcher
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommender.v1.ValueMatcher;

                    /**
                     * Creates a plain object from a ValueMatcher message. Also converts values to other types if specified.
                     * @param message ValueMatcher
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommender.v1.ValueMatcher, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ValueMatcher to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ValueMatcher
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CostProjection. */
                interface ICostProjection {

                    /** CostProjection cost */
                    cost?: (google.type.IMoney|null);

                    /** CostProjection duration */
                    duration?: (google.protobuf.IDuration|null);

                    /** CostProjection costInLocalCurrency */
                    costInLocalCurrency?: (google.type.IMoney|null);
                }

                /** Represents a CostProjection. */
                class CostProjection implements ICostProjection {

                    /**
                     * Constructs a new CostProjection.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommender.v1.ICostProjection);

                    /** CostProjection cost. */
                    public cost?: (google.type.IMoney|null);

                    /** CostProjection duration. */
                    public duration?: (google.protobuf.IDuration|null);

                    /** CostProjection costInLocalCurrency. */
                    public costInLocalCurrency?: (google.type.IMoney|null);

                    /**
                     * Creates a new CostProjection instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CostProjection instance
                     */
                    public static create(properties?: google.cloud.recommender.v1.ICostProjection): google.cloud.recommender.v1.CostProjection;

                    /**
                     * Encodes the specified CostProjection message. Does not implicitly {@link google.cloud.recommender.v1.CostProjection.verify|verify} messages.
                     * @param message CostProjection message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommender.v1.ICostProjection, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CostProjection message, length delimited. Does not implicitly {@link google.cloud.recommender.v1.CostProjection.verify|verify} messages.
                     * @param message CostProjection message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommender.v1.ICostProjection, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CostProjection message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CostProjection
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommender.v1.CostProjection;

                    /**
                     * Decodes a CostProjection message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CostProjection
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommender.v1.CostProjection;

                    /**
                     * Verifies a CostProjection message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CostProjection message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CostProjection
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommender.v1.CostProjection;

                    /**
                     * Creates a plain object from a CostProjection message. Also converts values to other types if specified.
                     * @param message CostProjection
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommender.v1.CostProjection, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CostProjection to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CostProjection
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a SecurityProjection. */
                interface ISecurityProjection {

                    /** SecurityProjection details */
                    details?: (google.protobuf.IStruct|null);
                }

                /** Represents a SecurityProjection. */
                class SecurityProjection implements ISecurityProjection {

                    /**
                     * Constructs a new SecurityProjection.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommender.v1.ISecurityProjection);

                    /** SecurityProjection details. */
                    public details?: (google.protobuf.IStruct|null);

                    /**
                     * Creates a new SecurityProjection instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SecurityProjection instance
                     */
                    public static create(properties?: google.cloud.recommender.v1.ISecurityProjection): google.cloud.recommender.v1.SecurityProjection;

                    /**
                     * Encodes the specified SecurityProjection message. Does not implicitly {@link google.cloud.recommender.v1.SecurityProjection.verify|verify} messages.
                     * @param message SecurityProjection message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommender.v1.ISecurityProjection, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SecurityProjection message, length delimited. Does not implicitly {@link google.cloud.recommender.v1.SecurityProjection.verify|verify} messages.
                     * @param message SecurityProjection message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommender.v1.ISecurityProjection, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SecurityProjection message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SecurityProjection
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommender.v1.SecurityProjection;

                    /**
                     * Decodes a SecurityProjection message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SecurityProjection
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommender.v1.SecurityProjection;

                    /**
                     * Verifies a SecurityProjection message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SecurityProjection message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SecurityProjection
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommender.v1.SecurityProjection;

                    /**
                     * Creates a plain object from a SecurityProjection message. Also converts values to other types if specified.
                     * @param message SecurityProjection
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommender.v1.SecurityProjection, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SecurityProjection to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SecurityProjection
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a SustainabilityProjection. */
                interface ISustainabilityProjection {

                    /** SustainabilityProjection kgCO2e */
                    kgCO2e?: (number|null);

                    /** SustainabilityProjection duration */
                    duration?: (google.protobuf.IDuration|null);
                }

                /** Represents a SustainabilityProjection. */
                class SustainabilityProjection implements ISustainabilityProjection {

                    /**
                     * Constructs a new SustainabilityProjection.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommender.v1.ISustainabilityProjection);

                    /** SustainabilityProjection kgCO2e. */
                    public kgCO2e: number;

                    /** SustainabilityProjection duration. */
                    public duration?: (google.protobuf.IDuration|null);

                    /**
                     * Creates a new SustainabilityProjection instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SustainabilityProjection instance
                     */
                    public static create(properties?: google.cloud.recommender.v1.ISustainabilityProjection): google.cloud.recommender.v1.SustainabilityProjection;

                    /**
                     * Encodes the specified SustainabilityProjection message. Does not implicitly {@link google.cloud.recommender.v1.SustainabilityProjection.verify|verify} messages.
                     * @param message SustainabilityProjection message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommender.v1.ISustainabilityProjection, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SustainabilityProjection message, length delimited. Does not implicitly {@link google.cloud.recommender.v1.SustainabilityProjection.verify|verify} messages.
                     * @param message SustainabilityProjection message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommender.v1.ISustainabilityProjection, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SustainabilityProjection message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SustainabilityProjection
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommender.v1.SustainabilityProjection;

                    /**
                     * Decodes a SustainabilityProjection message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SustainabilityProjection
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommender.v1.SustainabilityProjection;

                    /**
                     * Verifies a SustainabilityProjection message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SustainabilityProjection message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SustainabilityProjection
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommender.v1.SustainabilityProjection;

                    /**
                     * Creates a plain object from a SustainabilityProjection message. Also converts values to other types if specified.
                     * @param message SustainabilityProjection
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommender.v1.SustainabilityProjection, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SustainabilityProjection to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SustainabilityProjection
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ReliabilityProjection. */
                interface IReliabilityProjection {

                    /** ReliabilityProjection risks */
                    risks?: (google.cloud.recommender.v1.ReliabilityProjection.RiskType[]|null);

                    /** ReliabilityProjection details */
                    details?: (google.protobuf.IStruct|null);
                }

                /** Represents a ReliabilityProjection. */
                class ReliabilityProjection implements IReliabilityProjection {

                    /**
                     * Constructs a new ReliabilityProjection.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommender.v1.IReliabilityProjection);

                    /** ReliabilityProjection risks. */
                    public risks: google.cloud.recommender.v1.ReliabilityProjection.RiskType[];

                    /** ReliabilityProjection details. */
                    public details?: (google.protobuf.IStruct|null);

                    /**
                     * Creates a new ReliabilityProjection instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ReliabilityProjection instance
                     */
                    public static create(properties?: google.cloud.recommender.v1.IReliabilityProjection): google.cloud.recommender.v1.ReliabilityProjection;

                    /**
                     * Encodes the specified ReliabilityProjection message. Does not implicitly {@link google.cloud.recommender.v1.ReliabilityProjection.verify|verify} messages.
                     * @param message ReliabilityProjection message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommender.v1.IReliabilityProjection, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ReliabilityProjection message, length delimited. Does not implicitly {@link google.cloud.recommender.v1.ReliabilityProjection.verify|verify} messages.
                     * @param message ReliabilityProjection message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommender.v1.IReliabilityProjection, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ReliabilityProjection message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ReliabilityProjection
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommender.v1.ReliabilityProjection;

                    /**
                     * Decodes a ReliabilityProjection message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ReliabilityProjection
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommender.v1.ReliabilityProjection;

                    /**
                     * Verifies a ReliabilityProjection message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ReliabilityProjection message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ReliabilityProjection
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommender.v1.ReliabilityProjection;

                    /**
                     * Creates a plain object from a ReliabilityProjection message. Also converts values to other types if specified.
                     * @param message ReliabilityProjection
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommender.v1.ReliabilityProjection, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ReliabilityProjection to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ReliabilityProjection
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace ReliabilityProjection {

                    /** RiskType enum. */
                    enum RiskType {
                        RISK_TYPE_UNSPECIFIED = 0,
                        SERVICE_DISRUPTION = 1,
                        DATA_LOSS = 2,
                        ACCESS_DENY = 3
                    }
                }

                /** Properties of an Impact. */
                interface IImpact {

                    /** Impact category */
                    category?: (google.cloud.recommender.v1.Impact.Category|keyof typeof google.cloud.recommender.v1.Impact.Category|null);

                    /** Impact costProjection */
                    costProjection?: (google.cloud.recommender.v1.ICostProjection|null);

                    /** Impact securityProjection */
                    securityProjection?: (google.cloud.recommender.v1.ISecurityProjection|null);

                    /** Impact sustainabilityProjection */
                    sustainabilityProjection?: (google.cloud.recommender.v1.ISustainabilityProjection|null);

                    /** Impact reliabilityProjection */
                    reliabilityProjection?: (google.cloud.recommender.v1.IReliabilityProjection|null);
                }

                /** Represents an Impact. */
                class Impact implements IImpact {

                    /**
                     * Constructs a new Impact.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommender.v1.IImpact);

                    /** Impact category. */
                    public category: (google.cloud.recommender.v1.Impact.Category|keyof typeof google.cloud.recommender.v1.Impact.Category);

                    /** Impact costProjection. */
                    public costProjection?: (google.cloud.recommender.v1.ICostProjection|null);

                    /** Impact securityProjection. */
                    public securityProjection?: (google.cloud.recommender.v1.ISecurityProjection|null);

                    /** Impact sustainabilityProjection. */
                    public sustainabilityProjection?: (google.cloud.recommender.v1.ISustainabilityProjection|null);

                    /** Impact reliabilityProjection. */
                    public reliabilityProjection?: (google.cloud.recommender.v1.IReliabilityProjection|null);

                    /** Impact projection. */
                    public projection?: ("costProjection"|"securityProjection"|"sustainabilityProjection"|"reliabilityProjection");

                    /**
                     * Creates a new Impact instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Impact instance
                     */
                    public static create(properties?: google.cloud.recommender.v1.IImpact): google.cloud.recommender.v1.Impact;

                    /**
                     * Encodes the specified Impact message. Does not implicitly {@link google.cloud.recommender.v1.Impact.verify|verify} messages.
                     * @param message Impact message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommender.v1.IImpact, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Impact message, length delimited. Does not implicitly {@link google.cloud.recommender.v1.Impact.verify|verify} messages.
                     * @param message Impact message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommender.v1.IImpact, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Impact message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Impact
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommender.v1.Impact;

                    /**
                     * Decodes an Impact message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Impact
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommender.v1.Impact;

                    /**
                     * Verifies an Impact message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Impact message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Impact
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommender.v1.Impact;

                    /**
                     * Creates a plain object from an Impact message. Also converts values to other types if specified.
                     * @param message Impact
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommender.v1.Impact, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Impact to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Impact
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Impact {

                    /** Category enum. */
                    enum Category {
                        CATEGORY_UNSPECIFIED = 0,
                        COST = 1,
                        SECURITY = 2,
                        PERFORMANCE = 3,
                        MANAGEABILITY = 4,
                        SUSTAINABILITY = 5,
                        RELIABILITY = 6
                    }
                }

                /** Properties of a RecommendationStateInfo. */
                interface IRecommendationStateInfo {

                    /** RecommendationStateInfo state */
                    state?: (google.cloud.recommender.v1.RecommendationStateInfo.State|keyof typeof google.cloud.recommender.v1.RecommendationStateInfo.State|null);

                    /** RecommendationStateInfo stateMetadata */
                    stateMetadata?: ({ [k: string]: string }|null);
                }

                /** Represents a RecommendationStateInfo. */
                class RecommendationStateInfo implements IRecommendationStateInfo {

                    /**
                     * Constructs a new RecommendationStateInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommender.v1.IRecommendationStateInfo);

                    /** RecommendationStateInfo state. */
                    public state: (google.cloud.recommender.v1.RecommendationStateInfo.State|keyof typeof google.cloud.recommender.v1.RecommendationStateInfo.State);

                    /** RecommendationStateInfo stateMetadata. */
                    public stateMetadata: { [k: string]: string };

                    /**
                     * Creates a new RecommendationStateInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RecommendationStateInfo instance
                     */
                    public static create(properties?: google.cloud.recommender.v1.IRecommendationStateInfo): google.cloud.recommender.v1.RecommendationStateInfo;

                    /**
                     * Encodes the specified RecommendationStateInfo message. Does not implicitly {@link google.cloud.recommender.v1.RecommendationStateInfo.verify|verify} messages.
                     * @param message RecommendationStateInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommender.v1.IRecommendationStateInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RecommendationStateInfo message, length delimited. Does not implicitly {@link google.cloud.recommender.v1.RecommendationStateInfo.verify|verify} messages.
                     * @param message RecommendationStateInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommender.v1.IRecommendationStateInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RecommendationStateInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RecommendationStateInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommender.v1.RecommendationStateInfo;

                    /**
                     * Decodes a RecommendationStateInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RecommendationStateInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommender.v1.RecommendationStateInfo;

                    /**
                     * Verifies a RecommendationStateInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RecommendationStateInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RecommendationStateInfo
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommender.v1.RecommendationStateInfo;

                    /**
                     * Creates a plain object from a RecommendationStateInfo message. Also converts values to other types if specified.
                     * @param message RecommendationStateInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommender.v1.RecommendationStateInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RecommendationStateInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RecommendationStateInfo
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace RecommendationStateInfo {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        ACTIVE = 1,
                        CLAIMED = 6,
                        SUCCEEDED = 3,
                        FAILED = 4,
                        DISMISSED = 5
                    }
                }

                /** Properties of a RecommenderConfig. */
                interface IRecommenderConfig {

                    /** RecommenderConfig name */
                    name?: (string|null);

                    /** RecommenderConfig recommenderGenerationConfig */
                    recommenderGenerationConfig?: (google.cloud.recommender.v1.IRecommenderGenerationConfig|null);

                    /** RecommenderConfig etag */
                    etag?: (string|null);

                    /** RecommenderConfig updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** RecommenderConfig revisionId */
                    revisionId?: (string|null);

                    /** RecommenderConfig annotations */
                    annotations?: ({ [k: string]: string }|null);

                    /** RecommenderConfig displayName */
                    displayName?: (string|null);
                }

                /** Represents a RecommenderConfig. */
                class RecommenderConfig implements IRecommenderConfig {

                    /**
                     * Constructs a new RecommenderConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommender.v1.IRecommenderConfig);

                    /** RecommenderConfig name. */
                    public name: string;

                    /** RecommenderConfig recommenderGenerationConfig. */
                    public recommenderGenerationConfig?: (google.cloud.recommender.v1.IRecommenderGenerationConfig|null);

                    /** RecommenderConfig etag. */
                    public etag: string;

                    /** RecommenderConfig updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** RecommenderConfig revisionId. */
                    public revisionId: string;

                    /** RecommenderConfig annotations. */
                    public annotations: { [k: string]: string };

                    /** RecommenderConfig displayName. */
                    public displayName: string;

                    /**
                     * Creates a new RecommenderConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RecommenderConfig instance
                     */
                    public static create(properties?: google.cloud.recommender.v1.IRecommenderConfig): google.cloud.recommender.v1.RecommenderConfig;

                    /**
                     * Encodes the specified RecommenderConfig message. Does not implicitly {@link google.cloud.recommender.v1.RecommenderConfig.verify|verify} messages.
                     * @param message RecommenderConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommender.v1.IRecommenderConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RecommenderConfig message, length delimited. Does not implicitly {@link google.cloud.recommender.v1.RecommenderConfig.verify|verify} messages.
                     * @param message RecommenderConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommender.v1.IRecommenderConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RecommenderConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RecommenderConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommender.v1.RecommenderConfig;

                    /**
                     * Decodes a RecommenderConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RecommenderConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommender.v1.RecommenderConfig;

                    /**
                     * Verifies a RecommenderConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RecommenderConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RecommenderConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommender.v1.RecommenderConfig;

                    /**
                     * Creates a plain object from a RecommenderConfig message. Also converts values to other types if specified.
                     * @param message RecommenderConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommender.v1.RecommenderConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RecommenderConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RecommenderConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a RecommenderGenerationConfig. */
                interface IRecommenderGenerationConfig {

                    /** RecommenderGenerationConfig params */
                    params?: (google.protobuf.IStruct|null);
                }

                /** Represents a RecommenderGenerationConfig. */
                class RecommenderGenerationConfig implements IRecommenderGenerationConfig {

                    /**
                     * Constructs a new RecommenderGenerationConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommender.v1.IRecommenderGenerationConfig);

                    /** RecommenderGenerationConfig params. */
                    public params?: (google.protobuf.IStruct|null);

                    /**
                     * Creates a new RecommenderGenerationConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RecommenderGenerationConfig instance
                     */
                    public static create(properties?: google.cloud.recommender.v1.IRecommenderGenerationConfig): google.cloud.recommender.v1.RecommenderGenerationConfig;

                    /**
                     * Encodes the specified RecommenderGenerationConfig message. Does not implicitly {@link google.cloud.recommender.v1.RecommenderGenerationConfig.verify|verify} messages.
                     * @param message RecommenderGenerationConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommender.v1.IRecommenderGenerationConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RecommenderGenerationConfig message, length delimited. Does not implicitly {@link google.cloud.recommender.v1.RecommenderGenerationConfig.verify|verify} messages.
                     * @param message RecommenderGenerationConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommender.v1.IRecommenderGenerationConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RecommenderGenerationConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RecommenderGenerationConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommender.v1.RecommenderGenerationConfig;

                    /**
                     * Decodes a RecommenderGenerationConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RecommenderGenerationConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommender.v1.RecommenderGenerationConfig;

                    /**
                     * Verifies a RecommenderGenerationConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RecommenderGenerationConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RecommenderGenerationConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommender.v1.RecommenderGenerationConfig;

                    /**
                     * Creates a plain object from a RecommenderGenerationConfig message. Also converts values to other types if specified.
                     * @param message RecommenderGenerationConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommender.v1.RecommenderGenerationConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RecommenderGenerationConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RecommenderGenerationConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Represents a Recommender */
                class Recommender extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new Recommender service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new Recommender service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Recommender;

                    /**
                     * Calls ListInsights.
                     * @param request ListInsightsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListInsightsResponse
                     */
                    public listInsights(request: google.cloud.recommender.v1.IListInsightsRequest, callback: google.cloud.recommender.v1.Recommender.ListInsightsCallback): void;

                    /**
                     * Calls ListInsights.
                     * @param request ListInsightsRequest message or plain object
                     * @returns Promise
                     */
                    public listInsights(request: google.cloud.recommender.v1.IListInsightsRequest): Promise<google.cloud.recommender.v1.ListInsightsResponse>;

                    /**
                     * Calls GetInsight.
                     * @param request GetInsightRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Insight
                     */
                    public getInsight(request: google.cloud.recommender.v1.IGetInsightRequest, callback: google.cloud.recommender.v1.Recommender.GetInsightCallback): void;

                    /**
                     * Calls GetInsight.
                     * @param request GetInsightRequest message or plain object
                     * @returns Promise
                     */
                    public getInsight(request: google.cloud.recommender.v1.IGetInsightRequest): Promise<google.cloud.recommender.v1.Insight>;

                    /**
                     * Calls MarkInsightAccepted.
                     * @param request MarkInsightAcceptedRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Insight
                     */
                    public markInsightAccepted(request: google.cloud.recommender.v1.IMarkInsightAcceptedRequest, callback: google.cloud.recommender.v1.Recommender.MarkInsightAcceptedCallback): void;

                    /**
                     * Calls MarkInsightAccepted.
                     * @param request MarkInsightAcceptedRequest message or plain object
                     * @returns Promise
                     */
                    public markInsightAccepted(request: google.cloud.recommender.v1.IMarkInsightAcceptedRequest): Promise<google.cloud.recommender.v1.Insight>;

                    /**
                     * Calls ListRecommendations.
                     * @param request ListRecommendationsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListRecommendationsResponse
                     */
                    public listRecommendations(request: google.cloud.recommender.v1.IListRecommendationsRequest, callback: google.cloud.recommender.v1.Recommender.ListRecommendationsCallback): void;

                    /**
                     * Calls ListRecommendations.
                     * @param request ListRecommendationsRequest message or plain object
                     * @returns Promise
                     */
                    public listRecommendations(request: google.cloud.recommender.v1.IListRecommendationsRequest): Promise<google.cloud.recommender.v1.ListRecommendationsResponse>;

                    /**
                     * Calls GetRecommendation.
                     * @param request GetRecommendationRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Recommendation
                     */
                    public getRecommendation(request: google.cloud.recommender.v1.IGetRecommendationRequest, callback: google.cloud.recommender.v1.Recommender.GetRecommendationCallback): void;

                    /**
                     * Calls GetRecommendation.
                     * @param request GetRecommendationRequest message or plain object
                     * @returns Promise
                     */
                    public getRecommendation(request: google.cloud.recommender.v1.IGetRecommendationRequest): Promise<google.cloud.recommender.v1.Recommendation>;

                    /**
                     * Calls MarkRecommendationDismissed.
                     * @param request MarkRecommendationDismissedRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Recommendation
                     */
                    public markRecommendationDismissed(request: google.cloud.recommender.v1.IMarkRecommendationDismissedRequest, callback: google.cloud.recommender.v1.Recommender.MarkRecommendationDismissedCallback): void;

                    /**
                     * Calls MarkRecommendationDismissed.
                     * @param request MarkRecommendationDismissedRequest message or plain object
                     * @returns Promise
                     */
                    public markRecommendationDismissed(request: google.cloud.recommender.v1.IMarkRecommendationDismissedRequest): Promise<google.cloud.recommender.v1.Recommendation>;

                    /**
                     * Calls MarkRecommendationClaimed.
                     * @param request MarkRecommendationClaimedRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Recommendation
                     */
                    public markRecommendationClaimed(request: google.cloud.recommender.v1.IMarkRecommendationClaimedRequest, callback: google.cloud.recommender.v1.Recommender.MarkRecommendationClaimedCallback): void;

                    /**
                     * Calls MarkRecommendationClaimed.
                     * @param request MarkRecommendationClaimedRequest message or plain object
                     * @returns Promise
                     */
                    public markRecommendationClaimed(request: google.cloud.recommender.v1.IMarkRecommendationClaimedRequest): Promise<google.cloud.recommender.v1.Recommendation>;

                    /**
                     * Calls MarkRecommendationSucceeded.
                     * @param request MarkRecommendationSucceededRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Recommendation
                     */
                    public markRecommendationSucceeded(request: google.cloud.recommender.v1.IMarkRecommendationSucceededRequest, callback: google.cloud.recommender.v1.Recommender.MarkRecommendationSucceededCallback): void;

                    /**
                     * Calls MarkRecommendationSucceeded.
                     * @param request MarkRecommendationSucceededRequest message or plain object
                     * @returns Promise
                     */
                    public markRecommendationSucceeded(request: google.cloud.recommender.v1.IMarkRecommendationSucceededRequest): Promise<google.cloud.recommender.v1.Recommendation>;

                    /**
                     * Calls MarkRecommendationFailed.
                     * @param request MarkRecommendationFailedRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Recommendation
                     */
                    public markRecommendationFailed(request: google.cloud.recommender.v1.IMarkRecommendationFailedRequest, callback: google.cloud.recommender.v1.Recommender.MarkRecommendationFailedCallback): void;

                    /**
                     * Calls MarkRecommendationFailed.
                     * @param request MarkRecommendationFailedRequest message or plain object
                     * @returns Promise
                     */
                    public markRecommendationFailed(request: google.cloud.recommender.v1.IMarkRecommendationFailedRequest): Promise<google.cloud.recommender.v1.Recommendation>;

                    /**
                     * Calls GetRecommenderConfig.
                     * @param request GetRecommenderConfigRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and RecommenderConfig
                     */
                    public getRecommenderConfig(request: google.cloud.recommender.v1.IGetRecommenderConfigRequest, callback: google.cloud.recommender.v1.Recommender.GetRecommenderConfigCallback): void;

                    /**
                     * Calls GetRecommenderConfig.
                     * @param request GetRecommenderConfigRequest message or plain object
                     * @returns Promise
                     */
                    public getRecommenderConfig(request: google.cloud.recommender.v1.IGetRecommenderConfigRequest): Promise<google.cloud.recommender.v1.RecommenderConfig>;

                    /**
                     * Calls UpdateRecommenderConfig.
                     * @param request UpdateRecommenderConfigRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and RecommenderConfig
                     */
                    public updateRecommenderConfig(request: google.cloud.recommender.v1.IUpdateRecommenderConfigRequest, callback: google.cloud.recommender.v1.Recommender.UpdateRecommenderConfigCallback): void;

                    /**
                     * Calls UpdateRecommenderConfig.
                     * @param request UpdateRecommenderConfigRequest message or plain object
                     * @returns Promise
                     */
                    public updateRecommenderConfig(request: google.cloud.recommender.v1.IUpdateRecommenderConfigRequest): Promise<google.cloud.recommender.v1.RecommenderConfig>;

                    /**
                     * Calls GetInsightTypeConfig.
                     * @param request GetInsightTypeConfigRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and InsightTypeConfig
                     */
                    public getInsightTypeConfig(request: google.cloud.recommender.v1.IGetInsightTypeConfigRequest, callback: google.cloud.recommender.v1.Recommender.GetInsightTypeConfigCallback): void;

                    /**
                     * Calls GetInsightTypeConfig.
                     * @param request GetInsightTypeConfigRequest message or plain object
                     * @returns Promise
                     */
                    public getInsightTypeConfig(request: google.cloud.recommender.v1.IGetInsightTypeConfigRequest): Promise<google.cloud.recommender.v1.InsightTypeConfig>;

                    /**
                     * Calls UpdateInsightTypeConfig.
                     * @param request UpdateInsightTypeConfigRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and InsightTypeConfig
                     */
                    public updateInsightTypeConfig(request: google.cloud.recommender.v1.IUpdateInsightTypeConfigRequest, callback: google.cloud.recommender.v1.Recommender.UpdateInsightTypeConfigCallback): void;

                    /**
                     * Calls UpdateInsightTypeConfig.
                     * @param request UpdateInsightTypeConfigRequest message or plain object
                     * @returns Promise
                     */
                    public updateInsightTypeConfig(request: google.cloud.recommender.v1.IUpdateInsightTypeConfigRequest): Promise<google.cloud.recommender.v1.InsightTypeConfig>;
                }

                namespace Recommender {

                    /**
                     * Callback as used by {@link google.cloud.recommender.v1.Recommender|listInsights}.
                     * @param error Error, if any
                     * @param [response] ListInsightsResponse
                     */
                    type ListInsightsCallback = (error: (Error|null), response?: google.cloud.recommender.v1.ListInsightsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.recommender.v1.Recommender|getInsight}.
                     * @param error Error, if any
                     * @param [response] Insight
                     */
                    type GetInsightCallback = (error: (Error|null), response?: google.cloud.recommender.v1.Insight) => void;

                    /**
                     * Callback as used by {@link google.cloud.recommender.v1.Recommender|markInsightAccepted}.
                     * @param error Error, if any
                     * @param [response] Insight
                     */
                    type MarkInsightAcceptedCallback = (error: (Error|null), response?: google.cloud.recommender.v1.Insight) => void;

                    /**
                     * Callback as used by {@link google.cloud.recommender.v1.Recommender|listRecommendations}.
                     * @param error Error, if any
                     * @param [response] ListRecommendationsResponse
                     */
                    type ListRecommendationsCallback = (error: (Error|null), response?: google.cloud.recommender.v1.ListRecommendationsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.recommender.v1.Recommender|getRecommendation}.
                     * @param error Error, if any
                     * @param [response] Recommendation
                     */
                    type GetRecommendationCallback = (error: (Error|null), response?: google.cloud.recommender.v1.Recommendation) => void;

                    /**
                     * Callback as used by {@link google.cloud.recommender.v1.Recommender|markRecommendationDismissed}.
                     * @param error Error, if any
                     * @param [response] Recommendation
                     */
                    type MarkRecommendationDismissedCallback = (error: (Error|null), response?: google.cloud.recommender.v1.Recommendation) => void;

                    /**
                     * Callback as used by {@link google.cloud.recommender.v1.Recommender|markRecommendationClaimed}.
                     * @param error Error, if any
                     * @param [response] Recommendation
                     */
                    type MarkRecommendationClaimedCallback = (error: (Error|null), response?: google.cloud.recommender.v1.Recommendation) => void;

                    /**
                     * Callback as used by {@link google.cloud.recommender.v1.Recommender|markRecommendationSucceeded}.
                     * @param error Error, if any
                     * @param [response] Recommendation
                     */
                    type MarkRecommendationSucceededCallback = (error: (Error|null), response?: google.cloud.recommender.v1.Recommendation) => void;

                    /**
                     * Callback as used by {@link google.cloud.recommender.v1.Recommender|markRecommendationFailed}.
                     * @param error Error, if any
                     * @param [response] Recommendation
                     */
                    type MarkRecommendationFailedCallback = (error: (Error|null), response?: google.cloud.recommender.v1.Recommendation) => void;

                    /**
                     * Callback as used by {@link google.cloud.recommender.v1.Recommender|getRecommenderConfig}.
                     * @param error Error, if any
                     * @param [response] RecommenderConfig
                     */
                    type GetRecommenderConfigCallback = (error: (Error|null), response?: google.cloud.recommender.v1.RecommenderConfig) => void;

                    /**
                     * Callback as used by {@link google.cloud.recommender.v1.Recommender|updateRecommenderConfig}.
                     * @param error Error, if any
                     * @param [response] RecommenderConfig
                     */
                    type UpdateRecommenderConfigCallback = (error: (Error|null), response?: google.cloud.recommender.v1.RecommenderConfig) => void;

                    /**
                     * Callback as used by {@link google.cloud.recommender.v1.Recommender|getInsightTypeConfig}.
                     * @param error Error, if any
                     * @param [response] InsightTypeConfig
                     */
                    type GetInsightTypeConfigCallback = (error: (Error|null), response?: google.cloud.recommender.v1.InsightTypeConfig) => void;

                    /**
                     * Callback as used by {@link google.cloud.recommender.v1.Recommender|updateInsightTypeConfig}.
                     * @param error Error, if any
                     * @param [response] InsightTypeConfig
                     */
                    type UpdateInsightTypeConfigCallback = (error: (Error|null), response?: google.cloud.recommender.v1.InsightTypeConfig) => void;
                }

                /** Properties of a ListInsightsRequest. */
                interface IListInsightsRequest {

                    /** ListInsightsRequest parent */
                    parent?: (string|null);

                    /** ListInsightsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListInsightsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListInsightsRequest filter */
                    filter?: (string|null);
                }

                /** Represents a ListInsightsRequest. */
                class ListInsightsRequest implements IListInsightsRequest {

                    /**
                     * Constructs a new ListInsightsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommender.v1.IListInsightsRequest);

                    /** ListInsightsRequest parent. */
                    public parent: string;

                    /** ListInsightsRequest pageSize. */
                    public pageSize: number;

                    /** ListInsightsRequest pageToken. */
                    public pageToken: string;

                    /** ListInsightsRequest filter. */
                    public filter: string;

                    /**
                     * Creates a new ListInsightsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListInsightsRequest instance
                     */
                    public static create(properties?: google.cloud.recommender.v1.IListInsightsRequest): google.cloud.recommender.v1.ListInsightsRequest;

                    /**
                     * Encodes the specified ListInsightsRequest message. Does not implicitly {@link google.cloud.recommender.v1.ListInsightsRequest.verify|verify} messages.
                     * @param message ListInsightsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommender.v1.IListInsightsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListInsightsRequest message, length delimited. Does not implicitly {@link google.cloud.recommender.v1.ListInsightsRequest.verify|verify} messages.
                     * @param message ListInsightsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommender.v1.IListInsightsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListInsightsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListInsightsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommender.v1.ListInsightsRequest;

                    /**
                     * Decodes a ListInsightsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListInsightsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommender.v1.ListInsightsRequest;

                    /**
                     * Verifies a ListInsightsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListInsightsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListInsightsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommender.v1.ListInsightsRequest;

                    /**
                     * Creates a plain object from a ListInsightsRequest message. Also converts values to other types if specified.
                     * @param message ListInsightsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommender.v1.ListInsightsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListInsightsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListInsightsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListInsightsResponse. */
                interface IListInsightsResponse {

                    /** ListInsightsResponse insights */
                    insights?: (google.cloud.recommender.v1.IInsight[]|null);

                    /** ListInsightsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListInsightsResponse. */
                class ListInsightsResponse implements IListInsightsResponse {

                    /**
                     * Constructs a new ListInsightsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommender.v1.IListInsightsResponse);

                    /** ListInsightsResponse insights. */
                    public insights: google.cloud.recommender.v1.IInsight[];

                    /** ListInsightsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListInsightsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListInsightsResponse instance
                     */
                    public static create(properties?: google.cloud.recommender.v1.IListInsightsResponse): google.cloud.recommender.v1.ListInsightsResponse;

                    /**
                     * Encodes the specified ListInsightsResponse message. Does not implicitly {@link google.cloud.recommender.v1.ListInsightsResponse.verify|verify} messages.
                     * @param message ListInsightsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommender.v1.IListInsightsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListInsightsResponse message, length delimited. Does not implicitly {@link google.cloud.recommender.v1.ListInsightsResponse.verify|verify} messages.
                     * @param message ListInsightsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommender.v1.IListInsightsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListInsightsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListInsightsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommender.v1.ListInsightsResponse;

                    /**
                     * Decodes a ListInsightsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListInsightsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommender.v1.ListInsightsResponse;

                    /**
                     * Verifies a ListInsightsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListInsightsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListInsightsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommender.v1.ListInsightsResponse;

                    /**
                     * Creates a plain object from a ListInsightsResponse message. Also converts values to other types if specified.
                     * @param message ListInsightsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommender.v1.ListInsightsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListInsightsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListInsightsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetInsightRequest. */
                interface IGetInsightRequest {

                    /** GetInsightRequest name */
                    name?: (string|null);
                }

                /** Represents a GetInsightRequest. */
                class GetInsightRequest implements IGetInsightRequest {

                    /**
                     * Constructs a new GetInsightRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommender.v1.IGetInsightRequest);

                    /** GetInsightRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetInsightRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetInsightRequest instance
                     */
                    public static create(properties?: google.cloud.recommender.v1.IGetInsightRequest): google.cloud.recommender.v1.GetInsightRequest;

                    /**
                     * Encodes the specified GetInsightRequest message. Does not implicitly {@link google.cloud.recommender.v1.GetInsightRequest.verify|verify} messages.
                     * @param message GetInsightRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommender.v1.IGetInsightRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetInsightRequest message, length delimited. Does not implicitly {@link google.cloud.recommender.v1.GetInsightRequest.verify|verify} messages.
                     * @param message GetInsightRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommender.v1.IGetInsightRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetInsightRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetInsightRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommender.v1.GetInsightRequest;

                    /**
                     * Decodes a GetInsightRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetInsightRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommender.v1.GetInsightRequest;

                    /**
                     * Verifies a GetInsightRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetInsightRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetInsightRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommender.v1.GetInsightRequest;

                    /**
                     * Creates a plain object from a GetInsightRequest message. Also converts values to other types if specified.
                     * @param message GetInsightRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommender.v1.GetInsightRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetInsightRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetInsightRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a MarkInsightAcceptedRequest. */
                interface IMarkInsightAcceptedRequest {

                    /** MarkInsightAcceptedRequest name */
                    name?: (string|null);

                    /** MarkInsightAcceptedRequest stateMetadata */
                    stateMetadata?: ({ [k: string]: string }|null);

                    /** MarkInsightAcceptedRequest etag */
                    etag?: (string|null);
                }

                /** Represents a MarkInsightAcceptedRequest. */
                class MarkInsightAcceptedRequest implements IMarkInsightAcceptedRequest {

                    /**
                     * Constructs a new MarkInsightAcceptedRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommender.v1.IMarkInsightAcceptedRequest);

                    /** MarkInsightAcceptedRequest name. */
                    public name: string;

                    /** MarkInsightAcceptedRequest stateMetadata. */
                    public stateMetadata: { [k: string]: string };

                    /** MarkInsightAcceptedRequest etag. */
                    public etag: string;

                    /**
                     * Creates a new MarkInsightAcceptedRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MarkInsightAcceptedRequest instance
                     */
                    public static create(properties?: google.cloud.recommender.v1.IMarkInsightAcceptedRequest): google.cloud.recommender.v1.MarkInsightAcceptedRequest;

                    /**
                     * Encodes the specified MarkInsightAcceptedRequest message. Does not implicitly {@link google.cloud.recommender.v1.MarkInsightAcceptedRequest.verify|verify} messages.
                     * @param message MarkInsightAcceptedRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommender.v1.IMarkInsightAcceptedRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MarkInsightAcceptedRequest message, length delimited. Does not implicitly {@link google.cloud.recommender.v1.MarkInsightAcceptedRequest.verify|verify} messages.
                     * @param message MarkInsightAcceptedRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommender.v1.IMarkInsightAcceptedRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MarkInsightAcceptedRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MarkInsightAcceptedRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommender.v1.MarkInsightAcceptedRequest;

                    /**
                     * Decodes a MarkInsightAcceptedRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MarkInsightAcceptedRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommender.v1.MarkInsightAcceptedRequest;

                    /**
                     * Verifies a MarkInsightAcceptedRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MarkInsightAcceptedRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MarkInsightAcceptedRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommender.v1.MarkInsightAcceptedRequest;

                    /**
                     * Creates a plain object from a MarkInsightAcceptedRequest message. Also converts values to other types if specified.
                     * @param message MarkInsightAcceptedRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommender.v1.MarkInsightAcceptedRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MarkInsightAcceptedRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for MarkInsightAcceptedRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListRecommendationsRequest. */
                interface IListRecommendationsRequest {

                    /** ListRecommendationsRequest parent */
                    parent?: (string|null);

                    /** ListRecommendationsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListRecommendationsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListRecommendationsRequest filter */
                    filter?: (string|null);
                }

                /** Represents a ListRecommendationsRequest. */
                class ListRecommendationsRequest implements IListRecommendationsRequest {

                    /**
                     * Constructs a new ListRecommendationsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommender.v1.IListRecommendationsRequest);

                    /** ListRecommendationsRequest parent. */
                    public parent: string;

                    /** ListRecommendationsRequest pageSize. */
                    public pageSize: number;

                    /** ListRecommendationsRequest pageToken. */
                    public pageToken: string;

                    /** ListRecommendationsRequest filter. */
                    public filter: string;

                    /**
                     * Creates a new ListRecommendationsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListRecommendationsRequest instance
                     */
                    public static create(properties?: google.cloud.recommender.v1.IListRecommendationsRequest): google.cloud.recommender.v1.ListRecommendationsRequest;

                    /**
                     * Encodes the specified ListRecommendationsRequest message. Does not implicitly {@link google.cloud.recommender.v1.ListRecommendationsRequest.verify|verify} messages.
                     * @param message ListRecommendationsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommender.v1.IListRecommendationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListRecommendationsRequest message, length delimited. Does not implicitly {@link google.cloud.recommender.v1.ListRecommendationsRequest.verify|verify} messages.
                     * @param message ListRecommendationsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommender.v1.IListRecommendationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListRecommendationsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListRecommendationsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommender.v1.ListRecommendationsRequest;

                    /**
                     * Decodes a ListRecommendationsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListRecommendationsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommender.v1.ListRecommendationsRequest;

                    /**
                     * Verifies a ListRecommendationsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListRecommendationsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListRecommendationsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommender.v1.ListRecommendationsRequest;

                    /**
                     * Creates a plain object from a ListRecommendationsRequest message. Also converts values to other types if specified.
                     * @param message ListRecommendationsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommender.v1.ListRecommendationsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListRecommendationsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListRecommendationsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListRecommendationsResponse. */
                interface IListRecommendationsResponse {

                    /** ListRecommendationsResponse recommendations */
                    recommendations?: (google.cloud.recommender.v1.IRecommendation[]|null);

                    /** ListRecommendationsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListRecommendationsResponse. */
                class ListRecommendationsResponse implements IListRecommendationsResponse {

                    /**
                     * Constructs a new ListRecommendationsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommender.v1.IListRecommendationsResponse);

                    /** ListRecommendationsResponse recommendations. */
                    public recommendations: google.cloud.recommender.v1.IRecommendation[];

                    /** ListRecommendationsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListRecommendationsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListRecommendationsResponse instance
                     */
                    public static create(properties?: google.cloud.recommender.v1.IListRecommendationsResponse): google.cloud.recommender.v1.ListRecommendationsResponse;

                    /**
                     * Encodes the specified ListRecommendationsResponse message. Does not implicitly {@link google.cloud.recommender.v1.ListRecommendationsResponse.verify|verify} messages.
                     * @param message ListRecommendationsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommender.v1.IListRecommendationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListRecommendationsResponse message, length delimited. Does not implicitly {@link google.cloud.recommender.v1.ListRecommendationsResponse.verify|verify} messages.
                     * @param message ListRecommendationsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommender.v1.IListRecommendationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListRecommendationsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListRecommendationsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommender.v1.ListRecommendationsResponse;

                    /**
                     * Decodes a ListRecommendationsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListRecommendationsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommender.v1.ListRecommendationsResponse;

                    /**
                     * Verifies a ListRecommendationsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListRecommendationsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListRecommendationsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommender.v1.ListRecommendationsResponse;

                    /**
                     * Creates a plain object from a ListRecommendationsResponse message. Also converts values to other types if specified.
                     * @param message ListRecommendationsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommender.v1.ListRecommendationsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListRecommendationsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListRecommendationsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetRecommendationRequest. */
                interface IGetRecommendationRequest {

                    /** GetRecommendationRequest name */
                    name?: (string|null);
                }

                /** Represents a GetRecommendationRequest. */
                class GetRecommendationRequest implements IGetRecommendationRequest {

                    /**
                     * Constructs a new GetRecommendationRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommender.v1.IGetRecommendationRequest);

                    /** GetRecommendationRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetRecommendationRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetRecommendationRequest instance
                     */
                    public static create(properties?: google.cloud.recommender.v1.IGetRecommendationRequest): google.cloud.recommender.v1.GetRecommendationRequest;

                    /**
                     * Encodes the specified GetRecommendationRequest message. Does not implicitly {@link google.cloud.recommender.v1.GetRecommendationRequest.verify|verify} messages.
                     * @param message GetRecommendationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommender.v1.IGetRecommendationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetRecommendationRequest message, length delimited. Does not implicitly {@link google.cloud.recommender.v1.GetRecommendationRequest.verify|verify} messages.
                     * @param message GetRecommendationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommender.v1.IGetRecommendationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetRecommendationRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetRecommendationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommender.v1.GetRecommendationRequest;

                    /**
                     * Decodes a GetRecommendationRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetRecommendationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommender.v1.GetRecommendationRequest;

                    /**
                     * Verifies a GetRecommendationRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetRecommendationRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetRecommendationRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommender.v1.GetRecommendationRequest;

                    /**
                     * Creates a plain object from a GetRecommendationRequest message. Also converts values to other types if specified.
                     * @param message GetRecommendationRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommender.v1.GetRecommendationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetRecommendationRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetRecommendationRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a MarkRecommendationDismissedRequest. */
                interface IMarkRecommendationDismissedRequest {

                    /** MarkRecommendationDismissedRequest name */
                    name?: (string|null);

                    /** MarkRecommendationDismissedRequest etag */
                    etag?: (string|null);
                }

                /** Represents a MarkRecommendationDismissedRequest. */
                class MarkRecommendationDismissedRequest implements IMarkRecommendationDismissedRequest {

                    /**
                     * Constructs a new MarkRecommendationDismissedRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommender.v1.IMarkRecommendationDismissedRequest);

                    /** MarkRecommendationDismissedRequest name. */
                    public name: string;

                    /** MarkRecommendationDismissedRequest etag. */
                    public etag: string;

                    /**
                     * Creates a new MarkRecommendationDismissedRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MarkRecommendationDismissedRequest instance
                     */
                    public static create(properties?: google.cloud.recommender.v1.IMarkRecommendationDismissedRequest): google.cloud.recommender.v1.MarkRecommendationDismissedRequest;

                    /**
                     * Encodes the specified MarkRecommendationDismissedRequest message. Does not implicitly {@link google.cloud.recommender.v1.MarkRecommendationDismissedRequest.verify|verify} messages.
                     * @param message MarkRecommendationDismissedRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommender.v1.IMarkRecommendationDismissedRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MarkRecommendationDismissedRequest message, length delimited. Does not implicitly {@link google.cloud.recommender.v1.MarkRecommendationDismissedRequest.verify|verify} messages.
                     * @param message MarkRecommendationDismissedRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommender.v1.IMarkRecommendationDismissedRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MarkRecommendationDismissedRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MarkRecommendationDismissedRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommender.v1.MarkRecommendationDismissedRequest;

                    /**
                     * Decodes a MarkRecommendationDismissedRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MarkRecommendationDismissedRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommender.v1.MarkRecommendationDismissedRequest;

                    /**
                     * Verifies a MarkRecommendationDismissedRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MarkRecommendationDismissedRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MarkRecommendationDismissedRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommender.v1.MarkRecommendationDismissedRequest;

                    /**
                     * Creates a plain object from a MarkRecommendationDismissedRequest message. Also converts values to other types if specified.
                     * @param message MarkRecommendationDismissedRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommender.v1.MarkRecommendationDismissedRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MarkRecommendationDismissedRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for MarkRecommendationDismissedRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a MarkRecommendationClaimedRequest. */
                interface IMarkRecommendationClaimedRequest {

                    /** MarkRecommendationClaimedRequest name */
                    name?: (string|null);

                    /** MarkRecommendationClaimedRequest stateMetadata */
                    stateMetadata?: ({ [k: string]: string }|null);

                    /** MarkRecommendationClaimedRequest etag */
                    etag?: (string|null);
                }

                /** Represents a MarkRecommendationClaimedRequest. */
                class MarkRecommendationClaimedRequest implements IMarkRecommendationClaimedRequest {

                    /**
                     * Constructs a new MarkRecommendationClaimedRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommender.v1.IMarkRecommendationClaimedRequest);

                    /** MarkRecommendationClaimedRequest name. */
                    public name: string;

                    /** MarkRecommendationClaimedRequest stateMetadata. */
                    public stateMetadata: { [k: string]: string };

                    /** MarkRecommendationClaimedRequest etag. */
                    public etag: string;

                    /**
                     * Creates a new MarkRecommendationClaimedRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MarkRecommendationClaimedRequest instance
                     */
                    public static create(properties?: google.cloud.recommender.v1.IMarkRecommendationClaimedRequest): google.cloud.recommender.v1.MarkRecommendationClaimedRequest;

                    /**
                     * Encodes the specified MarkRecommendationClaimedRequest message. Does not implicitly {@link google.cloud.recommender.v1.MarkRecommendationClaimedRequest.verify|verify} messages.
                     * @param message MarkRecommendationClaimedRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommender.v1.IMarkRecommendationClaimedRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MarkRecommendationClaimedRequest message, length delimited. Does not implicitly {@link google.cloud.recommender.v1.MarkRecommendationClaimedRequest.verify|verify} messages.
                     * @param message MarkRecommendationClaimedRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommender.v1.IMarkRecommendationClaimedRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MarkRecommendationClaimedRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MarkRecommendationClaimedRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommender.v1.MarkRecommendationClaimedRequest;

                    /**
                     * Decodes a MarkRecommendationClaimedRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MarkRecommendationClaimedRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommender.v1.MarkRecommendationClaimedRequest;

                    /**
                     * Verifies a MarkRecommendationClaimedRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MarkRecommendationClaimedRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MarkRecommendationClaimedRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommender.v1.MarkRecommendationClaimedRequest;

                    /**
                     * Creates a plain object from a MarkRecommendationClaimedRequest message. Also converts values to other types if specified.
                     * @param message MarkRecommendationClaimedRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommender.v1.MarkRecommendationClaimedRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MarkRecommendationClaimedRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for MarkRecommendationClaimedRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a MarkRecommendationSucceededRequest. */
                interface IMarkRecommendationSucceededRequest {

                    /** MarkRecommendationSucceededRequest name */
                    name?: (string|null);

                    /** MarkRecommendationSucceededRequest stateMetadata */
                    stateMetadata?: ({ [k: string]: string }|null);

                    /** MarkRecommendationSucceededRequest etag */
                    etag?: (string|null);
                }

                /** Represents a MarkRecommendationSucceededRequest. */
                class MarkRecommendationSucceededRequest implements IMarkRecommendationSucceededRequest {

                    /**
                     * Constructs a new MarkRecommendationSucceededRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommender.v1.IMarkRecommendationSucceededRequest);

                    /** MarkRecommendationSucceededRequest name. */
                    public name: string;

                    /** MarkRecommendationSucceededRequest stateMetadata. */
                    public stateMetadata: { [k: string]: string };

                    /** MarkRecommendationSucceededRequest etag. */
                    public etag: string;

                    /**
                     * Creates a new MarkRecommendationSucceededRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MarkRecommendationSucceededRequest instance
                     */
                    public static create(properties?: google.cloud.recommender.v1.IMarkRecommendationSucceededRequest): google.cloud.recommender.v1.MarkRecommendationSucceededRequest;

                    /**
                     * Encodes the specified MarkRecommendationSucceededRequest message. Does not implicitly {@link google.cloud.recommender.v1.MarkRecommendationSucceededRequest.verify|verify} messages.
                     * @param message MarkRecommendationSucceededRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommender.v1.IMarkRecommendationSucceededRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MarkRecommendationSucceededRequest message, length delimited. Does not implicitly {@link google.cloud.recommender.v1.MarkRecommendationSucceededRequest.verify|verify} messages.
                     * @param message MarkRecommendationSucceededRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommender.v1.IMarkRecommendationSucceededRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MarkRecommendationSucceededRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MarkRecommendationSucceededRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommender.v1.MarkRecommendationSucceededRequest;

                    /**
                     * Decodes a MarkRecommendationSucceededRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MarkRecommendationSucceededRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommender.v1.MarkRecommendationSucceededRequest;

                    /**
                     * Verifies a MarkRecommendationSucceededRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MarkRecommendationSucceededRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MarkRecommendationSucceededRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommender.v1.MarkRecommendationSucceededRequest;

                    /**
                     * Creates a plain object from a MarkRecommendationSucceededRequest message. Also converts values to other types if specified.
                     * @param message MarkRecommendationSucceededRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommender.v1.MarkRecommendationSucceededRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MarkRecommendationSucceededRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for MarkRecommendationSucceededRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a MarkRecommendationFailedRequest. */
                interface IMarkRecommendationFailedRequest {

                    /** MarkRecommendationFailedRequest name */
                    name?: (string|null);

                    /** MarkRecommendationFailedRequest stateMetadata */
                    stateMetadata?: ({ [k: string]: string }|null);

                    /** MarkRecommendationFailedRequest etag */
                    etag?: (string|null);
                }

                /** Represents a MarkRecommendationFailedRequest. */
                class MarkRecommendationFailedRequest implements IMarkRecommendationFailedRequest {

                    /**
                     * Constructs a new MarkRecommendationFailedRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommender.v1.IMarkRecommendationFailedRequest);

                    /** MarkRecommendationFailedRequest name. */
                    public name: string;

                    /** MarkRecommendationFailedRequest stateMetadata. */
                    public stateMetadata: { [k: string]: string };

                    /** MarkRecommendationFailedRequest etag. */
                    public etag: string;

                    /**
                     * Creates a new MarkRecommendationFailedRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MarkRecommendationFailedRequest instance
                     */
                    public static create(properties?: google.cloud.recommender.v1.IMarkRecommendationFailedRequest): google.cloud.recommender.v1.MarkRecommendationFailedRequest;

                    /**
                     * Encodes the specified MarkRecommendationFailedRequest message. Does not implicitly {@link google.cloud.recommender.v1.MarkRecommendationFailedRequest.verify|verify} messages.
                     * @param message MarkRecommendationFailedRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommender.v1.IMarkRecommendationFailedRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MarkRecommendationFailedRequest message, length delimited. Does not implicitly {@link google.cloud.recommender.v1.MarkRecommendationFailedRequest.verify|verify} messages.
                     * @param message MarkRecommendationFailedRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommender.v1.IMarkRecommendationFailedRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MarkRecommendationFailedRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MarkRecommendationFailedRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommender.v1.MarkRecommendationFailedRequest;

                    /**
                     * Decodes a MarkRecommendationFailedRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MarkRecommendationFailedRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommender.v1.MarkRecommendationFailedRequest;

                    /**
                     * Verifies a MarkRecommendationFailedRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MarkRecommendationFailedRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MarkRecommendationFailedRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommender.v1.MarkRecommendationFailedRequest;

                    /**
                     * Creates a plain object from a MarkRecommendationFailedRequest message. Also converts values to other types if specified.
                     * @param message MarkRecommendationFailedRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommender.v1.MarkRecommendationFailedRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MarkRecommendationFailedRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for MarkRecommendationFailedRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetRecommenderConfigRequest. */
                interface IGetRecommenderConfigRequest {

                    /** GetRecommenderConfigRequest name */
                    name?: (string|null);
                }

                /** Represents a GetRecommenderConfigRequest. */
                class GetRecommenderConfigRequest implements IGetRecommenderConfigRequest {

                    /**
                     * Constructs a new GetRecommenderConfigRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommender.v1.IGetRecommenderConfigRequest);

                    /** GetRecommenderConfigRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetRecommenderConfigRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetRecommenderConfigRequest instance
                     */
                    public static create(properties?: google.cloud.recommender.v1.IGetRecommenderConfigRequest): google.cloud.recommender.v1.GetRecommenderConfigRequest;

                    /**
                     * Encodes the specified GetRecommenderConfigRequest message. Does not implicitly {@link google.cloud.recommender.v1.GetRecommenderConfigRequest.verify|verify} messages.
                     * @param message GetRecommenderConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommender.v1.IGetRecommenderConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetRecommenderConfigRequest message, length delimited. Does not implicitly {@link google.cloud.recommender.v1.GetRecommenderConfigRequest.verify|verify} messages.
                     * @param message GetRecommenderConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommender.v1.IGetRecommenderConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetRecommenderConfigRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetRecommenderConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommender.v1.GetRecommenderConfigRequest;

                    /**
                     * Decodes a GetRecommenderConfigRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetRecommenderConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommender.v1.GetRecommenderConfigRequest;

                    /**
                     * Verifies a GetRecommenderConfigRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetRecommenderConfigRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetRecommenderConfigRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommender.v1.GetRecommenderConfigRequest;

                    /**
                     * Creates a plain object from a GetRecommenderConfigRequest message. Also converts values to other types if specified.
                     * @param message GetRecommenderConfigRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommender.v1.GetRecommenderConfigRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetRecommenderConfigRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetRecommenderConfigRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateRecommenderConfigRequest. */
                interface IUpdateRecommenderConfigRequest {

                    /** UpdateRecommenderConfigRequest recommenderConfig */
                    recommenderConfig?: (google.cloud.recommender.v1.IRecommenderConfig|null);

                    /** UpdateRecommenderConfigRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateRecommenderConfigRequest validateOnly */
                    validateOnly?: (boolean|null);
                }

                /** Represents an UpdateRecommenderConfigRequest. */
                class UpdateRecommenderConfigRequest implements IUpdateRecommenderConfigRequest {

                    /**
                     * Constructs a new UpdateRecommenderConfigRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommender.v1.IUpdateRecommenderConfigRequest);

                    /** UpdateRecommenderConfigRequest recommenderConfig. */
                    public recommenderConfig?: (google.cloud.recommender.v1.IRecommenderConfig|null);

                    /** UpdateRecommenderConfigRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateRecommenderConfigRequest validateOnly. */
                    public validateOnly: boolean;

                    /**
                     * Creates a new UpdateRecommenderConfigRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateRecommenderConfigRequest instance
                     */
                    public static create(properties?: google.cloud.recommender.v1.IUpdateRecommenderConfigRequest): google.cloud.recommender.v1.UpdateRecommenderConfigRequest;

                    /**
                     * Encodes the specified UpdateRecommenderConfigRequest message. Does not implicitly {@link google.cloud.recommender.v1.UpdateRecommenderConfigRequest.verify|verify} messages.
                     * @param message UpdateRecommenderConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommender.v1.IUpdateRecommenderConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateRecommenderConfigRequest message, length delimited. Does not implicitly {@link google.cloud.recommender.v1.UpdateRecommenderConfigRequest.verify|verify} messages.
                     * @param message UpdateRecommenderConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommender.v1.IUpdateRecommenderConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateRecommenderConfigRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateRecommenderConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommender.v1.UpdateRecommenderConfigRequest;

                    /**
                     * Decodes an UpdateRecommenderConfigRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateRecommenderConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommender.v1.UpdateRecommenderConfigRequest;

                    /**
                     * Verifies an UpdateRecommenderConfigRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateRecommenderConfigRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateRecommenderConfigRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommender.v1.UpdateRecommenderConfigRequest;

                    /**
                     * Creates a plain object from an UpdateRecommenderConfigRequest message. Also converts values to other types if specified.
                     * @param message UpdateRecommenderConfigRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommender.v1.UpdateRecommenderConfigRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateRecommenderConfigRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateRecommenderConfigRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetInsightTypeConfigRequest. */
                interface IGetInsightTypeConfigRequest {

                    /** GetInsightTypeConfigRequest name */
                    name?: (string|null);
                }

                /** Represents a GetInsightTypeConfigRequest. */
                class GetInsightTypeConfigRequest implements IGetInsightTypeConfigRequest {

                    /**
                     * Constructs a new GetInsightTypeConfigRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommender.v1.IGetInsightTypeConfigRequest);

                    /** GetInsightTypeConfigRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetInsightTypeConfigRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetInsightTypeConfigRequest instance
                     */
                    public static create(properties?: google.cloud.recommender.v1.IGetInsightTypeConfigRequest): google.cloud.recommender.v1.GetInsightTypeConfigRequest;

                    /**
                     * Encodes the specified GetInsightTypeConfigRequest message. Does not implicitly {@link google.cloud.recommender.v1.GetInsightTypeConfigRequest.verify|verify} messages.
                     * @param message GetInsightTypeConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommender.v1.IGetInsightTypeConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetInsightTypeConfigRequest message, length delimited. Does not implicitly {@link google.cloud.recommender.v1.GetInsightTypeConfigRequest.verify|verify} messages.
                     * @param message GetInsightTypeConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommender.v1.IGetInsightTypeConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetInsightTypeConfigRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetInsightTypeConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommender.v1.GetInsightTypeConfigRequest;

                    /**
                     * Decodes a GetInsightTypeConfigRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetInsightTypeConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommender.v1.GetInsightTypeConfigRequest;

                    /**
                     * Verifies a GetInsightTypeConfigRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetInsightTypeConfigRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetInsightTypeConfigRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommender.v1.GetInsightTypeConfigRequest;

                    /**
                     * Creates a plain object from a GetInsightTypeConfigRequest message. Also converts values to other types if specified.
                     * @param message GetInsightTypeConfigRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommender.v1.GetInsightTypeConfigRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetInsightTypeConfigRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetInsightTypeConfigRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateInsightTypeConfigRequest. */
                interface IUpdateInsightTypeConfigRequest {

                    /** UpdateInsightTypeConfigRequest insightTypeConfig */
                    insightTypeConfig?: (google.cloud.recommender.v1.IInsightTypeConfig|null);

                    /** UpdateInsightTypeConfigRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateInsightTypeConfigRequest validateOnly */
                    validateOnly?: (boolean|null);
                }

                /** Represents an UpdateInsightTypeConfigRequest. */
                class UpdateInsightTypeConfigRequest implements IUpdateInsightTypeConfigRequest {

                    /**
                     * Constructs a new UpdateInsightTypeConfigRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommender.v1.IUpdateInsightTypeConfigRequest);

                    /** UpdateInsightTypeConfigRequest insightTypeConfig. */
                    public insightTypeConfig?: (google.cloud.recommender.v1.IInsightTypeConfig|null);

                    /** UpdateInsightTypeConfigRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateInsightTypeConfigRequest validateOnly. */
                    public validateOnly: boolean;

                    /**
                     * Creates a new UpdateInsightTypeConfigRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateInsightTypeConfigRequest instance
                     */
                    public static create(properties?: google.cloud.recommender.v1.IUpdateInsightTypeConfigRequest): google.cloud.recommender.v1.UpdateInsightTypeConfigRequest;

                    /**
                     * Encodes the specified UpdateInsightTypeConfigRequest message. Does not implicitly {@link google.cloud.recommender.v1.UpdateInsightTypeConfigRequest.verify|verify} messages.
                     * @param message UpdateInsightTypeConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommender.v1.IUpdateInsightTypeConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateInsightTypeConfigRequest message, length delimited. Does not implicitly {@link google.cloud.recommender.v1.UpdateInsightTypeConfigRequest.verify|verify} messages.
                     * @param message UpdateInsightTypeConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommender.v1.IUpdateInsightTypeConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateInsightTypeConfigRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateInsightTypeConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommender.v1.UpdateInsightTypeConfigRequest;

                    /**
                     * Decodes an UpdateInsightTypeConfigRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateInsightTypeConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommender.v1.UpdateInsightTypeConfigRequest;

                    /**
                     * Verifies an UpdateInsightTypeConfigRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateInsightTypeConfigRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateInsightTypeConfigRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommender.v1.UpdateInsightTypeConfigRequest;

                    /**
                     * Creates a plain object from an UpdateInsightTypeConfigRequest message. Also converts values to other types if specified.
                     * @param message UpdateInsightTypeConfigRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommender.v1.UpdateInsightTypeConfigRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateInsightTypeConfigRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateInsightTypeConfigRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }

            /** Namespace v1beta1. */
            namespace v1beta1 {

                /** Properties of an Insight. */
                interface IInsight {

                    /** Insight name */
                    name?: (string|null);

                    /** Insight description */
                    description?: (string|null);

                    /** Insight targetResources */
                    targetResources?: (string[]|null);

                    /** Insight insightSubtype */
                    insightSubtype?: (string|null);

                    /** Insight content */
                    content?: (google.protobuf.IStruct|null);

                    /** Insight lastRefreshTime */
                    lastRefreshTime?: (google.protobuf.ITimestamp|null);

                    /** Insight observationPeriod */
                    observationPeriod?: (google.protobuf.IDuration|null);

                    /** Insight stateInfo */
                    stateInfo?: (google.cloud.recommender.v1beta1.IInsightStateInfo|null);

                    /** Insight category */
                    category?: (google.cloud.recommender.v1beta1.Insight.Category|keyof typeof google.cloud.recommender.v1beta1.Insight.Category|null);

                    /** Insight severity */
                    severity?: (google.cloud.recommender.v1beta1.Insight.Severity|keyof typeof google.cloud.recommender.v1beta1.Insight.Severity|null);

                    /** Insight etag */
                    etag?: (string|null);

                    /** Insight associatedRecommendations */
                    associatedRecommendations?: (google.cloud.recommender.v1beta1.Insight.IRecommendationReference[]|null);
                }

                /** Represents an Insight. */
                class Insight implements IInsight {

                    /**
                     * Constructs a new Insight.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommender.v1beta1.IInsight);

                    /** Insight name. */
                    public name: string;

                    /** Insight description. */
                    public description: string;

                    /** Insight targetResources. */
                    public targetResources: string[];

                    /** Insight insightSubtype. */
                    public insightSubtype: string;

                    /** Insight content. */
                    public content?: (google.protobuf.IStruct|null);

                    /** Insight lastRefreshTime. */
                    public lastRefreshTime?: (google.protobuf.ITimestamp|null);

                    /** Insight observationPeriod. */
                    public observationPeriod?: (google.protobuf.IDuration|null);

                    /** Insight stateInfo. */
                    public stateInfo?: (google.cloud.recommender.v1beta1.IInsightStateInfo|null);

                    /** Insight category. */
                    public category: (google.cloud.recommender.v1beta1.Insight.Category|keyof typeof google.cloud.recommender.v1beta1.Insight.Category);

                    /** Insight severity. */
                    public severity: (google.cloud.recommender.v1beta1.Insight.Severity|keyof typeof google.cloud.recommender.v1beta1.Insight.Severity);

                    /** Insight etag. */
                    public etag: string;

                    /** Insight associatedRecommendations. */
                    public associatedRecommendations: google.cloud.recommender.v1beta1.Insight.IRecommendationReference[];

                    /**
                     * Creates a new Insight instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Insight instance
                     */
                    public static create(properties?: google.cloud.recommender.v1beta1.IInsight): google.cloud.recommender.v1beta1.Insight;

                    /**
                     * Encodes the specified Insight message. Does not implicitly {@link google.cloud.recommender.v1beta1.Insight.verify|verify} messages.
                     * @param message Insight message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommender.v1beta1.IInsight, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Insight message, length delimited. Does not implicitly {@link google.cloud.recommender.v1beta1.Insight.verify|verify} messages.
                     * @param message Insight message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommender.v1beta1.IInsight, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Insight message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Insight
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommender.v1beta1.Insight;

                    /**
                     * Decodes an Insight message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Insight
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommender.v1beta1.Insight;

                    /**
                     * Verifies an Insight message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Insight message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Insight
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommender.v1beta1.Insight;

                    /**
                     * Creates a plain object from an Insight message. Also converts values to other types if specified.
                     * @param message Insight
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommender.v1beta1.Insight, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Insight to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Insight
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Insight {

                    /** Category enum. */
                    enum Category {
                        CATEGORY_UNSPECIFIED = 0,
                        COST = 1,
                        SECURITY = 2,
                        PERFORMANCE = 3,
                        MANAGEABILITY = 4
                    }

                    /** Severity enum. */
                    enum Severity {
                        SEVERITY_UNSPECIFIED = 0,
                        LOW = 1,
                        MEDIUM = 2,
                        HIGH = 3,
                        CRITICAL = 4
                    }

                    /** Properties of a RecommendationReference. */
                    interface IRecommendationReference {

                        /** RecommendationReference recommendation */
                        recommendation?: (string|null);
                    }

                    /** Represents a RecommendationReference. */
                    class RecommendationReference implements IRecommendationReference {

                        /**
                         * Constructs a new RecommendationReference.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.recommender.v1beta1.Insight.IRecommendationReference);

                        /** RecommendationReference recommendation. */
                        public recommendation: string;

                        /**
                         * Creates a new RecommendationReference instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns RecommendationReference instance
                         */
                        public static create(properties?: google.cloud.recommender.v1beta1.Insight.IRecommendationReference): google.cloud.recommender.v1beta1.Insight.RecommendationReference;

                        /**
                         * Encodes the specified RecommendationReference message. Does not implicitly {@link google.cloud.recommender.v1beta1.Insight.RecommendationReference.verify|verify} messages.
                         * @param message RecommendationReference message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.recommender.v1beta1.Insight.IRecommendationReference, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified RecommendationReference message, length delimited. Does not implicitly {@link google.cloud.recommender.v1beta1.Insight.RecommendationReference.verify|verify} messages.
                         * @param message RecommendationReference message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.recommender.v1beta1.Insight.IRecommendationReference, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a RecommendationReference message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns RecommendationReference
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommender.v1beta1.Insight.RecommendationReference;

                        /**
                         * Decodes a RecommendationReference message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns RecommendationReference
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommender.v1beta1.Insight.RecommendationReference;

                        /**
                         * Verifies a RecommendationReference message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a RecommendationReference message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns RecommendationReference
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.recommender.v1beta1.Insight.RecommendationReference;

                        /**
                         * Creates a plain object from a RecommendationReference message. Also converts values to other types if specified.
                         * @param message RecommendationReference
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.recommender.v1beta1.Insight.RecommendationReference, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this RecommendationReference to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for RecommendationReference
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of an InsightStateInfo. */
                interface IInsightStateInfo {

                    /** InsightStateInfo state */
                    state?: (google.cloud.recommender.v1beta1.InsightStateInfo.State|keyof typeof google.cloud.recommender.v1beta1.InsightStateInfo.State|null);

                    /** InsightStateInfo stateMetadata */
                    stateMetadata?: ({ [k: string]: string }|null);
                }

                /** Represents an InsightStateInfo. */
                class InsightStateInfo implements IInsightStateInfo {

                    /**
                     * Constructs a new InsightStateInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommender.v1beta1.IInsightStateInfo);

                    /** InsightStateInfo state. */
                    public state: (google.cloud.recommender.v1beta1.InsightStateInfo.State|keyof typeof google.cloud.recommender.v1beta1.InsightStateInfo.State);

                    /** InsightStateInfo stateMetadata. */
                    public stateMetadata: { [k: string]: string };

                    /**
                     * Creates a new InsightStateInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns InsightStateInfo instance
                     */
                    public static create(properties?: google.cloud.recommender.v1beta1.IInsightStateInfo): google.cloud.recommender.v1beta1.InsightStateInfo;

                    /**
                     * Encodes the specified InsightStateInfo message. Does not implicitly {@link google.cloud.recommender.v1beta1.InsightStateInfo.verify|verify} messages.
                     * @param message InsightStateInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommender.v1beta1.IInsightStateInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified InsightStateInfo message, length delimited. Does not implicitly {@link google.cloud.recommender.v1beta1.InsightStateInfo.verify|verify} messages.
                     * @param message InsightStateInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommender.v1beta1.IInsightStateInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an InsightStateInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns InsightStateInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommender.v1beta1.InsightStateInfo;

                    /**
                     * Decodes an InsightStateInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns InsightStateInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommender.v1beta1.InsightStateInfo;

                    /**
                     * Verifies an InsightStateInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an InsightStateInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns InsightStateInfo
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommender.v1beta1.InsightStateInfo;

                    /**
                     * Creates a plain object from an InsightStateInfo message. Also converts values to other types if specified.
                     * @param message InsightStateInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommender.v1beta1.InsightStateInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this InsightStateInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for InsightStateInfo
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace InsightStateInfo {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        ACTIVE = 1,
                        ACCEPTED = 2,
                        DISMISSED = 3
                    }
                }

                /** Properties of an InsightType. */
                interface IInsightType {

                    /** InsightType name */
                    name?: (string|null);
                }

                /** Represents an InsightType. */
                class InsightType implements IInsightType {

                    /**
                     * Constructs a new InsightType.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommender.v1beta1.IInsightType);

                    /** InsightType name. */
                    public name: string;

                    /**
                     * Creates a new InsightType instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns InsightType instance
                     */
                    public static create(properties?: google.cloud.recommender.v1beta1.IInsightType): google.cloud.recommender.v1beta1.InsightType;

                    /**
                     * Encodes the specified InsightType message. Does not implicitly {@link google.cloud.recommender.v1beta1.InsightType.verify|verify} messages.
                     * @param message InsightType message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommender.v1beta1.IInsightType, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified InsightType message, length delimited. Does not implicitly {@link google.cloud.recommender.v1beta1.InsightType.verify|verify} messages.
                     * @param message InsightType message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommender.v1beta1.IInsightType, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an InsightType message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns InsightType
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommender.v1beta1.InsightType;

                    /**
                     * Decodes an InsightType message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns InsightType
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommender.v1beta1.InsightType;

                    /**
                     * Verifies an InsightType message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an InsightType message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns InsightType
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommender.v1beta1.InsightType;

                    /**
                     * Creates a plain object from an InsightType message. Also converts values to other types if specified.
                     * @param message InsightType
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommender.v1beta1.InsightType, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this InsightType to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for InsightType
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an InsightTypeConfig. */
                interface IInsightTypeConfig {

                    /** InsightTypeConfig name */
                    name?: (string|null);

                    /** InsightTypeConfig insightTypeGenerationConfig */
                    insightTypeGenerationConfig?: (google.cloud.recommender.v1beta1.IInsightTypeGenerationConfig|null);

                    /** InsightTypeConfig etag */
                    etag?: (string|null);

                    /** InsightTypeConfig updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** InsightTypeConfig revisionId */
                    revisionId?: (string|null);

                    /** InsightTypeConfig annotations */
                    annotations?: ({ [k: string]: string }|null);

                    /** InsightTypeConfig displayName */
                    displayName?: (string|null);
                }

                /** Represents an InsightTypeConfig. */
                class InsightTypeConfig implements IInsightTypeConfig {

                    /**
                     * Constructs a new InsightTypeConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommender.v1beta1.IInsightTypeConfig);

                    /** InsightTypeConfig name. */
                    public name: string;

                    /** InsightTypeConfig insightTypeGenerationConfig. */
                    public insightTypeGenerationConfig?: (google.cloud.recommender.v1beta1.IInsightTypeGenerationConfig|null);

                    /** InsightTypeConfig etag. */
                    public etag: string;

                    /** InsightTypeConfig updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** InsightTypeConfig revisionId. */
                    public revisionId: string;

                    /** InsightTypeConfig annotations. */
                    public annotations: { [k: string]: string };

                    /** InsightTypeConfig displayName. */
                    public displayName: string;

                    /**
                     * Creates a new InsightTypeConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns InsightTypeConfig instance
                     */
                    public static create(properties?: google.cloud.recommender.v1beta1.IInsightTypeConfig): google.cloud.recommender.v1beta1.InsightTypeConfig;

                    /**
                     * Encodes the specified InsightTypeConfig message. Does not implicitly {@link google.cloud.recommender.v1beta1.InsightTypeConfig.verify|verify} messages.
                     * @param message InsightTypeConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommender.v1beta1.IInsightTypeConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified InsightTypeConfig message, length delimited. Does not implicitly {@link google.cloud.recommender.v1beta1.InsightTypeConfig.verify|verify} messages.
                     * @param message InsightTypeConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommender.v1beta1.IInsightTypeConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an InsightTypeConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns InsightTypeConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommender.v1beta1.InsightTypeConfig;

                    /**
                     * Decodes an InsightTypeConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns InsightTypeConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommender.v1beta1.InsightTypeConfig;

                    /**
                     * Verifies an InsightTypeConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an InsightTypeConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns InsightTypeConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommender.v1beta1.InsightTypeConfig;

                    /**
                     * Creates a plain object from an InsightTypeConfig message. Also converts values to other types if specified.
                     * @param message InsightTypeConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommender.v1beta1.InsightTypeConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this InsightTypeConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for InsightTypeConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an InsightTypeGenerationConfig. */
                interface IInsightTypeGenerationConfig {

                    /** InsightTypeGenerationConfig params */
                    params?: (google.protobuf.IStruct|null);
                }

                /** Represents an InsightTypeGenerationConfig. */
                class InsightTypeGenerationConfig implements IInsightTypeGenerationConfig {

                    /**
                     * Constructs a new InsightTypeGenerationConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommender.v1beta1.IInsightTypeGenerationConfig);

                    /** InsightTypeGenerationConfig params. */
                    public params?: (google.protobuf.IStruct|null);

                    /**
                     * Creates a new InsightTypeGenerationConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns InsightTypeGenerationConfig instance
                     */
                    public static create(properties?: google.cloud.recommender.v1beta1.IInsightTypeGenerationConfig): google.cloud.recommender.v1beta1.InsightTypeGenerationConfig;

                    /**
                     * Encodes the specified InsightTypeGenerationConfig message. Does not implicitly {@link google.cloud.recommender.v1beta1.InsightTypeGenerationConfig.verify|verify} messages.
                     * @param message InsightTypeGenerationConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommender.v1beta1.IInsightTypeGenerationConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified InsightTypeGenerationConfig message, length delimited. Does not implicitly {@link google.cloud.recommender.v1beta1.InsightTypeGenerationConfig.verify|verify} messages.
                     * @param message InsightTypeGenerationConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommender.v1beta1.IInsightTypeGenerationConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an InsightTypeGenerationConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns InsightTypeGenerationConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommender.v1beta1.InsightTypeGenerationConfig;

                    /**
                     * Decodes an InsightTypeGenerationConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns InsightTypeGenerationConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommender.v1beta1.InsightTypeGenerationConfig;

                    /**
                     * Verifies an InsightTypeGenerationConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an InsightTypeGenerationConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns InsightTypeGenerationConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommender.v1beta1.InsightTypeGenerationConfig;

                    /**
                     * Creates a plain object from an InsightTypeGenerationConfig message. Also converts values to other types if specified.
                     * @param message InsightTypeGenerationConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommender.v1beta1.InsightTypeGenerationConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this InsightTypeGenerationConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for InsightTypeGenerationConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Recommendation. */
                interface IRecommendation {

                    /** Recommendation name */
                    name?: (string|null);

                    /** Recommendation description */
                    description?: (string|null);

                    /** Recommendation recommenderSubtype */
                    recommenderSubtype?: (string|null);

                    /** Recommendation lastRefreshTime */
                    lastRefreshTime?: (google.protobuf.ITimestamp|null);

                    /** Recommendation primaryImpact */
                    primaryImpact?: (google.cloud.recommender.v1beta1.IImpact|null);

                    /** Recommendation additionalImpact */
                    additionalImpact?: (google.cloud.recommender.v1beta1.IImpact[]|null);

                    /** Recommendation priority */
                    priority?: (google.cloud.recommender.v1beta1.Recommendation.Priority|keyof typeof google.cloud.recommender.v1beta1.Recommendation.Priority|null);

                    /** Recommendation content */
                    content?: (google.cloud.recommender.v1beta1.IRecommendationContent|null);

                    /** Recommendation stateInfo */
                    stateInfo?: (google.cloud.recommender.v1beta1.IRecommendationStateInfo|null);

                    /** Recommendation etag */
                    etag?: (string|null);

                    /** Recommendation associatedInsights */
                    associatedInsights?: (google.cloud.recommender.v1beta1.Recommendation.IInsightReference[]|null);

                    /** Recommendation xorGroupId */
                    xorGroupId?: (string|null);
                }

                /** Represents a Recommendation. */
                class Recommendation implements IRecommendation {

                    /**
                     * Constructs a new Recommendation.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommender.v1beta1.IRecommendation);

                    /** Recommendation name. */
                    public name: string;

                    /** Recommendation description. */
                    public description: string;

                    /** Recommendation recommenderSubtype. */
                    public recommenderSubtype: string;

                    /** Recommendation lastRefreshTime. */
                    public lastRefreshTime?: (google.protobuf.ITimestamp|null);

                    /** Recommendation primaryImpact. */
                    public primaryImpact?: (google.cloud.recommender.v1beta1.IImpact|null);

                    /** Recommendation additionalImpact. */
                    public additionalImpact: google.cloud.recommender.v1beta1.IImpact[];

                    /** Recommendation priority. */
                    public priority: (google.cloud.recommender.v1beta1.Recommendation.Priority|keyof typeof google.cloud.recommender.v1beta1.Recommendation.Priority);

                    /** Recommendation content. */
                    public content?: (google.cloud.recommender.v1beta1.IRecommendationContent|null);

                    /** Recommendation stateInfo. */
                    public stateInfo?: (google.cloud.recommender.v1beta1.IRecommendationStateInfo|null);

                    /** Recommendation etag. */
                    public etag: string;

                    /** Recommendation associatedInsights. */
                    public associatedInsights: google.cloud.recommender.v1beta1.Recommendation.IInsightReference[];

                    /** Recommendation xorGroupId. */
                    public xorGroupId: string;

                    /**
                     * Creates a new Recommendation instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Recommendation instance
                     */
                    public static create(properties?: google.cloud.recommender.v1beta1.IRecommendation): google.cloud.recommender.v1beta1.Recommendation;

                    /**
                     * Encodes the specified Recommendation message. Does not implicitly {@link google.cloud.recommender.v1beta1.Recommendation.verify|verify} messages.
                     * @param message Recommendation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommender.v1beta1.IRecommendation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Recommendation message, length delimited. Does not implicitly {@link google.cloud.recommender.v1beta1.Recommendation.verify|verify} messages.
                     * @param message Recommendation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommender.v1beta1.IRecommendation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Recommendation message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Recommendation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommender.v1beta1.Recommendation;

                    /**
                     * Decodes a Recommendation message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Recommendation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommender.v1beta1.Recommendation;

                    /**
                     * Verifies a Recommendation message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Recommendation message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Recommendation
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommender.v1beta1.Recommendation;

                    /**
                     * Creates a plain object from a Recommendation message. Also converts values to other types if specified.
                     * @param message Recommendation
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommender.v1beta1.Recommendation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Recommendation to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Recommendation
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Recommendation {

                    /** Priority enum. */
                    enum Priority {
                        PRIORITY_UNSPECIFIED = 0,
                        P4 = 1,
                        P3 = 2,
                        P2 = 3,
                        P1 = 4
                    }

                    /** Properties of an InsightReference. */
                    interface IInsightReference {

                        /** InsightReference insight */
                        insight?: (string|null);
                    }

                    /** Represents an InsightReference. */
                    class InsightReference implements IInsightReference {

                        /**
                         * Constructs a new InsightReference.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.recommender.v1beta1.Recommendation.IInsightReference);

                        /** InsightReference insight. */
                        public insight: string;

                        /**
                         * Creates a new InsightReference instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns InsightReference instance
                         */
                        public static create(properties?: google.cloud.recommender.v1beta1.Recommendation.IInsightReference): google.cloud.recommender.v1beta1.Recommendation.InsightReference;

                        /**
                         * Encodes the specified InsightReference message. Does not implicitly {@link google.cloud.recommender.v1beta1.Recommendation.InsightReference.verify|verify} messages.
                         * @param message InsightReference message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.recommender.v1beta1.Recommendation.IInsightReference, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified InsightReference message, length delimited. Does not implicitly {@link google.cloud.recommender.v1beta1.Recommendation.InsightReference.verify|verify} messages.
                         * @param message InsightReference message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.recommender.v1beta1.Recommendation.IInsightReference, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an InsightReference message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns InsightReference
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommender.v1beta1.Recommendation.InsightReference;

                        /**
                         * Decodes an InsightReference message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns InsightReference
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommender.v1beta1.Recommendation.InsightReference;

                        /**
                         * Verifies an InsightReference message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an InsightReference message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns InsightReference
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.recommender.v1beta1.Recommendation.InsightReference;

                        /**
                         * Creates a plain object from an InsightReference message. Also converts values to other types if specified.
                         * @param message InsightReference
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.recommender.v1beta1.Recommendation.InsightReference, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this InsightReference to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for InsightReference
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of a RecommendationContent. */
                interface IRecommendationContent {

                    /** RecommendationContent operationGroups */
                    operationGroups?: (google.cloud.recommender.v1beta1.IOperationGroup[]|null);

                    /** RecommendationContent overview */
                    overview?: (google.protobuf.IStruct|null);
                }

                /** Represents a RecommendationContent. */
                class RecommendationContent implements IRecommendationContent {

                    /**
                     * Constructs a new RecommendationContent.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommender.v1beta1.IRecommendationContent);

                    /** RecommendationContent operationGroups. */
                    public operationGroups: google.cloud.recommender.v1beta1.IOperationGroup[];

                    /** RecommendationContent overview. */
                    public overview?: (google.protobuf.IStruct|null);

                    /**
                     * Creates a new RecommendationContent instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RecommendationContent instance
                     */
                    public static create(properties?: google.cloud.recommender.v1beta1.IRecommendationContent): google.cloud.recommender.v1beta1.RecommendationContent;

                    /**
                     * Encodes the specified RecommendationContent message. Does not implicitly {@link google.cloud.recommender.v1beta1.RecommendationContent.verify|verify} messages.
                     * @param message RecommendationContent message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommender.v1beta1.IRecommendationContent, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RecommendationContent message, length delimited. Does not implicitly {@link google.cloud.recommender.v1beta1.RecommendationContent.verify|verify} messages.
                     * @param message RecommendationContent message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommender.v1beta1.IRecommendationContent, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RecommendationContent message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RecommendationContent
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommender.v1beta1.RecommendationContent;

                    /**
                     * Decodes a RecommendationContent message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RecommendationContent
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommender.v1beta1.RecommendationContent;

                    /**
                     * Verifies a RecommendationContent message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RecommendationContent message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RecommendationContent
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommender.v1beta1.RecommendationContent;

                    /**
                     * Creates a plain object from a RecommendationContent message. Also converts values to other types if specified.
                     * @param message RecommendationContent
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommender.v1beta1.RecommendationContent, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RecommendationContent to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RecommendationContent
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an OperationGroup. */
                interface IOperationGroup {

                    /** OperationGroup operations */
                    operations?: (google.cloud.recommender.v1beta1.IOperation[]|null);
                }

                /** Represents an OperationGroup. */
                class OperationGroup implements IOperationGroup {

                    /**
                     * Constructs a new OperationGroup.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommender.v1beta1.IOperationGroup);

                    /** OperationGroup operations. */
                    public operations: google.cloud.recommender.v1beta1.IOperation[];

                    /**
                     * Creates a new OperationGroup instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OperationGroup instance
                     */
                    public static create(properties?: google.cloud.recommender.v1beta1.IOperationGroup): google.cloud.recommender.v1beta1.OperationGroup;

                    /**
                     * Encodes the specified OperationGroup message. Does not implicitly {@link google.cloud.recommender.v1beta1.OperationGroup.verify|verify} messages.
                     * @param message OperationGroup message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommender.v1beta1.IOperationGroup, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OperationGroup message, length delimited. Does not implicitly {@link google.cloud.recommender.v1beta1.OperationGroup.verify|verify} messages.
                     * @param message OperationGroup message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommender.v1beta1.IOperationGroup, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OperationGroup message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OperationGroup
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommender.v1beta1.OperationGroup;

                    /**
                     * Decodes an OperationGroup message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OperationGroup
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommender.v1beta1.OperationGroup;

                    /**
                     * Verifies an OperationGroup message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an OperationGroup message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns OperationGroup
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommender.v1beta1.OperationGroup;

                    /**
                     * Creates a plain object from an OperationGroup message. Also converts values to other types if specified.
                     * @param message OperationGroup
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommender.v1beta1.OperationGroup, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OperationGroup to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for OperationGroup
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an Operation. */
                interface IOperation {

                    /** Operation action */
                    action?: (string|null);

                    /** Operation resourceType */
                    resourceType?: (string|null);

                    /** Operation resource */
                    resource?: (string|null);

                    /** Operation path */
                    path?: (string|null);

                    /** Operation sourceResource */
                    sourceResource?: (string|null);

                    /** Operation sourcePath */
                    sourcePath?: (string|null);

                    /** Operation value */
                    value?: (google.protobuf.IValue|null);

                    /** Operation valueMatcher */
                    valueMatcher?: (google.cloud.recommender.v1beta1.IValueMatcher|null);

                    /** Operation pathFilters */
                    pathFilters?: ({ [k: string]: google.protobuf.IValue }|null);

                    /** Operation pathValueMatchers */
                    pathValueMatchers?: ({ [k: string]: google.cloud.recommender.v1beta1.IValueMatcher }|null);
                }

                /** Represents an Operation. */
                class Operation implements IOperation {

                    /**
                     * Constructs a new Operation.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommender.v1beta1.IOperation);

                    /** Operation action. */
                    public action: string;

                    /** Operation resourceType. */
                    public resourceType: string;

                    /** Operation resource. */
                    public resource: string;

                    /** Operation path. */
                    public path: string;

                    /** Operation sourceResource. */
                    public sourceResource: string;

                    /** Operation sourcePath. */
                    public sourcePath: string;

                    /** Operation value. */
                    public value?: (google.protobuf.IValue|null);

                    /** Operation valueMatcher. */
                    public valueMatcher?: (google.cloud.recommender.v1beta1.IValueMatcher|null);

                    /** Operation pathFilters. */
                    public pathFilters: { [k: string]: google.protobuf.IValue };

                    /** Operation pathValueMatchers. */
                    public pathValueMatchers: { [k: string]: google.cloud.recommender.v1beta1.IValueMatcher };

                    /** Operation pathValue. */
                    public pathValue?: ("value"|"valueMatcher");

                    /**
                     * Creates a new Operation instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Operation instance
                     */
                    public static create(properties?: google.cloud.recommender.v1beta1.IOperation): google.cloud.recommender.v1beta1.Operation;

                    /**
                     * Encodes the specified Operation message. Does not implicitly {@link google.cloud.recommender.v1beta1.Operation.verify|verify} messages.
                     * @param message Operation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommender.v1beta1.IOperation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Operation message, length delimited. Does not implicitly {@link google.cloud.recommender.v1beta1.Operation.verify|verify} messages.
                     * @param message Operation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommender.v1beta1.IOperation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Operation message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Operation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommender.v1beta1.Operation;

                    /**
                     * Decodes an Operation message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Operation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommender.v1beta1.Operation;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommender.v1beta1.Operation;

                    /**
                     * Creates a plain object from an Operation message. Also converts values to other types if specified.
                     * @param message Operation
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommender.v1beta1.Operation, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                /** Properties of a ValueMatcher. */
                interface IValueMatcher {

                    /** ValueMatcher matchesPattern */
                    matchesPattern?: (string|null);
                }

                /** Represents a ValueMatcher. */
                class ValueMatcher implements IValueMatcher {

                    /**
                     * Constructs a new ValueMatcher.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommender.v1beta1.IValueMatcher);

                    /** ValueMatcher matchesPattern. */
                    public matchesPattern?: (string|null);

                    /** ValueMatcher matchVariant. */
                    public matchVariant?: "matchesPattern";

                    /**
                     * Creates a new ValueMatcher instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ValueMatcher instance
                     */
                    public static create(properties?: google.cloud.recommender.v1beta1.IValueMatcher): google.cloud.recommender.v1beta1.ValueMatcher;

                    /**
                     * Encodes the specified ValueMatcher message. Does not implicitly {@link google.cloud.recommender.v1beta1.ValueMatcher.verify|verify} messages.
                     * @param message ValueMatcher message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommender.v1beta1.IValueMatcher, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ValueMatcher message, length delimited. Does not implicitly {@link google.cloud.recommender.v1beta1.ValueMatcher.verify|verify} messages.
                     * @param message ValueMatcher message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommender.v1beta1.IValueMatcher, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ValueMatcher message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ValueMatcher
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommender.v1beta1.ValueMatcher;

                    /**
                     * Decodes a ValueMatcher message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ValueMatcher
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommender.v1beta1.ValueMatcher;

                    /**
                     * Verifies a ValueMatcher message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ValueMatcher message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ValueMatcher
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommender.v1beta1.ValueMatcher;

                    /**
                     * Creates a plain object from a ValueMatcher message. Also converts values to other types if specified.
                     * @param message ValueMatcher
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommender.v1beta1.ValueMatcher, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ValueMatcher to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ValueMatcher
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CostProjection. */
                interface ICostProjection {

                    /** CostProjection cost */
                    cost?: (google.type.IMoney|null);

                    /** CostProjection duration */
                    duration?: (google.protobuf.IDuration|null);
                }

                /** Represents a CostProjection. */
                class CostProjection implements ICostProjection {

                    /**
                     * Constructs a new CostProjection.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommender.v1beta1.ICostProjection);

                    /** CostProjection cost. */
                    public cost?: (google.type.IMoney|null);

                    /** CostProjection duration. */
                    public duration?: (google.protobuf.IDuration|null);

                    /**
                     * Creates a new CostProjection instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CostProjection instance
                     */
                    public static create(properties?: google.cloud.recommender.v1beta1.ICostProjection): google.cloud.recommender.v1beta1.CostProjection;

                    /**
                     * Encodes the specified CostProjection message. Does not implicitly {@link google.cloud.recommender.v1beta1.CostProjection.verify|verify} messages.
                     * @param message CostProjection message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommender.v1beta1.ICostProjection, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CostProjection message, length delimited. Does not implicitly {@link google.cloud.recommender.v1beta1.CostProjection.verify|verify} messages.
                     * @param message CostProjection message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommender.v1beta1.ICostProjection, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CostProjection message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CostProjection
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommender.v1beta1.CostProjection;

                    /**
                     * Decodes a CostProjection message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CostProjection
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommender.v1beta1.CostProjection;

                    /**
                     * Verifies a CostProjection message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CostProjection message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CostProjection
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommender.v1beta1.CostProjection;

                    /**
                     * Creates a plain object from a CostProjection message. Also converts values to other types if specified.
                     * @param message CostProjection
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommender.v1beta1.CostProjection, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CostProjection to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CostProjection
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a SecurityProjection. */
                interface ISecurityProjection {

                    /** SecurityProjection details */
                    details?: (google.protobuf.IStruct|null);
                }

                /** Represents a SecurityProjection. */
                class SecurityProjection implements ISecurityProjection {

                    /**
                     * Constructs a new SecurityProjection.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommender.v1beta1.ISecurityProjection);

                    /** SecurityProjection details. */
                    public details?: (google.protobuf.IStruct|null);

                    /**
                     * Creates a new SecurityProjection instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SecurityProjection instance
                     */
                    public static create(properties?: google.cloud.recommender.v1beta1.ISecurityProjection): google.cloud.recommender.v1beta1.SecurityProjection;

                    /**
                     * Encodes the specified SecurityProjection message. Does not implicitly {@link google.cloud.recommender.v1beta1.SecurityProjection.verify|verify} messages.
                     * @param message SecurityProjection message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommender.v1beta1.ISecurityProjection, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SecurityProjection message, length delimited. Does not implicitly {@link google.cloud.recommender.v1beta1.SecurityProjection.verify|verify} messages.
                     * @param message SecurityProjection message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommender.v1beta1.ISecurityProjection, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SecurityProjection message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SecurityProjection
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommender.v1beta1.SecurityProjection;

                    /**
                     * Decodes a SecurityProjection message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SecurityProjection
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommender.v1beta1.SecurityProjection;

                    /**
                     * Verifies a SecurityProjection message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SecurityProjection message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SecurityProjection
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommender.v1beta1.SecurityProjection;

                    /**
                     * Creates a plain object from a SecurityProjection message. Also converts values to other types if specified.
                     * @param message SecurityProjection
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommender.v1beta1.SecurityProjection, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SecurityProjection to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SecurityProjection
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a SustainabilityProjection. */
                interface ISustainabilityProjection {

                    /** SustainabilityProjection kgCO2e */
                    kgCO2e?: (number|null);

                    /** SustainabilityProjection duration */
                    duration?: (google.protobuf.IDuration|null);
                }

                /** Represents a SustainabilityProjection. */
                class SustainabilityProjection implements ISustainabilityProjection {

                    /**
                     * Constructs a new SustainabilityProjection.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommender.v1beta1.ISustainabilityProjection);

                    /** SustainabilityProjection kgCO2e. */
                    public kgCO2e: number;

                    /** SustainabilityProjection duration. */
                    public duration?: (google.protobuf.IDuration|null);

                    /**
                     * Creates a new SustainabilityProjection instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SustainabilityProjection instance
                     */
                    public static create(properties?: google.cloud.recommender.v1beta1.ISustainabilityProjection): google.cloud.recommender.v1beta1.SustainabilityProjection;

                    /**
                     * Encodes the specified SustainabilityProjection message. Does not implicitly {@link google.cloud.recommender.v1beta1.SustainabilityProjection.verify|verify} messages.
                     * @param message SustainabilityProjection message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommender.v1beta1.ISustainabilityProjection, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SustainabilityProjection message, length delimited. Does not implicitly {@link google.cloud.recommender.v1beta1.SustainabilityProjection.verify|verify} messages.
                     * @param message SustainabilityProjection message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommender.v1beta1.ISustainabilityProjection, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SustainabilityProjection message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SustainabilityProjection
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommender.v1beta1.SustainabilityProjection;

                    /**
                     * Decodes a SustainabilityProjection message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SustainabilityProjection
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommender.v1beta1.SustainabilityProjection;

                    /**
                     * Verifies a SustainabilityProjection message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SustainabilityProjection message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SustainabilityProjection
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommender.v1beta1.SustainabilityProjection;

                    /**
                     * Creates a plain object from a SustainabilityProjection message. Also converts values to other types if specified.
                     * @param message SustainabilityProjection
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommender.v1beta1.SustainabilityProjection, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SustainabilityProjection to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SustainabilityProjection
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an Impact. */
                interface IImpact {

                    /** Impact category */
                    category?: (google.cloud.recommender.v1beta1.Impact.Category|keyof typeof google.cloud.recommender.v1beta1.Impact.Category|null);

                    /** Impact costProjection */
                    costProjection?: (google.cloud.recommender.v1beta1.ICostProjection|null);

                    /** Impact securityProjection */
                    securityProjection?: (google.cloud.recommender.v1beta1.ISecurityProjection|null);

                    /** Impact sustainabilityProjection */
                    sustainabilityProjection?: (google.cloud.recommender.v1beta1.ISustainabilityProjection|null);
                }

                /** Represents an Impact. */
                class Impact implements IImpact {

                    /**
                     * Constructs a new Impact.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommender.v1beta1.IImpact);

                    /** Impact category. */
                    public category: (google.cloud.recommender.v1beta1.Impact.Category|keyof typeof google.cloud.recommender.v1beta1.Impact.Category);

                    /** Impact costProjection. */
                    public costProjection?: (google.cloud.recommender.v1beta1.ICostProjection|null);

                    /** Impact securityProjection. */
                    public securityProjection?: (google.cloud.recommender.v1beta1.ISecurityProjection|null);

                    /** Impact sustainabilityProjection. */
                    public sustainabilityProjection?: (google.cloud.recommender.v1beta1.ISustainabilityProjection|null);

                    /** Impact projection. */
                    public projection?: ("costProjection"|"securityProjection"|"sustainabilityProjection");

                    /**
                     * Creates a new Impact instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Impact instance
                     */
                    public static create(properties?: google.cloud.recommender.v1beta1.IImpact): google.cloud.recommender.v1beta1.Impact;

                    /**
                     * Encodes the specified Impact message. Does not implicitly {@link google.cloud.recommender.v1beta1.Impact.verify|verify} messages.
                     * @param message Impact message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommender.v1beta1.IImpact, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Impact message, length delimited. Does not implicitly {@link google.cloud.recommender.v1beta1.Impact.verify|verify} messages.
                     * @param message Impact message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommender.v1beta1.IImpact, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Impact message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Impact
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommender.v1beta1.Impact;

                    /**
                     * Decodes an Impact message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Impact
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommender.v1beta1.Impact;

                    /**
                     * Verifies an Impact message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Impact message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Impact
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommender.v1beta1.Impact;

                    /**
                     * Creates a plain object from an Impact message. Also converts values to other types if specified.
                     * @param message Impact
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommender.v1beta1.Impact, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Impact to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Impact
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Impact {

                    /** Category enum. */
                    enum Category {
                        CATEGORY_UNSPECIFIED = 0,
                        COST = 1,
                        SECURITY = 2,
                        PERFORMANCE = 3,
                        MANAGEABILITY = 4,
                        SUSTAINABILITY = 5
                    }
                }

                /** Properties of a RecommendationStateInfo. */
                interface IRecommendationStateInfo {

                    /** RecommendationStateInfo state */
                    state?: (google.cloud.recommender.v1beta1.RecommendationStateInfo.State|keyof typeof google.cloud.recommender.v1beta1.RecommendationStateInfo.State|null);

                    /** RecommendationStateInfo stateMetadata */
                    stateMetadata?: ({ [k: string]: string }|null);
                }

                /** Represents a RecommendationStateInfo. */
                class RecommendationStateInfo implements IRecommendationStateInfo {

                    /**
                     * Constructs a new RecommendationStateInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommender.v1beta1.IRecommendationStateInfo);

                    /** RecommendationStateInfo state. */
                    public state: (google.cloud.recommender.v1beta1.RecommendationStateInfo.State|keyof typeof google.cloud.recommender.v1beta1.RecommendationStateInfo.State);

                    /** RecommendationStateInfo stateMetadata. */
                    public stateMetadata: { [k: string]: string };

                    /**
                     * Creates a new RecommendationStateInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RecommendationStateInfo instance
                     */
                    public static create(properties?: google.cloud.recommender.v1beta1.IRecommendationStateInfo): google.cloud.recommender.v1beta1.RecommendationStateInfo;

                    /**
                     * Encodes the specified RecommendationStateInfo message. Does not implicitly {@link google.cloud.recommender.v1beta1.RecommendationStateInfo.verify|verify} messages.
                     * @param message RecommendationStateInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommender.v1beta1.IRecommendationStateInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RecommendationStateInfo message, length delimited. Does not implicitly {@link google.cloud.recommender.v1beta1.RecommendationStateInfo.verify|verify} messages.
                     * @param message RecommendationStateInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommender.v1beta1.IRecommendationStateInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RecommendationStateInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RecommendationStateInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommender.v1beta1.RecommendationStateInfo;

                    /**
                     * Decodes a RecommendationStateInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RecommendationStateInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommender.v1beta1.RecommendationStateInfo;

                    /**
                     * Verifies a RecommendationStateInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RecommendationStateInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RecommendationStateInfo
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommender.v1beta1.RecommendationStateInfo;

                    /**
                     * Creates a plain object from a RecommendationStateInfo message. Also converts values to other types if specified.
                     * @param message RecommendationStateInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommender.v1beta1.RecommendationStateInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RecommendationStateInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RecommendationStateInfo
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace RecommendationStateInfo {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        ACTIVE = 1,
                        CLAIMED = 6,
                        SUCCEEDED = 3,
                        FAILED = 4,
                        DISMISSED = 5
                    }
                }

                /** Properties of a RecommenderType. */
                interface IRecommenderType {

                    /** RecommenderType name */
                    name?: (string|null);
                }

                /** Represents a RecommenderType. */
                class RecommenderType implements IRecommenderType {

                    /**
                     * Constructs a new RecommenderType.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommender.v1beta1.IRecommenderType);

                    /** RecommenderType name. */
                    public name: string;

                    /**
                     * Creates a new RecommenderType instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RecommenderType instance
                     */
                    public static create(properties?: google.cloud.recommender.v1beta1.IRecommenderType): google.cloud.recommender.v1beta1.RecommenderType;

                    /**
                     * Encodes the specified RecommenderType message. Does not implicitly {@link google.cloud.recommender.v1beta1.RecommenderType.verify|verify} messages.
                     * @param message RecommenderType message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommender.v1beta1.IRecommenderType, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RecommenderType message, length delimited. Does not implicitly {@link google.cloud.recommender.v1beta1.RecommenderType.verify|verify} messages.
                     * @param message RecommenderType message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommender.v1beta1.IRecommenderType, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RecommenderType message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RecommenderType
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommender.v1beta1.RecommenderType;

                    /**
                     * Decodes a RecommenderType message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RecommenderType
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommender.v1beta1.RecommenderType;

                    /**
                     * Verifies a RecommenderType message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RecommenderType message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RecommenderType
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommender.v1beta1.RecommenderType;

                    /**
                     * Creates a plain object from a RecommenderType message. Also converts values to other types if specified.
                     * @param message RecommenderType
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommender.v1beta1.RecommenderType, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RecommenderType to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RecommenderType
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a RecommenderConfig. */
                interface IRecommenderConfig {

                    /** RecommenderConfig name */
                    name?: (string|null);

                    /** RecommenderConfig recommenderGenerationConfig */
                    recommenderGenerationConfig?: (google.cloud.recommender.v1beta1.IRecommenderGenerationConfig|null);

                    /** RecommenderConfig etag */
                    etag?: (string|null);

                    /** RecommenderConfig updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** RecommenderConfig revisionId */
                    revisionId?: (string|null);

                    /** RecommenderConfig annotations */
                    annotations?: ({ [k: string]: string }|null);

                    /** RecommenderConfig displayName */
                    displayName?: (string|null);
                }

                /** Represents a RecommenderConfig. */
                class RecommenderConfig implements IRecommenderConfig {

                    /**
                     * Constructs a new RecommenderConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommender.v1beta1.IRecommenderConfig);

                    /** RecommenderConfig name. */
                    public name: string;

                    /** RecommenderConfig recommenderGenerationConfig. */
                    public recommenderGenerationConfig?: (google.cloud.recommender.v1beta1.IRecommenderGenerationConfig|null);

                    /** RecommenderConfig etag. */
                    public etag: string;

                    /** RecommenderConfig updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** RecommenderConfig revisionId. */
                    public revisionId: string;

                    /** RecommenderConfig annotations. */
                    public annotations: { [k: string]: string };

                    /** RecommenderConfig displayName. */
                    public displayName: string;

                    /**
                     * Creates a new RecommenderConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RecommenderConfig instance
                     */
                    public static create(properties?: google.cloud.recommender.v1beta1.IRecommenderConfig): google.cloud.recommender.v1beta1.RecommenderConfig;

                    /**
                     * Encodes the specified RecommenderConfig message. Does not implicitly {@link google.cloud.recommender.v1beta1.RecommenderConfig.verify|verify} messages.
                     * @param message RecommenderConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommender.v1beta1.IRecommenderConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RecommenderConfig message, length delimited. Does not implicitly {@link google.cloud.recommender.v1beta1.RecommenderConfig.verify|verify} messages.
                     * @param message RecommenderConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommender.v1beta1.IRecommenderConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RecommenderConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RecommenderConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommender.v1beta1.RecommenderConfig;

                    /**
                     * Decodes a RecommenderConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RecommenderConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommender.v1beta1.RecommenderConfig;

                    /**
                     * Verifies a RecommenderConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RecommenderConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RecommenderConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommender.v1beta1.RecommenderConfig;

                    /**
                     * Creates a plain object from a RecommenderConfig message. Also converts values to other types if specified.
                     * @param message RecommenderConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommender.v1beta1.RecommenderConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RecommenderConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RecommenderConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a RecommenderGenerationConfig. */
                interface IRecommenderGenerationConfig {

                    /** RecommenderGenerationConfig params */
                    params?: (google.protobuf.IStruct|null);
                }

                /** Represents a RecommenderGenerationConfig. */
                class RecommenderGenerationConfig implements IRecommenderGenerationConfig {

                    /**
                     * Constructs a new RecommenderGenerationConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommender.v1beta1.IRecommenderGenerationConfig);

                    /** RecommenderGenerationConfig params. */
                    public params?: (google.protobuf.IStruct|null);

                    /**
                     * Creates a new RecommenderGenerationConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RecommenderGenerationConfig instance
                     */
                    public static create(properties?: google.cloud.recommender.v1beta1.IRecommenderGenerationConfig): google.cloud.recommender.v1beta1.RecommenderGenerationConfig;

                    /**
                     * Encodes the specified RecommenderGenerationConfig message. Does not implicitly {@link google.cloud.recommender.v1beta1.RecommenderGenerationConfig.verify|verify} messages.
                     * @param message RecommenderGenerationConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommender.v1beta1.IRecommenderGenerationConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RecommenderGenerationConfig message, length delimited. Does not implicitly {@link google.cloud.recommender.v1beta1.RecommenderGenerationConfig.verify|verify} messages.
                     * @param message RecommenderGenerationConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommender.v1beta1.IRecommenderGenerationConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RecommenderGenerationConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RecommenderGenerationConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommender.v1beta1.RecommenderGenerationConfig;

                    /**
                     * Decodes a RecommenderGenerationConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RecommenderGenerationConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommender.v1beta1.RecommenderGenerationConfig;

                    /**
                     * Verifies a RecommenderGenerationConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RecommenderGenerationConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RecommenderGenerationConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommender.v1beta1.RecommenderGenerationConfig;

                    /**
                     * Creates a plain object from a RecommenderGenerationConfig message. Also converts values to other types if specified.
                     * @param message RecommenderGenerationConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommender.v1beta1.RecommenderGenerationConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RecommenderGenerationConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RecommenderGenerationConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Represents a Recommender */
                class Recommender extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new Recommender service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new Recommender service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Recommender;

                    /**
                     * Calls ListInsights.
                     * @param request ListInsightsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListInsightsResponse
                     */
                    public listInsights(request: google.cloud.recommender.v1beta1.IListInsightsRequest, callback: google.cloud.recommender.v1beta1.Recommender.ListInsightsCallback): void;

                    /**
                     * Calls ListInsights.
                     * @param request ListInsightsRequest message or plain object
                     * @returns Promise
                     */
                    public listInsights(request: google.cloud.recommender.v1beta1.IListInsightsRequest): Promise<google.cloud.recommender.v1beta1.ListInsightsResponse>;

                    /**
                     * Calls GetInsight.
                     * @param request GetInsightRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Insight
                     */
                    public getInsight(request: google.cloud.recommender.v1beta1.IGetInsightRequest, callback: google.cloud.recommender.v1beta1.Recommender.GetInsightCallback): void;

                    /**
                     * Calls GetInsight.
                     * @param request GetInsightRequest message or plain object
                     * @returns Promise
                     */
                    public getInsight(request: google.cloud.recommender.v1beta1.IGetInsightRequest): Promise<google.cloud.recommender.v1beta1.Insight>;

                    /**
                     * Calls MarkInsightAccepted.
                     * @param request MarkInsightAcceptedRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Insight
                     */
                    public markInsightAccepted(request: google.cloud.recommender.v1beta1.IMarkInsightAcceptedRequest, callback: google.cloud.recommender.v1beta1.Recommender.MarkInsightAcceptedCallback): void;

                    /**
                     * Calls MarkInsightAccepted.
                     * @param request MarkInsightAcceptedRequest message or plain object
                     * @returns Promise
                     */
                    public markInsightAccepted(request: google.cloud.recommender.v1beta1.IMarkInsightAcceptedRequest): Promise<google.cloud.recommender.v1beta1.Insight>;

                    /**
                     * Calls ListRecommendations.
                     * @param request ListRecommendationsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListRecommendationsResponse
                     */
                    public listRecommendations(request: google.cloud.recommender.v1beta1.IListRecommendationsRequest, callback: google.cloud.recommender.v1beta1.Recommender.ListRecommendationsCallback): void;

                    /**
                     * Calls ListRecommendations.
                     * @param request ListRecommendationsRequest message or plain object
                     * @returns Promise
                     */
                    public listRecommendations(request: google.cloud.recommender.v1beta1.IListRecommendationsRequest): Promise<google.cloud.recommender.v1beta1.ListRecommendationsResponse>;

                    /**
                     * Calls GetRecommendation.
                     * @param request GetRecommendationRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Recommendation
                     */
                    public getRecommendation(request: google.cloud.recommender.v1beta1.IGetRecommendationRequest, callback: google.cloud.recommender.v1beta1.Recommender.GetRecommendationCallback): void;

                    /**
                     * Calls GetRecommendation.
                     * @param request GetRecommendationRequest message or plain object
                     * @returns Promise
                     */
                    public getRecommendation(request: google.cloud.recommender.v1beta1.IGetRecommendationRequest): Promise<google.cloud.recommender.v1beta1.Recommendation>;

                    /**
                     * Calls MarkRecommendationClaimed.
                     * @param request MarkRecommendationClaimedRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Recommendation
                     */
                    public markRecommendationClaimed(request: google.cloud.recommender.v1beta1.IMarkRecommendationClaimedRequest, callback: google.cloud.recommender.v1beta1.Recommender.MarkRecommendationClaimedCallback): void;

                    /**
                     * Calls MarkRecommendationClaimed.
                     * @param request MarkRecommendationClaimedRequest message or plain object
                     * @returns Promise
                     */
                    public markRecommendationClaimed(request: google.cloud.recommender.v1beta1.IMarkRecommendationClaimedRequest): Promise<google.cloud.recommender.v1beta1.Recommendation>;

                    /**
                     * Calls MarkRecommendationSucceeded.
                     * @param request MarkRecommendationSucceededRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Recommendation
                     */
                    public markRecommendationSucceeded(request: google.cloud.recommender.v1beta1.IMarkRecommendationSucceededRequest, callback: google.cloud.recommender.v1beta1.Recommender.MarkRecommendationSucceededCallback): void;

                    /**
                     * Calls MarkRecommendationSucceeded.
                     * @param request MarkRecommendationSucceededRequest message or plain object
                     * @returns Promise
                     */
                    public markRecommendationSucceeded(request: google.cloud.recommender.v1beta1.IMarkRecommendationSucceededRequest): Promise<google.cloud.recommender.v1beta1.Recommendation>;

                    /**
                     * Calls MarkRecommendationFailed.
                     * @param request MarkRecommendationFailedRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Recommendation
                     */
                    public markRecommendationFailed(request: google.cloud.recommender.v1beta1.IMarkRecommendationFailedRequest, callback: google.cloud.recommender.v1beta1.Recommender.MarkRecommendationFailedCallback): void;

                    /**
                     * Calls MarkRecommendationFailed.
                     * @param request MarkRecommendationFailedRequest message or plain object
                     * @returns Promise
                     */
                    public markRecommendationFailed(request: google.cloud.recommender.v1beta1.IMarkRecommendationFailedRequest): Promise<google.cloud.recommender.v1beta1.Recommendation>;

                    /**
                     * Calls GetRecommenderConfig.
                     * @param request GetRecommenderConfigRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and RecommenderConfig
                     */
                    public getRecommenderConfig(request: google.cloud.recommender.v1beta1.IGetRecommenderConfigRequest, callback: google.cloud.recommender.v1beta1.Recommender.GetRecommenderConfigCallback): void;

                    /**
                     * Calls GetRecommenderConfig.
                     * @param request GetRecommenderConfigRequest message or plain object
                     * @returns Promise
                     */
                    public getRecommenderConfig(request: google.cloud.recommender.v1beta1.IGetRecommenderConfigRequest): Promise<google.cloud.recommender.v1beta1.RecommenderConfig>;

                    /**
                     * Calls UpdateRecommenderConfig.
                     * @param request UpdateRecommenderConfigRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and RecommenderConfig
                     */
                    public updateRecommenderConfig(request: google.cloud.recommender.v1beta1.IUpdateRecommenderConfigRequest, callback: google.cloud.recommender.v1beta1.Recommender.UpdateRecommenderConfigCallback): void;

                    /**
                     * Calls UpdateRecommenderConfig.
                     * @param request UpdateRecommenderConfigRequest message or plain object
                     * @returns Promise
                     */
                    public updateRecommenderConfig(request: google.cloud.recommender.v1beta1.IUpdateRecommenderConfigRequest): Promise<google.cloud.recommender.v1beta1.RecommenderConfig>;

                    /**
                     * Calls GetInsightTypeConfig.
                     * @param request GetInsightTypeConfigRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and InsightTypeConfig
                     */
                    public getInsightTypeConfig(request: google.cloud.recommender.v1beta1.IGetInsightTypeConfigRequest, callback: google.cloud.recommender.v1beta1.Recommender.GetInsightTypeConfigCallback): void;

                    /**
                     * Calls GetInsightTypeConfig.
                     * @param request GetInsightTypeConfigRequest message or plain object
                     * @returns Promise
                     */
                    public getInsightTypeConfig(request: google.cloud.recommender.v1beta1.IGetInsightTypeConfigRequest): Promise<google.cloud.recommender.v1beta1.InsightTypeConfig>;

                    /**
                     * Calls UpdateInsightTypeConfig.
                     * @param request UpdateInsightTypeConfigRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and InsightTypeConfig
                     */
                    public updateInsightTypeConfig(request: google.cloud.recommender.v1beta1.IUpdateInsightTypeConfigRequest, callback: google.cloud.recommender.v1beta1.Recommender.UpdateInsightTypeConfigCallback): void;

                    /**
                     * Calls UpdateInsightTypeConfig.
                     * @param request UpdateInsightTypeConfigRequest message or plain object
                     * @returns Promise
                     */
                    public updateInsightTypeConfig(request: google.cloud.recommender.v1beta1.IUpdateInsightTypeConfigRequest): Promise<google.cloud.recommender.v1beta1.InsightTypeConfig>;

                    /**
                     * Calls ListRecommenders.
                     * @param request ListRecommendersRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListRecommendersResponse
                     */
                    public listRecommenders(request: google.cloud.recommender.v1beta1.IListRecommendersRequest, callback: google.cloud.recommender.v1beta1.Recommender.ListRecommendersCallback): void;

                    /**
                     * Calls ListRecommenders.
                     * @param request ListRecommendersRequest message or plain object
                     * @returns Promise
                     */
                    public listRecommenders(request: google.cloud.recommender.v1beta1.IListRecommendersRequest): Promise<google.cloud.recommender.v1beta1.ListRecommendersResponse>;

                    /**
                     * Calls ListInsightTypes.
                     * @param request ListInsightTypesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListInsightTypesResponse
                     */
                    public listInsightTypes(request: google.cloud.recommender.v1beta1.IListInsightTypesRequest, callback: google.cloud.recommender.v1beta1.Recommender.ListInsightTypesCallback): void;

                    /**
                     * Calls ListInsightTypes.
                     * @param request ListInsightTypesRequest message or plain object
                     * @returns Promise
                     */
                    public listInsightTypes(request: google.cloud.recommender.v1beta1.IListInsightTypesRequest): Promise<google.cloud.recommender.v1beta1.ListInsightTypesResponse>;
                }

                namespace Recommender {

                    /**
                     * Callback as used by {@link google.cloud.recommender.v1beta1.Recommender|listInsights}.
                     * @param error Error, if any
                     * @param [response] ListInsightsResponse
                     */
                    type ListInsightsCallback = (error: (Error|null), response?: google.cloud.recommender.v1beta1.ListInsightsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.recommender.v1beta1.Recommender|getInsight}.
                     * @param error Error, if any
                     * @param [response] Insight
                     */
                    type GetInsightCallback = (error: (Error|null), response?: google.cloud.recommender.v1beta1.Insight) => void;

                    /**
                     * Callback as used by {@link google.cloud.recommender.v1beta1.Recommender|markInsightAccepted}.
                     * @param error Error, if any
                     * @param [response] Insight
                     */
                    type MarkInsightAcceptedCallback = (error: (Error|null), response?: google.cloud.recommender.v1beta1.Insight) => void;

                    /**
                     * Callback as used by {@link google.cloud.recommender.v1beta1.Recommender|listRecommendations}.
                     * @param error Error, if any
                     * @param [response] ListRecommendationsResponse
                     */
                    type ListRecommendationsCallback = (error: (Error|null), response?: google.cloud.recommender.v1beta1.ListRecommendationsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.recommender.v1beta1.Recommender|getRecommendation}.
                     * @param error Error, if any
                     * @param [response] Recommendation
                     */
                    type GetRecommendationCallback = (error: (Error|null), response?: google.cloud.recommender.v1beta1.Recommendation) => void;

                    /**
                     * Callback as used by {@link google.cloud.recommender.v1beta1.Recommender|markRecommendationClaimed}.
                     * @param error Error, if any
                     * @param [response] Recommendation
                     */
                    type MarkRecommendationClaimedCallback = (error: (Error|null), response?: google.cloud.recommender.v1beta1.Recommendation) => void;

                    /**
                     * Callback as used by {@link google.cloud.recommender.v1beta1.Recommender|markRecommendationSucceeded}.
                     * @param error Error, if any
                     * @param [response] Recommendation
                     */
                    type MarkRecommendationSucceededCallback = (error: (Error|null), response?: google.cloud.recommender.v1beta1.Recommendation) => void;

                    /**
                     * Callback as used by {@link google.cloud.recommender.v1beta1.Recommender|markRecommendationFailed}.
                     * @param error Error, if any
                     * @param [response] Recommendation
                     */
                    type MarkRecommendationFailedCallback = (error: (Error|null), response?: google.cloud.recommender.v1beta1.Recommendation) => void;

                    /**
                     * Callback as used by {@link google.cloud.recommender.v1beta1.Recommender|getRecommenderConfig}.
                     * @param error Error, if any
                     * @param [response] RecommenderConfig
                     */
                    type GetRecommenderConfigCallback = (error: (Error|null), response?: google.cloud.recommender.v1beta1.RecommenderConfig) => void;

                    /**
                     * Callback as used by {@link google.cloud.recommender.v1beta1.Recommender|updateRecommenderConfig}.
                     * @param error Error, if any
                     * @param [response] RecommenderConfig
                     */
                    type UpdateRecommenderConfigCallback = (error: (Error|null), response?: google.cloud.recommender.v1beta1.RecommenderConfig) => void;

                    /**
                     * Callback as used by {@link google.cloud.recommender.v1beta1.Recommender|getInsightTypeConfig}.
                     * @param error Error, if any
                     * @param [response] InsightTypeConfig
                     */
                    type GetInsightTypeConfigCallback = (error: (Error|null), response?: google.cloud.recommender.v1beta1.InsightTypeConfig) => void;

                    /**
                     * Callback as used by {@link google.cloud.recommender.v1beta1.Recommender|updateInsightTypeConfig}.
                     * @param error Error, if any
                     * @param [response] InsightTypeConfig
                     */
                    type UpdateInsightTypeConfigCallback = (error: (Error|null), response?: google.cloud.recommender.v1beta1.InsightTypeConfig) => void;

                    /**
                     * Callback as used by {@link google.cloud.recommender.v1beta1.Recommender|listRecommenders}.
                     * @param error Error, if any
                     * @param [response] ListRecommendersResponse
                     */
                    type ListRecommendersCallback = (error: (Error|null), response?: google.cloud.recommender.v1beta1.ListRecommendersResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.recommender.v1beta1.Recommender|listInsightTypes}.
                     * @param error Error, if any
                     * @param [response] ListInsightTypesResponse
                     */
                    type ListInsightTypesCallback = (error: (Error|null), response?: google.cloud.recommender.v1beta1.ListInsightTypesResponse) => void;
                }

                /** Properties of a ListInsightsRequest. */
                interface IListInsightsRequest {

                    /** ListInsightsRequest parent */
                    parent?: (string|null);

                    /** ListInsightsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListInsightsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListInsightsRequest filter */
                    filter?: (string|null);
                }

                /** Represents a ListInsightsRequest. */
                class ListInsightsRequest implements IListInsightsRequest {

                    /**
                     * Constructs a new ListInsightsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommender.v1beta1.IListInsightsRequest);

                    /** ListInsightsRequest parent. */
                    public parent: string;

                    /** ListInsightsRequest pageSize. */
                    public pageSize: number;

                    /** ListInsightsRequest pageToken. */
                    public pageToken: string;

                    /** ListInsightsRequest filter. */
                    public filter: string;

                    /**
                     * Creates a new ListInsightsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListInsightsRequest instance
                     */
                    public static create(properties?: google.cloud.recommender.v1beta1.IListInsightsRequest): google.cloud.recommender.v1beta1.ListInsightsRequest;

                    /**
                     * Encodes the specified ListInsightsRequest message. Does not implicitly {@link google.cloud.recommender.v1beta1.ListInsightsRequest.verify|verify} messages.
                     * @param message ListInsightsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommender.v1beta1.IListInsightsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListInsightsRequest message, length delimited. Does not implicitly {@link google.cloud.recommender.v1beta1.ListInsightsRequest.verify|verify} messages.
                     * @param message ListInsightsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommender.v1beta1.IListInsightsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListInsightsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListInsightsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommender.v1beta1.ListInsightsRequest;

                    /**
                     * Decodes a ListInsightsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListInsightsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommender.v1beta1.ListInsightsRequest;

                    /**
                     * Verifies a ListInsightsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListInsightsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListInsightsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommender.v1beta1.ListInsightsRequest;

                    /**
                     * Creates a plain object from a ListInsightsRequest message. Also converts values to other types if specified.
                     * @param message ListInsightsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommender.v1beta1.ListInsightsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListInsightsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListInsightsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListInsightsResponse. */
                interface IListInsightsResponse {

                    /** ListInsightsResponse insights */
                    insights?: (google.cloud.recommender.v1beta1.IInsight[]|null);

                    /** ListInsightsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListInsightsResponse. */
                class ListInsightsResponse implements IListInsightsResponse {

                    /**
                     * Constructs a new ListInsightsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommender.v1beta1.IListInsightsResponse);

                    /** ListInsightsResponse insights. */
                    public insights: google.cloud.recommender.v1beta1.IInsight[];

                    /** ListInsightsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListInsightsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListInsightsResponse instance
                     */
                    public static create(properties?: google.cloud.recommender.v1beta1.IListInsightsResponse): google.cloud.recommender.v1beta1.ListInsightsResponse;

                    /**
                     * Encodes the specified ListInsightsResponse message. Does not implicitly {@link google.cloud.recommender.v1beta1.ListInsightsResponse.verify|verify} messages.
                     * @param message ListInsightsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommender.v1beta1.IListInsightsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListInsightsResponse message, length delimited. Does not implicitly {@link google.cloud.recommender.v1beta1.ListInsightsResponse.verify|verify} messages.
                     * @param message ListInsightsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommender.v1beta1.IListInsightsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListInsightsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListInsightsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommender.v1beta1.ListInsightsResponse;

                    /**
                     * Decodes a ListInsightsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListInsightsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommender.v1beta1.ListInsightsResponse;

                    /**
                     * Verifies a ListInsightsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListInsightsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListInsightsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommender.v1beta1.ListInsightsResponse;

                    /**
                     * Creates a plain object from a ListInsightsResponse message. Also converts values to other types if specified.
                     * @param message ListInsightsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommender.v1beta1.ListInsightsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListInsightsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListInsightsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetInsightRequest. */
                interface IGetInsightRequest {

                    /** GetInsightRequest name */
                    name?: (string|null);
                }

                /** Represents a GetInsightRequest. */
                class GetInsightRequest implements IGetInsightRequest {

                    /**
                     * Constructs a new GetInsightRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommender.v1beta1.IGetInsightRequest);

                    /** GetInsightRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetInsightRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetInsightRequest instance
                     */
                    public static create(properties?: google.cloud.recommender.v1beta1.IGetInsightRequest): google.cloud.recommender.v1beta1.GetInsightRequest;

                    /**
                     * Encodes the specified GetInsightRequest message. Does not implicitly {@link google.cloud.recommender.v1beta1.GetInsightRequest.verify|verify} messages.
                     * @param message GetInsightRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommender.v1beta1.IGetInsightRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetInsightRequest message, length delimited. Does not implicitly {@link google.cloud.recommender.v1beta1.GetInsightRequest.verify|verify} messages.
                     * @param message GetInsightRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommender.v1beta1.IGetInsightRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetInsightRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetInsightRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommender.v1beta1.GetInsightRequest;

                    /**
                     * Decodes a GetInsightRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetInsightRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommender.v1beta1.GetInsightRequest;

                    /**
                     * Verifies a GetInsightRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetInsightRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetInsightRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommender.v1beta1.GetInsightRequest;

                    /**
                     * Creates a plain object from a GetInsightRequest message. Also converts values to other types if specified.
                     * @param message GetInsightRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommender.v1beta1.GetInsightRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetInsightRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetInsightRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a MarkInsightAcceptedRequest. */
                interface IMarkInsightAcceptedRequest {

                    /** MarkInsightAcceptedRequest name */
                    name?: (string|null);

                    /** MarkInsightAcceptedRequest stateMetadata */
                    stateMetadata?: ({ [k: string]: string }|null);

                    /** MarkInsightAcceptedRequest etag */
                    etag?: (string|null);
                }

                /** Represents a MarkInsightAcceptedRequest. */
                class MarkInsightAcceptedRequest implements IMarkInsightAcceptedRequest {

                    /**
                     * Constructs a new MarkInsightAcceptedRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommender.v1beta1.IMarkInsightAcceptedRequest);

                    /** MarkInsightAcceptedRequest name. */
                    public name: string;

                    /** MarkInsightAcceptedRequest stateMetadata. */
                    public stateMetadata: { [k: string]: string };

                    /** MarkInsightAcceptedRequest etag. */
                    public etag: string;

                    /**
                     * Creates a new MarkInsightAcceptedRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MarkInsightAcceptedRequest instance
                     */
                    public static create(properties?: google.cloud.recommender.v1beta1.IMarkInsightAcceptedRequest): google.cloud.recommender.v1beta1.MarkInsightAcceptedRequest;

                    /**
                     * Encodes the specified MarkInsightAcceptedRequest message. Does not implicitly {@link google.cloud.recommender.v1beta1.MarkInsightAcceptedRequest.verify|verify} messages.
                     * @param message MarkInsightAcceptedRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommender.v1beta1.IMarkInsightAcceptedRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MarkInsightAcceptedRequest message, length delimited. Does not implicitly {@link google.cloud.recommender.v1beta1.MarkInsightAcceptedRequest.verify|verify} messages.
                     * @param message MarkInsightAcceptedRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommender.v1beta1.IMarkInsightAcceptedRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MarkInsightAcceptedRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MarkInsightAcceptedRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommender.v1beta1.MarkInsightAcceptedRequest;

                    /**
                     * Decodes a MarkInsightAcceptedRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MarkInsightAcceptedRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommender.v1beta1.MarkInsightAcceptedRequest;

                    /**
                     * Verifies a MarkInsightAcceptedRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MarkInsightAcceptedRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MarkInsightAcceptedRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommender.v1beta1.MarkInsightAcceptedRequest;

                    /**
                     * Creates a plain object from a MarkInsightAcceptedRequest message. Also converts values to other types if specified.
                     * @param message MarkInsightAcceptedRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommender.v1beta1.MarkInsightAcceptedRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MarkInsightAcceptedRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for MarkInsightAcceptedRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListRecommendationsRequest. */
                interface IListRecommendationsRequest {

                    /** ListRecommendationsRequest parent */
                    parent?: (string|null);

                    /** ListRecommendationsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListRecommendationsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListRecommendationsRequest filter */
                    filter?: (string|null);
                }

                /** Represents a ListRecommendationsRequest. */
                class ListRecommendationsRequest implements IListRecommendationsRequest {

                    /**
                     * Constructs a new ListRecommendationsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommender.v1beta1.IListRecommendationsRequest);

                    /** ListRecommendationsRequest parent. */
                    public parent: string;

                    /** ListRecommendationsRequest pageSize. */
                    public pageSize: number;

                    /** ListRecommendationsRequest pageToken. */
                    public pageToken: string;

                    /** ListRecommendationsRequest filter. */
                    public filter: string;

                    /**
                     * Creates a new ListRecommendationsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListRecommendationsRequest instance
                     */
                    public static create(properties?: google.cloud.recommender.v1beta1.IListRecommendationsRequest): google.cloud.recommender.v1beta1.ListRecommendationsRequest;

                    /**
                     * Encodes the specified ListRecommendationsRequest message. Does not implicitly {@link google.cloud.recommender.v1beta1.ListRecommendationsRequest.verify|verify} messages.
                     * @param message ListRecommendationsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommender.v1beta1.IListRecommendationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListRecommendationsRequest message, length delimited. Does not implicitly {@link google.cloud.recommender.v1beta1.ListRecommendationsRequest.verify|verify} messages.
                     * @param message ListRecommendationsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommender.v1beta1.IListRecommendationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListRecommendationsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListRecommendationsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommender.v1beta1.ListRecommendationsRequest;

                    /**
                     * Decodes a ListRecommendationsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListRecommendationsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommender.v1beta1.ListRecommendationsRequest;

                    /**
                     * Verifies a ListRecommendationsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListRecommendationsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListRecommendationsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommender.v1beta1.ListRecommendationsRequest;

                    /**
                     * Creates a plain object from a ListRecommendationsRequest message. Also converts values to other types if specified.
                     * @param message ListRecommendationsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommender.v1beta1.ListRecommendationsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListRecommendationsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListRecommendationsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListRecommendationsResponse. */
                interface IListRecommendationsResponse {

                    /** ListRecommendationsResponse recommendations */
                    recommendations?: (google.cloud.recommender.v1beta1.IRecommendation[]|null);

                    /** ListRecommendationsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListRecommendationsResponse. */
                class ListRecommendationsResponse implements IListRecommendationsResponse {

                    /**
                     * Constructs a new ListRecommendationsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommender.v1beta1.IListRecommendationsResponse);

                    /** ListRecommendationsResponse recommendations. */
                    public recommendations: google.cloud.recommender.v1beta1.IRecommendation[];

                    /** ListRecommendationsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListRecommendationsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListRecommendationsResponse instance
                     */
                    public static create(properties?: google.cloud.recommender.v1beta1.IListRecommendationsResponse): google.cloud.recommender.v1beta1.ListRecommendationsResponse;

                    /**
                     * Encodes the specified ListRecommendationsResponse message. Does not implicitly {@link google.cloud.recommender.v1beta1.ListRecommendationsResponse.verify|verify} messages.
                     * @param message ListRecommendationsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommender.v1beta1.IListRecommendationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListRecommendationsResponse message, length delimited. Does not implicitly {@link google.cloud.recommender.v1beta1.ListRecommendationsResponse.verify|verify} messages.
                     * @param message ListRecommendationsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommender.v1beta1.IListRecommendationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListRecommendationsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListRecommendationsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommender.v1beta1.ListRecommendationsResponse;

                    /**
                     * Decodes a ListRecommendationsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListRecommendationsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommender.v1beta1.ListRecommendationsResponse;

                    /**
                     * Verifies a ListRecommendationsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListRecommendationsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListRecommendationsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommender.v1beta1.ListRecommendationsResponse;

                    /**
                     * Creates a plain object from a ListRecommendationsResponse message. Also converts values to other types if specified.
                     * @param message ListRecommendationsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommender.v1beta1.ListRecommendationsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListRecommendationsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListRecommendationsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetRecommendationRequest. */
                interface IGetRecommendationRequest {

                    /** GetRecommendationRequest name */
                    name?: (string|null);
                }

                /** Represents a GetRecommendationRequest. */
                class GetRecommendationRequest implements IGetRecommendationRequest {

                    /**
                     * Constructs a new GetRecommendationRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommender.v1beta1.IGetRecommendationRequest);

                    /** GetRecommendationRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetRecommendationRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetRecommendationRequest instance
                     */
                    public static create(properties?: google.cloud.recommender.v1beta1.IGetRecommendationRequest): google.cloud.recommender.v1beta1.GetRecommendationRequest;

                    /**
                     * Encodes the specified GetRecommendationRequest message. Does not implicitly {@link google.cloud.recommender.v1beta1.GetRecommendationRequest.verify|verify} messages.
                     * @param message GetRecommendationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommender.v1beta1.IGetRecommendationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetRecommendationRequest message, length delimited. Does not implicitly {@link google.cloud.recommender.v1beta1.GetRecommendationRequest.verify|verify} messages.
                     * @param message GetRecommendationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommender.v1beta1.IGetRecommendationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetRecommendationRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetRecommendationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommender.v1beta1.GetRecommendationRequest;

                    /**
                     * Decodes a GetRecommendationRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetRecommendationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommender.v1beta1.GetRecommendationRequest;

                    /**
                     * Verifies a GetRecommendationRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetRecommendationRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetRecommendationRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommender.v1beta1.GetRecommendationRequest;

                    /**
                     * Creates a plain object from a GetRecommendationRequest message. Also converts values to other types if specified.
                     * @param message GetRecommendationRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommender.v1beta1.GetRecommendationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetRecommendationRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetRecommendationRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a MarkRecommendationClaimedRequest. */
                interface IMarkRecommendationClaimedRequest {

                    /** MarkRecommendationClaimedRequest name */
                    name?: (string|null);

                    /** MarkRecommendationClaimedRequest stateMetadata */
                    stateMetadata?: ({ [k: string]: string }|null);

                    /** MarkRecommendationClaimedRequest etag */
                    etag?: (string|null);
                }

                /** Represents a MarkRecommendationClaimedRequest. */
                class MarkRecommendationClaimedRequest implements IMarkRecommendationClaimedRequest {

                    /**
                     * Constructs a new MarkRecommendationClaimedRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommender.v1beta1.IMarkRecommendationClaimedRequest);

                    /** MarkRecommendationClaimedRequest name. */
                    public name: string;

                    /** MarkRecommendationClaimedRequest stateMetadata. */
                    public stateMetadata: { [k: string]: string };

                    /** MarkRecommendationClaimedRequest etag. */
                    public etag: string;

                    /**
                     * Creates a new MarkRecommendationClaimedRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MarkRecommendationClaimedRequest instance
                     */
                    public static create(properties?: google.cloud.recommender.v1beta1.IMarkRecommendationClaimedRequest): google.cloud.recommender.v1beta1.MarkRecommendationClaimedRequest;

                    /**
                     * Encodes the specified MarkRecommendationClaimedRequest message. Does not implicitly {@link google.cloud.recommender.v1beta1.MarkRecommendationClaimedRequest.verify|verify} messages.
                     * @param message MarkRecommendationClaimedRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommender.v1beta1.IMarkRecommendationClaimedRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MarkRecommendationClaimedRequest message, length delimited. Does not implicitly {@link google.cloud.recommender.v1beta1.MarkRecommendationClaimedRequest.verify|verify} messages.
                     * @param message MarkRecommendationClaimedRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommender.v1beta1.IMarkRecommendationClaimedRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MarkRecommendationClaimedRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MarkRecommendationClaimedRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommender.v1beta1.MarkRecommendationClaimedRequest;

                    /**
                     * Decodes a MarkRecommendationClaimedRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MarkRecommendationClaimedRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommender.v1beta1.MarkRecommendationClaimedRequest;

                    /**
                     * Verifies a MarkRecommendationClaimedRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MarkRecommendationClaimedRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MarkRecommendationClaimedRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommender.v1beta1.MarkRecommendationClaimedRequest;

                    /**
                     * Creates a plain object from a MarkRecommendationClaimedRequest message. Also converts values to other types if specified.
                     * @param message MarkRecommendationClaimedRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommender.v1beta1.MarkRecommendationClaimedRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MarkRecommendationClaimedRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for MarkRecommendationClaimedRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a MarkRecommendationSucceededRequest. */
                interface IMarkRecommendationSucceededRequest {

                    /** MarkRecommendationSucceededRequest name */
                    name?: (string|null);

                    /** MarkRecommendationSucceededRequest stateMetadata */
                    stateMetadata?: ({ [k: string]: string }|null);

                    /** MarkRecommendationSucceededRequest etag */
                    etag?: (string|null);
                }

                /** Represents a MarkRecommendationSucceededRequest. */
                class MarkRecommendationSucceededRequest implements IMarkRecommendationSucceededRequest {

                    /**
                     * Constructs a new MarkRecommendationSucceededRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommender.v1beta1.IMarkRecommendationSucceededRequest);

                    /** MarkRecommendationSucceededRequest name. */
                    public name: string;

                    /** MarkRecommendationSucceededRequest stateMetadata. */
                    public stateMetadata: { [k: string]: string };

                    /** MarkRecommendationSucceededRequest etag. */
                    public etag: string;

                    /**
                     * Creates a new MarkRecommendationSucceededRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MarkRecommendationSucceededRequest instance
                     */
                    public static create(properties?: google.cloud.recommender.v1beta1.IMarkRecommendationSucceededRequest): google.cloud.recommender.v1beta1.MarkRecommendationSucceededRequest;

                    /**
                     * Encodes the specified MarkRecommendationSucceededRequest message. Does not implicitly {@link google.cloud.recommender.v1beta1.MarkRecommendationSucceededRequest.verify|verify} messages.
                     * @param message MarkRecommendationSucceededRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommender.v1beta1.IMarkRecommendationSucceededRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MarkRecommendationSucceededRequest message, length delimited. Does not implicitly {@link google.cloud.recommender.v1beta1.MarkRecommendationSucceededRequest.verify|verify} messages.
                     * @param message MarkRecommendationSucceededRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommender.v1beta1.IMarkRecommendationSucceededRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MarkRecommendationSucceededRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MarkRecommendationSucceededRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommender.v1beta1.MarkRecommendationSucceededRequest;

                    /**
                     * Decodes a MarkRecommendationSucceededRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MarkRecommendationSucceededRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommender.v1beta1.MarkRecommendationSucceededRequest;

                    /**
                     * Verifies a MarkRecommendationSucceededRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MarkRecommendationSucceededRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MarkRecommendationSucceededRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommender.v1beta1.MarkRecommendationSucceededRequest;

                    /**
                     * Creates a plain object from a MarkRecommendationSucceededRequest message. Also converts values to other types if specified.
                     * @param message MarkRecommendationSucceededRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommender.v1beta1.MarkRecommendationSucceededRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MarkRecommendationSucceededRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for MarkRecommendationSucceededRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a MarkRecommendationFailedRequest. */
                interface IMarkRecommendationFailedRequest {

                    /** MarkRecommendationFailedRequest name */
                    name?: (string|null);

                    /** MarkRecommendationFailedRequest stateMetadata */
                    stateMetadata?: ({ [k: string]: string }|null);

                    /** MarkRecommendationFailedRequest etag */
                    etag?: (string|null);
                }

                /** Represents a MarkRecommendationFailedRequest. */
                class MarkRecommendationFailedRequest implements IMarkRecommendationFailedRequest {

                    /**
                     * Constructs a new MarkRecommendationFailedRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommender.v1beta1.IMarkRecommendationFailedRequest);

                    /** MarkRecommendationFailedRequest name. */
                    public name: string;

                    /** MarkRecommendationFailedRequest stateMetadata. */
                    public stateMetadata: { [k: string]: string };

                    /** MarkRecommendationFailedRequest etag. */
                    public etag: string;

                    /**
                     * Creates a new MarkRecommendationFailedRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MarkRecommendationFailedRequest instance
                     */
                    public static create(properties?: google.cloud.recommender.v1beta1.IMarkRecommendationFailedRequest): google.cloud.recommender.v1beta1.MarkRecommendationFailedRequest;

                    /**
                     * Encodes the specified MarkRecommendationFailedRequest message. Does not implicitly {@link google.cloud.recommender.v1beta1.MarkRecommendationFailedRequest.verify|verify} messages.
                     * @param message MarkRecommendationFailedRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommender.v1beta1.IMarkRecommendationFailedRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MarkRecommendationFailedRequest message, length delimited. Does not implicitly {@link google.cloud.recommender.v1beta1.MarkRecommendationFailedRequest.verify|verify} messages.
                     * @param message MarkRecommendationFailedRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommender.v1beta1.IMarkRecommendationFailedRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MarkRecommendationFailedRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MarkRecommendationFailedRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommender.v1beta1.MarkRecommendationFailedRequest;

                    /**
                     * Decodes a MarkRecommendationFailedRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MarkRecommendationFailedRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommender.v1beta1.MarkRecommendationFailedRequest;

                    /**
                     * Verifies a MarkRecommendationFailedRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MarkRecommendationFailedRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MarkRecommendationFailedRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommender.v1beta1.MarkRecommendationFailedRequest;

                    /**
                     * Creates a plain object from a MarkRecommendationFailedRequest message. Also converts values to other types if specified.
                     * @param message MarkRecommendationFailedRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommender.v1beta1.MarkRecommendationFailedRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MarkRecommendationFailedRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for MarkRecommendationFailedRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetRecommenderConfigRequest. */
                interface IGetRecommenderConfigRequest {

                    /** GetRecommenderConfigRequest name */
                    name?: (string|null);
                }

                /** Represents a GetRecommenderConfigRequest. */
                class GetRecommenderConfigRequest implements IGetRecommenderConfigRequest {

                    /**
                     * Constructs a new GetRecommenderConfigRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommender.v1beta1.IGetRecommenderConfigRequest);

                    /** GetRecommenderConfigRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetRecommenderConfigRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetRecommenderConfigRequest instance
                     */
                    public static create(properties?: google.cloud.recommender.v1beta1.IGetRecommenderConfigRequest): google.cloud.recommender.v1beta1.GetRecommenderConfigRequest;

                    /**
                     * Encodes the specified GetRecommenderConfigRequest message. Does not implicitly {@link google.cloud.recommender.v1beta1.GetRecommenderConfigRequest.verify|verify} messages.
                     * @param message GetRecommenderConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommender.v1beta1.IGetRecommenderConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetRecommenderConfigRequest message, length delimited. Does not implicitly {@link google.cloud.recommender.v1beta1.GetRecommenderConfigRequest.verify|verify} messages.
                     * @param message GetRecommenderConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommender.v1beta1.IGetRecommenderConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetRecommenderConfigRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetRecommenderConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommender.v1beta1.GetRecommenderConfigRequest;

                    /**
                     * Decodes a GetRecommenderConfigRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetRecommenderConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommender.v1beta1.GetRecommenderConfigRequest;

                    /**
                     * Verifies a GetRecommenderConfigRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetRecommenderConfigRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetRecommenderConfigRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommender.v1beta1.GetRecommenderConfigRequest;

                    /**
                     * Creates a plain object from a GetRecommenderConfigRequest message. Also converts values to other types if specified.
                     * @param message GetRecommenderConfigRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommender.v1beta1.GetRecommenderConfigRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetRecommenderConfigRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetRecommenderConfigRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateRecommenderConfigRequest. */
                interface IUpdateRecommenderConfigRequest {

                    /** UpdateRecommenderConfigRequest recommenderConfig */
                    recommenderConfig?: (google.cloud.recommender.v1beta1.IRecommenderConfig|null);

                    /** UpdateRecommenderConfigRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateRecommenderConfigRequest validateOnly */
                    validateOnly?: (boolean|null);
                }

                /** Represents an UpdateRecommenderConfigRequest. */
                class UpdateRecommenderConfigRequest implements IUpdateRecommenderConfigRequest {

                    /**
                     * Constructs a new UpdateRecommenderConfigRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommender.v1beta1.IUpdateRecommenderConfigRequest);

                    /** UpdateRecommenderConfigRequest recommenderConfig. */
                    public recommenderConfig?: (google.cloud.recommender.v1beta1.IRecommenderConfig|null);

                    /** UpdateRecommenderConfigRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateRecommenderConfigRequest validateOnly. */
                    public validateOnly: boolean;

                    /**
                     * Creates a new UpdateRecommenderConfigRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateRecommenderConfigRequest instance
                     */
                    public static create(properties?: google.cloud.recommender.v1beta1.IUpdateRecommenderConfigRequest): google.cloud.recommender.v1beta1.UpdateRecommenderConfigRequest;

                    /**
                     * Encodes the specified UpdateRecommenderConfigRequest message. Does not implicitly {@link google.cloud.recommender.v1beta1.UpdateRecommenderConfigRequest.verify|verify} messages.
                     * @param message UpdateRecommenderConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommender.v1beta1.IUpdateRecommenderConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateRecommenderConfigRequest message, length delimited. Does not implicitly {@link google.cloud.recommender.v1beta1.UpdateRecommenderConfigRequest.verify|verify} messages.
                     * @param message UpdateRecommenderConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommender.v1beta1.IUpdateRecommenderConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateRecommenderConfigRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateRecommenderConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommender.v1beta1.UpdateRecommenderConfigRequest;

                    /**
                     * Decodes an UpdateRecommenderConfigRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateRecommenderConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommender.v1beta1.UpdateRecommenderConfigRequest;

                    /**
                     * Verifies an UpdateRecommenderConfigRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateRecommenderConfigRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateRecommenderConfigRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommender.v1beta1.UpdateRecommenderConfigRequest;

                    /**
                     * Creates a plain object from an UpdateRecommenderConfigRequest message. Also converts values to other types if specified.
                     * @param message UpdateRecommenderConfigRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommender.v1beta1.UpdateRecommenderConfigRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateRecommenderConfigRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateRecommenderConfigRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetInsightTypeConfigRequest. */
                interface IGetInsightTypeConfigRequest {

                    /** GetInsightTypeConfigRequest name */
                    name?: (string|null);
                }

                /** Represents a GetInsightTypeConfigRequest. */
                class GetInsightTypeConfigRequest implements IGetInsightTypeConfigRequest {

                    /**
                     * Constructs a new GetInsightTypeConfigRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommender.v1beta1.IGetInsightTypeConfigRequest);

                    /** GetInsightTypeConfigRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetInsightTypeConfigRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetInsightTypeConfigRequest instance
                     */
                    public static create(properties?: google.cloud.recommender.v1beta1.IGetInsightTypeConfigRequest): google.cloud.recommender.v1beta1.GetInsightTypeConfigRequest;

                    /**
                     * Encodes the specified GetInsightTypeConfigRequest message. Does not implicitly {@link google.cloud.recommender.v1beta1.GetInsightTypeConfigRequest.verify|verify} messages.
                     * @param message GetInsightTypeConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommender.v1beta1.IGetInsightTypeConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetInsightTypeConfigRequest message, length delimited. Does not implicitly {@link google.cloud.recommender.v1beta1.GetInsightTypeConfigRequest.verify|verify} messages.
                     * @param message GetInsightTypeConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommender.v1beta1.IGetInsightTypeConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetInsightTypeConfigRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetInsightTypeConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommender.v1beta1.GetInsightTypeConfigRequest;

                    /**
                     * Decodes a GetInsightTypeConfigRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetInsightTypeConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommender.v1beta1.GetInsightTypeConfigRequest;

                    /**
                     * Verifies a GetInsightTypeConfigRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetInsightTypeConfigRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetInsightTypeConfigRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommender.v1beta1.GetInsightTypeConfigRequest;

                    /**
                     * Creates a plain object from a GetInsightTypeConfigRequest message. Also converts values to other types if specified.
                     * @param message GetInsightTypeConfigRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommender.v1beta1.GetInsightTypeConfigRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetInsightTypeConfigRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetInsightTypeConfigRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateInsightTypeConfigRequest. */
                interface IUpdateInsightTypeConfigRequest {

                    /** UpdateInsightTypeConfigRequest insightTypeConfig */
                    insightTypeConfig?: (google.cloud.recommender.v1beta1.IInsightTypeConfig|null);

                    /** UpdateInsightTypeConfigRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateInsightTypeConfigRequest validateOnly */
                    validateOnly?: (boolean|null);
                }

                /** Represents an UpdateInsightTypeConfigRequest. */
                class UpdateInsightTypeConfigRequest implements IUpdateInsightTypeConfigRequest {

                    /**
                     * Constructs a new UpdateInsightTypeConfigRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommender.v1beta1.IUpdateInsightTypeConfigRequest);

                    /** UpdateInsightTypeConfigRequest insightTypeConfig. */
                    public insightTypeConfig?: (google.cloud.recommender.v1beta1.IInsightTypeConfig|null);

                    /** UpdateInsightTypeConfigRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateInsightTypeConfigRequest validateOnly. */
                    public validateOnly: boolean;

                    /**
                     * Creates a new UpdateInsightTypeConfigRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateInsightTypeConfigRequest instance
                     */
                    public static create(properties?: google.cloud.recommender.v1beta1.IUpdateInsightTypeConfigRequest): google.cloud.recommender.v1beta1.UpdateInsightTypeConfigRequest;

                    /**
                     * Encodes the specified UpdateInsightTypeConfigRequest message. Does not implicitly {@link google.cloud.recommender.v1beta1.UpdateInsightTypeConfigRequest.verify|verify} messages.
                     * @param message UpdateInsightTypeConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommender.v1beta1.IUpdateInsightTypeConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateInsightTypeConfigRequest message, length delimited. Does not implicitly {@link google.cloud.recommender.v1beta1.UpdateInsightTypeConfigRequest.verify|verify} messages.
                     * @param message UpdateInsightTypeConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommender.v1beta1.IUpdateInsightTypeConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateInsightTypeConfigRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateInsightTypeConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommender.v1beta1.UpdateInsightTypeConfigRequest;

                    /**
                     * Decodes an UpdateInsightTypeConfigRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateInsightTypeConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommender.v1beta1.UpdateInsightTypeConfigRequest;

                    /**
                     * Verifies an UpdateInsightTypeConfigRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateInsightTypeConfigRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateInsightTypeConfigRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommender.v1beta1.UpdateInsightTypeConfigRequest;

                    /**
                     * Creates a plain object from an UpdateInsightTypeConfigRequest message. Also converts values to other types if specified.
                     * @param message UpdateInsightTypeConfigRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommender.v1beta1.UpdateInsightTypeConfigRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateInsightTypeConfigRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateInsightTypeConfigRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListRecommendersRequest. */
                interface IListRecommendersRequest {

                    /** ListRecommendersRequest pageSize */
                    pageSize?: (number|null);

                    /** ListRecommendersRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListRecommendersRequest. */
                class ListRecommendersRequest implements IListRecommendersRequest {

                    /**
                     * Constructs a new ListRecommendersRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommender.v1beta1.IListRecommendersRequest);

                    /** ListRecommendersRequest pageSize. */
                    public pageSize: number;

                    /** ListRecommendersRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListRecommendersRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListRecommendersRequest instance
                     */
                    public static create(properties?: google.cloud.recommender.v1beta1.IListRecommendersRequest): google.cloud.recommender.v1beta1.ListRecommendersRequest;

                    /**
                     * Encodes the specified ListRecommendersRequest message. Does not implicitly {@link google.cloud.recommender.v1beta1.ListRecommendersRequest.verify|verify} messages.
                     * @param message ListRecommendersRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommender.v1beta1.IListRecommendersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListRecommendersRequest message, length delimited. Does not implicitly {@link google.cloud.recommender.v1beta1.ListRecommendersRequest.verify|verify} messages.
                     * @param message ListRecommendersRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommender.v1beta1.IListRecommendersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListRecommendersRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListRecommendersRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommender.v1beta1.ListRecommendersRequest;

                    /**
                     * Decodes a ListRecommendersRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListRecommendersRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommender.v1beta1.ListRecommendersRequest;

                    /**
                     * Verifies a ListRecommendersRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListRecommendersRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListRecommendersRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommender.v1beta1.ListRecommendersRequest;

                    /**
                     * Creates a plain object from a ListRecommendersRequest message. Also converts values to other types if specified.
                     * @param message ListRecommendersRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommender.v1beta1.ListRecommendersRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListRecommendersRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListRecommendersRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListRecommendersResponse. */
                interface IListRecommendersResponse {

                    /** ListRecommendersResponse recommenders */
                    recommenders?: (google.cloud.recommender.v1beta1.IRecommenderType[]|null);

                    /** ListRecommendersResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListRecommendersResponse. */
                class ListRecommendersResponse implements IListRecommendersResponse {

                    /**
                     * Constructs a new ListRecommendersResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommender.v1beta1.IListRecommendersResponse);

                    /** ListRecommendersResponse recommenders. */
                    public recommenders: google.cloud.recommender.v1beta1.IRecommenderType[];

                    /** ListRecommendersResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListRecommendersResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListRecommendersResponse instance
                     */
                    public static create(properties?: google.cloud.recommender.v1beta1.IListRecommendersResponse): google.cloud.recommender.v1beta1.ListRecommendersResponse;

                    /**
                     * Encodes the specified ListRecommendersResponse message. Does not implicitly {@link google.cloud.recommender.v1beta1.ListRecommendersResponse.verify|verify} messages.
                     * @param message ListRecommendersResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommender.v1beta1.IListRecommendersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListRecommendersResponse message, length delimited. Does not implicitly {@link google.cloud.recommender.v1beta1.ListRecommendersResponse.verify|verify} messages.
                     * @param message ListRecommendersResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommender.v1beta1.IListRecommendersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListRecommendersResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListRecommendersResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommender.v1beta1.ListRecommendersResponse;

                    /**
                     * Decodes a ListRecommendersResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListRecommendersResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommender.v1beta1.ListRecommendersResponse;

                    /**
                     * Verifies a ListRecommendersResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListRecommendersResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListRecommendersResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommender.v1beta1.ListRecommendersResponse;

                    /**
                     * Creates a plain object from a ListRecommendersResponse message. Also converts values to other types if specified.
                     * @param message ListRecommendersResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommender.v1beta1.ListRecommendersResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListRecommendersResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListRecommendersResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListInsightTypesRequest. */
                interface IListInsightTypesRequest {

                    /** ListInsightTypesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListInsightTypesRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListInsightTypesRequest. */
                class ListInsightTypesRequest implements IListInsightTypesRequest {

                    /**
                     * Constructs a new ListInsightTypesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommender.v1beta1.IListInsightTypesRequest);

                    /** ListInsightTypesRequest pageSize. */
                    public pageSize: number;

                    /** ListInsightTypesRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListInsightTypesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListInsightTypesRequest instance
                     */
                    public static create(properties?: google.cloud.recommender.v1beta1.IListInsightTypesRequest): google.cloud.recommender.v1beta1.ListInsightTypesRequest;

                    /**
                     * Encodes the specified ListInsightTypesRequest message. Does not implicitly {@link google.cloud.recommender.v1beta1.ListInsightTypesRequest.verify|verify} messages.
                     * @param message ListInsightTypesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommender.v1beta1.IListInsightTypesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListInsightTypesRequest message, length delimited. Does not implicitly {@link google.cloud.recommender.v1beta1.ListInsightTypesRequest.verify|verify} messages.
                     * @param message ListInsightTypesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommender.v1beta1.IListInsightTypesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListInsightTypesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListInsightTypesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommender.v1beta1.ListInsightTypesRequest;

                    /**
                     * Decodes a ListInsightTypesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListInsightTypesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommender.v1beta1.ListInsightTypesRequest;

                    /**
                     * Verifies a ListInsightTypesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListInsightTypesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListInsightTypesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommender.v1beta1.ListInsightTypesRequest;

                    /**
                     * Creates a plain object from a ListInsightTypesRequest message. Also converts values to other types if specified.
                     * @param message ListInsightTypesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommender.v1beta1.ListInsightTypesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListInsightTypesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListInsightTypesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListInsightTypesResponse. */
                interface IListInsightTypesResponse {

                    /** ListInsightTypesResponse insightTypes */
                    insightTypes?: (google.cloud.recommender.v1beta1.IInsightType[]|null);

                    /** ListInsightTypesResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListInsightTypesResponse. */
                class ListInsightTypesResponse implements IListInsightTypesResponse {

                    /**
                     * Constructs a new ListInsightTypesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recommender.v1beta1.IListInsightTypesResponse);

                    /** ListInsightTypesResponse insightTypes. */
                    public insightTypes: google.cloud.recommender.v1beta1.IInsightType[];

                    /** ListInsightTypesResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListInsightTypesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListInsightTypesResponse instance
                     */
                    public static create(properties?: google.cloud.recommender.v1beta1.IListInsightTypesResponse): google.cloud.recommender.v1beta1.ListInsightTypesResponse;

                    /**
                     * Encodes the specified ListInsightTypesResponse message. Does not implicitly {@link google.cloud.recommender.v1beta1.ListInsightTypesResponse.verify|verify} messages.
                     * @param message ListInsightTypesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recommender.v1beta1.IListInsightTypesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListInsightTypesResponse message, length delimited. Does not implicitly {@link google.cloud.recommender.v1beta1.ListInsightTypesResponse.verify|verify} messages.
                     * @param message ListInsightTypesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recommender.v1beta1.IListInsightTypesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListInsightTypesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListInsightTypesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recommender.v1beta1.ListInsightTypesResponse;

                    /**
                     * Decodes a ListInsightTypesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListInsightTypesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recommender.v1beta1.ListInsightTypesResponse;

                    /**
                     * Verifies a ListInsightTypesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListInsightTypesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListInsightTypesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recommender.v1beta1.ListInsightTypesResponse;

                    /**
                     * Creates a plain object from a ListInsightTypesResponse message. Also converts values to other types if specified.
                     * @param message ListInsightTypesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recommender.v1beta1.ListInsightTypesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListInsightTypesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListInsightTypesResponse
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

            /** FieldOptions .google.api.resourceReference */
            ".google.api.resourceReference"?: (google.api.IResourceReference|null);

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

        /** Properties of a Struct. */
        interface IStruct {

            /** Struct fields */
            fields?: ({ [k: string]: google.protobuf.IValue }|null);
        }

        /** Represents a Struct. */
        class Struct implements IStruct {

            /**
             * Constructs a new Struct.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IStruct);

            /** Struct fields. */
            public fields: { [k: string]: google.protobuf.IValue };

            /**
             * Creates a new Struct instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Struct instance
             */
            public static create(properties?: google.protobuf.IStruct): google.protobuf.Struct;

            /**
             * Encodes the specified Struct message. Does not implicitly {@link google.protobuf.Struct.verify|verify} messages.
             * @param message Struct message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IStruct, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Struct message, length delimited. Does not implicitly {@link google.protobuf.Struct.verify|verify} messages.
             * @param message Struct message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IStruct, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Struct message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Struct
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Struct;

            /**
             * Decodes a Struct message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Struct
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Struct;

            /**
             * Verifies a Struct message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Struct message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Struct
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Struct;

            /**
             * Creates a plain object from a Struct message. Also converts values to other types if specified.
             * @param message Struct
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Struct, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Struct to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Struct
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Value. */
        interface IValue {

            /** Value nullValue */
            nullValue?: (google.protobuf.NullValue|keyof typeof google.protobuf.NullValue|null);

            /** Value numberValue */
            numberValue?: (number|null);

            /** Value stringValue */
            stringValue?: (string|null);

            /** Value boolValue */
            boolValue?: (boolean|null);

            /** Value structValue */
            structValue?: (google.protobuf.IStruct|null);

            /** Value listValue */
            listValue?: (google.protobuf.IListValue|null);
        }

        /** Represents a Value. */
        class Value implements IValue {

            /**
             * Constructs a new Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IValue);

            /** Value nullValue. */
            public nullValue?: (google.protobuf.NullValue|keyof typeof google.protobuf.NullValue|null);

            /** Value numberValue. */
            public numberValue?: (number|null);

            /** Value stringValue. */
            public stringValue?: (string|null);

            /** Value boolValue. */
            public boolValue?: (boolean|null);

            /** Value structValue. */
            public structValue?: (google.protobuf.IStruct|null);

            /** Value listValue. */
            public listValue?: (google.protobuf.IListValue|null);

            /** Value kind. */
            public kind?: ("nullValue"|"numberValue"|"stringValue"|"boolValue"|"structValue"|"listValue");

            /**
             * Creates a new Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Value instance
             */
            public static create(properties?: google.protobuf.IValue): google.protobuf.Value;

            /**
             * Encodes the specified Value message. Does not implicitly {@link google.protobuf.Value.verify|verify} messages.
             * @param message Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Value message, length delimited. Does not implicitly {@link google.protobuf.Value.verify|verify} messages.
             * @param message Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Value;

            /**
             * Decodes a Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Value;

            /**
             * Verifies a Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Value;

            /**
             * Creates a plain object from a Value message. Also converts values to other types if specified.
             * @param message Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Value
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** NullValue enum. */
        enum NullValue {
            NULL_VALUE = 0
        }

        /** Properties of a ListValue. */
        interface IListValue {

            /** ListValue values */
            values?: (google.protobuf.IValue[]|null);
        }

        /** Represents a ListValue. */
        class ListValue implements IListValue {

            /**
             * Constructs a new ListValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IListValue);

            /** ListValue values. */
            public values: google.protobuf.IValue[];

            /**
             * Creates a new ListValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ListValue instance
             */
            public static create(properties?: google.protobuf.IListValue): google.protobuf.ListValue;

            /**
             * Encodes the specified ListValue message. Does not implicitly {@link google.protobuf.ListValue.verify|verify} messages.
             * @param message ListValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IListValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ListValue message, length delimited. Does not implicitly {@link google.protobuf.ListValue.verify|verify} messages.
             * @param message ListValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IListValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ListValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ListValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ListValue;

            /**
             * Decodes a ListValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ListValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ListValue;

            /**
             * Verifies a ListValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ListValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ListValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ListValue;

            /**
             * Creates a plain object from a ListValue message. Also converts values to other types if specified.
             * @param message ListValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ListValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ListValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ListValue
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

    /** Namespace type. */
    namespace type {

        /** Properties of a Money. */
        interface IMoney {

            /** Money currencyCode */
            currencyCode?: (string|null);

            /** Money units */
            units?: (number|Long|string|null);

            /** Money nanos */
            nanos?: (number|null);
        }

        /** Represents a Money. */
        class Money implements IMoney {

            /**
             * Constructs a new Money.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.type.IMoney);

            /** Money currencyCode. */
            public currencyCode: string;

            /** Money units. */
            public units: (number|Long|string);

            /** Money nanos. */
            public nanos: number;

            /**
             * Creates a new Money instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Money instance
             */
            public static create(properties?: google.type.IMoney): google.type.Money;

            /**
             * Encodes the specified Money message. Does not implicitly {@link google.type.Money.verify|verify} messages.
             * @param message Money message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.type.IMoney, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Money message, length delimited. Does not implicitly {@link google.type.Money.verify|verify} messages.
             * @param message Money message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.type.IMoney, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Money message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Money
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.type.Money;

            /**
             * Decodes a Money message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Money
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.type.Money;

            /**
             * Verifies a Money message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Money message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Money
             */
            public static fromObject(object: { [k: string]: any }): google.type.Money;

            /**
             * Creates a plain object from a Money message. Also converts values to other types if specified.
             * @param message Money
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.type.Money, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Money to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Money
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}
