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

import {ChannelEntry} from './entry';

/**
 * Stickiness kind for transaction channel affinity.
 */
export enum AffinityKind {
  /**
   * Read/Write transactions require hard stickiness to ensure all statements
   * route to the same SpanFE, even if the channel transitions to draining.
   */
  ReadWrite = 'READ_WRITE',

  /**
   * Read-Only transactions prefer soft stickiness for cache warmth, but seamlessly
   * switch to a fresh active channel if their pinned channel begins draining.
   */
  ReadOnly = 'READ_ONLY',
}

/**
 * Caller-owned handle managing channel affinity across multi-statement transactions.
 *
 * Pins statements within a transaction to the same physical gRPC channel and tracks
 * active Read/Write transaction count on the channel to ensure safe channel draining.
 */
export class TransactionAffinity {
  private entryId = 0;
  private entry?: ChannelEntry;
  private readonly kind: AffinityKind;
  private guardedEntry?: ChannelEntry;
  private disposed = false;

  constructor(kind: AffinityKind = AffinityKind.ReadWrite) {
    this.kind = kind;
  }

  /**
   * Creates a new unpinned handle for Read/Write transactions (hard stickiness).
   */
  static newReadWrite(): TransactionAffinity {
    return new TransactionAffinity(AffinityKind.ReadWrite);
  }

  /**
   * Creates a new unpinned handle for Read-Only transactions (soft stickiness).
   */
  static newReadOnly(): TransactionAffinity {
    return new TransactionAffinity(AffinityKind.ReadOnly);
  }

  /**
   * Returns true if this handle requires hard stickiness (Read/Write transactions).
   */
  isReadWrite(): boolean {
    return this.kind === AffinityKind.ReadWrite;
  }

  /**
   * Returns true if this handle uses soft stickiness (Read-Only transactions).
   */
  isReadOnly(): boolean {
    return this.kind === AffinityKind.ReadOnly;
  }

  /**
   * Returns the pinned monotonic channel entry ID, or null if unpinned.
   */
  pinnedEntryId(): number | null {
    return this.entryId !== 0 ? this.entryId : null;
  }

  /**
   * Returns the direct pinned ChannelEntry reference, or null if unpinned.
   */
  pinnedEntry(): ChannelEntry | null {
    return this.entry ?? null;
  }

  /**
   * Returns the 1-based logical channel ID (slot) of the pinned channel, or null if unpinned.
   */
  logicalChannelId(): number | null {
    return this.entry?.logicalChannelId ?? null;
  }

  /**
   * Pins this affinity handle to a specific physical ChannelEntry.
   *
   * @param entry Active or draining ChannelEntry to pin.
   */
  pinEntry(entry: ChannelEntry): void {
    this.entry = entry;
    this.entryId = entry.id;
  }

  /**
   * Ensures that an active Read/Write transaction guard is attached to this handle
   * for the given channel entry, incrementing active Read/Write transactions on the channel.
   *
   * @param entry The channel entry.
   */
  ensureReadWriteGuard(entry: ChannelEntry): void {
    if (!this.isReadWrite() || this.disposed) {
      return;
    }
    if (this.guardedEntry === entry) {
      return;
    }
    if (this.guardedEntry) {
      this.guardedEntry.decrementActiveReadWrite();
      this.guardedEntry = undefined;
    }
    this.guardedEntry = entry;
    entry.incrementActiveReadWrite();
  }

  hasReadWriteGuard(): boolean {
    return this.guardedEntry !== undefined;
  }

  /**
   * Clears the pinned entry ID and releases any attached Read/Write guard.
   */
  reset(): void {
    this.entryId = 0;
    this.entry = undefined;
    if (this.guardedEntry) {
      this.guardedEntry.decrementActiveReadWrite();
      this.guardedEntry = undefined;
    }
  }

  /**
   * Releases and disposes the affinity handle upon transaction completion (commit, rollback, or destruction).
   */
  release(): void {
    if (this.disposed) {
      return;
    }
    this.disposed = true;
    this.reset();
  }
}
