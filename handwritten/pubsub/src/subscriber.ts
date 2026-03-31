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

import {DateStruct, PreciseDate} from '@google-cloud/precise-date';
import {replaceProjectIdToken} from '@google-cloud/projectify';
import {promisify} from '@google-cloud/promisify';
import defer = require('p-defer');

import {google} from '../protos/protos';
import {Histogram} from './histogram';
import {FlowControlOptions, LeaseManager} from './lease-manager';
import {AckQueue, BatchOptions, ModAckQueue} from './message-queues';
import {MessageStream, MessageStreamOptions} from './message-stream';
import {Subscription} from './subscription';
import {defaultOptions} from './default-options';
import {SubscriberClient} from './v1';
import * as tracing from './telemetry-tracing';
import {Duration, atMost as durationAtMost} from './temporal';
import {EventEmitter} from 'events';

import {awaitWithTimeout} from './util';
import {logs as baseLogs} from './logs';

export {StatusError} from './message-stream';

/**
 * Loggers. Exported for unit tests.
 *
 * @private
 */
export const logs = {
  slowAck: baseLogs.pubsub.sublog('slow-ack'),
  ackNack: baseLogs.pubsub.sublog('ack-nack'),
  debug: baseLogs.pubsub.sublog('debug'),
};

export type PullResponse = google.pubsub.v1.IStreamingPullResponse;
export type SubscriptionProperties =
  google.pubsub.v1.StreamingPullResponse.ISubscriptionProperties;

type ValueOf<T> = T[keyof T];
export const AckResponses = {
  PermissionDenied: 'PERMISSION_DENIED' as const,
  FailedPrecondition: 'FAILED_PRECONDITION' as const,
  Success: 'SUCCESS' as const,
  Invalid: 'INVALID' as const,
  Other: 'OTHER' as const,
};
export type AckResponse = ValueOf<typeof AckResponses>;

/**
 * Enum values for behaviors of the Subscriber.close() method.
 */
export const SubscriberCloseBehaviors = {
  NackImmediately: 'NACK' as const,
  WaitForProcessing: 'WAIT' as const,
};
export type SubscriberCloseBehavior = ValueOf<typeof SubscriberCloseBehaviors>;

/**
 * Options to modify the behavior of the Subscriber.close() method. If
 * none is passed, the default is SubscriberCloseBehaviors.Wait.
 */
export interface SubscriberCloseOptions {
  behavior?: SubscriberCloseBehavior;
  timeout?: Duration;
}

/**
 * Specifies how long before the final close timeout, in WaitForProcessing mode,
 * that we should give up and start shutting down cleanly.
 */
const FINAL_NACK_TIMEOUT = Duration.from({seconds: 1});

/**
 * Thrown when an error is detected in an ack/nack/modack call, when
 * exactly-once delivery is enabled on the subscription. This will
 * only be thrown for actual errors that can't be retried.
 */
export class AckError extends Error {
  errorCode: AckResponse;

  constructor(errorCode: AckResponse, message?: string) {
    let finalMessage = `${errorCode}`;
    if (message) {
      finalMessage += ` : ${message}`;
    }
    super(finalMessage);
    this.errorCode = errorCode;
  }
}

/**
 * Tracks the various spans related to subscriber/receive tracing.
 *
 * @private
 */
export class SubscriberSpans {
  parent: tracing.MessageWithAttributes;

  // These are always attached to a message.
  constructor(parent: tracing.MessageWithAttributes) {
    this.parent = parent;
  }

  // Start a flow control span if needed.
  flowStart() {
    if (!this.flow) {
      this.flow = tracing.PubsubSpans.createReceiveFlowSpan(this.parent);
    }
  }

  // End any flow control span.
  flowEnd() {
    if (this.flow) {
      this.flow.end();
      this.flow = undefined;
    }
  }

  // Emit an event for starting to send an ack.
  ackStart() {
    tracing.PubsubEvents.ackStart(this.parent);
  }

  // Emit an event for the ack having been sent.
  ackEnd() {
    tracing.PubsubEvents.ackEnd(this.parent);
  }

  // Emit an event for calling ack.
  ackCall() {
    if (this.processing) {
      tracing.PubsubEvents.ackCalled(this.processing);
    }
  }

  // Emit an event for starting to send a nack.
  nackStart() {
    tracing.PubsubEvents.nackStart(this.parent);
  }

  // Emit an event for the nack having been sent.
  nackEnd() {
    tracing.PubsubEvents.nackEnd(this.parent);
  }

  // Emit an event for calling nack.
  nackCall() {
    if (this.processing) {
      tracing.PubsubEvents.nackCalled(this.processing);
    }
  }

  // Emit an event for starting to send a modAck.
  modAckStart(deadline: Duration, isInitial: boolean) {
    tracing.PubsubEvents.modAckStart(this.parent, deadline, isInitial);
  }

  // Emit an event for the modAck having been sent.
  modAckEnd() {
    tracing.PubsubEvents.modAckEnd(this.parent);
  }

  // Emit an event for calling modAck.
  // Note that we don't currently support users calling modAck directly, but
  // this may be used in the future for things like fully managed pull
  // subscriptions.
  modAckCall(deadline: Duration) {
    if (this.processing) {
      tracing.PubsubEvents.modAckCalled(this.processing, deadline);
    }
  }

  // Start a scheduler span if needed.
  // Note: This is not currently used in Node, because there is no
  // scheduler process, due to the way messages are delivered one at a time.
  schedulerStart() {
    if (!this.scheduler) {
      this.scheduler = tracing.PubsubSpans.createReceiveSchedulerSpan(
        this.parent,
      );
    }
  }

  // End any scheduler span.
  schedulerEnd() {
    if (this.scheduler) {
      this.scheduler.end();
      this.scheduler = undefined;
    }
  }

  // Start a processing span if needed.
  // This is for user processing, during on('message') delivery.
  processingStart(subName: string) {
    if (!this.processing) {
      this.processing = tracing.PubsubSpans.createReceiveProcessSpan(
        this.parent,
        subName,
      );
    }
  }

  // End any processing span.
  processingEnd() {
    if (this.processing) {
      this.processing.end();
      this.processing = undefined;
    }
  }

  // If we shut down before processing can finish.
  shutdown() {
    tracing.PubsubEvents.shutdown(this.parent);
  }

  private flow?: tracing.Span;
  private scheduler?: tracing.Span;
  private processing?: tracing.Span;
}

/**
 * Date object with nanosecond precision. Supports all standard Date arguments
 * in addition to several custom types.
 *
 * @external PreciseDate
 * @see {@link https://github.com/googleapis/nodejs-precise-date|PreciseDate}
 */
/**
 * Message objects provide a simple interface for users to get message data and
 * acknowledge the message.
 *
 * @example
 * ```
 * subscription.on('message', message => {
 *   // {
 *   //   ackId: 'RUFeQBJMJAxESVMrQwsqWBFOBCEhPjA',
 *   //   attributes: {key: 'value'},
 *   //   data: Buffer.from('Hello, world!'),
 *   //   id: '1551297743043',
 *   //   orderingKey: 'ordering-key',
 *   //   publishTime: new PreciseDate('2019-02-27T20:02:19.029534186Z'),
 *   //   received: 1551297743043,
 *   //   length: 13
 *   // }
 * });
 * ```
 */
export class Message implements tracing.MessageWithAttributes {
  ackId: string;
  attributes: {[key: string]: string};
  data: Buffer;
  deliveryAttempt: number;
  id: string;
  orderingKey?: string;
  publishTime: PreciseDate;
  received: number;
  private _handledPromise: defer.DeferredPromise<void>;
  private _handled: boolean;
  private _length: number;
  private _subscriber: Subscriber;
  private _ackFailed?: AckError;
  private _dispatched: boolean;

  /**
   * @private
   *
   * Tracks a telemetry tracing parent span through the receive process. This will
   * be the original publisher-side span if we have one; otherwise we'll create
   * a "publisher" span to hang new subscriber spans onto.
   *
   * This needs to be declared explicitly here, because having a public class
   * implement a private interface seems to confuse TypeScript. (And it's needed
   * in unit tests.)
   */
  parentSpan?: tracing.Span;

  /**
   * We'll save the state of the subscription's exactly once delivery flag at the
   * time the message was received. This is pretty much only for tracing, as we will
   * generally use the live state of the subscription to figure out how to respond.
   *
   * @private
   * @internal
   */
  isExactlyOnceDelivery: boolean;

  /**
   * @private
   *
   * Ends any open subscribe telemetry tracing span.
   */
  endParentSpan() {
    this.parentSpan?.end();
    delete this.parentSpan;
  }

  /**
   * @private
   *
   * Tracks subscriber-specific telemetry objects through the library.
   */
  subSpans: SubscriberSpans;

  /**
   * @hideconstructor
   *
   * @param {Subscriber} sub The parent subscriber.
   * @param {object} message The raw message response.
   */
  constructor(
    sub: Subscriber,
    {ackId, message, deliveryAttempt}: google.pubsub.v1.IReceivedMessage,
  ) {
    /**
     * This ID is used to acknowledge the message.
     *
     * @name Message#ackId
     * @type {string}
     */
    this.ackId = ackId!;
    /**
     * Optional attributes for this message.
     *
     * @name Message#attributes
     * @type {object}
     */
    this.attributes = message!.attributes || {};
    /**
     * The message data as a Buffer.
     *
     * @name Message#data
     * @type {Buffer}
     */
    this.data = message!.data as Buffer;
    /**
     * Delivery attempt counter is 1 + (the sum of number of NACKs and number of
     * ack_deadline exceeds) for this message.
     *
     * @name Message#deliveryAttempt
     * @type {number}
     */
    this.deliveryAttempt = Number(deliveryAttempt || 0);
    /**
     * ID of the message, assigned by the server when the message is published.
     * Guaranteed to be unique within the topic.
     *
     * @name Message#id
     * @type {string}
     */
    this.id = message!.messageId!;
    /**
     * Identifies related messages for which publish order should be respected.
     * If a `Subscription` has `enableMessageOrdering` set to `true`, messages
     * published with the same `orderingKey` value will be delivered to
     * subscribers in the order in which they are received by the Pub/Sub
     * system.
     *
     * **EXPERIMENTAL:** This feature is part of a closed alpha release. This
     * API might be changed in backward-incompatible ways and is not recommended
     * for production use. It is not subject to any SLA or deprecation policy.
     *
     * @name Message#orderingKey
     * @type {string}
     */
    this.orderingKey = message!.orderingKey!;
    /**
     * The time at which the message was published.
     *
     * @name Message#publishTime
     * @type {external:PreciseDate}
     */
    this.publishTime = new PreciseDate(message!.publishTime as DateStruct);
    /**
     * The time at which the message was recieved by the subscription.
     *
     * @name Message#received
     * @type {number}
     */
    this.received = Date.now();

    /**
     * Telemetry tracing objects.
     *
     * @private
     */
    this.subSpans = new SubscriberSpans(this);

    /**
     * Save the state of the subscription into the message for later tracing.
     *
     * @private
     * @internal
     */
    this.isExactlyOnceDelivery = sub.isExactlyOnceDelivery;

    this._dispatched = false;
    this._handled = false;
    this._handledPromise = defer<void>();
    this._length = this.data.length;
    this._subscriber = sub;
  }

  /**
   * The length of the message data.
   *
   * @type {number}
   */
  get length() {
    return this._length;
  }

  /**
   * Resolves when the message has been handled fully; a handled message may
   * not have any further operations performed on it.
   *
   * @private
   */
  get handledPromise(): Promise<void> {
    return this._handledPromise.promise;
  }

  /**
   * When this message is dispensed to user callback code, this should be called.
   * The time between the dispatch and the handledPromise resolving is when the
   * message is with the user.
   *
   * @private
   */
  dispatched(): void {
    if (!this._dispatched) {
      this.subSpans.processingStart(this._subscriber.name);
      this._dispatched = true;
    }
  }

  /**
   * @private
   * @returns True if this message has been dispatched to user callback code.
   */
  isDispatched(): boolean {
    return this._dispatched;
  }

  /**
   * Sets this message's exactly once delivery acks to permanent failure. This is
   * meant for internal library use only.
   *
   * @private
   */
  ackFailed(error: AckError): void {
    this._ackFailed = error;
  }

  /**
   * Acknowledges the message.
   *
   * @example
   * ```
   * subscription.on('message', message => {
   *   message.ack();
   * });
   * ```
   */
  ack(): void {
    if (!this._handled) {
      this._handled = true;
      this.subSpans.ackCall();
      this.subSpans.processingEnd();
      void this._subscriber.ack(this);
      this._handledPromise.resolve();
    }
  }

  /**
   * Acknowledges the message, expecting a response (for exactly-once delivery subscriptions).
   * If exactly-once delivery is not enabled, this will immediately resolve successfully.
   *
   * @example
   * ```
   * subscription.on('message', async (message) => {
   *   const response = await message.ackWithResponse();
   * });
   * ```
   */
  async ackWithResponse(): Promise<AckResponse> {
    if (!this._subscriber.isExactlyOnceDelivery) {
      this.ack();
      return AckResponses.Success;
    }

    if (this._ackFailed) {
      throw this._ackFailed;
    }

    if (!this._handled) {
      this._handled = true;
      this.subSpans.ackCall();
      this.subSpans.processingEnd();
      try {
        return await this._subscriber.ackWithResponse(this);
      } catch (e) {
        this.ackFailed(e as AckError);
        throw e;
      } finally {
        this._handledPromise.resolve();
      }
    } else {
      return AckResponses.Invalid;
    }
  }

  /**
   * Modifies the ack deadline.
   * At present time, this should generally not be called by users.
   *
   * @param {number} deadline The number of seconds to extend the deadline.
   * @private
   */
  modAck(deadline: number): void {
    if (!this._handled) {
      this.subSpans.modAckCall(Duration.from({seconds: deadline}));
      void this._subscriber.modAck(this, deadline);
    }
  }

  /**
   * Modifies the ack deadline, expecting a response (for exactly-once delivery subscriptions).
   * If exactly-once delivery is not enabled, this will immediately resolve successfully.
   * At present time, this should generally not be called by users.
   *
   * @param {number} deadline The number of seconds to extend the deadline.
   * @private
   */
  async modAckWithResponse(deadline: number): Promise<AckResponse> {
    if (!this._subscriber.isExactlyOnceDelivery) {
      this.modAck(deadline);
      return AckResponses.Success;
    }

    if (this._ackFailed) {
      throw this._ackFailed;
    }

    if (!this._handled) {
      this.subSpans.modAckCall(Duration.from({seconds: deadline}));
      try {
        return await this._subscriber.modAckWithResponse(this, deadline);
      } catch (e) {
        this.ackFailed(e as AckError);
        throw e;
      }
    } else {
      return AckResponses.Invalid;
    }
  }

  /**
   * Removes the message from our inventory and schedules it to be redelivered.
   *
   * @example
   * ```
   * subscription.on('message', message => {
   *   message.nack();
   * });
   * ```
   */
  nack(): void {
    if (!this._handled) {
      this._handled = true;
      this.subSpans.nackCall();
      this.subSpans.processingEnd();
      void this._subscriber.nack(this);
      this._handledPromise.resolve();
    }
  }

  /**
   * Removes the message from our inventory and schedules it to be redelivered,
   * with the modAck response being returned (for exactly-once delivery subscriptions).
   * If exactly-once delivery is not enabled, this will immediately resolve successfully.
   *
   * @example
   * ```
   * subscription.on('message', async (message) => {
   *   const response = await message.nackWithResponse();
   * });
   * ```
   */
  async nackWithResponse(): Promise<AckResponse> {
    if (!this._subscriber.isExactlyOnceDelivery) {
      this.nack();
      return AckResponses.Success;
    }

    if (this._ackFailed) {
      throw this._ackFailed;
    }

    if (!this._handled) {
      this._handled = true;
      this.subSpans.nackCall();
      this.subSpans.processingEnd();
      try {
        return await this._subscriber.nackWithResponse(this);
      } catch (e) {
        this.ackFailed(e as AckError);
        throw e;
      } finally {
        this._handledPromise.resolve();
      }
    } else {
      return AckResponses.Invalid;
    }
  }
}

/**
 * @typedef {object} SubscriberOptions
 * @property {number} [ackDeadline=10] Acknowledge deadline in seconds. If left
 *     unset, the initial value will be 10 seconds, but it will evolve into the
 *     99th percentile time it takes to acknowledge a message, subject to the
 *     limitations of minAckDeadline and maxAckDeadline. If ackDeadline is set
 *     by the user, then the min/max values will be set to match it. New code
 *     should prefer setting minAckDeadline and maxAckDeadline directly.
 * @property {Duration} [minAckDeadline] The minimum time that ackDeadline should
 *     ever have, while it's under library control.
 * @property {Duration} [maxAckDeadline] The maximum time that ackDeadline should
 *     ever have, while it's under library control.
 * @property {Duration} [maxExtensionTime] The maximum time that ackDeadline should
 *     ever have, while it's under library control.
 * @property {BatchOptions} [batching] Request batching options; this is for
 *     batching acks and modacks being sent back to the server.
 * @property {FlowControlOptions} [flowControl] Flow control options.
 * @property {boolean} [useLegacyFlowControl] Disables enforcing flow control
 *     settings at the Cloud PubSub server and uses the less accurate method
 *     of only enforcing flow control at the client side.
 * @property {MessageStreamOptions} [streamingOptions] Streaming options.
 *     If no options are passed, it behaves like `SubscriberCloseBehaviors.Wait`.
 * @property {SubscriberCloseOptions} [options] Determines the basic behavior of the
 *     close() function.
 * @property {SubscriberCloseBehavior} [options.behavior] The behavior of the close operation.
 *     - NackImmediately: Sends nacks for all messages held by the client library, and
 *       wait for them to send. (default to match old behavior)
 *     - WaitForProcessing: Continues normal ack/nack and leasing processes until close
 *       to the timeout, then switches to NackImmediately behavior to close down.
 *     Use {@link SubscriberCloseBehaviors} for enum values.
 * @property {Duration} [options.timeout] In the case of Timeout, the maximum duration
 *     to wait for pending ack/nack requests to complete before resolving (or rejecting)
 *     the promise.
 */
export interface SubscriberOptions {
  minAckDeadline?: Duration;
  maxAckDeadline?: Duration;
  maxExtensionTime?: Duration;
  batching?: BatchOptions;
  flowControl?: FlowControlOptions;
  useLegacyFlowControl?: boolean;
  streamingOptions?: MessageStreamOptions;
  closeOptions?: SubscriberCloseOptions;
}

const minAckDeadlineForExactlyOnceDelivery = Duration.from({seconds: 60});

/**
 * Subscriber class is used to manage all message related functionality.
 *
 * @private
 * @class
 *
 * @param {Subscription} subscription The corresponding subscription.
 * @param {SubscriberOptions} options The subscriber options.
 */
export class Subscriber extends EventEmitter {
  ackDeadline: number;
  maxMessages: number;
  maxBytes: number;
  useLegacyFlowControl: boolean;
  isOpen: boolean;
  maxExtensionTime: Duration;
  private _acks!: AckQueue;
  private _histogram: Histogram;
  private _inventory!: LeaseManager;
  private _latencies: Histogram;
  private _modAcks!: ModAckQueue;
  private _name!: string;
  private _options!: SubscriberOptions;
  private _stream!: MessageStream;
  private _subscription: Subscription;

  // We keep this separate from ackDeadline, because ackDeadline could
  // end up being bound by min/max deadline configs.
  private _99th: number;

  subscriptionProperties?: SubscriptionProperties;

  constructor(subscription: Subscription, options = {}) {
    super();

    this.ackDeadline =
      defaultOptions.subscription.startingAckDeadline.totalOf('second');
    this._99th = this.ackDeadline;
    this.maxMessages = defaultOptions.subscription.maxOutstandingMessages;
    this.maxBytes = defaultOptions.subscription.maxOutstandingBytes;
    this.maxExtensionTime = defaultOptions.subscription.maxExtensionTime;
    this.useLegacyFlowControl = false;
    this.isOpen = false;
    this._histogram = new Histogram({min: 10, max: 600});
    this._latencies = new Histogram();
    this._subscription = subscription;

    this.setOptions(options);
  }

  /**
   * Update our ack extension time that will be used by the lease manager
   * for sending modAcks.
   *
   * Should not be called from outside this class, except for unit tests.
   *
   * @param {number} [ackTimeSeconds] The number of seconds that the last
   *   ack took after the message was received. If this is undefined, then
   *   we won't update the histogram, but we will still recalculate the
   *   ackDeadline based on the situation.
   *
   * @private
   */
  updateAckDeadline(ackTimeSeconds?: number) {
    // Start with the value we already have.
    let ackDeadline = this.ackDeadline;

    // If we got an ack time reading, update the histogram (and ackDeadline).
    if (ackTimeSeconds) {
      this._histogram.add(ackTimeSeconds);
      this._99th = ackDeadline = this._histogram.percentile(99);
    }

    // Grab our current min/max deadline values, based on whether exactly-once
    // delivery is enabled, and the defaults.
    const [minDeadline, maxDeadline] = this.getMinMaxDeadlines();

    if (minDeadline) {
      ackDeadline = Math.max(ackDeadline, minDeadline.totalOf('second'));
    }
    if (maxDeadline) {
      ackDeadline = Math.min(ackDeadline, maxDeadline.totalOf('second'));
    }

    // Set the bounded result back.
    this.ackDeadline = ackDeadline;
  }

  private getMinMaxDeadlines(): [Duration?, Duration?] {
    // If this is an exactly-once delivery subscription, and the user
    // didn't set their own minimum ack periods, set it to the default
    // for exactly-once delivery.
    const defaultMinDeadline = this.isExactlyOnceDelivery
      ? minAckDeadlineForExactlyOnceDelivery
      : defaultOptions.subscription.minAckDeadline;
    const defaultMaxDeadline = defaultOptions.subscription.maxAckDeadline;

    // Pull in any user-set min/max.
    const minDeadline = this._options.minAckDeadline ?? defaultMinDeadline;
    const maxDeadline = this._options.maxAckDeadline ?? defaultMaxDeadline;

    return [minDeadline, maxDeadline];
  }

  /**
   * Returns true if an exactly-once delivery subscription has been detected.
   *
   * @private
   */
  get isExactlyOnceDelivery(): boolean {
    if (!this.subscriptionProperties) {
      return false;
    }

    return !!this.subscriptionProperties.exactlyOnceDeliveryEnabled;
  }

  /**
   * Sets our subscription properties from incoming messages.
   *
   * @param {SubscriptionProperties} subscriptionProperties The new properties.
   * @private
   */
  setSubscriptionProperties(subscriptionProperties: SubscriptionProperties) {
    const previouslyEnabled = this.isExactlyOnceDelivery;

    this.subscriptionProperties = subscriptionProperties;

    // Update ackDeadline in case the flag switched.
    if (previouslyEnabled !== this.isExactlyOnceDelivery) {
      this.updateAckDeadline();

      // For exactly-once delivery, make sure the subscription ack deadline is 60.
      // (Otherwise fall back to the default of 10 seconds.)
      const subscriptionAckDeadlineSeconds = this.isExactlyOnceDelivery
        ? 60
        : 10;
      this._stream.setStreamAckDeadline(
        Duration.from({seconds: subscriptionAckDeadlineSeconds}),
      );
    }
  }

  /**
   * The 99th percentile of request latencies.
   *
   * @type {number}
   * @private
   */
  get modAckLatency() {
    const latency = this._latencies.percentile(99);
    let bufferTime = 0;

    if (this._modAcks) {
      bufferTime = this._modAcks.maxMilliseconds;
    }

    return latency * 1000 + bufferTime;
  }

  /**
   * The full name of the Subscription.
   *
   * @type {string}
   * @private
   */
  get name(): string {
    if (!this._name) {
      const {name, projectId} = this._subscription;
      this._name = replaceProjectIdToken(name, projectId);
    }

    return this._name;
  }

  /**
   * Acknowledges the supplied message.
   *
   * @param {Message} message The message to acknowledge.
   * @returns {Promise<void>}
   * @private
   */
  async ack(message: Message): Promise<void> {
    const ackTimeSeconds = (Date.now() - message.received) / 1000;
    this.updateAckDeadline(ackTimeSeconds);

    logs.ackNack.info(
      'message (ID %s, ackID %s) ack',
      message.id,
      message.ackId,
    );

    if (ackTimeSeconds > this._99th) {
      logs.slowAck.info(
        'message (ID %s, ackID %s) ack took longer than the 99th percentile of message processing time (%s s)',
        message.id,
        message.ackId,
        ackTimeSeconds,
      );
    }

    tracing.PubsubEvents.ackStart(message);

    // Ignore this in this version of the method (but hook catch
    // to avoid unhandled exceptions).
    const resultPromise = this._acks.add(message);
    resultPromise.catch(() => {});

    await this._acks.onFlush();

    tracing.PubsubEvents.ackEnd(message);
    message.endParentSpan();

    this._inventory.remove(message);
  }

  /**
   * Acknowledges the supplied message, expecting a response (for exactly
   * once subscriptions).
   *
   * @param {Message} message The message to acknowledge.
   * @returns {Promise<AckResponse>}
   * @private
   */
  async ackWithResponse(message: Message): Promise<AckResponse> {
    const ackTimeSeconds = (Date.now() - message.received) / 1000;
    this.updateAckDeadline(ackTimeSeconds);

    logs.ackNack.info(
      'message (ID %s, ackID %s) ack with response',
      message.id,
      message.ackId,
    );

    if (ackTimeSeconds > this._99th) {
      logs.slowAck.info(
        'message (ID %s, ackID %s) ack took longer than the 99th percentile (%s s)',
        message.id,
        message.ackId,
        ackTimeSeconds,
      );
    }

    tracing.PubsubEvents.ackStart(message);

    await this._acks.add(message);

    tracing.PubsubEvents.ackEnd(message);
    message.endParentSpan();

    this._inventory.remove(message);

    // No exception means Success.
    return AckResponses.Success;
  }

  async #awaitTimeoutAndCheck(
    promise: Promise<void>,
    timeout: Duration,
  ): Promise<void> {
    const result = await awaitWithTimeout(promise, timeout);
    if (result.exception || result.timedOut) {
      // Don't try to deal with errors at this point, just warn-log.
      if (result.timedOut === false) {
        // This wasn't a timeout.
        logs.debug.warn(
          'Error during Subscriber.close(): %j',
          result.exception,
        );
      }
    }
  }

  /**
   * Closes the subscriber, stopping the reception of new messages and shutting
   * down the underlying stream. The behavior of the returned Promise will depend
   * on the closeOptions in the subscriber options.
   *
   * @returns {Promise<void>} A promise that resolves when the subscriber is closed
   *   and pending operations are flushed or the timeout is reached.
   *
   * @private
   */
  async close(): Promise<void> {
    if (!this.isOpen) {
      return;
    }

    // Always close the stream right away so we don't receive more messages.
    this.isOpen = false;
    this._stream.destroy();

    const options = this._options.closeOptions;

    // If no behavior is specified, default to Nack. This most closely matches
    // the old behavior.
    const behavior =
      options?.behavior ?? SubscriberCloseBehaviors.NackImmediately;

    // The timeout can't realistically be longer than the longest time we're willing
    // to lease messages.
    let timeout = durationAtMost(
      options?.timeout ?? this.maxExtensionTime,
      this.maxExtensionTime,
    );

    // If the user specified a zero timeout, just bail immediately.
    if (!timeout.milliseconds) {
      this._inventory.clear();
      return;
    }

    // Warn the user if the timeout is too short for NackImmediately.
    if (Duration.compare(timeout, FINAL_NACK_TIMEOUT) < 0) {
      logs.debug.warn(
        'Subscriber.close() timeout is less than the final shutdown time (%i ms). This may result in lost nacks.',
        timeout.milliseconds,
      );
    }

    // If we're in WaitForProcessing mode, then we first need to derive a NackImmediately
    // timeout point. If everything finishes before then, we also want to go ahead and bail cleanly.
    const shutdownStart = Date.now();
    if (
      behavior === SubscriberCloseBehaviors.WaitForProcessing &&
      !this._inventory.isEmpty()
    ) {
      const waitTimeout = timeout.subtract(FINAL_NACK_TIMEOUT);

      const emptyPromise = new Promise<void>(r => {
        this._inventory.on('empty', r);
      });

      await this.#awaitTimeoutAndCheck(emptyPromise, waitTimeout);
    }

    // Now we head into immediate shutdown mode with what time is left.
    timeout = timeout.subtract({
      milliseconds: Date.now() - shutdownStart,
    });
    if (timeout.milliseconds <= 0) {
      // This probably won't work out, but go through the motions.
      timeout = Duration.from({milliseconds: 0});
    }

    // Grab everything left in inventory. This includes messages that have already
    // been dispatched to user callbacks.
    const remaining = this._inventory.clear();
    remaining.forEach(m => m.nack());

    // Wait for user callbacks to complete.
    const flushCompleted = this._waitForFlush();
    await this.#awaitTimeoutAndCheck(flushCompleted, timeout);

    // Clean up OTel spans for any remaining messages.
    remaining.forEach(m => {
      m.subSpans.shutdown();
      m.endParentSpan();
    });

    this.emit('close');

    this._acks.close();
    this._modAcks.close();
  }

  /**
   * Gets the subscriber client instance.
   *
   * @returns {Promise<object>}
   * @private
   */
  async getClient(): Promise<SubscriberClient> {
    const pubsub = this._subscription.pubsub;
    const [client] = await promisify(pubsub.getClient_).call(pubsub, {
      client: 'SubscriberClient',
    });

    return client;
  }

  /**
   * Modifies the acknowledge deadline for the provided message.
   *
   * @param {Message} message The message to modify.
   * @param {number} deadline The deadline in seconds.
   * @returns {Promise<void>}
   * @private
   */
  async modAck(message: Message, deadline: number): Promise<void> {
    const startTime = Date.now();

    const responsePromise = this._modAcks.add(message, deadline);
    responsePromise.catch(() => {});

    await this._modAcks.onFlush();

    const latency = (Date.now() - startTime) / 1000;
    this._latencies.add(latency);
  }

  /**
   * Modifies the acknowledge deadline for the provided message, expecting
   * a reply (for exactly-once delivery subscriptions).
   *
   * @param {Message} message The message to modify.
   * @param {number} deadline The deadline.
   * @returns {Promise<AckResponse>}
   * @private
   */
  async modAckWithResponse(
    message: Message,
    deadline: number,
  ): Promise<AckResponse> {
    const startTime = Date.now();

    await this._modAcks.add(message, deadline);

    const latency = (Date.now() - startTime) / 1000;
    this._latencies.add(latency);

    // No exception means Success.
    return AckResponses.Success;
  }

  /**
   * Modfies the acknowledge deadline for the provided message and then removes
   * it from our inventory.
   *
   * @param {Message} message The message.
   * @return {Promise<void>}
   * @private
   */
  async nack(message: Message): Promise<void> {
    logs.ackNack.info(
      'message (ID %s, ackID %s) nack',
      message.id,
      message.ackId,
    );

    const nackTimeSeconds = (Date.now() - message.received) / 1000;
    if (nackTimeSeconds > this._99th) {
      logs.slowAck.info(
        'message (ID %s, ackID %s) nack took longer than the 99th percentile (%s s)',
        message.id,
        message.ackId,
        nackTimeSeconds,
      );
    }

    message.subSpans.nackStart();
    await this.modAck(message, 0);
    message.subSpans.nackEnd();
    message.endParentSpan();
    this._inventory.remove(message);
  }

  /**
   * Modfies the acknowledge deadline for the provided message and then removes
   * it from our inventory, expecting a response from modAck (for
   * exactly-once delivery subscriptions).
   *
   * @param {Message} message The message.
   * @return {Promise<AckResponse>}
   * @private
   */
  async nackWithResponse(message: Message): Promise<AckResponse> {
    logs.ackNack.info(
      'message (ID %s, ackID %s) nack with response',
      message.id,
      message.ackId,
    );

    const nackTimeSeconds = (Date.now() - message.received) / 1000;
    if (nackTimeSeconds > this._99th) {
      logs.slowAck.info(
        'message (ID %s, ackID %s) nack took longer than the 99th percentile (%s s)',
        message.id,
        message.ackId,
        nackTimeSeconds,
      );
    }

    message.subSpans.nackStart();
    const response = await this.modAckWithResponse(message, 0);
    message.subSpans.nackEnd();
    message.endParentSpan();
    return response;
  }

  /**
   * Starts pulling messages.
   * @private
   */
  open(): void {
    const {batching, flowControl, streamingOptions} = this._options;

    this._acks = new AckQueue(this, batching);
    this._modAcks = new ModAckQueue(this, batching);
    this._inventory = new LeaseManager(this, flowControl);
    this._stream = new MessageStream(this, streamingOptions);

    this._stream
      .on('error', err => this.emit('error', err))
      .on('debug', msg => this.emit('debug', msg))
      .on('data', (data: PullResponse) => this._onData(data))
      .once('close', () => this.close());

    this._inventory
      .on('full', () => this._stream.pause())
      .on('free', () => this._stream.resume());

    this._stream.start().catch(err => {
      this.emit('error', err);
      void this.close();
    });

    this.isOpen = true;
  }

  /**
   * Sets subscriber options.
   *
   * @param {SubscriberOptions} options The options.
   * @private
   */
  setOptions(options: SubscriberOptions): void {
    this._options = options;

    this.useLegacyFlowControl = options.useLegacyFlowControl || false;
    if (options.flowControl) {
      this.maxMessages =
        options.flowControl.maxMessages ||
        defaultOptions.subscription.maxOutstandingMessages;
      this.maxBytes =
        options.flowControl.maxBytes ||
        defaultOptions.subscription.maxOutstandingBytes;

      // In the event that the user has specified the maxMessages option, we
      // want to make sure that the maxStreams option isn't higher.
      // It doesn't really make sense to open 5 streams if the user only wants
      // 1 message at a time.
      if (!options.streamingOptions) {
        options.streamingOptions = {} as MessageStreamOptions;
      }

      const {maxStreams = defaultOptions.subscription.maxStreams} =
        options.streamingOptions;

      options.streamingOptions.maxStreams = Math.min(
        maxStreams,
        this.maxMessages,
      );
    }

    if (this._options.maxExtensionTime) {
      this.maxExtensionTime = this._options.maxExtensionTime;
    }

    if (this._inventory) {
      this._inventory.setOptions(this._options.flowControl!);
    }

    this.updateAckDeadline();
  }

  /**
   * Retrieves our effective options. This is mostly for unit test use.
   *
   * @private
   * @returns {SubscriberOptions} The options.
   */
  getOptions(): SubscriberOptions {
    return this._options;
  }

  /**
   * Constructs a telemetry span from the incoming message.
   *
   * @param {Message} message One of the received messages
   * @private
   */
  private createParentSpan(message: Message): void {
    const enabled = tracing.isEnabled();
    if (enabled) {
      tracing.extractSpan(message, this.name);
    }
  }

  /**
   * Callback to be invoked when a new message is available.
   *
   * New messages will be added to the subscribers inventory, which in turn will
   * automatically extend the messages ack deadline until either:
   *   a. the user acks/nacks it
   *   b. the maxExtension option is hit
   *
   * If the message puts us at/over capacity, then we'll pause our message
   * stream until we've freed up some inventory space.
   *
   * New messages must immediately issue a ModifyAckDeadline request
   * (aka receipt) to confirm with the backend that we did infact receive the
   * message and its ok to start ticking down on the deadline.
   *
   * @private
   */
  private _onData(response: PullResponse): void {
    // Grab the subscription properties for exactly-once delivery and ordering flags.
    if (response.subscriptionProperties) {
      this.setSubscriptionProperties(response.subscriptionProperties);
    }

    const {receivedMessages} = response;
    for (const data of receivedMessages!) {
      const message = new Message(this, data);

      this.createParentSpan(message);

      if (this.isOpen) {
        if (this.isExactlyOnceDelivery) {
          // For exactly-once delivery, we must validate that we got a valid
          // lease on the message before actually leasing it.
          message.subSpans.modAckStart(
            Duration.from({seconds: this.ackDeadline}),
            true,
          );
          message
            .modAckWithResponse(this.ackDeadline)
            .then(() => {
              this._inventory.add(message);
            })
            .catch(() => {
              // Temporary failures will retry, so if an error reaches us
              // here, that means a permanent failure. Silently drop these.
              this._discardMessage(message);
            })
            .finally(() => {
              message.subSpans.modAckEnd();
            });
        } else {
          message.subSpans.modAckStart(
            Duration.from({seconds: this.ackDeadline}),
            true,
          );
          message.modAck(this.ackDeadline);
          message.subSpans.modAckEnd();
          this._inventory.add(message);
        }
      } else {
        message.subSpans.shutdown();
        message.nack();
      }
    }
  }

  // Internal: This is here to provide a hook for unit testing, at least for now.
  private _discardMessage(message: Message): void {
    message;
  }

  /**
   * Returns a promise that will resolve once all pending requests have settled.
   *
   * @private
   *
   * @returns {Promise<void>}
   */
  private async _waitForFlush(): Promise<void> {
    const promises: Array<Promise<void>> = [];

    // Flush any batched requests immediately.
    if (this._acks.numPendingRequests) {
      promises.push(this._acks.onFlush());
      this._acks.flush('message count').catch(() => {});
    }

    if (this._modAcks.numPendingRequests) {
      promises.push(this._modAcks.onFlush());
      this._modAcks.flush('message count').catch(() => {});
    }

    // Now, prepare the drain promises.
    if (this._acks.numInFlightRequests) {
      promises.push(this._acks.onDrain());
    }

    if (this._modAcks.numInFlightRequests) {
      promises.push(this._modAcks.onDrain());
    }

    // Wait for the flush promises.
    await Promise.all(promises);
  }
}
