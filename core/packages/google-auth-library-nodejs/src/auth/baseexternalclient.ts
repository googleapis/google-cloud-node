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

import {
  Gaxios,
  GaxiosError,
  GaxiosOptions,
  GaxiosPromise,
  GaxiosResponse,
} from 'gaxios';
import * as stream from 'stream';

import {Credentials} from './credentials';
import {
  AuthClient,
  AuthClientOptions,
  GetAccessTokenResponse,
  BodyResponseCallback,
} from './authclient';
import * as sts from './stscredentials';
import {ClientAuthentication} from './oauth2common';
import {SnakeToCamelObject, originalOrCamelOptions} from '../util';
import {pkg} from '../shared.cjs';

/**
 * The required token exchange grant_type: rfc8693#section-2.1
 */
const STS_GRANT_TYPE = 'urn:ietf:params:oauth:grant-type:token-exchange';
/**
 * The requested token exchange requested_token_type: rfc8693#section-2.1
 */
const STS_REQUEST_TOKEN_TYPE = 'urn:ietf:params:oauth:token-type:access_token';
/** The default OAuth scope to request when none is provided. */
const DEFAULT_OAUTH_SCOPE = 'https://www.googleapis.com/auth/cloud-platform';
/** Default impersonated token lifespan in seconds.*/
const DEFAULT_TOKEN_LIFESPAN = 3600;

/**
 * Offset to take into account network delays and server clock skews.
 */
export const EXPIRATION_TIME_OFFSET = 5 * 60 * 1000;
/**
 * The credentials JSON file type for external account clients.
 * There are 3 types of JSON configs:
 * 1. authorized_user => Google end user credential
 * 2. service_account => Google service account credential
 * 3. external_Account => non-GCP service (eg. AWS, Azure, K8s)
 */
export const EXTERNAL_ACCOUNT_TYPE = 'external_account';
/**
 * Cloud resource manager URL used to retrieve project information.
 *
 * @deprecated use {@link BaseExternalAccountClient.cloudResourceManagerURL} instead
 **/
export const CLOUD_RESOURCE_MANAGER =
  'https://cloudresourcemanager.googleapis.com/v1/projects/';
/** The workforce audience pattern. */
const WORKFORCE_AUDIENCE_PATTERN =
  '//iam\\.googleapis\\.com/locations/[^/]+/workforcePools/[^/]+/providers/.+';
const DEFAULT_TOKEN_URL = 'https://sts.{universeDomain}/v1/token';

/**
 * Shared options used to build {@link ExternalAccountClient} and
 * {@link ExternalAccountAuthorizedUserClient}.
 */
export interface SharedExternalAccountClientOptions extends AuthClientOptions {
  /**
   *  The Security Token Service audience, which is usually the fully specified
   *  resource name of the workload or workforce pool provider.
   */
  audience: string;
  /**
   * The Security Token Service token URL used to exchange the third party token
   * for a GCP access token. If not provided, will default to
   * 'https://sts.googleapis.com/v1/token'
   */
  token_url?: string;
}

/**
 * Interface containing context about the requested external identity. This is
 * passed on all requests from external account clients to external identity suppliers.
 */
export interface ExternalAccountSupplierContext {
  /**
   * The requested external account audience. For example:
   * * "//iam.googleapis.com/locations/global/workforcePools/$WORKFORCE_POOL_ID/providers/$PROVIDER_ID"
   * * "//iam.googleapis.com/projects/PROJECT_NUMBER/locations/global/workloadIdentityPools/POOL_ID/providers/PROVIDER_ID"
   */
  audience: string;
  /**
   * The requested subject token type. Expected values include:
   * * "urn:ietf:params:oauth:token-type:jwt"
   * * "urn:ietf:params:aws:token-type:aws4_request"
   * * "urn:ietf:params:oauth:token-type:saml2"
   * * "urn:ietf:params:oauth:token-type:id_token"
   */
  subjectTokenType: string;
  /**
   * The {@link Gaxios} instance for calling external account
   * to use for requests.
   */
  transporter: Gaxios;
}

/**
 * Base external account credentials json interface.
 */
export interface BaseExternalAccountClientOptions
  extends SharedExternalAccountClientOptions {
  /**
   * Credential type, should always be 'external_account'.
   */
  type?: string;
  /**
   * The Security Token Service subject token type based on the OAuth 2.0
   * token exchange spec. Expected values include:
   * * 'urn:ietf:params:oauth:token-type:jwt'
   * * 'urn:ietf:params:aws:token-type:aws4_request'
   * * 'urn:ietf:params:oauth:token-type:saml2'
   * * 'urn:ietf:params:oauth:token-type:id_token'
   */
  subject_token_type: string;
  /**
   * The URL for the service account impersonation request. This URL is required
   * for some APIs. If this URL is not available, the access token from the
   * Security Token Service is used directly.
   */
  service_account_impersonation_url?: string;
  /**
   * Object containing additional options for service account impersonation.
   */
  service_account_impersonation?: {
    /**
     * The desired lifetime of the impersonated service account access token.
     * If not provided, the default lifetime will be 3600 seconds.
     */
    token_lifetime_seconds?: number;
  };
  /**
   * The endpoint used to retrieve account related information.
   */
  token_info_url?: string;
  /**
   * Client ID of the service account from the console.
   */
  client_id?: string;
  /**
   * Client secret of the service account from the console.
   */
  client_secret?: string;
  /**
   * The workforce pool user project. Required when using a workforce identity
   * pool.
   */
  workforce_pool_user_project?: string;
  /**
   * The scopes to request during the authorization grant.
   */
  scopes?: string[];
  /**
   * @example
   * https://cloudresourcemanager.googleapis.com/v1/projects/
   **/
  cloud_resource_manager_url?: string | URL;
}

/**
 * Interface defining the successful response for iamcredentials
 * generateAccessToken API.
 * https://cloud.google.com/iam/docs/reference/credentials/rest/v1/projects.serviceAccounts/generateAccessToken
 */
export interface IamGenerateAccessTokenResponse {
  accessToken: string;
  /**
   * ISO format used for expiration time.
   *
   * @example
   * '2014-10-02T15:01:23.045123456Z'
   */
  expireTime: string;
}

/**
 * Interface defining the project information response returned by the cloud
 * resource manager.
 * https://cloud.google.com/resource-manager/reference/rest/v1/projects#Project
 */
export interface ProjectInfo {
  projectNumber: string;
  projectId: string;
  lifecycleState: string;
  name: string;
  createTime?: string;
  parent: {[key: string]: ReturnType<JSON['parse']>};
}

/**
 * Internal interface for tracking the access token expiration time.
 */
interface CredentialsWithResponse extends Credentials {
  res?: GaxiosResponse | null;
}

/**
 * Base external account client. This is used to instantiate AuthClients for
 * exchanging external account credentials for GCP access token and authorizing
 * requests to GCP APIs.
 * The base class implements common logic for exchanging various type of
 * external credentials for GCP access token. The logic of determining and
 * retrieving the external credential based on the environment and
 * credential_source will be left for the subclasses.
 */
export abstract class BaseExternalAccountClient extends AuthClient {
  /**
   * OAuth scopes for the GCP access token to use. When not provided,
   * the default https://www.googleapis.com/auth/cloud-platform is
   * used.
   */
  public scopes?: string | string[];
  public projectNumber: string | null;
  protected readonly audience: string;
  protected readonly subjectTokenType: string;
  protected stsCredential: sts.StsCredentials;
  protected readonly clientAuth?: ClientAuthentication;
  protected credentialSourceType?: string;
  private cachedAccessToken: CredentialsWithResponse | null;
  private readonly serviceAccountImpersonationUrl?: string;
  private readonly serviceAccountImpersonationLifetime?: number;
  private readonly workforcePoolUserProject?: string;
  private readonly configLifetimeRequested: boolean;
  private readonly tokenUrl: string;
  /**
   * @example
   * ```ts
   * new URL('https://cloudresourcemanager.googleapis.com/v1/projects/');
   * ```
   */
  protected cloudResourceManagerURL: URL | string;
  protected supplierContext: ExternalAccountSupplierContext;
  /**
   * A pending access token request. Used for concurrent calls.
   */
  #pendingAccessToken: Promise<CredentialsWithResponse> | null = null;

  /**
   * Instantiate a BaseExternalAccountClient instance using the provided JSON
   * object loaded from an external account credentials file.
   * @param options The external account options object typically loaded
   *   from the external account JSON credential file. The camelCased options
   *   are aliases for the snake_cased options.
   */
  constructor(
    options:
      | BaseExternalAccountClientOptions
      | SnakeToCamelObject<BaseExternalAccountClientOptions>,
  ) {
    super(options);

    const opts = originalOrCamelOptions(
      options as BaseExternalAccountClientOptions,
    );

    const type = opts.get('type');
    if (type && type !== EXTERNAL_ACCOUNT_TYPE) {
      throw new Error(
        `Expected "${EXTERNAL_ACCOUNT_TYPE}" type but ` +
          `received "${options.type}"`,
      );
    }

    const clientId = opts.get('client_id');
    const clientSecret = opts.get('client_secret');
    this.tokenUrl =
      opts.get('token_url') ??
      DEFAULT_TOKEN_URL.replace('{universeDomain}', this.universeDomain);
    const subjectTokenType = opts.get('subject_token_type');
    const workforcePoolUserProject = opts.get('workforce_pool_user_project');
    const serviceAccountImpersonationUrl = opts.get(
      'service_account_impersonation_url',
    );
    const serviceAccountImpersonation = opts.get(
      'service_account_impersonation',
    );
    const serviceAccountImpersonationLifetime = originalOrCamelOptions(
      serviceAccountImpersonation,
    ).get('token_lifetime_seconds');

    this.cloudResourceManagerURL = new URL(
      opts.get('cloud_resource_manager_url') ||
        `https://cloudresourcemanager.${this.universeDomain}/v1/projects/`,
    );

    if (clientId) {
      this.clientAuth = {
        confidentialClientType: 'basic',
        clientId,
        clientSecret,
      };
    }

    this.stsCredential = new sts.StsCredentials({
      tokenExchangeEndpoint: this.tokenUrl,
      clientAuthentication: this.clientAuth,
    });
    this.scopes = opts.get('scopes') || [DEFAULT_OAUTH_SCOPE];
    this.cachedAccessToken = null;
    this.audience = opts.get('audience');
    this.subjectTokenType = subjectTokenType;
    this.workforcePoolUserProject = workforcePoolUserProject;
    const workforceAudiencePattern = new RegExp(WORKFORCE_AUDIENCE_PATTERN);
    if (
      this.workforcePoolUserProject &&
      !this.audience.match(workforceAudiencePattern)
    ) {
      throw new Error(
        'workforcePoolUserProject should not be set for non-workforce pool ' +
          'credentials.',
      );
    }

    this.serviceAccountImpersonationUrl = serviceAccountImpersonationUrl;
    this.serviceAccountImpersonationLifetime =
      serviceAccountImpersonationLifetime;

    if (this.serviceAccountImpersonationLifetime) {
      this.configLifetimeRequested = true;
    } else {
      this.configLifetimeRequested = false;
      this.serviceAccountImpersonationLifetime = DEFAULT_TOKEN_LIFESPAN;
    }

    this.projectNumber = this.getProjectNumber(this.audience);
    this.supplierContext = {
      audience: this.audience,
      subjectTokenType: this.subjectTokenType,
      transporter: this.transporter,
    };
  }

  /** The service account email to be impersonated, if available. */
  getServiceAccountEmail(): string | null {
    if (this.serviceAccountImpersonationUrl) {
      if (this.serviceAccountImpersonationUrl.length > 256) {
        /**
         * Prevents DOS attacks.
         * @see {@link https://github.com/googleapis/google-auth-library-nodejs/security/code-scanning/84}
         **/
        throw new RangeError(
          `URL is too long: ${this.serviceAccountImpersonationUrl}`,
        );
      }

      // Parse email from URL. The formal looks as follows:
      // https://iamcredentials.googleapis.com/v1/projects/-/serviceAccounts/name@project-id.iam.gserviceaccount.com:generateAccessToken
      const re = /serviceAccounts\/(?<email>[^:]+):generateAccessToken$/;
      const result = re.exec(this.serviceAccountImpersonationUrl);
      return result?.groups?.email || null;
    }
    return null;
  }

  /**
   * Provides a mechanism to inject GCP access tokens directly.
   * When the provided credential expires, a new credential, using the
   * external account options, is retrieved.
   * @param credentials The Credentials object to set on the current client.
   */
  setCredentials(credentials: Credentials) {
    super.setCredentials(credentials);
    this.cachedAccessToken = credentials;
  }

  /**
   * Triggered when a external subject token is needed to be exchanged for a GCP
   * access token via GCP STS endpoint.
   * This abstract method needs to be implemented by subclasses depending on
   * the type of external credential used.
   * @return A promise that resolves with the external subject token.
   */
  abstract retrieveSubjectToken(): Promise<string>;

  /**
   * @return A promise that resolves with the current GCP access token
   *   response. If the current credential is expired, a new one is retrieved.
   */
  async getAccessToken(): Promise<GetAccessTokenResponse> {
    // If cached access token is unavailable or expired, force refresh.
    if (!this.cachedAccessToken || this.isExpired(this.cachedAccessToken)) {
      await this.refreshAccessTokenAsync();
    }
    // Return GCP access token in GetAccessTokenResponse format.
    return {
      token: this.cachedAccessToken!.access_token,
      res: this.cachedAccessToken!.res,
    };
  }

  /**
   * The main authentication interface. It takes an optional url which when
   * present is the endpoint being accessed, and returns a Promise which
   * resolves with authorization header fields.
   *
   * The result has the form:
   * { authorization: 'Bearer <access_token_value>' }
   */
  async getRequestHeaders(): Promise<Headers> {
    const accessTokenResponse = await this.getAccessToken();
    const headers = new Headers({
      authorization: `Bearer ${accessTokenResponse.token}`,
    });
    return this.addSharedMetadataHeaders(headers);
  }

  /**
   * Provides a request implementation with OAuth 2.0 flow. In cases of
   * HTTP 401 and 403 responses, it automatically asks for a new access token
   * and replays the unsuccessful request.
   * @param opts Request options.
   * @param callback callback.
   * @return A promise that resolves with the HTTP response when no callback is
   *   provided.
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

  /**
   * @return A promise that resolves with the project ID corresponding to the
   *   current workload identity pool or current workforce pool if
   *   determinable. For workforce pool credential, it returns the project ID
   *   corresponding to the workforcePoolUserProject.
   *   This is introduced to match the current pattern of using the Auth
   *   library:
   *   const projectId = await auth.getProjectId();
   *   const url = `https://dns.googleapis.com/dns/v1/projects/${projectId}`;
   *   const res = await client.request({ url });
   *   The resource may not have permission
   *   (resourcemanager.projects.get) to call this API or the required
   *   scopes may not be selected:
   *   https://cloud.google.com/resource-manager/reference/rest/v1/projects/get#authorization-scopes
   */
  async getProjectId(): Promise<string | null> {
    const projectNumber = this.projectNumber || this.workforcePoolUserProject;
    if (this.projectId) {
      // Return previously determined project ID.
      return this.projectId;
    } else if (projectNumber) {
      // Preferable not to use request() to avoid retrial policies.
      const headers = await this.getRequestHeaders();
      const opts: GaxiosOptions = {
        ...BaseExternalAccountClient.RETRY_CONFIG,
        headers,
        url: `${this.cloudResourceManagerURL.toString()}${projectNumber}`,
      };
      AuthClient.setMethodName(opts, 'getProjectId');
      const response = await this.transporter.request<ProjectInfo>(opts);
      this.projectId = response.data.projectId;
      return this.projectId;
    }
    return null;
  }

  /**
   * Authenticates the provided HTTP request, processes it and resolves with the
   * returned response.
   * @param opts The HTTP request options.
   * @param reAuthRetried Whether the current attempt is a retry after a failed attempt due to an auth failure.
   * @return A promise that resolves with the successful response.
   */
  protected async requestAsync<T>(
    opts: GaxiosOptions,
    reAuthRetried = false,
  ): Promise<GaxiosResponse<T>> {
    let response: GaxiosResponse;
    try {
      const requestHeaders = await this.getRequestHeaders();
      opts.headers = Gaxios.mergeHeaders(opts.headers);

      this.addUserProjectAndAuthHeaders(opts.headers, requestHeaders);

      response = await this.transporter.request<T>(opts);
    } catch (e) {
      const res = (e as GaxiosError).response;
      if (res) {
        const statusCode = res.status;
        // Retry the request for metadata if the following criteria are true:
        // - We haven't already retried.  It only makes sense to retry once.
        // - The response was a 401 or a 403
        // - The request didn't send a readableStream
        // - forceRefreshOnFailure is true
        const isReadableStream = res.config.data instanceof stream.Readable;
        const isAuthErr = statusCode === 401 || statusCode === 403;
        if (
          !reAuthRetried &&
          isAuthErr &&
          !isReadableStream &&
          this.forceRefreshOnFailure
        ) {
          await this.refreshAccessTokenAsync();
          return await this.requestAsync<T>(opts, true);
        }
      }
      throw e;
    }
    return response;
  }

  /**
   * Forces token refresh, even if unexpired tokens are currently cached.
   * External credentials are exchanged for GCP access tokens via the token
   * exchange endpoint and other settings provided in the client options
   * object.
   * If the service_account_impersonation_url is provided, an additional
   * step to exchange the external account GCP access token for a service
   * account impersonated token is performed.
   * @return A promise that resolves with the fresh GCP access tokens.
   */
  protected async refreshAccessTokenAsync(): Promise<CredentialsWithResponse> {
    // Use an existing access token request, or cache a new one
    this.#pendingAccessToken =
      this.#pendingAccessToken || this.#internalRefreshAccessTokenAsync();

    try {
      return await this.#pendingAccessToken;
    } finally {
      // clear pending access token for future requests
      this.#pendingAccessToken = null;
    }
  }

  async #internalRefreshAccessTokenAsync(): Promise<CredentialsWithResponse> {
    // Retrieve the external credential.
    const subjectToken = await this.retrieveSubjectToken();
    // Construct the STS credentials options.
    const stsCredentialsOptions: sts.StsCredentialsOptions = {
      grantType: STS_GRANT_TYPE,
      audience: this.audience,
      requestedTokenType: STS_REQUEST_TOKEN_TYPE,
      subjectToken,
      subjectTokenType: this.subjectTokenType,
      // generateAccessToken requires the provided access token to have
      // scopes:
      // https://www.googleapis.com/auth/iam or
      // https://www.googleapis.com/auth/cloud-platform
      // The new service account access token scopes will match the user
      // provided ones.
      scope: this.serviceAccountImpersonationUrl
        ? [DEFAULT_OAUTH_SCOPE]
        : this.getScopesArray(),
    };

    // Exchange the external credentials for a GCP access token.
    // Client auth is prioritized over passing the workforcePoolUserProject
    // parameter for STS token exchange.
    const additionalOptions =
      !this.clientAuth && this.workforcePoolUserProject
        ? {userProject: this.workforcePoolUserProject}
        : undefined;
    const additionalHeaders = new Headers({
      'x-goog-api-client': this.getMetricsHeaderValue(),
    });
    const stsResponse = await this.stsCredential.exchangeToken(
      stsCredentialsOptions,
      additionalHeaders,
      additionalOptions,
    );

    if (this.serviceAccountImpersonationUrl) {
      this.cachedAccessToken = await this.getImpersonatedAccessToken(
        stsResponse.access_token,
      );
    } else if (stsResponse.expires_in) {
      // Save response in cached access token.
      this.cachedAccessToken = {
        access_token: stsResponse.access_token,
        expiry_date: new Date().getTime() + stsResponse.expires_in * 1000,
        res: stsResponse.res,
      };
    } else {
      // Save response in cached access token.
      this.cachedAccessToken = {
        access_token: stsResponse.access_token,
        res: stsResponse.res,
      };
    }

    // Save credentials.
    this.credentials = {};
    Object.assign(this.credentials, this.cachedAccessToken);
    delete (this.credentials as CredentialsWithResponse).res;

    // Trigger tokens event to notify external listeners.
    this.emit('tokens', {
      refresh_token: null,
      expiry_date: this.cachedAccessToken!.expiry_date,
      access_token: this.cachedAccessToken!.access_token,
      token_type: 'Bearer',
      id_token: null,
    });
    // Return the cached access token.
    return this.cachedAccessToken;
  }

  /**
   * Returns the workload identity pool project number if it is determinable
   * from the audience resource name.
   * @param audience The STS audience used to determine the project number.
   * @return The project number associated with the workload identity pool, if
   *   this can be determined from the STS audience field. Otherwise, null is
   *   returned.
   */
  private getProjectNumber(audience: string): string | null {
    // STS audience pattern:
    // //iam.googleapis.com/projects/$PROJECT_NUMBER/locations/...
    const match = audience.match(/\/projects\/([^/]+)/);
    if (!match) {
      return null;
    }
    return match[1];
  }

  /**
   * Exchanges an external account GCP access token for a service
   * account impersonated access token using iamcredentials
   * GenerateAccessToken API.
   * @param token The access token to exchange for a service account access
   *   token.
   * @return A promise that resolves with the service account impersonated
   *   credentials response.
   */
  private async getImpersonatedAccessToken(
    token: string,
  ): Promise<CredentialsWithResponse> {
    const opts: GaxiosOptions = {
      ...BaseExternalAccountClient.RETRY_CONFIG,
      url: this.serviceAccountImpersonationUrl!,
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      data: {
        scope: this.getScopesArray(),
        lifetime: this.serviceAccountImpersonationLifetime + 's',
      },
    };
    AuthClient.setMethodName(opts, 'getImpersonatedAccessToken');
    const response =
      await this.transporter.request<IamGenerateAccessTokenResponse>(opts);
    const successResponse = response.data;
    return {
      access_token: successResponse.accessToken,
      // Convert from ISO format to timestamp.
      expiry_date: new Date(successResponse.expireTime).getTime(),
      res: response,
    };
  }

  /**
   * Returns whether the provided credentials are expired or not.
   * If there is no expiry time, assumes the token is not expired or expiring.
   * @param accessToken The credentials to check for expiration.
   * @return Whether the credentials are expired or not.
   */
  private isExpired(accessToken: Credentials): boolean {
    const now = new Date().getTime();
    return accessToken.expiry_date
      ? now >= accessToken.expiry_date - this.eagerRefreshThresholdMillis
      : false;
  }

  /**
   * @return The list of scopes for the requested GCP access token.
   */
  private getScopesArray(): string[] {
    // Since scopes can be provided as string or array, the type should
    // be normalized.
    if (typeof this.scopes === 'string') {
      return [this.scopes];
    }

    return this.scopes || [DEFAULT_OAUTH_SCOPE];
  }

  private getMetricsHeaderValue(): string {
    const nodeVersion = process.version.replace(/^v/, '');
    const saImpersonation = this.serviceAccountImpersonationUrl !== undefined;
    const credentialSourceType = this.credentialSourceType
      ? this.credentialSourceType
      : 'unknown';
    return `gl-node/${nodeVersion} auth/${pkg.version} google-byoid-sdk source/${credentialSourceType} sa-impersonation/${saImpersonation} config-lifetime/${this.configLifetimeRequested}`;
  }

  protected getTokenUrl(): string {
    return this.tokenUrl;
  }
}
