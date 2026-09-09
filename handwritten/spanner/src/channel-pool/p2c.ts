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
 * Selects an active channel using the Power of Two Choices (P2C) algorithm.
 * Randomly picks two distinct channels, compares their effective load
 * (in-flight RPCs + active R/W transactions), and chooses the lesser loaded.
 * On tie, prefers the warmer channel (most recent activity).
 *
 * @param entries List of available active channel entries.
 * @returns The chosen ChannelEntry.
 */
export function selectPowerOfTwo(entries: ChannelEntry[]): ChannelEntry {
  const length = entries.length;
  if (length === 0) {
    throw new Error('No active channels available in channel pool.');
  }
  if (length === 1) {
    return entries[0];
  }

  const index1 = Math.floor(Math.random() * length);
  let index2 = Math.floor(Math.random() * (length - 1));
  if (index2 >= index1) {
    index2++;
  }

  const entry1 = entries[index1];
  const entry2 = entries[index2];

  const load1 = entry1.inFlightRpcs + entry1.activeRwTransactions;
  const load2 = entry2.inFlightRpcs + entry2.activeRwTransactions;

  if (load1 < load2) {
    return entry1;
  }
  if (load2 < load1) {
    return entry2;
  }
  // Tie-breaker: prefer warmer channel
  return entry1.lastActivity >= entry2.lastActivity ? entry1 : entry2;
}
