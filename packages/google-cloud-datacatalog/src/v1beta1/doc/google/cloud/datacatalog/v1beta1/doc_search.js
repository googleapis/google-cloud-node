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
 * A result that appears in the response of a search request. Each result
 * captures details of one entry that matches the search.
 *
 * @property {number} searchResultType
 *   Type of the search result. This field can be used to determine which Get
 *   method to call to fetch the full resource.
 *
 *   The number should be among the values of [SearchResultType]{@link google.cloud.datacatalog.v1beta1.SearchResultType}
 *
 * @property {string} searchResultSubtype
 *   Sub-type of the search result. This is a dot-delimited description of the
 *   resource's full type, and is the same as the value callers would provide in
 *   the "type" search facet.  Examples: "entry.table", "entry.dataStream",
 *   "tagTemplate"
 *
 * @property {string} relativeResourceName
 *   The relative resource name of the resource in URL format.
 *   Examples:
 *   "projects/{project_id}/locations/{location_id}/entryGroups/{entry_group_id}/entries/{entry_id}".
 *   "projects/{project_id}/tagTemplates/{tag_template_id}".
 *
 * @property {string} linkedResource
 *   The full name of the cloud resource the entry belongs to. See:
 *   https://cloud.google.com/apis/design/resource_names#full_resource_name
 *   Example:
 *   "//bigquery.googleapis.com/projects/projectId/datasets/datasetId/tables/tableId".
 *
 * @typedef SearchCatalogResult
 * @memberof google.cloud.datacatalog.v1beta1
 * @see [google.cloud.datacatalog.v1beta1.SearchCatalogResult definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datacatalog/v1beta1/search.proto}
 */
const SearchCatalogResult = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The different types of resources that can be returned in search.
 *
 * @enum {number}
 * @memberof google.cloud.datacatalog.v1beta1
 */
const SearchResultType = {

  /**
   * Default unknown type.
   */
  SEARCH_RESULT_TYPE_UNSPECIFIED: 0,

  /**
   * An Entry.
   */
  ENTRY: 1,

  /**
   * A TagTemplate.
   */
  TAG_TEMPLATE: 2,

  /**
   * An EntryGroup.
   */
  ENTRY_GROUP: 3
};