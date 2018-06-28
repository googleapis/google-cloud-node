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
 * The `ListMonitoredResourceDescriptors` request.
 *
 * @property {string} name
 *   The project on which to execute the request. The format is
 *   `"projects/{project_id_or_number}"`.
 *
 * @property {string} filter
 *   An optional [filter](https://cloud.google.com/monitoring/api/v3/filters) describing
 *   the descriptors to be returned.  The filter can reference
 *   the descriptor's type and labels. For example, the
 *   following filter returns only Google Compute Engine descriptors
 *   that have an `id` label:
 *
 *       resource.type = starts_with("gce_") AND resource.label:id
 *
 * @property {number} pageSize
 *   A positive number that is the maximum number of results to return.
 *
 * @property {string} pageToken
 *   If this field is not empty then it must contain the `nextPageToken` value
 *   returned by a previous call to this method.  Using this field causes the
 *   method to return additional results from the previous method call.
 *
 * @typedef ListMonitoredResourceDescriptorsRequest
 * @memberof google.monitoring.v3
 * @see [google.monitoring.v3.ListMonitoredResourceDescriptorsRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/metric_service.proto}
 */
var ListMonitoredResourceDescriptorsRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The `ListMonitoredResourcDescriptors` response.
 *
 * @property {Object[]} resourceDescriptors
 *   The monitored resource descriptors that are available to this project
 *   and that match `filter`, if present.
 *
 *   This object should have the same structure as [MonitoredResourceDescriptor]{@link google.api.MonitoredResourceDescriptor}
 *
 * @property {string} nextPageToken
 *   If there are more results than have been returned, then this field is set
 *   to a non-empty value.  To see the additional results,
 *   use that value as `pageToken` in the next call to this method.
 *
 * @typedef ListMonitoredResourceDescriptorsResponse
 * @memberof google.monitoring.v3
 * @see [google.monitoring.v3.ListMonitoredResourceDescriptorsResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/metric_service.proto}
 */
var ListMonitoredResourceDescriptorsResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The `GetMonitoredResourceDescriptor` request.
 *
 * @property {string} name
 *   The monitored resource descriptor to get.  The format is
 *   `"projects/{project_id_or_number}/monitoredResourceDescriptors/{resource_type}"`.
 *   The `{resource_type}` is a predefined type, such as
 *   `cloudsql_database`.
 *
 * @typedef GetMonitoredResourceDescriptorRequest
 * @memberof google.monitoring.v3
 * @see [google.monitoring.v3.GetMonitoredResourceDescriptorRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/metric_service.proto}
 */
var GetMonitoredResourceDescriptorRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The `ListMetricDescriptors` request.
 *
 * @property {string} name
 *   The project on which to execute the request. The format is
 *   `"projects/{project_id_or_number}"`.
 *
 * @property {string} filter
 *   If this field is empty, all custom and
 *   system-defined metric descriptors are returned.
 *   Otherwise, the [filter](https://cloud.google.com/monitoring/api/v3/filters)
 *   specifies which metric descriptors are to be
 *   returned. For example, the following filter matches all
 *   [custom metrics](https://cloud.google.com/monitoring/custom-metrics):
 *
 *       metric.type = starts_with("custom.googleapis.com/")
 *
 * @property {number} pageSize
 *   A positive number that is the maximum number of results to return.
 *
 * @property {string} pageToken
 *   If this field is not empty then it must contain the `nextPageToken` value
 *   returned by a previous call to this method.  Using this field causes the
 *   method to return additional results from the previous method call.
 *
 * @typedef ListMetricDescriptorsRequest
 * @memberof google.monitoring.v3
 * @see [google.monitoring.v3.ListMetricDescriptorsRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/metric_service.proto}
 */
var ListMetricDescriptorsRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The `ListMetricDescriptors` response.
 *
 * @property {Object[]} metricDescriptors
 *   The metric descriptors that are available to the project
 *   and that match the value of `filter`, if present.
 *
 *   This object should have the same structure as [MetricDescriptor]{@link google.api.MetricDescriptor}
 *
 * @property {string} nextPageToken
 *   If there are more results than have been returned, then this field is set
 *   to a non-empty value.  To see the additional results,
 *   use that value as `pageToken` in the next call to this method.
 *
 * @typedef ListMetricDescriptorsResponse
 * @memberof google.monitoring.v3
 * @see [google.monitoring.v3.ListMetricDescriptorsResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/metric_service.proto}
 */
var ListMetricDescriptorsResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The `GetMetricDescriptor` request.
 *
 * @property {string} name
 *   The metric descriptor on which to execute the request. The format is
 *   `"projects/{project_id_or_number}/metricDescriptors/{metric_id}"`.
 *   An example value of `{metric_id}` is
 *   `"compute.googleapis.com/instance/disk/read_bytes_count"`.
 *
 * @typedef GetMetricDescriptorRequest
 * @memberof google.monitoring.v3
 * @see [google.monitoring.v3.GetMetricDescriptorRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/metric_service.proto}
 */
var GetMetricDescriptorRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The `CreateMetricDescriptor` request.
 *
 * @property {string} name
 *   The project on which to execute the request. The format is
 *   `"projects/{project_id_or_number}"`.
 *
 * @property {Object} metricDescriptor
 *   The new [custom metric](https://cloud.google.com/monitoring/custom-metrics)
 *   descriptor.
 *
 *   This object should have the same structure as [MetricDescriptor]{@link google.api.MetricDescriptor}
 *
 * @typedef CreateMetricDescriptorRequest
 * @memberof google.monitoring.v3
 * @see [google.monitoring.v3.CreateMetricDescriptorRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/metric_service.proto}
 */
var CreateMetricDescriptorRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The `DeleteMetricDescriptor` request.
 *
 * @property {string} name
 *   The metric descriptor on which to execute the request. The format is
 *   `"projects/{project_id_or_number}/metricDescriptors/{metric_id}"`.
 *   An example of `{metric_id}` is:
 *   `"custom.googleapis.com/my_test_metric"`.
 *
 * @typedef DeleteMetricDescriptorRequest
 * @memberof google.monitoring.v3
 * @see [google.monitoring.v3.DeleteMetricDescriptorRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/metric_service.proto}
 */
var DeleteMetricDescriptorRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The `ListTimeSeries` request.
 *
 * @property {string} name
 *   The project on which to execute the request. The format is
 *   "projects/{project_id_or_number}".
 *
 * @property {string} filter
 *   A [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters) that specifies which time
 *   series should be returned.  The filter must specify a single metric type,
 *   and can additionally specify metric labels and other information. For
 *   example:
 *
 *       metric.type = "compute.googleapis.com/instance/cpu/usage_time" AND
 *           metric.label.instance_name = "my-instance-name"
 *
 * @property {Object} interval
 *   The time interval for which results should be returned. Only time series
 *   that contain data points in the specified interval are included
 *   in the response.
 *
 *   This object should have the same structure as [TimeInterval]{@link google.monitoring.v3.TimeInterval}
 *
 * @property {Object} aggregation
 *   By default, the raw time series data is returned.
 *   Use this field to combine multiple time series for different
 *   views of the data.
 *
 *   This object should have the same structure as [Aggregation]{@link google.monitoring.v3.Aggregation}
 *
 * @property {string} orderBy
 *   Specifies the order in which the points of the time series should
 *   be returned.  By default, results are not ordered.  Currently,
 *   this field must be left blank.
 *
 * @property {number} view
 *   Specifies which information is returned about the time series.
 *
 *   The number should be among the values of [TimeSeriesView]{@link google.monitoring.v3.TimeSeriesView}
 *
 * @property {number} pageSize
 *   A positive number that is the maximum number of results to return.
 *   When `view` field sets to `FULL`, it limits the number of `Points` server
 *   will return; if `view` field is `HEADERS`, it limits the number of
 *   `TimeSeries` server will return.
 *
 * @property {string} pageToken
 *   If this field is not empty then it must contain the `nextPageToken` value
 *   returned by a previous call to this method.  Using this field causes the
 *   method to return additional results from the previous method call.
 *
 * @typedef ListTimeSeriesRequest
 * @memberof google.monitoring.v3
 * @see [google.monitoring.v3.ListTimeSeriesRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/metric_service.proto}
 */
var ListTimeSeriesRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Controls which fields are returned by `ListTimeSeries`.
   *
   * @enum {number}
   * @memberof google.monitoring.v3
   */
  TimeSeriesView: {

    /**
     * Returns the identity of the metric(s), the time series,
     * and the time series data.
     */
    FULL: 0,

    /**
     * Returns the identity of the metric and the time series resource,
     * but not the time series data.
     */
    HEADERS: 1
  }
};

/**
 * The `ListTimeSeries` response.
 *
 * @property {Object[]} timeSeries
 *   One or more time series that match the filter included in the request.
 *
 *   This object should have the same structure as [TimeSeries]{@link google.monitoring.v3.TimeSeries}
 *
 * @property {string} nextPageToken
 *   If there are more results than have been returned, then this field is set
 *   to a non-empty value.  To see the additional results,
 *   use that value as `pageToken` in the next call to this method.
 *
 * @typedef ListTimeSeriesResponse
 * @memberof google.monitoring.v3
 * @see [google.monitoring.v3.ListTimeSeriesResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/metric_service.proto}
 */
var ListTimeSeriesResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The `CreateTimeSeries` request.
 *
 * @property {string} name
 *   The project on which to execute the request. The format is
 *   `"projects/{project_id_or_number}"`.
 *
 * @property {Object[]} timeSeries
 *   The new data to be added to a list of time series.
 *   Adds at most one data point to each of several time series.  The new data
 *   point must be more recent than any other point in its time series.  Each
 *   `TimeSeries` value must fully specify a unique time series by supplying
 *   all label values for the metric and the monitored resource.
 *
 *   This object should have the same structure as [TimeSeries]{@link google.monitoring.v3.TimeSeries}
 *
 * @typedef CreateTimeSeriesRequest
 * @memberof google.monitoring.v3
 * @see [google.monitoring.v3.CreateTimeSeriesRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/metric_service.proto}
 */
var CreateTimeSeriesRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Describes the result of a failed request to write data to a time series.
 *
 * @property {Object} timeSeries
 *   The time series, including the `Metric`, `MonitoredResource`,
 *   and `Point`s (including timestamp and value) that resulted
 *   in the error. This field provides all of the context that
 *   would be needed to retry the operation.
 *
 *   This object should have the same structure as [TimeSeries]{@link google.monitoring.v3.TimeSeries}
 *
 * @property {Object} status
 *   The status of the requested write operation.
 *
 *   This object should have the same structure as [Status]{@link google.rpc.Status}
 *
 * @typedef CreateTimeSeriesError
 * @memberof google.monitoring.v3
 * @see [google.monitoring.v3.CreateTimeSeriesError definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/metric_service.proto}
 */
var CreateTimeSeriesError = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};