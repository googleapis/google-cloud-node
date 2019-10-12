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
 * An internal checker allows Uptime checks to run on private/internal GCP
 * resources.
 *
 * @property {string} name
 *   A unique resource name for this InternalChecker. The format is:
 *
 *     `projects/[PROJECT_ID]/internalCheckers/[INTERNAL_CHECKER_ID]`.
 *
 *   `[PROJECT_ID]` is the Stackdriver Workspace project for the
 *   Uptime check config associated with the internal checker.
 *
 * @property {string} displayName
 *   The checker's human-readable name. The display name
 *   should be unique within a Stackdriver Workspace in order to make it easier
 *   to identify; however, uniqueness is not enforced.
 *
 * @property {string} network
 *   The [GCP VPC network](https://cloud.google.com/vpc/docs/vpc) where the
 *   internal resource lives (ex: "default").
 *
 * @property {string} gcpZone
 *   The GCP zone the Uptime check should egress from. Only respected for
 *   internal Uptime checks, where internal_network is specified.
 *
 * @property {string} peerProjectId
 *   The GCP project ID where the internal checker lives. Not necessary
 *   the same as the Workspace project.
 *
 * @property {number} state
 *   The current operational state of the internal checker.
 *
 *   The number should be among the values of [State]{@link google.monitoring.v3.State}
 *
 * @typedef InternalChecker
 * @memberof google.monitoring.v3
 * @see [google.monitoring.v3.InternalChecker definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/uptime.proto}
 */
const InternalChecker = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Operational states for an internal checker.
   *
   * @enum {number}
   * @memberof google.monitoring.v3
   */
  State: {

    /**
     * An internal checker should never be in the unspecified state.
     */
    UNSPECIFIED: 0,

    /**
     * The checker is being created, provisioned, and configured. A checker in
     * this state can be returned by `ListInternalCheckers` or
     * `GetInternalChecker`, as well as by examining the [long running
     * Operation](https://cloud.google.com/apis/design/design_patterns#long_running_operations)
     * that created it.
     */
    CREATING: 1,

    /**
     * The checker is running and available for use. A checker in this state
     * can be returned by `ListInternalCheckers` or `GetInternalChecker` as
     * well as by examining the [long running
     * Operation](https://cloud.google.com/apis/design/design_patterns#long_running_operations)
     * that created it.
     * If a checker is being torn down, it is neither visible nor usable, so
     * there is no "deleting" or "down" state.
     */
    RUNNING: 2
  }
};

/**
 * This message configures which resources and services to monitor for
 * availability.
 *
 * @property {string} name
 *   A unique resource name for this Uptime check configuration. The format is:
 *
 *     `projects/[PROJECT_ID]/uptimeCheckConfigs/[UPTIME_CHECK_ID]`.
 *
 *   This field should be omitted when creating the Uptime check configuration;
 *   on create, the resource name is assigned by the server and included in the
 *   response.
 *
 * @property {string} displayName
 *   A human-friendly name for the Uptime check configuration. The display name
 *   should be unique within a Stackdriver Workspace in order to make it easier
 *   to identify; however, uniqueness is not enforced. Required.
 *
 * @property {Object} monitoredResource
 *   The [monitored
 *   resource](https://cloud.google.com/monitoring/api/resources) associated
 *   with the configuration.
 *   The following monitored resource types are supported for Uptime checks:
 *     `uptime_url`,
 *     `gce_instance`,
 *     `gae_app`,
 *     `aws_ec2_instance`,
 *     `aws_elb_load_balancer`
 *
 *   This object should have the same structure as [MonitoredResource]{@link google.api.MonitoredResource}
 *
 * @property {Object} resourceGroup
 *   The group resource associated with the configuration.
 *
 *   This object should have the same structure as [ResourceGroup]{@link google.monitoring.v3.ResourceGroup}
 *
 * @property {Object} httpCheck
 *   Contains information needed to make an HTTP or HTTPS check.
 *
 *   This object should have the same structure as [HttpCheck]{@link google.monitoring.v3.HttpCheck}
 *
 * @property {Object} tcpCheck
 *   Contains information needed to make a TCP check.
 *
 *   This object should have the same structure as [TcpCheck]{@link google.monitoring.v3.TcpCheck}
 *
 * @property {Object} period
 *   How often, in seconds, the Uptime check is performed.
 *   Currently, the only supported values are `60s` (1 minute), `300s`
 *   (5 minutes), `600s` (10 minutes), and `900s` (15 minutes). Optional,
 *   defaults to `60s`.
 *
 *   This object should have the same structure as [Duration]{@link google.protobuf.Duration}
 *
 * @property {Object} timeout
 *   The maximum amount of time to wait for the request to complete (must be
 *   between 1 and 60 seconds). Required.
 *
 *   This object should have the same structure as [Duration]{@link google.protobuf.Duration}
 *
 * @property {Object[]} contentMatchers
 *   The content that is expected to appear in the data returned by the target
 *   server against which the check is run.  Currently, only the first entry
 *   in the `content_matchers` list is supported, and additional entries will
 *   be ignored. This field is optional and should only be specified if a
 *   content match is required as part of the/ Uptime check.
 *
 *   This object should have the same structure as [ContentMatcher]{@link google.monitoring.v3.ContentMatcher}
 *
 * @property {number[]} selectedRegions
 *   The list of regions from which the check will be run.
 *   Some regions contain one location, and others contain more than one.
 *   If this field is specified, enough regions must be provided to include a
 *   minimum of 3 locations.  Not specifying this field will result in Uptime
 *   checks running from all available regions.
 *
 *   The number should be among the values of [UptimeCheckRegion]{@link google.monitoring.v3.UptimeCheckRegion}
 *
 * @property {boolean} isInternal
 *   If this is `true`, then checks are made only from the 'internal_checkers'.
 *   If it is `false`, then checks are made only from the 'selected_regions'.
 *   It is an error to provide 'selected_regions' when is_internal is `true`,
 *   or to provide 'internal_checkers' when is_internal is `false`.
 *
 * @property {Object[]} internalCheckers
 *   The internal checkers that this check will egress from. If `is_internal` is
 *   `true` and this list is empty, the check will egress from all the
 *   InternalCheckers configured for the project that owns this
 *   `UptimeCheckConfig`.
 *
 *   This object should have the same structure as [InternalChecker]{@link google.monitoring.v3.InternalChecker}
 *
 * @typedef UptimeCheckConfig
 * @memberof google.monitoring.v3
 * @see [google.monitoring.v3.UptimeCheckConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/uptime.proto}
 */
const UptimeCheckConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * The resource submessage for group checks. It can be used instead of a
   * monitored resource, when multiple resources are being monitored.
   *
   * @property {string} groupId
   *   The group of resources being monitored. Should be only the `[GROUP_ID]`,
   *   and not the full-path `projects/[PROJECT_ID]/groups/[GROUP_ID]`.
   *
   * @property {number} resourceType
   *   The resource type of the group members.
   *
   *   The number should be among the values of [GroupResourceType]{@link google.monitoring.v3.GroupResourceType}
   *
   * @typedef ResourceGroup
   * @memberof google.monitoring.v3
   * @see [google.monitoring.v3.UptimeCheckConfig.ResourceGroup definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/uptime.proto}
   */
  ResourceGroup: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  },

  /**
   * Information involved in an HTTP/HTTPS Uptime check request.
   *
   * @property {boolean} useSsl
   *   If `true`, use HTTPS instead of HTTP to run the check.
   *
   * @property {string} path
   *   Optional (defaults to "/"). The path to the page against which to run
   *   the check. Will be combined with the `host` (specified within the
   *   `monitored_resource`) and `port` to construct the full URL. If the
   *   provided path does not begin with "/", a "/" will be prepended
   *   automatically.
   *
   * @property {number} port
   *   Optional (defaults to 80 when `use_ssl` is `false`, and 443 when
   *   `use_ssl` is `true`). The TCP port on the HTTP server against which to
   *   run the check. Will be combined with host (specified within the
   *   `monitored_resource`) and `path` to construct the full URL.
   *
   * @property {Object} authInfo
   *   The authentication information. Optional when creating an HTTP check;
   *   defaults to empty.
   *
   *   This object should have the same structure as [BasicAuthentication]{@link google.monitoring.v3.BasicAuthentication}
   *
   * @property {boolean} maskHeaders
   *   Boolean specifiying whether to encrypt the header information.
   *   Encryption should be specified for any headers related to authentication
   *   that you do not wish to be seen when retrieving the configuration. The
   *   server will be responsible for encrypting the headers.
   *   On Get/List calls, if `mask_headers` is set to `true` then the headers
   *   will be obscured with `******.`
   *
   * @property {Object.<string, string>} headers
   *   The list of headers to send as part of the Uptime check request.
   *   If two headers have the same key and different values, they should
   *   be entered as a single header, with the value being a comma-separated
   *   list of all the desired values as described at
   *   https://www.w3.org/Protocols/rfc2616/rfc2616.txt (page 31).
   *   Entering two separate headers with the same key in a Create call will
   *   cause the first to be overwritten by the second.
   *   The maximum number of headers allowed is 100.
   *
   * @property {boolean} validateSsl
   *   Boolean specifying whether to include SSL certificate validation as a
   *   part of the Uptime check. Only applies to checks where
   *   `monitored_resource` is set to `uptime_url`. If `use_ssl` is `false`,
   *   setting `validate_ssl` to `true` has no effect.
   *
   * @typedef HttpCheck
   * @memberof google.monitoring.v3
   * @see [google.monitoring.v3.UptimeCheckConfig.HttpCheck definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/uptime.proto}
   */
  HttpCheck: {
    // This is for documentation. Actual contents will be loaded by gRPC.

    /**
     * The authentication parameters to provide to the specified resource or
     * URL that requires a username and password. Currently, only
     * [Basic HTTP authentication](https://tools.ietf.org/html/rfc7617) is
     * supported in Uptime checks.
     *
     * @property {string} username
     *   The username to use when authenticating with the HTTP server.
     *
     * @property {string} password
     *   The password to use when authenticating with the HTTP server.
     *
     * @typedef BasicAuthentication
     * @memberof google.monitoring.v3
     * @see [google.monitoring.v3.UptimeCheckConfig.HttpCheck.BasicAuthentication definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/uptime.proto}
     */
    BasicAuthentication: {
      // This is for documentation. Actual contents will be loaded by gRPC.
    }
  },

  /**
   * Information required for a TCP Uptime check request.
   *
   * @property {number} port
   *   The TCP port on the server against which to run the check. Will be
   *   combined with host (specified within the `monitored_resource`) to
   *   construct the full URL. Required.
   *
   * @typedef TcpCheck
   * @memberof google.monitoring.v3
   * @see [google.monitoring.v3.UptimeCheckConfig.TcpCheck definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/uptime.proto}
   */
  TcpCheck: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  },

  /**
   * Used to perform string matching. It allows substring and regular
   * expressions, together with their negations.
   *
   * @property {string} content
   *   String or regex content to match (max 1024 bytes)
   *
   * @property {number} matcher
   *   The type of content matcher that will be applied to the server output,
   *   compared to the `content` string when the check is run.
   *
   *   The number should be among the values of [ContentMatcherOption]{@link google.monitoring.v3.ContentMatcherOption}
   *
   * @typedef ContentMatcher
   * @memberof google.monitoring.v3
   * @see [google.monitoring.v3.UptimeCheckConfig.ContentMatcher definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/uptime.proto}
   */
  ContentMatcher: {
    // This is for documentation. Actual contents will be loaded by gRPC.

    /**
     * Options to perform content matching.
     *
     * @enum {number}
     * @memberof google.monitoring.v3
     */
    ContentMatcherOption: {

      /**
       * No content matcher type specified (maintained for backward
       * compatibility, but deprecated for future use).
       * Treated as `CONTAINS_STRING`.
       */
      CONTENT_MATCHER_OPTION_UNSPECIFIED: 0,

      /**
       * Selects substring matching (there is a match if the output contains
       * the `content` string).  This is the default value for checks without
       * a `matcher` option, or where the value of `matcher` is
       * `CONTENT_MATCHER_OPTION_UNSPECIFIED`.
       */
      CONTAINS_STRING: 1,

      /**
       * Selects negation of substring matching (there is a match if the output
       * does NOT contain the `content` string).
       */
      NOT_CONTAINS_STRING: 2,

      /**
       * Selects regular expression matching (there is a match of the output
       * matches the regular expression specified in the `content` string).
       */
      MATCHES_REGEX: 3,

      /**
       * Selects negation of regular expression matching (there is a match if
       * the output does NOT match the regular expression specified in the
       * `content` string).
       */
      NOT_MATCHES_REGEX: 4
    }
  }
};

/**
 * Contains the region, location, and list of IP
 * addresses where checkers in the location run from.
 *
 * @property {number} region
 *   A broad region category in which the IP address is located.
 *
 *   The number should be among the values of [UptimeCheckRegion]{@link google.monitoring.v3.UptimeCheckRegion}
 *
 * @property {string} location
 *   A more specific location within the region that typically encodes
 *   a particular city/town/metro (and its containing state/province or country)
 *   within the broader umbrella region category.
 *
 * @property {string} ipAddress
 *   The IP address from which the Uptime check originates. This is a fully
 *   specified IP address (not an IP address range). Most IP addresses, as of
 *   this publication, are in IPv4 format; however, one should not rely on the
 *   IP addresses being in IPv4 format indefinitely, and should support
 *   interpreting this field in either IPv4 or IPv6 format.
 *
 * @typedef UptimeCheckIp
 * @memberof google.monitoring.v3
 * @see [google.monitoring.v3.UptimeCheckIp definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/uptime.proto}
 */
const UptimeCheckIp = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The supported resource types that can be used as values of
 * `group_resource.resource_type`.
 * `INSTANCE` includes `gce_instance` and `aws_ec2_instance` resource types.
 * The resource types `gae_app` and `uptime_url` are not valid here because
 * group checks on App Engine modules and URLs are not allowed.
 *
 * @enum {number}
 * @memberof google.monitoring.v3
 */
const GroupResourceType = {

  /**
   * Default value (not valid).
   */
  RESOURCE_TYPE_UNSPECIFIED: 0,

  /**
   * A group of instances from Google Cloud Platform (GCP) or
   * Amazon Web Services (AWS).
   */
  INSTANCE: 1,

  /**
   * A group of Amazon ELB load balancers.
   */
  AWS_ELB_LOAD_BALANCER: 2
};

/**
 * The regions from which an Uptime check can be run.
 *
 * @enum {number}
 * @memberof google.monitoring.v3
 */
const UptimeCheckRegion = {

  /**
   * Default value if no region is specified. Will result in Uptime checks
   * running from all regions.
   */
  REGION_UNSPECIFIED: 0,

  /**
   * Allows checks to run from locations within the United States of America.
   */
  USA: 1,

  /**
   * Allows checks to run from locations within the continent of Europe.
   */
  EUROPE: 2,

  /**
   * Allows checks to run from locations within the continent of South
   * America.
   */
  SOUTH_AMERICA: 3,

  /**
   * Allows checks to run from locations within the Asia Pacific area (ex:
   * Singapore).
   */
  ASIA_PACIFIC: 4
};