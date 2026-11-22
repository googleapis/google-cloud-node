// Copyright 2015 Google LLC
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

import * as stream from 'stream';
import {CredentialRequest, JWTInput} from './credentials';
import {
  GetTokenResponse,
  OAuth2Client,
  OAuth2ClientOptions,
} from './oauth2client';
import {AuthClient, DEFAULT_UNIVERSE} from './authclient';
import {GaxiosOptions} from 'gaxios';

export const USER_REFRESH_ACCOUNT_TYPE = 'authorized_user';
const DEFAULT_OAUTH2_TOKEN_URL = 'https://oauth2.googleapis.com/token';

function assertValidUniverse(universe: unknown): void {
  if (typeof universe !== 'string' || !universe.trim()) {
    throw new RangeError('The universe domain cannot be an empty string.');
  }
}

export interface UserRefreshClientOptions extends OAuth2ClientOptions {
  /**
   * The authentication client ID.
   */
  clientId?: string;
  /**
   * The authentication client secret.
   */
  clientSecret?: string;
  /**
   * The authentication refresh token.
   */
  refreshToken?: string;
}

export class UserRefreshClient extends OAuth2Client {
  // TODO: refactor tests to make this private
  // In a future gts release, the _propertyName rule will be lifted.
  // This is also a hard one because `this.refreshToken` is a function.
  _refreshToken?: string | null;
  #hasExplicitTokenUrl: boolean;

  /**
   * The User Refresh Token client.
   *
   * @param optionsOrClientId The User Refresh Token client options. Passing an `clientId` directly is **@DEPRECATED**.
   * @param clientSecret **@DEPRECATED**. Provide a {@link UserRefreshClientOptions `UserRefreshClientOptions`} object in the first parameter instead.
   * @param refreshToken **@DEPRECATED**. Provide a {@link UserRefreshClientOptions `UserRefreshClientOptions`} object in the first parameter instead.
   * @param eagerRefreshThresholdMillis **@DEPRECATED**. Provide a {@link UserRefreshClientOptions `UserRefreshClientOptions`} object in the first parameter instead.
   * @param forceRefreshOnFailure **@DEPRECATED**. Provide a {@link UserRefreshClientOptions `UserRefreshClientOptions`} object in the first parameter instead.
   */
  constructor(
    optionsOrClientId?: string | UserRefreshClientOptions,
    /**
     * @deprecated - provide a {@link UserRefreshClientOptions `UserRefreshClientOptions`} object in the first parameter instead
     */
    clientSecret?: UserRefreshClientOptions['clientSecret'],
    /**
     * @deprecated - provide a {@link UserRefreshClientOptions `UserRefreshClientOptions`} object in the first parameter instead
     */
    refreshToken?: UserRefreshClientOptions['refreshToken'],
    /**
     * @deprecated - provide a {@link UserRefreshClientOptions `UserRefreshClientOptions`} object in the first parameter instead
     */
    eagerRefreshThresholdMillis?: UserRefreshClientOptions['eagerRefreshThresholdMillis'],
    /**
     * @deprecated - provide a {@link UserRefreshClientOptions `UserRefreshClientOptions`} object in the first parameter instead
     */
    forceRefreshOnFailure?: UserRefreshClientOptions['forceRefreshOnFailure'],
  ) {
    const opts =
      optionsOrClientId && typeof optionsOrClientId === 'object'
        ? optionsOrClientId
        : {
            clientId: optionsOrClientId,
            clientSecret,
            refreshToken,
            eagerRefreshThresholdMillis,
            forceRefreshOnFailure,
          };
    if (
      opts.universe_domain !== undefined &&
      opts.universeDomain !== undefined &&
      opts.universe_domain !== opts.universeDomain
    ) {
      throw new RangeError(
        'Please set either universe_domain or universeDomain, but not both.',
      );
    }
    const configuredUniverse = opts.universeDomain ?? opts.universe_domain;
    if (configuredUniverse !== undefined) {
      assertValidUniverse(configuredUniverse);
    }
    super(opts);
    this.#hasExplicitTokenUrl = opts.endpoints?.oauth2TokenUrl !== undefined;
    this._refreshToken = opts.refreshToken;
    this.credentials.refresh_token = opts.refreshToken;
  }

  #assertTokenEndpointSupportedInUniverse(): void {
    assertValidUniverse(this.universeDomain);
    if (
      this.universeDomain !== DEFAULT_UNIVERSE &&
      !this.#hasExplicitTokenUrl &&
      this.endpoints.oauth2TokenUrl.toString() === DEFAULT_OAUTH2_TOKEN_URL
    ) {
      throw new RangeError(
        `UserRefreshClient (authorized_user) credentials are not supported in universe domain "${this.universeDomain}" without an explicit endpoints.oauth2TokenUrl override.`,
      );
    }
  }

  /**
   * Refreshes the access token.
   * @param refreshToken An ignored refreshToken..
   * @param callback Optional callback.
   */
  protected async refreshTokenNoCache(): Promise<GetTokenResponse> {
    this.#assertTokenEndpointSupportedInUniverse();
    return super.refreshTokenNoCache(this._refreshToken);
  }

  async fetchIdToken(targetAudience: string): Promise<string> {
    this.#assertTokenEndpointSupportedInUniverse();
    const opts: GaxiosOptions = {
      ...UserRefreshClient.RETRY_CONFIG,
      url: this.endpoints.oauth2TokenUrl,
      method: 'POST',
      data: new URLSearchParams({
        client_id: this._clientId,
        client_secret: this._clientSecret,
        grant_type: 'refresh_token',
        refresh_token: this._refreshToken,
        target_audience: targetAudience,
      } as {}),
      responseType: 'json',
    };
    AuthClient.setMethodName(opts, 'fetchIdToken');

    const res = await this.transporter.request<CredentialRequest>(opts);
    return res.data.id_token!;
  }

  /**
   * Create a UserRefreshClient credentials instance using the given input
   * options.
   * @param json The input object.
   */
  fromJSON(json: JWTInput): void {
    if (!json) {
      throw new Error(
        'Must pass in a JSON object containing the user refresh token',
      );
    }
    if (json.type !== 'authorized_user') {
      throw new Error(
        'The incoming JSON object does not have the "authorized_user" type',
      );
    }
    if (!json.client_id) {
      throw new Error(
        'The incoming JSON object does not contain a client_id field',
      );
    }
    if (!json.client_secret) {
      throw new Error(
        'The incoming JSON object does not contain a client_secret field',
      );
    }
    if (!json.refresh_token) {
      throw new Error(
        'The incoming JSON object does not contain a refresh_token field',
      );
    }
    this._clientId = json.client_id;
    this._clientSecret = json.client_secret;
    this._refreshToken = json.refresh_token;
    this.credentials.refresh_token = json.refresh_token;
    this.quotaProjectId = json.quota_project_id;
    if (json.universe_domain !== undefined) {
      assertValidUniverse(json.universe_domain);
      this.universeDomain = json.universe_domain;
    }
  }

  /**
   * Create a UserRefreshClient credentials instance using the given input
   * stream.
   * @param inputStream The input stream.
   * @param callback Optional callback.
   */
  fromStream(inputStream: stream.Readable): Promise<void>;
  fromStream(
    inputStream: stream.Readable,
    callback: (err?: Error) => void,
  ): void;
  fromStream(
    inputStream: stream.Readable,
    callback?: (err?: Error) => void,
  ): void | Promise<void> {
    if (callback) {
      void this.fromStreamAsync(inputStream).then(() => callback(), callback);
    } else {
      return this.fromStreamAsync(inputStream);
    }
  }

  private async fromStreamAsync(inputStream: stream.Readable): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      if (!inputStream) {
        return reject(
          new Error('Must pass in a stream containing the user refresh token.'),
        );
      }
      let s = '';
      inputStream
        .setEncoding('utf8')
        .on('error', reject)
        .on('data', chunk => (s += chunk))
        .on('end', () => {
          try {
            const data = JSON.parse(s);
            this.fromJSON(data);
            return resolve();
          } catch (err) {
            return reject(err);
          }
        });
    });
  }

  /**
   * Create a UserRefreshClient credentials instance using the given input
   * options.
   * @param json The input object.
   */
  static fromJSON(json: JWTInput): UserRefreshClient {
    const client = new UserRefreshClient();
    client.fromJSON(json);
    return client;
  }
}
