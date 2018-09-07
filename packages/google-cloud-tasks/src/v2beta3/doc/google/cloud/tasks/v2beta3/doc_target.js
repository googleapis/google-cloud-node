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
 * App Engine HTTP queue.
 *
 * The task will be delivered to the App Engine application hostname
 * specified by its AppEngineHttpQueue and AppEngineHttpRequest.
 * The documentation for AppEngineHttpRequest explains how the
 * task's host URL is constructed.
 *
 * Using AppEngineHttpQueue requires
 * [`appengine.applications.get`](https://cloud.google.com/appengine/docs/admin-api/access-control)
 * Google IAM permission for the project
 * and the following scope:
 *
 * `https://www.googleapis.com/auth/cloud-platform`
 *
 * @property {Object} appEngineRoutingOverride
 *   Overrides for the
 *   task-level app_engine_routing.
 *
 *   If set, `app_engine_routing_override` is used for all tasks in
 *   the queue, no matter what the setting is for the
 *   task-level app_engine_routing.
 *
 *   This object should have the same structure as [AppEngineRouting]{@link google.cloud.tasks.v2beta3.AppEngineRouting}
 *
 * @typedef AppEngineHttpQueue
 * @memberof google.cloud.tasks.v2beta3
 * @see [google.cloud.tasks.v2beta3.AppEngineHttpQueue definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/tasks/v2beta3/target.proto}
 */
var AppEngineHttpQueue = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * App Engine HTTP request.
 *
 * The message defines the HTTP request that is sent to an App Engine app when
 * the task is dispatched.
 *
 * This proto can only be used for tasks in a queue which has
 * app_engine_http_queue set.
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
 * [How Requests are Routed](https://cloud.google.com/appengine/docs/standard/python/how-requests-are-routed)
 * and how routing is affected by
 * [dispatch files](https://cloud.google.com/appengine/docs/python/config/dispatchref).
 *
 * The AppEngineRouting used to construct the URL that the task is
 * delivered to can be set at the queue-level or task-level:
 *
 * * If set,
 *    app_engine_routing_override
 *    is used for all tasks in the queue, no matter what the setting
 *    is for the
 *    task-level app_engine_routing.
 *
 *
 * The `url` that the task will be sent to is:
 *
 * * `url =` host `+`
 *   relative_uri
 *
 * The task attempt has succeeded if the app's request handler returns
 * an HTTP response code in the range [`200` - `299`]. `503` is
 * considered an App Engine system error instead of an application
 * error. Requests returning error `503` will be retried regardless of
 * retry configuration and not counted against retry counts.
 * Any other response code or a failure to receive a response before the
 * deadline is a failed attempt.
 *
 * @property {number} httpMethod
 *   The HTTP method to use for the request. The default is POST.
 *
 *   The app's request handler for the task's target URL must be able to handle
 *   HTTP requests with this http_method, otherwise the task attempt will fail
 *   with error code 405 (Method Not Allowed). See
 *   [Writing a push task request handler](https://cloud.google.com/appengine/docs/java/taskqueue/push/creating-handlers#writing_a_push_task_request_handler)
 *   and the documentation for the request handlers in the language your app is
 *   written in e.g.
 *   [Python Request Handler](https://cloud.google.com/appengine/docs/python/tools/webapp/requesthandlerclass).
 *
 *   The number should be among the values of [HttpMethod]{@link google.cloud.tasks.v2beta3.HttpMethod}
 *
 * @property {Object} appEngineRouting
 *   Task-level setting for App Engine routing.
 *
 *   If set,
 *   app_engine_routing_override
 *   is used for all tasks in the queue, no matter what the setting is for the
 *   task-level app_engine_routing.
 *
 *   This object should have the same structure as [AppEngineRouting]{@link google.cloud.tasks.v2beta3.AppEngineRouting}
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
 *   [request headers](https://cloud.google.com/appengine/docs/python/taskqueue/push/creating-handlers#reading_request_headers).
 *   These headers are set only when the task is dispatched, so they are not
 *   visible when the task is returned in a Cloud Tasks response.
 *
 *   Although there is no specific limit for the maximum number of headers or
 *   the size, there is a limit on the maximum size of the Task. For more
 *   information, see the CreateTask documentation.
 *
 * @property {string} body
 *   HTTP request body.
 *
 *   A request body is allowed only if the HTTP method is POST or PUT. It is
 *   an error to set a body on a task with an incompatible HttpMethod.
 *
 * @typedef AppEngineHttpRequest
 * @memberof google.cloud.tasks.v2beta3
 * @see [google.cloud.tasks.v2beta3.AppEngineHttpRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/tasks/v2beta3/target.proto}
 */
var AppEngineHttpRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * App Engine Routing.
 *
 * Specifies the target URI. Since this target type dispatches tasks to secure
 * app handlers, unsecure app handlers, and URIs restricted with
 * [`login: admin`](https://cloud.google.com/appengine/docs/standard/python/config/appref)
 * the protocol (for example, HTTP or HTTPS) cannot be explictly specified.
 * Task dispatches do not follow redirects and cannot target URI paths
 * restricted with
 * [`login: required`](https://cloud.google.com/appengine/docs/standard/python/config/appref)
 * because tasks are not run as any user.
 *
 * For more information about services, versions, and instances see
 * [An Overview of App Engine](https://cloud.google.com/appengine/docs/python/an-overview-of-app-engine),
 * [Microservices Architecture on Google App Engine](https://cloud.google.com/appengine/docs/python/microservices-on-app-engine),
 * [App Engine Standard request routing](https://cloud.google.com/appengine/docs/standard/python/how-requests-are-routed),
 * and [App Engine Flex request routing](https://cloud.google.com/appengine/docs/flexible/python/how-requests-are-routed).
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
 *   [manual scaling is used in App Engine Standard](https://cloud.google.com/appengine/docs/python/an-overview-of-app-engine?hl=en_US#scaling_types_and_instance_classes).
 *   App Engine Flex does not support instances. For more information, see
 *   [App Engine Standard request routing](https://cloud.google.com/appengine/docs/standard/python/how-requests-are-routed)
 *   and [App Engine Flex request routing](https://cloud.google.com/appengine/docs/flexible/python/how-requests-are-routed).
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
 *   [How Requests are Routed](https://cloud.google.com/appengine/docs/standard/python/how-requests-are-routed).
 *
 * @typedef AppEngineRouting
 * @memberof google.cloud.tasks.v2beta3
 * @see [google.cloud.tasks.v2beta3.AppEngineRouting definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/tasks/v2beta3/target.proto}
 */
var AppEngineRouting = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The HTTP method used to execute the task.
 *
 * @enum {number}
 * @memberof google.cloud.tasks.v2beta3
 */
var HttpMethod = {

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
  DELETE: 5
};