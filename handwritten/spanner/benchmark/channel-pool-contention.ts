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
import {Database, Spanner} from '../src';
import * as mock from '../test/mockserver/mockspanner';
import {ContentionManagerLike} from '../test/mockserver/mockspanner';

/**
 * Simulates GFE and SpanFE connection-level queuing and processing contention.
 *
 * For each physical TCP connection (identified by client socket address peer),
 * allows at most `maxParallelPerChannel` concurrent requests to execute in parallel.
 * Any excess requests are held in an asynchronous FIFO queue until an active request completes.
 */
export class ChannelContentionManager implements ContentionManagerLike {
  private readonly channels = new Map<
    string,
    {
      activeRequests: number;
      queue: Array<() => void>;
    }
  >();
  private readonly maxParallelPerChannel: number;
  private readonly baseLatencyMinMs: number;
  private readonly baseLatencyNoiseMaxMs: number;
  private totalQueuedRequests = 0;
  private totalCompletedRequests = 0;

  constructor(
    maxParallelPerChannel: number,
    baseLatencyMinMs = 0,
    baseLatencyNoiseMaxMs = 0,
  ) {
    this.maxParallelPerChannel = maxParallelPerChannel;
    this.baseLatencyMinMs = baseLatencyMinMs;
    this.baseLatencyNoiseMaxMs = baseLatencyNoiseMaxMs;
  }

  async executeWithQueue<T>(
    peerAddress: string,
    action: () => Promise<T> | T,
  ): Promise<T> {
    let channelState = this.channels.get(peerAddress);
    if (!channelState) {
      channelState = {activeRequests: 0, queue: []};
      this.channels.set(peerAddress, channelState);
    }

    if (channelState.activeRequests >= this.maxParallelPerChannel) {
      this.totalQueuedRequests++;
      await new Promise<void>(resolve => {
        channelState!.queue.push(resolve);
      });
    }

    channelState.activeRequests++;

    try {
      if (this.baseLatencyMinMs > 0 || this.baseLatencyNoiseMaxMs > 0) {
        const noise =
          this.baseLatencyNoiseMaxMs > 0
            ? Math.random() * this.baseLatencyNoiseMaxMs
            : 0;
        const delay = this.baseLatencyMinMs + noise;
        await new Promise(resolve => setTimeout(resolve, delay));
      }
      return await action();
    } finally {
      channelState.activeRequests--;
      this.totalCompletedRequests++;
      if (channelState.queue.length > 0) {
        const next = channelState.queue.shift()!;
        next();
      }
    }
  }

  totalQueuedCount(): number {
    return this.totalQueuedRequests;
  }

  totalCompletedCount(): number {
    return this.totalCompletedRequests;
  }

  resetCounts(): void {
    this.totalQueuedRequests = 0;
    this.totalCompletedRequests = 0;
  }
}

export interface BenchmarkRunMetrics {
  totalOperations: number;
  queuedOperations: number;
  meanLatencyMs: number;
  p50LatencyMs: number;
  p90LatencyMs: number;
  p95LatencyMs: number;
  p99LatencyMs: number;
  operationsOver15Ms: number;
  operationsOver15MsPercent: number;
}

export function calculateMetrics(
  queuedOperations: number,
  latencies: number[],
): BenchmarkRunMetrics {
  latencies.sort((a, b) => a - b);
  const totalOperations = latencies.length;
  const totalDuration = latencies.reduce((sum, lat) => sum + lat, 0);
  const meanLatencyMs =
    totalOperations > 0 ? totalDuration / totalOperations : 0;
  const p50LatencyMs =
    totalOperations > 0 ? latencies[Math.floor(totalOperations * 0.5)] : 0;
  const p90LatencyMs =
    totalOperations > 0 ? latencies[Math.floor(totalOperations * 0.9)] : 0;
  const p95LatencyMs =
    totalOperations > 0 ? latencies[Math.floor(totalOperations * 0.95)] : 0;
  const p99LatencyMs =
    totalOperations > 0 ? latencies[Math.floor(totalOperations * 0.99)] : 0;
  const operationsOver15Ms = latencies.filter(lat => lat >= 15).length;
  const operationsOver15MsPercent =
    totalOperations > 0 ? (operationsOver15Ms / totalOperations) * 100 : 0;

  return {
    totalOperations,
    queuedOperations,
    meanLatencyMs,
    p50LatencyMs,
    p90LatencyMs,
    p95LatencyMs,
    p99LatencyMs,
    operationsOver15Ms,
    operationsOver15MsPercent,
  };
}

describe('Channel Pool Contention and Benchmark Verification', function () {
  this.timeout(30000);

  let server: grpc.Server;
  let spannerMock: mock.MockSpanner;
  let port: number;

  before(async () => {
    server = new grpc.Server();
    spannerMock = mock.createMockSpanner(server);
    port = await new Promise<number>((resolve, reject) => {
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
    spannerMock.putStatementResult(
      'SELECT id, value FROM test WHERE id = @id',
      mock.StatementResult.resultSet(mock.createSelect1ResultSet()),
    );
    spannerMock.putStatementResult(
      'UPDATE test SET value = @value WHERE id = @id',
      mock.StatementResult.updateCount(1),
    );
  });

  after(done => {
    server.tryShutdown(done);
  });

  beforeEach(() => {
    spannerMock.resetRequests();
    spannerMock.setContentionManager(undefined);
  });

  afterEach(() => {
    spannerMock.setContentionManager(undefined);
  });

  async function warmUp(database: Database): Promise<void> {
    const [rows] = await database.run('SELECT 1');
    assert.strictEqual(rows.length, 1);
  }

  async function runPointSelectWorkload(
    database: Database,
    numWorkers: number,
    durationMs: number,
  ): Promise<number[]> {
    let isStopped = false;
    const allLatencies: number[] = [];

    const workers = Array.from({length: numWorkers}, async () => {
      const workerLatencies: number[] = [];
      while (!isStopped) {
        const startTime = Date.now();
        const [rows] = await database.run({
          sql: 'SELECT id, value FROM test WHERE id = @id',
          params: {id: 1},
        });
        assert.strictEqual(rows.length, 1);
        workerLatencies.push(Date.now() - startTime);
      }
      return workerLatencies;
    });

    await new Promise(resolve => setTimeout(resolve, durationMs));
    isStopped = true;

    const results = await Promise.all(workers);
    for (const workerLatencies of results) {
      allLatencies.push(...workerLatencies);
    }
    return allLatencies;
  }

  async function runSelectUpdateWorkload(
    database: Database,
    numWorkers: number,
    durationMs: number,
  ): Promise<number[]> {
    let isStopped = false;
    const allLatencies: number[] = [];

    const workers = Array.from({length: numWorkers}, async () => {
      const workerLatencies: number[] = [];
      while (!isStopped) {
        const startTime = Date.now();
        await database.runTransactionAsync(async transaction => {
          const [rows] = await transaction.run({
            sql: 'SELECT id, value FROM test WHERE id = @id',
            params: {id: 1},
          });
          assert.strictEqual(rows.length, 1);
          await transaction.runUpdate({
            sql: 'UPDATE test SET value = @value WHERE id = @id',
            params: {id: 1, value: 'updated'},
          });
          await transaction.commit();
        });
        workerLatencies.push(Date.now() - startTime);
      }
      return workerLatencies;
    });

    await new Promise(resolve => setTimeout(resolve, durationMs));
    isStopped = true;

    const results = await Promise.all(workers);
    for (const workerLatencies of results) {
      allLatencies.push(...workerLatencies);
    }
    return allLatencies;
  }

  it('dynamic channel pool scales up and reduces contention under heavy query load', async () => {
    // 1. Mock server setup: 4 parallel requests max per channel connection.
    // Base latency: 1.5ms + random noise in [0.0ms, 0.5ms].
    const contentionManager = new ChannelContentionManager(4, 2, 1);
    spannerMock.setContentionManager(contentionManager);

    // 2. Client setup with DynamicChannelPool:
    // Initial channels: 4, Max channels: 32, scaleUpCooldownMs: 10ms.
    const spanner = new Spanner({
      projectId: 'test-project',
      servicePath: 'localhost',
      port,
      sslCreds: grpc.credentials.createInsecure(),
      channelPool: {
        type: 'dynamic',
        minChannels: 4,
        maxChannels: 32,
        minRpcPerChannel: 2,
        maxRpcPerChannel: 8,
        scaleUpCooldownMs: 10,
        maxScaleUpPercent: 100,
      },
    });

    const database = spanner.instance('instance').database('database');
    await warmUp(database);

    const initialChannels = spanner.channelPool!.size;
    assert.strictEqual(
      initialChannels,
      4,
      `Initial channel count must be 4, got ${initialChannels}`,
    );

    // 3. Workload generation: 32 concurrent worker tasks generating load.
    // On 4 initial channels, 32 requests creates 8 concurrent requests per channel,
    // which exceeds maxParallelPerChannel (4) on the server, driving saturation and triggering automatic scale-up.
    let isStopped = false;
    const burstLatencies: number[] = [];
    const totalWorkers = 32;

    const burstWorkers = Array.from({length: totalWorkers}, async () => {
      const latencies: number[] = [];
      while (!isStopped) {
        const startTime = Date.now();
        const [rows] = await database.run('SELECT 1');
        assert.strictEqual(rows.length, 1);
        latencies.push(Date.now() - startTime);
      }
      return latencies;
    });

    // Monitor pool scaling with a deadline
    const deadline = Date.now() + 2000;
    while (spanner.channelPool!.size <= 4 && Date.now() < deadline) {
      await new Promise(resolve => setTimeout(resolve, 20));
    }

    isStopped = true;
    const burstResults = await Promise.all(burstWorkers);
    for (const latencies of burstResults) {
      burstLatencies.push(...latencies);
    }

    const finalChannels = spanner.channelPool!.size;

    // 4. Phase 2: With the scaled-up pool (>=8 channels), run 16 concurrent workers
    // (concurrency per channel <= 2 <= 4 server limit), relieving server contention.
    const postScaleWorkers = 16;
    const postScaleLatencies = await runPointSelectWorkload(
      database,
      postScaleWorkers,
      200,
    );

    // 5. Assertions and metrics verification:
    assert(
      contentionManager.totalQueuedCount() > 0,
      `Contention manager must experience server queuing during burst, got ${contentionManager.totalQueuedCount()}`,
    );
    assert(
      finalChannels > 4,
      `Dynamic channel pool must scale up beyond initial 4 channels, got ${finalChannels}`,
    );

    const burstMetrics = calculateMetrics(
      contentionManager.totalQueuedCount(),
      burstLatencies,
    );
    const postMetrics = calculateMetrics(0, postScaleLatencies);

    // Post-scale p50 latency must be relieved compared to contended burst
    assert(
      postMetrics.p50LatencyMs <= burstMetrics.p50LatencyMs,
      `Post-scale p50 latency (${postMetrics.p50LatencyMs}ms) should be <= burst p50 (${burstMetrics.p50LatencyMs}ms)`,
    );

    await spanner.close();
  });

  it('static channel pool remains at fixed size under heavy query load and contention', async () => {
    const contentionManager = new ChannelContentionManager(4, 2, 1);
    spannerMock.setContentionManager(contentionManager);

    const staticChannelCount = 4;
    const spanner = new Spanner({
      projectId: 'test-project',
      servicePath: 'localhost',
      port,
      sslCreds: grpc.credentials.createInsecure(),
      channelPool: {
        type: 'static',
        numChannels: staticChannelCount,
      },
    });

    const database = spanner.instance('instance').database('database');
    await warmUp(database);

    assert.strictEqual(
      spanner.channelPool!.size,
      staticChannelCount,
      `Static channel pool must have ${staticChannelCount} channels`,
    );

    // Run concurrent queries under contention
    const latencies = await runPointSelectWorkload(database, 16, 200);
    assert(latencies.length > 0, 'Must have executed queries');

    // Static pool must strictly remain at fixed size
    assert.strictEqual(
      spanner.channelPool!.size,
      staticChannelCount,
      `Static pool must strictly remain at ${staticChannelCount} channels under load`,
    );

    await spanner.close();
  });

  it('replication: spiky point-select workload under default dynamic pool with cooldown', async () => {
    const contentionManager = new ChannelContentionManager(2, 2, 1);
    spannerMock.setContentionManager(contentionManager);

    const spanner = new Spanner({
      projectId: 'test-project',
      servicePath: 'localhost',
      port,
      sslCreds: grpc.credentials.createInsecure(),
      channelPool: {
        type: 'dynamic',
        minChannels: 4,
        maxChannels: 256,
        minRpcPerChannel: 1,
        maxRpcPerChannel: 2,
        scaleUpCooldownMs: 1000,
        maxScaleUpPercent: 100,
      },
    });

    const database = spanner.instance('instance').database('database');
    await warmUp(database);

    assert.strictEqual(spanner.channelPool!.size, 4);

    // Phase 1: Calm/Normal State (2 concurrent workers for 150ms)
    const calmLatencies = await runPointSelectWorkload(database, 2, 150);
    const calmQueued = contentionManager.totalQueuedCount();
    assert.strictEqual(
      calmQueued,
      0,
      'Calm phase must not cause server queuing',
    );

    // Phase 2: Spiky Burst State (12 concurrent workers for 300ms)
    const burstStartQueued = contentionManager.totalQueuedCount();
    const burstLatencies = await runPointSelectWorkload(database, 12, 300);
    const burstQueued = contentionManager.totalQueuedCount() - burstStartQueued;

    const finalChannels = spanner.channelPool!.size;

    // Cooldown verification: pool scales up at burst onset (e.g. 4 -> 8),
    // but the 1000ms cooldown throttles further scaling during the short 300ms burst.
    assert(
      finalChannels >= 8,
      `Dynamic pool must scale from 4 to 8 at onset, got ${finalChannels}`,
    );
    assert(
      burstQueued > 0,
      'Burst state must produce server-side queuing under permit limits',
    );

    const calmMetrics = calculateMetrics(calmQueued, calmLatencies);
    const burstMetrics = calculateMetrics(burstQueued, burstLatencies);
    assert(
      burstMetrics.meanLatencyMs >= calmMetrics.meanLatencyMs,
      'Burst mean latency should reflect queuing delay',
    );

    await spanner.close();
  });

  it('replication: spiky point-select workload under static 64-channel pool', async () => {
    const contentionManager = new ChannelContentionManager(2, 2, 1);
    spannerMock.setContentionManager(contentionManager);

    const spanner = new Spanner({
      projectId: 'test-project',
      servicePath: 'localhost',
      port,
      sslCreds: grpc.credentials.createInsecure(),
      channelPool: {
        type: 'static',
        numChannels: 64,
      },
    });

    const database = spanner.instance('instance').database('database');
    await warmUp(database);

    assert.strictEqual(spanner.channelPool!.size, 64);

    // Calm state (2 workers for 150ms)
    await runPointSelectWorkload(database, 2, 150);
    assert.strictEqual(
      contentionManager.totalQueuedCount(),
      0,
      'Calm phase on 64 channels must not queue',
    );

    // Burst state (12 workers for 300ms): with 64 channels, 12 concurrent requests
    // distribute across distinct channels with minimal or zero server queuing!
    const burstStartQueued = contentionManager.totalQueuedCount();
    const burstLatencies = await runPointSelectWorkload(database, 12, 300);
    const burstQueued = contentionManager.totalQueuedCount() - burstStartQueued;

    // 64 static channels provide abundant capacity
    assert(
      burstQueued <= 3,
      `Static 64 channels should experience virtually no queuing, got ${burstQueued}`,
    );
    assert.strictEqual(
      spanner.channelPool!.size,
      64,
      'Static pool remains at 64 channels',
    );
    assert(burstLatencies.length > 0, 'Burst operations executed');

    await spanner.close();
  });

  it('replication: dynamic pool with responsive cooldown scales up and recovers under burst', async () => {
    const contentionManager = new ChannelContentionManager(2, 2, 1);
    spannerMock.setContentionManager(contentionManager);

    // Responsive 20ms cooldown allowing rapid multi-step scale-up under burst
    const spanner = new Spanner({
      projectId: 'test-project',
      servicePath: 'localhost',
      port,
      sslCreds: grpc.credentials.createInsecure(),
      channelPool: {
        type: 'dynamic',
        minChannels: 4,
        maxChannels: 64,
        minRpcPerChannel: 1,
        maxRpcPerChannel: 2,
        scaleUpCooldownMs: 20,
        maxScaleUpPercent: 100,
      },
    });

    const database = spanner.instance('instance').database('database');
    await warmUp(database);

    assert.strictEqual(spanner.channelPool!.size, 4);

    // Run burst with 24 workers for 400ms: ample time for 20ms cooldown to scale multiple steps:
    // 4 -> 8 -> 16+
    const burstLatencies = await runPointSelectWorkload(database, 24, 400);
    const finalChannels = spanner.channelPool!.size;

    assert(
      finalChannels >= 16,
      `Dynamic pool with 20ms cooldown must scale up to at least 16 channels under 24 workers, got ${finalChannels}`,
    );
    assert(burstLatencies.length > 0, 'Operations executed during burst');

    await spanner.close();
  });

  it('replication: select-then-update workload under dynamic pool with default cooldown', async () => {
    const contentionManager = new ChannelContentionManager(2, 2, 1);
    spannerMock.setContentionManager(contentionManager);

    const spanner = new Spanner({
      projectId: 'test-project',
      servicePath: 'localhost',
      port,
      sslCreds: grpc.credentials.createInsecure(),
      channelPool: {
        type: 'dynamic',
        minChannels: 4,
        maxChannels: 256,
        minRpcPerChannel: 1,
        maxRpcPerChannel: 2,
        scaleUpCooldownMs: 1000,
        maxScaleUpPercent: 100,
      },
    });

    const database = spanner.instance('instance').database('database');
    await warmUp(database);

    assert.strictEqual(spanner.channelPool!.size, 4);

    // Run burst of read/write transactions (select + update + commit) with 16 concurrent workers for 300ms
    const burstLatencies = await runSelectUpdateWorkload(database, 16, 300);
    const finalChannels = spanner.channelPool!.size;
    const queuedCount = contentionManager.totalQueuedCount();

    assert(
      burstLatencies.length > 0,
      'Expected at least one select-update transaction to complete',
    );
    assert(
      finalChannels >= 8,
      `Dynamic pool must scale from 4 to 8 at onset, got ${finalChannels}`,
    );
    assert(
      queuedCount > 0,
      'Server queuing should occur during read/write transaction burst',
    );

    await spanner.close();
  });

  it('replication: select-then-update workload under static 64-channel pool', async () => {
    const contentionManager = new ChannelContentionManager(2, 2, 1);
    spannerMock.setContentionManager(contentionManager);

    const spanner = new Spanner({
      projectId: 'test-project',
      servicePath: 'localhost',
      port,
      sslCreds: grpc.credentials.createInsecure(),
      channelPool: {
        type: 'static',
        numChannels: 64,
      },
    });

    const database = spanner.instance('instance').database('database');
    await warmUp(database);

    assert.strictEqual(spanner.channelPool!.size, 64);

    // Run burst of read/write transactions with 16 workers for 300ms
    const burstLatencies = await runSelectUpdateWorkload(database, 16, 300);
    const queuedCount = contentionManager.totalQueuedCount();

    assert(
      burstLatencies.length > 0,
      'Expected select-update transactions to complete on static pool',
    );
    assert.strictEqual(
      spanner.channelPool!.size,
      64,
      'Static pool must remain fixed at 64 channels',
    );
    // Abundant 64 channels distribute 16 concurrent transactions with low queuing
    assert(
      queuedCount <= 5,
      `Expected minimal queuing on 64 channels, got ${queuedCount}`,
    );

    await spanner.close();
  });

  it('replication: select-then-update workload scales dynamically with responsive cooldown', async () => {
    const contentionManager = new ChannelContentionManager(2, 2, 1);
    spannerMock.setContentionManager(contentionManager);

    const spanner = new Spanner({
      projectId: 'test-project',
      servicePath: 'localhost',
      port,
      sslCreds: grpc.credentials.createInsecure(),
      channelPool: {
        type: 'dynamic',
        minChannels: 4,
        maxChannels: 64,
        minRpcPerChannel: 1,
        maxRpcPerChannel: 2,
        scaleUpCooldownMs: 20,
        maxScaleUpPercent: 100,
      },
    });

    const database = spanner.instance('instance').database('database');
    await warmUp(database);

    assert.strictEqual(spanner.channelPool!.size, 4);

    // Run burst of read/write transactions with 20 workers for 400ms
    const burstLatencies = await runSelectUpdateWorkload(database, 20, 400);
    const finalChannels = spanner.channelPool!.size;

    assert(
      burstLatencies.length > 0,
      'Expected transactions to complete during burst',
    );
    assert(
      finalChannels >= 8,
      `Pool must scale beyond 4 channels under select-update load, got ${finalChannels}`,
    );

    await spanner.close();
  });
});
