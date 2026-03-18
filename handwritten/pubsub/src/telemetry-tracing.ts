/*!
 * Copyright 2020-2024 Google LLC
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

import {
  Tracer,
  SpanContext,
  Span,
  context,
  trace,
  SpanKind,
  TextMapGetter,
  TextMapSetter,
  ROOT_CONTEXT,
  Context,
  Link,
} from '@opentelemetry/api';
import {W3CTraceContextPropagator} from '@opentelemetry/core';
import {Attributes, PubsubMessage} from './publisher/pubsub-message';
import {Duration} from './temporal';

export {Span};

// We need this to get the library version.
// eslint-disable-next-line @typescript-eslint/no-var-requires
const packageJson = require('../../package.json');

/**
 * Instantiates a Opentelemetry tracer for the library
 *
 * @private
 * @internal
 */
let cachedTracer: Tracer | undefined;
function getTracer(): Tracer {
  const tracer =
    cachedTracer ??
    trace.getTracer('@google-cloud/pubsub', packageJson.version);
  cachedTracer = tracer;
  return cachedTracer;
}

/**
 * Determination of the level of OTel support we're providing.
 *
 * @private
 * @internal
 */
export enum OpenTelemetryLevel {
  /**
   * None: OTel support is not enabled because we found no trace provider, or
   * the user has not enabled it.
   */
  None = 0,

  /**
   * Modern: We will only inject/extract the modern propagation attribute.
   */
  Modern = 2,
}

/**
 * The W3C trace context propagator, used for injecting/extracting trace context.
 *
 * @private
 * @internal
 */
const w3cTraceContextPropagator = new W3CTraceContextPropagator();

// True if user code elsewhere wants to enable OpenTelemetry support.
let globallyEnabled = false;

/**
 * Manually set the OpenTelemetry enabledness.
 *
 * @param enabled The enabled flag to use, to override any automated methods.
 * @private
 * @internal
 */
export function setGloballyEnabled(enabled: boolean) {
  globallyEnabled = enabled;
}

/**
 * Tries to divine what sort of OpenTelemetry we're supporting. See the enum
 * for the meaning of the values, and other notes.
 *
 * @private
 * @internal
 */
export function isEnabled(): OpenTelemetryLevel {
  return globallyEnabled ? OpenTelemetryLevel.Modern : OpenTelemetryLevel.None;
}

/**
 * Our Carrier object for propagation is anything with an 'attributes'
 * object, which is one of several possible Message classes. (They're
 * different for publish and subscribe.)
 *
 * Also we add a parentSpan optional member for passing around the
 * actual Span object within the client library. This can be a publish
 * or subscriber span, depending on the context.
 *
 * @private
 */
export interface MessageWithAttributes {
  attributes?: Attributes | null | undefined;
  parentSpan?: Span;
}

/**
 * Implements common members for the TextMap getter and setter interfaces for Pub/Sub messages.
 *
 * @private
 * @internal
 */
export class PubsubMessageGetSet {
  static keyPrefix = 'googclient_';

  keys(carrier: MessageWithAttributes): string[] {
    return Object.getOwnPropertyNames(carrier.attributes)
      .filter(n => n.startsWith(PubsubMessageGetSet.keyPrefix))
      .map(n => n.substring(PubsubMessageGetSet.keyPrefix.length));
  }

  protected attributeName(key: string): string {
    return `${PubsubMessageGetSet.keyPrefix}${key}`;
  }
}

/**
 * Implements the TextMap getter interface for Pub/Sub messages.
 *
 * @private
 * @internal
 */
export class PubsubMessageGet
  extends PubsubMessageGetSet
  implements TextMapGetter<MessageWithAttributes>
{
  get(
    carrier: MessageWithAttributes,
    key: string,
  ): string | string[] | undefined {
    return carrier?.attributes?.[this.attributeName(key)];
  }
}

/**
 * Implements the TextMap setter interface for Pub/Sub messages.
 *
 * @private
 * @internal
 */
export class PubsubMessageSet
  extends PubsubMessageGetSet
  implements TextMapSetter<MessageWithAttributes>
{
  set(carrier: MessageWithAttributes, key: string, value: string): void {
    if (!carrier.attributes) {
      carrier.attributes = {};
    }
    carrier.attributes[this.attributeName(key)] = value;
  }
}

/**
 * The getter to use when calling extract() on a Pub/Sub message.
 *
 * @private
 * @internal
 */
export const pubsubGetter = new PubsubMessageGet();

/**
 * The setter to use when calling inject() on a Pub/Sub message.
 *
 * @private
 * @internal
 */
export const pubsubSetter = new PubsubMessageSet();

/**
 * Description of the data structure passed for span attributes.
 *
 * @private
 * @internal
 */
export interface SpanAttributes {
  [x: string]: string | number | boolean;
}

/**
 * Converts a SpanContext to a full Context, as needed.
 *
 * @private
 * @internal
 */
export function spanContextToContext(
  parent?: SpanContext,
): Context | undefined {
  return parent ? trace.setSpanContext(context.active(), parent) : undefined;
}

/**
 * The modern propagation attribute name.
 *
 * Technically this is determined by the OpenTelemetry library, but
 * in practice, it follows the W3C spec, so this should be the right
 * one. The only thing we're using it for, anyway, is emptying user
 * supplied attributes.
 *
 * @private
 * @internal
 */
export const modernAttributeName = 'googclient_traceparent';

export interface AttributeParams {
  // Fully qualified.
  topicName?: string;
  subName?: string;

  // These are generally split from the fully qualified names.
  projectId?: string;
  topicId?: string;
  subId?: string;
}

/**
 * Break down the subscription's full name into its project and ID.
 *
 * @private
 * @internal
 */
export function getSubscriptionInfo(fullName: string): AttributeParams {
  const results = fullName.match(/projects\/([^/]+)\/subscriptions\/(.+)/);
  if (!results?.[0]) {
    return {
      subName: fullName,
    };
  }

  return {
    subName: fullName,
    projectId: results[1],
    subId: results[2],
  };
}

/**
 * Break down the subscription's full name into its project and ID.
 *
 * @private
 * @internal
 */
export function getTopicInfo(fullName: string): AttributeParams {
  const results = fullName.match(/projects\/([^/]+)\/topics\/(.+)/);
  if (!results?.[0]) {
    return {
      topicName: fullName,
    };
  }

  return {
    topicName: fullName,
    projectId: results[1],
    topicId: results[2],
  };
}

// Determines if a trace is to be sampled. There doesn't appear to be a sanctioned
// way to do this currently (isRecording does something different).
//
// Based on this: https://github.com/open-telemetry/opentelemetry-js/issues/4193
function isSampled(span: Span) {
  const FLAG_MASK_SAMPLED = 0x1;
  const spanContext = span.spanContext();
  const traceFlags = spanContext?.traceFlags;
  const sampled = !!(
    traceFlags && (traceFlags & FLAG_MASK_SAMPLED) === FLAG_MASK_SAMPLED
  );

  return sampled;
}

/**
 * Contains utility methods for creating spans.
 *
 * @private
 * @internal
 */
export class PubsubSpans {
  static createAttributes(
    params: AttributeParams,
    message?: PubsubMessage,
    caller?: string,
    operation?: string,
  ): SpanAttributes {
    const destinationName = params.topicName ?? params.subName;
    const destinationId = params.topicId ?? params.subId;
    const projectId = params.projectId;

    // Purposefully leaving this debug check here as a comment - this should
    // always be true, but we don't want to fail in prod if it's not.
    /*if (
      (params.topicName && params.subName) ||
      (!destinationName && !projectId && !destinationId)
    ) {
      throw new Error(
        'One of topicName or subName must be specified, and must be fully qualified'
      );
    }*/

    const spanAttributes = {
      // Add Opentelemetry semantic convention attributes to the span, based on:
      // https://github.com/open-telemetry/semantic-conventions/blob/v1.24.0/docs/messaging/messaging-spans.md
      ['messaging.system']: 'gcp_pubsub',
      ['messaging.destination.name']: destinationId ?? destinationName,
      ['gcp.project_id']: projectId,
      ['code.function']: caller ?? 'unknown',
    } as SpanAttributes;

    if (message) {
      if (message.calculatedSize) {
        spanAttributes['messaging.message.envelope.size'] =
          message.calculatedSize;
      } else {
        if (message.data?.length) {
          spanAttributes['messaging.message.envelope.size'] =
            message.data?.length;
        }
      }
      if (message.orderingKey) {
        spanAttributes['messaging.gcp_pubsub.message.ordering_key'] =
          message.orderingKey;
      }
      if (message.isExactlyOnceDelivery) {
        spanAttributes['messaging.gcp_pubsub.message.exactly_once_delivery'] =
          message.isExactlyOnceDelivery;
      }
      if (message.ackId) {
        spanAttributes['messaging.gcp_pubsub.message.ack_id'] = message.ackId;
      }
      if (operation) {
        spanAttributes['messaging.operation'] = operation;
      }
    }

    return spanAttributes;
  }

  static createPublisherSpan(
    message: PubsubMessage,
    topicName: string,
    caller: string,
  ): Span | undefined {
    if (!globallyEnabled) {
      return undefined;
    }

    const topicInfo = getTopicInfo(topicName);
    const span: Span = getTracer().startSpan(`${topicName} create`, {
      kind: SpanKind.PRODUCER,
      attributes: PubsubSpans.createAttributes(
        topicInfo,
        message,
        caller,
        'create',
      ),
    });
    if (topicInfo.topicId) {
      span.updateName(`${topicInfo.topicId} create`);
      span.setAttribute('messaging.destination.name', topicInfo.topicId);
    }

    return span;
  }

  static updatePublisherTopicName(span: Span, topicName: string) {
    const topicInfo = getTopicInfo(topicName);
    if (topicInfo.topicId) {
      span.updateName(`${topicInfo.topicId} create`);
      span.setAttribute('messaging.destination.name', topicInfo.topicId);
    } else {
      span.updateName(`${topicName} create`);
    }
    if (topicInfo.projectId) {
      span.setAttribute('gcp.project_id', topicInfo.projectId);
    }
  }

  static createReceiveSpan(
    message: PubsubMessage,
    subName: string,
    parent: Context | undefined,
    caller: string,
  ): Span | undefined {
    if (!globallyEnabled) {
      return undefined;
    }

    const subInfo = getSubscriptionInfo(subName);
    const name = `${subInfo.subId ?? subName} subscribe`;
    const attributes = this.createAttributes(
      subInfo,
      message,
      caller,
      'receive',
    );
    if (subInfo.subId) {
      attributes['messaging.destination.name'] = subInfo.subId;
    }

    if (context) {
      return getTracer().startSpan(
        name,
        {
          kind: SpanKind.CONSUMER,
          attributes,
        },
        parent,
      );
    } else {
      return getTracer().startSpan(name, {
        kind: SpanKind.CONSUMER,
        attributes,
      });
    }
  }

  static createChildSpan(
    name: string,
    message?: PubsubMessage,
    parentSpan?: Span,
    attributes?: SpanAttributes,
  ): Span | undefined {
    if (!globallyEnabled) {
      return undefined;
    }

    const parent = message?.parentSpan ?? parentSpan;
    if (parent) {
      return getTracer().startSpan(
        name,
        {
          kind: SpanKind.INTERNAL,
          attributes: attributes ?? {},
        },
        spanContextToContext(parent.spanContext()),
      );
    } else {
      return undefined;
    }
  }

  static createPublishFlowSpan(message: PubsubMessage): Span | undefined {
    return PubsubSpans.createChildSpan('publisher flow control', message);
  }

  static createPublishSchedulerSpan(message: PubsubMessage): Span | undefined {
    return PubsubSpans.createChildSpan('publisher batching', message);
  }

  static createPublishRpcSpan(
    messages: MessageWithAttributes[],
    topicName: string,
    caller: string,
  ): Span | undefined {
    if (!globallyEnabled) {
      return undefined;
    }

    const spanAttributes = PubsubSpans.createAttributes(
      getTopicInfo(topicName),
      undefined,
      caller,
      'create',
    );
    const links: Link[] = messages
      .filter(m => m.parentSpan && isSampled(m.parentSpan))
      .map(m => ({context: m.parentSpan!.spanContext()}) as Link)
      .filter(l => l.context);
    const span: Span = getTracer().startSpan(
      `${topicName} send`,
      {
        kind: SpanKind.PRODUCER,
        attributes: spanAttributes,
        links,
      },
      ROOT_CONTEXT,
    );
    span?.setAttribute('messaging.batch.message_count', messages.length);
    if (span) {
      // Also attempt to link from message spans back to the publish RPC span.
      messages.forEach(m => {
        if (m.parentSpan && isSampled(m.parentSpan)) {
          m.parentSpan.addLink({context: span.spanContext()});
        }
      });
    }

    return span;
  }

  static createAckRpcSpan(
    messageSpans: (Span | undefined)[],
    subName: string,
    caller: string,
  ): Span | undefined {
    if (!globallyEnabled) {
      return undefined;
    }

    const subInfo = getSubscriptionInfo(subName);

    const spanAttributes = PubsubSpans.createAttributes(
      subInfo,
      undefined,
      caller,
      'receive',
    );
    const links: Link[] = messageSpans
      .filter(m => m && isSampled(m))
      .map(m => ({context: m!.spanContext()}) as Link)
      .filter(l => l.context);
    const span: Span = getTracer().startSpan(
      `${subInfo.subId ?? subInfo.subName} ack`,
      {
        kind: SpanKind.CLIENT,
        attributes: spanAttributes,
        links,
      },
      ROOT_CONTEXT,
    );

    span?.setAttribute('messaging.batch.message_count', messageSpans.length);

    if (span) {
      // Also attempt to link from the subscribe span(s) back to the publish RPC span.
      messageSpans.forEach(m => {
        if (m && isSampled(m)) {
          m.addLink({context: span.spanContext()});
        }
      });
    }

    return span;
  }

  static createModackRpcSpan(
    messageSpans: (Span | undefined)[],
    subName: string,
    type: 'modack' | 'nack',
    caller: string,
    deadline?: Duration,
    isInitial?: boolean,
  ): Span | undefined {
    if (!globallyEnabled) {
      return undefined;
    }

    const subInfo = getSubscriptionInfo(subName);

    const spanAttributes = PubsubSpans.createAttributes(
      subInfo,
      undefined,
      caller,
      'receive',
    );
    const links: Link[] = messageSpans
      .filter(m => m && isSampled(m))
      .map(m => ({context: m!.spanContext()}) as Link)
      .filter(l => l.context);
    const span: Span = getTracer().startSpan(
      `${subInfo.subId ?? subInfo.subName} ${type}`,
      {
        kind: SpanKind.CLIENT,
        attributes: spanAttributes,
        links,
      },
      ROOT_CONTEXT,
    );

    span?.setAttribute('messaging.batch.message_count', messageSpans.length);

    if (span) {
      // Also attempt to link from the subscribe span(s) back to the publish RPC span.
      messageSpans.forEach(m => {
        if (m && isSampled(m)) {
          m.addLink({context: span.spanContext()});
        }
      });
    }

    if (deadline) {
      span?.setAttribute(
        'messaging.gcp_pubsub.message.ack_deadline_seconds',
        deadline.totalOf('second'),
      );
    }

    if (isInitial !== undefined) {
      span?.setAttribute('messaging.gcp_pubsub.is_receipt_modack', isInitial);
    }

    return span;
  }

  static createReceiveFlowSpan(
    message: MessageWithAttributes,
  ): Span | undefined {
    return PubsubSpans.createChildSpan(
      'subscriber concurrency control',
      message,
    );
  }

  static createReceiveSchedulerSpan(
    message: MessageWithAttributes,
  ): Span | undefined {
    return PubsubSpans.createChildSpan('subscriber scheduler', message);
  }

  static createReceiveProcessSpan(
    message: MessageWithAttributes,
    subName: string,
  ): Span | undefined {
    const subInfo = getSubscriptionInfo(subName);
    return PubsubSpans.createChildSpan(
      `${subInfo.subId ?? subName} process`,
      message,
    );
  }

  static setReceiveProcessResult(span: Span, isAck: boolean) {
    span?.setAttribute('messaging.gcp_pubsub.result', isAck ? 'ack' : 'nack');
  }
}

/**
 * Creates and manipulates Pub/Sub-related events on spans.
 *
 * @private
 * @internal
 */
export class PubsubEvents {
  static addEvent(
    text: string,
    message: MessageWithAttributes,
    attributes?: Attributes,
  ): void {
    const parent = message.parentSpan;
    if (!parent) {
      return;
    }

    parent.addEvent(text, attributes);
  }

  static publishStart(message: MessageWithAttributes) {
    PubsubEvents.addEvent('publish start', message);
  }

  static publishEnd(message: MessageWithAttributes) {
    PubsubEvents.addEvent('publish end', message);
  }

  static ackStart(message: MessageWithAttributes) {
    PubsubEvents.addEvent('ack start', message);
  }

  static ackEnd(message: MessageWithAttributes) {
    PubsubEvents.addEvent('ack end', message);
  }

  static modackStart(message: MessageWithAttributes) {
    PubsubEvents.addEvent('modack start', message);
  }

  static modackEnd(message: MessageWithAttributes) {
    PubsubEvents.addEvent('modack end', message);
  }

  static nackStart(message: MessageWithAttributes) {
    PubsubEvents.addEvent('nack start', message);
  }

  static nackEnd(message: MessageWithAttributes) {
    PubsubEvents.addEvent('nack end', message);
  }

  static ackCalled(span: Span) {
    span.addEvent('ack called');
  }

  static nackCalled(span: Span) {
    span.addEvent('nack called');
  }

  static modAckCalled(span: Span, deadline: Duration) {
    // User-called modAcks are never initial ones.
    span.addEvent('modack called', {
      'messaging.gcp_pubsub.modack_deadline_seconds': `${deadline.totalOf(
        'second',
      )}`,
      'messaging.gcp_pubsub.is_receipt_modack': 'false',
    });
  }

  static modAckStart(
    message: MessageWithAttributes,
    deadline: Duration,
    isInitial: boolean,
  ) {
    PubsubEvents.addEvent('modack start', message, {
      'messaging.gcp_pubsub.modack_deadline_seconds': `${deadline.totalOf(
        'second',
      )}`,
      'messaging.gcp_pubsub.is_receipt_modack': isInitial ? 'true' : 'false',
    });
  }

  static modAckEnd(message: MessageWithAttributes) {
    PubsubEvents.addEvent('modack end', message);
  }

  // Add this event any time the process is shut down before processing
  // of the message can complete.
  static shutdown(message: MessageWithAttributes) {
    PubsubEvents.addEvent('shutdown', message);
  }
}

/**
 * Injects the trace context into a Pub/Sub message (or other object with
 * an 'attributes' object) for propagation.
 *
 * This is for the publish side.
 *
 * @private
 * @internal
 */
export function injectSpan(span: Span, message: MessageWithAttributes): void {
  if (!globallyEnabled) {
    return;
  }

  if (!message.attributes) {
    message.attributes = {};
  }

  if (message.attributes[modernAttributeName]) {
    console.warn(
      `${modernAttributeName} key set as message attribute, but will be overridden.`,
    );

    delete message.attributes[modernAttributeName];
  }

  // Always do propagation injection with the trace context.
  const context = trace.setSpanContext(ROOT_CONTEXT, span.spanContext());
  w3cTraceContextPropagator.inject(context, message, pubsubSetter);

  // Also put the direct reference to the Span object for while we're
  // passing it around in the client library.
  message.parentSpan = span;
}

/**
 * Returns true if this message potentially contains a span context.
 *
 * @private
 * @internal
 */
export function containsSpanContext(message: MessageWithAttributes): boolean {
  if (message.parentSpan) {
    return true;
  }

  if (!message.attributes) {
    return false;
  }

  const keys = Object.getOwnPropertyNames(message.attributes);
  return !!keys.find(n => n === modernAttributeName);
}

/**
 * Extracts the trace context from a Pub/Sub message (or other object with
 * an 'attributes' object) from a propagation, for receive processing. If no
 * context was present, create a new parent span.
 *
 * This is for the receive side.
 *
 * @private
 * @internal
 */
export function extractSpan(
  message: MessageWithAttributes,
  subName: string,
): Span | undefined {
  if (!globallyEnabled) {
    return undefined;
  }

  if (message.parentSpan) {
    return message.parentSpan;
  }

  const keys = Object.getOwnPropertyNames(message.attributes ?? {});

  let context: Context | undefined;

  if (keys.includes(modernAttributeName)) {
    context = w3cTraceContextPropagator.extract(
      ROOT_CONTEXT,
      message,
      pubsubGetter,
    );
  }

  const span = PubsubSpans.createReceiveSpan(
    message,
    subName,
    context,
    'extractSpan',
  );
  message.parentSpan = span;
  return span;
}
