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
 * Specifies a build to retry.
 *
 * @property {string} projectId
 *   Required. ID of the project.
 *
 * @property {string} id
 *   Required. Build ID of the original build.
 *
 * @typedef RetryBuildRequest
 * @memberof google.devtools.cloudbuild.v1
 * @see [google.devtools.cloudbuild.v1.RetryBuildRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/cloudbuild/v1/cloudbuild.proto}
 */
const RetryBuildRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Specifies a build trigger to run and the source to use.
 *
 * @property {string} projectId
 *   Required. ID of the project.
 *
 * @property {string} triggerId
 *   Required. ID of the trigger.
 *
 * @property {Object} source
 *   Required. Source to build against this trigger.
 *
 *   This object should have the same structure as [RepoSource]{@link google.devtools.cloudbuild.v1.RepoSource}
 *
 * @typedef RunBuildTriggerRequest
 * @memberof google.devtools.cloudbuild.v1
 * @see [google.devtools.cloudbuild.v1.RunBuildTriggerRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/cloudbuild/v1/cloudbuild.proto}
 */
const RunBuildTriggerRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Location of the source in an archive file in Google Cloud Storage.
 *
 * @property {string} bucket
 *   Google Cloud Storage bucket containing the source (see
 *   [Bucket Name
 *   Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)).
 *
 * @property {string} object
 *   Google Cloud Storage object containing the source.
 *
 *   This object must be a gzipped archive file (`.tar.gz`) containing source to
 *   build.
 *
 * @property {number} generation
 *   Google Cloud Storage generation for the object. If the generation is
 *   omitted, the latest generation will be used.
 *
 * @typedef StorageSource
 * @memberof google.devtools.cloudbuild.v1
 * @see [google.devtools.cloudbuild.v1.StorageSource definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/cloudbuild/v1/cloudbuild.proto}
 */
const StorageSource = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Location of the source in a Google Cloud Source Repository.
 *
 * @property {string} projectId
 *   ID of the project that owns the Cloud Source Repository. If omitted, the
 *   project ID requesting the build is assumed.
 *
 * @property {string} repoName
 *   Name of the Cloud Source Repository. If omitted, the name "default" is
 *   assumed.
 *
 * @property {string} branchName
 *   Regex matching branches to build.
 *
 *   The syntax of the regular expressions accepted is the syntax accepted by
 *   RE2 and described at https://github.com/google/re2/wiki/Syntax
 *
 * @property {string} tagName
 *   Regex matching tags to build.
 *
 *   The syntax of the regular expressions accepted is the syntax accepted by
 *   RE2 and described at https://github.com/google/re2/wiki/Syntax
 *
 * @property {string} commitSha
 *   Explicit commit SHA to build.
 *
 * @property {string} dir
 *   Directory, relative to the source root, in which to run the build.
 *
 *   This must be a relative path. If a step's `dir` is specified and is an
 *   absolute path, this value is ignored for that step's execution.
 *
 * @typedef RepoSource
 * @memberof google.devtools.cloudbuild.v1
 * @see [google.devtools.cloudbuild.v1.RepoSource definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/cloudbuild/v1/cloudbuild.proto}
 */
const RepoSource = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Location of the source in a supported storage service.
 *
 * @property {Object} storageSource
 *   If provided, get the source from this location in Google Cloud Storage.
 *
 *   This object should have the same structure as [StorageSource]{@link google.devtools.cloudbuild.v1.StorageSource}
 *
 * @property {Object} repoSource
 *   If provided, get the source from this location in a Cloud Source
 *   Repository.
 *
 *   This object should have the same structure as [RepoSource]{@link google.devtools.cloudbuild.v1.RepoSource}
 *
 * @typedef Source
 * @memberof google.devtools.cloudbuild.v1
 * @see [google.devtools.cloudbuild.v1.Source definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/cloudbuild/v1/cloudbuild.proto}
 */
const Source = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * An image built by the pipeline.
 *
 * @property {string} name
 *   Name used to push the container image to Google Container Registry, as
 *   presented to `docker push`.
 *
 * @property {string} digest
 *   Docker Registry 2.0 digest.
 *
 * @property {Object} pushTiming
 *   Output only. Stores timing information for pushing the specified image.
 *
 *   This object should have the same structure as [TimeSpan]{@link google.devtools.cloudbuild.v1.TimeSpan}
 *
 * @typedef BuiltImage
 * @memberof google.devtools.cloudbuild.v1
 * @see [google.devtools.cloudbuild.v1.BuiltImage definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/cloudbuild/v1/cloudbuild.proto}
 */
const BuiltImage = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A step in the build pipeline.
 *
 * @property {string} name
 *   Required. The name of the container image that will run this particular
 *   build step.
 *
 *   If the image is available in the host's Docker daemon's cache, it
 *   will be run directly. If not, the host will attempt to pull the image
 *   first, using the builder service account's credentials if necessary.
 *
 *   The Docker daemon's cache will already have the latest versions of all of
 *   the officially supported build steps
 *   ([https://github.com/GoogleCloudPlatform/cloud-builders](https://github.com/GoogleCloudPlatform/cloud-builders)).
 *   The Docker daemon will also have cached many of the layers for some popular
 *   images, like "ubuntu", "debian", but they will be refreshed at the time you
 *   attempt to use them.
 *
 *   If you built an image in a previous build step, it will be stored in the
 *   host's Docker daemon's cache and is available to use as the name for a
 *   later build step.
 *
 * @property {string[]} env
 *   A list of environment variable definitions to be used when running a step.
 *
 *   The elements are of the form "KEY=VALUE" for the environment variable "KEY"
 *   being given the value "VALUE".
 *
 * @property {string[]} args
 *   A list of arguments that will be presented to the step when it is started.
 *
 *   If the image used to run the step's container has an entrypoint, the `args`
 *   are used as arguments to that entrypoint. If the image does not define
 *   an entrypoint, the first element in args is used as the entrypoint,
 *   and the remainder will be used as arguments.
 *
 * @property {string} dir
 *   Working directory to use when running this step's container.
 *
 *   If this value is a relative path, it is relative to the build's working
 *   directory. If this value is absolute, it may be outside the build's working
 *   directory, in which case the contents of the path may not be persisted
 *   across build step executions, unless a `volume` for that path is specified.
 *
 *   If the build specifies a `RepoSource` with `dir` and a step with a `dir`,
 *   which specifies an absolute path, the `RepoSource` `dir` is ignored for
 *   the step's execution.
 *
 * @property {string} id
 *   Unique identifier for this build step, used in `wait_for` to
 *   reference this build step as a dependency.
 *
 * @property {string[]} waitFor
 *   The ID(s) of the step(s) that this build step depends on.
 *   This build step will not start until all the build steps in `wait_for`
 *   have completed successfully. If `wait_for` is empty, this build step will
 *   start when all previous build steps in the `Build.Steps` list have
 *   completed successfully.
 *
 * @property {string} entrypoint
 *   Entrypoint to be used instead of the build step image's default entrypoint.
 *   If unset, the image's default entrypoint is used.
 *
 * @property {string[]} secretEnv
 *   A list of environment variables which are encrypted using a Cloud Key
 *   Management Service crypto key. These values must be specified in the
 *   build's `Secret`.
 *
 * @property {Object[]} volumes
 *   List of volumes to mount into the build step.
 *
 *   Each volume is created as an empty volume prior to execution of the
 *   build step. Upon completion of the build, volumes and their contents are
 *   discarded.
 *
 *   Using a named volume in only one step is not valid as it is indicative
 *   of a build request with an incorrect configuration.
 *
 *   This object should have the same structure as [Volume]{@link google.devtools.cloudbuild.v1.Volume}
 *
 * @property {Object} timing
 *   Output only. Stores timing information for executing this build step.
 *
 *   This object should have the same structure as [TimeSpan]{@link google.devtools.cloudbuild.v1.TimeSpan}
 *
 * @property {Object} pullTiming
 *   Output only. Stores timing information for pulling this build step's
 *   builder image only.
 *
 *   This object should have the same structure as [TimeSpan]{@link google.devtools.cloudbuild.v1.TimeSpan}
 *
 * @property {Object} timeout
 *   Time limit for executing this build step. If not defined, the step has no
 *   time limit and will be allowed to continue to run until either it completes
 *   or the build itself times out.
 *
 *   This object should have the same structure as [Duration]{@link google.protobuf.Duration}
 *
 * @property {number} status
 *   Output only. Status of the build step. At this time, build step status is
 *   only updated on build completion; step status is not updated in real-time
 *   as the build progresses.
 *
 *   The number should be among the values of [Status]{@link google.devtools.cloudbuild.v1.Status}
 *
 * @typedef BuildStep
 * @memberof google.devtools.cloudbuild.v1
 * @see [google.devtools.cloudbuild.v1.BuildStep definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/cloudbuild/v1/cloudbuild.proto}
 */
const BuildStep = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Volume describes a Docker container volume which is mounted into build steps
 * in order to persist files across build step execution.
 *
 * @property {string} name
 *   Name of the volume to mount.
 *
 *   Volume names must be unique per build step and must be valid names for
 *   Docker volumes. Each named volume must be used by at least two build steps.
 *
 * @property {string} path
 *   Path at which to mount the volume.
 *
 *   Paths must be absolute and cannot conflict with other volume paths on the
 *   same build step or with certain reserved volume paths.
 *
 * @typedef Volume
 * @memberof google.devtools.cloudbuild.v1
 * @see [google.devtools.cloudbuild.v1.Volume definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/cloudbuild/v1/cloudbuild.proto}
 */
const Volume = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Artifacts created by the build pipeline.
 *
 * @property {Object[]} images
 *   Container images that were built as a part of the build.
 *
 *   This object should have the same structure as [BuiltImage]{@link google.devtools.cloudbuild.v1.BuiltImage}
 *
 * @property {string[]} buildStepImages
 *   List of build step digests, in the order corresponding to build step
 *   indices.
 *
 * @property {string} artifactManifest
 *   Path to the artifact manifest. Only populated when artifacts are uploaded.
 *
 * @property {number} numArtifacts
 *   Number of artifacts uploaded. Only populated when artifacts are uploaded.
 *
 * @property {Buffer[]} buildStepOutputs
 *   List of build step outputs, produced by builder images, in the order
 *   corresponding to build step indices.
 *
 *   [Cloud Builders](https://cloud.google.com/cloud-build/docs/cloud-builders)
 *   can produce this output by writing to `$BUILDER_OUTPUT/output`.
 *   Only the first 4KB of data is stored.
 *
 * @property {Object} artifactTiming
 *   Time to push all non-container artifacts.
 *
 *   This object should have the same structure as [TimeSpan]{@link google.devtools.cloudbuild.v1.TimeSpan}
 *
 * @typedef Results
 * @memberof google.devtools.cloudbuild.v1
 * @see [google.devtools.cloudbuild.v1.Results definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/cloudbuild/v1/cloudbuild.proto}
 */
const Results = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * An artifact that was uploaded during a build. This
 * is a single record in the artifact manifest JSON file.
 *
 * @property {string} location
 *   The path of an artifact in a Google Cloud Storage bucket, with the
 *   generation number. For example,
 *   `gs://mybucket/path/to/output.jar#generation`.
 *
 * @property {Object[]} fileHash
 *   The file hash of the artifact.
 *
 *   This object should have the same structure as [FileHashes]{@link google.devtools.cloudbuild.v1.FileHashes}
 *
 * @typedef ArtifactResult
 * @memberof google.devtools.cloudbuild.v1
 * @see [google.devtools.cloudbuild.v1.ArtifactResult definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/cloudbuild/v1/cloudbuild.proto}
 */
const ArtifactResult = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A build resource in the Cloud Build API.
 *
 * At a high level, a `Build` describes where to find source code, how to build
 * it (for example, the builder image to run on the source), and where to store
 * the built artifacts.
 *
 * Fields can include the following variables, which will be expanded when the
 * build is created:
 *
 * - $PROJECT_ID: the project ID of the build.
 * - $BUILD_ID: the autogenerated ID of the build.
 * - $REPO_NAME: the source repository name specified by RepoSource.
 * - $BRANCH_NAME: the branch name specified by RepoSource.
 * - $TAG_NAME: the tag name specified by RepoSource.
 * - $REVISION_ID or $COMMIT_SHA: the commit SHA specified by RepoSource or
 *   resolved from the specified branch or tag.
 * - $SHORT_SHA: first 7 characters of $REVISION_ID or $COMMIT_SHA.
 *
 * @property {string} id
 *   Output only. Unique identifier of the build.
 *
 * @property {string} projectId
 *   Output only. ID of the project.
 *
 * @property {number} status
 *   Output only. Status of the build.
 *
 *   The number should be among the values of [Status]{@link google.devtools.cloudbuild.v1.Status}
 *
 * @property {string} statusDetail
 *   Output only. Customer-readable message about the current status.
 *
 * @property {Object} source
 *   The location of the source files to build.
 *
 *   This object should have the same structure as [Source]{@link google.devtools.cloudbuild.v1.Source}
 *
 * @property {Object[]} steps
 *   Required. The operations to be performed on the workspace.
 *
 *   This object should have the same structure as [BuildStep]{@link google.devtools.cloudbuild.v1.BuildStep}
 *
 * @property {Object} results
 *   Output only. Results of the build.
 *
 *   This object should have the same structure as [Results]{@link google.devtools.cloudbuild.v1.Results}
 *
 * @property {Object} createTime
 *   Output only. Time at which the request to create the build was received.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {Object} startTime
 *   Output only. Time at which execution of the build was started.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {Object} finishTime
 *   Output only. Time at which execution of the build was finished.
 *
 *   The difference between finish_time and start_time is the duration of the
 *   build's execution.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {Object} timeout
 *   Amount of time that this build should be allowed to run, to second
 *   granularity. If this amount of time elapses, work on the build will cease
 *   and the build status will be `TIMEOUT`.
 *
 *   Default time is ten minutes.
 *
 *   This object should have the same structure as [Duration]{@link google.protobuf.Duration}
 *
 * @property {string[]} images
 *   A list of images to be pushed upon the successful completion of all build
 *   steps.
 *
 *   The images are pushed using the builder service account's credentials.
 *
 *   The digests of the pushed images will be stored in the `Build` resource's
 *   results field.
 *
 *   If any of the images fail to be pushed, the build status is marked
 *   `FAILURE`.
 *
 * @property {Object} artifacts
 *   Artifacts produced by the build that should be uploaded upon
 *   successful completion of all build steps.
 *
 *   This object should have the same structure as [Artifacts]{@link google.devtools.cloudbuild.v1.Artifacts}
 *
 * @property {string} logsBucket
 *   Google Cloud Storage bucket where logs should be written (see
 *   [Bucket Name
 *   Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)).
 *   Logs file names will be of the format `${logs_bucket}/log-${build_id}.txt`.
 *
 * @property {Object} sourceProvenance
 *   Output only. A permanent fixed identifier for source.
 *
 *   This object should have the same structure as [SourceProvenance]{@link google.devtools.cloudbuild.v1.SourceProvenance}
 *
 * @property {string} buildTriggerId
 *   Output only. The ID of the `BuildTrigger` that triggered this build, if it
 *   was triggered automatically.
 *
 * @property {Object} options
 *   Special options for this build.
 *
 *   This object should have the same structure as [BuildOptions]{@link google.devtools.cloudbuild.v1.BuildOptions}
 *
 * @property {string} logUrl
 *   Output only. URL to logs for this build in Google Cloud Console.
 *
 * @property {Object.<string, string>} substitutions
 *   Substitutions data for `Build` resource.
 *
 * @property {string[]} tags
 *   Tags for annotation of a `Build`. These are not docker tags.
 *
 * @property {Object[]} secrets
 *   Secrets to decrypt using Cloud Key Management Service.
 *
 *   This object should have the same structure as [Secret]{@link google.devtools.cloudbuild.v1.Secret}
 *
 * @property {Object.<string, Object>} timing
 *   Output only. Stores timing information for phases of the build. Valid keys
 *   are:
 *
 *   * BUILD: time to execute all build steps
 *   * PUSH: time to push all specified images.
 *   * FETCHSOURCE: time to fetch source.
 *
 *   If the build does not specify source or images,
 *   these keys will not be included.
 *
 * @typedef Build
 * @memberof google.devtools.cloudbuild.v1
 * @see [google.devtools.cloudbuild.v1.Build definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/cloudbuild/v1/cloudbuild.proto}
 */
const Build = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Possible status of a build or build step.
   *
   * @enum {number}
   * @memberof google.devtools.cloudbuild.v1
   */
  Status: {

    /**
     * Status of the build is unknown.
     */
    STATUS_UNKNOWN: 0,

    /**
     * Build or step is queued; work has not yet begun.
     */
    QUEUED: 1,

    /**
     * Build or step is being executed.
     */
    WORKING: 2,

    /**
     * Build or step finished successfully.
     */
    SUCCESS: 3,

    /**
     * Build or step failed to complete successfully.
     */
    FAILURE: 4,

    /**
     * Build or step failed due to an internal cause.
     */
    INTERNAL_ERROR: 5,

    /**
     * Build or step took longer than was allowed.
     */
    TIMEOUT: 6,

    /**
     * Build or step was canceled by a user.
     */
    CANCELLED: 7
  }
};

/**
 * Artifacts produced by a build that should be uploaded upon
 * successful completion of all build steps.
 *
 * @property {string[]} images
 *   A list of images to be pushed upon the successful completion of all build
 *   steps.
 *
 *   The images will be pushed using the builder service account's credentials.
 *
 *   The digests of the pushed images will be stored in the Build resource's
 *   results field.
 *
 *   If any of the images fail to be pushed, the build is marked FAILURE.
 *
 * @property {Object} objects
 *   A list of objects to be uploaded to Cloud Storage upon successful
 *   completion of all build steps.
 *
 *   Files in the workspace matching specified paths globs will be uploaded to
 *   the specified Cloud Storage location using the builder service account's
 *   credentials.
 *
 *   The location and generation of the uploaded objects will be stored in the
 *   Build resource's results field.
 *
 *   If any objects fail to be pushed, the build is marked FAILURE.
 *
 *   This object should have the same structure as [ArtifactObjects]{@link google.devtools.cloudbuild.v1.ArtifactObjects}
 *
 * @typedef Artifacts
 * @memberof google.devtools.cloudbuild.v1
 * @see [google.devtools.cloudbuild.v1.Artifacts definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/cloudbuild/v1/cloudbuild.proto}
 */
const Artifacts = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Files in the workspace to upload to Cloud Storage upon successful
   * completion of all build steps.
   *
   * @property {string} location
   *   Cloud Storage bucket and optional object path, in the form
   *   "gs://bucket/path/to/somewhere/". (see [Bucket Name
   *   Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)).
   *
   *   Files in the workspace matching any path pattern will be uploaded to
   *   Cloud Storage with this location as a prefix.
   *
   * @property {string[]} paths
   *   Path globs used to match files in the build's workspace.
   *
   * @property {Object} timing
   *   Output only. Stores timing information for pushing all artifact objects.
   *
   *   This object should have the same structure as [TimeSpan]{@link google.devtools.cloudbuild.v1.TimeSpan}
   *
   * @typedef ArtifactObjects
   * @memberof google.devtools.cloudbuild.v1
   * @see [google.devtools.cloudbuild.v1.Artifacts.ArtifactObjects definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/cloudbuild/v1/cloudbuild.proto}
   */
  ArtifactObjects: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  }
};

/**
 * Start and end times for a build execution phase.
 *
 * @property {Object} startTime
 *   Start of time span.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {Object} endTime
 *   End of time span.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @typedef TimeSpan
 * @memberof google.devtools.cloudbuild.v1
 * @see [google.devtools.cloudbuild.v1.TimeSpan definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/cloudbuild/v1/cloudbuild.proto}
 */
const TimeSpan = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Metadata for build operations.
 *
 * @property {Object} build
 *   The build that the operation is tracking.
 *
 *   This object should have the same structure as [Build]{@link google.devtools.cloudbuild.v1.Build}
 *
 * @typedef BuildOperationMetadata
 * @memberof google.devtools.cloudbuild.v1
 * @see [google.devtools.cloudbuild.v1.BuildOperationMetadata definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/cloudbuild/v1/cloudbuild.proto}
 */
const BuildOperationMetadata = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Provenance of the source. Ways to find the original source, or verify that
 * some source was used for this build.
 *
 * @property {Object} resolvedStorageSource
 *   A copy of the build's `source.storage_source`, if exists, with any
 *   generations resolved.
 *
 *   This object should have the same structure as [StorageSource]{@link google.devtools.cloudbuild.v1.StorageSource}
 *
 * @property {Object} resolvedRepoSource
 *   A copy of the build's `source.repo_source`, if exists, with any
 *   revisions resolved.
 *
 *   This object should have the same structure as [RepoSource]{@link google.devtools.cloudbuild.v1.RepoSource}
 *
 * @property {Object.<string, Object>} fileHashes
 *   Output only. Hash(es) of the build source, which can be used to verify that
 *   the original source integrity was maintained in the build. Note that
 *   `FileHashes` will only be populated if `BuildOptions` has requested a
 *   `SourceProvenanceHash`.
 *
 *   The keys to this map are file paths used as build source and the values
 *   contain the hash values for those files.
 *
 *   If the build source came in a single package such as a gzipped tarfile
 *   (`.tar.gz`), the `FileHash` will be for the single path to that file.
 *
 * @typedef SourceProvenance
 * @memberof google.devtools.cloudbuild.v1
 * @see [google.devtools.cloudbuild.v1.SourceProvenance definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/cloudbuild/v1/cloudbuild.proto}
 */
const SourceProvenance = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Container message for hashes of byte content of files, used in
 * SourceProvenance messages to verify integrity of source input to the build.
 *
 * @property {Object[]} fileHash
 *   Collection of file hashes.
 *
 *   This object should have the same structure as [Hash]{@link google.devtools.cloudbuild.v1.Hash}
 *
 * @typedef FileHashes
 * @memberof google.devtools.cloudbuild.v1
 * @see [google.devtools.cloudbuild.v1.FileHashes definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/cloudbuild/v1/cloudbuild.proto}
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
 *   The number should be among the values of [HashType]{@link google.devtools.cloudbuild.v1.HashType}
 *
 * @property {Buffer} value
 *   The hash value.
 *
 * @typedef Hash
 * @memberof google.devtools.cloudbuild.v1
 * @see [google.devtools.cloudbuild.v1.Hash definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/cloudbuild/v1/cloudbuild.proto}
 */
const Hash = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Specifies the hash algorithm, if any.
   *
   * @enum {number}
   * @memberof google.devtools.cloudbuild.v1
   */
  HashType: {

    /**
     * No hash requested.
     */
    NONE: 0,

    /**
     * Use a sha256 hash.
     */
    SHA256: 1,

    /**
     * Use a md5 hash.
     */
    MD5: 2
  }
};

/**
 * Pairs a set of secret environment variables containing encrypted
 * values with the Cloud KMS key to use to decrypt the value.
 *
 * @property {string} kmsKeyName
 *   Cloud KMS key name to use to decrypt these envs.
 *
 * @property {Object.<string, Buffer>} secretEnv
 *   Map of environment variable name to its encrypted value.
 *
 *   Secret environment variables must be unique across all of a build's
 *   secrets, and must be used by at least one build step. Values can be at most
 *   64 KB in size. There can be at most 100 secret values across all of a
 *   build's secrets.
 *
 * @typedef Secret
 * @memberof google.devtools.cloudbuild.v1
 * @see [google.devtools.cloudbuild.v1.Secret definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/cloudbuild/v1/cloudbuild.proto}
 */
const Secret = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request to create a new build.
 *
 * @property {string} projectId
 *   Required. ID of the project.
 *
 * @property {Object} build
 *   Required. Build resource to create.
 *
 *   This object should have the same structure as [Build]{@link google.devtools.cloudbuild.v1.Build}
 *
 * @typedef CreateBuildRequest
 * @memberof google.devtools.cloudbuild.v1
 * @see [google.devtools.cloudbuild.v1.CreateBuildRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/cloudbuild/v1/cloudbuild.proto}
 */
const CreateBuildRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request to get a build.
 *
 * @property {string} projectId
 *   Required. ID of the project.
 *
 * @property {string} id
 *   Required. ID of the build.
 *
 * @typedef GetBuildRequest
 * @memberof google.devtools.cloudbuild.v1
 * @see [google.devtools.cloudbuild.v1.GetBuildRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/cloudbuild/v1/cloudbuild.proto}
 */
const GetBuildRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request to list builds.
 *
 * @property {string} projectId
 *   Required. ID of the project.
 *
 * @property {number} pageSize
 *   Number of results to return in the list.
 *
 * @property {string} pageToken
 *   Token to provide to skip to a particular spot in the list.
 *
 * @property {string} filter
 *   The raw filter text to constrain the results.
 *
 * @typedef ListBuildsRequest
 * @memberof google.devtools.cloudbuild.v1
 * @see [google.devtools.cloudbuild.v1.ListBuildsRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/cloudbuild/v1/cloudbuild.proto}
 */
const ListBuildsRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Response including listed builds.
 *
 * @property {Object[]} builds
 *   Builds will be sorted by `create_time`, descending.
 *
 *   This object should have the same structure as [Build]{@link google.devtools.cloudbuild.v1.Build}
 *
 * @property {string} nextPageToken
 *   Token to receive the next page of results.
 *
 * @typedef ListBuildsResponse
 * @memberof google.devtools.cloudbuild.v1
 * @see [google.devtools.cloudbuild.v1.ListBuildsResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/cloudbuild/v1/cloudbuild.proto}
 */
const ListBuildsResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request to cancel an ongoing build.
 *
 * @property {string} projectId
 *   Required. ID of the project.
 *
 * @property {string} id
 *   Required. ID of the build.
 *
 * @typedef CancelBuildRequest
 * @memberof google.devtools.cloudbuild.v1
 * @see [google.devtools.cloudbuild.v1.CancelBuildRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/cloudbuild/v1/cloudbuild.proto}
 */
const CancelBuildRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Configuration for an automated build in response to source repository
 * changes.
 *
 * @property {string} id
 *   Output only. Unique identifier of the trigger.
 *
 * @property {string} description
 *   Human-readable description of this trigger.
 *
 * @property {string} name
 *   User assigned name of the trigger. Must be unique within the project.
 *
 * @property {string[]} tags
 *   Tags for annotation of a `BuildTrigger`
 *
 * @property {Object} triggerTemplate
 *   Template describing the types of source changes to trigger a build.
 *
 *   Branch and tag names in trigger templates are interpreted as regular
 *   expressions. Any branch or tag change that matches that regular expression
 *   will trigger a build.
 *
 *   This object should have the same structure as [RepoSource]{@link google.devtools.cloudbuild.v1.RepoSource}
 *
 * @property {Object} github
 *   GitHubEventsConfig describes the configuration of a trigger that creates
 *   a build whenever a GitHub event is received.
 *
 *   This object should have the same structure as [GitHubEventsConfig]{@link google.devtools.cloudbuild.v1.GitHubEventsConfig}
 *
 * @property {Object} build
 *   Contents of the build template.
 *
 *   This object should have the same structure as [Build]{@link google.devtools.cloudbuild.v1.Build}
 *
 * @property {string} filename
 *   Path, from the source root, to a file whose contents is used for the
 *   template.
 *
 * @property {Object} createTime
 *   Output only. Time when the trigger was created.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {boolean} disabled
 *   If true, the trigger will never result in a build.
 *
 * @property {Object.<string, string>} substitutions
 *   Substitutions data for Build resource.
 *
 * @property {string[]} ignoredFiles
 *   ignored_files and included_files are file glob matches using
 *   http://godoc/pkg/path/filepath#Match extended with support for "**".
 *
 *   If ignored_files and changed files are both empty, then they are
 *   not used to determine whether or not to trigger a build.
 *
 *   If ignored_files is not empty, then we ignore any files that match
 *   any of the ignored_file globs. If the change has no files that are
 *   outside of the ignored_files globs, then we do not trigger a build.
 *
 * @property {string[]} includedFiles
 *   If any of the files altered in the commit pass the ignored_files
 *   filter and included_files is empty, then as far as this filter is
 *   concerned, we should trigger the build.
 *
 *   If any of the files altered in the commit pass the ignored_files
 *   filter and included_files is not empty, then we make sure that at
 *   least one of those files matches a included_files glob. If not,
 *   then we do not trigger a build.
 *
 * @typedef BuildTrigger
 * @memberof google.devtools.cloudbuild.v1
 * @see [google.devtools.cloudbuild.v1.BuildTrigger definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/cloudbuild/v1/cloudbuild.proto}
 */
const BuildTrigger = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * GitHubEventsConfig describes the configuration of a trigger that creates a
 * build whenever a GitHub event is received.
 *
 * This message is experimental.
 *
 * @property {number} installationId
 *   The installationID that emits the GitHub event.
 *
 * @property {string} owner
 *   Owner of the repository. For example: The owner for
 *   https://github.com/googlecloudplatform/cloud-builders is
 *   "googlecloudplatform".
 *
 * @property {string} name
 *   Name of the repository. For example: The name for
 *   https://github.com/googlecloudplatform/cloud-builders is "cloud-builders".
 *
 * @property {Object} pullRequest
 *   filter to match changes in pull requests.
 *
 *   This object should have the same structure as [PullRequestFilter]{@link google.devtools.cloudbuild.v1.PullRequestFilter}
 *
 * @property {Object} push
 *   filter to match changes in refs like branches, tags.
 *
 *   This object should have the same structure as [PushFilter]{@link google.devtools.cloudbuild.v1.PushFilter}
 *
 * @typedef GitHubEventsConfig
 * @memberof google.devtools.cloudbuild.v1
 * @see [google.devtools.cloudbuild.v1.GitHubEventsConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/cloudbuild/v1/cloudbuild.proto}
 */
const GitHubEventsConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * PullRequestFilter contains filter properties for matching GitHub Pull
 * Requests.
 *
 * @property {string} branch
 *   Regex of branches to match.
 *
 *   The syntax of the regular expressions accepted is the syntax accepted by
 *   RE2 and described at https://github.com/google/re2/wiki/Syntax
 *
 * @property {number} commentControl
 *   Whether to block builds on a "/gcbrun" comment from a repository owner or
 *   collaborator.
 *
 *   The number should be among the values of [CommentControl]{@link google.devtools.cloudbuild.v1.CommentControl}
 *
 * @typedef PullRequestFilter
 * @memberof google.devtools.cloudbuild.v1
 * @see [google.devtools.cloudbuild.v1.PullRequestFilter definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/cloudbuild/v1/cloudbuild.proto}
 */
const PullRequestFilter = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Controls behavior of Pull Request comments.
   *
   * @enum {number}
   * @memberof google.devtools.cloudbuild.v1
   */
  CommentControl: {

    /**
     * Do not require comments on Pull Requests before builds are triggered.
     */
    COMMENTS_DISABLED: 0,

    /**
     * Enforce that repository owners or collaborators must comment on Pull
     * Requests before builds are triggered.
     */
    COMMENTS_ENABLED: 1
  }
};

/**
 * Push contains filter properties for matching GitHub git pushes.
 *
 * @property {string} branch
 *   Regexes matching branches to build.
 *
 *   The syntax of the regular expressions accepted is the syntax accepted by
 *   RE2 and described at https://github.com/google/re2/wiki/Syntax
 *
 * @property {string} tag
 *   Regexes matching tags to build.
 *
 *   The syntax of the regular expressions accepted is the syntax accepted by
 *   RE2 and described at https://github.com/google/re2/wiki/Syntax
 *
 * @typedef PushFilter
 * @memberof google.devtools.cloudbuild.v1
 * @see [google.devtools.cloudbuild.v1.PushFilter definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/cloudbuild/v1/cloudbuild.proto}
 */
const PushFilter = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request to create a new `BuildTrigger`.
 *
 * @property {string} projectId
 *   Required. ID of the project for which to configure automatic builds.
 *
 * @property {Object} trigger
 *   Required. `BuildTrigger` to create.
 *
 *   This object should have the same structure as [BuildTrigger]{@link google.devtools.cloudbuild.v1.BuildTrigger}
 *
 * @typedef CreateBuildTriggerRequest
 * @memberof google.devtools.cloudbuild.v1
 * @see [google.devtools.cloudbuild.v1.CreateBuildTriggerRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/cloudbuild/v1/cloudbuild.proto}
 */
const CreateBuildTriggerRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Returns the `BuildTrigger` with the specified ID.
 *
 * @property {string} projectId
 *   Required. ID of the project that owns the trigger.
 *
 * @property {string} triggerId
 *   Required. ID of the `BuildTrigger` to get.
 *
 * @typedef GetBuildTriggerRequest
 * @memberof google.devtools.cloudbuild.v1
 * @see [google.devtools.cloudbuild.v1.GetBuildTriggerRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/cloudbuild/v1/cloudbuild.proto}
 */
const GetBuildTriggerRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request to list existing `BuildTriggers`.
 *
 * @property {string} projectId
 *   Required. ID of the project for which to list BuildTriggers.
 *
 * @property {number} pageSize
 *   Number of results to return in the list.
 *
 * @property {string} pageToken
 *   Token to provide to skip to a particular spot in the list.
 *
 * @typedef ListBuildTriggersRequest
 * @memberof google.devtools.cloudbuild.v1
 * @see [google.devtools.cloudbuild.v1.ListBuildTriggersRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/cloudbuild/v1/cloudbuild.proto}
 */
const ListBuildTriggersRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Response containing existing `BuildTriggers`.
 *
 * @property {Object[]} triggers
 *   `BuildTriggers` for the project, sorted by `create_time` descending.
 *
 *   This object should have the same structure as [BuildTrigger]{@link google.devtools.cloudbuild.v1.BuildTrigger}
 *
 * @property {string} nextPageToken
 *   Token to receive the next page of results.
 *
 * @typedef ListBuildTriggersResponse
 * @memberof google.devtools.cloudbuild.v1
 * @see [google.devtools.cloudbuild.v1.ListBuildTriggersResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/cloudbuild/v1/cloudbuild.proto}
 */
const ListBuildTriggersResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request to delete a `BuildTrigger`.
 *
 * @property {string} projectId
 *   Required. ID of the project that owns the trigger.
 *
 * @property {string} triggerId
 *   Required. ID of the `BuildTrigger` to delete.
 *
 * @typedef DeleteBuildTriggerRequest
 * @memberof google.devtools.cloudbuild.v1
 * @see [google.devtools.cloudbuild.v1.DeleteBuildTriggerRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/cloudbuild/v1/cloudbuild.proto}
 */
const DeleteBuildTriggerRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request to update an existing `BuildTrigger`.
 *
 * @property {string} projectId
 *   Required. ID of the project that owns the trigger.
 *
 * @property {string} triggerId
 *   Required. ID of the `BuildTrigger` to update.
 *
 * @property {Object} trigger
 *   Required. `BuildTrigger` to update.
 *
 *   This object should have the same structure as [BuildTrigger]{@link google.devtools.cloudbuild.v1.BuildTrigger}
 *
 * @typedef UpdateBuildTriggerRequest
 * @memberof google.devtools.cloudbuild.v1
 * @see [google.devtools.cloudbuild.v1.UpdateBuildTriggerRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/cloudbuild/v1/cloudbuild.proto}
 */
const UpdateBuildTriggerRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Optional arguments to enable specific features of builds.
 *
 * @property {number[]} sourceProvenanceHash
 *   Requested hash for SourceProvenance.
 *
 *   The number should be among the values of [HashType]{@link google.devtools.cloudbuild.v1.HashType}
 *
 * @property {number} requestedVerifyOption
 *   Requested verifiability options.
 *
 *   The number should be among the values of [VerifyOption]{@link google.devtools.cloudbuild.v1.VerifyOption}
 *
 * @property {number} machineType
 *   Compute Engine machine type on which to run the build.
 *
 *   The number should be among the values of [MachineType]{@link google.devtools.cloudbuild.v1.MachineType}
 *
 * @property {number} diskSizeGb
 *   Requested disk size for the VM that runs the build. Note that this is *NOT*
 *   "disk free"; some of the space will be used by the operating system and
 *   build utilities. Also note that this is the minimum disk size that will be
 *   allocated for the build -- the build may run with a larger disk than
 *   requested. At present, the maximum disk size is 1000GB; builds that request
 *   more than the maximum are rejected with an error.
 *
 * @property {number} substitutionOption
 *   Option to specify behavior when there is an error in the substitution
 *   checks.
 *
 *   The number should be among the values of [SubstitutionOption]{@link google.devtools.cloudbuild.v1.SubstitutionOption}
 *
 * @property {number} logStreamingOption
 *   Option to define build log streaming behavior to Google Cloud
 *   Storage.
 *
 *   The number should be among the values of [LogStreamingOption]{@link google.devtools.cloudbuild.v1.LogStreamingOption}
 *
 * @property {string} workerPool
 *   Option to specify a `WorkerPool` for the build. User specifies the pool
 *   with the format "[WORKERPOOL_PROJECT_ID]/[WORKERPOOL_NAME]".
 *   This is an experimental field.
 *
 * @property {number} logging
 *   Option to specify the logging mode, which determines where the logs are
 *   stored.
 *
 *   The number should be among the values of [LoggingMode]{@link google.devtools.cloudbuild.v1.LoggingMode}
 *
 * @property {string[]} env
 *   A list of global environment variable definitions that will exist for all
 *   build steps in this build. If a variable is defined in both globally and in
 *   a build step, the variable will use the build step value.
 *
 *   The elements are of the form "KEY=VALUE" for the environment variable "KEY"
 *   being given the value "VALUE".
 *
 * @property {string[]} secretEnv
 *   A list of global environment variables, which are encrypted using a Cloud
 *   Key Management Service crypto key. These values must be specified in the
 *   build's `Secret`. These variables will be available to all build steps
 *   in this build.
 *
 * @property {Object[]} volumes
 *   Global list of volumes to mount for ALL build steps
 *
 *   Each volume is created as an empty volume prior to starting the build
 *   process. Upon completion of the build, volumes and their contents are
 *   discarded. Global volume names and paths cannot conflict with the volumes
 *   defined a build step.
 *
 *   Using a global volume in a build with only one step is not valid as
 *   it is indicative of a build request with an incorrect configuration.
 *
 *   This object should have the same structure as [Volume]{@link google.devtools.cloudbuild.v1.Volume}
 *
 * @typedef BuildOptions
 * @memberof google.devtools.cloudbuild.v1
 * @see [google.devtools.cloudbuild.v1.BuildOptions definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/cloudbuild/v1/cloudbuild.proto}
 */
const BuildOptions = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Specifies the behavior when writing build logs to Google Cloud Storage.
   *
   * @enum {number}
   * @memberof google.devtools.cloudbuild.v1
   */
  LogStreamingOption: {

    /**
     * Service may automatically determine build log streaming behavior.
     */
    STREAM_DEFAULT: 0,

    /**
     * Build logs should be streamed to Google Cloud Storage.
     */
    STREAM_ON: 1,

    /**
     * Build logs should not be streamed to Google Cloud Storage; they will be
     * written when the build is completed.
     */
    STREAM_OFF: 2
  },

  /**
   * Specifies the logging mode.
   *
   * @enum {number}
   * @memberof google.devtools.cloudbuild.v1
   */
  LoggingMode: {

    /**
     * The service determines the logging mode. The default is `LEGACY`. Do not
     * rely on the default logging behavior as it may change in the future.
     */
    LOGGING_UNSPECIFIED: 0,

    /**
     * Stackdriver logging and Cloud Storage logging are enabled.
     */
    LEGACY: 1,

    /**
     * Only Cloud Storage logging is enabled.
     */
    GCS_ONLY: 2
  },

  /**
   * Supported VM sizes.
   *
   * @enum {number}
   * @memberof google.devtools.cloudbuild.v1
   */
  MachineType: {

    /**
     * Standard machine type.
     */
    UNSPECIFIED: 0,

    /**
     * Highcpu machine with 8 CPUs.
     */
    N1_HIGHCPU_8: 1,

    /**
     * Highcpu machine with 32 CPUs.
     */
    N1_HIGHCPU_32: 2
  },

  /**
   * Specifies the behavior when there is an error in the substitution checks.
   *
   * @enum {number}
   * @memberof google.devtools.cloudbuild.v1
   */
  SubstitutionOption: {

    /**
     * Fails the build if error in substitutions checks, like missing
     * a substitution in the template or in the map.
     */
    MUST_MATCH: 0,

    /**
     * Do not fail the build if error in substitutions checks.
     */
    ALLOW_LOOSE: 1
  },

  /**
   * Specifies the manner in which the build should be verified, if at all.
   *
   * @enum {number}
   * @memberof google.devtools.cloudbuild.v1
   */
  VerifyOption: {

    /**
     * Not a verifiable build. (default)
     */
    NOT_VERIFIED: 0,

    /**
     * Verified build.
     */
    VERIFIED: 1
  }
};

/**
 * Configuration for a WorkerPool to run the builds.
 *
 * Workers are machines that Cloud Build uses to run your builds. By default,
 * all workers run in a project owned by Cloud Build. To have full control over
 * the workers that execute your builds -- such as enabling them to access
 * private resources on your private network -- you can request Cloud Build to
 * run the workers in your own project by creating a custom workers pool.
 *
 * @property {string} name
 *   User-defined name of the `WorkerPool`.
 *
 * @property {string} projectId
 *   The project ID of the GCP project for which the `WorkerPool` is created.
 *
 * @property {string} serviceAccountEmail
 *   Output only. The service account used to manage the `WorkerPool`. The
 *   service account must have the Compute Instance Admin (Beta) permission at
 *   the project level.
 *
 * @property {number} workerCount
 *   Total number of workers to be created across all requested regions.
 *
 * @property {Object} workerConfig
 *   Configuration to be used for a creating workers in the `WorkerPool`.
 *
 *   This object should have the same structure as [WorkerConfig]{@link google.devtools.cloudbuild.v1.WorkerConfig}
 *
 * @property {number[]} regions
 *   List of regions to create the `WorkerPool`. Regions can't be empty.
 *   If Cloud Build adds a new GCP region in the future, the existing
 *   `WorkerPool` will not be enabled in the new region automatically;
 *   you must add the new region to the `regions` field to enable the
 *   `WorkerPool` in that region.
 *
 *   The number should be among the values of [Region]{@link google.devtools.cloudbuild.v1.Region}
 *
 * @property {Object} createTime
 *   Output only. Time at which the request to create the `WorkerPool` was
 *   received.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {Object} updateTime
 *   Output only. Time at which the request to update the `WorkerPool` was
 *   received.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {Object} deleteTime
 *   Output only. Time at which the request to delete the `WorkerPool` was
 *   received.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {number} status
 *   Output only. WorkerPool Status.
 *
 *   The number should be among the values of [Status]{@link google.devtools.cloudbuild.v1.Status}
 *
 * @typedef WorkerPool
 * @memberof google.devtools.cloudbuild.v1
 * @see [google.devtools.cloudbuild.v1.WorkerPool definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/cloudbuild/v1/cloudbuild.proto}
 */
const WorkerPool = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Supported GCP regions to create the `WorkerPool`.
   *
   * @enum {number}
   * @memberof google.devtools.cloudbuild.v1
   */
  Region: {

    /**
     * no region
     */
    REGION_UNSPECIFIED: 0,

    /**
     * us-central1 region
     */
    US_CENTRAL1: 1,

    /**
     * us-west1 region
     */
    US_WEST1: 2,

    /**
     * us-east1 region
     */
    US_EAST1: 3,

    /**
     * us-east4 region
     */
    US_EAST4: 4
  },

  /**
   * `WorkerPool` status
   *
   * @enum {number}
   * @memberof google.devtools.cloudbuild.v1
   */
  Status: {

    /**
     * Status of the `WorkerPool` is unknown.
     */
    STATUS_UNSPECIFIED: 0,

    /**
     * `WorkerPool` is being created.
     */
    CREATING: 1,

    /**
     * `WorkerPool` is running.
     */
    RUNNING: 2,

    /**
     * `WorkerPool` is being deleting: cancelling builds and draining workers.
     */
    DELETING: 3,

    /**
     * `WorkerPool` is deleted.
     */
    DELETED: 4
  }
};

/**
 * WorkerConfig defines the configuration to be used for a creating workers in
 * the pool.
 *
 * @property {string} machineType
 *   Machine Type of the worker, such as n1-standard-1.
 *   See https://cloud.google.com/compute/docs/machine-types.
 *   If left blank, Cloud Build will use a standard unspecified machine to
 *   create the worker pool.
 *   `machine_type` is overridden if you specify a different machine type in
 *   `build_options`. In this case, the VM specified in the `build_options`
 *   will be created on demand at build time. For more information see
 *   https://cloud.google.com/cloud-build/docs/speeding-up-builds#using_custom_virtual_machine_sizes
 *
 * @property {number} diskSizeGb
 *   Size of the disk attached to the worker, in GB.
 *   See https://cloud.google.com/compute/docs/disks/
 *   If `0` is specified, Cloud Build will use a standard disk size.
 *   `disk_size` is overridden if you specify a different disk size in
 *   `build_options`. In this case, a VM with a disk size specified in the
 *   `build_options` will be created on demand at build time. For more
 *   information see
 *   https://cloud.google.com/cloud-build/docs/api/reference/rest/v1/projects.builds#buildoptions
 *
 * @property {Object} network
 *   The network definition used to create the worker.
 *   If this section is left empty, the workers will be created in
 *   WorkerPool.project_id on the default network.
 *
 *   This object should have the same structure as [Network]{@link google.devtools.cloudbuild.v1.Network}
 *
 * @property {string} tag
 *   The tag applied to the worker, and the same tag used by the firewall rule.
 *   It is used to identify the Cloud Build workers among other VMs.
 *   The default value for tag is `worker`.
 *
 * @typedef WorkerConfig
 * @memberof google.devtools.cloudbuild.v1
 * @see [google.devtools.cloudbuild.v1.WorkerConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/cloudbuild/v1/cloudbuild.proto}
 */
const WorkerConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Network describes the GCP network used to create workers in.
 *
 * @property {string} projectId
 *   Project id containing the defined network and subnetwork. For a peered VPC,
 *   this will be the same as the project_id in which the workers are created.
 *   For a shared VPC, this will be the project sharing the network with the
 *   project_id project in which workers will be created. For custom workers
 *   with no VPC, this will be the same as project_id.
 *
 * @property {string} network
 *   Network on which the workers are created.
 *   "default" network is used if empty.
 *
 * @property {string} subnetwork
 *   Subnetwork on which the workers are created.
 *   "default" subnetwork is used if empty.
 *
 * @typedef Network
 * @memberof google.devtools.cloudbuild.v1
 * @see [google.devtools.cloudbuild.v1.Network definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/cloudbuild/v1/cloudbuild.proto}
 */
const Network = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request to create a new `WorkerPool`.
 *
 * @property {string} parent
 *   ID of the parent project.
 *
 * @property {Object} workerPool
 *   `WorkerPool` resource to create.
 *
 *   This object should have the same structure as [WorkerPool]{@link google.devtools.cloudbuild.v1.WorkerPool}
 *
 * @typedef CreateWorkerPoolRequest
 * @memberof google.devtools.cloudbuild.v1
 * @see [google.devtools.cloudbuild.v1.CreateWorkerPoolRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/cloudbuild/v1/cloudbuild.proto}
 */
const CreateWorkerPoolRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request to get a `WorkerPool` with the specified name.
 *
 * @property {string} name
 *   The field will contain name of the resource requested, for example:
 *   "projects/project-1/workerPools/workerpool-name"
 *
 * @typedef GetWorkerPoolRequest
 * @memberof google.devtools.cloudbuild.v1
 * @see [google.devtools.cloudbuild.v1.GetWorkerPoolRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/cloudbuild/v1/cloudbuild.proto}
 */
const GetWorkerPoolRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request to delete a `WorkerPool`.
 *
 * @property {string} name
 *   The field will contain name of the resource requested, for example:
 *   "projects/project-1/workerPools/workerpool-name"
 *
 * @typedef DeleteWorkerPoolRequest
 * @memberof google.devtools.cloudbuild.v1
 * @see [google.devtools.cloudbuild.v1.DeleteWorkerPoolRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/cloudbuild/v1/cloudbuild.proto}
 */
const DeleteWorkerPoolRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request to update a `WorkerPool`.
 *
 * @property {string} name
 *   The field will contain name of the resource requested, for example:
 *   "projects/project-1/workerPools/workerpool-name"
 *
 * @property {Object} workerPool
 *   `WorkerPool` resource to update.
 *
 *   This object should have the same structure as [WorkerPool]{@link google.devtools.cloudbuild.v1.WorkerPool}
 *
 * @typedef UpdateWorkerPoolRequest
 * @memberof google.devtools.cloudbuild.v1
 * @see [google.devtools.cloudbuild.v1.UpdateWorkerPoolRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/cloudbuild/v1/cloudbuild.proto}
 */
const UpdateWorkerPoolRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request to list `WorkerPool`s.
 *
 * @property {string} parent
 *   ID of the parent project.
 *
 * @typedef ListWorkerPoolsRequest
 * @memberof google.devtools.cloudbuild.v1
 * @see [google.devtools.cloudbuild.v1.ListWorkerPoolsRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/cloudbuild/v1/cloudbuild.proto}
 */
const ListWorkerPoolsRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Response containing existing `WorkerPools`.
 *
 * @property {Object[]} workerPools
 *   `WorkerPools` for the project.
 *
 *   This object should have the same structure as [WorkerPool]{@link google.devtools.cloudbuild.v1.WorkerPool}
 *
 * @typedef ListWorkerPoolsResponse
 * @memberof google.devtools.cloudbuild.v1
 * @see [google.devtools.cloudbuild.v1.ListWorkerPoolsResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/cloudbuild/v1/cloudbuild.proto}
 */
const ListWorkerPoolsResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};