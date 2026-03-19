/*!
 * Copyright 2018 Google Inc. All Rights Reserved.
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

import {promisify} from '@google-cloud/promisify';
import {ClientStub, GoogleError, grpc} from 'google-gax';
import * as isStreamEnded from 'is-stream-ended';
import {PassThrough} from 'stream';

import {PullRetry} from './pull-retry';
import {Subscriber} from './subscriber';
import {google} from '../protos/protos';
import {defaultOptions} from './default-options';
import {Duration} from './temporal';
import {ExponentialRetry} from './exponential-retry';
import {DebugMessage} from './debug';
import {logs as baseLogs} from './logs';

/**
 * Loggers. Exported for unit tests.
 *
 * @private
 */
export const logs = {
  subscriberStreams: baseLogs.pubsub.sublog('subscriber-streams'),
};

/*!
 * Frequency to ping streams.
 */
const KEEP_ALIVE_INTERVAL = 30000;

/*!
 * Deadline for the stream.
 */
const PULL_TIMEOUT = require('./v1/subscriber_client_config.json').interfaces[
  'google.pubsub.v1.Subscriber'
].methods.StreamingPull.timeout_millis;

/**
 * @typedef {object} MessageStreamOptions
 * @property {number} [highWaterMark=0] Configures the Buffer level for all
 *     underlying streams. See
 *     {@link https://nodejs.org/en/docs/guides/backpressuring-in-streams/} for
 *     more details.
 * @property {number} [maxStreams=5] Number of streaming connections to make.
 * @property {number} [timeout=300000] Timeout for establishing a connection.
 */
export interface MessageStreamOptions {
  highWaterMark?: number;
  maxStreams?: number;
  timeout?: number;
  retryMinBackoff?: Duration;
  retryMaxBackoff?: Duration;
}

/*!
 * default stream options
 */
const DEFAULT_OPTIONS: MessageStreamOptions = {
  highWaterMark: 0,
  maxStreams: defaultOptions.subscription.maxStreams,
  timeout: 300000,
  retryMinBackoff: Duration.from({milliseconds: 100}),
  retryMaxBackoff: Duration.from({seconds: 60}),
};

interface StreamState {
  highWaterMark: number;
}

type StreamingPullRequest = google.pubsub.v1.IStreamingPullRequest;
type PullResponse = google.pubsub.v1.IPullResponse;
type PullStream = grpc.ClientDuplexStream<
  StreamingPullRequest,
  PullResponse
> & {
  _readableState: StreamState;
};

/**
 * Error wrapper for gRPC status objects.
 *
 * @class
 *
 * @param {object} status The gRPC status object.
 */
export class StatusError extends Error implements grpc.ServiceError {
  code: grpc.status;
  details: string;
  metadata: grpc.Metadata;
  constructor(status: grpc.StatusObject) {
    super(status.details);
    this.code = status.code;
    this.details = status.details;
    this.metadata = status.metadata;
  }
}

/**
 * Error thrown when we fail to open a channel for the message stream.
 *
 * @class
 *
 * @param {Error} err The original error.
 */
export class ChannelError extends Error implements grpc.ServiceError {
  code: grpc.status;
  details: string;
  metadata: grpc.Metadata;
  constructor(err: Error) {
    super(
      `Failed to connect to channel. Reason: ${
        process.env.DEBUG_GRPC ? err.stack : err.message
      }`,
    );
    this.code = err.message.includes('deadline')
      ? grpc.status.DEADLINE_EXCEEDED
      : grpc.status.UNKNOWN;
    this.details = err.message;
    this.metadata = new grpc.Metadata();
  }
}

// Provide a lightweight wrapper around streams so we can track them
// deterministically for retries.
interface StreamTracked {
  stream?: PullStream;
  receivedStatus?: boolean;
}

/**
 * Streaming class used to manage multiple StreamingPull requests.
 *
 * @private
 * @class
 *
 * @param {Subscriber} sub The parent subscriber.
 * @param {MessageStreamOptions} [options] The message stream options.
 */
export class MessageStream extends PassThrough {
  private _keepAliveHandle?: NodeJS.Timeout;
  private _options: MessageStreamOptions;
  private _retrier: ExponentialRetry<StreamTracked>;

  private _streams: StreamTracked[];

  private _subscriber: Subscriber;
  constructor(sub: Subscriber, options = {} as MessageStreamOptions) {
    options = Object.assign({}, DEFAULT_OPTIONS, options);

    super({objectMode: true, highWaterMark: options.highWaterMark});

    this._options = options;
    this._retrier = new ExponentialRetry<{}>(
      options.retryMinBackoff!, // Filled by DEFAULT_OPTIONS
      options.retryMaxBackoff!,
    );

    this._streams = [];
    for (let i = 0; i < options.maxStreams!; i++) {
      this._streams.push({});
    }

    this._subscriber = sub;
  }

  /**
   * Actually starts the stream setup and subscription pulls.
   * This is separated so that others can properly wait on the promise.
   *
   * @private
   */
  async start(): Promise<void> {
    await this._fillStreamPool();

    this._keepAliveHandle = setInterval(
      () => this._keepAlive(),
      KEEP_ALIVE_INTERVAL,
    );
    this._keepAliveHandle.unref();
  }

  /**
   * Updates the stream ack deadline with the server.
   *
   * @param {Duration} deadline The new deadline value to set.
   */
  setStreamAckDeadline(deadline: Duration) {
    const request: StreamingPullRequest = {
      streamAckDeadlineSeconds: deadline.totalOf('second'),
    };

    for (const tracker of this._streams) {
      // We don't need a callback on this one, it's advisory.
      if (tracker.stream) {
        tracker.stream.write(request);
      }
    }
  }

  /**
   * Destroys the stream and any underlying streams.
   *
   * @param {error?} error An error to emit, if any.
   * @param {Function} callback Callback for completion of any destruction.
   * @private
   */
  _destroy(error: Error | null, callback: (error: Error | null) => void): void {
    if (this._keepAliveHandle) {
      clearInterval(this._keepAliveHandle);
    }

    this._retrier.close();

    for (let i = 0; i < this._streams.length; i++) {
      const tracker = this._streams[i];
      if (tracker.stream) {
        this._removeStream(i, 'overall message stream destroyed', 'n/a');
      }
    }

    callback(error);
  }

  /**
   * Adds a StreamingPull stream to the combined stream.
   *
   * @private
   *
   * @param {stream} stream The StreamingPull stream.
   */
  private _replaceStream(
    index: number,
    stream: PullStream,
    reason?: string,
  ): void {
    this._removeStream(index, reason, 'stream replacement');

    this._setHighWaterMark(stream);
    const tracker = this._streams[index];
    tracker.stream = stream;
    tracker.receivedStatus = false;

    stream
      .on('error', err => this._onError(index, err))
      .once('status', status => this._onStatus(index, status))
      .on('data', (data: PullResponse) => this._onData(index, data));
  }

  private _onData(index: number, data: PullResponse): void {
    // Mark this stream as alive again. (reset backoff)
    const tracker = this._streams[index];
    this._retrier.reset(tracker);

    this.emit('data', data);
  }

  /**
   * Attempts to create and cache the desired number of StreamingPull requests.
   * gRPC does not supply a way to confirm that a stream is connected, so our
   * best bet is to open the streams and use the client.waitForReady() method to
   * confirm everything is ok.
   *
   * @private
   *
   * @returns {Promise}
   */
  private async _fillStreamPool(): Promise<void> {
    if (this.destroyed) {
      return;
    }

    let client!: ClientStub;

    try {
      client = await this._getClient();
    } catch (e) {
      const err = e as Error;
      this.destroy(err);
    }

    const all: Promise<void>[] = [];
    for (let i = 0; i < this._streams.length; i++) {
      all.push(this._fillOne(i, client, 'initial fill'));
    }
    await Promise.all(all);

    try {
      await this._waitForClientReady(client);
    } catch (e) {
      const err = e as Error;
      this.destroy(err);
    }
  }

  private async _fillOne(index: number, client?: ClientStub, reason?: string) {
    if (this.destroyed) {
      logs.subscriberStreams.info(
        'not filling stream %i for reason "%s" because already shut down',
        index,
        reason,
      );

      return;
    }

    const tracker = this._streams[index];
    if (tracker.stream) {
      return;
    }

    if (!client) {
      try {
        client = await this._getClient();
      } catch (e) {
        logs.subscriberStreams.error(
          'unable to create stream %i: %o',
          index,
          e,
        );
        const err = e as Error;
        this.destroy(err);
        return;
      }
    }

    const deadline = Date.now() + PULL_TIMEOUT;
    const request: StreamingPullRequest = {
      subscription: this._subscriber.name,
      streamAckDeadlineSeconds: this._subscriber.ackDeadline,
      maxOutstandingMessages: this._subscriber.useLegacyFlowControl
        ? 0
        : this._subscriber.maxMessages,
      maxOutstandingBytes: this._subscriber.useLegacyFlowControl
        ? 0
        : this._subscriber.maxBytes,
    };
    const otherArgs = {
      headers: {
        'x-goog-request-params': 'subscription=' + this._subscriber.name,
      },
    };

    const stream: PullStream = client.streamingPull({deadline, otherArgs});
    this._replaceStream(index, stream, reason);
    stream.write(request);
  }

  /**
   * It is critical that we keep as few `PullResponse` objects in memory as
   * possible to reduce the number of potential redeliveries. Because of this we
   * want to bypass gax for StreamingPull requests to avoid creating a Duplexify
   * stream, doing so essentially doubles the size of our readable buffer.
   *
   * @private
   *
   * @returns {Promise.<object>}
   */
  private async _getClient(): Promise<ClientStub> {
    const client = await this._subscriber.getClient();
    await client.initialize();
    return client.subscriberStub as Promise<ClientStub>;
  }

  /**
   * Since we do not use the streams to ack/modAck messages, they will close
   * by themselves unless we periodically send empty messages.
   *
   * @private
   */
  private _keepAlive(): void {
    logs.subscriberStreams.info(
      'sending keepAlive to %i streams',
      this._streams.length,
    );
    this._streams.forEach(tracker => {
      // It's possible that a status event fires off (signaling the rpc being
      // closed) but the stream hasn't drained yet. Writing to such a stream will
      // result in a `write after end` error.
      if (!tracker.receivedStatus && tracker.stream) {
        tracker.stream.write({});
      }
    });
  }

  // Returns the number of tracked streams that contain an actual stream (good or not).
  private _activeStreams(): number {
    return this._streams.reduce((p, t) => (t.stream ? 1 : 0) + p, 0);
  }

  /**
   * Once the stream has nothing left to read, we'll remove it and attempt to
   * refill our stream pool if needed.
   *
   * @private
   *
   * @param {number} index The ended stream.
   * @param {object} status The stream status.
   */
  private _onEnd(index: number, status: grpc.StatusObject): void {
    const willRetry = PullRetry.retry(status);
    this._removeStream(
      index,
      'stream was closed',
      willRetry ? 'will be retried' : 'will not be retried',
    );

    const statusError = new StatusError(status);
    if (willRetry) {
      const message = `Subscriber stream ${index} has ended with status ${status.code}; will be retried.`;
      logs.subscriberStreams.info('%s', message);
      this.emit('debug', new DebugMessage(message, statusError));
      if (PullRetry.resetFailures(status)) {
        this._retrier.reset(this._streams[index]);
      }
      this._retrier.retryLater(this._streams[index], () =>
        this._fillOne(index, undefined, 'retry'),
      );
    } else if (this._activeStreams() === 0) {
      const message = `Subscriber stream ${index} has ended with status ${status.code}; will not be retried.`;
      logs.subscriberStreams.info('%s', message);
      this.emit('debug', new DebugMessage(message, statusError));

      // No streams left, and nothing to retry.
      this.destroy(new StatusError(status));
    }
  }

  /**
   * gRPC will usually emit a status as a ServiceError via `error` event before
   * it emits the status itself. In order to cut back on emitted errors, we'll
   * wait a tick on error and ignore it if the status has been received.
   *
   * @private
   *
   * @param {number} index The stream that errored.
   * @param {Error} err The error.
   */
  private async _onError(index: number, err: Error): Promise<void> {
    await promisify(process.nextTick)();

    const code = (err as StatusError).code;
    const tracker = this._streams[index];
    const receivedStatus =
      !tracker.stream || (tracker.stream && !tracker.receivedStatus);

    // For the user-cancelled errors, we don't need to show those, we're handling
    // notifying of us closing the stream elsewhere.
    if ((err as GoogleError).code !== grpc.status.CANCELLED) {
      logs.subscriberStreams.error('error on stream %i: %o', index, err);
    }

    if (typeof code !== 'number' || !receivedStatus) {
      this.emit('error', err);
    }
  }

  /**
   * gRPC streams will emit a status event once the connection has been
   * terminated. This is preferable to end/close events because we'll receive
   * information as to why the stream closed and if it is safe to open another.
   *
   * @private
   *
   * @param {stream} stream The stream that was closed.
   * @param {object} status The status message stating why it was closed.
   */
  private _onStatus(index: number, status: grpc.StatusObject): void {
    if (this.destroyed) {
      return;
    }

    const tracker = this._streams[index];
    tracker.receivedStatus = true;
    if (!tracker.stream) {
      // This shouldn't really happen, but in case wires get crossed.
      return;
    }

    if (isStreamEnded(tracker.stream)) {
      this._onEnd(index, status);
    } else {
      tracker.stream.once('end', () => this._onEnd(index, status));
      tracker.stream.push(null);
    }
  }

  /**
   * Removes a stream from the combined stream.
   *
   * @private
   *
   * @param {number} index The stream to remove.
   */
  private _removeStream(
    index: number,
    reason?: string,
    whatNext?: string,
  ): void {
    const tracker = this._streams[index];
    if (tracker.stream) {
      logs.subscriberStreams.info(
        'closing stream %i; why: %s; next: %s',
        index,
        reason,
        whatNext,
      );
      tracker.stream.unpipe(this);
      tracker.stream.cancel();
      tracker.stream = undefined;
      tracker.receivedStatus = undefined;
    }
  }

  /**
   * Neither gRPC nor gax allow for the highWaterMark option to be specified.
   * However using the default value (16) it is possible to end up with a lot of
   * PullResponse objects stored in internal buffers. If this were to happen
   * and the client were slow to process messages, we could potentially see a
   * very large number of redeliveries happen before the messages even made it
   * to the client.
   *
   * @private
   *
   * @param {Duplex} stream The duplex stream to adjust the
   *     highWaterMarks for.
   */
  private _setHighWaterMark(stream: PullStream): void {
    stream._readableState.highWaterMark = this._options.highWaterMark!;
  }

  /**
   * Promisified version of gRPC's Client#waitForReady function.
   *
   * @private
   *
   * @param {object} client The gRPC client to wait for.
   * @returns {Promise}
   */
  private async _waitForClientReady(client: ClientStub): Promise<void> {
    const deadline = Date.now() + this._options.timeout!;

    try {
      await promisify(client.waitForReady).call(client, deadline);
    } catch (e) {
      const err = e as Error;
      throw new ChannelError(err);
    }
  }
}
