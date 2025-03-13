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
  GaxiosError,
  GaxiosInterceptor,
  GaxiosOptions,
  GaxiosResponse,
  Headers,
} from 'gaxios';
import {
  AuthClient,
  DefaultTransporter,
  GoogleAuth,
  GoogleAuthOptions,
} from 'google-auth-library';
import {
  getModuleFormat,
  getRuntimeTrackingString,
  getUserAgentString,
} from './util';
import {randomUUID} from 'crypto';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {getPackageJSON} from './package-json-helper.cjs';
import {GCCL_GCS_CMD_KEY} from './nodejs-common/util';
import {RetryOptions} from './storage';

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
  interceptors?: GaxiosInterceptor<GaxiosOptions>[];
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
let projectId: string;

export class StorageTransport {
  authClient: GoogleAuth<AuthClient>;
  private providedUserAgent?: string;
  private packageJson: PackageJson;
  private retryOptions: RetryOptions;
  private baseUrl: string;
  private timeout?: number;
  private projectId?: string;
  private useAuthWithCustomEndpoint?: boolean;

  constructor(options: TransportParameters) {
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
    this.retryOptions = options.retryOptions;
    this.baseUrl = options.baseUrl;
    this.timeout = options.timeout;
    this.projectId = options.projectId;
    this.useAuthWithCustomEndpoint = options.useAuthWithCustomEndpoint;
  }

  makeRequest<T>(
    reqOpts: StorageRequestOptions,
    callback?: StorageTransportCallback<T>,
  ): Promise<T> | Promise<void> {
    const headers = this.#buildRequestHeaders(reqOpts.headers);
    if (reqOpts[GCCL_GCS_CMD_KEY]) {
      headers['x-goog-api-client'] +=
        ` gccl-gcs-cmd/${reqOpts[GCCL_GCS_CMD_KEY]}`;
    }
    if (reqOpts.interceptors) {
      const transport = this.authClient.transporter as DefaultTransporter;
      transport.instance.interceptors.request.clear();
      for (const inter of reqOpts.interceptors) {
        transport.instance.interceptors.request.add(inter);
      }
    }
    const prepareRequest = async () => {
      try {
        const getProjectId = async () => {
          if (reqOpts.projectId) return reqOpts.projectId;
          projectId = await this.authClient.getProjectId();
          return projectId;
        };
        const _projectId = await getProjectId();
        if (_projectId) {
          projectId = _projectId;
          this.projectId = projectId;
        }
        return projectId;
      } catch (e) {
        if (callback) return callback(e as GaxiosError);
        throw e;
      }
    };
    const requestPromise = prepareRequest().then(() => {
      return this.authClient.request<T>({
        retryConfig: {
          retry: this.retryOptions.maxRetries,
          noResponseRetries: this.retryOptions.maxRetries,
          maxRetryDelay: this.retryOptions.maxRetryDelay,
          retryDelayMultiplier: this.retryOptions.retryDelayMultiplier,
          shouldRetry: this.retryOptions.retryableErrorFn,
          totalTimeout: this.retryOptions.totalTimeout,
        },
        ...reqOpts,
        headers,
        url: this.#buildUrl(reqOpts.url?.toString(), reqOpts.queryParameters),
        timeout: this.timeout,
      });
    });

    return callback
      ? requestPromise
          .then(resp => callback(null, resp.data, resp))
          .catch(err => callback(err, null, err.response))
      : (requestPromise.then(resp => resp.data) as Promise<T>);
  }

  #buildUrl(pathUri = '', queryParameters: StorageQueryParameters = {}): URL {
    if (
      'project' in queryParameters &&
      (queryParameters.project !== this.projectId ||
        queryParameters.project !== projectId)
    ) {
      queryParameters.project = this.projectId;
    }
    const qp = this.#buildRequestQueryParams(queryParameters);
    let url: URL;
    if (this.#isValidUrl(pathUri)) {
      url = new URL(pathUri);
    } else {
      url = new URL(`${this.baseUrl}${pathUri}`);
    }
    url.search = qp;

    return url;
  }

  #isValidUrl(url: string): boolean {
    try {
      return Boolean(new URL(url));
    } catch {
      return false;
    }
  }

  #buildRequestHeaders(requestHeaders: Headers = {}) {
    const headers = {
      ...requestHeaders,
      'User-Agent': this.#getUserAgentString(),
      'x-goog-api-client': `${getRuntimeTrackingString()} gccl/${
        this.packageJson.version
      }-${getModuleFormat()} gccl-invocation-id/${randomUUID()}`,
    };

    return headers;
  }

  #buildRequestQueryParams(queryParameters: StorageQueryParameters): string {
    const qp = new URLSearchParams(
      queryParameters as unknown as Record<string, string>,
    );

    return qp.toString();
  }

  #getUserAgentString(): string {
    let userAgent = getUserAgentString();
    if (this.providedUserAgent) {
      userAgent = `${this.providedUserAgent} ${userAgent}`;
    }

    return userAgent;
  }
}
