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
 * TextAnnotation contains a structured representation of OCR extracted text.
 * The hierarchy of an OCR extracted text structure is like this:
 *     TextAnnotation -> Page -> Block -> Paragraph -> Word -> Symbol
 * Each structural component, starting from Page, may further have their own
 * properties. Properties describe detected languages, breaks etc.. Please refer
 * to the TextAnnotation.TextProperty message definition below for more
 * detail.
 *
 * @property {Object[]} pages
 *   List of pages detected by OCR.
 *
 *   This object should have the same structure as [Page]{@link google.cloud.vision.v1p3beta1.Page}
 *
 * @property {string} text
 *   UTF-8 text detected on the pages.
 *
 * @typedef TextAnnotation
 * @memberof google.cloud.vision.v1p3beta1
 * @see [google.cloud.vision.v1p3beta1.TextAnnotation definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1p3beta1/text_annotation.proto}
 */
const TextAnnotation = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Detected language for a structural component.
   *
   * @property {string} languageCode
   *   The BCP-47 language code, such as "en-US" or "sr-Latn". For more
   *   information, see
   *   http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
   *
   * @property {number} confidence
   *   Confidence of detected language. Range [0, 1].
   *
   * @typedef DetectedLanguage
   * @memberof google.cloud.vision.v1p3beta1
   * @see [google.cloud.vision.v1p3beta1.TextAnnotation.DetectedLanguage definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1p3beta1/text_annotation.proto}
   */
  DetectedLanguage: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  },

  /**
   * Detected start or end of a structural component.
   *
   * @property {number} type
   *   Detected break type.
   *
   *   The number should be among the values of [BreakType]{@link google.cloud.vision.v1p3beta1.BreakType}
   *
   * @property {boolean} isPrefix
   *   True if break prepends the element.
   *
   * @typedef DetectedBreak
   * @memberof google.cloud.vision.v1p3beta1
   * @see [google.cloud.vision.v1p3beta1.TextAnnotation.DetectedBreak definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1p3beta1/text_annotation.proto}
   */
  DetectedBreak: {
    // This is for documentation. Actual contents will be loaded by gRPC.

    /**
     * Enum to denote the type of break found. New line, space etc.
     *
     * @enum {number}
     * @memberof google.cloud.vision.v1p3beta1
     */
    BreakType: {

      /**
       * Unknown break label type.
       */
      UNKNOWN: 0,

      /**
       * Regular space.
       */
      SPACE: 1,

      /**
       * Sure space (very wide).
       */
      SURE_SPACE: 2,

      /**
       * Line-wrapping break.
       */
      EOL_SURE_SPACE: 3,

      /**
       * End-line hyphen that is not present in text; does not co-occur with
       * `SPACE`, `LEADER_SPACE`, or `LINE_BREAK`.
       */
      HYPHEN: 4,

      /**
       * Line break that ends a paragraph.
       */
      LINE_BREAK: 5
    }
  },

  /**
   * Additional information detected on the structural component.
   *
   * @property {Object[]} detectedLanguages
   *   A list of detected languages together with confidence.
   *
   *   This object should have the same structure as [DetectedLanguage]{@link google.cloud.vision.v1p3beta1.DetectedLanguage}
   *
   * @property {Object} detectedBreak
   *   Detected start or end of a text segment.
   *
   *   This object should have the same structure as [DetectedBreak]{@link google.cloud.vision.v1p3beta1.DetectedBreak}
   *
   * @typedef TextProperty
   * @memberof google.cloud.vision.v1p3beta1
   * @see [google.cloud.vision.v1p3beta1.TextAnnotation.TextProperty definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1p3beta1/text_annotation.proto}
   */
  TextProperty: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  }
};

/**
 * Detected page from OCR.
 *
 * @property {Object} property
 *   Additional information detected on the page.
 *
 *   This object should have the same structure as [TextProperty]{@link google.cloud.vision.v1p3beta1.TextProperty}
 *
 * @property {number} width
 *   Page width. For PDFs the unit is points. For images (including
 *   TIFFs) the unit is pixels.
 *
 * @property {number} height
 *   Page height. For PDFs the unit is points. For images (including
 *   TIFFs) the unit is pixels.
 *
 * @property {Object[]} blocks
 *   List of blocks of text, images etc on this page.
 *
 *   This object should have the same structure as [Block]{@link google.cloud.vision.v1p3beta1.Block}
 *
 * @property {number} confidence
 *   Confidence of the OCR results on the page. Range [0, 1].
 *
 * @typedef Page
 * @memberof google.cloud.vision.v1p3beta1
 * @see [google.cloud.vision.v1p3beta1.Page definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1p3beta1/text_annotation.proto}
 */
const Page = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Logical element on the page.
 *
 * @property {Object} property
 *   Additional information detected for the block.
 *
 *   This object should have the same structure as [TextProperty]{@link google.cloud.vision.v1p3beta1.TextProperty}
 *
 * @property {Object} boundingBox
 *   The bounding box for the block.
 *   The vertices are in the order of top-left, top-right, bottom-right,
 *   bottom-left. When a rotation of the bounding box is detected the rotation
 *   is represented as around the top-left corner as defined when the text is
 *   read in the 'natural' orientation.
 *   For example:
 *
 *   * when the text is horizontal it might look like:
 *
 *           0----1
 *           |    |
 *           3----2
 *
 *   * when it's rotated 180 degrees around the top-left corner it becomes:
 *
 *           2----3
 *           |    |
 *           1----0
 *
 *     and the vertice order will still be (0, 1, 2, 3).
 *
 *   This object should have the same structure as [BoundingPoly]{@link google.cloud.vision.v1p3beta1.BoundingPoly}
 *
 * @property {Object[]} paragraphs
 *   List of paragraphs in this block (if this blocks is of type text).
 *
 *   This object should have the same structure as [Paragraph]{@link google.cloud.vision.v1p3beta1.Paragraph}
 *
 * @property {number} blockType
 *   Detected block type (text, image etc) for this block.
 *
 *   The number should be among the values of [BlockType]{@link google.cloud.vision.v1p3beta1.BlockType}
 *
 * @property {number} confidence
 *   Confidence of the OCR results on the block. Range [0, 1].
 *
 * @typedef Block
 * @memberof google.cloud.vision.v1p3beta1
 * @see [google.cloud.vision.v1p3beta1.Block definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1p3beta1/text_annotation.proto}
 */
const Block = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Type of a block (text, image etc) as identified by OCR.
   *
   * @enum {number}
   * @memberof google.cloud.vision.v1p3beta1
   */
  BlockType: {

    /**
     * Unknown block type.
     */
    UNKNOWN: 0,

    /**
     * Regular text block.
     */
    TEXT: 1,

    /**
     * Table block.
     */
    TABLE: 2,

    /**
     * Image block.
     */
    PICTURE: 3,

    /**
     * Horizontal/vertical line box.
     */
    RULER: 4,

    /**
     * Barcode block.
     */
    BARCODE: 5
  }
};

/**
 * Structural unit of text representing a number of words in certain order.
 *
 * @property {Object} property
 *   Additional information detected for the paragraph.
 *
 *   This object should have the same structure as [TextProperty]{@link google.cloud.vision.v1p3beta1.TextProperty}
 *
 * @property {Object} boundingBox
 *   The bounding box for the paragraph.
 *   The vertices are in the order of top-left, top-right, bottom-right,
 *   bottom-left. When a rotation of the bounding box is detected the rotation
 *   is represented as around the top-left corner as defined when the text is
 *   read in the 'natural' orientation.
 *   For example:
 *     * when the text is horizontal it might look like:
 *        0----1
 *        |    |
 *        3----2
 *     * when it's rotated 180 degrees around the top-left corner it becomes:
 *        2----3
 *        |    |
 *        1----0
 *     and the vertice order will still be (0, 1, 2, 3).
 *
 *   This object should have the same structure as [BoundingPoly]{@link google.cloud.vision.v1p3beta1.BoundingPoly}
 *
 * @property {Object[]} words
 *   List of words in this paragraph.
 *
 *   This object should have the same structure as [Word]{@link google.cloud.vision.v1p3beta1.Word}
 *
 * @property {number} confidence
 *   Confidence of the OCR results for the paragraph. Range [0, 1].
 *
 * @typedef Paragraph
 * @memberof google.cloud.vision.v1p3beta1
 * @see [google.cloud.vision.v1p3beta1.Paragraph definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1p3beta1/text_annotation.proto}
 */
const Paragraph = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A word representation.
 *
 * @property {Object} property
 *   Additional information detected for the word.
 *
 *   This object should have the same structure as [TextProperty]{@link google.cloud.vision.v1p3beta1.TextProperty}
 *
 * @property {Object} boundingBox
 *   The bounding box for the word.
 *   The vertices are in the order of top-left, top-right, bottom-right,
 *   bottom-left. When a rotation of the bounding box is detected the rotation
 *   is represented as around the top-left corner as defined when the text is
 *   read in the 'natural' orientation.
 *   For example:
 *     * when the text is horizontal it might look like:
 *        0----1
 *        |    |
 *        3----2
 *     * when it's rotated 180 degrees around the top-left corner it becomes:
 *        2----3
 *        |    |
 *        1----0
 *     and the vertice order will still be (0, 1, 2, 3).
 *
 *   This object should have the same structure as [BoundingPoly]{@link google.cloud.vision.v1p3beta1.BoundingPoly}
 *
 * @property {Object[]} symbols
 *   List of symbols in the word.
 *   The order of the symbols follows the natural reading order.
 *
 *   This object should have the same structure as [Symbol]{@link google.cloud.vision.v1p3beta1.Symbol}
 *
 * @property {number} confidence
 *   Confidence of the OCR results for the word. Range [0, 1].
 *
 * @typedef Word
 * @memberof google.cloud.vision.v1p3beta1
 * @see [google.cloud.vision.v1p3beta1.Word definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1p3beta1/text_annotation.proto}
 */
const Word = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A single symbol representation.
 *
 * @property {Object} property
 *   Additional information detected for the symbol.
 *
 *   This object should have the same structure as [TextProperty]{@link google.cloud.vision.v1p3beta1.TextProperty}
 *
 * @property {Object} boundingBox
 *   The bounding box for the symbol.
 *   The vertices are in the order of top-left, top-right, bottom-right,
 *   bottom-left. When a rotation of the bounding box is detected the rotation
 *   is represented as around the top-left corner as defined when the text is
 *   read in the 'natural' orientation.
 *   For example:
 *     * when the text is horizontal it might look like:
 *        0----1
 *        |    |
 *        3----2
 *     * when it's rotated 180 degrees around the top-left corner it becomes:
 *        2----3
 *        |    |
 *        1----0
 *     and the vertice order will still be (0, 1, 2, 3).
 *
 *   This object should have the same structure as [BoundingPoly]{@link google.cloud.vision.v1p3beta1.BoundingPoly}
 *
 * @property {string} text
 *   The actual UTF-8 representation of the symbol.
 *
 * @property {number} confidence
 *   Confidence of the OCR results for the symbol. Range [0, 1].
 *
 * @typedef Symbol
 * @memberof google.cloud.vision.v1p3beta1
 * @see [google.cloud.vision.v1p3beta1.Symbol definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/vision/v1p3beta1/text_annotation.proto}
 */
const Symbol = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};