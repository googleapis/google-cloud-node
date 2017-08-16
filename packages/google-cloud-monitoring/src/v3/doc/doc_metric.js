/*
 * Copyright 2017, Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*
 * Note: this file is purely for documentation. Any contents are not expected
 * to be loaded as the JS file.
 */

/**
 * A single data point in a time series.
 *
 * @property {Object} interval
 *   The time interval to which the data point applies.  For GAUGE metrics, only
 *   the end time of the interval is used.  For DELTA metrics, the start and end
 *   time should specify a non-zero interval, with subsequent points specifying
 *   contiguous and non-overlapping intervals.  For CUMULATIVE metrics, the
 *   start and end time should specify a non-zero interval, with subsequent
 *   points specifying the same start time and increasing end times, until an
 *   event resets the cumulative value to zero and sets a new start time for the
 *   following points.
 *
 *   This object should have the same structure as [TimeInterval]{@link TimeInterval}
 *
 * @property {Object} value
 *   The value of the data point.
 *
 *   This object should have the same structure as [TypedValue]{@link TypedValue}
 *
 * @class
 * @see [google.monitoring.v3.Point definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/metric.proto}
 */
var Point = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A collection of data points that describes the time-varying values
 * of a metric. A time series is identified by a combination of a
 * fully-specified monitored resource and a fully-specified metric.
 * This type is used for both listing and creating time series.
 *
 * @property {Object} metric
 *   The associated metric. A fully-specified metric used to identify the time
 *   series.
 *
 *   This object should have the same structure as [google.api.Metric]{@link external:"google.api.Metric"}
 *
 * @property {Object} resource
 *   The associated resource. A fully-specified monitored resource used to
 *   identify the time series.
 *
 *   This object should have the same structure as [google.api.MonitoredResource]{@link external:"google.api.MonitoredResource"}
 *
 * @property {number} metricKind
 *   The metric kind of the time series. When listing time series, this metric
 *   kind might be different from the metric kind of the associated metric if
 *   this time series is an alignment or reduction of other time series.
 *
 *   When creating a time series, this field is optional. If present, it must be
 *   the same as the metric kind of the associated metric. If the associated
 *   metric's descriptor must be auto-created, then this field specifies the
 *   metric kind of the new descriptor and must be either `GAUGE` (the default)
 *   or `CUMULATIVE`.
 *
 *   The number should be among the values of [google.api.MetricDescriptor.MetricKind]{@link external:"google.api.MetricDescriptor.MetricKind"}
 *
 * @property {number} valueType
 *   The value type of the time series. When listing time series, this value
 *   type might be different from the value type of the associated metric if
 *   this time series is an alignment or reduction of other time series.
 *
 *   When creating a time series, this field is optional. If present, it must be
 *   the same as the type of the data in the `points` field.
 *
 *   The number should be among the values of [google.api.MetricDescriptor.ValueType]{@link external:"google.api.MetricDescriptor.ValueType"}
 *
 * @property {Object[]} points
 *   The data points of this time series. When listing time series, the order of
 *   the points is specified by the list method.
 *
 *   When creating a time series, this field must contain exactly one point and
 *   the point's type must be the same as the value type of the associated
 *   metric. If the associated metric's descriptor must be auto-created, then
 *   the value type of the descriptor is determined by the point's type, which
 *   must be `BOOL`, `INT64`, `DOUBLE`, or `DISTRIBUTION`.
 *
 *   This object should have the same structure as [Point]{@link Point}
 *
 * @class
 * @see [google.monitoring.v3.TimeSeries definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/metric.proto}
 */
var TimeSeries = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};