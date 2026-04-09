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

import {TokenOptions} from './tokenOptions';
import {sign, SignOptions} from 'jws';

/** The default algorithm for signing JWTs. */
const ALG_RS256 = 'RS256';
/** The URL for Google's OAuth 2.0 token endpoint. */
const GOOGLE_TOKEN_URL = 'https://oauth2.googleapis.com/token';

/**
 * Interface for the JWT payload required for signing.
 */
interface JwsSignPayload {
  /** The issuer claim for the JWT. */
  iss?: string;
  /** The space-delimited list of scopes for the requested token. */
  scope?: string | string[];
  /** The audience for the token. */
  aud: string;
  /** The expiration time of the token, in seconds since the epoch. */
  exp: number;
  /** The time the token was issued, in seconds since the epoch. */
  iat: number;
  /** The subject claim for the JWT, used for impersonation. */
  sub?: string;
  /** Additional claims to include in the JWT payload. */
  [key: string]: any;
}

/**
 * Builds the JWT payload for signing.
 * @param tokenOptions The options for the token.
 * @returns The JWT payload.
 */
function buildPayloadForJwsSign(tokenOptions: TokenOptions): JwsSignPayload {
  const iat = Math.floor(new Date().getTime() / 1000);
  const payload: JwsSignPayload = {
    iss: tokenOptions.iss,
    scope: tokenOptions.scope,
    aud: GOOGLE_TOKEN_URL,
    exp: iat + 3600,
    iat,
    sub: tokenOptions.sub,
    ...tokenOptions.additionalClaims,
  };
  return payload;
}

/**
 * Creates a signed JWS (JSON Web Signature).
 * @param tokenOptions The options for the token.
 * @returns The signed JWS.
 */
function getJwsSign(tokenOptions: TokenOptions): string {
  const payload: JwsSignPayload = buildPayloadForJwsSign(tokenOptions);
  return sign({
    header: {alg: ALG_RS256},
    payload,
    secret: tokenOptions.key,
  } as SignOptions);
}

export {buildPayloadForJwsSign, getJwsSign};
