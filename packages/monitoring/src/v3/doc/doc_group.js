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
 * The description of a dynamic collection of monitored resources. Each group
 * has a filter that is matched against monitored resources and their associated
 * metadata. If a group's filter matches an available monitored resource, then
 * that resource is a member of that group.  Groups can contain any number of
 * monitored resources, and each monitored resource can be a member of any
 * number of groups.
 *
 * Groups can be nested in parent-child hierarchies. The `parentName` field
 * identifies an optional parent for each group.  If a group has a parent, then
 * the only monitored resources available to be matched by the group's filter
 * are the resources contained in the parent group.  In other words, a group
 * contains the monitored resources that match its filter and the filters of all
 * the group's ancestors.  A group without a parent can contain any monitored
 * resource.
 *
 * For example, consider an infrastructure running a set of instances with two
 * user-defined tags: `"environment"` and `"role"`. A parent group has a filter,
 * `environment="production"`.  A child of that parent group has a filter,
 * `role="transcoder"`.  The parent group contains all instances in the
 * production environment, regardless of their roles.  The child group contains
 * instances that have the transcoder role *and* are in the production
 * environment.
 *
 * The monitored resources contained in a group can change at any moment,
 * depending on what resources exist and what filters are associated with the
 * group and its ancestors.
 *
 * @property {string} name
 *   Output only. The name of this group. The format is
 *   `"projects/{project_id_or_number}/groups/{group_id}"`.
 *   When creating a group, this field is ignored and a new name is created
 *   consisting of the project specified in the call to `CreateGroup`
 *   and a unique `{group_id}` that is generated automatically.
 *
 * @property {string} displayName
 *   A user-assigned name for this group, used only for display purposes.
 *
 * @property {string} parentName
 *   The name of the group's parent, if it has one.
 *   The format is `"projects/{project_id_or_number}/groups/{group_id}"`.
 *   For groups with no parent, `parentName` is the empty string, `""`.
 *
 * @property {string} filter
 *   The filter used to determine which monitored resources belong to this group.
 *
 * @property {boolean} isCluster
 *   If true, the members of this group are considered to be a cluster.
 *   The system can perform additional analysis on groups that are clusters.
 *
 * @class
 * @see [google.monitoring.v3.Group definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/group.proto}
 */
var Group = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};