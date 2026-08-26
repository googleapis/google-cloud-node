const { performance } = require('perf_hooks');
const fs = require('fs');

const PROJECT = process.env.SPANNER_PROJECT || 'span-cloud-testing';
const INSTANCE = process.env.SPANNER_INSTANCE || 'suvham-testing';
const DATABASE = process.env.SPANNER_DATABASE || 'benchmark_db_async';

const { NativeBinding } = require('./native_binding');

class NativeSpannerDatabase {
  constructor(project, instance, database, channelCount = 1, engine = 'rust') {
    this.sessionName = `projects/${project}/instances/${instance}/databases/${database}/sessions/benchmark-session-${Math.random().toString(36).substring(7)}`;
    this.binding = new NativeBinding(channelCount, engine);
  }

  executeSqlNative(sql, metadata = {}, gaxOptions = {}) {
    return new Promise((resolve, reject) => {
      const allRows = [];
      let finalTelemetry = null;

      this.binding.executeStreamingSql(
        this.sessionName,
        metadata,
        Buffer.from(sql, 'utf8'),
        gaxOptions,
        (err, rows, telemetry) => {
          if (err) return reject(err);
          if (telemetry) finalTelemetry = telemetry;
          if (rows === null) {
            resolve({ rows: allRows, telemetry: finalTelemetry });
          } else if (rows && rows.length > 0) {
            allRows.push(...rows);
          }
        }
      );
    });
  }

  close() {
    this.binding.close();
  }
}

function calculatePercentiles(latencies) {
  if (!latencies || latencies.length === 0) {
    return { p50: 0, p90: 0, p95: 0, p99: 0, avg: 0 };
  }
  latencies.sort((a, b) => a - b);
  const p = (pct) => latencies[Math.min(latencies.length - 1, Math.floor(latencies.length * pct))];
  const sum = latencies.reduce((acc, val) => acc + val, 0);
  return {
    p50: p(0.50),
    p90: p(0.90),
    p95: p(0.95),
    p99: p(0.99),
    avg: sum / latencies.length
  };
}

function getCpuUsage() {
  return process.cpuUsage();
}

function calculateCpuPercent(startUsage, durationMs) {
  const diff = process.cpuUsage(startUsage);
  const totalMicroSec = diff.user + diff.system;
  const totalMs = totalMicroSec / 1000;
  return (totalMs / durationMs) * 100;
}

function measureEventLoopLag() {
  let maxLag = 0;
  let totalLag = 0;
  let checks = 0;
  let last = performance.now();
  const interval = setInterval(() => {
    const now = performance.now();
    const lag = Math.max(0, now - last - 10);
    if (lag > maxLag) maxLag = lag;
    totalLag += lag;
    checks++;
    last = now;
  }, 10);

  return {
    stop: () => {
      clearInterval(interval);
      return {
        maxLagMs: maxLag,
        avgLagMs: checks > 0 ? totalLag / checks : 0
      };
    }
  };
}

async function runTimedBenchmark(queryFn, concurrency = 1, durationMs = 5000) {
  const latencies = [];
  let errorCount = 0;
  let running = true;

  const lagTracker = measureEventLoopLag();
  const startCpu = getCpuUsage();
  const startTime = performance.now();

  const worker = async () => {
    while (running) {
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

  await new Promise(r => setTimeout(r, durationMs));
  running = false;
  await Promise.all(workers);

  const totalTimeMs = performance.now() - startTime;
  const lagStats = lagTracker.stop();
  const cpuUtil = calculateCpuPercent(startCpu, totalTimeMs);
  const percentiles = calculatePercentiles(latencies);

  return {
    totalTimeMs,
    qps: (latencies.length / (totalTimeMs / 1000)),
    p50: percentiles.p50,
    p90: percentiles.p90,
    p95: percentiles.p95,
    p99: percentiles.p99,
    avgDuration: percentiles.avg,
    errorRate: latencies.length + errorCount > 0 ? (errorCount / (latencies.length + errorCount)) * 100 : 0,
    total: latencies.length,
    maxLagMs: lagStats.maxLagMs,
    avgLagMs: lagStats.avgLagMs,
    cpuUtil
  };
}

async function runCustomerReplication(queryFn, concurrency = 110, targetCount = 1000) {
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
  const cpuUtil = calculateCpuPercent(startCpu, totalTimeMs);
  const percentiles = calculatePercentiles(latencies);

  return {
    totalTimeMs,
    qps: (latencies.length / (totalTimeMs / 1000)),
    p50: percentiles.p50,
    p90: percentiles.p90,
    p95: percentiles.p95,
    p99: percentiles.p99,
    avgDuration: percentiles.avg,
    errorRate: latencies.length + errorCount > 0 ? (errorCount / (latencies.length + errorCount)) * 100 : 0,
    total: latencies.length,
    maxLagMs: lagStats.maxLagMs,
    avgLagMs: lagStats.avgLagMs,
    cpuUtil
  };
}

async function main() {
  const outputFile = process.argv[2] || 'benchmark_results_3way.json';
  const os = require('os');
  const POINT_SQL = "SELECT 1 as col_int, 'CONSTANT' as col_const";

  console.log('='.repeat(80));
  console.log('  3-WAY BENCHMARK SUITE: RUST vs. GO (GFE) vs. GO (DIRECTPATH)');
  console.log('='.repeat(80));
  console.log(`Node.js Version: ${process.version}`);
  console.log(`OS Platform    : ${os.platform()} (${os.arch()})`);
  console.log(`CPU Cores      : ${os.cpus().length} core(s)`);
  console.log(`Target Database: projects/${PROJECT}/instances/${INSTANCE}/databases/${DATABASE}\n`);

  const channelList = [1, 4, 8, 16, 32, 50];

  console.log('1. Initializing Rust clients...');
  const rustClients = {};
  for (const ch of channelList) {
    rustClients[ch] = new NativeSpannerDatabase(PROJECT, INSTANCE, DATABASE, ch, 'rust');
  }

  console.log('2. Initializing Go (GFE) clients (DirectPath=false)...');
  process.env.GOOGLE_SPANNER_ENABLE_DIRECT_ACCESS = 'false';
  process.env.GOOGLE_CLOUD_ENABLE_DIRECT_PATH = 'false';
  const goGfeClients = {};
  for (const ch of channelList) {
    goGfeClients[ch] = new NativeSpannerDatabase(PROJECT, INSTANCE, DATABASE, ch, 'go');
  }

  console.log('3. Initializing Go (DirectPath) clients (DirectPath=true)...');
  process.env.GOOGLE_SPANNER_ENABLE_DIRECT_ACCESS = 'true';
  process.env.GOOGLE_CLOUD_ENABLE_DIRECT_PATH = 'true';
  const goDpClients = {};
  for (const ch of channelList) {
    goDpClients[ch] = new NativeSpannerDatabase(PROJECT, INSTANCE, DATABASE, ch, 'go');
  }

  console.log('\nExecuting eager warmup across all channel configurations (Rust, Go GFE, Go DP)...');
  for (const ch of channelList) {
    await runTimedBenchmark(() => rustClients[ch].executeSqlNative(POINT_SQL), 4, 1500);
    await runTimedBenchmark(() => goGfeClients[ch].executeSqlNative(POINT_SQL), 4, 1500);
    await runTimedBenchmark(() => goDpClients[ch].executeSqlNative(POINT_SQL), 4, 1500);
  }
  console.log('Warmup complete for all clients.\n');

  const fullReport = {
    systemInfo: {
      node: process.version,
      cores: os.cpus().length,
      platform: os.platform(),
      arch: os.arch()
    },
    test1_readVolumeScaling: [],
    test2_customerReplication: {},
    test3_matrix: [],
    test4_mixedTypes: {}
  };

  // =========================================================================
  // TEST 1: Read Volume Scaling (Payload Sizes)
  // =========================================================================
  console.log('='.repeat(80));
  console.log('[TEST 1: Read Volume Scaling (LIMIT 1, 100, 1000 Rows)]');
  console.log('Concurrency: 1 | Channels: 1');
  console.log('='.repeat(80) + '\n');

  const payloads = [
    { label: 'Small (LIMIT 1, ~100B)', sql: 'SELECT * FROM AsyncBenchmarkTable LIMIT 1', dur: 10000 },
    { label: 'Medium (LIMIT 100, ~10KB)', sql: 'SELECT * FROM AsyncBenchmarkTable LIMIT 100', dur: 10000 },
    { label: 'Large (LIMIT 1000, ~100KB)', sql: 'SELECT * FROM AsyncBenchmarkTable LIMIT 1000', dur: 15000 }
  ];

  for (const p of payloads) {
    console.log(`Executing: ${p.label}...`);
    const rustRes = await runTimedBenchmark(() => rustClients[1].executeSqlNative(p.sql), 1, p.dur);
    const goGfeRes = await runTimedBenchmark(() => goGfeClients[1].executeSqlNative(p.sql), 1, p.dur);
    const goDpRes = await runTimedBenchmark(() => goDpClients[1].executeSqlNative(p.sql), 1, p.dur);

    console.log(`  Rust (GFE) : QPS=${rustRes.qps.toFixed(1)} | p50=${rustRes.p50.toFixed(2)}ms | p95=${rustRes.p95.toFixed(2)}ms | CPU=${rustRes.cpuUtil.toFixed(1)}%`);
    console.log(`  Go   (GFE) : QPS=${goGfeRes.qps.toFixed(1)} | p50=${goGfeRes.p50.toFixed(2)}ms | p95=${goGfeRes.p95.toFixed(2)}ms | CPU=${goGfeRes.cpuUtil.toFixed(1)}%`);
    console.log(`  Go   (DP)  : QPS=${goDpRes.qps.toFixed(1)} | p50=${goDpRes.p50.toFixed(2)}ms | p95=${goDpRes.p95.toFixed(2)}ms | CPU=${goDpRes.cpuUtil.toFixed(1)}%\n`);

    fullReport.test1_readVolumeScaling.push({
      label: p.label,
      sql: p.sql,
      rust: rustRes,
      go_gfe: goGfeRes,
      go_dp: goDpRes
    });
  }

  // =========================================================================
  // TEST 2: Customer Case Replication
  // =========================================================================
  console.log('='.repeat(80));
  console.log('[TEST 2: Customer Case Replication (110 Concurrency, 1000 Total Requests)]');
  console.log('Query: SELECT 1 as col_int, \'CONSTANT\' as col_const');
  console.log('='.repeat(80) + '\n');

  for (const ch of [16, 32, 50]) {
    console.log(`Executing Customer Replication (${ch} Channels)...`);
    const rustRes = await runCustomerReplication(() => rustClients[ch].executeSqlNative(POINT_SQL), 110, 1000);
    const goGfeRes = await runCustomerReplication(() => goGfeClients[ch].executeSqlNative(POINT_SQL), 110, 1000);
    const goDpRes = await runCustomerReplication(() => goDpClients[ch].executeSqlNative(POINT_SQL), 110, 1000);

    console.log(`  Rust (GFE) : Time=${rustRes.totalTimeMs.toFixed(0)}ms | QPS=${rustRes.qps.toFixed(1)} | p50=${rustRes.p50.toFixed(2)}ms | p95=${rustRes.p95.toFixed(2)}ms | CPU=${rustRes.cpuUtil.toFixed(1)}%`);
    console.log(`  Go   (GFE) : Time=${goGfeRes.totalTimeMs.toFixed(0)}ms | QPS=${goGfeRes.qps.toFixed(1)} | p50=${goGfeRes.p50.toFixed(2)}ms | p95=${goGfeRes.p95.toFixed(2)}ms | CPU=${goGfeRes.cpuUtil.toFixed(1)}%`);
    console.log(`  Go   (DP)  : Time=${goDpRes.totalTimeMs.toFixed(0)}ms | QPS=${goDpRes.qps.toFixed(1)} | p50=${goDpRes.p50.toFixed(2)}ms | p95=${goDpRes.p95.toFixed(2)}ms | CPU=${goDpRes.cpuUtil.toFixed(1)}%\n`);

    fullReport.test2_customerReplication[`${ch}ch`] = {
      rust: rustRes,
      go_gfe: goGfeRes,
      go_dp: goDpRes
    };
  }

  // =========================================================================
  // TEST 3: Concurrency x Channels Scaling Matrix
  // =========================================================================
  console.log('='.repeat(80));
  console.log('[TEST 3: Concurrency x Channels Scaling Matrix (5s per test point)]');
  console.log('='.repeat(80));
  console.log('Concurrency  | Engine (Channels)        | QPS / p95 (ms)     | p50 (ms)   | p99 (ms)   | CPU %     ');
  console.log('-'.repeat(85));

  const concurrencies = [1, 8, 12, 32];
  const matrixChannels = [1, 4, 8, 16];

  for (const conc of concurrencies) {
    const rowObj = {
      concurrency: conc,
      channels: {}
    };

    for (const ch of matrixChannels) {
      const rustRes = await runTimedBenchmark(() => rustClients[ch].executeSqlNative(POINT_SQL), conc, 5000);
      const goGfeRes = await runTimedBenchmark(() => goGfeClients[ch].executeSqlNative(POINT_SQL), conc, 5000);
      const goDpRes = await runTimedBenchmark(() => goDpClients[ch].executeSqlNative(POINT_SQL), conc, 5000);

      const fmt = (eng, res) => `${String(conc).padEnd(12)} | ${eng.padEnd(24)} | ${res.qps.toFixed(1).padStart(7)} / ${res.p95.toFixed(1).padEnd(5)} | ${res.p50.toFixed(1).padEnd(10)} | ${res.p99.toFixed(1).padEnd(10)} | ${res.cpuUtil.toFixed(1)}%`;
      console.log(fmt(`Rust (${ch} Ch)`, rustRes));
      console.log(fmt(`Go GFE (${ch} Ch)`, goGfeRes));
      console.log(fmt(`Go DP (${ch} Ch)`, goDpRes));
      console.log('-'.repeat(85));

      rowObj.channels[`${ch}ch`] = {
        rust: { qps: rustRes.qps, p50: rustRes.p50, p90: rustRes.p90, p95: rustRes.p95, p99: rustRes.p99, avgLagMs: rustRes.avgLagMs, maxLagMs: rustRes.maxLagMs, cpuUtil: rustRes.cpuUtil },
        go_gfe: { qps: goGfeRes.qps, p50: goGfeRes.p50, p90: goGfeRes.p90, p95: goGfeRes.p95, p99: goGfeRes.p99, avgLagMs: goGfeRes.avgLagMs, maxLagMs: goGfeRes.maxLagMs, cpuUtil: goGfeRes.cpuUtil },
        go_dp: { qps: goDpRes.qps, p50: goDpRes.p50, p90: goDpRes.p90, p95: goDpRes.p95, p99: goDpRes.p99, avgLagMs: goDpRes.avgLagMs, maxLagMs: goDpRes.maxLagMs, cpuUtil: goDpRes.cpuUtil }
      };
    }

    fullReport.test3_matrix.push(rowObj);
  }

  // =========================================================================
  // TEST 4: Wide Rows with Mixed Spanner Types
  // =========================================================================
  console.log('\n' + '='.repeat(80));
  console.log('[TEST 4: Wide Rows with Mixed Spanner Types]');
  console.log('='.repeat(80));
  const WIDE_SQL = `
    SELECT 
      CAST(123456 AS INT64) as col_int,
      CAST(3.1415926535 AS FLOAT64) as col_float,
      'The quick brown fox jumps over the lazy dog' as col_str,
      true as col_bool,
      TIMESTAMP '2026-08-25T12:00:00Z' as col_timestamp,
      DATE '2026-08-25' as col_date,
      BYTES 'U3Bhbm5lck5hdGl2ZUJ5dGVzVGVzdA==' as col_bytes,
      JSON '{"key":"value","nested":{"count":42,"valid":true}}' as col_json,
      NUMERIC '99999999999999999999999999999.999999999' as col_numeric,
      ARRAY['apple', 'banana', 'cherry', 'date', 'elderberry'] as col_array
  `;

  console.log('Verifying mixed types execution across Rust, Go GFE, and Go DP (5s run)...');
  const rustWide = await runTimedBenchmark(() => rustClients[1].executeSqlNative(WIDE_SQL), 1, 5000);
  const goGfeWide = await runTimedBenchmark(() => goGfeClients[1].executeSqlNative(WIDE_SQL), 1, 5000);
  const goDpWide = await runTimedBenchmark(() => goDpClients[1].executeSqlNative(WIDE_SQL), 1, 5000);

  console.log(`  Rust (GFE) : QPS=${rustWide.qps.toFixed(1)} | p50=${rustWide.p50.toFixed(2)}ms | p95=${rustWide.p95.toFixed(2)}ms | CPU=${rustWide.cpuUtil.toFixed(1)}%`);
  console.log(`  Go   (GFE) : QPS=${goGfeWide.qps.toFixed(1)} | p50=${goGfeWide.p50.toFixed(2)}ms | p95=${goGfeWide.p95.toFixed(2)}ms | CPU=${goGfeWide.cpuUtil.toFixed(1)}%`);
  console.log(`  Go   (DP)  : QPS=${goDpWide.qps.toFixed(1)} | p50=${goDpWide.p50.toFixed(2)}ms | p95=${goDpWide.p95.toFixed(2)}ms | CPU=${goDpWide.cpuUtil.toFixed(1)}%\n`);

  fullReport.test4_mixedTypes = {
    rust: { qps: rustWide.qps, p50: rustWide.p50, p95: rustWide.p95, cpuUtil: rustWide.cpuUtil },
    go_gfe: { qps: goGfeWide.qps, p50: goGfeWide.p50, p95: goGfeWide.p95, cpuUtil: goGfeWide.cpuUtil },
    go_dp: { qps: goDpWide.qps, p50: goDpWide.p50, p95: goDpWide.p95, cpuUtil: goDpWide.cpuUtil }
  };

  fs.writeFileSync(outputFile, JSON.stringify(fullReport, null, 2));
  console.log('='.repeat(80));
  console.log(`FULL 3-WAY BENCHMARK COMPLETE! Results saved to ${outputFile}`);
  console.log('='.repeat(80) + '\n');
}

main().catch(err => {
  console.error('Benchmark execution error:', err);
  process.exit(1);
});
