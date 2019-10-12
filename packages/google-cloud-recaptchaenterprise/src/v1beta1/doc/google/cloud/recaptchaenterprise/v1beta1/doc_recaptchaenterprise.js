// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// Note: this file is purely for documentation. Any contents are not expected
// to be loaded as the JS file.

/**
 * The create assessment request message.
 *
 * @property {string} parent
 *   Required. The name of the project in which the assessment will be created,
 *   in the format "projects/{project_number}".
 *
 * @property {Object} assessment
 *   Required. The assessment details.
 *
 *   This object should have the same structure as [Assessment]{@link google.cloud.recaptchaenterprise.v1beta1.Assessment}
 *
 * @typedef CreateAssessmentRequest
 * @memberof google.cloud.recaptchaenterprise.v1beta1
 * @see [google.cloud.recaptchaenterprise.v1beta1.CreateAssessmentRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/recaptchaenterprise/v1beta1/recaptchaenterprise.proto}
 */
const CreateAssessmentRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The request message to annotate an Assessment.
 *
 * @property {string} name
 *   Required. The resource name of the Assessment, in the format
 *   "projects/{project_number}/assessments/{assessment_id}".
 *
 * @property {number} annotation
 *   Required. The annotation that will be assigned to the Event.
 *
 *   The number should be among the values of [Annotation]{@link google.cloud.recaptchaenterprise.v1beta1.Annotation}
 *
 * @typedef AnnotateAssessmentRequest
 * @memberof google.cloud.recaptchaenterprise.v1beta1
 * @see [google.cloud.recaptchaenterprise.v1beta1.AnnotateAssessmentRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/recaptchaenterprise/v1beta1/recaptchaenterprise.proto}
 */
const AnnotateAssessmentRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Enum that reprensents the types of annotations.
   *
   * @enum {number}
   * @memberof google.cloud.recaptchaenterprise.v1beta1
   */
  Annotation: {

    /**
     * Default unspecified type.
     */
    ANNOTATION_UNSPECIFIED: 0,

    /**
     * Provides information that the event turned out to be legitimate.
     */
    LEGITIMATE: 1,

    /**
     * Provides information that the event turned out to be fraudulent.
     */
    FRAUDULENT: 2
  }
};

/**
 * Empty response for AnnotateAssessment.
 * @typedef AnnotateAssessmentResponse
 * @memberof google.cloud.recaptchaenterprise.v1beta1
 * @see [google.cloud.recaptchaenterprise.v1beta1.AnnotateAssessmentResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/recaptchaenterprise/v1beta1/recaptchaenterprise.proto}
 */
const AnnotateAssessmentResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A recaptcha assessment resource.
 *
 * @property {string} name
 *   Output only. The resource name for the Assessment in the format
 *   "projects/{project_number}/assessments/{assessment_id}".
 *
 * @property {Object} event
 *   The event being assessed.
 *
 *   This object should have the same structure as [Event]{@link google.cloud.recaptchaenterprise.v1beta1.Event}
 *
 * @property {number} score
 *   Output only. Legitimate event score from 0.0 to 1.0.
 *   (1.0 means very likely legitimate traffic while 0.0 means very likely
 *   non-legitimate traffic).
 *
 * @property {Object} tokenProperties
 *   Output only. Properties of the provided event token.
 *
 *   This object should have the same structure as [TokenProperties]{@link google.cloud.recaptchaenterprise.v1beta1.TokenProperties}
 *
 * @property {number[]} reasons
 *   Output only. Reasons contributing to the risk analysis verdict.
 *
 *   The number should be among the values of [ClassificationReason]{@link google.cloud.recaptchaenterprise.v1beta1.ClassificationReason}
 *
 * @typedef Assessment
 * @memberof google.cloud.recaptchaenterprise.v1beta1
 * @see [google.cloud.recaptchaenterprise.v1beta1.Assessment definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/recaptchaenterprise/v1beta1/recaptchaenterprise.proto}
 */
const Assessment = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * LINT.IfChange(classification_reason)
   * Reasons contributing to the risk analysis verdict.
   *
   * @enum {number}
   * @memberof google.cloud.recaptchaenterprise.v1beta1
   */
  ClassificationReason: {

    /**
     * Default unspecified type.
     */
    CLASSIFICATION_REASON_UNSPECIFIED: 0,

    /**
     * Interactions matched the behavior of an automated agent.
     */
    AUTOMATION: 1,

    /**
     * The event originated from an illegitimate environment.
     */
    UNEXPECTED_ENVIRONMENT: 2,

    /**
     * Traffic volume from the event source is higher than normal.
     */
    TOO_MUCH_TRAFFIC: 3,

    /**
     * Interactions with the site were significantly different than expected
     * patterns.
     */
    UNEXPECTED_USAGE_PATTERNS: 4,

    /**
     * Too little traffic has been received from this site thus far to generate
     * quality risk analysis.
     */
    LOW_CONFIDENCE_SCORE: 5
  }
};

/**
 * @property {string} token
 *   Required. The user response token provided by the reCAPTCHA client-side integration
 *   on your site.
 *
 * @property {string} siteKey
 *   Required. The site key that was used to invoke reCAPTCHA on your site and generate
 *   the token.
 *
 * @typedef Event
 * @memberof google.cloud.recaptchaenterprise.v1beta1
 * @see [google.cloud.recaptchaenterprise.v1beta1.Event definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/recaptchaenterprise/v1beta1/recaptchaenterprise.proto}
 */
const Event = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * @property {boolean} valid
 *   Whether the provided user response token is valid.
 *
 * @property {number} invalidReason
 *   Reason associated with the response when valid = false.
 *
 *   The number should be among the values of [InvalidReason]{@link google.cloud.recaptchaenterprise.v1beta1.InvalidReason}
 *
 * @property {Object} createTime
 *   The timestamp corresponding to the generation of the token.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {string} hostname
 *   The hostname of the page on which the token was generated.
 *
 * @property {string} action
 *   Action name provided at token generation.
 *
 * @typedef TokenProperties
 * @memberof google.cloud.recaptchaenterprise.v1beta1
 * @see [google.cloud.recaptchaenterprise.v1beta1.TokenProperties definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/recaptchaenterprise/v1beta1/recaptchaenterprise.proto}
 */
const TokenProperties = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * LINT.IfChange
   * Enum that represents the types of invalid token reasons.
   *
   * @enum {number}
   * @memberof google.cloud.recaptchaenterprise.v1beta1
   */
  InvalidReason: {

    /**
     * Default unspecified type.
     */
    INVALID_REASON_UNSPECIFIED: 0,

    /**
     * If the failure reason was not accounted for.
     */
    UNKNOWN_INVALID_REASON: 1,

    /**
     * The provided user verification token was malformed.
     */
    MALFORMED: 2,

    /**
     * The user verification token had expired.
     */
    EXPIRED: 3,

    /**
     * The user verification had already been seen.
     */
    DUPE: 4,

    /**
     * The user verification token did not match the provided site key.
     * This may be a configuration error (e.g. development keys used in
     * production) or end users trying to use verification tokens from other
     * sites.
     */
    SITE_MISMATCH: 5,

    /**
     * The user verification token was not present.  It is a required input.
     */
    MISSING: 6
  }
};