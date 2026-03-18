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

import {exec} from 'child_process';
import * as fs from 'fs';
import {Gaxios, GaxiosError, GaxiosOptions, GaxiosResponse} from 'gaxios';
import * as gcpMetadata from 'gcp-metadata';
import * as os from 'os';
import * as path from 'path';
import * as stream from 'stream';

import {Crypto, createCrypto} from '../crypto/crypto';
import {Compute, ComputeOptions} from './computeclient';
import {CredentialBody, ImpersonatedJWTInput, JWTInput} from './credentials';
import {IdTokenClient} from './idtokenclient';
import {GCPEnv, getEnv} from './envDetect';
import {JWT, JWTOptions} from './jwtclient';
import {UserRefreshClient, USER_REFRESH_ACCOUNT_TYPE} from './refreshclient';
import {Impersonated, IMPERSONATED_ACCOUNT_TYPE} from './impersonated';
import {
  ExternalAccountClient,
  ExternalAccountClientOptions,
} from './externalclient';
import {
  EXTERNAL_ACCOUNT_TYPE,
  BaseExternalAccountClient,
} from './baseexternalclient';
import {AuthClient, AuthClientOptions, DEFAULT_UNIVERSE} from './authclient';
import {
  EXTERNAL_ACCOUNT_AUTHORIZED_USER_TYPE,
  ExternalAccountAuthorizedUserClient,
  ExternalAccountAuthorizedUserClientOptions,
} from './externalAccountAuthorizedUserClient';
import {originalOrCamelOptions} from '../util';
import {AnyAuthClient, AnyAuthClientConstructor} from '..';

/**
 * Defines all types of explicit clients that are determined via ADC JSON
 * config file.
 */
export type JSONClient =
  | JWT
  | UserRefreshClient
  | BaseExternalAccountClient
  | ExternalAccountAuthorizedUserClient
  | Impersonated;

export interface ProjectIdCallback {
  (err?: Error | null, projectId?: string | null): void;
}

export interface CredentialCallback {
  (err: Error | null, result?: JSONClient): void;
}

export interface ADCCallback {
  (err: Error | null, credential?: AuthClient, projectId?: string | null): void;
}

export interface ADCResponse {
  credential: AuthClient;
  projectId: string | null;
}

export interface GoogleAuthOptions<T extends AuthClient = AnyAuthClient> {
  /**
   * An API key to use, optional. Cannot be used with {@link GoogleAuthOptions.credentials `credentials`}.
   */
  apiKey?: string;

  /**
   * An `AuthClient` to use
   */
  authClient?: T;
  /**
   * @deprecated This option is being deprecated because of a potential security risk.
   *
   * This option does not validate the credential configuration. The security
   * risk occurs when a credential configuration is accepted from a source that
   * is not under your control and used without validation on your side.
   *
   * The recommended way to provide credentials is to create an `auth` object
   * using `google-auth-library` and pass it to the client constructor.
   * This will ensure that unexpected credential types with potential for
   * malicious intent are not loaded unintentionally. For example:
   * ```
   * const {GoogleAuth} = require('google-auth-library');
   * const auth = new GoogleAuth({
   *   // Scopes can be specified either as an array or as a single, space-delimited string.
   *   scopes: 'https://www.googleapis.com/auth/cloud-platform'
   * });
   * const client = new MyClient({ auth: auth });
   * ```
   *
   * If you are loading your credential configuration from an untrusted source and have
   * not mitigated the risks (e.g. by validating the configuration yourself), make
   * these changes as soon as possible to prevent security risks to your environment.
   *
   * Regardless of the method used, it is always your responsibility to validate
   * configurations received from external sources.
   *
   * For more details, see https://cloud.google.com/docs/authentication/external/externally-sourced-credentials.
   */
  keyFilename?: string;

  /**
   * @deprecated This option is being deprecated because of a potential security risk.
   *
   * This option does not validate the credential configuration. The security
   * risk occurs when a credential configuration is accepted from a source that
   * is not under your control and used without validation on your side.
   *
   * The recommended way to provide credentials is to create an `auth` object
   * using `google-auth-library` and pass it to the client constructor.
   * This will ensure that unexpected credential types with potential for
   * malicious intent are not loaded unintentionally. For example:
   * ```
   * const {GoogleAuth} = require('google-auth-library');
   * const auth = new GoogleAuth({
   *   // Scopes can be specified either as an array or as a single, space-delimited string.
   *   scopes: 'https://www.googleapis.com/auth/cloud-platform'
   * });
   * const client = new MyClient({ auth: auth });
   * ```
   *
   * If you are loading your credential configuration from an untrusted source and have
   * not mitigated the risks (e.g. by validating the configuration yourself), make
   * these changes as soon as possible to prevent security risks to your environment.
   *
   * Regardless of the method used, it is always your responsibility to validate
   * configurations received from external sources.
   *
   * For more details, see https://cloud.google.com/docs/authentication/external/externally-sourced-credentials.
   */
  keyFile?: string;

  /**
   * @deprecated This option is being deprecated because of a potential security risk.
   *
   * This option does not validate the credential configuration. The security
   * risk occurs when a credential configuration is accepted from a source that
   * is not under your control and used without validation on your side.
   *
   * The recommended way to provide credentials is to create an `auth` object
   * using `google-auth-library` and pass it to the client constructor.
   * This will ensure that unexpected credential types with potential for
   * malicious intent are not loaded unintentionally. For example:
   * ```
   * const {GoogleAuth} = require('google-auth-library');
   * const auth = new GoogleAuth({
   *   // Scopes can be specified either as an array or as a single, space-delimited string.
   *   scopes: 'https://www.googleapis.com/auth/cloud-platform'
   * });
   * const client = new MyClient({ auth: auth });
   * ```
   *
   * If you are loading your credential configuration from an untrusted source and have
   * not mitigated the risks (e.g. by validating the configuration yourself), make
   * these changes as soon as possible to prevent security risks to your environment.
   *
   * Regardless of the method used, it is always your responsibility to validate
   * configurations received from external sources.
   *
   * For more details, see https://cloud.google.com/docs/authentication/external/externally-sourced-credentials.
   */
  credentials?: JWTInput | ExternalAccountClientOptions;

  /**
   * `AuthClientOptions` object passed to the constructor of the client
   */
  clientOptions?: Extract<
    ConstructorParameters<AnyAuthClientConstructor>[0],
    AuthClientOptions
  >;

  /**
   * Required scopes for the desired API request
   */
  scopes?: string | string[];

  /**
   * Your project ID.
   */
  projectId?: string;

  /**
   * The default service domain for a given Cloud universe.
   *
   * This is an ergonomic equivalent to {@link clientOptions}'s `universeDomain`
   * property and will be set for all generated {@link AuthClient}s.
   */
  universeDomain?: string;
}

export const GoogleAuthExceptionMessages = {
  API_KEY_WITH_CREDENTIALS:
    'API Keys and Credentials are mutually exclusive authentication methods and cannot be used together.',
  NO_PROJECT_ID_FOUND:
    'Unable to detect a Project Id in the current environment. \n' +
    'To learn more about authentication and Google APIs, visit: \n' +
    'https://cloud.google.com/docs/authentication/getting-started',
  NO_CREDENTIALS_FOUND:
    'Unable to find credentials in current environment. \n' +
    'To learn more about authentication and Google APIs, visit: \n' +
    'https://cloud.google.com/docs/authentication/getting-started',
  NO_ADC_FOUND:
    'Could not load the default credentials. Browse to https://cloud.google.com/docs/authentication/getting-started for more information.',
  NO_UNIVERSE_DOMAIN_FOUND:
    'Unable to detect a Universe Domain in the current environment.\n' +
    'To learn more about Universe Domain retrieval, visit: \n' +
    'https://cloud.google.com/compute/docs/metadata/predefined-metadata-keys',
} as const;

export class GoogleAuth<T extends AuthClient = AuthClient> {
  /**
   * Caches a value indicating whether the auth layer is running on Google
   * Compute Engine.
   * @private
   */
  private checkIsGCE?: boolean = undefined;
  useJWTAccessWithScope?: boolean;
  defaultServicePath?: string;

  // Note:  this properly is only public to satisfy unit tests.
  // https://github.com/Microsoft/TypeScript/issues/5228
  get isGCE() {
    return this.checkIsGCE;
  }

  private _findProjectIdPromise?: Promise<string | null>;
  private _cachedProjectId?: string | null;

  // To save the contents of the JSON credential file
  jsonContent: JWTInput | ExternalAccountClientOptions | null = null;
  apiKey: string | null;

  cachedCredential: AnyAuthClient | T | null = null;
  /**
   * A pending {@link AuthClient}. Used for concurrent {@link GoogleAuth.getClient} calls.
   */
  #pendingAuthClient: Promise<AnyAuthClient | T> | null = null;

  /**
   * Scopes populated by the client library by default. We differentiate between
   * these and user defined scopes when deciding whether to use a self-signed JWT.
   */
  defaultScopes?: string | string[];
  private keyFilename?: string;
  private scopes?: string | string[];
  private clientOptions: AuthClientOptions = {};

  /**
   * Configuration is resolved in the following order of precedence:
   * - {@link GoogleAuthOptions.credentials `credentials`}
   * - {@link GoogleAuthOptions.keyFilename `keyFilename`}
   * - {@link GoogleAuthOptions.keyFile `keyFile`}
   *
   * {@link GoogleAuthOptions.clientOptions `clientOptions`} are passed to the
   * {@link AuthClient `AuthClient`s}.
   *
   * @param opts
   */
  constructor(opts: GoogleAuthOptions<T> = {}) {
    this._cachedProjectId = opts.projectId || null;
    this.cachedCredential = opts.authClient || null;
    this.keyFilename = opts.keyFilename || opts.keyFile;
    this.scopes = opts.scopes;
    this.clientOptions = opts.clientOptions || {};
    this.jsonContent = opts.credentials || null;
    this.apiKey = opts.apiKey || this.clientOptions.apiKey || null;

    // Cannot use both API Key + Credentials
    if (this.apiKey && (this.jsonContent || this.clientOptions.credentials)) {
      throw new RangeError(
        GoogleAuthExceptionMessages.API_KEY_WITH_CREDENTIALS,
      );
    }

    if (opts.universeDomain) {
      this.clientOptions.universeDomain = opts.universeDomain;
    }
  }

  // GAPIC client libraries should always use self-signed JWTs. The following
  // variables are set on the JWT client in order to indicate the type of library,
  // and sign the JWT with the correct audience and scopes (if not supplied).
  setGapicJWTValues(client: JWT) {
    client.defaultServicePath = this.defaultServicePath;
    client.useJWTAccessWithScope = this.useJWTAccessWithScope;
    client.defaultScopes = this.defaultScopes;
  }

  /**
   * Obtains the default project ID for the application.
   *
   * Retrieves in the following order of precedence:
   * - The `projectId` provided in this object's construction
   * - GCLOUD_PROJECT or GOOGLE_CLOUD_PROJECT environment variable
   * - GOOGLE_APPLICATION_CREDENTIALS JSON file
   * - Cloud SDK: `gcloud config config-helper --format json`
   * - GCE project ID from metadata server
   */
  getProjectId(): Promise<string>;
  getProjectId(callback: ProjectIdCallback): void;
  getProjectId(callback?: ProjectIdCallback): Promise<string | null> | void {
    if (callback) {
      this.getProjectIdAsync().then(r => callback(null, r), callback);
    } else {
      return this.getProjectIdAsync();
    }
  }

  /**
   * A temporary method for internal `getProjectId` usages where `null` is
   * acceptable. In a future major release, `getProjectId` should return `null`
   * (as the `Promise<string | null>` base signature describes) and this private
   * method should be removed.
   *
   * @returns Promise that resolves with project id (or `null`)
   */
  private async getProjectIdOptional(): Promise<string | null> {
    try {
      return await this.getProjectId();
    } catch (e) {
      if (
        e instanceof Error &&
        e.message === GoogleAuthExceptionMessages.NO_PROJECT_ID_FOUND
      ) {
        return null;
      } else {
        throw e;
      }
    }
  }

  /**
   * A private method for finding and caching a projectId.
   *
   * Supports environments in order of precedence:
   * - GCLOUD_PROJECT or GOOGLE_CLOUD_PROJECT environment variable
   * - GOOGLE_APPLICATION_CREDENTIALS JSON file
   * - Cloud SDK: `gcloud config config-helper --format json`
   * - GCE project ID from metadata server
   *
   * @returns projectId
   */
  private async findAndCacheProjectId(): Promise<string> {
    let projectId: string | null | undefined = null;

    projectId ||= await this.getProductionProjectId();
    projectId ||= await this.getFileProjectId();
    projectId ||= await this.getDefaultServiceProjectId();
    projectId ||= await this.getGCEProjectId();
    projectId ||= await this.getExternalAccountClientProjectId();

    if (projectId) {
      this._cachedProjectId = projectId;
      return projectId;
    } else {
      throw new Error(GoogleAuthExceptionMessages.NO_PROJECT_ID_FOUND);
    }
  }

  private async getProjectIdAsync(): Promise<string | null> {
    if (this._cachedProjectId) {
      return this._cachedProjectId;
    }

    if (!this._findProjectIdPromise) {
      this._findProjectIdPromise = this.findAndCacheProjectId();
    }
    return this._findProjectIdPromise;
  }

  /**
   * Retrieves a universe domain from the metadata server via
   * {@link gcpMetadata.universe}.
   *
   * @returns a universe domain
   */
  async getUniverseDomainFromMetadataServer(): Promise<string> {
    let universeDomain: string;

    try {
      universeDomain = await gcpMetadata.universe('universe-domain');
      universeDomain ||= DEFAULT_UNIVERSE;
    } catch (e) {
      if (e && (e as GaxiosError)?.response?.status === 404) {
        universeDomain = DEFAULT_UNIVERSE;
      } else {
        throw e;
      }
    }

    return universeDomain;
  }

  /**
   * Retrieves, caches, and returns the universe domain in the following order
   * of precedence:
   * - The universe domain in {@link GoogleAuth.clientOptions}
   * - An existing or ADC {@link AuthClient}'s universe domain
   * - {@link gcpMetadata.universe}, if {@link Compute} client
   *
   * @returns The universe domain
   */
  async getUniverseDomain(): Promise<string> {
    let universeDomain = originalOrCamelOptions(this.clientOptions).get(
      'universe_domain',
    );
    try {
      universeDomain ??= (await this.getClient()).universeDomain;
    } catch {
      // client or ADC is not available
      universeDomain ??= DEFAULT_UNIVERSE;
    }

    return universeDomain;
  }

  /**
   * @returns Any scopes (user-specified or default scopes specified by the
   *   client library) that need to be set on the current Auth client.
   */
  private getAnyScopes(): string | string[] | undefined {
    return this.scopes || this.defaultScopes;
  }

  /**
   * Obtains the default service-level credentials for the application.
   * @param callback Optional callback.
   * @returns Promise that resolves with the ADCResponse (if no callback was
   * passed).
   */
  getApplicationDefault(): Promise<ADCResponse>;
  getApplicationDefault(callback: ADCCallback): void;
  getApplicationDefault(options: AuthClientOptions): Promise<ADCResponse>;
  getApplicationDefault(
    options: AuthClientOptions,
    callback: ADCCallback,
  ): void;
  getApplicationDefault(
    optionsOrCallback: ADCCallback | AuthClientOptions = {},
    callback?: ADCCallback,
  ): void | Promise<ADCResponse> {
    let options: AuthClientOptions | undefined;
    if (typeof optionsOrCallback === 'function') {
      callback = optionsOrCallback;
    } else {
      options = optionsOrCallback;
    }
    if (callback) {
      this.getApplicationDefaultAsync(options).then(
        r => callback!(null, r.credential, r.projectId),
        callback,
      );
    } else {
      return this.getApplicationDefaultAsync(options);
    }
  }

  private async getApplicationDefaultAsync(
    options: AuthClientOptions = {},
  ): Promise<ADCResponse> {
    // If we've already got a cached credential, return it.
    // This will also preserve one's configured quota project, in case they
    // set one directly on the credential previously.
    if (this.cachedCredential) {
      // cache, while preserving existing quota project preferences
      return await this.#prepareAndCacheClient(this.cachedCredential, null);
    }

    let credential: JSONClient | null;
    // Check for the existence of a local environment variable pointing to the
    // location of the credential file. This is typically used in local
    // developer scenarios.
    credential =
      await this._tryGetApplicationCredentialsFromEnvironmentVariable(options);
    if (credential) {
      if (credential instanceof JWT) {
        credential.scopes = this.scopes;
      } else if (credential instanceof BaseExternalAccountClient) {
        credential.scopes = this.getAnyScopes();
      }

      return await this.#prepareAndCacheClient(credential);
    }

    // Look in the well-known credential file location.
    credential =
      await this._tryGetApplicationCredentialsFromWellKnownFile(options);
    if (credential) {
      if (credential instanceof JWT) {
        credential.scopes = this.scopes;
      } else if (credential instanceof BaseExternalAccountClient) {
        credential.scopes = this.getAnyScopes();
      }
      return await this.#prepareAndCacheClient(credential);
    }

    // Determine if we're running on GCE.
    if (await this._checkIsGCE()) {
      (options as ComputeOptions).scopes = this.getAnyScopes();
      return await this.#prepareAndCacheClient(new Compute(options));
    }

    throw new Error(GoogleAuthExceptionMessages.NO_ADC_FOUND);
  }

  async #prepareAndCacheClient(
    credential: AnyAuthClient | T,
    quotaProjectIdOverride = process.env['GOOGLE_CLOUD_QUOTA_PROJECT'] || null,
  ): Promise<ADCResponse> {
    const projectId = await this.getProjectIdOptional();

    if (quotaProjectIdOverride) {
      credential.quotaProjectId = quotaProjectIdOverride;
    }

    this.cachedCredential = credential;

    return {credential, projectId};
  }

  /**
   * Determines whether the auth layer is running on Google Compute Engine.
   * Checks for GCP Residency, then fallback to checking if metadata server
   * is available.
   *
   * @returns A promise that resolves with the boolean.
   * @api private
   */
  async _checkIsGCE() {
    if (this.checkIsGCE === undefined) {
      this.checkIsGCE =
        gcpMetadata.getGCPResidency() || (await gcpMetadata.isAvailable());
    }

    return this.checkIsGCE;
  }

  /**
   * Attempts to load default credentials from the environment variable path..
   * @returns Promise that resolves with the OAuth2Client or null.
   * @api private
   */
  async _tryGetApplicationCredentialsFromEnvironmentVariable(
    options?: AuthClientOptions,
  ): Promise<JSONClient | null> {
    const credentialsPath =
      process.env['GOOGLE_APPLICATION_CREDENTIALS'] ||
      process.env['google_application_credentials'];
    if (!credentialsPath || credentialsPath.length === 0) {
      return null;
    }
    try {
      return this._getApplicationCredentialsFromFilePath(
        credentialsPath,
        options,
      );
    } catch (e) {
      if (e instanceof Error) {
        e.message = `Unable to read the credential file specified by the GOOGLE_APPLICATION_CREDENTIALS environment variable: ${e.message}`;
      }

      throw e;
    }
  }

  /**
   * Attempts to load default credentials from a well-known file location
   * @return Promise that resolves with the OAuth2Client or null.
   * @api private
   */
  async _tryGetApplicationCredentialsFromWellKnownFile(
    options?: AuthClientOptions,
  ): Promise<JSONClient | null> {
    // First, figure out the location of the file, depending upon the OS type.
    let location = null;
    if (this._isWindows()) {
      // Windows
      location = process.env['APPDATA'];
    } else {
      // Linux or Mac
      const home = process.env['HOME'];
      if (home) {
        location = path.join(home, '.config');
      }
    }
    // If we found the root path, expand it.
    if (location) {
      location = path.join(
        location,
        'gcloud',
        'application_default_credentials.json',
      );
      if (!fs.existsSync(location)) {
        location = null;
      }
    }
    // The file does not exist.
    if (!location) {
      return null;
    }
    // The file seems to exist. Try to use it.
    const client = await this._getApplicationCredentialsFromFilePath(
      location,
      options,
    );
    return client;
  }

  /**
   * Attempts to load default credentials from a file at the given path..
   * @param filePath The path to the file to read.
   * @returns Promise that resolves with the OAuth2Client
   * @api private
   */
  async _getApplicationCredentialsFromFilePath(
    filePath: string,
    options: AuthClientOptions = {},
  ): Promise<JSONClient> {
    // Make sure the path looks like a string.
    if (!filePath || filePath.length === 0) {
      throw new Error('The file path is invalid.');
    }

    // Make sure there is a file at the path. lstatSync will throw if there is
    // nothing there.
    try {
      // Resolve path to actual file in case of symlink. Expect a thrown error
      // if not resolvable.
      filePath = fs.realpathSync(filePath);

      if (!fs.lstatSync(filePath).isFile()) {
        throw new Error();
      }
    } catch (err) {
      if (err instanceof Error) {
        err.message = `The file at ${filePath} does not exist, or it is not a file. ${err.message}`;
      }

      throw err;
    }

    // Now open a read stream on the file, and parse it.
    const readStream = fs.createReadStream(filePath);
    return this.fromStream(readStream, options);
  }

  /**
   * Create a credentials instance using a given impersonated input options.
   * @param json The impersonated input object.
   * @returns JWT or UserRefresh Client with data
   */
  fromImpersonatedJSON(json: ImpersonatedJWTInput): Impersonated {
    if (!json) {
      throw new Error(
        'Must pass in a JSON object containing an  impersonated refresh token',
      );
    }
    if (json.type !== IMPERSONATED_ACCOUNT_TYPE) {
      throw new Error(
        `The incoming JSON object does not have the "${IMPERSONATED_ACCOUNT_TYPE}" type`,
      );
    }
    if (!json.source_credentials) {
      throw new Error(
        'The incoming JSON object does not contain a source_credentials field',
      );
    }
    if (!json.service_account_impersonation_url) {
      throw new Error(
        'The incoming JSON object does not contain a service_account_impersonation_url field',
      );
    }

    const sourceClient = this.fromJSON(json.source_credentials);

    if (json.service_account_impersonation_url?.length > 256) {
      /**
       * Prevents DOS attacks.
       * @see {@link https://github.com/googleapis/google-auth-library-nodejs/security/code-scanning/85}
       **/
      throw new RangeError(
        `Target principal is too long: ${json.service_account_impersonation_url}`,
      );
    }

    // Extract service account from service_account_impersonation_url
    const targetPrincipal =
      /(?<target>[^/]+):(generateAccessToken|generateIdToken)$/.exec(
        json.service_account_impersonation_url,
      )?.groups?.target;

    if (!targetPrincipal) {
      throw new RangeError(
        `Cannot extract target principal from ${json.service_account_impersonation_url}`,
      );
    }

    const targetScopes =
      (this.scopes || json.scopes || this.defaultScopes) ?? [];

    return new Impersonated({
      ...json,
      sourceClient,
      targetPrincipal,
      targetScopes: Array.isArray(targetScopes) ? targetScopes : [targetScopes],
    });
  }

  /**
   * Create a credentials instance using the given input options.
   * This client is not cached.
   *
   * **Important**: If you accept a credential configuration (credential JSON/File/Stream) from an external source for authentication to Google Cloud, you must validate it before providing it to any Google API or library. Providing an unvalidated credential configuration to Google APIs can compromise the security of your systems and data. For more information, refer to {@link https://cloud.google.com/docs/authentication/external/externally-sourced-credentials Validate credential configurations from external sources}.
   *
   * @deprecated This method is being deprecated because of a potential security risk.
   *
   * This method does not validate the credential configuration. The security
   * risk occurs when a credential configuration is accepted from a source that
   * is not under your control and used without validation on your side.
   *
   * If you know that you will be loading credential configurations of a
   * specific type, it is recommended to use a credential-type-specific
   * constructor. This will ensure that an unexpected credential type with
   * potential for malicious intent is not loaded unintentionally. You might
   * still have to do validation for certain credential types. Please follow
   * the recommendation for that method. For example, if you want to load only
   * service accounts, you can use the `JWT` constructor:
   * ```
   * const {JWT} = require('google-auth-library');
   * const keys = require('/path/to/key.json');
   * const client = new JWT({
   *   email: keys.client_email,
   *   key: keys.private_key,
   *   scopes: ['https://www.googleapis.com/auth/cloud-platform'],
   * });
   * ```
   *
   * If you are loading your credential configuration from an untrusted source and have
   * not mitigated the risks (e.g. by validating the configuration yourself), make
   * these changes as soon as possible to prevent security risks to your environment.
   *
   * Regardless of the method used, it is always your responsibility to validate
   * configurations received from external sources.
   *
   * For more details, see https://cloud.google.com/docs/authentication/external/externally-sourced-credentials.
   *
   * @param json The input object.
   * @param options The JWT or UserRefresh options for the client
   * @returns JWT or UserRefresh Client with data
   */
  fromJSON(
    json: JWTInput | ImpersonatedJWTInput,
    options: AuthClientOptions = {},
  ): JSONClient {
    let client: JSONClient;

    // user's preferred universe domain
    const preferredUniverseDomain =
      originalOrCamelOptions(options).get('universe_domain');

    if (json.type === USER_REFRESH_ACCOUNT_TYPE) {
      client = new UserRefreshClient(options);
      client.fromJSON(json);
    } else if (json.type === IMPERSONATED_ACCOUNT_TYPE) {
      client = this.fromImpersonatedJSON(json as ImpersonatedJWTInput);
    } else if (json.type === EXTERNAL_ACCOUNT_TYPE) {
      client = ExternalAccountClient.fromJSON({
        ...json,
        ...options,
      } as ExternalAccountClientOptions)!;
      client.scopes = this.getAnyScopes();
    } else if (json.type === EXTERNAL_ACCOUNT_AUTHORIZED_USER_TYPE) {
      client = new ExternalAccountAuthorizedUserClient({
        ...json,
        ...options,
      } as ExternalAccountAuthorizedUserClientOptions);
    } else {
      (options as JWTOptions).scopes = this.scopes;
      client = new JWT(options);
      this.setGapicJWTValues(client);
      client.fromJSON(json);
    }

    if (preferredUniverseDomain) {
      client.universeDomain = preferredUniverseDomain;
    }

    return client;
  }

  /**
   * Return a JWT or UserRefreshClient from JavaScript object, caching both the
   * object used to instantiate and the client.
   * @param json The input object.
   * @param options The JWT or UserRefresh options for the client
   * @returns JWT or UserRefresh Client with data
   */
  private _cacheClientFromJSON(
    json: JWTInput | ImpersonatedJWTInput,
    options?: AuthClientOptions,
  ): JSONClient {
    const client = this.fromJSON(json, options);

    // cache both raw data used to instantiate client and client itself.
    this.jsonContent = json;
    this.cachedCredential = client;
    return client;
  }

  /**
   * Create a credentials instance using the given input stream.
   *
   * @deprecated This method is being deprecated because of a potential security risk.
   *
   * This method does not validate the credential configuration. The security
   * risk occurs when a credential configuration is accepted from a source that
   * is not under your control and used without validation on your side.
   *
   * If you know that you will be loading credential configurations of a
   * specific type, it is recommended to read and parse the stream, and then
   * use a credential-type-specific constructor. This will ensure that an
   * unexpected credential type with potential for malicious intent is not
   * loaded unintentionally. You might still have to do validation for certain
   * credential types. Please follow the recommendation for that method. For
   * example, if you want to load only service accounts, you can do:
   * ```
   * const {JWT} = require('google-auth-library');
   * const fs = require('fs');
   *
   * const stream = fs.createReadStream('path/to/key.json');
   * const chunks = [];
   * stream.on('data', (chunk) => chunks.push(chunk));
   * stream.on('end', () => {
   *   const keys = JSON.parse(Buffer.concat(chunks).toString());
   *   const client = new JWT({
   *     email: keys.client_email,
   *     key: keys.private_key,
   *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
   *   });
   *   // use client
   * });
   * ```
   *
   * If you are loading your credential configuration from an untrusted source and have
   * not mitigated the risks (e.g. by validating the configuration yourself), make
   * these changes as soon as possible to prevent security risks to your environment.
   *
   * Regardless of the method used, it is always your responsibility to validate
   * configurations received from external sources.
   *
   * For more details, see https://cloud.google.com/docs/authentication/external/externally-sourced-credentials.
   * @param inputStream The input stream.
   * @param callback Optional callback.
   */
  fromStream(inputStream: stream.Readable): Promise<JSONClient>;
  fromStream(inputStream: stream.Readable, callback: CredentialCallback): void;
  fromStream(
    inputStream: stream.Readable,
    options: AuthClientOptions,
  ): Promise<JSONClient>;
  fromStream(
    inputStream: stream.Readable,
    options: AuthClientOptions,
    callback: CredentialCallback,
  ): void;
  fromStream(
    inputStream: stream.Readable,
    optionsOrCallback: AuthClientOptions | CredentialCallback = {},
    callback?: CredentialCallback,
  ): Promise<JSONClient> | void {
    let options: AuthClientOptions = {};
    if (typeof optionsOrCallback === 'function') {
      callback = optionsOrCallback;
    } else {
      options = optionsOrCallback;
    }
    if (callback) {
      this.fromStreamAsync(inputStream, options).then(
        r => callback!(null, r),
        callback,
      );
    } else {
      return this.fromStreamAsync(inputStream, options);
    }
  }

  private fromStreamAsync(
    inputStream: stream.Readable,
    options?: AuthClientOptions,
  ): Promise<JSONClient> {
    return new Promise((resolve, reject) => {
      if (!inputStream) {
        throw new Error(
          'Must pass in a stream containing the Google auth settings.',
        );
      }
      const chunks: string[] = [];
      inputStream
        .setEncoding('utf8')
        .on('error', reject)
        .on('data', chunk => chunks.push(chunk))
        .on('end', () => {
          try {
            try {
              const data = JSON.parse(chunks.join(''));
              const r = this._cacheClientFromJSON(data, options);
              return resolve(r);
            } catch (err) {
              // If we failed parsing this.keyFileName, assume that it
              // is a PEM or p12 certificate:
              if (!this.keyFilename) throw err;
              const client = new JWT({
                ...this.clientOptions,
                keyFile: this.keyFilename,
              });
              this.cachedCredential = client;
              this.setGapicJWTValues(client);
              return resolve(client);
            }
          } catch (err) {
            return reject(err);
          }
        });
    });
  }

  /**
   * Create a credentials instance using the given API key string.
   * The created client is not cached. In order to create and cache it use the {@link GoogleAuth.getClient `getClient`} method after first providing an {@link GoogleAuth.apiKey `apiKey`}.
   *
   * @param apiKey The API key string
   * @param options An optional options object.
   * @returns A JWT loaded from the key
   */
  fromAPIKey(apiKey: string, options: AuthClientOptions = {}): JWT {
    return new JWT({...options, apiKey});
  }

  /**
   * Determines whether the current operating system is Windows.
   * @api private
   */
  private _isWindows() {
    const sys = os.platform();
    if (sys && sys.length >= 3) {
      if (sys.substring(0, 3).toLowerCase() === 'win') {
        return true;
      }
    }
    return false;
  }

  /**
   * Run the Google Cloud SDK command that prints the default project ID
   */
  private async getDefaultServiceProjectId(): Promise<string | null> {
    return new Promise<string | null>(resolve => {
      exec('gcloud config config-helper --format json', (err, stdout) => {
        if (!err && stdout) {
          try {
            const projectId =
              JSON.parse(stdout).configuration.properties.core.project;
            resolve(projectId);
            return;
          } catch (e) {
            // ignore errors
          }
        }
        resolve(null);
      });
    });
  }

  /**
   * Loads the project id from environment variables.
   * @api private
   */
  private getProductionProjectId() {
    return (
      process.env['GCLOUD_PROJECT'] ||
      process.env['GOOGLE_CLOUD_PROJECT'] ||
      process.env['gcloud_project'] ||
      process.env['google_cloud_project']
    );
  }

  /**
   * Loads the project id from the GOOGLE_APPLICATION_CREDENTIALS json file.
   * @api private
   */
  private async getFileProjectId(): Promise<string | undefined | null> {
    if (this.cachedCredential) {
      // Try to read the project ID from the cached credentials file
      return this.cachedCredential.projectId;
    }

    // Ensure the projectId is loaded from the keyFile if available.
    if (this.keyFilename) {
      const creds = await this.getClient();

      if (creds && creds.projectId) {
        return creds.projectId;
      }
    }

    // Try to load a credentials file and read its project ID
    const r = await this._tryGetApplicationCredentialsFromEnvironmentVariable();
    if (r) {
      return r.projectId;
    } else {
      return null;
    }
  }

  /**
   * Gets the project ID from external account client if available.
   */
  private async getExternalAccountClientProjectId(): Promise<string | null> {
    if (!this.jsonContent || this.jsonContent.type !== EXTERNAL_ACCOUNT_TYPE) {
      return null;
    }
    const creds = await this.getClient();
    // Do not suppress the underlying error, as the error could contain helpful
    // information for debugging and fixing. This is especially true for
    // external account creds as in order to get the project ID, the following
    // operations have to succeed:
    // 1. Valid credentials file should be supplied.
    // 2. Ability to retrieve access tokens from STS token exchange API.
    // 3. Ability to exchange for service account impersonated credentials (if
    //    enabled).
    // 4. Ability to get project info using the access token from step 2 or 3.
    // Without surfacing the error, it is harder for developers to determine
    // which step went wrong.
    return await (creds as BaseExternalAccountClient).getProjectId();
  }

  /**
   * Gets the Compute Engine project ID if it can be inferred.
   */
  private async getGCEProjectId() {
    try {
      const r = await gcpMetadata.project('project-id');
      return r;
    } catch (e) {
      // Ignore any errors
      return null;
    }
  }

  /**
   * The callback function handles a credential object that contains the
   * client_email and private_key (if exists).
   * getCredentials first checks if the client is using an external account and
   * uses the service account email in place of client_email.
   * If that doesn't exist, it checks for these values from the user JSON.
   * If the user JSON doesn't exist, and the environment is on GCE, it gets the
   * client_email from the cloud metadata server.
   * @param callback Callback that handles the credential object that contains
   * a client_email and optional private key, or the error.
   * returned
   */
  getCredentials(): Promise<CredentialBody>;
  getCredentials(
    callback: (err: Error | null, credentials?: CredentialBody) => void,
  ): void;
  getCredentials(
    callback?: (err: Error | null, credentials?: CredentialBody) => void,
  ): void | Promise<CredentialBody> {
    if (callback) {
      this.getCredentialsAsync().then(r => callback(null, r), callback);
    } else {
      return this.getCredentialsAsync();
    }
  }

  private async getCredentialsAsync(): Promise<CredentialBody> {
    const client = await this.getClient();

    if (client instanceof Impersonated) {
      return {client_email: client.getTargetPrincipal()};
    }

    if (client instanceof BaseExternalAccountClient) {
      const serviceAccountEmail = client.getServiceAccountEmail();
      if (serviceAccountEmail) {
        return {
          client_email: serviceAccountEmail,
          universe_domain: client.universeDomain,
        };
      }
    }

    if (this.jsonContent) {
      return {
        client_email: (this.jsonContent as JWTInput).client_email,
        private_key: (this.jsonContent as JWTInput).private_key,
        universe_domain: this.jsonContent.universe_domain,
      };
    }

    if (await this._checkIsGCE()) {
      const [client_email, universe_domain] = await Promise.all([
        gcpMetadata.instance('service-accounts/default/email'),
        this.getUniverseDomain(),
      ]);

      return {client_email, universe_domain};
    }

    throw new Error(GoogleAuthExceptionMessages.NO_CREDENTIALS_FOUND);
  }

  /**
   * Automatically obtain an {@link AuthClient `AuthClient`} based on the
   * provided configuration. If no options were passed, use Application
   * Default Credentials.
   */
  async getClient(): Promise<AnyAuthClient | T> {
    if (this.cachedCredential) {
      return this.cachedCredential;
    }

    // Use an existing auth client request, or cache a new one
    this.#pendingAuthClient =
      this.#pendingAuthClient || this.#determineClient();

    try {
      return await this.#pendingAuthClient;
    } finally {
      // reset the pending auth client in case it is changed later
      this.#pendingAuthClient = null;
    }
  }

  async #determineClient() {
    if (this.jsonContent) {
      return this._cacheClientFromJSON(this.jsonContent, this.clientOptions);
    } else if (this.keyFilename) {
      const filePath = path.resolve(this.keyFilename);
      const stream = fs.createReadStream(filePath);
      return await this.fromStreamAsync(stream, this.clientOptions);
    } else if (this.apiKey) {
      const client = await this.fromAPIKey(this.apiKey, this.clientOptions);
      client.scopes = this.scopes;
      const {credential} = await this.#prepareAndCacheClient(client);
      return credential;
    } else {
      const {credential} = await this.getApplicationDefaultAsync(
        this.clientOptions,
      );
      return credential;
    }
  }

  /**
   * Creates a client which will fetch an ID token for authorization.
   * @param targetAudience the audience for the fetched ID token.
   * @returns IdTokenClient for making HTTP calls authenticated with ID tokens.
   */
  async getIdTokenClient(targetAudience: string): Promise<IdTokenClient> {
    const client = await this.getClient();
    if (!('fetchIdToken' in client)) {
      throw new Error(
        'Cannot fetch ID token in this environment, use GCE or set the GOOGLE_APPLICATION_CREDENTIALS environment variable to a service account credentials JSON file.',
      );
    }
    return new IdTokenClient({targetAudience, idTokenProvider: client});
  }

  /**
   * Automatically obtain application default credentials, and return
   * an access token for making requests.
   */
  async getAccessToken() {
    const client = await this.getClient();
    return (await client.getAccessToken()).token;
  }

  /**
   * Obtain the HTTP headers that will provide authorization for a given
   * request.
   */
  async getRequestHeaders(url?: string | URL) {
    const client = await this.getClient();
    return client.getRequestHeaders(url);
  }

  /**
   * Obtain credentials for a request, then attach the appropriate headers to
   * the request options.
   * @param opts Axios or Request options on which to attach the headers
   */
  async authorizeRequest(opts: Pick<GaxiosOptions, 'url' | 'headers'> = {}) {
    const url = opts.url;
    const client = await this.getClient();
    const headers = await client.getRequestHeaders(url);
    opts.headers = Gaxios.mergeHeaders(opts.headers, headers);
    return opts;
  }

  /**
   * A {@link fetch `fetch`} compliant API for {@link GoogleAuth}.
   *
   * @see {@link GoogleAuth.request} for the classic method.
   *
   * @remarks
   *
   * This is useful as a drop-in replacement for `fetch` API usage.
   *
   * @example
   *
   * ```ts
   * const auth = new GoogleAuth();
   * const fetchWithAuth: typeof fetch = (...args) => auth.fetch(...args);
   * await fetchWithAuth('https://example.com');
   * ```
   *
   * @param args `fetch` API or {@link Gaxios.fetch `Gaxios#fetch`} parameters
   * @returns the {@link GaxiosResponse} with Gaxios-added properties
   */
  async fetch<T>(...args: Parameters<AuthClient['fetch']>) {
    const client = await this.getClient();
    return client.fetch<T>(...args);
  }

  /**
   * Automatically obtain application default credentials, and make an
   * HTTP request using the given options.
   *
   * @see {@link GoogleAuth.fetch} for the modern method.
   *
   * @param opts Axios request options for the HTTP request.
   */
  async request<T>(opts: GaxiosOptions): Promise<GaxiosResponse<T>> {
    const client = await this.getClient();
    return client.request<T>(opts);
  }

  /**
   * Determine the compute environment in which the code is running.
   */
  getEnv(): Promise<GCPEnv> {
    return getEnv();
  }

  /**
   * Sign the given data with the current private key, or go out
   * to the IAM API to sign it.
   * @param data The data to be signed.
   * @param endpoint A custom endpoint to use.
   *
   * @example
   * ```
   * sign('data', 'https://iamcredentials.googleapis.com/v1/projects/-/serviceAccounts/');
   * ```
   */
  async sign(data: string, endpoint?: string): Promise<string> {
    const client = await this.getClient();
    const universe = await this.getUniverseDomain();

    endpoint =
      endpoint ||
      `https://iamcredentials.${universe}/v1/projects/-/serviceAccounts/`;

    if (client instanceof Impersonated) {
      const signed = await client.sign(data);
      return signed.signedBlob;
    }

    const crypto = createCrypto();
    if (client instanceof JWT && client.key) {
      const sign = await crypto.sign(client.key, data);
      return sign;
    }

    const creds = await this.getCredentials();
    if (!creds.client_email) {
      throw new Error('Cannot sign data without `client_email`.');
    }

    return this.signBlob(crypto, creds.client_email, data, endpoint);
  }

  private async signBlob(
    crypto: Crypto,
    emailOrUniqueId: string,
    data: string,
    endpoint: string,
  ): Promise<string> {
    const url = new URL(endpoint + `${emailOrUniqueId}:signBlob`);
    const res = await this.request<SignBlobResponse>({
      method: 'POST',
      url: url.href,
      data: {
        payload: crypto.encodeBase64StringUtf8(data),
      },
      retry: true,
      retryConfig: {
        httpMethodsToRetry: ['POST'],
      },
    });

    return res.data.signedBlob;
  }
}

export interface SignBlobResponse {
  keyId: string;
  signedBlob: string;
}
