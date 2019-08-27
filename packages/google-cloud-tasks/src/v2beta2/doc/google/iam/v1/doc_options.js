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
 * Encapsulates settings provided to GetIamPolicy.
 *
 * @property {number} requestedPolicyVersion
 *   Optional. The policy format version to be returned.
 *
 *   Valid values are 0, 1, and 3. Requests specifying an invalid value will be
 *   rejected.
 *
 *   Requests for policies with any conditional bindings must specify version 3.
 *   Policies without any conditional bindings may specify any valid value or
 *   leave the field unset.
 *
 * @typedef GetPolicyOptions
 * @memberof google.iam.v1
 * @see [google.iam.v1.GetPolicyOptions definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/iam/v1/options.proto}
 */
const GetPolicyOptions = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};