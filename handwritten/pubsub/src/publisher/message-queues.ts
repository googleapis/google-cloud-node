/*!
 * Copyright 2019 Google Inc. All Rights Reserved.
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

import {ServiceError} from 'google-gax';
import {EventEmitter} from 'events';

import {BatchPublishOptions, MessageBatch} from './message-batch';
import {PublishError} from './publish-error';
import {Publisher, PubsubMessage, PublishCallback} from './';
import {google} from '../../protos/protos';
import * as tracing from '../telemetry-tracing';
import {filterMessage} from './pubsub-message';
import {promisify} from 'util';
import {logs as baseLogs} from '../logs';

/**
 * Loggers. Exported for unit tests.
 *
 * @private
 */
export const logs = {
  publishBatch: baseLogs.pubsub.sublog('publish-batch'),
};

/**
 * Queues are used to manage publishing batches of messages.
 *
 * @private
 *
 * @param {Publisher} publisher The parent publisher.
 */
export abstract class MessageQueue extends EventEmitter {
  batchOptions: BatchPublishOptions;
  publisher: Publisher;
  pending?: NodeJS.Timeout;

  constructor(publisher: Publisher) {
    super();
    this.publisher = publisher;
    this.batchOptions = publisher.settings.batching!;
  }

  /**
   * Forces the queue to update its options from the publisher.
   * The specific queue will need to do a bit more to pass the new
   * values down into any MessageBatch.
   *
   * This is only for use by {@link Publisher}.
   *
   * @private
   */
  updateOptions() {
    this.batchOptions = this.publisher.settings.batching!;
  }

  /**
   * Adds a message to the queue.
   *
   * @abstract
   *
   * @param {object} message The message to publish.
   * @param {PublishCallback} callback The publish callback.
   */
  abstract add(message: PubsubMessage, callback: PublishCallback): void;

  /**
   * Method to initiate publishing. Full drain behaviour depends on whether the
   * queues are ordered or not.
   *
   * @abstract
   * @param {string} [reason] Optional log explanation of why the publish is happening.
   */
  abstract publish(reason: string): Promise<void>;

  /*!
   * Logs about a batch being sent, and why.
   * @private
   */
  private logBatch(reason: string, length: number, bytes: number) {
    logs.publishBatch.info(
      '%s triggered a publish batch of %i messages, a total of %i bytes',
      reason,
      length,
      bytes,
    );
  }

  /**
   * Method to finalize publishing. Does as many publishes as are needed
   * to finish emptying the queues, and fires a drain event afterward.
   *
   * @abstract
   */
  abstract publishDrain(): Promise<void>;

  /**
   * Accepts a batch of messages and publishes them to the API.
   *
   * @param {object[]} messages The messages to publish.
   * @param {PublishCallback[]} callbacks The corresponding callback functions.
   * @private
   */
  async _publish(
    messages: PubsubMessage[],
    callbacks: PublishCallback[],
    bytes: number,
    reason?: string,
  ): Promise<void> {
    const {topic, settings} = this.publisher;
    const reqOpts = {
      topic: topic.name,
      messages: messages.map(filterMessage),
    };
    if (messages.length === 0) {
      return;
    }

    // Make sure we have a projectId filled in to update telemetry spans.
    // The overall spans may not have the correct projectId because it wasn't
    // known at the time publishMessage was called.
    const spanMessages = messages.filter(m => !!m.parentSpan);
    if (spanMessages.length) {
      if (!topic.pubsub.isIdResolved) {
        await topic.pubsub.getClientConfig();
      }
      spanMessages.forEach(m => {
        tracing.PubsubSpans.updatePublisherTopicName(m.parentSpan!, topic.name);
        tracing.PubsubEvents.publishStart(m);
      });
    }

    const rpcSpan = tracing.PubsubSpans.createPublishRpcSpan(
      spanMessages,
      topic.name,
      'MessageQueue._publish',
    );

    if (reason) {
      this.logBatch(reason, messages.length, bytes);
    }

    const requestCallback = topic.request<google.pubsub.v1.IPublishResponse>;
    const request = promisify(requestCallback.bind(topic));
    try {
      const resp = await request({
        client: 'PublisherClient',
        method: 'publish',
        reqOpts,
        gaxOpts: settings.gaxOpts!,
      });

      if (resp) {
        const messageIds = resp.messageIds || [];
        callbacks.forEach((callback, i) => callback(null, messageIds[i]));
      }
    } catch (e) {
      const err = e as ServiceError;
      callbacks.forEach(callback => callback(err));

      throw e;
    } finally {
      rpcSpan?.end();
      messages.forEach(m => {
        // We're finished with both the RPC and the whole publish operation,
        // so close out all of the related spans.
        tracing.PubsubEvents.publishEnd(m);
        m.parentSpan?.end();
      });
    }
  }
}

/**
 * Standard message queue used for publishing messages.
 *
 * @private
 * @extends MessageQueue
 *
 * @param {Publisher} publisher The publisher.
 */
export class Queue extends MessageQueue {
  batch: MessageBatch;
  constructor(publisher: Publisher) {
    super(publisher);
    this.batch = new MessageBatch(this.batchOptions, this.publisher.topic.name);
  }

  // This needs to update our existing message batch.
  updateOptions() {
    super.updateOptions();
    this.batch.setOptions(this.batchOptions);
  }

  /**
   * Adds a message to the queue.
   *
   * @param {PubsubMessage} message The message to publish.
   * @param {PublishCallback} callback The publish callback.
   */
  add(message: PubsubMessage, callback: PublishCallback): void {
    if (!this.batch.canFit(message)) {
      // Make a background best-effort attempt to clear out the
      // queue. If this fails, we'll basically just be overloaded
      // for a bit.
      const reason = !this.batch.canFitCount() ? 'message count' : 'byte count';
      this.publish(reason).catch(() => {});
    }

    this.batch.add(message, callback);

    if (this.batch.isFull()) {
      // See comment above - best effort.
      const reason = this.batch.isFullMessages()
        ? 'message count'
        : 'byte count';
      this.publish(reason).catch(() => {});
    } else if (!this.pending) {
      const {maxMilliseconds} = this.batchOptions;
      this.pending = setTimeout(() => {
        // See comment above - we are basically making a best effort
        // to start clearing out the queue if nothing else happens
        // before the batch timeout.
        this.publish('timeout').catch(() => {});
      }, maxMilliseconds!);
    }
  }

  /**
   * Cancels any pending publishes and calls _publish immediately.
   *
   * _Does_ attempt to further drain after one batch is sent.
   *
   * @emits Queue#drain when all messages are sent.
   */
  async publishDrain(): Promise<void> {
    await this._publishInternal(true, 'manual drain');
  }

  /**
   * Cancels any pending publishes and calls _publish immediately.
   *
   * Does _not_ attempt to further drain after one batch is sent.
   * @private
   */
  async publish(reason?: string): Promise<void> {
    await this._publishInternal(false, reason);
  }

  /**
   * Cancels any pending publishes and calls _publish immediately.
   *
   * @emits Queue#drain when all messages are sent.
   * @private
   */
  async _publishInternal(fullyDrain: boolean, reason?: string): Promise<void> {
    const {messages, callbacks} = this.batch.end();
    const bytes = this.batch.bytes;

    this.batch = new MessageBatch(this.batchOptions, this.publisher.topic.name);

    if (this.pending) {
      clearTimeout(this.pending);
      delete this.pending;
    }

    await this._publish(messages, callbacks, bytes, reason);
    if (this.batch.messages.length) {
      // We only do the indefinite go-arounds when we're trying to do a
      // final drain for flush(). In all other cases, we want to leave
      // subsequent batches alone so that they can time out as needed.
      if (fullyDrain) {
        await this._publishInternal(true, 'message count');
      }
    } else {
      this.emit('drain');
    }
  }
}

/**
 * Queue for handling ordered messages. Unlike the standard queue, this
 * ensures that batches are published one at a time and throws an exception in
 * the event that any batch fails to publish.
 *
 * @private
 * @extends MessageQueue
 *
 * @param {Publisher} publisher The publisher.
 * @param {string} key The key used to order the messages.
 */
export class OrderedQueue extends MessageQueue {
  batches: MessageBatch[];
  inFlight: boolean;
  error?: null | PublishError;
  key: string;
  constructor(publisher: Publisher, key: string) {
    super(publisher);
    this.batches = [];
    this.inFlight = false;
    this.key = key;
  }

  // This needs to update our existing message batches.
  updateOptions() {
    super.updateOptions();
    this.batches.forEach(b => b.setOptions(this.batchOptions));
  }

  /**
   * Reference to the batch we're currently filling.
   * @returns {MessageBatch}
   */
  get currentBatch(): MessageBatch {
    if (!this.batches.length) {
      this.batches.push(this.createBatch());
    }
    return this.batches[0];
  }
  /**
   * Adds a message to a batch, creating a new batch if need be.
   *
   * @param {object} message The message to publish.
   * @param {PublishCallback} callback The publish callback.
   */
  add(message: PubsubMessage, callback: PublishCallback): void {
    if (this.error) {
      callback(this.error);
      return;
    }

    if (this.inFlight) {
      // in the event that a batch is currently in flight, we can overfill
      // the next batch as long as it hasn't hit the API limit
      if (this.currentBatch.isAtMax()) {
        this.batches.unshift(this.createBatch());
      }

      this.currentBatch.add(message, callback);
      return;
    }

    if (!this.currentBatch.canFit(message)) {
      // Make a best-effort attempt to clear out the publish queue,
      // to make more space for the new batch. If this fails, we'll
      // just be overfilled for a bit.
      const reason = !this.currentBatch.canFitCount()
        ? 'message count'
        : 'byte count';
      this.publish(reason).catch(() => {});
    }

    this.currentBatch.add(message, callback);

    // it is possible that we triggered a publish earlier, so we'll need to
    // check again here
    if (!this.inFlight) {
      if (this.currentBatch.isFull()) {
        // See comment above - best-effort.
        const reason = this.currentBatch.isFullMessages()
          ? 'message count'
          : 'byte count';
        this.publish(reason).catch(() => {});
      } else if (!this.pending) {
        this.beginNextPublish();
      }
    }
  }
  /**
   * Starts a timeout to publish any pending messages.
   */
  beginNextPublish(): void {
    const maxMilliseconds = this.batchOptions.maxMilliseconds!;
    const timeWaiting = Date.now() - this.currentBatch.created;
    const delay = Math.max(0, maxMilliseconds - timeWaiting);

    this.pending = setTimeout(() => {
      // Make a best-effort attempt to start a publish request. If
      // this fails, we'll catch it again later, eventually, when more
      // messages try to enter the queue.
      this.publish('timeout').catch(() => {});
    }, delay);
  }
  /**
   * Creates a new {@link MessageBatch} instance.
   *
   * @returns {MessageBatch}
   */
  createBatch(): MessageBatch {
    return new MessageBatch(this.batchOptions, this.publisher.topic.name);
  }
  /**
   * In the event of a publish failure, we need to cache the error in question
   * and reject all pending publish calls, prompting the user to call
   * {@link OrderedQueue#resumePublishing}.
   *
   * @param {Error} err The publishing error.
   */
  handlePublishFailure(err: ServiceError): void {
    this.error = new PublishError(this.key, err);

    // reject all pending publishes
    while (this.batches.length) {
      const {callbacks} = this.batches.pop()!;
      callbacks.forEach(callback => callback(err));
    }
  }
  /**
   * Publishes the messages. If successful it will prepare the next batch to be
   * published immediately after. If an error occurs, it will reject all
   * pending messages. In the event that no pending messages/batches are left,
   * a "drain" event will be fired, indicating to the publisher that it is
   * safe to delete this queue.
   *
   * @fires OrderedQueue#drain
   */
  async publish(reason: string): Promise<void> {
    // If there's nothing to flush, don't try, just short-circuit to the drain event.
    // This can happen if we get a publish() call after already being drained, in
    // the case that topic.flush() pulls a reference to us before we get deleted.
    if (!this.batches.length) {
      this.emit('drain');
      return;
    }

    this.inFlight = true;

    if (this.pending) {
      clearTimeout(this.pending);
      delete this.pending;
    }

    const {messages, callbacks, bytes} = this.batches.pop()!.end();

    try {
      await this._publish(messages, callbacks, bytes, reason);
    } catch (e) {
      const err = e as ServiceError;
      this.inFlight = false;
      this.handlePublishFailure(err);
    } finally {
      this.inFlight = false;
    }

    if (this.batches.length) {
      this.beginNextPublish();
    } else {
      this.emit('drain');
    }
  }

  /**
   * For ordered queues, this does exactly the same thing as `publish()`.
   *
   * @fires OrderedQueue#drain
   */
  async publishDrain(): Promise<void> {
    await this.publish('manual drain');
  }

  /**
   * Tells the queue it is ok to continue publishing messages.
   */
  resumePublishing(): void {
    delete this.error;

    // once this is called, we'll make this object eligible for garbage
    // collection. by wrapping in nextTick() we'll give users an opportunity
    // to use it again instead of deleting instantly and then creating a new
    // instance.
    process.nextTick(() => {
      if (!this.batches.length) {
        this.emit('drain');
      }
    });
  }
}
