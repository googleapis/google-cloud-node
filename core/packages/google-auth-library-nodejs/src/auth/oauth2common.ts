// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {Gaxios, GaxiosOptions} from 'gaxios';

import {createCrypto} from '../crypto/crypto';

/** List of HTTP methods that accept request bodies. */
const METHODS_SUPPORTING_REQUEST_BODY = ['PUT', 'POST', 'PATCH'];

/**
 * OAuth error codes.
 * https://tools.ietf.org/html/rfc6749#section-5.2
 */
type OAuthErrorCode =
  | 'invalid_request'
  | 'invalid_client'
  | 'invalid_grant'
  | 'unauthorized_client'
  | 'unsupported_grant_type'
  | 'invalid_scope'
  | string;

/**
 * The standard OAuth error response.
 * https://tools.ietf.org/html/rfc6749#section-5.2
 */
export interface OAuthErrorResponse {
  error: OAuthErrorCode;
  error_description?: string;
  error_uri?: string;
}

/**
 * OAuth client authentication types.
 * https://tools.ietf.org/html/rfc6749#section-2.3
 */
export type ConfidentialClientType = 'basic' | 'request-body';

/**
 * Defines the client authentication credentials for basic and request-body
 * credentials.
 * https://tools.ietf.org/html/rfc6749#section-2.3.1
 */
export interface ClientAuthentication {
  confidentialClientType: ConfidentialClientType;
  clientId: string;
  clientSecret?: string;
}

export interface OAuthClientAuthHandlerOptions {
  /**
   * Defines the client authentication credentials for basic and request-body
   * credentials.
   */
  clientAuthentication?: ClientAuthentication;
  /**
   * An optional transporter to use.
   */
  transporter?: Gaxios;
}

/**
 * Abstract class for handling client authentication in OAuth-based
 * operations.
 * When request-body client authentication is used, only application/json and
 * application/x-www-form-urlencoded content types for HTTP methods that support
 * request bodies are supported.
 */
export abstract class OAuthClientAuthHandler {
  #crypto = createCrypto();
  #clientAuthentication?: ClientAuthentication;
  protected transporter: Gaxios;

  /**
   * Instantiates an OAuth client authentication handler.
   * @param options The OAuth Client Auth Handler instance options. Passing an `ClientAuthentication` directly is **@DEPRECATED**.
   */
  constructor(options?: ClientAuthentication | OAuthClientAuthHandlerOptions) {
    if (options && 'clientId' in options) {
      this.#clientAuthentication = options;
      this.transporter = new Gaxios();
    } else {
      this.#clientAuthentication = options?.clientAuthentication;
      this.transporter = options?.transporter || new Gaxios();
    }
  }

  /**
   * Applies client authentication on the OAuth request's headers or POST
   * body but does not process the request.
   * @param opts The GaxiosOptions whose headers or data are to be modified
   *   depending on the client authentication mechanism to be used.
   * @param bearerToken The optional bearer token to use for authentication.
   *   When this is used, no client authentication credentials are needed.
   */
  protected applyClientAuthenticationOptions(
    opts: GaxiosOptions,
    bearerToken?: string,
  ) {
    opts.headers = Gaxios.mergeHeaders(opts.headers);

    // Inject authenticated header.
    this.injectAuthenticatedHeaders(opts, bearerToken);
    // Inject authenticated request body.
    if (!bearerToken) {
      this.injectAuthenticatedRequestBody(opts);
    }
  }

  /**
   * Applies client authentication on the request's header if either
   * basic authentication or bearer token authentication is selected.
   *
   * @param opts The GaxiosOptions whose headers or data are to be modified
   *   depending on the client authentication mechanism to be used.
   * @param bearerToken The optional bearer token to use for authentication.
   *   When this is used, no client authentication credentials are needed.
   */
  private injectAuthenticatedHeaders(
    opts: GaxiosOptions,
    bearerToken?: string,
  ) {
    // Bearer token prioritized higher than basic Auth.
    if (bearerToken) {
      opts.headers = Gaxios.mergeHeaders(opts.headers, {
        authorization: `Bearer ${bearerToken}`,
      });
    } else if (this.#clientAuthentication?.confidentialClientType === 'basic') {
      opts.headers = Gaxios.mergeHeaders(opts.headers);
      const clientId = this.#clientAuthentication!.clientId;
      const clientSecret = this.#clientAuthentication!.clientSecret || '';
      const base64EncodedCreds = this.#crypto.encodeBase64StringUtf8(
        `${clientId}:${clientSecret}`,
      );
      Gaxios.mergeHeaders(opts.headers, {
        authorization: `Basic ${base64EncodedCreds}`,
      });
    }
  }

  /**
   * Applies client authentication on the request's body if request-body
   * client authentication is selected.
   *
   * @param opts The GaxiosOptions whose headers or data are to be modified
   *   depending on the client authentication mechanism to be used.
   */
  private injectAuthenticatedRequestBody(opts: GaxiosOptions) {
    if (this.#clientAuthentication?.confidentialClientType === 'request-body') {
      const method = (opts.method || 'GET').toUpperCase();

      if (!METHODS_SUPPORTING_REQUEST_BODY.includes(method)) {
        throw new Error(
          `${method} HTTP method does not support ` +
            `${this.#clientAuthentication!.confidentialClientType} ` +
            'client authentication',
        );
      }

      // Get content-type
      const headers = new Headers(opts.headers);
      const contentType = headers.get('content-type');

      // Inject authenticated request body
      if (
        contentType?.startsWith('application/x-www-form-urlencoded') ||
        opts.data instanceof URLSearchParams
      ) {
        const data = new URLSearchParams(opts.data ?? '');
        data.append('client_id', this.#clientAuthentication!.clientId);
        data.append(
          'client_secret',
          this.#clientAuthentication!.clientSecret || '',
        );
        opts.data = data;
      } else if (contentType?.startsWith('application/json')) {
        opts.data = opts.data || {};
        Object.assign(opts.data, {
          client_id: this.#clientAuthentication!.clientId,
          client_secret: this.#clientAuthentication!.clientSecret || '',
        });
      } else {
        throw new Error(
          `${contentType} content-types are not supported with ` +
            `${this.#clientAuthentication!.confidentialClientType} ` +
            'client authentication',
        );
      }
    }
  }

  /**
   * Retry config for Auth-related requests.
   *
   * @remarks
   *
   * This is not a part of the default {@link AuthClient.transporter transporter/gaxios}
   * config as some downstream APIs would prefer if customers explicitly enable retries,
   * such as GCS.
   */
  protected static get RETRY_CONFIG(): GaxiosOptions {
    return {
      retry: true,
      retryConfig: {
        httpMethodsToRetry: ['GET', 'PUT', 'POST', 'HEAD', 'OPTIONS', 'DELETE'],
      },
    };
  }
}

/**
 * Converts an OAuth error response to a native JavaScript Error.
 * @param resp The OAuth error response to convert to a native Error object.
 * @param err The optional original error. If provided, the error properties
 *   will be copied to the new error.
 * @return The converted native Error object.
 */
export function getErrorFromOAuthErrorResponse(
  resp: OAuthErrorResponse,
  err?: Error,
): Error {
  // Error response.
  const errorCode = resp.error;
  const errorDescription = resp.error_description;
  const errorUri = resp.error_uri;
  let message = `Error code ${errorCode}`;
  if (typeof errorDescription !== 'undefined') {
    message += `: ${errorDescription}`;
  }
  if (typeof errorUri !== 'undefined') {
    message += ` - ${errorUri}`;
  }
  const newError = new Error(message);
  // Copy properties from original error to newly generated error.
  if (err) {
    const keys = Object.keys(err);
    if (err.stack) {
      // Copy error.stack if available.
      keys.push('stack');
    }
    keys.forEach(key => {
      // Do not overwrite the message field.
      if (key !== 'message') {
        Object.defineProperty(newError, key, {
          value: (err as {} as {[index: string]: string})[key],
          writable: false,
          enumerable: true,
        });
      }
    });
  }
  return newError;
}
