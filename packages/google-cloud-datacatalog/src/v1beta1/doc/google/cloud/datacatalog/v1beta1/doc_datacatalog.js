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
 * Request message for
 * SearchCatalog.
 *
 * @property {Object} scope
 *   Required. The scope of this search request.
 *
 *   This object should have the same structure as [Scope]{@link google.cloud.datacatalog.v1beta1.Scope}
 *
 * @property {string} query
 *   Required. The query string in search query syntax. The query must be
 *   non-empty.
 *
 *   Query strings can be simple as "x" or more qualified as:
 *
 *   * name:x
 *   * column:x
 *   * description:y
 *
 *   Note: Query tokens need to have a minimum of 3 characters for substring
 *   matching to work correctly. See [Data Catalog Search
 *   Syntax](https://cloud.google.com/data-catalog/docs/how-to/search-reference) for more information.
 *
 * @property {number} pageSize
 *   Number of results in the search page. If <=0 then defaults to 10. Max limit
 *   for page_size is 1000. Throws an invalid argument for page_size > 1000.
 *
 * @property {string} pageToken
 *   Optional pagination token returned in an earlier
 *   SearchCatalogResponse.next_page_token;
 *   indicates that this is a continuation of a prior
 *   SearchCatalog
 *   call, and that the system should return the next page of data. If empty
 *   then the first page is returned.
 *
 * @property {string} orderBy
 *   Specifies the ordering of results, currently supported case-sensitive
 *   choices are:
 *   <ul>
 *     <li> relevance </li>
 *     <li> last_access_timestamp [asc|desc], defaults to descending if not
 *     specified, </li>
 *     <li> last_modified_timestamp [asc|desc], defaults to descending if not
 *     specified. </li>
 *   </ul>
 *
 * @typedef SearchCatalogRequest
 * @memberof google.cloud.datacatalog.v1beta1
 * @see [google.cloud.datacatalog.v1beta1.SearchCatalogRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datacatalog/v1beta1/datacatalog.proto}
 */
const SearchCatalogRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * @property {string[]} includeOrgIds
   *   Data Catalog tries to automatically choose the right corpus of data to
   *   search through. You can ensure an organization is included by adding it
   *   to "include_org_ids". You can ensure a project's org is included with
   *   "include_project_ids". You must specify at least one organization
   *   using "include_org_ids" or "include_project_ids" in all search requests.
   *
   *   List of organization IDs to search within. To find your organization ID,
   *   follow instructions in
   *   https://cloud.google.com/resource-manager/docs/creating-managing-organization
   *
   * @property {string[]} includeProjectIds
   *   List of project IDs to search within. To learn more about the
   *   distinction between project names/IDs/numbers, go to
   *   https://cloud.google.com/docs/overview/#projects
   *
   * @property {boolean} includeGcpPublicDatasets
   *   If true, include Google Cloud Platform (GCP) public datasets in the
   *   search results. Info on GCP public datasets is available at
   *   https://cloud.google.com/public-datasets/. By default, GCP public
   *   datasets are excluded.
   *
   * @typedef Scope
   * @memberof google.cloud.datacatalog.v1beta1
   * @see [google.cloud.datacatalog.v1beta1.SearchCatalogRequest.Scope definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datacatalog/v1beta1/datacatalog.proto}
   */
  Scope: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  }
};

/**
 * Response message for
 * SearchCatalog.
 *
 * @property {Object[]} results
 *   Search results in descending order of relevance.
 *
 *   This object should have the same structure as [SearchCatalogResult]{@link google.cloud.datacatalog.v1beta1.SearchCatalogResult}
 *
 * @property {string} nextPageToken
 *   The token that can be used to retrieve the next page of results.
 *
 * @typedef SearchCatalogResponse
 * @memberof google.cloud.datacatalog.v1beta1
 * @see [google.cloud.datacatalog.v1beta1.SearchCatalogResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datacatalog/v1beta1/datacatalog.proto}
 */
const SearchCatalogResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for
 * UpdateEntry.
 *
 * @property {Object} entry
 *   Required. The updated Entry.
 *
 *   This object should have the same structure as [Entry]{@link google.cloud.datacatalog.v1beta1.Entry}
 *
 * @property {Object} updateMask
 *   Optional. The fields to update on the entry.  If absent or empty, all
 *   modifiable fields are updated.
 *
 *   Modifiable fields in synced entries:
 *
 *   1. schema (Pub/Sub topics only)
 *
 *   Modifiable fields in native entries:
 *
 *   1. display_name
 *   2. description
 *   3. schema
 *
 *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
 *
 * @typedef UpdateEntryRequest
 * @memberof google.cloud.datacatalog.v1beta1
 * @see [google.cloud.datacatalog.v1beta1.UpdateEntryRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datacatalog/v1beta1/datacatalog.proto}
 */
const UpdateEntryRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for
 * GetEntry.
 *
 * @property {string} name
 *   Required. The name of the entry. For example,
 *   "projects/{project_id}/locations/{location}/entryGroups/{entry_group_id}/entries/{entry_id}".
 *
 * @typedef GetEntryRequest
 * @memberof google.cloud.datacatalog.v1beta1
 * @see [google.cloud.datacatalog.v1beta1.GetEntryRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datacatalog/v1beta1/datacatalog.proto}
 */
const GetEntryRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for
 * LookupEntry.
 *
 * @property {string} linkedResource
 *   The full name of the Google Cloud Platform resource the Data Catalog
 *   entry represents. See:
 *   https://cloud.google.com/apis/design/resource_names#full_resource_name
 *   Full names are case-sensitive.
 *
 *   Examples:
 *   "//bigquery.googleapis.com/projects/projectId/datasets/datasetId/tables/tableId".
 *   "//pubsub.googleapis.com/projects/projectId/topics/topicId"
 *
 * @property {string} sqlResource
 *   The SQL name of the entry. SQL names are case-sensitive.
 *
 *   Examples:
 *   <ul>
 *     <li>cloud_pubsub.project_id.topic_id</li>
 *     <li>pubsub.project_id.`topic.id.with.dots`</li>
 *     <li>bigquery.project_id.dataset_id.table_id</li>
 *     <li>datacatalog.project_id.location_id.entry_group_id.entry_id</li>
 *   </ul>
 *   *_ids shoud satisfy the standard SQL rules for identifiers.
 *   https://cloud.google.com/bigquery/docs/reference/standard-sql/lexical
 *
 * @typedef LookupEntryRequest
 * @memberof google.cloud.datacatalog.v1beta1
 * @see [google.cloud.datacatalog.v1beta1.LookupEntryRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datacatalog/v1beta1/datacatalog.proto}
 */
const LookupEntryRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Entry Metadata.
 * A Data Catalog Entry resource represents another resource in Google
 * Cloud Platform, such as a BigQuery Dataset or a Pub/Sub Topic. Clients can
 * use the `linked_resource` field in the Entry resource to refer to the
 * original resource id of the source system.
 *
 * An Entry resource contains resource details, such as its schema. An Entry can
 * also be used to attach flexible metadata, such as a
 * Tag.
 *
 * @property {string} name
 *   Required when used in
 *   UpdateEntryRequest.
 *   The Data Catalog resource name of the entry in URL format. For example,
 *   "projects/{project_id}/locations/{location}/entryGroups/{entry_group_id}/entries/{entry_id}".
 *   Note that this Entry and its child resources may not actually be stored in
 *   the location in this name.
 *
 * @property {string} linkedResource
 *   Output only. The full name of the cloud resource the entry belongs to. See:
 *   https://cloud.google.com/apis/design/resource_names#full_resource_name
 *
 *   Data Catalog supports resources from select Google Cloud Platform systems.
 *   `linked_resource` is the full name of the Google Cloud Platform resource.
 *   For example, the `linked_resource` for a table resource from BigQuery is:
 *
 *   "//bigquery.googleapis.com/projects/projectId/datasets/datasetId/tables/tableId".
 *
 * @property {number} type
 *   Required. Type of entry.
 *
 *   The number should be among the values of [EntryType]{@link google.cloud.datacatalog.v1beta1.EntryType}
 *
 * @property {Object} bigqueryTableSpec
 *   Specification that applies to a BigQuery table. This is only valid on
 *   entries of type TABLE.
 *
 *   This object should have the same structure as [BigQueryTableSpec]{@link google.cloud.datacatalog.v1beta1.BigQueryTableSpec}
 *
 * @property {Object} bigqueryDateShardedSpec
 *   Specification for a group of BigQuery tables with name pattern
 *   [prefix]YYYYMMDD. Context:
 *   https://cloud.google.com/bigquery/docs/partitioned-tables#partitioning_versus_sharding
 *
 *   This object should have the same structure as [BigQueryDateShardedSpec]{@link google.cloud.datacatalog.v1beta1.BigQueryDateShardedSpec}
 *
 * @property {string} displayName
 *   Optional. Display information such as title and description. A short name
 *   to identify the entry, for example, "Analytics Data - Jan 2011". Default
 *   value is an empty string.
 *
 * @property {string} description
 *   Optional. Entry description, which can consist of several sentences or
 *   paragraphs that describe entry contents. Default value is an empty string.
 *
 * @property {Object} schema
 *   Optional. Schema of the entry. An entry might not have any schema attached
 *   to it.
 *
 *   This object should have the same structure as [Schema]{@link google.cloud.datacatalog.v1beta1.Schema}
 *
 * @property {Object} sourceSystemTimestamps
 *   Output only. Timestamps about the underlying Google Cloud Platform resource
 *   -- not about this Data Catalog Entry.
 *
 *   This object should have the same structure as [SystemTimestamps]{@link google.cloud.datacatalog.v1beta1.SystemTimestamps}
 *
 * @typedef Entry
 * @memberof google.cloud.datacatalog.v1beta1
 * @see [google.cloud.datacatalog.v1beta1.Entry definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datacatalog/v1beta1/datacatalog.proto}
 */
const Entry = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for
 * CreateTagTemplate.
 *
 * @property {string} parent
 *   Required. The name of the project and the location this template is in.
 *   Example: "projects/{project_id}/locations/{location}". Note that this
 *   TagTemplate and its child resources may not actually be stored in the
 *   location in this name.
 *
 * @property {string} tagTemplateId
 *   Required. The id of the tag template to create.
 *
 * @property {Object} tagTemplate
 *   Required. The tag template to create.
 *
 *   This object should have the same structure as [TagTemplate]{@link google.cloud.datacatalog.v1beta1.TagTemplate}
 *
 * @typedef CreateTagTemplateRequest
 * @memberof google.cloud.datacatalog.v1beta1
 * @see [google.cloud.datacatalog.v1beta1.CreateTagTemplateRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datacatalog/v1beta1/datacatalog.proto}
 */
const CreateTagTemplateRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for
 * GetTagTemplate.
 *
 * @property {string} name
 *   Required. The name of the tag template. For example,
 *   "projects/{project_id}/locations/{location}/tagTemplates/{tag_template_id}".
 *
 * @typedef GetTagTemplateRequest
 * @memberof google.cloud.datacatalog.v1beta1
 * @see [google.cloud.datacatalog.v1beta1.GetTagTemplateRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datacatalog/v1beta1/datacatalog.proto}
 */
const GetTagTemplateRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for
 * UpdateTagTemplate.
 *
 * @property {Object} tagTemplate
 *   Required. The template to update.
 *
 *   This object should have the same structure as [TagTemplate]{@link google.cloud.datacatalog.v1beta1.TagTemplate}
 *
 * @property {Object} updateMask
 *   Optional. The field mask specifies the parts of the template to overwrite.
 *
 *   Allowed fields:
 *
 *     * display_name
 *
 *   If update_mask is omitted, all of the allowed fields above will be updated.
 *
 *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
 *
 * @typedef UpdateTagTemplateRequest
 * @memberof google.cloud.datacatalog.v1beta1
 * @see [google.cloud.datacatalog.v1beta1.UpdateTagTemplateRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datacatalog/v1beta1/datacatalog.proto}
 */
const UpdateTagTemplateRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for
 * DeleteTagTemplate.
 *
 * @property {string} name
 *   Required. The name of the tag template to delete. For example,
 *   "projects/{project_id}/locations/{location}/tagTemplates/{tag_template_id}".
 *
 * @property {boolean} force
 *   Required. Currently, this field must always be set to <code>true</code>.
 *   This confirms the deletion of any possible tags using this template.
 *   <code>force = false</code> will be supported in the future.
 *
 * @typedef DeleteTagTemplateRequest
 * @memberof google.cloud.datacatalog.v1beta1
 * @see [google.cloud.datacatalog.v1beta1.DeleteTagTemplateRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datacatalog/v1beta1/datacatalog.proto}
 */
const DeleteTagTemplateRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for
 * CreateTag.
 *
 * @property {string} parent
 *   Required.
 *   The name of the resource to attach this tag to. Tags can be attached to
 *   Entries. (example:
 *   "projects/{project_id}/locations/{location}/entryGroups/{entry_group_id}/entries/{entry_id}").
 *   Note that this Tag and its child resources may not actually be stored in
 *   the location in this name.
 *
 * @property {Object} tag
 *   Required. The tag to create.
 *
 *   This object should have the same structure as [Tag]{@link google.cloud.datacatalog.v1beta1.Tag}
 *
 * @typedef CreateTagRequest
 * @memberof google.cloud.datacatalog.v1beta1
 * @see [google.cloud.datacatalog.v1beta1.CreateTagRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datacatalog/v1beta1/datacatalog.proto}
 */
const CreateTagRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for
 * UpdateTag.
 *
 * @property {Object} tag
 *   Required. The updated tag.
 *
 *   This object should have the same structure as [Tag]{@link google.cloud.datacatalog.v1beta1.Tag}
 *
 * @property {Object} updateMask
 *   Optional. The fields to update on the Tag.  If absent or empty, all
 *   modifiable fields are updated. Currently the only modifiable field is the
 *   field `fields`.
 *
 *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
 *
 * @typedef UpdateTagRequest
 * @memberof google.cloud.datacatalog.v1beta1
 * @see [google.cloud.datacatalog.v1beta1.UpdateTagRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datacatalog/v1beta1/datacatalog.proto}
 */
const UpdateTagRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for
 * DeleteTag.
 *
 * @property {string} name
 *   Required. The name of the tag to delete. For example,
 *   "projects/{project_id}/locations/{location}/entryGroups/{entry_group_id}/entries/{entry_id}/tags/{tag_id}".
 *
 * @typedef DeleteTagRequest
 * @memberof google.cloud.datacatalog.v1beta1
 * @see [google.cloud.datacatalog.v1beta1.DeleteTagRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datacatalog/v1beta1/datacatalog.proto}
 */
const DeleteTagRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for
 * CreateTagTemplateField.
 *
 * @property {string} parent
 *   Required. The name of the project this template is in. Example:
 *   "projects/{project_id}/locations/{location}/tagTemplates/{tag_template_id}".
 *   Note that this TagTemplateField may not actually be stored in the location
 *   in this name.
 *
 * @property {string} tagTemplateFieldId
 *   Required. The id of the tag template field to create.
 *   Field ids can contain letters (both uppercase and lowercase), numbers
 *   (0-9), underscores (_) and dashes (-). Field ids must be at least 1
 *   character long and at most 128 characters long. Field ids must also be
 *   unique to their template.
 *
 * @property {Object} tagTemplateField
 *   Required. The tag template field to create.
 *
 *   This object should have the same structure as [TagTemplateField]{@link google.cloud.datacatalog.v1beta1.TagTemplateField}
 *
 * @typedef CreateTagTemplateFieldRequest
 * @memberof google.cloud.datacatalog.v1beta1
 * @see [google.cloud.datacatalog.v1beta1.CreateTagTemplateFieldRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datacatalog/v1beta1/datacatalog.proto}
 */
const CreateTagTemplateFieldRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for
 * UpdateTagTemplateField.
 *
 * @property {string} name
 *   Required. The name of the tag template field. For example,
 *   "projects/{project_id}/locations/{location}/tagTemplates/{tag_template_id}/fields/{tag_template_field_id}".
 *
 * @property {Object} tagTemplateField
 *   Required. The template to update.
 *
 *   This object should have the same structure as [TagTemplateField]{@link google.cloud.datacatalog.v1beta1.TagTemplateField}
 *
 * @property {Object} updateMask
 *   Optional. The field mask specifies the parts of the template to overwrite.
 *   Allowed fields:
 *
 *     * display_name
 *     * type.enum_type
 *
 *   If update_mask is omitted, all of the allowed fields above will be updated.
 *
 *   When updating an enum type, the provided values will be merged with the
 *   existing values. Therefore, enum values can only be added, existing enum
 *   values cannot be deleted nor renamed.
 *
 *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
 *
 * @typedef UpdateTagTemplateFieldRequest
 * @memberof google.cloud.datacatalog.v1beta1
 * @see [google.cloud.datacatalog.v1beta1.UpdateTagTemplateFieldRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datacatalog/v1beta1/datacatalog.proto}
 */
const UpdateTagTemplateFieldRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for
 * RenameTagTemplateField.
 *
 * @property {string} name
 *   Required. The name of the tag template. For example,
 *   "projects/{project_id}/locations/{location}/tagTemplates/{tag_template_id}/fields/{tag_template_field_id}".
 *
 * @property {string} newTagTemplateFieldId
 *   Required. The new ID of this tag template field. For example,
 *   "my_new_field".
 *
 * @typedef RenameTagTemplateFieldRequest
 * @memberof google.cloud.datacatalog.v1beta1
 * @see [google.cloud.datacatalog.v1beta1.RenameTagTemplateFieldRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datacatalog/v1beta1/datacatalog.proto}
 */
const RenameTagTemplateFieldRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for
 * DeleteTagTemplateField.
 *
 * @property {string} name
 *   Required. The name of the tag template field to delete. For example,
 *   "projects/{project_id}/locations/{location}/tagTemplates/{tag_template_id}/fields/{tag_template_field_id}".
 *
 * @property {boolean} force
 *   Required. Currently, this field must always be set to <code>true</code>.
 *   This confirms the deletion of this field from any tags using this field.
 *   <code>force = false</code> will be supported in the future.
 *
 * @typedef DeleteTagTemplateFieldRequest
 * @memberof google.cloud.datacatalog.v1beta1
 * @see [google.cloud.datacatalog.v1beta1.DeleteTagTemplateFieldRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datacatalog/v1beta1/datacatalog.proto}
 */
const DeleteTagTemplateFieldRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for
 * ListTags.
 *
 * @property {string} parent
 *   Required. The name of the Data Catalog resource to list the tags of. The
 *   resource could be an Entry.
 *
 * @property {number} pageSize
 *   Optional. The maximum number of tags to return. Default is 10. Max limit is
 *   1000.
 *
 * @property {string} pageToken
 *   Optional. Token that specifies which page is requested. If empty, the first
 *   page is returned.
 *
 * @typedef ListTagsRequest
 * @memberof google.cloud.datacatalog.v1beta1
 * @see [google.cloud.datacatalog.v1beta1.ListTagsRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datacatalog/v1beta1/datacatalog.proto}
 */
const ListTagsRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Response message for
 * ListTags.
 *
 * @property {Object[]} tags
 *   Tag details.
 *
 *   This object should have the same structure as [Tag]{@link google.cloud.datacatalog.v1beta1.Tag}
 *
 * @property {string} nextPageToken
 *   Token to retrieve the next page of results. It is set to empty if no items
 *   remain in results.
 *
 * @typedef ListTagsResponse
 * @memberof google.cloud.datacatalog.v1beta1
 * @see [google.cloud.datacatalog.v1beta1.ListTagsResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datacatalog/v1beta1/datacatalog.proto}
 */
const ListTagsResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Entry resources in Data Catalog can be of different types e.g. BigQuery
 * Table entry is of type 'TABLE'. This enum describes all the possible types
 * Data Catalog contains.
 *
 * @enum {number}
 * @memberof google.cloud.datacatalog.v1beta1
 */
const EntryType = {

  /**
   * Default unknown type
   */
  ENTRY_TYPE_UNSPECIFIED: 0,

  /**
   * The type of entry that has a GoogleSQL schema, including logical views.
   */
  TABLE: 2,

  /**
   * An entry type which is used for streaming entries. Example - Pub/Sub.
   */
  DATA_STREAM: 3
};