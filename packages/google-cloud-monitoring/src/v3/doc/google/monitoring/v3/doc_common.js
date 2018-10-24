// Copyright 2018 Google LLC
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
 * A single strongly-typed value.
 *
 * @property {boolean} boolValue
 *   A Boolean value: `true` or `false`.
 *
 * @property {number} int64Value
 *   A 64-bit integer. Its range is approximately &plusmn;9.2x10<sup>18</sup>.
 *
 * @property {number} doubleValue
 *   A 64-bit double-precision floating-point number. Its magnitude
 *   is approximately &plusmn;10<sup>&plusmn;300</sup> and it has 16
 *   significant digits of precision.
 *
 * @property {string} stringValue
 *   A variable-length string value.
 *
 * @property {Object} distributionValue
 *   A distribution value.
 *
 *   This object should have the same structure as [Distribution]{@link google.api.Distribution}
 *
 * @typedef TypedValue
 * @memberof google.monitoring.v3
 * @see [google.monitoring.v3.TypedValue definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/common.proto}
 */
const TypedValue = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A time interval extending just after a start time through an end time.
 * If the start time is the same as the end time, then the interval
 * represents a single point in time.
 *
 * @property {Object} endTime
 *   Required. The end of the time interval.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {Object} startTime
 *   Optional. The beginning of the time interval.  The default value
 *   for the start time is the end time. The start time must not be
 *   later than the end time.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @typedef TimeInterval
 * @memberof google.monitoring.v3
 * @see [google.monitoring.v3.TimeInterval definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/common.proto}
 */
const TimeInterval = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Describes how to combine multiple time series to provide different views of
 * the data.  Aggregation consists of an alignment step on individual time
 * series (`alignment_period` and `per_series_aligner`) followed by an optional
 * reduction step of the data across the aligned time series
 * (`cross_series_reducer` and `group_by_fields`).  For more details, see
 * [Aggregation](https://cloud.google.com/monitoring/api/learn_more#aggregation).
 *
 * @property {Object} alignmentPeriod
 *   The alignment period for per-time series
 *   alignment. If present, `alignmentPeriod` must be at least 60
 *   seconds.  After per-time series alignment, each time series will
 *   contain data points only on the period boundaries. If
 *   `perSeriesAligner` is not specified or equals `ALIGN_NONE`, then
 *   this field is ignored. If `perSeriesAligner` is specified and
 *   does not equal `ALIGN_NONE`, then this field must be defined;
 *   otherwise an error is returned.
 *
 *   This object should have the same structure as [Duration]{@link google.protobuf.Duration}
 *
 * @property {number} perSeriesAligner
 *   The approach to be used to align individual time series. Not all
 *   alignment functions may be applied to all time series, depending
 *   on the metric type and value type of the original time
 *   series. Alignment may change the metric type or the value type of
 *   the time series.
 *
 *   Time series data must be aligned in order to perform cross-time
 *   series reduction. If `crossSeriesReducer` is specified, then
 *   `perSeriesAligner` must be specified and not equal `ALIGN_NONE`
 *   and `alignmentPeriod` must be specified; otherwise, an error is
 *   returned.
 *
 *   The number should be among the values of [Aligner]{@link google.monitoring.v3.Aligner}
 *
 * @property {number} crossSeriesReducer
 *   The approach to be used to combine time series. Not all reducer
 *   functions may be applied to all time series, depending on the
 *   metric type and the value type of the original time
 *   series. Reduction may change the metric type of value type of the
 *   time series.
 *
 *   Time series data must be aligned in order to perform cross-time
 *   series reduction. If `crossSeriesReducer` is specified, then
 *   `perSeriesAligner` must be specified and not equal `ALIGN_NONE`
 *   and `alignmentPeriod` must be specified; otherwise, an error is
 *   returned.
 *
 *   The number should be among the values of [Reducer]{@link google.monitoring.v3.Reducer}
 *
 * @property {string[]} groupByFields
 *   The set of fields to preserve when `crossSeriesReducer` is
 *   specified. The `groupByFields` determine how the time series are
 *   partitioned into subsets prior to applying the aggregation
 *   function. Each subset contains time series that have the same
 *   value for each of the grouping fields. Each individual time
 *   series is a member of exactly one subset. The
 *   `crossSeriesReducer` is applied to each subset of time series.
 *   It is not possible to reduce across different resource types, so
 *   this field implicitly contains `resource.type`.  Fields not
 *   specified in `groupByFields` are aggregated away.  If
 *   `groupByFields` is not specified and all the time series have
 *   the same resource type, then the time series are aggregated into
 *   a single output time series. If `crossSeriesReducer` is not
 *   defined, this field is ignored.
 *
 * @typedef Aggregation
 * @memberof google.monitoring.v3
 * @see [google.monitoring.v3.Aggregation definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/common.proto}
 */
const Aggregation = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * The Aligner describes how to bring the data points in a single
   * time series into temporal alignment.
   *
   * @enum {number}
   * @memberof google.monitoring.v3
   */
  Aligner: {

    /**
     * No alignment. Raw data is returned. Not valid if cross-time
     * series reduction is requested. The value type of the result is
     * the same as the value type of the input.
     */
    ALIGN_NONE: 0,

    /**
     * Align and convert to delta metric type. This alignment is valid
     * for cumulative metrics and delta metrics. Aligning an existing
     * delta metric to a delta metric requires that the alignment
     * period be increased. The value type of the result is the same
     * as the value type of the input.
     *
     * One can think of this aligner as a rate but without time units; that
     * is, the output is conceptually (second_point - first_point).
     */
    ALIGN_DELTA: 1,

    /**
     * Align and convert to a rate. This alignment is valid for
     * cumulative metrics and delta metrics with numeric values. The output is a
     * gauge metric with value type
     * DOUBLE.
     *
     * One can think of this aligner as conceptually providing the slope of
     * the line that passes through the value at the start and end of the
     * window. In other words, this is conceptually ((y1 - y0)/(t1 - t0)),
     * and the output unit is one that has a "/time" dimension.
     *
     * If, by rate, you are looking for percentage change, see the
     * `ALIGN_PERCENT_CHANGE` aligner option.
     */
    ALIGN_RATE: 2,

    /**
     * Align by interpolating between adjacent points around the
     * period boundary. This alignment is valid for gauge
     * metrics with numeric values. The value type of the result is the same
     * as the value type of the input.
     */
    ALIGN_INTERPOLATE: 3,

    /**
     * Align by shifting the oldest data point before the period
     * boundary to the boundary. This alignment is valid for gauge
     * metrics. The value type of the result is the same as the
     * value type of the input.
     */
    ALIGN_NEXT_OLDER: 4,

    /**
     * Align time series via aggregation. The resulting data point in
     * the alignment period is the minimum of all data points in the
     * period. This alignment is valid for gauge and delta metrics with numeric
     * values. The value type of the result is the same as the value
     * type of the input.
     */
    ALIGN_MIN: 10,

    /**
     * Align time series via aggregation. The resulting data point in
     * the alignment period is the maximum of all data points in the
     * period. This alignment is valid for gauge and delta metrics with numeric
     * values. The value type of the result is the same as the value
     * type of the input.
     */
    ALIGN_MAX: 11,

    /**
     * Align time series via aggregation. The resulting data point in
     * the alignment period is the average or arithmetic mean of all
     * data points in the period. This alignment is valid for gauge and delta
     * metrics with numeric values. The value type of the output is
     * DOUBLE.
     */
    ALIGN_MEAN: 12,

    /**
     * Align time series via aggregation. The resulting data point in
     * the alignment period is the count of all data points in the
     * period. This alignment is valid for gauge and delta metrics with numeric
     * or Boolean values. The value type of the output is
     * INT64.
     */
    ALIGN_COUNT: 13,

    /**
     * Align time series via aggregation. The resulting data point in
     * the alignment period is the sum of all data points in the
     * period. This alignment is valid for gauge and delta metrics with numeric
     * and distribution values. The value type of the output is the
     * same as the value type of the input.
     */
    ALIGN_SUM: 14,

    /**
     * Align time series via aggregation. The resulting data point in
     * the alignment period is the standard deviation of all data
     * points in the period. This alignment is valid for gauge and delta metrics
     * with numeric values. The value type of the output is
     * DOUBLE.
     */
    ALIGN_STDDEV: 15,

    /**
     * Align time series via aggregation. The resulting data point in
     * the alignment period is the count of True-valued data points in the
     * period. This alignment is valid for gauge metrics with
     * Boolean values. The value type of the output is
     * INT64.
     */
    ALIGN_COUNT_TRUE: 16,

    /**
     * Align time series via aggregation. The resulting data point in
     * the alignment period is the count of False-valued data points in the
     * period. This alignment is valid for gauge metrics with
     * Boolean values. The value type of the output is
     * INT64.
     */
    ALIGN_COUNT_FALSE: 24,

    /**
     * Align time series via aggregation. The resulting data point in
     * the alignment period is the fraction of True-valued data points in the
     * period. This alignment is valid for gauge metrics with Boolean values.
     * The output value is in the range [0, 1] and has value type
     * DOUBLE.
     */
    ALIGN_FRACTION_TRUE: 17,

    /**
     * Align time series via aggregation. The resulting data point in
     * the alignment period is the 99th percentile of all data
     * points in the period. This alignment is valid for gauge and delta metrics
     * with distribution values. The output is a gauge metric with value type
     * DOUBLE.
     */
    ALIGN_PERCENTILE_99: 18,

    /**
     * Align time series via aggregation. The resulting data point in
     * the alignment period is the 95th percentile of all data
     * points in the period. This alignment is valid for gauge and delta metrics
     * with distribution values. The output is a gauge metric with value type
     * DOUBLE.
     */
    ALIGN_PERCENTILE_95: 19,

    /**
     * Align time series via aggregation. The resulting data point in
     * the alignment period is the 50th percentile of all data
     * points in the period. This alignment is valid for gauge and delta metrics
     * with distribution values. The output is a gauge metric with value type
     * DOUBLE.
     */
    ALIGN_PERCENTILE_50: 20,

    /**
     * Align time series via aggregation. The resulting data point in
     * the alignment period is the 5th percentile of all data
     * points in the period. This alignment is valid for gauge and delta metrics
     * with distribution values. The output is a gauge metric with value type
     * DOUBLE.
     */
    ALIGN_PERCENTILE_05: 21,

    /**
     * Align and convert to a percentage change. This alignment is valid for
     * gauge and delta metrics with numeric values. This alignment conceptually
     * computes the equivalent of "((current - previous)/previous)*100"
     * where previous value is determined based on the alignmentPeriod.
     * In the event that previous is 0 the calculated value is infinity with the
     * exception that if both (current - previous) and previous are 0 the
     * calculated value is 0.
     * A 10 minute moving mean is computed at each point of the time window
     * prior to the above calculation to smooth the metric and prevent false
     * positives from very short lived spikes.
     * Only applicable for data that is >= 0. Any values < 0 are treated as
     * no data. While delta metrics are accepted by this alignment special care
     * should be taken that the values for the metric will always be positive.
     * The output is a gauge metric with value type
     * DOUBLE.
     */
    ALIGN_PERCENT_CHANGE: 23
  },

  /**
   * A Reducer describes how to aggregate data points from multiple
   * time series into a single time series.
   *
   * @enum {number}
   * @memberof google.monitoring.v3
   */
  Reducer: {

    /**
     * No cross-time series reduction. The output of the aligner is
     * returned.
     */
    REDUCE_NONE: 0,

    /**
     * Reduce by computing the mean across time series for each
     * alignment period. This reducer is valid for delta and
     * gauge metrics with numeric or distribution values. The value type of the
     * output is DOUBLE.
     */
    REDUCE_MEAN: 1,

    /**
     * Reduce by computing the minimum across time series for each
     * alignment period. This reducer is valid for delta and
     * gauge metrics with numeric values. The value type of the output
     * is the same as the value type of the input.
     */
    REDUCE_MIN: 2,

    /**
     * Reduce by computing the maximum across time series for each
     * alignment period. This reducer is valid for delta and
     * gauge metrics with numeric values. The value type of the output
     * is the same as the value type of the input.
     */
    REDUCE_MAX: 3,

    /**
     * Reduce by computing the sum across time series for each
     * alignment period. This reducer is valid for delta and
     * gauge metrics with numeric and distribution values. The value type of
     * the output is the same as the value type of the input.
     */
    REDUCE_SUM: 4,

    /**
     * Reduce by computing the standard deviation across time series
     * for each alignment period. This reducer is valid for delta
     * and gauge metrics with numeric or distribution values. The value type of
     * the output is DOUBLE.
     */
    REDUCE_STDDEV: 5,

    /**
     * Reduce by computing the count of data points across time series
     * for each alignment period. This reducer is valid for delta
     * and gauge metrics of numeric, Boolean, distribution, and string value
     * type. The value type of the output is
     * INT64.
     */
    REDUCE_COUNT: 6,

    /**
     * Reduce by computing the count of True-valued data points across time
     * series for each alignment period. This reducer is valid for delta
     * and gauge metrics of Boolean value type. The value type of
     * the output is INT64.
     */
    REDUCE_COUNT_TRUE: 7,

    /**
     * Reduce by computing the count of False-valued data points across time
     * series for each alignment period. This reducer is valid for delta
     * and gauge metrics of Boolean value type. The value type of
     * the output is INT64.
     */
    REDUCE_COUNT_FALSE: 15,

    /**
     * Reduce by computing the fraction of True-valued data points across time
     * series for each alignment period. This reducer is valid for delta
     * and gauge metrics of Boolean value type. The output value is in the
     * range [0, 1] and has value type
     * DOUBLE.
     */
    REDUCE_FRACTION_TRUE: 8,

    /**
     * Reduce by computing 99th percentile of data points across time series
     * for each alignment period. This reducer is valid for gauge and delta
     * metrics of numeric and distribution type. The value of the output is
     * DOUBLE
     */
    REDUCE_PERCENTILE_99: 9,

    /**
     * Reduce by computing 95th percentile of data points across time series
     * for each alignment period. This reducer is valid for gauge and delta
     * metrics of numeric and distribution type. The value of the output is
     * DOUBLE
     */
    REDUCE_PERCENTILE_95: 10,

    /**
     * Reduce by computing 50th percentile of data points across time series
     * for each alignment period. This reducer is valid for gauge and delta
     * metrics of numeric and distribution type. The value of the output is
     * DOUBLE
     */
    REDUCE_PERCENTILE_50: 11,

    /**
     * Reduce by computing 5th percentile of data points across time series
     * for each alignment period. This reducer is valid for gauge and delta
     * metrics of numeric and distribution type. The value of the output is
     * DOUBLE
     */
    REDUCE_PERCENTILE_05: 12
  }
};

/**
 * Specifies an ordering relationship on two arguments, here called left and
 * right.
 *
 * @enum {number}
 * @memberof google.monitoring.v3
 */
const ComparisonType = {

  /**
   * No ordering relationship is specified.
   */
  COMPARISON_UNSPECIFIED: 0,

  /**
   * The left argument is greater than the right argument.
   */
  COMPARISON_GT: 1,

  /**
   * The left argument is greater than or equal to the right argument.
   */
  COMPARISON_GE: 2,

  /**
   * The left argument is less than the right argument.
   */
  COMPARISON_LT: 3,

  /**
   * The left argument is less than or equal to the right argument.
   */
  COMPARISON_LE: 4,

  /**
   * The left argument is equal to the right argument.
   */
  COMPARISON_EQ: 5,

  /**
   * The left argument is not equal to the right argument.
   */
  COMPARISON_NE: 6
};

/**
 * The tier of service for a Stackdriver account. Please see the
 * [service tiers documentation](https://cloud.google.com/monitoring/accounts/tiers)
 * for more details.
 *
 * @enum {number}
 * @memberof google.monitoring.v3
 */
const ServiceTier = {

  /**
   * An invalid sentinel value, used to indicate that a tier has not
   * been provided explicitly.
   */
  SERVICE_TIER_UNSPECIFIED: 0,

  /**
   * The Stackdriver Basic tier, a free tier of service that provides basic
   * features, a moderate allotment of logs, and access to built-in metrics.
   * A number of features are not available in this tier. For more details,
   * see [the service tiers documentation](https://cloud.google.com/monitoring/accounts/tiers).
   */
  SERVICE_TIER_BASIC: 1,

  /**
   * The Stackdriver Premium tier, a higher, more expensive tier of service
   * that provides access to all Stackdriver features, lets you use Stackdriver
   * with AWS accounts, and has a larger allotments for logs and metrics. For
   * more details, see [the service tiers documentation](https://cloud.google.com/monitoring/accounts/tiers).
   */
  SERVICE_TIER_PREMIUM: 2
};