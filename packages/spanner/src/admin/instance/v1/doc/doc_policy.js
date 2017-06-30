/*
 * Copyright 2017, Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*
 * Note: this file is purely for documentation. Any contents are not expected
 * to be loaded as the JS file.
 */

/**
 * Defines an Identity and Access Management (IAM) policy. It is used to
 * specify access control policies for Cloud Platform resources.
 *
 *
 * A `Policy` consists of a list of `bindings`. A `Binding` binds a list of
 * `members` to a `role`, where the members can be user accounts, Google groups,
 * Google domains, and service accounts. A `role` is a named list of permissions
 * defined by IAM.
 *
 * **Example**
 *
 *     {
 *       "bindings": [
 *         {
 *           "role": "roles/owner",
 *           "members": [
 *             "user:mike@example.com",
 *             "group:admins@example.com",
 *             "domain:google.com",
 *             "serviceAccount:my-other-app@appspot.gserviceaccount.com",
 *           ]
 *         },
 *         {
 *           "role": "roles/viewer",
 *           "members": ["user:sean@example.com"]
 *         }
 *       ]
 *     }
 *
 * For a description of IAM and its features, see the
 * [IAM developer's guide](https://cloud.google.com/iam).
 *
 * @property {number} version
 *   Version of the `Policy`. The default version is 0.
 *
 * @property {Object[]} bindings
 *   Associates a list of `members` to a `role`.
 *   Multiple `bindings` must not be specified for the same `role`.
 *   `bindings` with no members will result in an error.
 *
 *   This object should have the same structure as [Binding]{@link Binding}
 *
 * @property {string} etag
 *   `etag` is used for optimistic concurrency control as a way to help
 *   prevent simultaneous updates of a policy from overwriting each other.
 *   It is strongly suggested that systems make use of the `etag` in the
 *   read-modify-write cycle to perform policy updates in order to avoid race
 *   conditions: An `etag` is returned in the response to `getIamPolicy`, and
 *   systems are expected to put that etag in the request to `setIamPolicy` to
 *   ensure that their change will be applied to the same version of the policy.
 *
 *   If no `etag` is provided in the call to `setIamPolicy`, then the existing
 *   policy is overwritten blindly.
 *
 * @class
 * @see [google.iam.v1.Policy definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/iam/v1/policy.proto}
 */
var Policy = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Associates `members` with a `role`.
 *
 * @property {string} role
 *   Role that is assigned to `members`.
 *   For example, `roles/viewer`, `roles/editor`, or `roles/owner`.
 *   Required
 *
 * @property {string[]} members
 *   Specifies the identities requesting access for a Cloud Platform resource.
 *   `members` can have the following values:
 *
 *   * `allUsers`: A special identifier that represents anyone who is
 *      on the internet; with or without a Google account.
 *
 *   * `allAuthenticatedUsers`: A special identifier that represents anyone
 *      who is authenticated with a Google account or a service account.
 *
 *   * `user:{emailid}`: An email address that represents a specific Google
 *      account. For example, `alice@gmail.com` or `joe@example.com`.
 *
 *
 *   * `serviceAccount:{emailid}`: An email address that represents a service
 *      account. For example, `my-other-app@appspot.gserviceaccount.com`.
 *
 *   * `group:{emailid}`: An email address that represents a Google group.
 *      For example, `admins@example.com`.
 *
 *   * `domain:{domain}`: A Google Apps domain name that represents all the
 *      users of that domain. For example, `google.com` or `example.com`.
 *
 * @class
 * @see [google.iam.v1.Binding definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/iam/v1/policy.proto}
 */
var Binding = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The difference delta between two policies.
 *
 * @property {Object[]} bindingDeltas
 *   The delta for Bindings between two policies.
 *
 *   This object should have the same structure as [BindingDelta]{@link BindingDelta}
 *
 * @class
 * @see [google.iam.v1.PolicyDelta definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/iam/v1/policy.proto}
 */
var PolicyDelta = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * One delta entry for Binding. Each individual change (only one member in each
 * entry) to a binding will be a separate entry.
 *
 * @property {number} action
 *   The action that was performed on a Binding.
 *   Required
 *
 *   The number should be among the values of [Action]{@link Action}
 *
 * @property {string} role
 *   Role that is assigned to `members`.
 *   For example, `roles/viewer`, `roles/editor`, or `roles/owner`.
 *   Required
 *
 * @property {string} member
 *   A single identity requesting access for a Cloud Platform resource.
 *   Follows the same format of Binding.members.
 *   Required
 *
 * @class
 * @see [google.iam.v1.BindingDelta definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/iam/v1/policy.proto}
 */
var BindingDelta = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * The type of action performed on a Binding in a policy.
   *
   * @enum {number}
   */
  Action: {

    /**
     * Unspecified.
     */
    ACTION_UNSPECIFIED: 0,

    /**
     * Addition of a Binding.
     */
    ADD: 1,

    /**
     * Removal of a Binding.
     */
    REMOVE: 2
  }
};