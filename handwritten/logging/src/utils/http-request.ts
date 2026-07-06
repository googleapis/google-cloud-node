/*!
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*
 * This file contains helpers, used in both middleware and non-middleware
 * scenarios, to format http.incomingMessage into structured HTTPRequests.
 *
 * See more:
 * https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry#httprequest
 */

import * as http from 'http';
export type RawHttpRequest = http.IncomingMessage & CloudLoggingHttpRequest;

export interface CloudLoggingHttpRequest {
  requestMethod?: string;
  requestUrl?: string;
  requestSize?: number;
  status?: number;
  responseSize?: number;
  userAgent?: string;
  remoteIp?: string;
  serverIp?: string;
  referer?: string;
  latency?: {seconds: number; nanos: number};
  cacheLookup?: boolean;
  cacheHit?: boolean;
  cacheValidatedWithOriginServer?: boolean;
  cacheFillBytes?: number;
  protocol?: string;
}

/**
 * Abstraction of http.IncomingMessage used by middleware implementation.
 */
export interface ServerRequest extends http.IncomingMessage {
  originalUrl: string;
}

/**
 * makeHttpRequestData turns raw incoming HTTPRequests into structured
 * HTTPRequest objects interpreted by Cloud Logging.
 *
 * @param req
 * @param res
 * @param latencyMilliseconds
 */
export function makeHttpRequestData(
  req: ServerRequest | http.IncomingMessage,
  res?: http.ServerResponse,
  latencyMilliseconds?: number
): CloudLoggingHttpRequest {
  let requestUrl,
    protocol,
    requestMethod,
    userAgent,
    referer,
    status,
    responseSize,
    latency;
  // Format request properties
  if (req.url) requestUrl = req.url;
  // OriginalURL overwrites inferred url
  if ('originalUrl' in req && req.originalUrl) requestUrl = req.originalUrl;
  // Format protocol from valid URL
  if (requestUrl) {
    try {
      const url = new URL(requestUrl);
      protocol = url.protocol;
    } catch (e) {
      // Library should not panic
    }
  }
  req.method ? (requestMethod = req.method) : null;
  if (req.headers && req.headers['user-agent']) {
    req.headers['user-agent'] ? (userAgent = req.headers['user-agent']) : null;
    req.headers['referer'] ? (referer = req.headers['referer']) : null;
  }
  // Format response properties
  if (res) {
    res.statusCode ? (status = res.statusCode) : null;
    responseSize =
      (res.getHeader && Number(res.getHeader('Content-Length'))) || 0;
  }
  // Format latency
  if (latencyMilliseconds) {
    latency = {
      seconds: Math.floor(latencyMilliseconds / 1e3),
      nanos: Math.floor((latencyMilliseconds % 1e3) * 1e6),
    };
  }
  // Only include the property if its value exists
  return Object.assign(
    {},
    requestUrl ? {requestUrl} : null,
    protocol ? {protocol} : null,
    requestMethod ? {requestMethod} : null,
    userAgent ? {userAgent} : null,
    referer ? {referer} : null,
    responseSize ? {responseSize} : null,
    status ? {status} : null,
    latency ? {latency} : null
  );
}

/**
 * isRawHttpRequest detects whether a request object extends the
 * http.IncomingMessage class. It should return true on HTTP compliant requests
 * and all requests created by an http.Server.
 *
 * @param req
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isRawHttpRequest(req?: any): req is RawHttpRequest {
  if (
    req &&
    ('originalUrl' in req ||
      'headers' in req ||
      'method' in req ||
      'url' in req)
  ) {
    return true;
  }
  return false;
}
