// Copyright 2026 Google LLC
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

import {Message, Subscription} from '../src';

export interface WaitForMessagesOptions {
  /** Number of messages to collect before resolving. Defaults to 1. */
  count?: number;
  /** Timeout in milliseconds. Defaults to 15,000ms. */
  timeoutMs?: number;
  /** Whether to automatically ack received messages. Defaults to true. */
  autoAck?: boolean;
  /** Optional filter predicate. Only matching messages increment count and get collected. */
  filter?: (message: Message) => boolean;
  /** Optional per-message inspection hook called for matching messages before ack/resolve. */
  onMessage?: (message: Message) => void | Promise<void>;
  /** Error message prefix if timeout occurs. */
  timeoutErrorMessage?: string;
  /** Whether to call subscription.close() after receiving all expected messages. Defaults to false. */
  closeWhenDone?: boolean;
}

/**
 * Listens for messages on a subscription until the expected count is reached,
 * a timeout occurs, or an error is emitted.
 *
 * Guarantees that all attached listeners ('message', 'error') and any active timeouts
 * are removed on success, error, or timeout to avoid leaking resources.
 */
export async function waitForMessages(
  subscription: Subscription,
  options: WaitForMessagesOptions = {}
): Promise<Message[]> {
  const {
    count = 1,
    timeoutMs = 15000,
    autoAck = true,
    filter = () => true,
    onMessage,
    timeoutErrorMessage = 'Timeout waiting for messages',
    closeWhenDone = false,
  } = options;

  return new Promise<Message[]>((resolve, reject) => {
    const received: Message[] = [];
    let timeoutId: NodeJS.Timeout | undefined;

    let cleanedUp = false;
    const cleanup = () => {
      if (cleanedUp) return;
      cleanedUp = true;

      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = undefined;
      }
      subscription.removeListener('message', messageHandler);
      subscription.removeListener('error', errorHandler);

      if (closeWhenDone) {
        void subscription.close();
      }
    };

    const messageHandler = async (msg: Message) => {
      try {
        if (!filter(msg)) {
          return;
        }

        if (onMessage) {
          await onMessage(msg);
        }

        if (autoAck) {
          msg.ack();
        }

        received.push(msg);

        if (received.length >= count) {
          cleanup();
          resolve(received);
        }
      } catch (err) {
        cleanup();
        reject(err);
      }
    };

    const errorHandler = (err: Error) => {
      cleanup();
      reject(err);
    };

    timeoutId = setTimeout(() => {
      cleanup();
      reject(new Error(`${timeoutErrorMessage} (${timeoutMs}ms)`));
    }, timeoutMs);

    subscription.on('error', errorHandler);
    subscription.on('message', messageHandler);
  });
}

/**
 * Listens for a single message on a subscription with guaranteed cleanup.
 */
export async function waitForMessage(
  subscription: Subscription,
  options: Omit<WaitForMessagesOptions, 'count'> = {}
): Promise<Message> {
  const messages = await waitForMessages(subscription, {...options, count: 1});
  return messages[0];
}

/**
 * Tracks event listeners attached to a Subscription and removes them on cleanup.
 */
export class SubscriptionScope {
  private cleanups: Array<() => void> = [];

  constructor(public readonly subscription: Subscription) {}

  /** Attaches an event listener and tracks it for automatic teardown */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  on(event: string, listener: (...args: any[]) => void): this {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.subscription.on(event as any, listener as any);
    this.cleanups.push(() => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      this.subscription.removeListener(event as any, listener as any);
    });
    return this;
  }

  /** Cleans up all listeners registered through this scope */
  cleanup(): void {
    while (this.cleanups.length > 0) {
      const fn = this.cleanups.pop();
      try {
        fn?.();
      } catch {}
    }
  }
}

/**
 * Runs an asynchronous test block with a managed subscription scope, guaranteeing
 * that all registered listeners are removed in a finally block.
 */
export async function withSubscriptionScope<T>(
  subscription: Subscription,
  fn: (scope: SubscriptionScope) => Promise<T>
): Promise<T> {
  const scope = new SubscriptionScope(subscription);
  try {
    return await fn(scope);
  } finally {
    scope.cleanup();
  }
}
