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

import {ChannelEntry} from './types';

/**
 * Kind of affinity required by an operation.
 */
export enum AffinityKind {
  /** Multi-statement Read/Write transactions require hard stickiness. */
  ReadWrite = 0,
  /** Read-Only transactions prefer soft stickiness for warmth. */
  ReadOnly = 1,
}

/**
 * Caller-owned handle managing channel affinity across multi-statement transactions.
 */
export class TransactionAffinity {
  pinnedEntry: ChannelEntry | null = null;

  constructor(readonly kind: AffinityKind = AffinityKind.ReadWrite) {}

  /**
   * Resets affinity upon transaction commit, rollback, or close.
   */
  reset(): void {
    if (this.pinnedEntry && this.kind === AffinityKind.ReadWrite) {
      this.pinnedEntry.activeRwTransactions = Math.max(
        0,
        this.pinnedEntry.activeRwTransactions - 1,
      );
    }
    this.pinnedEntry = null;
  }
}
