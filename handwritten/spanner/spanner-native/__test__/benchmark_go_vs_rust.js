/**
 * Comprehensive Cloud Spanner Benchmark Suite: Go Shared Core vs. Rust Shared Core
 * 
 * Runs side-by-side comparisons for every test:
 * 1. Read Volume Scaling (LIMIT 1, 100, 1000 rows)
 * 2. Customer Case Replication (110 Concurrency, 1000 Requests)
 * 3. Full Concurrency & Channel Matrix (Concurrency 1, 8, 12, 32 across Channels 1..20)
 * 
 * DirectPath is disabled by default to ensure standard GFE network routing for both prototypes.
 */

const { NativeSpannerDatabase } = require('./poc_bridge.js');
const { performance } = require('perf_hooks');
const os = require('os');
const fs = require('fs');

// Ensure DirectPath is disabled by default for apples-to-apples GFE comparison
process.env.GOOGLE_SPANNER_ENABLE_DIRECT_ACCESS = 'false';
process.env.GOOGLE_CLOUD_ENABLE_DIRECT_PATH = 'false';
process.env.GOOGLE_CLOUD_SPANNER_MULTIPLEXED_SESSIONS = 'true';

const PROJECT = 'span-cloud-testing';
const INSTANCE = 'suvham-testing';
const DATABASE = 'benchmark_db_async';
const TABLE = 'AsyncBenchmarkTable';
const SQL = "SELECT 1 as col_int, 'CONSTANT' as col_const";

const DURATION_MS = process.env.SHORT_BENCHMARK ? 3000 : 30000; // 30s per test point (or short mode)
const CHANNELS_TEST = [1, 4, 8, 10, 12, 16, 20];
const CONCURRENCY_LEVELS = [1, 8, 12, 32];

function measureEventLoopLag() {
  let last = performance.now();
  let maxLag = 0;
  let totalLag = 0;
  let checks = 0;

  const timer = setInterval(() => {
    const now = performance.now();
    const lag = Math.max(0, now - last - 10);
    if (lag > maxLag) maxLag = lag;
    totalLag += lag;
    checks++;
    last = now;
  }, 10);

  return {
    stop: () => {
      clearInterval(timer);
      return {
        maxLagMs: maxLag,
        avgLagMs: checks > 0 ? totalLag / checks : 0,
      };
    },
  };
}

function getCpuUsage() {
  const cpus = os.cpus();
  let user = 0;
  let sys = 0;
  let idle = 0;
  for (const cpu of cpus) {
    user += cpu.times.user;
    sys += cpu.times.sys;
    idle += cpu.times.idle;
  }
  return { user, sys, idle, total: user + sys + idle };
}

async function runBenchmark(queryFn, concurrency, durationMs) {
  const latencies = [];
  let errorCount = 0;
  let isRunning = true;
  let activeInFlight = 0;

  const lagTracker = measureEventLoopLag();
  const startCpu = getCpuUsage();
  const startTime = performance.now();

  const worker = async () => {
    while (isRunning) {
      activeInFlight++;
      const reqStart = performance.now();
      try {
        await queryFn();
        const reqDuration = performance.now() - reqStart;
        latencies.push(reqDuration);
      } catch (err) {
        errorCount++;
      } finally {
        activeInFlight--;
      }
    }
  };

  const workers = [];
  for (let i = 0; i < concurrency; i++) {
    workers.push(worker());
  }

  await new Promise(r => setTimeout(r, durationMs));
  isRunning = false;

  await Promise.all(workers);
  while (activeInFlight > 0) {
    await new Promise(r => setTimeout(r, 10));
  }

  const totalTimeMs = performance.now() - startTime;
  const lagStats = lagTracker.stop();
  const endCpu = getCpuUsage();

  const totalCpuDiff = endCpu.total - startCpu.total;
  const busyCpuDiff = (endCpu.user + endCpu.sys) - (startCpu.user + startCpu.sys);
  const cpuPercent = totalCpuDiff > 0 ? (busyCpuDiff / totalCpuDiff) * 100 : 0;

  latencies.sort((a, b) => a - b);
  const count = latencies.length;
  const p50 = count > 0 ? latencies[Math.floor(count * 0.50)] : 0;
  const p90 = count > 0 ? latencies[Math.floor(count * 0.90)] : 0;
  const p95 = count > 0 ? latencies[Math.floor(count * 0.95)] : 0;
  const p99 = count > 0 ? latencies[Math.floor(count * 0.99)] : 0;
  const sum = latencies.reduce((acc, v) => acc + v, 0);
  const avg = count > 0 ? sum / count : 0;

  return {
    totalTimeMs,
    qps: (count / (totalTimeMs / 1000)),
    p50,
    p90,
    p95,
    p99,
    avgDuration: avg,
    minDuration: count > 0 ? latencies[0] : 0,
    maxDuration: count > 0 ? latencies[count - 1] : 0,
    errorRate: count + errorCount > 0 ? (errorCount / (count + errorCount)) * 100 : 0,
    total: count,
    maxLagMs: lagStats.maxLagMs,
    avgLagMs: lagStats.avgLagMs,
    cpuUtil: cpuPercent,
  };
}

async function runCustomerReplication(queryFn, concurrency, targetCount) {
  const latencies = [];
  let errorCount = 0;
  let remaining = targetCount;

  const lagTracker = measureEventLoopLag();
  const startCpu = getCpuUsage();
  const startTime = performance.now();

  const worker = async () => {
    while (true) {
      if (remaining <= 0) break;
      remaining--;
      const reqStart = performance.now();
      try {
        await queryFn();
        latencies.push(performance.now() - reqStart);
      } catch (err) {
        errorCount++;
      }
    }
  };

  const workers = [];
  for (let i = 0; i < concurrency; i++) {
    workers.push(worker());
  }

  await Promise.all(workers);

  const totalTimeMs = performance.now() - startTime;
  const lagStats = lagTracker.stop();
  const endCpu = getCpuUsage();

  const totalCpuDiff = endCpu.total - startCpu.total;
  const busyCpuDiff = (endCpu.user + endCpu.sys) - (startCpu.user + startCpu.sys);
  const cpuPercent = totalCpuDiff > 0 ? (busyCpuDiff / totalCpuDiff) * 100 : 0;

  latencies.sort((a, b) => a - b);
  const count = latencies.length;
  const p50 = count > 0 ? latencies[Math.floor(count * 0.50)] : 0;
  const p90 = count > 0 ? latencies[Math.floor(count * 0.90)] : 0;
  const p95 = count > 0 ? latencies[Math.floor(count * 0.95)] : 0;
  const p99 = count > 0 ? latencies[Math.floor(count * 0.99)] : 0;
  const sum = latencies.reduce((acc, v) => acc + v, 0);
  const avg = count > 0 ? sum / count : 0;

  return {
    totalTimeMs,
    qps: (count / (totalTimeMs / 1000)),
    p50,
    p90,
    p95,
    p99,
    avgDuration: avg,
    minDuration: count > 0 ? latencies[0] : 0,
    maxDuration: count > 0 ? latencies[count - 1] : 0,
    errorRate: count + errorCount > 0 ? (errorCount / (count + errorCount)) * 100 : 0,
    total: count,
    maxLagMs: lagStats.maxLagMs,
    avgLagMs: lagStats.avgLagMs,
    cpuUtil: cpuPercent,
  };
}

async function main() {
  console.log('================================================================================');
  console.log('  Cloud Spanner Benchmark: Go Shared Core vs. Rust Shared Core (DirectPath: OFF)');
  console.log('================================================================================');
  console.log(`Node.js Version: ${process.version}`);
  console.log(`OS Platform    : ${process.platform} (${process.arch})`);
  console.log(`CPU Cores      : ${os.cpus().length} core(s)`);
  console.log(`Network Mode   : Standard GFE (DirectPath Disabled)`);
  console.log(`Target Database: projects/${PROJECT}/instances/${INSTANCE}/databases/${DATABASE}\n`);

  console.log('Initializing Go and Rust connection pools...');
  const goClients = {};
  const rustClients = {};
  const channelList = [...CHANNELS_TEST, 32, 50];

  for (const ch of channelList) {
    goClients[ch] = new NativeSpannerDatabase(PROJECT, INSTANCE, DATABASE, ch, 'go');
    rustClients[ch] = new NativeSpannerDatabase(PROJECT, INSTANCE, DATABASE, ch, 'rust');
  }

  // Warmup
  console.log('Executing warmup queries (2s for Go and Rust)...');
  await runBenchmark(() => goClients[1].executeSqlNative(SQL), 2, 2000);
  await runBenchmark(() => rustClients[1].executeSqlNative(SQL), 2, 2000);
  console.log('Warmup complete.\n');

  // ------------------------------------------------------------------
  // TEST 1: Read Volume Scaling (1, 100, 1000 rows)
  // ------------------------------------------------------------------
  console.log('================================================================================');
  console.log('[TEST 1: Read Volume Scaling (LIMIT 1, 100, 1000 Rows)]');
  console.log('Concurrency: 1 | Duration: 5s per query | Channels: 1');
  console.log('================================================================================');

  const test1Queries = [
    { label: 'Small (LIMIT 1, ~100B)', sql: `SELECT * FROM ${TABLE} LIMIT 1` },
    { label: 'Medium (LIMIT 100, ~10KB)', sql: `SELECT * FROM ${TABLE} LIMIT 100` },
    { label: 'Large (LIMIT 1000, ~100KB)', sql: `SELECT * FROM ${TABLE} LIMIT 1000` }
  ];

  const test1Results = [];
  for (const q of test1Queries) {
    console.log(`\nExecuting: ${q.label}...`);
    const goRes = await runBenchmark(() => goClients[1].executeSqlNative(q.sql), 1, 5000);
    const rustRes = await runBenchmark(() => rustClients[1].executeSqlNative(q.sql), 1, 5000);

    const speedup = rustRes.qps > 0 ? (goRes.qps / rustRes.qps).toFixed(2) : '1.00';
    console.log(`  Go   Native (1 Ch): QPS=${goRes.qps.toFixed(1)} | p50=${goRes.p50.toFixed(2)}ms | p95=${goRes.p95.toFixed(2)}ms | p99=${goRes.p99.toFixed(2)}ms | Lag=${goRes.avgLagMs.toFixed(2)}ms`);
    console.log(`  Rust Native (1 Ch): QPS=${rustRes.qps.toFixed(1)} | p50=${rustRes.p50.toFixed(2)}ms | p95=${rustRes.p95.toFixed(2)}ms | p99=${rustRes.p99.toFixed(2)}ms | Lag=${rustRes.avgLagMs.toFixed(2)}ms`);
    console.log(`  Go vs Rust Ratio  : ${speedup}x`);

    test1Results.push({ label: q.label, sql: q.sql, go: goRes, rust: rustRes });
  }

  // ------------------------------------------------------------------
  // TEST 2: Customer Case Replication (110 Concurrency, 1000 Total Requests)
  // ------------------------------------------------------------------
  console.log('\n================================================================================');
  console.log('[TEST 2: Customer Case Replication (110 Concurrency, 1000 Total Requests)]');
  console.log('Query: SELECT 1 as col_int, \'CONSTANT\' as col_const');
  console.log('================================================================================');

  const customerResults = {};
  for (const ch of [16, 32, 50]) {
    console.log(`\nExecuting Customer Replication (${ch} Channels)...`);
    const goRes = await runCustomerReplication(() => goClients[ch].executeSqlNative(SQL), 110, 1000);
    const rustRes = await runCustomerReplication(() => rustClients[ch].executeSqlNative(SQL), 110, 1000);

    const speedup = rustRes.qps > 0 ? (goRes.qps / rustRes.qps).toFixed(2) : '1.00';
    console.log(`  Go   (${ch} Ch): QPS=${goRes.qps.toFixed(1)} | p50=${goRes.p50.toFixed(2)}ms | p95=${goRes.p95.toFixed(2)}ms | p99=${goRes.p99.toFixed(2)}ms | Lag=${goRes.avgLagMs.toFixed(2)}ms | CPU=${goRes.cpuUtil.toFixed(1)}%`);
    console.log(`  Rust (${ch} Ch): QPS=${rustRes.qps.toFixed(1)} | p50=${rustRes.p50.toFixed(2)}ms | p95=${rustRes.p95.toFixed(2)}ms | p99=${rustRes.p99.toFixed(2)}ms | Lag=${rustRes.avgLagMs.toFixed(2)}ms | CPU=${rustRes.cpuUtil.toFixed(1)}%`);
    console.log(`  Go vs Rust Ratio: ${speedup}x`);

    customerResults[`${ch}ch`] = { go: goRes, rust: rustRes };
  }

  // ------------------------------------------------------------------
  // TEST 3: Full Concurrency & Channel Matrix
  // ------------------------------------------------------------------
  console.log('\n================================================================================');
  console.log(`[TEST 3: Full Concurrency & Channel Matrix (${DURATION_MS / 1000}s per test point)]`);
  console.log('================================================================================');
  console.log([
    'Concurrency '.padEnd(12),
    'Engine (Channels) '.padEnd(20),
    'QPS / p95 (ms)'.padEnd(18),
    'p50 (ms)'.padEnd(10),
    'p99 (ms)'.padEnd(10),
    'Avg Lag'.padEnd(12),
    'Max Lag'.padEnd(12),
    'CPU %'.padEnd(10)
  ].join(' | '));
  console.log('-'.repeat(115));

  const matrixResults = [];

  for (const concurrency of CONCURRENCY_LEVELS) {
    const levelResult = { concurrency, channels: {} };

    for (const channels of CHANNELS_TEST) {
      const goRes = await runBenchmark(() => goClients[channels].executeSqlNative(SQL), concurrency, DURATION_MS);
      const rustRes = await runBenchmark(() => rustClients[channels].executeSqlNative(SQL), concurrency, DURATION_MS);

      const goQpsP95 = `${goRes.qps.toFixed(1)} / ${goRes.p95.toFixed(1)}`;
      const rustQpsP95 = `${rustRes.qps.toFixed(1)} / ${rustRes.p95.toFixed(1)}`;

      console.log([
        String(concurrency).padEnd(12),
        `Go   (${channels} Ch)`.padEnd(20),
        goQpsP95.padEnd(18),
        goRes.p50.toFixed(1).padEnd(10),
        goRes.p99.toFixed(1).padEnd(10),
        `${goRes.avgLagMs.toFixed(1)}ms`.padEnd(12),
        `${goRes.maxLagMs.toFixed(1)}ms`.padEnd(12),
        `${goRes.cpuUtil.toFixed(1)}%`.padEnd(10)
      ].join(' | '));

      console.log([
        String(concurrency).padEnd(12),
        `Rust (${channels} Ch)`.padEnd(20),
        rustQpsP95.padEnd(18),
        rustRes.p50.toFixed(1).padEnd(10),
        rustRes.p99.toFixed(1).padEnd(10),
        `${rustRes.avgLagMs.toFixed(1)}ms`.padEnd(12),
        `${rustRes.maxLagMs.toFixed(1)}ms`.padEnd(12),
        `${rustRes.cpuUtil.toFixed(1)}%`.padEnd(10)
      ].join(' | '));

      console.log('-'.repeat(115));

      levelResult.channels[`${channels}ch`] = { go: goRes, rust: rustRes };
    }

    matrixResults.push(levelResult);
  }

  // Save to JSON
  const outputData = {
    systemInfo: {
      node: process.version,
      cores: os.cpus().length,
      platform: process.platform,
      arch: process.arch,
      directPath: false
    },
    config: {
      sql: SQL,
      durationMs: DURATION_MS,
      channels: CHANNELS_TEST,
      concurrency: CONCURRENCY_LEVELS
    },
    readVolumeScaling: test1Results,
    customerReplication: customerResults,
    matrixRuns: matrixResults
  };

  fs.writeFileSync('benchmark_results_go_vs_rust.json', JSON.stringify(outputData, null, 2));
  console.log('\nSUCCESS! Results saved to benchmark_results_go_vs_rust.json');

  for (const ch of Object.keys(goClients)) {
    goClients[ch].close();
    rustClients[ch].close();
  }
  process.exit(0);
}

main().catch(err => {
  console.error('Benchmark execution failed:', err);
  process.exit(1);
});
