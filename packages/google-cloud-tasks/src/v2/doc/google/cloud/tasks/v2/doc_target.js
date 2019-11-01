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
 * HTTP request.
 *
 * The task will be pushed to the worker as an HTTP request. If the worker
 * or the redirected worker acknowledges the task by returning a successful HTTP
 * response code ([`200` - `299`]), the task will removed from the queue. If
 * any other HTTP response code is returned or no response is received, the
 * task will be retried according to the following:
 *
 * * User-specified throttling: retry configuration,
 *   rate limits, and the queue's state.
 *
 * * System throttling: To prevent the worker from overloading, Cloud Tasks may
 *   temporarily reduce the queue's effective rate. User-specified settings
 *   will not be changed.
 *
 *  System throttling happens because:
 *
 *   * Cloud Tasks backs off on all errors. Normally the backoff specified in
 *     rate limits will be used. But if the worker returns
 *     `429` (Too Many Requests), `503` (Service Unavailable), or the rate of
 *     errors is high, Cloud Tasks will use a higher backoff rate. The retry
 *     specified in the `Retry-After` HTTP response header is considered.
 *
 *   * To prevent traffic spikes and to smooth sudden large traffic spikes,
 *     dispatches ramp up slowly when the queue is newly created or idle and
 *     if large numbers of tasks suddenly become available to dispatch (due to
 *     spikes in create task rates, the queue being unpaused, or many tasks
 *     that are scheduled at the same time).
 *
 * @property {string} url
 *   Required. The full url path that the request will be sent to.
 *
 *   This string must begin with either "http://" or "https://". Some examples
 *   are: `http://acme.com` and `https://acme.com/sales:8080`. Cloud Tasks will
 *   encode some characters for safety and compatibility. The maximum allowed
 *   URL length is 2083 characters after encoding.
 *
 *   The `Location` header response from a redirect response [`300` - `399`]
 *   may be followed. The redirect is not counted as a separate attempt.
 *
 * @property {number} httpMethod
 *   The HTTP method to use for the request. The default is POST.
 *
 *   The number should be among the values of [HttpMethod]{@link google.cloud.tasks.v2.HttpMethod}
 *
 * @property {Object.<string, string>} headers
 *   HTTP request headers.
 *
 *   This map contains the header field names and values.
 *   Headers can be set when the
 *   task is created.
 *
 *   These headers represent a subset of the headers that will accompany the
 *   task's HTTP request. Some HTTP request headers will be ignored or replaced.
 *
 *   A partial list of headers that will be ignored or replaced is:
 *
 *   * Host: This will be computed by Cloud Tasks and derived from
 *     HttpRequest.url.
 *   * Content-Length: This will be computed by Cloud Tasks.
 *   * User-Agent: This will be set to `"Google-Cloud-Tasks"`.
 *   * X-Google-*: Google use only.
 *   * X-AppEngine-*: Google use only.
 *
 *   `Content-Type` won't be set by Cloud Tasks. You can explicitly set
 *   `Content-Type` to a media type when the
 *    task is created.
 *    For example, `Content-Type` can be set to `"application/octet-stream"` or
 *    `"application/json"`.
 *
 *   Headers which can have multiple values (according to RFC2616) can be
 *   specified using comma-separated values.
 *
 *   The size of the headers must be less than 80KB.
 *
 * @property {Buffer} body
 *   HTTP request body.
 *
 *   A request body is allowed only if the
 *   HTTP method is POST, PUT, or PATCH. It is an
 *   error to set body on a task with an incompatible HttpMethod.
 *
 * @property {Object} oauthToken
 *   If specified, an
 *   [OAuth token](https://developers.google.com/identity/protocols/OAuth2)
 *   will be generated and attached as an `Authorization` header in the HTTP
 *   request.
 *
 *   This type of authorization should generally only be used when calling
 *   Google APIs hosted on *.googleapis.com.
 *
 *   This object should have the same structure as [OAuthToken]{@link google.cloud.tasks.v2.OAuthToken}
 *
 * @property {Object} oidcToken
 *   If specified, an
 *   [OIDC](https://developers.google.com/identity/protocols/OpenIDConnect)
 *   token will be generated and attached as an `Authorization` header in the
 *   HTTP request.
 *
 *   This type of authorization can be used for many scenarios, including
 *   calling Cloud Run, or endpoints where you intend to validate the token
 *   yourself.
 *
 *   This object should have the same structure as [OidcToken]{@link google.cloud.tasks.v2.OidcToken}
 *
 * @typedef HttpRequest
 * @memberof google.cloud.tasks.v2
 * @see [google.cloud.tasks.v2.HttpRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/tasks/v2/target.proto}
 */
const HttpRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * App Engine HTTP request.
 *
 * The message defines the HTTP request that is sent to an App Engine app when
 * the task is dispatched.
 *
 * Using AppEngineHttpRequest requires
 * [`appengine.applications.get`](https://cloud.google.com/appengine/docs/admin-api/access-control)
 * Google IAM permission for the project
 * and the following scope:
 *
 * `https://www.googleapis.com/auth/cloud-platform`
 *
 * The task will be delivered to the App Engine app which belongs to the same
 * project as the queue. For more information, see
 * [How Requests are
 * Routed](https://cloud.google.com/appengine/docs/standard/python/how-requests-are-routed)
 * and how routing is affected by
 * [dispatch
 * files](https://cloud.google.com/appengine/docs/python/config/dispatchref).
 * Traffic is encrypted during transport and never leaves Google datacenters.
 * Because this traffic is carried over a communication mechanism internal to
 * Google, you cannot explicitly set the protocol (for example, HTTP or HTTPS).
 * The request to the handler, however, will appear to have used the HTTP
 * protocol.
 *
 * The AppEngineRouting used to construct the URL that the task is
 * delivered to can be set at the queue-level or task-level:
 *
 * * If app_engine_routing_override is set on the
 *    queue, this value is used for all
 *    tasks in the queue, no matter what the setting is for the task-level
 *    app_engine_routing.
 *
 *
 * The `url` that the task will be sent to is:
 *
 * * `url =` host `+`
 *   relative_uri
 *
 * Tasks can be dispatched to secure app handlers, unsecure app handlers, and
 * URIs restricted with
 * [`login:
 * admin`](https://cloud.google.com/appengine/docs/standard/python/config/appref).
 * Because tasks are not run as any user, they cannot be dispatched to URIs
 * restricted with
 * [`login:
 * required`](https://cloud.google.com/appengine/docs/standard/python/config/appref)
 * Task dispatches also do not follow redirects.
 *
 * The task attempt has succeeded if the app's request handler returns an HTTP
 * response code in the range [`200` - `299`]. The task attempt has failed if
 * the app's handler returns a non-2xx response code or Cloud Tasks does
 * not receive response before the deadline. Failed
 * tasks will be retried according to the
 * retry configuration. `503` (Service Unavailable) is
 * considered an App Engine system error instead of an application error and
 * will cause Cloud Tasks' traffic congestion control to temporarily throttle
 * the queue's dispatches. Unlike other types of task targets, a `429` (Too Many
 * Requests) response from an app handler does not cause traffic congestion
 * control to throttle the queue.
 *
 * @property {number} httpMethod
 *   The HTTP method to use for the request. The default is POST.
 *
 *   The app's request handler for the task's target URL must be able to handle
 *   HTTP requests with this http_method, otherwise the task attempt will fail
 *   with error code 405 (Method Not Allowed). See
 *   [Writing a push task request
 *   handler](https://cloud.google.com/appengine/docs/java/taskqueue/push/creating-handlers#writing_a_push_task_request_handler)
 *   and the documentation for the request handlers in the language your app is
 *   written in e.g.
 *   [Python Request
 *   Handler](https://cloud.google.com/appengine/docs/python/tools/webapp/requesthandlerclass).
 *
 *   The number should be among the values of [HttpMethod]{@link google.cloud.tasks.v2.HttpMethod}
 *
 * @property {Object} appEngineRouting
 *   Task-level setting for App Engine routing.
 *
 *   * If app_engine_routing_override is set on the
 *      queue, this value is used for all
 *      tasks in the queue, no matter what the setting is for the task-level
 *      app_engine_routing.
 *
 *   This object should have the same structure as [AppEngineRouting]{@link google.cloud.tasks.v2.AppEngineRouting}
 *
 * @property {string} relativeUri
 *   The relative URI.
 *
 *   The relative URI must begin with "/" and must be a valid HTTP relative URI.
 *   It can contain a path and query string arguments.
 *   If the relative URI is empty, then the root path "/" will be used.
 *   No spaces are allowed, and the maximum length allowed is 2083 characters.
 *
 * @property {Object.<string, string>} headers
 *   HTTP request headers.
 *
 *   This map contains the header field names and values.
 *   Headers can be set when the
 *   task is created.
 *   Repeated headers are not supported but a header value can contain commas.
 *
 *   Cloud Tasks sets some headers to default values:
 *
 *   * `User-Agent`: By default, this header is
 *     `"AppEngine-Google; (+http://code.google.com/appengine)"`.
 *     This header can be modified, but Cloud Tasks will append
 *     `"AppEngine-Google; (+http://code.google.com/appengine)"` to the
 *     modified `User-Agent`.
 *
 *   If the task has a body, Cloud
 *   Tasks sets the following headers:
 *
 *   * `Content-Type`: By default, the `Content-Type` header is set to
 *     `"application/octet-stream"`. The default can be overridden by explicitly
 *     setting `Content-Type` to a particular media type when the
 *     task is created.
 *     For example, `Content-Type` can be set to `"application/json"`.
 *   * `Content-Length`: This is computed by Cloud Tasks. This value is
 *     output only.   It cannot be changed.
 *
 *   The headers below cannot be set or overridden:
 *
 *   * `Host`
 *   * `X-Google-*`
 *   * `X-AppEngine-*`
 *
 *   In addition, Cloud Tasks sets some headers when the task is dispatched,
 *   such as headers containing information about the task; see
 *   [request
 *   headers](https://cloud.google.com/appengine/docs/python/taskqueue/push/creating-handlers#reading_request_headers).
 *   These headers are set only when the task is dispatched, so they are not
 *   visible when the task is returned in a Cloud Tasks response.
 *
 *   Although there is no specific limit for the maximum number of headers or
 *   the size, there is a limit on the maximum size of the Task. For more
 *   information, see the CreateTask documentation.
 *
 * @property {Buffer} body
 *   HTTP request body.
 *
 *   A request body is allowed only if the HTTP method is POST or PUT. It is
 *   an error to set a body on a task with an incompatible HttpMethod.
 *
 * @typedef AppEngineHttpRequest
 * @memberof google.cloud.tasks.v2
 * @see [google.cloud.tasks.v2.AppEngineHttpRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/tasks/v2/target.proto}
 */
const AppEngineHttpRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * App Engine Routing.
 *
 * Defines routing characteristics specific to App Engine - service, version,
 * and instance.
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
 * Using AppEngineRouting requires
 * [`appengine.applications.get`](https://cloud.google.com/appengine/docs/admin-api/access-control)
 * Google IAM permission for the project
 * and the following scope:
 *
 * `https://www.googleapis.com/auth/cloud-platform`
 *
 * @property {string} service
 *   App service.
 *
 *   By default, the task is sent to the service which is the default
 *   service when the task is attempted.
 *
 *   For some queues or tasks which were created using the App Engine
 *   Task Queue API, host is not parsable
 *   into service,
 *   version, and
 *   instance. For example, some tasks
 *   which were created using the App Engine SDK use a custom domain
 *   name; custom domains are not parsed by Cloud Tasks. If
 *   host is not parsable, then
 *   service,
 *   version, and
 *   instance are the empty string.
 *
 * @property {string} version
 *   App version.
 *
 *   By default, the task is sent to the version which is the default
 *   version when the task is attempted.
 *
 *   For some queues or tasks which were created using the App Engine
 *   Task Queue API, host is not parsable
 *   into service,
 *   version, and
 *   instance. For example, some tasks
 *   which were created using the App Engine SDK use a custom domain
 *   name; custom domains are not parsed by Cloud Tasks. If
 *   host is not parsable, then
 *   service,
 *   version, and
 *   instance are the empty string.
 *
 * @property {string} instance
 *   App instance.
 *
 *   By default, the task is sent to an instance which is available when
 *   the task is attempted.
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
 *   Output only. The host that the task is sent to.
 *
 *   The host is constructed from the domain name of the app associated with
 *   the queue's project ID (for example <app-id>.appspot.com), and the
 *   service, version,
 *   and instance. Tasks which were created using
 *   the App Engine SDK might have a custom domain name.
 *
 *   For more information, see
 *   [How Requests are
 *   Routed](https://cloud.google.com/appengine/docs/standard/python/how-requests-are-routed).
 *
 * @typedef AppEngineRouting
 * @memberof google.cloud.tasks.v2
 * @see [google.cloud.tasks.v2.AppEngineRouting definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/tasks/v2/target.proto}
 */
const AppEngineRouting = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Contains information needed for generating an
 * [OAuth token](https://developers.google.com/identity/protocols/OAuth2).
 * This type of authorization should generally only be used when calling Google
 * APIs hosted on *.googleapis.com.
 *
 * @property {string} serviceAccountEmail
 *   [Service account email](https://cloud.google.com/iam/docs/service-accounts)
 *   to be used for generating OAuth token.
 *   The service account must be within the same project as the queue. The
 *   caller must have iam.serviceAccounts.actAs permission for the service
 *   account.
 *
 * @property {string} scope
 *   OAuth scope to be used for generating OAuth access token.
 *   If not specified, "https://www.googleapis.com/auth/cloud-platform"
 *   will be used.
 *
 * @typedef OAuthToken
 * @memberof google.cloud.tasks.v2
 * @see [google.cloud.tasks.v2.OAuthToken definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/tasks/v2/target.proto}
 */
const OAuthToken = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Contains information needed for generating an
 * [OpenID Connect
 * token](https://developers.google.com/identity/protocols/OpenIDConnect).
 * This type of authorization can be used for many scenarios, including
 * calling Cloud Run, or endpoints where you intend to validate the token
 * yourself.
 *
 * @property {string} serviceAccountEmail
 *   [Service account email](https://cloud.google.com/iam/docs/service-accounts)
 *   to be used for generating OIDC token.
 *   The service account must be within the same project as the queue. The
 *   caller must have iam.serviceAccounts.actAs permission for the service
 *   account.
 *
 * @property {string} audience
 *   Audience to be used when generating OIDC token. If not specified, the URI
 *   specified in target will be used.
 *
 * @typedef OidcToken
 * @memberof google.cloud.tasks.v2
 * @see [google.cloud.tasks.v2.OidcToken definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/tasks/v2/target.proto}
 */
const OidcToken = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The HTTP method used to deliver the task.
 *
 * @enum {number}
 * @memberof google.cloud.tasks.v2
 */
const HttpMethod = {

  /**
   * HTTP method unspecified
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