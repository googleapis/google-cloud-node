// Copyright 2018 Google LLC
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
 *   Required for all methods except `create` (`create` populates the name
 *   automatically.
 *   The unique identifier of this intent.
 *   Format: `projects/<Project ID>/agent/intents/<Intent ID>`.
 *
 * @property {string} displayName
 *   Required. The name of this intent.
 *
 * @property {number} webhookState
 *   Required. Indicates whether webhooks are enabled for the intent.
 *
 *   The number should be among the values of [WebhookState]{@link google.cloud.dialogflow.v2beta1.WebhookState}
 *
 * @property {number} priority
 *   Optional. The priority of this intent. Higher numbers represent higher
 *   priorities. Zero or negative numbers mean that the intent is disabled.
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
 *   Optional. The collection of examples/templates that the agent is
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
 *   Optional. The list of platforms for which the first response will be
 *   taken from among the messages assigned to the DEFAULT_PLATFORM.
 *
 *   The number should be among the values of [Platform]{@link google.cloud.dialogflow.v2beta1.Platform}
 *
 * @property {string} rootFollowupIntentName
 *   The unique identifier of the root intent in the chain of followup intents.
 *   It identifies the correct followup intents chain for this intent.
 *   Format: `projects/<Project ID>/agent/intents/<Intent ID>`.
 *
 * @property {string} parentFollowupIntentName
 *   The unique identifier of the parent intent in the chain of followup
 *   intents.
 *   It identifies the parent followup intent.
 *   Format: `projects/<Project ID>/agent/intents/<Intent ID>`.
 *
 * @property {Object[]} followupIntentInfo
 *   Optional. Collection of information about all followup intents that have
 *   name of this intent as a root_name.
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
   * Represents an example or template that the agent is trained on.
   *
   * @property {string} name
   *   Required. The unique identifier of this training phrase.
   *
   * @property {number} type
   *   Required. The type of the training phrase.
   *
   *   The number should be among the values of [Type]{@link google.cloud.dialogflow.v2beta1.Type}
   *
   * @property {Object[]} parts
   *   Required. The collection of training phrase parts (can be annotated).
   *   Fields: `entity_type`, `alias` and `user_defined` should be populated
   *   only for the annotated parts of the training phrase.
   *
   *   This object should have the same structure as [Part]{@link google.cloud.dialogflow.v2beta1.Part}
   *
   * @property {number} timesAddedCount
   *   Optional. Indicates how many times this example or template was added to
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
     *   Required. The text corresponding to the example or template,
     *   if there are no annotations. For
     *   annotated examples, it is the text for one of the example's parts.
     *
     * @property {string} entityType
     *   Optional. The entity type name prefixed with `@`. This field is
     *   required for the annotated part of the text and applies only to
     *   examples.
     *
     * @property {string} alias
     *   Optional. The parameter name for the value extracted from the
     *   annotated part of the example.
     *
     * @property {boolean} userDefined
     *   Optional. Indicates whether the text was manually annotated by the
     *   developer.
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
   *   user in order to collect value for the parameter.
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
      TELEPHONY: 10
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
   *   The unique identifier of the followup intent parent.
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
 *   [More than a dozen
 *   languages](https://dialogflow.com/docs/reference/language) are supported.
 *   Note: languages must be enabled in the agent before they can be used.
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
 *   [More than a dozen
 *   languages](https://dialogflow.com/docs/reference/language) are supported.
 *   Note: languages must be enabled in the agent, before they can be used.
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
 *   used. [More than a dozen
 *   languages](https://dialogflow.com/docs/reference/language) are supported.
 *   Note: languages must be enabled in the agent, before they can be used.
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
 *   Format: `projects/<Project ID>/agent/intents/<Intent ID>`.
 *
 *   This object should have the same structure as [Intent]{@link google.cloud.dialogflow.v2beta1.Intent}
 *
 * @property {string} languageCode
 *   Optional. The language of training phrases, parameters and rich messages
 *   defined in `intent`. If not specified, the agent's default language is
 *   used. [More than a dozen
 *   languages](https://dialogflow.com/docs/reference/language) are supported.
 *   Note: languages must be enabled in the agent, before they can be used.
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
 *   Required. The name of the intent to delete.
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
 *   used. [More than a dozen
 *   languages](https://dialogflow.com/docs/reference/language) are supported.
 *   Note: languages must be enabled in the agent, before they can be used.
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