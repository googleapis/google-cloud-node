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
 * Defines a metric type and its schema. Once a metric descriptor is created,
 * deleting or altering it stops data collection and makes the metric type's
 * existing data unusable.
 *
 * @external "google.api.MetricDescriptor"
 * @property {string} name
 *   The resource name of the metric descriptor. Depending on the
 *   implementation, the name typically includes: (1) the parent resource name
 *   that defines the scope of the metric type or of its data; and (2) the
 *   metric's URL-encoded type, which also appears in the `type` field of this
 *   descriptor. For example, following is the resource name of a custom
 *   metric within the GCP project `my-project-id`:
 *
 *       "projects/my-project-id/metricDescriptors/custom.googleapis.com%2Finvoice%2Fpaid%2Famount"
 *
 * @property {string} type
 *   The metric type, including its DNS name prefix. The type is not
 *   URL-encoded.  All user-defined custom metric types have the DNS name
 *   `custom.googleapis.com`.  Metric types should use a natural hierarchical
 *   grouping. For example:
 *
 *       "custom.googleapis.com/invoice/paid/amount"
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
 *   This object should have the same structure as [google.api.LabelDescriptor]{@link external:"google.api.LabelDescriptor"}
 *
 * @property {number} metricKind
 *   Whether the metric records instantaneous values, changes to a value, etc.
 *   Some combinations of `metric_kind` and `value_type` might not be supported.
 *
 *   The number should be among the values of [google.api.MetricDescriptor.MetricKind]{@link external:"google.api.MetricDescriptor.MetricKind"}
 *
 * @property {number} valueType
 *   Whether the measurement is an integer, a floating-point number, etc.
 *   Some combinations of `metric_kind` and `value_type` might not be supported.
 *
 *   The number should be among the values of [google.api.MetricDescriptor.ValueType]{@link external:"google.api.MetricDescriptor.ValueType"}
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
 *   The grammar includes the dimensionless unit `1`, such as `1/s`.
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
 *       Component = [ PREFIX ] UNIT [ Annotation ]
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
 *
 * @property {string} description
 *   A detailed description of the metric, which can be used in documentation.
 *
 * @property {string} displayName
 *   A concise name for the metric, which can be displayed in user interfaces.
 *   Use sentence case without an ending period, for example "Request count".
 *
 * @see [google.api.MetricDescriptor definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/api/metric.proto}
 */

/**
 * A specific metric, identified by specifying values for all of the
 * labels of a {@link `MetricDescriptor`}.
 *
 * @external "google.api.Metric"
 * @property {string} type
 *   An existing metric type, see {@link google.api.MetricDescriptor}.
 *   For example, `custom.googleapis.com/invoice/paid/amount`.
 *
 * @property {Object.<string, string>} labels
 *   The set of label values that uniquely identify this metric. All
 *   labels listed in the `MetricDescriptor` must be assigned values.
 *
 * @see [google.api.Metric definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/api/metric.proto}
 */