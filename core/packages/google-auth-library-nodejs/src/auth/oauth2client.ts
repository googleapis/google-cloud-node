// Copyright 2019 Google LLC
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

import {
  Gaxios,
  GaxiosError,
  GaxiosOptions,
  GaxiosPromise,
  GaxiosResponse,
} from 'gaxios';
import * as querystring from 'querystring';
import * as stream from 'stream';
import * as formatEcdsa from 'ecdsa-sig-formatter';

import {removeUndefinedValuesInObject} from '../util';
import {createCrypto, JwkCertificate, hasBrowserCrypto} from '../crypto/crypto';

import {
  AuthClient,
  AuthClientOptions,
  GetAccessTokenResponse,
  BodyResponseCallback,
} from './authclient';
import {CredentialRequest, Credentials} from './credentials';
import {LoginTicket, TokenPayload} from './loginticket';

/**
 * The results from the `generateCodeVerifierAsync` method.  To learn more,
 * See the sample:
 * https://github.com/googleapis/google-auth-library-nodejs/blob/main/samples/oauth2-codeVerifier.js
 */
export interface CodeVerifierResults {
  /**
   * The code verifier that will be used when calling `getToken` to obtain a new
   * access token.
   */
  codeVerifier: string;
  /**
   * The code_challenge that should be sent with the `generateAuthUrl` call
   * to obtain a verifiable authentication url.
   */
  codeChallenge?: string;
}

export interface Certificates {
  [index: string]: string | JwkCertificate;
}

export interface PublicKeys {
  [index: string]: string;
}

export enum CodeChallengeMethod {
  Plain = 'plain',
  S256 = 'S256',
}

export enum CertificateFormat {
  PEM = 'PEM',
  JWK = 'JWK',
}

/**
 * The client authentication type. Supported values are basic, post, and none.
 * https://datatracker.ietf.org/doc/html/rfc7591#section-2
 */
export enum ClientAuthentication {
  ClientSecretPost = 'ClientSecretPost',
  ClientSecretBasic = 'ClientSecretBasic',
  None = 'None',
}

export interface GetTokenOptions {
  code: string;
  codeVerifier?: string;
  /**
   * The client ID for your application. The value passed into the constructor
   * will be used if not provided. Must match any client_id option passed to
   * a corresponding call to generateAuthUrl.
   */
  client_id?: string;
  /**
   * Determines where the API server redirects the user after the user
   * completes the authorization flow. The value passed into the constructor
   * will be used if not provided. Must match any redirect_uri option passed to
   * a corresponding call to generateAuthUrl.
   */
  redirect_uri?: string;
}

/**
 * An interface for preparing {@link GetTokenOptions} as a querystring.
 */
interface GetTokenQuery {
  client_id?: string;
  client_secret?: string;
  code_verifier?: string;
  code: string;
  grant_type: 'authorization_code';
  redirect_uri?: string;
  [key: string]: string | undefined;
}

export interface TokenInfo {
  /**
   * The application that is the intended user of the access token.
   */
  aud: string;

  /**
   * This value lets you correlate profile information from multiple Google
   * APIs. It is only present in the response if you included the profile scope
   * in your request in step 1. The field value is an immutable identifier for
   * the logged-in user that can be used to create and manage user sessions in
   * your application. The identifier is the same regardless of which client ID
   * is used to retrieve it. This enables multiple applications in the same
   * organization to correlate profile information.
   */
  user_id?: string;

  /**
   * An array of scopes that the user granted access to.
   */
  scopes: string[];

  /**
   * The datetime when the token becomes invalid.
   */
  expiry_date: number;

  /**
   * An identifier for the user, unique among all Google accounts and never
   * reused. A Google account can have multiple emails at different points in
   * time, but the sub value is never changed. Use sub within your application
   * as the unique-identifier key for the user.
   */
  sub?: string;

  /**
   * The client_id of the authorized presenter. This claim is only needed when
   * the party requesting the ID token is not the same as the audience of the ID
   * token. This may be the case at Google for hybrid apps where a web
   * application and Android app have a different client_id but share the same
   * project.
   */
  azp?: string;

  /**
   * Indicates whether your application can refresh access tokens
   * when the user is not present at the browser. Valid parameter values are
   * 'online', which is the default value, and 'offline'. Set the value to
   * 'offline' if your application needs to refresh access tokens when the user
   * is not present at the browser. This value instructs the Google
   * authorization server to return a refresh token and an access token the
   * first time that your application exchanges an authorization code for
   * tokens.
   */
  access_type?: string;

  /**
   * The user's email address. This value may not be unique to this user and
   * is not suitable for use as a primary key. Provided only if your scope
   * included the email scope value.
   */
  email?: string;

  /**
   * True if the user's e-mail address has been verified; otherwise false.
   */
  email_verified?: boolean;
}

interface TokenInfoRequest {
  aud: string;
  user_id?: string;
  scope?: string;
  expires_in?: number;
  azp?: string;
  sub?: string;
  exp?: number;
  access_type?: string;
}

export interface GenerateAuthUrlOpts {
  /**
   * Recommended. Indicates whether your application can refresh access tokens
   * when the user is not present at the browser. Valid parameter values are
   * 'online', which is the default value, and 'offline'. Set the value to
   * 'offline' if your application needs to refresh access tokens when the user
   * is not present at the browser. This value instructs the Google
   * authorization server to return a refresh token and an access token the
   * first time that your application exchanges an authorization code for
   * tokens.
   */
  access_type?: string;

  /**
   * The hd (hosted domain) parameter streamlines the login process for G Suite
   * hosted accounts. By including the domain of the G Suite user (for example,
   * mycollege.edu), you can indicate that the account selection UI should be
   * optimized for accounts at that domain. To optimize for G Suite accounts
   * generally instead of just one domain, use an asterisk: hd=*.
   * Don't rely on this UI optimization to control who can access your app,
   * as client-side requests can be modified. Be sure to validate that the
   * returned ID token has an hd claim value that matches what you expect
   * (e.g. mycolledge.edu). Unlike the request parameter, the ID token claim is
   * contained within a security token from Google, so the value can be trusted.
   */
  hd?: string;

  /**
   * The 'response_type' will always be set to 'CODE'.
   */
  response_type?: string;

  /**
   * The client ID for your application. The value passed into the constructor
   * will be used if not provided. You can find this value in the API Console.
   */
  client_id?: string;

  /**
   * Determines where the API server redirects the user after the user
   * completes the authorization flow. The value must exactly match one of the
   * 'redirect_uri' values listed for your project in the API Console. Note that
   * the http or https scheme, case, and trailing slash ('/') must all match.
   * The value passed into the constructor will be used if not provided.
   */
  redirect_uri?: string;

  /**
   * Required. A space-delimited list of scopes that identify the resources that
   * your application could access on the user's behalf. These values inform the
   * consent screen that Google displays to the user. Scopes enable your
   * application to only request access to the resources that it needs while
   * also enabling users to control the amount of access that they grant to your
   * application. Thus, there is an inverse relationship between the number of
   * scopes requested and the likelihood of obtaining user consent. The
   * OAuth 2.0 API Scopes document provides a full list of scopes that you might
   * use to access Google APIs. We recommend that your application request
   * access to authorization scopes in context whenever possible. By requesting
   * access to user data in context, via incremental authorization, you help
   * users to more easily understand why your application needs the access it is
   * requesting.
   */
  scope?: string[] | string;

  /**
   * Recommended. Specifies any string value that your application uses to
   * maintain state between your authorization request and the authorization
   * server's response. The server returns the exact value that you send as a
   * name=value pair in the hash (#) fragment of the 'redirect_uri' after the
   * user consents to or denies your application's access request. You can use
   * this parameter for several purposes, such as directing the user to the
   * correct resource in your application, sending nonces, and mitigating
   * cross-site request forgery. Since your redirect_uri can be guessed, using a
   * state value can increase your assurance that an incoming connection is the
   * result of an authentication request. If you generate a random string or
   * encode the hash of a cookie or another value that captures the client's
   * state, you can validate the response to additionally ensure that the
   * request and response originated in the same browser, providing protection
   * against attacks such as cross-site request forgery. See the OpenID Connect
   * documentation for an example of how to create and confirm a state token.
   */
  state?: string;

  /**
   * Optional. Enables applications to use incremental authorization to request
   * access to additional scopes in context. If you set this parameter's value
   * to true and the authorization request is granted, then the new access token
   * will also cover any scopes to which the user previously granted the
   * application access. See the incremental authorization section for examples.
   */
  include_granted_scopes?: boolean;

  /**
   * Optional. If your application knows which user is trying to authenticate,
   * it can use this parameter to provide a hint to the Google Authentication
   * Server. The server uses the hint to simplify the login flow either by
   * prefilling the email field in the sign-in form or by selecting the
   * appropriate multi-login session. Set the parameter value to an email
   * address or sub identifier, which is equivalent to the user's Google ID.
   */
  login_hint?: string;

  /**
   * Optional. A space-delimited, case-sensitive list of prompts to present the
   * user. If you don't specify this parameter, the user will be prompted only
   * the first time your app requests access.  Possible values are:
   *
   * 'none' - Donot display any authentication or consent screens. Must not be
   *        specified with other values.
   * 'consent' - 	Prompt the user for consent.
   * 'select_account' - Prompt the user to select an account.
   */
  prompt?: string;

  /**
   * Recommended. Specifies what method was used to encode a 'code_verifier'
   * that will be used during authorization code exchange. This parameter must
   * be used with the 'code_challenge' parameter. The value of the
   * 'code_challenge_method' defaults to "plain" if not present in the request
   * that includes a 'code_challenge'. The only supported values for this
   * parameter are "S256" or "plain".
   */
  code_challenge_method?: CodeChallengeMethod;

  /**
   * Recommended. Specifies an encoded 'code_verifier' that will be used as a
   * server-side challenge during authorization code exchange. This parameter
   * must be used with the 'code_challenge' parameter described above.
   */
  code_challenge?: string;

  /**
   * A way for developers and/or the auth team to provide a set of key value
   * pairs to be added as query parameters to the authorization url.
   */
  [
    key: string
  ]: querystring.ParsedUrlQueryInput[keyof querystring.ParsedUrlQueryInput];
}

export interface AccessTokenResponse {
  access_token: string;
  expiry_date: number;
}

export interface GetRefreshHandlerCallback {
  (): Promise<AccessTokenResponse>;
}

export interface GetTokenCallback {
  (
    err: GaxiosError | null,
    token?: Credentials | null,
    res?: GaxiosResponse | null,
  ): void;
}

export interface GetTokenResponse {
  tokens: Credentials;
  res: GaxiosResponse | null;
}

export interface GetAccessTokenCallback {
  (
    err: GaxiosError | null,
    token?: string | null,
    res?: GaxiosResponse | null,
  ): void;
}

export interface RefreshAccessTokenCallback {
  (
    err: GaxiosError | null,
    credentials?: Credentials | null,
    res?: GaxiosResponse | null,
  ): void;
}

export interface RefreshAccessTokenResponse {
  credentials: Credentials;
  res: GaxiosResponse | null;
}

export interface RequestMetadataResponse {
  headers: Headers;
  res?: GaxiosResponse<void> | null;
}

export interface RequestMetadataCallback {
  (
    err: GaxiosError | null,
    headers?: Headers,
    res?: GaxiosResponse<void> | null,
  ): void;
}

export interface GetFederatedSignonCertsCallback {
  (
    err: GaxiosError | null,
    certs?: Certificates,
    response?: GaxiosResponse<void> | null,
  ): void;
}

export interface FederatedSignonCertsResponse {
  certs: Certificates;
  format: CertificateFormat;
  res?: GaxiosResponse<void> | null;
}

export interface GetIapPublicKeysCallback {
  (
    err: GaxiosError | null,
    pubkeys?: PublicKeys,
    response?: GaxiosResponse<void> | null,
  ): void;
}

export interface IapPublicKeysResponse {
  pubkeys: PublicKeys;
  res?: GaxiosResponse<void> | null;
}

export interface RevokeCredentialsResult {
  success: boolean;
}

export interface VerifyIdTokenOptions {
  idToken: string;
  audience?: string | string[];
  maxExpiry?: number;
}

export interface OAuth2ClientEndpoints {
  /**
   * The endpoint for viewing access token information
   *
   * @example
   * 'https://oauth2.googleapis.com/tokeninfo'
   */
  tokenInfoUrl: string | URL;

  /**
   * The base URL for auth endpoints.
   *
   * @example
   * 'https://accounts.google.com/o/oauth2/v2/auth'
   */
  oauth2AuthBaseUrl: string | URL;

  /**
   * The base endpoint for token retrieval
   * .
   * @example
   * 'https://oauth2.googleapis.com/token'
   */
  oauth2TokenUrl: string | URL;

  /**
   * The base endpoint to revoke tokens.
   *
   * @example
   * 'https://oauth2.googleapis.com/revoke'
   */
  oauth2RevokeUrl: string | URL;

  /**
   * Sign on certificates in PEM format.
   *
   * @example
   * 'https://www.googleapis.com/oauth2/v1/certs'
   */
  oauth2FederatedSignonPemCertsUrl: string | URL;

  /**
   * Sign on certificates in JWK format.
   *
   * @example
   * 'https://www.googleapis.com/oauth2/v3/certs'
   */
  oauth2FederatedSignonJwkCertsUrl: string | URL;

  /**
   * IAP Public Key URL.
   * This URL contains a JSON dictionary that maps the `kid` claims to the public key values.
   *
   * @example
   * 'https://www.gstatic.com/iap/verify/public_key'
   */
  oauth2IapPublicKeyUrl: string | URL;
}

/**
 * A convenient interface for those looking to pass the OAuth2 Client config via a parsed
 * JSON file.
 */
interface OAuth2JSONOptions {
  /**
   * The authentication client ID.
   *
   * @alias {@link OAuth2ClientOptions.clientId}
   */
  client_id?: string;
  /**
   * The authentication client secret.
   *
   * @alias {@link OAuth2ClientOptions.clientSecret}
   */
  client_secret?: string;
  /**
   * The URIs to redirect to after completing the auth request.
   *
   * @alias {@link OAuth2ClientOptions.redirectUri}
   */
  redirect_uris?: string[];
}

export interface OAuth2ClientOptions
  extends AuthClientOptions,
    OAuth2JSONOptions {
  /**
   * The authentication client ID.
   *
   * @alias {@link OAuth2JSONOptions.client_id}
   */
  clientId?: string;
  /**
   * The authentication client secret.
   *
   * @alias {@link OAuth2JSONOptions.client_secret}
   */
  clientSecret?: string;
  /**
   * The URI to redirect to after completing the auth request.
   *
   * @alias {@link OAuth2JSONOptions.redirect_uris}
   */
  redirectUri?: string;
  /**
   * Customizable endpoints.
   */
  endpoints?: Partial<OAuth2ClientEndpoints>;
  /**
   * The allowed OAuth2 token issuers.
   */
  issuers?: string[];
  /**
   * The client authentication type. Supported values are basic, post, and none.
   * Defaults to post if not provided.
   * https://datatracker.ietf.org/doc/html/rfc7591#section-2
   */
  clientAuthentication?: ClientAuthentication;
}

// Re-exporting here for backwards compatibility
export type RefreshOptions = Pick<
  AuthClientOptions,
  'eagerRefreshThresholdMillis' | 'forceRefreshOnFailure'
>;

export class OAuth2Client extends AuthClient {
  private redirectUri?: string;
  private certificateCache: Certificates = {};
  private certificateExpiry: Date | null = null;
  private certificateCacheFormat: CertificateFormat = CertificateFormat.PEM;
  protected refreshTokenPromises = new Map<string, Promise<GetTokenResponse>>();
  readonly endpoints: Readonly<OAuth2ClientEndpoints>;
  readonly issuers: string[];
  readonly clientAuthentication: ClientAuthentication;

  // TODO: refactor tests to make this private
  _clientId?: string;

  // TODO: refactor tests to make this private
  _clientSecret?: string;

  refreshHandler?: GetRefreshHandlerCallback;

  /**
   * An OAuth2 Client for Google APIs.
   *
   * @param options The OAuth2 Client Options. Passing an `clientId` directly is **@DEPRECATED**.
   * @param clientSecret **@DEPRECATED**. Provide a {@link OAuth2ClientOptions `OAuth2ClientOptions`} object in the first parameter instead.
   * @param redirectUri **@DEPRECATED**. Provide a {@link OAuth2ClientOptions `OAuth2ClientOptions`} object in the first parameter instead.
   */
  constructor(
    options: OAuth2ClientOptions | OAuth2ClientOptions['clientId'] = {},
    /**
     * @deprecated - provide a {@link OAuth2ClientOptions `OAuth2ClientOptions`} object in the first parameter instead
     */
    clientSecret?: OAuth2ClientOptions['clientSecret'],
    /**
     * @deprecated - provide a {@link OAuth2ClientOptions `OAuth2ClientOptions`} object in the first parameter instead
     */
    redirectUri?: OAuth2ClientOptions['redirectUri'],
  ) {
    super(typeof options === 'object' ? options : {});

    if (typeof options !== 'object') {
      options = {
        clientId: options,
        clientSecret,
        redirectUri,
      };
    }

    this._clientId = options.clientId || options.client_id;
    this._clientSecret = options.clientSecret || options.client_secret;
    this.redirectUri = options.redirectUri || options.redirect_uris?.[0];

    this.endpoints = {
      tokenInfoUrl: 'https://oauth2.googleapis.com/tokeninfo',
      oauth2AuthBaseUrl: 'https://accounts.google.com/o/oauth2/v2/auth',
      oauth2TokenUrl: 'https://oauth2.googleapis.com/token',
      oauth2RevokeUrl: 'https://oauth2.googleapis.com/revoke',
      oauth2FederatedSignonPemCertsUrl:
        'https://www.googleapis.com/oauth2/v1/certs',
      oauth2FederatedSignonJwkCertsUrl:
        'https://www.googleapis.com/oauth2/v3/certs',
      oauth2IapPublicKeyUrl: 'https://www.gstatic.com/iap/verify/public_key',
      ...options.endpoints,
    };
    this.clientAuthentication =
      options.clientAuthentication || ClientAuthentication.ClientSecretPost;

    this.issuers = options.issuers || [
      'accounts.google.com',
      'https://accounts.google.com',
      this.universeDomain,
    ];
  }

  /**
   * @deprecated use instance's {@link OAuth2Client.endpoints}
   */
  protected static readonly GOOGLE_TOKEN_INFO_URL =
    'https://oauth2.googleapis.com/tokeninfo';

  /**
   * Clock skew - five minutes in seconds
   */
  private static readonly CLOCK_SKEW_SECS_ = 300;

  /**
   * The default max Token Lifetime is one day in seconds
   */
  private static readonly DEFAULT_MAX_TOKEN_LIFETIME_SECS_ = 86400;

  /**
   * Generates URL for consent page landing.
   * @param opts Options.
   * @return URL to consent page.
   */
  generateAuthUrl(opts: GenerateAuthUrlOpts = {}) {
    if (opts.code_challenge_method && !opts.code_challenge) {
      throw new Error(
        'If a code_challenge_method is provided, code_challenge must be included.',
      );
    }
    opts.response_type = opts.response_type || 'code';
    opts.client_id = opts.client_id || this._clientId;
    opts.redirect_uri = opts.redirect_uri || this.redirectUri;
    // Allow scopes to be passed either as array or a string
    if (Array.isArray(opts.scope)) {
      opts.scope = opts.scope.join(' ');
    }
    const rootUrl = this.endpoints.oauth2AuthBaseUrl.toString();
    return (
      rootUrl +
      '?' +
      querystring.stringify(opts as querystring.ParsedUrlQueryInput)
    );
  }

  generateCodeVerifier(): void {
    // To make the code compatible with browser SubtleCrypto we need to make
    // this method async.
    throw new Error(
      'generateCodeVerifier is removed, please use generateCodeVerifierAsync instead.',
    );
  }

  /**
   * Convenience method to automatically generate a code_verifier, and its
   * resulting SHA256. If used, this must be paired with a S256
   * code_challenge_method.
   *
   * For a full example see:
   * https://github.com/googleapis/google-auth-library-nodejs/blob/main/samples/oauth2-codeVerifier.js
   */
  async generateCodeVerifierAsync(): Promise<CodeVerifierResults> {
    // base64 encoding uses 6 bits per character, and we want to generate128
    // characters. 6*128/8 = 96.
    const crypto = createCrypto();
    const randomString = crypto.randomBytesBase64(96);
    // The valid characters in the code_verifier are [A-Z]/[a-z]/[0-9]/
    // "-"/"."/"_"/"~". Base64 encoded strings are pretty close, so we're just
    // swapping out a few chars.
    const codeVerifier = randomString
      .replace(/\+/g, '~')
      .replace(/=/g, '_')
      .replace(/\//g, '-');
    // Generate the base64 encoded SHA256
    const unencodedCodeChallenge =
      await crypto.sha256DigestBase64(codeVerifier);
    // We need to use base64UrlEncoding instead of standard base64
    const codeChallenge = unencodedCodeChallenge
      .split('=')[0]
      .replace(/\+/g, '-')
      .replace(/\//g, '_');
    return {codeVerifier, codeChallenge};
  }

  /**
   * Gets the access token for the given code.
   * @param code The authorization code.
   * @param callback Optional callback fn.
   */
  getToken(code: string): Promise<GetTokenResponse>;
  getToken(options: GetTokenOptions): Promise<GetTokenResponse>;
  getToken(code: string, callback: GetTokenCallback): void;
  getToken(options: GetTokenOptions, callback: GetTokenCallback): void;
  getToken(
    codeOrOptions: string | GetTokenOptions,
    callback?: GetTokenCallback,
  ): Promise<GetTokenResponse> | void {
    const options =
      typeof codeOrOptions === 'string' ? {code: codeOrOptions} : codeOrOptions;
    if (callback) {
      this.getTokenAsync(options).then(
        r => callback(null, r.tokens, r.res),
        e => callback(e, null, e.response),
      );
    } else {
      return this.getTokenAsync(options);
    }
  }

  private async getTokenAsync(
    options: GetTokenOptions,
  ): Promise<GetTokenResponse> {
    const url = this.endpoints.oauth2TokenUrl.toString();
    const headers = new Headers();
    const values: GetTokenQuery = {
      client_id: options.client_id || this._clientId,
      code_verifier: options.codeVerifier,
      code: options.code,
      grant_type: 'authorization_code',
      redirect_uri: options.redirect_uri || this.redirectUri,
    };
    if (this.clientAuthentication === ClientAuthentication.ClientSecretBasic) {
      const basic = Buffer.from(`${this._clientId}:${this._clientSecret}`);

      headers.set('authorization', `Basic ${basic.toString('base64')}`);
    }
    if (this.clientAuthentication === ClientAuthentication.ClientSecretPost) {
      values.client_secret = this._clientSecret;
    }

    const opts = {
      ...OAuth2Client.RETRY_CONFIG,
      method: 'POST',
      url,
      data: new URLSearchParams(removeUndefinedValuesInObject(values) as {}),
      headers,
    };
    AuthClient.setMethodName(opts, 'getTokenAsync');
    const res = await this.transporter.request<CredentialRequest>(opts);
    const tokens = res.data as Credentials;
    if (res.data && res.data.expires_in) {
      tokens.expiry_date = new Date().getTime() + res.data.expires_in * 1000;
      delete (tokens as CredentialRequest).expires_in;
    }
    this.emit('tokens', tokens);
    return {tokens, res};
  }

  /**
   * Refreshes the access token.
   * @param refresh_token Existing refresh token.
   * @private
   */
  protected async refreshToken(
    refreshToken?: string | null,
  ): Promise<GetTokenResponse> {
    if (!refreshToken) {
      return this.refreshTokenNoCache(refreshToken);
    }
    // If a request to refresh using the same token has started,
    // return the same promise.
    if (this.refreshTokenPromises.has(refreshToken)) {
      return this.refreshTokenPromises.get(refreshToken)!;
    }

    const p = this.refreshTokenNoCache(refreshToken).then(
      r => {
        this.refreshTokenPromises.delete(refreshToken);
        return r;
      },
      e => {
        this.refreshTokenPromises.delete(refreshToken);
        throw e;
      },
    );
    this.refreshTokenPromises.set(refreshToken, p);
    return p;
  }

  protected async refreshTokenNoCache(
    refreshToken?: string | null,
  ): Promise<GetTokenResponse> {
    if (!refreshToken) {
      throw new Error('No refresh token is set.');
    }
    const url = this.endpoints.oauth2TokenUrl.toString();
    const data: {} = {
      refresh_token: refreshToken,
      client_id: this._clientId,
      client_secret: this._clientSecret,
      grant_type: 'refresh_token',
    };

    let res: GaxiosResponse<CredentialRequest>;

    try {
      const opts: GaxiosOptions = {
        ...OAuth2Client.RETRY_CONFIG,
        method: 'POST',
        url,
        data: new URLSearchParams(
          removeUndefinedValuesInObject(data) as Record<string, string>,
        ),
      };
      AuthClient.setMethodName(opts, 'refreshTokenNoCache');

      // request for new token
      res = await this.transporter.request<CredentialRequest>(opts);
    } catch (e) {
      if (
        e instanceof GaxiosError &&
        e.message === 'invalid_grant' &&
        e.response?.data &&
        /ReAuth/i.test(e.response.data.error_description)
      ) {
        e.message = JSON.stringify(e.response.data);
      }

      throw e;
    }

    const tokens = res.data as Credentials;
    // TODO: de-duplicate this code from a few spots
    if (res.data && res.data.expires_in) {
      tokens.expiry_date = new Date().getTime() + res.data.expires_in * 1000;
      delete (tokens as CredentialRequest).expires_in;
    }
    this.emit('tokens', tokens);
    return {tokens, res};
  }

  /**
   * Retrieves the access token using refresh token
   *
   * @param callback callback
   */
  refreshAccessToken(): Promise<RefreshAccessTokenResponse>;
  refreshAccessToken(callback: RefreshAccessTokenCallback): void;
  refreshAccessToken(
    callback?: RefreshAccessTokenCallback,
  ): Promise<RefreshAccessTokenResponse> | void {
    if (callback) {
      this.refreshAccessTokenAsync().then(
        r => callback(null, r.credentials, r.res),
        callback,
      );
    } else {
      return this.refreshAccessTokenAsync();
    }
  }

  private async refreshAccessTokenAsync() {
    const r = await this.refreshToken(this.credentials.refresh_token);
    const tokens = r.tokens as Credentials;
    tokens.refresh_token = this.credentials.refresh_token;
    this.credentials = tokens;
    return {credentials: this.credentials, res: r.res};
  }

  /**
   * Get a non-expired access token, after refreshing if necessary
   *
   * @param callback Callback to call with the access token
   */
  getAccessToken(): Promise<GetAccessTokenResponse>;
  getAccessToken(callback: GetAccessTokenCallback): void;
  getAccessToken(
    callback?: GetAccessTokenCallback,
  ): Promise<GetAccessTokenResponse> | void {
    if (callback) {
      this.getAccessTokenAsync().then(
        r => callback(null, r.token, r.res),
        callback,
      );
    } else {
      return this.getAccessTokenAsync();
    }
  }

  private async getAccessTokenAsync(): Promise<GetAccessTokenResponse> {
    const shouldRefresh =
      !this.credentials.access_token || this.isTokenExpiring();
    if (shouldRefresh) {
      if (!this.credentials.refresh_token) {
        if (this.refreshHandler) {
          const refreshedAccessToken =
            await this.processAndValidateRefreshHandler();
          if (refreshedAccessToken?.access_token) {
            this.setCredentials(refreshedAccessToken);
            return {token: this.credentials.access_token};
          }
        } else {
          throw new Error(
            'No refresh token or refresh handler callback is set.',
          );
        }
      }

      const r = await this.refreshAccessTokenAsync();
      if (!r.credentials || (r.credentials && !r.credentials.access_token)) {
        throw new Error('Could not refresh access token.');
      }
      return {token: r.credentials.access_token, res: r.res};
    } else {
      return {token: this.credentials.access_token};
    }
  }

  /**
   * The main authentication interface.  It takes an optional url which when
   * present is the endpoint being accessed, and returns a Promise which
   * resolves with authorization header fields.
   *
   * In OAuth2Client, the result has the form:
   * { authorization: 'Bearer <access_token_value>' }
   */
  async getRequestHeaders(url?: string | URL): Promise<Headers> {
    const headers = (await this.getRequestMetadataAsync(url)).headers;
    return headers;
  }

  protected async getRequestMetadataAsync(
    url?: string | URL | null,
  ): Promise<RequestMetadataResponse> {
    url;
    const thisCreds = this.credentials;
    if (
      !thisCreds.access_token &&
      !thisCreds.refresh_token &&
      !this.apiKey &&
      !this.refreshHandler
    ) {
      throw new Error(
        'No access, refresh token, API key or refresh handler callback is set.',
      );
    }

    if (thisCreds.access_token && !this.isTokenExpiring()) {
      thisCreds.token_type = thisCreds.token_type || 'Bearer';
      const headers = new Headers({
        authorization: thisCreds.token_type + ' ' + thisCreds.access_token,
      });
      return {headers: this.addSharedMetadataHeaders(headers)};
    }

    // If refreshHandler exists, call processAndValidateRefreshHandler().
    if (this.refreshHandler) {
      const refreshedAccessToken =
        await this.processAndValidateRefreshHandler();
      if (refreshedAccessToken?.access_token) {
        this.setCredentials(refreshedAccessToken);
        const headers = new Headers({
          authorization: 'Bearer ' + this.credentials.access_token,
        });
        return {headers: this.addSharedMetadataHeaders(headers)};
      }
    }

    if (this.apiKey) {
      return {headers: new Headers({'X-Goog-Api-Key': this.apiKey})};
    }
    let r: GetTokenResponse | null = null;
    let tokens: Credentials | null = null;
    try {
      r = await this.refreshToken(thisCreds.refresh_token);
      tokens = r.tokens;
    } catch (err) {
      const e = err as GaxiosError;
      if (
        e.response &&
        (e.response.status === 403 || e.response.status === 404)
      ) {
        e.message = `Could not refresh access token: ${e.message}`;
      }
      throw e;
    }

    const credentials = this.credentials;
    credentials.token_type = credentials.token_type || 'Bearer';
    tokens.refresh_token = credentials.refresh_token;
    this.credentials = tokens;
    const headers = new Headers({
      authorization: credentials.token_type + ' ' + tokens.access_token,
    });
    return {headers: this.addSharedMetadataHeaders(headers), res: r.res};
  }

  /**
   * Generates an URL to revoke the given token.
   * @param token The existing token to be revoked.
   *
   * @deprecated use instance method {@link OAuth2Client.getRevokeTokenURL}
   */
  static getRevokeTokenUrl(token: string): string {
    return new OAuth2Client().getRevokeTokenURL(token).toString();
  }

  /**
   * Generates a URL to revoke the given token.
   *
   * @param token The existing token to be revoked.
   */
  getRevokeTokenURL(token: string): URL {
    const url = new URL(this.endpoints.oauth2RevokeUrl);

    url.searchParams.append('token', token);

    return url;
  }

  /**
   * Revokes the access given to token.
   * @param token The existing token to be revoked.
   * @param callback Optional callback fn.
   */
  revokeToken(token: string): GaxiosPromise<RevokeCredentialsResult>;
  revokeToken(
    token: string,
    callback: BodyResponseCallback<RevokeCredentialsResult>,
  ): void;
  revokeToken(
    token: string,
    callback?: BodyResponseCallback<RevokeCredentialsResult>,
  ): GaxiosPromise<RevokeCredentialsResult> | void {
    const opts: GaxiosOptions = {
      ...OAuth2Client.RETRY_CONFIG,
      url: this.getRevokeTokenURL(token).toString(),
      method: 'POST',
    };
    AuthClient.setMethodName(opts, 'revokeToken');
    if (callback) {
      this.transporter
        .request<RevokeCredentialsResult>(opts)
        .then(r => callback(null, r), callback);
    } else {
      return this.transporter.request<RevokeCredentialsResult>(opts);
    }
  }

  /**
   * Revokes access token and clears the credentials object
   * @param callback callback
   */
  revokeCredentials(): GaxiosPromise<RevokeCredentialsResult>;
  revokeCredentials(
    callback: BodyResponseCallback<RevokeCredentialsResult>,
  ): void;
  revokeCredentials(
    callback?: BodyResponseCallback<RevokeCredentialsResult>,
  ): GaxiosPromise<RevokeCredentialsResult> | void {
    if (callback) {
      this.revokeCredentialsAsync().then(res => callback(null, res), callback);
    } else {
      return this.revokeCredentialsAsync();
    }
  }

  private async revokeCredentialsAsync() {
    const token = this.credentials.access_token;
    this.credentials = {};
    if (token) {
      return this.revokeToken(token);
    } else {
      throw new Error('No access token to revoke.');
    }
  }

  /**
   * Provides a request implementation with OAuth 2.0 flow. If credentials have
   * a refresh_token, in cases of HTTP 401 and 403 responses, it automatically
   * asks for a new access token and replays the unsuccessful request.
   * @param opts Request options.
   * @param callback callback.
   * @return Request object
   */
  request<T>(opts: GaxiosOptions): GaxiosPromise<T>;
  request<T>(opts: GaxiosOptions, callback: BodyResponseCallback<T>): void;
  request<T>(
    opts: GaxiosOptions,
    callback?: BodyResponseCallback<T>,
  ): GaxiosPromise<T> | void {
    if (callback) {
      this.requestAsync<T>(opts).then(
        r => callback(null, r),
        e => {
          return callback(e, e.response);
        },
      );
    } else {
      return this.requestAsync<T>(opts);
    }
  }

  protected async requestAsync<T>(
    opts: GaxiosOptions,
    reAuthRetried = false,
  ): Promise<GaxiosResponse<T>> {
    try {
      const r = await this.getRequestMetadataAsync();
      opts.headers = Gaxios.mergeHeaders(opts.headers);

      this.addUserProjectAndAuthHeaders(opts.headers, r.headers);

      if (this.apiKey) {
        opts.headers.set('X-Goog-Api-Key', this.apiKey);
      }

      return await this.transporter.request<T>(opts);
    } catch (e) {
      const res = (e as GaxiosError).response;
      if (res) {
        const statusCode = res.status;
        // Retry the request for metadata if the following criteria are true:
        // - We haven't already retried.  It only makes sense to retry once.
        // - The response was a 401 or a 403
        // - The request didn't send a readableStream
        // - An access_token and refresh_token were available, but either no
        //   expiry_date was available or the forceRefreshOnFailure flag is set.
        //   The absent expiry_date case can happen when developers stash the
        //   access_token and refresh_token for later use, but the access_token
        //   fails on the first try because it's expired. Some developers may
        //   choose to enable forceRefreshOnFailure to mitigate time-related
        //   errors.
        // Or the following criteria are true:
        // - We haven't already retried.  It only makes sense to retry once.
        // - The response was a 401 or a 403
        // - The request didn't send a readableStream
        // - No refresh_token was available
        // - An access_token and a refreshHandler callback were available, but
        //   either no expiry_date was available or the forceRefreshOnFailure
        //   flag is set. The access_token fails on the first try because it's
        //   expired. Some developers may choose to enable forceRefreshOnFailure
        //   to mitigate time-related errors.
        const mayRequireRefresh =
          this.credentials &&
          this.credentials.access_token &&
          this.credentials.refresh_token &&
          (!this.credentials.expiry_date || this.forceRefreshOnFailure);
        const mayRequireRefreshWithNoRefreshToken =
          this.credentials &&
          this.credentials.access_token &&
          !this.credentials.refresh_token &&
          (!this.credentials.expiry_date || this.forceRefreshOnFailure) &&
          this.refreshHandler;
        const isReadableStream = res.config.data instanceof stream.Readable;
        const isAuthErr = statusCode === 401 || statusCode === 403;
        if (
          !reAuthRetried &&
          isAuthErr &&
          !isReadableStream &&
          mayRequireRefresh
        ) {
          await this.refreshAccessTokenAsync();
          return this.requestAsync<T>(opts, true);
        } else if (
          !reAuthRetried &&
          isAuthErr &&
          !isReadableStream &&
          mayRequireRefreshWithNoRefreshToken
        ) {
          const refreshedAccessToken =
            await this.processAndValidateRefreshHandler();
          if (refreshedAccessToken?.access_token) {
            this.setCredentials(refreshedAccessToken);
          }
          return this.requestAsync<T>(opts, true);
        }
      }
      throw e;
    }
  }

  /**
   * Verify id token is token by checking the certs and audience
   * @param options that contains all options.
   * @param callback Callback supplying GoogleLogin if successful
   */
  verifyIdToken(options: VerifyIdTokenOptions): Promise<LoginTicket>;
  verifyIdToken(
    options: VerifyIdTokenOptions,
    callback: (err: Error | null, login?: LoginTicket) => void,
  ): void;
  verifyIdToken(
    options: VerifyIdTokenOptions,
    callback?: (err: Error | null, login?: LoginTicket) => void,
  ): void | Promise<LoginTicket> {
    // This function used to accept two arguments instead of an options object.
    // Check the types to help users upgrade with less pain.
    // This check can be removed after a 2.0 release.
    if (callback && typeof callback !== 'function') {
      throw new Error(
        'This method accepts an options object as the first parameter, which includes the idToken, audience, and maxExpiry.',
      );
    }

    if (callback) {
      this.verifyIdTokenAsync(options).then(r => callback(null, r), callback);
    } else {
      return this.verifyIdTokenAsync(options);
    }
  }

  private async verifyIdTokenAsync(
    options: VerifyIdTokenOptions,
  ): Promise<LoginTicket> {
    if (!options.idToken) {
      throw new Error('The verifyIdToken method requires an ID Token');
    }
    const response = await this.getFederatedSignonCertsAsync();
    const login = await this.verifySignedJwtWithCertsAsync(
      options.idToken,
      response.certs,
      options.audience,
      this.issuers,
      options.maxExpiry,
    );

    return login;
  }

  /**
   * Obtains information about the provisioned access token.  Especially useful
   * if you want to check the scopes that were provisioned to a given token.
   *
   * @param accessToken Required.  The Access Token for which you want to get
   * user info.
   */
  async getTokenInfo(accessToken: string): Promise<TokenInfo> {
    const {data} = await this.transporter.request<TokenInfoRequest>({
      ...OAuth2Client.RETRY_CONFIG,
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
        authorization: `Bearer ${accessToken}`,
      },
      url: this.endpoints.tokenInfoUrl.toString(),
    });
    const info = Object.assign(
      {
        expiry_date: new Date().getTime() + data.expires_in! * 1000,
        scopes: data.scope!.split(' '),
      },
      data,
    );
    delete info.expires_in;
    delete info.scope;
    return info;
  }

  /**
   * Gets federated sign-on certificates to use for verifying identity tokens.
   * Returns certs as array structure, where keys are key ids, and values
   * are certificates in either PEM or JWK format.
   * @param callback Callback supplying the certificates
   */
  getFederatedSignonCerts(): Promise<FederatedSignonCertsResponse>;
  getFederatedSignonCerts(callback: GetFederatedSignonCertsCallback): void;
  getFederatedSignonCerts(
    callback?: GetFederatedSignonCertsCallback,
  ): Promise<FederatedSignonCertsResponse> | void {
    if (callback) {
      this.getFederatedSignonCertsAsync().then(
        r => callback(null, r.certs, r.res),
        callback,
      );
    } else {
      return this.getFederatedSignonCertsAsync();
    }
  }

  async getFederatedSignonCertsAsync(): Promise<FederatedSignonCertsResponse> {
    const nowTime = new Date().getTime();
    const format = hasBrowserCrypto()
      ? CertificateFormat.JWK
      : CertificateFormat.PEM;
    if (
      this.certificateExpiry &&
      nowTime < this.certificateExpiry.getTime() &&
      this.certificateCacheFormat === format
    ) {
      return {certs: this.certificateCache, format};
    }
    let res: GaxiosResponse;
    let url: string;
    switch (format) {
      case CertificateFormat.PEM:
        url = this.endpoints.oauth2FederatedSignonPemCertsUrl.toString();
        break;
      case CertificateFormat.JWK:
        url = this.endpoints.oauth2FederatedSignonJwkCertsUrl.toString();
        break;
      default:
        throw new Error(`Unsupported certificate format ${format}`);
    }
    try {
      const opts = {
        ...OAuth2Client.RETRY_CONFIG,
        url,
      };
      AuthClient.setMethodName(opts, 'getFederatedSignonCertsAsync');
      res = await this.transporter.request(opts);
    } catch (e) {
      if (e instanceof Error) {
        e.message = `Failed to retrieve verification certificates: ${e.message}`;
      }

      throw e;
    }

    const cacheControl = res?.headers.get('cache-control');
    let cacheAge = -1;
    if (cacheControl) {
      const maxAge = /max-age=(?<maxAge>[0-9]+)/.exec(cacheControl)?.groups
        ?.maxAge;
      if (maxAge) {
        // Cache results with max-age (in seconds)
        cacheAge = Number(maxAge) * 1000; // milliseconds
      }
    }

    let certificates: Certificates = {};
    switch (format) {
      case CertificateFormat.PEM:
        certificates = res.data;
        break;
      case CertificateFormat.JWK:
        for (const key of res.data.keys) {
          certificates[key.kid] = key;
        }
        break;
      default:
        throw new Error(`Unsupported certificate format ${format}`);
    }

    const now = new Date();
    this.certificateExpiry =
      cacheAge === -1 ? null : new Date(now.getTime() + cacheAge);
    this.certificateCache = certificates;
    this.certificateCacheFormat = format;
    return {certs: certificates, format, res};
  }

  /**
   * Gets federated sign-on certificates to use for verifying identity tokens.
   * Returns certs as array structure, where keys are key ids, and values
   * are certificates in either PEM or JWK format.
   * @param callback Callback supplying the certificates
   */
  getIapPublicKeys(): Promise<IapPublicKeysResponse>;
  getIapPublicKeys(callback: GetIapPublicKeysCallback): void;
  getIapPublicKeys(
    callback?: GetIapPublicKeysCallback,
  ): Promise<IapPublicKeysResponse> | void {
    if (callback) {
      this.getIapPublicKeysAsync().then(
        r => callback(null, r.pubkeys, r.res),
        callback,
      );
    } else {
      return this.getIapPublicKeysAsync();
    }
  }

  async getIapPublicKeysAsync(): Promise<IapPublicKeysResponse> {
    let res: GaxiosResponse;
    const url = this.endpoints.oauth2IapPublicKeyUrl.toString();

    try {
      const opts = {
        ...OAuth2Client.RETRY_CONFIG,
        url,
      };
      AuthClient.setMethodName(opts, 'getIapPublicKeysAsync');
      res = await this.transporter.request(opts);
    } catch (e) {
      if (e instanceof Error) {
        e.message = `Failed to retrieve verification certificates: ${e.message}`;
      }

      throw e;
    }

    return {pubkeys: res.data, res};
  }

  verifySignedJwtWithCerts() {
    // To make the code compatible with browser SubtleCrypto we need to make
    // this method async.
    throw new Error(
      'verifySignedJwtWithCerts is removed, please use verifySignedJwtWithCertsAsync instead.',
    );
  }

  /**
   * Verify the id token is signed with the correct certificate
   * and is from the correct audience.
   * @param jwt The jwt to verify (The ID Token in this case).
   * @param certs The array of certs to test the jwt against.
   * @param requiredAudience The audience to test the jwt against.
   * @param issuers The allowed issuers of the jwt (Optional).
   * @param maxExpiry The max expiry the certificate can be (Optional).
   * @return Returns a promise resolving to LoginTicket on verification.
   */
  async verifySignedJwtWithCertsAsync(
    jwt: string,
    certs: Certificates | PublicKeys,
    requiredAudience?: string | string[],
    issuers?: string[],
    maxExpiry?: number,
  ) {
    const crypto = createCrypto();

    if (!maxExpiry) {
      maxExpiry = OAuth2Client.DEFAULT_MAX_TOKEN_LIFETIME_SECS_;
    }

    const segments = jwt.split('.');
    if (segments.length !== 3) {
      throw new Error('Wrong number of segments in token: ' + jwt);
    }
    const signed = segments[0] + '.' + segments[1];
    let signature = segments[2];

    let envelope;
    let payload: TokenPayload;

    try {
      envelope = JSON.parse(crypto.decodeBase64StringUtf8(segments[0]));
    } catch (err) {
      if (err instanceof Error) {
        err.message = `Can't parse token envelope: ${segments[0]}': ${err.message}`;
      }

      throw err;
    }

    if (!envelope) {
      throw new Error("Can't parse token envelope: " + segments[0]);
    }

    try {
      payload = JSON.parse(crypto.decodeBase64StringUtf8(segments[1]));
    } catch (err) {
      if (err instanceof Error) {
        err.message = `Can't parse token payload '${segments[0]}`;
      }
      throw err;
    }

    if (!payload) {
      throw new Error("Can't parse token payload: " + segments[1]);
    }

    if (!Object.prototype.hasOwnProperty.call(certs, envelope.kid)) {
      // If this is not present, then there's no reason to attempt verification
      throw new Error('No pem found for envelope: ' + JSON.stringify(envelope));
    }

    const cert = certs[envelope.kid];

    if (envelope.alg === 'ES256') {
      signature = formatEcdsa.joseToDer(signature, 'ES256').toString('base64');
    }

    const verified = await crypto.verify(cert, signed, signature);

    if (!verified) {
      throw new Error('Invalid token signature: ' + jwt);
    }

    if (!payload.iat) {
      throw new Error('No issue time in token: ' + JSON.stringify(payload));
    }

    if (!payload.exp) {
      throw new Error(
        'No expiration time in token: ' + JSON.stringify(payload),
      );
    }

    const iat = Number(payload.iat);
    if (isNaN(iat)) throw new Error('iat field using invalid format');

    const exp = Number(payload.exp);
    if (isNaN(exp)) throw new Error('exp field using invalid format');

    const now = new Date().getTime() / 1000;

    if (exp >= now + maxExpiry) {
      throw new Error(
        'Expiration time too far in future: ' + JSON.stringify(payload),
      );
    }

    const earliest = iat - OAuth2Client.CLOCK_SKEW_SECS_;
    const latest = exp + OAuth2Client.CLOCK_SKEW_SECS_;

    if (now < earliest) {
      throw new Error(
        'Token used too early, ' +
          now +
          ' < ' +
          earliest +
          ': ' +
          JSON.stringify(payload),
      );
    }

    if (now > latest) {
      throw new Error(
        'Token used too late, ' +
          now +
          ' > ' +
          latest +
          ': ' +
          JSON.stringify(payload),
      );
    }

    if (issuers && issuers.indexOf(payload.iss) < 0) {
      throw new Error(
        'Invalid issuer, expected one of [' +
          issuers +
          '], but got ' +
          payload.iss,
      );
    }

    // Check the audience matches if we have one
    if (typeof requiredAudience !== 'undefined' && requiredAudience !== null) {
      const aud = payload.aud;
      let audVerified = false;
      // If the requiredAudience is an array, check if it contains token
      // audience
      if (requiredAudience.constructor === Array) {
        audVerified = requiredAudience.indexOf(aud) > -1;
      } else {
        audVerified = aud === requiredAudience;
      }
      if (!audVerified) {
        throw new Error(
          'Wrong recipient, payload audience != requiredAudience',
        );
      }
    }
    return new LoginTicket(envelope, payload);
  }

  /**
   * Returns a promise that resolves with AccessTokenResponse type if
   * refreshHandler is defined.
   * If not, nothing is returned.
   */
  private async processAndValidateRefreshHandler(): Promise<
    AccessTokenResponse | undefined
  > {
    if (this.refreshHandler) {
      const accessTokenResponse = await this.refreshHandler();
      if (!accessTokenResponse.access_token) {
        throw new Error(
          'No access token is returned by the refreshHandler callback.',
        );
      }
      return accessTokenResponse;
    }
    return;
  }

  /**
   * Returns true if a token is expired or will expire within
   * eagerRefreshThresholdMillismilliseconds.
   * If there is no expiry time, assumes the token is not expired or expiring.
   */
  protected isTokenExpiring(): boolean {
    const expiryDate = this.credentials.expiry_date;
    return expiryDate
      ? expiryDate <= new Date().getTime() + this.eagerRefreshThresholdMillis
      : false;
  }
}
