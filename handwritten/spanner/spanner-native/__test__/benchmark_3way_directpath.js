/**
 * ==============================================================================
 * 3-Way Comparative Benchmark Suite: Node.js Baseline vs Rust Core vs Go DirectPath
 * ==============================================================================
 * 
 * Engines Evaluated:
 * 1. Node.js Official Client Baseline (@google-cloud/spanner)
 * 2. Rust Native Shared Core (spanner-core via napi-rs)
 * 3. Go Native Shared Core with DirectPath + Native Cells Deserialization
 * 
 * Test Suites:
 * - TEST 1: Read Volume Scaling (LIMIT 1, 100, 1000 Rows)
 * - TEST 2: Customer Case Replication (110 Concurrency, 1000 Total Requests)
 * - TEST 3: Full Concurrency Matrix (Concurrency: 1, 8, 12, 32 | Channel Count: 4 ONLY)
 * ==============================================================================
 */

// Enable DirectPath and Native Deserialization for Go
process.env.GOOGLE_SPANNER_ENABLE_DIRECT_ACCESS = 'true';
process.env.SPANNER_GO_DIRECT_DESERIALIZATION = 'true';
process.env.GOOGLE_CLOUD_SPANNER_MULTIPLEXED_SESSIONS = 'true';

const { NativeSpannerDatabase } = require('./poc_bridge.js');
const { performance } = require('perf_hooks');
const os = require('os');
const fs = require('fs');

// ════════════════════════════════════════════════════════════════
// CONFIGURATION
// ════════════════════════════════════════════════════════════════
const PROJECT  = 'span-cloud-testing';
const INSTANCE = 'suvham-testing';
const DATABASE = 'benchmark_db_async';
const TABLE    = 'AsyncBenchmarkTable';
const SQL      = "SELECT 1 as col_int, 'CONSTANT' as col_const";

const WARMUP_MS = 10_000;
const DURATION_MS = 30_000; // 30s per matrix test point
const CONCURRENCY_LEVELS = [1, 8, 12, 32];
const MATRIX_CHANNEL_COUNT = 4; // Requested: Channel count 4 only

class CPUMonitor {
  constructor() {
    this.startUsage = null;
  }
  start() {
    this.startUsage = this.getCPUUsage();
  }
  getCPUUsage() {
    const cpus = os.cpus();
    let totalUser = 0;
    let totalSystem = 0;
    let totalIdle = 0;
    for (const cpu of cpus) {
      totalUser += cpu.times.user;
      totalSystem += cpu.times.sys;
      totalIdle += cpu.times.idle;
    }
    const total = totalUser + totalSystem + totalIdle;
    return { user: totalUser, system: totalSystem, idle: totalIdle, total };
  }
  stop() {
    const endUsage = this.getCPUUsage();
    const userDiff = endUsage.user - this.startUsage.user;
    const sysDiff = endUsage.system - this.startUsage.system;
    const idleDiff = endUsage.idle - this.startUsage.idle;
    const totalDiff = endUsage.total - this.startUsage.total;

    const activeDiff = userDiff + sysDiff;
    return totalDiff > 0 ? (activeDiff / totalDiff) * 100 : 0.0;
  }
}

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

/**
 * Maintains exactly N requests in flight simultaneously for durationMs.
 */
async function runBenchmark(executeFn, concurrency, durationMs) {
  const cpuMonitor = new CPUMonitor();
  cpuMonitor.start();

  const lagTracker = measureEventLoopLag();
  const latencies = [];
  let errors = 0;
  let stopped = false;
  let inFlight = 0;

  return new Promise((resolve) => {
    function launchOne() {
      if (stopped && inFlight === 0) {
        finish();
        return;
      }
      if (stopped) return;

      inFlight++;
      const start = performance.now();

      executeFn()
        .then(() => {
          latencies.push(performance.now() - start);
        })
        .catch((err) => {
          errors++;
          if (errors <= 3) {
            console.error('\n[Request Error]:', err.message || err);
          }
        })
        .finally(() => {
          inFlight--;
          launchOne();
          if (stopped && inFlight === 0) {
            finish();
          }
        });
    }

    function finish() {
      const cpuUtil = cpuMonitor.stop();
      const lagStats = lagTracker.stop();

      if (latencies.length === 0) {
        resolve({
          qps: 0.0,
          p50: 0.0,
          p90: 0.0,
          p95: 0.0,
          p99: 0.0,
          errorRate: 1.0,
          total: errors,
          maxLagMs: lagStats.maxLagMs,
          avgLagMs: lagStats.avgLagMs,
          cpuUtil: cpuUtil,
        });
        return;
      }

      latencies.sort((a, b) => a - b);
      const getPercentile = (p) => {
        const idx = Math.ceil((p / 100) * latencies.length) - 1;
        return latencies[Math.max(0, idx)];
      };

      const total = latencies.length + errors;
      resolve({
        qps: latencies.length / (durationMs / 1000),
        p50: getPercentile(50),
        p90: getPercentile(90),
        p95: getPercentile(95),
        p99: getPercentile(99),
        avgDuration: latencies.reduce((a, b) => a + b, 0) / latencies.length,
        minDuration: latencies[0],
        maxDuration: latencies[latencies.length - 1],
        errorRate: errors / total,
        total,
        maxLagMs: lagStats.maxLagMs,
        avgLagMs: lagStats.avgLagMs,
        cpuUtil: cpuUtil,
      });
    }

    for (let i = 0; i < concurrency; i++) launchOne();
    setTimeout(() => { stopped = true; }, durationMs);
  });
}

/**
 * Runs a fixed total request count benchmark with N concurrency.
 */
async function runCustomerReplication(executeFn, concurrency, totalRequests) {
  const latencies = [];
  let errors = 0;
  let launched = 0;
  let completed = 0;
  const startBench = performance.now();

  const cpuMonitor = new CPUMonitor();
  cpuMonitor.start();

  const lagTracker = measureEventLoopLag();

  return new Promise((resolve) => {
    function launchOne() {
      if (completed >= totalRequests) {
        const elapsed = performance.now() - startBench;
        const cpuUtil = cpuMonitor.stop();
        const lagStats = lagTracker.stop();

        latencies.sort((a, b) => a - b);
        const getPercentile = (p) => {
          const idx = Math.ceil((p / 100) * latencies.length) - 1;
          return latencies[Math.max(0, idx)];
        };

        resolve({
          totalTimeMs: elapsed,
          qps: latencies.length / (elapsed / 1000),
          p50: getPercentile(50),
          p90: getPercentile(90),
          p95: getPercentile(95),
          p99: getPercentile(99),
          avgDuration: latencies.reduce((a, b) => a + b, 0) / (latencies.length || 1),
          minDuration: latencies.length > 0 ? latencies[0] : 0.0,
          maxDuration: latencies.length > 0 ? latencies[latencies.length - 1] : 0.0,
          errorRate: errors / totalRequests,
          total: totalRequests,
          maxLagMs: lagStats.maxLagMs,
          avgLagMs: lagStats.avgLagMs,
          cpuUtil: cpuUtil,
        });
        return;
      }

      if (launched >= totalRequests) return;
      launched++;

      const start = performance.now();
      executeFn()
        .then(() => {
          latencies.push(performance.now() - start);
        })
        .catch((err) => {
          errors++;
          if (errors <= 3) {
            console.error('\n[Fixed Count Err]:', err.message || err);
          }
        })
        .finally(() => {
          completed++;
          launchOne();
        });
    }

    for (let i = 0; i < Math.min(concurrency, totalRequests); i++) {
      launchOne();
    }
  });
}

// ════════════════════════════════════════════════════════════════
// TEST 1: Read Volume Scaling (1, 100, 1000 Rows)
// ════════════════════════════════════════════════════════════════
async function runTest1(db, rustClient, goClient) {
  console.log('\n' + '='.repeat(110));
  console.log('[TEST 1: Read Volume Scaling (LIMIT 1, 100, 1000 Rows)]');
  console.log('Concurrency: 1 | Duration: 5s per query | Channels: 1');
  console.log('='.repeat(110));

  const queries = [
    { label: 'Small (LIMIT 1, ~100B)', sql: `SELECT * FROM ${TABLE} LIMIT 1` },
    { label: 'Medium (LIMIT 100, ~10KB)', sql: `SELECT * FROM ${TABLE} LIMIT 100` },
    { label: 'Large (LIMIT 1000, ~100KB)', sql: `SELECT * FROM ${TABLE} LIMIT 1000` }
  ];

  const results = [];

  for (const q of queries) {
    console.log(`\n  Executing: ${q.label}...`);
    const js = await runBenchmark(() => db.executeSqlJs(q.sql), 1, 5000);
    const rust = await runBenchmark(() => rustClient.executeSqlNative(q.sql), 1, 5000);
    const go = await runBenchmark(() => goClient.executeSqlNative(q.sql), 1, 5000);

    const rustSpeedup = (rust.qps / (js.qps || 1)).toFixed(2);
    const goSpeedup = (go.qps / (js.qps || 1)).toFixed(2);
    const rustLatImp = (((js.p95 - rust.p95) / (js.p95 || 1)) * 100).toFixed(1);
    const goLatImp = (((js.p95 - go.p95) / (js.p95 || 1)) * 100).toFixed(1);

    console.log(`    JavaScript Baseline    : ${js.qps.toFixed(1)} QPS | p50: ${js.p50.toFixed(2)}ms | p95: ${js.p95.toFixed(2)}ms | Lag: ${js.avgLagMs.toFixed(2)}ms`);
    console.log(`    Rust Shared Core (1 Ch): ${rust.qps.toFixed(1)} QPS | p50: ${rust.p50.toFixed(2)}ms | p95: ${rust.p95.toFixed(2)}ms | Lag: ${rust.avgLagMs.toFixed(2)}ms (${rustSpeedup}x speedup, ${rustLatImp}% lat imp)`);
    console.log(`    Go DirectPath    (1 Ch): ${go.qps.toFixed(1)} QPS | p50: ${go.p50.toFixed(2)}ms | p95: ${go.p95.toFixed(2)}ms | Lag: ${go.avgLagMs.toFixed(2)}ms (${goSpeedup}x speedup, ${goLatImp}% lat imp)`);

    results.push({
      query: q.label,
      javascript: js,
      rust_1ch: rust,
      go_directpath_1ch: go
    });
  }

  return results;
}

// ════════════════════════════════════════════════════════════════
// TEST 2: Customer Case Replication (110 Concurrency, 1000 Total Requests)
// ════════════════════════════════════════════════════════════════
async function runTest2(db, rustClients, goClients) {
  console.log('\n' + '='.repeat(110));
  console.log('[TEST 2: Customer Case Replication (110 Concurrency, 1000 Total Requests)]');
  console.log(`Query: ${SQL}`);
  console.log('='.repeat(110));

  console.log('  Executing JavaScript Baseline...');
  const jsRes = await runCustomerReplication(() => db.executeSqlJs(SQL), 110, 1000);

  const rustRes16 = await runCustomerReplication(() => rustClients[16].executeSqlNative(SQL), 110, 1000);
  const rustRes32 = await runCustomerReplication(() => rustClients[32].executeSqlNative(SQL), 110, 1000);
  const rustRes50 = await runCustomerReplication(() => rustClients[50].executeSqlNative(SQL), 110, 1000);

  const goRes16 = await runCustomerReplication(() => goClients[16].executeSqlNative(SQL), 110, 1000);
  const goRes32 = await runCustomerReplication(() => goClients[32].executeSqlNative(SQL), 110, 1000);
  const goRes50 = await runCustomerReplication(() => goClients[50].executeSqlNative(SQL), 110, 1000);

  const printSummary = (label, r, base = null) => {
    console.log(`\n  [${label}]`);
    console.log(`    Total Time : ${r.totalTimeMs.toFixed(2)}ms | QPS: ${r.qps.toFixed(2)}`);
    console.log(`    p50 / p95  : ${r.p50.toFixed(2)}ms / ${r.p95.toFixed(2)}ms (p99: ${r.p99.toFixed(2)}ms)`);
    console.log(`    Avg EL Lag : ${r.avgLagMs.toFixed(2)}ms (Max: ${r.maxLagMs.toFixed(2)}ms) | CPU: ${r.cpuUtil.toFixed(1)}%`);
    if (base) {
      const speedup = (r.qps / (base.qps || 1)).toFixed(2);
      const latImp = (((base.p95 - r.p95) / (base.p95 || 1)) * 100).toFixed(1);
      console.log(`    Speedup vs Baseline: \x1b[32m${speedup}x\x1b[0m | p95 Latency Imp: \x1b[32m${latImp}%\x1b[0m`);
    }
  };

  printSummary('JavaScript Baseline', jsRes);
  printSummary('Rust (16 Channels)', rustRes16, jsRes);
  printSummary('Rust (32 Channels)', rustRes32, jsRes);
  printSummary('Rust (50 Channels)', rustRes50, jsRes);
  printSummary('Go DirectPath (16 Channels)', goRes16, jsRes);
  printSummary('Go DirectPath (32 Channels)', goRes32, jsRes);
  printSummary('Go DirectPath (50 Channels)', goRes50, jsRes);

  return {
    javascript: jsRes,
    rust_16ch: rustRes16,
    rust_32ch: rustRes32,
    rust_50ch: rustRes50,
    go_directpath_16ch: goRes16,
    go_directpath_32ch: goRes32,
    go_directpath_50ch: goRes50
  };
}

// ════════════════════════════════════════════════════════════════
// TEST 3: Full Concurrency Matrix (Channel Count 4 ONLY)
// ════════════════════════════════════════════════════════════════
async function runTest3(db, rustClient4, goClient4) {
  console.log('\n' + '='.repeat(110));
  console.log(`[TEST 3: Full Concurrency Matrix — Channel Count ${MATRIX_CHANNEL_COUNT} ONLY]`);
  console.log(`Duration: ${DURATION_MS / 1000}s per test point | Concurrency Levels: ${CONCURRENCY_LEVELS.join(', ')}`);
  console.log('='.repeat(110));

  const columns = [
    { text: 'Concurrency', width: 12 },
    { text: 'Method', width: 26 },
    { text: 'QPS / p95', width: 18 },
    { text: 'p50 (ms)', width: 10 },
    { text: 'p99 (ms)', width: 10 },
    { text: 'Avg EL Lag', width: 12 },
    { text: 'Max EL Lag', width: 12 },
    { text: 'CPU Util', width: 10 },
    { text: 'Speedup', width: 10 },
    { text: 'Lat Imp', width: 10 }
  ];

  const formatHeader = () => columns.map(c => c.text.padEnd(c.width)).join(' | ');
  const formatDivider = () => columns.map(c => '-'.repeat(c.width)).join(' |-|');

  console.log(formatHeader());
  console.log(formatDivider());

  const matrixResults = [];

  for (const concurrency of CONCURRENCY_LEVELS) {
    // 1. JS Baseline
    const jsRes = await runBenchmark(() => db.executeSqlJs(SQL), concurrency, DURATION_MS);
    const jsQpsP95 = `${jsRes.qps.toFixed(1)} / ${jsRes.p95.toFixed(1)}`;

    console.log([
      String(concurrency).padEnd(12),
      'JavaScript Baseline'.padEnd(26),
      jsQpsP95.padEnd(18),
      jsRes.p50.toFixed(1).padEnd(10),
      jsRes.p99.toFixed(1).padEnd(10),
      `${jsRes.avgLagMs.toFixed(1)}ms`.padEnd(12),
      `${jsRes.maxLagMs.toFixed(1)}ms`.padEnd(12),
      `${jsRes.cpuUtil.toFixed(1)}%`.padEnd(10),
      '-'.padEnd(10),
      '-'.padEnd(10)
    ].join(' | '));

    // 2. Rust Native (4 Channels)
    const rustRes = await runBenchmark(() => rustClient4.executeSqlNative(SQL), concurrency, DURATION_MS);
    const rustSpeedup = jsRes.qps > 0 ? (rustRes.qps / jsRes.qps).toFixed(2) + 'x' : '0.00x';
    const rustLatImp = jsRes.p95 > 0 ? (((jsRes.p95 - rustRes.p95) / jsRes.p95) * 100).toFixed(1) + '%' : '0.0%';
    const rustQpsP95 = `${rustRes.qps.toFixed(1)} / ${rustRes.p95.toFixed(1)}`;

    console.log([
      String(concurrency).padEnd(12),
      `Rust (${MATRIX_CHANNEL_COUNT} Ch)`.padEnd(26),
      rustQpsP95.padEnd(18),
      rustRes.p50.toFixed(1).padEnd(10),
      rustRes.p99.toFixed(1).padEnd(10),
      `${rustRes.avgLagMs.toFixed(1)}ms`.padEnd(12),
      `${rustRes.maxLagMs.toFixed(1)}ms`.padEnd(12),
      `${rustRes.cpuUtil.toFixed(1)}%`.padEnd(10),
      rustSpeedup.padEnd(10),
      rustLatImp.padEnd(10)
    ].join(' | '));

    // 3. Go DirectPath Native (4 Channels)
    const goRes = await runBenchmark(() => goClient4.executeSqlNative(SQL), concurrency, DURATION_MS);
    const goSpeedup = jsRes.qps > 0 ? (goRes.qps / jsRes.qps).toFixed(2) + 'x' : '0.00x';
    const goLatImp = jsRes.p95 > 0 ? (((jsRes.p95 - goRes.p95) / jsRes.p95) * 100).toFixed(1) + '%' : '0.0%';
    const goQpsP95 = `${goRes.qps.toFixed(1)} / ${goRes.p95.toFixed(1)}`;

    console.log([
      String(concurrency).padEnd(12),
      `Go DirectPath (${MATRIX_CHANNEL_COUNT} Ch)`.padEnd(26),
      goQpsP95.padEnd(18),
      goRes.p50.toFixed(1).padEnd(10),
      goRes.p99.toFixed(1).padEnd(10),
      `${goRes.avgLagMs.toFixed(1)}ms`.padEnd(12),
      `${goRes.maxLagMs.toFixed(1)}ms`.padEnd(12),
      `${goRes.cpuUtil.toFixed(1)}%`.padEnd(10),
      goSpeedup.padEnd(10),
      goLatImp.padEnd(10)
    ].join(' | '));

    console.log('-'.repeat(110));

    matrixResults.push({
      concurrency,
      javascript: jsRes,
      rust_4ch: rustRes,
      go_directpath_4ch: goRes,
      rustSpeedup,
      rustLatImp,
      goSpeedup,
      goLatImp
    });
  }

  return matrixResults;
}

// ════════════════════════════════════════════════════════════════
// MAIN RUNNER
// ════════════════════════════════════════════════════════════════
async function main() {
  console.log('='.repeat(110));
  console.log('  3-WAY COMPARATIVE BENCHMARK: NODE.JS BASELINE vs RUST CORE vs GO DIRECTPATH');
  console.log('='.repeat(110));
  console.log(`Node.js Version: ${process.version}`);
  console.log(`OS Platform    : ${process.platform} (${process.arch})`);
  console.log(`CPU Cores      : ${os.cpus().length} core(s)`);
  console.log(`Target Database: projects/${PROJECT}/instances/${INSTANCE}/databases/${DATABASE}`);
  console.log(`Target Query   : ${SQL}`);
  console.log(`Go Config      : DirectPath = ON, Native Cells = ON`);
  console.log('-'.repeat(110));

  console.log('Initializing client instances...');
  const db = new NativeSpannerDatabase(PROJECT, INSTANCE, DATABASE);

  const rustClients = {
    1: new NativeSpannerDatabase(PROJECT, INSTANCE, DATABASE, 1, 'rust'),
    4: new NativeSpannerDatabase(PROJECT, INSTANCE, DATABASE, 4, 'rust'),
    16: new NativeSpannerDatabase(PROJECT, INSTANCE, DATABASE, 16, 'rust'),
    32: new NativeSpannerDatabase(PROJECT, INSTANCE, DATABASE, 32, 'rust'),
    50: new NativeSpannerDatabase(PROJECT, INSTANCE, DATABASE, 50, 'rust'),
  };

  const goClients = {
    1: new NativeSpannerDatabase(PROJECT, INSTANCE, DATABASE, 1, 'go'),
    4: new NativeSpannerDatabase(PROJECT, INSTANCE, DATABASE, 4, 'go'),
    16: new NativeSpannerDatabase(PROJECT, INSTANCE, DATABASE, 16, 'go'),
    32: new NativeSpannerDatabase(PROJECT, INSTANCE, DATABASE, 32, 'go'),
    50: new NativeSpannerDatabase(PROJECT, INSTANCE, DATABASE, 50, 'go'),
  };

  console.log(`Warming up connections and auth tokens (${WARMUP_MS / 1000}s)...`);
  await runBenchmark(() => db.executeSqlJs(SQL), 2, WARMUP_MS / 2);
  await runBenchmark(() => rustClients[4].executeSqlNative(SQL), 2, WARMUP_MS / 2);
  await runBenchmark(() => goClients[4].executeSqlNative(SQL), 2, WARMUP_MS / 2);
  console.log('Warmup complete.');

  // Execute Suites
  const test1Results = await runTest1(db, rustClients[1], goClients[1]);
  const test2Results = await runTest2(db, rustClients, goClients);
  const test3Results = await runTest3(db, rustClients[4], goClients[4]);

  // Save results to JSON
  const outputData = {
    systemInfo: {
      node: process.version,
      platform: process.platform,
      arch: process.arch,
      cores: os.cpus().length,
      go_directpath: true,
      go_native_cells: true,
    },
    test1_readVolumeScaling: test1Results,
    test2_customerReplication: test2Results,
    test3_concurrencyMatrix_4channels: test3Results
  };

  const outFile = 'benchmark_results_3way_directpath.json';
  fs.writeFileSync(outFile, JSON.stringify(outputData, null, 2));
  console.log(`\nFull benchmark results saved to ${outFile}`);

  // Cleanup
  db.close();
  for (const ch of Object.keys(rustClients)) rustClients[ch].close();
  for (const ch of Object.keys(goClients)) goClients[ch].close();

  process.exit(0);
}

main().catch((err) => {
  console.error('Critical benchmark failure:', err);
  process.exit(1);
});
