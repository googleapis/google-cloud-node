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

    after(done => {
      server.tryShutdown(done);
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

    it('should allow falling back to legacy grpc-gcp pool via channelPool option', async () => {
      const spanner = new Spanner({
        projectId: 'test-project',
        servicePath: 'localhost',
        port,
        sslCreds: grpc.credentials.createInsecure(),
        channelPool: 'grpc-gcp',
      });

      assert.strictEqual(spanner.channelPool, undefined);
      await spanner.close();
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
