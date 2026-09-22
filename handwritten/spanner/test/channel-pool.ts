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
import {describe, it, before, after, beforeEach, afterEach} from 'mocha';
import * as grpc from '@grpc/grpc-js';
import * as sinon from 'sinon';
import {Spanner} from '../src';
import * as mock from './mockserver/mockspanner';
import {
  AffinityKind,
  ChannelEntry,
  ChannelPool,
  ChannelPoolChannelAdapter,
  createCallInvocationTransformer,
  DynamicChannelPool,
  selectPowerOfTwo,
  StaticChannelPool,
  TransactionAffinity,
} from '../src/channel-pool';

describe('ChannelPool Module', () => {
  let sandbox: sinon.SinonSandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('selectPowerOfTwo', () => {
    it('should throw if entries list is empty', () => {
      assert.throws(() => selectPowerOfTwo([]), /No active channels available/);
    });

    it('should return the only entry if length is 1', () => {
      const entry: ChannelEntry = {
        id: 1,
        channel: {} as grpc.Channel,
        inFlightRpcs: 0,
        activeRwTransactions: 0,
        state: 'ACTIVE',
        lastActivity: 100,
      };
      assert.strictEqual(selectPowerOfTwo([entry]), entry);
    });

    it('should select the channel with lower load between sampled pair', () => {
      const entry1: ChannelEntry = {
        id: 1,
        channel: {} as grpc.Channel,
        inFlightRpcs: 10,
        activeRwTransactions: 0,
        state: 'ACTIVE',
        lastActivity: 100,
      };
      const entry2: ChannelEntry = {
        id: 2,
        channel: {} as grpc.Channel,
        inFlightRpcs: 2,
        activeRwTransactions: 0,
        state: 'ACTIVE',
        lastActivity: 100,
      };

      // With 2 entries, both will always be selected
      const picked = selectPowerOfTwo([entry1, entry2]);
      assert.strictEqual(picked.id, 2);
    });

    it('should break ties using warmer lastActivity', () => {
      const coldEntry: ChannelEntry = {
        id: 1,
        channel: {} as grpc.Channel,
        inFlightRpcs: 5,
        activeRwTransactions: 0,
        state: 'ACTIVE',
        lastActivity: 100,
      };
      const warmEntry: ChannelEntry = {
        id: 2,
        channel: {} as grpc.Channel,
        inFlightRpcs: 5,
        activeRwTransactions: 0,
        state: 'ACTIVE',
        lastActivity: 500,
      };

      const picked = selectPowerOfTwo([coldEntry, warmEntry]);
      assert.strictEqual(picked.id, 2);
    });
  });

  describe('TransactionAffinity', () => {
    it('should manage Read/Write affinity pin and decrement activeRwTransactions on reset', () => {
      const affinity = new TransactionAffinity(AffinityKind.ReadWrite);
      assert.strictEqual(affinity.kind, AffinityKind.ReadWrite);
      assert.strictEqual(affinity.pinnedEntry, null);

      const entry: ChannelEntry = {
        id: 1,
        channel: {} as grpc.Channel,
        inFlightRpcs: 0,
        activeRwTransactions: 1,
        state: 'ACTIVE',
        lastActivity: 100,
      };

      affinity.pinnedEntry = entry;
      affinity.reset();

      assert.strictEqual(affinity.pinnedEntry, null);
      assert.strictEqual(entry.activeRwTransactions, 0);
    });

    it('should not decrement activeRwTransactions on ReadOnly affinity reset', () => {
      const affinity = new TransactionAffinity(AffinityKind.ReadOnly);
      const entry: ChannelEntry = {
        id: 1,
        channel: {} as grpc.Channel,
        inFlightRpcs: 0,
        activeRwTransactions: 0,
        state: 'ACTIVE',
        lastActivity: 100,
      };

      affinity.pinnedEntry = entry;
      affinity.reset();

      assert.strictEqual(affinity.pinnedEntry, null);
      assert.strictEqual(entry.activeRwTransactions, 0);
    });
  });

  describe('StaticChannelPool', () => {
    it('should create default 4 channels and handle lease acquisition and release', async () => {
      const pool = new StaticChannelPool(
        'localhost:9010',
        grpc.credentials.createInsecure(),
        {},
      );

      assert.strictEqual(pool.size, 4);
      assert.strictEqual(pool.activeCount, 4);

      const lease1 = pool.acquire();
      assert.strictEqual(lease1.entry.inFlightRpcs, 1);

      const lease2 = pool.acquire();
      assert.strictEqual(lease2.entry.inFlightRpcs >= 1, true);

      lease1.release();
      assert.strictEqual(lease1.entry.inFlightRpcs, 0);

      // Releasing twice should be a no-op
      lease1.release();
      assert.strictEqual(lease1.entry.inFlightRpcs, 0);

      await pool.close();
    });

    it('should pin Read/Write transactions to the same channel', async () => {
      const pool = new StaticChannelPool(
        'localhost:9010',
        grpc.credentials.createInsecure(),
        {},
        {numChannels: 4},
      );

      const affinity = new TransactionAffinity(AffinityKind.ReadWrite);

      const lease1 = pool.acquire(affinity);
      const pinnedChannelId = lease1.entry.id;
      assert.strictEqual(lease1.entry.activeRwTransactions, 1);

      // Subsequent acquisitions using the same affinity must hit the pinned channel
      for (let i = 0; i < 5; i++) {
        const subsequentLease = pool.acquire(affinity);
        assert.strictEqual(subsequentLease.entry.id, pinnedChannelId);
        subsequentLease.release();
      }

      lease1.release();
      assert.strictEqual(lease1.entry.activeRwTransactions, 1);

      affinity.reset();
      assert.strictEqual(lease1.entry.activeRwTransactions, 0);

      await pool.close();
    });

    it('should respect SPANNER_NUM_CHANNELS environment variable', async () => {
      const prev = process.env.SPANNER_NUM_CHANNELS;
      try {
        process.env.SPANNER_NUM_CHANNELS = '6';
        const pool = new StaticChannelPool(
          'localhost:9010',
          grpc.credentials.createInsecure(),
          {},
        );
        assert.strictEqual(pool.size, 6);
        await pool.close();
      } finally {
        if (prev !== undefined) {
          process.env.SPANNER_NUM_CHANNELS = prev;
        } else {
          delete process.env.SPANNER_NUM_CHANNELS;
        }
      }
    });

    it('should prioritize options.numChannels over SPANNER_NUM_CHANNELS environment variable', async () => {
      const prev = process.env.SPANNER_NUM_CHANNELS;
      try {
        process.env.SPANNER_NUM_CHANNELS = '6';
        const pool = new StaticChannelPool(
          'localhost:9010',
          grpc.credentials.createInsecure(),
          {},
          {numChannels: 2},
        );
        assert.strictEqual(pool.size, 2);
        await pool.close();
      } finally {
        if (prev !== undefined) {
          process.env.SPANNER_NUM_CHANNELS = prev;
        } else {
          delete process.env.SPANNER_NUM_CHANNELS;
        }
      }
    });

    it('should return channels array from getChannels()', async () => {
      const pool = new StaticChannelPool(
        'localhost:9010',
        grpc.credentials.createInsecure(),
        {},
        {numChannels: 2},
      );
      const channels = pool.getChannels();
      assert.strictEqual(channels.length, 2);
      assert.ok(channels[0] instanceof grpc.Channel);
      await pool.close();
    });

    it('should clamp numChannels to at least 1 when 0 is configured', async () => {
      const pool = new StaticChannelPool(
        'localhost:9010',
        grpc.credentials.createInsecure(),
        {},
        {numChannels: 0},
      );
      assert.strictEqual(pool.size, 1);
      assert.strictEqual(pool.getTarget(), 'localhost:9010');
      await pool.close();
    });

    it('should fallback to default 4 channels when numChannels is NaN', async () => {
      const pool = new StaticChannelPool(
        'localhost:9010',
        grpc.credentials.createInsecure(),
        {},
        {numChannels: NaN},
      );
      assert.strictEqual(pool.size, 4);
      await pool.close();
    });

    it('should throw when acquiring from closed pool and report SHUTDOWN connectivity state', async () => {
      const pool = new StaticChannelPool(
        'localhost:9010',
        grpc.credentials.createInsecure(),
        {},
        {numChannels: 2},
      );
      await pool.close();
      assert.throws(() => pool.acquire(), /Channel pool is closed\./);
      assert.strictEqual(
        pool.getConnectivityState(),
        grpc.connectivityState.SHUTDOWN,
      );
    });

    it('should report TRANSIENT_FAILURE connectivity state when channel fails and none are ready or connecting', async () => {
      const pool = new StaticChannelPool(
        'localhost:9010',
        grpc.credentials.createInsecure(),
        {},
        {numChannels: 2},
      );
      const entries = (pool as any).entries;
      sinon
        .stub(entries[0].channel, 'getConnectivityState')
        .returns(grpc.connectivityState.TRANSIENT_FAILURE);
      sinon
        .stub(entries[1].channel, 'getConnectivityState')
        .returns(grpc.connectivityState.IDLE);

      assert.strictEqual(
        pool.getConnectivityState(),
        grpc.connectivityState.TRANSIENT_FAILURE,
      );
      await pool.close();
    });

    it('should invoke callback asynchronously with error when watching connectivity state of empty pool', done => {
      const pool = new StaticChannelPool(
        'localhost:9010',
        grpc.credentials.createInsecure(),
        {},
        {numChannels: 1},
      );
      (pool as any).entries = [];
      let synchronous = true;
      pool.watchConnectivityState(
        grpc.connectivityState.READY,
        Infinity,
        error => {
          assert.strictEqual(synchronous, false);
          assert.strictEqual(error?.message, 'No channels in pool.');
          done();
        },
      );
      synchronous = false;
    });
  });

  describe('DynamicChannelPool', () => {
    it('should scale up under concurrency and prime new channels with SELECT 1', async () => {
      let primedSession = '';
      let primeCalls = 0;

      const pool = new DynamicChannelPool(
        'localhost:9010',
        grpc.credentials.createInsecure(),
        {},
        {
          minChannels: 2,
          maxChannels: 5,
          maxRpcPerChannel: 2,
          scaleUpCooldownMs: 0,
          primeFn: async (_channel, sessionName) => {
            primeCalls++;
            primedSession = sessionName;
          },
        },
      );

      pool.setPrimeSession(
        'projects/p/instances/i/databases/d/sessions/s-prime',
      );

      assert.strictEqual(pool.size, 2);
      assert.strictEqual(pool.activeCount, 2);

      // Acquire enough leases on one channel to exceed maxRpcPerChannel = 2
      const leases: import('../src/channel-pool').ChannelLease[] = [];
      for (let i = 0; i < 6; i++) {
        leases.push(pool.acquire());
      }

      // Wait for scale-up setImmediate task to execute
      const deadline = Date.now() + 1000;
      while (pool.activeCount <= 2 && Date.now() < deadline) {
        await new Promise(resolve => setImmediate(resolve));
      }

      assert.strictEqual(pool.activeCount > 2, true);
      assert.strictEqual(primeCalls > 0, true);
      assert.strictEqual(
        primedSession,
        'projects/p/instances/i/databases/d/sessions/s-prime',
      );

      for (const lease of leases) {
        lease.release();
      }

      await pool.close();
    });

    it('should use default configuration options', async () => {
      const pool = new DynamicChannelPool(
        'localhost:9010',
        grpc.credentials.createInsecure(),
        {},
      );

      assert.strictEqual((pool as any).minChannels, 4);
      assert.strictEqual((pool as any).maxChannels, 256);
      assert.strictEqual((pool as any).maxRpcPerChannel, 8);
      assert.strictEqual((pool as any).minRpcPerChannel, 2);
      assert.strictEqual((pool as any).maxScaleUpPercent, 100);
      assert.strictEqual((pool as any).maxRemoveChannels, 4);
      assert.strictEqual((pool as any).scaleUpCooldownMs, 1000);

      await pool.close();
    });

    it('should scale up aggressively adding multiple channels under heavy load', async () => {
      const pool = new DynamicChannelPool(
        'localhost:9010',
        grpc.credentials.createInsecure(),
        {},
        {
          minChannels: 4,
          maxChannels: 16,
          maxRpcPerChannel: 8,
          minRpcPerChannel: 2,
          scaleUpCooldownMs: 0,
        },
      );

      assert.strictEqual(pool.activeCount, 4);

      // Total load 40 across 4 channels -> targetRpc 5 -> desiredChannels 8 -> adds 4 channels in parallel
      const leases: import('../src/channel-pool').ChannelLease[] = [];
      for (let i = 0; i < 40; i++) {
        leases.push(pool.acquire());
      }

      const deadline = Date.now() + 1000;
      while (pool.activeCount < 8 && Date.now() < deadline) {
        await new Promise(resolve => setImmediate(resolve));
      }

      assert.strictEqual(pool.activeCount, 8);

      for (const lease of leases) {
        lease.release();
      }

      await pool.close();
    });

    it('should scale up by only the calculated need when needed is less than maxScaleUpPercent', async () => {
      const pool = new DynamicChannelPool(
        'localhost:9010',
        grpc.credentials.createInsecure(),
        {},
        {
          minChannels: 4,
          maxChannels: 16,
          maxRpcPerChannel: 7,
          minRpcPerChannel: 3,
          scaleUpCooldownMs: 0,
        },
      );

      assert.strictEqual(pool.activeCount, 4);

      // Total load 30 across 4 channels -> at least one channel has 8 > maxRpc (7).
      // targetRpc = (3 + 7) / 2 = 5 -> desiredChannels 6 (ceil(30 / 5)).
      // needed = 6 - 4 = 2 channels.
      // maxScaleUpPercent (100%) cap would allow up to 4 channels.
      // Pool must add only 2 channels (scaling from 4 to 6), not double to 8.
      const leases: import('../src/channel-pool').ChannelLease[] = [];
      for (let i = 0; i < 30; i++) {
        leases.push(pool.acquire());
      }

      const deadline = Date.now() + 1000;
      while (pool.activeCount < 6 && Date.now() < deadline) {
        await new Promise(resolve => setImmediate(resolve));
      }

      assert.strictEqual(
        pool.activeCount,
        6,
        `Expected pool to scale to 6 channels based on calculated need, got ${pool.activeCount}`,
      );

      for (const lease of leases) {
        lease.release();
      }

      await pool.close();
    });

    it('should scale up without veto when a single channel exceeds maxRpcPerChannel even if total load is low', async () => {
      const pool = new DynamicChannelPool(
        'localhost:9010',
        grpc.credentials.createInsecure(),
        {},
        {
          minChannels: 4,
          maxChannels: 8,
          maxRpcPerChannel: 8,
          minRpcPerChannel: 2,
          scaleUpCooldownMs: 0,
        },
      );

      assert.strictEqual(pool.activeCount, 4);

      // Artificially put 9 RPCs on channel 0 while other channels have 0 load.
      // totalLoad = 9. targetRpc = 5. desiredChannels = ceil(9/5) = 2 <= 4.
      // If a veto existed, it would not scale up because desiredChannels <= currentLen.
      // Without veto, it must still add at least 1 channel because channel 0 exceeded maxRpcPerChannel = 8.
      const activeEntries = (pool as any).activeEntries;
      activeEntries[0].inFlightRpcs = 9;
      (pool as any).maybeScaleUp();

      const deadline = Date.now() + 1000;
      while (pool.activeCount <= 4 && Date.now() < deadline) {
        await new Promise(resolve => setImmediate(resolve));
      }

      assert.strictEqual(pool.activeCount > 4, true);

      activeEntries[0].inFlightRpcs = 0;
      await pool.close();
    });

    it('should keep Read/Write transaction on draining channel until completion', async () => {
      const pool = new DynamicChannelPool(
        'localhost:9010',
        grpc.credentials.createInsecure(),
        {},
        {
          minChannels: 1,
          maxChannels: 3,
        },
      );

      const affinity = new TransactionAffinity(AffinityKind.ReadWrite);
      const lease = pool.acquire(affinity);
      const entry = lease.entry;

      // Simulate channel entering DRAINING
      entry.state = 'DRAINING';

      // R/W transaction should remain pinned even while DRAINING
      const subsequentLease = pool.acquire(affinity);
      assert.strictEqual(subsequentLease.entry, entry);

      subsequentLease.release();
      lease.release();

      affinity.reset();
      assert.strictEqual(entry.activeRwTransactions, 0);

      await pool.close();
    });

    it('should seamlessly switch Read-Only transaction away from draining channel', async () => {
      const pool = new DynamicChannelPool(
        'localhost:9010',
        grpc.credentials.createInsecure(),
        {},
        {
          minChannels: 2,
          maxChannels: 4,
        },
      );

      const affinity = new TransactionAffinity(AffinityKind.ReadOnly);
      const lease1 = pool.acquire(affinity);
      const oldEntry = lease1.entry;
      lease1.release();

      // Simulate draining channel by removing from activeEntries and moving to drainingEntries
      const idx = (pool as any).activeEntries.indexOf(oldEntry);
      (pool as any).activeEntries.splice(idx, 1);
      oldEntry.state = 'DRAINING';
      (pool as any).drainingEntries.push(oldEntry);

      // Soft affinity should re-pick a fresh active channel
      const lease2 = pool.acquire(affinity);
      assert.notStrictEqual(lease2.entry, oldEntry);
      assert.strictEqual(lease2.entry.state, 'ACTIVE');

      lease2.release();
      affinity.reset();

      await pool.close();
    });

    it('should clamp minChannels to at least 1 when 0 is configured', async () => {
      const pool = new DynamicChannelPool(
        'localhost:9010',
        grpc.credentials.createInsecure(),
        {},
        {minChannels: 0},
      );
      assert.strictEqual((pool as any).minChannels, 1);
      assert.strictEqual(pool.activeCount, 1);
      await pool.close();
    });

    it('should fallback to default minChannels and maxChannels when NaN is configured', async () => {
      const pool = new DynamicChannelPool(
        'localhost:9010',
        grpc.credentials.createInsecure(),
        {},
        {minChannels: NaN, maxChannels: NaN},
      );
      assert.strictEqual((pool as any).minChannels, 4);
      assert.strictEqual((pool as any).maxChannels, 256);
      assert.strictEqual(pool.activeCount, 4);
      await pool.close();
    });

    it('should correctly track activeRwTransactions when fallback occurs on closed channel', async () => {
      const pool = new DynamicChannelPool(
        'localhost:9010',
        grpc.credentials.createInsecure(),
        {},
        {minChannels: 2, maxChannels: 2},
      );

      const affinity = new TransactionAffinity(AffinityKind.ReadWrite);
      const lease1 = pool.acquire(affinity);
      const pinnedEntry = lease1.entry;
      assert.strictEqual(pinnedEntry.activeRwTransactions, 1);
      lease1.release();

      // Simulate channel closure and removal from active pool
      const idx = (pool as any).activeEntries.indexOf(pinnedEntry);
      (pool as any).activeEntries.splice(idx, 1);
      pinnedEntry.state = 'CLOSED';

      // Next acquire with same affinity should fall back to another active channel
      const lease2 = pool.acquire(affinity);
      assert.notStrictEqual(lease2.entry, pinnedEntry);
      assert.strictEqual(pinnedEntry.activeRwTransactions, 0);
      assert.strictEqual(lease2.entry.activeRwTransactions, 1);
      lease2.release();

      affinity.reset();
      assert.strictEqual(lease2.entry.activeRwTransactions, 0);

      await pool.close();
    });

    it('should clean up draining channel when its last transaction affinity resets', async () => {
      const pool = new DynamicChannelPool(
        'localhost:9010',
        grpc.credentials.createInsecure(),
        {},
        {minChannels: 2, maxChannels: 4},
      );

      const affinity = new TransactionAffinity(AffinityKind.ReadWrite);
      const lease1 = pool.acquire(affinity);
      const entry = lease1.entry;
      assert.strictEqual(entry.activeRwTransactions, 1);

      // Drain entry
      const idx = (pool as any).activeEntries.indexOf(entry);
      (pool as any).activeEntries.splice(idx, 1);
      entry.state = 'DRAINING';
      (pool as any).drainingEntries.push(entry);

      // Release RPC lease while transaction is still open
      lease1.release();
      assert.strictEqual(entry.inFlightRpcs, 0);
      assert.strictEqual(entry.state, 'DRAINING');
      assert.strictEqual((pool as any).drainingEntries.length, 1);

      // Transaction commits / resets affinity -> immediately triggers draining cleanup hook
      affinity.reset();
      assert.strictEqual(entry.activeRwTransactions, 0);
      assert.strictEqual(entry.state, 'CLOSED');
      assert.strictEqual((pool as any).drainingEntries.length, 0);

      await pool.close();
    });

    it('should scale down in batches up to maxRemoveChannels after sustained low load', async () => {
      const pool = new DynamicChannelPool(
        'localhost:9010',
        grpc.credentials.createInsecure(),
        {},
        {
          minChannels: 2,
          maxChannels: 8,
          minRpcPerChannel: 2,
          maxRpcPerChannel: 8,
          maxRemoveChannels: 3,
        },
      );

      // Manually expand pool to 8 active entries
      while ((pool as any).activeEntries.length < 8) {
        (pool as any).activeEntries.push((pool as any).createEntry());
      }
      assert.strictEqual(pool.activeCount, 8);

      // Debouncing requires 3 consecutive low-load cycles
      (pool as any).evaluateScaleDown();
      assert.strictEqual(pool.activeCount, 8);
      assert.strictEqual((pool as any).consecutiveLowLoadChecks, 1);

      (pool as any).evaluateScaleDown();
      assert.strictEqual(pool.activeCount, 8);
      assert.strictEqual((pool as any).consecutiveLowLoadChecks, 2);

      // 3rd low-load cycle triggers batched scale-down:
      // desiredChannels = max(2, ceil(0 / 5)) = 2.
      // excess = 8 - 2 = 6.
      // maxRemoveChannels = 3.
      // Drains 3 channels in this cycle.
      (pool as any).evaluateScaleDown();
      assert.strictEqual(pool.activeCount, 5);
      assert.strictEqual((pool as any).consecutiveLowLoadChecks, 0);

      // Next 3 low-load cycles drain remaining 3 excess channels down to minChannels = 2
      (pool as any).evaluateScaleDown();
      (pool as any).evaluateScaleDown();
      (pool as any).evaluateScaleDown();
      assert.strictEqual(pool.activeCount, 2);

      // Subsequent cycles do not scale down below minChannels
      (pool as any).evaluateScaleDown();
      (pool as any).evaluateScaleDown();
      (pool as any).evaluateScaleDown();
      assert.strictEqual(pool.activeCount, 2);

      await pool.close();
    });

    it('should prioritize draining channels with lower in-flight RPCs, fewer R/W transactions, and newer creation time', async () => {
      const pool = new DynamicChannelPool(
        'localhost:9010',
        grpc.credentials.createInsecure(),
        {},
        {
          minChannels: 1,
          maxChannels: 4,
          maxRemoveChannels: 2,
        },
      );

      const entries: ChannelEntry[] = (pool as any).activeEntries;
      while (entries.length < 4) {
        entries.push((pool as any).createEntry());
      }

      // Entry 0: high in-flight load (preserved)
      const busyChannel = entries[0];
      busyChannel.inFlightRpcs = 5;
      busyChannel.activeRwTransactions = 0;
      busyChannel.createdAt = 1000;

      // Entry 1: 0 in-flight, but active R/W transaction (preserved over entries with 0 transactions)
      const rwPinnedChannel = entries[1];
      rwPinnedChannel.inFlightRpcs = 0;
      rwPinnedChannel.activeRwTransactions = 1;
      rwPinnedChannel.createdAt = 2000;

      // Entry 2: 0 in-flight, 0 R/W transaction, older (createdAt = 3000)
      const olderIdleChannel = entries[2];
      olderIdleChannel.inFlightRpcs = 0;
      olderIdleChannel.activeRwTransactions = 0;
      olderIdleChannel.createdAt = 3000;

      // Entry 3: 0 in-flight, 0 R/W transaction, newer (createdAt = 4000) (top drain candidate)
      const newerIdleChannel = entries[3];
      newerIdleChannel.inFlightRpcs = 0;
      newerIdleChannel.activeRwTransactions = 0;
      newerIdleChannel.createdAt = 4000;

      // Trigger scale-down of 2 channels (maxRemoveChannels = 2)
      (pool as any).consecutiveLowLoadChecks = 2;
      (pool as any).evaluateScaleDown();

      // Exactly 2 channels removed: newerIdleChannel and olderIdleChannel
      assert.strictEqual(pool.activeCount, 2);
      assert.strictEqual(entries.includes(busyChannel), true);
      assert.strictEqual(entries.includes(rwPinnedChannel), true);
      assert.strictEqual(entries.includes(olderIdleChannel), false);
      assert.strictEqual(entries.includes(newerIdleChannel), false);

      await pool.close();
    });

    it('should prefer draining newer channels over older warm channels when load is tied', async () => {
      const pool = new DynamicChannelPool(
        'localhost:9010',
        grpc.credentials.createInsecure(),
        {},
        {
          minChannels: 2,
          maxChannels: 4,
          maxRemoveChannels: 1,
        },
      );

      const entries: ChannelEntry[] = (pool as any).activeEntries;
      while (entries.length < 3) {
        entries.push((pool as any).createEntry());
      }

      const warmOldChannel = entries[0];
      warmOldChannel.inFlightRpcs = 0;
      warmOldChannel.activeRwTransactions = 0;
      warmOldChannel.createdAt = 1000;

      const warmMidChannel = entries[1];
      warmMidChannel.inFlightRpcs = 0;
      warmMidChannel.activeRwTransactions = 0;
      warmMidChannel.createdAt = 2000;

      const freshNewChannel = entries[2];
      freshNewChannel.inFlightRpcs = 0;
      freshNewChannel.activeRwTransactions = 0;
      freshNewChannel.createdAt = 3000;

      (pool as any).consecutiveLowLoadChecks = 2;
      (pool as any).evaluateScaleDown();

      // Only 1 channel removed (maxRemoveChannels = 1), and it must be the newest channel
      assert.strictEqual(pool.activeCount, 2);
      assert.strictEqual(entries.includes(warmOldChannel), true);
      assert.strictEqual(entries.includes(warmMidChannel), true);
      assert.strictEqual(entries.includes(freshNewChannel), false);

      await pool.close();
    });

    it('should allocate logical channel IDs in range [1, poolSize] and recycle lowest available slots', async () => {
      const pool = new DynamicChannelPool(
        'localhost:9010',
        grpc.credentials.createInsecure(),
        {},
        {
          minChannels: 2,
          maxChannels: 6,
        },
      );

      // Initially minChannels = 2, IDs should be 1 and 2
      const active: ChannelEntry[] = (pool as any).activeEntries;
      assert.strictEqual(active.length, 2);
      assert.strictEqual(active[0].id, 1);
      assert.strictEqual(active[1].id, 2);

      // Adding 2 more channels allocates slots 3 and 4
      const entry3 = (pool as any).createEntry();
      active.push(entry3);
      assert.strictEqual(entry3.id, 3);

      const entry4 = (pool as any).createEntry();
      active.push(entry4);
      assert.strictEqual(entry4.id, 4);

      // Drain and close entry 2 (slot 2 is freed)
      const entry2 = active[1];
      active.splice(1, 1);
      entry2.state = 'CLOSED';
      entry2.channel.close();

      // Next channel allocation should recycle the lowest available slot (slot 2)
      const recycledEntry = (pool as any).createEntry();
      active.push(recycledEntry);
      assert.strictEqual(recycledEntry.id, 2);

      // Verify slot held by an unclosed draining channel is not reused
      // Drain entry 3 but keep it DRAINING (e.g. in-flight RPC)
      active.splice(1, 1); // removes entry3
      entry3.state = 'DRAINING';
      (pool as any).drainingEntries.push(entry3);

      // Next channel allocation: slots 1, 2, 4 are active, slot 3 is draining
      // Slot 3 must NOT be reused while still draining; should allocate slot 5
      const overflowEntry = (pool as any).createEntry();
      active.push(overflowEntry);
      assert.strictEqual(overflowEntry.id, 5);

      // Now entry 3 finishes draining and is closed
      entry3.state = 'CLOSED';
      entry3.channel.close();

      // Next channel allocation should now recycle slot 3
      const recycledEntry3 = (pool as any).createEntry();
      active.push(recycledEntry3);
      assert.strictEqual(recycledEntry3.id, 3);

      await pool.close();
    });

    it('should throw when acquiring from closed pool and report SHUTDOWN connectivity state', async () => {
      const pool = new DynamicChannelPool(
        'localhost:9010',
        grpc.credentials.createInsecure(),
        {},
        {minChannels: 2},
      );
      await pool.close();
      assert.throws(() => pool.acquire(), /Channel pool is closed\./);
      assert.strictEqual(
        pool.getConnectivityState(),
        grpc.connectivityState.SHUTDOWN,
      );
    });

    it('should report TRANSIENT_FAILURE connectivity state when channel fails and none are ready or connecting', async () => {
      const pool = new DynamicChannelPool(
        'localhost:9010',
        grpc.credentials.createInsecure(),
        {},
        {minChannels: 2},
      );
      const activeEntries = (pool as any).activeEntries;
      sinon
        .stub(activeEntries[0].channel, 'getConnectivityState')
        .returns(grpc.connectivityState.TRANSIENT_FAILURE);
      sinon
        .stub(activeEntries[1].channel, 'getConnectivityState')
        .returns(grpc.connectivityState.IDLE);

      assert.strictEqual(
        pool.getConnectivityState(),
        grpc.connectivityState.TRANSIENT_FAILURE,
      );
      await pool.close();
    });

    it('should respect SPANNER_NUM_CHANNELS as initial channel count while retaining dynamic maxChannels', async () => {
      const previousEnv = process.env.SPANNER_NUM_CHANNELS;
      try {
        process.env.SPANNER_NUM_CHANNELS = '6';
        const pool = new DynamicChannelPool(
          'localhost:9010',
          grpc.credentials.createInsecure(),
          {},
        );
        assert.strictEqual(pool.size, 6);
        assert.strictEqual((pool as any).minChannels, 6);
        assert.strictEqual((pool as any).maxChannels, 256);
        await pool.close();
      } finally {
        if (previousEnv !== undefined) {
          process.env.SPANNER_NUM_CHANNELS = previousEnv;
        } else {
          delete process.env.SPANNER_NUM_CHANNELS;
        }
      }
    });

    it('should wait for pending scale-up to complete when close is called', async () => {
      let scaleUpFinished = false;
      let resolvePrime: () => void;
      const primeBlockedPromise = new Promise<void>(resolve => {
        resolvePrime = resolve;
      });

      const pool = new DynamicChannelPool(
        'localhost:9010',
        grpc.credentials.createInsecure(),
        {},
        {
          minChannels: 1,
          maxChannels: 4,
          maxRpcPerChannel: 1,
          scaleUpCooldownMs: 0,
          primeFn: async () => {
            await primeBlockedPromise;
            scaleUpFinished = true;
          },
        },
      );
      pool.setPrimeSession('projects/p/instances/i/databases/d/sessions/s');

      // Trigger scale-up
      const lease1 = pool.acquire();
      const lease2 = pool.acquire();
      assert.strictEqual((pool as any).isScalingUp, true);

      // Allow setImmediate to run so scale-up starts priming
      await new Promise(resolve => setImmediate(resolve));

      // Close pool while scale-up is running; close() should await scaleUpPromise
      const closePromise = pool.close();
      assert.strictEqual(scaleUpFinished, false);

      // Unblock primeFn
      resolvePrime!();
      await closePromise;

      assert.strictEqual(scaleUpFinished, true);
      assert.strictEqual(pool.size, 0);

      lease1.release();
      lease2.release();
    });

    it('should prioritize options.minChannels over SPANNER_NUM_CHANNELS environment variable', async () => {
      const prev = process.env.SPANNER_NUM_CHANNELS;
      try {
        process.env.SPANNER_NUM_CHANNELS = '8';
        const pool = new DynamicChannelPool(
          'localhost:9010',
          grpc.credentials.createInsecure(),
          {},
          {minChannels: 2},
        );
        assert.strictEqual((pool as any).minChannels, 2);
        assert.strictEqual(pool.activeCount, 2);
        await pool.close();
      } finally {
        if (prev !== undefined) {
          process.env.SPANNER_NUM_CHANNELS = prev;
        } else {
          delete process.env.SPANNER_NUM_CHANNELS;
        }
      }
    });

    it('should clamp minRpcPerChannel when maxRpcPerChannel is small', async () => {
      const pool1 = new DynamicChannelPool(
        'localhost:9010',
        grpc.credentials.createInsecure(),
        {},
        {maxRpcPerChannel: 1},
      );
      assert.strictEqual((pool1 as any).minRpcPerChannel, 0);
      await pool1.close();

      const pool2 = new DynamicChannelPool(
        'localhost:9010',
        grpc.credentials.createInsecure(),
        {},
        {maxRpcPerChannel: 2},
      );
      assert.strictEqual((pool2 as any).minRpcPerChannel, 1);
      await pool2.close();
    });

    it('should abort evaluateScaleDown early when isScalingUp is true or during cooldown', async () => {
      const pool = new DynamicChannelPool(
        'localhost:9010',
        grpc.credentials.createInsecure(),
        {},
        {minChannels: 1, maxChannels: 4, scaleUpCooldownMs: 60000},
      );
      while ((pool as any).activeEntries.length < 3) {
        (pool as any).activeEntries.push((pool as any).createEntry());
      }
      assert.strictEqual(pool.activeCount, 3);

      // 1. Abort when isScalingUp is true
      (pool as any).isScalingUp = true;
      (pool as any).evaluateScaleDown();
      assert.strictEqual((pool as any).consecutiveLowLoadChecks, 0);

      // 2. Abort when within cooldown
      (pool as any).isScalingUp = false;
      (pool as any).lastScaleUpTime = Date.now();
      (pool as any).evaluateScaleDown();
      assert.strictEqual((pool as any).consecutiveLowLoadChecks, 0);

      // 3. When cooldown has passed, scale-down evaluation proceeds
      (pool as any).lastScaleUpTime = Date.now() - 70000;
      (pool as any).evaluateScaleDown();
      assert.strictEqual((pool as any).consecutiveLowLoadChecks, 1);

      await pool.close();
    });

    it('should retry priming a channel up to 2 times on failure', async () => {
      let attempts = 0;
      const pool = new DynamicChannelPool(
        'localhost:9010',
        grpc.credentials.createInsecure(),
        {},
        {
          minChannels: 1,
          primeFn: async () => {
            attempts++;
            if (attempts === 1) {
              throw new Error('Transient network error');
            }
          },
        },
      );
      pool.setPrimeSession('projects/p/instances/i/databases/d/sessions/s');

      const entry = (pool as any).createEntry();
      await (pool as any).primeChannel(entry);
      assert.strictEqual(attempts, 2);

      await pool.close();
    });

    it('should return channels from getChannels() including draining channels', async () => {
      const pool = new DynamicChannelPool(
        'localhost:9010',
        grpc.credentials.createInsecure(),
        {},
        {minChannels: 2, maxChannels: 4},
      );
      const drainingEntry = (pool as any).createEntry();
      drainingEntry.state = 'DRAINING';
      (pool as any).drainingEntries.push(drainingEntry);

      const channels = pool.getChannels();
      assert.strictEqual(channels.length, 3);
      assert.ok(channels.includes(drainingEntry.channel));

      await pool.close();
    });

    it('should re-watch another active channel if watched channel shuts down during scale down while pool remains healthy', async () => {
      const pool = new DynamicChannelPool(
        'localhost:9010',
        grpc.credentials.createInsecure(),
        {},
        {minChannels: 2, maxChannels: 4},
      );
      const activeEntries = (pool as any).activeEntries;
      assert.strictEqual(activeEntries.length, 2);

      const firstChannel = activeEntries[0].channel;
      const secondChannel = activeEntries[1].channel;

      let firstChannelCallback: ((error?: Error) => void) | undefined;
      sinon
        .stub(firstChannel, 'watchConnectivityState')
        .callsFake((_state: any, _deadline: any, callback: any) => {
          firstChannelCallback = callback;
        });

      let secondChannelWatched = false;
      sinon
        .stub(secondChannel, 'watchConnectivityState')
        .callsFake((_state: any, _deadline: any, callback: any) => {
          secondChannelWatched = true;
          callback();
        });

      sinon
        .stub(secondChannel, 'getConnectivityState')
        .returns(grpc.connectivityState.READY);

      let poolCallbackFired = false;
      const watchPromise = new Promise<void>((resolve, reject) => {
        pool.watchConnectivityState(
          grpc.connectivityState.READY,
          Infinity,
          error => {
            if (error) {
              reject(error);
            } else {
              poolCallbackFired = true;
              resolve();
            }
          },
        );
      });

      // Simulate first channel transitioning to SHUTDOWN due to scale down
      sinon
        .stub(firstChannel, 'getConnectivityState')
        .returns(grpc.connectivityState.SHUTDOWN);
      // Remove first channel from activeEntries (simulating drain/removal)
      activeEntries.shift();

      // Trigger first channel watch callback without error
      firstChannelCallback!();
      await watchPromise;

      assert.strictEqual(poolCallbackFired, true);
      assert.strictEqual(secondChannelWatched, true);
      await pool.close();
    });

    it('should notify caller when watched channel shutdown causes pool connectivity state to change', async () => {
      const pool = new DynamicChannelPool(
        'localhost:9010',
        grpc.credentials.createInsecure(),
        {},
        {minChannels: 1, maxChannels: 2},
      );
      const activeEntries = (pool as any).activeEntries;
      const channel = activeEntries[0].channel;

      let channelCallback: ((error?: Error) => void) | undefined;
      sinon
        .stub(channel, 'watchConnectivityState')
        .callsFake((_state: any, _deadline: any, callback: any) => {
          channelCallback = callback;
        });

      const stateStub = sinon
        .stub(channel, 'getConnectivityState')
        .returns(grpc.connectivityState.READY);

      const watchPromise = new Promise<void>((resolve, reject) => {
        pool.watchConnectivityState(
          grpc.connectivityState.READY,
          Infinity,
          error => {
            if (error) {
              reject(error);
            } else {
              resolve();
            }
          },
        );
      });

      // Channel shuts down and pool state changes from READY to SHUTDOWN
      stateStub.returns(grpc.connectivityState.SHUTDOWN);
      activeEntries.length = 0;
      channelCallback!();
      await watchPromise;
      await pool.close();
    });

    it('should skip SHUTDOWN channels at head of activeEntries and watch a non-SHUTDOWN channel', async () => {
      const pool = new DynamicChannelPool(
        'localhost:9010',
        grpc.credentials.createInsecure(),
        {},
        {minChannels: 2, maxChannels: 4},
      );
      const activeEntries = (pool as any).activeEntries;
      assert.strictEqual(activeEntries.length, 2);

      const firstChannel = activeEntries[0].channel;
      const secondChannel = activeEntries[1].channel;

      // First channel is already in SHUTDOWN
      sinon
        .stub(firstChannel, 'getConnectivityState')
        .returns(grpc.connectivityState.SHUTDOWN);
      const firstWatchSpy = sinon.spy(firstChannel, 'watchConnectivityState');

      let secondChannelCallback: any;
      sinon
        .stub(secondChannel, 'watchConnectivityState')
        .callsFake((_state: any, _deadline: any, callback: any) => {
          secondChannelCallback = callback;
        });
      sinon
        .stub(secondChannel, 'getConnectivityState')
        .returns(grpc.connectivityState.READY);

      let poolCallbackFired = false;
      const watchPromise = new Promise<void>((resolve, reject) => {
        pool.watchConnectivityState(
          grpc.connectivityState.READY,
          Infinity,
          error => {
            if (error) {
              reject(error);
            } else {
              poolCallbackFired = true;
              resolve();
            }
          },
        );
      });

      // First channel should NOT have been watched because it was in SHUTDOWN
      assert.strictEqual(firstWatchSpy.called, false);
      assert.ok(secondChannelCallback);

      // Firing second channel callback resolves the watch
      secondChannelCallback();
      await watchPromise;

      assert.strictEqual(poolCallbackFired, true);
      await pool.close();
    });

    it('should invoke callback asynchronously with error when dynamic pool has no active channels', done => {
      const pool = new DynamicChannelPool(
        'localhost:9010',
        grpc.credentials.createInsecure(),
        {},
        {minChannels: 1, maxChannels: 2},
      );
      (pool as any).activeEntries = [];
      let synchronous = true;
      pool.watchConnectivityState(
        grpc.connectivityState.READY,
        Infinity,
        error => {
          assert.strictEqual(synchronous, false);
          assert.strictEqual(error?.message, 'No channels in pool.');
          done();
        },
      );
      synchronous = false;
    });

    it('should invoke callback asynchronously without error when all active channels are in SHUTDOWN state', done => {
      const pool = new DynamicChannelPool(
        'localhost:9010',
        grpc.credentials.createInsecure(),
        {},
        {minChannels: 1, maxChannels: 2},
      );
      const activeEntries = (pool as any).activeEntries;
      sinon
        .stub(activeEntries[0].channel, 'getConnectivityState')
        .returns(grpc.connectivityState.SHUTDOWN);
      let synchronous = true;
      pool.watchConnectivityState(
        grpc.connectivityState.READY,
        Infinity,
        error => {
          assert.strictEqual(synchronous, false);
          assert.strictEqual(error, undefined);
          done();
        },
      );
      synchronous = false;
    });
  });

  describe('createCallInvocationTransformer', () => {
    it('should route call to acquired channel and append channel id to request id header', done => {
      const fakeChannel: any = {
        createCall: sinon.stub(),
      };
      const fakeEntry: ChannelEntry = {
        id: 3,
        channel: fakeChannel,
        inFlightRpcs: 0,
        activeRwTransactions: 0,
        state: 'ACTIVE',
        lastActivity: Date.now(),
      };

      const mockPool: ChannelPool = {
        acquire: sinon.stub().returns({
          entry: fakeEntry,
          release: sinon.stub(),
        }),
        size: 1,
        activeCount: 1,
        close: async () => {},
        getConnectivityState: () => grpc.connectivityState.READY,
        watchConnectivityState: () => {},
        getTarget: () => 'localhost:9010',
        getChannels: () => [fakeChannel],
      };

      const transformer = createCallInvocationTransformer(mockPool);
      const metadata = new grpc.Metadata();
      metadata.set('x-goog-spanner-request-id', '1.abcd1234.1.1.5.1');

      const callProperties: any = {
        metadata,
        callOptions: {},
        argument: {},
        methodDefinition: {path: '/google.spanner.v1.Spanner/ExecuteSql'},
      };

      const transformed = transformer(callProperties);

      assert.strictEqual(transformed.channel, fakeChannel);
      assert.strictEqual(
        metadata.get('x-goog-spanner-request-id')[0],
        '1.abcd1234.1.3.5.1',
      );
      assert.strictEqual(transformed.callOptions.interceptors!.length, 1);

      done();
    });
  });

  describe('ChannelPoolChannelAdapter', () => {
    it('should release acquired lease when call completes with status', () => {
      const pool = new StaticChannelPool(
        'localhost:9010',
        grpc.credentials.createInsecure(),
        {},
        {numChannels: 1},
      );
      const adapter = new ChannelPoolChannelAdapter(pool);
      const entry = (pool as any).entries[0];
      assert.strictEqual(entry.inFlightRpcs, 0);

      const fakeCall = {
        start: sinon.stub(),
        cancel: sinon.stub(),
      };
      sinon.stub(entry.channel as any, 'createCall').returns(fakeCall);

      const interceptedCall = adapter.createCall(
        '/google.spanner.v1.Spanner/BatchCreateSessions',
        Infinity,
        'localhost:9010',
        null,
        0,
      );

      assert.strictEqual(entry.inFlightRpcs, 1);

      const fakeListener = {
        onReceiveStatus: sinon.stub(),
      };
      interceptedCall.start(new grpc.Metadata(), fakeListener);

      const passedListener = fakeCall.start.firstCall.args[1];
      passedListener.onReceiveStatus({code: grpc.status.OK, details: 'OK'});

      assert.strictEqual(entry.inFlightRpcs, 0);
      assert.strictEqual(fakeListener.onReceiveStatus.calledOnce, true);
    });

    it('should release acquired lease when call is cancelled', () => {
      const pool = new StaticChannelPool(
        'localhost:9010',
        grpc.credentials.createInsecure(),
        {},
        {numChannels: 1},
      );
      const adapter = new ChannelPoolChannelAdapter(pool);
      const entry = (pool as any).entries[0];
      assert.strictEqual(entry.inFlightRpcs, 0);

      const fakeCall = {
        start: sinon.stub(),
        cancelWithStatus: sinon.stub(),
      };
      sinon.stub(entry.channel as any, 'createCall').returns(fakeCall);

      const interceptedCall = adapter.createCall(
        '/google.spanner.v1.Spanner/BatchCreateSessions',
        Infinity,
        'localhost:9010',
        null,
        0,
      );

      assert.strictEqual(entry.inFlightRpcs, 1);

      interceptedCall.cancelWithStatus(grpc.status.CANCELLED, 'Cancelled');
      assert.strictEqual(entry.inFlightRpcs, 0);
      assert.strictEqual(fakeCall.cancelWithStatus.calledOnce, true);
    });

    it('should delegate sendMessage and halfClose on InterceptingCall', () => {
      const pool = new StaticChannelPool(
        'localhost:9010',
        grpc.credentials.createInsecure(),
        {},
        {numChannels: 1},
      );
      const adapter = new ChannelPoolChannelAdapter(pool);
      const entry = (pool as any).entries[0];

      const fakeCall = {
        start: sinon.stub(),
        sendMessageWithContext: sinon.stub(),
        halfClose: sinon.stub(),
      };
      sinon.stub(entry.channel as any, 'createCall').returns(fakeCall);

      const interceptedCall = adapter.createCall(
        '/google.spanner.v1.Spanner/ExecuteStreamingSql',
        Infinity,
        'localhost:9010',
        null,
        0,
      );

      interceptedCall.sendMessage({query: 'SELECT 1'});
      assert.strictEqual(fakeCall.sendMessageWithContext.calledOnce, true);

      interceptedCall.halfClose();
      assert.strictEqual(fakeCall.halfClose.calledOnce, true);
    });

    it('should include both active and draining channels in channelRefs for DynamicChannelPool', async () => {
      const pool = new DynamicChannelPool(
        'localhost:9010',
        grpc.credentials.createInsecure(),
        {},
        {minChannels: 2, maxChannels: 4},
      );
      const adapter = new ChannelPoolChannelAdapter(pool);

      assert.strictEqual(adapter.channelRefs.length, 2);

      // Simulate a draining channel
      const drainingEntry = (pool as any).createEntry();
      drainingEntry.state = 'DRAINING';
      (pool as any).drainingEntries.push(drainingEntry);

      assert.strictEqual(adapter.channelRefs.length, 3);
      assert.strictEqual(
        adapter.channelRefs.some(ref => ref.channel === drainingEntry.channel),
        true,
      );

      await pool.close();
    });
  });

  describe('Mock Spanner Channel Pool Integration', () => {
    let server: grpc.Server;
    let spannerMock: mock.MockSpanner;
    let port: number;

    before(async () => {
      server = new grpc.Server();
      spannerMock = mock.createMockSpanner(server);
      port = await new Promise((resolve, reject) => {
        server.bindAsync(
          'localhost:0',
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
      spannerMock.putStatementResult(
        'SELECT 1',
        mock.StatementResult.resultSet(mock.createSelect1ResultSet()),
      );
    });

    after(async () => {
      server.tryShutdown(() => {});
    });

    it('should default to StaticChannelPool with 4 channels when no channel pool options are specified', async () => {
      const spanner = new Spanner({
        projectId: 'test-project',
        servicePath: 'localhost',
        port,
        sslCreds: grpc.credentials.createInsecure(),
      });

      const database = spanner.instance('instance').database('database');
      const [rows] = await database.run('SELECT 1');
      assert.strictEqual(rows.length, 1);
      assert(spanner.channelPool);
      assert(spanner.channelPool instanceof StaticChannelPool);
      assert.strictEqual(spanner.channelPool.size, 4);

      await spanner.close();
    });

    it('should default to StaticChannelPool with SPANNER_NUM_CHANNELS channels when env var is set', async () => {
      const previousEnv = process.env.SPANNER_NUM_CHANNELS;
      process.env.SPANNER_NUM_CHANNELS = '6';
      try {
        const spanner = new Spanner({
          projectId: 'test-project',
          servicePath: 'localhost',
          port,
          sslCreds: grpc.credentials.createInsecure(),
        });

        const database = spanner.instance('instance').database('database');
        const [rows] = await database.run('SELECT 1');
        assert.strictEqual(rows.length, 1);
        assert(spanner.channelPool);
        assert(spanner.channelPool instanceof StaticChannelPool);
        assert.strictEqual(spanner.channelPool.size, 6);

        await spanner.close();
      } finally {
        if (previousEnv !== undefined) {
          process.env.SPANNER_NUM_CHANNELS = previousEnv;
        } else {
          delete process.env.SPANNER_NUM_CHANNELS;
        }
      }
    });

    it('should allow falling back to legacy grpc-gcp pool via channelPool option and execute queries', async () => {
      const spanner = new Spanner({
        projectId: 'test-project',
        servicePath: 'localhost',
        port,
        sslCreds: grpc.credentials.createInsecure(),
        channelPool: 'grpc-gcp',
      });

      assert.strictEqual(spanner.channelPool, undefined);
      assert.strictEqual(spanner.isLegacyChannelPool, true);

      const database = spanner.instance('instance').database('database');
      const [rows] = await database.run('SELECT 1');
      assert.strictEqual(rows.length, 1);

      await spanner.close();
    });

    it('should defensively normalize uppercase channelPool string options', async () => {
      const spannerLegacy = new Spanner({
        projectId: 'test-project',
        servicePath: 'localhost',
        port,
        sslCreds: grpc.credentials.createInsecure(),
        channelPool: 'GRPC-GCP',
      });

      assert.strictEqual(spannerLegacy.channelPool, undefined);
      assert.strictEqual(spannerLegacy.isLegacyChannelPool, true);
      await spannerLegacy.close();

      const spannerDynamic = new Spanner({
        projectId: 'test-project',
        servicePath: 'localhost',
        port,
        sslCreds: grpc.credentials.createInsecure(),
        channelPool: 'DYNAMIC',
      });

      const databaseDynamic = spannerDynamic
        .instance('instance')
        .database('database');
      const [rows] = await databaseDynamic.run('SELECT 1');
      assert.strictEqual(rows.length, 1);
      assert(spannerDynamic.channelPool);
      assert(spannerDynamic.channelPool instanceof DynamicChannelPool);
      assert.strictEqual(spannerDynamic.isLegacyChannelPool, false);
      await spannerDynamic.close();
    });

    it('should initialize StaticChannelPool and execute queries', async () => {
      const spanner = new Spanner({
        projectId: 'test-project',
        servicePath: 'localhost',
        port,
        sslCreds: grpc.credentials.createInsecure(),
        channelPool: {
          type: 'static',
          numChannels: 4,
        },
      });

      const database = spanner.instance('instance').database('database');
      const [rows] = await database.run('SELECT 1');
      assert.strictEqual(rows.length, 1);
      assert(spanner.channelPool);
      assert.strictEqual(spanner.channelPool.size, 4);

      await spanner.close();
    });

    it('should initialize DynamicChannelPool, execute queries and support scale-up', async () => {
      const spanner = new Spanner({
        projectId: 'test-project',
        servicePath: 'localhost',
        port,
        sslCreds: grpc.credentials.createInsecure(),
        channelPool: {
          type: 'dynamic',
          minChannels: 2,
          maxChannels: 6,
        },
      });

      const database = spanner.instance('instance').database('database');
      const [rows] = await database.run('SELECT 1');
      assert.strictEqual(rows.length, 1);
      assert(spanner.channelPool);
      assert.strictEqual(spanner.channelPool.size, 2);

      await spanner.close();
    });

    it('should activate dynamic channel pool via SPANNER_CHANNEL_POOL environment variable', async () => {
      process.env.SPANNER_CHANNEL_POOL = 'dynamic';
      process.env.SPANNER_NUM_CHANNELS = '3';
      try {
        const spanner = new Spanner({
          projectId: 'test-project',
          servicePath: 'localhost',
          port,
          sslCreds: grpc.credentials.createInsecure(),
        });

        const database = spanner.instance('instance').database('database');
        const [rows] = await database.run('SELECT 1');
        assert.strictEqual(rows.length, 1);
        assert(spanner.channelPool);
        assert.strictEqual(spanner.channelPool.size, 3);

        await spanner.close();
      } finally {
        delete process.env.SPANNER_CHANNEL_POOL;
        delete process.env.SPANNER_NUM_CHANNELS;
      }
    });

    it('should prefer options.channelPool over SPANNER_CHANNEL_POOL environment variable', async () => {
      process.env.SPANNER_CHANNEL_POOL = 'dynamic';
      try {
        const spanner = new Spanner({
          projectId: 'test-project',
          servicePath: 'localhost',
          port,
          sslCreds: grpc.credentials.createInsecure(),
          channelPool: {
            type: 'static',
            numChannels: 2,
          },
        });

        const database = spanner.instance('instance').database('database');
        const [rows] = await database.run('SELECT 1');
        assert.strictEqual(rows.length, 1);
        assert(spanner.channelPool);
        assert(spanner.channelPool instanceof StaticChannelPool);
        assert.strictEqual(spanner.channelPool.size, 2);

        await spanner.close();
      } finally {
        delete process.env.SPANNER_CHANNEL_POOL;
      }
    });

    it('should route all RPCs in a read/write transaction to the same channel', async () => {
      const spanner = new Spanner({
        projectId: 'test-project',
        servicePath: 'localhost',
        port,
        sslCreds: grpc.credentials.createInsecure(),
        channelPool: {
          type: 'static',
          numChannels: 4,
        },
      });

      const database = spanner.instance('instance').database('database');
      spannerMock.resetRequests();

      await database.runTransactionAsync(async transaction => {
        const [rows1] = await transaction.run('SELECT 1');
        assert.strictEqual(rows1.length, 1);
        const [rows2] = await transaction.run('SELECT 1');
        assert.strictEqual(rows2.length, 1);
        await transaction.commit();
      });

      const requests = spannerMock.getRequests();
      const metadataList = spannerMock.getMetadata();

      const transactionalChannelIds: string[] = [];
      for (let index = 0; index < requests.length; index++) {
        const request = requests[index] as any;
        if (
          request.sql === 'SELECT 1' ||
          request.mutations !== undefined ||
          request.transactionId !== undefined
        ) {
          const channelId = extractChannelId(metadataList[index]);
          if (channelId) {
            transactionalChannelIds.push(channelId);
          }
        }
      }

      assert.strictEqual(transactionalChannelIds.length >= 3, true);

      const uniqueChannels = new Set(transactionalChannelIds);
      assert.strictEqual(
        uniqueChannels.size,
        1,
        `All RPCs in the read/write transaction should use the same channel, but used: ${transactionalChannelIds.join(', ')}`,
      );

      await spanner.close();
    });

    it('should distribute non-transactional RPCs across multiple channels', async () => {
      const spanner = new Spanner({
        projectId: 'test-project',
        servicePath: 'localhost',
        port,
        sslCreds: grpc.credentials.createInsecure(),
        channelPool: {
          type: 'static',
          numChannels: 4,
        },
      });

      const database = spanner.instance('instance').database('database');
      spannerMock.resetRequests();

      // Run multiple concurrent queries to exercise P2C channel distribution
      const queryPromises: Array<Promise<any>> = [];
      for (let index = 0; index < 40; index++) {
        queryPromises.push(database.run('SELECT 1'));
      }
      await Promise.all(queryPromises);

      const requests = spannerMock.getRequests();
      const metadataList = spannerMock.getMetadata();

      const queryChannelIds: string[] = [];
      for (let index = 0; index < requests.length; index++) {
        const request = requests[index] as any;
        if (request.sql === 'SELECT 1') {
          const channelId = extractChannelId(metadataList[index]);
          if (channelId) {
            queryChannelIds.push(channelId);
          }
        }
      }

      assert.strictEqual(queryChannelIds.length, 40);

      const uniqueChannels = new Set(queryChannelIds);
      assert.strictEqual(
        uniqueChannels.size,
        4,
        `Expected non-transactional queries to be distributed across all 4 channels, but got ${uniqueChannels.size}: ${Array.from(uniqueChannels).join(', ')}`,
      );

      await spanner.close();
    });

    it('should distribute read/write transactions across channels while keeping each transaction pinned', async () => {
      const spanner = new Spanner({
        projectId: 'test-project',
        servicePath: 'localhost',
        port,
        sslCreds: grpc.credentials.createInsecure(),
        channelPool: {
          type: 'static',
          numChannels: 4,
        },
      });

      const database = spanner.instance('instance').database('database');
      spannerMock.resetRequests();

      // Run concurrent read/write transactions to verify P2C distributes transactions
      // across channels, while each individual transaction pins all its RPCs to one channel
      const transactionCount = 8;
      const transactionPromises: Array<Promise<string>> = [];

      for (
        let transactionIndex = 0;
        transactionIndex < transactionCount;
        transactionIndex++
      ) {
        const transactionTag = `tag-tx-${transactionIndex}`;
        transactionPromises.push(
          database.runTransactionAsync(
            {requestOptions: {transactionTag}},
            async transaction => {
              const [rows1] = await transaction.run('SELECT 1');
              assert.strictEqual(rows1.length, 1);
              const [rows2] = await transaction.run('SELECT 1');
              assert.strictEqual(rows2.length, 1);

              // While active, transaction must be pinned to a channel
              assert(transaction.affinity);
              assert(transaction.affinity.pinnedEntry);
              const pinnedChannelId = String(
                transaction.affinity.pinnedEntry.id,
              );

              await transaction.commit();

              // After commit, transaction affinity must be reset
              assert.strictEqual(transaction.affinity.pinnedEntry, null);

              return pinnedChannelId;
            },
          ),
        );
      }

      const assignedChannels = await Promise.all(transactionPromises);

      // Verify transactions are distributed across multiple channels
      const distinctAssignedChannels = new Set(assignedChannels);
      assert.strictEqual(
        distinctAssignedChannels.size > 1,
        true,
        `Expected concurrent transactions to be distributed across multiple channels, but only used: ${Array.from(distinctAssignedChannels).join(', ')}`,
      );

      // Also verify at the gRPC metadata level: all RPCs belonging to the same transaction used the same channel
      const requests = spannerMock.getRequests();
      const metadataList = spannerMock.getMetadata();
      const transactionTagToChannels = new Map<string, string[]>();

      for (let index = 0; index < requests.length; index++) {
        const request = requests[index] as any;
        const tag = request.requestOptions?.transactionTag;
        if (
          tag &&
          (request.sql === 'SELECT 1' ||
            request.mutations !== undefined ||
            request.transactionId !== undefined)
        ) {
          const channelId = extractChannelId(metadataList[index]);
          if (channelId) {
            if (!transactionTagToChannels.has(tag)) {
              transactionTagToChannels.set(tag, []);
            }
            transactionTagToChannels.get(tag)!.push(channelId);
          }
        }
      }

      assert.strictEqual(transactionTagToChannels.size, transactionCount);
      for (const [tag, channelIds] of transactionTagToChannels.entries()) {
        assert.strictEqual(
          channelIds.length >= 3,
          true,
          `Transaction ${tag} should have at least 3 RPCs (2 queries and commit)`,
        );
        const uniqueChannelsForTransaction = new Set(channelIds);
        assert.strictEqual(
          uniqueChannelsForTransaction.size,
          1,
          `All RPCs for transaction ${tag} must use the same channel, but used: ${channelIds.join(', ')}`,
        );
      }

      await spanner.close();
    });

    it('should not close user-provided ChannelPool instance on spanner.close()', async () => {
      const userPool = new StaticChannelPool(
        `localhost:${port}`,
        grpc.credentials.createInsecure(),
        {},
        {numChannels: 2},
      );
      const closeSpy = sinon.spy(userPool, 'close');

      const spanner = new Spanner({
        projectId: 'test-project',
        servicePath: 'localhost',
        port,
        sslCreds: grpc.credentials.createInsecure(),
        channelPool: userPool,
      });

      const database = spanner.instance('instance').database('database');
      await database.run('SELECT 1');

      await spanner.close();
      assert.strictEqual(closeSpy.called, false);
      assert.strictEqual(userPool.size, 2);

      await userPool.close();
      assert.strictEqual(closeSpy.calledOnce, true);
    });

    it('should close internally created ChannelPool on spanner.close()', async () => {
      const spanner = new Spanner({
        projectId: 'test-project',
        servicePath: 'localhost',
        port,
        sslCreds: grpc.credentials.createInsecure(),
        channelPool: {type: 'static', numChannels: 2},
      });

      const database = spanner.instance('instance').database('database');
      await database.run('SELECT 1');

      const internalPool = (spanner as any).channelPool_;
      assert.ok(internalPool);
      const closeSpy = sinon.spy(internalPool, 'close');

      await spanner.close();
      assert.strictEqual(closeSpy.calledOnce, true);
    });

    it('should track in-flight RPC permits through single-use query lifecycle', async () => {
      const spanner = new Spanner({
        projectId: 'test-project',
        servicePath: 'localhost',
        port,
        sslCreds: grpc.credentials.createInsecure(),
        channelPool: {type: 'static', numChannels: 2},
      });

      const database = spanner.instance('instance').database('database');
      await database.run('SELECT 1');
      assert.strictEqual(spanner.channelPool?.totalInFlight, 0);

      // Run multiple concurrent queries and verify totalInFlight returns to 0
      const queryPromises = Array.from({length: 8}, () =>
        database.run('SELECT 1'),
      );
      await Promise.all(queryPromises);
      assert.strictEqual(spanner.channelPool?.totalInFlight, 0);

      await spanner.close();
    });

    it('should track in-flight RPC permits through single-use read lifecycle', async () => {
      spannerMock.putReadRequestResult(
        {table: 'table', keySet: {keys: []}} as any,
        mock.ReadRequestResult.resultSet(mock.createReadRequestResultSet()),
      );

      const spanner = new Spanner({
        projectId: 'test-project',
        servicePath: 'localhost',
        port,
        sslCreds: grpc.credentials.createInsecure(),
        channelPool: {type: 'static', numChannels: 2},
      });

      const database = spanner.instance('instance').database('database');
      const table = database.table('table');
      const [rows] = await table.read({keys: []});
      assert.strictEqual(rows.length, 3);
      assert.strictEqual(spanner.channelPool?.totalInFlight, 0);

      await spanner.close();
    });

    it('should immediately release in-flight permit when streaming query is destroyed early', async () => {
      spannerMock.putStatementResult(
        'SELECT * FROM large_table',
        mock.StatementResult.resultSet(mock.createLargeResultSet()),
      );

      const spanner = new Spanner({
        projectId: 'test-project',
        servicePath: 'localhost',
        port,
        sslCreds: grpc.credentials.createInsecure(),
        channelPool: {type: 'static', numChannels: 2},
      });

      const database = spanner.instance('instance').database('database');
      const [snapshot] = await database.getSnapshot();
      const stream = snapshot.runStream('SELECT * FROM large_table');

      await new Promise<void>((resolve, reject) => {
        let destroyed = false;
        stream.on('data', () => {
          if (!destroyed) {
            destroyed = true;
            stream.destroy();
          }
        });
        stream.on('error', err => {
          if (!destroyed) {
            reject(err);
          }
        });
        stream.on('close', () => {
          resolve();
        });
      });

      // Allow microtasks/setImmediate for gRPC cancellation to settle
      const deadline = Date.now() + 1000;
      while (
        spanner.channelPool?.totalInFlight !== 0 &&
        Date.now() < deadline
      ) {
        await new Promise(resolve => setImmediate(resolve));
      }

      assert.strictEqual(
        spanner.channelPool?.totalInFlight,
        0,
        'In-flight permits must be completely released after stream.destroy()',
      );

      snapshot.end();
      await spanner.close();
    });

    it('should immediately release in-flight permit when streaming query encounters an error', async () => {
      spannerMock.putStatementResult(
        'SELECT * FROM failing_table',
        mock.StatementResult.error(new Error('Simulated query failure')),
      );

      const spanner = new Spanner({
        projectId: 'test-project',
        servicePath: 'localhost',
        port,
        sslCreds: grpc.credentials.createInsecure(),
        channelPool: {type: 'static', numChannels: 2},
      });

      const database = spanner.instance('instance').database('database');

      let queryError: Error | undefined;
      try {
        await database.run('SELECT * FROM failing_table');
      } catch (err) {
        queryError = err as Error;
      }
      assert(queryError, 'Query should have thrown an error');

      const deadline = Date.now() + 1000;
      while (
        spanner.channelPool?.totalInFlight !== 0 &&
        Date.now() < deadline
      ) {
        await new Promise(resolve => setImmediate(resolve));
      }

      assert.strictEqual(
        spanner.channelPool?.totalInFlight,
        0,
        'In-flight permits must be 0 after query error',
      );

      await spanner.close();
    });

    it('should pin read-only snapshot transaction queries to the same channel across statements', async () => {
      const spanner = new Spanner({
        projectId: 'test-project',
        servicePath: 'localhost',
        port,
        sslCreds: grpc.credentials.createInsecure(),
        channelPool: {type: 'static', numChannels: 4},
      });

      const database = spanner.instance('instance').database('database');
      const [snapshot] = await database.getSnapshot();
      spannerMock.resetRequests();

      const [rows1] = await snapshot.run('SELECT 1');
      assert.strictEqual(rows1.length, 1);
      const [rows2] = await snapshot.run('SELECT 1');
      assert.strictEqual(rows2.length, 1);
      const [rows3] = await snapshot.run('SELECT 1');
      assert.strictEqual(rows3.length, 1);

      const metadataList = spannerMock.getMetadata();
      const channelIds: string[] = [];
      for (const metadata of metadataList) {
        const channelId = extractChannelId(metadata);
        if (channelId) {
          channelIds.push(channelId);
        }
      }

      assert.strictEqual(
        channelIds.length,
        3,
        'Snapshot must have executed 3 queries',
      );
      const uniqueChannels = new Set(channelIds);
      assert.strictEqual(
        uniqueChannels.size,
        1,
        `All queries in read-only snapshot must use the same pinned channel, got ${Array.from(uniqueChannels).join(', ')}`,
      );

      snapshot.end();
      assert.strictEqual(spanner.channelPool?.totalInFlight, 0);

      await spanner.close();
    });

    it('should release activeRwTransactions and in-flight permits when read/write transaction rolls back', async () => {
      const spanner = new Spanner({
        projectId: 'test-project',
        servicePath: 'localhost',
        port,
        sslCreds: grpc.credentials.createInsecure(),
        channelPool: {type: 'static', numChannels: 4},
      });

      const database = spanner.instance('instance').database('database');
      await database.runTransactionAsync(async transaction => {
        const [rows] = await transaction.run('SELECT 1');
        assert.strictEqual(rows.length, 1);
        assert.strictEqual(spanner.channelPool?.totalActiveRw, 1);
        await transaction.rollback();
      });

      const deadline = Date.now() + 1000;
      while (
        (spanner.channelPool?.totalActiveRw !== 0 ||
          spanner.channelPool?.totalInFlight !== 0) &&
        Date.now() < deadline
      ) {
        await new Promise(resolve => setImmediate(resolve));
      }

      assert.strictEqual(
        spanner.channelPool?.totalActiveRw,
        0,
        'activeRwTransactions must be 0 after rollback',
      );
      assert.strictEqual(
        spanner.channelPool?.totalInFlight,
        0,
        'totalInFlight must be 0 after rollback',
      );

      await spanner.close();
    });

    it('should release activeRwTransactions and in-flight permits when read/write transaction encounters an error', async () => {
      const spanner = new Spanner({
        projectId: 'test-project',
        servicePath: 'localhost',
        port,
        sslCreds: grpc.credentials.createInsecure(),
        channelPool: {type: 'static', numChannels: 4},
      });

      const database = spanner.instance('instance').database('database');
      let transactionError: Error | undefined;

      try {
        await database.runTransactionAsync(async transaction => {
          const [rows] = await transaction.run('SELECT 1');
          assert.strictEqual(rows.length, 1);
          assert.strictEqual(spanner.channelPool?.totalActiveRw, 1);
          throw new Error('Simulated transaction failure');
        });
      } catch (err) {
        transactionError = err as Error;
      }

      assert(transactionError, 'Transaction must throw');

      const deadline = Date.now() + 1000;
      while (
        (spanner.channelPool?.totalActiveRw !== 0 ||
          spanner.channelPool?.totalInFlight !== 0) &&
        Date.now() < deadline
      ) {
        await new Promise(resolve => setImmediate(resolve));
      }

      assert.strictEqual(
        spanner.channelPool?.totalActiveRw,
        0,
        'activeRwTransactions must be 0 after transaction error',
      );
      assert.strictEqual(
        spanner.channelPool?.totalInFlight,
        0,
        'totalInFlight must be 0 after transaction error',
      );

      await spanner.close();
    });

    it('should maintain zero permit leak across high-concurrency mixed workload battery', async () => {
      spannerMock.putReadRequestResult(
        {table: 'table', keySet: {keys: []}} as any,
        mock.ReadRequestResult.resultSet(mock.createReadRequestResultSet()),
      );
      spannerMock.putStatementResult(
        'SELECT * FROM large_table',
        mock.StatementResult.resultSet(mock.createLargeResultSet()),
      );
      spannerMock.putStatementResult(
        'SELECT * FROM failing_table',
        mock.StatementResult.error(new Error('Simulated error')),
      );

      const spanner = new Spanner({
        projectId: 'test-project',
        servicePath: 'localhost',
        port,
        sslCreds: grpc.credentials.createInsecure(),
        channelPool: {type: 'static', numChannels: 4},
      });

      const database = spanner.instance('instance').database('database');

      const tasks: Array<Promise<any>> = [];

      // 1. Single-use queries
      for (let i = 0; i < 10; i++) {
        tasks.push(database.run('SELECT 1'));
      }

      // 2. Single-use reads
      for (let i = 0; i < 10; i++) {
        tasks.push(database.table('table').read({keys: []}));
      }

      // 3. Snapshot read-only queries
      for (let i = 0; i < 5; i++) {
        tasks.push(
          (async () => {
            const [snapshot] = await database.getSnapshot();
            await snapshot.run('SELECT 1');
            await snapshot.run('SELECT 1');
            snapshot.end();
          })(),
        );
      }

      // 4. Read/Write transactions committing
      for (let i = 0; i < 5; i++) {
        tasks.push(
          database.runTransactionAsync(async transaction => {
            await transaction.run('SELECT 1');
            await transaction.commit();
          }),
        );
      }

      // 5. Read/Write transactions rolling back
      for (let i = 0; i < 5; i++) {
        tasks.push(
          database.runTransactionAsync(async transaction => {
            await transaction.run('SELECT 1');
            await transaction.rollback();
          }),
        );
      }

      // 6. Early-destroyed streaming queries
      for (let i = 0; i < 5; i++) {
        tasks.push(
          (async () => {
            const [snapshot] = await database.getSnapshot();
            const stream = snapshot.runStream('SELECT * FROM large_table');
            await new Promise<void>(resolve => {
              let destroyed = false;
              stream.on('data', () => {
                if (!destroyed) {
                  destroyed = true;
                  stream.destroy();
                }
              });
              stream.on('error', () => resolve());
              stream.on('close', () => resolve());
            });
            snapshot.end();
          })(),
        );
      }

      // 7. Failing queries
      for (let i = 0; i < 5; i++) {
        tasks.push(database.run('SELECT * FROM failing_table').catch(() => {}));
      }

      await Promise.allSettled(tasks);

      // Verify zero leaks with a deterministic setImmediate deadline
      const deadline = Date.now() + 2000;
      while (
        (spanner.channelPool?.totalInFlight !== 0 ||
          spanner.channelPool?.totalActiveRw !== 0) &&
        Date.now() < deadline
      ) {
        await new Promise(resolve => setImmediate(resolve));
      }

      assert.strictEqual(
        spanner.channelPool?.totalInFlight,
        0,
        `Expected 0 in-flight permits after mixed workload, got ${spanner.channelPool?.totalInFlight}`,
      );
      assert.strictEqual(
        spanner.channelPool?.totalActiveRw,
        0,
        `Expected 0 active RW transactions after mixed workload, got ${spanner.channelPool?.totalActiveRw}`,
      );

      await spanner.close();
    });
  });
});

function extractChannelId(metadata?: grpc.Metadata): string | null {
  if (!metadata) {
    return null;
  }
  const values = metadata.get('x-goog-spanner-request-id');
  if (values && values.length > 0) {
    const parts = String(values[0]).split('.');
    if (parts.length >= 4) {
      return parts[3];
    }
  }
  return null;
}
