/**
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

// proto-over-HTTP request encoding and decoding

import * as serializer from 'proto3-json-serializer';
import {defaultToObjectOptions} from './fallback';
import {FetchParameters, FetchParametersMethod} from './fallbackServiceStub';
import {GoogleError} from './googleError';
import {rpcCodeFromHttpStatusCode} from './status';
import {transcode} from './transcoding';

export function encodeRequest(
  rpc: protobuf.Method,
  protocol: string,
  servicePath: string,
  servicePort: number,
  request: {},
  numericEnums: boolean,
  minifyJson: boolean,
): FetchParameters {
  const headers: {[key: string]: string} = {
    'Content-Type': 'application/json',
  };
  const message = rpc.resolvedRequestType!.fromObject(request);
  const json = serializer.toProto3JSON(message, {
    numericEnums,
  });
  if (!json) {
    throw new Error(`Cannot send null request to RPC ${rpc.name}.`);
  }
  if (typeof json !== 'object' || Array.isArray(json)) {
    throw new Error(`Request to RPC ${rpc.name} must be an object.`);
  }

  const transcoded = transcode(json, rpc.parsedOptions);

  if (!transcoded) {
    throw new Error(
      `Cannot build HTTP request for ${JSON.stringify(json)}, method: ${
        rpc.name
      }`,
    );
  }

  // If numeric enums feature is requested, add extra parameter to the query string
  if (numericEnums) {
    transcoded.queryString =
      (transcoded.queryString ? `${transcoded.queryString}&` : '') +
      '$alt=json%3Benum-encoding=int';
  }

  // If minifyJson feature is requested, disable pretty-print JSON responses
  if (minifyJson) {
    transcoded.queryString =
      (transcoded.queryString ? `${transcoded.queryString}&` : '') +
      '$prettyPrint=0';
  }

  // Converts httpMethod to method that permitted in standard Fetch API spec
  // https://fetch.spec.whatwg.org/#methods
  const method = transcoded.httpMethod.toUpperCase() as FetchParametersMethod;
  const body = JSON.stringify(transcoded.data);
  const url = `${protocol}://${servicePath}:${servicePort}/${transcoded.url.replace(
    /^\//,
    '',
  )}?${transcoded.queryString}`;

  return {
    method,
    url,
    headers,
    body,
  };
}

/**
 * How much of an undecodable error body is kept in the error message: enough to
 * identify the responder, which an error page names in its title, without
 * pasting a whole HTML document into a log line.
 */
const MAX_ERROR_BODY_LENGTH = 1024;

/**
 * Builds the error for a failed response whose body is not the JSON error
 * payload the API defines.
 *
 * An HTTP error does not necessarily come from the API: a GFE, a proxy or a
 * load balancer in front of it answers a 404 or a 502 with an HTML page, and a
 * body can also arrive empty or truncated. Decoding those throws before the
 * received status is recorded anywhere, leaving a bare `SyntaxError` with no
 * `httpStatusCode` for telemetry and no `code`, which the transport then
 * classifies as an UNAVAILABLE transport failure — indistinguishable from never
 * having reached the server. The status on its own is enough to classify the
 * response, so map it the way a decodable body would be.
 *
 * @param rpc The method whose response failed to decode.
 * @param httpStatusCode The status received, when the caller knows it.
 * @param detail Why the body could not be decoded.
 * @param cause The underlying decoding error, if there was one.
 */
function _undecodableErrorResponse(
  rpc: protobuf.Method,
  httpStatusCode: number | undefined,
  detail: string,
  cause?: unknown,
): GoogleError {
  const status =
    httpStatusCode === undefined ? '' : ` with status ${httpStatusCode}`;
  const error = new GoogleError(
    `Error response from RPC ${rpc.name}${status} could not be decoded: ${detail}`,
    cause === undefined ? undefined : {cause},
  );
  if (httpStatusCode !== undefined) {
    error.httpStatusCode = httpStatusCode;
    error.code = rpcCodeFromHttpStatusCode(httpStatusCode);
  }
  return error;
}

export function decodeResponse(
  rpc: protobuf.Method,
  ok: boolean,
  response: Buffer | ArrayBuffer,
  httpStatusCode?: number,
): {} {
  // eslint-disable-next-line n/no-unsupported-features/node-builtins
  const decodedString = new TextDecoder().decode(response);
  if (!decodedString) {
    if (!ok) {
      throw _undecodableErrorResponse(
        rpc,
        httpStatusCode,
        'the response body was empty',
      );
    }
    // A successful response with an empty body is a separate condition, and the
    // transport depends on this exact shape: it treats a throw from here on a
    // 204 as the legacy Apiary empty-success response.
    throw new Error(`Received null response from RPC ${rpc.name}`);
  }
  let json;
  try {
    json = JSON.parse(decodedString);
  } catch (err) {
    if (ok) {
      throw err;
    }
    throw _undecodableErrorResponse(
      rpc,
      httpStatusCode,
      `the response body is not JSON: ${
        decodedString.length > MAX_ERROR_BODY_LENGTH
          ? `${decodedString.slice(0, MAX_ERROR_BODY_LENGTH)}… (truncated)`
          : decodedString
      }`,
      err,
    );
  }
  if (!ok) {
    let error: GoogleError;
    try {
      error = GoogleError.parseHttpError(json);
    } catch (err) {
      // `parseHttpError` indexes into the body, so JSON that parses but is not
      // an object — `null`, a string, a number — fails there for the same
      // reason an HTML body fails above, and must not lose the status either.
      throw _undecodableErrorResponse(
        rpc,
        httpStatusCode,
        'the response body is not a JSON error object',
        err,
      );
    }
    // `parseHttpError` reads the status out of the response body and maps it
    // onto the gRPC `code`, keeping no record of the status the transport
    // actually received — and the body's status can differ from it, or be
    // missing entirely. Record the received one when the caller knows it.
    //
    // Optional because `decodeResponse` is also called from
    // `streamArrayParser`, which only ever decodes an already-successful body
    // and so has no status to pass.
    if (httpStatusCode !== undefined) {
      error.httpStatusCode = httpStatusCode;
    }
    throw error;
  }
  const message = serializer.fromProto3JSON(rpc.resolvedResponseType!, json);
  if (!message) {
    throw new Error(
      `Received null or malformed response from JSON serializer from RPC ${rpc.name}`,
    );
  }
  return rpc.resolvedResponseType!.toObject(message, defaultToObjectOptions);
}
