const fs = require('fs');
const os = require('os');
const { performance } = require('perf_hooks');
const { NativeSpannerDatabase } = require('./poc_bridge.js');

// ════════════════════════════════════════════════════════════════
// BENCHMARK CONFIGURATION — USER TO UPDATE
// ════════════════════════════════════════════════════════════════
const PROJECT  = 'span-cloud-testing';
const INSTANCE = 'suvham-testing';
const DATABASE = 'benchmark_db_async';
const TABLE    = 'AsyncBenchmarkTable';

const SQL = `SELECT * FROM ${TABLE} LIMIT 1`;

const WARMUP_MS = 10_000;
const DURATION_MS = 30_000;
const CONCURRENCY_LEVELS = [1, 2, 4, 8, 16, 32];
const CHANNELS_TEST = [1, 2, 4, 8, 10, 12, 16];

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
  // Run event loop lag monitor and keep-in-flight request loops concurrently
  const [{ latencies, errors }, lagStats] = await Promise.all([
    keepNInFlight(executeFn, concurrency, durationMs),
    measureEventLoopLag(durationMs),
  ]);

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
  };
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
  console.log('-'.repeat(140));

  console.log('Initializing Spanner connections...');
  const db = new NativeSpannerDatabase(PROJECT, INSTANCE, DATABASE);

  console.log('Warming up connection pools, auth tokens, and JIT compiler...');
  await runBenchmark(db.executeSqlJs.bind(db), 4, WARMUP_MS);
  await runBenchmark(() => db.executeSqlNative(SQL, 1), 4, WARMUP_MS);
  await runBenchmark(() => db.executeSqlNative(SQL, 4), 4, WARMUP_MS);
  await runBenchmark(() => db.executeSqlNative(SQL, 8), 4, WARMUP_MS);
  await runBenchmark(() => db.executeSqlNative(SQL, 16), 4, WARMUP_MS);
  console.log('Warmup complete. Starting matrix benchmark tests...\n');

  const results = [];

  // Beautiful comparative markdown table header
  const columns = [
    { text: 'Concurrency', width: 12 },
    { text: 'Method', width: 16 },
    { text: 'QPS / p95', width: 18 },
    { text: 'p50 (ms)', width: 10 },
    { text: 'p99 (ms)', width: 10 },
    { text: 'Avg EL Lag', width: 12 },
    { text: 'Max EL Lag', width: 12 },
    { text: 'Speedup', width: 10 },
    { text: 'Lat Imp', width: 10 }
  ];

  const formatHeader = () => columns.map(c => c.text.padEnd(c.width)).join(' | ');
  const formatDivider = () => columns.map(c => '-'.repeat(c.width)).join(' |-|');

  console.log(formatHeader());
  console.log(formatDivider());

  for (const concurrency of CONCURRENCY_LEVELS) {
    // 1. JS Baseline Execution
    const jsRes = await runBenchmark(db.executeSqlJs.bind(db), concurrency, DURATION_MS);
    const jsQpsP95 = `${jsRes.qps.toFixed(1)} / ${jsRes.p95.toFixed(1)}`;
    
    console.log([
      String(concurrency).padEnd(12),
      'JavaScript'.padEnd(16),
      jsQpsP95.padEnd(18),
      jsRes.p50.toFixed(1).padEnd(10),
      jsRes.p99.toFixed(1).padEnd(10),
      `${jsRes.avgLagMs.toFixed(1)}ms`.padEnd(12),
      `${jsRes.maxLagMs.toFixed(1)}ms`.padEnd(12),
      '-'.padEnd(10),
      '-'.padEnd(10)
    ].join(' | '));

    const rustRuns = {};

    // 2. Rust Native Dynamic Connection Channels Execution
    for (const channels of CHANNELS_TEST) {
      const rustRes = await runBenchmark(() => db.executeSqlNative(SQL, channels), concurrency, DURATION_MS);
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
        speedupStr.padEnd(10),
        latImpStr.padEnd(10)
      ].join(' | '));

      rustRuns[`rust_${channels}ch`] = rustRes;
      rustRuns[`speedup_${channels}ch`] = speedup;
      rustRuns[`latImp_${channels}ch`] = latImp;
    }

    console.log('-'.repeat(140));

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
          sql: SQL,
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
