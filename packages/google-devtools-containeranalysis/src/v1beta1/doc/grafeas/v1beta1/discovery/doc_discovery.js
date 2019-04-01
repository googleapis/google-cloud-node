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
 * A note that indicates a type of analysis a provider would perform. This note
 * exists in a provider's project. A `Discovery` occurrence is created in a
 * consumer's project at the start of analysis.
 *
 * @property {number} analysisKind
 *   The kind of analysis that is handled by this discovery.
 *
 *   The number should be among the values of [NoteKind]{@link grafeas.v1beta1.NoteKind}
 *
 * @typedef Discovery
 * @memberof grafeas.v1beta1.discovery
 * @see [grafeas.v1beta1.discovery.Discovery definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/containeranalysis/v1beta1/discovery/discovery.proto}
 */
const Discovery = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Details of a discovery occurrence.
 *
 * @property {Object} discovered
 *   Analysis status for the discovered resource.
 *
 *   This object should have the same structure as [Discovered]{@link grafeas.v1beta1.discovery.Discovered}
 *
 * @typedef Details
 * @memberof grafeas.v1beta1.discovery
 * @see [grafeas.v1beta1.discovery.Details definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/containeranalysis/v1beta1/discovery/discovery.proto}
 */
const Details = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Provides information about the analysis status of a discovered resource.
 *
 * @property {number} continuousAnalysis
 *   Whether the resource is continuously analyzed.
 *
 *   The number should be among the values of [ContinuousAnalysis]{@link grafeas.v1beta1.discovery.ContinuousAnalysis}
 *
 * @property {Object} lastAnalysisTime
 *   The last time continuous analysis was done for this resource.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {number} analysisStatus
 *   The status of discovery for the resource.
 *
 *   The number should be among the values of [AnalysisStatus]{@link grafeas.v1beta1.discovery.AnalysisStatus}
 *
 * @property {Object} analysisStatusError
 *   When an error is encountered this will contain a LocalizedMessage under
 *   details to show to the user. The LocalizedMessage is output only and
 *   populated by the API.
 *
 *   This object should have the same structure as [Status]{@link google.rpc.Status}
 *
 * @typedef Discovered
 * @memberof grafeas.v1beta1.discovery
 * @see [grafeas.v1beta1.discovery.Discovered definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/containeranalysis/v1beta1/discovery/discovery.proto}
 */
const Discovered = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Analysis status for a resource. Currently for initial analysis only (not
   * updated in continuous analysis).
   *
   * @enum {number}
   * @memberof grafeas.v1beta1.discovery
   */
  AnalysisStatus: {

    /**
     * Unknown.
     */
    ANALYSIS_STATUS_UNSPECIFIED: 0,

    /**
     * Resource is known but no action has been taken yet.
     */
    PENDING: 1,

    /**
     * Resource is being analyzed.
     */
    SCANNING: 2,

    /**
     * Analysis has finished successfully.
     */
    FINISHED_SUCCESS: 3,

    /**
     * Analysis has finished unsuccessfully, the analysis itself is in a bad
     * state.
     */
    FINISHED_FAILED: 4,

    /**
     * The resource is known not to be supported
     */
    FINISHED_UNSUPPORTED: 5
  },

  /**
   * Whether the resource is continuously analyzed.
   *
   * @enum {number}
   * @memberof grafeas.v1beta1.discovery
   */
  ContinuousAnalysis: {

    /**
     * Unknown.
     */
    CONTINUOUS_ANALYSIS_UNSPECIFIED: 0,

    /**
     * The resource is continuously analyzed.
     */
    ACTIVE: 1,

    /**
     * The resource is ignored for continuous analysis.
     */
    INACTIVE: 2
  }
};