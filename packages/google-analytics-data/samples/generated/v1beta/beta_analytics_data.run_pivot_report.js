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
  // [START analyticsdata_v1beta_generated_BetaAnalyticsData_RunPivotReport_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  A Google Analytics GA4 property identifier whose events are tracked.
   *  Specified in the URL path and not the body. To learn more, see where to
   *  find your Property
   *  ID (https://developers.google.com/analytics/devguides/reporting/data/v1/property-id).
   *  Within a batch request, this property should either be unspecified or
   *  consistent with the batch-level property.
   *  Example: properties/1234
   */
  // const property = 'abc123'
  /**
   *  The dimensions requested. All defined dimensions must be used by one of the
   *  following: dimension_expression, dimension_filter, pivots, order_bys.
   */
  // const dimensions = 1234
  /**
   *  The metrics requested, at least one metric needs to be specified. All
   *  defined metrics must be used by one of the following: metric_expression,
   *  metric_filter, order_bys.
   */
  // const metrics = 1234
  /**
   *  The date range to retrieve event data for the report. If multiple date
   *  ranges are specified, event data from each date range is used in the
   *  report. A special dimension with field name "dateRange" can be included in
   *  a Pivot's field names; if included, the report compares between date
   *  ranges. In a cohort request, this `dateRanges` must be unspecified.
   */
  // const dateRanges = 1234
  /**
   *  Describes the visual format of the report's dimensions in columns or rows.
   *  The union of the fieldNames (dimension names) in all pivots must be a
   *  subset of dimension names defined in Dimensions. No two pivots can share a
   *  dimension. A dimension is only visible if it appears in a pivot.
   */
  // const pivots = 1234
  /**
   *  The filter clause of dimensions. Dimensions must be requested to be used in
   *  this filter. Metrics cannot be used in this filter.
   */
  // const dimensionFilter = {}
  /**
   *  The filter clause of metrics. Applied at post aggregation phase, similar to
   *  SQL having-clause. Metrics must be requested to be used in this filter.
   *  Dimensions cannot be used in this filter.
   */
  // const metricFilter = {}
  /**
   *  A currency code in ISO4217 format, such as "AED", "USD", "JPY".
   *  If the field is empty, the report uses the property's default currency.
   */
  // const currencyCode = 'abc123'
  /**
   *  Cohort group associated with this request. If there is a cohort group
   *  in the request the 'cohort' dimension must be present.
   */
  // const cohortSpec = {}
  /**
   *  If false or unspecified, each row with all metrics equal to 0 will not be
   *  returned. If true, these rows will be returned if they are not separately
   *  removed by a filter.
   */
  // const keepEmptyRows = true
  /**
   *  Toggles whether to return the current state of this Analytics Property's
   *  quota. Quota is returned in PropertyQuota (#PropertyQuota).
   */
  // const returnPropertyQuota = true

  // Imports the Data library
  const {BetaAnalyticsDataClient} = require('@google-analytics/data').v1beta;

  // Instantiates a client
  const dataClient = new BetaAnalyticsDataClient();

  async function callRunPivotReport() {
    // Construct request
    const request = {
    };

    // Run request
    const response = await dataClient.runPivotReport(request);
    console.log(response);
  }

  callRunPivotReport();
  // [END analyticsdata_v1beta_generated_BetaAnalyticsData_RunPivotReport_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
