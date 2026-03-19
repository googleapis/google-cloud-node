// Copyright 2025 Google LLC
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

import {Transporter, TokenOptions} from './tokenOptions';
import {GaxiosOptions, GaxiosResponse, GaxiosError} from 'gaxios';
import {getJwsSign} from './jwsSign';

/**
 * Interface for the data returned from the token endpoint.
 */
interface TokenData {
  /** An optional refresh token. */
  refresh_token?: string;
  /** The duration of the token in seconds. */
  expires_in?: number;
  /** The access token. */
  access_token?: string;
  /** The type of token, e.g., "Bearer". */
  token_type?: string;
  /** An optional ID token. */
  id_token?: string;
}

/** The URL for Google's OAuth 2.0 token endpoint. */
const GOOGLE_TOKEN_URL = 'https://oauth2.googleapis.com/token';
/** The grant type for JWT-based authorization. */
const GOOGLE_GRANT_TYPE = 'urn:ietf:params:oauth:grant-type:jwt-bearer';

/**
 * Generates the request options for fetching a token.
 * @param tokenOptions The options for the token.
 * @returns The Gaxios options for the request.
 */
const generateRequestOptions = (tokenOptions: TokenOptions): GaxiosOptions => {
  return {
    method: 'POST',
    url: GOOGLE_TOKEN_URL,
    data: new URLSearchParams({
      grant_type: GOOGLE_GRANT_TYPE, // Grant type for JWT
      assertion: getJwsSign(tokenOptions),
    }),
    responseType: 'json',
    retryConfig: {
      httpMethodsToRetry: ['POST'],
    },
  } as GaxiosOptions;
};

/**
 * Fetches an access token.
 * @param tokenOptions The options for the token.
 * @returns A promise that resolves with the token data.
 */
async function getToken(tokenOptions: TokenOptions): Promise<TokenData> {
  if (!tokenOptions.transporter) {
    throw new Error('No transporter set.');
  }

  try {
    const gaxiosOptions = generateRequestOptions(tokenOptions);
    const response: GaxiosResponse<TokenData> =
      await tokenOptions.transporter.request<TokenData>(gaxiosOptions);
    return response.data;
  } catch (e) {
    // The error is re-thrown, but we want to format it to be more
    // informative.
    const err = e as GaxiosError;
    const errorData = err.response?.data;
    if (errorData?.error) {
      err.message = `${errorData.error}: ${errorData.error_description}`;
    }
    throw err;
  }
}

export {getToken, TokenData};
