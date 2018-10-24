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
 * Defines a metric type and its schema. Once a metric descriptor is created,
 * deleting or altering it stops data collection and makes the metric type's
 * existing data unusable.
 *
 * @property {string} name
 *   The resource name of the metric descriptor.
 *
 * @property {string} type
 *   The metric type, including its DNS name prefix. The type is not
 *   URL-encoded.  All user-defined metric types have the DNS name
 *   `custom.googleapis.com` or `external.googleapis.com`.  Metric types should
 *   use a natural hierarchical grouping. For example:
 *
 *       "custom.googleapis.com/invoice/paid/amount"
 *       "external.googleapis.com/prometheus/up"
 *       "appengine.googleapis.com/http/server/response_latencies"
 *
 * @property {Object[]} labels
 *   The set of labels that can be used to describe a specific
 *   instance of this metric type. For example, the
 *   `appengine.googleapis.com/http/server/response_latencies` metric
 *   type has a label for the HTTP response code, `response_code`, so
 *   you can look at latencies for successful responses or just
 *   for responses that failed.
 *
 *   This object should have the same structure as [LabelDescriptor]{@link google.api.LabelDescriptor}
 *
 * @property {number} metricKind
 *   Whether the metric records instantaneous values, changes to a value, etc.
 *   Some combinations of `metric_kind` and `value_type` might not be supported.
 *
 *   The number should be among the values of [MetricKind]{@link google.api.MetricKind}
 *
 * @property {number} valueType
 *   Whether the measurement is an integer, a floating-point number, etc.
 *   Some combinations of `metric_kind` and `value_type` might not be supported.
 *
 *   The number should be among the values of [ValueType]{@link google.api.ValueType}
 *
 * @property {string} unit
 *   The unit in which the metric value is reported. It is only applicable
 *   if the `value_type` is `INT64`, `DOUBLE`, or `DISTRIBUTION`. The
 *   supported units are a subset of [The Unified Code for Units of
 *   Measure](http://unitsofmeasure.org/ucum.html) standard:
 *
 *   **Basic units (UNIT)**
 *
 *   * `bit`   bit
 *   * `By`    byte
 *   * `s`     second
 *   * `min`   minute
 *   * `h`     hour
 *   * `d`     day
 *
 *   **Prefixes (PREFIX)**
 *
 *   * `k`     kilo    (10**3)
 *   * `M`     mega    (10**6)
 *   * `G`     giga    (10**9)
 *   * `T`     tera    (10**12)
 *   * `P`     peta    (10**15)
 *   * `E`     exa     (10**18)
 *   * `Z`     zetta   (10**21)
 *   * `Y`     yotta   (10**24)
 *   * `m`     milli   (10**-3)
 *   * `u`     micro   (10**-6)
 *   * `n`     nano    (10**-9)
 *   * `p`     pico    (10**-12)
 *   * `f`     femto   (10**-15)
 *   * `a`     atto    (10**-18)
 *   * `z`     zepto   (10**-21)
 *   * `y`     yocto   (10**-24)
 *   * `Ki`    kibi    (2**10)
 *   * `Mi`    mebi    (2**20)
 *   * `Gi`    gibi    (2**30)
 *   * `Ti`    tebi    (2**40)
 *
 *   **Grammar**
 *
 *   The grammar also includes these connectors:
 *
 *   * `/`    division (as an infix operator, e.g. `1/s`).
 *   * `.`    multiplication (as an infix operator, e.g. `GBy.d`)
 *
 *   The grammar for a unit is as follows:
 *
 *       Expression = Component { "." Component } { "/" Component } ;
 *
 *       Component = ( [ PREFIX ] UNIT | "%" ) [ Annotation ]
 *                 | Annotation
 *                 | "1"
 *                 ;
 *
 *       Annotation = "{" NAME "}" ;
 *
 *   Notes:
 *
 *   * `Annotation` is just a comment if it follows a `UNIT` and is
 *      equivalent to `1` if it is used alone. For examples,
 *      `{requests}/s == 1/s`, `By{transmitted}/s == By/s`.
 *   * `NAME` is a sequence of non-blank printable ASCII characters not
 *      containing '{' or '}'.
 *   * `1` represents dimensionless value 1, such as in `1/s`.
 *   * `%` represents dimensionless value 1/100, and annotates values giving
 *      a percentage.
 *
 * @property {string} description
 *   A detailed description of the metric, which can be used in documentation.
 *
 * @property {string} displayName
 *   A concise name for the metric, which can be displayed in user interfaces.
 *   Use sentence case without an ending period, for example "Request count".
 *   This field is optional but it is recommended to be set for any metrics
 *   associated with user-visible concepts, such as Quota.
 *
 * @property {Object} metadata
 *   Optional. Metadata which can be used to guide usage of the metric.
 *
 *   This object should have the same structure as [MetricDescriptorMetadata]{@link google.api.MetricDescriptorMetadata}
 *
 * @typedef MetricDescriptor
 * @memberof google.api
 * @see [google.api.MetricDescriptor definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/api/metric.proto}
 */
const MetricDescriptor = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Additional annotations that can be used to guide the usage of a metric.
   *
   * @property {number} launchStage
   *   The launch stage of the metric definition.
   *
   *   The number should be among the values of [LaunchStage]{@link google.api.LaunchStage}
   *
   * @property {Object} samplePeriod
   *   The sampling period of metric data points. For metrics which are written
   *   periodically, consecutive data points are stored at this time interval,
   *   excluding data loss due to errors. Metrics with a higher granularity have
   *   a smaller sampling period.
   *
   *   This object should have the same structure as [Duration]{@link google.protobuf.Duration}
   *
   * @property {Object} ingestDelay
   *   The delay of data points caused by ingestion. Data points older than this
   *   age are guaranteed to be ingested and available to be read, excluding
   *   data loss due to errors.
   *
   *   This object should have the same structure as [Duration]{@link google.protobuf.Duration}
   *
   * @typedef MetricDescriptorMetadata
   * @memberof google.api
   * @see [google.api.MetricDescriptor.MetricDescriptorMetadata definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/api/metric.proto}
   */
  MetricDescriptorMetadata: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  },

  /**
   * The kind of measurement. It describes how the data is reported.
   *
   * @enum {number}
   * @memberof google.api
   */
  MetricKind: {

    /**
     * Do not use this default value.
     */
    METRIC_KIND_UNSPECIFIED: 0,

    /**
     * An instantaneous measurement of a value.
     */
    GAUGE: 1,

    /**
     * The change in a value during a time interval.
     */
    DELTA: 2,

    /**
     * A value accumulated over a time interval.  Cumulative
     * measurements in a time series should have the same start time
     * and increasing end times, until an event resets the cumulative
     * value to zero and sets a new start time for the following
     * points.
     */
    CUMULATIVE: 3
  },

  /**
   * The value type of a metric.
   *
   * @enum {number}
   * @memberof google.api
   */
  ValueType: {

    /**
     * Do not use this default value.
     */
    VALUE_TYPE_UNSPECIFIED: 0,

    /**
     * The value is a boolean.
     * This value type can be used only if the metric kind is `GAUGE`.
     */
    BOOL: 1,

    /**
     * The value is a signed 64-bit integer.
     */
    INT64: 2,

    /**
     * The value is a double precision floating point number.
     */
    DOUBLE: 3,

    /**
     * The value is a text string.
     * This value type can be used only if the metric kind is `GAUGE`.
     */
    STRING: 4,

    /**
     * The value is a `Distribution`.
     */
    DISTRIBUTION: 5,

    /**
     * The value is money.
     */
    MONEY: 6
  }
};

/**
 * A specific metric, identified by specifying values for all of the
 * labels of a `MetricDescriptor`.
 *
 * @property {string} type
 *   An existing metric type, see google.api.MetricDescriptor.
 *   For example, `custom.googleapis.com/invoice/paid/amount`.
 *
 * @property {Object.<string, string>} labels
 *   The set of label values that uniquely identify this metric. All
 *   labels listed in the `MetricDescriptor` must be assigned values.
 *
 * @typedef Metric
 * @memberof google.api
 * @see [google.api.Metric definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/api/metric.proto}
 */
const Metric = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};