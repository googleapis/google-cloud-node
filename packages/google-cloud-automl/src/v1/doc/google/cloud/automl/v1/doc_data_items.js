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
 * A representation of an image.
 * Only images up to 30MB in size are supported.
 *
 * @property {Buffer} imageBytes
 *   Image content represented as a stream of bytes.
 *   Note: As with all `bytes` fields, protobuffers use a pure binary
 *   representation, whereas JSON representations use base64.
 *
 * @property {string} thumbnailUri
 *   Output only. HTTP URI to the thumbnail image.
 *
 * @typedef Image
 * @memberof google.cloud.automl.v1
 * @see [google.cloud.automl.v1.Image definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1/data_items.proto}
 */
const Image = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A representation of a text snippet.
 *
 * @property {string} content
 *   Required. The content of the text snippet as a string. Up to 250000
 *   characters long.
 *
 * @property {string} mimeType
 *   Optional. The format of
 *   content. Currently the only
 *   two allowed values are "text/html" and "text/plain". If left blank, the
 *   format is automatically determined from the type of the uploaded
 *   content.
 *
 * @property {string} contentUri
 *   Output only. HTTP URI where you can download the content.
 *
 * @typedef TextSnippet
 * @memberof google.cloud.automl.v1
 * @see [google.cloud.automl.v1.TextSnippet definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1/data_items.proto}
 */
const TextSnippet = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Message that describes dimension of a document.
 *
 * @property {number} unit
 *   Unit of the dimension.
 *
 *   The number should be among the values of [DocumentDimensionUnit]{@link google.cloud.automl.v1.DocumentDimensionUnit}
 *
 * @property {number} width
 *   Width value of the document, works together with the unit.
 *
 * @property {number} height
 *   Height value of the document, works together with the unit.
 *
 * @typedef DocumentDimensions
 * @memberof google.cloud.automl.v1
 * @see [google.cloud.automl.v1.DocumentDimensions definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1/data_items.proto}
 */
const DocumentDimensions = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Unit of the document dimension.
   *
   * @enum {number}
   * @memberof google.cloud.automl.v1
   */
  DocumentDimensionUnit: {

    /**
     * Should not be used.
     */
    DOCUMENT_DIMENSION_UNIT_UNSPECIFIED: 0,

    /**
     * Document dimension is measured in inches.
     */
    INCH: 1,

    /**
     * Document dimension is measured in centimeters.
     */
    CENTIMETER: 2,

    /**
     * Document dimension is measured in points. 72 points = 1 inch.
     */
    POINT: 3
  }
};

/**
 * A structured text document e.g. a PDF.
 *
 * @property {Object} inputConfig
 *   An input config specifying the content of the document.
 *
 *   This object should have the same structure as [DocumentInputConfig]{@link google.cloud.automl.v1.DocumentInputConfig}
 *
 * @property {Object} documentText
 *   The plain text version of this document.
 *
 *   This object should have the same structure as [TextSnippet]{@link google.cloud.automl.v1.TextSnippet}
 *
 * @property {Object[]} layout
 *   Describes the layout of the document.
 *   Sorted by page_number.
 *
 *   This object should have the same structure as [Layout]{@link google.cloud.automl.v1.Layout}
 *
 * @property {Object} documentDimensions
 *   The dimensions of the page in the document.
 *
 *   This object should have the same structure as [DocumentDimensions]{@link google.cloud.automl.v1.DocumentDimensions}
 *
 * @property {number} pageCount
 *   Number of pages in the document.
 *
 * @typedef Document
 * @memberof google.cloud.automl.v1
 * @see [google.cloud.automl.v1.Document definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1/data_items.proto}
 */
const Document = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Describes the layout information of a
   * text_segment in the
   * document.
   *
   * @property {Object} textSegment
   *   Text Segment that represents a segment in
   *   document_text.
   *
   *   This object should have the same structure as [TextSegment]{@link google.cloud.automl.v1.TextSegment}
   *
   * @property {number} pageNumber
   *   Page number of the
   *   text_segment in
   *   the original document, starts from 1.
   *
   * @property {Object} boundingPoly
   *   The position of the
   *   text_segment in
   *   the page. Contains exactly 4
   *
   *   normalized_vertices
   *   and they are connected by edges in the order provided, which will
   *   represent a rectangle parallel to the frame. The
   *   NormalizedVertex-s are
   *   relative to the page.
   *   Coordinates are based on top-left as point (0,0).
   *
   *   This object should have the same structure as [BoundingPoly]{@link google.cloud.automl.v1.BoundingPoly}
   *
   * @property {number} textSegmentType
   *   The type of the
   *   text_segment in
   *   document.
   *
   *   The number should be among the values of [TextSegmentType]{@link google.cloud.automl.v1.TextSegmentType}
   *
   * @typedef Layout
   * @memberof google.cloud.automl.v1
   * @see [google.cloud.automl.v1.Document.Layout definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1/data_items.proto}
   */
  Layout: {
    // This is for documentation. Actual contents will be loaded by gRPC.

    /**
     * The type of TextSegment in the context of the original document.
     *
     * @enum {number}
     * @memberof google.cloud.automl.v1
     */
    TextSegmentType: {

      /**
       * Should not be used.
       */
      TEXT_SEGMENT_TYPE_UNSPECIFIED: 0,

      /**
       * The text segment is a token. e.g. word.
       */
      TOKEN: 1,

      /**
       * The text segment is a paragraph.
       */
      PARAGRAPH: 2,

      /**
       * The text segment is a form field.
       */
      FORM_FIELD: 3,

      /**
       * The text segment is the name part of a form field. It will be treated
       * as child of another FORM_FIELD TextSegment if its span is subspan of
       * another TextSegment with type FORM_FIELD.
       */
      FORM_FIELD_NAME: 4,

      /**
       * The text segment is the text content part of a form field. It will be
       * treated as child of another FORM_FIELD TextSegment if its span is
       * subspan of another TextSegment with type FORM_FIELD.
       */
      FORM_FIELD_CONTENTS: 5,

      /**
       * The text segment is a whole table, including headers, and all rows.
       */
      TABLE: 6,

      /**
       * The text segment is a table's headers. It will be treated as child of
       * another TABLE TextSegment if its span is subspan of another TextSegment
       * with type TABLE.
       */
      TABLE_HEADER: 7,

      /**
       * The text segment is a row in table. It will be treated as child of
       * another TABLE TextSegment if its span is subspan of another TextSegment
       * with type TABLE.
       */
      TABLE_ROW: 8,

      /**
       * The text segment is a cell in table. It will be treated as child of
       * another TABLE_ROW TextSegment if its span is subspan of another
       * TextSegment with type TABLE_ROW.
       */
      TABLE_CELL: 9
    }
  }
};

/**
 * Example data used for training or prediction.
 *
 * @property {Object} image
 *   Example image.
 *
 *   This object should have the same structure as [Image]{@link google.cloud.automl.v1.Image}
 *
 * @property {Object} textSnippet
 *   Example text.
 *
 *   This object should have the same structure as [TextSnippet]{@link google.cloud.automl.v1.TextSnippet}
 *
 * @property {Object} document
 *   Example document.
 *
 *   This object should have the same structure as [Document]{@link google.cloud.automl.v1.Document}
 *
 * @typedef ExamplePayload
 * @memberof google.cloud.automl.v1
 * @see [google.cloud.automl.v1.ExamplePayload definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1/data_items.proto}
 */
const ExamplePayload = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};