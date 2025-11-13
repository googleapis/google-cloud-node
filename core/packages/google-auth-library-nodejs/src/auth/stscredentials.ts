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

import {GaxiosError, GaxiosOptions, GaxiosResponse} from 'gaxios';
import {AuthClient, HeadersInit} from './authclient';
import {
  ClientAuthentication,
  OAuthClientAuthHandler,
  OAuthClientAuthHandlerOptions,
  OAuthErrorResponse,
  getErrorFromOAuthErrorResponse,
} from './oauth2common';

import {removeUndefinedValuesInObject} from '../util';

/**
 * Defines the interface needed to initialize an StsCredentials instance.
 * The interface does not directly map to the spec and instead is converted
 * to be compliant with the JavaScript style guide. This is because this is
 * instantiated internally.
 * StsCredentials implement the OAuth 2.0 token exchange based on
 * https://tools.ietf.org/html/rfc8693.
 * Request options are defined in
 * https://tools.ietf.org/html/rfc8693#section-2.1
 */
export interface StsCredentialsOptions {
  /**
   * REQUIRED. The value "urn:ietf:params:oauth:grant-type:token-exchange"
   * indicates that a token exchange is being performed.
   */
  grantType: string;
  /**
   * OPTIONAL. A URI that indicates the target service or resource where the
   * client intends to use the requested security token.
   */
  resource?: string;
  /**
   * OPTIONAL. The logical name of the target service where the client
   * intends to use the requested security token.  This serves a purpose
   * similar to the "resource" parameter but with the client providing a
   * logical name for the target service.
   */
  audience?: string;
  /**
   * OPTIONAL. A list of space-delimited, case-sensitive strings, as defined
   * in Section 3.3 of [RFC6749], that allow the client to specify the desired
   * scope of the requested security token in the context of the service or
   * resource where the token will be used.
   */
  scope?: string[];
  /**
   * OPTIONAL. An identifier, as described in Section 3 of [RFC8693], eg.
   * "urn:ietf:params:oauth:token-type:access_token" for the type of the
   * requested security token.
   */
  requestedTokenType?: string;
  /**
   * REQUIRED. A security token that represents the identity of the party on
   * behalf of whom the request is being made.
   */
  subjectToken: string;
  /**
   * REQUIRED. An identifier, as described in Section 3 of [RFC8693], that
   * indicates the type of the security token in the "subject_token" parameter.
   */
  subjectTokenType: string;
  actingParty?: {
    /**
     * OPTIONAL. A security token that represents the identity of the acting
     * party.  Typically, this will be the party that is authorized to use the
     * requested security token and act on behalf of the subject.
     */
    actorToken: string;
    /**
     * An identifier, as described in Section 3, that indicates the type of the
     * security token in the "actor_token" parameter. This is REQUIRED when the
     * "actor_token" parameter is present in the request but MUST NOT be
     * included otherwise.
     */
    actorTokenType: string;
  };
}

/**
 * Defines the standard request options as defined by the OAuth token
 * exchange spec: https://tools.ietf.org/html/rfc8693#section-2.1
 */
interface StsRequestOptions {
  grant_type: string;
  resource?: string;
  audience?: string;
  scope?: string;
  requested_token_type?: string;
  subject_token: string;
  subject_token_type: string;
  actor_token?: string;
  actor_token_type?: string;
  client_id?: string;
  client_secret?: string;
  // GCP-specific non-standard field.
  options?: string;
  [key: string]: string | undefined;
}

/**
 * Defines the OAuth 2.0 token exchange successful response based on
 * https://tools.ietf.org/html/rfc8693#section-2.2.1
 */
export interface StsSuccessfulResponse {
  access_token: string;
  issued_token_type: string;
  token_type: string;
  expires_in?: number;
  refresh_token?: string;
  scope?: string;
  res?: GaxiosResponse | null;
}

export interface StsCredentialsConstructionOptions
  extends OAuthClientAuthHandlerOptions {
  /**
   * The client authentication credentials if available.
   */
  clientAuthentication?: ClientAuthentication;
  /**
   * The token exchange endpoint.
   */
  tokenExchangeEndpoint: string | URL;
}

/**
 * Implements the OAuth 2.0 token exchange based on
 * https://tools.ietf.org/html/rfc8693
 */
export class StsCredentials extends OAuthClientAuthHandler {
  readonly #tokenExchangeEndpoint: string | URL;

  /**
   * Initializes an STS credentials instance.
   *
   * @param options The STS credentials instance options. Passing an `tokenExchangeEndpoint` directly is **@DEPRECATED**.
   * @param clientAuthentication **@DEPRECATED**. Provide a {@link StsCredentialsConstructionOptions `StsCredentialsConstructionOptions`} object in the first parameter instead.
   */
  constructor(
    options: StsCredentialsConstructionOptions | string | URL = {
      tokenExchangeEndpoint: '',
    },
    /**
     * @deprecated - provide a {@link StsCredentialsConstructionOptions `StsCredentialsConstructionOptions`} object in the first parameter instead
     */
    clientAuthentication?: ClientAuthentication,
  ) {
    if (typeof options !== 'object' || options instanceof URL) {
      options = {
        tokenExchangeEndpoint: options,
        clientAuthentication,
      };
    }

    super(options);

    this.#tokenExchangeEndpoint = options.tokenExchangeEndpoint;
  }

  /**
   * Exchanges the provided token for another type of token based on the
   * rfc8693 spec.
   * @param stsCredentialsOptions The token exchange options used to populate
   *   the token exchange request.
   * @param additionalHeaders Optional additional headers to pass along the
   *   request.
   * @param options Optional additional GCP-specific non-spec defined options
   *   to send with the request.
   *   Example: `&options=${encodeUriComponent(JSON.stringified(options))}`
   * @return A promise that resolves with the token exchange response containing
   *   the requested token and its expiration time.
   */
  async exchangeToken(
    stsCredentialsOptions: StsCredentialsOptions,
    headers?: HeadersInit,
    options?: Parameters<JSON['stringify']>[0],
  ): Promise<StsSuccessfulResponse> {
    const values: StsRequestOptions = {
      grant_type: stsCredentialsOptions.grantType,
      resource: stsCredentialsOptions.resource,
      audience: stsCredentialsOptions.audience,
      scope: stsCredentialsOptions.scope?.join(' '),
      requested_token_type: stsCredentialsOptions.requestedTokenType,
      subject_token: stsCredentialsOptions.subjectToken,
      subject_token_type: stsCredentialsOptions.subjectTokenType,
      actor_token: stsCredentialsOptions.actingParty?.actorToken,
      actor_token_type: stsCredentialsOptions.actingParty?.actorTokenType,
      // Non-standard GCP-specific options.
      options: options && JSON.stringify(options),
    };

    const opts: GaxiosOptions = {
      ...StsCredentials.RETRY_CONFIG,
      url: this.#tokenExchangeEndpoint.toString(),
      method: 'POST',
      headers,
      data: new URLSearchParams(
        removeUndefinedValuesInObject(values) as Record<string, string>,
      ),
    };
    AuthClient.setMethodName(opts, 'exchangeToken');

    // Apply OAuth client authentication.
    this.applyClientAuthenticationOptions(opts);

    try {
      const response =
        await this.transporter.request<StsSuccessfulResponse>(opts);
      // Successful response.
      const stsSuccessfulResponse = response.data;
      stsSuccessfulResponse.res = response;
      return stsSuccessfulResponse;
    } catch (error) {
      // Translate error to OAuthError.
      if (error instanceof GaxiosError && error.response) {
        throw getErrorFromOAuthErrorResponse(
          error.response.data as OAuthErrorResponse,
          // Preserve other fields from the original error.
          error,
        );
      }
      // Request could fail before the server responds.
      throw error;
    }
  }
}
