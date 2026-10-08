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

import {Gaxios, GaxiosOptions} from 'gaxios';
import * as http from 'http';
import * as https from 'https';
import * as path from 'path';
import * as querystring from 'querystring';
import {PassThrough, Readable} from 'stream';
import * as url from 'url';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {getPackageJSON} from './package-json-helper.cjs';
import {Contexts} from './file';

// Done to avoid a problem with mangling of identifiers when using esModuleInterop
const fileURLToPath = url.fileURLToPath;
const isEsm = true;

export function normalize<T = {}, U = Function>(
  optionsOrCallback?: T | U,
  cb?: U
) {
  const options = (
    typeof optionsOrCallback === 'object' ? optionsOrCallback : {}
  ) as T;
  const callback = (
    typeof optionsOrCallback === 'function' ? optionsOrCallback : cb
  )! as U;
  return {options, callback};
}

/**
 * Flatten an object into an Array of arrays, [[key, value], ..].
 * Implements Object.entries() for Node.js <8
 * @internal
 */
export function objectEntries<T>(obj: {[key: string]: T}): Array<[string, T]> {
  return Object.keys(obj).map(key => [key, obj[key]] as [string, T]);
}

/**
 * Encode `str` with encodeURIComponent, plus these
 * reserved characters: `! * ' ( )`.
 *
 * See {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent| MDN: fixedEncodeURIComponent}
 *
 * @param {string} str The URI component to encode.
 * @return {string} The encoded string.
 */
export function fixedEncodeURIComponent(str: string): string {
  return encodeURIComponent(str).replace(
    /[!'()*]/g,
    c => '%' + c.charCodeAt(0).toString(16).toUpperCase()
  );
}

/**
 * URI encode `uri` for generating signed URLs, using fixedEncodeURIComponent.
 *
 * Encode every byte except `A-Z a-Z 0-9 ~ - . _`.
 *
 * @param {string} uri The URI to encode.
 * @param [boolean=false] encodeSlash If `true`, the "/" character is not encoded.
 * @return {string} The encoded string.
 */
export function encodeURI(uri: string, encodeSlash: boolean): string {
  // Split the string by `/`, and conditionally rejoin them with either
  // %2F if encodeSlash is `true`, or '/' if `false`.
  return uri
    .split('/')
    .map(fixedEncodeURIComponent)
    .join(encodeSlash ? '%2F' : '/');
}

/**
 * Serialize an object to a URL query string using util.encodeURI(uri, true).
 * @param {string} url The object to serialize.
 * @return {string} Serialized string.
 */
export function qsStringify(qs: querystring.ParsedUrlQueryInput): string {
  return querystring.stringify(qs, '&', '=', {
    encodeURIComponent: (component: string) => encodeURI(component, true),
  });
}

export function objectKeyToLowercase<T>(object: {[key: string]: T}) {
  const newObj: {[key: string]: T} = {};
  for (let key of Object.keys(object)) {
    const value = object[key];
    key = key.toLowerCase();
    newObj[key] = value;
  }
  return newObj;
}

/**
 * JSON encode str, with unicode \u+ representation.
 * @param {object} obj The object to encode.
 * @return {string} Serialized string.
 */
export function unicodeJSONStringify(obj: object) {
  return JSON.stringify(obj).replace(
    /[\u0080-\uFFFF]/g,
    (char: string) =>
      '\\u' + ('0000' + char.charCodeAt(0).toString(16)).slice(-4)
  );
}

/**
 * Converts the given objects keys to snake_case
 * @param {object} obj object to convert keys to snake case.
 * @returns {object} object with keys converted to snake case.
 */
export function convertObjKeysToSnakeCase(obj: object): object {
  if (obj instanceof Date || obj instanceof RegExp) {
    return obj;
  }
  if (Array.isArray(obj)) {
    return obj.map(convertObjKeysToSnakeCase);
  }
  if (obj instanceof Object) {
    return Object.keys(obj).reduce((acc, cur) => {
      const s =
        cur[0].toLocaleLowerCase() +
        cur.slice(1).replace(/([A-Z]+)/g, (match, p1) => {
          return `_${p1.toLowerCase()}`;
        });

      acc[s] = convertObjKeysToSnakeCase(obj[cur as keyof Object]);
      return acc;
    }, Object());
  }

  return obj;
}

/**
 * Formats the provided date object as a UTC ISO string.
 * @param {Date} dateTimeToFormat date object to be formatted.
 * @param {boolean} includeTime flag to include hours, minutes, seconds in output.
 * @param {string} dateDelimiter delimiter between date components.
 * @param {string} timeDelimiter delimiter between time components.
 * @returns {string} UTC ISO format of provided date object.
 */
export function formatAsUTCISO(
  dateTimeToFormat: Date,
  includeTime = false,
  dateDelimiter = '',
  timeDelimiter = ''
): string {
  const year = dateTimeToFormat.getUTCFullYear();
  const month = dateTimeToFormat.getUTCMonth() + 1;
  const day = dateTimeToFormat.getUTCDate();
  const hour = dateTimeToFormat.getUTCHours();
  const minute = dateTimeToFormat.getUTCMinutes();
  const second = dateTimeToFormat.getUTCSeconds();

  let resultString = `${year.toString().padStart(4, '0')}${dateDelimiter}${month
    .toString()
    .padStart(2, '0')}${dateDelimiter}${day.toString().padStart(2, '0')}`;
  if (includeTime) {
    resultString = `${resultString}T${hour
      .toString()
      .padStart(2, '0')}${timeDelimiter}${minute
      .toString()
      .padStart(2, '0')}${timeDelimiter}${second.toString().padStart(2, '0')}Z`;
  }

  return resultString;
}

/**
 * Examines the runtime environment and returns the appropriate tracking string.
 * @returns {string} metrics tracking string based on the current runtime environment.
 */
export function getRuntimeTrackingString(): string {
  if (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    globalThis.Deno &&
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    globalThis.Deno.version &&
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    globalThis.Deno.version.deno
  ) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return `gl-deno/${globalThis.Deno.version.deno}`;
  } else {
    return `gl-node/${process.versions.node}`;
  }
}

/**
 * Looks at package.json and creates the user-agent string to be applied to request headers.
 * @returns {string} user agent string.
 */
export function getUserAgentString(): string {
  const pkg = getPackageJSON();
  const hyphenatedPackageName = pkg.name
    .replace('@google-cloud', 'gcloud-node') // For legacy purposes.
    .replace('/', '-'); // For UA spec-compliance purposes.

  return hyphenatedPackageName + '/' + pkg.version;
}

export function getDirName() {
  let dirToUse = '';
  try {
    dirToUse = __dirname;
  } catch (e) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    dirToUse = path.dirname(fileURLToPath(import.meta.url));
  }

  return dirToUse;
}

export function getModuleFormat() {
  return isEsm ? 'ESM' : 'CJS';
}

export class PassThroughShim extends PassThrough {
  private shouldEmitReading = true;
  private shouldEmitWriting = true;

  _read(size: number): void {
    if (this.shouldEmitReading) {
      this.emit('reading');
      this.shouldEmitReading = false;
    }
    super._read(size);
  }

  _write(
    chunk: never,
    encoding: BufferEncoding,
    callback: (error?: Error | null | undefined) => void
  ): void {
    if (this.shouldEmitWriting) {
      this.emit('writing');
      this.shouldEmitWriting = false;
    }
    // Per the nodejs documentation, callback must be invoked on the next tick
    process.nextTick(() => {
      super._write(chunk, encoding, callback);
    });
  }

  _final(callback: (error?: Error | null | undefined) => void): void {
    // If the stream is empty (i.e. empty file) final will be invoked before _read / _write
    // and we should still emit the proper events.
    if (this.shouldEmitReading) {
      this.emit('reading');
      this.shouldEmitReading = false;
    }
    if (this.shouldEmitWriting) {
      this.emit('writing');
      this.shouldEmitWriting = false;
    }
    callback(null);
  }
}

/**
 * Validates Object Contexts for forbidden characters.
 * Double quotes (") are forbidden in context keys and values as they
 * interfere with GCS filter string syntax.
 *
 * @param {Contexts} [contexts] The contexts object to validate.
 * @returns {void} Throws an error if validation fails.
 */
export function validateContexts(contexts?: Contexts): void {
  const custom = contexts?.custom;
  if (!custom) return;
  for (const [key, context] of Object.entries(custom)) {
    if (key.includes('"')) {
      throw new Error(
        `Invalid context key "${key}": Forbidden character (") detected.`
      );
    }
    if (context?.value && context.value.includes('"')) {
      throw new Error(
        `Invalid context value for key "${key}": Forbidden character (") detected.`
      );
    }
  }
}

/**
 * Helper to validate contexts and route errors to either a callback or a Promise.
 * @param {Contexts} [contexts] The contexts to validate.
 * @param {Function} [callback] The optional user-provided callback.
 */
export function handleContextValidation(
  contexts?: Contexts,
  callback?: Function
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<any> | void {
  try {
    validateContexts(contexts);
  } catch (err) {
    if (callback) {
      return callback(err as Error);
    }
    return Promise.reject(err);
  }
}

export interface Mime {
  getType(path: string): string | null;
  getExtension?(mime: string): string | null;
  define?(typeMap: {[key: string]: string[]}, force?: boolean): void;
}

export type Limit = import('p-limit').Limit;
export type PLimit = (concurrency: number) => Limit;

let mimePromise: Promise<Mime> | undefined;

/**
 * Lazily loads and returns the `mime` module instance.
 * Caches the resolved module so dynamic import is evaluated only once.
 *
 * @internal
 */
export function getMime(): Promise<Mime> {
  if (!mimePromise) {
    mimePromise = import('mime')
      .then(mod => {
        const modObj = mod as unknown as {default?: Mime} & Partial<Mime>;
        const mime: Mime =
          modObj.default && typeof modObj.default.getType === 'function'
            ? modObj.default
            : (modObj as Mime);
        return mime;
      })
      .catch(err => {
        mimePromise = undefined;
        throw err;
      });
  }
  return mimePromise;
}

let pLimitPromise: Promise<PLimit> | undefined;

/**
 * Lazily loads and returns the `p-limit` limiter function.
 * Caches the resolved module so dynamic import is evaluated only once.
 *
 * @internal
 */
export function getPLimit(): Promise<PLimit> {
  if (!pLimitPromise) {
    pLimitPromise = import('p-limit')
      .then(mod => {
        const modObj = mod as unknown as {default?: PLimit};
        const pLimit: PLimit =
          typeof mod === 'function'
            ? (mod as PLimit)
            : modObj.default || (modObj as PLimit);
        return pLimit;
      })
      .catch(err => {
        pLimitPromise = undefined;
        throw err;
      });
  }
  return pLimitPromise;
}

const initialGlobalFetch = globalThis.fetch;

/**
 * Ensures that Gaxios v7 uses a Bun-compatible fetch implementation when
 * running under the Bun runtime. Can be removed once upgraded to Gaxios v8+.
 *
 * @internal
 */
export function ensureBunGaxiosFetch(GaxiosClass: typeof Gaxios): void {
  if (
    (globalThis as {window?: unknown}).window ||
    !('Bun' in globalThis) ||
    typeof GaxiosClass !== 'function'
  ) {
    return;
  }
  const ctor = GaxiosClass as typeof Gaxios & {
    __bunPatched?: boolean;
    __bunStoragePatched?: boolean;
    __bunOrigAdapter?: (this: Gaxios, config: GaxiosOptions) => unknown;
  };
  if (ctor.__bunStoragePatched) {
    return;
  }
  const proto = GaxiosClass.prototype as unknown as {
    _defaultAdapter?: (this: Gaxios, config: GaxiosOptions) => unknown;
  };
  const origAdapter = ctor.__bunOrigAdapter || proto._defaultAdapter;
  if (typeof origAdapter !== 'function') {
    return;
  }
  ctor.__bunOrigAdapter = origAdapter;
  ctor.__bunPatched = true;
  ctor.__bunStoragePatched = true;

  const wrapResponseBody = (res: Response): Response => {
    if (
      res?.body &&
      typeof Readable.fromWeb === 'function' &&
      !(res.body instanceof Readable)
    ) {
      let nodeStream: Readable | undefined;
      const rawBody =
        res.body as unknown as import('stream/web').ReadableStream;
      const origText = res.text.bind(res);
      const origJson = res.json.bind(res);
      const origArrayBuffer = res.arrayBuffer.bind(res);
      const origBlob = res.blob.bind(res);
      const readBuffer = async () => {
        const chunks: Buffer[] = [];
        for await (const chunk of nodeStream!) {
          chunks.push(
            Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk as Uint8Array)
          );
        }
        return Buffer.concat(chunks);
      };
      Object.defineProperty(res, 'body', {
        get() {
          nodeStream ||= Readable.fromWeb(rawBody);
          return nodeStream;
        },
        configurable: true,
        enumerable: true,
      });
      Object.assign(res, {
        text: async () => {
          if (!nodeStream) return origText();
          return (await readBuffer()).toString('utf8');
        },
        json: async () => {
          if (!nodeStream) return origJson();
          return JSON.parse(await res.text());
        },
        arrayBuffer: async () => {
          if (!nodeStream) return origArrayBuffer();
          const buf = await readBuffer();
          return buf.buffer.slice(
            buf.byteOffset,
            buf.byteOffset + buf.byteLength
          );
        },
        blob: async () => {
          if (!nodeStream) return origBlob();
          const buf = await readBuffer();
          const contentType = res.headers?.get?.('content-type') ?? '';
          return new Blob([buf], contentType ? {type: contentType} : undefined);
        },
      });
    }
    return res;
  };

  const normalizeFetchError = (err: unknown, signal?: AbortSignal | null) => {
    const errorObj = err as {
      message?: string;
      name?: string;
      code?: string;
    };
    const msg = String(errorObj?.message || err || '');
    if (errorObj?.name === 'TimeoutError' || /timed out/i.test(msg)) {
      throw Object.assign(
        new Error('The operation was aborted due to timeout'),
        {name: 'AbortError', type: 'aborted', code: 'ETIMEDOUT'}
      );
    }
    if (
      errorObj?.name === 'AbortError' ||
      /aborted/i.test(msg) ||
      signal?.aborted
    ) {
      throw Object.assign(new Error('The user aborted a request.'), {
        name: 'AbortError',
        type: 'aborted',
      });
    }
    if (!(err instanceof Error) && err && typeof err === 'object') {
      throw Object.assign(
        new Error(errorObj.message || errorObj.code || 'Error'),
        err
      );
    }
    throw err;
  };

  let bunFetchImpl: typeof fetch | undefined;
  const getBunFetch = (): typeof fetch => {
    if (bunFetchImpl) {
      return bunFetchImpl;
    }
    bunFetchImpl = async (input, init) => {
      let fetchInit = init as
        | (Omit<RequestInit, 'body'> & {
            body?: unknown;
            agent?:
              | http.Agent
              | https.Agent
              | boolean
              | ((parsedUrl: URL) => http.Agent | https.Agent)
              | {proxy?: URL};
            proxy?: string;
            cert?: string;
            key?: string;
            tls?: {cert: string; key: string};
            timeout?: number;
            fetchImplementation?: unknown;
          })
        | undefined;

      const urlStr =
        typeof input === 'string'
          ? input
          : input instanceof URL
            ? input.href
            : (input as {url?: string})?.url || String(input);
      let parsedUrl: URL | undefined;
      try {
        parsedUrl = new URL(urlStr);
      } catch {
        parsedUrl = undefined;
      }

      if (
        http.ClientRequest.name === 'OverriddenClientRequest' &&
        globalThis.fetch === initialGlobalFetch &&
        parsedUrl &&
        (parsedUrl.protocol === 'http:' || parsedUrl.protocol === 'https:')
      ) {
        const isHttps = parsedUrl.protocol === 'https:';
        const transport = isHttps ? https : http;
        const headers: Record<string, string> = {};
        if (fetchInit?.headers) {
          if (
            typeof Headers !== 'undefined' &&
            fetchInit.headers instanceof Headers
          ) {
            for (const [k, v] of fetchInit.headers.entries()) {
              headers[k] = v;
            }
          } else if (Array.isArray(fetchInit.headers)) {
            for (const [k, v] of fetchInit.headers) {
              headers[k] = v;
            }
          } else if (
            typeof (
              fetchInit.headers as {entries?: () => Iterable<[string, string]>}
            ).entries === 'function'
          ) {
            for (const [k, v] of (
              fetchInit.headers as {entries: () => Iterable<[string, string]>}
            ).entries()) {
              headers[k] = v;
            }
          } else {
            for (const [k, v] of Object.entries(fetchInit.headers)) {
              if (v !== undefined) headers[k] = String(v);
            }
          }
        }
        const resolvedAgent =
          typeof fetchInit?.agent === 'function'
            ? fetchInit.agent(parsedUrl)
            : (fetchInit?.agent as
                http.Agent | https.Agent | boolean | undefined);
        const reqOptions: https.RequestOptions & {proto?: string} = {
          protocol: parsedUrl.protocol,
          proto: isHttps ? 'https' : 'http',
          method: fetchInit?.method || 'GET',
          hostname: parsedUrl.hostname,
          port: parsedUrl.port || (isHttps ? 443 : 80),
          path: (parsedUrl.pathname || '/') + parsedUrl.search,
          headers,
          agent: resolvedAgent,
          cert: fetchInit?.cert,
          key: fetchInit?.key,
        };

        try {
          const res = await new Promise<Response>((resolve, reject) => {
            let activePassThrough: PassThrough | undefined;
            const req = transport.request(reqOptions, incoming => {
              const passThrough = new PassThrough();
              activePassThrough = passThrough;
              incoming.on('error', err => passThrough.destroy(err));
              incoming.pipe(passThrough);

              const fetchHeaders = new Headers();
              for (const [k, v] of Object.entries(incoming.headers)) {
                if (Array.isArray(v)) {
                  v.forEach(val => fetchHeaders.append(k, val));
                } else if (v !== undefined) {
                  fetchHeaders.set(k, v);
                }
              }

              const status = incoming.statusCode || 200;
              const isNullBodyStatus =
                status === 204 || status === 205 || status === 304;
              const webStream = isNullBodyStatus
                ? null
                : (Readable.toWeb(
                    passThrough
                  ) as unknown as ReadableStream<Uint8Array>);
              const response = new Response(webStream, {
                status,
                statusText: incoming.statusMessage || '',
                headers: fetchHeaders,
              });
              Object.defineProperty(response, 'url', {
                value: urlStr,
                configurable: true,
              });
              resolve(wrapResponseBody(response));
            });

            const failReq = (err: Error) => {
              activePassThrough?.destroy(err);
              req.destroy();
              reject(err);
            };

            req.on('error', err => {
              activePassThrough?.destroy(err);
              reject(err);
            });

            if (fetchInit?.signal) {
              if (fetchInit.signal.aborted) {
                const abortErr = Object.assign(
                  new Error('The user aborted a request.'),
                  {name: 'AbortError'}
                );
                return failReq(abortErr);
              }
              const signal = fetchInit.signal;
              const onAbort = () => {
                failReq(
                  Object.assign(new Error('The user aborted a request.'), {
                    name: 'AbortError',
                  })
                );
              };
              signal.addEventListener('abort', onAbort, {once: true});
              req.on('close', () => {
                signal.removeEventListener('abort', onAbort);
              });
            }

            if (fetchInit?.timeout) {
              req.setTimeout(fetchInit.timeout, () => {
                failReq(
                  Object.assign(
                    new Error('The operation was aborted due to timeout'),
                    {name: 'AbortError', type: 'aborted', code: 'ETIMEDOUT'}
                  )
                );
              });
            }

            const body = fetchInit?.body;
            if (body) {
              if (
                typeof body === 'object' &&
                typeof (body as Readable).pipe === 'function'
              ) {
                (body as Readable).on('error', failReq);
                (body as Readable).pipe(req);
              } else if (
                typeof body === 'string' ||
                Buffer.isBuffer(body) ||
                body instanceof Uint8Array ||
                body instanceof ArrayBuffer ||
                ArrayBuffer.isView(body)
              ) {
                const chunk =
                  body instanceof ArrayBuffer
                    ? Buffer.from(body)
                    : ArrayBuffer.isView(body)
                      ? Buffer.from(
                          body.buffer,
                          body.byteOffset,
                          body.byteLength
                        )
                      : body;
                req.write(chunk);
                req.end();
              } else if (
                typeof ReadableStream !== 'undefined' &&
                body instanceof ReadableStream
              ) {
                const bodyStream = Readable.fromWeb(
                  body as unknown as import('stream/web').ReadableStream
                );
                bodyStream.on('error', failReq);
                bodyStream.pipe(req);
              } else if (body instanceof URLSearchParams) {
                req.write(body.toString());
                req.end();
              } else {
                req.end();
              }
            } else {
              req.end();
            }
          });
          return res;
        } catch (err) {
          return normalizeFetchError(err, fetchInit?.signal);
        }
      }

      if (fetchInit) {
        fetchInit = {...fetchInit};
        delete fetchInit.fetchImplementation;
        const agentWithProxy = fetchInit.agent as {proxy?: URL} | undefined;
        if (agentWithProxy?.proxy) {
          fetchInit.proxy = agentWithProxy.proxy.toString();
        } else {
          delete fetchInit.proxy;
        }
        if (fetchInit.cert && fetchInit.key) {
          fetchInit.tls = {cert: fetchInit.cert, key: fetchInit.key};
        }
        if (
          fetchInit.body &&
          typeof fetchInit.body === 'object' &&
          typeof (fetchInit.body as Readable).pipe === 'function' &&
          typeof Readable.toWeb === 'function' &&
          (typeof ReadableStream === 'undefined' ||
            !(fetchInit.body instanceof ReadableStream))
        ) {
          let stream: Readable;
          if (
            fetchInit.body instanceof Readable &&
            !fetchInit.body.readableObjectMode
          ) {
            stream = fetchInit.body;
          } else {
            const passThrough = new PassThrough();
            const src = fetchInit.body as Readable;
            if (typeof src.on === 'function') {
              src.on('error', err => passThrough.destroy(err));
            }
            stream = src.pipe(passThrough);
          }
          fetchInit.body = Readable.toWeb(
            stream
          ) as unknown as RequestInit['body'];
        }
      }

      try {
        const res = await globalThis.fetch(
          input,
          fetchInit as RequestInit | undefined
        );
        return wrapResponseBody(res);
      } catch (err) {
        return normalizeFetchError(err, init?.signal);
      }
    };
    return bunFetchImpl;
  };

  proto._defaultAdapter = function (this: Gaxios, config: GaxiosOptions) {
    if (
      'Bun' in globalThis &&
      config &&
      !config.fetchImplementation &&
      !this.defaults?.fetchImplementation &&
      !(globalThis as {window?: unknown}).window
    ) {
      config.fetchImplementation = getBunFetch();
      try {
        return origAdapter.call(this, config);
      } finally {
        delete config.fetchImplementation;
      }
    }
    return origAdapter.call(this, config);
  };
}

ensureBunGaxiosFetch(Gaxios);
