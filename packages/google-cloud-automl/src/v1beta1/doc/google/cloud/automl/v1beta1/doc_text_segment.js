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
 * A contiguous part of a text (string), assuming it has an UTF-8 NFC encoding.
 *
 * @property {string} content
 *   Output only. The content of the TextSegment.
 *
 * @property {number} startOffset
 *   Required. Zero-based character index of the first character of the text
 *   segment (counting characters from the beginning of the text).
 *
 * @property {number} endOffset
 *   Required. Zero-based character index of the first character past the end of
 *   the text segment (counting character from the beginning of the text).
 *   The character at the end_offset is NOT included in the text segment.
 *
 * @typedef TextSegment
 * @memberof google.cloud.automl.v1beta1
 * @see [google.cloud.automl.v1beta1.TextSegment definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1beta1/text_segment.proto}
 */
const TextSegment = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};