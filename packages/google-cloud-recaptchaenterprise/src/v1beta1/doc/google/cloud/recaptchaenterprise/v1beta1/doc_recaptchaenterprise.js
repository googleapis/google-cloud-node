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
 *   Optional. The user response token provided by the reCAPTCHA client-side integration
 *   on your site.
 *
 * @property {string} siteKey
 *   Optional. The site key that was used to invoke reCAPTCHA on your site and generate
 *   the token.
 *
 * @property {string} userAgent
 *   Optional. The user agent present in the request from the user's device related to
 *   this event.
 *
 * @property {string} userIpAddress
 *   Optional. The IP address in the request from the user's device related to this event.
 *
 * @property {string} expectedAction
 *   Optional. The expected action for this type of event. This should be the same action
 *   provided at token generation time on client-side platforms already
 *   integrated with recaptcha enterprise.
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

/**
 * The create key request message.
 *
 * @property {string} parent
 *   Required. The name of the project in which the key will be created, in the
 *   format "projects/{project_number}".
 *
 * @property {Object} key
 *   Required. Information to create a reCAPTCHA Enterprise key.
 *
 *   This object should have the same structure as [Key]{@link google.cloud.recaptchaenterprise.v1beta1.Key}
 *
 * @typedef CreateKeyRequest
 * @memberof google.cloud.recaptchaenterprise.v1beta1
 * @see [google.cloud.recaptchaenterprise.v1beta1.CreateKeyRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/recaptchaenterprise/v1beta1/recaptchaenterprise.proto}
 */
const CreateKeyRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The list keys request message.
 *
 * @property {string} parent
 *   Required. The name of the project that contains the keys that will be
 *   listed, in the format "projects/{project_number}".
 *
 * @property {number} pageSize
 *   Optional. The maximum number of keys to return. Default is 10. Max limit is
 *   1000.
 *
 * @property {string} pageToken
 *   Optional. The next_page_token value returned from a previous.
 *   ListKeysRequest, if any.
 *
 * @typedef ListKeysRequest
 * @memberof google.cloud.recaptchaenterprise.v1beta1
 * @see [google.cloud.recaptchaenterprise.v1beta1.ListKeysRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/recaptchaenterprise/v1beta1/recaptchaenterprise.proto}
 */
const ListKeysRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Response to request to list keys in a project.
 *
 * @property {Object[]} keys
 *   Key details.
 *
 *   This object should have the same structure as [Key]{@link google.cloud.recaptchaenterprise.v1beta1.Key}
 *
 * @property {string} nextPageToken
 *   Token to retrieve the next page of results. It is set to empty if no keys
 *   remain in results.
 *
 * @typedef ListKeysResponse
 * @memberof google.cloud.recaptchaenterprise.v1beta1
 * @see [google.cloud.recaptchaenterprise.v1beta1.ListKeysResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/recaptchaenterprise/v1beta1/recaptchaenterprise.proto}
 */
const ListKeysResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The get key request message.
 *
 * @property {string} name
 *   Required. The name of the requested key, in the format
 *   "projects/{project_number}/keys/{key_id}".
 *
 * @typedef GetKeyRequest
 * @memberof google.cloud.recaptchaenterprise.v1beta1
 * @see [google.cloud.recaptchaenterprise.v1beta1.GetKeyRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/recaptchaenterprise/v1beta1/recaptchaenterprise.proto}
 */
const GetKeyRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The update key request message.
 *
 * @property {Object} key
 *   Required. The key to update.
 *
 *   This object should have the same structure as [Key]{@link google.cloud.recaptchaenterprise.v1beta1.Key}
 *
 * @property {Object} updateMask
 *   Optional. The mask to control which field of the key get updated. If the mask is not
 *   present, all fields will be updated.
 *
 *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
 *
 * @typedef UpdateKeyRequest
 * @memberof google.cloud.recaptchaenterprise.v1beta1
 * @see [google.cloud.recaptchaenterprise.v1beta1.UpdateKeyRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/recaptchaenterprise/v1beta1/recaptchaenterprise.proto}
 */
const UpdateKeyRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The delete key request message.
 *
 * @property {string} name
 *   Required. The name of the key to be deleted, in the format
 *   "projects/{project_number}/keys/{key_id}".
 *
 * @typedef DeleteKeyRequest
 * @memberof google.cloud.recaptchaenterprise.v1beta1
 * @see [google.cloud.recaptchaenterprise.v1beta1.DeleteKeyRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/recaptchaenterprise/v1beta1/recaptchaenterprise.proto}
 */
const DeleteKeyRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A key used to identify and configure applications (web and/or mobile) that
 * use reCAPTCHA Enterprise.
 *
 * @property {string} name
 *   The resource name for the Key in the format
 *   "projects/{project_number}/keys/{key_id}".
 *
 * @property {string} displayName
 *   Human-readable display name of this key. Modifiable by user.
 *
 * @property {Object} webSettings
 *   Settings for keys that can be used by websites.
 *
 *   This object should have the same structure as [WebKeySettings]{@link google.cloud.recaptchaenterprise.v1beta1.WebKeySettings}
 *
 * @property {Object} androidSettings
 *   Settings for keys that can be used by Android apps.
 *
 *   This object should have the same structure as [AndroidKeySettings]{@link google.cloud.recaptchaenterprise.v1beta1.AndroidKeySettings}
 *
 * @property {Object} iosSettings
 *   Settings for keys that can be used by iOS apps.
 *
 *   This object should have the same structure as [IOSKeySettings]{@link google.cloud.recaptchaenterprise.v1beta1.IOSKeySettings}
 *
 * @typedef Key
 * @memberof google.cloud.recaptchaenterprise.v1beta1
 * @see [google.cloud.recaptchaenterprise.v1beta1.Key definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/recaptchaenterprise/v1beta1/recaptchaenterprise.proto}
 */
const Key = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Settings specific to keys that can be used by websites.
 *
 * @property {boolean} enforceAllowedDomains
 *   Whether allowed_domains is enforced or not.
 *
 * @property {string[]} allowedDomains
 *   Domains or subdomains of websites allowed to use the key. All subdomains
 *   of an allowed domain are automatically allowed. A valid domain requires a
 *   host and must not include any path, port, query or fragment.
 *   Examples: 'example.com' or 'subdomain.example.com'
 *
 * @property {boolean} allowAmpTraffic
 *   Whether this key can be used on AMP (Accelerated Mobile Pages) websites.
 *
 * @property {number} integrationType
 *   Required. Describes how this key is integrated with the website.
 *
 *   The number should be among the values of [IntegrationType]{@link google.cloud.recaptchaenterprise.v1beta1.IntegrationType}
 *
 * @property {number} challengeSecurityPreference
 *   Settings for the frequency and difficulty at which this key triggers
 *   captcha challenges. This should only be specified for IntegrationTypes
 *   CHECKBOX_CHALLENGE and INVISIBLE_CHALLENGE.
 *
 *   The number should be among the values of [ChallengeSecurityPreference]{@link google.cloud.recaptchaenterprise.v1beta1.ChallengeSecurityPreference}
 *
 * @typedef WebKeySettings
 * @memberof google.cloud.recaptchaenterprise.v1beta1
 * @see [google.cloud.recaptchaenterprise.v1beta1.WebKeySettings definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/recaptchaenterprise/v1beta1/recaptchaenterprise.proto}
 */
const WebKeySettings = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Enum that represents the possible challenge frequency and difficulty
   * configurations for a web key.
   *
   * @enum {number}
   * @memberof google.cloud.recaptchaenterprise.v1beta1
   */
  ChallengeSecurityPreference: {

    /**
     * Default type that indicates this enum hasn't been specified.
     */
    CHALLENGE_SECURITY_PREFERENCE_UNSPECIFIED: 0,

    /**
     * Key tends to show fewer and easier challenges.
     */
    USABILITY: 1,

    /**
     * Key tends to show balanced (in amount and difficulty) challenges.
     */
    BALANCED: 2,

    /**
     * Key tends to show more and harder challenges.
     */
    SECURITY: 3
  },

  /**
   * Enum that represents the integration types for web keys.
   *
   * @enum {number}
   * @memberof google.cloud.recaptchaenterprise.v1beta1
   */
  IntegrationType: {

    /**
     * Default type that indicates this enum hasn't been specified. This is not
     * a valid IntegrationType, one of the other types must be specified
     * instead.
     */
    INTEGRATION_TYPE_UNSPECIFIED: 0,

    /**
     * Only used to produce scores. It doesn't display the "I'm not a robot"
     * checkbox and never shows captcha challenges.
     */
    SCORE_ONLY: 1,

    /**
     * Displays the "I'm not a robot" checkbox and may show captcha challenges
     * after it is checked.
     */
    CHECKBOX_CHALLENGE: 2,

    /**
     * Doesn't display the "I'm not a robot" checkbox, but may show captcha
     * challenges after risk analysis.
     */
    INVISIBLE_CHALLENGE: 3
  }
};

/**
 * Settings specific to keys that can be used by Android apps.
 *
 * @property {string[]} allowedPackageNames
 *   Android package names of apps allowed to use the key.
 *   Example: 'com.companyname.appname'
 *
 * @typedef AndroidKeySettings
 * @memberof google.cloud.recaptchaenterprise.v1beta1
 * @see [google.cloud.recaptchaenterprise.v1beta1.AndroidKeySettings definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/recaptchaenterprise/v1beta1/recaptchaenterprise.proto}
 */
const AndroidKeySettings = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Settings specific to keys that can be used by iOS apps.
 *
 * @property {string[]} allowedBundleIds
 *   iOS bundle ids of apps allowed to use the key.
 *   Example: 'com.companyname.productname.appname'
 *
 * @typedef IOSKeySettings
 * @memberof google.cloud.recaptchaenterprise.v1beta1
 * @see [google.cloud.recaptchaenterprise.v1beta1.IOSKeySettings definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/recaptchaenterprise/v1beta1/recaptchaenterprise.proto}
 */
const IOSKeySettings = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};