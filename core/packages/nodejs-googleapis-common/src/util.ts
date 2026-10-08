// Copyright 2025 Google LLC
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {Gaxios, GaxiosOptions, GaxiosResponse} from 'gaxios';
import type {Readable} from 'stream';
import {GaxiosResponseWithHTTP2} from './http2';

/**
 * Ensures that Gaxios v7 uses a Bun-compatible fetch implementation when
 * running under the Bun runtime. Can be removed once upgraded to Gaxios v8+.
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
    __bunOrigAdapter?: (this: Gaxios, config: GaxiosOptions) => unknown;
  };
  if (ctor.__bunPatched) {
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

  let bunFetchImpl: typeof fetch | undefined;
  let streamMod:
    | {
        PassThrough: typeof import('stream').PassThrough;
        Readable: typeof import('stream').Readable;
      }
    | undefined;
  const getBunFetch = (): typeof fetch => {
    if (bunFetchImpl) {
      return bunFetchImpl;
    }
    bunFetchImpl = async (input, init) => {
      streamMod ||= await import('stream');
      const {PassThrough, Readable} = streamMod;

      let fetchInit = init as
        | (Omit<RequestInit, 'body'> & {
            body?: unknown;
            agent?: {proxy?: URL};
            proxy?: string;
            cert?: string;
            key?: string;
            tls?: {cert: string; key: string};
            fetchImplementation?: unknown;
          })
        | undefined;
      if (fetchInit) {
        fetchInit = {...fetchInit};
        delete fetchInit.fetchImplementation;
        if (fetchInit.agent?.proxy) {
          fetchInit.proxy = fetchInit.agent.proxy.toString();
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
            stream,
          ) as unknown as RequestInit['body'];
        }
      }

      let res: Response;
      try {
        res = await globalThis.fetch(
          input,
          fetchInit as RequestInit | undefined,
        );
      } catch (err) {
        const errorObj = err as {
          message?: string;
          name?: string;
          code?: string;
        };
        const msg = String(errorObj?.message || err || '');
        if (errorObj?.name === 'TimeoutError' || /timed out/i.test(msg)) {
          throw Object.assign(
            new Error('The operation was aborted due to timeout'),
            {name: 'AbortError', type: 'aborted', code: 'ETIMEDOUT'},
          );
        }
        if (
          errorObj?.name === 'AbortError' ||
          /aborted/i.test(msg) ||
          init?.signal?.aborted
        ) {
          throw Object.assign(new Error('The user aborted a request.'), {
            name: 'AbortError',
            type: 'aborted',
          });
        }
        if (!(err instanceof Error) && err && typeof err === 'object') {
          throw Object.assign(
            new Error(errorObj.message || errorObj.code || 'Error'),
            err,
          );
        }
        throw err;
      }
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
              Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk as Uint8Array),
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
              buf.byteOffset + buf.byteLength,
            );
          },
          blob: async () => {
            if (!nodeStream) return origBlob();
            const buf = await readBuffer();
            const contentType = res.headers?.get?.('content-type') ?? '';
            return new Blob(
              [buf],
              contentType ? {type: contentType} : undefined,
            );
          },
        });
      }
      return res;
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

// TypeScript does not have `HeadersInit` in the standard types yet
export type HeadersInit = ConstructorParameters<typeof Headers>[0];

/**
 * A utility for converting potential {@link Headers `Headers`} objects to plain headers objects.
 *
 * @param headers any compatible `HeadersInit` (`Headers`, (string, string)[], {})
 * @returns the headers in `Record<string, string>` form.
 */
export function headersToClassicHeaders<T extends Record<string, string>>(
  headers: HeadersInit,
): T {
  let classicHeaders: Record<string, string> = {};

  if (headers instanceof Headers) {
    headers.forEach((value, key) => {
      classicHeaders[key] = value;
    });
  } else if (Array.isArray(headers)) {
    for (const [key, value] of headers) {
      classicHeaders[key] = value;
    }
  } else {
    classicHeaders = headers || {};
  }

  return classicHeaders as T;
}

/**
 * marshall a GaxiosResponse into a library-friendly type.
 *
 * @param res the Gaxios Response
 * @returns the GaxiosResponse with HTTP2-ready/compatible headers
 */
export function marshallGaxiosResponse<T extends GaxiosResponse>(res?: T) {
  return Object.defineProperties(res || {}, {
    headers: {
      configurable: true,
      writable: true,
      enumerable: true,
      value: headersToClassicHeaders(res?.headers),
    },
  }) as unknown as GaxiosResponseWithHTTP2;
}
