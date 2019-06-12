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
 * Http target. The job will be pushed to the job handler by means of
 * an HTTP request via an http_method such as HTTP
 * POST, HTTP GET, etc. The job is acknowledged by means of an HTTP
 * response code in the range [200 - 299]. A failure to receive a response
 * constitutes a failed execution. For a redirected request, the response
 * returned by the redirected request is considered.
 *
 * @property {string} uri
 *   Required.
 *
 *   The full URI path that the request will be sent to. This string
 *   must begin with either "http://" or "https://". Some examples of
 *   valid values for uri are:
 *   `http://acme.com` and `https://acme.com/sales:8080`. Cloud Scheduler will
 *   encode some characters for safety and compatibility. The maximum allowed
 *   URL length is 2083 characters after encoding.
 *
 * @property {number} httpMethod
 *   Which HTTP method to use for the request.
 *
 *   The number should be among the values of [HttpMethod]{@link google.cloud.scheduler.v1.HttpMethod}
 *
 * @property {Object.<string, string>} headers
 *   The user can specify HTTP request headers to send with the job's
 *   HTTP request. This map contains the header field names and
 *   values. Repeated headers are not supported, but a header value can
 *   contain commas. These headers represent a subset of the headers
 *   that will accompany the job's HTTP request. Some HTTP request
 *   headers will be ignored or replaced. A partial list of headers that
 *   will be ignored or replaced is below:
 *   - Host: This will be computed by Cloud Scheduler and derived from
 *   uri.
 *   * `Content-Length`: This will be computed by Cloud Scheduler.
 *   * `User-Agent`: This will be set to `"Google-Cloud-Scheduler"`.
 *   * `X-Google-*`: Google internal use only.
 *   * `X-AppEngine-*`: Google internal use only.
 *
 *   The total size of headers must be less than 80KB.
 *
 * @property {Buffer} body
 *   HTTP request body. A request body is allowed only if the HTTP
 *   method is POST, PUT, or PATCH. It is an error to set body on a job with an
 *   incompatible HttpMethod.
 *
 * @property {Object} oauthToken
 *   If specified, an
 *   [OAuth token](https://developers.google.com/identity/protocols/OAuth2)
 *   will be generated and attached as an `Authorization` header in the HTTP
 *   request.
 *
 *   This type of authorization should be used when sending requests to a GCP
 *   endpoint.
 *
 *   This object should have the same structure as [OAuthToken]{@link google.cloud.scheduler.v1.OAuthToken}
 *
 * @property {Object} oidcToken
 *   If specified, an
 *   [OIDC](https://developers.google.com/identity/protocols/OpenIDConnect)
 *   token will be generated and attached as an `Authorization` header in the
 *   HTTP request.
 *
 *   This type of authorization should be used when sending requests to third
 *   party endpoints or Cloud Run.
 *
 *   This object should have the same structure as [OidcToken]{@link google.cloud.scheduler.v1.OidcToken}
 *
 * @typedef HttpTarget
 * @memberof google.cloud.scheduler.v1
 * @see [google.cloud.scheduler.v1.HttpTarget definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/scheduler/v1/target.proto}
 */
const HttpTarget = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * App Engine target. The job will be pushed to a job handler by means
 * of an HTTP request via an http_method such
 * as HTTP POST, HTTP GET, etc. The job is acknowledged by means of an
 * HTTP response code in the range [200 - 299]. Error 503 is
 * considered an App Engine system error instead of an application
 * error. Requests returning error 503 will be retried regardless of
 * retry configuration and not counted against retry counts. Any other
 * response code, or a failure to receive a response before the
 * deadline, constitutes a failed attempt.
 *
 * @property {number} httpMethod
 *   The HTTP method to use for the request. PATCH and OPTIONS are not
 *   permitted.
 *
 *   The number should be among the values of [HttpMethod]{@link google.cloud.scheduler.v1.HttpMethod}
 *
 * @property {Object} appEngineRouting
 *   App Engine Routing setting for the job.
 *
 *   This object should have the same structure as [AppEngineRouting]{@link google.cloud.scheduler.v1.AppEngineRouting}
 *
 * @property {string} relativeUri
 *   The relative URI.
 *
 *   The relative URL must begin with "/" and must be a valid HTTP relative URL.
 *   It can contain a path, query string arguments, and `#` fragments.
 *   If the relative URL is empty, then the root path "/" will be used.
 *   No spaces are allowed, and the maximum length allowed is 2083 characters.
 *
 * @property {Object.<string, string>} headers
 *   HTTP request headers.
 *
 *   This map contains the header field names and values. Headers can be set
 *   when the job is created.
 *
 *   Cloud Scheduler sets some headers to default values:
 *
 *   * `User-Agent`: By default, this header is
 *     `"AppEngine-Google; (+http://code.google.com/appengine)"`.
 *     This header can be modified, but Cloud Scheduler will append
 *     `"AppEngine-Google; (+http://code.google.com/appengine)"` to the
 *     modified `User-Agent`.
 *   * `X-CloudScheduler`: This header will be set to true.
 *
 *   If the job has an body, Cloud Scheduler sets
 *   the following headers:
 *
 *   * `Content-Type`: By default, the `Content-Type` header is set to
 *     `"application/octet-stream"`. The default can be overridden by explictly
 *     setting `Content-Type` to a particular media type when the job is
 *     created.
 *     For example, `Content-Type` can be set to `"application/json"`.
 *   * `Content-Length`: This is computed by Cloud Scheduler. This value is
 *     output only. It cannot be changed.
 *
 *   The headers below are output only. They cannot be set or overridden:
 *
 *   * `X-Google-*`: For Google internal use only.
 *   * `X-AppEngine-*`: For Google internal use only.
 *
 *   In addition, some App Engine headers, which contain
 *   job-specific information, are also be sent to the job handler.
 *
 * @property {Buffer} body
 *   Body.
 *
 *   HTTP request body. A request body is allowed only if the HTTP method is
 *   POST or PUT. It will result in invalid argument error to set a body on a
 *   job with an incompatible HttpMethod.
 *
 * @typedef AppEngineHttpTarget
 * @memberof google.cloud.scheduler.v1
 * @see [google.cloud.scheduler.v1.AppEngineHttpTarget definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/scheduler/v1/target.proto}
 */
const AppEngineHttpTarget = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Pub/Sub target. The job will be delivered by publishing a message to
 * the given Pub/Sub topic.
 *
 * @property {string} topicName
 *   Required.
 *
 *   The name of the Cloud Pub/Sub topic to which messages will
 *   be published when a job is delivered. The topic name must be in the
 *   same format as required by PubSub's
 *   [PublishRequest.name](https://cloud.google.com/pubsub/docs/reference/rpc/google.pubsub.v1#publishrequest),
 *   for example `projects/PROJECT_ID/topics/TOPIC_ID`.
 *
 *   The topic must be in the same project as the Cloud Scheduler job.
 *
 * @property {Buffer} data
 *   The message payload for PubsubMessage.
 *
 *   Pubsub message must contain either non-empty data, or at least one
 *   attribute.
 *
 * @property {Object.<string, string>} attributes
 *   Attributes for PubsubMessage.
 *
 *   Pubsub message must contain either non-empty data, or at least one
 *   attribute.
 *
 * @typedef PubsubTarget
 * @memberof google.cloud.scheduler.v1
 * @see [google.cloud.scheduler.v1.PubsubTarget definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/scheduler/v1/target.proto}
 */
const PubsubTarget = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * App Engine Routing.
 *
 * For more information about services, versions, and instances see
 * [An Overview of App
 * Engine](https://cloud.google.com/appengine/docs/python/an-overview-of-app-engine),
 * [Microservices Architecture on Google App
 * Engine](https://cloud.google.com/appengine/docs/python/microservices-on-app-engine),
 * [App Engine Standard request
 * routing](https://cloud.google.com/appengine/docs/standard/python/how-requests-are-routed),
 * and [App Engine Flex request
 * routing](https://cloud.google.com/appengine/docs/flexible/python/how-requests-are-routed).
 *
 * @property {string} service
 *   App service.
 *
 *   By default, the job is sent to the service which is the default
 *   service when the job is attempted.
 *
 * @property {string} version
 *   App version.
 *
 *   By default, the job is sent to the version which is the default
 *   version when the job is attempted.
 *
 * @property {string} instance
 *   App instance.
 *
 *   By default, the job is sent to an instance which is available when
 *   the job is attempted.
 *
 *   Requests can only be sent to a specific instance if
 *   [manual scaling is used in App Engine
 *   Standard](https://cloud.google.com/appengine/docs/python/an-overview-of-app-engine?hl=en_US#scaling_types_and_instance_classes).
 *   App Engine Flex does not support instances. For more information, see
 *   [App Engine Standard request
 *   routing](https://cloud.google.com/appengine/docs/standard/python/how-requests-are-routed)
 *   and [App Engine Flex request
 *   routing](https://cloud.google.com/appengine/docs/flexible/python/how-requests-are-routed).
 *
 * @property {string} host
 *   Output only. The host that the job is sent to.
 *
 *   For more information about how App Engine requests are routed, see
 *   [here](https://cloud.google.com/appengine/docs/standard/python/how-requests-are-routed).
 *
 *   The host is constructed as:
 *
 *
 *   * `host = [application_domain_name]`</br>
 *     `| [service] + '.' + [application_domain_name]`</br>
 *     `| [version] + '.' + [application_domain_name]`</br>
 *     `| [version_dot_service]+ '.' + [application_domain_name]`</br>
 *     `| [instance] + '.' + [application_domain_name]`</br>
 *     `| [instance_dot_service] + '.' + [application_domain_name]`</br>
 *     `| [instance_dot_version] + '.' + [application_domain_name]`</br>
 *     `| [instance_dot_version_dot_service] + '.' + [application_domain_name]`
 *
 *   * `application_domain_name` = The domain name of the app, for
 *     example <app-id>.appspot.com, which is associated with the
 *     job's project ID.
 *
 *   * `service =` service
 *
 *   * `version =` version
 *
 *   * `version_dot_service =`
 *     version `+ '.' +`
 *     service
 *
 *   * `instance =` instance
 *
 *   * `instance_dot_service =`
 *     instance `+ '.' +`
 *     service
 *
 *   * `instance_dot_version =`
 *     instance `+ '.' +`
 *     version
 *
 *   * `instance_dot_version_dot_service =`
 *     instance `+ '.' +`
 *     version `+ '.' +`
 *     service
 *
 *
 *   If service is empty, then the job will be sent
 *   to the service which is the default service when the job is attempted.
 *
 *   If version is empty, then the job will be sent
 *   to the version which is the default version when the job is attempted.
 *
 *   If instance is empty, then the job will be
 *   sent to an instance which is available when the job is attempted.
 *
 *   If service,
 *   version, or
 *   instance is invalid, then the job will be sent
 *   to the default version of the default service when the job is attempted.
 *
 * @typedef AppEngineRouting
 * @memberof google.cloud.scheduler.v1
 * @see [google.cloud.scheduler.v1.AppEngineRouting definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/scheduler/v1/target.proto}
 */
const AppEngineRouting = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Contains information needed for generating an
 * [OAuth token](https://developers.google.com/identity/protocols/OAuth2).
 * This type of authorization should be used when sending requests to a GCP
 * endpoint.
 *
 * @property {string} serviceAccountEmail
 *   [Service account email](https://cloud.google.com/iam/docs/service-accounts)
 *   to be used for generating OAuth token.
 *   The service account must be within the same project as the job. The caller
 *   must have iam.serviceAccounts.actAs permission for the service account.
 *
 * @property {string} scope
 *   OAuth scope to be used for generating OAuth access token.
 *   If not specified, "https://www.googleapis.com/auth/cloud-platform"
 *   will be used.
 *
 * @typedef OAuthToken
 * @memberof google.cloud.scheduler.v1
 * @see [google.cloud.scheduler.v1.OAuthToken definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/scheduler/v1/target.proto}
 */
const OAuthToken = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Contains information needed for generating an
 * [OpenID Connect
 * token](https://developers.google.com/identity/protocols/OpenIDConnect). This
 * type of authorization should be used when sending requests to third party
 * endpoints or Cloud Run.
 *
 * @property {string} serviceAccountEmail
 *   [Service account email](https://cloud.google.com/iam/docs/service-accounts)
 *   to be used for generating OIDC token.
 *   The service account must be within the same project as the job. The caller
 *   must have iam.serviceAccounts.actAs permission for the service account.
 *
 * @property {string} audience
 *   Audience to be used when generating OIDC token. If not specified, the URI
 *   specified in target will be used.
 *
 * @typedef OidcToken
 * @memberof google.cloud.scheduler.v1
 * @see [google.cloud.scheduler.v1.OidcToken definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/scheduler/v1/target.proto}
 */
const OidcToken = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The HTTP method used to execute the job.
 *
 * @enum {number}
 * @memberof google.cloud.scheduler.v1
 */
const HttpMethod = {

  /**
   * HTTP method unspecified. Defaults to POST.
   */
  HTTP_METHOD_UNSPECIFIED: 0,

  /**
   * HTTP POST
   */
  POST: 1,

  /**
   * HTTP GET
   */
  GET: 2,

  /**
   * HTTP HEAD
   */
  HEAD: 3,

  /**
   * HTTP PUT
   */
  PUT: 4,

  /**
   * HTTP DELETE
   */
  DELETE: 5,

  /**
   * HTTP PATCH
   */
  PATCH: 6,

  /**
   * HTTP OPTIONS
   */
  OPTIONS: 7
};