/**
 * ================================================================================================
 * GOOGLE CLOUD SPANNER 3-WAY OPTIMIZED COMPARATIVE BENCHMARK
 * 
 * Compares:
 * 1. Node.js Baseline (Pure JS @google-cloud/spanner over GFE)
 * 2. Go Shared Core with DirectPath & Native Cells Enabled (Optimal Go Performance)
 * 3. Rust Shared Core (spanner-core + napi-rs over GFE)
 * ================================================================================================
 */

const fs = require('fs');
const os = require('os');
const { performance } = require('perf_hooks');
const { NativeSpannerDatabase } = require('./poc_bridge.js');

// ════════════════════════════════════════════════════════════════
// ENVIRONMENT CONFIGURATION FOR BEST PERFORMANCE
// ════════════════════════════════════════════════════════════════
// Enable DirectPath routing and native cell deserialization for Go Shared Core
process.env.GOOGLE_SPANNER_ENABLE_DIRECT_ACCESS = 'true';
process.env.GOOGLE_CLOUD_ENABLE_DIRECT_PATH = 'true';
process.env.SPANNER_GO_DIRECT_DESERIALIZATION = 'true';
process.env.GOOGLE_CLOUD_SPANNER_MULTIPLEXED_SESSIONS = 'true';

// ════════════════════════════════════════════════════════════════
// BENCHMARK CONFIGURATION
// ════════════════════════════════════════════════════════════════
const PROJECT  = 'span-cloud-testing';
const INSTANCE = 'suvham-testing';
const DATABASE = 'benchmark_db_async';
const TABLE    = 'AsyncBenchmarkTable';

const SQL = `SELECT 1 as col_int, 'CONSTANT' as col_const`;
const WARMUP_MS = process.env.LOCAL_MOCK_TEST ? 2000 : 10_000;
const DURATION_MS = process.env.LOCAL_MOCK_TEST ? 3000 : 30_000;
const CONCURRENCY_LEVELS = [1, 8, 12, 32];
const CHANNELS_TEST = process.env.LOCAL_MOCK_TEST ? [4] : [1, 4, 8, 10, 12, 16, 20];

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

/**
 * Maintains exactly N requests in flight simultaneously to model sustained load.
 */
async function keepNInFlight(executeFn, concurrency, durationMs) {
  const latencies = [];
  let errors = 0;
  let stopped = false;
  let inFlight = 0;

  return new Promise((resolve) => {
    function launchOne() {
      if (stopped && inFlight === 0) {
        resolve({ latencies, errors });
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
            if (err.statusDetails) {
              console.error('Status Details:', JSON.stringify(err.statusDetails, null, 2));
            }
          }
        })
        .finally(() => {
          inFlight--;
          launchOne();
          if (stopped && inFlight === 0) {
            resolve({ latencies, errors });
          }
        });
    }

    for (let i = 0; i < concurrency; i++) launchOne();
    setTimeout(() => { stopped = true; }, durationMs);
  });
}

/**
 * Measures event loop lag (delay in processing callback queues) to verify V8 thread health.
 */
async function measureEventLoopLag(durationMs) {
  const lags = [];
  let stopped = false;

  const measure = () => {
    if (stopped) return;
    const before = performance.now();
    setImmediate(() => {
      const lag = performance.now() - before;
      lags.push(lag);
      setTimeout(measure, 10);
    });
  };

  measure();

  return new Promise((resolve) => {
    setTimeout(() => {
      stopped = true;
      const maxLag = Math.max(...lags, 0);
      const avgLag = lags.reduce((a, b) => a + b, 0) / (lags.length || 1);
      resolve({ maxLag, avgLag });
    }, durationMs);
  });
}

/**
 * Runs sustained benchmark and returns performance metrics.
 */
async function runBenchmark(executeFn, concurrency, durationMs) {
  const cpuMonitor = new CPUMonitor();
  cpuMonitor.start();

  const [{ latencies, errors }, lagStats] = await Promise.all([
    keepNInFlight(executeFn, concurrency, durationMs),
    measureEventLoopLag(durationMs),
  ]);

  const cpuUtil = cpuMonitor.stop();

  if (latencies.length === 0) {
    return {
      qps: 0.0,
      p50: 0.0,
      p95: 0.0,
      p99: 0.0,
      errorRate: 1.0,
      total: errors,
      maxLagMs: lagStats.maxLag,
      avgLagMs: lagStats.avgLag,
      cpuUtil: cpuUtil,
    };
  }

  latencies.sort((a, b) => a - b);
  const getPercentile = (p) => {
    const idx = Math.ceil((p / 100) * latencies.length) - 1;
    return latencies[Math.max(0, idx)];
  };

  const total = latencies.length + errors;

  return {
    qps: latencies.length / (durationMs / 1000),
    p50: getPercentile(50),
    p95: getPercentile(95),
    p99: getPercentile(99),
    errorRate: errors / total,
    total,
    maxLagMs: lagStats.maxLag,
    avgLagMs: lagStats.avgLag,
    cpuUtil: cpuUtil,
  };
}

/**
 * Runs a fixed-request count customer replication benchmark.
 */
async function runFixedCountBenchmark(executeFn, concurrency, totalRequests) {
  const latencies = [];
  let errors = 0;
  let launched = 0;
  let completed = 0;
  const startBench = performance.now();

  const cpuMonitor = new CPUMonitor();
  cpuMonitor.start();

  const lags = [];
  let lagStopped = false;
  const measureLag = () => {
    if (lagStopped) return;
    const before = performance.now();
    setImmediate(() => {
      lags.push(performance.now() - before);
      setTimeout(measureLag, 10);
    });
  };
  measureLag();

  return new Promise((resolve) => {
    function launchOne() {
      if (completed >= totalRequests) {
        lagStopped = true;
        const elapsed = performance.now() - startBench;
        const cpuUtil = cpuMonitor.stop();

        const maxLag = Math.max(...lags, 0);
        const avgLag = lags.reduce((a, b) => a + b, 0) / (lags.length || 1);

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
          maxLagMs: maxLag,
          avgLagMs: avgLag,
          cpuUtil: cpuUtil
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
            console.error('\n[Fixed Count Request Error]:', err.message || err);
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

/**
 * Runs Advanced Systems Verification Plan tests (Test 1, 2, 4)
 */
async function runVerificationPlanTests(db, rustClients, goClients) {
  console.log('\n' + '='.repeat(100));
  console.log('ADVANCED SYSTEMS VERIFICATION PLAN SUITE: JS vs GO (DIRECTPATH+NATIVE) vs RUST');
  console.log('='.repeat(100));

  // ------------------------------------------------------------------
  // TEST 1: Varying Result Set Size (Read Volume Scaling)
  // ------------------------------------------------------------------
  console.log('\n[TEST 1: Varying Result Set Size (Read Volume Scaling)]');
  console.log('Goal: Profile V8 N-API object allocation and network streaming under growing payloads.');
  
  const t1Queries = [
    { label: 'Small (LIMIT 1, ~100B)', sql: `SELECT * FROM ${TABLE} LIMIT 1` },
    { label: 'Medium (LIMIT 100, ~10KB)', sql: `SELECT * FROM ${TABLE} LIMIT 100` },
    { label: 'Large (LIMIT 1000, ~100KB)', sql: `SELECT * FROM ${TABLE} LIMIT 1000` }
  ];

  const t1Results = [];

  for (const q of t1Queries) {
    console.log(`\n  Executing: ${q.label}...`);
    const duration = process.env.LOCAL_MOCK_TEST ? 2000 : 5000;
    const js = await runBenchmark(() => db.executeSqlJs(q.sql), 1, duration);
    const rust = await runBenchmark(() => rustClients[1].executeSqlNative(q.sql), 1, duration);
    const go = await runBenchmark(() => goClients[1].executeSqlNative(q.sql), 1, duration);

    const rustSpeedup = js.qps > 0 ? (rust.qps / js.qps).toFixed(2) : '1.00';
    const goSpeedup   = js.qps > 0 ? (go.qps / js.qps).toFixed(2) : '1.00';
    const rustLatImp  = js.p95 > 0 ? (((js.p95 - rust.p95) / js.p95) * 100).toFixed(1) : '0.0';
    const goLatImp    = js.p95 > 0 ? (((js.p95 - go.p95) / js.p95) * 100).toFixed(1) : '0.0';

    console.log(`    JavaScript Baseline    : ${js.qps.toFixed(1)} QPS | p50=${js.p50.toFixed(2)}ms | p95=${js.p95.toFixed(2)}ms | Lag=${js.avgLagMs.toFixed(2)}ms`);
    console.log(`    Go (DirectPath+Native) : ${go.qps.toFixed(1)} QPS | p50=${go.p50.toFixed(2)}ms | p95=${go.p95.toFixed(2)}ms | Lag=${go.avgLagMs.toFixed(2)}ms | Speedup: ${goSpeedup}x (${goLatImp}%)`);
    console.log(`    Rust (GFE Native)      : ${rust.qps.toFixed(1)} QPS | p50=${rust.p50.toFixed(2)}ms | p95=${rust.p95.toFixed(2)}ms | Lag=${rust.avgLagMs.toFixed(2)}ms | Speedup: ${rustSpeedup}x (${rustLatImp}%)`);

    t1Results.push({ label: q.label, sql: q.sql, js, go, rust });
  }

  // ------------------------------------------------------------------
  // TEST 2: Wide Rows with Mixed Spanner Types Correctness
  // ------------------------------------------------------------------
  console.log('\n[TEST 2: Wide Rows with Mixed Spanner Types Correctness]');
  console.log('Goal: Verify type decoding correctness across all primitive types.');
  
  const typeQuery = `
    SELECT 
      CAST(9223372036854775807 AS INT64) AS max_int64,
      CAST(123.456 AS FLOAT64) AS float_col,
      'hello spanner string' AS string_col,
      true AS bool_col,
      CURRENT_TIMESTAMP() AS timestamp_col,
      CURRENT_DATE() AS date_col,
      CAST('base64bytes' AS BYTES) AS bytes_col,
      JSON '{"spanner_key": "spanner_val"}' AS json_col,
      CAST(123456789.123456789 AS NUMERIC) AS numeric_col,
      ['arr1', 'arr2', 'arr3'] AS array_col
  `;

  console.log('  Verifying data type correctness across JavaScript, Go (DirectPath+Native), and Rust...');
  try {
    const [jsRows] = await db.database.run({ sql: typeQuery });
    const jsMapped = jsRows.map(row => {
      const json = row.toJSON({ wrapNumbers: true });
      return Object.values(json).map(v => String(v ?? 'null'));
    });

    const rustMapped = await rustClients[4].executeSqlNative(typeQuery);
    const goMapped   = await goClients[4].executeSqlNative(typeQuery);

    console.log('    JavaScript returned        :', JSON.stringify(jsMapped[0]));
    console.log('    Go (DirectPath+Native) ret :', JSON.stringify(goMapped[0]));
    console.log('    Rust Native returned       :', JSON.stringify(rustMapped[0]));

    const isRustCorrect = JSON.stringify(jsMapped[0]) === JSON.stringify(rustMapped[0]);
    const isGoCorrect   = JSON.stringify(jsMapped[0]) === JSON.stringify(goMapped[0]);

    console.log(`    Go (DirectPath+Native) Correctness: ${isGoCorrect ? '\x1b[32mPASS (Identical Output)\x1b[0m' : '\x1b[31mFAIL (Mismatch)\x1b[0m'}`);
    console.log(`    Rust Native Correctness           : ${isRustCorrect ? '\x1b[32mPASS (Identical Output)\x1b[0m' : '\x1b[31mFAIL (Mismatch)\x1b[0m'}`);
  } catch (err) {
    console.warn('    Type verification skipped or caught error:', err.message || err);
  }

  // ------------------------------------------------------------------
  // TEST 4: High Concurrency with Session Pool Pressure
  // ------------------------------------------------------------------
  console.log('\n[TEST 4: High Concurrency with Session Pool Pressure]');
  console.log('Goal: Compare standard session pool locks against lock-free multiplexed sessions.');
  
  const stressConcurrency = process.env.LOCAL_MOCK_TEST ? 4 : 64;
  const stressDuration = process.env.LOCAL_MOCK_TEST ? 2000 : 5000;

  // Scenario 4a: Standard Session Pool (Multiplexing: OFF)
  console.log('  Running Scenario 4a: Standard Session Pool (Multiplexing: OFF)...');
  process.env.GOOGLE_CLOUD_SPANNER_MULTIPLEXED_SESSIONS = 'false';
  const standardDb = new NativeSpannerDatabase(PROJECT, INSTANCE, DATABASE, 16);
  await runBenchmark(() => standardDb.executeSqlJs(SQL), 2, 2000);
  const poolJs   = await runBenchmark(() => standardDb.executeSqlJs(SQL), stressConcurrency, stressDuration);
  const poolRust = await runBenchmark(() => rustClients[16].executeSqlNative(SQL), stressConcurrency, stressDuration);
  const poolGo   = await runBenchmark(() => goClients[16].executeSqlNative(SQL), stressConcurrency, stressDuration);
  await standardDb.close();

  // Scenario 4b: Multiplexed Session (Multiplexing: ON)
  console.log('  Running Scenario 4b: Multiplexed Session (Multiplexing: ON)...');
  process.env.GOOGLE_CLOUD_SPANNER_MULTIPLEXED_SESSIONS = 'true';
  const multiJs   = await runBenchmark(() => db.executeSqlJs(SQL), stressConcurrency, stressDuration);
  const multiRust = await runBenchmark(() => rustClients[16].executeSqlNative(SQL), stressConcurrency, stressDuration);
  const multiGo   = await runBenchmark(() => goClients[16].executeSqlNative(SQL), stressConcurrency, stressDuration);

  console.log('\n  [Test 4 Results Comparison]');
  console.log(`    Standard Pool (OFF) QPS: JS ${poolJs.qps.toFixed(1)} | Go(DP+Native) ${poolGo.qps.toFixed(1)} | Rust ${poolRust.qps.toFixed(1)}`);
  console.log(`    Multiplexed (ON) QPS   : JS ${multiJs.qps.toFixed(1)} | Go(DP+Native) ${multiGo.qps.toFixed(1)} | Rust ${multiRust.qps.toFixed(1)}`);
  console.log('='.repeat(100) + '\n');

  return { test1: t1Results, test4: { poolJs, poolGo, poolRust, multiJs, multiGo, multiRust } };
}

async function main() {
  console.log('='.repeat(120));
  console.log('3-WAY SPANNER BENCHMARK: NODE.JS BASELINE vs GO (DIRECTPATH+NATIVE) vs RUST SHARED CORE');
  console.log('='.repeat(120));
  console.log(`Node.js Version: ${process.version}`);
  console.log(`CPU Cores      : ${os.cpus().length}`);
  console.log(`System Platform: ${os.platform()} (${os.arch()})`);
  console.log(`DirectPath     : ENABLED (ALTS gRPC)`);
  console.log(`Go Native Cells: ENABLED (Zero JSON.parse)`);
  console.log(`Target Query   : ${SQL}`);
  console.log(`Warmup Duration: ${WARMUP_MS}ms`);
  console.log(`Run Duration   : ${DURATION_MS}ms`);
  console.log('-'.repeat(120));

  console.log('Initializing Spanner database connection instances...');
  const db = new NativeSpannerDatabase(PROJECT, INSTANCE, DATABASE);

  // Pre-initialize connection channel pools for Rust and Go
  const channelList = [1, 4, 8, 10, 12, 16, 20, 32, 50];
  const rustClients = {};
  const goClients = {};

  for (const channels of channelList) {
    rustClients[channels] = new NativeSpannerDatabase(PROJECT, INSTANCE, DATABASE, channels, 'rust');
    goClients[channels]   = new NativeSpannerDatabase(PROJECT, INSTANCE, DATABASE, channels, 'go');
  }

  console.log('Warming up connection pools, JIT compiler, and OAuth2 token caches...');
  await runBenchmark(() => db.executeSqlJs(SQL), 2, WARMUP_MS);

  for (const ch of [1, 4, 8, 16, 32, 50]) {
    if (goClients[ch])   await runBenchmark(() => goClients[ch].executeSqlNative(SQL), 2, WARMUP_MS);
    if (rustClients[ch]) await runBenchmark(() => rustClients[ch].executeSqlNative(SQL), 2, WARMUP_MS);
  }
  console.log('Warmup complete.');

  // Run Systems Verification Plan Tests (Test 1, 2, 4)
  const verificationResults = await runVerificationPlanTests(db, rustClients, goClients);

  // ════════════════════════════════════════════════════════════════
  // CUSTOMER REPLICATION BENCHMARK (110 Concurrency, 1000 Total Requests)
  // ════════════════════════════════════════════════════════════════
  console.log('\nExecuting Customer Case Replication (110 Concurrency, 1000 Requests)...');
  console.log('='.repeat(100));

  const targetReqs = process.env.LOCAL_MOCK_TEST ? 50 : 1000;
  const targetConc = process.env.LOCAL_MOCK_TEST ? 4 : 110;

  console.log('Running JavaScript baseline...');
  const custJs = await runFixedCountBenchmark(() => db.executeSqlJs(SQL), targetConc, targetReqs);

  console.log('Running Go Shared Core (DirectPath + Native Cells, 16 Channels)...');
  const custGo16 = await runFixedCountBenchmark(() => goClients[16].executeSqlNative(SQL), targetConc, targetReqs);
  console.log('Running Go Shared Core (DirectPath + Native Cells, 32 Channels)...');
  const custGo32 = await runFixedCountBenchmark(() => goClients[32].executeSqlNative(SQL), targetConc, targetReqs);
  console.log('Running Go Shared Core (DirectPath + Native Cells, 50 Channels)...');
  const custGo50 = await runFixedCountBenchmark(() => goClients[50].executeSqlNative(SQL), targetConc, targetReqs);

  console.log('Running Rust Shared Core (16 Channels)...');
  const custRust16 = await runFixedCountBenchmark(() => rustClients[16].executeSqlNative(SQL), targetConc, targetReqs);
  console.log('Running Rust Shared Core (32 Channels)...');
  const custRust32 = await runFixedCountBenchmark(() => rustClients[32].executeSqlNative(SQL), targetConc, targetReqs);
  console.log('Running Rust Shared Core (50 Channels)...');
  const custRust50 = await runFixedCountBenchmark(() => rustClients[50].executeSqlNative(SQL), targetConc, targetReqs);

  console.log('\n' + '='.repeat(100));
  console.log('CUSTOMER BENCHMARK REPLICATION SUMMARY');
  console.log('='.repeat(100));

  const printSummary = (label, r, base = null) => {
    console.log(`\n  [${label}]`);
    console.log(`  Total Time          : ${r.totalTimeMs.toFixed(2)}ms`);
    console.log(`  Throughput (QPS)    : ${r.qps.toFixed(2)}`);
    console.log(`  p50 Latency         : ${r.p50.toFixed(2)}ms`);
    console.log(`  p90 Latency         : ${r.p90.toFixed(2)}ms`);
    console.log(`  p95 Latency         : ${r.p95.toFixed(2)}ms`);
    console.log(`  p99 Latency         : ${r.p99.toFixed(2)}ms`);
    console.log(`  Event Loop Lag (Avg): ${r.avgLagMs.toFixed(2)}ms (Max: ${r.maxLagMs.toFixed(2)}ms)`);
    console.log(`  CPU Utilization     : ${r.cpuUtil.toFixed(1)}%`);
    if (base && base.qps > 0) {
      const speedup = r.qps / base.qps;
      const latImp  = ((base.p95 - r.p95) / base.p95) * 100;
      console.log(`  Throughput Speedup  : \x1b[32m${speedup.toFixed(2)}x\x1b[0m`);
      console.log(`  p95 Latency Imp. %  : \x1b[32m${latImp.toFixed(1)}%\x1b[0m`);
    }
  };

  printSummary('JavaScript Baseline', custJs);
  printSummary('Go DirectPath+Native (16 Channels)', custGo16, custJs);
  printSummary('Go DirectPath+Native (32 Channels)', custGo32, custJs);
  printSummary('Go DirectPath+Native (50 Channels)', custGo50, custJs);
  printSummary('Rust Native Core (16 Channels)', custRust16, custJs);
  printSummary('Rust Native Core (32 Channels)', custRust32, custJs);
  printSummary('Rust Native Core (50 Channels)', custRust50, custJs);

  // ════════════════════════════════════════════════════════════════
  // FULL CONCURRENCY & CHANNEL MATRIX BENCHMARK
  // ════════════════════════════════════════════════════════════════
  console.log('\n' + '='.repeat(160));
  console.log('FULL CONCURRENCY & CONNECTION CHANNEL MATRIX (JS BASELINE vs GO DIRECTPATH+NATIVE vs RUST NATIVE)');
  console.log('='.repeat(160));

  const columns = [
    { text: 'Concurrency', width: 12 },
    { text: 'Method', width: 28 },
    { text: 'QPS / p95 (ms)', width: 20 },
    { text: 'p50 (ms)', width: 10 },
    { text: 'p99 (ms)', width: 10 },
    { text: 'Avg EL Lag', width: 12 },
    { text: 'Max EL Lag', width: 12 },
    { text: 'CPU Util', width: 10 },
    { text: 'Speedup', width: 10 },
    { text: 'Lat Imp', width: 10 }
  ];

  const formatHeader  = () => columns.map(c => c.text.padEnd(c.width)).join(' | ');
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
      'JavaScript Baseline'.padEnd(28),
      jsQpsP95.padEnd(20),
      jsRes.p50.toFixed(1).padEnd(10),
      jsRes.p99.toFixed(1).padEnd(10),
      `${jsRes.avgLagMs.toFixed(2)}ms`.padEnd(12),
      `${jsRes.maxLagMs.toFixed(2)}ms`.padEnd(12),
      `${jsRes.cpuUtil.toFixed(1)}%`.padEnd(10),
      '1.00x'.padEnd(10),
      '0.0%'.padEnd(10)
    ].join(' | '));

    const levelResult = {
      concurrency,
      javascript: jsRes,
    };

    // 2. Go DirectPath + Native Cells Execution
    for (const channels of CHANNELS_TEST) {
      const goRes = await runBenchmark(() => goClients[channels].executeSqlNative(SQL), concurrency, DURATION_MS);
      const speedup = jsRes.qps > 0 ? goRes.qps / jsRes.qps : 1.0;
      const latImp  = jsRes.p95 > 0 ? ((jsRes.p95 - goRes.p95) / jsRes.p95) * 100 : 0.0;

      const goQpsP95 = `${goRes.qps.toFixed(1)} / ${goRes.p95.toFixed(1)}`;
      const speedupStr = `${speedup.toFixed(2)}x`;
      const latImpStr  = `${latImp.toFixed(1)}%`;

      console.log([
        String(concurrency).padEnd(12),
        `Go DirectPath (${channels} Ch)`.padEnd(28),
        goQpsP95.padEnd(20),
        goRes.p50.toFixed(1).padEnd(10),
        goRes.p99.toFixed(1).padEnd(10),
        `${goRes.avgLagMs.toFixed(2)}ms`.padEnd(12),
        `${goRes.maxLagMs.toFixed(2)}ms`.padEnd(12),
        `${goRes.cpuUtil.toFixed(1)}%`.padEnd(10),
        speedupStr.padEnd(10),
        latImpStr.padEnd(10)
      ].join(' | '));

      levelResult[`go_dp_${channels}ch`] = goRes;
      levelResult[`speedup_go_dp_${channels}ch`] = speedup;
      levelResult[`latImp_go_dp_${channels}ch`] = latImp;
    }

    // 3. Rust Native Shared Core Execution
    for (const channels of CHANNELS_TEST) {
      const rustRes = await runBenchmark(() => rustClients[channels].executeSqlNative(SQL), concurrency, DURATION_MS);
      const speedup = jsRes.qps > 0 ? rustRes.qps / jsRes.qps : 1.0;
      const latImp  = jsRes.p95 > 0 ? ((jsRes.p95 - rustRes.p95) / jsRes.p95) * 100 : 0.0;

      const rustQpsP95 = `${rustRes.qps.toFixed(1)} / ${rustRes.p95.toFixed(1)}`;
      const speedupStr = `${speedup.toFixed(2)}x`;
      const latImpStr  = `${latImp.toFixed(1)}%`;

      console.log([
        String(concurrency).padEnd(12),
        `Rust Native (${channels} Ch)`.padEnd(28),
        rustQpsP95.padEnd(20),
        rustRes.p50.toFixed(1).padEnd(10),
        rustRes.p99.toFixed(1).padEnd(10),
        `${rustRes.avgLagMs.toFixed(2)}ms`.padEnd(12),
        `${rustRes.maxLagMs.toFixed(2)}ms`.padEnd(12),
        `${rustRes.cpuUtil.toFixed(1)}%`.padEnd(10),
        speedupStr.padEnd(10),
        latImpStr.padEnd(10)
      ].join(' | '));

      levelResult[`rust_${channels}ch`] = rustRes;
      levelResult[`speedup_rust_${channels}ch`] = speedup;
      levelResult[`latImp_rust_${channels}ch`] = latImp;
    }

    console.log('-'.repeat(160));
    matrixResults.push(levelResult);
  }

  // Save structured JSON results report
  const outputFileName = 'benchmark_results_3way_optimized.json';
  fs.writeFileSync(
    outputFileName,
    JSON.stringify(
      {
        systemInfo: {
          node: process.version,
          cores: os.cpus().length,
          platform: os.platform(),
          arch: os.arch(),
        },
        config: {
          sql: SQL,
          durationMs: DURATION_MS,
          channels: CHANNELS_TEST,
          concurrency: CONCURRENCY_LEVELS,
          directPath: true,
          goNativeCells: true,
        },
        verification: verificationResults,
        customerReplication: {
          js: custJs,
          go_16ch: custGo16,
          go_32ch: custGo32,
          go_50ch: custGo50,
          rust_16ch: custRust16,
          rust_32ch: custRust32,
          rust_50ch: custRust50,
        },
        matrixRuns: matrixResults,
      },
      null,
      2
    )
  );

  console.log(`\nFull 3-way comparative benchmark report successfully written to ${outputFileName}.`);
  process.exit(0);
}

main().catch((err) => {
  console.error('Critical benchmark failure:', err);
  process.exit(1);
});
