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
 * Input only.
 *
 * The query required to perform a search query.
 *
 * @property {string} query
 *   Optional.
 *
 *   The query string that matches against the job title, description, and
 *   location fields.
 *
 *   The maximum number of allowed characters is 255.
 *
 * @property {string[]} companies
 *   Optional.
 *
 *   This filter specifies the company entities to search against.
 *
 *   If a value isn't specified, jobs are searched for against all
 *   companies.
 *
 *   If multiple values are specified, jobs are searched against the
 *   companies specified.
 *
 *   The format is
 *   "projects/{project_id}/tenants/{tenant_id}/companies/{company_id}", for
 *   example, "projects/api-test-project/tenants/foo/companies/bar".
 *
 *   Tenant id is optional and the default tenant is used if unspecified, for
 *   example, "projects/api-test-project/companies/bar".
 *
 *   At most 20 company filters are allowed.
 *
 * @property {Object[]} locationFilters
 *   Optional.
 *
 *   The location filter specifies geo-regions containing the jobs to
 *   search against. See LocationFilter for more information.
 *
 *   If a location value isn't specified, jobs fitting the other search
 *   criteria are retrieved regardless of where they're located.
 *
 *   If multiple values are specified, jobs are retrieved from any of the
 *   specified locations. If different values are specified for the
 *   LocationFilter.distance_in_miles parameter, the maximum provided
 *   distance is used for all locations.
 *
 *   At most 5 location filters are allowed.
 *
 *   This object should have the same structure as [LocationFilter]{@link google.cloud.talent.v4beta1.LocationFilter}
 *
 * @property {number[]} jobCategories
 *   Optional.
 *
 *   The category filter specifies the categories of jobs to search against.
 *   See Category for more information.
 *
 *   If a value isn't specified, jobs from any category are searched against.
 *
 *   If multiple values are specified, jobs from any of the specified
 *   categories are searched against.
 *
 *   The number should be among the values of [JobCategory]{@link google.cloud.talent.v4beta1.JobCategory}
 *
 * @property {Object} commuteFilter
 *   Optional.
 *
 *    Allows filtering jobs by commute time with different travel methods (for
 *    example, driving or public transit). Note: This only works with [COMMUTE
 *    MODE][Mode#COMMUTE]. When specified, [JobQuery.location_filters] is
 *    ignored.
 *
 *    Currently we don't support sorting by commute time.
 *
 *   This object should have the same structure as [CommuteFilter]{@link google.cloud.talent.v4beta1.CommuteFilter}
 *
 * @property {string[]} companyDisplayNames
 *   Optional.
 *
 *   This filter specifies the exact company display
 *   name of the jobs to search against.
 *
 *   If a value isn't specified, jobs within the search results are
 *   associated with any company.
 *
 *   If multiple values are specified, jobs within the search results may be
 *   associated with any of the specified companies.
 *
 *   At most 20 company display name filters are allowed.
 *
 * @property {Object} compensationFilter
 *   Optional.
 *
 *   This search filter is applied only to
 *   Job.compensation_info. For example, if the filter is specified
 *   as "Hourly job with per-hour compensation > $15", only jobs meeting
 *   these criteria are searched. If a filter isn't defined, all open jobs
 *   are searched.
 *
 *   This object should have the same structure as [CompensationFilter]{@link google.cloud.talent.v4beta1.CompensationFilter}
 *
 * @property {string} customAttributeFilter
 *   Optional.
 *
 *   This filter specifies a structured syntax to match against the
 *   Job.custom_attributes marked as `filterable`.
 *
 *   The syntax for this expression is a subset of SQL syntax.
 *
 *   Supported operators are: `=`, `!=`, `<`, `<=`, `>`, and `>=` where the
 *   left of the operator is a custom field key and the right of the operator
 *   is a number or a quoted string. You must escape backslash (\\) and
 *   quote (\") characters.
 *
 *   Supported functions are `LOWER([field_name])` to
 *   perform a case insensitive match and `EMPTY([field_name])` to filter on the
 *   existence of a key.
 *
 *   Boolean expressions (AND/OR/NOT) are supported up to 3 levels of
 *   nesting (for example, "((A AND B AND C) OR NOT D) AND E"), a maximum of 100
 *   comparisons or functions are allowed in the expression. The expression
 *   must be < 3000 bytes in length.
 *
 *   Sample Query:
 *   `(LOWER(driving_license)="class \"a\"" OR EMPTY(driving_license)) AND
 *   driving_years > 10`
 *
 * @property {boolean} disableSpellCheck
 *   Optional.
 *
 *   This flag controls the spell-check feature. If false, the
 *   service attempts to correct a misspelled query,
 *   for example, "enginee" is corrected to "engineer".
 *
 *   Defaults to false: a spell check is performed.
 *
 * @property {number[]} employmentTypes
 *   Optional.
 *
 *   The employment type filter specifies the employment type of jobs to
 *   search against, such as EmploymentType.FULL_TIME.
 *
 *   If a value isn't specified, jobs in the search results includes any
 *   employment type.
 *
 *   If multiple values are specified, jobs in the search results include
 *   any of the specified employment types.
 *
 *   The number should be among the values of [EmploymentType]{@link google.cloud.talent.v4beta1.EmploymentType}
 *
 * @property {string[]} languageCodes
 *   Optional.
 *
 *   This filter specifies the locale of jobs to search against,
 *   for example, "en-US".
 *
 *   If a value isn't specified, the search results can contain jobs in any
 *   locale.
 *
 *
 *   Language codes should be in BCP-47 format, such as "en-US" or "sr-Latn".
 *   For more information, see
 *   [Tags for Identifying Languages](https://tools.ietf.org/html/bcp47).
 *
 *   At most 10 language code filters are allowed.
 *
 * @property {Object} publishTimeRange
 *   Optional.
 *
 *   Jobs published within a range specified by this filter are searched
 *   against.
 *
 *   This object should have the same structure as [TimestampRange]{@link google.cloud.talent.v4beta1.TimestampRange}
 *
 * @property {string[]} excludedJobs
 *   Optional.
 *
 *   This filter specifies a list of job names to be excluded during search.
 *
 *   At most 400 excluded job names are allowed.
 *
 * @typedef JobQuery
 * @memberof google.cloud.talent.v4beta1
 * @see [google.cloud.talent.v4beta1.JobQuery definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/talent/v4beta1/filters.proto}
 */
const JobQuery = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Filters to apply when performing the search query.
 *
 * @property {string} query
 *   Optional.
 *
 *   Keywords to match any text fields of profiles.
 *
 *   For example, "software engineer in Palo Alto".
 *
 * @property {Object[]} locationFilters
 *   Optional.
 *
 *   The location filter specifies geo-regions containing the profiles to
 *   search against.
 *
 *   If a location filter isn't specified, profiles fitting the other search
 *   criteria are retrieved regardless of where they're located.
 *
 *   If LocationFilter.negated is specified, the result doesn't contain
 *   profiles from that location.
 *
 *   For example, search for profiles with addresses in "New York City".
 *
 *   This object should have the same structure as [LocationFilter]{@link google.cloud.talent.v4beta1.LocationFilter}
 *
 * @property {Object[]} jobTitleFilters
 *   Optional.
 *
 *   Job title filter specifies job titles of profiles to match on.
 *
 *   If a job title isn't specified, profiles with any titles are retrieved.
 *
 *   If multiple values are specified, profiles are retrieved with any of the
 *   specified job titles.
 *
 *   If JobTitleFilter.negated is specified, the result won't contain
 *   profiles with the job titles.
 *
 *   For example, search for profiles with a job title "Product Manager".
 *
 *   This object should have the same structure as [JobTitleFilter]{@link google.cloud.talent.v4beta1.JobTitleFilter}
 *
 * @property {Object[]} employerFilters
 *   Optional.
 *
 *   Employer filter specifies employers of profiles to match on.
 *
 *   If an employer filter isn't specified, profiles with any employers are
 *   retrieved.
 *
 *   If multiple employer filters are specified, profiles with any matching
 *   employers are retrieved.
 *
 *   If EmployerFilter.negated is specified, the result won't contain
 *   profiles that match the employers.
 *
 *   For example, search for profiles that have working experience at "Google
 *   LLC".
 *
 *   This object should have the same structure as [EmployerFilter]{@link google.cloud.talent.v4beta1.EmployerFilter}
 *
 * @property {Object[]} educationFilters
 *   Optional.
 *
 *   Education filter specifies education of profiles to match on.
 *
 *   If an education filter isn't specified, profiles with any education are
 *   retrieved.
 *
 *   If multiple education filters are specified, profiles that match any
 *   education filters are retrieved.
 *
 *   If EducationFilter.negated is specified, the result won't contain
 *   profiles that match the educations.
 *
 *   For example, search for profiles with a master degree.
 *
 *   This object should have the same structure as [EducationFilter]{@link google.cloud.talent.v4beta1.EducationFilter}
 *
 * @property {Object[]} skillFilters
 *   Optional.
 *
 *   Skill filter specifies skill of profiles to match on.
 *
 *   If a skill filter isn't specified, profiles with any skills are retrieved.
 *
 *   If multiple skill filters are specified, profiles that match any skill
 *   filters are retrieved.
 *
 *   If SkillFilter.negated is specified, the result won't contain profiles
 *   that match the skills.
 *
 *   For example, search for profiles that have "Java" and "Python" in skill
 *   list.
 *
 *   This object should have the same structure as [SkillFilter]{@link google.cloud.talent.v4beta1.SkillFilter}
 *
 * @property {Object[]} workExperienceFilter
 *   Optional.
 *
 *   Work experience filter specifies the total working experience of profiles
 *   to match on.
 *
 *   If a work experience filter isn't specified, profiles with any
 *   professional experience are retrieved.
 *
 *   If multiple work experience filters are specified, profiles that match any
 *   work experience filters are retrieved.
 *
 *   For example, search for profiles with 10 years of work experience.
 *
 *   This object should have the same structure as [WorkExperienceFilter]{@link google.cloud.talent.v4beta1.WorkExperienceFilter}
 *
 * @property {Object[]} timeFilters
 *   Optional.
 *
 *   Time filter specifies the create/update timestamp of the profiles to match
 *   on.
 *
 *   For example, search for profiles created since "2018-1-1".
 *
 *   This object should have the same structure as [TimeFilter]{@link google.cloud.talent.v4beta1.TimeFilter}
 *
 * @property {Object} hirableFilter
 *   Optional.
 *
 *   The hirable filter specifies the profile's hirable status to match on.
 *
 *   This object should have the same structure as [BoolValue]{@link google.protobuf.BoolValue}
 *
 * @property {Object[]} applicationDateFilters
 *   Optional.
 *
 *   The application date filters specify application date ranges to match on.
 *
 *   This object should have the same structure as [ApplicationDateFilter]{@link google.cloud.talent.v4beta1.ApplicationDateFilter}
 *
 * @property {Object[]} applicationOutcomeNotesFilters
 *   Optional.
 *
 *   The application outcome notes filters specify the notes for the outcome of
 *   the job application.
 *
 *   This object should have the same structure as [ApplicationOutcomeNotesFilter]{@link google.cloud.talent.v4beta1.ApplicationOutcomeNotesFilter}
 *
 * @property {Object[]} applicationJobFilters
 *   Optional.
 *
 *   The application job filters specify the job applied for in the application.
 *
 *   This object should have the same structure as [ApplicationJobFilter]{@link google.cloud.talent.v4beta1.ApplicationJobFilter}
 *
 * @property {string} customAttributeFilter
 *   Optional.
 *
 *   This filter specifies a structured syntax to match against the
 *   Profile.custom_attributes that are marked as `filterable`.
 *
 *   The syntax for this expression is a subset of Google SQL syntax.
 *
 *   String custom attributes: supported operators are =, != where the left of
 *   the operator is a custom field key and the right of the operator is a
 *   string (surrounded by quotes) value.
 *
 *   Numeric custom attributes: Supported operators are '>', '<' or '='
 *   operators where the left of the operator is a custom field key and the
 *   right of the operator is a numeric value.
 *
 *   Supported functions are LOWER(<field_name>) to
 *   perform case insensitive match and EMPTY(<field_name>) to filter on the
 *   existence of a key.
 *
 *   Boolean expressions (AND/OR/NOT) are supported up to 3 levels of
 *   nesting (for example "((A AND B AND C) OR NOT D) AND E"), and there can be
 *   a maximum of 50 comparisons/functions in the expression. The expression
 *   must be < 2000 characters in length.
 *
 *   Sample Query:
 *   (key1 = "TEST" OR LOWER(key1)="test" OR NOT EMPTY(key1))
 *
 * @typedef ProfileQuery
 * @memberof google.cloud.talent.v4beta1
 * @see [google.cloud.talent.v4beta1.ProfileQuery definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/talent/v4beta1/filters.proto}
 */
const ProfileQuery = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Input only.
 *
 * Geographic region of the search.
 *
 * @property {string} address
 *   Optional.
 *
 *   The address name, such as "Mountain View" or "Bay Area".
 *
 * @property {string} regionCode
 *   Optional.
 *
 *   CLDR region code of the country/region of the address. This is used
 *   to address ambiguity of the user-input location, for example, "Liverpool"
 *   against "Liverpool, NY, US" or "Liverpool, UK".
 *
 *   Set this field if all the jobs to search against are from a same region,
 *   or jobs are world-wide, but the job seeker is from a specific region.
 *
 *   See http://cldr.unicode.org/ and
 *   http://www.unicode.org/cldr/charts/30/supplemental/territory_information.html
 *   for details. Example: "CH" for Switzerland.
 *
 * @property {Object} latLng
 *   Optional.
 *
 *   The latitude and longitude of the geographic center from which to
 *   search. This field's ignored if `address` is provided.
 *
 *   This object should have the same structure as [LatLng]{@link google.type.LatLng}
 *
 * @property {number} distanceInMiles
 *   Optional.
 *
 *
 *   The distance_in_miles is applied when the location being searched for is
 *   identified as a city or smaller. When the location being searched for is a
 *   state or larger, this field is ignored.
 *
 * @property {number} telecommutePreference
 *   Optional.
 *
 *   Allows the client to return jobs without a
 *   set location, specifically, telecommuting jobs (telecomuting is considered
 *   by the service as a special location.
 *   Job.posting_region indicates if a job permits telecommuting.
 *   If this field is set to TelecommutePreference.TELECOMMUTE_ALLOWED,
 *   telecommuting jobs are searched, and address and lat_lng are
 *   ignored. If not set or set to
 *   TelecommutePreference.TELECOMMUTE_EXCLUDED, telecommute job are not
 *   searched.
 *
 *   This filter can be used by itself to search exclusively for telecommuting
 *   jobs, or it can be combined with another location
 *   filter to search for a combination of job locations,
 *   such as "Mountain View" or "telecommuting" jobs. However, when used in
 *   combination with other location filters, telecommuting jobs can be
 *   treated as less relevant than other jobs in the search response.
 *
 *   The number should be among the values of [TelecommutePreference]{@link google.cloud.talent.v4beta1.TelecommutePreference}
 *
 * @property {boolean} negated
 *   Optional.
 *
 *   Whether to apply negation to the filter so profiles matching the filter
 *   are excluded.
 *
 *   Currently only supported in profile search.
 *
 * @typedef LocationFilter
 * @memberof google.cloud.talent.v4beta1
 * @see [google.cloud.talent.v4beta1.LocationFilter definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/talent/v4beta1/filters.proto}
 */
const LocationFilter = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Specify whether including telecommute jobs.
   *
   * @enum {number}
   * @memberof google.cloud.talent.v4beta1
   */
  TelecommutePreference: {

    /**
     * Default value if the telecommute preference isn't specified.
     */
    TELECOMMUTE_PREFERENCE_UNSPECIFIED: 0,

    /**
     * Exclude telecommute jobs.
     */
    TELECOMMUTE_EXCLUDED: 1,

    /**
     * Allow telecommute jobs.
     */
    TELECOMMUTE_ALLOWED: 2
  }
};

/**
 * Input only.
 *
 * Filter on job compensation type and amount.
 *
 * @property {number} type
 *   Required.
 *
 *   Type of filter.
 *
 *   The number should be among the values of [FilterType]{@link google.cloud.talent.v4beta1.FilterType}
 *
 * @property {number[]} units
 *   Required.
 *
 *   Specify desired `base compensation entry's`
 *   CompensationInfo.CompensationUnit.
 *
 *   The number should be among the values of [CompensationUnit]{@link google.cloud.talent.v4beta1.CompensationUnit}
 *
 * @property {Object} range
 *   Optional.
 *
 *   Compensation range.
 *
 *   This object should have the same structure as [CompensationRange]{@link google.cloud.talent.v4beta1.CompensationRange}
 *
 * @property {boolean} includeJobsWithUnspecifiedCompensationRange
 *   Optional.
 *
 *   Whether to include jobs whose compensation range is unspecified.
 *
 * @typedef CompensationFilter
 * @memberof google.cloud.talent.v4beta1
 * @see [google.cloud.talent.v4beta1.CompensationFilter definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/talent/v4beta1/filters.proto}
 */
const CompensationFilter = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Specify the type of filtering.
   *
   * @enum {number}
   * @memberof google.cloud.talent.v4beta1
   */
  FilterType: {

    /**
     * Filter type unspecified. Position holder, INVALID, should never be used.
     */
    FILTER_TYPE_UNSPECIFIED: 0,

    /**
     * Filter by `base compensation entry's` unit. A job is a match if and
     * only if the job contains a base CompensationEntry and the base
     * CompensationEntry's unit matches provided units.
     * Populate one or more units.
     *
     * See CompensationInfo.CompensationEntry for definition of
     * base compensation entry.
     */
    UNIT_ONLY: 1,

    /**
     * Filter by `base compensation entry's` unit and amount / range. A job
     * is a match if and only if the job contains a base CompensationEntry, and
     * the base entry's unit matches provided compensation_units and amount
     * or range overlaps with provided compensation_range.
     *
     * See CompensationInfo.CompensationEntry for definition of
     * base compensation entry.
     *
     * Set exactly one units and populate range.
     */
    UNIT_AND_AMOUNT: 2,

    /**
     * Filter by annualized base compensation amount and `base compensation
     * entry's` unit. Populate range and zero or more units.
     */
    ANNUALIZED_BASE_AMOUNT: 3,

    /**
     * Filter by annualized total compensation amount and `base compensation
     * entry's` unit . Populate range and zero or more units.
     */
    ANNUALIZED_TOTAL_AMOUNT: 4
  }
};

/**
 * Input only.
 *
 * Parameters needed for commute search.
 *
 * @property {number} commuteMethod
 *   Required.
 *
 *   The method of transportation for which to calculate the commute time.
 *
 *   The number should be among the values of [CommuteMethod]{@link google.cloud.talent.v4beta1.CommuteMethod}
 *
 * @property {Object} startCoordinates
 *   Required.
 *
 *   The latitude and longitude of the location from which to calculate the
 *   commute time.
 *
 *   This object should have the same structure as [LatLng]{@link google.type.LatLng}
 *
 * @property {Object} travelDuration
 *   Required.
 *
 *   The maximum travel time in seconds. The maximum allowed value is `3600s`
 *   (one hour). Format is `123s`.
 *
 *   This object should have the same structure as [Duration]{@link google.protobuf.Duration}
 *
 * @property {boolean} allowImpreciseAddresses
 *   Optional.
 *   If `true`, jobs without street level addresses may also be returned.
 *   For city level addresses, the city center is used. For state and coarser
 *   level addresses, text matching is used.
 *   If this field is set to `false` or isn't specified, only jobs that include
 *   street level addresses will be returned by commute search.
 *
 * @property {number} roadTraffic
 *   Optional.
 *
 *   Specifies the traffic density to use when calculating commute time.
 *
 *   The number should be among the values of [RoadTraffic]{@link google.cloud.talent.v4beta1.RoadTraffic}
 *
 * @property {Object} departureTime
 *   Optional.
 *
 *   The departure time used to calculate traffic impact, represented as
 *   google.type.TimeOfDay in local time zone.
 *
 *   Currently traffic model is restricted to hour level resolution.
 *
 *   This object should have the same structure as [TimeOfDay]{@link google.type.TimeOfDay}
 *
 * @typedef CommuteFilter
 * @memberof google.cloud.talent.v4beta1
 * @see [google.cloud.talent.v4beta1.CommuteFilter definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/talent/v4beta1/filters.proto}
 */
const CommuteFilter = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * The traffic density to use when calculating commute time.
   *
   * @enum {number}
   * @memberof google.cloud.talent.v4beta1
   */
  RoadTraffic: {

    /**
     * Road traffic situation isn't specified.
     */
    ROAD_TRAFFIC_UNSPECIFIED: 0,

    /**
     * Optimal commute time without considering any traffic impact.
     */
    TRAFFIC_FREE: 1,

    /**
     * Commute time calculation takes in account the peak traffic impact.
     */
    BUSY_HOUR: 2
  }
};

/**
 * Input only.
 *
 * Job title of the search.
 *
 * @property {string} jobTitle
 *   Required.
 *
 *   The job title, for example, "Software engineer", or "Product manager".
 *
 * @property {boolean} negated
 *   Optional.
 *
 *   Whether to apply negation to the filter so profiles matching the filter
 *   are excluded.
 *
 * @typedef JobTitleFilter
 * @memberof google.cloud.talent.v4beta1
 * @see [google.cloud.talent.v4beta1.JobTitleFilter definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/talent/v4beta1/filters.proto}
 */
const JobTitleFilter = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Input only.
 *
 * Skill filter of the search.
 *
 * @property {string} skill
 *   Required.
 *
 *   The skill name. For example, "java", "j2ee", and so on.
 *
 * @property {boolean} negated
 *   Optional.
 *
 *   Whether to apply negation to the filter so profiles matching the filter
 *   are excluded.
 *
 * @typedef SkillFilter
 * @memberof google.cloud.talent.v4beta1
 * @see [google.cloud.talent.v4beta1.SkillFilter definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/talent/v4beta1/filters.proto}
 */
const SkillFilter = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Input only.
 *
 * Employer filter of the search.
 *
 * @property {string} employer
 *   Required.
 *
 *   The name of the employer, for example "Google", "Alphabet".
 *
 * @property {number} mode
 *   Optional.
 *
 *   Define set of EmploymentRecords to search against.
 *
 *   Defaults to EmployerFilterMode.ALL_EMPLOYMENT_RECORDS.
 *
 *   The number should be among the values of [EmployerFilterMode]{@link google.cloud.talent.v4beta1.EmployerFilterMode}
 *
 * @property {boolean} negated
 *   Optional.
 *
 *   Whether to apply negation to the filter so profiles matching the filter
 *   is excluded.
 *
 * @typedef EmployerFilter
 * @memberof google.cloud.talent.v4beta1
 * @see [google.cloud.talent.v4beta1.EmployerFilter definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/talent/v4beta1/filters.proto}
 */
const EmployerFilter = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Enum indicating which set of Profile.employment_records to search
   * against.
   *
   * @enum {number}
   * @memberof google.cloud.talent.v4beta1
   */
  EmployerFilterMode: {

    /**
     * Default value.
     */
    EMPLOYER_FILTER_MODE_UNSPECIFIED: 0,

    /**
     * Apply to all employers in Profile.employment_records.
     */
    ALL_EMPLOYMENT_RECORDS: 1,

    /**
     * Apply only to current employer in Profile.employment_records.
     */
    CURRENT_EMPLOYMENT_RECORDS_ONLY: 2,

    /**
     * Apply only to past (not current) employers in
     * Profile.employment_records.
     */
    PAST_EMPLOYMENT_RECORDS_ONLY: 3
  }
};

/**
 * Input only.
 *
 * Education filter of the search.
 *
 * @property {string} school
 *   Optional.
 *
 *   The school name. For example "MIT", "University of California, Berkeley".
 *
 * @property {string} fieldOfStudy
 *   Optional.
 *
 *   The field of study. This is to search against value provided in
 *   Degree.fields_of_study.
 *   For example "Computer Science", "Mathematics".
 *
 * @property {number} degreeType
 *   Optional.
 *
 *   Education degree in ISCED code. Each value in degree covers a specific
 *   level of education, without any expansion to upper nor lower levels of
 *   education degree.
 *
 *   The number should be among the values of [DegreeType]{@link google.cloud.talent.v4beta1.DegreeType}
 *
 * @property {boolean} negated
 *   Optional.
 *
 *   Whether to apply negation to the filter so profiles matching the filter
 *   is excluded.
 *
 * @typedef EducationFilter
 * @memberof google.cloud.talent.v4beta1
 * @see [google.cloud.talent.v4beta1.EducationFilter definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/talent/v4beta1/filters.proto}
 */
const EducationFilter = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Input only.
 *
 * Work experience filter.
 *
 * This filter is used to search for profiles with working experience length
 * between min_experience and max_experience.
 *
 * @property {Object} minExperience
 *   Optional.
 *
 *   The minimum duration of the work experience (inclusive).
 *
 *   This object should have the same structure as [Duration]{@link google.protobuf.Duration}
 *
 * @property {Object} maxExperience
 *   Optional.
 *
 *   The maximum duration of the work experience (exclusive).
 *
 *   This object should have the same structure as [Duration]{@link google.protobuf.Duration}
 *
 * @typedef WorkExperienceFilter
 * @memberof google.cloud.talent.v4beta1
 * @see [google.cloud.talent.v4beta1.WorkExperienceFilter definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/talent/v4beta1/filters.proto}
 */
const WorkExperienceFilter = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Input only.
 *
 * Application Date Range Filter.
 *
 * The API matches profiles with Application.application_date between
 * start date and end date (both boundaries are inclusive). The filter is
 * ignored if both start_date and end_date are missing.
 *
 * @property {Object} startDate
 *   Optional.
 *
 *   Start date. If it's missing, The API matches profiles with application date
 *   not after the end date.
 *
 *   This object should have the same structure as [Date]{@link google.type.Date}
 *
 * @property {Object} endDate
 *   Optional.
 *
 *   End date. If it's missing, The API matches profiles with application date
 *   not before the start date.
 *
 *   This object should have the same structure as [Date]{@link google.type.Date}
 *
 * @typedef ApplicationDateFilter
 * @memberof google.cloud.talent.v4beta1
 * @see [google.cloud.talent.v4beta1.ApplicationDateFilter definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/talent/v4beta1/filters.proto}
 */
const ApplicationDateFilter = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Input only.
 *
 * Outcome Notes Filter.
 *
 * @property {string} outcomeNotes
 *   Required.
 *
 *   User entered or selected outcome reason. The API does an exact match on the
 *   Application.outcome_notes in profiles.
 *
 * @property {boolean} negated
 *   Optional.
 *
 *   If true, The API excludes all candidates with any
 *   Application.outcome_notes matching the outcome reason specified in
 *   the filter.
 *
 * @typedef ApplicationOutcomeNotesFilter
 * @memberof google.cloud.talent.v4beta1
 * @see [google.cloud.talent.v4beta1.ApplicationOutcomeNotesFilter definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/talent/v4beta1/filters.proto}
 */
const ApplicationOutcomeNotesFilter = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Input only.
 *
 * Filter on the job information of Application.
 *
 * @property {string} jobRequisitionId
 *   Optional.
 *
 *   The job requisition id in the application. The API does an exact match on
 *   the Job.requisistion_id of Application.job in profiles.
 *
 * @property {string} jobTitle
 *   Optional.
 *
 *   The job title in the application. The API does an exact match on the
 *   Job.title of Application.job in profiles.
 *
 * @property {boolean} negated
 *   Optional.
 *
 *   If true, the API excludes all profiles with any Application.job
 *   matching the filters.
 *
 * @typedef ApplicationJobFilter
 * @memberof google.cloud.talent.v4beta1
 * @see [google.cloud.talent.v4beta1.ApplicationJobFilter definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/talent/v4beta1/filters.proto}
 */
const ApplicationJobFilter = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Input only.
 *
 * Filter on create timestamp or update timestamp of profiles.
 *
 * @property {Object} startTime
 *   Optional.
 *
 *   Start timestamp, matching profiles with the start time. If this field
 *   missing, The API matches profiles with create / update timestamp before the
 *   end timestamp.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {Object} endTime
 *   Optional.
 *
 *   End timestamp, matching profiles with the end time. If this field
 *   missing, The API matches profiles with create / update timestamp after the
 *   start timestamp.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {number} timeField
 *   Optional.
 *
 *   Specifies which time field to filter profiles.
 *
 *   Defaults to TimeField.CREATE_TIME.
 *
 *   The number should be among the values of [TimeField]{@link google.cloud.talent.v4beta1.TimeField}
 *
 * @typedef TimeFilter
 * @memberof google.cloud.talent.v4beta1
 * @see [google.cloud.talent.v4beta1.TimeFilter definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/talent/v4beta1/filters.proto}
 */
const TimeFilter = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Time fields can be used in TimeFilter.
   *
   * @enum {number}
   * @memberof google.cloud.talent.v4beta1
   */
  TimeField: {

    /**
     * Default value.
     */
    TIME_FIELD_UNSPECIFIED: 0,

    /**
     * Earliest profile create time.
     */
    CREATE_TIME: 1,

    /**
     * Latest profile update time.
     */
    UPDATE_TIME: 2
  }
};