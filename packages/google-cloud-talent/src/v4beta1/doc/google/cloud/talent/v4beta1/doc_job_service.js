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
 * Create job request.
 *
 * @property {string} parent
 *   Required.
 *
 *   The resource name of the tenant under which the job is created.
 *
 *   The format is "projects/{project_id}/tenants/{tenant_id}", for example,
 *   "projects/api-test-project/tenant/foo".
 *
 *   Tenant id is optional and a default tenant is created if unspecified, for
 *   example, "projects/api-test-project".
 *
 * @property {Object} job
 *   Required.
 *
 *   The Job to be created.
 *
 *   This object should have the same structure as [Job]{@link google.cloud.talent.v4beta1.Job}
 *
 * @typedef CreateJobRequest
 * @memberof google.cloud.talent.v4beta1
 * @see [google.cloud.talent.v4beta1.CreateJobRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/talent/v4beta1/job_service.proto}
 */
const CreateJobRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Input only.
 *
 * Get job request.
 *
 * @property {string} name
 *   Required.
 *
 *   The resource name of the job to retrieve.
 *
 *   The format is
 *   "projects/{project_id}/tenants/{tenant_id}/jobs/{job_id}", for
 *   example, "projects/api-test-project/tenants/foo/jobs/1234".
 *
 *   Tenant id is optional and the default tenant is used if unspecified, for
 *   example, "projects/api-test-project/jobs/1234".
 *
 * @typedef GetJobRequest
 * @memberof google.cloud.talent.v4beta1
 * @see [google.cloud.talent.v4beta1.GetJobRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/talent/v4beta1/job_service.proto}
 */
const GetJobRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Input only.
 *
 * Update job request.
 *
 * @property {Object} job
 *   Required.
 *
 *   The Job to be updated.
 *
 *   This object should have the same structure as [Job]{@link google.cloud.talent.v4beta1.Job}
 *
 * @property {Object} updateMask
 *   Optional but strongly recommended to be provided for the best service
 *   experience.
 *
 *   If update_mask is provided, only the specified fields in
 *   job are updated. Otherwise all the fields are updated.
 *
 *   A field mask to restrict the fields that are updated. Only
 *   top level fields of Job are supported.
 *
 *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
 *
 * @typedef UpdateJobRequest
 * @memberof google.cloud.talent.v4beta1
 * @see [google.cloud.talent.v4beta1.UpdateJobRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/talent/v4beta1/job_service.proto}
 */
const UpdateJobRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Input only.
 *
 * Delete job request.
 *
 * @property {string} name
 *   Required.
 *
 *   The resource name of the job to be deleted.
 *
 *   The format is
 *   "projects/{project_id}/tenants/{tenant_id}/jobs/{job_id}", for
 *   example, "projects/api-test-project/tenants/foo/jobs/1234".
 *
 *   Tenant id is optional and the default tenant is used if unspecified, for
 *   example, "projects/api-test-project/jobs/1234".
 *
 * @typedef DeleteJobRequest
 * @memberof google.cloud.talent.v4beta1
 * @see [google.cloud.talent.v4beta1.DeleteJobRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/talent/v4beta1/job_service.proto}
 */
const DeleteJobRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Input only.
 *
 * Batch delete jobs request.
 *
 * @property {string} parent
 *   Required.
 *
 *   The resource name of the tenant under which the job is created.
 *
 *   The format is "projects/{project_id}/tenants/{tenant_id}", for example,
 *   "projects/api-test-project/tenant/foo".
 *
 *   Tenant id is optional and the default tenant is used if unspecified, for
 *   example, "projects/api-test-project".
 *
 * @property {string} filter
 *   Required.
 *
 *   The filter string specifies the jobs to be deleted.
 *
 *   Supported operator: =, AND
 *
 *   The fields eligible for filtering are:
 *
 *   * `companyName` (Required)
 *   * `requisitionId` (Required)
 *
 *   Sample Query: companyName = "projects/api-test-project/companies/123" AND
 *   requisitionId = "req-1"
 *
 * @typedef BatchDeleteJobsRequest
 * @memberof google.cloud.talent.v4beta1
 * @see [google.cloud.talent.v4beta1.BatchDeleteJobsRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/talent/v4beta1/job_service.proto}
 */
const BatchDeleteJobsRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Input only.
 *
 * List jobs request.
 *
 * @property {string} parent
 *   Required.
 *
 *   The resource name of the tenant under which the job is created.
 *
 *   The format is "projects/{project_id}/tenants/{tenant_id}", for example,
 *   "projects/api-test-project/tenant/foo".
 *
 *   Tenant id is optional and the default tenant is used if unspecified, for
 *   example, "projects/api-test-project".
 *
 * @property {string} filter
 *   Required.
 *
 *   The filter string specifies the jobs to be enumerated.
 *
 *   Supported operator: =, AND
 *
 *   The fields eligible for filtering are:
 *
 *   * `companyName` (Required)
 *   * `requisitionId` (Optional)
 *   * `status` (Optional) Available values: OPEN, EXPIRED, ALL. Defaults to
 *   OPEN if no value is specified.
 *
 *   Sample Query:
 *
 *   * companyName = "projects/api-test-project/tenants/foo/companies/bar"
 *   * companyName = "projects/api-test-project/tenants/foo/companies/bar" AND
 *   requisitionId = "req-1"
 *   * companyName = "projects/api-test-project/tenants/foo/companies/bar" AND
 *   status = "EXPIRED"
 *
 * @property {string} pageToken
 *   Optional.
 *
 *   The starting point of a query result.
 *
 * @property {number} pageSize
 *   Optional.
 *
 *   The maximum number of jobs to be returned per page of results.
 *
 *   If job_view is set to JobView.JOB_VIEW_ID_ONLY, the maximum allowed
 *   page size is 1000. Otherwise, the maximum allowed page size is 100.
 *
 *   Default is 100 if empty or a number < 1 is specified.
 *
 * @property {number} jobView
 *   Optional.
 *
 *   The desired job attributes returned for jobs in the
 *   search response. Defaults to JobView.JOB_VIEW_FULL if no value is
 *   specified.
 *
 *   The number should be among the values of [JobView]{@link google.cloud.talent.v4beta1.JobView}
 *
 * @typedef ListJobsRequest
 * @memberof google.cloud.talent.v4beta1
 * @see [google.cloud.talent.v4beta1.ListJobsRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/talent/v4beta1/job_service.proto}
 */
const ListJobsRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Output only.
 *
 * List jobs response.
 *
 * @property {Object[]} jobs
 *   The Jobs for a given company.
 *
 *   The maximum number of items returned is based on the limit field
 *   provided in the request.
 *
 *   This object should have the same structure as [Job]{@link google.cloud.talent.v4beta1.Job}
 *
 * @property {string} nextPageToken
 *   A token to retrieve the next page of results.
 *
 * @property {Object} metadata
 *   Additional information for the API invocation, such as the request
 *   tracking id.
 *
 *   This object should have the same structure as [ResponseMetadata]{@link google.cloud.talent.v4beta1.ResponseMetadata}
 *
 * @typedef ListJobsResponse
 * @memberof google.cloud.talent.v4beta1
 * @see [google.cloud.talent.v4beta1.ListJobsResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/talent/v4beta1/job_service.proto}
 */
const ListJobsResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Input only.
 *
 * The Request body of the `SearchJobs` call.
 *
 * @property {string} parent
 *   Required.
 *
 *   The resource name of the tenant to search within.
 *
 *   The format is "projects/{project_id}/tenants/{tenant_id}", for example,
 *   "projects/api-test-project/tenant/foo".
 *
 *   Tenant id is optional and the default tenant is used if unspecified, for
 *   example, "projects/api-test-project".
 *
 * @property {number} searchMode
 *   Optional.
 *
 *   Mode of a search.
 *
 *   Defaults to SearchMode.JOB_SEARCH.
 *
 *   The number should be among the values of [SearchMode]{@link google.cloud.talent.v4beta1.SearchMode}
 *
 * @property {Object} requestMetadata
 *   Required.
 *
 *   The meta information collected about the job searcher, used to improve the
 *   search quality of the service.. The identifiers, (such as `user_id`) are
 *   provided by users, and must be unique and consistent.
 *
 *   This object should have the same structure as [RequestMetadata]{@link google.cloud.talent.v4beta1.RequestMetadata}
 *
 * @property {Object} jobQuery
 *   Optional.
 *
 *   Query used to search against jobs, such as keyword, location filters, etc.
 *
 *   This object should have the same structure as [JobQuery]{@link google.cloud.talent.v4beta1.JobQuery}
 *
 * @property {boolean} enableBroadening
 *   Optional.
 *
 *   Controls whether to broaden the search when it produces sparse results.
 *   Broadened queries append results to the end of the matching results
 *   list.
 *
 *   Defaults to false.
 *
 * @property {boolean} requirePreciseResultSize
 *   Optional.
 *
 *   Controls if the search job request requires the return of a precise
 *   count of the first 300 results. Setting this to `true` ensures
 *   consistency in the number of results per page. Best practice is to set this
 *   value to true if a client allows users to jump directly to a
 *   non-sequential search results page.
 *
 *   Enabling this flag may adversely impact performance.
 *
 *   Defaults to false.
 *
 * @property {Object[]} histogramQueries
 *   Optional.
 *
 *   An expression specifies a histogram request against matching jobs.
 *
 *   Expression syntax is an aggregation function call with histogram facets and
 *   other options.
 *
 *   Available aggregation function calls are:
 *   * `count(string_histogram_facet)`: Count the number of matching entities,
 *   for each distinct attribute value.
 *   * `count(numeric_histogram_facet, list of buckets)`: Count the number of
 *   matching entities within each bucket.
 *
 *   Data types:
 *
 *   * Histogram facet: facet names with format [a-zA-Z][a-zA-Z0-9_]+.
 *   * String: string like "any string with backslash escape for quote(\")."
 *   * Number: whole number and floating point number like 10, -1 and -0.01.
 *   * List: list of elements with comma(,) separator surrounded by square
 *   brackets, for example, [1, 2, 3] and ["one", "two", "three"].
 *
 *   Built-in constants:
 *
 *   * MIN (minimum number similar to java Double.MIN_VALUE)
 *   * MAX (maximum number similar to java Double.MAX_VALUE)
 *
 *   Built-in functions:
 *
 *   * bucket(start, end[, label]): bucket built-in function creates a bucket
 *   with range of start, end). Note that the end is exclusive, for example,
 *   bucket(1, MAX, "positive number") or bucket(1, 10).
 *
 *   Job histogram facets:
 *
 *   * company_id: histogram by [Job.distributor_company_id.
 *   * company_display_name: histogram by Job.company_display_name.
 *   * employment_type: histogram by Job.employment_types, for example,
 *   "FULL_TIME", "PART_TIME".
 *   * company_size: histogram by CompanySize, for example, "SMALL",
 *   "MEDIUM", "BIG".
 *   * publish_time_in_month: histogram by the Job.publish_time in months.
 *   Must specify list of numeric buckets in spec.
 *   * publish_time_in_year: histogram by the Job.publish_time in years.
 *   Must specify list of numeric buckets in spec.
 *   * degree_type: histogram by the Job.degree_type, for example,
 *   "Bachelors", "Masters".
 *   * job_level: histogram by the Job.job_level, for example, "Entry
 *   Level".
 *   * country: histogram by the country code of jobs, for example, "US", "FR".
 *   * admin1: histogram by the admin1 code of jobs, which is a global
 *   placeholder referring to the state, province, or the particular term a
 *   country uses to define the geographic structure below the country level,
 *   for example, "CA", "IL".
 *   * city: histogram by a combination of the "city name, admin1 code". For
 *   example,  "Mountain View, CA", "New York, NY".
 *   * admin1_country: histogram by a combination of the "admin1 code, country",
 *   for example, "CA, US", "IL, US".
 *   * city_coordinate: histogram by the city center's GPS coordinates (latitude
 *   and longitude), for example, 37.4038522,-122.0987765. Since the coordinates
 *   of a city center can change, customers may need to refresh them
 *   periodically.
 *   * locale: histogram by the Job.language_code, for example, "en-US",
 *   "fr-FR".
 *   * language: histogram by the language subtag of the Job.language_code,
 *   for example, "en", "fr".
 *   * category: histogram by the JobCategory, for example,
 *   "COMPUTER_AND_IT", "HEALTHCARE".
 *   * base_compensation_unit: histogram by the CompensationUnit of base
 *   salary, for example, "WEEKLY", "MONTHLY".
 *   * base_compensation: histogram by the base salary. Must specify list of
 *   numeric buckets to group results by.
 *   * annualized_base_compensation: histogram by the base annualized salary.
 *   Must specify list of numeric buckets to group results by.
 *   * annualized_total_compensation: histogram by the total annualized salary.
 *   Must specify list of numeric buckets to group results by.
 *   * string_custom_attribute: histogram by string Job.custom_attributes.
 *   Values can be accessed via square bracket notations like
 *   string_custom_attribute["key1"].
 *   * numeric_custom_attribute: histogram by numeric Job.custom_attributes.
 *   Values can be accessed via square bracket notations like
 *   numeric_custom_attribute["key1"]. Must specify list of numeric buckets to
 *   group results by.
 *
 *   Example expressions:
 *   * count(admin1)
 *   * count(base_compensation, [bucket(1000, 10000), bucket(10000, 100000),
 *   bucket(100000, MAX)])
 *   * count(string_custom_attribute["some-string-custom-attribute"])
 *   * count(numeric_custom_attribute["some-numeric-custom-attribute"],
 *   [bucket(MIN, 0, "negative"), bucket(0, MAX, "non-negative"])
 *
 *   This object should have the same structure as [HistogramQuery]{@link google.cloud.talent.v4beta1.HistogramQuery}
 *
 * @property {number} jobView
 *   Optional.
 *
 *   The desired job attributes returned for jobs in the
 *   search response. Defaults to JobView.SMALL if no value is specified.
 *
 *   The number should be among the values of [JobView]{@link google.cloud.talent.v4beta1.JobView}
 *
 * @property {number} offset
 *   Optional.
 *
 *   An integer that specifies the current offset (that is, starting result
 *   location, amongst the jobs deemed by the API as relevant) in search
 *   results. This field is only considered if page_token is unset.
 *
 *   For example, 0 means to  return results starting from the first matching
 *   job, and 10 means to return from the 11th job. This can be used for
 *   pagination, (for example, pageSize = 10 and offset = 10 means to return
 *   from the second page).
 *
 * @property {number} pageSize
 *   Optional.
 *
 *   A limit on the number of jobs returned in the search results.
 *   Increasing this value above the default value of 10 can increase search
 *   response time. The value can be between 1 and 100.
 *
 * @property {string} pageToken
 *   Optional.
 *
 *   The token specifying the current offset within
 *   search results. See SearchJobsResponse.next_page_token for
 *   an explanation of how to obtain the next set of query results.
 *
 * @property {string} orderBy
 *   Optional.
 *
 *   The criteria determining how search results are sorted. Default is
 *   "relevance desc".
 *
 *   Supported options are:
 *
 *   * "relevance desc": By relevance descending, as determined by the API
 *   algorithms. Relevance thresholding of query results is only available
 *   with this ordering.
 *   * "posting`_`publish`_`time desc": By Job.posting_publish_time
 *   descending.
 *   * "posting`_`update`_`time desc": By Job.posting_update_time
 *   descending.
 *   * "title": By Job.title ascending.
 *   * "title desc": By Job.title descending.
 *   * "annualized`_`base`_`compensation": By job's
 *   CompensationInfo.annualized_base_compensation_range ascending. Jobs
 *   whose annualized base compensation is unspecified are put at the end of
 *   search results.
 *   * "annualized`_`base`_`compensation desc": By job's
 *   CompensationInfo.annualized_base_compensation_range descending. Jobs
 *   whose annualized base compensation is unspecified are put at the end of
 *   search results.
 *   * "annualized`_`total`_`compensation": By job's
 *   CompensationInfo.annualized_total_compensation_range ascending. Jobs
 *   whose annualized base compensation is unspecified are put at the end of
 *   search results.
 *   * "annualized`_`total`_`compensation desc": By job's
 *   CompensationInfo.annualized_total_compensation_range descending. Jobs
 *   whose annualized base compensation is unspecified are put at the end of
 *   search results.
 *   * "custom`_`ranking desc": By the relevance score adjusted to the
 *   SearchJobsRequest.custom_ranking_info.ranking_expression with weight
 *   factor assigned by
 *   SearchJobsRequest.custom_ranking_info.importance_level in descending
 *   order.
 *   * "location`_`distance": By the distance between the location on jobs and
 *    locations specified in the
 *   SearchJobsRequest.job_query.location_filters.
 *   When this order is selected, the
 *   SearchJobsRequest.job_query.location_filters must not be empty. When
 *   a job has multiple locations, the location closest to one of the locations
 *   specified in the location filter will be used to calculate location
 *   distance. Distance is calculated by the distance between two lat/long
 *   coordinates, with a precision of 10e-4 degrees (11.3 meters).
 *   Jobs that don't have locations specified will be ranked below jobs having
 *   locations.
 *   Diversification strategy is still applied unless explicitly disabled in
 *   SearchJobsRequest.diversification_level.
 *
 * @property {number} diversificationLevel
 *   Optional.
 *
 *   Controls whether highly similar jobs are returned next to each other in
 *   the search results. Jobs are identified as highly similar based on
 *   their titles, job categories, and locations. Highly similar results are
 *   clustered so that only one representative job of the cluster is
 *   displayed to the job seeker higher up in the results, with the other jobs
 *   being displayed lower down in the results.
 *
 *   Defaults to DiversificationLevel.SIMPLE if no value
 *   is specified.
 *
 *   The number should be among the values of [DiversificationLevel]{@link google.cloud.talent.v4beta1.DiversificationLevel}
 *
 * @property {Object} customRankingInfo
 *   Optional.
 *
 *   Controls over how job documents get ranked on top of existing relevance
 *   score (determined by API algorithm).
 *
 *   This object should have the same structure as [CustomRankingInfo]{@link google.cloud.talent.v4beta1.CustomRankingInfo}
 *
 * @property {boolean} disableKeywordMatch
 *   Optional.
 *
 *   Controls whether to disable exact keyword match on Job.job_title,
 *   Job.description, Job.company_display_name, [Job.locations][0],
 *   Job.qualifications. When disable keyword match is turned off, a
 *   keyword match returns jobs that do not match given category filters when
 *   there are matching keywords. For example, for the query "program manager,"
 *   a result is returned even if the job posting has the title "software
 *   developer," which doesn't fall into "program manager" ontology, but does
 *   have "program manager" appearing in its description.
 *
 *   For queries like "cloud" that don't contain title or
 *   location specific ontology, jobs with "cloud" keyword matches are returned
 *   regardless of this flag's value.
 *
 *   Please use Company.keyword_searchable_custom_fields or
 *   Company.keyword_searchable_custom_attributes if company specific
 *   globally matched custom field/attribute string values is needed. Enabling
 *   keyword match improves recall of subsequent search requests.
 *
 *   Defaults to false.
 *
 * @typedef SearchJobsRequest
 * @memberof google.cloud.talent.v4beta1
 * @see [google.cloud.talent.v4beta1.SearchJobsRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/talent/v4beta1/job_service.proto}
 */
const SearchJobsRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Input only.
   *
   * Custom ranking information for SearchJobsRequest.
   *
   * @property {number} importanceLevel
   *   Required.
   *
   *   Controls over how important the score of
   *   CustomRankingInfo.ranking_expression gets applied to job's final
   *   ranking position.
   *
   *   An error is thrown if not specified.
   *
   *   The number should be among the values of [ImportanceLevel]{@link google.cloud.talent.v4beta1.ImportanceLevel}
   *
   * @property {string} rankingExpression
   *   Required.
   *
   *   Controls over how job documents get ranked on top of existing relevance
   *   score (determined by API algorithm). The product of ranking expression
   *   and relevance score is used to determine job's final ranking position.
   *
   *   The syntax for this expression is a subset of Google SQL syntax.
   *
   *   Supported operators are: +, -, *, /, where the left and right side of
   *   the operator is either a numeric Job.custom_attributes key,
   *   integer/double value or an expression that can be evaluated to a number.
   *
   *   Parenthesis are supported to adjust calculation precedence. The
   *   expression must be < 100 characters in length.
   *
   *   Sample ranking expression
   *   (year + 25) * 0.25 - (freshness / 0.5)
   *
   * @typedef CustomRankingInfo
   * @memberof google.cloud.talent.v4beta1
   * @see [google.cloud.talent.v4beta1.SearchJobsRequest.CustomRankingInfo definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/talent/v4beta1/job_service.proto}
   */
  CustomRankingInfo: {
    // This is for documentation. Actual contents will be loaded by gRPC.

    /**
     * The importance level for CustomRankingInfo.ranking_expression.
     *
     * @enum {number}
     * @memberof google.cloud.talent.v4beta1
     */
    ImportanceLevel: {

      /**
       * Default value if the importance level isn't specified.
       */
      IMPORTANCE_LEVEL_UNSPECIFIED: 0,

      /**
       * The given ranking expression is of None importance, existing relevance
       * score (determined by API algorithm) dominates job's final ranking
       * position.
       */
      NONE: 1,

      /**
       * The given ranking expression is of Low importance in terms of job's
       * final ranking position compared to existing relevance
       * score (determined by API algorithm).
       */
      LOW: 2,

      /**
       * The given ranking expression is of Mild importance in terms of job's
       * final ranking position compared to existing relevance
       * score (determined by API algorithm).
       */
      MILD: 3,

      /**
       * The given ranking expression is of Medium importance in terms of job's
       * final ranking position compared to existing relevance
       * score (determined by API algorithm).
       */
      MEDIUM: 4,

      /**
       * The given ranking expression is of High importance in terms of job's
       * final ranking position compared to existing relevance
       * score (determined by API algorithm).
       */
      HIGH: 5,

      /**
       * The given ranking expression is of Extreme importance, and dominates
       * job's final ranking position with existing relevance
       * score (determined by API algorithm) ignored.
       */
      EXTREME: 6
    }
  },

  /**
   * Controls whether highly similar jobs are returned next to each other in
   * the search results. Jobs are identified as highly similar based on
   * their titles, job categories, and locations. Highly similar results are
   * clustered so that only one representative job of the cluster is
   * displayed to the job seeker higher up in the results, with the other jobs
   * being displayed lower down in the results.
   *
   * @enum {number}
   * @memberof google.cloud.talent.v4beta1
   */
  DiversificationLevel: {

    /**
     * The diversification level isn't specified.
     */
    DIVERSIFICATION_LEVEL_UNSPECIFIED: 0,

    /**
     * Disables diversification. Jobs that would normally be pushed to the last
     * page would not have their positions altered. This may result in highly
     * similar jobs appearing in sequence in the search results.
     */
    DISABLED: 1,

    /**
     * Default diversifying behavior. The result list is ordered so that
     * highly similar results are pushed to the end of the last page of search
     * results.
     */
    SIMPLE: 2
  },

  /**
   * A string-represented enumeration of the job search mode. The service
   * operate differently for different modes of service.
   *
   * @enum {number}
   * @memberof google.cloud.talent.v4beta1
   */
  SearchMode: {

    /**
     * The mode of the search method isn't specified.
     */
    SEARCH_MODE_UNSPECIFIED: 0,

    /**
     * The job search matches against all jobs, and featured jobs
     * (jobs with promotionValue > 0) are not specially handled.
     */
    JOB_SEARCH: 1,

    /**
     * The job search matches only against featured jobs (jobs with a
     * promotionValue > 0). This method doesn't return any jobs having a
     * promotionValue <= 0. The search results order is determined by the
     * promotionValue (jobs with a higher promotionValue are returned higher up
     * in the search results), with relevance being used as a tiebreaker.
     */
    FEATURED_JOB_SEARCH: 2
  }
};

/**
 * Output only.
 *
 * Response for SearchJob method.
 *
 * @property {Object[]} matchingJobs
 *   The Job entities that match the specified SearchJobsRequest.
 *
 *   This object should have the same structure as [MatchingJob]{@link google.cloud.talent.v4beta1.MatchingJob}
 *
 * @property {Object[]} histogramQueryResults
 *   The histogram results that match with specified
 *   SearchJobsRequest.histogram_queries.
 *
 *   This object should have the same structure as [HistogramQueryResult]{@link google.cloud.talent.v4beta1.HistogramQueryResult}
 *
 * @property {string} nextPageToken
 *   The token that specifies the starting position of the next page of results.
 *   This field is empty if there are no more results.
 *
 * @property {Object[]} locationFilters
 *   The location filters that the service applied to the specified query. If
 *   any filters are lat-lng based, the JobLocation.location_type is
 *   JobLocation.LocationType#LOCATION_TYPE_UNSPECIFIED.
 *
 *   This object should have the same structure as [Location]{@link google.cloud.talent.v4beta1.Location}
 *
 * @property {number} estimatedTotalSize
 *   An estimation of the number of jobs that match the specified query.
 *
 *   This number isn't guaranteed to be accurate. For accurate results,
 *   see enable_precise_result_size.
 *
 * @property {number} totalSize
 *   The precise result count, which is available only if the client set
 *   enable_precise_result_size to `true`, or if the response
 *   is the last page of results. Otherwise, the value is `-1`.
 *
 * @property {Object} metadata
 *   Additional information for the API invocation, such as the request
 *   tracking id.
 *
 *   This object should have the same structure as [ResponseMetadata]{@link google.cloud.talent.v4beta1.ResponseMetadata}
 *
 * @property {number} broadenedQueryJobsCount
 *   If query broadening is enabled, we may append additional results from the
 *   broadened query. This number indicates how many of the jobs returned in the
 *   jobs field are from the broadened query. These results are always at the
 *   end of the jobs list. In particular, a value of 0, or if the field isn't
 *   set, all the jobs in the jobs list are from the original
 *   (without broadening) query. If this field is non-zero, subsequent requests
 *   with offset after this result set should contain all broadened results.
 *
 * @property {Object} spellCorrection
 *   The spell checking result, and correction.
 *
 *   This object should have the same structure as [SpellingCorrection]{@link google.cloud.talent.v4beta1.SpellingCorrection}
 *
 * @typedef SearchJobsResponse
 * @memberof google.cloud.talent.v4beta1
 * @see [google.cloud.talent.v4beta1.SearchJobsResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/talent/v4beta1/job_service.proto}
 */
const SearchJobsResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Output only.
   *
   * Job entry with metadata inside SearchJobsResponse.
   *
   * @property {Object} job
   *   Job resource that matches the specified SearchJobsRequest.
   *
   *   This object should have the same structure as [Job]{@link google.cloud.talent.v4beta1.Job}
   *
   * @property {string} jobSummary
   *   A summary of the job with core information that's displayed on the search
   *   results listing page.
   *
   * @property {string} jobTitleSnippet
   *   Contains snippets of text from the Job.job_title field most
   *   closely matching a search query's keywords, if available. The matching
   *   query keywords are enclosed in HTML bold tags.
   *
   * @property {string} searchTextSnippet
   *   Contains snippets of text from the Job.description and similar
   *   fields that most closely match a search query's keywords, if available.
   *   All HTML tags in the original fields are stripped when returned in this
   *   field, and matching query keywords are enclosed in HTML bold tags.
   *
   * @property {Object} commuteInfo
   *   Commute information which is generated based on specified
   *    CommuteFilter.
   *
   *   This object should have the same structure as [CommuteInfo]{@link google.cloud.talent.v4beta1.CommuteInfo}
   *
   * @typedef MatchingJob
   * @memberof google.cloud.talent.v4beta1
   * @see [google.cloud.talent.v4beta1.SearchJobsResponse.MatchingJob definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/talent/v4beta1/job_service.proto}
   */
  MatchingJob: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  },

  /**
   * Output only.
   *
   * Commute details related to this job.
   *
   * @property {Object} jobLocation
   *   Location used as the destination in the commute calculation.
   *
   *   This object should have the same structure as [Location]{@link google.cloud.talent.v4beta1.Location}
   *
   * @property {Object} travelDuration
   *   The number of seconds required to travel to the job location from the
   *   query location. A duration of 0 seconds indicates that the job isn't
   *   reachable within the requested duration, but was returned as part of an
   *   expanded query.
   *
   *   This object should have the same structure as [Duration]{@link google.protobuf.Duration}
   *
   * @typedef CommuteInfo
   * @memberof google.cloud.talent.v4beta1
   * @see [google.cloud.talent.v4beta1.SearchJobsResponse.CommuteInfo definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/talent/v4beta1/job_service.proto}
   */
  CommuteInfo: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  }
};

/**
 * An enum that specifies the job attributes that are returned in the
 * MatchingJob.Job in SearchJobsResponse or Job objects in
 * ListJobsResponse.
 *
 * @enum {number}
 * @memberof google.cloud.talent.v4beta1
 */
const JobView = {

  /**
   * Default value.
   */
  JOB_VIEW_UNSPECIFIED: 0,

  /**
   * A ID only view of job, with following attributes:
   * Job.name, Job.requisition_id, Job.language_code.
   */
  JOB_VIEW_ID_ONLY: 1,

  /**
   * A minimal view of the job, with the following attributes:
   * Job.name, Job.requisition_id, Job.job_title,
   * Job.company, Job.DerivedInfo.locations, Job.language_code.
   */
  JOB_VIEW_MINIMAL: 2,

  /**
   * A small view of the job, with the following attributes in the search
   * results: Job.name, Job.requisition_id, Job.job_title,
   * Job.company, Job.DerivedInfo.locations, Job.visibility,
   * Job.language_code, Job.description.
   */
  JOB_VIEW_SMALL: 3,

  /**
   * All available attributes are included in the search results.
   */
  JOB_VIEW_FULL: 4
};