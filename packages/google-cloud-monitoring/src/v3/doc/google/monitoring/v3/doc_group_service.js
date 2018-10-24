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
 * The `ListGroup` request.
 *
 * @property {string} name
 *   The project whose groups are to be listed. The format is
 *   `"projects/{project_id_or_number}"`.
 *
 * @property {string} childrenOfGroup
 *   A group name: `"projects/{project_id_or_number}/groups/{group_id}"`.
 *   Returns groups whose `parentName` field contains the group
 *   name.  If no groups have this parent, the results are empty.
 *
 * @property {string} ancestorsOfGroup
 *   A group name: `"projects/{project_id_or_number}/groups/{group_id}"`.
 *   Returns groups that are ancestors of the specified group.
 *   The groups are returned in order, starting with the immediate parent and
 *   ending with the most distant ancestor.  If the specified group has no
 *   immediate parent, the results are empty.
 *
 * @property {string} descendantsOfGroup
 *   A group name: `"projects/{project_id_or_number}/groups/{group_id}"`.
 *   Returns the descendants of the specified group.  This is a superset of
 *   the results returned by the `childrenOfGroup` filter, and includes
 *   children-of-children, and so forth.
 *
 * @property {number} pageSize
 *   A positive number that is the maximum number of results to return.
 *
 * @property {string} pageToken
 *   If this field is not empty then it must contain the `nextPageToken` value
 *   returned by a previous call to this method.  Using this field causes the
 *   method to return additional results from the previous method call.
 *
 * @typedef ListGroupsRequest
 * @memberof google.monitoring.v3
 * @see [google.monitoring.v3.ListGroupsRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/group_service.proto}
 */
const ListGroupsRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The `ListGroups` response.
 *
 * @property {Object[]} group
 *   The groups that match the specified filters.
 *
 *   This object should have the same structure as [Group]{@link google.monitoring.v3.Group}
 *
 * @property {string} nextPageToken
 *   If there are more results than have been returned, then this field is set
 *   to a non-empty value.  To see the additional results,
 *   use that value as `pageToken` in the next call to this method.
 *
 * @typedef ListGroupsResponse
 * @memberof google.monitoring.v3
 * @see [google.monitoring.v3.ListGroupsResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/group_service.proto}
 */
const ListGroupsResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The `GetGroup` request.
 *
 * @property {string} name
 *   The group to retrieve. The format is
 *   `"projects/{project_id_or_number}/groups/{group_id}"`.
 *
 * @typedef GetGroupRequest
 * @memberof google.monitoring.v3
 * @see [google.monitoring.v3.GetGroupRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/group_service.proto}
 */
const GetGroupRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The `CreateGroup` request.
 *
 * @property {string} name
 *   The project in which to create the group. The format is
 *   `"projects/{project_id_or_number}"`.
 *
 * @property {Object} group
 *   A group definition. It is an error to define the `name` field because
 *   the system assigns the name.
 *
 *   This object should have the same structure as [Group]{@link google.monitoring.v3.Group}
 *
 * @property {boolean} validateOnly
 *   If true, validate this request but do not create the group.
 *
 * @typedef CreateGroupRequest
 * @memberof google.monitoring.v3
 * @see [google.monitoring.v3.CreateGroupRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/group_service.proto}
 */
const CreateGroupRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The `UpdateGroup` request.
 *
 * @property {Object} group
 *   The new definition of the group.  All fields of the existing group,
 *   excepting `name`, are replaced with the corresponding fields of this group.
 *
 *   This object should have the same structure as [Group]{@link google.monitoring.v3.Group}
 *
 * @property {boolean} validateOnly
 *   If true, validate this request but do not update the existing group.
 *
 * @typedef UpdateGroupRequest
 * @memberof google.monitoring.v3
 * @see [google.monitoring.v3.UpdateGroupRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/group_service.proto}
 */
const UpdateGroupRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The `DeleteGroup` request. You can only delete a group if it has no children.
 *
 * @property {string} name
 *   The group to delete. The format is
 *   `"projects/{project_id_or_number}/groups/{group_id}"`.
 *
 * @typedef DeleteGroupRequest
 * @memberof google.monitoring.v3
 * @see [google.monitoring.v3.DeleteGroupRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/group_service.proto}
 */
const DeleteGroupRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The `ListGroupMembers` request.
 *
 * @property {string} name
 *   The group whose members are listed. The format is
 *   `"projects/{project_id_or_number}/groups/{group_id}"`.
 *
 * @property {number} pageSize
 *   A positive number that is the maximum number of results to return.
 *
 * @property {string} pageToken
 *   If this field is not empty then it must contain the `nextPageToken` value
 *   returned by a previous call to this method.  Using this field causes the
 *   method to return additional results from the previous method call.
 *
 * @property {string} filter
 *   An optional [list filter](https://cloud.google.com/monitoring/api/learn_more#filtering) describing
 *   the members to be returned.  The filter may reference the type, labels, and
 *   metadata of monitored resources that comprise the group.
 *   For example, to return only resources representing Compute Engine VM
 *   instances, use this filter:
 *
 *       resource.type = "gce_instance"
 *
 * @property {Object} interval
 *   An optional time interval for which results should be returned. Only
 *   members that were part of the group during the specified interval are
 *   included in the response.  If no interval is provided then the group
 *   membership over the last minute is returned.
 *
 *   This object should have the same structure as [TimeInterval]{@link google.monitoring.v3.TimeInterval}
 *
 * @typedef ListGroupMembersRequest
 * @memberof google.monitoring.v3
 * @see [google.monitoring.v3.ListGroupMembersRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/group_service.proto}
 */
const ListGroupMembersRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The `ListGroupMembers` response.
 *
 * @property {Object[]} members
 *   A set of monitored resources in the group.
 *
 *   This object should have the same structure as [MonitoredResource]{@link google.api.MonitoredResource}
 *
 * @property {string} nextPageToken
 *   If there are more results than have been returned, then this field is
 *   set to a non-empty value.  To see the additional results, use that value as
 *   `pageToken` in the next call to this method.
 *
 * @property {number} totalSize
 *   The total number of elements matching this request.
 *
 * @typedef ListGroupMembersResponse
 * @memberof google.monitoring.v3
 * @see [google.monitoring.v3.ListGroupMembersResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/group_service.proto}
 */
const ListGroupMembersResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};