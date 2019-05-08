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
 * List profiles request.
 *
 * @property {string} parent
 *   Required.
 *
 *   The resource name of the tenant under which the job is created.
 *
 *   The format is "projects/{project_id}/tenants/{tenant_id}", for example,
 *   "projects/api-test-project/tenants/foo".
 *
 * @property {string} pageToken
 *   Optional.
 *
 *   The token that specifies the current offset (that is, starting result).
 *
 *   Please set the value to ListProfilesResponse.next_page_token to
 *   continue the list.
 *
 * @property {number} pageSize
 *   Optional.
 *
 *   The maximum number of profiles to be returned, at most 100.
 *
 *   Default is 100 unless a positive number smaller than 100 is specified.
 *
 * @property {Object} readMask
 *   Optional.
 *
 *   A field mask to specify the profile fields to be listed in response.
 *   All fields are listed if it is unset.
 *
 *   Valid values are:
 *
 *   * name
 *
 *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
 *
 * @typedef ListProfilesRequest
 * @memberof google.cloud.talent.v4beta1
 * @see [google.cloud.talent.v4beta1.ListProfilesRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/talent/v4beta1/profile_service.proto}
 */
const ListProfilesRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The List profiles response object.
 *
 * @property {Object[]} profiles
 *   Profiles for the specific tenant.
 *
 *   This object should have the same structure as [Profile]{@link google.cloud.talent.v4beta1.Profile}
 *
 * @property {string} nextPageToken
 *   A token to retrieve the next page of results. This is empty if there are no
 *   more results.
 *
 * @typedef ListProfilesResponse
 * @memberof google.cloud.talent.v4beta1
 * @see [google.cloud.talent.v4beta1.ListProfilesResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/talent/v4beta1/profile_service.proto}
 */
const ListProfilesResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Create profile request.
 *
 * @property {string} parent
 *   Required.
 *
 *   The name of the tenant this profile belongs to.
 *
 *   The format is "projects/{project_id}/tenants/{tenant_id}", for example,
 *   "projects/api-test-project/tenants/foo".
 *
 * @property {Object} profile
 *   Required.
 *
 *   The profile to be created.
 *
 *   This object should have the same structure as [Profile]{@link google.cloud.talent.v4beta1.Profile}
 *
 * @typedef CreateProfileRequest
 * @memberof google.cloud.talent.v4beta1
 * @see [google.cloud.talent.v4beta1.CreateProfileRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/talent/v4beta1/profile_service.proto}
 */
const CreateProfileRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Get profile request.
 *
 * @property {string} name
 *   Required.
 *
 *   Resource name of the profile to get.
 *
 *   The format is
 *   "projects/{project_id}/tenants/{tenant_id}/profiles/{profile_id}",
 *   for example, "projects/api-test-project/tenants/foo/profiles/bar".
 *
 * @typedef GetProfileRequest
 * @memberof google.cloud.talent.v4beta1
 * @see [google.cloud.talent.v4beta1.GetProfileRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/talent/v4beta1/profile_service.proto}
 */
const GetProfileRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Update profile request
 *
 * @property {Object} profile
 *   Required.
 *
 *   Profile to be updated.
 *
 *   This object should have the same structure as [Profile]{@link google.cloud.talent.v4beta1.Profile}
 *
 * @property {Object} updateMask
 *   Optional.
 *
 *   A field mask to specify the profile fields to update.
 *
 *   A full update is performed if it is unset.
 *
 *   Valid values are:
 *
 *   * externalId
 *   * source
 *   * uri
 *   * isHirable
 *   * createTime
 *   * updateTime
 *   * resumeHrxml
 *   * personNames
 *   * addresses
 *   * emailAddresses
 *   * phoneNumbers
 *   * personalUris
 *   * additionalContactInfo
 *   * employmentRecords
 *   * educationRecords
 *   * skills
 *   * projects
 *   * publications
 *   * patents
 *   * certifications
 *   * recruitingNotes
 *   * customAttributes
 *   * groupId
 *
 *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
 *
 * @typedef UpdateProfileRequest
 * @memberof google.cloud.talent.v4beta1
 * @see [google.cloud.talent.v4beta1.UpdateProfileRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/talent/v4beta1/profile_service.proto}
 */
const UpdateProfileRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Delete profile request.
 *
 * @property {string} name
 *   Required.
 *
 *   Resource name of the profile to be deleted.
 *
 *   The format is
 *   "projects/{project_id}/tenants/{tenant_id}/profiles/{profile_id}",
 *   for example, "projects/api-test-project/tenants/foo/profiles/bar".
 *
 * @typedef DeleteProfileRequest
 * @memberof google.cloud.talent.v4beta1
 * @see [google.cloud.talent.v4beta1.DeleteProfileRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/talent/v4beta1/profile_service.proto}
 */
const DeleteProfileRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The request body of the `SearchProfiles` call.
 *
 * @property {string} parent
 *   Required.
 *
 *   The resource name of the tenant to search within.
 *
 *   The format is "projects/{project_id}/tenants/{tenant_id}", for example,
 *   "projects/api-test-project/tenants/foo".
 *
 * @property {Object} requestMetadata
 *   Required.
 *
 *   The meta information collected about the profile search user. This is used
 *   to improve the search quality of the service. These values are provided by
 *   users, and must be precise and consistent.
 *
 *   This object should have the same structure as [RequestMetadata]{@link google.cloud.talent.v4beta1.RequestMetadata}
 *
 * @property {Object} profileQuery
 *   Optional.
 *
 *   Search query to execute. See ProfileQuery for more details.
 *
 *   This object should have the same structure as [ProfileQuery]{@link google.cloud.talent.v4beta1.ProfileQuery}
 *
 * @property {number} pageSize
 *   Optional.
 *
 *   A limit on the number of profiles returned in the search results.
 *   A value above the default value 10 can increase search response time.
 *
 *   The maximum value allowed is 100. Otherwise an error is thrown.
 *
 * @property {string} pageToken
 *   Optional.
 *
 *   The pageToken, similar to offset enables users of the API to paginate
 *   through the search results. To retrieve the first page of results, set the
 *   pageToken to empty. The search response includes a
 *   nextPageToken field that can be
 *   used to populate the pageToken field for the next page of results. Using
 *   pageToken instead of offset increases the performance of the API,
 *   especially compared to larger offset values.
 *
 * @property {number} offset
 *   Optional.
 *
 *   An integer that specifies the current offset (that is, starting result) in
 *   search results. This field is only considered if page_token is unset.
 *
 *   The maximum allowed value is 5000. Otherwise an error is thrown.
 *
 *   For example, 0 means to search from the first profile, and 10 means to
 *   search from the 11th profile. This can be used for pagination, for example
 *   pageSize = 10 and offset = 10 means to search from the second page.
 *
 * @property {boolean} disableSpellCheck
 *   Optional.
 *
 *   This flag controls the spell-check feature. If `false`, the
 *   service attempts to correct a misspelled query.
 *
 *   For example, "enginee" is corrected to "engineer".
 *
 * @property {string} orderBy
 *   Optional.
 *
 *   The criteria that determines how search results are sorted.
 *   Defaults is "relevance desc" if no value is specified.
 *
 *   Supported options are:
 *
 *   * "relevance desc": By descending relevance, as determined by the API
 *      algorithms.
 *   * "update_date desc": Sort by Profile.update_date in descending order
 *     (recently updated profiles first).
 *   * "create_date desc": Sort by Profile.create_date in descending order
 *     (recently created profiles first).
 *   * "first_name": Sort by PersonStrcuturedName.given_name in ascending
 *     order.
 *   * "first_name desc": Sort by PersonStrcuturedName.given_name in
 *     descending order.
 *   * "last_name": Sort by PersonStrcuturedName.family_name in ascending
 *     order.
 *   * "last_name desc": Sort by PersonStrcuturedName.family_name in
 *     ascending order.
 *
 * @property {boolean} caseSensitiveSort
 *   Optional.
 *
 *   When sort by field is based on alphabetical order, sort values case
 *   sensitively (based on ASCII) when the value is set to true. Default value
 *   is case in-sensitive sort (false).
 *
 * @property {Object[]} histogramQueries
 *   Optional.
 *
 *   A list of expressions specifies histogram requests against matching
 *   profiles for SearchProfilesRequest.
 *
 *   The expression syntax looks like a function definition with optional
 *   parameters.
 *
 *   Function syntax: function_name(histogram_facet[, list of buckets])
 *
 *   Data types:
 *
 *   * Histogram facet: facet names with format [a-zA-Z][a-zA-Z0-9_]+.
 *   * String: string like "any string with backslash escape for quote(\")."
 *   * Number: whole number and floating point number like 10, -1 and -0.01.
 *   * List: list of elements with comma(,) separator surrounded by square
 *   brackets. For example, [1, 2, 3] and ["one", "two", "three"].
 *
 *   Built-in constants:
 *
 *   * MIN (minimum number similar to java Double.MIN_VALUE)
 *   * MAX (maximum number similar to java Double.MAX_VALUE)
 *
 *   Built-in functions:
 *
 *   * bucket(start, end[, label])
 *   Bucket build-in function creates a bucket with range of start, end). Note
 *   that the end is exclusive.
 *   For example, bucket(1, MAX, "positive number") or bucket(1, 10).
 *
 *   Histogram Facets:
 *
 *   * admin1: Admin1 is a global placeholder for referring to state, province,
 *   or the particular term a country uses to define the geographic structure
 *   below the country level. Examples include states codes such as "CA", "IL",
 *   "NY", and provinces, such as "BC".
 *   * locality: Locality is a global placeholder for referring to city, town,
 *   or the particular term a country uses to define the geographic structure
 *   below the admin1 level. Examples include city names such as
 *   "Mountain View" and "New York".
 *   * extended_locality: Extended locality is concatenated version of admin1
 *   and locality with comma separator. For example, "Mountain View, CA" and
 *   "New York, NY".
 *   * postal_code: Postal code of profile which follows locale code.
 *   * country: Country code (ISO-3166-1 alpha-2 code) of profile, such as US,
 *    JP, GB.
 *   * job_title: Normalized job titles specified in EmploymentHistory.
 *   * company_name: Normalized company name of profiles to match on.
 *   * institution: The school name. For example, "MIT",
 *   "University of California, Berkeley"
 *   * degree: Highest education degree in ISCED code. Each value in degree
 *   covers a specific level of education, without any expansion to upper nor
 *   lower levels of education degree.
 *   * experience_in_months: experience in months. 0 means 0 month to 1 month
 *   (exclusive).
 *   * application_date: The application date specifies application start dates.
 *   See [ApplicationDateFilter for more details.
 *   * application_outcome_notes: The application outcome reason specifies the
 *   reasons behind the outcome of the job application.
 *   See ApplicationOutcomeNotesFilter for more details.
 *   * application_job_title: The application job title specifies the job
 *   applied for in the application.
 *   See ApplicationJobFilter for more details.
 *   * hirable_status: Hirable status specifies the profile's hirable status.
 *   * string_custom_attribute: String custom attributes. Values can be accessed
 *   via square bracket notation like string_custom_attribute["key1"].
 *   * numeric_custom_attribute: Numeric custom attributes. Values can be
 *   accessed via square bracket notation like numeric_custom_attribute["key1"].
 *
 *   Example expressions:
 *
 *   * count(admin1)
 *   * count(experience_in_months, [bucket(0, 12, "1 year"),
 *   bucket(12, 36, "1-3 years"), bucket(36, MAX, "3+ years")])
 *   * count(string_custom_attribute["assigned_recruiter"])
 *   * count(numeric_custom_attribute["favorite_number"],
 *   [bucket(MIN, 0, "negative"), bucket(0, MAX, "non-negative")])
 *
 *   This object should have the same structure as [HistogramQuery]{@link google.cloud.talent.v4beta1.HistogramQuery}
 *
 * @typedef SearchProfilesRequest
 * @memberof google.cloud.talent.v4beta1
 * @see [google.cloud.talent.v4beta1.SearchProfilesRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/talent/v4beta1/profile_service.proto}
 */
const SearchProfilesRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Response of SearchProfiles method.
 *
 * @property {number} estimatedTotalSize
 *   An estimation of the number of profiles that match the specified query.
 *
 *   This number isn't guaranteed to be accurate.
 *
 * @property {Object} spellCorrection
 *   The spell checking result, and correction.
 *
 *   This object should have the same structure as [SpellingCorrection]{@link google.cloud.talent.v4beta1.SpellingCorrection}
 *
 * @property {Object} metadata
 *   Additional information for the API invocation, such as the request
 *   tracking id.
 *
 *   This object should have the same structure as [ResponseMetadata]{@link google.cloud.talent.v4beta1.ResponseMetadata}
 *
 * @property {string} nextPageToken
 *   A token to retrieve the next page of results. This is empty if there are no
 *   more results.
 *
 * @property {Object[]} histogramQueryResults
 *   The histogram results that match with specified
 *   SearchProfilesRequest.histogram_queries.
 *
 *   This object should have the same structure as [HistogramQueryResult]{@link google.cloud.talent.v4beta1.HistogramQueryResult}
 *
 * @property {Object[]} summarizedProfiles
 *   The profile entities that match the specified SearchProfilesRequest.
 *
 *   This object should have the same structure as [SummarizedProfile]{@link google.cloud.talent.v4beta1.SummarizedProfile}
 *
 * @typedef SearchProfilesResponse
 * @memberof google.cloud.talent.v4beta1
 * @see [google.cloud.talent.v4beta1.SearchProfilesResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/talent/v4beta1/profile_service.proto}
 */
const SearchProfilesResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Output only.
 *
 * Profile entry with metadata inside SearchProfilesResponse.
 *
 * @property {Object[]} profiles
 *   A list of profiles that are linked by Profile.cluster_id.
 *
 *   This object should have the same structure as [Profile]{@link google.cloud.talent.v4beta1.Profile}
 *
 * @property {Object} summary
 *   A profile summary shows the profile summary and how the profile matches the
 *   search query.
 *
 *   In profile summary, the profiles with the same Profile.cluster_id are
 *   merged together. Among profiles, same education/employment records may be
 *   slightly different but they are merged into one with best efforts.
 *
 *   For example, in one profile the school name is "UC Berkeley" and the field
 *   study is "Computer Science" and in another one the school name is
 *   "University of California at Berkeley" and the field study is "CS". The API
 *   merges these two inputs into one and selects one value for each field. For
 *   example, the school name in summary is set to "University of California at
 *   Berkeley" and the field of study is set to "Computer Science".
 *
 *   This object should have the same structure as [Profile]{@link google.cloud.talent.v4beta1.Profile}
 *
 * @typedef SummarizedProfile
 * @memberof google.cloud.talent.v4beta1
 * @see [google.cloud.talent.v4beta1.SummarizedProfile definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/talent/v4beta1/profile_service.proto}
 */
const SummarizedProfile = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};