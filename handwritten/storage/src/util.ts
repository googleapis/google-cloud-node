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

import * as path from 'path';
import * as querystring from 'querystring';
import {PassThrough} from 'stream';
import * as url from 'url';
import {
  Compute,
  DEFAULT_UNIVERSE,
  GoogleAuth,
  PassThroughClient,
} from 'google-auth-library';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {getPackageJSON} from './package-json-helper.cjs';
import {Contexts} from './file.js';

// Done to avoid a problem with mangling of identifiers when using esModuleInterop
const fileURLToPath = url.fileURLToPath;
const isEsm = true;

export function normalize<T = {}, U = Function>(
  optionsOrCallback?: T | U,
  cb?: U,
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
    c => '%' + c.charCodeAt(0).toString(16).toUpperCase(),
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
      '\\u' + ('0000' + char.charCodeAt(0).toString(16)).slice(-4),
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
  timeDelimiter = '',
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
    callback: (error?: Error | null | undefined) => void,
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
        `Invalid context key "${key}": Forbidden character (") detected.`,
      );
    }
    if (context?.value && context.value.includes('"')) {
      throw new Error(
        `Invalid context value for key "${key}": Forbidden character (") detected.`,
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
  callback?: Function,
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

interface CredentialFile {
  type?: string;
  universe_domain?: string;
  universeDomain?: string;
  source_credentials?: CredentialFile;
}

/**
 * Returns the universe domain a credential file belongs to. A file that does
 * not name one belongs to the default universe domain. Credentials given in
 * code may name it in camel case.
 *
 * @param file The parsed credential file, if one was loaded.
 */
function universeDomainOfFile(
  file?: CredentialFile | null,
): string | undefined {
  if (!file) return undefined;
  const universeDomain = file.universe_domain || file.universeDomain;
  if (universeDomain) return universeDomain;
  return file.type === 'impersonated_service_account'
    ? universeDomainOfFile(file.source_credentials)
    : DEFAULT_UNIVERSE;
}

const vmUniverseDomains = new WeakMap<object, Promise<string>>();

/**
 * Returns the universe domain a VM belongs to, as reported by its metadata
 * server. Credentials of a VM do not carry one themselves. Concurrent calls
 * share one read, and a failed read is not remembered.
 *
 * @param client The credentials of the VM.
 */
function universeDomainOfVm(client: object) {
  let universeDomain = vmUniverseDomains.get(client);
  if (!universeDomain) {
    universeDomain = new GoogleAuth()
      .getUniverseDomainFromMetadataServer()
      .catch(e => {
        vmUniverseDomains.delete(client);
        throw new Error(
          `Unable to read the universe domain from the metadata server: ${(e as Error).message}`,
        );
      });
    vmUniverseDomains.set(client, universeDomain);
  }
  return universeDomain;
}

/**
 * Verifies that the credentials of `auth` belong to `universeDomain`. An
 * absent auth object has no credentials to verify.
 *
 * @param auth The auth object used for the request.
 * @param universeDomain The universe domain the client is configured for.
 */
export async function assertUniverseDomain(
  auth: object | undefined,
  universeDomain: string,
) {
  let googleAuth = auth as Partial<GoogleAuth> | undefined;
  // An object that does not create a client is the client itself.
  let client: {universeDomain?: string} | undefined =
    (await googleAuth?.getClient?.()) ??
    (auth as {universeDomain?: string} | undefined);
  // An auth object created by another copy of the auth library is held as the
  // client of a new auth object. Its own credentials are the ones to verify.
  const nested = client as Partial<GoogleAuth> | undefined;
  if (typeof nested?.getClient === 'function' && nested !== googleAuth) {
    googleAuth = nested;
    client = await nested.getClient();
  }
  // A pass-through client sends no credentials.
  if (client instanceof PassThroughClient) return;
  const isVm =
    client instanceof Compute || client?.constructor?.name === Compute.name;
  const found = [
    universeDomainOfFile(googleAuth?.jsonContent as CredentialFile | null),
    // Credentials of a VM report the default universe domain wherever the VM
    // is, so the metadata server of the VM is asked instead. Any other client
    // reports its own, and an object that reports none has none to verify.
    isVm ? await universeDomainOfVm(client!) : client?.universeDomain,
  ].find(domain => domain && domain !== universeDomain);
  if (found) {
    throw new Error(
      `The configured universe domain (${universeDomain}) does not match the universe domain found in the credentials (${found}). ` +
        "If you haven't configured the universe domain explicitly, googleapis.com is the default.",
    );
  }
}

/**
 * Signs `data` with the credentials of `auth`, using the IAM endpoint of
 * `universeDomain` unless an `endpoint` is given.
 *
 * @param auth The auth object used to sign.
 * @param universeDomain The universe domain the client is configured for.
 * @param data The data to sign.
 * @param endpoint A custom signing endpoint.
 */
export async function signBlob(
  auth: {sign(data: string, endpoint?: string): Promise<string>},
  universeDomain: string,
  data: string,
  endpoint?: string,
) {
  await assertUniverseDomain(auth, universeDomain);
  return auth.sign(
    data,
    endpoint ||
      `https://iamcredentials.${universeDomain}/v1/projects/-/serviceAccounts/`,
  );
}
