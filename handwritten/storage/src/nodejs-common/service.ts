/*!
 * Copyright 2022 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import * as extend from 'extend';
import {AuthClient, GoogleAuth, GoogleAuthOptions} from 'google-auth-library';
import * as r from 'teeny-request';
import * as uuid from 'uuid';

import {Interceptor} from './service-object';
import {
  BodyResponseCallback,
  DecorateRequestOptions,
  MakeAuthenticatedRequest,
  PackageJson,
  util,
} from './util';

export const DEFAULT_PROJECT_ID_TOKEN = '{{projectId}}';

export interface StreamRequestOptions extends DecorateRequestOptions {
  shouldReturnStream: true;
}

export interface ServiceConfig {
  /**
   * The base URL to make API requests to.
   */
  baseUrl: string;

  /**
   * The API Endpoint to use when connecting to the service.
   * Example:  storage.googleapis.com
   */
  apiEndpoint: string;

  /**
   * The scopes required for the request.
   */
  scopes: string[];

  projectIdRequired?: boolean;
  packageJson: PackageJson;

  /**
   * Reuse an existing `AuthClient` or `GoogleAuth` client instead of creating a new one.
   */
  authClient?: AuthClient | GoogleAuth;
}

export interface ServiceOptions extends Omit<GoogleAuthOptions, 'authClient'> {
  authClient?: AuthClient | GoogleAuth;
  interceptors_?: Interceptor[];
  email?: string;
  token?: string;
  timeout?: number; // http.request.options.timeout
  userAgent?: string;
  useAuthWithCustomEndpoint?: boolean;
}

export class Service {
  baseUrl: string;
  private globalInterceptors: Interceptor[];
  interceptors: Interceptor[];
  private packageJson: PackageJson;
  projectId: string;
  private projectIdRequired: boolean;
  providedUserAgent?: string;
  makeAuthenticatedRequest: MakeAuthenticatedRequest;
  authClient: GoogleAuth<AuthClient>;
  private getCredentials: {};
  readonly apiEndpoint: string;
  timeout?: number;

  /**
   * Service is a base class, meant to be inherited from by a "service," like
   * BigQuery or Storage.
   *
   * This handles making authenticated requests by exposing a `makeReq_`
   * function.
   *
   * @constructor
   * @alias module:common/service
   *
   * @param {object} config - Configuration object.
   * @param {string} config.baseUrl - The base URL to make API requests to.
   * @param {string[]} config.scopes - The scopes required for the request.
   * @param {object=} options - [Configuration object](#/docs).
   */
  constructor(config: ServiceConfig, options: ServiceOptions = {}) {
    this.baseUrl = config.baseUrl;
    this.apiEndpoint = config.apiEndpoint;
    this.timeout = options.timeout;
    this.globalInterceptors = Array.isArray(options.interceptors_)
      ? options.interceptors_
      : [];
    this.interceptors = [];
    this.packageJson = config.packageJson;
    this.projectId = options.projectId || DEFAULT_PROJECT_ID_TOKEN;
    this.projectIdRequired = config.projectIdRequired !== false;
    this.providedUserAgent = options.userAgent;

    const reqCfg = extend({}, config, {
      projectIdRequired: this.projectIdRequired,
      projectId: this.projectId,
      authClient: options.authClient,
      credentials: options.credentials,
      keyFile: options.keyFilename,
      email: options.email,
      token: options.token,
    });

    this.makeAuthenticatedRequest =
      util.makeAuthenticatedRequestFactory(reqCfg);
    this.authClient = this.makeAuthenticatedRequest.authClient;
    this.getCredentials = this.makeAuthenticatedRequest.getCredentials;

    const isCloudFunctionEnv = !!process.env.FUNCTION_NAME;

    if (isCloudFunctionEnv) {
      this.interceptors.push({
        request(reqOpts: DecorateRequestOptions) {
          reqOpts.forever = false;
          return reqOpts;
        },
      });
    }
  }

  /**
   * Return the user's custom request interceptors.
   */
  getRequestInterceptors(): Function[] {
    // Interceptors should be returned in the order they were assigned.
    return ([] as Interceptor[]).slice
      .call(this.globalInterceptors)
      .concat(this.interceptors)
      .filter(interceptor => typeof interceptor.request === 'function')
      .map(interceptor => interceptor.request);
  }

  /**
   * Get and update the Service's project ID.
   *
   * @param {function} callback - The callback function.
   */
  getProjectId(): Promise<string>;
  getProjectId(callback: (err: Error | null, projectId?: string) => void): void;
  getProjectId(
    callback?: (err: Error | null, projectId?: string) => void
  ): Promise<string> | void {
    if (!callback) {
      return this.getProjectIdAsync();
    }
    this.getProjectIdAsync().then(p => callback(null, p), callback);
  }

  protected async getProjectIdAsync(): Promise<string> {
    const projectId = await this.authClient.getProjectId();
    if (this.projectId === DEFAULT_PROJECT_ID_TOKEN && projectId) {
      this.projectId = projectId;
    }
    return this.projectId;
  }

  /**
   * Make an authenticated API request.
   *
   * @private
   *
   * @param {object} reqOpts - Request options that are passed to `request`.
   * @param {string} reqOpts.uri - A URI relative to the baseUrl.
   * @param {function} callback - The callback function passed to `request`.
   */
  private request_(reqOpts: StreamRequestOptions): r.Request;
  private request_(
    reqOpts: DecorateRequestOptions,
    callback: BodyResponseCallback
  ): void;
  private request_(
    reqOpts: DecorateRequestOptions | StreamRequestOptions,
    callback?: BodyResponseCallback
  ): void | r.Request {
    reqOpts = extend(true, {}, reqOpts, {timeout: this.timeout});
    const isAbsoluteUrl = reqOpts.uri.indexOf('http') === 0;
    const uriComponents = [this.baseUrl];

    if (this.projectIdRequired) {
      if (reqOpts.projectId) {
        uriComponents.push('projects');
        uriComponents.push(reqOpts.projectId);
      } else {
        uriComponents.push('projects');
        uriComponents.push(this.projectId);
      }
    }

    uriComponents.push(reqOpts.uri);

    if (isAbsoluteUrl) {
      uriComponents.splice(0, uriComponents.indexOf(reqOpts.uri));
    }

    reqOpts.uri = uriComponents
      .map(uriComponent => {
        const trimSlashesRegex = /^\/*|\/*$/g;
        return uriComponent.replace(trimSlashesRegex, '');
      })
      .join('/')
      // Some URIs have colon separators.
      // Bad: https://.../projects/:list
      // Good: https://.../projects:list
      .replace(/\/:/g, ':');

    const requestInterceptors = this.getRequestInterceptors();
    const interceptorArray = Array.isArray(reqOpts.interceptors_)
      ? reqOpts.interceptors_
      : [];
    interceptorArray.forEach(interceptor => {
      if (typeof interceptor.request === 'function') {
        requestInterceptors.push(interceptor.request);
      }
    });

    requestInterceptors.forEach(requestInterceptor => {
      reqOpts = requestInterceptor(reqOpts);
    });

    delete reqOpts.interceptors_;

    const pkg = this.packageJson;
    let userAgent = util.getUserAgentFromPackageJson(pkg);
    if (this.providedUserAgent) {
      userAgent = `${this.providedUserAgent} ${userAgent}`;
    }
    reqOpts.headers = extend({}, reqOpts.headers, {
      'User-Agent': userAgent,
      'x-goog-api-client': `gl-node/${process.versions.node} gccl/${
        pkg.version
      } gccl-invocation-id/${uuid.v4()}`,
    });

    if (reqOpts.shouldReturnStream) {
      return this.makeAuthenticatedRequest(reqOpts) as {} as r.Request;
    } else {
      this.makeAuthenticatedRequest(reqOpts, callback);
    }
  }

  /**
   * Make an authenticated API request.
   *
   * @param {object} reqOpts - Request options that are passed to `request`.
   * @param {string} reqOpts.uri - A URI relative to the baseUrl.
   * @param {function} callback - The callback function passed to `request`.
   */
  request(
    reqOpts: DecorateRequestOptions,
    callback: BodyResponseCallback
  ): void {
    Service.prototype.request_.call(this, reqOpts, callback);
  }

  /**
   * Make an authenticated API request.
   *
   * @param {object} reqOpts - Request options that are passed to `request`.
   * @param {string} reqOpts.uri - A URI relative to the baseUrl.
   */
  requestStream(reqOpts: DecorateRequestOptions): r.Request {
    const opts = extend(true, reqOpts, {shouldReturnStream: true});
    return (Service.prototype.request_ as Function).call(this, opts);
  }
}
