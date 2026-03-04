// Copyright 2022 Google LLC
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

import AbortController from 'abort-controller';
import {createHash} from 'crypto';
import {
  GaxiosOptions,
  GaxiosPromise,
  GaxiosResponse,
  GaxiosError,
} from 'gaxios';
import * as gaxios from 'gaxios';
import {
  DEFAULT_UNIVERSE,
  GoogleAuth,
  GoogleAuthOptions,
} from 'google-auth-library';
import {Readable, Writable, WritableOptions} from 'stream';
import AsyncRetry from 'async-retry';
import {RetryOptions, PreconditionOptions} from './storage.js';
import * as uuid from 'uuid';
import {
  getRuntimeTrackingString,
  getModuleFormat,
  getUserAgentString,
} from './util.js';
import {GCCL_GCS_CMD_KEY} from './nodejs-common/util.js';
import {FileExceptionMessages, FileMetadata, RequestError} from './file.js';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {getPackageJSON} from './package-json-helper.cjs';
import {HashStreamValidator} from './hash-stream-validator.js';

const NOT_FOUND_STATUS_CODE = 404;
const RESUMABLE_INCOMPLETE_STATUS_CODE = 308;
const packageJson = getPackageJSON();

export const PROTOCOL_REGEX = /^(\w*):\/\//;

export interface ErrorWithCode extends Error {
  code: number;
  status?: number | string;
}

export type CreateUriCallback = (err: Error | null, uri?: string) => void;
export interface Encryption {
  key: {};
  hash: {};
}

export type PredefinedAcl =
  | 'authenticatedRead'
  | 'bucketOwnerFullControl'
  | 'bucketOwnerRead'
  | 'private'
  | 'projectPrivate'
  | 'publicRead';

export interface QueryParameters extends PreconditionOptions {
  contentEncoding?: string;
  kmsKeyName?: string;
  predefinedAcl?: PredefinedAcl;
  projection?: 'full' | 'noAcl';
  userProject?: string;
}

export interface UploadConfig extends Pick<WritableOptions, 'highWaterMark'> {
  /**
   * The API endpoint used for the request.
   * Defaults to `storage.googleapis.com`.
   *
   * **Warning**:
   * If this value does not match the current GCP universe an emulator context
   * will be assumed and authentication will be bypassed.
   */
  apiEndpoint?: string;

  /**
   * The name of the destination bucket.
   */
  bucket: string;

  /**
   * The name of the destination file.
   */
  file: string;

  /**
   * The GoogleAuthOptions passed to google-auth-library
   */
  authConfig?: GoogleAuthOptions;

  /**
   * If you want to re-use an auth client from google-auto-auth, pass an
   * instance here.
   * Defaults to GoogleAuth and gets automatically overridden if an
   * emulator context is detected.
   */
  authClient?: {
    request: <T>(
      opts: GaxiosOptions
    ) => Promise<GaxiosResponse<T>> | GaxiosPromise<T>;
  };

  /**
   * Create a separate request per chunk.
   *
   * This value is in bytes and should be a multiple of 256 KiB (2^18).
   * We recommend using at least 8 MiB for the chunk size.
   *
   * @link https://cloud.google.com/storage/docs/performing-resumable-uploads#chunked-upload
   */
  chunkSize?: number;

  /**
   * For each API request we send, you may specify custom request options that
   * we'll add onto the request. The request options follow the gaxios API:
   * https://github.com/googleapis/gaxios#request-options.
   */
  customRequestOptions?: GaxiosOptions;

  /**
   * This will cause the upload to fail if the current generation of the remote
   * object does not match the one provided here.
   */
  generation?: number;

  /**
   * Set to `true` if the upload is only a subset of the overall object to upload.
   * This can be used when planning to continue the upload an object in another
   * session.
   *
   * **Must be used with {@link UploadConfig.chunkSize} != `0`**.
   *
   * If this is a continuation of a previous upload, {@link UploadConfig.offset}
   * should be set.
   *
   * @see {@link checkUploadStatus} for checking the status of an existing upload.
   */
  isPartialUpload?: boolean;

  clientCrc32c?: string;
  clientMd5Hash?: string;
  /**
   * Enables CRC32C calculation on the client side.
   * The calculated hash will be sent in the final PUT request if `clientCrc32c` is not provided.
   */
  crc32c?: boolean;
  /**
   * Enables MD5 calculation on the client side.
   * The calculated hash will be sent in the final PUT request if `clientMd5Hash` is not provided.
   */
  md5?: boolean;

  /**
   * A customer-supplied encryption key. See
   * https://cloud.google.com/storage/docs/encryption#customer-supplied.
   */
  key?: string | Buffer;

  /**
   * Resource name of the Cloud KMS key, of the form
   * `projects/my-project/locations/global/keyRings/my-kr/cryptoKeys/my-key`,
   * that will be used to encrypt the object. Overrides the object metadata's
   * `kms_key_name` value, if any.
   */
  kmsKeyName?: string;

  /**
   * Any metadata you wish to set on the object.
   */
  metadata?: ConfigMetadata;

  /**
   * The starting byte in relation to the final uploaded object.
   * **Must be used with {@link UploadConfig.uri}**.
   *
   * If resuming an interrupted stream, do not supply this argument unless you
   * know the exact number of bytes the service has AND the provided stream's
   * first byte is a continuation from that provided offset. If resuming an
   * interrupted stream and this option has not been provided, we will treat
   * the provided upload stream as the object to upload - where the first byte
   * of the upload stream is the first byte of the object to upload; skipping
   * any bytes that are already present on the server.
   *
   * @see {@link checkUploadStatus} for checking the status of an existing upload.
   * @see {@link https://cloud.google.com/storage/docs/json_api/v1/how-tos/resumable-upload#resume-upload.}
   */
  offset?: number;

  /**
   * Set an Origin header when creating the resumable upload URI.
   */
  origin?: string;

  /**
   * Specify query parameters that go along with the initial upload request. See
   * https://cloud.google.com/storage/docs/json_api/v1/objects/insert#parameters
   */
  params?: QueryParameters;

  /**
   * Apply a predefined set of access controls to the created file.
   */
  predefinedAcl?: PredefinedAcl;

  /**
   * Make the uploaded file private. (Alias for config.predefinedAcl =
   * 'private')
   */
  private?: boolean;

  /**
   * Make the uploaded file public. (Alias for config.predefinedAcl =
   * 'publicRead')
   */
  public?: boolean;

  /**
   * The service domain for a given Cloud universe.
   */
  universeDomain?: string;

  /**
   * If you already have a resumable URI from a previously-created resumable
   * upload, just pass it in here and we'll use that.
   *
   * If resuming an interrupted stream and the {@link UploadConfig.offset}
   * option has not been provided, we will treat the provided upload stream as
   * the object to upload - where the first byte of the upload stream is the
   * first byte of the object to upload; skipping any bytes that are already
   * present on the server.
   *
   * @see {@link checkUploadStatus} for checking the status of an existing upload.
   */
  uri?: string;

  /**
   * If the bucket being accessed has requesterPays functionality enabled, this
   * can be set to control which project is billed for the access of this file.
   */
  userProject?: string;

  /**
   * Configuration options for retrying retryable errors.
   */
  retryOptions: RetryOptions;

  /**
   * Controls whether or not to use authentication when using a custom endpoint.
   */
  useAuthWithCustomEndpoint?: boolean;

  [GCCL_GCS_CMD_KEY]?: string;
}

export interface ConfigMetadata {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;

  /**
   * Set the length of the object being uploaded. If uploading a partial
   * object, this is the overall size of the finalized object.
   */
  contentLength?: number;

  /**
   * Set the content type of the incoming data.
   */
  contentType?: string;
}

export interface GoogleInnerError {
  reason?: string;
}

export interface ApiError extends Error {
  code?: number;
  errors?: GoogleInnerError[];
}

export interface CheckUploadStatusConfig {
  /**
   * Set to `false` to disable retries within this method.
   *
   * @defaultValue `true`
   */
  retry?: boolean;
}

export class Upload extends Writable {
  bucket: string;
  file: string;
  apiEndpoint: string;
  baseURI: string;
  authConfig?: {scopes?: string[]};
  /*
   * Defaults to GoogleAuth and gets automatically overridden if an
   * emulator context is detected.
   */
  authClient: {
    request: <T>(
      opts: GaxiosOptions
    ) => Promise<GaxiosResponse<T>> | GaxiosPromise<T>;
  };
  cacheKey: string;
  chunkSize?: number;
  customRequestOptions: GaxiosOptions;
  generation?: number;
  key?: string | Buffer;
  kmsKeyName?: string;
  metadata: ConfigMetadata;
  offset?: number;
  origin?: string;
  params: QueryParameters;
  predefinedAcl?: PredefinedAcl;
  private?: boolean;
  public?: boolean;
  uri?: string;
  userProject?: string;
  encryption?: Encryption;
  uriProvidedManually: boolean;
  numBytesWritten = 0;
  numRetries = 0;
  contentLength: number | '*';
  retryOptions: RetryOptions;
  timeOfFirstRequest: number;
  isPartialUpload: boolean;

  private currentInvocationId = {
    checkUploadStatus: uuid.v4(),
    chunk: uuid.v4(),
    uri: uuid.v4(),
  };
  /**
   * A cache of buffers written to this instance, ready for consuming
   */
  private writeBuffers: Buffer[] = [];
  private numChunksReadInRequest = 0;

  #hashValidator?: HashStreamValidator;
  #clientCrc32c?: string;
  #clientMd5Hash?: string;

  /**
   * An array of buffers used for caching the most recent upload chunk.
   * We should not assume that the server received all bytes sent in the request.
   *  - https://cloud.google.com/storage/docs/performing-resumable-uploads#chunked-upload
   */
  private localWriteCache: Buffer[] = [];
  private localWriteCacheByteLength = 0;
  private upstreamEnded = false;
  #gcclGcsCmd?: string;

  constructor(cfg: UploadConfig) {
    super(cfg);
    cfg = cfg || {};

    if (!cfg.bucket || !cfg.file) {
      throw new Error('A bucket and file name are required');
    }

    if (cfg.offset && !cfg.uri) {
      throw new RangeError(
        'Cannot provide an `offset` without providing a `uri`'
      );
    }

    if (cfg.isPartialUpload && !cfg.chunkSize) {
      throw new RangeError(
        'Cannot set `isPartialUpload` without providing a `chunkSize`'
      );
    }

    cfg.authConfig = cfg.authConfig || {};
    cfg.authConfig.scopes = [
      'https://www.googleapis.com/auth/devstorage.full_control',
    ];
    this.authClient = cfg.authClient || new GoogleAuth(cfg.authConfig);

    const universe = cfg.universeDomain || DEFAULT_UNIVERSE;

    this.apiEndpoint = `https://storage.${universe}`;
    if (cfg.apiEndpoint && cfg.apiEndpoint !== this.apiEndpoint) {
      this.apiEndpoint = this.sanitizeEndpoint(cfg.apiEndpoint);

      const hostname = new URL(this.apiEndpoint).hostname;

      // check if it is a domain of a known universe
      const isDomain = hostname === universe;
      const isDefaultUniverseDomain = hostname === DEFAULT_UNIVERSE;

      // check if it is a subdomain of a known universe
      // by checking a last (universe's length + 1) of a hostname
      const isSubDomainOfUniverse =
        hostname.slice(-(universe.length + 1)) === `.${universe}`;
      const isSubDomainOfDefaultUniverse =
        hostname.slice(-(DEFAULT_UNIVERSE.length + 1)) ===
        `.${DEFAULT_UNIVERSE}`;

      if (
        !isDomain &&
        !isDefaultUniverseDomain &&
        !isSubDomainOfUniverse &&
        !isSubDomainOfDefaultUniverse
      ) {
        // Check if we should use auth with custom endpoint
        if (cfg.useAuthWithCustomEndpoint !== true) {
          // Only bypass auth if explicitly not requested
          this.authClient = gaxios;
        }
        // Otherwise keep the authenticated client
      }
    }

    this.baseURI = `${this.apiEndpoint}/upload/storage/v1/b`;
    this.bucket = cfg.bucket;

    const cacheKeyElements = [cfg.bucket, cfg.file];
    if (typeof cfg.generation === 'number') {
      cacheKeyElements.push(`${cfg.generation}`);
    }

    this.cacheKey = cacheKeyElements.join('/');

    this.customRequestOptions = cfg.customRequestOptions || {};
    this.file = cfg.file;
    this.generation = cfg.generation;
    this.kmsKeyName = cfg.kmsKeyName;
    this.metadata = cfg.metadata || {};
    this.offset = cfg.offset;
    this.origin = cfg.origin;
    this.params = cfg.params || {};
    this.userProject = cfg.userProject;
    this.chunkSize = cfg.chunkSize;
    this.retryOptions = cfg.retryOptions;
    this.isPartialUpload = cfg.isPartialUpload ?? false;

    this.#clientCrc32c = cfg.clientCrc32c;
    this.#clientMd5Hash = cfg.clientMd5Hash;

    const calculateCrc32c = !cfg.clientCrc32c && cfg.crc32c;
    const calculateMd5 = !cfg.clientMd5Hash && cfg.md5;

    if (calculateCrc32c || calculateMd5) {
      this.#hashValidator = new HashStreamValidator({
        crc32c: calculateCrc32c,
        md5: calculateMd5,
        updateHashesOnly: true,
      });
    }

    if (cfg.key) {
      if (typeof cfg.key === 'string') {
        const base64Key = Buffer.from(cfg.key).toString('base64');
        this.encryption = {
          key: base64Key,
          hash: createHash('sha256').update(cfg.key).digest('base64'),
        };
      } else {
        const base64Key = cfg.key.toString('base64');
        this.encryption = {
          key: base64Key,
          hash: createHash('sha256').update(cfg.key).digest('base64'),
        };
      }
    }

    this.predefinedAcl = cfg.predefinedAcl;
    if (cfg.private) this.predefinedAcl = 'private';
    if (cfg.public) this.predefinedAcl = 'publicRead';

    const autoRetry = cfg.retryOptions.autoRetry;
    this.uriProvidedManually = !!cfg.uri;
    this.uri = cfg.uri;

    if (this.offset) {
      // we're resuming an incomplete upload
      this.numBytesWritten = this.offset;
    }

    this.numRetries = 0; // counter for number of retries currently executed
    if (!autoRetry) {
      cfg.retryOptions.maxRetries = 0;
    }

    this.timeOfFirstRequest = Date.now();

    const contentLength = cfg.metadata
      ? Number(cfg.metadata.contentLength)
      : NaN;
    this.contentLength = isNaN(contentLength) ? '*' : contentLength;

    this.#gcclGcsCmd = cfg[GCCL_GCS_CMD_KEY];

    this.once('writing', () => {
      if (this.uri) {
        this.continueUploading();
      } else {
        this.createURI(err => {
          if (err) {
            return this.destroy(err);
          }
          this.startUploading();
          return;
        });
      }
    });
  }

  /**
   * Prevent 'finish' event until the upload has succeeded.
   *
   * @param fireFinishEvent The finish callback
   */
  _final(fireFinishEvent = () => {}) {
    this.upstreamEnded = true;

    this.once('uploadFinished', fireFinishEvent);

    process.nextTick(() => {
      this.emit('upstreamFinished');
      // it's possible `_write` may not be called - namely for empty object uploads
      this.emit('writing');
    });
  }

  /**
   * Handles incoming data from upstream
   *
   * @param chunk The chunk to append to the buffer
   * @param encoding The encoding of the chunk
   * @param readCallback A callback for when the buffer has been read downstream
   */
  _write(
    chunk: Buffer | string,
    encoding: BufferEncoding,
    readCallback = () => {}
  ) {
    // Backwards-compatible event
    this.emit('writing');

    const bufferChunk =
      typeof chunk === 'string' ? Buffer.from(chunk, encoding) : chunk;

    if (this.#hashValidator) {
      try {
        this.#hashValidator.write(bufferChunk);
      } catch (e) {
        this.destroy(e as Error);
        return;
      }
    }

    this.writeBuffers.push(bufferChunk);

    this.once('readFromChunkBuffer', readCallback);

    process.nextTick(() => this.emit('wroteToChunkBuffer'));
  }

  #resetLocalBuffersCache() {
    this.localWriteCache = [];
    this.localWriteCacheByteLength = 0;
  }

  #addLocalBufferCache(buf: Buffer) {
    this.localWriteCache.push(buf);
    this.localWriteCacheByteLength += buf.byteLength;
  }

  /**
   * Compares the client's calculated or provided hash against the server's
   * returned hash for a specific checksum type. Destroys the stream on mismatch.
   * @param clientHash The client's calculated or provided hash (Base64).
   * @param serverHash The hash returned by the server (Base64).
   * @param hashType The type of hash ('CRC32C' or 'MD5').
   */
  #validateChecksum(
    clientHash: string | undefined,
    serverHash: string | undefined,
    hashType: 'CRC32C' | 'MD5'
  ): boolean {
    // Only validate if both client and server hashes are present.
    if (clientHash && serverHash) {
      if (clientHash !== serverHash) {
        const detailMessage = `${hashType} checksum mismatch. Client calculated: ${clientHash}, Server returned: ${serverHash}`;
        const detailError = new Error(detailMessage);
        const error = new RequestError(FileExceptionMessages.UPLOAD_MISMATCH);
        error.code = 'FILE_NO_UPLOAD';
        error.errors = [detailError];

        this.destroy(error);
        return true;
      }
    }
    return false;
  }

  /**
   * Builds and applies the X-Goog-Hash header to the request options
   * using either calculated hashes from #hashValidator or pre-calculated
   * client-side hashes. This should only be called on the final request.
   *
   * @param headers The headers object to modify.
   */
  #applyChecksumHeaders(headers: GaxiosOptions['headers']) {
    const checksums: string[] = [];

    if (this.#hashValidator?.crc32cEnabled) {
      checksums.push(`crc32c=${this.#hashValidator.crc32c!}`);
    } else if (this.#clientCrc32c) {
      checksums.push(`crc32c=${this.#clientCrc32c}`);
    }

    if (this.#hashValidator?.md5Enabled) {
      checksums.push(`md5=${this.#hashValidator.md5Digest!}`);
    } else if (this.#clientMd5Hash) {
      checksums.push(`md5=${this.#clientMd5Hash}`);
    }

    if (checksums.length > 0) {
      headers!['X-Goog-Hash'] = checksums.join(',');
    }
  }

  /**
   * Prepends the local buffer to write buffer and resets it.
   *
   * @param keepLastBytes number of bytes to keep from the end of the local buffer.
   */
  private prependLocalBufferToUpstream(keepLastBytes?: number) {
    // Typically, the upstream write buffers should be smaller than the local
    // cache, so we can save time by setting the local cache as the new
    // upstream write buffer array and appending the old array to it
    let initialBuffers: Buffer[] = [];

    if (keepLastBytes) {
      // we only want the last X bytes
      let bytesKept = 0;

      while (keepLastBytes > bytesKept) {
        // load backwards because we want the last X bytes
        // note: `localWriteCacheByteLength` is reset below
        let buf = this.localWriteCache.pop();
        if (!buf) break;

        bytesKept += buf.byteLength;

        if (bytesKept > keepLastBytes) {
          // we have gone over the amount desired, let's keep the last X bytes
          // of this buffer
          const diff = bytesKept - keepLastBytes;
          buf = buf.subarray(diff);
          bytesKept -= diff;
        }

        initialBuffers.unshift(buf);
      }
    } else {
      // we're keeping all of the local cache, simply use it as the initial buffer
      initialBuffers = this.localWriteCache;
    }

    // Append the old upstream to the new
    const append = this.writeBuffers;
    this.writeBuffers = initialBuffers;

    for (const buf of append) {
      this.writeBuffers.push(buf);
    }

    // reset last buffers sent
    this.#resetLocalBuffersCache();
  }

  /**
   * Retrieves data from upstream's buffer.
   *
   * @param limit The maximum amount to return from the buffer.
   */
  private *pullFromChunkBuffer(limit: number) {
    while (limit) {
      const buf = this.writeBuffers.shift();
      if (!buf) break;

      let bufToYield = buf;

      if (buf.byteLength > limit) {
        bufToYield = buf.subarray(0, limit);
        this.writeBuffers.unshift(buf.subarray(limit));
        limit = 0;
      } else {
        limit -= buf.byteLength;
      }

      yield bufToYield;

      // Notify upstream we've read from the buffer and we're able to consume
      // more. It can also potentially send more data down as we're currently
      // iterating.
      this.emit('readFromChunkBuffer');
    }
  }

  /**
   * A handler for determining if data is ready to be read from upstream.
   *
   * @returns If there will be more chunks to read in the future
   */
  private async waitForNextChunk(): Promise<boolean> {
    const willBeMoreChunks = await new Promise<boolean>(resolve => {
      // There's data available - it should be digested
      if (this.writeBuffers.length) {
        return resolve(true);
      }

      // The upstream writable ended, we shouldn't expect any more data.
      if (this.upstreamEnded) {
        return resolve(false);
      }

      // Nothing immediate seems to be determined. We need to prepare some
      // listeners to determine next steps...

      const wroteToChunkBufferCallback = () => {
        removeListeners();
        return resolve(true);
      };

      const upstreamFinishedCallback = () => {
        removeListeners();

        // this should be the last chunk, if there's anything there
        if (this.writeBuffers.length) return resolve(true);

        return resolve(false);
      };

      // Remove listeners when we're ready to callback.
      const removeListeners = () => {
        this.removeListener('wroteToChunkBuffer', wroteToChunkBufferCallback);
        this.removeListener('upstreamFinished', upstreamFinishedCallback);
      };

      // If there's data recently written it should be digested
      this.once('wroteToChunkBuffer', wroteToChunkBufferCallback);

      // If the upstream finishes let's see if there's anything to grab
      this.once('upstreamFinished', upstreamFinishedCallback);
    });

    return willBeMoreChunks;
  }

  /**
   * Reads data from upstream up to the provided `limit`.
   * Ends when the limit has reached or no data is expected to be pushed from upstream.
   *
   * @param limit The most amount of data this iterator should return. `Infinity` by default.
   */
  private async *upstreamIterator(limit = Infinity) {
    // read from upstream chunk buffer
    while (limit && (await this.waitForNextChunk())) {
      // read until end or limit has been reached
      for (const chunk of this.pullFromChunkBuffer(limit)) {
        limit -= chunk.byteLength;
        yield chunk;
      }
    }
  }

  createURI(): Promise<string>;
  createURI(callback: CreateUriCallback): void;
  createURI(callback?: CreateUriCallback): void | Promise<string> {
    if (!callback) {
      return this.createURIAsync();
    }
    this.createURIAsync().then(r => callback(null, r), callback);
  }

  protected async createURIAsync(): Promise<string> {
    const metadata = {...this.metadata};
    const headers: gaxios.Headers = {};

    // Delete content length and content type from metadata if they exist.
    // These are headers and should not be sent as part of the metadata.
    if (metadata.contentLength) {
      headers['X-Upload-Content-Length'] = metadata.contentLength.toString();
      delete metadata.contentLength;
    }

    if (metadata.contentType) {
      headers!['X-Upload-Content-Type'] = metadata.contentType;
      delete metadata.contentType;
    }

    let googAPIClient = `${getRuntimeTrackingString()} gccl/${
      packageJson.version
    }-${getModuleFormat()} gccl-invocation-id/${this.currentInvocationId.uri}`;

    if (this.#gcclGcsCmd) {
      googAPIClient += ` gccl-gcs-cmd/${this.#gcclGcsCmd}`;
    }

    // Check if headers already exist before creating new ones
    const reqOpts: GaxiosOptions = {
      method: 'POST',
      url: [this.baseURI, this.bucket, 'o'].join('/'),
      params: Object.assign(
        {
          name: this.file,
          uploadType: 'resumable',
        },
        this.params
      ),
      data: metadata,
      headers: {
        'User-Agent': getUserAgentString(),
        'x-goog-api-client': googAPIClient,
        ...headers,
      },
    };

    if (metadata.contentLength) {
      reqOpts.headers!['X-Upload-Content-Length'] =
        metadata.contentLength.toString();
    }

    if (metadata.contentType) {
      reqOpts.headers!['X-Upload-Content-Type'] = metadata.contentType;
    }

    if (typeof this.generation !== 'undefined') {
      reqOpts.params.ifGenerationMatch = this.generation;
    }

    if (this.kmsKeyName) {
      reqOpts.params.kmsKeyName = this.kmsKeyName;
    }

    if (this.predefinedAcl) {
      reqOpts.params.predefinedAcl = this.predefinedAcl;
    }

    if (this.origin) {
      reqOpts.headers!.Origin = this.origin;
    }
    const uri = await AsyncRetry(
      async (bail: (err: Error) => void) => {
        try {
          const res = await this.makeRequest(reqOpts);
          // We have successfully got a URI we can now create a new invocation id
          this.currentInvocationId.uri = uuid.v4();
          return res.headers.location;
        } catch (err) {
          const e = err as GaxiosError;
          const apiError = {
            code: e.response?.status,
            name: e.response?.statusText,
            message: e.response?.statusText,
            errors: [
              {
                reason: e.code as string,
              },
            ],
          };
          if (
            this.retryOptions.maxRetries! > 0 &&
            this.retryOptions.retryableErrorFn!(apiError as ApiError)
          ) {
            throw e;
          } else {
            return bail(e);
          }
        }
      },
      {
        retries: this.retryOptions.maxRetries,
        factor: this.retryOptions.retryDelayMultiplier,
        maxTimeout: this.retryOptions.maxRetryDelay! * 1000, //convert to milliseconds
        maxRetryTime: this.retryOptions.totalTimeout! * 1000, //convert to milliseconds
      }
    );

    this.uri = uri;
    this.offset = 0;

    // emit the newly generated URI for future reuse, if necessary.
    this.emit('uri', uri);

    return uri;
  }

  private async continueUploading() {
    this.offset ?? (await this.getAndSetOffset());

    return this.startUploading();
  }

  async startUploading() {
    const multiChunkMode = !!this.chunkSize;
    let responseReceived = false;
    this.numChunksReadInRequest = 0;

    if (!this.offset) {
      this.offset = 0;
    }

    // Check if the offset (server) is too far behind the current stream
    if (this.offset < this.numBytesWritten) {
      const delta = this.numBytesWritten - this.offset;
      const message = `The offset is lower than the number of bytes written. The server has ${this.offset} bytes and while ${this.numBytesWritten} bytes has been uploaded - thus ${delta} bytes are missing. Stopping as this could result in data loss. Initiate a new upload to continue.`;

      this.emit('error', new RangeError(message));
      return;
    }

    // Check if we should 'fast-forward' to the relevant data to upload
    if (this.numBytesWritten < this.offset) {
      // 'fast-forward' to the byte where we need to upload.
      // only push data from the byte after the one we left off on
      const fastForwardBytes = this.offset - this.numBytesWritten;

      for await (const _chunk of this.upstreamIterator(fastForwardBytes)) {
        _chunk; // discard the data up until the point we want
      }

      this.numBytesWritten = this.offset;
    }

    let expectedUploadSize: number | undefined = undefined;

    // Set `expectedUploadSize` to `contentLength - this.numBytesWritten`, if available
    if (typeof this.contentLength === 'number') {
      expectedUploadSize = this.contentLength - this.numBytesWritten;
    }

    // `expectedUploadSize` should be no more than the `chunkSize`.
    // It's possible this is the last chunk request for a multiple
    // chunk upload, thus smaller than the chunk size.
    if (this.chunkSize) {
      expectedUploadSize = expectedUploadSize
        ? Math.min(this.chunkSize, expectedUploadSize)
        : this.chunkSize;
    }

    // A queue for the upstream data
    const upstreamQueue = this.upstreamIterator(expectedUploadSize);

    // The primary read stream for this request. This stream retrieves no more
    // than the exact requested amount from upstream.
    const requestStream = new Readable({
      read: async () => {
        // Don't attempt to retrieve data upstream if we already have a response
        if (responseReceived) requestStream.push(null);

        const result = await upstreamQueue.next();

        if (result.value) {
          this.numChunksReadInRequest++;

          if (multiChunkMode) {
            // save ever buffer used in the request in multi-chunk mode
            this.#addLocalBufferCache(result.value);
          } else {
            this.#resetLocalBuffersCache();
            this.#addLocalBufferCache(result.value);
          }

          this.numBytesWritten += result.value.byteLength;

          this.emit('progress', {
            bytesWritten: this.numBytesWritten,
            contentLength: this.contentLength,
          });

          requestStream.push(result.value);
        }

        if (result.done) {
          requestStream.push(null);
        }
      },
    });

    let googAPIClient = `${getRuntimeTrackingString()} gccl/${
      packageJson.version
    }-${getModuleFormat()} gccl-invocation-id/${
      this.currentInvocationId.chunk
    }`;

    if (this.#gcclGcsCmd) {
      googAPIClient += ` gccl-gcs-cmd/${this.#gcclGcsCmd}`;
    }

    const headers: GaxiosOptions['headers'] = {
      'User-Agent': getUserAgentString(),
      'x-goog-api-client': googAPIClient,
    };

    // If using multiple chunk upload, set appropriate header
    if (multiChunkMode) {
      // We need to know how much data is available upstream to set the `Content-Range` header.
      // https://cloud.google.com/storage/docs/performing-resumable-uploads#chunked-upload
      for await (const chunk of this.upstreamIterator(expectedUploadSize)) {
        // This will conveniently track and keep the size of the buffers.
        // We will reach either the expected upload size or the remainder of the stream.
        this.#addLocalBufferCache(chunk);
      }

      // This is the sum from the `#addLocalBufferCache` calls
      const bytesToUpload = this.localWriteCacheByteLength;

      // Important: we want to know if the upstream has ended and the queue is empty before
      // unshifting data back into the queue. This way we will know if this is the last request or not.
      const isLastChunkOfUpload = !(await this.waitForNextChunk());

      if (isLastChunkOfUpload && this.#hashValidator) {
        this.#hashValidator.end();
      }

      // Important: put the data back in the queue for the actual upload
      this.prependLocalBufferToUpstream();

      let totalObjectSize = this.contentLength;

      if (
        typeof this.contentLength !== 'number' &&
        isLastChunkOfUpload &&
        !this.isPartialUpload
      ) {
        // Let's let the server know this is the last chunk of the object since we didn't set it before.
        totalObjectSize = bytesToUpload + this.numBytesWritten;
      }

      // `- 1` as the ending byte is inclusive in the request.
      const endingByte = bytesToUpload + this.numBytesWritten - 1;

      // `Content-Length` for multiple chunk uploads is the size of the chunk,
      // not the overall object
      headers['Content-Length'] = bytesToUpload;
      headers['Content-Range'] =
        `bytes ${this.offset}-${endingByte}/${totalObjectSize}`;

      // Apply X-Goog-Hash header ONLY on the final chunk (WriteObject call)
      if (isLastChunkOfUpload) {
        this.#applyChecksumHeaders(headers);
      }
    } else {
      headers['Content-Range'] = `bytes ${this.offset}-*/${this.contentLength}`;

      if (this.#hashValidator) {
        this.#hashValidator.end();
      }
      this.#applyChecksumHeaders(headers);
    }

    const reqOpts: GaxiosOptions = {
      method: 'PUT',
      url: this.uri,
      headers,
      body: requestStream,
    };

    try {
      const resp = await this.makeRequestStream(reqOpts);
      if (resp) {
        responseReceived = true;
        await this.responseHandler(resp);
      }
    } catch (e) {
      const err = e as ApiError;

      if (this.retryOptions.retryableErrorFn!(err)) {
        this.attemptDelayedRetry({
          status: NaN,
          data: err,
        });
        return;
      }

      this.destroy(err);
    }
  }

  // Process the API response to look for errors that came in
  // the response body.
  private async responseHandler(resp: GaxiosResponse) {
    if (resp.data.error) {
      this.destroy(resp.data.error);
      return;
    }

    // At this point we can safely create a new id for the chunk
    this.currentInvocationId.chunk = uuid.v4();

    const moreDataToUpload = await this.waitForNextChunk();

    const shouldContinueWithNextMultiChunkRequest =
      this.chunkSize &&
      resp.status === RESUMABLE_INCOMPLETE_STATUS_CODE &&
      resp.headers.range &&
      moreDataToUpload;

    /**
     * This is true when we're expecting to upload more data in a future request,
     * yet the upstream for the upload session has been exhausted.
     */
    const shouldContinueUploadInAnotherRequest =
      this.isPartialUpload &&
      resp.status === RESUMABLE_INCOMPLETE_STATUS_CODE &&
      !moreDataToUpload;

    if (shouldContinueWithNextMultiChunkRequest) {
      // Use the upper value in this header to determine where to start the next chunk.
      // We should not assume that the server received all bytes sent in the request.
      // https://cloud.google.com/storage/docs/performing-resumable-uploads#chunked-upload
      const range: string = resp.headers.range;
      this.offset = Number(range.split('-')[1]) + 1;

      // We should not assume that the server received all bytes sent in the request.
      // - https://cloud.google.com/storage/docs/performing-resumable-uploads#chunked-upload
      const missingBytes = this.numBytesWritten - this.offset;
      if (missingBytes) {
        // As multi-chunk uploads send one chunk per request and pulls one
        // chunk into the pipeline, prepending the missing bytes back should
        // be fine for the next request.
        this.prependLocalBufferToUpstream(missingBytes);
        this.numBytesWritten -= missingBytes;
      } else {
        // No bytes missing - no need to keep the local cache
        this.#resetLocalBuffersCache();
      }

      // continue uploading next chunk
      this.continueUploading();
    } else if (
      !this.isSuccessfulResponse(resp.status) &&
      !shouldContinueUploadInAnotherRequest
    ) {
      const err: ApiError = new Error('Upload failed');
      err.code = resp.status;
      err.name = 'Upload failed';
      if (resp?.data) {
        err.errors = [resp?.data];
      }

      this.destroy(err);
    } else if (this.isSuccessfulResponse(resp.status)) {
      const serverCrc32c = resp.data.crc32c;
      const serverMd5 = resp.data.md5Hash;

      if (this.#hashValidator) {
        this.#hashValidator.end();
      }

      const clientCrc32cToValidate =
        this.#hashValidator?.crc32c || this.#clientCrc32c;
      const clientMd5HashToValidate =
        this.#hashValidator?.md5Digest || this.#clientMd5Hash;
      if (
        this.#validateChecksum(
          clientCrc32cToValidate,
          serverCrc32c,
          'CRC32C'
        ) ||
        this.#validateChecksum(clientMd5HashToValidate, serverMd5, 'MD5')
      ) {
        return;
      }

      // no need to keep the cache
      this.#resetLocalBuffersCache();

      if (resp && resp.data) {
        resp.data.size = Number(resp.data.size);
      }
      this.emit('metadata', resp.data);

      // Allow the object (Upload) to continue naturally so the user's
      // "finish" event fires.
      this.emit('uploadFinished');
    } else {
      // Handles the case where shouldContinueUploadInAnotherRequest is true
      // and the response is not successful (e.g., 308 for a partial upload).
      // This is the expected behavior for partial uploads that have finished their chunk.
      this.emit('uploadFinished');
    }
  }

  /**
   * Check the status of an existing resumable upload.
   *
   * @param cfg A configuration to use. `uri` is required.
   * @returns the current upload status
   */
  async checkUploadStatus(
    config: CheckUploadStatusConfig = {}
  ): Promise<GaxiosResponse<FileMetadata | void>> {
    let googAPIClient = `${getRuntimeTrackingString()} gccl/${
      packageJson.version
    }-${getModuleFormat()} gccl-invocation-id/${
      this.currentInvocationId.checkUploadStatus
    }`;

    if (this.#gcclGcsCmd) {
      googAPIClient += ` gccl-gcs-cmd/${this.#gcclGcsCmd}`;
    }

    const opts: GaxiosOptions = {
      method: 'PUT',
      url: this.uri,
      headers: {
        'Content-Length': 0,
        'Content-Range': 'bytes */*',
        'User-Agent': getUserAgentString(),
        'x-goog-api-client': googAPIClient,
      },
    };

    try {
      const resp = await this.makeRequest(opts);

      // Successfully got the offset we can now create a new offset invocation id
      this.currentInvocationId.checkUploadStatus = uuid.v4();

      return resp;
    } catch (e) {
      if (
        config.retry === false ||
        !(e instanceof Error) ||
        !this.retryOptions.retryableErrorFn!(e)
      ) {
        throw e;
      }

      const retryDelay = this.getRetryDelay();

      if (retryDelay <= 0) {
        throw e;
      }

      await new Promise(res => setTimeout(res, retryDelay));

      return this.checkUploadStatus(config);
    }
  }

  private async getAndSetOffset() {
    try {
      // we want to handle retries in this method.
      const resp = await this.checkUploadStatus({retry: false});

      if (resp.status === RESUMABLE_INCOMPLETE_STATUS_CODE) {
        if (typeof resp.headers.range === 'string') {
          this.offset = Number(resp.headers.range.split('-')[1]) + 1;
          return;
        }
      }
      this.offset = 0;
    } catch (e) {
      const err = e as ApiError;

      if (this.retryOptions.retryableErrorFn!(err)) {
        this.attemptDelayedRetry({
          status: NaN,
          data: err,
        });
        return;
      }

      this.destroy(err);
    }
  }

  private async makeRequest(reqOpts: GaxiosOptions): GaxiosPromise {
    if (this.encryption) {
      reqOpts.headers = reqOpts.headers || {};
      reqOpts.headers['x-goog-encryption-algorithm'] = 'AES256';
      reqOpts.headers['x-goog-encryption-key'] = this.encryption.key.toString();
      reqOpts.headers['x-goog-encryption-key-sha256'] =
        this.encryption.hash.toString();
    }

    if (this.userProject) {
      reqOpts.params = reqOpts.params || {};
      reqOpts.params.userProject = this.userProject;
    }
    // Let gaxios know we will handle a 308 error code ourselves.
    reqOpts.validateStatus = (status: number) => {
      return (
        this.isSuccessfulResponse(status) ||
        status === RESUMABLE_INCOMPLETE_STATUS_CODE
      );
    };

    const combinedReqOpts = {
      ...this.customRequestOptions,
      ...reqOpts,
      headers: {
        ...this.customRequestOptions.headers,
        ...reqOpts.headers,
      },
    };

    const res = await this.authClient.request<{error?: object}>(
      combinedReqOpts
    );
    if (res.data && res.data.error) {
      throw res.data.error;
    }
    return res;
  }

  private async makeRequestStream(reqOpts: GaxiosOptions) {
    const controller = new AbortController();
    const errorCallback = () => controller.abort();
    this.once('error', errorCallback);

    if (this.userProject) {
      reqOpts.params = reqOpts.params || {};
      reqOpts.params.userProject = this.userProject;
    }
    reqOpts.signal = controller.signal;
    reqOpts.validateStatus = () => true;

    const combinedReqOpts = {
      ...this.customRequestOptions,
      ...reqOpts,
      headers: {
        ...this.customRequestOptions.headers,
        ...reqOpts.headers,
      },
    };
    const res = await this.authClient.request(combinedReqOpts);
    const successfulRequest = this.onResponse(res);
    this.removeListener('error', errorCallback);

    return successfulRequest ? res : null;
  }

  /**
   * @return {bool} is the request good?
   */
  private onResponse(resp: GaxiosResponse) {
    if (
      resp.status !== 200 &&
      this.retryOptions.retryableErrorFn!({
        code: resp.status,
        message: resp.statusText,
        name: resp.statusText,
      })
    ) {
      this.attemptDelayedRetry(resp);
      return false;
    }

    this.emit('response', resp);
    return true;
  }

  /**
   * @param resp GaxiosResponse object from previous attempt
   */
  private attemptDelayedRetry(resp: Pick<GaxiosResponse, 'data' | 'status'>) {
    if (this.numRetries < this.retryOptions.maxRetries!) {
      if (
        resp.status === NOT_FOUND_STATUS_CODE &&
        this.numChunksReadInRequest === 0
      ) {
        this.startUploading();
      } else {
        const retryDelay = this.getRetryDelay();

        if (retryDelay <= 0) {
          this.destroy(
            new Error(
              `Retry total time limit exceeded - ${JSON.stringify(resp.data)}`
            )
          );
          return;
        }

        // Unshift the local cache back in case it's needed for the next request.
        this.numBytesWritten -= this.localWriteCacheByteLength;
        this.prependLocalBufferToUpstream();

        // We don't know how much data has been received by the server.
        // `continueUploading` will recheck the offset via `getAndSetOffset`.
        // If `offset` < `numberBytesReceived` then we will raise a RangeError
        // as we've streamed too much data that has been missed - this should
        // not be the case for multi-chunk uploads as `lastChunkSent` is the
        // body of the entire request.
        this.offset = undefined;

        setTimeout(this.continueUploading.bind(this), retryDelay);
      }
      this.numRetries++;
    } else {
      this.destroy(
        new Error(`Retry limit exceeded - ${JSON.stringify(resp.data)}`)
      );
    }
  }

  /**
   * The amount of time to wait before retrying the request, in milliseconds.
   * If negative, do not retry.
   *
   * @returns the amount of time to wait, in milliseconds.
   */
  private getRetryDelay(): number {
    const randomMs = Math.round(Math.random() * 1000);
    const waitTime =
      Math.pow(this.retryOptions.retryDelayMultiplier!, this.numRetries) *
        1000 +
      randomMs;
    const maxAllowableDelayMs =
      this.retryOptions.totalTimeout! * 1000 -
      (Date.now() - this.timeOfFirstRequest);
    const maxRetryDelayMs = this.retryOptions.maxRetryDelay! * 1000;

    return Math.min(waitTime, maxRetryDelayMs, maxAllowableDelayMs);
  }

  /*
   * Prepare user-defined API endpoint for compatibility with our API.
   */
  private sanitizeEndpoint(url: string) {
    if (!PROTOCOL_REGEX.test(url)) {
      url = `https://${url}`;
    }
    return url.replace(/\/+$/, ''); // Remove trailing slashes
  }

  /**
   * Check if a given status code is 2xx
   *
   * @param status The status code to check
   * @returns if the status is 2xx
   */
  public isSuccessfulResponse(status: number): boolean {
    return status >= 200 && status < 300;
  }
}

export function upload(cfg: UploadConfig) {
  return new Upload(cfg);
}

export function createURI(cfg: UploadConfig): Promise<string>;
export function createURI(cfg: UploadConfig, callback: CreateUriCallback): void;
export function createURI(
  cfg: UploadConfig,
  callback?: CreateUriCallback
): void | Promise<string> {
  const up = new Upload(cfg);
  if (!callback) {
    return up.createURI();
  }
  up.createURI().then(r => callback(null, r), callback);
}

/**
 * Check the status of an existing resumable upload.
 *
 * @param cfg A configuration to use. `uri` is required.
 * @returns the current upload status
 */
export function checkUploadStatus(
  cfg: UploadConfig & Required<Pick<UploadConfig, 'uri'>>
) {
  const up = new Upload(cfg);

  return up.checkUploadStatus();
}
