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
import {
  AuthClient,
  DEFAULT_UNIVERSE,
  GoogleAuth,
  GoogleAuthOptions,
} from 'google-auth-library';
import {assertUniverseDomain} from './util.js';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {getPackageJSON} from './package-json-helper.cjs';
import {GCCL_GCS_CMD_KEY, decorateHeaders} from './nodejs-common/util.js';
import {
  IdempotencyStrategy,
  RETRYABLE_ERR_FN_DEFAULT,
  RetryOptions,
} from './storage.js';

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
  invocationId?: string;
  interceptors?: GaxiosInterceptor<GaxiosOptionsPrepared>[];
  autoPaginate?: boolean;
  autoPaginateVal?: boolean;
  maxRetries?: number;
  objectMode?: boolean;
  projectId?: string;
  queryParameters?: StorageQueryParameters;
  shouldReturnStream?: boolean;
  hasPrecondition?: boolean;
}

const DEFAULT_PROJECT_ID_TOKEN = '{{projectId}}';

interface TransportParameters extends Omit<GoogleAuthOptions, 'authClient'> {
  apiEndpoint: string;
  authClient?: GoogleAuth | AuthClient;
  baseUrl: string;
  customEndpoint?: boolean;
  email?: string;
  packageJson: PackageJson;
  projectIdRequired?: boolean;
  retryOptions: RetryOptions;
  scopes: string | string[];
  timeout?: number;
  token?: string;
  useAuthWithCustomEndpoint?: boolean;
  userAgent?: string;
  gaxiosInstance?: Gaxios;
  interceptors?: GaxiosInterceptor<GaxiosOptionsPrepared>[];
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
  private projectIdRequired: boolean;
  private customEndpoint: boolean;
  private useAuthWithCustomEndpoint: boolean;
  gaxiosInstance: Gaxios;
  private sharedInterceptors?: GaxiosInterceptor<GaxiosOptionsPrepared>[];
  private universeDomain: string;

  constructor(options: TransportParameters) {
    this.gaxiosInstance = options.gaxiosInstance || new Gaxios();
    this.sharedInterceptors = options.interceptors;
    if (options.authClient instanceof GoogleAuth) {
      this.authClient = options.authClient;
    } else {
      const authOptions: GoogleAuthOptions = {
        ...options,
        authClient: options.authClient,
        clientOptions: options.clientOptions,
      };
      if (authOptions.projectId === DEFAULT_PROJECT_ID_TOKEN) {
        delete authOptions.projectId;
      }
      this.authClient = new GoogleAuth(authOptions);
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
    this.projectId =
      options.projectId === DEFAULT_PROJECT_ID_TOKEN
        ? undefined
        : options.projectId;
    this.projectIdRequired = options.projectIdRequired !== false;
    this.customEndpoint = Boolean(options.customEndpoint);
    this.useAuthWithCustomEndpoint = Boolean(options.useAuthWithCustomEndpoint);
    this.universeDomain = options.universeDomain || DEFAULT_UNIVERSE;
  }

  async makeRequest<T>(
    reqOpts: StorageRequestOptions,
    callback?: StorageTransportCallback<T>,
  ): Promise<GaxiosResponse<T>> {
    const useAuth = !this.customEndpoint || this.useAuthWithCustomEndpoint;

    if (useAuth) {
      await assertUniverseDomain(this.authClient, this.universeDomain);
    }

    const queryParameters = reqOpts.queryParameters
      ? {...reqOpts.queryParameters}
      : undefined;
    let urlString = reqOpts.url?.toString() || '';

    const encodedProjectIdToken = encodeURIComponent(DEFAULT_PROJECT_ID_TOKEN);
    const hasProjectParamPlaceholder = Boolean(
      queryParameters &&
      'project' in queryParameters &&
      (queryParameters.project === undefined ||
        queryParameters.project === null ||
        queryParameters.project === '' ||
        queryParameters.project === DEFAULT_PROJECT_ID_TOKEN),
    );
    const hasProjectIdTokenInUrl =
      urlString.includes(DEFAULT_PROJECT_ID_TOKEN) ||
      urlString.includes(encodedProjectIdToken);
    const hasProjectIdTokenInParams = Boolean(
      queryParameters &&
      Object.values(queryParameters).some(value => {
        if (typeof value === 'string') {
          return value.includes(DEFAULT_PROJECT_ID_TOKEN);
        }
        if (Array.isArray(value)) {
          return value.some(
            item =>
              typeof item === 'string' &&
              item.includes(DEFAULT_PROJECT_ID_TOKEN),
          );
        }
        return false;
      }),
    );

    // Project ID Resolution
    const explicitReqProjectId =
      reqOpts.projectId && reqOpts.projectId !== DEFAULT_PROJECT_ID_TOKEN
        ? reqOpts.projectId
        : undefined;
    let resolvedProjectId = explicitReqProjectId || this.projectId;

    const needsProjectId =
      this.projectIdRequired ||
      hasProjectParamPlaceholder ||
      hasProjectIdTokenInUrl ||
      hasProjectIdTokenInParams;

    if (!resolvedProjectId && useAuth && needsProjectId) {
      const detectedProjectId = await this.authClient.getProjectId();
      if (detectedProjectId) {
        this.projectId = detectedProjectId;
        resolvedProjectId = detectedProjectId;
      }
    }

    if (resolvedProjectId) {
      if (hasProjectParamPlaceholder && queryParameters) {
        queryParameters.project = resolvedProjectId;
      }
      if (hasProjectIdTokenInUrl) {
        const encodedProjectId = resolvedProjectId
          .split(':')
          .map(encodeURIComponent)
          .join(':');
        urlString = urlString
          .split(DEFAULT_PROJECT_ID_TOKEN)
          .join(encodedProjectId)
          .split(encodedProjectIdToken)
          .join(encodedProjectId);
      }
      if (hasProjectIdTokenInParams && queryParameters) {
        for (const [key, value] of Object.entries(queryParameters)) {
          if (
            typeof value === 'string' &&
            value.includes(DEFAULT_PROJECT_ID_TOKEN)
          ) {
            queryParameters[key] = value
              .split(DEFAULT_PROJECT_ID_TOKEN)
              .join(resolvedProjectId);
          } else if (Array.isArray(value)) {
            (queryParameters as Record<string, unknown>)[key] = value.map(
              item =>
                typeof item === 'string' &&
                item.includes(DEFAULT_PROJECT_ID_TOKEN)
                  ? item.split(DEFAULT_PROJECT_ID_TOKEN).join(resolvedProjectId)
                  : item,
            );
          }
        }
      }
    } else {
      if (hasProjectParamPlaceholder && queryParameters) {
        delete queryParameters.project;
      }
      if (hasProjectIdTokenInParams && queryParameters) {
        for (const [key, value] of Object.entries(queryParameters)) {
          if (value === DEFAULT_PROJECT_ID_TOKEN) {
            delete queryParameters[key];
          } else if (
            typeof value === 'string' &&
            value.includes(DEFAULT_PROJECT_ID_TOKEN)
          ) {
            throw new Error(
              'A projectId is required to resolve the {{projectId}} placeholder in this request.',
            );
          } else if (Array.isArray(value)) {
            const hasEmbeddedToken = value.some(
              item =>
                typeof item === 'string' &&
                item.includes(DEFAULT_PROJECT_ID_TOKEN) &&
                item !== DEFAULT_PROJECT_ID_TOKEN,
            );
            if (hasEmbeddedToken) {
              throw new Error(
                'A projectId is required to resolve the {{projectId}} placeholder in this request.',
              );
            }
            const filtered = value.filter(
              item => item !== DEFAULT_PROJECT_ID_TOKEN,
            );
            if (filtered.length === 0) {
              delete queryParameters[key];
            } else {
              (queryParameters as Record<string, unknown>)[key] = filtered;
            }
          }
        }
      }
      if (hasProjectIdTokenInUrl) {
        const isAbs = this.#isValidUrl(urlString);
        const normalized =
          !isAbs && !urlString.startsWith('/') ? `/${urlString}` : urlString;
        const parsedUrl = isAbs
          ? new URL(urlString)
          : new URL(normalized, this.baseUrl);
        const entries = [...parsedUrl.searchParams.entries()];
        const remaining = entries.filter(
          ([, value]) => value !== DEFAULT_PROJECT_ID_TOKEN,
        );
        if (remaining.length !== entries.length) {
          parsedUrl.search = '';
          for (const [key, value] of remaining) {
            parsedUrl.searchParams.append(key, value);
          }
          urlString = isAbs
            ? parsedUrl.toString()
            : `${parsedUrl.pathname}${parsedUrl.search}${parsedUrl.hash}`;
        }
        if (
          urlString.includes(DEFAULT_PROJECT_ID_TOKEN) ||
          urlString.includes(encodedProjectIdToken)
        ) {
          throw new Error(
            'A projectId is required to resolve the {{projectId}} placeholder in this request.',
          );
        }
      }
    }

    if (reqOpts.multipart && Array.isArray(reqOpts.multipart)) {
      const boundary = '===============storage_multipart_boundary==';
      const chunks: Buffer[] = [];
      for (const part of reqOpts.multipart) {
        let contentType = 'application/octet-stream';
        if (part.headers) {
          if (typeof (part.headers as Headers).get === 'function') {
            contentType =
              (part.headers as Headers).get('content-type') || contentType;
          } else if (typeof part.headers === 'object') {
            const h = part.headers as unknown as Record<string, string>;
            contentType = h['Content-Type'] || h['content-type'] || contentType;
          }
        }
        chunks.push(
          Buffer.from(`--${boundary}\r\nContent-Type: ${contentType}\r\n\r\n`),
        );
        if (typeof part.content === 'string') {
          chunks.push(Buffer.from(part.content));
        } else if (Buffer.isBuffer(part.content)) {
          chunks.push(part.content);
        } else if (
          part.content &&
          typeof (part.content as {pipe?: unknown}).pipe === 'function'
        ) {
          const stream = part.content as import('stream').Readable;
          const streamChunks: Buffer[] = [];
          await new Promise<void>((resolve, reject) => {
            const onData = (chunk: Buffer | string | Uint8Array) => {
              streamChunks.push(
                Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk),
              );
            };
            const onEnd = () => {
              cleanup();
              resolve();
            };
            const onError = (err: Error) => {
              cleanup();
              reject(err);
            };
            const cleanup = () => {
              stream.removeListener('data', onData);
              stream.removeListener('end', onEnd);
              stream.removeListener('error', onError);
            };
            stream.on('data', onData);
            stream.once('end', onEnd);
            stream.once('error', onError);
            if (typeof stream.resume === 'function') {
              stream.resume();
            }
          });
          chunks.push(Buffer.concat(streamChunks));
        }
        chunks.push(Buffer.from('\r\n'));
      }
      chunks.push(Buffer.from(`--${boundary}--\r\n`));

      reqOpts.headers = reqOpts.headers || {};
      if (typeof (reqOpts.headers as Headers).set === 'function') {
        (reqOpts.headers as Headers).set(
          'Content-Type',
          `multipart/related; boundary="${boundary}"`,
        );
      } else {
        (reqOpts.headers as Record<string, string>)['Content-Type'] =
          `multipart/related; boundary="${boundary}"`;
      }
      reqOpts.body = Buffer.concat(chunks);
      delete reqOpts.multipart;
    }

    // Header Construction
    const headers = this.#prepareHeaders(reqOpts);

    // Interceptor Management
    const requestGaxiosInstance = reqOpts.interceptors
      ? new Gaxios({...this.gaxiosInstance.defaults})
      : this.gaxiosInstance;

    if (reqOpts.interceptors) {
      for (const inter of this.gaxiosInstance.interceptors.request.values()) {
        if (inter && !requestGaxiosInstance.interceptors.request.has(inter)) {
          requestGaxiosInstance.interceptors.request.add(inter);
        }
      }
      for (const inter of this.gaxiosInstance.interceptors.response.values()) {
        if (inter && !requestGaxiosInstance.interceptors.response.has(inter)) {
          requestGaxiosInstance.interceptors.response.add(inter);
        }
      }
    }

    if (this.sharedInterceptors) {
      for (const inter of this.sharedInterceptors) {
        if (!requestGaxiosInstance.interceptors.request.has(inter)) {
          requestGaxiosInstance.interceptors.request.add(inter);
        }
      }
    }

    if (reqOpts.interceptors) {
      for (const inter of reqOpts.interceptors) {
        requestGaxiosInstance.interceptors.request.add(inter);
      }
    }

    const isAbsolute = this.#isValidUrl(urlString);
    const normalizedUrl =
      !isAbsolute && !urlString.startsWith('/') ? `/${urlString}` : urlString;

    // Determine the base URL for the request
    const requestUrl = isAbsolute
      ? urlString
      : new URL(normalizedUrl, this.baseUrl).toString();

    let hasEtagInBody = !!(
      (reqOpts.body as {etag?: unknown})?.etag ||
      (reqOpts.data as {etag?: unknown})?.etag
    );
    if (
      !hasEtagInBody &&
      typeof reqOpts.body === 'string' &&
      reqOpts.body.includes('"etag"')
    ) {
      try {
        const parsed = JSON.parse(reqOpts.body);
        hasEtagInBody = Boolean(parsed && parsed.etag);
      } catch {
        hasEtagInBody = false;
      }
    }

    // Compute the final hasPrecondition flag
    const hasPrecondition = !!(
      this.retryOptions.idempotencyStrategy ===
        IdempotencyStrategy.RetryAlways ||
      reqOpts.hasPrecondition ||
      queryParameters?.ifGenerationMatch !== undefined ||
      queryParameters?.ifMetagenerationMatch !== undefined ||
      queryParameters?.ifSourceGenerationMatch !== undefined ||
      hasEtagInBody
    );

    // Helper to enrich GaxiosError objects with legacy ApiError properties
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const decorateError = (err: any) => {
      if (err && typeof err === 'object') {
        err.code = err.response?.status || err.status || err.code;
        if (err.response?.data?.error) {
          const apiError = err.response.data.error;
          if (typeof apiError === 'string') {
            err.message = apiError;
          } else if (apiError && typeof apiError === 'object') {
            if (typeof apiError.message === 'string') {
              err.message = apiError.message;
            } else if (
              apiError.message &&
              typeof apiError.message === 'object'
            ) {
              err.message =
                apiError.message.error?.message ||
                apiError.message.message ||
                JSON.stringify(apiError.message);
            }
            if (apiError.errors) err.errors = apiError.errors;
          }
        }
      }
      return err;
    };

    const isRetryDisabled =
      this.retryOptions.autoRetry === false ||
      this.retryOptions.idempotencyStrategy ===
        IdempotencyStrategy.RetryNever ||
      reqOpts.retry === false;
    const maxRetries = isRetryDisabled
      ? 0
      : (reqOpts.maxRetries ?? this.retryOptions.maxRetries ?? 3);

    const hasDefinedQueryParams = Boolean(
      queryParameters &&
      Object.values(queryParameters).some(
        value =>
          value !== undefined && (!Array.isArray(value) || value.length > 0),
      ),
    );

    const baseRequestOpts = {
      retryConfig: {
        retry: maxRetries,
        noResponseRetries: maxRetries,
        maxRetryDelay: this.retryOptions.maxRetryDelay,
        retryDelayMultiplier: this.retryOptions.retryDelayMultiplier,
        totalTimeout: this.retryOptions.totalTimeout,
        shouldRetry: (err: GaxiosError) => {
          if (isRetryDisabled) {
            return false;
          }
          const attempts = err?.config?.retryConfig?.currentRetryAttempt ?? 0;
          if (attempts >= maxRetries) {
            return false;
          }
          return !!this.retryOptions.retryableErrorFn?.(err);
        },
      },
      ...reqOpts,
      hasPrecondition, // Pass flag to Gaxios / AuthClient options
      params: hasDefinedQueryParams ? queryParameters : undefined,
      paramsSerializer: this.#paramsSerializer,
      headers,
      url: requestUrl,
      timeout: reqOpts.timeout ?? this.timeout,
      validateStatus: (status: number): boolean => {
        const isResumable = !!(
          queryParameters?.uploadType === 'resumable' ||
          urlString.includes('uploadType=resumable')
        );
        return (
          (status >= 200 && status < 300) || (isResumable && status === 308)
        );
      },
    } as unknown as GaxiosOptions;

    try {
      const requestPromise = useAuth
        ? this.authClient.request<T>({
            adapter: async (opts: GaxiosOptions) => {
              const urlHasParams = opts.url
                ? opts.url.toString() !== requestUrl
                : false;
              const innerOpts = {
                ...opts,
                adapter: undefined,
                params: urlHasParams ? undefined : opts.params,
              };
              return requestGaxiosInstance.request(innerOpts);
            },
            ...baseRequestOpts,
          })
        : requestGaxiosInstance.request<T>(baseRequestOpts);

      // Helper to decorate plain JSON objects with metadata for backward-compatibility callbacks
      const decorateMetadata = (resp: GaxiosResponse<T>) => {
        const data = resp.data;
        const isPlainObject = (obj: unknown): boolean =>
          obj !== null &&
          typeof obj === 'object' &&
          !(obj instanceof Buffer) &&
          !(typeof (obj as {on?: unknown}).on === 'function') &&
          !Array.isArray(obj);

        if (isPlainObject(data)) {
          Object.defineProperties(data, {
            headers: {
              value: resp.headers,
              writable: true,
              configurable: true,
              enumerable: false,
            },
            status: {
              value: resp.status,
              writable: true,
              configurable: true,
              enumerable: false,
            },
          });
          return data;
        }

        const isBufferOrStream =
          data instanceof Buffer ||
          (data !== null &&
            typeof data === 'object' &&
            typeof (data as {on?: unknown}).on === 'function');

        if (isBufferOrStream) {
          return data;
        }

        return resp as unknown as T;
      };

      const enrichedPromise = requestPromise.catch(err => {
        throw decorateError(err);
      });

      if (callback) {
        void (async () => {
          let resp: GaxiosResponse<T>;
          try {
            resp = await enrichedPromise;
          } catch (err: unknown) {
            callback(
              err as GaxiosError,
              null,
              (err as {response?: GaxiosResponse}).response,
            );
            return;
          }
          callback(null, decorateMetadata(resp), resp);
        })();
        return enrichedPromise;
      }

      return enrichedPromise;
    } catch (e) {
      const err = decorateError(e);
      if (callback) {
        callback(err as GaxiosError);
        return Promise.reject(err);
      }
      throw err;
    }
  }

  #prepareHeaders(reqOpts: StorageRequestOptions): Record<string, string> {
    const {headers} = decorateHeaders(reqOpts.headers, {
      idempotencyToken: reqOpts.invocationId,
      gcclGcsCmd: reqOpts[GCCL_GCS_CMD_KEY],
      packageJson: this.packageJson,
      providedUserAgent: this.providedUserAgent,
    });

    const hasContentType = Object.keys(headers).some(
      k => k.toLowerCase() === 'content-type',
    );
    if (!hasContentType && reqOpts.body && typeof reqOpts.body === 'string') {
      try {
        JSON.parse(reqOpts.body);
        headers['Content-Type'] = 'application/json';
      } catch {
        // Not a JSON string, leave Content-Type unset
      }
    }

    return headers;
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
}
