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
 * Configures which glossary should be used for a specific target language,
 * and defines options for applying that glossary.
 *
 * @property {string} glossary
 *   Required. Specifies the glossary used for this translation. Use
 *   this format: projects/* /locations/* /glossaries/*
 *
 * @property {boolean} ignoreCase
 *   Optional. Indicates match is case-insensitive.
 *   Default value is false if missing.
 *
 * @typedef TranslateTextGlossaryConfig
 * @memberof google.cloud.translation.v3beta1
 * @see [google.cloud.translation.v3beta1.TranslateTextGlossaryConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/translate/v3beta1/translation_service.proto}
 */
const TranslateTextGlossaryConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The request message for synchronous translation.
 *
 * @property {string[]} contents
 *   Required. The content of the input in string format.
 *   We recommend the total content be less than 30k codepoints.
 *   Use BatchTranslateText for larger text.
 *
 * @property {string} mimeType
 *   Optional. The format of the source text, for example, "text/html",
 *    "text/plain". If left blank, the MIME type defaults to "text/html".
 *
 * @property {string} sourceLanguageCode
 *   Optional. The BCP-47 language code of the input text if
 *   known, for example, "en-US" or "sr-Latn". Supported language codes are
 *   listed in Language Support. If the source language isn't specified, the API
 *   attempts to identify the source language automatically and returns the
 *   source language within the response.
 *
 * @property {string} targetLanguageCode
 *   Required. The BCP-47 language code to use for translation of the input
 *   text, set to one of the language codes listed in Language Support.
 *
 * @property {string} parent
 *   Required. Project or location to make a call. Must refer to a caller's
 *   project.
 *
 *   Format: `projects/{project-id}` or
 *   `projects/{project-id}/locations/{location-id}`.
 *
 *   For global calls, use `projects/{project-id}/locations/global` or
 *   `projects/{project-id}`.
 *
 *   Non-global location is required for requests using AutoML models or
 *   custom glossaries.
 *
 *   Models and glossaries must be within the same region (have same
 *   location-id), otherwise an INVALID_ARGUMENT (400) error is returned.
 *
 * @property {string} model
 *   Optional. The `model` type requested for this translation.
 *
 *   The format depends on model type:
 *
 *   - AutoML Translation models:
 *     `projects/{project-id}/locations/{location-id}/models/{model-id}`
 *
 *   - General (built-in) models:
 *     `projects/{project-id}/locations/{location-id}/models/general/nmt`,
 *     `projects/{project-id}/locations/{location-id}/models/general/base`
 *
 *
 *   For global (non-regionalized) requests, use `location-id` `global`.
 *   For example,
 *   `projects/{project-id}/locations/global/models/general/nmt`.
 *
 *   If missing, the system decides which google base model to use.
 *
 * @property {Object} glossaryConfig
 *   Optional. Glossary to be applied. The glossary must be
 *   within the same region (have the same location-id) as the model, otherwise
 *   an INVALID_ARGUMENT (400) error is returned.
 *
 *   This object should have the same structure as [TranslateTextGlossaryConfig]{@link google.cloud.translation.v3beta1.TranslateTextGlossaryConfig}
 *
 * @property {Object.<string, string>} labels
 *   Optional. The labels with user-defined metadata for the request.
 *
 *   Label keys and values can be no longer than 63 characters
 *   (Unicode codepoints), can only contain lowercase letters, numeric
 *   characters, underscores and dashes. International characters are allowed.
 *   Label values are optional. Label keys must start with a letter.
 *
 *   See https://cloud.google.com/translate/docs/labels for more information.
 *
 * @typedef TranslateTextRequest
 * @memberof google.cloud.translation.v3beta1
 * @see [google.cloud.translation.v3beta1.TranslateTextRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/translate/v3beta1/translation_service.proto}
 */
const TranslateTextRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * @property {Object[]} translations
 *   Text translation responses with no glossary applied.
 *   This field has the same length as
 *   `contents`.
 *
 *   This object should have the same structure as [Translation]{@link google.cloud.translation.v3beta1.Translation}
 *
 * @property {Object[]} glossaryTranslations
 *   Text translation responses if a glossary is provided in the request.
 *   This can be the same as
 *   `translations` if no terms apply.
 *   This field has the same length as
 *   `contents`.
 *
 *   This object should have the same structure as [Translation]{@link google.cloud.translation.v3beta1.Translation}
 *
 * @typedef TranslateTextResponse
 * @memberof google.cloud.translation.v3beta1
 * @see [google.cloud.translation.v3beta1.TranslateTextResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/translate/v3beta1/translation_service.proto}
 */
const TranslateTextResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A single translation response.
 *
 * @property {string} translatedText
 *   Text translated into the target language.
 *
 * @property {string} model
 *   Only present when `model` is present in the request.
 *   This is same as `model` provided in the request.
 *
 * @property {string} detectedLanguageCode
 *   The BCP-47 language code of source text in the initial request, detected
 *   automatically, if no source language was passed within the initial
 *   request. If the source language was passed, auto-detection of the language
 *   does not occur and this field is empty.
 *
 * @property {Object} glossaryConfig
 *   The `glossary_config` used for this translation.
 *
 *   This object should have the same structure as [TranslateTextGlossaryConfig]{@link google.cloud.translation.v3beta1.TranslateTextGlossaryConfig}
 *
 * @typedef Translation
 * @memberof google.cloud.translation.v3beta1
 * @see [google.cloud.translation.v3beta1.Translation definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/translate/v3beta1/translation_service.proto}
 */
const Translation = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The request message for language detection.
 *
 * @property {string} parent
 *   Required. Project or location to make a call. Must refer to a caller's
 *   project.
 *
 *   Format: `projects/{project-id}/locations/{location-id}` or
 *   `projects/{project-id}`.
 *
 *   For global calls, use `projects/{project-id}/locations/global` or
 *   `projects/{project-id}`.
 *
 *   Only models within the same region (has same location-id) can be used.
 *   Otherwise an INVALID_ARGUMENT (400) error is returned.
 *
 * @property {string} model
 *   Optional. The language detection model to be used.
 *
 *   Format:
 *   `projects/{project-id}/locations/{location-id}/models/language-detection/{model-id}`
 *
 *   Only one language detection model is currently supported:
 *   `projects/{project-id}/locations/{location-id}/models/language-detection/default`.
 *
 *   If not specified, the default model is used.
 *
 * @property {string} content
 *   The content of the input stored as a string.
 *
 * @property {string} mimeType
 *   Optional. The format of the source text, for example, "text/html",
 *   "text/plain". If left blank, the MIME type defaults to "text/html".
 *
 * @property {Object.<string, string>} labels
 *   Optional. The labels with user-defined metadata for the request.
 *
 *   Label keys and values can be no longer than 63 characters
 *   (Unicode codepoints), can only contain lowercase letters, numeric
 *   characters, underscores and dashes. International characters are allowed.
 *   Label values are optional. Label keys must start with a letter.
 *
 *   See https://cloud.google.com/translate/docs/labels for more information.
 *
 * @typedef DetectLanguageRequest
 * @memberof google.cloud.translation.v3beta1
 * @see [google.cloud.translation.v3beta1.DetectLanguageRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/translate/v3beta1/translation_service.proto}
 */
const DetectLanguageRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The response message for language detection.
 *
 * @property {string} languageCode
 *   The BCP-47 language code of source content in the request, detected
 *   automatically.
 *
 * @property {number} confidence
 *   The confidence of the detection result for this language.
 *
 * @typedef DetectedLanguage
 * @memberof google.cloud.translation.v3beta1
 * @see [google.cloud.translation.v3beta1.DetectedLanguage definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/translate/v3beta1/translation_service.proto}
 */
const DetectedLanguage = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The response message for language detection.
 *
 * @property {Object[]} languages
 *   A list of detected languages sorted by detection confidence in descending
 *   order. The most probable language first.
 *
 *   This object should have the same structure as [DetectedLanguage]{@link google.cloud.translation.v3beta1.DetectedLanguage}
 *
 * @typedef DetectLanguageResponse
 * @memberof google.cloud.translation.v3beta1
 * @see [google.cloud.translation.v3beta1.DetectLanguageResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/translate/v3beta1/translation_service.proto}
 */
const DetectLanguageResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The request message for discovering supported languages.
 *
 * @property {string} parent
 *   Required. Project or location to make a call. Must refer to a caller's
 *   project.
 *
 *   Format: `projects/{project-id}` or
 *   `projects/{project-id}/locations/{location-id}`.
 *
 *   For global calls, use `projects/{project-id}/locations/global` or
 *   `projects/{project-id}`.
 *
 *   Non-global location is required for AutoML models.
 *
 *   Only models within the same region (have same location-id) can be used,
 *   otherwise an INVALID_ARGUMENT (400) error is returned.
 *
 * @property {string} displayLanguageCode
 *   Optional. The language to use to return localized, human readable names
 *   of supported languages. If missing, then display names are not returned
 *   in a response.
 *
 * @property {string} model
 *   Optional. Get supported languages of this model.
 *
 *   The format depends on model type:
 *
 *   - AutoML Translation models:
 *     `projects/{project-id}/locations/{location-id}/models/{model-id}`
 *
 *   - General (built-in) models:
 *     `projects/{project-id}/locations/{location-id}/models/general/nmt`,
 *     `projects/{project-id}/locations/{location-id}/models/general/base`
 *
 *
 *   Returns languages supported by the specified model.
 *   If missing, we get supported languages of Google general base (PBMT) model.
 *
 * @typedef GetSupportedLanguagesRequest
 * @memberof google.cloud.translation.v3beta1
 * @see [google.cloud.translation.v3beta1.GetSupportedLanguagesRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/translate/v3beta1/translation_service.proto}
 */
const GetSupportedLanguagesRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The response message for discovering supported languages.
 *
 * @property {Object[]} languages
 *   A list of supported language responses. This list contains an entry
 *   for each language the Translation API supports.
 *
 *   This object should have the same structure as [SupportedLanguage]{@link google.cloud.translation.v3beta1.SupportedLanguage}
 *
 * @typedef SupportedLanguages
 * @memberof google.cloud.translation.v3beta1
 * @see [google.cloud.translation.v3beta1.SupportedLanguages definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/translate/v3beta1/translation_service.proto}
 */
const SupportedLanguages = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A single supported language response corresponds to information related
 * to one supported language.
 *
 * @property {string} languageCode
 *   Supported language code, generally consisting of its ISO 639-1
 *   identifier, for example, 'en', 'ja'. In certain cases, BCP-47 codes
 *   including language and region identifiers are returned (for example,
 *   'zh-TW' and 'zh-CN')
 *
 * @property {string} displayName
 *   Human readable name of the language localized in the display language
 *   specified in the request.
 *
 * @property {boolean} supportSource
 *   Can be used as source language.
 *
 * @property {boolean} supportTarget
 *   Can be used as target language.
 *
 * @typedef SupportedLanguage
 * @memberof google.cloud.translation.v3beta1
 * @see [google.cloud.translation.v3beta1.SupportedLanguage definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/translate/v3beta1/translation_service.proto}
 */
const SupportedLanguage = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The Google Cloud Storage location for the input content.
 *
 * @property {string} inputUri
 *   Required. Source data URI. For example, `gs://my_bucket/my_object`.
 *
 * @typedef GcsSource
 * @memberof google.cloud.translation.v3beta1
 * @see [google.cloud.translation.v3beta1.GcsSource definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/translate/v3beta1/translation_service.proto}
 */
const GcsSource = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Input configuration for BatchTranslateText request.
 *
 * @property {string} mimeType
 *   Optional. Can be "text/plain" or "text/html".
 *   For `.tsv`, "text/html" is used if mime_type is missing.
 *   For `.html`, this field must be "text/html" or empty.
 *   For `.txt`, this field must be "text/plain" or empty.
 *
 * @property {Object} gcsSource
 *   Required. Google Cloud Storage location for the source input.
 *   This can be a single file (for example,
 *   `gs://translation-test/input.tsv`) or a wildcard (for example,
 *   `gs://translation-test/*`). If a file extension is `.tsv`, it can
 *   contain either one or two columns. The first column (optional) is the id
 *   of the text request. If the first column is missing, we use the row
 *   number (0-based) from the input file as the ID in the output file. The
 *   second column is the actual text to be
 *    translated. We recommend each row be <= 10K Unicode codepoints,
 *   otherwise an error might be returned.
 *   Note that the input tsv must be RFC 4180 compliant.
 *
 *   You could use https://github.com/Clever/csvlint to check potential
 *   formatting errors in your tsv file.
 *   csvlint --delimiter='\t' your_input_file.tsv
 *
 *   The other supported file extensions are `.txt` or `.html`, which is
 *   treated as a single large chunk of text.
 *
 *   This object should have the same structure as [GcsSource]{@link google.cloud.translation.v3beta1.GcsSource}
 *
 * @typedef InputConfig
 * @memberof google.cloud.translation.v3beta1
 * @see [google.cloud.translation.v3beta1.InputConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/translate/v3beta1/translation_service.proto}
 */
const InputConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The Google Cloud Storage location for the output content.
 *
 * @property {string} outputUriPrefix
 *   Required. There must be no files under 'output_uri_prefix'.
 *   'output_uri_prefix' must end with "/" and start with "gs://", otherwise an
 *   INVALID_ARGUMENT (400) error is returned.
 *
 * @typedef GcsDestination
 * @memberof google.cloud.translation.v3beta1
 * @see [google.cloud.translation.v3beta1.GcsDestination definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/translate/v3beta1/translation_service.proto}
 */
const GcsDestination = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Output configuration for BatchTranslateText request.
 *
 * @property {Object} gcsDestination
 *   Google Cloud Storage destination for output content.
 *   For every single input file (for example, gs://a/b/c.[extension]), we
 *   generate at most 2 * n output files. (n is the # of target_language_codes
 *   in the BatchTranslateTextRequest).
 *
 *   Output files (tsv) generated are compliant with RFC 4180 except that
 *   record delimiters are '\n' instead of '\r\n'. We don't provide any way to
 *   change record delimiters.
 *
 *   While the input files are being processed, we write/update an index file
 *   'index.csv'  under 'output_uri_prefix' (for example,
 *   gs://translation-test/index.csv) The index file is generated/updated as
 *   new files are being translated. The format is:
 *
 *   input_file,target_language_code,translations_file,errors_file,
 *   glossary_translations_file,glossary_errors_file
 *
 *   input_file is one file we matched using gcs_source.input_uri.
 *   target_language_code is provided in the request.
 *   translations_file contains the translations. (details provided below)
 *   errors_file contains the errors during processing of the file. (details
 *   below). Both translations_file and errors_file could be empty
 *   strings if we have no content to output.
 *   glossary_translations_file and glossary_errors_file are always empty
 *   strings if the input_file is tsv. They could also be empty if we have no
 *   content to output.
 *
 *   Once a row is present in index.csv, the input/output matching never
 *   changes. Callers should also expect all the content in input_file are
 *   processed and ready to be consumed (that is, no partial output file is
 *   written).
 *
 *   The format of translations_file (for target language code 'trg') is:
 *   gs://translation_test/a_b_c_'trg'_translations.[extension]
 *
 *   If the input file extension is tsv, the output has the following
 *   columns:
 *   Column 1: ID of the request provided in the input, if it's not
 *   provided in the input, then the input row number is used (0-based).
 *   Column 2: source sentence.
 *   Column 3: translation without applying a glossary. Empty string if there
 *   is an error.
 *   Column 4 (only present if a glossary is provided in the request):
 *   translation after applying the glossary. Empty string if there is an
 *   error applying the glossary. Could be same string as column 3 if there is
 *   no glossary applied.
 *
 *   If input file extension is a txt or html, the translation is directly
 *   written to the output file. If glossary is requested, a separate
 *   glossary_translations_file has format of
 *   gs://translation_test/a_b_c_'trg'_glossary_translations.[extension]
 *
 *   The format of errors file (for target language code 'trg') is:
 *   gs://translation_test/a_b_c_'trg'_errors.[extension]
 *
 *   If the input file extension is tsv, errors_file contains the following:
 *   Column 1: ID of the request provided in the input, if it's not
 *   provided in the input, then the input row number is used (0-based).
 *   Column 2: source sentence.
 *   Column 3: Error detail for the translation. Could be empty.
 *   Column 4 (only present if a glossary is provided in the request):
 *   Error when applying the glossary.
 *
 *   If the input file extension is txt or html, glossary_error_file will be
 *   generated that contains error details. glossary_error_file has format of
 *   gs://translation_test/a_b_c_'trg'_glossary_errors.[extension]
 *
 *   This object should have the same structure as [GcsDestination]{@link google.cloud.translation.v3beta1.GcsDestination}
 *
 * @typedef OutputConfig
 * @memberof google.cloud.translation.v3beta1
 * @see [google.cloud.translation.v3beta1.OutputConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/translate/v3beta1/translation_service.proto}
 */
const OutputConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The batch translation request.
 *
 * @property {string} parent
 *   Required. Location to make a call. Must refer to a caller's project.
 *
 *   Format: `projects/{project-id}/locations/{location-id}`.
 *
 *   The `global` location is not supported for batch translation.
 *
 *   Only AutoML Translation models or glossaries within the same region (have
 *   the same location-id) can be used, otherwise an INVALID_ARGUMENT (400)
 *   error is returned.
 *
 * @property {string} sourceLanguageCode
 *   Required. Source language code.
 *
 * @property {string[]} targetLanguageCodes
 *   Required. Specify up to 10 language codes here.
 *
 * @property {Object.<string, string>} models
 *   Optional. The models to use for translation. Map's key is target language
 *   code. Map's value is model name. Value can be a built-in general model,
 *   or an AutoML Translation model.
 *
 *   The value format depends on model type:
 *
 *   - AutoML Translation models:
 *     `projects/{project-id}/locations/{location-id}/models/{model-id}`
 *
 *   - General (built-in) models:
 *     `projects/{project-id}/locations/{location-id}/models/general/nmt`,
 *     `projects/{project-id}/locations/{location-id}/models/general/base`
 *
 *
 *   If the map is empty or a specific model is
 *   not requested for a language pair, then default google model (nmt) is used.
 *
 * @property {Object[]} inputConfigs
 *   Required. Input configurations.
 *   The total number of files matched should be <= 1000.
 *   The total content size should be <= 100M Unicode codepoints.
 *   The files must use UTF-8 encoding.
 *
 *   This object should have the same structure as [InputConfig]{@link google.cloud.translation.v3beta1.InputConfig}
 *
 * @property {Object} outputConfig
 *   Required. Output configuration.
 *   If 2 input configs match to the same file (that is, same input path),
 *   we don't generate output for duplicate inputs.
 *
 *   This object should have the same structure as [OutputConfig]{@link google.cloud.translation.v3beta1.OutputConfig}
 *
 * @property {Object.<string, Object>} glossaries
 *   Optional. Glossaries to be applied for translation.
 *   It's keyed by target language code.
 *
 * @property {Object.<string, string>} labels
 *   Optional. The labels with user-defined metadata for the request.
 *
 *   Label keys and values can be no longer than 63 characters
 *   (Unicode codepoints), can only contain lowercase letters, numeric
 *   characters, underscores and dashes. International characters are allowed.
 *   Label values are optional. Label keys must start with a letter.
 *
 *   See https://cloud.google.com/translate/docs/labels for more information.
 *
 * @typedef BatchTranslateTextRequest
 * @memberof google.cloud.translation.v3beta1
 * @see [google.cloud.translation.v3beta1.BatchTranslateTextRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/translate/v3beta1/translation_service.proto}
 */
const BatchTranslateTextRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * State metadata for the batch translation operation.
 *
 * @property {number} state
 *   The state of the operation.
 *
 *   The number should be among the values of [State]{@link google.cloud.translation.v3beta1.State}
 *
 * @property {number} translatedCharacters
 *   Number of successfully translated characters so far (Unicode codepoints).
 *
 * @property {number} failedCharacters
 *   Number of characters that have failed to process so far (Unicode
 *   codepoints).
 *
 * @property {number} totalCharacters
 *   Total number of characters (Unicode codepoints).
 *   This is the total number of codepoints from input files times the number of
 *   target languages and appears here shortly after the call is submitted.
 *
 * @property {Object} submitTime
 *   Time when the operation was submitted.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @typedef BatchTranslateMetadata
 * @memberof google.cloud.translation.v3beta1
 * @see [google.cloud.translation.v3beta1.BatchTranslateMetadata definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/translate/v3beta1/translation_service.proto}
 */
const BatchTranslateMetadata = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Stored in the google.longrunning.Operation.response field returned by
 * BatchTranslateText if at least one sentence is translated successfully.
 *
 * @property {number} totalCharacters
 *   Total number of characters (Unicode codepoints).
 *
 * @property {number} translatedCharacters
 *   Number of successfully translated characters (Unicode codepoints).
 *
 * @property {number} failedCharacters
 *   Number of characters that have failed to process (Unicode codepoints).
 *
 * @property {Object} submitTime
 *   Time when the operation was submitted.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {Object} endTime
 *   The time when the operation is finished and
 *   google.longrunning.Operation.done is set to true.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @typedef BatchTranslateResponse
 * @memberof google.cloud.translation.v3beta1
 * @see [google.cloud.translation.v3beta1.BatchTranslateResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/translate/v3beta1/translation_service.proto}
 */
const BatchTranslateResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Input configuration for glossaries.
 *
 * @property {Object} gcsSource
 *   Required. Google Cloud Storage location of glossary data.
 *   File format is determined based on the filename extension. API returns
 *   [google.rpc.Code.INVALID_ARGUMENT] for unsupported URI-s and file
 *   formats. Wildcards are not allowed. This must be a single file in one of
 *   the following formats:
 *
 *   For unidirectional glossaries:
 *
 *   - TSV/CSV (`.tsv`/`.csv`): 2 column file, tab- or comma-separated.
 *     The first column is source text. The second column is target text.
 *     The file must not contain headers. That is, the first row is data, not
 *     column names.
 *
 *   - TMX (`.tmx`): TMX file with parallel data defining source/target term
 *   pairs.
 *
 *   For equivalent term sets glossaries:
 *
 *   - CSV (`.csv`): Multi-column CSV file defining equivalent glossary terms
 *     in multiple languages. The format is defined for Google Translation
 *     Toolkit and documented in [Use a
 *     glossary](https://support.google.com/translatortoolkit/answer/6306379?hl=en).
 *
 *   This object should have the same structure as [GcsSource]{@link google.cloud.translation.v3beta1.GcsSource}
 *
 * @typedef GlossaryInputConfig
 * @memberof google.cloud.translation.v3beta1
 * @see [google.cloud.translation.v3beta1.GlossaryInputConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/translate/v3beta1/translation_service.proto}
 */
const GlossaryInputConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Represents a glossary built from user provided data.
 *
 * @property {string} name
 *   Required. The resource name of the glossary. Glossary names have the form
 *   `projects/{project-id}/locations/{location-id}/glossaries/{glossary-id}`.
 *
 * @property {Object} languagePair
 *   Used with unidirectional glossaries.
 *
 *   This object should have the same structure as [LanguageCodePair]{@link google.cloud.translation.v3beta1.LanguageCodePair}
 *
 * @property {Object} languageCodesSet
 *   Used with equivalent term set glossaries.
 *
 *   This object should have the same structure as [LanguageCodesSet]{@link google.cloud.translation.v3beta1.LanguageCodesSet}
 *
 * @property {Object} inputConfig
 *   Required. Provides examples to build the glossary from.
 *   Total glossary must not exceed 10M Unicode codepoints.
 *
 *   This object should have the same structure as [GlossaryInputConfig]{@link google.cloud.translation.v3beta1.GlossaryInputConfig}
 *
 * @property {number} entryCount
 *   Output only. The number of entries defined in the glossary.
 *
 * @property {Object} submitTime
 *   Output only. When CreateGlossary was called.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {Object} endTime
 *   Output only. When the glossary creation was finished.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @typedef Glossary
 * @memberof google.cloud.translation.v3beta1
 * @see [google.cloud.translation.v3beta1.Glossary definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/translate/v3beta1/translation_service.proto}
 */
const Glossary = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Used with unidirectional glossaries.
   *
   * @property {string} sourceLanguageCode
   *   Required. The BCP-47 language code of the input text, for example,
   *   "en-US". Expected to be an exact match for GlossaryTerm.language_code.
   *
   * @property {string} targetLanguageCode
   *   Required. The BCP-47 language code for translation output, for example,
   *   "zh-CN". Expected to be an exact match for GlossaryTerm.language_code.
   *
   * @typedef LanguageCodePair
   * @memberof google.cloud.translation.v3beta1
   * @see [google.cloud.translation.v3beta1.Glossary.LanguageCodePair definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/translate/v3beta1/translation_service.proto}
   */
  LanguageCodePair: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  },

  /**
   * Used with equivalent term set glossaries.
   *
   * @property {string[]} languageCodes
   *   The BCP-47 language code(s) for terms defined in the glossary.
   *   All entries are unique. The list contains at least two entries.
   *   Expected to be an exact match for GlossaryTerm.language_code.
   *
   * @typedef LanguageCodesSet
   * @memberof google.cloud.translation.v3beta1
   * @see [google.cloud.translation.v3beta1.Glossary.LanguageCodesSet definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/translate/v3beta1/translation_service.proto}
   */
  LanguageCodesSet: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  }
};

/**
 * Request message for CreateGlossary.
 *
 * @property {string} parent
 *   Required. The project name.
 *
 * @property {Object} glossary
 *   Required. The glossary to create.
 *
 *   This object should have the same structure as [Glossary]{@link google.cloud.translation.v3beta1.Glossary}
 *
 * @typedef CreateGlossaryRequest
 * @memberof google.cloud.translation.v3beta1
 * @see [google.cloud.translation.v3beta1.CreateGlossaryRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/translate/v3beta1/translation_service.proto}
 */
const CreateGlossaryRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for GetGlossary.
 *
 * @property {string} name
 *   Required. The name of the glossary to retrieve.
 *
 * @typedef GetGlossaryRequest
 * @memberof google.cloud.translation.v3beta1
 * @see [google.cloud.translation.v3beta1.GetGlossaryRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/translate/v3beta1/translation_service.proto}
 */
const GetGlossaryRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for DeleteGlossary.
 *
 * @property {string} name
 *   Required. The name of the glossary to delete.
 *
 * @typedef DeleteGlossaryRequest
 * @memberof google.cloud.translation.v3beta1
 * @see [google.cloud.translation.v3beta1.DeleteGlossaryRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/translate/v3beta1/translation_service.proto}
 */
const DeleteGlossaryRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for ListGlossaries.
 *
 * @property {string} parent
 *   Required. The name of the project from which to list all of the glossaries.
 *
 * @property {number} pageSize
 *   Optional. Requested page size. The server may return fewer glossaries than
 *   requested. If unspecified, the server picks an appropriate default.
 *
 * @property {string} pageToken
 *   Optional. A token identifying a page of results the server should return.
 *   Typically, this is the value of [ListGlossariesResponse.next_page_token]
 *   returned from the previous call to `ListGlossaries` method.
 *   The first page is returned if `page_token`is empty or missing.
 *
 * @property {string} filter
 *   Optional. Filter specifying constraints of a list operation.
 *   Filtering is not supported yet, and the parameter currently has no effect.
 *   If missing, no filtering is performed.
 *
 * @typedef ListGlossariesRequest
 * @memberof google.cloud.translation.v3beta1
 * @see [google.cloud.translation.v3beta1.ListGlossariesRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/translate/v3beta1/translation_service.proto}
 */
const ListGlossariesRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Response message for ListGlossaries.
 *
 * @property {Object[]} glossaries
 *   The list of glossaries for a project.
 *
 *   This object should have the same structure as [Glossary]{@link google.cloud.translation.v3beta1.Glossary}
 *
 * @property {string} nextPageToken
 *   A token to retrieve a page of results. Pass this value in the
 *   [ListGlossariesRequest.page_token] field in the subsequent call to
 *   `ListGlossaries` method to retrieve the next page of results.
 *
 * @typedef ListGlossariesResponse
 * @memberof google.cloud.translation.v3beta1
 * @see [google.cloud.translation.v3beta1.ListGlossariesResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/translate/v3beta1/translation_service.proto}
 */
const ListGlossariesResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Stored in the google.longrunning.Operation.metadata field returned by
 * CreateGlossary.
 *
 * @property {string} name
 *   The name of the glossary that is being created.
 *
 * @property {number} state
 *   The current state of the glossary creation operation.
 *
 *   The number should be among the values of [State]{@link google.cloud.translation.v3beta1.State}
 *
 * @property {Object} submitTime
 *   The time when the operation was submitted to the server.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @typedef CreateGlossaryMetadata
 * @memberof google.cloud.translation.v3beta1
 * @see [google.cloud.translation.v3beta1.CreateGlossaryMetadata definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/translate/v3beta1/translation_service.proto}
 */
const CreateGlossaryMetadata = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Stored in the google.longrunning.Operation.metadata field returned by
 * DeleteGlossary.
 *
 * @property {string} name
 *   The name of the glossary that is being deleted.
 *
 * @property {number} state
 *   The current state of the glossary deletion operation.
 *
 *   The number should be among the values of [State]{@link google.cloud.translation.v3beta1.State}
 *
 * @property {Object} submitTime
 *   The time when the operation was submitted to the server.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @typedef DeleteGlossaryMetadata
 * @memberof google.cloud.translation.v3beta1
 * @see [google.cloud.translation.v3beta1.DeleteGlossaryMetadata definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/translate/v3beta1/translation_service.proto}
 */
const DeleteGlossaryMetadata = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Stored in the google.longrunning.Operation.response field returned by
 * DeleteGlossary.
 *
 * @property {string} name
 *   The name of the deleted glossary.
 *
 * @property {Object} submitTime
 *   The time when the operation was submitted to the server.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {Object} endTime
 *   The time when the glossary deletion is finished and
 *   google.longrunning.Operation.done is set to true.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @typedef DeleteGlossaryResponse
 * @memberof google.cloud.translation.v3beta1
 * @see [google.cloud.translation.v3beta1.DeleteGlossaryResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/translate/v3beta1/translation_service.proto}
 */
const DeleteGlossaryResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};