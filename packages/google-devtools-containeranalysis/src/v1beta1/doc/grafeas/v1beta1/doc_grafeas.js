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
 * An instance of an analysis type that has been found on a resource.
 *
 * @property {string} name
 *   Output only. The name of the occurrence in the form of
 *   `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.
 *
 * @property {Object} resource
 *   Required. Immutable. The resource for which the occurrence applies.
 *
 *   This object should have the same structure as [Resource]{@link grafeas.v1beta1.Resource}
 *
 * @property {string} noteName
 *   Required. Immutable. The analysis note associated with this occurrence, in
 *   the form of `projects[PROVIDER_ID]/notes/[NOTE_ID]`. This field can be used
 *   as a filter in list requests.
 *
 * @property {number} kind
 *   Output only. This explicitly denotes which of the occurrence details are
 *   specified. This field can be used as a filter in list requests.
 *
 *   The number should be among the values of [NoteKind]{@link grafeas.v1beta1.NoteKind}
 *
 * @property {string} remediation
 *   A description of actions that can be taken to remedy the note.
 *
 * @property {Object} createTime
 *   Output only. The time this occurrence was created.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {Object} updateTime
 *   Output only. The time this occurrence was last updated.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {Object} vulnerability
 *   Describes a security vulnerability.
 *
 *   This object should have the same structure as [Details]{@link grafeas.v1beta1.vulnerability.Details}
 *
 * @property {Object} build
 *   Describes a verifiable build.
 *
 *   This object should have the same structure as [Details]{@link grafeas.v1beta1.build.Details}
 *
 * @property {Object} derivedImage
 *   Describes how this resource derives from the basis in the associated
 *   note.
 *
 *   This object should have the same structure as [Details]{@link grafeas.v1beta1.image.Details}
 *
 * @property {Object} installation
 *   Describes the installation of a package on the linked resource.
 *
 *   This object should have the same structure as [Details]{@link grafeas.v1beta1.package.Details}
 *
 * @property {Object} deployment
 *   Describes the deployment of an artifact on a runtime.
 *
 *   This object should have the same structure as [Details]{@link grafeas.v1beta1.deployment.Details}
 *
 * @property {Object} discovered
 *   Describes when a resource was discovered.
 *
 *   This object should have the same structure as [Details]{@link grafeas.v1beta1.discovery.Details}
 *
 * @property {Object} attestation
 *   Describes an attestation of an artifact.
 *
 *   This object should have the same structure as [Details]{@link grafeas.v1beta1.attestation.Details}
 *
 * @typedef Occurrence
 * @memberof grafeas.v1beta1
 * @see [grafeas.v1beta1.Occurrence definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/containeranalysis/v1beta1/grafeas/grafeas.proto}
 */
const Occurrence = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * An entity that can have metadata. For example, a Docker image.
 *
 * @property {string} name
 *   The name of the resource. For example, the name of a Docker image -
 *   "Debian".
 *
 * @property {string} uri
 *   The unique URI of the resource. For example,
 *   `https://gcr.io/project/image@sha256:foo` for a Docker image.
 *
 * @property {Object} contentHash
 *   The hash of the resource content. For example, the Docker digest.
 *
 *   This object should have the same structure as [Hash]{@link grafeas.v1beta1.provenance.Hash}
 *
 * @typedef Resource
 * @memberof grafeas.v1beta1
 * @see [grafeas.v1beta1.Resource definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/containeranalysis/v1beta1/grafeas/grafeas.proto}
 */
const Resource = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A type of analysis that can be done for a resource.
 *
 * @property {string} name
 *   Output only. The name of the note in the form of
 *   `projects/[PROVIDER_ID]/notes/[NOTE_ID]`.
 *
 * @property {string} shortDescription
 *   A one sentence description of this note.
 *
 * @property {string} longDescription
 *   A detailed description of this note.
 *
 * @property {number} kind
 *   Output only. The type of analysis. This field can be used as a filter in
 *   list requests.
 *
 *   The number should be among the values of [NoteKind]{@link grafeas.v1beta1.NoteKind}
 *
 * @property {Object[]} relatedUrl
 *   URLs associated with this note.
 *
 *   This object should have the same structure as [RelatedUrl]{@link grafeas.v1beta1.RelatedUrl}
 *
 * @property {Object} expirationTime
 *   Time of expiration for this note. Empty if note does not expire.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {Object} createTime
 *   Output only. The time this note was created. This field can be used as a
 *   filter in list requests.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {Object} updateTime
 *   Output only. The time this note was last updated. This field can be used as
 *   a filter in list requests.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {string[]} relatedNoteNames
 *   Other notes related to this note.
 *
 * @property {Object} vulnerability
 *   A note describing a package vulnerability.
 *
 *   This object should have the same structure as [Vulnerability]{@link grafeas.v1beta1.vulnerability.Vulnerability}
 *
 * @property {Object} build
 *   A note describing build provenance for a verifiable build.
 *
 *   This object should have the same structure as [Build]{@link grafeas.v1beta1.build.Build}
 *
 * @property {Object} baseImage
 *   A note describing a base image.
 *
 *   This object should have the same structure as [Basis]{@link grafeas.v1beta1.image.Basis}
 *
 * @property {Object} package
 *   A note describing a package hosted by various package managers.
 *
 *   This object should have the same structure as [Package]{@link grafeas.v1beta1.package.Package}
 *
 * @property {Object} deployable
 *   A note describing something that can be deployed.
 *
 *   This object should have the same structure as [Deployable]{@link grafeas.v1beta1.deployment.Deployable}
 *
 * @property {Object} discovery
 *   A note describing the initial analysis of a resource.
 *
 *   This object should have the same structure as [Discovery]{@link grafeas.v1beta1.discovery.Discovery}
 *
 * @property {Object} attestationAuthority
 *   A note describing an attestation role.
 *
 *   This object should have the same structure as [Authority]{@link grafeas.v1beta1.attestation.Authority}
 *
 * @typedef Note
 * @memberof grafeas.v1beta1
 * @see [grafeas.v1beta1.Note definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/containeranalysis/v1beta1/grafeas/grafeas.proto}
 */
const Note = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request to get an occurrence.
 *
 * @property {string} name
 *   The name of the occurrence in the form of
 *   `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.
 *
 * @typedef GetOccurrenceRequest
 * @memberof grafeas.v1beta1
 * @see [grafeas.v1beta1.GetOccurrenceRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/containeranalysis/v1beta1/grafeas/grafeas.proto}
 */
const GetOccurrenceRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request to list occurrences.
 *
 * @property {string} parent
 *   The name of the project to list occurrences for in the form of
 *   `projects/[PROJECT_ID]`.
 *
 * @property {string} filter
 *   The filter expression.
 *
 * @property {number} pageSize
 *   Number of occurrences to return in the list.
 *
 * @property {string} pageToken
 *   Token to provide to skip to a particular spot in the list.
 *
 * @typedef ListOccurrencesRequest
 * @memberof grafeas.v1beta1
 * @see [grafeas.v1beta1.ListOccurrencesRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/containeranalysis/v1beta1/grafeas/grafeas.proto}
 */
const ListOccurrencesRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Response for listing occurrences.
 *
 * @property {Object[]} occurrences
 *   The occurrences requested.
 *
 *   This object should have the same structure as [Occurrence]{@link grafeas.v1beta1.Occurrence}
 *
 * @property {string} nextPageToken
 *   The next pagination token in the list response. It should be used as
 *   `page_token` for the following request. An empty value means no more
 *   results.
 *
 * @typedef ListOccurrencesResponse
 * @memberof grafeas.v1beta1
 * @see [grafeas.v1beta1.ListOccurrencesResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/containeranalysis/v1beta1/grafeas/grafeas.proto}
 */
const ListOccurrencesResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request to delete a occurrence.
 *
 * @property {string} name
 *   The name of the occurrence in the form of
 *   `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.
 *
 * @typedef DeleteOccurrenceRequest
 * @memberof grafeas.v1beta1
 * @see [grafeas.v1beta1.DeleteOccurrenceRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/containeranalysis/v1beta1/grafeas/grafeas.proto}
 */
const DeleteOccurrenceRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request to create a new occurrence.
 *
 * @property {string} parent
 *   The name of the project in the form of `projects/[PROJECT_ID]`, under which
 *   the occurrence is to be created.
 *
 * @property {Object} occurrence
 *   The occurrence to create.
 *
 *   This object should have the same structure as [Occurrence]{@link grafeas.v1beta1.Occurrence}
 *
 * @typedef CreateOccurrenceRequest
 * @memberof grafeas.v1beta1
 * @see [grafeas.v1beta1.CreateOccurrenceRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/containeranalysis/v1beta1/grafeas/grafeas.proto}
 */
const CreateOccurrenceRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request to update an occurrence.
 *
 * @property {string} name
 *   The name of the occurrence in the form of
 *   `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.
 *
 * @property {Object} occurrence
 *   The updated occurrence.
 *
 *   This object should have the same structure as [Occurrence]{@link grafeas.v1beta1.Occurrence}
 *
 * @property {Object} updateMask
 *   The fields to update.
 *
 *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
 *
 * @typedef UpdateOccurrenceRequest
 * @memberof grafeas.v1beta1
 * @see [grafeas.v1beta1.UpdateOccurrenceRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/containeranalysis/v1beta1/grafeas/grafeas.proto}
 */
const UpdateOccurrenceRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request to get a note.
 *
 * @property {string} name
 *   The name of the note in the form of
 *   `projects/[PROVIDER_ID]/notes/[NOTE_ID]`.
 *
 * @typedef GetNoteRequest
 * @memberof grafeas.v1beta1
 * @see [grafeas.v1beta1.GetNoteRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/containeranalysis/v1beta1/grafeas/grafeas.proto}
 */
const GetNoteRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request to get the note to which the specified occurrence is attached.
 *
 * @property {string} name
 *   The name of the occurrence in the form of
 *   `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.
 *
 * @typedef GetOccurrenceNoteRequest
 * @memberof grafeas.v1beta1
 * @see [grafeas.v1beta1.GetOccurrenceNoteRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/containeranalysis/v1beta1/grafeas/grafeas.proto}
 */
const GetOccurrenceNoteRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request to list notes.
 *
 * @property {string} parent
 *   The name of the project to list notes for in the form of
 *   `projects/[PROJECT_ID]`.
 *
 * @property {string} filter
 *   The filter expression.
 *
 * @property {number} pageSize
 *   Number of notes to return in the list.
 *
 * @property {string} pageToken
 *   Token to provide to skip to a particular spot in the list.
 *
 * @typedef ListNotesRequest
 * @memberof grafeas.v1beta1
 * @see [grafeas.v1beta1.ListNotesRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/containeranalysis/v1beta1/grafeas/grafeas.proto}
 */
const ListNotesRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Response for listing notes.
 *
 * @property {Object[]} notes
 *   The notes requested.
 *
 *   This object should have the same structure as [Note]{@link grafeas.v1beta1.Note}
 *
 * @property {string} nextPageToken
 *   The next pagination token in the list response. It should be used as
 *   `page_token` for the following request. An empty value means no more
 *   results.
 *
 * @typedef ListNotesResponse
 * @memberof grafeas.v1beta1
 * @see [grafeas.v1beta1.ListNotesResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/containeranalysis/v1beta1/grafeas/grafeas.proto}
 */
const ListNotesResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request to delete a note.
 *
 * @property {string} name
 *   The name of the note in the form of
 *   `projects/[PROVIDER_ID]/notes/[NOTE_ID]`.
 *
 * @typedef DeleteNoteRequest
 * @memberof grafeas.v1beta1
 * @see [grafeas.v1beta1.DeleteNoteRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/containeranalysis/v1beta1/grafeas/grafeas.proto}
 */
const DeleteNoteRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request to create a new note.
 *
 * @property {string} parent
 *   The name of the project in the form of `projects/[PROJECT_ID]`, under which
 *   the note is to be created.
 *
 * @property {string} noteId
 *   The ID to use for this note.
 *
 * @property {Object} note
 *   The note to create.
 *
 *   This object should have the same structure as [Note]{@link grafeas.v1beta1.Note}
 *
 * @typedef CreateNoteRequest
 * @memberof grafeas.v1beta1
 * @see [grafeas.v1beta1.CreateNoteRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/containeranalysis/v1beta1/grafeas/grafeas.proto}
 */
const CreateNoteRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request to update a note.
 *
 * @property {string} name
 *   The name of the note in the form of
 *   `projects/[PROVIDER_ID]/notes/[NOTE_ID]`.
 *
 * @property {Object} note
 *   The updated note.
 *
 *   This object should have the same structure as [Note]{@link grafeas.v1beta1.Note}
 *
 * @property {Object} updateMask
 *   The fields to update.
 *
 *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
 *
 * @typedef UpdateNoteRequest
 * @memberof grafeas.v1beta1
 * @see [grafeas.v1beta1.UpdateNoteRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/containeranalysis/v1beta1/grafeas/grafeas.proto}
 */
const UpdateNoteRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request to list occurrences for a note.
 *
 * @property {string} name
 *   The name of the note to list occurrences for in the form of
 *   `projects/[PROVIDER_ID]/notes/[NOTE_ID]`.
 *
 * @property {string} filter
 *   The filter expression.
 *
 * @property {number} pageSize
 *   Number of occurrences to return in the list.
 *
 * @property {string} pageToken
 *   Token to provide to skip to a particular spot in the list.
 *
 * @typedef ListNoteOccurrencesRequest
 * @memberof grafeas.v1beta1
 * @see [grafeas.v1beta1.ListNoteOccurrencesRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/containeranalysis/v1beta1/grafeas/grafeas.proto}
 */
const ListNoteOccurrencesRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Response for listing occurrences for a note.
 *
 * @property {Object[]} occurrences
 *   The occurrences attached to the specified note.
 *
 *   This object should have the same structure as [Occurrence]{@link grafeas.v1beta1.Occurrence}
 *
 * @property {string} nextPageToken
 *   Token to provide to skip to a particular spot in the list.
 *
 * @typedef ListNoteOccurrencesResponse
 * @memberof grafeas.v1beta1
 * @see [grafeas.v1beta1.ListNoteOccurrencesResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/containeranalysis/v1beta1/grafeas/grafeas.proto}
 */
const ListNoteOccurrencesResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request to create notes in batch.
 *
 * @property {string} parent
 *   The name of the project in the form of `projects/[PROJECT_ID]`, under which
 *   the notes are to be created.
 *
 * @property {Object.<string, Object>} notes
 *   The notes to create.
 *
 * @typedef BatchCreateNotesRequest
 * @memberof grafeas.v1beta1
 * @see [grafeas.v1beta1.BatchCreateNotesRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/containeranalysis/v1beta1/grafeas/grafeas.proto}
 */
const BatchCreateNotesRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Response for creating notes in batch.
 *
 * @property {Object[]} notes
 *   The notes that were created.
 *
 *   This object should have the same structure as [Note]{@link grafeas.v1beta1.Note}
 *
 * @typedef BatchCreateNotesResponse
 * @memberof grafeas.v1beta1
 * @see [grafeas.v1beta1.BatchCreateNotesResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/containeranalysis/v1beta1/grafeas/grafeas.proto}
 */
const BatchCreateNotesResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request to create occurrences in batch.
 *
 * @property {string} parent
 *   The name of the project in the form of `projects/[PROJECT_ID]`, under which
 *   the occurrences are to be created.
 *
 * @property {Object[]} occurrences
 *   The occurrences to create.
 *
 *   This object should have the same structure as [Occurrence]{@link grafeas.v1beta1.Occurrence}
 *
 * @typedef BatchCreateOccurrencesRequest
 * @memberof grafeas.v1beta1
 * @see [grafeas.v1beta1.BatchCreateOccurrencesRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/containeranalysis/v1beta1/grafeas/grafeas.proto}
 */
const BatchCreateOccurrencesRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Response for creating occurrences in batch.
 *
 * @property {Object[]} occurrences
 *   The occurrences that were created.
 *
 *   This object should have the same structure as [Occurrence]{@link grafeas.v1beta1.Occurrence}
 *
 * @typedef BatchCreateOccurrencesResponse
 * @memberof grafeas.v1beta1
 * @see [grafeas.v1beta1.BatchCreateOccurrencesResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/containeranalysis/v1beta1/grafeas/grafeas.proto}
 */
const BatchCreateOccurrencesResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request to get a vulnerability summary for some set of occurrences.
 *
 * @property {string} parent
 *   The name of the project to get a vulnerability summary for in the form of
 *   `projects/[PROJECT_ID]`.
 *
 * @property {string} filter
 *   The filter expression.
 *
 * @typedef GetVulnerabilityOccurrencesSummaryRequest
 * @memberof grafeas.v1beta1
 * @see [grafeas.v1beta1.GetVulnerabilityOccurrencesSummaryRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/containeranalysis/v1beta1/grafeas/grafeas.proto}
 */
const GetVulnerabilityOccurrencesSummaryRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A summary of how many vulnerability occurrences there are per resource and
 * severity type.
 *
 * @property {Object[]} counts
 *   A listing by resource of the number of fixable and total vulnerabilities.
 *
 *   This object should have the same structure as [FixableTotalByDigest]{@link grafeas.v1beta1.FixableTotalByDigest}
 *
 * @typedef VulnerabilityOccurrencesSummary
 * @memberof grafeas.v1beta1
 * @see [grafeas.v1beta1.VulnerabilityOccurrencesSummary definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/containeranalysis/v1beta1/grafeas/grafeas.proto}
 */
const VulnerabilityOccurrencesSummary = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Per resource and severity counts of fixable and total vulnerabilites.
   *
   * @property {Object} resource
   *   The affected resource.
   *
   *   This object should have the same structure as [Resource]{@link grafeas.v1beta1.Resource}
   *
   * @property {number} severity
   *   The severity for this count. SEVERITY_UNSPECIFIED indicates total across
   *   all severities.
   *
   *   The number should be among the values of [Severity]{@link grafeas.v1beta1.vulnerability.Severity}
   *
   * @property {number} fixableCount
   *   The number of fixable vulnerabilities associated with this resource.
   *
   * @property {number} totalCount
   *   The total number of vulnerabilities associated with this resource.
   *
   * @typedef FixableTotalByDigest
   * @memberof grafeas.v1beta1
   * @see [grafeas.v1beta1.VulnerabilityOccurrencesSummary.FixableTotalByDigest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/containeranalysis/v1beta1/grafeas/grafeas.proto}
   */
  FixableTotalByDigest: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  }
};