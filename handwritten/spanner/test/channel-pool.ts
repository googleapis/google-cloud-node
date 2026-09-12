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

import * as assert from 'assert';
import * as grpc from '@grpc/grpc-js';
import * as sinon from 'sinon';
import {context, ROOT_CONTEXT} from '@opentelemetry/api';
import {
  ChannelEntry,
  ChannelPool,
  ChannelPoolHolder,
  ChannelState,
  DEFAULT_CHANNEL_POOL_OPTIONS,
  MAX_SUPPORTED_CHANNELS,
  TransactionAffinity,
  allocateSlot,
  calculateScaleUpCount,
  calculateTargetRpcPerChannel,
  callInvocationTransformer,
  channelFactoryOverride,
  dialAndPrimeChannel,
  evaluateScaleDown,
  executeSelectOne,
  normalizeChannelPoolOptions,
  sweepDrainingChannels,
} from '../src/channel-pool';
import {X_GOOG_SPANNER_REQUEST_ID_HEADER} from '../src/request_id_header';
import {Spanner} from '../src';
import {getActiveOrNoopSpan} from '../src/instrument';
import {protos} from '@google-cloud/spanner-api';
import * as mock from './mockserver/mockspanner';

function createMockChannel(target = 'spanner.googleapis.com'): grpc.Channel {
  let connectivityState = (grpc.connectivityState as any).READY;

  return {
    close: () => {
      connectivityState = (grpc.connectivityState as any).SHUTDOWN;
    },
    getTarget: () => target,
    getConnectivityState: () => connectivityState,
    watchConnectivityState: (
      _currentState: any,
      _deadline: any,
      callback: (error?: Error) => void,
    ) => {
      process.nextTick(() => callback());
    },
    getChannelzRef: () => ({id: 1}),
    createCall: () => {
      return {
        start: (_metadata: any, listener: any) => {
          process.nextTick(() => {
            if (listener.onReceiveMetadata) {
              listener.onReceiveMetadata(new grpc.Metadata());
            }
            if (listener.onReceiveMessage) {
              listener.onReceiveMessage(Buffer.from('{}'));
            }
            if (listener.onReceiveStatus) {
              listener.onReceiveStatus({code: grpc.status.OK});
            }
          });
        },
        sendMessage: () => {},
        halfClose: () => {},
        cancel: () => {},
        startRead: () => {},
      } as any;
    },
  } as unknown as grpc.Channel;
}

describe('ChannelPool', () => {
  let sandbox: sinon.SinonSandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('TransactionAffinity', () => {
    it('creates handles with correct default kinds', () => {
      const defaultAffinity = new TransactionAffinity();
      assert.strictEqual(defaultAffinity.isReadWrite(), true);
      assert.strictEqual(defaultAffinity.isReadOnly(), false);
      assert.strictEqual(defaultAffinity.pinnedEntryId(), null);

      const readWriteAffinity = TransactionAffinity.newReadWrite();
      assert.strictEqual(readWriteAffinity.isReadWrite(), true);
      assert.strictEqual(readWriteAffinity.isReadOnly(), false);

      const readOnlyAffinity = TransactionAffinity.newReadOnly();
      assert.strictEqual(readOnlyAffinity.isReadOnly(), true);
      assert.strictEqual(readOnlyAffinity.isReadWrite(), false);
    });

    it('pins, retrieves, and resets pinned entry', () => {
      const affinity = TransactionAffinity.newReadWrite();
      assert.strictEqual(affinity.pinnedEntryId(), null);

      const entry = new ChannelEntry(42, 1, createMockChannel());
      affinity.pinEntry(entry);
      assert.strictEqual(affinity.pinnedEntryId(), 42);
      assert.strictEqual(affinity.pinnedEntry(), entry);

      affinity.reset();
      assert.strictEqual(affinity.pinnedEntryId(), null);
      assert.strictEqual(affinity.pinnedEntry(), null);
    });

    it('tracks Read/Write transaction guard lifecycle and idempotency', () => {
      const channel1 = createMockChannel();
      const channel2 = createMockChannel();
      const entry1 = new ChannelEntry(1, 1, channel1);
      const entry2 = new ChannelEntry(2, 2, channel2);

      const affinity = TransactionAffinity.newReadWrite();
      assert.strictEqual(affinity.hasReadWriteGuard(), false);

      affinity.ensureReadWriteGuard(entry1);
      assert.strictEqual(affinity.hasReadWriteGuard(), true);
      assert.strictEqual(entry1.activeReadWriteTransactionCount(), 1);
      assert.strictEqual(entry2.activeReadWriteTransactionCount(), 0);

      // Idempotent call for the same entry does not increment count again
      affinity.ensureReadWriteGuard(entry1);
      assert.strictEqual(entry1.activeReadWriteTransactionCount(), 1);

      // Repinning to entry 2 drops guard on entry 1 and increments entry 2
      affinity.ensureReadWriteGuard(entry2);
      assert.strictEqual(entry1.activeReadWriteTransactionCount(), 0);
      assert.strictEqual(entry2.activeReadWriteTransactionCount(), 1);

      // Release drops attached guard
      affinity.release();
      assert.strictEqual(affinity.hasReadWriteGuard(), false);
      assert.strictEqual(entry2.activeReadWriteTransactionCount(), 0);

      // Subsequent ensureReadWriteGuard on disposed affinity is no-op
      affinity.ensureReadWriteGuard(entry2);
      assert.strictEqual(affinity.hasReadWriteGuard(), false);
      assert.strictEqual(entry2.activeReadWriteTransactionCount(), 0);
    });

    it('ignores ensureReadWriteGuard for Read-Only affinity handles', () => {
      const entry = new ChannelEntry(1, 1, createMockChannel());
      const affinity = TransactionAffinity.newReadOnly();

      affinity.ensureReadWriteGuard(entry);
      assert.strictEqual(affinity.hasReadWriteGuard(), false);
      assert.strictEqual(entry.activeReadWriteTransactionCount(), 0);
    });
  });

  describe('Configuration & Normalization', () => {
    it('applies default configuration when no options are provided', () => {
      const config = normalizeChannelPoolOptions();
      assert.deepStrictEqual(config, DEFAULT_CHANNEL_POOL_OPTIONS);
    });

    it('preserves user options while filling unspecified defaults', () => {
      const config = normalizeChannelPoolOptions({
        minChannels: 2,
        maxChannels: 8,
        initialChannels: 3,
      });

      assert.strictEqual(config.minChannels, 2);
      assert.strictEqual(config.maxChannels, 8);
      assert.strictEqual(config.initialChannels, 3);
      assert.strictEqual(
        config.maxRpcPerChannel,
        DEFAULT_CHANNEL_POOL_OPTIONS.maxRpcPerChannel,
      );
    });

    it('rejects invalid configuration boundaries', () => {
      assert.throws(
        () => normalizeChannelPoolOptions({minChannels: 0}),
        /minChannels must be an integer of at least 1/,
      );
      assert.throws(
        () => normalizeChannelPoolOptions({minChannels: 5, maxChannels: 4}),
        /maxChannels must be an integer greater than or equal to minChannels/,
      );
      assert.throws(
        () =>
          normalizeChannelPoolOptions({
            maxChannels: MAX_SUPPORTED_CHANNELS + 1,
          }),
        /maxChannels cannot exceed maximum supported limit/,
      );
      assert.throws(
        () =>
          normalizeChannelPoolOptions({
            minChannels: 3,
            maxChannels: 10,
            initialChannels: 2,
          }),
        /initialChannels must be an integer between minChannels and maxChannels/,
      );
      assert.throws(
        () =>
          normalizeChannelPoolOptions({
            minChannels: 3,
            maxChannels: 10,
            initialChannels: 11,
          }),
        /initialChannels must be an integer between minChannels and maxChannels/,
      );
      assert.throws(
        () => normalizeChannelPoolOptions({minRpcPerChannel: 0}),
        /minRpcPerChannel must be a finite number greater than 0/,
      );
      assert.throws(
        () =>
          normalizeChannelPoolOptions({
            minRpcPerChannel: 20,
            maxRpcPerChannel: 15,
          }),
        /maxRpcPerChannel must be a finite number strictly greater than minRpcPerChannel/,
      );
      assert.throws(
        () => normalizeChannelPoolOptions({maxScaleUpPercent: 0}),
        /maxScaleUpPercent must be greater than 0/,
      );
      assert.throws(
        () => normalizeChannelPoolOptions({maxRemoveChannels: 0}),
        /maxRemoveChannels must be an integer of at least 1/,
      );
      assert.throws(
        () => normalizeChannelPoolOptions({consecutiveLowLoadChecks: 0}),
        /consecutiveLowLoadChecks must be an integer of at least 1/,
      );
      assert.throws(
        () => normalizeChannelPoolOptions({scaleDownIntervalMs: 0}),
        /scaleDownIntervalMs must be greater than 0/,
      );
      assert.throws(
        () => normalizeChannelPoolOptions({scaleUpCooldownMs: -1}),
        /scaleUpCooldownMs must be non-negative/,
      );
      assert.throws(
        () => normalizeChannelPoolOptions({drainIdleGraceMs: 0}),
        /drainIdleGraceMs must be greater than 0/,
      );
      assert.throws(
        () => normalizeChannelPoolOptions({primeTimeoutMs: 0}),
        /primeTimeoutMs must be greater than 0/,
      );
    });
  });

  describe('ChannelEntry', () => {
    it('manages lifecycle states and activity timestamps', () => {
      const channel = createMockChannel();
      const startTime = 1000;
      const entry = new ChannelEntry(1, 1, channel, startTime);

      assert.strictEqual(entry.isActive(), true);
      assert.strictEqual(entry.isDraining(), false);
      assert.strictEqual(entry.isClosed(), false);
      assert.strictEqual(entry.getLastActivity(), startTime);

      entry.touchActivity(2500);
      assert.strictEqual(entry.getLastActivity(), 2500);
      assert.strictEqual(entry.elapsedSinceActivity(3000), 500);

      entry.setState(ChannelState.DRAINING);
      assert.strictEqual(entry.isDraining(), true);
      assert.strictEqual(entry.isActive(), false);

      entry.close();
      assert.strictEqual(entry.isClosed(), true);
      assert.strictEqual(entry.isDraining(), false);
    });

    it('tracks in-flight RPCs and guards against underflow', () => {
      const entry = new ChannelEntry(1, 1, createMockChannel());
      assert.strictEqual(entry.inFlight(), 0);

      entry.incrementInFlight();
      entry.incrementInFlight();
      assert.strictEqual(entry.inFlight(), 2);

      entry.decrementInFlight();
      assert.strictEqual(entry.inFlight(), 1);

      entry.decrementInFlight();
      assert.strictEqual(entry.inFlight(), 0);

      entry.decrementInFlight();
      assert.strictEqual(entry.inFlight(), 0);
    });

    it('tracks active Read/Write transactions and guards against underflow', () => {
      const entry = new ChannelEntry(1, 1, createMockChannel());
      assert.strictEqual(entry.activeReadWriteTransactionCount(), 0);

      entry.incrementActiveReadWrite();
      assert.strictEqual(entry.activeReadWriteTransactionCount(), 1);

      entry.decrementActiveReadWrite();
      assert.strictEqual(entry.activeReadWriteTransactionCount(), 0);

      entry.decrementActiveReadWrite();
      assert.strictEqual(entry.activeReadWriteTransactionCount(), 0);
    });
  });

  describe('Power of Two Choices (P2C) Selection', () => {
    it('avoids heavily loaded channels in favour of idle channels', () => {
      const pool = new ChannelPool(
        'localhost:9010',
        grpc.credentials.createInsecure(),
        {},
        {minChannels: 3, maxChannels: 3, initialChannels: 3},
        createMockChannel,
      );

      const channels = pool.activeChannels();
      assert.strictEqual(channels.length, 3);

      // Simulate high load on channel 1 (id 1)
      for (let i = 0; i < 20; i++) {
        channels[0].incrementInFlight();
      }

      // Channels 2 and 3 remain at 0 load
      assert.strictEqual(channels[0].inFlight(), 20);
      assert.strictEqual(channels[1].inFlight(), 0);
      assert.strictEqual(channels[2].inFlight(), 0);

      // Over 100 picks, P2C should never pick channel 1 when paired against 2 or 3
      for (let i = 0; i < 100; i++) {
        const entry = pool.pickEntry();
        assert.notStrictEqual(
          entry.id,
          1,
          'P2C must avoid picking heavily loaded channel 1',
        );
      }

      pool.close();
    });

    it('breaks ties using active Read/Write transactions', () => {
      const pool = new ChannelPool(
        'localhost:9010',
        grpc.credentials.createInsecure(),
        {},
        {minChannels: 2, maxChannels: 2, initialChannels: 2},
        createMockChannel,
      );

      const channels = pool.activeChannels();
      // Both channels have 0 in-flight RPCs, but channel 1 has an active R/W transaction
      channels[0].incrementActiveReadWrite();

      assert.strictEqual(channels[0].inFlight(), 0);
      assert.strictEqual(channels[1].inFlight(), 0);
      assert.strictEqual(channels[0].activeReadWriteTransactionCount(), 1);
      assert.strictEqual(channels[1].activeReadWriteTransactionCount(), 0);

      // P2C comparing the two channels must pick channel 2 (fewer active R/W transactions)
      for (let i = 0; i < 50; i++) {
        const entry = pool.pickEntry();
        assert.strictEqual(
          entry.id,
          2,
          'Tie-breaker must prefer channel with fewer active R/W transactions',
        );
      }

      pool.close();
    });

    it('breaks ties uniformly at random when load and active RW are equal', () => {
      const pool = new ChannelPool(
        'localhost:9010',
        grpc.credentials.createInsecure(),
        {},
        {minChannels: 2, maxChannels: 2, initialChannels: 2},
        createMockChannel,
      );

      const counts = new Map<number, number>();
      for (let i = 0; i < 100; i++) {
        const entry = pool.pickEntry();
        counts.set(entry.id, (counts.get(entry.id) || 0) + 1);
      }

      assert.strictEqual(counts.size, 2);
      assert.ok(
        counts.get(1)! > 20,
        `Channel 1 should receive picks, got ${counts.get(1)}`,
      );
      assert.ok(
        counts.get(2)! > 20,
        `Channel 2 should receive picks, got ${counts.get(2)}`,
      );

      pool.close();
    });

    it('distributes picks uniformly across channels with equal load', () => {
      const pool = new ChannelPool(
        'localhost:9010',
        grpc.credentials.createInsecure(),
        {},
        {minChannels: 3, maxChannels: 3, initialChannels: 3},
        createMockChannel,
      );

      const channels = pool.activeChannels();
      channels[0].touchActivity(1000);
      channels[1].touchActivity(1000);
      channels[2].touchActivity(1000);

      const pickedCounts = new Map<number, number>();
      for (let i = 0; i < 300; i++) {
        const entry = pool.pickEntry();
        pickedCounts.set(entry.id, (pickedCounts.get(entry.id) || 0) + 1);
      }

      // All 3 channels must have received traffic
      assert.strictEqual(pickedCounts.size, 3);
      for (const [id, count] of pickedCounts.entries()) {
        assert(
          count > 20,
          `Channel ${id} should receive a fair distribution of picks, got ${count}`,
        );
      }

      pool.close();
    });
  });

  describe('Affinity Resolution & Routing', () => {
    it('pins an unpinned handle and reuses it on subsequent calls', () => {
      const pool = new ChannelPool(
        'localhost:9010',
        grpc.credentials.createInsecure(),
        {},
        {minChannels: 2, maxChannels: 2, initialChannels: 2},
        createMockChannel,
      );

      const affinity = TransactionAffinity.newReadWrite();
      assert.strictEqual(affinity.pinnedEntryId(), null);

      const entry1 = pool.acquireEntry(affinity);
      const pinnedId = entry1.id;
      assert.strictEqual(affinity.pinnedEntryId(), pinnedId);
      assert.strictEqual(affinity.hasReadWriteGuard(), true);
      entry1.decrementInFlight();

      // Second acquire must return the exact same channel
      const entry2 = pool.acquireEntry(affinity);
      assert.strictEqual(entry2.id, pinnedId);
      entry2.decrementInFlight();

      // Resetting affinity unpins handle and allows new selection
      affinity.reset();
      assert.strictEqual(affinity.pinnedEntryId(), null);
      assert.strictEqual(affinity.hasReadWriteGuard(), false);

      pool.close();
    });

    it('hard stickiness preserves draining channel for Read/Write transactions', () => {
      const pool = new ChannelPool(
        'localhost:9010',
        grpc.credentials.createInsecure(),
        {},
        {minChannels: 2, maxChannels: 2, initialChannels: 2},
        createMockChannel,
      );

      const activeChannels = (pool as any).activeEntries as ChannelEntry[];
      const drainingChannels = (pool as any).drainingEntries as ChannelEntry[];

      // Move channel 2 to draining
      const drainingEntry = activeChannels.pop()!;
      drainingEntry.setState(ChannelState.DRAINING);
      drainingChannels.push(drainingEntry);

      assert.strictEqual(activeChannels.length, 1);
      assert.strictEqual(drainingChannels.length, 1);

      // Pin affinity to channel 2 (which is draining)
      const affinity = TransactionAffinity.newReadWrite();
      affinity.pinEntry(drainingEntry);

      const entry = pool.acquireEntry(affinity);
      assert.strictEqual(
        entry.id,
        drainingEntry.id,
        'Read/Write transaction must follow hard affinity even to a draining channel',
      );
      assert.strictEqual(affinity.hasReadWriteGuard(), true);
      entry.decrementInFlight();

      pool.close();
    });

    it('soft stickiness sheds draining channel and re-pins to active channel for Read-Only', () => {
      const pool = new ChannelPool(
        'localhost:9010',
        grpc.credentials.createInsecure(),
        {},
        {minChannels: 2, maxChannels: 2, initialChannels: 2},
        createMockChannel,
      );

      const activeChannels = (pool as any).activeEntries as ChannelEntry[];
      const drainingChannels = (pool as any).drainingEntries as ChannelEntry[];

      // Move channel 2 to draining
      const drainingEntry = activeChannels.pop()!;
      drainingEntry.setState(ChannelState.DRAINING);
      drainingChannels.push(drainingEntry);

      const activeEntry = activeChannels[0];

      // Read-Only transaction was previously pinned to channel 2
      const readOnlyAffinity = TransactionAffinity.newReadOnly();
      readOnlyAffinity.pinEntry(drainingEntry);

      const entry = pool.acquireEntry(readOnlyAffinity);
      assert.strictEqual(
        entry.id,
        activeEntry.id,
        'Read-Only transaction must shed draining channel and re-pin to active channel',
      );
      assert.strictEqual(readOnlyAffinity.pinnedEntryId(), activeEntry.id);
      assert.strictEqual(readOnlyAffinity.hasReadWriteGuard(), false);
      entry.decrementInFlight();

      pool.close();
    });
  });

  describe('Slot Allocation & Sizing', () => {
    it('allocates lowest available 1-based slot', () => {
      const occupied = new Set<number>([1, 2, 3]);
      assert.strictEqual(allocateSlot(occupied, 4), 4);

      occupied.delete(2);
      assert.strictEqual(allocateSlot(occupied, 4), 2);
    });

    it('allocates overflow slot when 1..maxChannels are all occupied', () => {
      const occupied = new Set<number>([1, 2, 3, 4]);
      assert.strictEqual(allocateSlot(occupied, 4), 5);
    });

    it('calculates scale-up batch count correctly', () => {
      const config = normalizeChannelPoolOptions({
        minChannels: 4,
        maxChannels: 10,
        minRpcPerChannel: 15,
        maxRpcPerChannel: 25,
        maxScaleUpPercent: 30,
      });

      // Target RPC = floor((15 + 25) / 2) = 20
      assert.strictEqual(calculateTargetRpcPerChannel(config), 20);

      // No scale-up needed when load can be absorbed: desired = ceil(50 / 20) = 3 <= 4
      assert.strictEqual(calculateScaleUpCount(4, 50, config), 0);

      // Load = 100, current = 4: desired = ceil(100 / 20) = 5.
      // maxToAddByPercent = max(2, ceil(4 * 0.3)) = 2.
      // channelsToAdd = min(5 - 4, 2, 10 - 4) = 1.
      assert.strictEqual(calculateScaleUpCount(4, 100, config), 1);

      // Load = 250, current = 4: desired = ceil(250 / 20) = 13.
      // maxToAddByPercent = max(2, ceil(4 * 0.3)) = 2.
      // channelsToAdd = min(13 - 4, 2, 10 - 4) = 2.
      assert.strictEqual(calculateScaleUpCount(4, 250, config), 2);

      // When already at maxChannels, returns 0
      assert.strictEqual(calculateScaleUpCount(10, 500, config), 0);
    });
  });

  describe('Scale-Down & Draining Sweeps', () => {
    it('evaluates scale-down debouncing and candidate selection', () => {
      const config = normalizeChannelPoolOptions({
        minChannels: 2,
        maxChannels: 4,
        minRpcPerChannel: 15,
        consecutiveLowLoadChecks: 3,
        maxRemoveChannels: 2,
      });

      const entry1 = new ChannelEntry(1, 1, createMockChannel(), 1000);
      const entry2 = new ChannelEntry(2, 2, createMockChannel(), 2000);
      const entry3 = new ChannelEntry(3, 3, createMockChannel(), 3000);
      const active = [entry1, entry2, entry3];

      // Average load = 0 < 15, run 1 of 3
      const result1 = evaluateScaleDown(active, config, 0);
      assert.strictEqual(result1.candidatesToRemove.length, 0);
      assert.strictEqual(result1.newLowLoadChecks, 1);

      // Run 2 of 3
      const result2 = evaluateScaleDown(
        active,
        config,
        result1.newLowLoadChecks,
      );
      assert.strictEqual(result2.candidatesToRemove.length, 0);
      assert.strictEqual(result2.newLowLoadChecks, 2);

      // Load recovery resets debounce counter
      entry1.incrementInFlight();
      entry1.incrementInFlight();
      entry1.incrementInFlight();
      // Total in flight = 60 across 3 channels => avg 20 >= 15
      for (let i = 0; i < 57; i++) {
        entry1.incrementInFlight();
      }
      const recoveryResult = evaluateScaleDown(
        active,
        config,
        result2.newLowLoadChecks,
      );
      assert.strictEqual(recoveryResult.candidatesToRemove.length, 0);
      assert.strictEqual(recoveryResult.newLowLoadChecks, 0);

      // Reset load to 0
      while (entry1.inFlight() > 0) {
        entry1.decrementInFlight();
      }

      // Run 3 of 3: Debounce satisfied, candidates selected
      const result3 = evaluateScaleDown(active, config, 2);
      assert.strictEqual(result3.newLowLoadChecks, 0);
      assert.strictEqual(result3.candidatesToRemove.length, 1);
      // Newest channel (entry3 created at 3000) selected for removal
      assert.strictEqual(result3.candidatesToRemove[0].id, 3);
    });

    it('sweeps draining channels according to in-flight and idle criteria', () => {
      const entryInFlight = new ChannelEntry(1, 1, createMockChannel(), 1000);
      entryInFlight.incrementInFlight();

      const entryIdleNoRw = new ChannelEntry(2, 2, createMockChannel(), 1000);

      const entryActiveRwRecent = new ChannelEntry(
        3,
        3,
        createMockChannel(),
        1000,
      );
      entryActiveRwRecent.incrementActiveReadWrite();
      entryActiveRwRecent.setLastActivityForTesting(19000); // 1 second ago relative to 20000

      const entryActiveRwAbandoned = new ChannelEntry(
        4,
        4,
        createMockChannel(),
        1000,
      );
      entryActiveRwAbandoned.incrementActiveReadWrite();
      entryActiveRwAbandoned.setLastActivityForTesting(0); // 20 seconds ago relative to 20000

      const draining = [
        entryInFlight,
        entryIdleNoRw,
        entryActiveRwRecent,
        entryActiveRwAbandoned,
      ];

      const sweepResult = sweepDrainingChannels(draining, 5000, 20000);

      // Entry 1 (in-flight) and Entry 3 (active R/W recent) must be retained
      assert.strictEqual(sweepResult.retained.length, 2);
      assert.strictEqual(sweepResult.retained[0].id, 1);
      assert.strictEqual(sweepResult.retained[1].id, 3);

      // Entry 2 (0 load, 0 R/W) and Entry 4 (abandoned R/W > 15s) must be closed
      assert.strictEqual(sweepResult.closed.length, 2);
      assert.strictEqual(sweepResult.closed[0].id, 2);
      assert.strictEqual(sweepResult.closed[1].id, 4);
      assert.strictEqual(entryIdleNoRw.isClosed(), true);
      assert.strictEqual(entryActiveRwAbandoned.isClosed(), true);
    });

    it('always retains a draining channel while in-flight RPCs are active', () => {
      const entryInFlight = new ChannelEntry(1, 1, createMockChannel(), 0);
      entryInFlight.incrementInFlight();
      entryInFlight.setLastActivityForTesting(0);

      // Even after 1 hour of zero other activity, channel with inFlight RPCs must NOT be force-closed
      const sweepResult = sweepDrainingChannels([entryInFlight], 5000, 3600000);
      assert.strictEqual(sweepResult.retained.length, 1);
      assert.strictEqual(sweepResult.closed.length, 0);
      assert.strictEqual(entryInFlight.isClosed(), false);
    });

    it('immediately closes a draining channel with 0 in-flight and 0 active RW without waiting for drainIdleGraceMs', () => {
      const entryIdle = new ChannelEntry(1, 1, createMockChannel(), 1000);
      entryIdle.setLastActivityForTesting(1000);

      // elapsed is 0ms, well below drainIdleGraceMs (5000ms)
      const sweepResult = sweepDrainingChannels([entryIdle], 5000, 1000);
      assert.strictEqual(sweepResult.closed.length, 1);
      assert.strictEqual(sweepResult.retained.length, 0);
      assert.strictEqual(entryIdle.isClosed(), true);
    });
  });

  describe('Scale-Up Priming & Dialing', () => {
    it('executes priming and publishes primed channels to the pool', async () => {
      let primedSessionName: string | undefined;
      const customPrimeExecutor = async (
        _channel: grpc.Channel,
        sessionName: string,
      ) => {
        primedSessionName = sessionName;
      };

      const pool = new ChannelPool(
        'localhost:9010',
        grpc.credentials.createInsecure(),
        {},
        {
          minChannels: 2,
          maxChannels: 4,
          initialChannels: 2,
          minRpcPerChannel: 5,
          maxRpcPerChannel: 10,
          scaleUpCooldownMs: 0,
        },
        createMockChannel,
        customPrimeExecutor,
      );

      pool.setPrimeSession(
        'projects/p/instances/i/databases/d/sessions/mux-123',
      );
      assert.strictEqual(pool.hasPrimeSession(), true);
      assert.strictEqual(pool.activeChannelCount(), 2);

      // Simulate high in-flight load triggering scale-up
      const active = pool.activeChannels();
      for (let i = 0; i < 30; i++) {
        active[0].incrementInFlight();
      }

      await pool.triggerScaleUp();

      assert.strictEqual(
        primedSessionName,
        'projects/p/instances/i/databases/d/sessions/mux-123',
        'Priming executor must be invoked with the registered session name',
      );
      assert(
        pool.activeChannelCount() > 2,
        'Pool should have scaled up with newly primed channels',
      );

      pool.close();
    });

    it('configures distinct client_channel.id and use_local_subchannel_pool to prevent subchannel collapsing', async () => {
      let capturedOptions: any;
      const customFactory = (target: string, creds: any, options: any) => {
        capturedOptions = options;
        return createMockChannel(target);
      };

      await dialAndPrimeChannel(
        'localhost:9010',
        grpc.credentials.createInsecure(),
        {customOpt: 'val'},
        undefined,
        5000,
        customFactory,
      );

      assert.strictEqual(capturedOptions['grpc.use_local_subchannel_pool'], 1);
      assert.ok(capturedOptions['grpc.client_channel.id'] !== undefined);
      assert.strictEqual(capturedOptions.customOpt, 'val');
    });

    it('executes SELECT 1 with resource-prefix metadata and serialized request', async () => {
      const mockChannel = createMockChannel();
      let capturedMethod: string | undefined;
      let capturedMetadata: grpc.Metadata | undefined;
      let capturedSerialize: any;
      let capturedDeserialize: any;
      let capturedRequest: any;

      (
        sandbox.stub(grpc.Client.prototype, 'makeUnaryRequest') as any
      ).callsFake(
        (
          method: any,
          serialize: any,
          deserialize: any,
          argument: any,
          metadata: any,
          _options: any,
          callback: any,
        ) => {
          capturedMethod = method;
          capturedSerialize = serialize;
          capturedDeserialize = deserialize;
          capturedRequest = argument;
          capturedMetadata = metadata;
          callback(null, {});
          return {} as any;
        },
      );

      const sessionName =
        'projects/test-project/instances/test-instance/databases/test-database/sessions/test-session-123';
      await executeSelectOne(
        'localhost:9010',
        grpc.credentials.createInsecure(),
        {},
        mockChannel,
        sessionName,
        5000,
      );

      assert.strictEqual(
        capturedMethod,
        '/google.spanner.v1.Spanner/ExecuteSql',
      );
      assert.strictEqual(capturedRequest.session, sessionName);
      assert.strictEqual(capturedRequest.sql, 'SELECT 1');
      assert.ok(capturedMetadata);
      assert.strictEqual(
        capturedMetadata.get('google-cloud-resource-prefix')[0],
        'projects/test-project/instances/test-instance/databases/test-database',
      );

      // Verify protobuf serialization and deserialization
      const serialized = capturedSerialize(capturedRequest);
      assert.ok(Buffer.isBuffer(serialized));
      const deserialized = capturedDeserialize(Buffer.from(''));
      assert.ok(deserialized !== undefined);
    });

    it('handles executeSelectOne RPC error rejection', async () => {
      const mockChannel = createMockChannel();
      const rpcError: any = new Error('Deadline exceeded');
      rpcError.code = grpc.status.DEADLINE_EXCEEDED;

      (
        sandbox.stub(grpc.Client.prototype, 'makeUnaryRequest') as any
      ).callsFake(
        (
          _method: any,
          _serialize: any,
          _deserialize: any,
          _argument: any,
          _metadata: any,
          _options: any,
          callback: any,
        ) => {
          callback(rpcError);
          return {} as any;
        },
      );

      await assert.rejects(
        () =>
          executeSelectOne(
            'localhost:9010',
            grpc.credentials.createInsecure(),
            {},
            mockChannel,
            'projects/p/instances/i/databases/d/sessions/s',
            5000,
          ),
        /Deadline exceeded/,
      );
    });

    it('handles synchronous exception in executeSelectOne', async () => {
      const mockChannel = createMockChannel();
      (sandbox.stub(grpc.Client.prototype, 'makeUnaryRequest') as any).throws(
        new Error('Failed to create gRPC Client'),
      );

      await assert.rejects(
        () =>
          executeSelectOne(
            'localhost:9010',
            grpc.credentials.createInsecure(),
            {},
            mockChannel,
            'projects/p/instances/i/databases/d/sessions/s',
            5000,
          ),
        /Failed to create gRPC Client/,
      );
    });

    it('returns channel immediately when primeSession is undefined', async () => {
      let factoryCalled = false;
      const customFactory = () => {
        factoryCalled = true;
        return createMockChannel();
      };
      let primeExecutorCalled = false;
      const customExecutor = async () => {
        primeExecutorCalled = true;
      };

      const channel = await dialAndPrimeChannel(
        'localhost:9010',
        grpc.credentials.createInsecure(),
        {},
        undefined,
        5000,
        customFactory,
        customExecutor,
      );

      assert.strictEqual(factoryCalled, true);
      assert.strictEqual(primeExecutorCalled, false);
      assert.ok(channel);
    });

    it('isolates failure: closes broken channel and rethrows when priming fails', async () => {
      let channelClosed = false;
      const mockChannel = createMockChannel();
      mockChannel.close = () => {
        channelClosed = true;
      };

      const failingExecutor = async () => {
        throw new Error('Priming failed');
      };

      await assert.rejects(
        () =>
          dialAndPrimeChannel(
            'localhost:9010',
            grpc.credentials.createInsecure(),
            {},
            'projects/p/instances/i/databases/d/sessions/s',
            5000,
            () => mockChannel,
            failingExecutor,
          ),
        /Priming failed/,
      );

      assert.strictEqual(
        channelClosed,
        true,
        'Channel must be closed when priming fails',
      );
    });

    it('handles partial scale-up priming failure gracefully without adding failed channels', async () => {
      let primeAttempt = 0;
      const closedChannels: grpc.Channel[] = [];
      const createdChannels: grpc.Channel[] = [];

      const mockFactory = () => {
        const channel = createMockChannel();
        channel.close = () => {
          closedChannels.push(channel);
        };
        createdChannels.push(channel);
        return channel;
      };

      const flakyPrimeExecutor = async (_channel: grpc.Channel) => {
        primeAttempt++;
        if (primeAttempt === 1) {
          throw new Error('Transient priming error on first channel');
        }
      };

      const pool = new ChannelPool(
        'localhost:9010',
        grpc.credentials.createInsecure(),
        {},
        {
          minChannels: 2,
          maxChannels: 6,
          initialChannels: 2,
          minRpcPerChannel: 5,
          maxRpcPerChannel: 10,
          scaleUpCooldownMs: 0,
        },
        mockFactory,
        flakyPrimeExecutor,
      );

      pool.setPrimeSession('projects/p/instances/i/databases/d/sessions/s');
      assert.strictEqual(pool.activeChannelCount(), 2);

      // Trigger scale-up of 2 channels
      for (const entry of pool.activeChannels()) {
        for (let i = 0; i < 30; i++) {
          entry.incrementInFlight();
        }
      }

      await pool.triggerScaleUp();

      // Only 1 channel succeeded and was added; 1 failed and was closed
      assert.strictEqual(pool.activeChannelCount(), 3);
      assert.strictEqual(closedChannels.length, 1);

      pool.close();
    });

    it('discards dialed channels if pool is closed while scaling up', async () => {
      const resolves: Array<() => void> = [];
      const closedChannels: grpc.Channel[] = [];

      const slowPrimeExecutor = async (channel: grpc.Channel) => {
        const originalClose = channel.close;
        channel.close = () => {
          closedChannels.push(channel);
          originalClose();
        };
        await new Promise<void>(resolve => {
          resolves.push(resolve);
        });
      };

      const pool = new ChannelPool(
        'localhost:9010',
        grpc.credentials.createInsecure(),
        {},
        {
          minChannels: 2,
          maxChannels: 4,
          initialChannels: 2,
          minRpcPerChannel: 5,
          maxRpcPerChannel: 10,
          scaleUpCooldownMs: 0,
        },
        createMockChannel,
        slowPrimeExecutor,
      );

      pool.setPrimeSession('projects/p/instances/i/databases/d/sessions/s');

      for (const entry of pool.activeChannels()) {
        for (let i = 0; i < 30; i++) {
          entry.incrementInFlight();
        }
      }

      const scaleUpPromise = pool.triggerScaleUp();

      // Pool closed while dial/prime in-flight
      pool.close();
      for (const resolve of resolves) {
        resolve();
      }
      await scaleUpPromise;

      assert.strictEqual(pool.activeChannelCount(), 0);
      assert(
        closedChannels.length > 0,
        'In-flight dialed channels should have been closed',
      );
    });
  });

  describe('CallInvocationTransformer', () => {
    it('leases channel, updates request ID, and disposes lease on completion', () => {
      const pool = new ChannelPool(
        'localhost:9010',
        grpc.credentials.createInsecure(),
        {},
        {minChannels: 2, maxChannels: 2, initialChannels: 2},
        createMockChannel,
      );

      const transformer = pool.createCallInvocationTransformer();
      const metadata = new grpc.Metadata();
      metadata.set(X_GOOG_SPANNER_REQUEST_ID_HEADER, '1.12345678.1.99.1.1');

      const affinity = TransactionAffinity.newReadWrite();

      const callProperties: any = {
        channel: pool,
        metadata,
        callOptions: {affinity},
      };

      const transformed = transformer(callProperties);
      assert.notStrictEqual(transformed.channel, pool);
      assert(transformed.callOptions.interceptors.length > 0);

      // Verify request ID is preserved without per-RPC mutation
      const reqId = metadata.get(X_GOOG_SPANNER_REQUEST_ID_HEADER)[0] as string;
      assert.strictEqual(reqId, '1.12345678.1.99.1.1');

      // Channels now have 1 in-flight RPC
      assert.strictEqual(pool.totalInFlightRpcs(), 1);

      // Execute installed interceptor to simulate gRPC status return
      const interceptor = transformed.callOptions.interceptors[0];
      let capturedListener: any;
      const fakeNextCall = () => ({
        start: (_metadata: any, listener: any) => {
          capturedListener = listener;
        },
        sendMessage: () => {},
        halfClose: () => {},
        cancel: () => {},
      });

      const interceptingCall = interceptor({}, fakeNextCall);
      let receivedStatus: any;
      interceptingCall.start(metadata, {
        onReceiveMetadata: () => {},
        onReceiveMessage: () => {},
        onReceiveStatus: (status: any) => {
          receivedStatus = status;
        },
      });

      // Simulate status return from lower layer
      assert.ok(capturedListener);
      capturedListener.onReceiveStatus({code: 0}, (status: any) => {
        assert.strictEqual(status.code, 0);
      });
      assert.strictEqual(receivedStatus.code, 0);

      pool.close();
    });

    it('propagates metadata, messages, halfClose, and cancel through interceptor', done => {
      const pool = new ChannelPool(
        'localhost:9010',
        grpc.credentials.createInsecure(),
        {},
        {minChannels: 2, maxChannels: 2, initialChannels: 2},
        createMockChannel,
      );

      const transformer = pool.createCallInvocationTransformer();
      const callProperties: any = {
        channel: pool,
        metadata: new grpc.Metadata(),
        callOptions: {},
      };

      const transformed = transformer(callProperties);
      const interceptor = transformed.callOptions.interceptors[0];

      let receivedMetadata = false;
      let receivedMessage = false;
      let sentMessage = false;
      let sentHalfClose = false;
      let sentCancel = false;

      let capturedListener: any;
      const fakeNextCall = () => ({
        start: (_metadata: any, listener: any) => {
          capturedListener = listener;
        },
        sendMessageWithContext: (_context: any, message: any) => {
          if (message === 'test-payload') {
            sentMessage = true;
          }
        },
        sendMessage: (message: any) => {
          if (message === 'test-payload') {
            sentMessage = true;
          }
        },
        halfClose: () => {
          sentHalfClose = true;
        },
        cancelWithStatus: () => {
          sentCancel = true;
        },
        cancel: () => {
          sentCancel = true;
        },
      });

      const interceptingCall = interceptor({}, fakeNextCall);
      interceptingCall.start(new grpc.Metadata(), {
        onReceiveMetadata: (_metadata: any) => {
          receivedMetadata = true;
        },
        onReceiveMessage: (_message: any) => {
          receivedMessage = true;
        },
        onReceiveStatus: (_status: any) => {},
      });

      // Pass message and halfClose from client side
      interceptingCall.sendMessage('test-payload');
      interceptingCall.halfClose();

      // Pass metadata and message from server side
      capturedListener.onReceiveMetadata(new grpc.Metadata(), () => {
        receivedMetadata = true;
      });
      capturedListener.onReceiveMessage('server-payload', () => {
        receivedMessage = true;
      });

      assert.strictEqual(sentMessage, true);
      assert.strictEqual(sentHalfClose, true);
      assert.strictEqual(receivedMetadata, true);
      assert.strictEqual(receivedMessage, true);

      // Calling cancel should release the lease
      assert.strictEqual(pool.totalInFlightRpcs(), 1);
      interceptingCall.cancelWithStatus(
        grpc.status.CANCELLED,
        'Cancelled by client',
      );
      assert.strictEqual(sentCancel, true);
      assert.strictEqual(pool.totalInFlightRpcs(), 0);

      pool.close();
      done();
    });

    it('releases lease when start() throws synchronously', () => {
      const pool = new ChannelPool(
        'localhost:9010',
        grpc.credentials.createInsecure(),
        {},
        {minChannels: 2, maxChannels: 2, initialChannels: 2},
        createMockChannel,
      );

      const transformer = pool.createCallInvocationTransformer();
      const transformed = transformer({
        channel: pool,
        metadata: new grpc.Metadata(),
        callOptions: {},
      });

      const interceptor = transformed.callOptions.interceptors[0];
      const fakeNextCall = () => ({
        start: () => {
          throw new Error('Immediate start failure');
        },
      });

      const interceptingCall = interceptor({}, fakeNextCall);
      assert.strictEqual(pool.totalInFlightRpcs(), 1);

      assert.throws(
        () => interceptingCall.start(new grpc.Metadata(), {}),
        /Immediate start failure/,
      );

      // Lease should be released
      assert.strictEqual(pool.totalInFlightRpcs(), 0);

      pool.close();
    });

    it('releases lease when InterceptingCall construction throws', () => {
      const pool = new ChannelPool(
        'localhost:9010',
        grpc.credentials.createInsecure(),
        {},
        {minChannels: 2, maxChannels: 2, initialChannels: 2},
        createMockChannel,
      );

      const transformer = pool.createCallInvocationTransformer();
      const transformed = transformer({
        channel: pool,
        metadata: new grpc.Metadata(),
        callOptions: {},
      });

      const interceptor = transformed.callOptions.interceptors[0];
      const fakeNextCall = () => {
        throw new Error('NextCall factory failure');
      };

      assert.strictEqual(pool.totalInFlightRpcs(), 1);

      assert.throws(
        () => interceptor({}, fakeNextCall),
        /NextCall factory failure/,
      );

      assert.strictEqual(pool.totalInFlightRpcs(), 0);

      pool.close();
    });

    it('does not mutate caller callOptions object in place', () => {
      const pool = new ChannelPool(
        'localhost:9010',
        grpc.credentials.createInsecure(),
        {},
        {minChannels: 2, maxChannels: 2, initialChannels: 2},
        createMockChannel,
      );

      const transformer = pool.createCallInvocationTransformer();
      const originalOptions: any = {timeout: 5000};
      const callProperties: any = {
        channel: pool,
        metadata: new grpc.Metadata(),
        callOptions: originalOptions,
      };

      const transformed = transformer(callProperties);
      assert.notStrictEqual(transformed.callOptions, originalOptions);
      assert.strictEqual(originalOptions.interceptors, undefined);
      assert(transformed.callOptions.interceptors.length > 0);

      pool.close();
    });
  });

  describe('channelFactoryOverride & ChannelPoolHolder', () => {
    it('creates a new ChannelPool when no holder is present', () => {
      const channel = channelFactoryOverride(
        'localhost:9010',
        grpc.credentials.createInsecure(),
        {},
      );
      assert(channel instanceof ChannelPool);
      assert.strictEqual(
        (channel as ChannelPool).getTarget(),
        'localhost:9010',
      );
      (channel as ChannelPool).close();
    });

    it('creates, caches, and returns pool in ChannelPoolHolder for single and multiple targets', () => {
      const holder: ChannelPoolHolder = {};
      const optionsWithHolder = {
        'grpc.spanner_channel_pool_holder': holder,
      };

      const pool1 = channelFactoryOverride(
        'spanner.googleapis.com',
        grpc.credentials.createInsecure(),
        optionsWithHolder,
      ) as unknown as ChannelPool;

      assert.strictEqual(holder.pool, pool1);
      assert.ok(holder.pools);
      assert.strictEqual(holder.pools.get('spanner.googleapis.com'), pool1);

      // Subsequent call with identical address returns cached pool
      const pool1Cached = channelFactoryOverride(
        'spanner.googleapis.com',
        grpc.credentials.createInsecure(),
        optionsWithHolder,
      ) as unknown as ChannelPool;
      assert.strictEqual(pool1Cached, pool1);

      // Call with different target address creates second pool
      const pool2 = channelFactoryOverride(
        'regional-spanner.googleapis.com',
        grpc.credentials.createInsecure(),
        optionsWithHolder,
      ) as unknown as ChannelPool;

      assert.notStrictEqual(pool2, pool1);
      assert.strictEqual(holder.pools.size, 2);
      assert.strictEqual(
        holder.pools.get('regional-spanner.googleapis.com'),
        pool2,
      );

      // Clean up
      pool1.close();
      pool2.close();
    });

    it('migrates legacy single pool holder to pools map', () => {
      const existingPool = new ChannelPool(
        'existing.spanner.googleapis.com',
        grpc.credentials.createInsecure(),
        {},
      );
      const holder: ChannelPoolHolder = {
        pool: existingPool,
      };
      const optionsWithHolder = {
        'grpc.spanner_channel_pool_holder': holder,
      };

      const result = channelFactoryOverride(
        'existing.spanner.googleapis.com',
        grpc.credentials.createInsecure(),
        optionsWithHolder,
      );
      assert.strictEqual(result, existingPool as unknown as grpc.Channel);
      assert.ok(holder.pools);
      assert.strictEqual(
        holder.pools.get('existing.spanner.googleapis.com'),
        existingPool,
      );

      existingPool.close();
    });
  });

  describe('ChannelPool Instance Methods & Delegators', () => {
    it('provides getTarget and session management methods', () => {
      const pool = new ChannelPool(
        'spanner.googleapis.com:443',
        grpc.credentials.createInsecure(),
        {},
        {minChannels: 2, maxChannels: 2, initialChannels: 2},
        createMockChannel,
      );

      assert.strictEqual(pool.getTarget(), 'spanner.googleapis.com:443');
      assert.strictEqual(pool.hasPrimeSession(), false);

      pool.setPrimeSession('projects/p/instances/i/databases/d/sessions/s1');
      assert.strictEqual(pool.hasPrimeSession(), true);

      pool.clearPrimeSession();
      assert.strictEqual(pool.hasPrimeSession(), false);

      pool.close();
    });

    it('delegates getConnectivityState properly', () => {
      const readyChannel = createMockChannel();
      const pool = new ChannelPool(
        'localhost:9010',
        grpc.credentials.createInsecure(),
        {},
        {minChannels: 2, maxChannels: 2, initialChannels: 2},
        () => readyChannel,
      );

      assert.strictEqual(
        pool.getConnectivityState(false),
        (grpc.connectivityState as any).READY,
      );

      pool.close();
      assert.strictEqual(
        pool.getConnectivityState(false),
        (grpc.connectivityState as any).SHUTDOWN,
      );
    });

    it('delegates watchConnectivityState to active channel or reports error if empty', done => {
      const pool = new ChannelPool(
        'localhost:9010',
        grpc.credentials.createInsecure(),
        {},
        {minChannels: 2, maxChannels: 2, initialChannels: 2},
        createMockChannel,
      );

      pool.watchConnectivityState(
        (grpc.connectivityState as any).READY,
        Date.now() + 1000,
        error => {
          assert.ifError(error);

          pool.close();
          // After close, pool has 0 active channels
          pool.watchConnectivityState(
            (grpc.connectivityState as any).SHUTDOWN,
            Date.now() + 1000,
            emptyPoolError => {
              assert.ok(emptyPoolError);
              assert.match(emptyPoolError!.message, /has no active channels/);
              done();
            },
          );
        },
      );
    });

    it('delegates getChannelzRef or returns null if empty', () => {
      const mockChannel = createMockChannel();
      const pool = new ChannelPool(
        'localhost:9010',
        grpc.credentials.createInsecure(),
        {},
        {minChannels: 2, maxChannels: 2, initialChannels: 2},
        () => mockChannel,
      );

      assert.deepStrictEqual(pool.getChannelzRef(), {id: 1});

      pool.close();
      assert.strictEqual(pool.getChannelzRef(), null);
    });

    it('delegates createCall to leased channel', () => {
      let createCallInvoked = false;
      const mockChannel = createMockChannel();
      mockChannel.createCall = (
        method: string,
        _deadline: any,
        host: string | null | undefined,
        _parentCall: any,
        _propagateFlags: number | null | undefined,
      ) => {
        createCallInvoked = true;
        assert.strictEqual(method, '/test.Method');
        assert.strictEqual(host, 'example.com');
        return {} as any;
      };

      const pool = new ChannelPool(
        'localhost:9010',
        grpc.credentials.createInsecure(),
        {},
        {minChannels: 2, maxChannels: 2, initialChannels: 2},
        () => mockChannel,
      );

      pool.createCall('/test.Method', 5000, 'example.com', null, 0);
      assert.strictEqual(createCallInvoked, true);

      pool.close();
    });

    it('executes scaleDownEvaluation instance method and manages draining channels', () => {
      const pool = new ChannelPool(
        'localhost:9010',
        grpc.credentials.createInsecure(),
        {},
        {
          minChannels: 2,
          maxChannels: 4,
          initialChannels: 3,
          minRpcPerChannel: 15,
          consecutiveLowLoadChecks: 1,
          drainIdleGraceMs: 1,
        },
        createMockChannel,
      );

      assert.strictEqual(pool.activeChannelCount(), 3);
      assert.strictEqual(pool.drainingChannelCount(), 0);
      assert.strictEqual(pool.drainingChannels().length, 0);

      // Make candidate eligible for sweeping by setting old lastActivity
      for (const entry of pool.activeChannels()) {
        entry.setLastActivityForTesting(Date.now() - 100);
      }

      // Low load for 1 check triggers downscale of 1 channel
      pool.scaleDownEvaluation();

      // Channel transitions to draining and sweeps immediately because lastActivity was in past
      assert.strictEqual(pool.activeChannelCount(), 2);

      // Safe to call after close
      pool.close();
      pool.scaleDownEvaluation();
      assert.strictEqual(pool.activeChannelCount(), 0);
    });

    it('is safe to close multiple times (idempotent)', () => {
      const pool = new ChannelPool(
        'localhost:9010',
        grpc.credentials.createInsecure(),
        {},
        {minChannels: 2, maxChannels: 2, initialChannels: 2},
        createMockChannel,
      );

      assert.strictEqual(pool.activeChannelCount(), 2);
      pool.close();
      assert.strictEqual(pool.activeChannelCount(), 0);
      pool.close();
      assert.strictEqual(pool.activeChannelCount(), 0);
    });

    it('throws error when pickEntry or createCall is invoked on empty pool', () => {
      const pool = new ChannelPool(
        'localhost:9010',
        grpc.credentials.createInsecure(),
        {},
        {minChannels: 1, maxChannels: 2, initialChannels: 1},
        createMockChannel,
      );

      // Closing the pool empties activeEntries
      pool.close();

      assert.throws(
        () => pool.pickEntry(),
        /ChannelPool has no active channels/,
      );
      assert.throws(
        () => pool.createCall('/method', 1000, null, null, 0),
        /ChannelPool has no active channels/,
      );
    });

    it('does not leak in-flight count when createCall is invoked', () => {
      const pool = new ChannelPool(
        'localhost:9010',
        grpc.credentials.createInsecure(),
        {},
        {minChannels: 2, maxChannels: 2, initialChannels: 2},
        createMockChannel,
      );

      assert.strictEqual(pool.totalInFlightRpcs(), 0);
      pool.createCall('/test', 1000, null, null, 0);
      assert.strictEqual(
        pool.totalInFlightRpcs(),
        0,
        'createCall should not leak in-flight RPCs',
      );

      pool.close();
    });

    it('triggers scale-up on pinned affinity reuse when in-flight load exceeds threshold', async () => {
      let scaleUpTriggered = false;
      const pool = new ChannelPool(
        'localhost:9010',
        grpc.credentials.createInsecure(),
        {},
        {
          minChannels: 2,
          maxChannels: 4,
          initialChannels: 2,
          minRpcPerChannel: 5,
          maxRpcPerChannel: 10,
          scaleUpCooldownMs: 0,
        },
        createMockChannel,
      );

      const affinity = TransactionAffinity.newReadWrite();
      // First acquire pins to a channel
      const firstEntry = pool.acquireEntry(affinity);
      const pinnedId = affinity.pinnedEntryId()!;
      assert.ok(pinnedId > 0);
      firstEntry.decrementInFlight();

      // Find pinned entry and push load above maxRpcPerChannel
      const pinnedEntry = pool
        .activeChannels()
        .find(entry => entry.id === pinnedId)!;
      for (let i = 0; i < 15; i++) {
        pinnedEntry.incrementInFlight();
      }

      sandbox.stub(pool, 'triggerScaleUp').callsFake(async () => {
        scaleUpTriggered = true;
      });

      // Second acquire uses fast-path with pinned affinity and must trigger scale-up
      const secondEntry = pool.acquireEntry(affinity);
      assert.strictEqual(scaleUpTriggered, true);
      secondEntry.decrementInFlight();

      pool.close();
    });

    it('respects scale-up cooldown and in-progress guards', async () => {
      let dialCalls = 0;
      const customPrimeExecutor = async () => {
        dialCalls++;
      };

      const pool = new ChannelPool(
        'localhost:9010',
        grpc.credentials.createInsecure(),
        {},
        {
          minChannels: 2,
          maxChannels: 6,
          initialChannels: 2,
          minRpcPerChannel: 5,
          maxRpcPerChannel: 10,
          scaleUpCooldownMs: 60000, // Long cooldown
        },
        createMockChannel,
        customPrimeExecutor,
      );

      pool.setPrimeSession('projects/p/instances/i/databases/d/sessions/s');

      for (const entry of pool.activeChannels()) {
        for (let i = 0; i < 30; i++) {
          entry.incrementInFlight();
        }
      }

      // First scale-up succeeds
      await pool.triggerScaleUp();
      assert.strictEqual(dialCalls > 0, true);
      const firstDialCount = dialCalls;

      // Second scale-up immediately after is blocked by cooldown
      await pool.triggerScaleUp();
      assert.strictEqual(dialCalls, firstDialCount);

      pool.close();
    });

    it('returns early from triggerScaleUp when channelsToAdd is 0', async () => {
      const pool = new ChannelPool(
        'localhost:9010',
        grpc.credentials.createInsecure(),
        {},
        {
          minChannels: 2,
          maxChannels: 4,
          initialChannels: 2,
          minRpcPerChannel: 5,
          maxRpcPerChannel: 10,
        },
        createMockChannel,
      );

      // Load = 0, no channels need to be added
      await pool.triggerScaleUp();
      assert.strictEqual(pool.activeChannelCount(), 2);
      assert.ok((pool as any).lastScaleUpEvaluationTime > 0);

      // Immediate second call returns early due to 100ms debouncing
      let calculateScaleUpCountCalled = false;
      const originalTotalInFlight = pool.totalInFlightRpcs.bind(pool);
      sandbox.stub(pool, 'totalInFlightRpcs').callsFake(() => {
        calculateScaleUpCountCalled = true;
        return originalTotalInFlight();
      });
      await pool.triggerScaleUp();
      assert.strictEqual(calculateScaleUpCountCalled, false);

      pool.close();
    });

    it('invalidates dead primeSession when priming returns NOT_FOUND', async () => {
      const notFoundError: any = new Error(
        'Session not found: projects/p/instances/i/databases/d/sessions/dead',
      );
      notFoundError.code = grpc.status.NOT_FOUND;

      const failingPrimeExecutor = async () => {
        throw notFoundError;
      };

      const pool = new ChannelPool(
        'localhost:9010',
        grpc.credentials.createInsecure(),
        {},
        {
          minChannels: 2,
          maxChannels: 4,
          initialChannels: 2,
          minRpcPerChannel: 5,
          maxRpcPerChannel: 10,
          scaleUpCooldownMs: 0,
        },
        createMockChannel,
        failingPrimeExecutor,
      );

      pool.setPrimeSession('projects/p/instances/i/databases/d/sessions/dead');
      assert.strictEqual(pool.hasPrimeSession(), true);

      for (const entry of pool.activeChannels()) {
        for (let i = 0; i < 30; i++) {
          entry.incrementInFlight();
        }
      }

      await pool.triggerScaleUp();

      // Dead session should have been cleared
      assert.strictEqual(pool.hasPrimeSession(), false);

      pool.close();
    });

    it('invalidates dead primeSession when priming returns UNAUTHENTICATED', async () => {
      const unauthError = Object.assign(
        new Error(
          '16 UNAUTHENTICATED: Request had invalid authentication credentials',
        ),
        {code: (grpc.status as any).UNAUTHENTICATED},
      );

      const failingPrimeExecutor = async () => {
        throw unauthError;
      };

      const pool = new ChannelPool(
        'localhost:9010',
        grpc.credentials.createInsecure(),
        {},
        {
          minChannels: 2,
          maxChannels: 4,
          initialChannels: 2,
          minRpcPerChannel: 5,
          maxRpcPerChannel: 10,
          scaleUpCooldownMs: 0,
        },
        createMockChannel,
        failingPrimeExecutor,
      );

      pool.setPrimeSession(
        'projects/p/instances/i/databases/d/sessions/unauth',
      );
      assert.strictEqual(pool.hasPrimeSession(), true);

      for (const entry of pool.activeChannels()) {
        for (let i = 0; i < 30; i++) {
          entry.incrementInFlight();
        }
      }

      await pool.triggerScaleUp();

      // Dead session should have been cleared
      assert.strictEqual(pool.hasPrimeSession(), false);

      pool.close();
    });

    it('supports multiple prime sessions across databases and selective clearing', () => {
      const pool = new ChannelPool(
        'localhost:9010',
        grpc.credentials.createInsecure(),
        {},
        {minChannels: 2, maxChannels: 2, initialChannels: 2},
        createMockChannel,
      );

      const sessionDb1 = 'projects/p/instances/i/databases/db1/sessions/s1';
      const sessionDb2 = 'projects/p/instances/i/databases/db2/sessions/s2';

      pool.setPrimeSession(sessionDb1);
      pool.setPrimeSession(sessionDb2);
      assert.strictEqual(pool.hasPrimeSession(), true);

      // Clearing db1 preserves db2
      pool.clearPrimeSession('projects/p/instances/i/databases/db1');
      assert.strictEqual(pool.hasPrimeSession(), true);
      assert.strictEqual(pool.primeSession, sessionDb2);

      // Clearing db2 clears remaining
      pool.clearPrimeSession('projects/p/instances/i/databases/db2');
      assert.strictEqual(pool.hasPrimeSession(), false);
      assert.strictEqual(pool.primeSession, undefined);

      pool.close();
    });
  });

  describe('Call Invocation Transformer & Span Attribution', () => {
    it('preserves request ID and avoids active span mutation in callInvocationTransformer', () => {
      const pool = new ChannelPool(
        'localhost:9010',
        grpc.credentials.createInsecure(),
        {},
        {minChannels: 2, maxChannels: 2, initialChannels: 2},
        createMockChannel,
      );

      const transformer = pool.createCallInvocationTransformer();
      const metadata = new grpc.Metadata();
      metadata.set(X_GOOG_SPANNER_REQUEST_ID_HEADER, '1.12345678.1.99.1.1');

      let spanSetAttributeCalled = false;
      sandbox.stub(getActiveOrNoopSpan(), 'setAttribute').callsFake(() => {
        spanSetAttributeCalled = true;
        return getActiveOrNoopSpan();
      });

      transformer({
        channel: pool,
        metadata,
        callOptions: {},
      });

      assert.strictEqual(spanSetAttributeCalled, false);
      assert.strictEqual(
        metadata.get(X_GOOG_SPANNER_REQUEST_ID_HEADER)[0],
        '1.12345678.1.99.1.1',
      );

      pool.close();
    });

    it('injects interceptor provider when interceptor_providers is configured to prevent grpc-js collision', () => {
      const pool = new ChannelPool(
        'localhost:9010',
        grpc.credentials.createInsecure(),
        {},
        {minChannels: 2, maxChannels: 2, initialChannels: 2},
        createMockChannel,
      );

      const transformer = pool.createCallInvocationTransformer();
      const dummyProvider = () => (options: any, nextCall: any) =>
        nextCall(options);
      const callProps: any = {
        channel: pool,
        metadata: new grpc.Metadata(),
        callOptions: {
          interceptor_providers: [dummyProvider],
        },
      };

      const result = transformer(callProps);
      assert.strictEqual(result.callOptions.interceptor_providers.length, 2);
      assert.strictEqual(result.callOptions.interceptors, undefined);

      pool.close();
    });

    it('preserves client interceptors by avoiding callOptions interceptor injection when call is EventEmitter', () => {
      const pool = new ChannelPool(
        'localhost:9010',
        grpc.credentials.createInsecure(),
        {},
        {minChannels: 2, maxChannels: 2, initialChannels: 2},
        createMockChannel,
      );

      const transformer = pool.createCallInvocationTransformer();
      const mockCallEmitter = new (require('events').EventEmitter)();
      const initialCallOptions = {};
      const callProps: any = {
        channel: pool,
        metadata: new grpc.Metadata(),
        call: mockCallEmitter,
        callOptions: initialCallOptions,
      };

      const result = transformer(callProps);
      assert.strictEqual(result.callOptions.interceptors, undefined);
      assert.strictEqual(result.callOptions.interceptor_providers, undefined);
      assert.strictEqual(pool.totalInFlightRpcs(), 1);

      // Simulating status emission decrements in-flight
      mockCallEmitter.emit('status', {code: 0});
      assert.strictEqual(pool.totalInFlightRpcs(), 0);

      pool.close();
    });

    it('releases leased entry when call emits error or close without status', () => {
      const pool = new ChannelPool(
        'localhost:9010',
        grpc.credentials.createInsecure(),
        {},
        {minChannels: 2, maxChannels: 2, initialChannels: 2},
        createMockChannel,
      );

      const transformer = pool.createCallInvocationTransformer();
      const mockCallEmitter: any = new (require('events').EventEmitter)();
      mockCallEmitter.destroy = () => {};

      transformer({
        channel: pool,
        metadata: new grpc.Metadata(),
        call: mockCallEmitter,
        callOptions: {},
      });

      assert.strictEqual(pool.totalInFlightRpcs(), 1);

      mockCallEmitter.emit('error', new Error('stream reset'));
      assert.strictEqual(pool.totalInFlightRpcs(), 0);

      pool.close();
    });
  });

  describe('SpannerOptions channelPool alias & dynamic toggle', () => {
    it('accepts channelPool configuration option in Spanner constructor', () => {
      const spannerClient = new Spanner({
        projectId: 'test-project',
        servicePath: 'localhost',
        port: 9010,
        sslCreds: grpc.credentials.createInsecure(),
        channelPool: {
          minChannels: 3,
          maxChannels: 5,
        },
      });

      assert.ok(spannerClient);
      assert.strictEqual(
        (spannerClient as any).options['grpc.spanner_channel_pool_options']
          .minChannels,
        3,
      );
    });

    it('defaults to dynamic channel pool when no channel options are provided', () => {
      const spannerClient = new Spanner({
        projectId: 'test-project',
        servicePath: 'localhost',
        port: 9010,
        sslCreds: grpc.credentials.createInsecure(),
      });
      assert.ok(spannerClient);
      assert.strictEqual(
        (spannerClient as any).options['grpc.spanner_channel_pool_options'],
        undefined,
      );

      const override = (spannerClient as any).options[
        'grpc.channelFactoryOverride'
      ];
      const channel = override(
        'localhost:9010',
        grpc.credentials.createInsecure(),
        (spannerClient as any).options,
      );
      assert.ok(channel instanceof ChannelPool);
      assert.strictEqual(channel.isDynamic(), true);
      assert.strictEqual(channel.activeChannelCount(), 4);
      assert.strictEqual(channel.target, 'localhost:9010');
      channel.close();
    });

    it('disables dynamic pooling when enableDynamicChannelPool: false is passed', () => {
      const spannerClient = new Spanner({
        projectId: 'test-project',
        servicePath: 'localhost',
        port: 9010,
        sslCreds: grpc.credentials.createInsecure(),
        enableDynamicChannelPool: false,
      });
      const poolOptions = (spannerClient as any).options[
        'grpc.spanner_channel_pool_options'
      ];
      assert.ok(poolOptions);
      assert.strictEqual(poolOptions.minChannels, 4);
      assert.strictEqual(poolOptions.maxChannels, 4);
      assert.strictEqual(poolOptions.initialChannels, 4);

      const override = (spannerClient as any).options[
        'grpc.channelFactoryOverride'
      ];
      const channel = override(
        'localhost:9010',
        grpc.credentials.createInsecure(),
        (spannerClient as any).options,
      );
      assert.ok(channel instanceof ChannelPool);
      assert.strictEqual(channel.isDynamic(), false);
      channel.close();
    });

    it('disables dynamic pooling when channelPool: false is passed', () => {
      const spannerClient = new Spanner({
        projectId: 'test-project',
        servicePath: 'localhost',
        port: 9010,
        sslCreds: grpc.credentials.createInsecure(),
        channelPool: false,
      });
      const poolOptions = (spannerClient as any).options[
        'grpc.spanner_channel_pool_options'
      ];
      assert.ok(poolOptions);
      assert.strictEqual(poolOptions.minChannels, 1);
      assert.strictEqual(poolOptions.maxChannels, 1);
    });

    it('accepts numeric channelPool setting fixed static channel count', () => {
      const spannerClient = new Spanner({
        projectId: 'test-project',
        servicePath: 'localhost',
        port: 9010,
        sslCreds: grpc.credentials.createInsecure(),
        channelPool: 6,
      });
      const poolOptions = (spannerClient as any).options[
        'grpc.spanner_channel_pool_options'
      ];
      assert.ok(poolOptions);
      assert.strictEqual(poolOptions.minChannels, 6);
      assert.strictEqual(poolOptions.maxChannels, 6);
      assert.strictEqual(poolOptions.initialChannels, 6);
    });

    it('disables dynamic pooling via SPANNER_ENABLE_DYNAMIC_CHANNEL_POOL=false environment variable', () => {
      const previousEnv = process.env.SPANNER_ENABLE_DYNAMIC_CHANNEL_POOL;
      try {
        process.env.SPANNER_ENABLE_DYNAMIC_CHANNEL_POOL = 'false';
        assert.strictEqual(Spanner.isDynamicChannelPoolEnabled(), false);

        const spannerClient = new Spanner({
          projectId: 'test-project',
          servicePath: 'localhost',
          port: 9010,
          sslCreds: grpc.credentials.createInsecure(),
        });
        const poolOptions = (spannerClient as any).options[
          'grpc.spanner_channel_pool_options'
        ];
        assert.ok(poolOptions);
        assert.strictEqual(poolOptions.minChannels, 4);
        assert.strictEqual(poolOptions.maxChannels, 4);
      } finally {
        if (previousEnv !== undefined) {
          process.env.SPANNER_ENABLE_DYNAMIC_CHANNEL_POOL = previousEnv;
        } else {
          delete process.env.SPANNER_ENABLE_DYNAMIC_CHANNEL_POOL;
        }
      }
    });

    it('disables dynamic pooling via GOOGLE_CLOUD_SPANNER_ENABLE_DYNAMIC_CHANNEL_POOL=0', () => {
      const previousEnv =
        process.env.GOOGLE_CLOUD_SPANNER_ENABLE_DYNAMIC_CHANNEL_POOL;
      try {
        process.env.GOOGLE_CLOUD_SPANNER_ENABLE_DYNAMIC_CHANNEL_POOL = '0';
        assert.strictEqual(Spanner.isDynamicChannelPoolEnabled(), false);

        const spannerClient = new Spanner({
          projectId: 'test-project',
          servicePath: 'localhost',
          port: 9010,
          sslCreds: grpc.credentials.createInsecure(),
        });
        const poolOptions = (spannerClient as any).options[
          'grpc.spanner_channel_pool_options'
        ];
        assert.ok(poolOptions);
        assert.strictEqual(poolOptions.minChannels, 4);
        assert.strictEqual(poolOptions.maxChannels, 4);
      } finally {
        if (previousEnv !== undefined) {
          process.env.GOOGLE_CLOUD_SPANNER_ENABLE_DYNAMIC_CHANNEL_POOL =
            previousEnv;
        } else {
          delete process.env.GOOGLE_CLOUD_SPANNER_ENABLE_DYNAMIC_CHANNEL_POOL;
        }
      }
    });

    it('clamps custom channelPoolOptions to static when enableDynamicChannelPool: false', () => {
      const spannerClient = new Spanner({
        projectId: 'test-project',
        servicePath: 'localhost',
        port: 9010,
        sslCreds: grpc.credentials.createInsecure(),
        enableDynamicChannelPool: false,
        channelPoolOptions: {
          minChannels: 8,
          maxChannels: 16,
        },
      });
      const poolOptions = (spannerClient as any).options[
        'grpc.spanner_channel_pool_options'
      ];
      assert.ok(poolOptions);
      assert.strictEqual(poolOptions.minChannels, 8);
      assert.strictEqual(poolOptions.maxChannels, 8);
    });
  });

  describe('Additional Edge Cases & Branch Coverage', () => {
    it('is safe to call TransactionAffinity.release multiple times', () => {
      const affinity = TransactionAffinity.newReadWrite();
      const entry = new ChannelEntry(10, 1, createMockChannel());
      affinity.pinEntry(entry);
      affinity.release();
      assert.strictEqual(affinity.pinnedEntryId(), null);
      affinity.release();
      assert.strictEqual(affinity.pinnedEntryId(), null);
    });

    it('provides getState and activeReadWriteTransactionCount methods on ChannelEntry', () => {
      const entry = new ChannelEntry(1, 1, createMockChannel());
      assert.strictEqual(entry.getState(), ChannelState.ACTIVE);
      assert.strictEqual(entry.activeReadWriteTransactionCount(), 0);
      entry.incrementActiveReadWrite();
      assert.strictEqual(entry.activeReadWriteTransactionCount(), 1);
      entry.decrementActiveReadWrite();
      assert.strictEqual(entry.activeReadWriteTransactionCount(), 0);
    });

    it('handles physical channel close exception safely in ChannelEntry', () => {
      const mockChannel = createMockChannel();
      mockChannel.close = () => {
        throw new Error('Close socket failed');
      };
      const entry = new ChannelEntry(1, 1, mockChannel);
      entry.close();
      assert.strictEqual(entry.isClosed(), true);
    });

    it('skips scale-down when active channel count is at or below minChannels', () => {
      const config = normalizeChannelPoolOptions({
        minChannels: 3,
        maxChannels: 5,
        minRpcPerChannel: 15,
      });
      const entries = [
        new ChannelEntry(1, 1, createMockChannel()),
        new ChannelEntry(2, 2, createMockChannel()),
      ];
      const result = evaluateScaleDown(entries, config, 0);
      assert.strictEqual(result.candidatesToRemove.length, 0);
      assert.strictEqual(result.newLowLoadChecks, 0);
    });

    it('skips scale-down when desired channels exceeds or equals active entries', () => {
      const config = normalizeChannelPoolOptions({
        minChannels: 2,
        maxChannels: 5,
        minRpcPerChannel: 15,
        maxRpcPerChannel: 25,
        consecutiveLowLoadChecks: 1,
      });
      const entry1 = new ChannelEntry(1, 1, createMockChannel());
      const entry2 = new ChannelEntry(2, 2, createMockChannel());
      const entry3 = new ChannelEntry(3, 3, createMockChannel());
      for (let i = 0; i < 42; i++) {
        entry1.incrementInFlight();
      }
      const result = evaluateScaleDown([entry1, entry2, entry3], config, 0);
      assert.strictEqual(result.candidatesToRemove.length, 0);
      assert.strictEqual(result.newLowLoadChecks, 0);
    });

    it('breaks ties in scale-down candidates by active RW transactions and then creation time', () => {
      const config = normalizeChannelPoolOptions({
        minChannels: 1,
        maxChannels: 5,
        minRpcPerChannel: 15,
        consecutiveLowLoadChecks: 1,
        maxRemoveChannels: 1,
      });
      const entryWithRw = new ChannelEntry(1, 1, createMockChannel(), 1000);
      entryWithRw.incrementActiveReadWrite();

      const entryWithoutRw = new ChannelEntry(2, 2, createMockChannel(), 1000);

      // Channel with 0 active RW should be chosen over channel with active RW
      const result1 = evaluateScaleDown(
        [entryWithRw, entryWithoutRw],
        config,
        0,
      );
      assert.strictEqual(result1.candidatesToRemove.length, 1);
      assert.strictEqual(result1.candidatesToRemove[0].id, 2);

      // When both have 0 active RW, newer channel (higher createdAt) is chosen
      const olderEntry = new ChannelEntry(3, 3, createMockChannel(), 500);
      const newerEntry = new ChannelEntry(4, 4, createMockChannel(), 1500);
      const result2 = evaluateScaleDown([olderEntry, newerEntry], config, 0);
      assert.strictEqual(result2.candidatesToRemove.length, 1);
      assert.strictEqual(result2.candidatesToRemove[0].id, 4);
    });

    it('returns maxChannels when all slots are occupied in allocateSlot', () => {
      const occupied = new Set<number>();
      for (let i = 1; i <= MAX_SUPPORTED_CHANNELS; i++) {
        occupied.add(i);
      }
      const slot = allocateSlot(occupied, 4);
      assert.strictEqual(slot, 4);
    });

    it('returns null and closes channel if publishPrimedChannel is called at capacity ceiling', () => {
      const pool = new ChannelPool(
        'localhost:9010',
        grpc.credentials.createInsecure(),
        {},
        {
          minChannels: 2,
          maxChannels: 2,
          initialChannels: 2,
        },
        createMockChannel,
      );
      assert.strictEqual(pool.activeChannelCount(), 2);

      let closed = false;
      const extraChannel = createMockChannel();
      extraChannel.close = () => {
        closed = true;
      };

      const published = pool.publishPrimedChannel(extraChannel);
      assert.strictEqual(published, null);
      assert.strictEqual(closed, true);
      assert.strictEqual(pool.activeChannelCount(), 2);

      pool.close();
    });

    it('schedules scale-down monitor interval inside ROOT_CONTEXT', () => {
      const withSpy = sinon.spy(context, 'with');
      try {
        const pool = new ChannelPool(
          'localhost:9010',
          grpc.credentials.createInsecure(),
          {},
          {
            minChannels: 1,
            maxChannels: 4,
            scaleDownIntervalMs: 100000,
          },
          createMockChannel,
        );

        const rootContextCalls = withSpy
          .getCalls()
          .filter(call => call.args[0] === ROOT_CONTEXT);
        assert.ok(
          rootContextCalls.length >= 1,
          'expected setInterval to be scheduled inside ROOT_CONTEXT',
        );

        pool.close();
      } finally {
        withSpy.restore();
      }
    });

    it('delegates getConnectivityState returning first channel state when none is READY', () => {
      const pool = new ChannelPool(
        'localhost:9010',
        grpc.credentials.createInsecure(),
        {},
        {minChannels: 2, maxChannels: 2, initialChannels: 2},
        () => {
          const ch = createMockChannel();
          ch.getConnectivityState = () => (grpc.connectivityState as any).IDLE;
          return ch;
        },
      );
      const state = pool.getConnectivityState(false);
      assert.strictEqual(state, (grpc.connectivityState as any).IDLE);
      pool.close();
    });

    it('passes through callProperties when channel is not a ChannelPool instance', () => {
      const dummyCall: any = {
        channel: createMockChannel(),
        metadata: new grpc.Metadata(),
      };
      const result = callInvocationTransformer(dummyCall);
      assert.strictEqual(result, dummyCall);
    });

    it('primes a newly dialed channel using executeSelectOne when no custom executor is provided', async () => {
      (
        sandbox.stub(grpc.Client.prototype, 'makeUnaryRequest') as any
      ).callsFake(
        (
          _method: any,
          _serialize: any,
          _deserialize: any,
          _argument: any,
          _metadata: any,
          _options: any,
          callback: any,
        ) => {
          callback(null, {});
          return {} as any;
        },
      );
      const mockChannel = createMockChannel();
      const entry = await dialAndPrimeChannel(
        'localhost:9010',
        grpc.credentials.createInsecure(),
        {},
        'projects/p/instances/i/databases/d/sessions/s1',
        5000,
        () => mockChannel,
      );
      assert.strictEqual(entry, mockChannel);
    });

    it('avoids occupied slots from draining channels during slot allocation in publishPrimedChannel', () => {
      const pool = new ChannelPool(
        'localhost:9010',
        grpc.credentials.createInsecure(),
        {},
        {
          minChannels: 1,
          maxChannels: 4,
          initialChannels: 1,
        },
        createMockChannel,
      );
      assert.strictEqual(pool.activeChannels()[0].logicalChannelId, 1);
      const drainingEntry = new ChannelEntry(99, 2, createMockChannel());
      (pool as any).drainingEntries.push(drainingEntry);

      const mockChannel = createMockChannel();
      const published = (pool as any).publishPrimedChannel(mockChannel);
      assert.ok(published);
      assert.strictEqual(published.logicalChannelId, 3);
      pool.close();
    });

    it('returns early from startScaleDownMonitor when timer is already active', () => {
      const pool = new ChannelPool(
        'localhost:9010',
        grpc.credentials.createInsecure(),
        {},
        {
          minChannels: 1,
          maxChannels: 2,
          initialChannels: 1,
        },
        createMockChannel,
      );
      const timerBefore = (pool as any).scaleDownTimer;
      assert.ok(timerBefore);
      (pool as any).startScaleDownMonitor();
      const timerAfter = (pool as any).scaleDownTimer;
      assert.strictEqual(timerBefore, timerAfter);
      pool.close();
    });

    it('sorts scale-down candidates preferring channels with lowest in-flight RPCs', () => {
      const config = normalizeChannelPoolOptions({
        minChannels: 1,
        maxChannels: 4,
        minRpcPerChannel: 15,
        consecutiveLowLoadChecks: 3,
        maxRemoveChannels: 1,
      });
      const entry1 = new ChannelEntry(1, 1, createMockChannel());
      const entry2 = new ChannelEntry(2, 2, createMockChannel());
      entry1.incrementInFlight(); // load 1
      const activeEntries = [entry1, entry2];
      const result = evaluateScaleDown(activeEntries, config, 2);
      assert.strictEqual(result.candidatesToRemove.length, 1);
      assert.strictEqual(result.candidatesToRemove[0].id, 2);
    });

    it('handles exception thrown by channel.close during failed priming cleanup', async () => {
      const mockChannel = createMockChannel();
      mockChannel.close = () => {
        throw new Error('Socket already dead');
      };
      await assert.rejects(async () => {
        await dialAndPrimeChannel(
          'localhost:9010',
          grpc.credentials.createInsecure(),
          {},
          'projects/p/instances/i/databases/d/sessions/s1',
          5000,
          () => mockChannel,
          async () => {
            throw new Error('Priming failed');
          },
        );
      }, /Priming failed/);
    });

    it('closes all draining entries when pool is closed', () => {
      const pool = new ChannelPool(
        'localhost:9010',
        grpc.credentials.createInsecure(),
        {},
        {minChannels: 1, maxChannels: 2, initialChannels: 1},
        createMockChannel,
      );
      const drainingEntry = new ChannelEntry(99, 2, createMockChannel());
      (pool as any).drainingEntries.push(drainingEntry);
      pool.close();
      assert.strictEqual(drainingEntry.isClosed(), true);
      assert.strictEqual((pool as any).drainingEntries.length, 0);
    });

    it('returns early from scaleDownEvaluation when pool is closed', () => {
      const pool = new ChannelPool(
        'localhost:9010',
        grpc.credentials.createInsecure(),
        {},
        {minChannels: 1, maxChannels: 2, initialChannels: 1},
        createMockChannel,
      );
      pool.close();
      pool.scaleDownEvaluation();
      assert.strictEqual((pool as any).consecutiveLowLoadChecks, 0);
    });

    it('leases channel with affinity passed via otherArgs.options.affinity in callInvocationTransformer', () => {
      const pool = new ChannelPool(
        'localhost:9010',
        grpc.credentials.createInsecure(),
        {},
        {minChannels: 1, maxChannels: 2, initialChannels: 1},
        createMockChannel,
      );
      const affinity = TransactionAffinity.newReadOnly();
      const dummyCall: any = {
        channel: pool,
        metadata: new grpc.Metadata(),
        callOptions: {
          otherArgs: {
            options: {
              affinity,
            },
          },
        },
      };
      const transformed = callInvocationTransformer(dummyCall);
      assert.strictEqual(affinity.pinnedEntryId() !== null, true);
      assert.strictEqual(transformed.channel, pool.activeChannels()[0].channel);
      pool.close();
    });

    it('registers once listeners on call emitter and decrements inFlight on status/error/close', () => {
      const pool = new ChannelPool(
        'localhost:9010',
        grpc.credentials.createInsecure(),
        {},
        {minChannels: 1, maxChannels: 1, initialChannels: 1},
        createMockChannel,
      );
      const entry = pool.activeChannels()[0];
      assert.strictEqual(entry.inFlight(), 0);

      const EventEmitter = require('events');
      const mockCall = new EventEmitter();
      mockCall.destroy = () => {};

      callInvocationTransformer({
        channel: pool,
        call: mockCall,
      });

      assert.strictEqual(entry.inFlight(), 1);
      assert.strictEqual(mockCall.listenerCount('status'), 1);
      assert.strictEqual(mockCall.listenerCount('error'), 1);
      assert.strictEqual(mockCall.listenerCount('close'), 1);

      mockCall.emit('status', {code: 0});
      assert.strictEqual(entry.inFlight(), 0);

      // Emitting error or close after status should be idempotent
      mockCall.emit('close');
      assert.strictEqual(entry.inFlight(), 0);

      pool.close();
    });

    it('initializes PartitionedDml with read-write affinity', () => {
      const {PartitionedDml} = require('../src/transaction');
      const mockSession: any = {
        parent: {
          formattedName_: 'projects/p/instances/i/databases/d',
          parent: {
            parent: {},
          },
        },
        commonHeaders_: {},
        request: () => {},
        requestStream: () => {},
      };
      const pdml = new PartitionedDml(mockSession);
      assert.ok(pdml.affinity);
      assert.strictEqual(pdml.affinity.isReadWrite(), true);
    });

    it('replaces rotated session with new session for the same database', () => {
      const pool = new ChannelPool(
        'localhost:9010',
        grpc.credentials.createInsecure(),
        {},
        {minChannels: 1, maxChannels: 1, initialChannels: 1},
        createMockChannel,
      );
      pool.setPrimeSession(
        'projects/p/instances/i/databases/d/sessions/old-session',
      );
      assert.strictEqual(
        pool.primeSession,
        'projects/p/instances/i/databases/d/sessions/old-session',
      );

      // Rotating session replaces the previous session for database d
      pool.setPrimeSession(
        'projects/p/instances/i/databases/d/sessions/new-session',
      );
      assert.strictEqual(
        pool.primeSession,
        'projects/p/instances/i/databases/d/sessions/new-session',
      );
      pool.close();
    });

    it('does not drop prime session of another database with prefix collision', () => {
      const pool = new ChannelPool(
        'localhost:9010',
        grpc.credentials.createInsecure(),
        {},
        {minChannels: 1, maxChannels: 1, initialChannels: 1},
        createMockChannel,
      );
      pool.setPrimeSession('projects/p/instances/i/databases/mydb/sessions/s1');
      pool.setPrimeSession(
        'projects/p/instances/i/databases/mydb2/sessions/s2',
      );

      // Clearing mydb should NOT clear mydb2
      pool.clearPrimeSession('projects/p/instances/i/databases/mydb');
      assert.strictEqual(
        pool.primeSession,
        'projects/p/instances/i/databases/mydb2/sessions/s2',
      );
      pool.close();
    });

    it('decouples admin clients from data channel pool and prevents cross-client close teardown', async () => {
      const spanner = new Spanner({
        projectId: 'test-project',
        servicePath: 'localhost',
        port: 9010,
        sslCreds: grpc.credentials.createInsecure(),
      });
      const dbAdmin = spanner.getDatabaseAdminClient();
      const instAdmin = spanner.getInstanceAdminClient();
      assert.ok(dbAdmin);
      assert.ok(instAdmin);

      // Verify cached admin stubs created via prepareGapicRequest_ also bypass the pool
      let capturedClient: any;
      (spanner as any).auth.getProjectId = (cb: any) =>
        cb(null, 'test-project');
      await new Promise<void>(resolve => {
        (spanner as any).prepareGapicRequest_(
          {
            client: 'DatabaseAdminClient',
            method: 'getDatabase',
            reqOpts: {},
            headers: {},
          },
          () => {
            capturedClient = (spanner as any).clients_.get(
              'DatabaseAdminClient',
            );
            resolve();
          },
        );
      });
      assert.ok(capturedClient);
      assert.strictEqual(
        (capturedClient as any)._opts?.['grpc.channelFactoryOverride'],
        undefined,
      );

      // Instantiate data channel pool via Spanner
      const override = (spanner as any).options['grpc.channelFactoryOverride'];
      const dataPool = override(
        'localhost:9010',
        grpc.credentials.createInsecure(),
        (spanner as any).options,
      );
      assert.strictEqual(dataPool.isClosed(), false);

      // Closing admin client must NOT tear down data channel pool
      await dbAdmin.close();
      assert.strictEqual(dataPool.isClosed(), false);
      await instAdmin.close();
      assert.strictEqual(dataPool.isClosed(), false);

      // Cleanly tear down data channel pool and spanner instance
      dataPool.close();
      assert.strictEqual(dataPool.isClosed(), true);
      await spanner.close();
    });

    it('throws UNAVAILABLE error code when acquireEntry or pickEntry is called on closed pool', () => {
      const pool = new ChannelPool(
        'localhost:9010',
        grpc.credentials.createInsecure(),
        {},
        {minChannels: 1, maxChannels: 1, initialChannels: 1},
        createMockChannel,
      );
      pool.close();
      assert.throws(
        () => pool.acquireEntry(),
        (err: any) => err.code === grpc.status.UNAVAILABLE,
      );
      assert.throws(
        () => pool.pickEntry(),
        (err: any) => err.code === grpc.status.UNAVAILABLE,
      );
    });

    it('delivers UNAVAILABLE asynchronously via interceptor when pool is closed', done => {
      const pool = new ChannelPool(
        'localhost:9010',
        grpc.credentials.createInsecure(),
        {},
        {minChannels: 1, maxChannels: 1, initialChannels: 1},
        createMockChannel,
      );
      pool.close();

      const transformer = pool.createCallInvocationTransformer();
      const mockCallProps: any = {
        channel: pool,
        metadata: new grpc.Metadata(),
        callOptions: {},
      };

      const transformed = transformer(mockCallProps);
      assert.ok(transformed.callOptions.interceptors);
      assert.strictEqual(transformed.callOptions.interceptors.length, 1);

      const interceptor = transformed.callOptions.interceptors[0];
      const interceptingCall = interceptor({}, () => {});
      interceptingCall.start(new grpc.Metadata(), {
        onReceiveStatus: (status: any) => {
          assert.strictEqual(status.code, grpc.status.UNAVAILABLE);
          assert.strictEqual(status.details, 'ChannelPool is closed');
          done();
        },
      });
    });

    it('delivers UNAVAILABLE asynchronously to gRPC client callback when pool is closed', done => {
      const pool = new ChannelPool(
        'localhost:9010',
        grpc.credentials.createInsecure(),
        {},
        {minChannels: 1, maxChannels: 1, initialChannels: 1},
        createMockChannel,
      );
      pool.close();

      const client = new grpc.Client(
        'localhost:9010',
        grpc.credentials.createInsecure(),
        {
          channelOverride: pool as any,
          callInvocationTransformer: pool.createCallInvocationTransformer(),
        },
      );

      client.makeUnaryRequest(
        '/google.spanner.v1.Spanner/ExecuteSql',
        (x: any) => Buffer.from(x),
        (b: any) => b,
        {},
        new grpc.Metadata(),
        {},
        (err: any) => {
          assert.ok(err);
          assert.strictEqual(err.code, grpc.status.UNAVAILABLE);
          assert.strictEqual(err.details, 'ChannelPool is closed');
          client.close();
          done();
        },
      );
    });

    it('delivers UNAVAILABLE asynchronously to gRPC server-streaming call without spurious errors when pool is closed', done => {
      const pool = new ChannelPool(
        'localhost:9010',
        grpc.credentials.createInsecure(),
        {},
        {minChannels: 1, maxChannels: 1, initialChannels: 1},
        createMockChannel,
      );
      pool.close();

      const client = new grpc.Client(
        'localhost:9010',
        grpc.credentials.createInsecure(),
        {
          channelOverride: pool as any,
          callInvocationTransformer: pool.createCallInvocationTransformer(),
        },
      );

      const stream = client.makeServerStreamRequest(
        '/google.spanner.v1.Spanner/ExecuteStreamingSql',
        (x: any) => Buffer.from(x),
        (b: any) => b,
        {},
        new grpc.Metadata(),
        {},
      );

      const errors: Error[] = [];
      stream.on('error', (err: any) => {
        errors.push(err);
      });

      stream.on('status', (status: any) => {
        try {
          assert.strictEqual(status.code, grpc.status.UNAVAILABLE);
          assert.strictEqual(status.details, 'ChannelPool is closed');
          assert.strictEqual(errors.length, 1);
          assert.strictEqual((errors[0] as any).code, grpc.status.UNAVAILABLE);
          client.close();
          done();
        } catch (err) {
          client.close();
          done(err);
        }
      });
    });

    it('defaults to 1 channel when SPANNER_EMULATOR_HOST is set', () => {
      const originalHost = process.env.SPANNER_EMULATOR_HOST;
      try {
        process.env.SPANNER_EMULATOR_HOST = 'localhost:9010';
        const spanner = new Spanner({
          projectId: 'test-project',
        });
        const poolOptions = (spanner as any).options[
          'grpc.spanner_channel_pool_options'
        ];
        assert.strictEqual(poolOptions.initialChannels, 1);
        assert.strictEqual(poolOptions.minChannels, 1);
        assert.strictEqual(poolOptions.maxChannels, 1);
      } finally {
        if (originalHost !== undefined) {
          process.env.SPANNER_EMULATOR_HOST = originalHost;
        } else {
          delete process.env.SPANNER_EMULATOR_HOST;
        }
      }
    });

    it('executes scale-up against real gRPC server, primes new channels, and serves requests without leak', async () => {
      const server = new grpc.Server();
      const spannerMock = mock.createMockSpanner(server);
      spannerMock.putStatementResult(
        'SELECT 1',
        mock.StatementResult.resultSet(mock.createSelect1ResultSet()),
      );
      spannerMock.putStatementResult(
        'SELECT 2',
        mock.StatementResult.resultSet(mock.createSimpleResultSet()),
      );

      const port = await new Promise<number>((resolve, reject) => {
        server.bindAsync(
          '127.0.0.1:0',
          grpc.ServerCredentials.createInsecure(),
          (err, assignedPort) => {
            if (err) {
              reject(err);
            } else {
              resolve(assignedPort);
            }
          },
        );
      });

      let client: grpc.Client | undefined;
      let pool: ChannelPool | undefined;
      try {
        pool = new ChannelPool(
          `127.0.0.1:${port}`,
          grpc.credentials.createInsecure(),
          {},
          {
            minChannels: 1,
            maxChannels: 4,
            initialChannels: 1,
            minRpcPerChannel: 1,
            maxRpcPerChannel: 2,
            scaleUpCooldownMs: 0,
          },
          (target, creds, opts) =>
            new (grpc as any).Channel(target, creds, opts),
        );

        (pool as any).lastScaleUpTime = 0;
        (pool as any).lastScaleUpEvaluationTime = 0;
        pool.setPrimeSession(
          'projects/test-project/instances/test-instance/databases/test-database/sessions/test-session',
        );

        assert.strictEqual(pool.activeChannelCount(), 1);

        // Simulate load to trigger scale-up
        for (let i = 0; i < 5; i++) {
          (pool as any).activeEntries[0].incrementInFlight();
        }
        await pool.triggerScaleUp();
        for (let i = 0; i < 5; i++) {
          (pool as any).activeEntries[0].decrementInFlight();
        }

        // Verify that pool scaled up from 1 to 3 channels and new channel is published in READY state (not shut down)
        assert.strictEqual(pool.activeChannelCount(), 3);
        const primedChannel = (pool as any).activeEntries[1].channel;
        assert.strictEqual(
          primedChannel.getConnectivityState(false),
          (grpc.connectivityState as any).READY,
        );

        client = new grpc.Client(
          `127.0.0.1:${port}`,
          grpc.credentials.createInsecure(),
          {
            channelOverride: pool as any,
            callInvocationTransformer: pool.createCallInvocationTransformer(),
          },
        );

        // Pin affinity to the newly primed channel entry (activeEntries[1]) to ensure
        // the RPC deterministically executes over the newly scaled-up channel.
        const affinity = TransactionAffinity.newReadWrite();
        affinity.pinEntry((pool as any).activeEntries[1]);

        // Execute unary RPC over the pooled channels with affinity to the new channel
        const unaryRequest = {
          session:
            'projects/test-project/instances/test-instance/databases/test-database/sessions/test-session',
          sql: 'SELECT 1',
        };
        await new Promise<void>((resolve, reject) => {
          client!.makeUnaryRequest(
            '/google.spanner.v1.Spanner/ExecuteSql',
            (val: any) =>
              Buffer.from(
                protos.google.spanner.v1.ExecuteSqlRequest.encode(val).finish(),
              ),
            (buf: Buffer) => protos.google.spanner.v1.ResultSet.decode(buf),
            unaryRequest,
            new grpc.Metadata(),
            {affinity} as any,
            (err: any, response: any) => {
              if (err) {
                reject(err);
              } else {
                assert.ok(response);
                resolve();
              }
            },
          );
        });

        // Execute streaming RPC over the pooled channels
        const stream = client.makeServerStreamRequest(
          '/google.spanner.v1.Spanner/ExecuteStreamingSql',
          (val: any) =>
            Buffer.from(
              protos.google.spanner.v1.ExecuteSqlRequest.encode(val).finish(),
            ),
          (buf: Buffer) =>
            protos.google.spanner.v1.PartialResultSet.decode(buf),
          {
            session:
              'projects/test-project/instances/test-instance/databases/test-database/sessions/test-session',
            sql: 'SELECT 2',
          },
          new grpc.Metadata(),
          {},
        );

        await new Promise<void>((resolve, reject) => {
          stream.on('data', () => {});
          stream.on('error', reject);
          stream.on('status', status => {
            assert.strictEqual(status.code, grpc.status.OK);
            resolve();
          });
        });

        // Verify in-flight counters return to 0 and sockets are not leaked
        assert.strictEqual(pool.totalInFlightRpcs(), 0);
      } finally {
        client?.close();
        pool?.close();
        await new Promise<void>(resolve => {
          server.tryShutdown(() => resolve());
        });
      }
    });
  });
});
