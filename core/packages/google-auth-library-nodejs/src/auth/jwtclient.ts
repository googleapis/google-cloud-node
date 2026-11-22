// Copyright 2013 Google LLC
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

import {GoogleToken} from '../gtoken/googleToken';
import {getCredentials} from '../gtoken/getCredentials';
import * as stream from 'stream';

import {CredentialBody, Credentials, JWTInput} from './credentials';
import {IdTokenProvider} from './idtokenclient';
import {JWTAccess} from './jwtaccess';
import {
  GetTokenResponse,
  OAuth2Client,
  OAuth2ClientOptions,
  RequestMetadataResponse,
} from './oauth2client';
import {
  AuthClient,
  DEFAULT_UNIVERSE,
  assertValidUniverseDomain,
} from './authclient';

export interface JWTOptions extends OAuth2ClientOptions {
  /**
   * The service account email address.
   */
  email?: string;
  /**
   * The path to private key file. Not necessary if {@link JWTOptions.key} has been provided.
   */
  keyFile?: string;
  /**
   * The value of key. Not necessary if {@link JWTOptions.keyFile} has been provided.
   */
  key?: string;
  /**
   * The list of requested scopes or a single scope.
   */
  keyId?: string;
  /**
   * The impersonated account's email address.
   */
  scopes?: string | string[];
  /**
   * The ID of the key.
   */
  subject?: string;
  /**
   * Additional claims, such as target audience.
   *
   * @example
   * ```
   * {target_audience: 'targetAudience'}
   * ```
   */
  additionalClaims?: {};
}

export class JWT extends OAuth2Client implements IdTokenProvider {
  email?: string;
  keyFile?: string;
  key?: string;
  keyId?: string;
  defaultScopes?: string | string[];
  scopes?: string | string[];
  scope?: string;
  subject?: string;
  gtoken?: GoogleToken;
  additionalClaims?: {};
  useJWTAccessWithScope?: boolean;
  defaultServicePath?: string;
  private access?: JWTAccess;
  #hasExplicitUniverse: boolean;
  #resolvedKeyFile?: string;

  /**
   * JWT service account credentials.
   *
   * Retrieve access token using gtoken.
   *
   * @param options the
   */
  constructor(options: JWTOptions = {}) {
    super(options);
    this.#hasExplicitUniverse =
      !(options instanceof AuthClient) &&
      (options.universeDomain ?? options.universe_domain) !== undefined;
    this.email = options.email;
    this.keyFile = options.keyFile;
    this.key = options.key;
    this.keyId = options.keyId;
    this.scopes = options.scopes;
    this.subject = options.subject;
    this.additionalClaims = options.additionalClaims;
    // Start with an expired refresh token, which will automatically be
    // refreshed before the first API call is made.
    this.credentials = {refresh_token: 'jwt-placeholder', expiry_date: 1};
  }

  /** @internal */
  override get hasUnresolvedUniverseDomain(): boolean {
    return Boolean(
      !this.#hasExplicitUniverse &&
      !this.apiKey &&
      !this.key &&
      this.keyFile &&
      this.#resolvedKeyFile !== this.keyFile &&
      this.keyFile.toLowerCase().endsWith('.json'),
    );
  }

  /** @internal */
  override async resolveUniverseDomain(): Promise<string> {
    await this.#resolveKeyFileUniverse();
    assertValidUniverseDomain(this.universeDomain);
    return this.universeDomain;
  }

  #applyKeyFileUniverse(universeDomain?: string): void {
    if (universeDomain !== undefined) {
      assertValidUniverseDomain(universeDomain);
      if (!this.#hasExplicitUniverse) {
        this.universeDomain = universeDomain;
      }
    }
  }

  async #resolveKeyFileUniverse(): Promise<void> {
    if (
      !this.apiKey &&
      !this.key &&
      this.keyFile &&
      this.#resolvedKeyFile !== this.keyFile &&
      this.keyFile.toLowerCase().endsWith('.json')
    ) {
      const creds = await getCredentials(this.keyFile);
      this.#resolvedKeyFile = this.keyFile;
      this.#applyKeyFileUniverse(creds.universeDomain);
      if (this.universeDomain !== DEFAULT_UNIVERSE) {
        this.email ||= creds.clientEmail;
        this.key ||= creds.privateKey;
        this.keyId ||= creds.privateKeyId;
      }
    }
  }

  #assertSupportedUniverse(): void {
    assertValidUniverseDomain(this.universeDomain);
    if (this.subject && this.universeDomain !== DEFAULT_UNIVERSE) {
      throw new RangeError(
        `Service Account user is configured for the credential. Domain-wide delegation is not supported in universes other than ${DEFAULT_UNIVERSE}`,
      );
    }
  }

  async #getJwtAccess(): Promise<JWTAccess> {
    if ((!this.key || !this.email) && this.keyFile) {
      const creds = await this.getCredentials();
      this.email ||= creds.client_email;
      this.key ||= creds.private_key;
    }
    if (
      !this.access ||
      this.access.email !== this.email ||
      this.access.key !== this.key ||
      this.access.keyId !== this.keyId
    ) {
      this.access = new JWTAccess(
        this.email,
        this.key,
        this.keyId,
        this.eagerRefreshThresholdMillis,
      );
    }
    return this.access;
  }

  /**
   * Creates a copy of the credential with the specified scopes.
   * @param scopes List of requested scopes or a single scope.
   * @return The cloned instance.
   */
  createScoped(scopes?: string | string[]) {
    const jwt = new JWT(this as {} as JWTOptions);
    jwt.#hasExplicitUniverse = this.#hasExplicitUniverse;
    jwt.scopes = scopes;

    return jwt;
  }

  /**
   * Obtains the metadata to be sent with the request.
   *
   * @param url the URI being authorized.
   */
  protected async getRequestMetadataAsync(
    url?: string | null,
  ): Promise<RequestMetadataResponse> {
    url = this.defaultServicePath ? `https://${this.defaultServicePath}/` : url;
    const needsSelfSigned =
      (!this.hasUserScopes() && Boolean(url)) ||
      (this.useJWTAccessWithScope && this.hasAnyScopes());
    if (
      !this.credentials.access_token ||
      this.isTokenExpiring() ||
      needsSelfSigned ||
      this.universeDomain !== DEFAULT_UNIVERSE
    ) {
      await this.#resolveKeyFileUniverse();
    }
    this.#assertSupportedUniverse();
    const useSelfSignedJWT =
      needsSelfSigned || this.universeDomain !== DEFAULT_UNIVERSE;

    if (!this.apiKey && useSelfSignedJWT) {
      if (
        this.additionalClaims &&
        (
          this.additionalClaims as {
            target_audience: string;
          }
        ).target_audience
      ) {
        const {tokens} = await this.refreshToken();
        return {
          headers: this.addSharedMetadataHeaders(
            new Headers({
              authorization: `Bearer ${tokens.id_token}`,
            }),
          ),
        };
      } else {
        // no scopes have been set, but a uri has been provided. Use JWTAccess
        // credentials.
        const access = await this.#getJwtAccess();

        let scopes: string | string[] | undefined;
        if (this.hasUserScopes()) {
          scopes = this.scopes;
        } else if (!url) {
          scopes = this.defaultScopes;
        }

        const useScopes =
          this.useJWTAccessWithScope ||
          this.universeDomain !== DEFAULT_UNIVERSE;

        const headers = await access.getRequestHeaders(
          url ?? undefined,
          this.additionalClaims,
          // Scopes take precedent over audience for signing,
          // so we only provide them if `useJWTAccessWithScope` is on or
          // if we are in a non-default universe
          useScopes ? scopes : undefined,
        );

        return {headers: this.addSharedMetadataHeaders(headers)};
      }
    } else if (this.hasAnyScopes() || this.apiKey) {
      return super.getRequestMetadataAsync(url);
    } else {
      // If no audience, apiKey, or scopes are provided, we should not attempt
      // to populate any headers:
      return {headers: new Headers()};
    }
  }

  /**
   * Fetches an ID token.
   * @param targetAudience the audience for the fetched ID token.
   */
  async fetchIdToken(targetAudience: string): Promise<string> {
    await this.#resolveKeyFileUniverse();
    this.#assertSupportedUniverse();
    if (this.universeDomain !== DEFAULT_UNIVERSE) {
      await this.#getJwtAccess();
      if (!this.email || !this.key) {
        throw new Error(
          'Cannot fetch ID token without client_email and private_key.',
        );
      }
      const iamAccess = new JWTAccess(
        this.email,
        this.key,
        this.keyId,
        this.eagerRefreshThresholdMillis,
      );
      const opts = {
        ...JWT.RETRY_CONFIG,
        url: `https://iamcredentials.${this.universeDomain}/v1/projects/-/serviceAccounts/${encodeURIComponent(this.email)}:generateIdToken`,
        method: 'POST' as const,
        headers: this.addSharedMetadataHeaders(
          iamAccess.getRequestHeaders(
            undefined,
            undefined,
            'https://www.googleapis.com/auth/iam',
          ),
        ),
        data: {audience: targetAudience, includeEmail: true, useEmailAzp: true},
        responseType: 'json' as const,
      };
      AuthClient.setMethodName(opts, 'fetchIdToken');
      const res = await this.transporter.request<{token?: string}>(opts);
      if (!res.data?.token) {
        throw new Error('Unknown error: Failed to fetch ID token');
      }
      return res.data.token;
    }

    // Create a new gToken for fetching an ID token
    const gtoken = new GoogleToken({
      iss: this.email,
      sub: this.subject,
      scope: this.scopes || this.defaultScopes,
      keyFile: this.keyFile,
      key: this.key,
      additionalClaims: {target_audience: targetAudience},
      transporter: this.transporter,
    });
    await gtoken.getToken({
      forceRefresh: true,
    });
    if (!gtoken.idToken) {
      throw new Error('Unknown error: Failed to fetch ID token');
    }
    return gtoken.idToken;
  }

  /**
   * Determine if there are currently scopes available.
   */
  private hasUserScopes() {
    if (!this.scopes) {
      return false;
    }
    return this.scopes.length > 0;
  }

  /**
   * Are there any default or user scopes defined.
   */
  private hasAnyScopes() {
    if (this.scopes && this.scopes.length > 0) return true;
    if (this.defaultScopes && this.defaultScopes.length > 0) return true;
    return false;
  }

  /**
   * Get the initial access token using gToken.
   * @param callback Optional callback.
   * @returns Promise that resolves with credentials
   */
  authorize(): Promise<Credentials>;
  authorize(callback: (err: Error | null, result?: Credentials) => void): void;
  authorize(
    callback?: (err: Error | null, result?: Credentials) => void,
  ): Promise<Credentials> | void {
    if (callback) {
      void this.authorizeAsync().then(r => callback(null, r), callback);
    } else {
      return this.authorizeAsync();
    }
  }

  private async authorizeAsync(): Promise<Credentials> {
    const result = await this.refreshToken();
    if (!result) {
      throw new Error('No result returned');
    }
    this.credentials = result.tokens;
    this.credentials.refresh_token = 'jwt-placeholder';
    if (this.gtoken) {
      this.key = this.gtoken.googleTokenOptions?.key;
      this.email = this.gtoken.googleTokenOptions?.iss;
    }
    return result.tokens;
  }

  /**
   * Refreshes the access token.
   * @param refreshToken ignored
   * @private
   */
  protected async refreshTokenNoCache(): Promise<GetTokenResponse> {
    await this.#resolveKeyFileUniverse();
    this.#assertSupportedUniverse();
    if (this.universeDomain !== DEFAULT_UNIVERSE) {
      const targetAudience = (
        this.additionalClaims as {target_audience?: string} | undefined
      )?.target_audience;
      let tokens: Credentials;
      if (targetAudience) {
        tokens = {
          id_token: await this.fetchIdToken(targetAudience),
          token_type: 'Bearer',
          expiry_date: Date.now() + 3600 * 1000,
        };
      } else {
        const access = await this.#getJwtAccess();
        const url = this.defaultServicePath
          ? `https://${this.defaultServicePath}/`
          : undefined;
        const scopes = this.hasUserScopes()
          ? this.scopes
          : !url
            ? this.defaultScopes && this.defaultScopes.length > 0
              ? this.defaultScopes
              : 'https://www.googleapis.com/auth/cloud-platform'
            : undefined;
        const authHeader =
          access
            .getRequestHeaders(url, this.additionalClaims, scopes)
            .get('authorization') ?? '';
        tokens = {
          access_token: authHeader.replace(/^Bearer\s+/i, ''),
          token_type: 'Bearer',
          expiry_date: Date.now() + 3600 * 1000,
        };
      }
      this.emit('tokens', tokens);
      return {res: null, tokens};
    }

    const gtoken = this.createGToken();
    const token = await gtoken.getToken({
      forceRefresh: this.isTokenExpiring(),
    });
    const tokens = {
      access_token: token.access_token,
      token_type: 'Bearer',
      expiry_date: gtoken.expiresAt,
      id_token: gtoken.idToken,
    };
    this.emit('tokens', tokens);
    return {res: null, tokens};
  }

  /**
   * Create a gToken if it doesn't already exist.
   */
  private createGToken(): GoogleToken {
    if (!this.gtoken) {
      this.gtoken = new GoogleToken({
        iss: this.email,
        sub: this.subject,
        scope: this.scopes || this.defaultScopes,
        keyFile: this.keyFile,
        key: this.key,
        additionalClaims: this.additionalClaims,
        transporter: this.transporter,
      });
    }
    return this.gtoken;
  }

  /**
   * Create a JWT credentials instance using the given input options.
   * @param json The input object.
   *
   * @remarks
   *
   * **Important**: If you accept a credential configuration (credential JSON/File/Stream) from an external source for authentication to Google Cloud, you must validate it before providing it to any Google API or library. Providing an unvalidated credential configuration to Google APIs can compromise the security of your systems and data. For more information, refer to {@link https://cloud.google.com/docs/authentication/external/externally-sourced-credentials Validate credential configurations from external sources}.
   */
  fromJSON(json: JWTInput): void {
    if (!json) {
      throw new Error(
        'Must pass in a JSON object containing the service account auth settings.',
      );
    }
    if (!json.client_email) {
      throw new Error(
        'The incoming JSON object does not contain a client_email field',
      );
    }
    if (!json.private_key) {
      throw new Error(
        'The incoming JSON object does not contain a private_key field',
      );
    }
    // Extract the relevant information from the json key file.
    this.email = json.client_email;
    this.key = json.private_key;
    this.keyId = json.private_key_id;
    this.projectId = json.project_id;
    this.quotaProjectId = json.quota_project_id;
    if (json.universe_domain !== undefined) {
      assertValidUniverseDomain(json.universe_domain);
      this.universeDomain = json.universe_domain;
      this.#hasExplicitUniverse = true;
    }
    this.access = undefined;
    this.gtoken = undefined;
    this.credentials = {refresh_token: 'jwt-placeholder', expiry_date: 1};
  }

  /**
   * Create a JWT credentials instance using the given input stream.
   * @param inputStream The input stream.
   * @param callback Optional callback.
   *
   * @remarks
   *
   * **Important**: If you accept a credential configuration (credential JSON/File/Stream) from an external source for authentication to Google Cloud, you must validate it before providing it to any Google API or library. Providing an unvalidated credential configuration to Google APIs can compromise the security of your systems and data. For more information, refer to {@link https://cloud.google.com/docs/authentication/external/externally-sourced-credentials Validate credential configurations from external sources}.
   */
  fromStream(inputStream: stream.Readable): Promise<void>;
  fromStream(
    inputStream: stream.Readable,
    callback: (err?: Error | null) => void,
  ): void;
  fromStream(
    inputStream: stream.Readable,
    callback?: (err?: Error | null) => void,
  ): void | Promise<void> {
    if (callback) {
      void this.fromStreamAsync(inputStream).then(() => callback(), callback);
    } else {
      return this.fromStreamAsync(inputStream);
    }
  }

  private fromStreamAsync(inputStream: stream.Readable) {
    return new Promise<void>((resolve, reject) => {
      if (!inputStream) {
        throw new Error(
          'Must pass in a stream containing the service account auth settings.',
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
            resolve();
          } catch (e) {
            reject(e);
          }
        });
    });
  }

  /**
   * Creates a JWT credentials instance using an API Key for authentication.
   * @param apiKey The API Key in string form.
   */
  fromAPIKey(apiKey: string): void {
    if (typeof apiKey !== 'string') {
      throw new Error('Must provide an API Key string.');
    }
    this.apiKey = apiKey;
  }

  /**
   * Using the key or keyFile on the JWT client, obtain an object that contains
   * the key and the client email.
   */
  async getCredentials(): Promise<CredentialBody> {
    if (this.key) {
      return {private_key: this.key, client_email: this.email};
    } else if (this.keyFile) {
      this.createGToken();
      const creds = await getCredentials(this.keyFile);
      this.keyId ||= creds.privateKeyId;
      this.#applyKeyFileUniverse(creds.universeDomain);
      return {private_key: creds.privateKey, client_email: creds.clientEmail};
    }
    throw new Error('A key or a keyFile must be provided to getCredentials.');
  }
}
