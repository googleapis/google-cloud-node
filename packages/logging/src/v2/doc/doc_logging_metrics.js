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
 * Describes a logs-based metric.  The value of the metric is the
 * number of log entries that match a logs filter in a given time interval.
 *
 * @property {string} name
 *   Required. The client-assigned metric identifier.
 *   Examples: `"error_count"`, `"nginx/requests"`.
 *
 *   Metric identifiers are limited to 100 characters and can include
 *   only the following characters: `A-Z`, `a-z`, `0-9`, and the
 *   special characters `_-.,+!*',()%/`.  The forward-slash character
 *   (`/`) denotes a hierarchy of name pieces, and it cannot be the
 *   first character of the name.
 *
 *   The metric identifier in this field must not be
 *   [URL-encoded](https://en.wikipedia.org/wiki/Percent-encoding).
 *   However, when the metric identifier appears as the `[METRIC_ID]`
 *   part of a `metric_name` API parameter, then the metric identifier
 *   must be URL-encoded. Example:
 *   `"projects/my-project/metrics/nginx%2Frequests"`.
 *
 * @property {string} description
 *   Optional. A description of this metric, which is used in documentation.
 *
 * @property {string} filter
 *   Required. An [advanced logs filter](https://cloud.google.com/logging/docs/view/advanced_filters)
 *   which is used to match log entries.
 *   Example:
 *
 *       "resource.type=gae_app AND severity>=ERROR"
 *
 *   The maximum length of the filter is 20000 characters.
 *
 * @property {number} version
 *   Output only. The API version that created or updated this metric.
 *   The version also dictates the syntax of the filter expression. When a value
 *   for this field is missing, the default value of V2 should be assumed.
 *
 *   The number should be among the values of [ApiVersion]{@link ApiVersion}
 *
 * @class
 * @see [google.logging.v2.LogMetric definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/logging/v2/logging_metrics.proto}
 */
var LogMetric = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Stackdriver Logging API version.
   *
   * @enum {number}
   */
  ApiVersion: {

    /**
     * Stackdriver Logging API v2.
     */
    V2: 0,

    /**
     * Stackdriver Logging API v1.
     */
    V1: 1
  }
};

/**
 * The parameters to ListLogMetrics.
 *
 * @property {string} parent
 *   Required. The name of the project containing the metrics:
 *
 *       "projects/[PROJECT_ID]"
 *
 * @property {string} pageToken
 *   Optional. If present, then retrieve the next batch of results from the
 *   preceding call to this method.  `pageToken` must be the value of
 *   `nextPageToken` from the previous response.  The values of other method
 *   parameters should be identical to those in the previous call.
 *
 * @property {number} pageSize
 *   Optional. The maximum number of results to return from this request.
 *   Non-positive values are ignored.  The presence of `nextPageToken` in the
 *   response indicates that more results might be available.
 *
 * @class
 * @see [google.logging.v2.ListLogMetricsRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/logging/v2/logging_metrics.proto}
 */
var ListLogMetricsRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Result returned from ListLogMetrics.
 *
 * @property {Object[]} metrics
 *   A list of logs-based metrics.
 *
 *   This object should have the same structure as [LogMetric]{@link LogMetric}
 *
 * @property {string} nextPageToken
 *   If there might be more results than appear in this response, then
 *   `nextPageToken` is included.  To get the next set of results, call this
 *   method again using the value of `nextPageToken` as `pageToken`.
 *
 * @class
 * @see [google.logging.v2.ListLogMetricsResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/logging/v2/logging_metrics.proto}
 */
var ListLogMetricsResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The parameters to GetLogMetric.
 *
 * @property {string} metricName
 *   The resource name of the desired metric:
 *
 *       "projects/[PROJECT_ID]/metrics/[METRIC_ID]"
 *
 * @class
 * @see [google.logging.v2.GetLogMetricRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/logging/v2/logging_metrics.proto}
 */
var GetLogMetricRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The parameters to CreateLogMetric.
 *
 * @property {string} parent
 *   The resource name of the project in which to create the metric:
 *
 *       "projects/[PROJECT_ID]"
 *
 *   The new metric must be provided in the request.
 *
 * @property {Object} metric
 *   The new logs-based metric, which must not have an identifier that
 *   already exists.
 *
 *   This object should have the same structure as [LogMetric]{@link LogMetric}
 *
 * @class
 * @see [google.logging.v2.CreateLogMetricRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/logging/v2/logging_metrics.proto}
 */
var CreateLogMetricRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The parameters to UpdateLogMetric.
 *
 * @property {string} metricName
 *   The resource name of the metric to update:
 *
 *       "projects/[PROJECT_ID]/metrics/[METRIC_ID]"
 *
 *   The updated metric must be provided in the request and it's
 *   `name` field must be the same as `[METRIC_ID]` If the metric
 *   does not exist in `[PROJECT_ID]`, then a new metric is created.
 *
 * @property {Object} metric
 *   The updated metric.
 *
 *   This object should have the same structure as [LogMetric]{@link LogMetric}
 *
 * @class
 * @see [google.logging.v2.UpdateLogMetricRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/logging/v2/logging_metrics.proto}
 */
var UpdateLogMetricRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The parameters to DeleteLogMetric.
 *
 * @property {string} metricName
 *   The resource name of the metric to delete:
 *
 *       "projects/[PROJECT_ID]/metrics/[METRIC_ID]"
 *
 * @class
 * @see [google.logging.v2.DeleteLogMetricRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/logging/v2/logging_metrics.proto}
 */
var DeleteLogMetricRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};