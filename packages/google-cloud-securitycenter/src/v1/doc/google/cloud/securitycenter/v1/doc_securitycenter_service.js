// Copyright 2020 Google LLC
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
 * Request message for creating a finding.
 *
 * @property {string} parent
 *   Required. Resource name of the new finding's parent. Its format should be
 *   "organizations/[organization_id]/sources/[source_id]".
 *
 * @property {string} findingId
 *   Required. Unique identifier provided by the client within the parent scope.
 *   It must be alphanumeric and less than or equal to 32 characters and
 *   greater than 0 characters in length.
 *
 * @property {Object} finding
 *   Required. The Finding being created. The name and security_marks will be ignored as
 *   they are both output only fields on this resource.
 *
 *   This object should have the same structure as [Finding]{@link google.cloud.securitycenter.v1.Finding}
 *
 * @typedef CreateFindingRequest
 * @memberof google.cloud.securitycenter.v1
 * @see [google.cloud.securitycenter.v1.CreateFindingRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/securitycenter/v1/securitycenter_service.proto}
 */
const CreateFindingRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for creating a source.
 *
 * @property {string} parent
 *   Required. Resource name of the new source's parent. Its format should be
 *   "organizations/[organization_id]".
 *
 * @property {Object} source
 *   Required. The Source being created, only the display_name and description will be
 *   used. All other fields will be ignored.
 *
 *   This object should have the same structure as [Source]{@link google.cloud.securitycenter.v1.Source}
 *
 * @typedef CreateSourceRequest
 * @memberof google.cloud.securitycenter.v1
 * @see [google.cloud.securitycenter.v1.CreateSourceRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/securitycenter/v1/securitycenter_service.proto}
 */
const CreateSourceRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for getting organization settings.
 *
 * @property {string} name
 *   Required. Name of the organization to get organization settings for. Its format is
 *   "organizations/[organization_id]/organizationSettings".
 *
 * @typedef GetOrganizationSettingsRequest
 * @memberof google.cloud.securitycenter.v1
 * @see [google.cloud.securitycenter.v1.GetOrganizationSettingsRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/securitycenter/v1/securitycenter_service.proto}
 */
const GetOrganizationSettingsRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for getting a source.
 *
 * @property {string} name
 *   Required. Relative resource name of the source. Its format is
 *   "organizations/[organization_id]/source/[source_id]".
 *
 * @typedef GetSourceRequest
 * @memberof google.cloud.securitycenter.v1
 * @see [google.cloud.securitycenter.v1.GetSourceRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/securitycenter/v1/securitycenter_service.proto}
 */
const GetSourceRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for grouping by assets.
 *
 * @property {string} parent
 *   Required. Name of the organization to groupBy. Its format is
 *   "organizations/[organization_id]".
 *
 * @property {string} filter
 *   Expression that defines the filter to apply across assets.
 *   The expression is a list of zero or more restrictions combined via logical
 *   operators `AND` and `OR`.
 *   Parentheses are supported, and `OR` has higher precedence than `AND`.
 *
 *   Restrictions have the form `<field> <operator> <value>` and may have a `-`
 *   character in front of them to indicate negation. The fields map to those
 *   defined in the Asset resource. Examples include:
 *
 *   * name
 *   * security_center_properties.resource_name
 *   * resource_properties.a_property
 *   * security_marks.marks.marka
 *
 *   The supported operators are:
 *
 *   * `=` for all value types.
 *   * `>`, `<`, `>=`, `<=` for integer values.
 *   * `:`, meaning substring matching, for strings.
 *
 *   The supported value types are:
 *
 *   * string literals in quotes.
 *   * integer literals without quotes.
 *   * boolean literals `true` and `false` without quotes.
 *
 *   The following field and operator combinations are supported:
 *
 *   * name: `=`
 *   * update_time: `=`, `>`, `<`, `>=`, `<=`
 *
 *     Usage: This should be milliseconds since epoch or an RFC3339 string.
 *     Examples:
 *       "update_time = \"2019-06-10T16:07:18-07:00\""
 *       "update_time = 1560208038000"
 *
 *   * create_time: `=`, `>`, `<`, `>=`, `<=`
 *
 *     Usage: This should be milliseconds since epoch or an RFC3339 string.
 *     Examples:
 *       "create_time = \"2019-06-10T16:07:18-07:00\""
 *       "create_time = 1560208038000"
 *
 *   * iam_policy.policy_blob: `=`, `:`
 *   * resource_properties: `=`, `:`, `>`, `<`, `>=`, `<=`
 *   * security_marks.marks: `=`, `:`
 *   * security_center_properties.resource_name: `=`, `:`
 *   * security_center_properties.resource_display_name: `=`, `:`
 *   * security_center_properties.resource_type: `=`, `:`
 *   * security_center_properties.resource_parent: `=`, `:`
 *   * security_center_properties.resource_parent_display_name: `=`, `:`
 *   * security_center_properties.resource_project: `=`, `:`
 *   * security_center_properties.resource_project_display_name: `=`, `:`
 *   * security_center_properties.resource_owners: `=`, `:`
 *
 *   For example, `resource_properties.size = 100` is a valid filter string.
 *
 * @property {string} groupBy
 *   Required. Expression that defines what assets fields to use for grouping. The string
 *   value should follow SQL syntax: comma separated list of fields. For
 *   example:
 *   "security_center_properties.resource_project,security_center_properties.project".
 *
 *   The following fields are supported when compare_duration is not set:
 *
 *   * security_center_properties.resource_project
 *   * security_center_properties.resource_project_display_name
 *   * security_center_properties.resource_type
 *   * security_center_properties.resource_parent
 *   * security_center_properties.resource_parent_display_name
 *
 *   The following fields are supported when compare_duration is set:
 *
 *   * security_center_properties.resource_type
 *   * security_center_properties.resource_project_display_name
 *   * security_center_properties.resource_parent_display_name
 *
 * @property {Object} compareDuration
 *   When compare_duration is set, the GroupResult's "state_change" property is
 *   updated to indicate whether the asset was added, removed, or remained
 *   present during the compare_duration period of time that precedes the
 *   read_time. This is the time between (read_time - compare_duration) and
 *   read_time.
 *
 *   The state change value is derived based on the presence of the asset at the
 *   two points in time. Intermediate state changes between the two times don't
 *   affect the result. For example, the results aren't affected if the asset is
 *   removed and re-created again.
 *
 *   Possible "state_change" values when compare_duration is specified:
 *
 *   * "ADDED":   indicates that the asset was not present at the start of
 *                  compare_duration, but present at reference_time.
 *   * "REMOVED": indicates that the asset was present at the start of
 *                  compare_duration, but not present at reference_time.
 *   * "ACTIVE":  indicates that the asset was present at both the
 *                  start and the end of the time period defined by
 *                  compare_duration and reference_time.
 *
 *   If compare_duration is not specified, then the only possible state_change
 *   is "UNUSED", which will be the state_change set for all assets present at
 *   read_time.
 *
 *   If this field is set then `state_change` must be a specified field in
 *   `group_by`.
 *
 *   This object should have the same structure as [Duration]{@link google.protobuf.Duration}
 *
 * @property {Object} readTime
 *   Time used as a reference point when filtering assets. The filter is limited
 *   to assets existing at the supplied time and their values are those at that
 *   specific time. Absence of this field will default to the API's version of
 *   NOW.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {string} pageToken
 *   The value returned by the last `GroupAssetsResponse`; indicates
 *   that this is a continuation of a prior `GroupAssets` call, and that the
 *   system should return the next page of data.
 *
 * @property {number} pageSize
 *   The maximum number of results to return in a single response. Default is
 *   10, minimum is 1, maximum is 1000.
 *
 * @typedef GroupAssetsRequest
 * @memberof google.cloud.securitycenter.v1
 * @see [google.cloud.securitycenter.v1.GroupAssetsRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/securitycenter/v1/securitycenter_service.proto}
 */
const GroupAssetsRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Response message for grouping by assets.
 *
 * @property {Object[]} groupByResults
 *   Group results. There exists an element for each existing unique
 *   combination of property/values. The element contains a count for the number
 *   of times those specific property/values appear.
 *
 *   This object should have the same structure as [GroupResult]{@link google.cloud.securitycenter.v1.GroupResult}
 *
 * @property {Object} readTime
 *   Time used for executing the groupBy request.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {string} nextPageToken
 *   Token to retrieve the next page of results, or empty if there are no more
 *   results.
 *
 * @property {number} totalSize
 *   The total number of results matching the query.
 *
 * @typedef GroupAssetsResponse
 * @memberof google.cloud.securitycenter.v1
 * @see [google.cloud.securitycenter.v1.GroupAssetsResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/securitycenter/v1/securitycenter_service.proto}
 */
const GroupAssetsResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for grouping by findings.
 *
 * @property {string} parent
 *   Required. Name of the source to groupBy. Its format is
 *   "organizations/[organization_id]/sources/[source_id]". To groupBy across
 *   all sources provide a source_id of `-`. For example:
 *   organizations/{organization_id}/sources/-
 *
 * @property {string} filter
 *   Expression that defines the filter to apply across findings.
 *   The expression is a list of one or more restrictions combined via logical
 *   operators `AND` and `OR`.
 *   Parentheses are supported, and `OR` has higher precedence than `AND`.
 *
 *   Restrictions have the form `<field> <operator> <value>` and may have a `-`
 *   character in front of them to indicate negation. Examples include:
 *
 *    * name
 *    * source_properties.a_property
 *    * security_marks.marks.marka
 *
 *   The supported operators are:
 *
 *   * `=` for all value types.
 *   * `>`, `<`, `>=`, `<=` for integer values.
 *   * `:`, meaning substring matching, for strings.
 *
 *   The supported value types are:
 *
 *   * string literals in quotes.
 *   * integer literals without quotes.
 *   * boolean literals `true` and `false` without quotes.
 *
 *   The following field and operator combinations are supported:
 *
 *   * name: `=`
 *   * parent: `=`, `:`
 *   * resource_name: `=`, `:`
 *   * state: `=`, `:`
 *   * category: `=`, `:`
 *   * external_uri: `=`, `:`
 *   * event_time: `=`, `>`, `<`, `>=`, `<=`
 *
 *     Usage: This should be milliseconds since epoch or an RFC3339 string.
 *     Examples:
 *       "event_time = \"2019-06-10T16:07:18-07:00\""
 *       "event_time = 1560208038000"
 *
 *   * security_marks.marks: `=`, `:`
 *   * source_properties: `=`, `:`, `>`, `<`, `>=`, `<=`
 *
 *   For example, `source_properties.size = 100` is a valid filter string.
 *
 * @property {string} groupBy
 *   Required. Expression that defines what assets fields to use for grouping (including
 *   `state_change`). The string value should follow SQL syntax: comma separated
 *   list of fields. For example: "parent,resource_name".
 *
 *   The following fields are supported:
 *
 *   * resource_name
 *   * category
 *   * state
 *   * parent
 *
 *   The following fields are supported when compare_duration is set:
 *
 *   * state_change
 *
 * @property {Object} readTime
 *   Time used as a reference point when filtering findings. The filter is
 *   limited to findings existing at the supplied time and their values are
 *   those at that specific time. Absence of this field will default to the
 *   API's version of NOW.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {Object} compareDuration
 *   When compare_duration is set, the GroupResult's "state_change" attribute is
 *   updated to indicate whether the finding had its state changed, the
 *   finding's state remained unchanged, or if the finding was added during the
 *   compare_duration period of time that precedes the read_time. This is the
 *   time between (read_time - compare_duration) and read_time.
 *
 *   The state_change value is derived based on the presence and state of the
 *   finding at the two points in time. Intermediate state changes between the
 *   two times don't affect the result. For example, the results aren't affected
 *   if the finding is made inactive and then active again.
 *
 *   Possible "state_change" values when compare_duration is specified:
 *
 *   * "CHANGED":   indicates that the finding was present at the start of
 *                    compare_duration, but changed its state at read_time.
 *   * "UNCHANGED": indicates that the finding was present at the start of
 *                    compare_duration and did not change state at read_time.
 *   * "ADDED":     indicates that the finding was not present at the start
 *                    of compare_duration, but was present at read_time.
 *
 *   If compare_duration is not specified, then the only possible state_change
 *   is "UNUSED",  which will be the state_change set for all findings present
 *   at read_time.
 *
 *   If this field is set then `state_change` must be a specified field in
 *   `group_by`.
 *
 *   This object should have the same structure as [Duration]{@link google.protobuf.Duration}
 *
 * @property {string} pageToken
 *   The value returned by the last `GroupFindingsResponse`; indicates
 *   that this is a continuation of a prior `GroupFindings` call, and
 *   that the system should return the next page of data.
 *
 * @property {number} pageSize
 *   The maximum number of results to return in a single response. Default is
 *   10, minimum is 1, maximum is 1000.
 *
 * @typedef GroupFindingsRequest
 * @memberof google.cloud.securitycenter.v1
 * @see [google.cloud.securitycenter.v1.GroupFindingsRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/securitycenter/v1/securitycenter_service.proto}
 */
const GroupFindingsRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Response message for group by findings.
 *
 * @property {Object[]} groupByResults
 *   Group results. There exists an element for each existing unique
 *   combination of property/values. The element contains a count for the number
 *   of times those specific property/values appear.
 *
 *   This object should have the same structure as [GroupResult]{@link google.cloud.securitycenter.v1.GroupResult}
 *
 * @property {Object} readTime
 *   Time used for executing the groupBy request.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {string} nextPageToken
 *   Token to retrieve the next page of results, or empty if there are no more
 *   results.
 *
 * @property {number} totalSize
 *   The total number of results matching the query.
 *
 * @typedef GroupFindingsResponse
 * @memberof google.cloud.securitycenter.v1
 * @see [google.cloud.securitycenter.v1.GroupFindingsResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/securitycenter/v1/securitycenter_service.proto}
 */
const GroupFindingsResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Result containing the properties and count of a groupBy request.
 *
 * @property {Object.<string, Object>} properties
 *   Properties matching the groupBy fields in the request.
 *
 * @property {number} count
 *   Total count of resources for the given properties.
 *
 * @typedef GroupResult
 * @memberof google.cloud.securitycenter.v1
 * @see [google.cloud.securitycenter.v1.GroupResult definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/securitycenter/v1/securitycenter_service.proto}
 */
const GroupResult = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for listing sources.
 *
 * @property {string} parent
 *   Required. Resource name of the parent of sources to list. Its format should be
 *   "organizations/[organization_id]".
 *
 * @property {string} pageToken
 *   The value returned by the last `ListSourcesResponse`; indicates
 *   that this is a continuation of a prior `ListSources` call, and
 *   that the system should return the next page of data.
 *
 * @property {number} pageSize
 *   The maximum number of results to return in a single response. Default is
 *   10, minimum is 1, maximum is 1000.
 *
 * @typedef ListSourcesRequest
 * @memberof google.cloud.securitycenter.v1
 * @see [google.cloud.securitycenter.v1.ListSourcesRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/securitycenter/v1/securitycenter_service.proto}
 */
const ListSourcesRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Response message for listing sources.
 *
 * @property {Object[]} sources
 *   Sources belonging to the requested parent.
 *
 *   This object should have the same structure as [Source]{@link google.cloud.securitycenter.v1.Source}
 *
 * @property {string} nextPageToken
 *   Token to retrieve the next page of results, or empty if there are no more
 *   results.
 *
 * @typedef ListSourcesResponse
 * @memberof google.cloud.securitycenter.v1
 * @see [google.cloud.securitycenter.v1.ListSourcesResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/securitycenter/v1/securitycenter_service.proto}
 */
const ListSourcesResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for listing assets.
 *
 * @property {string} parent
 *   Required. Name of the organization assets should belong to. Its format is
 *   "organizations/[organization_id]".
 *
 * @property {string} filter
 *   Expression that defines the filter to apply across assets.
 *   The expression is a list of zero or more restrictions combined via logical
 *   operators `AND` and `OR`.
 *   Parentheses are supported, and `OR` has higher precedence than `AND`.
 *
 *   Restrictions have the form `<field> <operator> <value>` and may have a `-`
 *   character in front of them to indicate negation. The fields map to those
 *   defined in the Asset resource. Examples include:
 *
 *   * name
 *   * security_center_properties.resource_name
 *   * resource_properties.a_property
 *   * security_marks.marks.marka
 *
 *   The supported operators are:
 *
 *   * `=` for all value types.
 *   * `>`, `<`, `>=`, `<=` for integer values.
 *   * `:`, meaning substring matching, for strings.
 *
 *   The supported value types are:
 *
 *   * string literals in quotes.
 *   * integer literals without quotes.
 *   * boolean literals `true` and `false` without quotes.
 *
 *   The following are the allowed field and operator combinations:
 *
 *   * name: `=`
 *   * update_time: `=`, `>`, `<`, `>=`, `<=`
 *
 *     Usage: This should be milliseconds since epoch or an RFC3339 string.
 *     Examples:
 *       "update_time = \"2019-06-10T16:07:18-07:00\""
 *       "update_time = 1560208038000"
 *
 *   * create_time: `=`, `>`, `<`, `>=`, `<=`
 *
 *     Usage: This should be milliseconds since epoch or an RFC3339 string.
 *     Examples:
 *       "create_time = \"2019-06-10T16:07:18-07:00\""
 *       "create_time = 1560208038000"
 *
 *   * iam_policy.policy_blob: `=`, `:`
 *   * resource_properties: `=`, `:`, `>`, `<`, `>=`, `<=`
 *   * security_marks.marks: `=`, `:`
 *   * security_center_properties.resource_name: `=`, `:`
 *   * security_center_properties.resource_display_name: `=`, `:`
 *   * security_center_properties.resource_type: `=`, `:`
 *   * security_center_properties.resource_parent: `=`, `:`
 *   * security_center_properties.resource_parent_display_name: `=`, `:`
 *   * security_center_properties.resource_project: `=`, `:`
 *   * security_center_properties.resource_project_display_name: `=`, `:`
 *   * security_center_properties.resource_owners: `=`, `:`
 *
 *   For example, `resource_properties.size = 100` is a valid filter string.
 *
 * @property {string} orderBy
 *   Expression that defines what fields and order to use for sorting. The
 *   string value should follow SQL syntax: comma separated list of fields. For
 *   example: "name,resource_properties.a_property". The default sorting order
 *   is ascending. To specify descending order for a field, a suffix " desc"
 *   should be appended to the field name. For example: "name
 *   desc,resource_properties.a_property". Redundant space characters in the
 *   syntax are insignificant. "name desc,resource_properties.a_property" and "
 *   name     desc  ,   resource_properties.a_property  " are equivalent.
 *
 *   The following fields are supported:
 *   name
 *   update_time
 *   resource_properties
 *   security_marks.marks
 *   security_center_properties.resource_name
 *   security_center_properties.resource_display_name
 *   security_center_properties.resource_parent
 *   security_center_properties.resource_parent_display_name
 *   security_center_properties.resource_project
 *   security_center_properties.resource_project_display_name
 *   security_center_properties.resource_type
 *
 * @property {Object} readTime
 *   Time used as a reference point when filtering assets. The filter is limited
 *   to assets existing at the supplied time and their values are those at that
 *   specific time. Absence of this field will default to the API's version of
 *   NOW.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {Object} compareDuration
 *   When compare_duration is set, the ListAssetsResult's "state_change"
 *   attribute is updated to indicate whether the asset was added, removed, or
 *   remained present during the compare_duration period of time that precedes
 *   the read_time. This is the time between (read_time - compare_duration) and
 *   read_time.
 *
 *   The state_change value is derived based on the presence of the asset at the
 *   two points in time. Intermediate state changes between the two times don't
 *   affect the result. For example, the results aren't affected if the asset is
 *   removed and re-created again.
 *
 *   Possible "state_change" values when compare_duration is specified:
 *
 *   * "ADDED":   indicates that the asset was not present at the start of
 *                  compare_duration, but present at read_time.
 *   * "REMOVED": indicates that the asset was present at the start of
 *                  compare_duration, but not present at read_time.
 *   * "ACTIVE":  indicates that the asset was present at both the
 *                  start and the end of the time period defined by
 *                  compare_duration and read_time.
 *
 *   If compare_duration is not specified, then the only possible state_change
 *   is "UNUSED",  which will be the state_change set for all assets present at
 *   read_time.
 *
 *   This object should have the same structure as [Duration]{@link google.protobuf.Duration}
 *
 * @property {Object} fieldMask
 *   Optional. A field mask to specify the ListAssetsResult fields to be listed in the
 *   response.
 *   An empty field mask will list all fields.
 *
 *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
 *
 * @property {string} pageToken
 *   The value returned by the last `ListAssetsResponse`; indicates
 *   that this is a continuation of a prior `ListAssets` call, and
 *   that the system should return the next page of data.
 *
 * @property {number} pageSize
 *   The maximum number of results to return in a single response. Default is
 *   10, minimum is 1, maximum is 1000.
 *
 * @typedef ListAssetsRequest
 * @memberof google.cloud.securitycenter.v1
 * @see [google.cloud.securitycenter.v1.ListAssetsRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/securitycenter/v1/securitycenter_service.proto}
 */
const ListAssetsRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Response message for listing assets.
 *
 * @property {Object[]} listAssetsResults
 *   Assets matching the list request.
 *
 *   This object should have the same structure as [ListAssetsResult]{@link google.cloud.securitycenter.v1.ListAssetsResult}
 *
 * @property {Object} readTime
 *   Time used for executing the list request.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {string} nextPageToken
 *   Token to retrieve the next page of results, or empty if there are no more
 *   results.
 *
 * @property {number} totalSize
 *   The total number of assets matching the query.
 *
 * @typedef ListAssetsResponse
 * @memberof google.cloud.securitycenter.v1
 * @see [google.cloud.securitycenter.v1.ListAssetsResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/securitycenter/v1/securitycenter_service.proto}
 */
const ListAssetsResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Result containing the Asset and its State.
   *
   * @property {Object} asset
   *   Asset matching the search request.
   *
   *   This object should have the same structure as [Asset]{@link google.cloud.securitycenter.v1.Asset}
   *
   * @property {number} stateChange
   *   State change of the asset between the points in time.
   *
   *   The number should be among the values of [StateChange]{@link google.cloud.securitycenter.v1.StateChange}
   *
   * @typedef ListAssetsResult
   * @memberof google.cloud.securitycenter.v1
   * @see [google.cloud.securitycenter.v1.ListAssetsResponse.ListAssetsResult definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/securitycenter/v1/securitycenter_service.proto}
   */
  ListAssetsResult: {
    // This is for documentation. Actual contents will be loaded by gRPC.

    /**
     * The change in state of the asset.
     *
     * When querying across two points in time this describes
     * the change between the two points: ADDED, REMOVED, or ACTIVE.
     * If there was no compare_duration supplied in the request the state change
     * will be: UNUSED
     *
     * @enum {number}
     * @memberof google.cloud.securitycenter.v1
     */
    StateChange: {

      /**
       * State change is unused, this is the canonical default for this enum.
       */
      UNUSED: 0,

      /**
       * Asset was added between the points in time.
       */
      ADDED: 1,

      /**
       * Asset was removed between the points in time.
       */
      REMOVED: 2,

      /**
       * Asset was present at both point(s) in time.
       */
      ACTIVE: 3
    }
  }
};

/**
 * Request message for listing findings.
 *
 * @property {string} parent
 *   Required. Name of the source the findings belong to. Its format is
 *   "organizations/[organization_id]/sources/[source_id]". To list across all
 *   sources provide a source_id of `-`. For example:
 *   organizations/{organization_id}/sources/-
 *
 * @property {string} filter
 *   Expression that defines the filter to apply across findings.
 *   The expression is a list of one or more restrictions combined via logical
 *   operators `AND` and `OR`.
 *   Parentheses are supported, and `OR` has higher precedence than `AND`.
 *
 *   Restrictions have the form `<field> <operator> <value>` and may have a `-`
 *   character in front of them to indicate negation. Examples include:
 *
 *    * name
 *    * source_properties.a_property
 *    * security_marks.marks.marka
 *
 *   The supported operators are:
 *
 *   * `=` for all value types.
 *   * `>`, `<`, `>=`, `<=` for integer values.
 *   * `:`, meaning substring matching, for strings.
 *
 *   The supported value types are:
 *
 *   * string literals in quotes.
 *   * integer literals without quotes.
 *   * boolean literals `true` and `false` without quotes.
 *
 *   The following field and operator combinations are supported:
 *
 *   name: `=`
 *   parent: `=`, `:`
 *   resource_name: `=`, `:`
 *   state: `=`, `:`
 *   category: `=`, `:`
 *   external_uri: `=`, `:`
 *   event_time: `=`, `>`, `<`, `>=`, `<=`
 *
 *     Usage: This should be milliseconds since epoch or an RFC3339 string.
 *     Examples:
 *       "event_time = \"2019-06-10T16:07:18-07:00\""
 *       "event_time = 1560208038000"
 *
 *   security_marks.marks: `=`, `:`
 *   source_properties: `=`, `:`, `>`, `<`, `>=`, `<=`
 *
 *   For example, `source_properties.size = 100` is a valid filter string.
 *
 * @property {string} orderBy
 *   Expression that defines what fields and order to use for sorting. The
 *   string value should follow SQL syntax: comma separated list of fields. For
 *   example: "name,resource_properties.a_property". The default sorting order
 *   is ascending. To specify descending order for a field, a suffix " desc"
 *   should be appended to the field name. For example: "name
 *   desc,source_properties.a_property". Redundant space characters in the
 *   syntax are insignificant. "name desc,source_properties.a_property" and "
 *   name     desc  ,   source_properties.a_property  " are equivalent.
 *
 *   The following fields are supported:
 *   name
 *   parent
 *   state
 *   category
 *   resource_name
 *   event_time
 *   source_properties
 *   security_marks.marks
 *
 * @property {Object} readTime
 *   Time used as a reference point when filtering findings. The filter is
 *   limited to findings existing at the supplied time and their values are
 *   those at that specific time. Absence of this field will default to the
 *   API's version of NOW.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {Object} compareDuration
 *   When compare_duration is set, the ListFindingsResult's "state_change"
 *   attribute is updated to indicate whether the finding had its state changed,
 *   the finding's state remained unchanged, or if the finding was added in any
 *   state during the compare_duration period of time that precedes the
 *   read_time. This is the time between (read_time - compare_duration) and
 *   read_time.
 *
 *   The state_change value is derived based on the presence and state of the
 *   finding at the two points in time. Intermediate state changes between the
 *   two times don't affect the result. For example, the results aren't affected
 *   if the finding is made inactive and then active again.
 *
 *   Possible "state_change" values when compare_duration is specified:
 *
 *   * "CHANGED":   indicates that the finding was present at the start of
 *                    compare_duration, but changed its state at read_time.
 *   * "UNCHANGED": indicates that the finding was present at the start of
 *                    compare_duration and did not change state at read_time.
 *   * "ADDED":     indicates that the finding was not present at the start
 *                    of compare_duration, but was present at read_time.
 *
 *   If compare_duration is not specified, then the only possible state_change
 *   is "UNUSED", which will be the state_change set for all findings present at
 *   read_time.
 *
 *   This object should have the same structure as [Duration]{@link google.protobuf.Duration}
 *
 * @property {Object} fieldMask
 *   Optional. A field mask to specify the Finding fields to be listed in the response.
 *   An empty field mask will list all fields.
 *
 *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
 *
 * @property {string} pageToken
 *   The value returned by the last `ListFindingsResponse`; indicates
 *   that this is a continuation of a prior `ListFindings` call, and
 *   that the system should return the next page of data.
 *
 * @property {number} pageSize
 *   The maximum number of results to return in a single response. Default is
 *   10, minimum is 1, maximum is 1000.
 *
 * @typedef ListFindingsRequest
 * @memberof google.cloud.securitycenter.v1
 * @see [google.cloud.securitycenter.v1.ListFindingsRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/securitycenter/v1/securitycenter_service.proto}
 */
const ListFindingsRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Response message for listing findings.
 *
 * @property {Object[]} listFindingsResults
 *   Findings matching the list request.
 *
 *   This object should have the same structure as [ListFindingsResult]{@link google.cloud.securitycenter.v1.ListFindingsResult}
 *
 * @property {Object} readTime
 *   Time used for executing the list request.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {string} nextPageToken
 *   Token to retrieve the next page of results, or empty if there are no more
 *   results.
 *
 * @property {number} totalSize
 *   The total number of findings matching the query.
 *
 * @typedef ListFindingsResponse
 * @memberof google.cloud.securitycenter.v1
 * @see [google.cloud.securitycenter.v1.ListFindingsResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/securitycenter/v1/securitycenter_service.proto}
 */
const ListFindingsResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Result containing the Finding and its StateChange.
   *
   * @property {Object} finding
   *   Finding matching the search request.
   *
   *   This object should have the same structure as [Finding]{@link google.cloud.securitycenter.v1.Finding}
   *
   * @property {number} stateChange
   *   State change of the finding between the points in time.
   *
   *   The number should be among the values of [StateChange]{@link google.cloud.securitycenter.v1.StateChange}
   *
   * @property {Object} resource
   *   Output only. Resource that is associated with this finding.
   *
   *   This object should have the same structure as [Resource]{@link google.cloud.securitycenter.v1.Resource}
   *
   * @typedef ListFindingsResult
   * @memberof google.cloud.securitycenter.v1
   * @see [google.cloud.securitycenter.v1.ListFindingsResponse.ListFindingsResult definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/securitycenter/v1/securitycenter_service.proto}
   */
  ListFindingsResult: {
    // This is for documentation. Actual contents will be loaded by gRPC.

    /**
     * Information related to the Google Cloud Platform (GCP) resource that is
     * associated with this finding.
     *
     * @property {string} name
     *   The full resource name of the resource. See:
     *   https://cloud.google.com/apis/design/resource_names#full_resource_name
     *
     * @property {string} projectName
     *   The full resource name of project that the resource belongs to.
     *
     * @property {string} projectDisplayName
     *   The human readable name of project that the resource belongs to.
     *
     * @property {string} parentName
     *   The full resource name of resource's parent.
     *
     * @property {string} parentDisplayName
     *   The human readable name of resource's parent.
     *
     * @typedef Resource
     * @memberof google.cloud.securitycenter.v1
     * @see [google.cloud.securitycenter.v1.ListFindingsResponse.ListFindingsResult.Resource definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/securitycenter/v1/securitycenter_service.proto}
     */
    Resource: {
      // This is for documentation. Actual contents will be loaded by gRPC.
    },

    /**
     * The change in state of the finding.
     *
     * When querying across two points in time this describes
     * the change in the finding between the two points: CHANGED, UNCHANGED,
     * ADDED, or REMOVED. Findings can not be deleted, so REMOVED implies that
     * the finding at timestamp does not match the filter specified, but it did
     * at timestamp - compare_duration. If there was no compare_duration
     * supplied in the request the state change will be: UNUSED
     *
     * @enum {number}
     * @memberof google.cloud.securitycenter.v1
     */
    StateChange: {

      /**
       * State change is unused, this is the canonical default for this enum.
       */
      UNUSED: 0,

      /**
       * The finding has changed state in some way between the points in time
       * and existed at both points.
       */
      CHANGED: 1,

      /**
       * The finding has not changed state between the points in time and
       * existed at both points.
       */
      UNCHANGED: 2,

      /**
       * The finding was created between the points in time.
       */
      ADDED: 3,

      /**
       * The finding at timestamp does not match the filter specified, but it
       * did at timestamp - compare_duration.
       */
      REMOVED: 4
    }
  }
};

/**
 * Request message for updating a finding's state.
 *
 * @property {string} name
 *   Required. The relative resource name of the finding. See:
 *   https://cloud.google.com/apis/design/resource_names#relative_resource_name
 *   Example:
 *   "organizations/{organization_id}/sources/{source_id}/finding/{finding_id}".
 *
 * @property {number} state
 *   Required. The desired State of the finding.
 *
 *   The number should be among the values of [State]{@link google.cloud.securitycenter.v1.State}
 *
 * @property {Object} startTime
 *   Required. The time at which the updated state takes effect.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @typedef SetFindingStateRequest
 * @memberof google.cloud.securitycenter.v1
 * @see [google.cloud.securitycenter.v1.SetFindingStateRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/securitycenter/v1/securitycenter_service.proto}
 */
const SetFindingStateRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for running asset discovery for an organization.
 *
 * @property {string} parent
 *   Required. Name of the organization to run asset discovery for. Its format is
 *   "organizations/[organization_id]".
 *
 * @typedef RunAssetDiscoveryRequest
 * @memberof google.cloud.securitycenter.v1
 * @see [google.cloud.securitycenter.v1.RunAssetDiscoveryRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/securitycenter/v1/securitycenter_service.proto}
 */
const RunAssetDiscoveryRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for updating or creating a finding.
 *
 * @property {Object} finding
 *   Required. The finding resource to update or create if it does not already exist.
 *   parent, security_marks, and update_time will be ignored.
 *
 *   In the case of creation, the finding id portion of the name must be
 *   alphanumeric and less than or equal to 32 characters and greater than 0
 *   characters in length.
 *
 *   This object should have the same structure as [Finding]{@link google.cloud.securitycenter.v1.Finding}
 *
 * @property {Object} updateMask
 *   The FieldMask to use when updating the finding resource. This field should
 *   not be specified when creating a finding.
 *
 *   When updating a finding, an empty mask is treated as updating all mutable
 *   fields and replacing source_properties.  Individual source_properties can
 *   be added/updated by using "source_properties.<property key>" in the field
 *   mask.
 *
 *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
 *
 * @typedef UpdateFindingRequest
 * @memberof google.cloud.securitycenter.v1
 * @see [google.cloud.securitycenter.v1.UpdateFindingRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/securitycenter/v1/securitycenter_service.proto}
 */
const UpdateFindingRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for updating an organization's settings.
 *
 * @property {Object} organizationSettings
 *   Required. The organization settings resource to update.
 *
 *   This object should have the same structure as [OrganizationSettings]{@link google.cloud.securitycenter.v1.OrganizationSettings}
 *
 * @property {Object} updateMask
 *   The FieldMask to use when updating the settings resource.
 *
 *    If empty all mutable fields will be updated.
 *
 *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
 *
 * @typedef UpdateOrganizationSettingsRequest
 * @memberof google.cloud.securitycenter.v1
 * @see [google.cloud.securitycenter.v1.UpdateOrganizationSettingsRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/securitycenter/v1/securitycenter_service.proto}
 */
const UpdateOrganizationSettingsRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for updating a source.
 *
 * @property {Object} source
 *   Required. The source resource to update.
 *
 *   This object should have the same structure as [Source]{@link google.cloud.securitycenter.v1.Source}
 *
 * @property {Object} updateMask
 *   The FieldMask to use when updating the source resource.
 *
 *   If empty all mutable fields will be updated.
 *
 *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
 *
 * @typedef UpdateSourceRequest
 * @memberof google.cloud.securitycenter.v1
 * @see [google.cloud.securitycenter.v1.UpdateSourceRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/securitycenter/v1/securitycenter_service.proto}
 */
const UpdateSourceRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for updating a SecurityMarks resource.
 *
 * @property {Object} securityMarks
 *   Required. The security marks resource to update.
 *
 *   This object should have the same structure as [SecurityMarks]{@link google.cloud.securitycenter.v1.SecurityMarks}
 *
 * @property {Object} updateMask
 *   The FieldMask to use when updating the security marks resource.
 *
 *   The field mask must not contain duplicate fields.
 *   If empty or set to "marks", all marks will be replaced.  Individual
 *   marks can be updated using "marks.<mark_key>".
 *
 *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
 *
 * @property {Object} startTime
 *   The time at which the updated SecurityMarks take effect.
 *   If not set uses current server time.  Updates will be applied to the
 *   SecurityMarks that are active immediately preceding this time.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @typedef UpdateSecurityMarksRequest
 * @memberof google.cloud.securitycenter.v1
 * @see [google.cloud.securitycenter.v1.UpdateSecurityMarksRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/securitycenter/v1/securitycenter_service.proto}
 */
const UpdateSecurityMarksRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};