// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

function main() {
  // [START analyticsdata_v1beta_generated_BetaAnalyticsData_RunReport_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  A Google Analytics GA4 property identifier whose events are tracked.
   *  Specified in the URL path and not the body. To learn more, see [where to
   *  find your Property
   *  ID](https://developers.google.com/analytics/devguides/reporting/data/v1/property-id).
   *  Within a batch request, this property should either be unspecified or
   *  consistent with the batch-level property.
   *  Example: properties/1234
   */
  // const property = 'abc123'
  /**
   *  The dimensions requested and displayed.
   */
  // const dimensions = 1234
  /**
   *  The metrics requested and displayed.
   */
  // const metrics = 1234
  /**
   *  Date ranges of data to read. If multiple date ranges are requested, each
   *  response row will contain a zero based date range index. If two date
   *  ranges overlap, the event data for the overlapping days is included in the
   *  response rows for both date ranges. In a cohort request, this `dateRanges`
   *  must be unspecified.
   */
  // const dateRanges = 1234
  /**
   *  Dimension filters allow you to ask for only specific dimension values in
   *  the report. To learn more, see [Fundamentals of Dimension
   *  Filters](https://developers.google.com/analytics/devguides/reporting/data/v1/basics#dimension_filters)
   *  for examples. Metrics cannot be used in this filter.
   */
  // const dimensionFilter = ''
  /**
   *  The filter clause of metrics. Applied at post aggregation phase, similar to
   *  SQL having-clause. Dimensions cannot be used in this filter.
   */
  // const metricFilter = ''
  /**
   *  The row count of the start row. The first row is counted as row 0.
   *  When paging, the first request does not specify offset; or equivalently,
   *  sets offset to 0; the first request returns the first `limit` of rows. The
   *  second request sets offset to the `limit` of the first request; the second
   *  request returns the second `limit` of rows.
   *  To learn more about this pagination parameter, see
   *  [Pagination](https://developers.google.com/analytics/devguides/reporting/data/v1/basics#pagination).
   */
  // const offset = 1234
  /**
   *  The number of rows to return. If unspecified, 10,000 rows are returned. The
   *  API returns a maximum of 100,000 rows per request, no matter how many you
   *  ask for. `limit` must be positive.
   *  The API can also return fewer rows than the requested `limit`, if there
   *  aren't as many dimension values as the `limit`. For instance, there are
   *  fewer than 300 possible values for the dimension `country`, so when
   *  reporting on only `country`, you can't get more than 300 rows, even if you
   *  set `limit` to a higher value.
   *  To learn more about this pagination parameter, see
   *  [Pagination](https://developers.google.com/analytics/devguides/reporting/data/v1/basics#pagination).
   */
  // const limit = 1234
  /**
   *  Aggregation of metrics. Aggregated metric values will be shown in rows
   *  where the dimension_values are set to "RESERVED_(MetricAggregation)".
   */
  // const metricAggregations = 1234
  /**
   *  Specifies how rows are ordered in the response.
   */
  // const orderBys = 1234
  /**
   *  A currency code in ISO4217 format, such as "AED", "USD", "JPY".
   *  If the field is empty, the report uses the property's default currency.
   */
  // const currencyCode = 'abc123'
  /**
   *  Cohort group associated with this request. If there is a cohort group
   *  in the request the 'cohort' dimension must be present.
   */
  // const cohortSpec = ''
  /**
   *  If false or unspecified, each row with all metrics equal to 0 will not be
   *  returned. If true, these rows will be returned if they are not separately
   *  removed by a filter.
   */
  // const keepEmptyRows = true
  /**
   *  Toggles whether to return the current state of this Analytics Property's
   *  quota. Quota is returned in [PropertyQuota](#PropertyQuota).
   */
  // const returnPropertyQuota = true

  // Imports the Data library
  const {BetaAnalyticsDataClient} = require('@google-analytics/data').v1beta;

  // Instantiates a client
  const dataClient = new BetaAnalyticsDataClient();

  async function runReport() {
    // Construct request
    const request = {};

    // Run request
    const response = await dataClient.runReport(request);
    console.log(response);
  }

  runReport();
  // [END analyticsdata_v1beta_generated_BetaAnalyticsData_RunReport_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
