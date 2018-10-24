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
 * The protocol for the `CreateAlertPolicy` request.
 *
 * @property {string} name
 *   The project in which to create the alerting policy. The format is
 *   `projects/[PROJECT_ID]`.
 *
 *   Note that this field names the parent container in which the alerting
 *   policy will be written, not the name of the created policy. The alerting
 *   policy that is returned will have a name that contains a normalized
 *   representation of this name as a prefix but adds a suffix of the form
 *   `/alertPolicies/[POLICY_ID]`, identifying the policy in the container.
 *
 * @property {Object} alertPolicy
 *   The requested alerting policy. You should omit the `name` field in this
 *   policy. The name will be returned in the new policy, including
 *   a new [ALERT_POLICY_ID] value.
 *
 *   This object should have the same structure as [AlertPolicy]{@link google.monitoring.v3.AlertPolicy}
 *
 * @typedef CreateAlertPolicyRequest
 * @memberof google.monitoring.v3
 * @see [google.monitoring.v3.CreateAlertPolicyRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/alert_service.proto}
 */
const CreateAlertPolicyRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The protocol for the `GetAlertPolicy` request.
 *
 * @property {string} name
 *   The alerting policy to retrieve. The format is
 *
 *       projects/[PROJECT_ID]/alertPolicies/[ALERT_POLICY_ID]
 *
 * @typedef GetAlertPolicyRequest
 * @memberof google.monitoring.v3
 * @see [google.monitoring.v3.GetAlertPolicyRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/alert_service.proto}
 */
const GetAlertPolicyRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The protocol for the `ListAlertPolicies` request.
 *
 * @property {string} name
 *   The project whose alert policies are to be listed. The format is
 *
 *       projects/[PROJECT_ID]
 *
 *   Note that this field names the parent container in which the alerting
 *   policies to be listed are stored. To retrieve a single alerting policy
 *   by name, use the
 *   GetAlertPolicy
 *   operation, instead.
 *
 * @property {string} filter
 *   If provided, this field specifies the criteria that must be met by
 *   alert policies to be included in the response.
 *
 *   For more details, see [sorting and
 *   filtering](https://cloud.google.com/monitoring/api/v3/sorting-and-filtering).
 *
 * @property {string} orderBy
 *   A comma-separated list of fields by which to sort the result. Supports
 *   the same set of field references as the `filter` field. Entries can be
 *   prefixed with a minus sign to sort by the field in descending order.
 *
 *   For more details, see [sorting and
 *   filtering](https://cloud.google.com/monitoring/api/v3/sorting-and-filtering).
 *
 * @property {number} pageSize
 *   The maximum number of results to return in a single response.
 *
 * @property {string} pageToken
 *   If this field is not empty then it must contain the `nextPageToken` value
 *   returned by a previous call to this method.  Using this field causes the
 *   method to return more results from the previous method call.
 *
 * @typedef ListAlertPoliciesRequest
 * @memberof google.monitoring.v3
 * @see [google.monitoring.v3.ListAlertPoliciesRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/alert_service.proto}
 */
const ListAlertPoliciesRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The protocol for the `ListAlertPolicies` response.
 *
 * @property {Object[]} alertPolicies
 *   The returned alert policies.
 *
 *   This object should have the same structure as [AlertPolicy]{@link google.monitoring.v3.AlertPolicy}
 *
 * @property {string} nextPageToken
 *   If there might be more results than were returned, then this field is set
 *   to a non-empty value. To see the additional results,
 *   use that value as `pageToken` in the next call to this method.
 *
 * @typedef ListAlertPoliciesResponse
 * @memberof google.monitoring.v3
 * @see [google.monitoring.v3.ListAlertPoliciesResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/alert_service.proto}
 */
const ListAlertPoliciesResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The protocol for the `UpdateAlertPolicy` request.
 *
 * @property {Object} updateMask
 *   Optional. A list of alerting policy field names. If this field is not
 *   empty, each listed field in the existing alerting policy is set to the
 *   value of the corresponding field in the supplied policy (`alert_policy`),
 *   or to the field's default value if the field is not in the supplied
 *   alerting policy.  Fields not listed retain their previous value.
 *
 *   Examples of valid field masks include `display_name`, `documentation`,
 *   `documentation.content`, `documentation.mime_type`, `user_labels`,
 *   `user_label.nameofkey`, `enabled`, `conditions`, `combiner`, etc.
 *
 *   If this field is empty, then the supplied alerting policy replaces the
 *   existing policy. It is the same as deleting the existing policy and
 *   adding the supplied policy, except for the following:
 *
 *   +   The new policy will have the same `[ALERT_POLICY_ID]` as the former
 *       policy. This gives you continuity with the former policy in your
 *       notifications and incidents.
 *   +   Conditions in the new policy will keep their former `[CONDITION_ID]` if
 *       the supplied condition includes the `name` field with that
 *       `[CONDITION_ID]`. If the supplied condition omits the `name` field,
 *       then a new `[CONDITION_ID]` is created.
 *
 *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
 *
 * @property {Object} alertPolicy
 *   Required. The updated alerting policy or the updated values for the
 *   fields listed in `update_mask`.
 *   If `update_mask` is not empty, any fields in this policy that are
 *   not in `update_mask` are ignored.
 *
 *   This object should have the same structure as [AlertPolicy]{@link google.monitoring.v3.AlertPolicy}
 *
 * @typedef UpdateAlertPolicyRequest
 * @memberof google.monitoring.v3
 * @see [google.monitoring.v3.UpdateAlertPolicyRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/alert_service.proto}
 */
const UpdateAlertPolicyRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The protocol for the `DeleteAlertPolicy` request.
 *
 * @property {string} name
 *   The alerting policy to delete. The format is:
 *
 *       projects/[PROJECT_ID]/alertPolicies/[ALERT_POLICY_ID]
 *
 *   For more information, see AlertPolicy.
 *
 * @typedef DeleteAlertPolicyRequest
 * @memberof google.monitoring.v3
 * @see [google.monitoring.v3.DeleteAlertPolicyRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/alert_service.proto}
 */
const DeleteAlertPolicyRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};