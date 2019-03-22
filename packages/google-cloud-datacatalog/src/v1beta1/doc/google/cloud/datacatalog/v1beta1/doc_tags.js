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
 * Tags are used to attach custom metadata to Datahub resources. Tags conform to
 * the specifications within their Tag Template.
 *
 * @property {string} name
 *   The resource name of the tag in URL format. For example,
 *   projects/{project_id}/locations/{location}/entrygroups/{entry_group_id}/entries/{entry_id}/tags/{tag_id}",
 *   where tag_id is a system-generated identifier.
 *
 * @property {string} template
 *   The resource name of the tag template that this tag uses. For example,
 *   projects/{project_id}/tagTemplates/{tag_template_id}. This field cannot be
 *   modified after creation.
 *
 * @property {string} templateDisplayName
 *   Output only.
 *   The display name of the tag template. This field is only populated in the
 *   response of
 *   ListTags method.
 *
 * @property {string} column
 *   Resources like Entry can have schemas associated with them. This scope
 *   allows users to attach tags to an individual column based on that schema.
 *
 *   For attaching a tag to a nested column, use '.' to separate the column
 *   names: "outer_column.inner_column".
 *
 *   For columns with '.' in their names,
 *   wrap the name in '`': "`my.column`", "`outer.column`.inner_column".
 *
 * @property {Object.<string, Object>} fields
 *   This maps the id of a tag field to the value of & additional information
 *   about that field. Valid field IDs are defined by the tag's template.
 *
 * @typedef Tag
 * @memberof google.cloud.datacatalog.v1beta1
 * @see [google.cloud.datacatalog.v1beta1.Tag definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datacatalog/v1beta1/tags.proto}
 */
const Tag = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Contains the value and supporting information for a field within
 * a Tag.
 *
 * @property {string} displayName
 *   Output only. The display name of this field.
 *
 * @property {number} doubleValue
 *   Holds the value for a tag field with double type.
 *
 * @property {string} stringValue
 *   Holds the value for a tag field with string type.
 *
 * @property {boolean} boolValue
 *   Holds the value for a tag field with boolean type.
 *
 * @property {Object} timestampValue
 *   Holds the value for a tag field with timestamp type.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {string} enumValue
 *   Holds the value for a tag field with enum type. This value must be
 *   one of the allowed values in the definition of this enum.
 *
 * @typedef TagField
 * @memberof google.cloud.datacatalog.v1beta1
 * @see [google.cloud.datacatalog.v1beta1.TagField definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datacatalog/v1beta1/tags.proto}
 */
const TagField = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Tag Templates provide the basic format of multiple fields which can be
 * attached to Cloud Data Catalog resources as Tags.
 *
 * Tag Templates can be used as a data glossary as tag templates define the
 * list of acceptable fields that can be applied within a Tag. When a Tag is
 * applied to a resource, the Tag Template defines the mapping of accepted field
 * names & types that can be used within the Tag.
 *
 * A Tag Template also allows you to make Tags using that template visible only
 * to a certain group of users.
 *
 * @property {string} name
 *   Output only. The resource name of the tag template in URL format. For
 *   example, projects/{project_id}/tagTemplates/{tag_template_id}.
 *
 * @property {string} displayName
 *   The display name for this template.
 *
 * @property {Object.<string, Object>} fields
 *   Map of tag template field ids to the settings for the field.
 *   This map is an exhaustive list of allowed fields. This map must contain at
 *   least one field and at most 100 fields.
 *
 *   The keys to this map are tag template field ids. Field ids can contain
 *   letters (both uppercase and lowercase), numbers (0-9), underscores (_) and
 *   dashes (-). Field ids must be at least 1 character long and at most 100
 *   characters long. Field ids must start with a letter or number.
 *
 * @typedef TagTemplate
 * @memberof google.cloud.datacatalog.v1beta1
 * @see [google.cloud.datacatalog.v1beta1.TagTemplate definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datacatalog/v1beta1/tags.proto}
 */
const TagTemplate = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The template for an individual field within a TagTemplate.
 *
 * @property {string} displayName
 *   The display name for this field.
 *
 * @property {Object} type
 *   The type of value this tag field can contain.
 *
 *   This object should have the same structure as [FieldType]{@link google.cloud.datacatalog.v1beta1.FieldType}
 *
 * @typedef TagTemplateField
 * @memberof google.cloud.datacatalog.v1beta1
 * @see [google.cloud.datacatalog.v1beta1.TagTemplateField definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datacatalog/v1beta1/tags.proto}
 */
const TagTemplateField = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * @property {number} primitiveType
 *   Represents primitive types - string, bool etc.
 *
 *   The number should be among the values of [PrimitiveType]{@link google.cloud.datacatalog.v1beta1.PrimitiveType}
 *
 * @property {Object} enumType
 *   Represents an enum type.
 *
 *   This object should have the same structure as [EnumType]{@link google.cloud.datacatalog.v1beta1.EnumType}
 *
 * @typedef FieldType
 * @memberof google.cloud.datacatalog.v1beta1
 * @see [google.cloud.datacatalog.v1beta1.FieldType definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datacatalog/v1beta1/tags.proto}
 */
const FieldType = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * @property {string[]} allowedValues
   *   The set of allowed values for this enum. Any value in a TagField that
   *   uses this enum type must be one of these values.
   *
   *   Enum values can contain letters (both uppercase and lowercase), numbers
   *   (0-9), underscores (_), dashes (-) and spaces ( ). Enum values must be at
   *   least 1 character long and at most 100 characters long. Enum values must
   *   start with a letter or number.
   *
   *   The enum values listed here must not contain duplicates. When comparing
   *   enum values for duplicates, spaces and underscores are considered
   *   equivalent and uppercase and lowercase letters are considered equivalent.
   *
   * @typedef EnumType
   * @memberof google.cloud.datacatalog.v1beta1
   * @see [google.cloud.datacatalog.v1beta1.FieldType.EnumType definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datacatalog/v1beta1/tags.proto}
   */
  EnumType: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  },

  /**
   * @enum {number}
   * @memberof google.cloud.datacatalog.v1beta1
   */
  PrimitiveType: {

    /**
     * This is the default invalid value for a type.
     */
    PRIMITIVE_TYPE_UNSPECIFIED: 0,

    /**
     * A double precision number.
     */
    DOUBLE: 1,

    /**
     * An UTF-8 string.
     */
    STRING: 2,

    /**
     * A boolean value.
     */
    BOOL: 3,

    /**
     * A timestamp.
     */
    TIMESTAMP: 4
  }
};