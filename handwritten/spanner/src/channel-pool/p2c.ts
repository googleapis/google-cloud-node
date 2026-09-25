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

  if (length === 2) {
    const firstEntry = entries[0];
    const secondEntry = entries[1];
    const firstLoad = firstEntry.inFlightRpcs + firstEntry.activeRwTransactions;
    const secondLoad =
      secondEntry.inFlightRpcs + secondEntry.activeRwTransactions;
    if (firstLoad < secondLoad) {
      return firstEntry;
    }
    if (secondLoad < firstLoad) {
      return secondEntry;
    }
    return firstEntry.lastActivity >= secondEntry.lastActivity
      ? firstEntry
      : secondEntry;
  }

  const combinations = length * (length - 1);
  const sample = (Math.random() * combinations) | 0;
  const divisor = length - 1;
  const firstIndex = (sample / divisor) | 0;
  let secondIndex = sample % divisor;
  if (secondIndex >= firstIndex) {
    secondIndex++;
  }

  const firstEntry = entries[firstIndex];
  const secondEntry = entries[secondIndex];

  const firstLoad = firstEntry.inFlightRpcs + firstEntry.activeRwTransactions;
  const secondLoad =
    secondEntry.inFlightRpcs + secondEntry.activeRwTransactions;

  if (firstLoad < secondLoad) {
    return firstEntry;
  }
  if (secondLoad < firstLoad) {
    return secondEntry;
  }
  // Tie-breaker: prefer warmer channel
  return firstEntry.lastActivity >= secondEntry.lastActivity
    ? firstEntry
    : secondEntry;
}
