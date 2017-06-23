/*
 * Copyright 2017, Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*
 * Note: this file is purely for documentation. Any contents are not expected
 * to be loaded as the JS file.
 */

/**
 * ################################################################ #
 *
 * Represents the input to API methods.
 *
 * @property {number} type
 *   Required. If the type is not set or is `TYPE_UNSPECIFIED`,
 *   returns an `INVALID_ARGUMENT` error.
 *
 *   The number should be among the values of [Type]{@link Type}
 *
 * @property {string} content
 *   The content of the input in string format.
 *
 * @property {string} gcsContentUri
 *   The Google Cloud Storage URI where the file content is located.
 *   This URI must be of the form: gs://bucket_name/object_name. For more
 *   details, see https://cloud.google.com/storage/docs/reference-uris.
 *   NOTE: Cloud Storage object versioning is not supported.
 *
 * @property {string} language
 *   The language of the document (if not specified, the language is
 *   automatically detected). Both ISO and BCP-47 language codes are
 *   accepted.<br>
 *   [Language Support](https://cloud.google.com/natural-language/docs/languages)
 *   lists currently supported languages for each API method.
 *   If the language (either specified by the caller or automatically detected)
 *   is not supported by the called API method, an `INVALID_ARGUMENT` error
 *   is returned.
 *
 * @class
 * @see [google.cloud.language.v1beta2.Document definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/language/v1beta2/language_service.proto}
 */
var Document = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * The document types enum.
   *
   * @enum {number}
   */
  Type: {

    /**
     * The content type is not specified.
     */
    TYPE_UNSPECIFIED: 0,

    /**
     * Plain text
     */
    PLAIN_TEXT: 1,

    /**
     * HTML
     */
    HTML: 2
  }
};

/**
 * Represents a sentence in the input document.
 *
 * @property {Object} text
 *   The sentence text.
 *
 *   This object should have the same structure as [TextSpan]{@link TextSpan}
 *
 * @property {Object} sentiment
 *   For calls to {@link AnalyzeSentiment} or if
 *   {@link AnnotateTextRequest.Features.extract_document_sentiment} is set to
 *   true, this field will contain the sentiment for the sentence.
 *
 *   This object should have the same structure as [Sentiment]{@link Sentiment}
 *
 * @class
 * @see [google.cloud.language.v1beta2.Sentence definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/language/v1beta2/language_service.proto}
 */
var Sentence = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Represents a phrase in the text that is a known entity, such as
 * a person, an organization, or location. The API associates information, such
 * as salience and mentions, with entities.
 *
 * @property {string} name
 *   The representative name for the entity.
 *
 * @property {number} type
 *   The entity type.
 *
 *   The number should be among the values of [Type]{@link Type}
 *
 * @property {Object.<string, string>} metadata
 *   Metadata associated with the entity.
 *
 *   Currently, Wikipedia URLs and Knowledge Graph MIDs are provided, if
 *   available. The associated keys are "wikipedia_url" and "mid", respectively.
 *
 * @property {number} salience
 *   The salience score associated with the entity in the [0, 1.0] range.
 *
 *   The salience score for an entity provides information about the
 *   importance or centrality of that entity to the entire document text.
 *   Scores closer to 0 are less salient, while scores closer to 1.0 are highly
 *   salient.
 *
 * @property {Object[]} mentions
 *   The mentions of this entity in the input document. The API currently
 *   supports proper noun mentions.
 *
 *   This object should have the same structure as [EntityMention]{@link EntityMention}
 *
 * @property {Object} sentiment
 *   For calls to {@link AnalyzeEntitySentiment} or if
 *   {@link AnnotateTextRequest.Features.extract_entity_sentiment} is set to
 *   true, this field will contain the aggregate sentiment expressed for this
 *   entity in the provided document.
 *
 *   This object should have the same structure as [Sentiment]{@link Sentiment}
 *
 * @class
 * @see [google.cloud.language.v1beta2.Entity definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/language/v1beta2/language_service.proto}
 */
var Entity = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * The type of the entity.
   *
   * @enum {number}
   */
  Type: {

    /**
     * Unknown
     */
    UNKNOWN: 0,

    /**
     * Person
     */
    PERSON: 1,

    /**
     * Location
     */
    LOCATION: 2,

    /**
     * Organization
     */
    ORGANIZATION: 3,

    /**
     * Event
     */
    EVENT: 4,

    /**
     * Work of art
     */
    WORK_OF_ART: 5,

    /**
     * Consumer goods
     */
    CONSUMER_GOOD: 6,

    /**
     * Other types
     */
    OTHER: 7
  }
};

/**
 * Represents the smallest syntactic building block of the text.
 *
 * @property {Object} text
 *   The token text.
 *
 *   This object should have the same structure as [TextSpan]{@link TextSpan}
 *
 * @property {Object} partOfSpeech
 *   Parts of speech tag for this token.
 *
 *   This object should have the same structure as [PartOfSpeech]{@link PartOfSpeech}
 *
 * @property {Object} dependencyEdge
 *   Dependency tree parse for this token.
 *
 *   This object should have the same structure as [DependencyEdge]{@link DependencyEdge}
 *
 * @property {string} lemma
 *   [Lemma](https://en.wikipedia.org/wiki/Lemma_%28morphology%29) of the token.
 *
 * @class
 * @see [google.cloud.language.v1beta2.Token definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/language/v1beta2/language_service.proto}
 */
var Token = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Represents the feeling associated with the entire text or entities in
 * the text.
 *
 * @property {number} magnitude
 *   A non-negative number in the [0, +inf) range, which represents
 *   the absolute magnitude of sentiment regardless of score (positive or
 *   negative).
 *
 * @property {number} score
 *   Sentiment score between -1.0 (negative sentiment) and 1.0
 *   (positive sentiment).
 *
 * @class
 * @see [google.cloud.language.v1beta2.Sentiment definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/language/v1beta2/language_service.proto}
 */
var Sentiment = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Represents part of speech information for a token.
 *
 * @property {number} tag
 *   The part of speech tag.
 *
 *   The number should be among the values of [Tag]{@link Tag}
 *
 * @property {number} aspect
 *   The grammatical aspect.
 *
 *   The number should be among the values of [Aspect]{@link Aspect}
 *
 * @property {number} case
 *   The grammatical case.
 *
 *   The number should be among the values of [Case]{@link Case}
 *
 * @property {number} form
 *   The grammatical form.
 *
 *   The number should be among the values of [Form]{@link Form}
 *
 * @property {number} gender
 *   The grammatical gender.
 *
 *   The number should be among the values of [Gender]{@link Gender}
 *
 * @property {number} mood
 *   The grammatical mood.
 *
 *   The number should be among the values of [Mood]{@link Mood}
 *
 * @property {number} number
 *   The grammatical number.
 *
 *   The number should be among the values of [Number]{@link Number}
 *
 * @property {number} person
 *   The grammatical person.
 *
 *   The number should be among the values of [Person]{@link Person}
 *
 * @property {number} proper
 *   The grammatical properness.
 *
 *   The number should be among the values of [Proper]{@link Proper}
 *
 * @property {number} reciprocity
 *   The grammatical reciprocity.
 *
 *   The number should be among the values of [Reciprocity]{@link Reciprocity}
 *
 * @property {number} tense
 *   The grammatical tense.
 *
 *   The number should be among the values of [Tense]{@link Tense}
 *
 * @property {number} voice
 *   The grammatical voice.
 *
 *   The number should be among the values of [Voice]{@link Voice}
 *
 * @class
 * @see [google.cloud.language.v1beta2.PartOfSpeech definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/language/v1beta2/language_service.proto}
 */
var PartOfSpeech = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * The part of speech tags enum.
   *
   * @enum {number}
   */
  Tag: {

    /**
     * Unknown
     */
    UNKNOWN: 0,

    /**
     * Adjective
     */
    ADJ: 1,

    /**
     * Adposition (preposition and postposition)
     */
    ADP: 2,

    /**
     * Adverb
     */
    ADV: 3,

    /**
     * Conjunction
     */
    CONJ: 4,

    /**
     * Determiner
     */
    DET: 5,

    /**
     * Noun (common and proper)
     */
    NOUN: 6,

    /**
     * Cardinal number
     */
    NUM: 7,

    /**
     * Pronoun
     */
    PRON: 8,

    /**
     * Particle or other function word
     */
    PRT: 9,

    /**
     * Punctuation
     */
    PUNCT: 10,

    /**
     * Verb (all tenses and modes)
     */
    VERB: 11,

    /**
     * Other: foreign words, typos, abbreviations
     */
    X: 12,

    /**
     * Affix
     */
    AFFIX: 13
  },

  /**
   * The characteristic of a verb that expresses time flow during an event.
   *
   * @enum {number}
   */
  Aspect: {

    /**
     * Aspect is not applicable in the analyzed language or is not predicted.
     */
    ASPECT_UNKNOWN: 0,

    /**
     * Perfective
     */
    PERFECTIVE: 1,

    /**
     * Imperfective
     */
    IMPERFECTIVE: 2,

    /**
     * Progressive
     */
    PROGRESSIVE: 3
  },

  /**
   * The grammatical function performed by a noun or pronoun in a phrase,
   * clause, or sentence. In some languages, other parts of speech, such as
   * adjective and determiner, take case inflection in agreement with the noun.
   *
   * @enum {number}
   */
  Case: {

    /**
     * Case is not applicable in the analyzed language or is not predicted.
     */
    CASE_UNKNOWN: 0,

    /**
     * Accusative
     */
    ACCUSATIVE: 1,

    /**
     * Adverbial
     */
    ADVERBIAL: 2,

    /**
     * Complementive
     */
    COMPLEMENTIVE: 3,

    /**
     * Dative
     */
    DATIVE: 4,

    /**
     * Genitive
     */
    GENITIVE: 5,

    /**
     * Instrumental
     */
    INSTRUMENTAL: 6,

    /**
     * Locative
     */
    LOCATIVE: 7,

    /**
     * Nominative
     */
    NOMINATIVE: 8,

    /**
     * Oblique
     */
    OBLIQUE: 9,

    /**
     * Partitive
     */
    PARTITIVE: 10,

    /**
     * Prepositional
     */
    PREPOSITIONAL: 11,

    /**
     * Reflexive
     */
    REFLEXIVE_CASE: 12,

    /**
     * Relative
     */
    RELATIVE_CASE: 13,

    /**
     * Vocative
     */
    VOCATIVE: 14
  },

  /**
   * Depending on the language, Form can be categorizing different forms of
   * verbs, adjectives, adverbs, etc. For example, categorizing inflected
   * endings of verbs and adjectives or distinguishing between short and long
   * forms of adjectives and participles
   *
   * @enum {number}
   */
  Form: {

    /**
     * Form is not applicable in the analyzed language or is not predicted.
     */
    FORM_UNKNOWN: 0,

    /**
     * Adnomial
     */
    ADNOMIAL: 1,

    /**
     * Auxiliary
     */
    AUXILIARY: 2,

    /**
     * Complementizer
     */
    COMPLEMENTIZER: 3,

    /**
     * Final ending
     */
    FINAL_ENDING: 4,

    /**
     * Gerund
     */
    GERUND: 5,

    /**
     * Realis
     */
    REALIS: 6,

    /**
     * Irrealis
     */
    IRREALIS: 7,

    /**
     * Short form
     */
    SHORT: 8,

    /**
     * Long form
     */
    LONG: 9,

    /**
     * Order form
     */
    ORDER: 10,

    /**
     * Specific form
     */
    SPECIFIC: 11
  },

  /**
   * Gender classes of nouns reflected in the behaviour of associated words.
   *
   * @enum {number}
   */
  Gender: {

    /**
     * Gender is not applicable in the analyzed language or is not predicted.
     */
    GENDER_UNKNOWN: 0,

    /**
     * Feminine
     */
    FEMININE: 1,

    /**
     * Masculine
     */
    MASCULINE: 2,

    /**
     * Neuter
     */
    NEUTER: 3
  },

  /**
   * The grammatical feature of verbs, used for showing modality and attitude.
   *
   * @enum {number}
   */
  Mood: {

    /**
     * Mood is not applicable in the analyzed language or is not predicted.
     */
    MOOD_UNKNOWN: 0,

    /**
     * Conditional
     */
    CONDITIONAL_MOOD: 1,

    /**
     * Imperative
     */
    IMPERATIVE: 2,

    /**
     * Indicative
     */
    INDICATIVE: 3,

    /**
     * Interrogative
     */
    INTERROGATIVE: 4,

    /**
     * Jussive
     */
    JUSSIVE: 5,

    /**
     * Subjunctive
     */
    SUBJUNCTIVE: 6
  },

  /**
   * Count distinctions.
   *
   * @enum {number}
   */
  Number: {

    /**
     * Number is not applicable in the analyzed language or is not predicted.
     */
    NUMBER_UNKNOWN: 0,

    /**
     * Singular
     */
    SINGULAR: 1,

    /**
     * Plural
     */
    PLURAL: 2,

    /**
     * Dual
     */
    DUAL: 3
  },

  /**
   * The distinction between the speaker, second person, third person, etc.
   *
   * @enum {number}
   */
  Person: {

    /**
     * Person is not applicable in the analyzed language or is not predicted.
     */
    PERSON_UNKNOWN: 0,

    /**
     * First
     */
    FIRST: 1,

    /**
     * Second
     */
    SECOND: 2,

    /**
     * Third
     */
    THIRD: 3,

    /**
     * Reflexive
     */
    REFLEXIVE_PERSON: 4
  },

  /**
   * This category shows if the token is part of a proper name.
   *
   * @enum {number}
   */
  Proper: {

    /**
     * Proper is not applicable in the analyzed language or is not predicted.
     */
    PROPER_UNKNOWN: 0,

    /**
     * Proper
     */
    PROPER: 1,

    /**
     * Not proper
     */
    NOT_PROPER: 2
  },

  /**
   * Reciprocal features of a pronoun.
   *
   * @enum {number}
   */
  Reciprocity: {

    /**
     * Reciprocity is not applicable in the analyzed language or is not
     * predicted.
     */
    RECIPROCITY_UNKNOWN: 0,

    /**
     * Reciprocal
     */
    RECIPROCAL: 1,

    /**
     * Non-reciprocal
     */
    NON_RECIPROCAL: 2
  },

  /**
   * Time reference.
   *
   * @enum {number}
   */
  Tense: {

    /**
     * Tense is not applicable in the analyzed language or is not predicted.
     */
    TENSE_UNKNOWN: 0,

    /**
     * Conditional
     */
    CONDITIONAL_TENSE: 1,

    /**
     * Future
     */
    FUTURE: 2,

    /**
     * Past
     */
    PAST: 3,

    /**
     * Present
     */
    PRESENT: 4,

    /**
     * Imperfect
     */
    IMPERFECT: 5,

    /**
     * Pluperfect
     */
    PLUPERFECT: 6
  },

  /**
   * The relationship between the action that a verb expresses and the
   * participants identified by its arguments.
   *
   * @enum {number}
   */
  Voice: {

    /**
     * Voice is not applicable in the analyzed language or is not predicted.
     */
    VOICE_UNKNOWN: 0,

    /**
     * Active
     */
    ACTIVE: 1,

    /**
     * Causative
     */
    CAUSATIVE: 2,

    /**
     * Passive
     */
    PASSIVE: 3
  }
};

/**
 * Represents dependency parse tree information for a token.
 *
 * @property {number} headTokenIndex
 *   Represents the head of this token in the dependency tree.
 *   This is the index of the token which has an arc going to this token.
 *   The index is the position of the token in the array of tokens returned
 *   by the API method. If this token is a root token, then the
 *   `head_token_index` is its own index.
 *
 * @property {number} label
 *   The parse label for the token.
 *
 *   The number should be among the values of [Label]{@link Label}
 *
 * @class
 * @see [google.cloud.language.v1beta2.DependencyEdge definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/language/v1beta2/language_service.proto}
 */
var DependencyEdge = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * The parse label enum for the token.
   *
   * @enum {number}
   */
  Label: {

    /**
     * Unknown
     */
    UNKNOWN: 0,

    /**
     * Abbreviation modifier
     */
    ABBREV: 1,

    /**
     * Adjectival complement
     */
    ACOMP: 2,

    /**
     * Adverbial clause modifier
     */
    ADVCL: 3,

    /**
     * Adverbial modifier
     */
    ADVMOD: 4,

    /**
     * Adjectival modifier of an NP
     */
    AMOD: 5,

    /**
     * Appositional modifier of an NP
     */
    APPOS: 6,

    /**
     * Attribute dependent of a copular verb
     */
    ATTR: 7,

    /**
     * Auxiliary (non-main) verb
     */
    AUX: 8,

    /**
     * Passive auxiliary
     */
    AUXPASS: 9,

    /**
     * Coordinating conjunction
     */
    CC: 10,

    /**
     * Clausal complement of a verb or adjective
     */
    CCOMP: 11,

    /**
     * Conjunct
     */
    CONJ: 12,

    /**
     * Clausal subject
     */
    CSUBJ: 13,

    /**
     * Clausal passive subject
     */
    CSUBJPASS: 14,

    /**
     * Dependency (unable to determine)
     */
    DEP: 15,

    /**
     * Determiner
     */
    DET: 16,

    /**
     * Discourse
     */
    DISCOURSE: 17,

    /**
     * Direct object
     */
    DOBJ: 18,

    /**
     * Expletive
     */
    EXPL: 19,

    /**
     * Goes with (part of a word in a text not well edited)
     */
    GOESWITH: 20,

    /**
     * Indirect object
     */
    IOBJ: 21,

    /**
     * Marker (word introducing a subordinate clause)
     */
    MARK: 22,

    /**
     * Multi-word expression
     */
    MWE: 23,

    /**
     * Multi-word verbal expression
     */
    MWV: 24,

    /**
     * Negation modifier
     */
    NEG: 25,

    /**
     * Noun compound modifier
     */
    NN: 26,

    /**
     * Noun phrase used as an adverbial modifier
     */
    NPADVMOD: 27,

    /**
     * Nominal subject
     */
    NSUBJ: 28,

    /**
     * Passive nominal subject
     */
    NSUBJPASS: 29,

    /**
     * Numeric modifier of a noun
     */
    NUM: 30,

    /**
     * Element of compound number
     */
    NUMBER: 31,

    /**
     * Punctuation mark
     */
    P: 32,

    /**
     * Parataxis relation
     */
    PARATAXIS: 33,

    /**
     * Participial modifier
     */
    PARTMOD: 34,

    /**
     * The complement of a preposition is a clause
     */
    PCOMP: 35,

    /**
     * Object of a preposition
     */
    POBJ: 36,

    /**
     * Possession modifier
     */
    POSS: 37,

    /**
     * Postverbal negative particle
     */
    POSTNEG: 38,

    /**
     * Predicate complement
     */
    PRECOMP: 39,

    /**
     * Preconjunt
     */
    PRECONJ: 40,

    /**
     * Predeterminer
     */
    PREDET: 41,

    /**
     * Prefix
     */
    PREF: 42,

    /**
     * Prepositional modifier
     */
    PREP: 43,

    /**
     * The relationship between a verb and verbal morpheme
     */
    PRONL: 44,

    /**
     * Particle
     */
    PRT: 45,

    /**
     * Associative or possessive marker
     */
    PS: 46,

    /**
     * Quantifier phrase modifier
     */
    QUANTMOD: 47,

    /**
     * Relative clause modifier
     */
    RCMOD: 48,

    /**
     * Complementizer in relative clause
     */
    RCMODREL: 49,

    /**
     * Ellipsis without a preceding predicate
     */
    RDROP: 50,

    /**
     * Referent
     */
    REF: 51,

    /**
     * Remnant
     */
    REMNANT: 52,

    /**
     * Reparandum
     */
    REPARANDUM: 53,

    /**
     * Root
     */
    ROOT: 54,

    /**
     * Suffix specifying a unit of number
     */
    SNUM: 55,

    /**
     * Suffix
     */
    SUFF: 56,

    /**
     * Temporal modifier
     */
    TMOD: 57,

    /**
     * Topic marker
     */
    TOPIC: 58,

    /**
     * Clause headed by an infinite form of the verb that modifies a noun
     */
    VMOD: 59,

    /**
     * Vocative
     */
    VOCATIVE: 60,

    /**
     * Open clausal complement
     */
    XCOMP: 61,

    /**
     * Name suffix
     */
    SUFFIX: 62,

    /**
     * Name title
     */
    TITLE: 63,

    /**
     * Adverbial phrase modifier
     */
    ADVPHMOD: 64,

    /**
     * Causative auxiliary
     */
    AUXCAUS: 65,

    /**
     * Helper auxiliary
     */
    AUXVV: 66,

    /**
     * Rentaishi (Prenominal modifier)
     */
    DTMOD: 67,

    /**
     * Foreign words
     */
    FOREIGN: 68,

    /**
     * Keyword
     */
    KW: 69,

    /**
     * List for chains of comparable items
     */
    LIST: 70,

    /**
     * Nominalized clause
     */
    NOMC: 71,

    /**
     * Nominalized clausal subject
     */
    NOMCSUBJ: 72,

    /**
     * Nominalized clausal passive
     */
    NOMCSUBJPASS: 73,

    /**
     * Compound of numeric modifier
     */
    NUMC: 74,

    /**
     * Copula
     */
    COP: 75,

    /**
     * Dislocated relation (for fronted/topicalized elements)
     */
    DISLOCATED: 76
  }
};

/**
 * Represents a mention for an entity in the text. Currently, proper noun
 * mentions are supported.
 *
 * @property {Object} text
 *   The mention text.
 *
 *   This object should have the same structure as [TextSpan]{@link TextSpan}
 *
 * @property {number} type
 *   The type of the entity mention.
 *
 *   The number should be among the values of [Type]{@link Type}
 *
 * @property {Object} sentiment
 *   For calls to {@link AnalyzeEntitySentiment} or if
 *   {@link AnnotateTextRequest.Features.extract_entity_sentiment} is set to
 *   true, this field will contain the sentiment expressed for this mention of
 *   the entity in the provided document.
 *
 *   This object should have the same structure as [Sentiment]{@link Sentiment}
 *
 * @class
 * @see [google.cloud.language.v1beta2.EntityMention definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/language/v1beta2/language_service.proto}
 */
var EntityMention = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * The supported types of mentions.
   *
   * @enum {number}
   */
  Type: {

    /**
     * Unknown
     */
    TYPE_UNKNOWN: 0,

    /**
     * Proper name
     */
    PROPER: 1,

    /**
     * Common noun (or noun compound)
     */
    COMMON: 2
  }
};

/**
 * Represents an output piece of text.
 *
 * @property {string} content
 *   The content of the output text.
 *
 * @property {number} beginOffset
 *   The API calculates the beginning offset of the content in the original
 *   document according to the {@link EncodingType} specified in the API request.
 *
 * @class
 * @see [google.cloud.language.v1beta2.TextSpan definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/language/v1beta2/language_service.proto}
 */
var TextSpan = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The sentiment analysis request message.
 *
 * @property {Object} document
 *   Input document.
 *
 *   This object should have the same structure as [Document]{@link Document}
 *
 * @property {number} encodingType
 *   The encoding type used by the API to calculate sentence offsets for the
 *   sentence sentiment.
 *
 *   The number should be among the values of [EncodingType]{@link EncodingType}
 *
 * @class
 * @see [google.cloud.language.v1beta2.AnalyzeSentimentRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/language/v1beta2/language_service.proto}
 */
var AnalyzeSentimentRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The sentiment analysis response message.
 *
 * @property {Object} documentSentiment
 *   The overall sentiment of the input document.
 *
 *   This object should have the same structure as [Sentiment]{@link Sentiment}
 *
 * @property {string} language
 *   The language of the text, which will be the same as the language specified
 *   in the request or, if not specified, the automatically-detected language.
 *   See {@link Document.language} field for more details.
 *
 * @property {Object[]} sentences
 *   The sentiment for all the sentences in the document.
 *
 *   This object should have the same structure as [Sentence]{@link Sentence}
 *
 * @class
 * @see [google.cloud.language.v1beta2.AnalyzeSentimentResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/language/v1beta2/language_service.proto}
 */
var AnalyzeSentimentResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The entity-level sentiment analysis request message.
 *
 * @property {Object} document
 *   Input document.
 *
 *   This object should have the same structure as [Document]{@link Document}
 *
 * @property {number} encodingType
 *   The encoding type used by the API to calculate offsets.
 *
 *   The number should be among the values of [EncodingType]{@link EncodingType}
 *
 * @class
 * @see [google.cloud.language.v1beta2.AnalyzeEntitySentimentRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/language/v1beta2/language_service.proto}
 */
var AnalyzeEntitySentimentRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The entity-level sentiment analysis response message.
 *
 * @property {Object[]} entities
 *   The recognized entities in the input document with associated sentiments.
 *
 *   This object should have the same structure as [Entity]{@link Entity}
 *
 * @property {string} language
 *   The language of the text, which will be the same as the language specified
 *   in the request or, if not specified, the automatically-detected language.
 *   See {@link Document.language} field for more details.
 *
 * @class
 * @see [google.cloud.language.v1beta2.AnalyzeEntitySentimentResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/language/v1beta2/language_service.proto}
 */
var AnalyzeEntitySentimentResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The entity analysis request message.
 *
 * @property {Object} document
 *   Input document.
 *
 *   This object should have the same structure as [Document]{@link Document}
 *
 * @property {number} encodingType
 *   The encoding type used by the API to calculate offsets.
 *
 *   The number should be among the values of [EncodingType]{@link EncodingType}
 *
 * @class
 * @see [google.cloud.language.v1beta2.AnalyzeEntitiesRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/language/v1beta2/language_service.proto}
 */
var AnalyzeEntitiesRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The entity analysis response message.
 *
 * @property {Object[]} entities
 *   The recognized entities in the input document.
 *
 *   This object should have the same structure as [Entity]{@link Entity}
 *
 * @property {string} language
 *   The language of the text, which will be the same as the language specified
 *   in the request or, if not specified, the automatically-detected language.
 *   See {@link Document.language} field for more details.
 *
 * @class
 * @see [google.cloud.language.v1beta2.AnalyzeEntitiesResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/language/v1beta2/language_service.proto}
 */
var AnalyzeEntitiesResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The syntax analysis request message.
 *
 * @property {Object} document
 *   Input document.
 *
 *   This object should have the same structure as [Document]{@link Document}
 *
 * @property {number} encodingType
 *   The encoding type used by the API to calculate offsets.
 *
 *   The number should be among the values of [EncodingType]{@link EncodingType}
 *
 * @class
 * @see [google.cloud.language.v1beta2.AnalyzeSyntaxRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/language/v1beta2/language_service.proto}
 */
var AnalyzeSyntaxRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The syntax analysis response message.
 *
 * @property {Object[]} sentences
 *   Sentences in the input document.
 *
 *   This object should have the same structure as [Sentence]{@link Sentence}
 *
 * @property {Object[]} tokens
 *   Tokens, along with their syntactic information, in the input document.
 *
 *   This object should have the same structure as [Token]{@link Token}
 *
 * @property {string} language
 *   The language of the text, which will be the same as the language specified
 *   in the request or, if not specified, the automatically-detected language.
 *   See {@link Document.language} field for more details.
 *
 * @class
 * @see [google.cloud.language.v1beta2.AnalyzeSyntaxResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/language/v1beta2/language_service.proto}
 */
var AnalyzeSyntaxResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The request message for the text annotation API, which can perform multiple
 * analysis types (sentiment, entities, and syntax) in one call.
 *
 * @property {Object} document
 *   Input document.
 *
 *   This object should have the same structure as [Document]{@link Document}
 *
 * @property {Object} features
 *   The enabled features.
 *
 *   This object should have the same structure as [Features]{@link Features}
 *
 * @property {number} encodingType
 *   The encoding type used by the API to calculate offsets.
 *
 *   The number should be among the values of [EncodingType]{@link EncodingType}
 *
 * @class
 * @see [google.cloud.language.v1beta2.AnnotateTextRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/language/v1beta2/language_service.proto}
 */
var AnnotateTextRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * All available features for sentiment, syntax, and semantic analysis.
   * Setting each one to true will enable that specific analysis for the input.
   *
   * @property {boolean} extractSyntax
   *   Extract syntax information.
   *
   * @property {boolean} extractEntities
   *   Extract entities.
   *
   * @property {boolean} extractDocumentSentiment
   *   Extract document-level sentiment.
   *
   * @property {boolean} extractEntitySentiment
   *   Extract entities and their associated sentiment.
   *
   * @class
   * @see [google.cloud.language.v1beta2.AnnotateTextRequest.Features definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/language/v1beta2/language_service.proto}
   */
  Features: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  }
};

/**
 * The text annotations response message.
 *
 * @property {Object[]} sentences
 *   Sentences in the input document. Populated if the user enables
 *   {@link AnnotateTextRequest.Features.extract_syntax}.
 *
 *   This object should have the same structure as [Sentence]{@link Sentence}
 *
 * @property {Object[]} tokens
 *   Tokens, along with their syntactic information, in the input document.
 *   Populated if the user enables
 *   {@link AnnotateTextRequest.Features.extract_syntax}.
 *
 *   This object should have the same structure as [Token]{@link Token}
 *
 * @property {Object[]} entities
 *   Entities, along with their semantic information, in the input document.
 *   Populated if the user enables
 *   {@link AnnotateTextRequest.Features.extract_entities}.
 *
 *   This object should have the same structure as [Entity]{@link Entity}
 *
 * @property {Object} documentSentiment
 *   The overall sentiment for the document. Populated if the user enables
 *   {@link AnnotateTextRequest.Features.extract_document_sentiment}.
 *
 *   This object should have the same structure as [Sentiment]{@link Sentiment}
 *
 * @property {string} language
 *   The language of the text, which will be the same as the language specified
 *   in the request or, if not specified, the automatically-detected language.
 *   See {@link Document.language} field for more details.
 *
 * @class
 * @see [google.cloud.language.v1beta2.AnnotateTextResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/language/v1beta2/language_service.proto}
 */
var AnnotateTextResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Represents the text encoding that the caller uses to process the output.
 * Providing an `EncodingType` is recommended because the API provides the
 * beginning offsets for various outputs, such as tokens and mentions, and
 * languages that natively use different text encodings may access offsets
 * differently.
 *
 * @enum {number}
 */
var EncodingType = {

  /**
   * If `EncodingType` is not specified, encoding-dependent information (such as
   * `begin_offset`) will be set at `-1`.
   */
  NONE: 0,

  /**
   * Encoding-dependent information (such as `begin_offset`) is calculated based
   * on the UTF-8 encoding of the input. C++ and Go are examples of languages
   * that use this encoding natively.
   */
  UTF8: 1,

  /**
   * Encoding-dependent information (such as `begin_offset`) is calculated based
   * on the UTF-16 encoding of the input. Java and Javascript are examples of
   * languages that use this encoding natively.
   */
  UTF16: 2,

  /**
   * Encoding-dependent information (such as `begin_offset`) is calculated based
   * on the UTF-32 encoding of the input. Python is an example of a language
   * that uses this encoding natively.
   */
  UTF32: 3
};