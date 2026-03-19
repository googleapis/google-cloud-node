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

import {GaxiosOptions, GaxiosPromise} from 'gaxios';

// Transporter needed in GoogleToken to make request.
interface Transporter {
  request<T>(opts: GaxiosOptions): GaxiosPromise<T>;
}

// Interface presenting the option for GoogleToken.
interface TokenOptions {
  /**
   * Path to a .json, .pem, or .p12 key file.
   */
  keyFile?: string;
  /**
   * The raw private key value.
   */
  key?: string;
  /**
   * The service account email address.
   */
  email?: string;
  /**
   * The issuer claim for the JWT.
   */
  iss?: string;
  /**
   * The subject claim for the JWT. This is used for impersonation.
   */
  sub?: string;
  /**
   * The space-delimited list of scopes for the requested token.
   */
  scope?: string | string[];
  /**
   * Additional claims to include in the JWT payload.
   */
  additionalClaims?: {[key: string]: any};
  /**
   * Eagerly refresh unexpired tokens when they are within this many
   * milliseconds from expiring.
   * Defaults to 0.
   */
  eagerRefreshThresholdMillis?: number;

  transporter?: Transporter;
}

export {Transporter, TokenOptions};
