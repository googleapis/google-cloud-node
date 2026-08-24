/**
 * Comprehensive Benchmark Suite for Go Native Deserialization
 * Runs:
 * 1. Go GFE + Native Cells (DirectPath = false, SPANNER_GO_DIRECT_DESERIALIZATION = true)
 * 2. Go DirectPath + Native Cells (DirectPath = true, SPANNER_GO_DIRECT_DESERIALIZATION = true)
 */

const { NativeSpannerDatabase } = require('./poc_bridge.js');
const { performance } = require('perf_hooks');
const os = require('os');
const fs = require('fs');

process.env.SPANNER_GO_DIRECT_DESERIALIZATION = 'true';
process.env.GOOGLE_CLOUD_SPANNER_MULTIPLEXED_SESSIONS = 'true';

const PROJECT = 'span-cloud-testing';
const INSTANCE = 'suvham-testing';
const DATABASE = 'benchmark_db_async';
const TABLE = 'AsyncBenchmarkTable';
const SQL = "SELECT 1 as col_int, 'CONSTANT' as col_const";

const DURATION_MS = 30000; // 30s per matrix test point
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
        if (errorCount <= 3) {
          console.error('\n[Benchmark Request Error]:', err.message || err);
        }
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
        if (errorCount <= 3) {
          console.error('\n[Customer Replication Error]:', err.message || err);
        }
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

async function runSuite(directPathEnabled, suiteName) {
  process.env.GOOGLE_SPANNER_ENABLE_DIRECT_ACCESS = directPathEnabled ? 'true' : 'false';
  process.env.GOOGLE_CLOUD_ENABLE_DIRECT_PATH = directPathEnabled ? 'true' : 'false';

  console.log('\n================================================================================');
  console.log(`  STARTING SUITE: ${suiteName} (DirectPath = ${directPathEnabled})`);
  console.log('================================================================================');

  console.log('Initializing Go connection pools...');
  const goClients = {};
  for (const ch of [...CHANNELS_TEST, 32, 50]) {
    goClients[ch] = new NativeSpannerDatabase(PROJECT, INSTANCE, DATABASE, ch, 'go');
  }

  // Warmup
  console.log('Executing warmup queries (2s)...');
  await runBenchmark(() => goClients[1].executeSqlNative('SELECT 1'), 2, 2000);
  console.log('Warmup complete.\n');

  // TEST 1: Read Volume Scaling
  console.log('[TEST 1: Read Volume Scaling (LIMIT 1, 100, 1000 Rows)]');
  const test1Queries = [
    { label: 'Small (LIMIT 1, ~100B)', sql: `SELECT * FROM ${TABLE} LIMIT 1` },
    { label: 'Medium (LIMIT 100, ~10KB)', sql: `SELECT * FROM ${TABLE} LIMIT 100` },
    { label: 'Large (LIMIT 1000, ~100KB)', sql: `SELECT * FROM ${TABLE} LIMIT 1000` }
  ];

  const test1Results = [];
  for (const q of test1Queries) {
    console.log(`Executing: ${q.label}...`);
    const res = await runBenchmark(() => goClients[1].executeSqlNative(q.sql), 1, 5000);
    console.log(`  ${suiteName} (1 Ch): QPS=${res.qps.toFixed(1)} | p50=${res.p50.toFixed(2)}ms | p95=${res.p95.toFixed(2)}ms | p99=${res.p99.toFixed(2)}ms | Lag=${res.avgLagMs.toFixed(2)}ms`);
    test1Results.push({ label: q.label, sql: q.sql, result: res });
  }

  // TEST 2: Customer Case Replication
  console.log('\n[TEST 2: Customer Case Replication (110 Concurrency, 1000 Total Requests)]');
  const customerResults = {};
  for (const ch of [16, 32, 50]) {
    console.log(`Executing Customer Replication (${suiteName}, ${ch} Channels)...`);
    const res = await runCustomerReplication(() => goClients[ch].executeSqlNative(SQL), 110, 1000);
    console.log(`  ${suiteName} (${ch} Ch): QPS=${res.qps.toFixed(1)} | p50=${res.p50.toFixed(2)}ms | p95=${res.p95.toFixed(2)}ms | p99=${res.p99.toFixed(2)}ms | avgLag=${res.avgLagMs.toFixed(2)}ms | CPU=${res.cpuUtil.toFixed(1)}%`);
    customerResults[`${ch}ch`] = res;
  }

  // TEST 3: Concurrency & Channel Matrix
  console.log('\n[TEST 3: Full Concurrency & Channel Matrix]');
  console.log([
    'Concurrency '.padEnd(12),
    'Engine / Channels '.padEnd(30),
    'QPS / p95 (ms)'.padEnd(18),
    'p50 (ms)'.padEnd(10),
    'p99 (ms)'.padEnd(10),
    'Avg Lag'.padEnd(12),
    'Max Lag'.padEnd(12),
    'CPU %'.padEnd(10)
  ].join(' | '));
  console.log('-'.repeat(125));

  const matrixResults = [];

  for (const concurrency of CONCURRENCY_LEVELS) {
    const levelResult = { concurrency };

    for (const channels of CHANNELS_TEST) {
      const res = await runBenchmark(() => goClients[channels].executeSqlNative(SQL), concurrency, DURATION_MS);
      const qpsP95 = `${res.qps.toFixed(1)} / ${res.p95.toFixed(1)}`;

      console.log([
        String(concurrency).padEnd(12),
        `${suiteName} (${channels} Ch)`.padEnd(30),
        qpsP95.padEnd(18),
        res.p50.toFixed(1).padEnd(10),
        res.p99.toFixed(1).padEnd(10),
        `${res.avgLagMs.toFixed(1)}ms`.padEnd(12),
        `${res.maxLagMs.toFixed(1)}ms`.padEnd(12),
        `${res.cpuUtil.toFixed(1)}%`.padEnd(10)
      ].join(' | '));

      levelResult[`${channels}ch`] = res;
    }

    console.log('-'.repeat(125));
    matrixResults.push(levelResult);
  }

  for (const ch of Object.keys(goClients)) {
    goClients[ch].close();
  }

  return {
    suiteName,
    directPath: directPathEnabled,
    readVolumeScaling: test1Results,
    customerReplication: customerResults,
    matrixRuns: matrixResults
  };
}

async function main() {
  console.log('================================================================================');
  console.log('  Cloud Spanner Benchmark: Go Native Deserialization Suite                       ');
  console.log('================================================================================');
  console.log(`Node.js Version: ${process.version}`);
  console.log(`OS Platform    : ${process.platform} (${process.arch})`);
  console.log(`CPU Cores      : ${os.cpus().length} core(s)`);
  console.log(`SPANNER_GO_DIRECT_DESERIALIZATION = true (Zero JSON Mode)`);
  console.log(`Target Database: projects/${PROJECT}/instances/${INSTANCE}/databases/${DATABASE}\n`);

  // 1. Run Go GFE + Native Cells
  const gfeResults = await runSuite(false, 'Go GFE (Native Cells)');
  fs.writeFileSync('benchmark_results_go_gfe_native.json', JSON.stringify(gfeResults, null, 2));
  console.log('\nSaved Suite 1 to benchmark_results_go_gfe_native.json');

  // 2. Run Go DirectPath + Native Cells
  const dpResults = await runSuite(true, 'Go DirectPath (Native Cells)');
  fs.writeFileSync('benchmark_results_go_dp_native.json', JSON.stringify(dpResults, null, 2));
  console.log('\nSaved Suite 2 to benchmark_results_go_dp_native.json');

  console.log('\n================================================================================');
  console.log('  ALL GO NATIVE DESERIALIZATION BENCHMARKS COMPLETED SUCCESSFULLY!              ');
  console.log('================================================================================');
  process.exit(0);
}

main().catch(err => {
  console.error('Benchmark suite failed:', err);
  process.exit(1);
});
