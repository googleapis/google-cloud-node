// Copyright 2018 Google LLC
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
 * Request message for `SetIamPolicy` method.
 *
 * @property {string} resource
 *   REQUIRED: The resource for which the policy is being specified.
 *   `resource` is usually specified as a path. For example, a Project
 *   resource is specified as `projects/{project}`.
 *
 * @property {Object} policy
 *   REQUIRED: The complete policy to be applied to the `resource`. The size of
 *   the policy is limited to a few 10s of KB. An empty policy is a
 *   valid policy but certain Cloud Platform services (such as Projects)
 *   might reject them.
 *
 *   This object should have the same structure as [Policy]{@link google.iam.v1.Policy}
 *
 * @typedef SetIamPolicyRequest
 * @memberof google.iam.v1
 * @see [google.iam.v1.SetIamPolicyRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/iam/v1/iam_policy.proto}
 */
const SetIamPolicyRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for `GetIamPolicy` method.
 *
 * @property {string} resource
 *   REQUIRED: The resource for which the policy is being requested.
 *   `resource` is usually specified as a path. For example, a Project
 *   resource is specified as `projects/{project}`.
 *
 * @typedef GetIamPolicyRequest
 * @memberof google.iam.v1
 * @see [google.iam.v1.GetIamPolicyRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/iam/v1/iam_policy.proto}
 */
const GetIamPolicyRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for `TestIamPermissions` method.
 *
 * @property {string} resource
 *   REQUIRED: The resource for which the policy detail is being requested.
 *   `resource` is usually specified as a path. For example, a Project
 *   resource is specified as `projects/{project}`.
 *
 * @property {string[]} permissions
 *   The set of permissions to check for the `resource`. Permissions with
 *   wildcards (such as '*' or 'storage.*') are not allowed. For more
 *   information see
 *   [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
 *
 * @typedef TestIamPermissionsRequest
 * @memberof google.iam.v1
 * @see [google.iam.v1.TestIamPermissionsRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/iam/v1/iam_policy.proto}
 */
const TestIamPermissionsRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Response message for `TestIamPermissions` method.
 *
 * @property {string[]} permissions
 *   A subset of `TestPermissionsRequest.permissions` that the caller is
 *   allowed.
 *
 * @typedef TestIamPermissionsResponse
 * @memberof google.iam.v1
 * @see [google.iam.v1.TestIamPermissionsResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/iam/v1/iam_policy.proto}
 */
const TestIamPermissionsResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};