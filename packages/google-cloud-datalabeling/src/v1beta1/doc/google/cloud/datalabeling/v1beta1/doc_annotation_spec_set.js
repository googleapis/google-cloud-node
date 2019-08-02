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
 * AnnotationSpecSet is a collection of label definitions. For example, in
 * image classification tasks, we define a set of labels, this set is called
 * AnnotationSpecSet. AnnotationSpecSet is immutable upon creation.
 *
 * @property {string} name
 *   Output only. AnnotationSpecSet resource name, format:
 *   projects/{project_id}/annotationSpecSets/{annotation_spec_set_id}
 *
 * @property {string} displayName
 *   Required. The display name for AnnotationSpecSet defined by user.
 *   Maximum of 64 characters.
 *
 * @property {string} description
 *   Optional. User-provided description of the annotation specification set.
 *   The description can be up to 10000 characters long.
 *
 * @property {Object[]} annotationSpecs
 *   Required. The actual spec set defined by the users.
 *
 *   This object should have the same structure as [AnnotationSpec]{@link google.cloud.datalabeling.v1beta1.AnnotationSpec}
 *
 * @property {string[]} blockingResources
 *   Output only. The names of any related resources that are blocking changes
 *   to the annotation spec set.
 *
 * @typedef AnnotationSpecSet
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.AnnotationSpecSet definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/annotation_spec_set.proto}
 */
const AnnotationSpecSet = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Container of information related to one annotation spec.
 *
 * @property {string} displayName
 *   Required. The display name of the AnnotationSpec. Maximum of 64 characters.
 *
 * @property {string} description
 *   Optional. User-provided description of the annotation specification.
 *   The description can be up to 10000 characters long.
 *
 * @typedef AnnotationSpec
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.AnnotationSpec definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/annotation_spec_set.proto}
 */
const AnnotationSpec = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};