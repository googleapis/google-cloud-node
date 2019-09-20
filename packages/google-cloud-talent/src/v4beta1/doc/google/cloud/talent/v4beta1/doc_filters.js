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
 * The query required to perform a search query.
 *
 * @property {string} query
 *   The query string that matches against the job title, description, and
 *   location fields.
 *
 *   The maximum number of allowed characters is 255.
 *
 * @property {string[]} companies
 *   This filter specifies the company entities to search against.
 *
 *   If a value isn't specified, jobs are searched for against all
 *   companies.
 *
 *   If multiple values are specified, jobs are searched against the
 *   companies specified.
 *
 *   The format is
 *   "projects/{project_id}/tenants/{tenant_id}/companies/{company_id}". For
 *   example, "projects/foo/tenants/bar/companies/baz".
 *
 *   If tenant id is unspecified, the default tenant is used. For
 *   example, "projects/foo/companies/bar".
 *
 *   At most 20 company filters are allowed.
 *
 * @property {Object[]} locationFilters
 *   The location filter specifies geo-regions containing the jobs to
 *   search against. See
 *   LocationFilter for more
 *   information.
 *
 *   If a location value isn't specified, jobs fitting the other search
 *   criteria are retrieved regardless of where they're located.
 *
 *   If multiple values are specified, jobs are retrieved from any of the
 *   specified locations. If different values are specified for the
 *   LocationFilter.distance_in_miles
 *   parameter, the maximum provided distance is used for all locations.
 *
 *   At most 5 location filters are allowed.
 *
 *   This object should have the same structure as [LocationFilter]{@link google.cloud.talent.v4beta1.LocationFilter}
 *
 * @property {number[]} jobCategories
 *   The category filter specifies the categories of jobs to search against.
 *   See JobCategory for more
 *   information.
 *
 *   If a value isn't specified, jobs from any category are searched against.
 *
 *   If multiple values are specified, jobs from any of the specified
 *   categories are searched against.
 *
 *   The number should be among the values of [JobCategory]{@link google.cloud.talent.v4beta1.JobCategory}
 *
 * @property {Object} commuteFilter
 *   Allows filtering jobs by commute time with different travel methods (for
 *    example, driving or public transit).
 *
 *   Note: This only works when you specify a
 *   CommuteMethod. In this case,
 *   location_filters
 *   is ignored.
 *
 *    Currently we don't support sorting by commute time.
 *
 *   This object should have the same structure as [CommuteFilter]{@link google.cloud.talent.v4beta1.CommuteFilter}
 *
 * @property {string[]} companyDisplayNames
 *   This filter specifies the exact company
 *   Company.display_name of
 *   the jobs to search against.
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
 *   This search filter is applied only to
 *   Job.compensation_info.
 *   For example, if the filter is specified as "Hourly job with per-hour
 *   compensation > $15", only jobs meeting these criteria are searched. If a
 *   filter isn't defined, all open jobs are searched.
 *
 *   This object should have the same structure as [CompensationFilter]{@link google.cloud.talent.v4beta1.CompensationFilter}
 *
 * @property {string} customAttributeFilter
 *   This filter specifies a structured syntax to match against the
 *   Job.custom_attributes
 *   marked as `filterable`.
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
 *   must be < 6000 bytes in length.
 *
 *   Sample Query:
 *   `(LOWER(driving_license)="class \"a\"" OR EMPTY(driving_license)) AND
 *   driving_years > 10`
 *
 * @property {boolean} disableSpellCheck
 *   This flag controls the spell-check feature. If false, the
 *   service attempts to correct a misspelled query,
 *   for example, "enginee" is corrected to "engineer".
 *
 *   Defaults to false: a spell check is performed.
 *
 * @property {number[]} employmentTypes
 *   The employment type filter specifies the employment type of jobs to
 *   search against, such as
 *   EmploymentType.FULL_TIME.
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
 *   Jobs published within a range specified by this filter are searched
 *   against.
 *
 *   This object should have the same structure as [TimestampRange]{@link google.cloud.talent.v4beta1.TimestampRange}
 *
 * @property {string[]} excludedJobs
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
 *   Keywords to match any text fields of profiles.
 *
 *   For example, "software engineer in Palo Alto".
 *
 * @property {Object[]} locationFilters
 *   The location filter specifies geo-regions containing the profiles to
 *   search against.
 *
 *   One of
 *   LocationFilter.address
 *   or
 *   LocationFilter.lat_lng
 *   must be provided or an error is thrown. If both
 *   LocationFilter.address
 *   and
 *   LocationFilter.lat_lng
 *   are provided, an error is thrown.
 *
 *   The following logic is used to determine which locations in
 *   the profile to filter against:
 *   1. All of the profile's geocoded
 *   Profile.addresses where
 *   Address.usage is PERSONAL and
 *   Address.current is true.
 *   2. If the above set of locations is empty, all of the profile's geocoded
 *   Profile.addresses where
 *   Address.usage is
 *   CONTACT_INFO_USAGE_UNSPECIFIED and
 *   Address.current is true.
 *   3. If the above set of locations is empty, all of the profile's geocoded
 *   Profile.addresses where
 *   Address.usage is PERSONAL or
 *   CONTACT_INFO_USAGE_UNSPECIFIED and
 *   Address.current is not set.
 *
 *   This means that any profiles without any
 *   Profile.addresses that
 *   match any of the above criteria will not be included in a search with
 *   location filter. Furthermore, any
 *   Profile.addresses where
 *   Address.usage is WORK or
 *   SCHOOL or where
 *   Address.current is false are
 *   not considered for location filter.
 *
 *   If a location filter isn't specified, profiles fitting the other search
 *   criteria are retrieved regardless of where they're located.
 *
 *   If
 *   LocationFilter.negated
 *   is specified, the result doesn't contain profiles from that location.
 *
 *   If
 *   LocationFilter.address
 *   is provided, the
 *   LocationType, center
 *   point (latitude and longitude), and radius are automatically detected by
 *   the Google Maps Geocoding API and included as well. If
 *   LocationFilter.address
 *   cannot be geocoded, the filter falls back to keyword search.
 *
 *   If the detected
 *   LocationType is
 *   LocationType.SUB_ADMINISTRATIVE_AREA,
 *   LocationType.ADMINISTRATIVE_AREA,
 *   or
 *   LocationType.COUNTRY,
 *   the filter is performed against the detected location name (using exact
 *   text matching). Otherwise, the filter is performed against the detected
 *   center point and a radius of detected location radius +
 *   LocationFilter.distance_in_miles.
 *
 *   If
 *   LocationFilter.address
 *   is provided,
 *   LocationFilter.distance_in_miles
 *   is the additional radius on top of the radius of the location geocoded from
 *   LocationFilter.address.
 *   If
 *   LocationFilter.lat_lng
 *   is provided,
 *   LocationFilter.distance_in_miles
 *   is the only radius that is used.
 *
 *   LocationFilter.distance_in_miles
 *   is 10 by default. Note that the value of
 *   LocationFilter.distance_in_miles
 *   is 0 if it is unset, so the server does not differentiate
 *   LocationFilter.distance_in_miles
 *   that is explicitly set to 0 and
 *   LocationFilter.distance_in_miles
 *   that is not set. Which means that if
 *   LocationFilter.distance_in_miles
 *   is explicitly set to 0, the server will use the default value of
 *   LocationFilter.distance_in_miles
 *   which is 10. To work around this and effectively set
 *   LocationFilter.distance_in_miles
 *   to 0, we recommend setting
 *   LocationFilter.distance_in_miles
 *   to a very small decimal number (such as 0.00001).
 *
 *   If
 *   LocationFilter.distance_in_miles
 *   is negative, an error is thrown.
 *
 *   This object should have the same structure as [LocationFilter]{@link google.cloud.talent.v4beta1.LocationFilter}
 *
 * @property {Object[]} jobTitleFilters
 *   Job title filter specifies job titles of profiles to match on.
 *
 *   If a job title isn't specified, profiles with any titles are retrieved.
 *
 *   If multiple values are specified, profiles are retrieved with any of the
 *   specified job titles.
 *
 *   If
 *   JobTitleFilter.negated
 *   is specified, the result won't contain profiles with the job titles.
 *
 *   For example, search for profiles with a job title "Product Manager".
 *
 *   This object should have the same structure as [JobTitleFilter]{@link google.cloud.talent.v4beta1.JobTitleFilter}
 *
 * @property {Object[]} employerFilters
 *   Employer filter specifies employers of profiles to match on.
 *
 *   If an employer filter isn't specified, profiles with any employers are
 *   retrieved.
 *
 *   If multiple employer filters are specified, profiles with any matching
 *   employers are retrieved.
 *
 *   If
 *   EmployerFilter.negated
 *   is specified, the result won't contain profiles that match the employers.
 *
 *   For example, search for profiles that have working experience at "Google
 *   LLC".
 *
 *   This object should have the same structure as [EmployerFilter]{@link google.cloud.talent.v4beta1.EmployerFilter}
 *
 * @property {Object[]} educationFilters
 *   Education filter specifies education of profiles to match on.
 *
 *   If an education filter isn't specified, profiles with any education are
 *   retrieved.
 *
 *   If multiple education filters are specified, profiles that match any
 *   education filters are retrieved.
 *
 *   If
 *   EducationFilter.negated
 *   is specified, the result won't contain profiles that match the educations.
 *
 *   For example, search for profiles with a master degree.
 *
 *   This object should have the same structure as [EducationFilter]{@link google.cloud.talent.v4beta1.EducationFilter}
 *
 * @property {Object[]} skillFilters
 *   Skill filter specifies skill of profiles to match on.
 *
 *   If a skill filter isn't specified, profiles with any skills are retrieved.
 *
 *   If multiple skill filters are specified, profiles that match any skill
 *   filters are retrieved.
 *
 *   If SkillFilter.negated
 *   is specified, the result won't contain profiles that match the skills.
 *
 *   For example, search for profiles that have "Java" and "Python" in skill
 *   list.
 *
 *   This object should have the same structure as [SkillFilter]{@link google.cloud.talent.v4beta1.SkillFilter}
 *
 * @property {Object[]} workExperienceFilter
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
 *   Time filter specifies the create/update timestamp of the profiles to match
 *   on.
 *
 *   For example, search for profiles created since "2018-1-1".
 *
 *   This object should have the same structure as [TimeFilter]{@link google.cloud.talent.v4beta1.TimeFilter}
 *
 * @property {Object} hirableFilter
 *   The hirable filter specifies the profile's hirable status to match on.
 *
 *   This object should have the same structure as [BoolValue]{@link google.protobuf.BoolValue}
 *
 * @property {Object[]} applicationDateFilters
 *   The application date filters specify application date ranges to match on.
 *
 *   This object should have the same structure as [ApplicationDateFilter]{@link google.cloud.talent.v4beta1.ApplicationDateFilter}
 *
 * @property {Object[]} applicationOutcomeNotesFilters
 *   The application outcome notes filters specify the notes for the outcome of
 *   the job application.
 *
 *   This object should have the same structure as [ApplicationOutcomeNotesFilter]{@link google.cloud.talent.v4beta1.ApplicationOutcomeNotesFilter}
 *
 * @property {Object[]} applicationJobFilters
 *   The application job filters specify the job applied for in the application.
 *
 *   This object should have the same structure as [ApplicationJobFilter]{@link google.cloud.talent.v4beta1.ApplicationJobFilter}
 *
 * @property {string} customAttributeFilter
 *   This filter specifies a structured syntax to match against the
 *   Profile.custom_attributes
 *   that are marked as `filterable`.
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
 * @property {Object} candidateAvailabilityFilter
 *   Deprecated. Use availability_filters instead.
 *
 *   The candidate availability filter which filters based on availability
 *   signals.
 *
 *   Signal 1: Number of days since most recent job application.  See
 *   Availability.JobApplicationAvailabilitySignal
 *   for the details of this signal.
 *
 *   Signal 2: Number of days since last profile update. See
 *   Availability.ProfileUpdateAvailabilitySignal
 *   for the details of this signal.
 *
 *   The candidate availability filter helps a recruiter understand if a
 *   specific candidate is likely to be actively seeking new job opportunities
 *   based on an aggregated set of signals.  Specifically, the intent is NOT to
 *   indicate the candidate's potential qualification / interest / close ability
 *   for a specific job.
 *
 *   This object should have the same structure as [CandidateAvailabilityFilter]{@link google.cloud.talent.v4beta1.CandidateAvailabilityFilter}
 *
 * @property {Object[]} availabilityFilters
 *   The availability filter which filters based on
 *   Profile.availability_signals.
 *
 *   The availability filter helps a recruiter understand if a
 *   specific candidate is likely to be actively seeking new job opportunities
 *   based on an aggregated set of signals.  Specifically, the intent is NOT to
 *   indicate the candidate's potential qualification / interest / close ability
 *   for a specific job.
 *
 *   There can be at most one
 *   AvailabilityFilter per
 *   signal_type.
 *   If there are multiple
 *   AvailabilityFilter for a
 *   signal_type,
 *   an error is thrown.
 *
 *   This object should have the same structure as [AvailabilityFilter]{@link google.cloud.talent.v4beta1.AvailabilityFilter}
 *
 * @property {Object[]} personNameFilters
 *   Person name filter specifies person name of profiles to match on.
 *
 *   If multiple person name filters are specified, profiles that match any
 *   person name filters are retrieved.
 *
 *   For example, search for profiles of candidates with name "John Smith".
 *
 *   This object should have the same structure as [PersonNameFilter]{@link google.cloud.talent.v4beta1.PersonNameFilter}
 *
 * @typedef ProfileQuery
 * @memberof google.cloud.talent.v4beta1
 * @see [google.cloud.talent.v4beta1.ProfileQuery definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/talent/v4beta1/filters.proto}
 */
const ProfileQuery = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Geographic region of the search.
 *
 * @property {string} address
 *   The address name, such as "Mountain View" or "Bay Area".
 *
 * @property {string} regionCode
 *   CLDR region code of the country/region of the address. This is used
 *   to address ambiguity of the user-input location, for example, "Liverpool"
 *   against "Liverpool, NY, US" or "Liverpool, UK".
 *
 *   Set this field to bias location resolution toward a specific country
 *   or territory. If this field is not set, application behavior is biased
 *   toward the United States by default.
 *
 *   See http://cldr.unicode.org/ and
 *   http://www.unicode.org/cldr/charts/30/supplemental/territory_information.html
 *   for details. Example: "CH" for Switzerland.
 *   Note that this filter is not applicable for Profile Search related queries.
 *
 * @property {Object} latLng
 *   The latitude and longitude of the geographic center to search from. This
 *   field is ignored if `address` is provided.
 *
 *   This object should have the same structure as [LatLng]{@link google.type.LatLng}
 *
 * @property {number} distanceInMiles
 *   The distance_in_miles is applied when the location being searched for is
 *   identified as a city or smaller. This field is ignored if the location
 *   being searched for is a state or larger.
 *
 * @property {number} telecommutePreference
 *   Allows the client to return jobs without a
 *   set location, specifically, telecommuting jobs (telecommuting is considered
 *   by the service as a special location.
 *   Job.posting_region
 *   indicates if a job permits telecommuting. If this field is set to
 *   TelecommutePreference.TELECOMMUTE_ALLOWED,
 *   telecommuting jobs are searched, and
 *   address and
 *   lat_lng are ignored.
 *   If not set or set to
 *   TelecommutePreference.TELECOMMUTE_EXCLUDED,
 *   telecommute job are not searched.
 *
 *   This filter can be used by itself to search exclusively for telecommuting
 *   jobs, or it can be combined with another location
 *   filter to search for a combination of job locations,
 *   such as "Mountain View" or "telecommuting" jobs. However, when used in
 *   combination with other location filters, telecommuting jobs can be
 *   treated as less relevant than other jobs in the search response.
 *
 *   This field is only used for job search requests.
 *
 *   The number should be among the values of [TelecommutePreference]{@link google.cloud.talent.v4beta1.TelecommutePreference}
 *
 * @property {boolean} negated
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
   * Specify whether to include telecommute jobs.
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
 * Filter on job compensation type and amount.
 *
 * @property {number} type
 *   Required. Type of filter.
 *
 *   The number should be among the values of [FilterType]{@link google.cloud.talent.v4beta1.FilterType}
 *
 * @property {number[]} units
 *   Required. Specify desired `base compensation entry's`
 *   CompensationInfo.CompensationUnit.
 *
 *   The number should be among the values of [CompensationUnit]{@link google.cloud.talent.v4beta1.CompensationUnit}
 *
 * @property {Object} range
 *   Compensation range.
 *
 *   This object should have the same structure as [CompensationRange]{@link google.cloud.talent.v4beta1.CompensationRange}
 *
 * @property {boolean} includeJobsWithUnspecifiedCompensationRange
 *   If set to true, jobs with unspecified compensation range fields are
 *   included.
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
     * CompensationEntry's unit matches provided
     * units. Populate
     * one or more
     * units.
     *
     * See
     * CompensationInfo.CompensationEntry
     * for definition of base compensation entry.
     */
    UNIT_ONLY: 1,

    /**
     * Filter by `base compensation entry's` unit and amount / range. A job
     * is a match if and only if the job contains a base CompensationEntry, and
     * the base entry's unit matches provided
     * CompensationUnit
     * and amount or range overlaps with provided
     * CompensationRange.
     *
     * See
     * CompensationInfo.CompensationEntry
     * for definition of base compensation entry.
     *
     * Set exactly one
     * units and
     * populate range.
     */
    UNIT_AND_AMOUNT: 2,

    /**
     * Filter by annualized base compensation amount and `base compensation
     * entry's` unit. Populate
     * range and zero or
     * more units.
     */
    ANNUALIZED_BASE_AMOUNT: 3,

    /**
     * Filter by annualized total compensation amount and `base compensation
     * entry's` unit . Populate
     * range and zero or
     * more units.
     */
    ANNUALIZED_TOTAL_AMOUNT: 4
  }
};

/**
 * Parameters needed for commute search.
 *
 * @property {number} commuteMethod
 *   Required. The method of transportation to calculate the commute time for.
 *
 *   The number should be among the values of [CommuteMethod]{@link google.cloud.talent.v4beta1.CommuteMethod}
 *
 * @property {Object} startCoordinates
 *   Required. The latitude and longitude of the location to calculate the
 *   commute time from.
 *
 *   This object should have the same structure as [LatLng]{@link google.type.LatLng}
 *
 * @property {Object} travelDuration
 *   Required. The maximum travel time in seconds. The maximum allowed value is
 *   `3600s` (one hour). Format is `123s`.
 *
 *   This object should have the same structure as [Duration]{@link google.protobuf.Duration}
 *
 * @property {boolean} allowImpreciseAddresses
 *   If `true`, jobs without street level addresses may also be returned.
 *   For city level addresses, the city center is used. For state and coarser
 *   level addresses, text matching is used.
 *   If this field is set to `false` or isn't specified, only jobs that include
 *   street level addresses will be returned by commute search.
 *
 * @property {number} roadTraffic
 *   Specifies the traffic density to use when calculating commute time.
 *
 *   The number should be among the values of [RoadTraffic]{@link google.cloud.talent.v4beta1.RoadTraffic}
 *
 * @property {Object} departureTime
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
 * Job title of the search.
 *
 * @property {string} jobTitle
 *   Required. The job title. For example, "Software engineer", or "Product
 *   manager".
 *
 * @property {boolean} negated
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
 * Skill filter of the search.
 *
 * @property {string} skill
 *   Required. The skill name. For example, "java", "j2ee", and so on.
 *
 * @property {boolean} negated
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
 * Employer filter of the search.
 *
 * @property {string} employer
 *   Required. The name of the employer, for example "Google", "Alphabet".
 *
 * @property {number} mode
 *   Define set of
 *   EmploymentRecords to search
 *   against.
 *
 *   Defaults to
 *   EmployerFilterMode.ALL_EMPLOYMENT_RECORDS.
 *
 *   The number should be among the values of [EmployerFilterMode]{@link google.cloud.talent.v4beta1.EmployerFilterMode}
 *
 * @property {boolean} negated
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
   * Enum indicating which set of
   * Profile.employment_records
   * to search against.
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
     * Apply to all employers in
     * Profile.employment_records.
     */
    ALL_EMPLOYMENT_RECORDS: 1,

    /**
     * Apply only to current employer in
     * Profile.employment_records.
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
 * Education filter of the search.
 *
 * @property {string} school
 *   The school name. For example "MIT", "University of California, Berkeley".
 *
 * @property {string} fieldOfStudy
 *   The field of study. This is to search against value provided in
 *   Degree.fields_of_study.
 *   For example "Computer Science", "Mathematics".
 *
 * @property {number} degreeType
 *   Education degree in ISCED code. Each value in degree covers a specific
 *   level of education, without any expansion to upper nor lower levels of
 *   education degree.
 *
 *   The number should be among the values of [DegreeType]{@link google.cloud.talent.v4beta1.DegreeType}
 *
 * @property {boolean} negated
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
 * Work experience filter.
 *
 * This filter is used to search for profiles with working experience length
 * between
 * min_experience
 * and
 * max_experience.
 *
 * @property {Object} minExperience
 *   The minimum duration of the work experience (inclusive).
 *
 *   This object should have the same structure as [Duration]{@link google.protobuf.Duration}
 *
 * @property {Object} maxExperience
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
 * Application Date Range Filter.
 *
 * The API matches profiles with
 * Application.application_date
 * between start date and end date (both boundaries are inclusive). The filter
 * is ignored if both
 * start_date
 * and end_date
 * are missing.
 *
 * @property {Object} startDate
 *   Start date. If it's missing, The API matches profiles with application date
 *   not after the end date.
 *
 *   This object should have the same structure as [Date]{@link google.type.Date}
 *
 * @property {Object} endDate
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
 * Outcome Notes Filter.
 *
 * @property {string} outcomeNotes
 *   Required. User entered or selected outcome reason. The API does an exact
 *   match on the
 *   Application.outcome_notes
 *   in profiles.
 *
 * @property {boolean} negated
 *   If true, The API excludes all candidates with any
 *   Application.outcome_notes
 *   matching the outcome reason specified in the filter.
 *
 * @typedef ApplicationOutcomeNotesFilter
 * @memberof google.cloud.talent.v4beta1
 * @see [google.cloud.talent.v4beta1.ApplicationOutcomeNotesFilter definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/talent/v4beta1/filters.proto}
 */
const ApplicationOutcomeNotesFilter = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Filter on the job information of Application.
 *
 * @property {string} jobRequisitionId
 *   The job requisition id in the application. The API does an exact match on
 *   the Job.requisition_id of
 *   Application.job in profiles.
 *
 * @property {string} jobTitle
 *   The job title in the application. The API does an exact match on the
 *   Job.title of
 *   Application.job in profiles.
 *
 * @property {boolean} negated
 *   If true, the API excludes all profiles with any
 *   Application.job matching the
 *   filters.
 *
 * @typedef ApplicationJobFilter
 * @memberof google.cloud.talent.v4beta1
 * @see [google.cloud.talent.v4beta1.ApplicationJobFilter definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/talent/v4beta1/filters.proto}
 */
const ApplicationJobFilter = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Filter on create timestamp or update timestamp of profiles.
 *
 * @property {Object} startTime
 *   Start timestamp, matching profiles with the start time. If this field
 *   missing, The API matches profiles with create / update timestamp before the
 *   end timestamp.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {Object} endTime
 *   End timestamp, matching profiles with the end time. If this field
 *   missing, The API matches profiles with create / update timestamp after the
 *   start timestamp.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {number} timeField
 *   Specifies which time field to filter profiles.
 *
 *   Defaults to
 *   TimeField.CREATE_TIME.
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

/**
 * Deprecated. Use AvailabilityFilter instead.
 *
 * Filter on availability signals.
 *
 * @property {boolean} negated
 *   It is false by default. If true, API excludes all the potential available
 *   profiles.
 *
 * @typedef CandidateAvailabilityFilter
 * @memberof google.cloud.talent.v4beta1
 * @see [google.cloud.talent.v4beta1.CandidateAvailabilityFilter definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/talent/v4beta1/filters.proto}
 */
const CandidateAvailabilityFilter = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Filter on availability signals.
 *
 * @property {number} signalType
 *   Required. Type of signal to apply filter on.
 *
 *   The number should be among the values of [AvailabilitySignalType]{@link google.cloud.talent.v4beta1.AvailabilitySignalType}
 *
 * @property {Object} range
 *   Required. Range of times to filter candidate signals by.
 *
 *   This object should have the same structure as [TimestampRange]{@link google.cloud.talent.v4beta1.TimestampRange}
 *
 * @property {boolean} required
 *   If multiple
 *   AvailabilityFilter are
 *   provided, the default behavior is to OR all filters, but if this field is
 *   set to true, this particular
 *   AvailabilityFilter will
 *   be AND'ed against other
 *   AvailabilityFilter.
 *
 * @typedef AvailabilityFilter
 * @memberof google.cloud.talent.v4beta1
 * @see [google.cloud.talent.v4beta1.AvailabilityFilter definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/talent/v4beta1/filters.proto}
 */
const AvailabilityFilter = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Filter on person name.
 *
 * @property {string} personName
 *   Required. The person name. For example, "John Smith".
 *
 *   Can be any combination of PersonName.structured_name.given_name,
 *   PersonName.structured_name.middle_initial,
 *   PersonName.structured_name.family_name, and
 *   PersonName.formatted_name.
 *
 * @typedef PersonNameFilter
 * @memberof google.cloud.talent.v4beta1
 * @see [google.cloud.talent.v4beta1.PersonNameFilter definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/talent/v4beta1/filters.proto}
 */
const PersonNameFilter = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};