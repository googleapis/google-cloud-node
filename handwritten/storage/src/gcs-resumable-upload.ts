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
import * as ConfigStore from 'configstore';
import {createHash} from 'crypto';
import * as extend from 'extend';
import {
  GaxiosOptions,
  GaxiosPromise,
  GaxiosResponse,
  GaxiosError,
} from 'gaxios';
import * as gaxios from 'gaxios';
import {GoogleAuth, GoogleAuthOptions} from 'google-auth-library';
import {Readable, Writable} from 'stream';
import retry = require('async-retry');
import {RetryOptions, PreconditionOptions} from './storage';
import * as uuid from 'uuid';
import {getPackageJSON} from './util';

const NOT_FOUND_STATUS_CODE = 404;
const TERMINATED_UPLOAD_STATUS_CODE = 410;
const RESUMABLE_INCOMPLETE_STATUS_CODE = 308;
const DEFAULT_API_ENDPOINT_REGEX = /.*\.googleapis\.com/;
const packageJson = getPackageJSON();

export const PROTOCOL_REGEX = /^(\w*):\/\//;

export interface ErrorWithCode extends Error {
  code: number;
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

export interface UploadConfig {
  /**
   * The API endpoint used for the request.
   * Defaults to `storage.googleapis.com`.
   * **Warning**:
   * If this value does not match the pattern *.googleapis.com,
   * an emulator context will be assumed and authentication will be bypassed.
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
   * Where the gcs-resumable-upload configuration file should be stored on your
   * system. This maps to the configstore option by the same name.
   */
  configPath?: string;

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
   * The starting byte of the upload stream, for resuming an interrupted upload.
   * See
   * https://cloud.google.com/storage/docs/json_api/v1/how-tos/resumable-upload#resume-upload.
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
   * If you already have a resumable URI from a previously-created resumable
   * upload, just pass it in here and we'll use that.
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
}

export interface ConfigMetadata {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;

  /**
   * Set the length of the file being uploaded.
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
  configStore: ConfigStore;
  uriProvidedManually: boolean;
  numBytesWritten = 0;
  numRetries = 0;
  contentLength: number | '*';
  retryOptions: RetryOptions;
  timeOfFirstRequest: number;
  private currentInvocationId = {
    chunk: uuid.v4(),
    uri: uuid.v4(),
    offset: uuid.v4(),
  };
  private upstreamChunkBuffer: Buffer = Buffer.alloc(0);
  private chunkBufferEncoding?: BufferEncoding = undefined;
  private numChunksReadInRequest = 0;
  /**
   * A chunk used for caching the most recent upload chunk.
   * We should not assume that the server received all bytes sent in the request.
   *  - https://cloud.google.com/storage/docs/performing-resumable-uploads#chunked-upload
   */
  private lastChunkSent = Buffer.alloc(0);
  private upstreamEnded = false;

  constructor(cfg: UploadConfig) {
    super();

    cfg = cfg || {};

    if (!cfg.bucket || !cfg.file) {
      throw new Error('A bucket and file name are required');
    }

    cfg.authConfig = cfg.authConfig || {};
    cfg.authConfig.scopes = [
      'https://www.googleapis.com/auth/devstorage.full_control',
    ];
    this.authClient = cfg.authClient || new GoogleAuth(cfg.authConfig);

    this.apiEndpoint = 'https://storage.googleapis.com';
    if (cfg.apiEndpoint) {
      this.apiEndpoint = this.sanitizeEndpoint(cfg.apiEndpoint);
      if (!DEFAULT_API_ENDPOINT_REGEX.test(cfg.apiEndpoint)) {
        this.authClient = gaxios;
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

    if (cfg.key) {
      const base64Key = Buffer.from(cfg.key).toString('base64');
      this.encryption = {
        key: base64Key,
        hash: createHash('sha256').update(cfg.key).digest('base64'),
      };
    }

    this.predefinedAcl = cfg.predefinedAcl;
    if (cfg.private) this.predefinedAcl = 'private';
    if (cfg.public) this.predefinedAcl = 'publicRead';

    const configPath = cfg.configPath;
    this.configStore = new ConfigStore('gcs-resumable-upload', null, {
      configPath,
    });

    const autoRetry = cfg.retryOptions.autoRetry;
    this.uriProvidedManually = !!cfg.uri;
    this.uri = cfg.uri || this.get('uri');
    this.numBytesWritten = 0;
    this.numRetries = 0; // counter for number of retries currently executed
    if (!autoRetry) {
      cfg.retryOptions.maxRetries = 0;
    }

    this.timeOfFirstRequest = Date.now();

    const contentLength = cfg.metadata
      ? Number(cfg.metadata.contentLength)
      : NaN;
    this.contentLength = isNaN(contentLength) ? '*' : contentLength;

    this.once('writing', () => {
      if (this.uri) {
        this.continueUploading();
      } else {
        this.createURI((err, uri) => {
          if (err) {
            return this.destroy(err);
          }
          this.set({uri});
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

    process.nextTick(() => this.emit('upstreamFinished'));
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

    this.upstreamChunkBuffer = Buffer.concat([
      this.upstreamChunkBuffer,
      typeof chunk === 'string' ? Buffer.from(chunk, encoding) : chunk,
    ]);
    this.chunkBufferEncoding = encoding;

    this.once('readFromChunkBuffer', readCallback);

    process.nextTick(() => this.emit('wroteToChunkBuffer'));
  }

  /**
   * Prepends data back to the upstream chunk buffer.
   *
   * @param chunk The data to prepend
   */
  private unshiftChunkBuffer(chunk: Buffer) {
    this.upstreamChunkBuffer = Buffer.concat([chunk, this.upstreamChunkBuffer]);
  }

  /**
   * Retrieves data from upstream's buffer.
   *
   * @param limit The maximum amount to return from the buffer.
   * @returns The data requested.
   */
  private pullFromChunkBuffer(limit: number) {
    const chunk = this.upstreamChunkBuffer.slice(0, limit);
    this.upstreamChunkBuffer = this.upstreamChunkBuffer.slice(limit);

    // notify upstream we've read from the buffer so it can potentially
    // send more data down.
    process.nextTick(() => this.emit('readFromChunkBuffer'));

    return chunk;
  }

  /**
   * A handler for determining if data is ready to be read from upstream.
   *
   * @returns If there will be more chunks to read in the future
   */
  private async waitForNextChunk(): Promise<boolean> {
    const willBeMoreChunks = await new Promise<boolean>(resolve => {
      // There's data available - it should be digested
      if (this.upstreamChunkBuffer.byteLength) {
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
        if (this.upstreamChunkBuffer.length) return resolve(true);

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
   * @param oneChunkMode Determines if one, exhaustive chunk is yielded for the iterator
   */
  private async *upstreamIterator(limit = Infinity, oneChunkMode?: boolean) {
    let completeChunk = Buffer.alloc(0);

    // read from upstream chunk buffer
    while (limit && (await this.waitForNextChunk())) {
      // read until end or limit has been reached
      const chunk = this.pullFromChunkBuffer(limit);

      limit -= chunk.byteLength;
      if (oneChunkMode) {
        // return 1 chunk at the end of iteration
        completeChunk = Buffer.concat([completeChunk, chunk]);
      } else {
        // return many chunks throughout iteration
        yield {
          chunk,
          encoding: this.chunkBufferEncoding,
        };
      }
    }

    if (oneChunkMode) {
      yield {
        chunk: completeChunk,
        encoding: this.chunkBufferEncoding,
      };
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
    const metadata = this.metadata;

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
        'x-goog-api-client': `gl-node/${process.versions.node} gccl/${packageJson.version} gccl-invocation-id/${this.currentInvocationId.uri}`,
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
    const uri = await retry(
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
    return uri;
  }

  private async continueUploading() {
    if (typeof this.offset === 'number') {
      this.startUploading();
      return;
    }
    await this.getAndSetOffset();
    this.startUploading();
  }

  async startUploading() {
    const multiChunkMode = !!this.chunkSize;
    let responseReceived = false;
    this.numChunksReadInRequest = 0;

    if (!this.offset) {
      this.offset = 0;
    }

    // Check if we're uploading the expected object
    if (this.numBytesWritten === 0) {
      const isSameObject = await this.ensureUploadingSameObject();
      if (!isSameObject) {
        // `ensureUploadingSameObject` will restart the upload.
        return;
      }
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

    // Set `expectedUploadSize` to `contentLength` if available
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
    const upstreamQueue = this.upstreamIterator(
      expectedUploadSize,
      multiChunkMode // multi-chunk mode should return 1 chunk per request
    );

    // The primary read stream for this request. This stream retrieves no more
    // than the exact requested amount from upstream.
    const requestStream = new Readable({
      read: async () => {
        // Don't attempt to retrieve data upstream if we already have a response
        if (responseReceived) requestStream.push(null);

        const result = await upstreamQueue.next();

        if (result.value) {
          this.numChunksReadInRequest++;
          this.lastChunkSent = result.value.chunk;
          this.numBytesWritten += result.value.chunk.byteLength;

          this.emit('progress', {
            bytesWritten: this.numBytesWritten,
            contentLength: this.contentLength,
          });

          requestStream.push(result.value.chunk, result.value.encoding);
        }

        if (result.done) {
          requestStream.push(null);
        }
      },
    });

    const headers: GaxiosOptions['headers'] = {
      'x-goog-api-client': `gl-node/${process.versions.node} gccl/${packageJson.version} gccl-invocation-id/${this.currentInvocationId.chunk}`,
    };

    // If using multiple chunk upload, set appropriate header
    if (multiChunkMode && expectedUploadSize) {
      // The '-1' is because the ending byte is inclusive in the request.
      const endingByte = expectedUploadSize + this.numBytesWritten - 1;
      headers['Content-Length'] = expectedUploadSize;
      headers[
        'Content-Range'
      ] = `bytes ${this.offset}-${endingByte}/${this.contentLength}`;
    } else {
      headers['Content-Range'] = `bytes ${this.offset}-*/${this.contentLength}`;
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
        this.responseHandler(resp);
      }
    } catch (err) {
      const e = err as Error;
      this.destroy(e);
    }
  }

  // Process the API response to look for errors that came in
  // the response body.
  private responseHandler(resp: GaxiosResponse) {
    if (resp.data.error) {
      this.destroy(resp.data.error);
      return;
    }

    // At this point we can safely create a new id for the chunk
    this.currentInvocationId.chunk = uuid.v4();

    const shouldContinueWithNextMultiChunkRequest =
      this.chunkSize &&
      resp.status === RESUMABLE_INCOMPLETE_STATUS_CODE &&
      resp.headers.range;

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
        const dataToPrependForResending = this.lastChunkSent.slice(
          -missingBytes
        );
        // As multi-chunk uploads send one chunk per request and pulls one
        // chunk into the pipeline, prepending the missing bytes back should
        // be fine for the next request.
        this.unshiftChunkBuffer(dataToPrependForResending);
        this.numBytesWritten -= missingBytes;
        this.lastChunkSent = Buffer.alloc(0);
      }

      // continue uploading next chunk
      this.continueUploading();
    } else if (!this.isSuccessfulResponse(resp.status)) {
      const err: ApiError = {
        code: resp.status,
        name: 'Upload failed',
        message: 'Upload failed',
      };
      this.destroy(err);
    } else {
      // remove the last chunk sent to free memory
      this.lastChunkSent = Buffer.alloc(0);

      if (resp && resp.data) {
        resp.data.size = Number(resp.data.size);
      }
      this.emit('metadata', resp.data);
      this.deleteConfig();

      // Allow the object (Upload) to continue naturally so the user's
      // "finish" event fires.
      this.emit('uploadFinished');
    }
  }

  /**
   * Check if this is the same content uploaded previously. This caches a
   * slice of the first chunk, then compares it with the first byte of
   * incoming data.
   *
   * @returns if the request is ok to continue as-is
   */
  private async ensureUploadingSameObject() {
    // A queue for the upstream data
    const upstreamQueue = this.upstreamIterator(
      16,
      true // we just want one chunk for this validation
    );

    const upstreamChunk = await upstreamQueue.next();
    const chunk = upstreamChunk.value
      ? upstreamChunk.value.chunk
      : Buffer.alloc(0);

    // Put the original chunk back into the buffer as we just wanted to 'peek'
    // at the stream for validation.
    this.unshiftChunkBuffer(chunk);

    let cachedFirstChunk = this.get('firstChunk');
    const firstChunk = chunk.valueOf();

    if (!cachedFirstChunk) {
      // This is a new upload. Cache the first chunk.
      this.set({uri: this.uri, firstChunk});
    } else {
      // this continues an upload in progress. check if the bytes are the same
      cachedFirstChunk = Buffer.from(cachedFirstChunk);
      const nextChunk = Buffer.from(firstChunk);
      if (Buffer.compare(cachedFirstChunk, nextChunk) !== 0) {
        // this data is not the same. start a new upload
        this.restart();
        return false;
      }
    }

    return true;
  }

  private async getAndSetOffset() {
    const opts: GaxiosOptions = {
      method: 'PUT',
      url: this.uri!,
      headers: {
        'Content-Length': 0,
        'Content-Range': 'bytes */*',
        'x-goog-api-client': `gl-node/${process.versions.node} gccl/${packageJson.version} gccl-invocation-id/${this.currentInvocationId.offset}`,
      },
    };
    try {
      const resp = await this.makeRequest(opts);
      // Successfully got the offset we can now create a new offset invocation id
      this.currentInvocationId.offset = uuid.v4();
      if (resp.status === RESUMABLE_INCOMPLETE_STATUS_CODE) {
        if (resp.headers.range) {
          const range = resp.headers.range as string;
          this.offset = Number(range.split('-')[1]) + 1;
          return;
        }
      }
      this.offset = 0;
    } catch (e) {
      const err = e as GaxiosError;
      const resp = err.response;
      // we don't return a 404 to the user if they provided the resumable
      // URI. if we're just using the configstore file to tell us that this
      // file exists, and it turns out that it doesn't (the 404), that's
      // probably stale config data.
      if (
        resp &&
        resp.status === NOT_FOUND_STATUS_CODE &&
        !this.uriProvidedManually
      ) {
        this.restart();
        return;
      }

      // this resumable upload is unrecoverable (bad data or service error).
      if (resp && resp.status === TERMINATED_UPLOAD_STATUS_CODE) {
        this.restart();
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

    const combinedReqOpts = extend(
      true,
      {},
      this.customRequestOptions,
      reqOpts
    );
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

    const combinedReqOpts = extend(
      true,
      {},
      this.customRequestOptions,
      reqOpts
    );
    const res = await this.authClient.request(combinedReqOpts);
    const successfulRequest = this.onResponse(res);
    this.removeListener('error', errorCallback);

    return successfulRequest ? res : null;
  }

  private restart() {
    if (this.numBytesWritten) {
      const message =
        'Attempting to restart an upload after unrecoverable bytes have been written from upstream. Stopping as this could result in data loss. Initiate a new upload to continue.';

      this.emit('error', new RangeError(message));
      return;
    }

    this.lastChunkSent = Buffer.alloc(0);
    this.deleteConfig();
    this.createURI((err, uri) => {
      if (err) {
        return this.destroy(err);
      }
      this.set({uri});
      this.startUploading();
      return;
    });
  }

  private get(prop: string) {
    const store = this.configStore.get(this.cacheKey);
    return store && store[prop];
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private set(props: any) {
    this.configStore.set(this.cacheKey, props);
  }

  deleteConfig() {
    this.configStore.delete(this.cacheKey);
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
  private attemptDelayedRetry(resp: GaxiosResponse) {
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
            new Error(`Retry total time limit exceeded - ${resp.data}`)
          );
          return;
        }

        // Unshift the most recent chunk back in case it's needed for the next
        // request.
        this.numBytesWritten -= this.lastChunkSent.byteLength;
        this.unshiftChunkBuffer(this.lastChunkSent);
        this.lastChunkSent = Buffer.alloc(0);

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
      this.destroy(new Error('Retry limit exceeded - ' + resp.data));
    }
  }

  /**
   * @returns {number} the amount of time to wait before retrying the request
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
