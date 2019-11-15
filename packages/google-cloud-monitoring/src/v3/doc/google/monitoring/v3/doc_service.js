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
 * A `Service` is a discrete, autonomous, and network-accessible unit, designed
 * to solve an individual concern
 * ([Wikipedia](https://en.wikipedia.org/wiki/Service-orientation)). In
 * Stackdriver Monitoring, a `Service` acts as the root resource under which
 * operational aspects of the service are accessible.
 *
 * @property {string} name
 *   Resource name for this Service. Of the form
 *   `projects/{project_id}/services/{service_id}`.
 *
 * @property {string} displayName
 *   Name used for UI elements listing this Service.
 *
 * @property {Object} custom
 *   Custom service type.
 *
 *   This object should have the same structure as [Custom]{@link google.monitoring.v3.Custom}
 *
 * @property {Object} appEngine
 *   Type used for App Engine services.
 *
 *   This object should have the same structure as [AppEngine]{@link google.monitoring.v3.AppEngine}
 *
 * @property {Object} cloudEndpoints
 *   Type used for Cloud Endpoints services.
 *
 *   This object should have the same structure as [CloudEndpoints]{@link google.monitoring.v3.CloudEndpoints}
 *
 * @property {Object} clusterIstio
 *   Type used for Istio services that live in a Kubernetes cluster.
 *
 *   This object should have the same structure as [ClusterIstio]{@link google.monitoring.v3.ClusterIstio}
 *
 * @property {Object} telemetry
 *   Configuration for how to query telemetry on a Service.
 *
 *   This object should have the same structure as [Telemetry]{@link google.monitoring.v3.Telemetry}
 *
 * @typedef Service
 * @memberof google.monitoring.v3
 * @see [google.monitoring.v3.Service definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/service.proto}
 */
const Service = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Custom view of service telemetry. Currently a place-holder pending final
   * design.
   * @typedef Custom
   * @memberof google.monitoring.v3
   * @see [google.monitoring.v3.Service.Custom definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/service.proto}
   */
  Custom: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  },

  /**
   * App Engine service. Learn more at https://cloud.google.com/appengine.
   *
   * @property {string} moduleId
   *   The ID of the App Engine module underlying this service. Corresponds to
   *   the `module_id` resource label in the `gae_app` monitored resource:
   *   https://cloud.google.com/monitoring/api/resources#tag_gae_app
   *
   * @typedef AppEngine
   * @memberof google.monitoring.v3
   * @see [google.monitoring.v3.Service.AppEngine definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/service.proto}
   */
  AppEngine: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  },

  /**
   * Cloud Endpoints service. Learn more at https://cloud.google.com/endpoints.
   *
   * @property {string} service
   *   The name of the Cloud Endpoints service underlying this service.
   *   Corresponds to the `service` resource label in the `api` monitored
   *   resource: https://cloud.google.com/monitoring/api/resources#tag_api
   *
   * @typedef CloudEndpoints
   * @memberof google.monitoring.v3
   * @see [google.monitoring.v3.Service.CloudEndpoints definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/service.proto}
   */
  CloudEndpoints: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  },

  /**
   * Istio service. Learn more at http://istio.io.
   *
   * @property {string} location
   *   The location of the Kubernetes cluster in which this Istio service is
   *   defined. Corresponds to the `location` resource label in `k8s_cluster`
   *   resources.
   *
   * @property {string} clusterName
   *   The name of the Kubernetes cluster in which this Istio service is
   *   defined. Corresponds to the `cluster_name` resource label in
   *   `k8s_cluster` resources.
   *
   * @property {string} serviceNamespace
   *   The namespace of the Istio service underlying this service. Corresponds
   *   to the `destination_service_namespace` metric label in Istio metrics.
   *
   * @property {string} serviceName
   *   The name of the Istio service underlying this service. Corresponds to the
   *   `destination_service_name` metric label in Istio metrics.
   *
   * @typedef ClusterIstio
   * @memberof google.monitoring.v3
   * @see [google.monitoring.v3.Service.ClusterIstio definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/service.proto}
   */
  ClusterIstio: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  },

  /**
   * Configuration for how to query telemetry on a Service.
   *
   * @property {string} resourceName
   *   The full name of the resource that defines this service. Formatted as
   *   described in https://cloud.google.com/apis/design/resource_names.
   *
   * @typedef Telemetry
   * @memberof google.monitoring.v3
   * @see [google.monitoring.v3.Service.Telemetry definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/service.proto}
   */
  Telemetry: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  }
};

/**
 * A Service-Level Objective (SLO) describes a level of desired good service. It
 * consists of a service-level indicator (SLI), a performance goal, and a period
 * over which the objective is to be evaluated against that goal. The SLO can
 * use SLIs defined in a number of different manners. Typical SLOs might include
 * "99% of requests in each rolling week have latency below 200 milliseconds" or
 * "99.5% of requests in each calendar month return successfully."
 *
 * @property {string} name
 *   Resource name for this `ServiceLevelObjective`.
 *   Of the form
 *   `projects/{project_id}/services/{service_id}/serviceLevelObjectives/{slo_name}`.
 *
 * @property {string} displayName
 *   Name used for UI elements listing this SLO.
 *
 * @property {Object} serviceLevelIndicator
 *   The definition of good service, used to measure and calculate the quality
 *   of the `Service`'s performance with respect to a single aspect of service
 *   quality.
 *
 *   This object should have the same structure as [ServiceLevelIndicator]{@link google.monitoring.v3.ServiceLevelIndicator}
 *
 * @property {number} goal
 *   The fraction of service that must be good in order for this objective to be
 *   met. `0 < goal <= 1`.
 *
 * @property {Object} rollingPeriod
 *   A rolling time period, semantically "in the past `<rolling_period>`".
 *   Must be an integer multiple of 1 day no larger than 30 days.
 *
 *   This object should have the same structure as [Duration]{@link google.protobuf.Duration}
 *
 * @property {number} calendarPeriod
 *   A calendar period, semantically "since the start of the current
 *   `<calendar_period>`". At this time, only `DAY`, `WEEK`, `FORTNIGHT`, and
 *   `MONTH` are supported.
 *
 *   The number should be among the values of [CalendarPeriod]{@link google.type.CalendarPeriod}
 *
 * @typedef ServiceLevelObjective
 * @memberof google.monitoring.v3
 * @see [google.monitoring.v3.ServiceLevelObjective definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/service.proto}
 */
const ServiceLevelObjective = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * `ServiceLevelObjective.View` determines what form of
   * `ServiceLevelObjective` is returned from `GetServiceLevelObjective`,
   * `ListServiceLevelObjectives`, and `ListServiceLevelObjectiveVersions` RPCs.
   *
   * @enum {number}
   * @memberof google.monitoring.v3
   */
  View: {

    /**
     * Same as FULL.
     */
    VIEW_UNSPECIFIED: 0,

    /**
     * Return the embedded `ServiceLevelIndicator` in the form in which it was
     * defined. If it was defined using a `BasicSli`, return that `BasicSli`.
     */
    FULL: 2,

    /**
     * For `ServiceLevelIndicator`s using `BasicSli` articulation, instead
     * return the `ServiceLevelIndicator` with its mode of computation fully
     * spelled out as a `RequestBasedSli`. For `ServiceLevelIndicator`s using
     * `RequestBasedSli` or `WindowsBasedSli`, return the
     * `ServiceLevelIndicator` as it was provided.
     */
    EXPLICIT: 1
  }
};

/**
 * A Service-Level Indicator (SLI) describes the "performance" of a service. For
 * some services, the SLI is well-defined. In such cases, the SLI can be
 * described easily by referencing the well-known SLI and providing the needed
 * parameters. Alternatively, a "custom" SLI can be defined with a query to the
 * underlying metric store. An SLI is defined to be `good_service /
 * total_service` over any queried time interval. The value of performance
 * always falls into the range `0 <= performance <= 1`. A custom SLI describes
 * how to compute this ratio, whether this is by dividing values from a pair of
 * time series, cutting a `Distribution` into good and bad counts, or counting
 * time windows in which the service complies with a criterion. For separation
 * of concerns, a single Service-Level Indicator measures performance for only
 * one aspect of service quality, such as fraction of successful queries or
 * fast-enough queries.
 *
 * @property {Object} basicSli
 *   Basic SLI on a well-known service type.
 *
 *   This object should have the same structure as [BasicSli]{@link google.monitoring.v3.BasicSli}
 *
 * @property {Object} requestBased
 *   Request-based SLIs
 *
 *   This object should have the same structure as [RequestBasedSli]{@link google.monitoring.v3.RequestBasedSli}
 *
 * @property {Object} windowsBased
 *   Windows-based SLIs
 *
 *   This object should have the same structure as [WindowsBasedSli]{@link google.monitoring.v3.WindowsBasedSli}
 *
 * @typedef ServiceLevelIndicator
 * @memberof google.monitoring.v3
 * @see [google.monitoring.v3.ServiceLevelIndicator definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/service.proto}
 */
const ServiceLevelIndicator = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * An SLI measuring performance on a well-known service type. Performance will
 * be computed on the basis of pre-defined metrics. The type of the
 * `service_resource` determines the metrics to use and the
 * `service_resource.labels` and `metric_labels` are used to construct a
 * monitoring filter to filter that metric down to just the data relevant to
 * this service.
 *
 * @property {string[]} method
 *   OPTIONAL: The set of RPCs to which this SLI is relevant. Telemetry from
 *   other methods will not be used to calculate performance for this SLI. If
 *   omitted, this SLI applies to all the Service's methods. For service types
 *   that don't support breaking down by method, setting this field will result
 *   in an error.
 *
 * @property {string[]} location
 *   OPTIONAL: The set of locations to which this SLI is relevant. Telemetry
 *   from other locations will not be used to calculate performance for this
 *   SLI. If omitted, this SLI applies to all locations in which the Service has
 *   activity. For service types that don't support breaking down by location,
 *   setting this field will result in an error.
 *
 * @property {string[]} version
 *   OPTIONAL: The set of API versions to which this SLI is relevant. Telemetry
 *   from other API versions will not be used to calculate performance for this
 *   SLI. If omitted, this SLI applies to all API versions. For service types
 *   that don't support breaking down by version, setting this field will result
 *   in an error.
 *
 * @property {Object} availability
 *   Good service is defined to be the count of requests made to this service
 *   that return successfully.
 *
 *   This object should have the same structure as [AvailabilityCriteria]{@link google.monitoring.v3.AvailabilityCriteria}
 *
 * @property {Object} latency
 *   Good service is defined to be the count of requests made to this service
 *   that are fast enough with respect to `latency.threshold`.
 *
 *   This object should have the same structure as [LatencyCriteria]{@link google.monitoring.v3.LatencyCriteria}
 *
 * @typedef BasicSli
 * @memberof google.monitoring.v3
 * @see [google.monitoring.v3.BasicSli definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/service.proto}
 */
const BasicSli = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Future parameters for the availability SLI.
   * @typedef AvailabilityCriteria
   * @memberof google.monitoring.v3
   * @see [google.monitoring.v3.BasicSli.AvailabilityCriteria definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/service.proto}
   */
  AvailabilityCriteria: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  },

  /**
   * Parameters for a latency threshold SLI.
   *
   * @property {Object} threshold
   *   Good service is defined to be the count of requests made to this service
   *   that return in no more than `threshold`.
   *
   *   This object should have the same structure as [Duration]{@link google.protobuf.Duration}
   *
   * @typedef LatencyCriteria
   * @memberof google.monitoring.v3
   * @see [google.monitoring.v3.BasicSli.LatencyCriteria definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/service.proto}
   */
  LatencyCriteria: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  }
};

/**
 * Range of numerical values, inclusive of `min` and exclusive of `max`. If the
 * open range "< range.max" is desired, set `range.min = -infinity`. If the open
 * range ">= range.min" is desired, set `range.max = infinity`.
 *
 * @property {number} min
 *   Range minimum.
 *
 * @property {number} max
 *   Range maximum.
 *
 * @typedef Range
 * @memberof google.monitoring.v3
 * @see [google.monitoring.v3.Range definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/service.proto}
 */
const Range = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Service Level Indicators for which atomic units of service are counted
 * directly.
 *
 * @property {Object} goodTotalRatio
 *   `good_total_ratio` is used when the ratio of `good_service` to
 *   `total_service` is computed from two `TimeSeries`.
 *
 *   This object should have the same structure as [TimeSeriesRatio]{@link google.monitoring.v3.TimeSeriesRatio}
 *
 * @property {Object} distributionCut
 *   `distribution_cut` is used when `good_service` is a count of values
 *   aggregated in a `Distribution` that fall into a good range. The
 *   `total_service` is the total count of all values aggregated in the
 *   `Distribution`.
 *
 *   This object should have the same structure as [DistributionCut]{@link google.monitoring.v3.DistributionCut}
 *
 * @typedef RequestBasedSli
 * @memberof google.monitoring.v3
 * @see [google.monitoring.v3.RequestBasedSli definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/service.proto}
 */
const RequestBasedSli = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A `TimeSeriesRatio` specifies two `TimeSeries` to use for computing the
 * `good_service / total_service` ratio. The specified `TimeSeries` must have
 * `ValueType = DOUBLE` or `ValueType = INT64` and must have `MetricKind =
 * DELTA` or `MetricKind = CUMULATIVE`. The `TimeSeriesRatio` must specify
 * exactly two of good, bad, and total, and the relationship `good_service +
 * bad_service = total_service` will be assumed.
 *
 * @property {string} goodServiceFilter
 *   A [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters)
 *   specifying a `TimeSeries` quantifying good service provided. Must have
 *   `ValueType = DOUBLE` or `ValueType = INT64` and must have `MetricKind =
 *   DELTA` or `MetricKind = CUMULATIVE`.
 *
 * @property {string} badServiceFilter
 *   A [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters)
 *   specifying a `TimeSeries` quantifying bad service, either demanded service
 *   that was not provided or demanded service that was of inadequate quality.
 *   Must have `ValueType = DOUBLE` or `ValueType = INT64` and must have
 *   `MetricKind = DELTA` or `MetricKind = CUMULATIVE`.
 *
 * @property {string} totalServiceFilter
 *   A [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters)
 *   specifying a `TimeSeries` quantifying total demanded service. Must have
 *   `ValueType = DOUBLE` or `ValueType = INT64` and must have `MetricKind =
 *   DELTA` or `MetricKind = CUMULATIVE`.
 *
 * @typedef TimeSeriesRatio
 * @memberof google.monitoring.v3
 * @see [google.monitoring.v3.TimeSeriesRatio definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/service.proto}
 */
const TimeSeriesRatio = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A `DistributionCut` defines a `TimeSeries` and thresholds used for measuring
 * good service and total service. The `TimeSeries` must have `ValueType =
 * DISTRIBUTION` and `MetricKind = DELTA` or `MetricKind = CUMULATIVE`. The
 * computed `good_service` will be the count of values x in the `Distribution`
 * such that `range.min <= x < range.max`.
 *
 * @property {string} distributionFilter
 *   A [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters)
 *   specifying a `TimeSeries` aggregating values. Must have `ValueType =
 *   DISTRIBUTION` and `MetricKind = DELTA` or `MetricKind = CUMULATIVE`.
 *
 * @property {Object} range
 *   Range of values considered "good." For a one-sided range, set one bound to
 *   an infinite value.
 *
 *   This object should have the same structure as [Range]{@link google.monitoring.v3.Range}
 *
 * @typedef DistributionCut
 * @memberof google.monitoring.v3
 * @see [google.monitoring.v3.DistributionCut definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/service.proto}
 */
const DistributionCut = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A `WindowsBasedSli` defines `good_service` as the count of time windows for
 * which the provided service was of good quality. Criteria for determining
 * if service was good are embedded in the `window_criterion`.
 *
 * @property {string} goodBadMetricFilter
 *   A [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters)
 *   specifying a `TimeSeries` with `ValueType = BOOL`. The window is good if
 *   any `true` values appear in the window.
 *
 * @property {Object} goodTotalRatioThreshold
 *   A window is good if its `performance` is high enough.
 *
 *   This object should have the same structure as [PerformanceThreshold]{@link google.monitoring.v3.PerformanceThreshold}
 *
 * @property {Object} metricMeanInRange
 *   A window is good if the metric's value is in a good range, averaged
 *   across returned streams.
 *
 *   This object should have the same structure as [MetricRange]{@link google.monitoring.v3.MetricRange}
 *
 * @property {Object} metricSumInRange
 *   A window is good if the metric's value is in a good range, summed across
 *   returned streams.
 *
 *   This object should have the same structure as [MetricRange]{@link google.monitoring.v3.MetricRange}
 *
 * @property {Object} windowPeriod
 *   Duration over which window quality is evaluated. Must be an integer
 *   fraction of a day and at least `60s`.
 *
 *   This object should have the same structure as [Duration]{@link google.protobuf.Duration}
 *
 * @typedef WindowsBasedSli
 * @memberof google.monitoring.v3
 * @see [google.monitoring.v3.WindowsBasedSli definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/service.proto}
 */
const WindowsBasedSli = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * A `PerformanceThreshold` is used when each window is good when that window
   * has a sufficiently high `performance`.
   *
   * @property {Object} performance
   *   `RequestBasedSli` to evaluate to judge window quality.
   *
   *   This object should have the same structure as [RequestBasedSli]{@link google.monitoring.v3.RequestBasedSli}
   *
   * @property {Object} basicSliPerformance
   *   `BasicSli` to evaluate to judge window quality.
   *
   *   This object should have the same structure as [BasicSli]{@link google.monitoring.v3.BasicSli}
   *
   * @property {number} threshold
   *   If window `performance >= threshold`, the window is counted as good.
   *
   * @typedef PerformanceThreshold
   * @memberof google.monitoring.v3
   * @see [google.monitoring.v3.WindowsBasedSli.PerformanceThreshold definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/service.proto}
   */
  PerformanceThreshold: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  },

  /**
   * A `MetricRange` is used when each window is good when the value x of a
   * single `TimeSeries` satisfies `range.min <= x < range.max`. The provided
   * `TimeSeries` must have `ValueType = INT64` or `ValueType = DOUBLE` and
   * `MetricKind = GAUGE`.
   *
   * @property {string} timeSeries
   *   A [monitoring filter](https://cloud.google.com/monitoring/api/v3/filters)
   *   specifying the `TimeSeries` to use for evaluating window quality.
   *
   * @property {Object} range
   *   Range of values considered "good." For a one-sided range, set one bound
   *   to an infinite value.
   *
   *   This object should have the same structure as [Range]{@link google.monitoring.v3.Range}
   *
   * @typedef MetricRange
   * @memberof google.monitoring.v3
   * @see [google.monitoring.v3.WindowsBasedSli.MetricRange definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/service.proto}
   */
  MetricRange: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  }
};