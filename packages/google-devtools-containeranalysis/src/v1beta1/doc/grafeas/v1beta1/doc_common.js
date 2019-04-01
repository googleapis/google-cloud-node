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
 * Metadata for any related URL information.
 *
 * @property {string} url
 *   Specific URL associated with the resource.
 *
 * @property {string} label
 *   Label to describe usage of the URL.
 *
 * @typedef RelatedUrl
 * @memberof grafeas.v1beta1
 * @see [grafeas.v1beta1.RelatedUrl definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/containeranalysis/v1beta1/common/common.proto}
 */
const RelatedUrl = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Kind represents the kinds of notes supported.
 *
 * @enum {number}
 * @memberof grafeas.v1beta1
 */
const NoteKind = {

  /**
   * Unknown.
   */
  NOTE_KIND_UNSPECIFIED: 0,

  /**
   * The note and occurrence represent a package vulnerability.
   */
  VULNERABILITY: 1,

  /**
   * The note and occurrence assert build provenance.
   */
  BUILD: 2,

  /**
   * This represents an image basis relationship.
   */
  IMAGE: 3,

  /**
   * This represents a package installed via a package manager.
   */
  PACKAGE: 4,

  /**
   * The note and occurrence track deployment events.
   */
  DEPLOYMENT: 5,

  /**
   * The note and occurrence track the initial discovery status of a resource.
   */
  DISCOVERY: 6,

  /**
   * This represents a logical "role" that can attest to artifacts.
   */
  ATTESTATION: 7
};