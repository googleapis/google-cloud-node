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
 *   Required. Unique identifier of the build.
 *
 * @property {string} projectId
 *   ID of the project.
 *
 * @property {Object[]} commands
 *   Commands requested by the build.
 *
 *   This object should have the same structure as [Command]{@link grafeas.v1.Command}
 *
 * @property {Object[]} builtArtifacts
 *   Output of the build.
 *
 *   This object should have the same structure as [Artifact]{@link grafeas.v1.Artifact}
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
 *   This object should have the same structure as [Source]{@link grafeas.v1.Source}
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
 * @memberof grafeas.v1
 * @see [grafeas.v1.BuildProvenance definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/grafeas/v1/provenance.proto}
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
 *   This object should have the same structure as [SourceContext]{@link grafeas.v1.SourceContext}
 *
 * @property {Object[]} additionalContexts
 *   If provided, some of the source code used for the build may be found in
 *   these locations, in the case where the source repository had multiple
 *   remotes or submodules. This list will not include the context specified in
 *   the context field.
 *
 *   This object should have the same structure as [SourceContext]{@link grafeas.v1.SourceContext}
 *
 * @typedef Source
 * @memberof grafeas.v1
 * @see [grafeas.v1.Source definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/grafeas/v1/provenance.proto}
 */
const Source = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Container message for hashes of byte content of files, used in source
 * messages to verify integrity of source input to the build.
 *
 * @property {Object[]} fileHash
 *   Required. Collection of file hashes.
 *
 *   This object should have the same structure as [Hash]{@link grafeas.v1.Hash}
 *
 * @typedef FileHashes
 * @memberof grafeas.v1
 * @see [grafeas.v1.FileHashes definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/grafeas/v1/provenance.proto}
 */
const FileHashes = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Container message for hash values.
 *
 * @property {string} type
 *   Required. The type of hash that was performed, e.g. "SHA-256".
 *
 * @property {Buffer} value
 *   Required. The hash value.
 *
 * @typedef Hash
 * @memberof grafeas.v1
 * @see [grafeas.v1.Hash definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/grafeas/v1/provenance.proto}
 */
const Hash = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Command describes a step performed as part of the build pipeline.
 *
 * @property {string} name
 *   Required. Name of the command, as presented on the command line, or if the
 *   command is packaged as a Docker container, as presented to `docker pull`.
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
 * @memberof grafeas.v1
 * @see [grafeas.v1.Command definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/grafeas/v1/provenance.proto}
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
 * @memberof grafeas.v1
 * @see [grafeas.v1.Artifact definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/grafeas/v1/provenance.proto}
 */
const Artifact = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A SourceContext is a reference to a tree of files. A SourceContext together
 * with a path point to a unique revision of a single file or directory.
 *
 * @property {Object} cloudRepo
 *   A SourceContext referring to a revision in a Google Cloud Source Repo.
 *
 *   This object should have the same structure as [CloudRepoSourceContext]{@link grafeas.v1.CloudRepoSourceContext}
 *
 * @property {Object} gerrit
 *   A SourceContext referring to a Gerrit project.
 *
 *   This object should have the same structure as [GerritSourceContext]{@link grafeas.v1.GerritSourceContext}
 *
 * @property {Object} git
 *   A SourceContext referring to any third party Git repo (e.g., GitHub).
 *
 *   This object should have the same structure as [GitSourceContext]{@link grafeas.v1.GitSourceContext}
 *
 * @property {Object.<string, string>} labels
 *   Labels with user defined metadata.
 *
 * @typedef SourceContext
 * @memberof grafeas.v1
 * @see [grafeas.v1.SourceContext definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/grafeas/v1/provenance.proto}
 */
const SourceContext = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * An alias to a repo revision.
 *
 * @property {number} kind
 *   The alias kind.
 *
 *   The number should be among the values of [Kind]{@link grafeas.v1.Kind}
 *
 * @property {string} name
 *   The alias name.
 *
 * @typedef AliasContext
 * @memberof grafeas.v1
 * @see [grafeas.v1.AliasContext definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/grafeas/v1/provenance.proto}
 */
const AliasContext = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * The type of an alias.
   *
   * @enum {number}
   * @memberof grafeas.v1
   */
  Kind: {

    /**
     * Unknown.
     */
    KIND_UNSPECIFIED: 0,

    /**
     * Git tag.
     */
    FIXED: 1,

    /**
     * Git branch.
     */
    MOVABLE: 2,

    /**
     * Used to specify non-standard aliases. For example, if a Git repo has a
     * ref named "refs/foo/bar".
     */
    OTHER: 4
  }
};

/**
 * A CloudRepoSourceContext denotes a particular revision in a Google Cloud
 * Source Repo.
 *
 * @property {Object} repoId
 *   The ID of the repo.
 *
 *   This object should have the same structure as [RepoId]{@link grafeas.v1.RepoId}
 *
 * @property {string} revisionId
 *   A revision ID.
 *
 * @property {Object} aliasContext
 *   An alias, which may be a branch or tag.
 *
 *   This object should have the same structure as [AliasContext]{@link grafeas.v1.AliasContext}
 *
 * @typedef CloudRepoSourceContext
 * @memberof grafeas.v1
 * @see [grafeas.v1.CloudRepoSourceContext definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/grafeas/v1/provenance.proto}
 */
const CloudRepoSourceContext = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A SourceContext referring to a Gerrit project.
 *
 * @property {string} hostUri
 *   The URI of a running Gerrit instance.
 *
 * @property {string} gerritProject
 *   The full project name within the host. Projects may be nested, so
 *   "project/subproject" is a valid project name. The "repo name" is the
 *   hostURI/project.
 *
 * @property {string} revisionId
 *   A revision (commit) ID.
 *
 * @property {Object} aliasContext
 *   An alias, which may be a branch or tag.
 *
 *   This object should have the same structure as [AliasContext]{@link grafeas.v1.AliasContext}
 *
 * @typedef GerritSourceContext
 * @memberof grafeas.v1
 * @see [grafeas.v1.GerritSourceContext definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/grafeas/v1/provenance.proto}
 */
const GerritSourceContext = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A GitSourceContext denotes a particular revision in a third party Git
 * repository (e.g., GitHub).
 *
 * @property {string} url
 *   Git repository URL.
 *
 * @property {string} revisionId
 *   Git commit hash.
 *
 * @typedef GitSourceContext
 * @memberof grafeas.v1
 * @see [grafeas.v1.GitSourceContext definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/grafeas/v1/provenance.proto}
 */
const GitSourceContext = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A unique identifier for a Cloud Repo.
 *
 * @property {Object} projectRepoId
 *   A combination of a project ID and a repo name.
 *
 *   This object should have the same structure as [ProjectRepoId]{@link grafeas.v1.ProjectRepoId}
 *
 * @property {string} uid
 *   A server-assigned, globally unique identifier.
 *
 * @typedef RepoId
 * @memberof grafeas.v1
 * @see [grafeas.v1.RepoId definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/grafeas/v1/provenance.proto}
 */
const RepoId = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Selects a repo using a Google Cloud Platform project ID (e.g.,
 * winged-cargo-31) and a repo name within that project.
 *
 * @property {string} projectId
 *   The ID of the project.
 *
 * @property {string} repoName
 *   The name of the repo. Leave empty for the default repo.
 *
 * @typedef ProjectRepoId
 * @memberof grafeas.v1
 * @see [grafeas.v1.ProjectRepoId definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/grafeas/v1/provenance.proto}
 */
const ProjectRepoId = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};