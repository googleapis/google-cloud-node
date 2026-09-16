/**
 * Copyright 2018 Google LLC
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
import {type GaxiosOptions, type GaxiosResponse, request} from 'gaxios';
import jsonBigint = require('json-bigint');
import {detectGCPResidency} from './gcp-residency';
import * as logger from 'google-logging-utils';

export const BASE_PATH = '/computeMetadata/v1';
export const HOST_ADDRESS = 'http://169.254.169.254';
export const SECONDARY_HOST_ADDRESS = 'http://metadata.google.internal.';

export const HEADER_NAME = 'Metadata-Flavor';
export const HEADER_VALUE = 'Google';
export const HEADERS = Object.freeze({[HEADER_NAME]: HEADER_VALUE});

const log = logger.log('gcp-metadata');

/**
 * Metadata server detection override options.
 *
 * Available via `process.env.METADATA_SERVER_DETECTION`.
 */
export const METADATA_SERVER_DETECTION = Object.freeze({
  'assume-present':
    "don't try to ping the metadata server, but assume it's present",
  none: "don't try to ping the metadata server, but don't try to use it either",
  'bios-only':
    "treat the result of a BIOS probe as canonical (don't fall back to pinging)",
  'ping-only': 'skip the BIOS probe, and go straight to pinging',
});

// TypeScript does not have `HeadersInit` outside of DOM types yet
type HeadersInit = ConstructorParameters<typeof Headers>[0];

export interface Options {
  params?: {[index: string]: string};
  property?: string;
  headers?: HeadersInit;
}

export interface MetadataAccessor {
  /**
   *
   * @example
   *
   * // equivalent to `project('project-id')`;
   * const metadataKey = 'project/project-id';
   */
  metadataKey: string;
  params?: Options['params'];
  headers?: Options['headers'];
  noResponseRetries?: number;
  fastFail?: boolean;
}

export type BulkResults<T extends readonly MetadataAccessor[]> = {
  [key in T[number]['metadataKey']]: ReturnType<JSON['parse']>;
};

/**
 * Returns the base URL while taking into account the GCE_METADATA_HOST
 * environment variable if it exists.
 *
 * @returns The base URL, e.g., http://169.254.169.254/computeMetadata/v1.
 */
function getBaseUrl(baseUrl?: string) {
  if (!baseUrl) {
    baseUrl =
      process.env.GCE_METADATA_IP ||
      process.env.GCE_METADATA_HOST ||
      HOST_ADDRESS;
  }
  // If no scheme is provided default to HTTP:
  if (!/^https?:\/\//.test(baseUrl)) {
    baseUrl = `http://${baseUrl}`;
  }
  return new URL(BASE_PATH, baseUrl).href;
}

// Accepts an options object passed from the user to the API. In previous
// versions of the API, it referred to a `Request` or an `Axios` request
// options object.  Now it refers to an object with very limited property
// names. This is here to help ensure users don't pass invalid options when
// they  upgrade from 0.4 to 0.5 to 0.8.
function validate(options: Options) {
  Object.keys(options).forEach(key => {
    switch (key) {
      case 'params':
      case 'property':
      case 'headers':
        break;
      case 'qs':
        throw new Error(
          "'qs' is not a valid configuration option. Please use 'params' instead.",
        );
      default:
        throw new Error(`'${key}' is not a valid configuration option.`);
    }
  });
}

async function metadataAccessor<T>(
  type: string,
  options?: string | Options,
  noResponseRetries?: number,
  fastFail?: boolean,
): Promise<T>;
async function metadataAccessor<T>(metadata: MetadataAccessor): Promise<T>;
async function metadataAccessor<T>(
  type: MetadataAccessor | string,
  options: string | Options = {},
  noResponseRetries = 3,
  fastFail = false,
): Promise<T> {
  const headers = new Headers(HEADERS);
  let metadataKey = '';
  let params: {} = {};

  if (typeof type === 'object') {
    const metadataAccessor: MetadataAccessor = type;

    new Headers(metadataAccessor.headers).forEach((value, key) =>
      headers.set(key, value),
    );

    metadataKey = metadataAccessor.metadataKey;
    params = metadataAccessor.params || params;
    noResponseRetries = metadataAccessor.noResponseRetries || noResponseRetries;
    fastFail = metadataAccessor.fastFail || fastFail;
  } else {
    metadataKey = type;
  }

  if (typeof options === 'string') {
    metadataKey += `/${options}`;
  } else {
    validate(options);

    if (options.property) {
      metadataKey += `/${options.property}`;
    }

    new Headers(options.headers).forEach((value, key) =>
      headers.set(key, value),
    );
    params = options.params || params;
  }

  const requestMethod = fastFail ? fastFailMetadataRequest : request;
  const req: GaxiosOptions = {
    url: `${getBaseUrl()}/${metadataKey}`,
    headers,
    retryConfig: {noResponseRetries},
    params,
    responseType: 'text',
    timeout: requestTimeout(),
  } as GaxiosOptions;
  log.info('instance request %j', req);

  const res = await requestMethod<T>(req);
  log.info('instance metadata is %s', res.data);

  const metadataFlavor = res.headers.get(HEADER_NAME);
  if (metadataFlavor !== HEADER_VALUE) {
    throw new RangeError(
      `Invalid response from metadata service: incorrect ${HEADER_NAME} header. Expected '${HEADER_VALUE}', got ${metadataFlavor ? `'${metadataFlavor}'` : 'no header'}`,
    );
  }

  if (typeof res.data === 'string') {
    try {
      return jsonBigint.parse(res.data);
    } catch {
      /* ignore */
    }
  }

  return res.data;
}

async function fastFailMetadataRequest<T>(
  options: GaxiosOptions,
): Promise<GaxiosResponse> {
  const secondaryOptions = {
    ...options,
    url: options.url
      ?.toString()
      .replace(getBaseUrl(), getBaseUrl(SECONDARY_HOST_ADDRESS)),
  };
  // We race a connection between DNS/IP to metadata server. There are a couple
  // reasons for this:
  //
  // 1. the DNS is slow in some GCP environments; by checking both, we might
  //    detect the runtime environment significantly faster.
  // 2. we can't just check the IP, which is tarpitted and slow to respond
  //    on a user's local machine.
  //
  // Returns first resolved promise or if all promises get rejected we return an AggregateError.
  //
  // Note, however, if a failure happens prior to a success, a rejection should
  // occur, this is for folks running locally.
  //
  const r1: Promise<GaxiosResponse> = request<T>(options);
  const r2: Promise<GaxiosResponse> = request<T>(secondaryOptions);
  return Promise.any([r1, r2]);
}

/**
 * Obtain metadata for the current GCE instance.
 *
 * @see {@link https://cloud.google.com/compute/docs/metadata/predefined-metadata-keys}
 *
 * @example
 * ```
 * const serviceAccount: {} = await instance('service-accounts/');
 * const serviceAccountEmail: string = await instance('service-accounts/default/email');
 * ```
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function instance<T = any>(options?: string | Options) {
  return metadataAccessor<T>('instance', options);
}

/**
 * Obtain metadata for the current GCP project.
 *
 * @see {@link https://cloud.google.com/compute/docs/metadata/predefined-metadata-keys}
 *
 * @example
 * ```
 * const projectId: string = await project('project-id');
 * const numericProjectId: number = await project('numeric-project-id');
 * ```
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function project<T = any>(options?: string | Options) {
  return metadataAccessor<T>('project', options);
}

/**
 * Obtain metadata for the current universe.
 *
 * @see {@link https://cloud.google.com/compute/docs/metadata/predefined-metadata-keys}
 *
 * @example
 * ```
 * const universeDomain: string = await universe('universe-domain');
 * ```
 */
export function universe<T>(options?: string | Options) {
  return metadataAccessor<T>('universe', options);
}

/**
 * Retrieve metadata items in parallel.
 *
 * @see {@link https://cloud.google.com/compute/docs/metadata/predefined-metadata-keys}
 *
 * @example
 * ```
 * const data = await bulk([
 *   {
 *     metadataKey: 'instance',
 *   },
 *   {
 *     metadataKey: 'project/project-id',
 *   },
 * ] as const);
 *
 * // data.instance;
 * // data['project/project-id'];
 * ```
 *
 * @param properties The metadata properties to retrieve
 * @returns The metadata in `metadatakey:value` format
 */
export async function bulk<
  T extends readonly Readonly<MetadataAccessor>[],
  R extends BulkResults<T> = BulkResults<T>,
>(properties: T): Promise<R> {
  const r = {} as BulkResults<T>;

  await Promise.all(
    properties.map(item => {
      return (async () => {
        const res = await metadataAccessor(item);
        const key = item.metadataKey as keyof typeof r;

        r[key] = res;
      })();
    }),
  );

  return r as R;
}

/*
 * How many times should we retry detecting GCP environment.
 */
function detectGCPAvailableRetries(): number {
  return process.env.DETECT_GCP_RETRIES
    ? Number(process.env.DETECT_GCP_RETRIES)
    : 0;
}

let cachedIsAvailableResponse: Promise<boolean> | undefined;

interface ErrorWithDetails {
  readonly name?: string;
  readonly message?: string;
  readonly code?: string | number;
  readonly type?: string;
  readonly response?: {
    readonly status?: number;
  };
  readonly errors?: readonly unknown[];
  readonly cause?: unknown;
  readonly error?: unknown;
}

const EXPECTED_NETWORK_ERROR_CODES: ReadonlySet<string> = new Set([
  'EHOSTDOWN',
  'EHOSTUNREACH',
  'ENETUNREACH',
  'ENOENT',
  'ENOTFOUND',
  'ECONNREFUSED',
]);

const TIMEOUT_NAMES_AND_CODES: ReadonlySet<string | number> = new Set([
  'AbortError',
  'TimeoutError',
]);

const TIMEOUT_TYPES: ReadonlySet<string> = new Set([
  'aborted',
  'request-timeout',
]);

const MAX_ERROR_DEPTH = 20;

function isErrorWithDetails(val: unknown): val is ErrorWithDetails {
  return typeof val === 'object' && val !== null;
}

/**
 * Recursively extracts and normalizes POSIX/network error codes from potentially
 * nested Error objects (`AggregateError.errors` from `Promise.any`, `.cause`, `.error`).
 * Guards against circular references and deep recursion.
 */
function getErrorCodes(
  err: unknown,
  visited = new Set<unknown>(),
  depth = 0,
): string[] {
  if (!isErrorWithDetails(err) || visited.has(err) || depth > MAX_ERROR_DEPTH) {
    return ['UNKNOWN'];
  }
  visited.add(err);

  if (err.name === 'AggregateError' && Array.isArray(err.errors)) {
    if (err.errors.length === 0) {
      return ['UNKNOWN'];
    }
    return err.errors.flatMap(subErr =>
      getErrorCodes(subErr, visited, depth + 1),
    );
  }

  if (
    (err.name !== undefined && TIMEOUT_NAMES_AND_CODES.has(err.name)) ||
    (err.code !== undefined && TIMEOUT_NAMES_AND_CODES.has(err.code)) ||
    (err.type !== undefined && TIMEOUT_TYPES.has(err.type))
  ) {
    return ['ETIMEDOUT'];
  }

  if (
    (typeof err.code === 'string' || typeof err.code === 'number') &&
    err.code !== ''
  ) {
    return [String(err.code)];
  }

  const nested = err.cause ?? err.error;
  if (nested !== undefined) {
    return getErrorCodes(nested, visited, depth + 1);
  }

  return ['UNKNOWN'];
}

/**
 * Determine if the metadata server is currently available.
 */
export async function isAvailable() {
  if (process.env.METADATA_SERVER_DETECTION) {
    const value =
      process.env.METADATA_SERVER_DETECTION.trim().toLocaleLowerCase();

    if (!(value in METADATA_SERVER_DETECTION)) {
      throw new RangeError(
        `Unknown \`METADATA_SERVER_DETECTION\` env variable. Got \`${value}\`, but it should be \`${Object.keys(
          METADATA_SERVER_DETECTION,
        ).join('`, `')}\`, or unset`,
      );
    }

    switch (value as keyof typeof METADATA_SERVER_DETECTION) {
      case 'assume-present':
        return true;
      case 'none':
        return false;
      case 'bios-only':
        return getGCPResidency();
      case 'ping-only':
      // continue, we want to ping the server
    }
  }

  try {
    // If a user is instantiating several GCP libraries at the same time,
    // this may result in multiple calls to isAvailable(), to detect the
    // runtime environment. We use the same promise for each of these calls
    // to reduce the network load.
    if (cachedIsAvailableResponse === undefined) {
      cachedIsAvailableResponse = (async () => {
        try {
          await metadataAccessor(
            'instance',
            undefined,
            detectGCPAvailableRetries(),
            // If the default HOST_ADDRESS has been overridden, we should not
            // make an effort to try SECONDARY_HOST_ADDRESS (as we are likely in
            // a non-GCP environment):
            !(process.env.GCE_METADATA_IP || process.env.GCE_METADATA_HOST),
          );
          return true;
        } catch (e: unknown) {
          if (process.env.DEBUG_AUTH) {
            console.info(e);
          }

          if (!isErrorWithDetails(e)) {
            process.emitWarning(
              `received unexpected error = ${String(e)} code = UNKNOWN`,
              'MetadataLookupWarning',
            );
            return false;
          }

          if (e.type === 'request-timeout' || e.response?.status === 404) {
            // If running in a GCP environment, metadata endpoint should return
            // within ms.
            return false;
          }

          const codes = getErrorCodes(e);
          const isExpected =
            codes.length > 0 &&
            codes.every(code => EXPECTED_NETWORK_ERROR_CODES.has(code));

          if (!isExpected) {
            const code = [...new Set(codes)].join(', ');
            process.emitWarning(
              `received unexpected error = ${e.message} code = ${code}`,
              'MetadataLookupWarning',
            );
          }

          // Failure to resolve the metadata service means that it is not available.
          return false;
        }
      })();
    }
    return await cachedIsAvailableResponse;
  } catch (e) {
    // This block should technically not be reached because the async IIFE catches its own errors
    return false;
  }
}

/**
 * reset the memoized isAvailable() lookup.
 */
export function resetIsAvailableCache() {
  cachedIsAvailableResponse = undefined;
}

/**
 * A cache for the detected GCP Residency.
 */
export let gcpResidencyCache: boolean | null = null;

/**
 * Detects GCP Residency.
 * Caches results to reduce costs for subsequent calls.
 *
 * @see setGCPResidency for setting
 */
export function getGCPResidency(): boolean {
  if (gcpResidencyCache === null) {
    setGCPResidency();
  }

  return gcpResidencyCache!;
}

/**
 * Sets the detected GCP Residency.
 * Useful for forcing metadata server detection behavior.
 *
 * Set `null` to autodetect the environment (default behavior).
 * @see getGCPResidency for getting
 */
export function setGCPResidency(value: boolean | null = null) {
  gcpResidencyCache = value !== null ? value : detectGCPResidency();
}

/**
 * Obtain the timeout for requests to the metadata server.
 *
 * In certain environments and conditions requests can take longer than
 * the default timeout to complete. This function will determine the
 * appropriate timeout based on the environment.
 *
 * @returns {number} a request timeout duration in milliseconds.
 */
export function requestTimeout(): number {
  return getGCPResidency() ? 0 : 3000;
}

export * from './gcp-residency';
