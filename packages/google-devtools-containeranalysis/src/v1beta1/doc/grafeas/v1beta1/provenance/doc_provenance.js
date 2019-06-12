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
 * Provenance of a build. Contains all information needed to verify the full
 * details about the build from source to completion.
 *
 * @property {string} id
 *   Unique identifier of the build.
 *
 * @property {string} projectId
 *   ID of the project.
 *
 * @property {Object[]} commands
 *   Commands requested by the build.
 *
 *   This object should have the same structure as [Command]{@link grafeas.v1beta1.provenance.Command}
 *
 * @property {Object[]} builtArtifacts
 *   Output of the build.
 *
 *   This object should have the same structure as [Artifact]{@link grafeas.v1beta1.provenance.Artifact}
 *
 * @property {Object} createTime
 *   Time at which the build was created.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {Object} startTime
 *   Time at which execution of the build was started.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {Object} endTime
 *   Time at which execution of the build was finished.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {string} creator
 *   E-mail address of the user who initiated this build. Note that this was the
 *   user's e-mail address at the time the build was initiated; this address may
 *   not represent the same end-user for all time.
 *
 * @property {string} logsUri
 *   URI where any logs for this provenance were written.
 *
 * @property {Object} sourceProvenance
 *   Details of the Source input to the build.
 *
 *   This object should have the same structure as [Source]{@link grafeas.v1beta1.provenance.Source}
 *
 * @property {string} triggerId
 *   Trigger identifier if the build was triggered automatically; empty if not.
 *
 * @property {Object.<string, string>} buildOptions
 *   Special options applied to this build. This is a catch-all field where
 *   build providers can enter any desired additional details.
 *
 * @property {string} builderVersion
 *   Version string of the builder at the time this build was executed.
 *
 * @typedef BuildProvenance
 * @memberof grafeas.v1beta1.provenance
 * @see [grafeas.v1beta1.provenance.BuildProvenance definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/containeranalysis/v1beta1/provenance/provenance.proto}
 */
const BuildProvenance = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Source describes the location of the source used for the build.
 *
 * @property {string} artifactStorageSourceUri
 *   If provided, the input binary artifacts for the build came from this
 *   location.
 *
 * @property {Object.<string, Object>} fileHashes
 *   Hash(es) of the build source, which can be used to verify that the original
 *   source integrity was maintained in the build.
 *
 *   The keys to this map are file paths used as build source and the values
 *   contain the hash values for those files.
 *
 *   If the build source came in a single package such as a gzipped tarfile
 *   (.tar.gz), the FileHash will be for the single path to that file.
 *
 * @property {Object} context
 *   If provided, the source code used for the build came from this location.
 *
 *   This object should have the same structure as [SourceContext]{@link grafeas.v1beta1.source.SourceContext}
 *
 * @property {Object[]} additionalContexts
 *   If provided, some of the source code used for the build may be found in
 *   these locations, in the case where the source repository had multiple
 *   remotes or submodules. This list will not include the context specified in
 *   the context field.
 *
 *   This object should have the same structure as [SourceContext]{@link grafeas.v1beta1.source.SourceContext}
 *
 * @typedef Source
 * @memberof grafeas.v1beta1.provenance
 * @see [grafeas.v1beta1.provenance.Source definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/containeranalysis/v1beta1/provenance/provenance.proto}
 */
const Source = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Container message for hashes of byte content of files, used in Source
 * messages to verify integrity of source input to the build.
 *
 * @property {Object[]} fileHash
 *   Collection of file hashes.
 *
 *   This object should have the same structure as [Hash]{@link grafeas.v1beta1.provenance.Hash}
 *
 * @typedef FileHashes
 * @memberof grafeas.v1beta1.provenance
 * @see [grafeas.v1beta1.provenance.FileHashes definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/containeranalysis/v1beta1/provenance/provenance.proto}
 */
const FileHashes = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Container message for hash values.
 *
 * @property {number} type
 *   The type of hash that was performed.
 *
 *   The number should be among the values of [HashType]{@link grafeas.v1beta1.provenance.HashType}
 *
 * @property {Buffer} value
 *   The hash value.
 *
 * @typedef Hash
 * @memberof grafeas.v1beta1.provenance
 * @see [grafeas.v1beta1.provenance.Hash definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/containeranalysis/v1beta1/provenance/provenance.proto}
 */
const Hash = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Specifies the hash algorithm, if any.
   *
   * @enum {number}
   * @memberof grafeas.v1beta1.provenance
   */
  HashType: {

    /**
     * Unknown.
     */
    HASH_TYPE_UNSPECIFIED: 0,

    /**
     * A SHA-256 hash.
     */
    SHA256: 1
  }
};

/**
 * Command describes a step performed as part of the build pipeline.
 *
 * @property {string} name
 *   Name of the command, as presented on the command line, or if the command is
 *   packaged as a Docker container, as presented to `docker pull`.
 *
 * @property {string[]} env
 *   Environment variables set before running this command.
 *
 * @property {string[]} args
 *   Command-line arguments used when executing this command.
 *
 * @property {string} dir
 *   Working directory (relative to project source root) used when running this
 *   command.
 *
 * @property {string} id
 *   Optional unique identifier for this command, used in wait_for to reference
 *   this command as a dependency.
 *
 * @property {string[]} waitFor
 *   The ID(s) of the command(s) that this command depends on.
 *
 * @typedef Command
 * @memberof grafeas.v1beta1.provenance
 * @see [grafeas.v1beta1.provenance.Command definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/containeranalysis/v1beta1/provenance/provenance.proto}
 */
const Command = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Artifact describes a build product.
 *
 * @property {string} checksum
 *   Hash or checksum value of a binary, or Docker Registry 2.0 digest of a
 *   container.
 *
 * @property {string} id
 *   Artifact ID, if any; for container images, this will be a URL by digest
 *   like `gcr.io/projectID/imagename@sha256:123456`.
 *
 * @property {string[]} names
 *   Related artifact names. This may be the path to a binary or jar file, or in
 *   the case of a container build, the name used to push the container image to
 *   Google Container Registry, as presented to `docker push`. Note that a
 *   single Artifact ID can have multiple names, for example if two tags are
 *   applied to one image.
 *
 * @typedef Artifact
 * @memberof grafeas.v1beta1.provenance
 * @see [grafeas.v1beta1.provenance.Artifact definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/containeranalysis/v1beta1/provenance/provenance.proto}
 */
const Artifact = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};