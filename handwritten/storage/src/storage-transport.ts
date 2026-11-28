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

import {randomUUID} from 'crypto';
import {Readable} from 'stream';
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

const REDACTED_VALUE =
  '<<REDACTED> - See `errorRedactor` option in `gaxios` for configuration>.';

interface MultipartPartLike {
  headers?: Headers | Record<string, string>;
  content: unknown;
}

interface EventEmitterStreamLike {
  destroyed?: boolean;
  errored?: Error | null;
  readableEnded?: boolean;
  on(event: string, listener: (...args: unknown[]) => void): unknown;
  once(event: string, listener: (...args: unknown[]) => void): unknown;
  removeListener(
    event: string,
    listener: (...args: unknown[]) => void,
  ): unknown;
}

function createPrematureCloseError(): NodeJS.ErrnoException {
  const err = new Error('Premature close') as NodeJS.ErrnoException;
  err.code = 'ERR_STREAM_PREMATURE_CLOSE';
  return err;
}

function isBinaryValue(value: unknown): boolean {
  if (!value || typeof value !== 'object') {
    return false;
  }
  return (
    ArrayBuffer.isView(value) ||
    value instanceof ArrayBuffer ||
    (typeof Blob !== 'undefined' && value instanceof Blob)
  );
}

function isStreamLike(value: unknown): boolean {
  if (!value || typeof value !== 'object' || isBinaryValue(value)) {
    return false;
  }
  if (value instanceof Readable) {
    return true;
  }
  if (
    typeof ReadableStream !== 'undefined' &&
    value instanceof ReadableStream
  ) {
    return true;
  }
  const obj = value as {
    pipe?: unknown;
    [Symbol.asyncIterator]?: unknown;
  };
  return (
    typeof obj.pipe === 'function' ||
    typeof obj[Symbol.asyncIterator] === 'function'
  );
}

function isEventEmitterStream(value: unknown): value is EventEmitterStreamLike {
  if (!isStreamLike(value)) {
    return false;
  }
  const obj = value as Partial<EventEmitterStreamLike>;
  return (
    typeof obj.on === 'function' &&
    typeof obj.once === 'function' &&
    typeof obj.removeListener === 'function'
  );
}

function extractPartContentType(
  headers?: Headers | Record<string, string>,
): string {
  const defaultType = 'application/octet-stream';
  if (!headers) {
    return defaultType;
  }
  if (typeof (headers as Headers).get === 'function') {
    return (headers as Headers).get('content-type') || defaultType;
  }
  if (typeof headers === 'object') {
    for (const [key, value] of Object.entries(headers)) {
      if (key.toLowerCase() === 'content-type' && value) {
        return value;
      }
    }
  }
  return defaultType;
}

function normalizeChunk(chunk: unknown): Buffer {
  if (Buffer.isBuffer(chunk)) {
    return chunk;
  }
  if (typeof chunk === 'string') {
    return Buffer.from(chunk);
  }
  if (ArrayBuffer.isView(chunk)) {
    return Buffer.from(chunk.buffer, chunk.byteOffset, chunk.byteLength);
  }
  if (chunk instanceof ArrayBuffer) {
    return Buffer.from(chunk);
  }
  return Buffer.from(String(chunk));
}

function toPartAsyncIterable(content: unknown): AsyncIterable<unknown> {
  if (content instanceof Readable && typeof content.iterator === 'function') {
    // Do not destroy the upstream stream when the consumer detaches (e.g. on an
    // early HTTP 4xx/5xx response), otherwise duplexify receives ABORT_ERR before
    // the real HTTP error propagates to the caller.
    return content.iterator({destroyOnReturn: false});
  }
  if (
    content &&
    typeof content === 'object' &&
    typeof (content as {[Symbol.asyncIterator]?: unknown})[
      Symbol.asyncIterator
    ] === 'function'
  ) {
    return content as AsyncIterable<unknown>;
  }
  const wrapped = new Readable().wrap(content as NodeJS.ReadableStream);
  return wrapped.iterator({destroyOnReturn: false});
}

function createMultipartStream(
  parts: MultipartPartLike[],
  boundary: string,
  earlyErrors: Map<object, Error>,
): Readable {
  async function* generateMultipartChunks(): AsyncGenerator<Buffer> {
    for (const part of parts) {
      const contentType = extractPartContentType(part.headers);
      yield Buffer.from(
        `--${boundary}\r\nContent-Type: ${contentType}\r\n\r\n`,
      );

      const content = part.content;
      if (typeof content === 'string') {
        if (content.length > 0) {
          yield Buffer.from(content);
        }
      } else if (Buffer.isBuffer(content)) {
        if (content.length > 0) {
          yield content;
        }
      } else if (ArrayBuffer.isView(content)) {
        if (content.byteLength > 0) {
          yield Buffer.from(
            content.buffer,
            content.byteOffset,
            content.byteLength,
          );
        }
      } else if (content instanceof ArrayBuffer) {
        if (content.byteLength > 0) {
          yield Buffer.from(content);
        }
      } else if (isStreamLike(content)) {
        const earlyErr = earlyErrors.get(content as object);
        if (earlyErr) {
          throw earlyErr;
        }
        const iterable = toPartAsyncIterable(content);
        for await (const chunk of iterable) {
          const buf = normalizeChunk(chunk);
          if (buf.length > 0) {
            yield buf;
          }
        }
      }

      yield Buffer.from('\r\n');
    }
    yield Buffer.from(`--${boundary}--\r\n`);
  }

  return Readable.from(generateMultipartChunks(), {objectMode: false});
}

/**
 * O(1) error redactor mirroring gaxios's default redaction for headers, URL
 * query params, and JSON/text error responses while skipping binary views
 * (Buffer/Uint8Array) and streams so large request bodies cannot stall the
 * event loop.
 */
function redactStorageError<
  O extends GaxiosOptionsPrepared,
  R extends GaxiosResponse,
>(data: {config?: O; response?: R}): {config?: O; response?: R} {
  const redactHeaders = (headers?: Headers | Record<string, string>) => {
    if (!headers) return;
    if (
      typeof (headers as Headers).forEach === 'function' &&
      typeof (headers as Headers).set === 'function'
    ) {
      (headers as Headers).forEach((_, key) => {
        if (
          /^authentication$/i.test(key) ||
          /^authorization$/i.test(key) ||
          /secret/i.test(key)
        ) {
          (headers as Headers).set(key, REDACTED_VALUE);
        }
      });
    } else if (typeof headers === 'object') {
      for (const key of Object.keys(headers)) {
        if (
          /^authentication$/i.test(key) ||
          /^authorization$/i.test(key) ||
          /secret/i.test(key)
        ) {
          (headers as Record<string, string>)[key] = REDACTED_VALUE;
        }
      }
    }
  };

  const redactString = <T extends Record<string, unknown>>(
    obj: T,
    key: keyof T,
  ) => {
    if (
      typeof obj === 'object' &&
      obj !== null &&
      typeof obj[key] === 'string'
    ) {
      const text = obj[key] as string;
      if (
        /grant_type=/i.test(text) ||
        /assertion=/i.test(text) ||
        /secret/i.test(text)
      ) {
        (obj[key] as unknown) = REDACTED_VALUE;
      }
    }
  };

  const redactObject = (obj: unknown) => {
    if (
      !obj ||
      typeof obj !== 'object' ||
      isBinaryValue(obj) ||
      isStreamLike(obj)
    ) {
      return;
    }
    if (
      obj instanceof FormData ||
      obj instanceof URLSearchParams ||
      ('forEach' in obj && 'set' in obj)
    ) {
      (obj as FormData | URLSearchParams).forEach((_, key) => {
        if (['grant_type', 'assertion'].includes(key) || /secret/.test(key)) {
          (obj as FormData | URLSearchParams).set(key, REDACTED_VALUE);
        }
      });
    } else {
      const record = obj as Record<string, unknown>;
      if ('grant_type' in record) {
        record['grant_type'] = REDACTED_VALUE;
      }
      if ('assertion' in record) {
        record['assertion'] = REDACTED_VALUE;
      }
      if ('client_secret' in record) {
        record['client_secret'] = REDACTED_VALUE;
      }
    }
  };

  if (data.config) {
    redactHeaders(data.config.headers);
    if (!isBinaryValue(data.config.data) && !isStreamLike(data.config.data)) {
      redactString(data.config as unknown as Record<string, unknown>, 'data');
      redactObject(data.config.data);
    }
    if (!isBinaryValue(data.config.body) && !isStreamLike(data.config.body)) {
      redactString(data.config as unknown as Record<string, unknown>, 'body');
      redactObject(data.config.body);
    }
    if (data.config.url?.searchParams) {
      if (data.config.url.searchParams.has('token')) {
        data.config.url.searchParams.set('token', REDACTED_VALUE);
      }
      if (data.config.url.searchParams.has('client_secret')) {
        data.config.url.searchParams.set('client_secret', REDACTED_VALUE);
      }
    }
  }

  if (data.response) {
    redactStorageError({config: data.response.config});
    redactHeaders(data.response.headers);
    if ((data.response as unknown as Response).bodyUsed) {
      redactString(data.response as unknown as Record<string, unknown>, 'data');
      redactObject(data.response.data);
    }
  }

  return data;
}

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
  private useAuthWithCustomEndpoint?: boolean;
  gaxiosInstance: Gaxios;
  private sharedInterceptors?: GaxiosInterceptor<GaxiosOptionsPrepared>[];
  private universeDomain: string;

  constructor(options: TransportParameters) {
    this.gaxiosInstance = options.gaxiosInstance || new Gaxios();
    this.sharedInterceptors = options.interceptors;
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
    this.universeDomain = options.universeDomain || DEFAULT_UNIVERSE;
  }

  async makeRequest<T>(
    reqOpts: StorageRequestOptions,
    callback?: StorageTransportCallback<T>,
  ): Promise<GaxiosResponse<T>> {
    // Attach early error and premature-close listeners to any multipart stream
    // parts synchronously before awaiting auth/project resolution so stream
    // failures cannot trigger unhandled 'error' events or hang the request.
    const earlyErrors = new Map<object, Error>();
    const partCleanupFns: Array<() => void> = [];
    let multipartAbortController: AbortController | undefined;
    let firstEarlyError: Error | undefined;

    if (reqOpts.multipart && Array.isArray(reqOpts.multipart)) {
      for (const part of reqOpts.multipart as MultipartPartLike[]) {
        if (!isEventEmitterStream(part.content)) {
          continue;
        }
        const stream = part.content;
        multipartAbortController ??= new AbortController();
        const recordPartError = (err: Error) => {
          if (!earlyErrors.has(stream)) {
            earlyErrors.set(stream, err);
          }
          firstEarlyError ??= err;
          if (!multipartAbortController!.signal.aborted) {
            multipartAbortController!.abort(err);
          }
        };

        if (stream.errored) {
          recordPartError(stream.errored);
          continue;
        }
        if (stream.destroyed && stream.readableEnded === false) {
          recordPartError(createPrematureCloseError());
          continue;
        }

        let ended = Boolean(stream.readableEnded);
        const onEnd = () => {
          ended = true;
        };
        const onError = (err: unknown) => {
          recordPartError(err instanceof Error ? err : new Error(String(err)));
        };
        const onClose = () => {
          if (!ended && !stream.readableEnded) {
            recordPartError(createPrematureCloseError());
          }
        };
        stream.once('end', onEnd);
        stream.on('error', onError);
        stream.once('close', onClose);
        partCleanupFns.push(() => {
          stream.removeListener('end', onEnd);
          stream.removeListener('error', onError);
          stream.removeListener('close', onClose);
        });
      }
    }

    let cleanedUp = false;
    const cleanupPartListeners = () => {
      if (cleanedUp) return;
      cleanedUp = true;
      for (const cleanup of partCleanupFns) {
        cleanup();
      }
    };

    try {
      await assertUniverseDomain(this.authClient, this.universeDomain);

      // Project ID Resolution
      if (!this.projectId) {
        this.projectId =
          reqOpts.projectId || (await this.authClient.getProjectId());
      }
    } catch (e) {
      cleanupPartListeners();
      throw e;
    }

    if (reqOpts.queryParameters && 'project' in reqOpts.queryParameters) {
      reqOpts.queryParameters.project = this.projectId;
    }

    const requestOpts: StorageRequestOptions = {...reqOpts};
    let multipartBoundary: string | undefined;
    let multipartStream: Readable | undefined;

    if (requestOpts.multipart && Array.isArray(requestOpts.multipart)) {
      multipartBoundary = randomUUID();
      multipartStream = createMultipartStream(
        requestOpts.multipart as MultipartPartLike[],
        multipartBoundary,
        earlyErrors,
      );
      requestOpts.body = multipartStream as unknown as GaxiosOptions['body'];
      requestOpts.data = multipartStream;
      delete requestOpts.multipart;
    }

    // Header Construction
    const headers = this.#prepareHeaders(requestOpts);
    if (multipartBoundary) {
      for (const key of Object.keys(headers)) {
        const lower = key.toLowerCase();
        if (lower === 'content-type' || lower === 'content-length') {
          delete headers[key];
        }
      }
      headers['Content-Type'] =
        `multipart/related; boundary="${multipartBoundary}"`;
    }

    // Interceptor Management
    const requestGaxiosInstance = requestOpts.interceptors
      ? new Gaxios()
      : this.gaxiosInstance;

    if (this.sharedInterceptors) {
      for (const inter of this.sharedInterceptors) {
        if (!requestGaxiosInstance.interceptors.request.has(inter)) {
          requestGaxiosInstance.interceptors.request.add(inter);
        }
      }
    }

    if (requestOpts.interceptors) {
      for (const inter of requestOpts.interceptors) {
        requestGaxiosInstance.interceptors.request.add(inter);
      }
    }

    const urlString = requestOpts.url?.toString() || '';
    const isAbsolute = this.#isValidUrl(urlString);
    const normalizedUrl =
      !isAbsolute && !urlString.startsWith('/') ? `/${urlString}` : urlString;

    // Determine the base URL for the request
    const requestUrl = isAbsolute
      ? urlString
      : new URL(normalizedUrl, this.baseUrl).toString();

    let hasEtagInBody = !!(
      (requestOpts.body as {etag?: unknown})?.etag ||
      (requestOpts.data as {etag?: unknown})?.etag
    );
    if (
      !hasEtagInBody &&
      typeof requestOpts.body === 'string' &&
      requestOpts.body.includes('"etag"')
    ) {
      try {
        const parsed = JSON.parse(requestOpts.body);
        hasEtagInBody = Boolean(parsed && parsed.etag);
      } catch {
        hasEtagInBody = false;
      }
    }

    // Compute the final hasPrecondition flag
    const hasPrecondition = !!(
      this.retryOptions.idempotencyStrategy ===
        IdempotencyStrategy.RetryAlways ||
      requestOpts.hasPrecondition ||
      requestOpts.queryParameters?.ifGenerationMatch !== undefined ||
      requestOpts.queryParameters?.ifMetagenerationMatch !== undefined ||
      requestOpts.queryParameters?.ifSourceGenerationMatch !== undefined ||
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

    const isStreamBody =
      Boolean(multipartStream) ||
      isStreamLike(requestOpts.body) ||
      isStreamLike(requestOpts.data);
    const isBinaryBody =
      isBinaryValue(requestOpts.body) || isBinaryValue(requestOpts.data);

    const isRetryDisabled =
      this.retryOptions.autoRetry === false ||
      this.retryOptions.idempotencyStrategy === IdempotencyStrategy.RetryNever;
    const maxRetries =
      isRetryDisabled || isStreamBody
        ? 0
        : (requestOpts.maxRetries ?? this.retryOptions.maxRetries ?? 3);

    let signal = requestOpts.signal ?? undefined;
    if (multipartAbortController) {
      signal = signal
        ? AbortSignal.any([signal, multipartAbortController.signal])
        : multipartAbortController.signal;
    }

    const errorRedactor =
      requestOpts.errorRedactor !== undefined
        ? requestOpts.errorRedactor
        : isStreamBody || isBinaryBody
          ? redactStorageError
          : undefined;

    try {
      if (firstEarlyError) {
        throw firstEarlyError;
      }

      const requestPromise = this.authClient.request<T>({
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
        retryConfig: {
          retry: maxRetries,
          noResponseRetries: maxRetries,
          maxRetryDelay: this.retryOptions.maxRetryDelay,
          retryDelayMultiplier: this.retryOptions.retryDelayMultiplier,
          totalTimeout: this.retryOptions.totalTimeout,
          shouldRetry: (err: GaxiosError) =>
            !isStreamBody &&
            !isRetryDisabled &&
            !!this.retryOptions.retryableErrorFn?.(err),
        },
        ...requestOpts,
        ...(errorRedactor !== undefined ? {errorRedactor} : {}),
        ...(signal ? {signal} : {}),
        hasPrecondition, // Pass flag to Gaxios / AuthClient options
        params: requestOpts.queryParameters,
        paramsSerializer: this.#paramsSerializer,
        headers,
        url: requestUrl,
        timeout: this.timeout,
        validateStatus: (status: number): boolean => {
          const isResumable = !!(
            requestOpts.queryParameters?.uploadType === 'resumable' ||
            requestOpts.url?.toString().includes('uploadType=resumable')
          );
          return (
            (status >= 200 && status < 300) || (isResumable && status === 308)
          );
        },
      } as unknown as GaxiosOptions);

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

      const enrichedPromise = requestPromise
        .catch(err => {
          if (multipartStream && !multipartStream.destroyed) {
            multipartStream.destroy();
          }
          throw decorateError(err);
        })
        .finally(() => {
          cleanupPartListeners();
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
      if (multipartStream && !multipartStream.destroyed) {
        multipartStream.destroy();
      }
      cleanupPartListeners();
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
