/*!
 * Copyright 2026 Google LLC. All Rights Reserved.
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

import * as grpc from '@grpc/grpc-js';

/**
 * Spanner server automatically aborts idle Read/Write transactions after 10 seconds.
 */
export const SPANNER_RW_TRANSACTION_IDLE_TIMEOUT_MS = 10000;

/**
 * Lifecycle state of an individual gRPC channel in the pool.
 */
export enum ChannelState {
  /**
   * Actively serving new traffic and eligible for P2C picker selection.
   */
  ACTIVE = 'ACTIVE',

  /**
   * Draining in-flight RPCs and active Read/Write transactions; closed to new traffic.
   */
  DRAINING = 'DRAINING',

  /**
   * Draining completed; physical gRPC connection is closed.
   */
  CLOSED = 'CLOSED',
}

/**
 * Managed entry representing a single physical gRPC channel in the pool.
 */
export class ChannelEntry {
  /**
   * Monotonically increasing unique internal ID for transaction affinity pinning.
   */
  readonly id: number;

  /**
   * Logical 1-based channel slot (1..=maxChannels) passed to x-goog-spanner-request-id.
   */
  readonly logicalChannelId: number;

  /**
   * Physical gRPC channel instance.
   */
  readonly channel: grpc.Channel;

  /**
   * Creation timestamp in milliseconds.
   */
  readonly createdAt: number;

  private inFlightRpcs = 0;
  private activeReadWriteTransactions = 0;
  private state: ChannelState = ChannelState.ACTIVE;
  private lastActivity: number;

  constructor(
    id: number,
    logicalChannelId: number,
    channel: grpc.Channel,
    createdAt: number = Date.now(),
  ) {
    this.id = id;
    this.logicalChannelId = logicalChannelId;
    this.channel = channel;
    this.createdAt = createdAt;
    this.lastActivity = createdAt;
  }

  /**
   * Updates the last activity timestamp.
   *
   * @param timestamp Optional timestamp in milliseconds (defaults to Date.now()).
   */
  touchActivity(timestamp: number = Date.now()): void {
    if (timestamp > this.lastActivity) {
      this.lastActivity = timestamp;
    }
  }

  /**
   * Overrides last activity timestamp for deterministic testing.
   *
   * @param timestamp Timestamp in milliseconds.
   */
  setLastActivityForTesting(timestamp: number): void {
    this.lastActivity = timestamp;
  }

  /**
   * Returns the timestamp of the most recent activity in milliseconds.
   */
  getLastActivity(): number {
    return this.lastActivity;
  }

  /**
   * Returns elapsed milliseconds since the most recent activity on this channel.
   *
   * @param now Optional current timestamp baseline in milliseconds.
   */
  elapsedSinceActivity(now: number = Date.now()): number {
    return Math.max(0, now - this.lastActivity);
  }

  /**
   * Returns the count of active RPCs currently executing over the wire.
   */
  inFlight(): number {
    return this.inFlightRpcs;
  }

  /**
   * Returns the count of active Read/Write transactions pinned to this channel.
   */
  activeReadWriteTransactionCount(): number {
    return this.activeReadWriteTransactions;
  }

  /**
   * Returns the current lifecycle state of this channel.
   */
  getState(): ChannelState {
    return this.state;
  }

  /**
   * Sets the lifecycle state of this channel.
   */
  setState(state: ChannelState): void {
    this.state = state;
    if (state === ChannelState.DRAINING) {
      this.touchActivity();
    }
  }

  /**
   * Returns true if the channel is active and eligible for new picks.
   */
  isActive(): boolean {
    return this.state === ChannelState.ACTIVE;
  }

  /**
   * Returns true if the channel is draining.
   */
  isDraining(): boolean {
    return this.state === ChannelState.DRAINING;
  }

  /**
   * Returns true if the channel has been closed.
   */
  isClosed(): boolean {
    return this.state === ChannelState.CLOSED;
  }

  /**
   * Increments the in-flight RPC counter.
   */
  incrementInFlight(): void {
    this.inFlightRpcs += 1;
  }

  /**
   * Decrements the in-flight RPC counter.
   * Touches the activity timestamp only when a draining channel drops to idle (0 in-flight),
   * providing the baseline for idle channel reaping without per-RPC clock calls on active channels.
   */
  decrementInFlight(): void {
    if (this.inFlightRpcs > 0) {
      this.inFlightRpcs -= 1;
      if (this.inFlightRpcs === 0 && this.isDraining()) {
        this.touchActivity();
      }
    }
  }

  /**
   * Increments the active Read/Write transaction counter and touches activity if draining.
   */
  incrementActiveReadWrite(): void {
    this.activeReadWriteTransactions += 1;
    if (this.isDraining()) {
      this.touchActivity();
    }
  }

  /**
   * Decrements the active Read/Write transaction counter and touches activity if draining.
   */
  decrementActiveReadWrite(): void {
    if (this.activeReadWriteTransactions > 0) {
      this.activeReadWriteTransactions -= 1;
      if (this.isDraining()) {
        this.touchActivity();
      }
    }
  }

  /**
   * Closes the underlying physical gRPC channel and marks the state as CLOSED.
   */
  close(): void {
    this.state = ChannelState.CLOSED;
    try {
      this.channel.close();
    } catch {
      // Ignore errors when closing physical channel socket.
    }
  }
}
