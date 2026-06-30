const fs = require('fs');
const os = require('os');
const { performance } = require('perf_hooks');
const { NativeSpannerDatabase } = require('./poc_bridge.js');

// Enable multiplexed sessions for the benchmark to maximize performance scaling
process.env.GOOGLE_CLOUD_SPANNER_MULTIPLEXED_SESSIONS = 'true';

// ════════════════════════════════════════════════════════════════
// BENCHMARK CONFIGURATION — USER TO UPDATE
// ════════════════════════════════════════════════════════════════
const PROJECT  = 'span-cloud-testing';
const INSTANCE = 'suvham-testing';
const DATABASE = 'benchmark_db_async';
const TABLE    = 'AsyncBenchmarkTable';

const SQL = {
  sql: `SELECT @id as id, @status as status`,
  params: { id: '12345', status: 'ACTIVE' },
  types: { 
    id: 'string',
    status: 'string'
  }
};
const WARMUP_MS = process.env.LOCAL_MOCK_TEST ? 100 : 10_000;
const DURATION_MS = process.env.LOCAL_MOCK_TEST ? 200 : 30_000;
const CONCURRENCY_LEVELS = process.env.LOCAL_MOCK_TEST ? [1] : [1, 2, 4, 8, 12, 32];
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
          // Console logs limited to avoid flood
          if (errors <= 5) {
            console.error('\n[Request Error]:', err);
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
 * Runs benchmark and logs metrics.
 */
async function runBenchmark(executeFn, concurrency, durationMs) {
  const cpuMonitor = new CPUMonitor();
  cpuMonitor.start();

  // Run event loop lag monitor and keep-in-flight request loops concurrently
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
 * Runs a fixed-request count benchmark (to replicate customer-specific Go/Node comparisons).
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
          if (errors <= 5) {
            console.error('\n[Fixed Count Err]:', err);
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
 * Runs advanced verification plan tests (Test 1 to Test 4) under multiplexed sessions.
 */
async function runVerificationPlanTests(db) {
  console.log('\n' + '='.repeat(100));
  console.log('STARTING ADVANCED SYSTEMS VERIFICATION PLAN SUITE');
  console.log('='.repeat(100));

  // ------------------------------------------------------------------
  // TEST 1: Varying Result Set Size (Read Volume Scaling)
  // ------------------------------------------------------------------
  console.log('\n[TEST 1: Varying Result Set Size (Read Volume Scaling)]');
  console.log('Goal: Profile V8 N-API object allocation limits under growing payloads.');
  
  const t1Queries = [
    { label: 'Small (LIMIT 1, ~100B)', sql: `SELECT * FROM ${TABLE} LIMIT 1` },
    { label: 'Medium (LIMIT 100, ~10KB)', sql: `SELECT * FROM ${TABLE} LIMIT 100` },
    { label: 'Large (LIMIT 1000, ~100KB)', sql: `SELECT * FROM ${TABLE} LIMIT 1000` }
  ];

  for (const q of t1Queries) {
    console.log(`  Executing: ${q.label}...`);
    const js = await runBenchmark(() => db.executeSqlJs(q.sql), 16, 5000); // 16 concurrency, 5s duration
    const testDb16 = new NativeSpannerDatabase(PROJECT, INSTANCE, DATABASE, 16);
    const rust = await runBenchmark(() => testDb16.executeSqlNative(q.sql), 16, 5000);
    console.log(`    JavaScript QPS / Lag: ${js.qps.toFixed(1)} QPS / ${js.avgLagMs.toFixed(2)}ms`);
    console.log(`    Rust (16 Ch) QPS / Lag: ${rust.qps.toFixed(1)} QPS / ${rust.avgLagMs.toFixed(2)}ms`);
    console.log(`    Speedup / Lat Imp   : ${(rust.qps / js.qps).toFixed(2)}x / ${(((js.p95 - rust.p95) / js.p95) * 100).toFixed(1)}%`);
  }

  // ------------------------------------------------------------------
  // TEST 2: Wide Rows with Mixed Spanner Types
  // ------------------------------------------------------------------
  console.log('\n[TEST 2: Wide Rows with Mixed Spanner Types]');
  console.log('Goal: Verify correctness and performance of Spanner-specific primitive types.');
  
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

  console.log('  Verifying data type correctness...');
  const [jsRows] = await db.database.run({ sql: typeQuery });
  const jsMapped = jsRows.map(row => {
    const json = row.toJSON({ wrapNumbers: true });
    return Object.values(json).map(v => String(v ?? 'null'));
  });
  const testDb4 = new NativeSpannerDatabase(PROJECT, INSTANCE, DATABASE, 4);
  const rustMapped = await testDb4.executeSqlNative(typeQuery);
  
  console.log('    JavaScript returned:', JSON.stringify(jsMapped[0]));
  console.log('    Rust Native returned:', JSON.stringify(rustMapped[0]));
  
  const isCorrect = JSON.stringify(jsMapped[0]) === JSON.stringify(rustMapped[0]);
  console.log(`    Correctness Verification: ${isCorrect ? '\x1b[32mPASS (Identical Output)\x1b[0m' : '\x1b[31mFAIL (Type Mismatch)\x1b[0m'}`);

  // ------------------------------------------------------------------
  // TEST 3: Read with Parameters (Parameterized Queries)
  // ------------------------------------------------------------------
  console.log('\n[TEST 3: Read with Parameters (Parameterized Queries)]');
  console.log('Goal: Profile request parameter encoding path.');
  console.log('  Current Status: Bypassed. Parameter serialization requires a dedicated Rust napi layer.');
  console.log('  Verification Status: \x1b[33mSKIPPED (Planned for Production)\x1b[0m');

  // ------------------------------------------------------------------
  // TEST 4: High Concurrency with Session Pool Pressure
  // ------------------------------------------------------------------
  console.log('\n[TEST 4: High Concurrency with Session Pool Pressure]');
  console.log('Goal: Compare standard session pool locks against lock-free cached multiplexed sessions.');
  
  const stressConcurrency = 64;

  // Scenario 4a: Standard Session Pool (Disabled Multiplexing)
  console.log('  Running Scenario 4a: Standard Session Pool (Multiplexing: OFF)...');
  process.env.GOOGLE_CLOUD_SPANNER_MULTIPLEXED_SESSIONS = 'false';
  // Force connection/pool reset to recreate standard pool
  const standardDb = new NativeSpannerDatabase(PROJECT, INSTANCE, DATABASE, 16);
  // Small warmup
  await runBenchmark(() => standardDb.executeSqlJs(SQL), 4, 3000);
  const poolJs = await runBenchmark(() => standardDb.executeSqlJs(SQL), stressConcurrency, 5000);
  const poolRust = await runBenchmark(() => standardDb.executeSqlNative(SQL), stressConcurrency, 5000);
  await standardDb.database.close(); // close the standard db

  // Scenario 4b: Multiplexed Session (Enabled Multiplexing)
  console.log('  Running Scenario 4b: Multiplexed Session (Multiplexing: ON)...');
  process.env.GOOGLE_CLOUD_SPANNER_MULTIPLEXED_SESSIONS = 'true';
  const multiDb = new NativeSpannerDatabase(PROJECT, INSTANCE, DATABASE, 16);
  const multiJs = await runBenchmark(() => multiDb.executeSqlJs(SQL), stressConcurrency, 5000);
  const multiRust = await runBenchmark(() => multiDb.executeSqlNative(SQL), stressConcurrency, 5000);

  console.log('\n  [Test 4 Results Comparison]');
  console.log(`    Standard Pool (OFF) QPS: JS ${poolJs.qps.toFixed(1)} / Rust ${poolRust.qps.toFixed(1)} (Error Rate: ${poolJs.errorRate * 100}%)`);
  console.log(`    Multiplexed (ON) QPS   : JS ${multiJs.qps.toFixed(1)} / Rust ${multiRust.qps.toFixed(1)} (Error Rate: ${multiJs.errorRate * 100}%)`);
  
  console.log('='.repeat(100) + '\n');
}

async function main() {
  // Validate placeholder values
  if (
    [PROJECT, INSTANCE, DATABASE, TABLE].some((v) =>
      ['your-project', 'your-instance', 'your-database', 'your-table'].includes(v)
    )
  ) {
    console.error('ERROR: Please configure your real GCP Spanner details at the top of benchmark.js!');
    process.exit(1);
  }

  console.log('=' * 120);
  console.log('GOOGLE CLOUD SPANNER NODE.JS NATIVE EXTENSION CONCURRENCY & CHANNEL PERFORMANCE BENCHMARK');
  console.log('=' * 120);
  console.log(`Node.js Version: ${process.version}`);
  console.log(`CPU Cores      : ${os.cpus().length}`);
  console.log(`System Platform: ${os.platform()} (${os.arch()})`);
  console.log(`Target Query   : ${SQL}`);
  console.log(`Warmup Duration: ${WARMUP_MS}ms`);
  console.log(`Run Duration   : ${DURATION_MS}ms`);
  console.log('-'.repeat(160));

  console.log('Initializing Spanner connections...');
  const db = new NativeSpannerDatabase(PROJECT, INSTANCE, DATABASE);

  // Pre-initialize matrix clients
  const rustClients = {};
  for (const channels of [1, 4, 8, 10, 12, 16, 20, 32, 50]) {
    rustClients[channels] = new NativeSpannerDatabase(PROJECT, INSTANCE, DATABASE, channels);
  }

  console.log('Warming up connection pools, auth tokens, and JIT compiler...');
  await runBenchmark(() => db.executeSqlJs(SQL), 4, WARMUP_MS);
  await runBenchmark(() => rustClients[1].executeSqlNative(SQL), 4, WARMUP_MS);
  await runBenchmark(() => rustClients[4].executeSqlNative(SQL), 4, WARMUP_MS);
  await runBenchmark(() => rustClients[8].executeSqlNative(SQL), 4, WARMUP_MS);
  await runBenchmark(() => rustClients[16].executeSqlNative(SQL), 4, WARMUP_MS);
  await runBenchmark(() => rustClients[32].executeSqlNative(SQL), 4, WARMUP_MS);
  await runBenchmark(() => rustClients[50].executeSqlNative(SQL), 4, WARMUP_MS);
  console.log('Warmup complete.');

  // Run Advanced Systems Verification Plan tests (Test 1 to 4)
  await runVerificationPlanTests(db);

  console.log('Executing customer replication benchmark cases (110 Concurrency, 1000 Total Requests)...');
  console.log('='.repeat(100));

  // 1. JS Baseline Customer Case
  console.log('Running JavaScript baseline...');
  const custJs = await runFixedCountBenchmark(() => db.executeSqlJs(SQL), 110, 1000);

  // 2. Rust Multi-Channel (4 Channels) Customer Case
  console.log('Running Rust (4 Channels) extension...');
  const custRust4 = await runFixedCountBenchmark(() => rustClients[4].executeSqlNative(SQL), 110, 1000);

  // 3. Rust Multi-Channel (16 Channels) Customer Case
  console.log('Running Rust (16 Channels) extension...');
  const custRust16 = await runFixedCountBenchmark(() => rustClients[16].executeSqlNative(SQL), 110, 1000);

  // 4. Rust Multi-Channel (32 Channels) Customer Case
  console.log('Running Rust (32 Channels) extension...');
  const custRust32 = await runFixedCountBenchmark(() => rustClients[32].executeSqlNative(SQL), 110, 1000);

  // 5. Rust Multi-Channel (50 Channels) Customer Case
  console.log('Running Rust (50 Channels) extension...');
  const custRust50 = await runFixedCountBenchmark(() => rustClients[50].executeSqlNative(SQL), 110, 1000);

  console.log('\n' + '='.repeat(100));
  console.log('CUSTOMER BENCHMARK REPLICATION SUMMARY');
  console.log('='.repeat(100));
  
  const printCustRes = (label, r, base = null) => {
    console.log(`\n  [${label}]`);
    console.log(`  Total Time          : ${r.totalTimeMs.toFixed(2)}ms`);
    console.log(`  Queries/Second (QPS): ${r.qps.toFixed(2)}`);
    console.log(`  Avg Batch Duration  : ${r.avgDuration.toFixed(2)}ms`);
    console.log(`  Min Batch Duration  : ${r.minDuration.toFixed(2)}ms`);
    console.log(`  Max Batch Duration  : ${r.maxDuration.toFixed(2)}ms`);
    console.log(`  P50                 : ${r.p50.toFixed(2)}ms`);
    console.log(`  P90                 : ${r.p90.toFixed(2)}ms`);
    console.log(`  P95                 : ${r.p95.toFixed(2)}ms`);
    console.log(`  P99                 : ${r.p99.toFixed(2)}ms`);
    console.log(`  Event Loop Lag (Avg): ${r.avgLagMs.toFixed(2)}ms (Max: ${r.maxLagMs.toFixed(2)}ms)`);
    console.log(`  CPU Utilization     : ${r.cpuUtil.toFixed(1)}%`);
    if (base) {
      const speedup = r.qps / base.qps;
      const latImp = ((base.p95 - r.p95) / base.p95) * 100;
      console.log(`  Throughput Speedup  : \x1b[32m${speedup.toFixed(2)}x\x1b[0m`);
      console.log(`  p95 Latency Imp. %  : \x1b[32m${latImp.toFixed(1)}%\x1b[0m`);
    }
  };

  printCustRes('JavaScript Baseline', custJs);
  printCustRes('Rust 4 Channels', custRust4, custJs);
  printCustRes('Rust 16 Channels', custRust16, custJs);
  printCustRes('Rust 32 Channels', custRust32, custJs);
  printCustRes('Rust 50 Channels', custRust50, custJs);
  console.log('='.repeat(100) + '\n');

  const results = [];
  results.push({
    concurrency: 110,
    total: 1000,
    javascript: custJs,
    rust_4ch: custRust4,
    rust_16ch: custRust16,
    rust_32ch: custRust32,
    rust_50ch: custRust50
  });

  console.log('Continuing to standard comparative matrix tests...\n');

  // Beautiful comparative markdown table header
  const columns = [
    { text: 'Concurrency', width: 12 },
    { text: 'Method', width: 16 },
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

  for (const concurrency of CONCURRENCY_LEVELS) {
    // 1. JS Baseline Execution
    const jsRes = await runBenchmark(() => db.executeSqlJs(SQL), concurrency, DURATION_MS);
    const jsQpsP95 = `${jsRes.qps.toFixed(1)} / ${jsRes.p95.toFixed(1)}`;
    
    console.log([
      String(concurrency).padEnd(12),
      'JavaScript'.padEnd(16),
      jsQpsP95.padEnd(18),
      jsRes.p50.toFixed(1).padEnd(10),
      jsRes.p99.toFixed(1).padEnd(10),
      `${jsRes.avgLagMs.toFixed(1)}ms`.padEnd(12),
      `${jsRes.maxLagMs.toFixed(1)}ms`.padEnd(12),
      `${jsRes.cpuUtil.toFixed(1)}%`.padEnd(10),
      '-'.padEnd(10),
      '-'.padEnd(10)
    ].join(' | '));

    const rustRuns = {};

    // 2. Rust Native Dynamic Connection Channels Execution
    for (const channels of CHANNELS_TEST) {
      const rustRes = await runBenchmark(() => rustClients[channels].executeSqlNative(SQL), concurrency, DURATION_MS);
      const speedup = jsRes.qps > 0 ? rustRes.qps / jsRes.qps : 0.0;
      const latImp = jsRes.p95 > 0 ? ((jsRes.p95 - rustRes.p95) / jsRes.p95) * 100 : 0.0;
      
      const rustQpsP95 = `${rustRes.qps.toFixed(1)} / ${rustRes.p95.toFixed(1)}`;
      const speedupStr = `${speedup.toFixed(2)}x`;
      const latImpStr = `${latImp.toFixed(1)}%`;

      console.log([
        String(concurrency).padEnd(12),
        `Rust (${channels} Ch)`.padEnd(16),
        rustQpsP95.padEnd(18),
        rustRes.p50.toFixed(1).padEnd(10),
        rustRes.p99.toFixed(1).padEnd(10),
        `${rustRes.avgLagMs.toFixed(1)}ms`.padEnd(12),
        `${rustRes.maxLagMs.toFixed(1)}ms`.padEnd(12),
        `${rustRes.cpuUtil.toFixed(1)}%`.padEnd(10),
        speedupStr.padEnd(10),
        latImpStr.padEnd(10)
      ].join(' | '));

      rustRuns[`rust_${channels}ch`] = rustRes;
      rustRuns[`speedup_${channels}ch`] = speedup;
      rustRuns[`latImp_${channels}ch`] = latImp;
    }

    console.log('-'.repeat(160));

    results.push({
      concurrency,
      javascript: jsRes,
      ...rustRuns,
    });
  }

  // Write comparative data JSON to file
  fs.writeFileSync(
    'benchmark_results.json',
    JSON.stringify(
      {
        systemInfo: {
          node: process.version,
          cores: os.cpus().length,
          platform: os.platform(),
          arch: os.arch(),
        },
        config: {
          sql: "DML INSERT INTO AsyncBenchmarkTable",
          durationMs: DURATION_MS,
        },
        runs: results,
      },
      null,
      2
    )
  );
  console.log('\nFull comparative report successfully saved to benchmark_results.json.');

  // Explicitly exit process to kill background keep-alive timers cleanly
  process.exit(0);
}

main().catch((err) => {
  console.error('Critical benchmark failure:', err);
  process.exit(1);
});
