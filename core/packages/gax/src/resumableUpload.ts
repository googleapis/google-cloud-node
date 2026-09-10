/**
 * Copyright 2026 Google LLC
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

/**
 * Resumable upload protocol support.
 *
 * This module implements the client-side state machine for the resumable
 * upload protocol used by Google APIs to transfer large payloads over
 * HTTP(S). The upload session is managed by a {@link ResumableUploadSession}
 * object, which is returned by GAPIC-generated client methods for resumable
 * upload RPCs.
 *
 * The protocol commands are sent through the `X-Goog-Upload-Command` header
 * and the payload is transferred in discrete chunks. Transient errors
 * (Category 1) are retried with exponential backoff, state mismatches
 * (Category 2) trigger a recovery phase that queries the server for the
 * committed byte offset, and everything else (Category 3) is fatal.
 */

import type {AuthClient, GoogleAuth} from 'google-auth-library';
import * as protobuf from 'protobufjs';
import * as serializer from 'proto3-json-serializer';

import {APICaller} from './apiCaller';
import {APICallback, GRPCCall, SimpleCallbackFunction} from './apitypes';
import {OngoingCall, OngoingCallPromise} from './call';
import {Descriptor} from './descriptor';
import {decodeResponse} from './fallbackRest';
import {CallSettings, createDefaultBackoffSettings, RetryOptions} from './gax';
import {GoogleError} from './googleError';
import {Status, rpcCodeFromHttpStatusCode} from './status';
import {transcode} from './transcoding';

export const DEFAULT_CHUNK_SIZE = 8 * 1024 * 1024;
export const DEFAULT_GLOBAL_DEADLINE_MS = 10 * 60 * 1000;
export const MAX_GLOBAL_DEADLINE_MS = 24 * 60 * 60 * 1000;
export const DEFAULT_MAX_INNER_RETRIES = 5;
export const DEFAULT_PER_REQUEST_TIMEOUT_MS = 60 * 1000;
export const DEFAULT_STALL_TIMEOUT_MS = 15 * 1000;
// Assumed sustained upload throughput, in bytes per millisecond, used to
// scale the global deadline when `uploadSize` is provided (~5 MB/s).
const DEFAULT_UPLOAD_RATE_BYTES_PER_MS = 5 * 1024 * 1024;

// Resumable upload protocol headers.
const UPLOAD_PROTOCOL_HEADER = 'x-goog-upload-protocol';
const UPLOAD_PROTOCOL_RESUMABLE = 'resumable';
const UPLOAD_COMMAND_HEADER = 'x-goog-upload-command';
const UPLOAD_OFFSET_HEADER = 'x-goog-upload-offset';
const UPLOAD_URL_HEADER = 'x-goog-upload-url';
const UPLOAD_STATUS_HEADER = 'x-goog-upload-status';
const UPLOAD_SIZE_RECEIVED_HEADER = 'x-goog-upload-size-received';
const UPLOAD_CHUNK_GRANULARITY_HEADER = 'x-goog-upload-chunk-granularity';

// Resumable upload protocol commands.
const COMMAND_START = 'start';
const COMMAND_UPLOAD = 'upload';
const COMMAND_QUERY = 'query';
const COMMAND_FINALIZE = 'finalize';
const COMMAND_CANCEL = 'cancel';
const COMMAND_UPLOAD_FINALIZE = 'upload, finalize';

// Category 1 errors are transient and can be retried without modification.
const CATEGORY_1_RETRY_CODES = new Set([408, 429, 500, 502, 503, 504]);
// Category 2 errors are state mismatches; recovery must query the server for
// the committed byte offset before retrying.
const CATEGORY_2_RETRY_CODES = new Set([400, 412, 416]);

/** The possible states of a resumable upload session. */
export enum ResumableUploadState {
  /** The upload has not yet begun transmitting. */
  STARTING = 'STARTING',
  /** The stream transfer is in progress. */
  TRANSMISSION = 'TRANSMISSION',
  /** The transfer is complete, but we are waiting for confirmation. */
  FINALIZING = 'FINALIZING',
  /** Recovery from an existing upload session URL. */
  RECOVERY = 'RECOVERY',
}

/**
 * A seekable source of upload bytes.
 *
 * The upload session only accepts a `ResumableSource`, never a bare stream,
 * because recovery may need to open a new stream at the server-committed
 * byte offset. Callers that only have a non-seekable stream can wrap it in a
 * `ResumableSource` whose `getStream(offset)` throws when an offset other
 * than 0 is requested.
 */
export interface ResumableSource {
  /**
   * Generates a readable stream starting at the specified byte offset. If
   * `offset` is omitted or 0, the stream starts from the beginning.
   */
  getStream: (offset?: number) => NodeJS.ReadableStream | ReadableStream;
  /** Total byte length of the data. */
  size: number;
}

/** Progress reported to the `onProgress` callback. */
export interface ResumableUploadProgress {
  /** The number of bytes committed by the server so far. */
  bytesUploaded: number;
  /** The session URL, which can be saved and reused to resume the upload. */
  uploadUrl: string;
}

/**
 * Parameters accepted by {@link ResumableUploadSession.start}.
 */
export interface ResumableUploadStartParams {
  /**
   * Seekable source of the upload payload. The session may call
   * `getStream(offset)` again during recovery, so callers must not pass a
   * bare one-shot `Readable`.
   */
  uploadSource: ResumableSource;
  /**
   * Desired chunk size in bytes. The effective chunk size is rounded down to
   * a multiple of the server-provided chunk granularity.
   */
  chunkSize?: number;
  /**
   * Called after each committed chunk and after recovery queries. The return
   * value is reserved for future cancellation support and is not yet acted
   * on.
   */
  onProgress?: (status: ResumableUploadProgress) => boolean | void;
  /**
   * Reserved for headers that may accompany upload-phase data. Not yet
   * supported; passing a value is a compile-time error.
   */
  uploadHeaders?: never;
  /**
   * Session URL of a previous (possibly interrupted) upload session. When
   * provided, the `start` command is skipped and the upload enters the
   * recovery phase to determine the server-committed byte offset.
   */
  resumeUrl?: string;
  /**
   * Total size of the payload in bytes, if known. Used to scale the global
   * deadline for large payloads.
   */
  uploadSize?: number;
  /**
   * Override for the global deadline, in milliseconds. The deadline bounds
   * the entire upload session, including time spent waiting for data from
   * the upload source.
   */
  globalDeadlineMs?: number;
  /**
   * Headers that must only be sent with the initial `start` request (for
   * example, `developer-token`).
   */
  startHeaders?: {[name: string]: string};
  /**
   * Reserved for checksum validation. Not yet supported; passing a value is
   * a compile-time error.
   */
  validationAlgorithm?: never;
  /**
   * Reserved for a user-supplied checksum. Not yet supported; passing a
   * value is a compile-time error.
   */
  providedChecksum?: never;
  /** Per-request timeout in milliseconds. Defaults to 60000. */
  timeout?: number;
  /**
   * Inactivity timeout, in milliseconds, for an in-flight upload/finalize
   * request. When no response arrives within this window, the request is
   * aborted and the session enters the recovery phase. Defaults to 15000.
   */
  stallTimeoutMs?: number;
  /**
   * Retry configuration for the inner (Category 1) retry loop. Pass `null`
   * to disable inner retries.
   */
  retry?: Partial<RetryOptions> | null;
}

/**
 * Internal context used to construct a {@link ResumableUploadSession}. This
 * is populated by GAPIC-generated client methods.
 */
export interface ResumableUploadContext {
  /** Authenticated client used for all HTTP requests. */
  auth: GoogleAuth | AuthClient;
  /** The hostname of the API service endpoint. */
  servicePath: string;
  /** The port of the API service endpoint. */
  servicePort: number;
  /** The protocol (usually `https`). */
  protocol: string;
  /** The protobuf method descriptor for the resumable upload RPC. */
  rpc: protobuf.Method;
  /** The initial metadata request for the `start` command. */
  request: {};
  /** The upload prefix to use for the `start` command endpoint. */
  uploadPrefix?: string;
  numericEnums?: boolean;
  minifyJson?: boolean;
}

interface ResumableUploadResponse {
  status: number;
  headers: {get(name: string): string | null};
  body: Buffer;
}

/** Transient error that should be retried (Category 1). */
class TransientError extends Error {}

/** State mismatch error that triggers the recovery phase (Category 2). */
class Category2Error extends Error {
  constructor(
    message: string,
    public httpStatusCode?: number,
  ) {
    super(message);
    this.code = Status.FAILED_PRECONDITION;
  }
  code: Status;
}

/** Fatal error that cannot be recovered from (Category 3). */
class Category3Error extends Error {
  constructor(message: string, httpStatusCode?: number) {
    super(message);
    if (httpStatusCode !== undefined) {
      this.code = rpcCodeFromHttpStatusCode(httpStatusCode);
    }
  }
  code?: Status;
}

/** Raised when an in-flight request made no progress for too long. */
class StallError extends Error {}

/**
 * Internal signal used to restart transmission from a server-committed
 * offset by opening a fresh stream from the `ResumableSource`.
 */
class RestartUploadError extends Error {
  constructor(public offset: number) {
    super(`Restarting the resumable upload transmission from byte ${offset}.`);
  }
}

function createGoogleError(message: string, code?: Status): GoogleError {
  const err = new GoogleError(message);
  if (code !== undefined) {
    err.code = code;
  }
  return err;
}

interface ReadChunkResult {
  chunk: Buffer | null;
  eof: boolean;
  remainder: Buffer;
}

interface TransmitResult {
  finalized: boolean;
  response: {} | null;
  /** The local offset after the server-committed bytes. */
  newOffset: number;
  /** Bytes the stream must skip when the server committed more than expected. */
  skipAhead: number;
}

/**
 * A no-op RPC stub used by GAPIC-generated resumable upload methods.
 * Resumable uploads perform their own HTTP requests through the
 * {@link ResumableUploadSession} object, so the stub passed to
 * `createApiCall` is never invoked.
 */
export const resumableUploadStub = (() => {
  return {cancel() {}};
}) as unknown as GRPCCall;

function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function asBuffer(chunk: unknown): Buffer {
  if (Buffer.isBuffer(chunk)) {
    return chunk;
  }
  if (chunk instanceof Uint8Array) {
    return Buffer.from(chunk);
  }
  return Buffer.from(String(chunk));
}

function parseHeaderInt(value: string | null): number | null {
  if (value === null || value === '') {
    return null;
  }
  const parsed = parseInt(value, 10);
  return Number.isNaN(parsed) ? null : parsed;
}

/**
 * Descriptor that identifies a method as a resumable upload method and
 * provides the caller that constructs the {@link ResumableUploadSession}
 * object.
 */
export class ResumableUploadDescriptor implements Descriptor {
  constructor(public uploadPrefix: string = '/resumable/upload') {}

  getApiCaller(): APICaller {
    return new ResumableUploadApiCaller(this);
  }
}

/**
 * API caller for resumable upload methods. The GAPIC method call resolves
 * with a {@link ResumableUploadSession} object; the actual upload state
 * machine is driven by {@link ResumableUploadSession.start}.
 */
export class ResumableUploadApiCaller implements APICaller {
  constructor(private descriptor: ResumableUploadDescriptor) {}

  init(callback?: APICallback): OngoingCallPromise | OngoingCall {
    if (callback) {
      return new OngoingCall(callback);
    }
    return new OngoingCallPromise();
  }

  // The regular API call function is never invoked for resumable uploads;
  // the upload session performs its own HTTP requests.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  wrap(func: GRPCCall): GRPCCall {
    return func;
  }

  call(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    apiCall: SimpleCallbackFunction,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    argument: {},
    settings: CallSettings,
    canceller: OngoingCallPromise,
  ): void {
    const context = settings.resumableUpload;
    if (!context) {
      canceller.callback!(
        createGoogleError(
          'The resumable upload transport context was not provided. ' +
            'This is a bug in the generated client library.',
        ),
      );
      return;
    }
    const session = new ResumableUploadSession({
      ...context,
      uploadPrefix:
        context.uploadPrefix ??
        this.descriptor.uploadPrefix ??
        '/resumable/upload',
    });
    canceller.completed = true;
    canceller.callback!(null, session);
  }

  fail(canceller: OngoingCallPromise, err: GoogleError): void {
    canceller.callback!(err);
  }

  result(canceller: OngoingCallPromise) {
    return canceller.promise;
  }
}

/**
 * Client-side state machine for the resumable upload protocol.
 *
 * A `ResumableUploadSession` object is returned by a GAPIC-generated client
 * method for a resumable upload RPC. The user calls
 * {@link ResumableUploadSession.start}
 * with a source and upload parameters, optionally supplies a `resumeUrl` from
 * a previous session, and awaits {@link ResumableUploadSession.finished} for the
 * final RPC response.
 */
export class ResumableUploadSession {
  private context: ResumableUploadContext;
  private params: ResumableUploadStartParams | null = null;
  private state_: ResumableUploadState = ResumableUploadState.STARTING;
  private uploadUrl_: string | null = null;
  private response_: {} | null = null;
  private committedBytes_ = 0;
  private startTimeMs = 0;
  private globalDeadlineMs = DEFAULT_GLOBAL_DEADLINE_MS;
  private effectiveChunkSize_ = DEFAULT_CHUNK_SIZE;
  private activeAbortController: AbortController | null = null;
  private activeStream_: NodeJS.ReadableStream | ReadableStream | null = null;
  private activeIterator_: AsyncIterator<unknown> | null = null;
  private deadlineTimer: ReturnType<typeof setTimeout> | null = null;
  private stallTimer: ReturnType<typeof setTimeout> | null = null;
  private canceled_ = false;
  private started_ = false;
  private done_ = false;
  private finishedPromise_: Promise<{}>;
  private resolveFinished_!: (response: {}) => void;
  private rejectFinished_!: (err: Error) => void;

  constructor(context: ResumableUploadContext) {
    this.context = context;
    this.finishedPromise_ = new Promise<{}>((resolve, reject) => {
      this.resolveFinished_ = resolve;
      this.rejectFinished_ = reject;
    });
  }

  /** The session URL, available once the upload session has been started. */
  get uploadUrl(): string | null {
    return this.uploadUrl_;
  }

  /** The current state of the upload session. */
  get state(): ResumableUploadState {
    return this.state_;
  }

  /** The actual chunk size used for the session (granularity rounded). */
  get chunkSize(): number | null {
    return this.started_ ? this.effectiveChunkSize_ : null;
  }

  /** The number of bytes the server has committed so far. */
  get committedBytes(): number {
    return this.committedBytes_;
  }

  /**
   * Cancels the upload session, aborts any in-flight HTTP request, releases
   * the active upload source stream, and rejects the promise returned by
   * {@link ResumableUploadSession.finished}.
   */
  cancel(): void {
    if (this.canceled_ || this.done_) {
      return;
    }
    this.canceled_ = true;
    this.clearDeadlineTimer();
    this.clearStallTimer();
    if (this.uploadUrl_) {
      // Best-effort server-side cancellation of the session.
      const controller = new AbortController();
      this.context.auth
        .request({
          url: this.uploadUrl_,
          method: 'POST',
          headers: {
            [UPLOAD_PROTOCOL_HEADER]: UPLOAD_PROTOCOL_RESUMABLE,
            [UPLOAD_COMMAND_HEADER]: COMMAND_CANCEL,
          },
          signal: controller.signal,
          responseType: 'text',
          timeout: this.params?.timeout ?? DEFAULT_PER_REQUEST_TIMEOUT_MS,
          validateStatus: () => true,
        })
        .catch(() => {});
    }
    this.activeAbortController?.abort();
    // Release the active upload source stream so the transmission loop does
    // not stay subscribed to it indefinitely (for example, when it is
    // stalled).
    this.releaseActiveStream();
    const err = createGoogleError(
      'The resumable upload was cancelled.',
      Status.CANCELLED,
    );
    this.rejectFinished_(err);
  }

  /**
   * Starts the upload session and begins transmitting the source.
   *
   * The returned promise resolves once the upload session has been
   * established (either via the `start` command or via recovery from a
   * `resumeUrl`) and the transmission loop is running. Await
   * {@link ResumableUploadSession.finished} for the final response.
   */
  async start(params: ResumableUploadStartParams): Promise<void> {
    if (this.started_) {
      throw createGoogleError('The resumable upload has already been started.');
    }
    if (this.canceled_) {
      throw createGoogleError('The resumable upload was cancelled.');
    }
    if (!params.uploadSource) {
      throw createGoogleError(
        'uploadSource must be provided to start a resumable upload.',
      );
    }
    this.params = params;
    this.started_ = true;
    this.startTimeMs = Date.now();
    this.globalDeadlineMs = this.computeGlobalDeadlineMs(params);
    this.armDeadlineTimer();

    let sessionUrl: string;
    let granularity: number | null = null;

    try {
      if (params.resumeUrl) {
        this.state_ = ResumableUploadState.RECOVERY;
        const committedOffset = await this.queryOffset(params.resumeUrl);
        this.uploadUrl_ = params.resumeUrl;
        this.committedBytes_ = committedOffset;
        this.reportProgress();
        sessionUrl = params.resumeUrl;
      } else {
        this.state_ = ResumableUploadState.STARTING;
        const started = await this.sendStart();
        sessionUrl = started.uploadUrl;
        granularity = started.granularity;
        this.uploadUrl_ = sessionUrl;
        if (started.committedOffset !== undefined) {
          this.committedBytes_ = started.committedOffset;
          this.reportProgress();
        }
      }
    } catch (err) {
      // Session setup failed before transmission began; make sure awaiting
      // `finished()` does not hang forever.
      this.done_ = true;
      this.clearDeadlineTimer();
      this.rejectFinished_(err as Error);
      throw err;
    }

    this.effectiveChunkSize_ = this.computeEffectiveChunkSize(
      params.chunkSize,
      granularity,
    );
    this.state_ = ResumableUploadState.TRANSMISSION;

    // The transmission loop runs in the background; `start()` resolves once
    // the session is established so the user can inspect `uploadUrl`.
    void this.runTransmission(sessionUrl);
  }

  /**
   * Returns a promise that resolves with the final RPC response when the
   * upload completes, or rejects if the upload fails or is cancelled.
   */
  finished(): Promise<{}> {
    return this.finishedPromise_;
  }

  /** Total payload size in bytes, preferring the explicit upload size. */
  private uploadSizeForDeadline(params: ResumableUploadStartParams): number {
    if (params.uploadSize !== undefined && params.uploadSize > 0) {
      return params.uploadSize;
    }
    return params.uploadSource.size > 0 ? params.uploadSource.size : 0;
  }

  private computeGlobalDeadlineMs(params: ResumableUploadStartParams): number {
    if (params.globalDeadlineMs !== undefined && params.globalDeadlineMs > 0) {
      return params.globalDeadlineMs;
    }
    let deadline = DEFAULT_GLOBAL_DEADLINE_MS;
    const uploadSize = this.uploadSizeForDeadline(params);
    if (uploadSize > 0) {
      const scaled = Math.ceil(uploadSize / DEFAULT_UPLOAD_RATE_BYTES_PER_MS);
      deadline = Math.max(deadline, scaled);
    }
    return Math.min(deadline, MAX_GLOBAL_DEADLINE_MS);
  }

  private computeEffectiveChunkSize(
    chunkSize: number | undefined,
    granularity: number | null,
  ): number {
    const requested = chunkSize ?? DEFAULT_CHUNK_SIZE;
    if (!granularity || granularity <= 0) {
      return requested;
    }
    const effective = Math.floor(requested / granularity) * granularity;
    // Non-final chunks must be a multiple of the server granularity. If the
    // user's requested chunk size rounds down to zero, fall back to the
    // smallest legal chunk size.
    return effective > 0 ? effective : granularity;
  }

  private async sendStart(): Promise<{
    uploadUrl: string;
    granularity: number | null;
    committedOffset?: number;
  }> {
    const rpc = this.context.rpc;
    if (!rpc.resolvedRequestType) {
      throw new Category3Error(
        `Cannot start resumable upload for method ${rpc.name}: ` +
          'the resolved request type is unavailable.',
      );
    }
    const message = rpc.resolvedRequestType.fromObject(this.context.request);
    const json = serializer.toProto3JSON(message, {
      numericEnums: this.context.numericEnums ?? false,
    });
    if (!json || typeof json !== 'object' || Array.isArray(json)) {
      throw new Category3Error(
        `Cannot serialize the request for resumable upload method ${rpc.name}.`,
      );
    }

    let queryString = '';
    try {
      const transcoded = transcode(json, rpc.parsedOptions);
      queryString = transcoded?.queryString ?? '';
    } catch {
      // The method may not have a google.api.http rule; the request body is
      // still sent as proto JSON to the upload endpoint.
    }
    if (this.context.numericEnums) {
      queryString = `${queryString ? `${queryString}&` : ''}$alt=json%3Benum-encoding=int`;
    }
    if (this.context.minifyJson) {
      queryString = `${queryString ? `${queryString}&` : ''}$prettyPrint=0`;
    }

    const uploadPrefix = this.context.uploadPrefix ?? '/resumable/upload';
    const url = `${this.getEndpointBase()}${uploadPrefix}${
      queryString ? `?${queryString}` : ''
    }`;
    const body = JSON.stringify(json);
    const startHeaders: {[name: string]: string} = {
      'content-type': 'application/json',
      ...(this.params?.startHeaders ?? {}),
    };

    const response = await this.sendCommandWithRetry(
      url,
      COMMAND_START,
      body,
      -1,
      startHeaders,
    );
    const uploadUrl = response.headers.get(UPLOAD_URL_HEADER);
    if (!uploadUrl) {
      throw new Category3Error(
        'The resumable upload start response did not include a ' +
          `${UPLOAD_URL_HEADER} header.`,
      );
    }
    const granularity = parseHeaderInt(
      response.headers.get(UPLOAD_CHUNK_GRANULARITY_HEADER),
    );
    // A successful start normally includes X-Goog-Upload-Status. If it is
    // missing, the session was still created: reconcile with a query and
    // resume from the server-committed offset instead of failing.
    if (response.headers.get(UPLOAD_STATUS_HEADER) === null) {
      this.state_ = ResumableUploadState.RECOVERY;
      const committedOffset = await this.queryOffset(uploadUrl);
      this.state_ = ResumableUploadState.STARTING;
      return {uploadUrl, granularity, committedOffset};
    }
    return {uploadUrl, granularity};
  }

  /**
   * Builds the protocol/host/port prefix for upload endpoints, parsing a
   * `host:port` form from `servicePath` when present (matching the fallback
   * transport behavior).
   */
  private getEndpointBase(): string {
    let servicePath = this.context.servicePath;
    let servicePort = this.context.servicePort;
    const match = servicePath.match(/^(.*):(\d+)$/);
    if (match) {
      servicePath = match[1];
      servicePort = parseInt(match[2], 10);
    }
    return `${this.context.protocol}://${servicePath}:${servicePort}`;
  }

  private async queryOffset(sessionUrl: string): Promise<number> {
    this.state_ = ResumableUploadState.RECOVERY;
    try {
      const response = await this.sendCommandWithRetry(
        sessionUrl,
        COMMAND_QUERY,
        null,
        -1,
        undefined,
      );
      if (response.status < 200 || response.status >= 300) {
        throw new Category3Error(
          `Resumable upload recovery query failed: HTTP ${response.status}.`,
          response.status,
        );
      }
      const size = parseHeaderInt(
        response.headers.get(UPLOAD_SIZE_RECEIVED_HEADER),
      );
      if (size === null) {
        throw new Category3Error(
          'The resumable upload recovery query did not include a ' +
            `${UPLOAD_SIZE_RECEIVED_HEADER} header.`,
        );
      }
      return size;
    } finally {
      this.state_ = ResumableUploadState.TRANSMISSION;
    }
  }

  private async runTransmission(sessionUrl: string): Promise<void> {
    try {
      // Annotated rather than inferred: Buffer.alloc() narrows to
      // Buffer<ArrayBuffer>, while the remainder returned by readNextChunk()
      // and skipBytes() is the wider Buffer<ArrayBufferLike>.
      let buffer: Buffer = Buffer.alloc(0);
      let offset = this.committedBytes_;
      let previousChunk: Buffer | null = null;
      let response: {} | null = null;
      await this.openSourceAt(offset);

      // eslint-disable-next-line no-constant-condition
      while (true) {
        this.assertActive();
        this.assertDeadline();
        const read = await this.readNextChunk(buffer);
        buffer = read.remainder;

        if (read.chunk === null) {
          // EOF with no pending bytes: either the stream was empty or the
          // payload ended exactly on a chunk boundary. Send the finalize
          // command on its own.
          this.state_ = ResumableUploadState.FINALIZING;
          response = await this.transmitFinalize(sessionUrl, null, offset);
          break;
        }

        const transmit = await this.transmitChunk(
          sessionUrl,
          read.chunk,
          offset,
          previousChunk,
          read.eof,
        );
        previousChunk = read.chunk;
        offset = transmit.newOffset;
        this.committedBytes_ = offset;
        this.reportProgress();

        if (transmit.skipAhead > 0) {
          if (buffer.length >= transmit.skipAhead) {
            buffer = buffer.subarray(transmit.skipAhead);
          } else {
            buffer = await this.skipBytes(transmit.skipAhead - buffer.length);
          }
        }
        if (transmit.finalized) {
          response = transmit.response;
          break;
        }
        if (response !== null) {
          break;
        }
      }

      if (this.state_ !== ResumableUploadState.FINALIZING) {
        this.state_ = ResumableUploadState.FINALIZING;
      }
      if (response === null) {
        throw new Category3Error(
          'The resumable upload completed without a final response.',
        );
      }
      this.response_ = response;
      this.done_ = true;
      this.clearDeadlineTimer();
      this.resolveFinished_(response);
    } catch (err) {
      if (err instanceof RestartUploadError) {
        // The server reported an offset that is not covered by the local
        // buffer. Re-open the source at the committed offset and continue.
        try {
          this.committedBytes_ = err.offset;
          this.reportProgress();
          await this.openSourceAt(err.offset);
          // Restart the transmission loop from the new offset.
          await this.runTransmission(sessionUrl);
          return;
        } catch (restartErr) {
          if (!this.canceled_) {
            this.done_ = true;
            this.clearDeadlineTimer();
            this.rejectFinished_(restartErr as Error);
          }
          return;
        }
      }
      if (!this.canceled_) {
        this.done_ = true;
        this.clearDeadlineTimer();
        this.rejectFinished_(err as Error);
      }
    }
  }

  /**
   * Arms a watchdog timer that enforces the global deadline across the whole
   * session, including time spent waiting for data from the upload stream
   * (which the point-in-time {@link assertDeadline} checks cannot cover).
   */
  private armDeadlineTimer(): void {
    this.clearDeadlineTimer();
    this.deadlineTimer = setTimeout(() => {
      if (this.canceled_ || this.done_) {
        return;
      }
      // Abort any in-flight request and release the stream so the
      // transmission loop terminates instead of remaining suspended.
      this.activeAbortController?.abort();
      this.clearStallTimer();
      this.releaseActiveStream();
      this.done_ = true;
      this.rejectFinished_(this.deadlineError());
    }, this.globalDeadlineMs);
  }

  private clearDeadlineTimer(): void {
    if (this.deadlineTimer) {
      clearTimeout(this.deadlineTimer);
      this.deadlineTimer = null;
    }
  }

  private clearStallTimer(): void {
    if (this.stallTimer) {
      clearTimeout(this.stallTimer);
      this.stallTimer = null;
    }
  }

  /**
   * Opens the current upload stream from the source at the given byte
   * offset, releasing any previously active stream first.
   */
  private async openSourceAt(offset: number): Promise<void> {
    const source = this.params?.uploadSource;
    if (!source) {
      throw createGoogleError(
        'Cannot open the upload source because start() was not called.',
      );
    }
    this.releaseActiveStream();
    const stream = source.getStream(offset);
    this.activeStream_ = stream;
    this.activeIterator_ = (stream as unknown as AsyncIterable<unknown>)[
      Symbol.asyncIterator
    ]();
  }

  /**
   * Best-effort release of the active upload stream, so a transmission
   * loop blocked waiting for stream data does not stay subscribed forever.
   */
  private releaseActiveStream(): void {
    if (this.activeStream_) {
      (
        this.activeStream_ as unknown as {
          destroy?: (error?: Error) => void;
        }
      ).destroy?.();
      this.activeStream_ = null;
      this.activeIterator_ = null;
    }
  }

  private deadlineError(): GoogleError {
    return createGoogleError(
      'The resumable upload exceeded its global deadline of ' +
        `${this.globalDeadlineMs} ms.`,
      Status.DEADLINE_EXCEEDED,
    );
  }

  /**
   * Reads the next chunk of the requested size from the stream, aggregating
   * stream data events until the chunk is full or the stream ends.
   */
  private async readNextChunk(buffer: Buffer): Promise<ReadChunkResult> {
    const iterator = this.activeIterator_;
    if (!iterator) {
      throw createGoogleError(
        'Cannot read from the upload source because it is not open.',
      );
    }
    const chunkSize = this.effectiveChunkSize_;
    while (buffer.length < chunkSize) {
      const next = await iterator.next();
      if (next.done) {
        if (buffer.length === 0) {
          return {chunk: null, eof: true, remainder: Buffer.alloc(0)};
        }
        return {chunk: buffer, eof: true, remainder: Buffer.alloc(0)};
      }
      buffer = Buffer.concat([buffer, asBuffer(next.value)]);
    }
    const chunk = buffer.subarray(0, chunkSize);
    return {chunk, eof: false, remainder: buffer.subarray(chunkSize)};
  }

  /**
   * Discards `bytes` bytes from the active stream, returning any leftover
   * bytes from the chunk that crossed the boundary so they can be prepended
   * to the transmission buffer.
   */
  private async skipBytes(bytes: number): Promise<Buffer> {
    const iterator = this.activeIterator_;
    if (!iterator) {
      throw createGoogleError(
        'Cannot skip the upload source because it is not open.',
      );
    }
    let remaining = bytes;
    while (remaining > 0) {
      const next = await iterator.next();
      if (next.done) {
        throw new Category3Error(
          `The server committed ${bytes} bytes beyond the end of the ` +
            'provided stream; the payload appears shorter than expected.',
        );
      }
      const chunk = asBuffer(next.value);
      if (chunk.length >= remaining) {
        return chunk.subarray(remaining);
      }
      remaining -= chunk.length;
    }
    return Buffer.alloc(0);
  }

  /**
   * Transmits a chunk, applying the outer recovery loop when the server
   * reports a state mismatch (Category 2 error).
   */
  private async transmitChunk(
    sessionUrl: string,
    chunk: Buffer,
    offset: number,
    previousChunk: Buffer | null,
    isFinal: boolean,
  ): Promise<TransmitResult> {
    let currentChunk = chunk;
    let currentOffset = offset;
    let currentPrevious = previousChunk;

    // eslint-disable-next-line no-constant-condition
    while (true) {
      this.assertActive();
      this.assertDeadline();
      const command = isFinal ? COMMAND_UPLOAD_FINALIZE : COMMAND_UPLOAD;
      try {
        const response = await this.sendCommandWithRetry(
          sessionUrl,
          command,
          currentChunk,
          currentOffset,
          undefined,
        );
        if (isFinal) {
          return {
            finalized: true,
            response: this.decodeFinalResponse(response),
            newOffset: currentOffset + currentChunk.length,
            skipAhead: 0,
          };
        }
        return {
          finalized: false,
          response: null,
          newOffset: currentOffset + currentChunk.length,
          skipAhead: 0,
        };
      } catch (err) {
        const recoverable =
          err instanceof Category2Error || err instanceof StallError;
        if (!recoverable) {
          throw err;
        }

        // Outer recovery: query the server for the exact committed offset,
        // align the local state, and re-enter the transmission phase.
        this.state_ = ResumableUploadState.RECOVERY;
        const serverOffset = await this.queryOffset(sessionUrl);
        this.state_ = ResumableUploadState.TRANSMISSION;
        this.reportProgress();

        if (err instanceof StallError) {
          // A stalled request may have committed any number of bytes; the
          // safest recovery is to re-open the source at the committed offset.
          throw new RestartUploadError(serverOffset);
        }
        if (serverOffset === currentOffset) {
          // Nothing was committed; retry the same chunk.
          continue;
        }
        if (serverOffset > currentOffset) {
          if (serverOffset === currentOffset + currentChunk.length) {
            // The chunk was committed but the response was lost.
            if (isFinal) {
              const finalResponse = await this.transmitFinalize(
                sessionUrl,
                null,
                serverOffset,
              );
              return {
                finalized: true,
                response: finalResponse,
                newOffset: serverOffset,
                skipAhead: 0,
              };
            }
            return {
              finalized: false,
              response: null,
              newOffset: serverOffset,
              skipAhead: 0,
            };
          }
          if (serverOffset > currentOffset + currentChunk.length) {
            // The server is ahead of the local state; skip the stream forward
            // by the number of bytes already committed.
            if (isFinal) {
              // The final chunk was already committed; retrieve the response
              // by sending the finalize command on its own.
              const finalResponse = await this.transmitFinalize(
                sessionUrl,
                null,
                serverOffset,
              );
              return {
                finalized: true,
                response: finalResponse,
                newOffset: serverOffset,
                skipAhead: 0,
              };
            }
            return {
              finalized: false,
              response: null,
              newOffset: serverOffset,
              skipAhead: serverOffset - (currentOffset + currentChunk.length),
            };
          }
          // The server committed part of this chunk; retransmit the tail.
          currentChunk = currentChunk.subarray(serverOffset - currentOffset);
          currentOffset = serverOffset;
          continue;
        }

        // The server is behind the local state: data from the previous chunk
        // must be re-transmitted from the in-memory buffer.
        const bufferedStart = currentPrevious
          ? currentOffset - currentPrevious.length
          : currentOffset;
        if (currentPrevious && serverOffset >= bufferedStart) {
          const rebuilt = Buffer.concat([currentPrevious, currentChunk]);
          currentChunk = rebuilt.subarray(serverOffset - bufferedStart);
          currentOffset = serverOffset;
          currentPrevious = null;
          continue;
        }
        // The requested offset is not covered by the in-memory buffer. The
        // source is seekable, so restart the stream at the server offset.
        throw new RestartUploadError(serverOffset);
      }
    }
  }

  /**
   * Sends the `finalize` command (optionally preceded by the final chunk),
   * recovering from state mismatches by re-querying the committed offset and
   * re-aligning the in-memory buffer.
   */
  private async transmitFinalize(
    sessionUrl: string,
    finalChunk: Buffer | null,
    offset: number,
  ): Promise<{}> {
    let chunk = finalChunk;
    let currentOffset = offset;

    // eslint-disable-next-line no-constant-condition
    while (true) {
      this.assertActive();
      this.assertDeadline();
      const command = chunk ? COMMAND_UPLOAD_FINALIZE : COMMAND_FINALIZE;
      try {
        const response = await this.sendCommandWithRetry(
          sessionUrl,
          command,
          chunk,
          currentOffset,
          undefined,
        );
        return this.decodeFinalResponse(response);
      } catch (err) {
        const recoverable =
          err instanceof Category2Error || err instanceof StallError;
        if (!recoverable) {
          throw err;
        }
        const serverOffset = await this.queryOffset(sessionUrl);
        this.reportProgress();
        if (err instanceof StallError) {
          throw new RestartUploadError(serverOffset);
        }
        if (chunk) {
          if (serverOffset === currentOffset) {
            // Nothing was committed; retry the same final chunk.
            continue;
          }
          if (serverOffset === currentOffset + chunk.length) {
            // The final chunk was committed; finalize on its own.
            chunk = null;
            currentOffset = serverOffset;
            continue;
          }
          if (
            serverOffset > currentOffset &&
            serverOffset < currentOffset + chunk.length
          ) {
            chunk = chunk.subarray(serverOffset - currentOffset);
            currentOffset = serverOffset;
            continue;
          }
          if (serverOffset > currentOffset + chunk.length) {
            chunk = null;
            currentOffset = serverOffset;
            continue;
          }
        } else {
          if (serverOffset >= currentOffset) {
            currentOffset = serverOffset;
            continue;
          }
        }

        throw new RestartUploadError(serverOffset);
      }
    }
  }

  private decodeFinalResponse(response: ResumableUploadResponse): {} {
    try {
      return decodeResponse(this.context.rpc, true, response.body);
    } catch (err) {
      throw new Category3Error(
        `Failed to decode the resumable upload final response: ${
          (err as Error).message
        }`,
      );
    }
  }

  /**
   * Sends a single protocol command, retrying transient (Category 1) errors
   * with exponential backoff.
   */
  private async sendCommandWithRetry(
    url: string,
    command: string,
    body: Buffer | string | null,
    offset: number,
    extraHeaders: {[name: string]: string} | undefined,
  ): Promise<ResumableUploadResponse> {
    const retry = this.getRetrySettings();
    let attempt = 0;
    let delay = retry.initialDelayMs;

    // eslint-disable-next-line no-constant-condition
    while (true) {
      try {
        return await this.fetchCommand(
          url,
          command,
          body,
          offset,
          extraHeaders,
        );
      } catch (err) {
        if (this.canceled_) {
          throw createGoogleError(
            'The resumable upload was cancelled.',
            Status.CANCELLED,
          );
        }
        if (err instanceof Category2Error || err instanceof Category3Error) {
          throw err;
        }
        if (!(err instanceof TransientError)) {
          throw err;
        }
        if (attempt >= retry.maxRetries) {
          throw createGoogleError(
            `Exceeded the maximum number of retries (${retry.maxRetries}) ` +
              `while sending the resumable upload command "${command}".`,
            Status.DEADLINE_EXCEEDED,
          );
        }
        this.assertDeadline();
        await sleep(delay);
        delay = Math.min(delay * retry.delayMultiplier, retry.maxDelayMs);
        attempt += 1;
      }
    }
  }

  private async fetchCommand(
    url: string,
    command: string,
    body: Buffer | string | null,
    offset: number,
    extraHeaders: {[name: string]: string} | undefined,
  ): Promise<ResumableUploadResponse> {
    const headers: {[name: string]: string} = {
      [UPLOAD_PROTOCOL_HEADER]: UPLOAD_PROTOCOL_RESUMABLE,
      [UPLOAD_COMMAND_HEADER]: command,
    };
    const requiresOffset =
      body !== null ||
      command === COMMAND_UPLOAD ||
      command === COMMAND_UPLOAD_FINALIZE ||
      command === COMMAND_FINALIZE;
    if (requiresOffset && offset >= 0) {
      headers[UPLOAD_OFFSET_HEADER] = String(offset);
    }
    if (command === COMMAND_START) {
      headers['content-type'] = 'application/json';
    } else if (body !== null) {
      headers['content-type'] = 'application/octet-stream';
    }
    if (extraHeaders) {
      for (const [name, value] of Object.entries(extraHeaders)) {
        headers[name.toLowerCase()] = value;
      }
    }

    const controller = new AbortController();
    this.activeAbortController = controller;
    let stalled = false;
    const isTransferRequest =
      command === COMMAND_UPLOAD ||
      command === COMMAND_UPLOAD_FINALIZE ||
      command === COMMAND_FINALIZE;
    if (isTransferRequest) {
      this.clearStallTimer();
      this.stallTimer = setTimeout(() => {
        stalled = true;
        controller.abort(new Error('Resumable upload stalled.'));
      }, this.params?.stallTimeoutMs ?? DEFAULT_STALL_TIMEOUT_MS);
    }
    try {
      // Mirror the fetch behavior used by the REST fallback transport:
      // `responseType: 'stream'` returns a Response-like object with access
      // to status, headers, and the body. `validateStatus` is disabled so
      // error statuses can be classified as Category 1/2/3 by the state
      // machine instead of being rejected by gaxios.
      const response = (await this.context.auth.request({
        url,
        method: 'POST',
        headers,
        body:
          body === null || body === undefined
            ? undefined
            : typeof body === 'string'
              ? body
              : Buffer.from(body),
        signal: controller.signal,
        responseType: 'stream',
        timeout: this.params?.timeout ?? DEFAULT_PER_REQUEST_TIMEOUT_MS,
        validateStatus: () => true,
      })) as unknown as Response;
      const responseBody = Buffer.from(await response.arrayBuffer());
      const uploadResponse: ResumableUploadResponse = {
        status: response.status,
        headers: this.normalizeHeaders(response.headers),
        body: responseBody,
      };
      this.throwOnNonTransientStatus(uploadResponse, command);
      return uploadResponse;
    } catch (err) {
      if (this.canceled_) {
        throw createGoogleError(
          'The resumable upload was cancelled.',
          Status.CANCELLED,
        );
      }
      if (stalled) {
        throw new StallError(
          'The resumable upload request stalled: no progress was made within ' +
            `${this.params?.stallTimeoutMs ?? DEFAULT_STALL_TIMEOUT_MS} ms.`,
        );
      }
      if (err instanceof Category2Error || err instanceof Category3Error) {
        throw err;
      }
      throw new TransientError(
        'Transient failure while sending the resumable upload command ' +
          `"${command}": ${(err as Error).message}`,
      );
    } finally {
      this.clearStallTimer();
      if (this.activeAbortController === controller) {
        this.activeAbortController = null;
      }
    }
  }

  /**
   * Classifies the HTTP response status. Transient errors are thrown as
   * {@link TransientError}, state mismatches as {@link Category2Error}, and
   * everything else as {@link Category3Error}.
   */
  private throwOnNonTransientStatus(
    response: ResumableUploadResponse,
    command: string,
  ): void {
    if (response.status >= 200 && response.status < 300) {
      const uploadStatus = response.headers.get(UPLOAD_STATUS_HEADER);
      if (uploadStatus === null) {
        if (this.state_ === ResumableUploadState.RECOVERY) {
          // During a recovery query there is no offset to reconcile, so a
          // missing status header is fatal.
          throw new Category3Error(
            `The resumable upload ${command} response did not include a ` +
              `${UPLOAD_STATUS_HEADER} header while in recovery.`,
          );
        }
        if (command === COMMAND_START) {
          // The start handler reconciles via the returned session URL.
          return;
        }
        // A missing status header on a starting/transmission/finalizing
        // response is a recoverable state mismatch.
        if (
          this.state_ === ResumableUploadState.STARTING ||
          this.state_ === ResumableUploadState.TRANSMISSION ||
          this.state_ === ResumableUploadState.FINALIZING
        ) {
          throw new Category2Error(
            'The resumable upload response did not include a ' +
              `${UPLOAD_STATUS_HEADER} header.`,
          );
        }
        throw new Category3Error(
          `The resumable upload ${command} response did not include a ` +
            `${UPLOAD_STATUS_HEADER} header.`,
        );
      }
      return;
    }
    if (CATEGORY_2_RETRY_CODES.has(response.status)) {
      throw new Category2Error(
        `Resumable upload state mismatch: HTTP ${response.status}.`,
        response.status,
      );
    }
    if (CATEGORY_1_RETRY_CODES.has(response.status)) {
      throw new TransientError(
        `Resumable upload transient error: HTTP ${response.status}.`,
      );
    }
    throw new Category3Error(
      `Resumable upload failed: HTTP ${response.status}.`,
      response.status,
    );
  }

  private normalizeHeaders(headers: unknown): {
    get(name: string): string | null;
  } {
    if (headers && typeof (headers as {get?: unknown}).get === 'function') {
      return headers as {get(name: string): string | null};
    }
    const map = new Map<string, string>();
    if (headers && typeof headers === 'object') {
      for (const [name, value] of Object.entries(
        headers as {[name: string]: unknown},
      )) {
        map.set(name.toLowerCase(), String(value));
      }
    }
    return {
      get(name: string): string | null {
        return map.get(name.toLowerCase()) ?? null;
      },
    };
  }

  private getRetrySettings(): {
    maxRetries: number;
    initialDelayMs: number;
    delayMultiplier: number;
    maxDelayMs: number;
  } {
    const retry = this.params?.retry;
    if (retry === null) {
      return {
        maxRetries: 0,
        initialDelayMs: 100,
        delayMultiplier: 1.3,
        maxDelayMs: 60000,
      };
    }
    const backoffSettings =
      retry?.backoffSettings ?? createDefaultBackoffSettings();
    return {
      maxRetries: backoffSettings.maxRetries ?? DEFAULT_MAX_INNER_RETRIES,
      initialDelayMs: backoffSettings.initialRetryDelayMillis ?? 100,
      delayMultiplier: backoffSettings.retryDelayMultiplier ?? 1.3,
      maxDelayMs: backoffSettings.maxRetryDelayMillis ?? 60000,
    };
  }

  private reportProgress(): void {
    if (this.params?.onProgress && this.uploadUrl_) {
      this.params.onProgress({
        bytesUploaded: this.committedBytes_,
        uploadUrl: this.uploadUrl_,
      });
    }
  }

  private assertActive(): void {
    if (this.canceled_) {
      throw createGoogleError(
        'The resumable upload was cancelled.',
        Status.CANCELLED,
      );
    }
  }

  private assertDeadline(): void {
    if (Date.now() - this.startTimeMs >= this.globalDeadlineMs) {
      throw this.deadlineError();
    }
  }
}
