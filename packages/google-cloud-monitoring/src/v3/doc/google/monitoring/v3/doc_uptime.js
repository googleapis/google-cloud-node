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
 * Nimbus InternalCheckers.
 *
 * @property {string} projectId
 *   The GCP project ID. Not necessarily the same as the project_id for the
 *   config.
 *
 * @property {string} network
 *   The internal network to perform this uptime check on.
 *
 * @property {string} gcpZone
 *   The GCP zone the uptime check should egress from. Only respected for
 *   internal uptime checks, where internal_network is specified.
 *
 * @property {string} checkerId
 *   The checker ID.
 *
 * @property {string} displayName
 *   The checker's human-readable name.
 *
 * @typedef InternalChecker
 * @memberof google.monitoring.v3
 * @see [google.monitoring.v3.InternalChecker definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/uptime.proto}
 */
var InternalChecker = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * This message configures which resources and services to monitor for
 * availability.
 *
 * @property {string} name
 *   A unique resource name for this UptimeCheckConfig. The format is:
 *
 *
 *     `projects/[PROJECT_ID]/uptimeCheckConfigs/[UPTIME_CHECK_ID]`.
 *
 *   This field should be omitted when creating the uptime check configuration;
 *   on create, the resource name is assigned by the server and included in the
 *   response.
 *
 * @property {string} displayName
 *   A human-friendly name for the uptime check configuration. The display name
 *   should be unique within a Stackdriver Account in order to make it easier
 *   to identify; however, uniqueness is not enforced. Required.
 *
 * @property {Object} monitoredResource
 *   The [monitored
 *   resource](https://cloud.google.com/monitoring/api/resources) associated
 *   with the configuration.
 *   The following monitored resource types are supported for uptime checks:
 *     uptime_url
 *     gce_instance
 *     gae_app
 *     aws_ec2_instance
 *     aws_elb_load_balancer
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
 *   How often, in seconds, the uptime check is performed.
 *   Currently, the only supported values are `60s` (1 minute), `300s`
 *   (5 minutes), `600s` (10 minutes), and `900s` (15 minutes). Optional,
 *   defaults to `300s`.
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
 *   The expected content on the page the check is run against.
 *   Currently, only the first entry in the list is supported, and other entries
 *   will be ignored. The server will look for an exact match of the string in
 *   the page response's content. This field is optional and should only be
 *   specified if a content match is required.
 *
 *   This object should have the same structure as [ContentMatcher]{@link google.monitoring.v3.ContentMatcher}
 *
 * @property {number[]} selectedRegions
 *   The list of regions from which the check will be run.
 *   If this field is specified, enough regions to include a minimum of
 *   3 locations must be provided, or an error message is returned.
 *   Not specifying this field will result in uptime checks running from all
 *   regions.
 *
 *   The number should be among the values of [UptimeCheckRegion]{@link google.monitoring.v3.UptimeCheckRegion}
 *
 * @property {boolean} isInternal
 *   Denotes whether this is a check that egresses from InternalCheckers.
 *
 * @property {Object[]} internalCheckers
 *   The internal checkers that this check will egress from. If `is_internal` is
 *   true and this list is empty, the check will egress from all
 *   InternalCheckers configured for the project that owns this CheckConfig.
 *
 *   This object should have the same structure as [InternalChecker]{@link google.monitoring.v3.InternalChecker}
 *
 * @typedef UptimeCheckConfig
 * @memberof google.monitoring.v3
 * @see [google.monitoring.v3.UptimeCheckConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/uptime.proto}
 */
var UptimeCheckConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * The resource submessage for group checks. It can be used instead of a
   * monitored resource, when multiple resources are being monitored.
   *
   * @property {string} groupId
   *   The group of resources being monitored. Should be only the
   *   group_id, not projects/<project_id>/groups/<group_id>.
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
   * Information involved in an HTTP/HTTPS uptime check request.
   *
   * @property {boolean} useSsl
   *   If true, use HTTPS instead of HTTP to run the check.
   *
   * @property {string} path
   *   The path to the page to run the check against. Will be combined with the
   *   host (specified within the MonitoredResource) and port to construct the
   *   full URL. Optional (defaults to "/").
   *
   * @property {number} port
   *   The port to the page to run the check against. Will be combined with host
   *   (specified within the MonitoredResource) and path to construct the full
   *   URL. Optional (defaults to 80 without SSL, or 443 with SSL).
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
   *   On Get/List calls, if mask_headers is set to True then the headers
   *   will be obscured with ******.
   *
   * @property {Object.<string, string>} headers
   *   The list of headers to send as part of the uptime check request.
   *   If two headers have the same key and different values, they should
   *   be entered as a single header, with the value being a comma-separated
   *   list of all the desired values as described at
   *   https://www.w3.org/Protocols/rfc2616/rfc2616.txt (page 31).
   *   Entering two separate headers with the same key in a Create call will
   *   cause the first to be overwritten by the second.
   *   The maximum number of headers allowed is 100.
   *
   * @typedef HttpCheck
   * @memberof google.monitoring.v3
   * @see [google.monitoring.v3.UptimeCheckConfig.HttpCheck definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/uptime.proto}
   */
  HttpCheck: {
    // This is for documentation. Actual contents will be loaded by gRPC.

    /**
     * A type of authentication to perform against the specified resource or URL
     * that uses username and password.
     * Currently, only Basic authentication is supported in Uptime Monitoring.
     *
     * @property {string} username
     *   The username to authenticate.
     *
     * @property {string} password
     *   The password to authenticate.
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
   * Information required for a TCP uptime check request.
   *
   * @property {number} port
   *   The port to the page to run the check against. Will be combined with host
   *   (specified within the MonitoredResource) to construct the full URL.
   *   Required.
   *
   * @typedef TcpCheck
   * @memberof google.monitoring.v3
   * @see [google.monitoring.v3.UptimeCheckConfig.TcpCheck definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/uptime.proto}
   */
  TcpCheck: {
    // This is for documentation. Actual contents will be loaded by gRPC.
  },

  /**
   * Used to perform string matching. Currently, this matches on the exact
   * content. In the future, it can be expanded to allow for regular expressions
   * and more complex matching.
   *
   * @property {string} content
   *   String content to match (max 1024 bytes)
   *
   * @typedef ContentMatcher
   * @memberof google.monitoring.v3
   * @see [google.monitoring.v3.UptimeCheckConfig.ContentMatcher definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/uptime.proto}
   */
  ContentMatcher: {
    // This is for documentation. Actual contents will be loaded by gRPC.
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
 *   The IP address from which the uptime check originates. This is a full
 *   IP address (not an IP address range). Most IP addresses, as of this
 *   publication, are in IPv4 format; however, one should not rely on the
 *   IP addresses being in IPv4 format indefinitely and should support
 *   interpreting this field in either IPv4 or IPv6 format.
 *
 * @typedef UptimeCheckIp
 * @memberof google.monitoring.v3
 * @see [google.monitoring.v3.UptimeCheckIp definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/uptime.proto}
 */
var UptimeCheckIp = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The regions from which an uptime check can be run.
 *
 * @enum {number}
 * @memberof google.monitoring.v3
 */
var UptimeCheckRegion = {

  /**
   * Default value if no region is specified. Will result in uptime checks
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
var GroupResourceType = {

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