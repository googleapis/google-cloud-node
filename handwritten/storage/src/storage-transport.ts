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

import {
  Gaxios,
  GaxiosError,
  GaxiosInterceptor,
  GaxiosOptions,
  GaxiosOptionsPrepared,
  GaxiosResponse,
} from 'gaxios';
import {AuthClient, GoogleAuth, GoogleAuthOptions} from 'google-auth-library';
import {
  getModuleFormat,
  getRuntimeTrackingString,
  getUserAgentString,
} from './util.js';
import {randomUUID} from 'crypto';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {getPackageJSON} from './package-json-helper.cjs';
import {GCCL_GCS_CMD_KEY} from './nodejs-common/util.js';
import {RETRYABLE_ERR_FN_DEFAULT, RetryOptions} from './storage.js';

export interface StandardStorageQueryParams {
  alt?: 'json' | 'media';
  callback?: string;
  fields?: string;
  key?: string;
  prettyPrint?: boolean;
  quotaUser?: string;
  userProject?: string;
}

export interface StorageQueryParameters extends StandardStorageQueryParams {
  [key: string]: string | number | boolean | undefined;
}

export interface StorageRequestOptions extends GaxiosOptions {
  [GCCL_GCS_CMD_KEY]?: string;
  interceptors?: GaxiosInterceptor<GaxiosOptionsPrepared>[];
  autoPaginate?: boolean;
  autoPaginateVal?: boolean;
  maxRetries?: number;
  objectMode?: boolean;
  projectId?: string;
  queryParameters?: StorageQueryParameters;
  shouldReturnStream?: boolean;
}

interface TransportParameters extends Omit<GoogleAuthOptions, 'authClient'> {
  apiEndpoint: string;
  authClient?: GoogleAuth | AuthClient;
  baseUrl: string;
  customEndpoint?: boolean;
  email?: string;
  packageJson: PackageJson;
  retryOptions: RetryOptions;
  scopes: string | string[];
  timeout?: number;
  token?: string;
  useAuthWithCustomEndpoint?: boolean;
  userAgent?: string;
  gaxiosInstance?: Gaxios;
}

interface PackageJson {
  name: string;
  version: string;
}

export interface StorageTransportCallback<T> {
  (
    err: GaxiosError | null,
    data?: T | null,
    fullResponse?: GaxiosResponse,
  ): void;
}

export class StorageTransport {
  authClient: GoogleAuth<AuthClient>;
  private providedUserAgent?: string;
  private packageJson: PackageJson;
  private retryOptions: RetryOptions;
  private baseUrl: string;
  private timeout?: number;
  private projectId?: string;
  private useAuthWithCustomEndpoint?: boolean;
  private gaxiosInstance: Gaxios;

  constructor(options: TransportParameters) {
    this.gaxiosInstance = options.gaxiosInstance || new Gaxios();
    if (options.authClient instanceof GoogleAuth) {
      this.authClient = options.authClient;
    } else {
      this.authClient = new GoogleAuth({
        ...options,
        authClient: options.authClient,
        clientOptions: options.clientOptions,
      });
    }
    this.providedUserAgent = options.userAgent;
    this.packageJson = getPackageJSON();
    this.retryOptions = {
      ...options.retryOptions,
      retryableErrorFn:
        options.retryOptions?.retryableErrorFn || RETRYABLE_ERR_FN_DEFAULT,
    };
    this.baseUrl = options.baseUrl;
    this.timeout = options.timeout;
    this.projectId = options.projectId;
    this.useAuthWithCustomEndpoint = options.useAuthWithCustomEndpoint;
  }

  async makeRequest<T>(
    reqOpts: StorageRequestOptions,
    callback?: StorageTransportCallback<T>,
  ): Promise<void | T> {
    // Project ID Resolution
    if (!this.projectId) {
      this.projectId =
        reqOpts.projectId || (await this.authClient.getProjectId());
    }

    // Header Construction
    const headers = this.#prepareHeaders(reqOpts);

    // Interceptor Management
    this.gaxiosInstance.interceptors.request.clear();
    if (reqOpts.interceptors) {
      for (const inter of reqOpts.interceptors) {
        this.gaxiosInstance.interceptors.request.add(inter);
      }
    }

    const urlString = reqOpts.url?.toString() || '';
    const isAbsolute = this.#isValidUrl(urlString);

    // Determine the base URL for the request
    const requestUrl = isAbsolute
      ? urlString
      : new URL(urlString, this.baseUrl).toString();

    try {
      const requestPromise = this.authClient.request<T>({
        adapter: this.gaxiosInstance.request.bind(this.gaxiosInstance),
        retryConfig: {
          retry: this.retryOptions.maxRetries,
          noResponseRetries: this.retryOptions.maxRetries,
          maxRetryDelay: this.retryOptions.maxRetryDelay,
          retryDelayMultiplier: this.retryOptions.retryDelayMultiplier,
          totalTimeout: this.retryOptions.totalTimeout,
          shouldRetry: err => !!this.retryOptions.retryableErrorFn?.(err),
        },
        ...reqOpts,
        params: reqOpts.queryParameters,
        paramsSerializer: this.#paramsSerializer,
        headers,
        url: requestUrl,
        timeout: this.timeout,
        validateStatus: (status: number): boolean => {
          const isResumable = !!(
            reqOpts.queryParameters?.uploadType === 'resumable' ||
            reqOpts.url?.toString().includes('uploadType=resumable')
          );
          return (
            (status >= 200 && status < 300) || (isResumable && status === 308)
          );
        },
      });

      // Response Handling
      const responseHandler = (resp: GaxiosResponse<T>) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const data = resp.data as any;
        if (data !== null && typeof data === 'object') {
          data.headers = resp.headers;
          data.status = resp.status;
          return data;
        }
        return resp;
      };

      if (callback) {
        requestPromise
          .then(resp => callback(null, responseHandler(resp), resp))
          .catch(err => callback(err, null, err.response));
        return;
      }

      return requestPromise.then(responseHandler);
    } catch (e) {
      if (callback) return callback(e as GaxiosError);
      throw e;
    }
  }

  #prepareHeaders(reqOpts: StorageRequestOptions): Record<string, string> {
    const headersObj = this.#buildRequestHeaders(reqOpts.headers);

    if (reqOpts[GCCL_GCS_CMD_KEY]) {
      const current = headersObj.get('x-goog-api-client') || '';
      headersObj.set(
        'x-goog-api-client',
        `${current} gccl-gcs-cmd/${reqOpts[GCCL_GCS_CMD_KEY]}`,
      );
    }

    const finalHeaders: Record<string, string> = {};
    headersObj.forEach((v, k) => {
      finalHeaders[k] = v;
    });
    return finalHeaders;
  }

  #isValidUrl(url: string): boolean {
    try {
      return Boolean(new URL(url));
    } catch {
      return false;
    }
  }

  /**
   * Serializes query parameters into a string.
   * Specifically handles arrays by appending each value individually
   * to satisfy GCS "repeated key" requirements (e.g., for IAM permissions).
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  #paramsSerializer = (params: Record<string, any>): string => {
    const searchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(params)) {
      if (value === undefined) continue;

      if (Array.isArray(value)) {
        value.forEach(v => searchParams.append(key, String(v)));
      } else {
        searchParams.set(key, String(value));
      }
    }
    return searchParams.toString();
  };

  #buildRequestHeaders(requestHeaders = {}) {
    const headers = new Headers(requestHeaders);
    headers.set('User-Agent', this.#getUserAgentString());
    headers.set(
      'x-goog-api-client',
      `${getRuntimeTrackingString()} gccl/${this.packageJson.version}-${getModuleFormat()} gccl-invocation-id/${randomUUID()}`,
    );
    return headers;
  }

  #getUserAgentString(): string {
    const base = getUserAgentString();
    return this.providedUserAgent ? `${this.providedUserAgent} ${base}` : base;
  }
}
