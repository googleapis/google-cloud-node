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
 * A definition of an annotation spec.
 *
 * @property {string} name
 *   Output only. Resource name of the annotation spec.
 *   Form:
 *
 *   'projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/annotationSpecs/{annotation_spec_id}'
 *
 * @property {string} displayName
 *   Required.
 *   The name of the annotation spec to show in the interface. The name can be
 *   up to 32 characters long and must match the regexp `[a-zA-Z0-9_]+`.
 *   (_), and ASCII digits 0-9.
 *
 * @property {number} exampleCount
 *   Output only. The number of examples in the parent dataset
 *   labeled by the annotation spec.
 *
 * @typedef AnnotationSpec
 * @memberof google.cloud.automl.v1beta1
 * @see [google.cloud.automl.v1beta1.AnnotationSpec definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/automl/v1beta1/annotation_spec.proto}
 */
const AnnotationSpec = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};