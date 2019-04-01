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
 * A SourceContext is a reference to a tree of files. A SourceContext together
 * with a path point to a unique revision of a single file or directory.
 *
 * @property {Object} cloudRepo
 *   A SourceContext referring to a revision in a Google Cloud Source Repo.
 *
 *   This object should have the same structure as [CloudRepoSourceContext]{@link grafeas.v1beta1.source.CloudRepoSourceContext}
 *
 * @property {Object} gerrit
 *   A SourceContext referring to a Gerrit project.
 *
 *   This object should have the same structure as [GerritSourceContext]{@link grafeas.v1beta1.source.GerritSourceContext}
 *
 * @property {Object} git
 *   A SourceContext referring to any third party Git repo (e.g., GitHub).
 *
 *   This object should have the same structure as [GitSourceContext]{@link grafeas.v1beta1.source.GitSourceContext}
 *
 * @property {Object.<string, string>} labels
 *   Labels with user defined metadata.
 *
 * @typedef SourceContext
 * @memberof grafeas.v1beta1.source
 * @see [grafeas.v1beta1.source.SourceContext definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/containeranalysis/v1beta1/source/source.proto}
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
 *   The number should be among the values of [Kind]{@link grafeas.v1beta1.source.Kind}
 *
 * @property {string} name
 *   The alias name.
 *
 * @typedef AliasContext
 * @memberof grafeas.v1beta1.source
 * @see [grafeas.v1beta1.source.AliasContext definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/containeranalysis/v1beta1/source/source.proto}
 */
const AliasContext = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * The type of an alias.
   *
   * @enum {number}
   * @memberof grafeas.v1beta1.source
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
 *   This object should have the same structure as [RepoId]{@link grafeas.v1beta1.source.RepoId}
 *
 * @property {string} revisionId
 *   A revision ID.
 *
 * @property {Object} aliasContext
 *   An alias, which may be a branch or tag.
 *
 *   This object should have the same structure as [AliasContext]{@link grafeas.v1beta1.source.AliasContext}
 *
 * @typedef CloudRepoSourceContext
 * @memberof grafeas.v1beta1.source
 * @see [grafeas.v1beta1.source.CloudRepoSourceContext definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/containeranalysis/v1beta1/source/source.proto}
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
 *   This object should have the same structure as [AliasContext]{@link grafeas.v1beta1.source.AliasContext}
 *
 * @typedef GerritSourceContext
 * @memberof grafeas.v1beta1.source
 * @see [grafeas.v1beta1.source.GerritSourceContext definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/containeranalysis/v1beta1/source/source.proto}
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
 * @memberof grafeas.v1beta1.source
 * @see [grafeas.v1beta1.source.GitSourceContext definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/containeranalysis/v1beta1/source/source.proto}
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
 *   This object should have the same structure as [ProjectRepoId]{@link grafeas.v1beta1.source.ProjectRepoId}
 *
 * @property {string} uid
 *   A server-assigned, globally unique identifier.
 *
 * @typedef RepoId
 * @memberof grafeas.v1beta1.source
 * @see [grafeas.v1beta1.source.RepoId definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/containeranalysis/v1beta1/source/source.proto}
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
 * @memberof grafeas.v1beta1.source
 * @see [grafeas.v1beta1.source.ProjectRepoId definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/containeranalysis/v1beta1/source/source.proto}
 */
const ProjectRepoId = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};