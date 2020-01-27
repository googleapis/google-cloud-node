// Copyright 2020 Google LLC
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
 * Represents an intent.
 * Intents convert a number of user expressions or patterns into an action. An
 * action is an extraction of a user command or sentence semantics.
 *
 * @property {string} name
 *   The unique identifier of this intent.
 *   Required for Intents.UpdateIntent and Intents.BatchUpdateIntents
 *   methods.
 *   Format: `projects/<Project ID>/agent/intents/<Intent ID>`.
 *
 * @property {string} displayName
 *   Required. The name of this intent.
 *
 * @property {number} webhookState
 *   Optional. Indicates whether webhooks are enabled for the intent.
 *
 *   The number should be among the values of [WebhookState]{@link google.cloud.dialogflow.v2beta1.WebhookState}
 *
 * @property {number} priority
 *   The priority of this intent. Higher numbers represent higher
 *   priorities.
 *
 *   - If the supplied value is unspecified or 0, the service
 *     translates the value to 500,000, which corresponds to the
 *     `Normal` priority in the console.
 *   - If the supplied value is negative, the intent is ignored
 *     in runtime detect intent requests.
 *
 * @property {boolean} isFallback
 *   Optional. Indicates whether this is a fallback intent.
 *
 * @property {boolean} mlEnabled
 *   Optional. Indicates whether Machine Learning is enabled for the intent.
 *   Note: If `ml_enabled` setting is set to false, then this intent is not
 *   taken into account during inference in `ML ONLY` match mode. Also,
 *   auto-markup in the UI is turned off.
 *   DEPRECATED! Please use `ml_disabled` field instead.
 *   NOTE: If both `ml_enabled` and `ml_disabled` are either not set or false,
 *   then the default value is determined as follows:
 *   - Before April 15th, 2018 the default is:
 *     ml_enabled = false / ml_disabled = true.
 *   - After April 15th, 2018 the default is:
 *     ml_enabled = true / ml_disabled = false.
 *
 * @property {boolean} mlDisabled
 *   Optional. Indicates whether Machine Learning is disabled for the intent.
 *   Note: If `ml_disabled` setting is set to true, then this intent is not
 *   taken into account during inference in `ML ONLY` match mode. Also,
 *   auto-markup in the UI is turned off.
 *
 * @property {boolean} endInteraction
 *   Optional. Indicates that this intent ends an interaction. Some integrations
 *   (e.g., Actions on Google or Dialogflow phone gateway) use this information
 *   to close interaction with an end user. Default is false.
 *
 * @property {string[]} inputContextNames
 *   Optional. The list of context names required for this intent to be
 *   triggered.
 *   Format: `projects/<Project ID>/agent/sessions/-/contexts/<Context ID>`.
 *
 * @property {string[]} events
 *   Optional. The collection of event names that trigger the intent.
 *   If the collection of input contexts is not empty, all of the contexts must
 *   be present in the active user session for an event to trigger this intent.
 *
 * @property {Object[]} trainingPhrases
 *   Optional. The collection of examples that the agent is
 *   trained on.
 *
 *   This object should have the same structure as [TrainingPhrase]{@link google.cloud.dialogflow.v2beta1.TrainingPhrase}
 *
 * @property {string} action
 *   Optional. The name of the action associated with the intent.
 *   Note: The action name must not contain whitespaces.
 *
 * @property {Object[]} outputContexts
 *   Optional. The collection of contexts that are activated when the intent
 *   is matched. Context messages in this collection should not set the
 *   parameters field. Setting the `lifespan_count` to 0 will reset the context
 *   when the intent is matched.
 *   Format: `projects/<Project ID>/agent/sessions/-/contexts/<Context ID>`.
 *
 *   This object should have the same structure as [Context]{@link google.cloud.dialogflow.v2beta1.Context}
 *
 * @property {boolean} resetContexts
 *   Optional. Indicates whether to delete all contexts in the current
 *   session when this intent is matched.
 *
 * @property {Object[]} parameters
 *   Optional. The collection of parameters associated with the intent.
 *
 *   This object should have the same structure as [Parameter]{@link google.cloud.dialogflow.v2beta1.Parameter}
 *
 * @property {Object[]} messages
 *   Optional. The collection of rich messages corresponding to the
 *   `Response` field in the Dialogflow console.
 *
 *   This object should have the same structure as [Message]{@link google.cloud.dialogflow.v2beta1.Message}
 *
 * @property {number[]} defaultResponsePlatforms
 *   Optional. The list of platforms for which the first responses will be
 *   copied from the messages in PLATFORM_UNSPECIFIED (i.e. default platform).
 *
 *   The number should be among the values of [Platform]{@link google.cloud.dialogflow.v2beta1.Platform}
 *
 * @property {string} rootFollowupIntentName
 *   Read-only. The unique identifier of the root intent in the chain of
 *   followup intents. It identifies the correct followup intents chain for
 *   this intent. We populate this field only in the output.
 *
 *   Format: `projects/<Project ID>/agent/intents/<Intent ID>`.
 *
 * @property {string} parentFollowupIntentName
 *   Read-only after creation. The unique identifier of the parent intent in the
 *   chain of followup intents. You can set this field when creating an intent,
 *   for example with CreateIntent or
 *   BatchUpdateIntents, in order to make this
 *   intent a followup intent.
 *
 *   It identifies the parent followup intent.
 *   Format: `projects/<Project ID>/agent/intents/<Intent ID>`.
 *
 * @property {Object[]} followupIntentInfo
 *   Read-only. Information about all followup intents that have this intent as
 *   a direct or indirect parent. We populate this field only in the output.
 *
 *   This object should have the same structure as [FollowupIntentInfo]{@link google.cloud.dialogflow.v2beta1.FollowupIntentInfo}
 *
 * @typedef Intent
 * @memberof google.cloud.dialogflow.v2beta1
 * @see [google.cloud.dialogflow.v2beta1.Intent definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/intent.proto}
 */
const Intent = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Represents an example that the agent is trained on.
   *
   * @property {string} name
   *   Output only. The unique identifier of this training phrase.
   *
   * @property {number} type
   *   Required. The type of the training phrase.
   *
   *   The number should be among the values of [Type]{@link google.cloud.dialogflow.v2beta1.Type}
   *
   * @property {Object[]} parts
   *   Required. The ordered list of training phrase parts.
   *   The parts are concatenated in order to form the training phrase.
   *
   *   Note: The API does not automatically annotate training phrases like the
   *   Dialogflow Console does.
   *
   *   Note: Do not forget to include whitespace at part boundaries,
   *   so the training phrase is well formatted when the parts are concatenated.
   *
   *   If the training phrase does not need to be annotated with parameters,
   *   you just need a single part with only the Part.text field set.
   *
   *   If you want to annotate the training phrase, you must create multiple
   *   parts, where the fields of each part are populated in one of two ways:
   *
   *   -   `Part.text` is set to a part of the phrase that has no parameters.
   *   -   `Part.text` is set to a part of the phrase that you want to annotate,
   *       and the `entity_type`, `alias`, and `user_defined` fields are all
   *       set.
   *
   *   This object should have the same structure as [Part]{@link google.cloud.dialogflow.v2beta1.Part}
   *
   * @property {number} timesAddedCount
   *   Optional. Indicates how many times this example was added to
   *   the intent. Each time a developer adds an existing sample by editing an
   *   intent or training, this counter is increased.
   *
   * @typedef TrainingPhrase
   * @memberof google.cloud.dialogflow.v2beta1
   * @see [google.cloud.dialogflow.v2beta1.Intent.TrainingPhrase definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/intent.proto}
   */
  TrainingPhrase: {
    // This is for documentation. Actual contents will be loaded by gRPC.

    /**
     * Represents a part of a training phrase.
     *
     * @property {string} text
     *   Required. The text for this part.
     *
     * @property {string} entityType
     *   Optional. The entity type name prefixed with `@`.
     *   This field is required for annotated parts of the training phrase.
     *
     * @property {string} alias
     *   Optional. The parameter name for the value extracted from the
     *   annotated part of the example.
     *   This field is required for annotated parts of the training phrase.
     *
     * @property {boolean} userDefined
     *   Optional. Indicates whether the text was manually annotated.
     *   This field is set to true when the Dialogflow Console is used to
     *   manually annotate the part. When creating an annotated part with the
     *   API, you must set this to true.
     *
     * @typedef Part
     * @memberof google.cloud.dialogflow.v2beta1
     * @see [google.cloud.dialogflow.v2beta1.Intent.TrainingPhrase.Part definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/intent.proto}
     */
    Part: {
      // This is for documentation. Actual contents will be loaded by gRPC.
    },

    /**
     * Represents different types of training phrases.
     *
     * @enum {number}
     * @memberof google.cloud.dialogflow.v2beta1
     */
    Type: {

      /**
       * Not specified. This value should never be used.
       */
      TYPE_UNSPECIFIED: 0,

      /**
       * Examples do not contain @-prefixed entity type names, but example parts
       * can be annotated with entity types.
       */
      EXAMPLE: 1,

      /**
       * Templates are not annotated with entity types, but they can contain
       * @-prefixed entity type names as substrings.
       * Template mode has been deprecated. Example mode is the only supported
       * way to create new training phrases. If you have existing training
       * phrases that you've created in template mode, those will continue to
       * work.
       */
      TEMPLATE: 2
    }
  },

  /**
   * Represents intent parameters.
   *
   * @property {string} name
   *   The unique identifier of this parameter.
   *
   * @property {string} displayName
   *   Required. The name of the parameter.
   *
   * @property {string} value
   *   Optional. The definition of the parameter value. It can be:
   *   - a constant string,
   *   - a parameter value defined as `$parameter_name`,
   *   - an original parameter value defined as `$parameter_name.original`,
   *   - a parameter value from some context defined as
   *     `#context_name.parameter_name`.
   *
   * @property {string} defaultValue
   *   Optional. The default value to use when the `value` yields an empty
   *   result.
   *   Default values can be extracted from contexts by using the following
   *   syntax: `#context_name.parameter_name`.
   *
   * @property {string} entityTypeDisplayName
   *   Optional. The name of the entity type, prefixed with `@`, that
   *   describes values of the parameter. If the parameter is
   *   required, this must be provided.
   *
   * @property {boolean} mandatory
   *   Optional. Indicates whether the parameter is required. That is,
   *   whether the intent cannot be completed without collecting the parameter
   *   value.
   *
   * @property {string[]} prompts
   *   Optional. The collection of prompts that the agent can present to the
   *   user in order to collect a value for the parameter.
   *
   * @property {boolean} isList
   *   Optional. Indicates whether the parameter represents a list of values.
   *
   * @typedef Parameter
   * @memberof google.cloud.dialogflow.v2beta1
   * @see [google.cloud.dialogflow.v2beta1.Intent.Parameter definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/intent.proto}
   */
  Parameter: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  },

  /**
   * Corresponds to the `Response` field in the Dialogflow console.
   *
   * @property {Object} text
   *   Returns a text response.
   *
   *   This object should have the same structure as [Text]{@link google.cloud.dialogflow.v2beta1.Text}
   *
   * @property {Object} image
   *   Displays an image.
   *
   *   This object should have the same structure as [Image]{@link google.cloud.dialogflow.v2beta1.Image}
   *
   * @property {Object} quickReplies
   *   Displays quick replies.
   *
   *   This object should have the same structure as [QuickReplies]{@link google.cloud.dialogflow.v2beta1.QuickReplies}
   *
   * @property {Object} card
   *   Displays a card.
   *
   *   This object should have the same structure as [Card]{@link google.cloud.dialogflow.v2beta1.Card}
   *
   * @property {Object} payload
   *   Returns a response containing a custom, platform-specific payload.
   *   See the Intent.Message.Platform type for a description of the
   *   structure that may be required for your platform.
   *
   *   This object should have the same structure as [Struct]{@link google.protobuf.Struct}
   *
   * @property {Object} simpleResponses
   *   Returns a voice or text-only response for Actions on Google.
   *
   *   This object should have the same structure as [SimpleResponses]{@link google.cloud.dialogflow.v2beta1.SimpleResponses}
   *
   * @property {Object} basicCard
   *   Displays a basic card for Actions on Google.
   *
   *   This object should have the same structure as [BasicCard]{@link google.cloud.dialogflow.v2beta1.BasicCard}
   *
   * @property {Object} suggestions
   *   Displays suggestion chips for Actions on Google.
   *
   *   This object should have the same structure as [Suggestions]{@link google.cloud.dialogflow.v2beta1.Suggestions}
   *
   * @property {Object} linkOutSuggestion
   *   Displays a link out suggestion chip for Actions on Google.
   *
   *   This object should have the same structure as [LinkOutSuggestion]{@link google.cloud.dialogflow.v2beta1.LinkOutSuggestion}
   *
   * @property {Object} listSelect
   *   Displays a list card for Actions on Google.
   *
   *   This object should have the same structure as [ListSelect]{@link google.cloud.dialogflow.v2beta1.ListSelect}
   *
   * @property {Object} carouselSelect
   *   Displays a carousel card for Actions on Google.
   *
   *   This object should have the same structure as [CarouselSelect]{@link google.cloud.dialogflow.v2beta1.CarouselSelect}
   *
   * @property {Object} telephonyPlayAudio
   *   Plays audio from a file in Telephony Gateway.
   *
   *   This object should have the same structure as [TelephonyPlayAudio]{@link google.cloud.dialogflow.v2beta1.TelephonyPlayAudio}
   *
   * @property {Object} telephonySynthesizeSpeech
   *   Synthesizes speech in Telephony Gateway.
   *
   *   This object should have the same structure as [TelephonySynthesizeSpeech]{@link google.cloud.dialogflow.v2beta1.TelephonySynthesizeSpeech}
   *
   * @property {Object} telephonyTransferCall
   *   Transfers the call in Telephony Gateway.
   *
   *   This object should have the same structure as [TelephonyTransferCall]{@link google.cloud.dialogflow.v2beta1.TelephonyTransferCall}
   *
   * @property {Object} rbmText
   *   Rich Business Messaging (RBM) text response.
   *
   *   RBM allows businesses to send enriched and branded versions of SMS. See
   *   https://jibe.google.com/business-messaging.
   *
   *   This object should have the same structure as [RbmText]{@link google.cloud.dialogflow.v2beta1.RbmText}
   *
   * @property {Object} rbmStandaloneRichCard
   *   Standalone Rich Business Messaging (RBM) rich card response.
   *
   *   This object should have the same structure as [RbmStandaloneCard]{@link google.cloud.dialogflow.v2beta1.RbmStandaloneCard}
   *
   * @property {Object} rbmCarouselRichCard
   *   Rich Business Messaging (RBM) carousel rich card response.
   *
   *   This object should have the same structure as [RbmCarouselCard]{@link google.cloud.dialogflow.v2beta1.RbmCarouselCard}
   *
   * @property {Object} browseCarouselCard
   *   Browse carousel card for Actions on Google.
   *
   *   This object should have the same structure as [BrowseCarouselCard]{@link google.cloud.dialogflow.v2beta1.BrowseCarouselCard}
   *
   * @property {Object} tableCard
   *   Table card for Actions on Google.
   *
   *   This object should have the same structure as [TableCard]{@link google.cloud.dialogflow.v2beta1.TableCard}
   *
   * @property {Object} mediaContent
   *   The media content card for Actions on Google.
   *
   *   This object should have the same structure as [MediaContent]{@link google.cloud.dialogflow.v2beta1.MediaContent}
   *
   * @property {number} platform
   *   Optional. The platform that this message is intended for.
   *
   *   The number should be among the values of [Platform]{@link google.cloud.dialogflow.v2beta1.Platform}
   *
   * @typedef Message
   * @memberof google.cloud.dialogflow.v2beta1
   * @see [google.cloud.dialogflow.v2beta1.Intent.Message definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/intent.proto}
   */
  Message: {
    // This is for documentation. Actual contents will be loaded by gRPC.

    /**
     * The text response message.
     *
     * @property {string[]} text
     *   Optional. The collection of the agent's responses.
     *
     * @typedef Text
     * @memberof google.cloud.dialogflow.v2beta1
     * @see [google.cloud.dialogflow.v2beta1.Intent.Message.Text definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/intent.proto}
     */
    Text: {
      // This is for documentation. Actual contents will be loaded by gRPC.
    },

    /**
     * The image response message.
     *
     * @property {string} imageUri
     *   Optional. The public URI to an image file.
     *
     * @property {string} accessibilityText
     *   A text description of the image to be used for accessibility,
     *   e.g., screen readers. Required if image_uri is set for CarouselSelect.
     *
     * @typedef Image
     * @memberof google.cloud.dialogflow.v2beta1
     * @see [google.cloud.dialogflow.v2beta1.Intent.Message.Image definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/intent.proto}
     */
    Image: {
      // This is for documentation. Actual contents will be loaded by gRPC.
    },

    /**
     * The quick replies response message.
     *
     * @property {string} title
     *   Optional. The title of the collection of quick replies.
     *
     * @property {string[]} quickReplies
     *   Optional. The collection of quick replies.
     *
     * @typedef QuickReplies
     * @memberof google.cloud.dialogflow.v2beta1
     * @see [google.cloud.dialogflow.v2beta1.Intent.Message.QuickReplies definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/intent.proto}
     */
    QuickReplies: {
      // This is for documentation. Actual contents will be loaded by gRPC.
    },

    /**
     * The card response message.
     *
     * @property {string} title
     *   Optional. The title of the card.
     *
     * @property {string} subtitle
     *   Optional. The subtitle of the card.
     *
     * @property {string} imageUri
     *   Optional. The public URI to an image file for the card.
     *
     * @property {Object[]} buttons
     *   Optional. The collection of card buttons.
     *
     *   This object should have the same structure as [Button]{@link google.cloud.dialogflow.v2beta1.Button}
     *
     * @typedef Card
     * @memberof google.cloud.dialogflow.v2beta1
     * @see [google.cloud.dialogflow.v2beta1.Intent.Message.Card definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/intent.proto}
     */
    Card: {
      // This is for documentation. Actual contents will be loaded by gRPC.

      /**
       * Optional. Contains information about a button.
       *
       * @property {string} text
       *   Optional. The text to show on the button.
       *
       * @property {string} postback
       *   Optional. The text to send back to the Dialogflow API or a URI to
       *   open.
       *
       * @typedef Button
       * @memberof google.cloud.dialogflow.v2beta1
       * @see [google.cloud.dialogflow.v2beta1.Intent.Message.Card.Button definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/intent.proto}
       */
      Button: {
        // This is for documentation. Actual contents will be loaded by gRPC.
      }
    },

    /**
     * The simple response message containing speech or text.
     *
     * @property {string} textToSpeech
     *   One of text_to_speech or ssml must be provided. The plain text of the
     *   speech output. Mutually exclusive with ssml.
     *
     * @property {string} ssml
     *   One of text_to_speech or ssml must be provided. Structured spoken
     *   response to the user in the SSML format. Mutually exclusive with
     *   text_to_speech.
     *
     * @property {string} displayText
     *   Optional. The text to display.
     *
     * @typedef SimpleResponse
     * @memberof google.cloud.dialogflow.v2beta1
     * @see [google.cloud.dialogflow.v2beta1.Intent.Message.SimpleResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/intent.proto}
     */
    SimpleResponse: {
      // This is for documentation. Actual contents will be loaded by gRPC.
    },

    /**
     * The collection of simple response candidates.
     * This message in `QueryResult.fulfillment_messages` and
     * `WebhookResponse.fulfillment_messages` should contain only one
     * `SimpleResponse`.
     *
     * @property {Object[]} simpleResponses
     *   Required. The list of simple responses.
     *
     *   This object should have the same structure as [SimpleResponse]{@link google.cloud.dialogflow.v2beta1.SimpleResponse}
     *
     * @typedef SimpleResponses
     * @memberof google.cloud.dialogflow.v2beta1
     * @see [google.cloud.dialogflow.v2beta1.Intent.Message.SimpleResponses definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/intent.proto}
     */
    SimpleResponses: {
      // This is for documentation. Actual contents will be loaded by gRPC.
    },

    /**
     * The basic card message. Useful for displaying information.
     *
     * @property {string} title
     *   Optional. The title of the card.
     *
     * @property {string} subtitle
     *   Optional. The subtitle of the card.
     *
     * @property {string} formattedText
     *   Required, unless image is present. The body text of the card.
     *
     * @property {Object} image
     *   Optional. The image for the card.
     *
     *   This object should have the same structure as [Image]{@link google.cloud.dialogflow.v2beta1.Image}
     *
     * @property {Object[]} buttons
     *   Optional. The collection of card buttons.
     *
     *   This object should have the same structure as [Button]{@link google.cloud.dialogflow.v2beta1.Button}
     *
     * @typedef BasicCard
     * @memberof google.cloud.dialogflow.v2beta1
     * @see [google.cloud.dialogflow.v2beta1.Intent.Message.BasicCard definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/intent.proto}
     */
    BasicCard: {
      // This is for documentation. Actual contents will be loaded by gRPC.

      /**
       * The button object that appears at the bottom of a card.
       *
       * @property {string} title
       *   Required. The title of the button.
       *
       * @property {Object} openUriAction
       *   Required. Action to take when a user taps on the button.
       *
       *   This object should have the same structure as [OpenUriAction]{@link google.cloud.dialogflow.v2beta1.OpenUriAction}
       *
       * @typedef Button
       * @memberof google.cloud.dialogflow.v2beta1
       * @see [google.cloud.dialogflow.v2beta1.Intent.Message.BasicCard.Button definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/intent.proto}
       */
      Button: {
        // This is for documentation. Actual contents will be loaded by gRPC.

        /**
         * Opens the given URI.
         *
         * @property {string} uri
         *   Required. The HTTP or HTTPS scheme URI.
         *
         * @typedef OpenUriAction
         * @memberof google.cloud.dialogflow.v2beta1
         * @see [google.cloud.dialogflow.v2beta1.Intent.Message.BasicCard.Button.OpenUriAction definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/intent.proto}
         */
        OpenUriAction: {
          // This is for documentation. Actual contents will be loaded by gRPC.
        }
      }
    },

    /**
     * The suggestion chip message that the user can tap to quickly post a reply
     * to the conversation.
     *
     * @property {string} title
     *   Required. The text shown the in the suggestion chip.
     *
     * @typedef Suggestion
     * @memberof google.cloud.dialogflow.v2beta1
     * @see [google.cloud.dialogflow.v2beta1.Intent.Message.Suggestion definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/intent.proto}
     */
    Suggestion: {
      // This is for documentation. Actual contents will be loaded by gRPC.
    },

    /**
     * The collection of suggestions.
     *
     * @property {Object[]} suggestions
     *   Required. The list of suggested replies.
     *
     *   This object should have the same structure as [Suggestion]{@link google.cloud.dialogflow.v2beta1.Suggestion}
     *
     * @typedef Suggestions
     * @memberof google.cloud.dialogflow.v2beta1
     * @see [google.cloud.dialogflow.v2beta1.Intent.Message.Suggestions definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/intent.proto}
     */
    Suggestions: {
      // This is for documentation. Actual contents will be loaded by gRPC.
    },

    /**
     * The suggestion chip message that allows the user to jump out to the app
     * or website associated with this agent.
     *
     * @property {string} destinationName
     *   Required. The name of the app or site this chip is linking to.
     *
     * @property {string} uri
     *   Required. The URI of the app or site to open when the user taps the
     *   suggestion chip.
     *
     * @typedef LinkOutSuggestion
     * @memberof google.cloud.dialogflow.v2beta1
     * @see [google.cloud.dialogflow.v2beta1.Intent.Message.LinkOutSuggestion definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/intent.proto}
     */
    LinkOutSuggestion: {
      // This is for documentation. Actual contents will be loaded by gRPC.
    },

    /**
     * The card for presenting a list of options to select from.
     *
     * @property {string} title
     *   Optional. The overall title of the list.
     *
     * @property {Object[]} items
     *   Required. List items.
     *
     *   This object should have the same structure as [Item]{@link google.cloud.dialogflow.v2beta1.Item}
     *
     * @property {string} subtitle
     *   Optional. Subtitle of the list.
     *
     * @typedef ListSelect
     * @memberof google.cloud.dialogflow.v2beta1
     * @see [google.cloud.dialogflow.v2beta1.Intent.Message.ListSelect definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/intent.proto}
     */
    ListSelect: {
      // This is for documentation. Actual contents will be loaded by gRPC.

      /**
       * An item in the list.
       *
       * @property {Object} info
       *   Required. Additional information about this option.
       *
       *   This object should have the same structure as [SelectItemInfo]{@link google.cloud.dialogflow.v2beta1.SelectItemInfo}
       *
       * @property {string} title
       *   Required. The title of the list item.
       *
       * @property {string} description
       *   Optional. The main text describing the item.
       *
       * @property {Object} image
       *   Optional. The image to display.
       *
       *   This object should have the same structure as [Image]{@link google.cloud.dialogflow.v2beta1.Image}
       *
       * @typedef Item
       * @memberof google.cloud.dialogflow.v2beta1
       * @see [google.cloud.dialogflow.v2beta1.Intent.Message.ListSelect.Item definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/intent.proto}
       */
      Item: {
        // This is for documentation. Actual contents will be loaded by gRPC.
      }
    },

    /**
     * The card for presenting a carousel of options to select from.
     *
     * @property {Object[]} items
     *   Required. Carousel items.
     *
     *   This object should have the same structure as [Item]{@link google.cloud.dialogflow.v2beta1.Item}
     *
     * @typedef CarouselSelect
     * @memberof google.cloud.dialogflow.v2beta1
     * @see [google.cloud.dialogflow.v2beta1.Intent.Message.CarouselSelect definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/intent.proto}
     */
    CarouselSelect: {
      // This is for documentation. Actual contents will be loaded by gRPC.

      /**
       * An item in the carousel.
       *
       * @property {Object} info
       *   Required. Additional info about the option item.
       *
       *   This object should have the same structure as [SelectItemInfo]{@link google.cloud.dialogflow.v2beta1.SelectItemInfo}
       *
       * @property {string} title
       *   Required. Title of the carousel item.
       *
       * @property {string} description
       *   Optional. The body text of the card.
       *
       * @property {Object} image
       *   Optional. The image to display.
       *
       *   This object should have the same structure as [Image]{@link google.cloud.dialogflow.v2beta1.Image}
       *
       * @typedef Item
       * @memberof google.cloud.dialogflow.v2beta1
       * @see [google.cloud.dialogflow.v2beta1.Intent.Message.CarouselSelect.Item definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/intent.proto}
       */
      Item: {
        // This is for documentation. Actual contents will be loaded by gRPC.
      }
    },

    /**
     * Additional info about the select item for when it is triggered in a
     * dialog.
     *
     * @property {string} key
     *   Required. A unique key that will be sent back to the agent if this
     *   response is given.
     *
     * @property {string[]} synonyms
     *   Optional. A list of synonyms that can also be used to trigger this
     *   item in dialog.
     *
     * @typedef SelectItemInfo
     * @memberof google.cloud.dialogflow.v2beta1
     * @see [google.cloud.dialogflow.v2beta1.Intent.Message.SelectItemInfo definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/intent.proto}
     */
    SelectItemInfo: {
      // This is for documentation. Actual contents will be loaded by gRPC.
    },

    /**
     * Plays audio from a file in Telephony Gateway.
     *
     * @property {string} audioUri
     *   Required. URI to a Google Cloud Storage object containing the audio to
     *   play, e.g., "gs://bucket/object". The object must contain a single
     *   channel (mono) of linear PCM audio (2 bytes / sample) at 8kHz.
     *
     *   This object must be readable by the `service-<Project
     *   Number>@gcp-sa-dialogflow.iam.gserviceaccount.com` service account
     *   where <Project Number> is the number of the Telephony Gateway project
     *   (usually the same as the Dialogflow agent project). If the Google Cloud
     *   Storage bucket is in the Telephony Gateway project, this permission is
     *   added by default when enabling the Dialogflow V2 API.
     *
     *   For audio from other sources, consider using the
     *   `TelephonySynthesizeSpeech` message with SSML.
     *
     * @typedef TelephonyPlayAudio
     * @memberof google.cloud.dialogflow.v2beta1
     * @see [google.cloud.dialogflow.v2beta1.Intent.Message.TelephonyPlayAudio definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/intent.proto}
     */
    TelephonyPlayAudio: {
      // This is for documentation. Actual contents will be loaded by gRPC.
    },

    /**
     * Synthesizes speech and plays back the synthesized audio to the caller in
     * Telephony Gateway.
     *
     * Telephony Gateway takes the synthesizer settings from
     * `DetectIntentResponse.output_audio_config` which can either be set
     * at request-level or can come from the agent-level synthesizer config.
     *
     * @property {string} text
     *   The raw text to be synthesized.
     *
     * @property {string} ssml
     *   The SSML to be synthesized. For more information, see
     *   [SSML](https://developers.google.com/actions/reference/ssml).
     *
     * @typedef TelephonySynthesizeSpeech
     * @memberof google.cloud.dialogflow.v2beta1
     * @see [google.cloud.dialogflow.v2beta1.Intent.Message.TelephonySynthesizeSpeech definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/intent.proto}
     */
    TelephonySynthesizeSpeech: {
      // This is for documentation. Actual contents will be loaded by gRPC.
    },

    /**
     * Transfers the call in Telephony Gateway.
     *
     * @property {string} phoneNumber
     *   Required. The phone number to transfer the call to
     *   in [E.164 format](https://en.wikipedia.org/wiki/E.164).
     *
     *   We currently only allow transferring to US numbers (+1xxxyyyzzzz).
     *
     * @typedef TelephonyTransferCall
     * @memberof google.cloud.dialogflow.v2beta1
     * @see [google.cloud.dialogflow.v2beta1.Intent.Message.TelephonyTransferCall definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/intent.proto}
     */
    TelephonyTransferCall: {
      // This is for documentation. Actual contents will be loaded by gRPC.
    },

    /**
     * Rich Business Messaging (RBM) text response with suggestions.
     *
     * @property {string} text
     *   Required. Text sent and displayed to the user.
     *
     * @property {Object[]} rbmSuggestion
     *   Optional. One or more suggestions to show to the user.
     *
     *   This object should have the same structure as [RbmSuggestion]{@link google.cloud.dialogflow.v2beta1.RbmSuggestion}
     *
     * @typedef RbmText
     * @memberof google.cloud.dialogflow.v2beta1
     * @see [google.cloud.dialogflow.v2beta1.Intent.Message.RbmText definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/intent.proto}
     */
    RbmText: {
      // This is for documentation. Actual contents will be loaded by gRPC.
    },

    /**
     * Carousel Rich Business Messaging (RBM) rich card.
     *
     * Rich cards allow you to respond to users with more vivid content, e.g.
     * with media and suggestions.
     *
     * For more details about RBM rich cards, please see:
     * https://developers.google.com/rcs-business-messaging/rbm/guides/build/send-messages#rich-cards.
     * If you want to show a single card with more control over the layout,
     * please use RbmStandaloneCard instead.
     *
     * @property {number} cardWidth
     *   Required. The width of the cards in the carousel.
     *
     *   The number should be among the values of [CardWidth]{@link google.cloud.dialogflow.v2beta1.CardWidth}
     *
     * @property {Object[]} cardContents
     *   Required. The cards in the carousel. A carousel must have at least
     *   2 cards and at most 10.
     *
     *   This object should have the same structure as [RbmCardContent]{@link google.cloud.dialogflow.v2beta1.RbmCardContent}
     *
     * @typedef RbmCarouselCard
     * @memberof google.cloud.dialogflow.v2beta1
     * @see [google.cloud.dialogflow.v2beta1.Intent.Message.RbmCarouselCard definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/intent.proto}
     */
    RbmCarouselCard: {
      // This is for documentation. Actual contents will be loaded by gRPC.

      /**
       * The width of the cards in the carousel.
       *
       * @enum {number}
       * @memberof google.cloud.dialogflow.v2beta1
       */
      CardWidth: {

        /**
         * Not specified.
         */
        CARD_WIDTH_UNSPECIFIED: 0,

        /**
         * 120 DP. Note that tall media cannot be used.
         */
        SMALL: 1,

        /**
         * 232 DP.
         */
        MEDIUM: 2
      }
    },

    /**
     * Standalone Rich Business Messaging (RBM) rich card.
     *
     * Rich cards allow you to respond to users with more vivid content, e.g.
     * with media and suggestions.
     *
     * For more details about RBM rich cards, please see:
     * https://developers.google.com/rcs-business-messaging/rbm/guides/build/send-messages#rich-cards.
     * You can group multiple rich cards into one using RbmCarouselCard but
     * carousel cards will give you less control over the card layout.
     *
     * @property {number} cardOrientation
     *   Required. Orientation of the card.
     *
     *   The number should be among the values of [CardOrientation]{@link google.cloud.dialogflow.v2beta1.CardOrientation}
     *
     * @property {number} thumbnailImageAlignment
     *   Required if orientation is horizontal.
     *   Image preview alignment for standalone cards with horizontal layout.
     *
     *   The number should be among the values of [ThumbnailImageAlignment]{@link google.cloud.dialogflow.v2beta1.ThumbnailImageAlignment}
     *
     * @property {Object} cardContent
     *   Required. Card content.
     *
     *   This object should have the same structure as [RbmCardContent]{@link google.cloud.dialogflow.v2beta1.RbmCardContent}
     *
     * @typedef RbmStandaloneCard
     * @memberof google.cloud.dialogflow.v2beta1
     * @see [google.cloud.dialogflow.v2beta1.Intent.Message.RbmStandaloneCard definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/intent.proto}
     */
    RbmStandaloneCard: {
      // This is for documentation. Actual contents will be loaded by gRPC.

      /**
       * Orientation of the card.
       *
       * @enum {number}
       * @memberof google.cloud.dialogflow.v2beta1
       */
      CardOrientation: {

        /**
         * Not specified.
         */
        CARD_ORIENTATION_UNSPECIFIED: 0,

        /**
         * Horizontal layout.
         */
        HORIZONTAL: 1,

        /**
         * Vertical layout.
         */
        VERTICAL: 2
      },

      /**
       * Thumbnail preview alignment for standalone cards with horizontal
       * layout.
       *
       * @enum {number}
       * @memberof google.cloud.dialogflow.v2beta1
       */
      ThumbnailImageAlignment: {

        /**
         * Not specified.
         */
        THUMBNAIL_IMAGE_ALIGNMENT_UNSPECIFIED: 0,

        /**
         * Thumbnail preview is left-aligned.
         */
        LEFT: 1,

        /**
         * Thumbnail preview is right-aligned.
         */
        RIGHT: 2
      }
    },

    /**
     * Rich Business Messaging (RBM) Card content
     *
     * @property {string} title
     *   Optional. Title of the card (at most 200 bytes).
     *
     *   At least one of the title, description or media must be set.
     *
     * @property {string} description
     *   Optional. Description of the card (at most 2000 bytes).
     *
     *   At least one of the title, description or media must be set.
     *
     * @property {Object} media
     *   Optional. However at least one of the title, description or media must
     *   be set. Media (image, GIF or a video) to include in the card.
     *
     *   This object should have the same structure as [RbmMedia]{@link google.cloud.dialogflow.v2beta1.RbmMedia}
     *
     * @property {Object[]} suggestions
     *   Optional. List of suggestions to include in the card.
     *
     *   This object should have the same structure as [RbmSuggestion]{@link google.cloud.dialogflow.v2beta1.RbmSuggestion}
     *
     * @typedef RbmCardContent
     * @memberof google.cloud.dialogflow.v2beta1
     * @see [google.cloud.dialogflow.v2beta1.Intent.Message.RbmCardContent definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/intent.proto}
     */
    RbmCardContent: {
      // This is for documentation. Actual contents will be loaded by gRPC.

      /**
       * Rich Business Messaging (RBM) Media displayed in Cards
       * The following media-types are currently supported:
       *
       * ## Image Types
       *
       *  image/jpeg
       *  image/jpg'
       *  image/gif
       *  image/png
       *
       * ## Video Types
       *
       *  video/h263
       *  video/m4v
       *  video/mp4
       *  video/mpeg
       *  video/mpeg4
       *  video/webm
       *
       * @property {string} fileUri
       *   Required. Publicly reachable URI of the file. The RBM platform
       *   determines the MIME type of the file from the content-type field in
       *   the HTTP headers when the platform fetches the file. The content-type
       *   field must be present and accurate in the HTTP response from the URL.
       *
       * @property {string} thumbnailUri
       *   Optional. Publicly reachable URI of the thumbnail.If you don't
       *   provide a thumbnail URI, the RBM platform displays a blank
       *   placeholder thumbnail until the user's device downloads the file.
       *   Depending on the user's setting, the file may not download
       *   automatically and may require the user to tap a download button.
       *
       * @property {number} height
       *   Required for cards with vertical orientation. The height of the media
       *   within a rich card with a vertical layout. (https://goo.gl/NeFCjz).
       *   For a standalone card with horizontal layout, height is not
       *   customizable, and this field is ignored.
       *
       *   The number should be among the values of [Height]{@link google.cloud.dialogflow.v2beta1.Height}
       *
       * @typedef RbmMedia
       * @memberof google.cloud.dialogflow.v2beta1
       * @see [google.cloud.dialogflow.v2beta1.Intent.Message.RbmCardContent.RbmMedia definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/intent.proto}
       */
      RbmMedia: {
        // This is for documentation. Actual contents will be loaded by gRPC.

        /**
         * Media height
         *
         * @enum {number}
         * @memberof google.cloud.dialogflow.v2beta1
         */
        Height: {

          /**
           * Not specified.
           */
          HEIGHT_UNSPECIFIED: 0,

          /**
           * 112 DP.
           */
          SHORT: 1,

          /**
           * 168 DP.
           */
          MEDIUM: 2,

          /**
           * 264 DP. Not available for rich card carousels when the card width
           * is set to small.
           */
          TALL: 3
        }
      }
    },

    /**
     * Rich Business Messaging (RBM) suggestion. Suggestions allow user to
     * easily select/click a predefined response or perform an action (like
     * opening a web uri).
     *
     * @property {Object} reply
     *   Predefined replies for user to select instead of typing
     *
     *   This object should have the same structure as [RbmSuggestedReply]{@link google.cloud.dialogflow.v2beta1.RbmSuggestedReply}
     *
     * @property {Object} action
     *   Predefined client side actions that user can choose
     *
     *   This object should have the same structure as [RbmSuggestedAction]{@link google.cloud.dialogflow.v2beta1.RbmSuggestedAction}
     *
     * @typedef RbmSuggestion
     * @memberof google.cloud.dialogflow.v2beta1
     * @see [google.cloud.dialogflow.v2beta1.Intent.Message.RbmSuggestion definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/intent.proto}
     */
    RbmSuggestion: {
      // This is for documentation. Actual contents will be loaded by gRPC.
    },

    /**
     * Rich Business Messaging (RBM) suggested reply that the user can click
     * instead of typing in their own response.
     *
     * @property {string} text
     *   Suggested reply text.
     *
     * @property {string} postbackData
     *   Opaque payload that the Dialogflow receives in a user event
     *   when the user taps the suggested reply. This data will be also
     *   forwarded to webhook to allow performing custom business logic.
     *
     * @typedef RbmSuggestedReply
     * @memberof google.cloud.dialogflow.v2beta1
     * @see [google.cloud.dialogflow.v2beta1.Intent.Message.RbmSuggestedReply definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/intent.proto}
     */
    RbmSuggestedReply: {
      // This is for documentation. Actual contents will be loaded by gRPC.
    },

    /**
     * Rich Business Messaging (RBM) suggested client-side action that the user
     * can choose from the card.
     *
     * @property {string} text
     *   Text to display alongside the action.
     *
     * @property {string} postbackData
     *   Opaque payload that the Dialogflow receives in a user event
     *   when the user taps the suggested action. This data will be also
     *   forwarded to webhook to allow performing custom business logic.
     *
     * @property {Object} dial
     *   Suggested client side action: Dial a phone number
     *
     *   This object should have the same structure as [RbmSuggestedActionDial]{@link google.cloud.dialogflow.v2beta1.RbmSuggestedActionDial}
     *
     * @property {Object} openUrl
     *   Suggested client side action: Open a URI on device
     *
     *   This object should have the same structure as [RbmSuggestedActionOpenUri]{@link google.cloud.dialogflow.v2beta1.RbmSuggestedActionOpenUri}
     *
     * @property {Object} shareLocation
     *   Suggested client side action: Share user location
     *
     *   This object should have the same structure as [RbmSuggestedActionShareLocation]{@link google.cloud.dialogflow.v2beta1.RbmSuggestedActionShareLocation}
     *
     * @typedef RbmSuggestedAction
     * @memberof google.cloud.dialogflow.v2beta1
     * @see [google.cloud.dialogflow.v2beta1.Intent.Message.RbmSuggestedAction definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/intent.proto}
     */
    RbmSuggestedAction: {
      // This is for documentation. Actual contents will be loaded by gRPC.

      /**
       * Opens the user's default dialer app with the specified phone number
       * but does not dial automatically (https://goo.gl/ergbB2).
       *
       * @property {string} phoneNumber
       *   Required. The phone number to fill in the default dialer app.
       *   This field should be in [E.164](https://en.wikipedia.org/wiki/E.164)
       *   format. An example of a correctly formatted phone number:
       *   +15556767888.
       *
       * @typedef RbmSuggestedActionDial
       * @memberof google.cloud.dialogflow.v2beta1
       * @see [google.cloud.dialogflow.v2beta1.Intent.Message.RbmSuggestedAction.RbmSuggestedActionDial definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/intent.proto}
       */
      RbmSuggestedActionDial: {
        // This is for documentation. Actual contents will be loaded by gRPC.
      },

      /**
       * Opens the user's default web browser app to the specified uri
       * (https://goo.gl/6GLJD2). If the user has an app installed that is
       * registered as the default handler for the URL, then this app will be
       * opened instead, and its icon will be used in the suggested action UI.
       *
       * @property {string} uri
       *   Required. The uri to open on the user device
       *
       * @typedef RbmSuggestedActionOpenUri
       * @memberof google.cloud.dialogflow.v2beta1
       * @see [google.cloud.dialogflow.v2beta1.Intent.Message.RbmSuggestedAction.RbmSuggestedActionOpenUri definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/intent.proto}
       */
      RbmSuggestedActionOpenUri: {
        // This is for documentation. Actual contents will be loaded by gRPC.
      },

      /**
       * Opens the device's location chooser so the user can pick a location
       * to send back to the agent (https://goo.gl/GXotJW).
       * @typedef RbmSuggestedActionShareLocation
       * @memberof google.cloud.dialogflow.v2beta1
       * @see [google.cloud.dialogflow.v2beta1.Intent.Message.RbmSuggestedAction.RbmSuggestedActionShareLocation definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/intent.proto}
       */
      RbmSuggestedActionShareLocation: {
        // This is for documentation. Actual contents will be loaded by gRPC.
      }
    },

    /**
     * The media content card for Actions on Google.
     *
     * @property {number} mediaType
     *   Optional. What type of media is the content (ie "audio").
     *
     *   The number should be among the values of [ResponseMediaType]{@link google.cloud.dialogflow.v2beta1.ResponseMediaType}
     *
     * @property {Object[]} mediaObjects
     *   Required. List of media objects.
     *
     *   This object should have the same structure as [ResponseMediaObject]{@link google.cloud.dialogflow.v2beta1.ResponseMediaObject}
     *
     * @typedef MediaContent
     * @memberof google.cloud.dialogflow.v2beta1
     * @see [google.cloud.dialogflow.v2beta1.Intent.Message.MediaContent definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/intent.proto}
     */
    MediaContent: {
      // This is for documentation. Actual contents will be loaded by gRPC.

      /**
       * Response media object for media content card.
       *
       * @property {string} name
       *   Required. Name of media card.
       *
       * @property {string} description
       *   Optional. Description of media card.
       *
       * @property {Object} largeImage
       *   Optional. Image to display above media content.
       *
       *   This object should have the same structure as [Image]{@link google.cloud.dialogflow.v2beta1.Image}
       *
       * @property {Object} icon
       *   Optional. Icon to display above media content.
       *
       *   This object should have the same structure as [Image]{@link google.cloud.dialogflow.v2beta1.Image}
       *
       * @property {string} contentUrl
       *   Required. Url where the media is stored.
       *
       * @typedef ResponseMediaObject
       * @memberof google.cloud.dialogflow.v2beta1
       * @see [google.cloud.dialogflow.v2beta1.Intent.Message.MediaContent.ResponseMediaObject definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/intent.proto}
       */
      ResponseMediaObject: {
        // This is for documentation. Actual contents will be loaded by gRPC.
      },

      /**
       * Format of response media type.
       *
       * @enum {number}
       * @memberof google.cloud.dialogflow.v2beta1
       */
      ResponseMediaType: {

        /**
         * Unspecified.
         */
        RESPONSE_MEDIA_TYPE_UNSPECIFIED: 0,

        /**
         * Response media type is audio.
         */
        AUDIO: 1
      }
    },

    /**
     * Browse Carousel Card for Actions on Google.
     * https://developers.google.com/actions/assistant/responses#browsing_carousel
     *
     * @property {Object[]} items
     *   Required. List of items in the Browse Carousel Card. Minimum of two
     *   items, maximum of ten.
     *
     *   This object should have the same structure as [BrowseCarouselCardItem]{@link google.cloud.dialogflow.v2beta1.BrowseCarouselCardItem}
     *
     * @property {number} imageDisplayOptions
     *   Optional. Settings for displaying the image. Applies to every image in
     *   items.
     *
     *   The number should be among the values of [ImageDisplayOptions]{@link google.cloud.dialogflow.v2beta1.ImageDisplayOptions}
     *
     * @typedef BrowseCarouselCard
     * @memberof google.cloud.dialogflow.v2beta1
     * @see [google.cloud.dialogflow.v2beta1.Intent.Message.BrowseCarouselCard definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/intent.proto}
     */
    BrowseCarouselCard: {
      // This is for documentation. Actual contents will be loaded by gRPC.

      /**
       * Browsing carousel tile
       *
       * @property {Object} openUriAction
       *   Required. Action to present to the user.
       *
       *   This object should have the same structure as [OpenUrlAction]{@link google.cloud.dialogflow.v2beta1.OpenUrlAction}
       *
       * @property {string} title
       *   Required. Title of the carousel item. Maximum of two lines of text.
       *
       * @property {string} description
       *   Optional. Description of the carousel item. Maximum of four lines of
       *   text.
       *
       * @property {Object} image
       *   Optional. Hero image for the carousel item.
       *
       *   This object should have the same structure as [Image]{@link google.cloud.dialogflow.v2beta1.Image}
       *
       * @property {string} footer
       *   Optional. Text that appears at the bottom of the Browse Carousel
       *   Card. Maximum of one line of text.
       *
       * @typedef BrowseCarouselCardItem
       * @memberof google.cloud.dialogflow.v2beta1
       * @see [google.cloud.dialogflow.v2beta1.Intent.Message.BrowseCarouselCard.BrowseCarouselCardItem definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/intent.proto}
       */
      BrowseCarouselCardItem: {
        // This is for documentation. Actual contents will be loaded by gRPC.

        /**
         * Actions on Google action to open a given url.
         *
         * @property {string} url
         *   Required. URL
         *
         * @property {number} urlTypeHint
         *   Optional. Specifies the type of viewer that is used when opening
         *   the URL. Defaults to opening via web browser.
         *
         *   The number should be among the values of [UrlTypeHint]{@link google.cloud.dialogflow.v2beta1.UrlTypeHint}
         *
         * @typedef OpenUrlAction
         * @memberof google.cloud.dialogflow.v2beta1
         * @see [google.cloud.dialogflow.v2beta1.Intent.Message.BrowseCarouselCard.BrowseCarouselCardItem.OpenUrlAction definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/intent.proto}
         */
        OpenUrlAction: {
          // This is for documentation. Actual contents will be loaded by gRPC.

          /**
           * Type of the URI.
           *
           * @enum {number}
           * @memberof google.cloud.dialogflow.v2beta1
           */
          UrlTypeHint: {

            /**
             * Unspecified
             */
            URL_TYPE_HINT_UNSPECIFIED: 0,

            /**
             * Url would be an amp action
             */
            AMP_ACTION: 1,

            /**
             * URL that points directly to AMP content, or to a canonical URL
             * which refers to AMP content via <link rel="amphtml">.
             */
            AMP_CONTENT: 2
          }
        }
      },

      /**
       * Image display options for Actions on Google. This should be used for
       * when the image's aspect ratio does not match the image container's
       * aspect ratio.
       *
       * @enum {number}
       * @memberof google.cloud.dialogflow.v2beta1
       */
      ImageDisplayOptions: {

        /**
         * Fill the gaps between the image and the image container with gray
         * bars.
         */
        IMAGE_DISPLAY_OPTIONS_UNSPECIFIED: 0,

        /**
         * Fill the gaps between the image and the image container with gray
         * bars.
         */
        GRAY: 1,

        /**
         * Fill the gaps between the image and the image container with white
         * bars.
         */
        WHITE: 2,

        /**
         * Image is scaled such that the image width and height match or exceed
         * the container dimensions. This may crop the top and bottom of the
         * image if the scaled image height is greater than the container
         * height, or crop the left and right of the image if the scaled image
         * width is greater than the container width. This is similar to "Zoom
         * Mode" on a widescreen TV when playing a 4:3 video.
         */
        CROPPED: 3,

        /**
         * Pad the gaps between image and image frame with a blurred copy of the
         * same image.
         */
        BLURRED_BACKGROUND: 4
      }
    },

    /**
     * Table card for Actions on Google.
     *
     * @property {string} title
     *   Required. Title of the card.
     *
     * @property {string} subtitle
     *   Optional. Subtitle to the title.
     *
     * @property {Object} image
     *   Optional. Image which should be displayed on the card.
     *
     *   This object should have the same structure as [Image]{@link google.cloud.dialogflow.v2beta1.Image}
     *
     * @property {Object[]} columnProperties
     *   Optional. Display properties for the columns in this table.
     *
     *   This object should have the same structure as [ColumnProperties]{@link google.cloud.dialogflow.v2beta1.ColumnProperties}
     *
     * @property {Object[]} rows
     *   Optional. Rows in this table of data.
     *
     *   This object should have the same structure as [TableCardRow]{@link google.cloud.dialogflow.v2beta1.TableCardRow}
     *
     * @property {Object[]} buttons
     *   Optional. List of buttons for the card.
     *
     *   This object should have the same structure as [Button]{@link google.cloud.dialogflow.v2beta1.Button}
     *
     * @typedef TableCard
     * @memberof google.cloud.dialogflow.v2beta1
     * @see [google.cloud.dialogflow.v2beta1.Intent.Message.TableCard definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/intent.proto}
     */
    TableCard: {
      // This is for documentation. Actual contents will be loaded by gRPC.
    },

    /**
     * Column properties for TableCard.
     *
     * @property {string} header
     *   Required. Column heading.
     *
     * @property {number} horizontalAlignment
     *   Optional. Defines text alignment for all cells in this column.
     *
     *   The number should be among the values of [HorizontalAlignment]{@link google.cloud.dialogflow.v2beta1.HorizontalAlignment}
     *
     * @typedef ColumnProperties
     * @memberof google.cloud.dialogflow.v2beta1
     * @see [google.cloud.dialogflow.v2beta1.Intent.Message.ColumnProperties definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/intent.proto}
     */
    ColumnProperties: {
      // This is for documentation. Actual contents will be loaded by gRPC.

      /**
       * Text alignments within a cell.
       *
       * @enum {number}
       * @memberof google.cloud.dialogflow.v2beta1
       */
      HorizontalAlignment: {

        /**
         * Text is aligned to the leading edge of the column.
         */
        HORIZONTAL_ALIGNMENT_UNSPECIFIED: 0,

        /**
         * Text is aligned to the leading edge of the column.
         */
        LEADING: 1,

        /**
         * Text is centered in the column.
         */
        CENTER: 2,

        /**
         * Text is aligned to the trailing edge of the column.
         */
        TRAILING: 3
      }
    },

    /**
     * Row of TableCard.
     *
     * @property {Object[]} cells
     *   Optional. List of cells that make up this row.
     *
     *   This object should have the same structure as [TableCardCell]{@link google.cloud.dialogflow.v2beta1.TableCardCell}
     *
     * @property {boolean} dividerAfter
     *   Optional. Whether to add a visual divider after this row.
     *
     * @typedef TableCardRow
     * @memberof google.cloud.dialogflow.v2beta1
     * @see [google.cloud.dialogflow.v2beta1.Intent.Message.TableCardRow definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/intent.proto}
     */
    TableCardRow: {
      // This is for documentation. Actual contents will be loaded by gRPC.
    },

    /**
     * Cell of TableCardRow.
     *
     * @property {string} text
     *   Required. Text in this cell.
     *
     * @typedef TableCardCell
     * @memberof google.cloud.dialogflow.v2beta1
     * @see [google.cloud.dialogflow.v2beta1.Intent.Message.TableCardCell definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/intent.proto}
     */
    TableCardCell: {
      // This is for documentation. Actual contents will be loaded by gRPC.
    },

    /**
     * Represents different platforms that a rich message can be intended for.
     *
     * @enum {number}
     * @memberof google.cloud.dialogflow.v2beta1
     */
    Platform: {

      /**
       * Not specified.
       */
      PLATFORM_UNSPECIFIED: 0,

      /**
       * Facebook.
       */
      FACEBOOK: 1,

      /**
       * Slack.
       */
      SLACK: 2,

      /**
       * Telegram.
       */
      TELEGRAM: 3,

      /**
       * Kik.
       */
      KIK: 4,

      /**
       * Skype.
       */
      SKYPE: 5,

      /**
       * Line.
       */
      LINE: 6,

      /**
       * Viber.
       */
      VIBER: 7,

      /**
       * Actions on Google.
       * When using Actions on Google, you can choose one of the specific
       * Intent.Message types that mention support for Actions on Google,
       * or you can use the advanced Intent.Message.payload field.
       * The payload field provides access to AoG features not available in the
       * specific message types.
       * If using the Intent.Message.payload field, it should have a structure
       * similar to the JSON message shown here. For more information, see
       * [Actions on Google Webhook
       * Format](https://developers.google.com/actions/dialogflow/webhook)
       * <pre>{
       *   "expectUserResponse": true,
       *   "isSsml": false,
       *   "noInputPrompts": [],
       *   "richResponse": {
       *     "items": [
       *       {
       *         "simpleResponse": {
       *           "displayText": "hi",
       *           "textToSpeech": "hello"
       *         }
       *       }
       *     ],
       *     "suggestions": [
       *       {
       *         "title": "Say this"
       *       },
       *       {
       *         "title": "or this"
       *       }
       *     ]
       *   },
       *   "systemIntent": {
       *     "data": {
       *       "@type": "type.googleapis.com/google.actions.v2.OptionValueSpec",
       *       "listSelect": {
       *         "items": [
       *           {
       *             "optionInfo": {
       *               "key": "key1",
       *               "synonyms": [
       *                 "key one"
       *               ]
       *             },
       *             "title": "must not be empty, but unique"
       *           },
       *           {
       *             "optionInfo": {
       *               "key": "key2",
       *               "synonyms": [
       *                 "key two"
       *               ]
       *             },
       *             "title": "must not be empty, but unique"
       *           }
       *         ]
       *       }
       *     },
       *     "intent": "actions.intent.OPTION"
       *   }
       * }</pre>
       */
      ACTIONS_ON_GOOGLE: 8,

      /**
       * Telephony Gateway.
       */
      TELEPHONY: 10,

      /**
       * Google Hangouts.
       */
      GOOGLE_HANGOUTS: 11
    }
  },

  /**
   * Represents a single followup intent in the chain.
   *
   * @property {string} followupIntentName
   *   The unique identifier of the followup intent.
   *   Format: `projects/<Project ID>/agent/intents/<Intent ID>`.
   *
   * @property {string} parentFollowupIntentName
   *   The unique identifier of the followup intent's parent.
   *   Format: `projects/<Project ID>/agent/intents/<Intent ID>`.
   *
   * @typedef FollowupIntentInfo
   * @memberof google.cloud.dialogflow.v2beta1
   * @see [google.cloud.dialogflow.v2beta1.Intent.FollowupIntentInfo definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/intent.proto}
   */
  FollowupIntentInfo: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  },

  /**
   * Represents the different states that webhooks can be in.
   *
   * @enum {number}
   * @memberof google.cloud.dialogflow.v2beta1
   */
  WebhookState: {

    /**
     * Webhook is disabled in the agent and in the intent.
     */
    WEBHOOK_STATE_UNSPECIFIED: 0,

    /**
     * Webhook is enabled in the agent and in the intent.
     */
    WEBHOOK_STATE_ENABLED: 1,

    /**
     * Webhook is enabled in the agent and in the intent. Also, each slot
     * filling prompt is forwarded to the webhook.
     */
    WEBHOOK_STATE_ENABLED_FOR_SLOT_FILLING: 2
  }
};

/**
 * The request message for Intents.ListIntents.
 *
 * @property {string} parent
 *   Required. The agent to list all intents from.
 *   Format: `projects/<Project ID>/agent`.
 *
 * @property {string} languageCode
 *   Optional. The language to list training phrases, parameters and rich
 *   messages for. If not specified, the agent's default language is used.
 *   [Many
 *   languages](https://cloud.google.com/dialogflow/docs/reference/language)
 *   are supported. Note: languages must be enabled in the agent before they can
 *   be used.
 *
 * @property {number} intentView
 *   Optional. The resource view to apply to the returned intent.
 *
 *   The number should be among the values of [IntentView]{@link google.cloud.dialogflow.v2beta1.IntentView}
 *
 * @property {number} pageSize
 *   Optional. The maximum number of items to return in a single page. By
 *   default 100 and at most 1000.
 *
 * @property {string} pageToken
 *   Optional. The next_page_token value returned from a previous list request.
 *
 * @typedef ListIntentsRequest
 * @memberof google.cloud.dialogflow.v2beta1
 * @see [google.cloud.dialogflow.v2beta1.ListIntentsRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/intent.proto}
 */
const ListIntentsRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The response message for Intents.ListIntents.
 *
 * @property {Object[]} intents
 *   The list of agent intents. There will be a maximum number of items
 *   returned based on the page_size field in the request.
 *
 *   This object should have the same structure as [Intent]{@link google.cloud.dialogflow.v2beta1.Intent}
 *
 * @property {string} nextPageToken
 *   Token to retrieve the next page of results, or empty if there are no
 *   more results in the list.
 *
 * @typedef ListIntentsResponse
 * @memberof google.cloud.dialogflow.v2beta1
 * @see [google.cloud.dialogflow.v2beta1.ListIntentsResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/intent.proto}
 */
const ListIntentsResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The request message for Intents.GetIntent.
 *
 * @property {string} name
 *   Required. The name of the intent.
 *   Format: `projects/<Project ID>/agent/intents/<Intent ID>`.
 *
 * @property {string} languageCode
 *   Optional. The language to retrieve training phrases, parameters and rich
 *   messages for. If not specified, the agent's default language is used.
 *   [Many
 *   languages](https://cloud.google.com/dialogflow/docs/reference/language)
 *   are supported. Note: languages must be enabled in the agent before they can
 *   be used.
 *
 * @property {number} intentView
 *   Optional. The resource view to apply to the returned intent.
 *
 *   The number should be among the values of [IntentView]{@link google.cloud.dialogflow.v2beta1.IntentView}
 *
 * @typedef GetIntentRequest
 * @memberof google.cloud.dialogflow.v2beta1
 * @see [google.cloud.dialogflow.v2beta1.GetIntentRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/intent.proto}
 */
const GetIntentRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The request message for Intents.CreateIntent.
 *
 * @property {string} parent
 *   Required. The agent to create a intent for.
 *   Format: `projects/<Project ID>/agent`.
 *
 * @property {Object} intent
 *   Required. The intent to create.
 *
 *   This object should have the same structure as [Intent]{@link google.cloud.dialogflow.v2beta1.Intent}
 *
 * @property {string} languageCode
 *   Optional. The language of training phrases, parameters and rich messages
 *   defined in `intent`. If not specified, the agent's default language is
 *   used. [Many
 *   languages](https://cloud.google.com/dialogflow/docs/reference/language)
 *   are supported. Note: languages must be enabled in the agent before they can
 *   be used.
 *
 * @property {number} intentView
 *   Optional. The resource view to apply to the returned intent.
 *
 *   The number should be among the values of [IntentView]{@link google.cloud.dialogflow.v2beta1.IntentView}
 *
 * @typedef CreateIntentRequest
 * @memberof google.cloud.dialogflow.v2beta1
 * @see [google.cloud.dialogflow.v2beta1.CreateIntentRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/intent.proto}
 */
const CreateIntentRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The request message for Intents.UpdateIntent.
 *
 * @property {Object} intent
 *   Required. The intent to update.
 *
 *   This object should have the same structure as [Intent]{@link google.cloud.dialogflow.v2beta1.Intent}
 *
 * @property {string} languageCode
 *   Optional. The language of training phrases, parameters and rich messages
 *   defined in `intent`. If not specified, the agent's default language is
 *   used. [Many
 *   languages](https://cloud.google.com/dialogflow/docs/reference/language)
 *   are supported. Note: languages must be enabled in the agent before they can
 *   be used.
 *
 * @property {Object} updateMask
 *   Optional. The mask to control which fields get updated.
 *
 *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
 *
 * @property {number} intentView
 *   Optional. The resource view to apply to the returned intent.
 *
 *   The number should be among the values of [IntentView]{@link google.cloud.dialogflow.v2beta1.IntentView}
 *
 * @typedef UpdateIntentRequest
 * @memberof google.cloud.dialogflow.v2beta1
 * @see [google.cloud.dialogflow.v2beta1.UpdateIntentRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/intent.proto}
 */
const UpdateIntentRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The request message for Intents.DeleteIntent.
 *
 * @property {string} name
 *   Required. The name of the intent to delete. If this intent has direct or
 *   indirect followup intents, we also delete them.
 *
 *   Format: `projects/<Project ID>/agent/intents/<Intent ID>`.
 *
 * @typedef DeleteIntentRequest
 * @memberof google.cloud.dialogflow.v2beta1
 * @see [google.cloud.dialogflow.v2beta1.DeleteIntentRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/intent.proto}
 */
const DeleteIntentRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The request message for Intents.BatchUpdateIntents.
 *
 * @property {string} parent
 *   Required. The name of the agent to update or create intents in.
 *   Format: `projects/<Project ID>/agent`.
 *
 * @property {string} intentBatchUri
 *   The URI to a Google Cloud Storage file containing intents to update or
 *   create. The file format can either be a serialized proto (of IntentBatch
 *   type) or JSON object. Note: The URI must start with "gs://".
 *
 * @property {Object} intentBatchInline
 *   The collection of intents to update or create.
 *
 *   This object should have the same structure as [IntentBatch]{@link google.cloud.dialogflow.v2beta1.IntentBatch}
 *
 * @property {string} languageCode
 *   Optional. The language of training phrases, parameters and rich messages
 *   defined in `intents`. If not specified, the agent's default language is
 *   used. [Many
 *   languages](https://cloud.google.com/dialogflow/docs/reference/language)
 *   are supported. Note: languages must be enabled in the agent before they can
 *   be used.
 *
 * @property {Object} updateMask
 *   Optional. The mask to control which fields get updated.
 *
 *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
 *
 * @property {number} intentView
 *   Optional. The resource view to apply to the returned intent.
 *
 *   The number should be among the values of [IntentView]{@link google.cloud.dialogflow.v2beta1.IntentView}
 *
 * @typedef BatchUpdateIntentsRequest
 * @memberof google.cloud.dialogflow.v2beta1
 * @see [google.cloud.dialogflow.v2beta1.BatchUpdateIntentsRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/intent.proto}
 */
const BatchUpdateIntentsRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The response message for Intents.BatchUpdateIntents.
 *
 * @property {Object[]} intents
 *   The collection of updated or created intents.
 *
 *   This object should have the same structure as [Intent]{@link google.cloud.dialogflow.v2beta1.Intent}
 *
 * @typedef BatchUpdateIntentsResponse
 * @memberof google.cloud.dialogflow.v2beta1
 * @see [google.cloud.dialogflow.v2beta1.BatchUpdateIntentsResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/intent.proto}
 */
const BatchUpdateIntentsResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The request message for Intents.BatchDeleteIntents.
 *
 * @property {string} parent
 *   Required. The name of the agent to delete all entities types for. Format:
 *   `projects/<Project ID>/agent`.
 *
 * @property {Object[]} intents
 *   Required. The collection of intents to delete. Only intent `name` must be
 *   filled in.
 *
 *   This object should have the same structure as [Intent]{@link google.cloud.dialogflow.v2beta1.Intent}
 *
 * @typedef BatchDeleteIntentsRequest
 * @memberof google.cloud.dialogflow.v2beta1
 * @see [google.cloud.dialogflow.v2beta1.BatchDeleteIntentsRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/intent.proto}
 */
const BatchDeleteIntentsRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * This message is a wrapper around a collection of intents.
 *
 * @property {Object[]} intents
 *   A collection of intents.
 *
 *   This object should have the same structure as [Intent]{@link google.cloud.dialogflow.v2beta1.Intent}
 *
 * @typedef IntentBatch
 * @memberof google.cloud.dialogflow.v2beta1
 * @see [google.cloud.dialogflow.v2beta1.IntentBatch definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2beta1/intent.proto}
 */
const IntentBatch = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Represents the options for views of an intent.
 * An intent can be a sizable object. Therefore, we provide a resource view that
 * does not return training phrases in the response by default.
 *
 * @enum {number}
 * @memberof google.cloud.dialogflow.v2beta1
 */
const IntentView = {

  /**
   * Training phrases field is not populated in the response.
   */
  INTENT_VIEW_UNSPECIFIED: 0,

  /**
   * All fields are populated.
   */
  INTENT_VIEW_FULL: 1
};