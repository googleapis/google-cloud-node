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
 * A common proto for logging HTTP requests. Only contains semantics
 * defined by the HTTP specification. Product-specific logging
 * information MUST be defined in a separate message.
 *
 * @external "google.logging.type.HttpRequest"
 * @property {string} requestMethod
 *   The request method. Examples: `"GET"`, `"HEAD"`, `"PUT"`, `"POST"`.
 *
 * @property {string} requestUrl
 *   The scheme (http, https), the host name, the path and the query
 *   portion of the URL that was requested.
 *   Example: `"http://example.com/some/info?color=red"`.
 *
 * @property {number} requestSize
 *   The size of the HTTP request message in bytes, including the request
 *   headers and the request body.
 *
 * @property {number} status
 *   The response code indicating the status of response.
 *   Examples: 200, 404.
 *
 * @property {number} responseSize
 *   The size of the HTTP response message sent back to the client, in bytes,
 *   including the response headers and the response body.
 *
 * @property {string} userAgent
 *   The user agent sent by the client. Example:
 *   `"Mozilla/4.0 (compatible; MSIE 6.0; Windows 98; Q312461; .NET CLR 1.0.3705)"`.
 *
 * @property {string} remoteIp
 *   The IP address (IPv4 or IPv6) of the client that issued the HTTP
 *   request. Examples: `"192.168.1.1"`, `"FE80::0202:B3FF:FE1E:8329"`.
 *
 * @property {string} serverIp
 *   The IP address (IPv4 or IPv6) of the origin server that the request was
 *   sent to.
 *
 * @property {string} referer
 *   The referer URL of the request, as defined in
 *   [HTTP/1.1 Header Field Definitions](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html).
 *
 * @property {Object} latency
 *   The request processing latency on the server, from the time the request was
 *   received until the response was sent.
 *
 *   This object should have the same structure as [google.protobuf.Duration]{@link external:"google.protobuf.Duration"}
 *
 * @property {boolean} cacheLookup
 *   Whether or not a cache lookup was attempted.
 *
 * @property {boolean} cacheHit
 *   Whether or not an entity was served from cache
 *   (with or without validation).
 *
 * @property {boolean} cacheValidatedWithOriginServer
 *   Whether or not the response was validated with the origin server before
 *   being served from cache. This field is only meaningful if `cache_hit` is
 *   True.
 *
 * @property {number} cacheFillBytes
 *   The number of HTTP response bytes inserted into cache. Set only when a
 *   cache fill was attempted.
 *
 * @see [google.logging.type.HttpRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/logging/type/http_request.proto}
 */