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

'use strict';

const fs = require('fs');
const path = require('path');
const os = require('os');
const inspector = require('inspector');
const { performance } = require('perf_hooks');

// Import the regular handwritten Spanner package
const { Spanner } = require('../');

// ═════════════════════════════════════════════════════════════════════════════
// CONFIGURATION & CLI ARGUMENT PARSING
// ═════════════════════════════════════════════════════════════════════════════
const args = process.argv.slice(2);
function getArg(name, defaultValue) {
  const match = args.find((a) => a.startsWith(`--${name}=`));
  if (match) return match.split('=')[1];
  const flagIndex = args.indexOf(`--${name}`);
  if (flagIndex !== -1 && args[flagIndex + 1] && !args[flagIndex + 1].startsWith('--')) {
    return args[flagIndex + 1];
  }
  return defaultValue;
}
const hasFlag = (name) => args.includes(`--${name}`);

const PROJECT = process.env.SPANNER_PROJECT || getArg('project', 'span-cloud-testing');
const INSTANCE = process.env.SPANNER_INSTANCE || getArg('instance', 'suvham-testing');
const DATABASE = process.env.SPANNER_DATABASE || getArg('database', 'benchmark_db_async');
const TABLE = process.env.SPANNER_TABLE || getArg('table', 'AsyncBenchmarkTable');

const WARMUP_MS = parseInt(getArg('warmup', '5000'), 10);
const DURATION_MS = parseInt(getArg('duration', '15000'), 10);
const SAMPLING_INTERVAL_US = parseInt(getArg('sampling-interval', '500'), 10); // 500us default
const SCENARIO_ARG = getArg('scenario', 'all'); // '1', '2', '3', or 'all'
const IS_MOCK = hasFlag('mock') || process.env.MOCK === 'true';
const OUTPUT_DIR = path.resolve(getArg('output-dir', path.join(__dirname, 'profiles')));

// Ensure multiplexed sessions are active (standard default)
process.env.GOOGLE_CLOUD_SPANNER_MULTIPLEXED_SESSIONS = 'true';

// ═════════════════════════════════════════════════════════════════════════════
// V8 CPU PROFILER MANAGER (Built-in Node.js Inspector)
// ═════════════════════════════════════════════════════════════════════════════
class ProfilerManager {
  constructor(samplingIntervalUs = 500) {
    this.session = new inspector.Session();
    this.samplingIntervalUs = samplingIntervalUs;
    this.isConnected = false;
  }

  connect() {
    if (!this.isConnected) {
      this.session.connect();
      this.isConnected = true;
    }
  }

  post(method, params = {}) {
    return new Promise((resolve, reject) => {
      this.session.post(method, params, (err, res) => {
        if (err) return reject(err);
        resolve(res);
      });
    });
  }

  async start() {
    this.connect();
    await this.post('Profiler.enable');
    await this.post('Profiler.setSamplingInterval', { interval: this.samplingIntervalUs });
    await this.post('Profiler.start');
  }

  async stop(outputPath) {
    const { profile } = await this.post('Profiler.stop');
    await this.post('Profiler.disable');

    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, JSON.stringify(profile, null, 2));
    return profile;
  }

  close() {
    if (this.isConnected) {
      this.session.disconnect();
      this.isConnected = false;
    }
  }
}

// ═════════════════════════════════════════════════════════════════════════════
// LOAD RUNNER (Sustains exactly N in-flight requests)
// ═════════════════════════════════════════════════════════════════════════════
async function runLoad(executeFn, concurrency, durationMs) {
  let inFlight = 0;
  let stopped = false;
  let completed = 0;
  let errors = 0;
  const latencies = [];
  const start = performance.now();

  return new Promise((resolve) => {
    function launchOne() {
      if (stopped && inFlight === 0) {
        const totalElapsedMs = performance.now() - start;
        resolve({ completed, errors, latencies, totalElapsedMs });
        return;
      }
      if (stopped) return;

      inFlight++;
      const reqStart = performance.now();

      executeFn()
        .then(() => {
          completed++;
          latencies.push(performance.now() - reqStart);
        })
        .catch((err) => {
          errors++;
          if (errors <= 3) {
            console.error('  [Request Error]:', err.message);
          }
        })
        .finally(() => {
          inFlight--;
          launchOne();
          if (stopped && inFlight === 0) {
            const totalElapsedMs = performance.now() - start;
            resolve({ completed, errors, latencies, totalElapsedMs });
          }
        });
    }

    for (let i = 0; i < concurrency; i++) {
      launchOne();
    }

    setTimeout(() => {
      stopped = true;
    }, durationMs);
  });
}

function calculateStats(latencies, totalElapsedMs, errors) {
  if (latencies.length === 0) {
    return { qps: '0.0', p50: '0.00', p90: '0.00', p95: '0.00', p99: '0.00', avg: '0.00', count: 0, errors };
  }
  latencies.sort((a, b) => a - b);
  const getP = (p) => {
    const idx = Math.ceil((p / 100) * latencies.length) - 1;
    return latencies[Math.max(0, idx)];
  };
  const sum = latencies.reduce((a, b) => a + b, 0);

  return {
    qps: (latencies.length / (totalElapsedMs / 1000)).toFixed(1),
    p50: getP(50).toFixed(2),
    p90: getP(90).toFixed(2),
    p95: getP(95).toFixed(2),
    p99: getP(99).toFixed(2),
    avg: (sum / latencies.length).toFixed(2),
    count: latencies.length,
    errors,
  };
}

// ═════════════════════════════════════════════════════════════════════════════
// MOCK DATABASE IMPLEMENTATION (Fallback / Offline)
// ═════════════════════════════════════════════════════════════════════════════
class MockSpannerDatabase {
  constructor() {
    this._sampleRow = {
      id: 'user-12345',
      field0: '0488182169',
      field1: 'eV0mZigKUFYgX7aMwQ871fekFOOKl1bEOAwHFyNanRvpWehLwAU9ch5CrNRMjUarqs8wAV6KXgSQOvLLqhcOfAjcZQfRRYrXgeGQ',
      field2: 'cIcQ2qmY0MZTYbH4QYBEBDxJqrbDWGKwy1zW9NrVMssVs5AZtzq27Ji5dWRttvvb4u04B1X3LdV7nW6PJXbpdYmOoVxG8KXJA3lR',
      field3: 'w7Y56D56EqBEwUsLBa85S2SbcmvrShniIr2o6AQMSDY7ZuxX5efhEthKFc6kGN3WHijI85SpLy8vpiLgV8SQSQHPwxEk3LEBozFf',
      field4: 'Z8dsrUwclCgwAqaN4cw3IoTbzRimKUUtjtU94iHjqw2ODA2QU9wH7XSP4MnuxnLcZEd3AQapBYysdnZughmYCGYSkz6thVQgbHBK',
      field5: 'mkZlc4ZiqvMIiH0U6GKatYEbj8KRyvqcuqp5aALBF4Hwy6tcKsABAkKVLUDHT4KJHKMRXnMNA7zdItqMMw6GYKrrgYZO3ILaEtAb',
      field6: 'zYVs1Nz1VeD6n5iCHhJ1D8xDJBiB8OBrXuohweHIhGDhUngHfIHLL5Eu132Y63fXmkUEwH86QmKDw5LPPZ0SqNx8HKN4SeMfPH3t',
      field7: 'GHVWLJ3Q1yCMPuCjl0h3RaCqPikGMA4g8iRLsiZTFME4xY6FIwv26zXw2YYEhbyZHtPo6WZsq57dSRy0UWeNMuJAwX6eRhuTPYm5',
      field8: 'teANBu5CkbWBv7AvyntOuz73sCnMYs48Wa6Lon3fn1xxl0IJjRga5kIpz7vT4wDCgNdDqrjISAWutgWLqYpzwYvJ6NTtYjmNet9u',
      field9: 'ZexTAXgdlis8Xr18enCihf1H7W0OezH0vbESAM2FFjc9hyzZhoJrDybYtJ7bvnzw87vpWj83kFkVr3N8k5ZAO3L0zkw3NkJJZY61',
    };
  }

  async run(query) {
    const isLimit1000 = typeof query === 'string' ? query.includes('LIMIT 1000') : query.sql.includes('LIMIT 1000');
    // Mock 5ms network sleep
    await new Promise((resolve) => setTimeout(resolve, 5));

    const count = isLimit1000 ? 1000 : 1;
    const rows = [];
    for (let i = 0; i < count; i++) {
      rows.push({
        toJSON: () => ({ ...this._sampleRow, id: `user-${i}` }),
      });
    }
    return [rows];
  }

  async close() {}
}

// ═════════════════════════════════════════════════════════════════════════════
// MAIN TEST SUITE
// ═════════════════════════════════════════════════════════════════════════════
async function main() {
  console.log('='.repeat(80));
  console.log('GOOGLE CLOUD SPANNER: REGULAR FLOW CPU PROFILING SUITE');
  console.log('='.repeat(80));
  console.log(`Node Version      : ${process.version}`);
  console.log(`Platform / Arch   : ${os.platform()} (${os.arch()})`);
  console.log(`CPU Cores         : ${os.cpus().length}x ${os.cpus()[0].model}`);
  console.log(`Target Spanner    : projects/${PROJECT}/instances/${INSTANCE}/databases/${DATABASE}`);
  console.log(`Target Table      : ${TABLE} (>10 columns)`);
  console.log(`Mode              : ${IS_MOCK ? 'MOCK (5ms sleep)' : 'LIVE GCP SPANNER'}`);
  console.log(`Warmup Duration   : ${WARMUP_MS} ms (connection & JIT warmup)`);
  console.log(`Profile Duration  : ${DURATION_MS} ms`);
  console.log(`Sampling Interval : ${SAMPLING_INTERVAL_US} μs`);
  console.log(`Output Directory  : ${OUTPUT_DIR}`);
  console.log('='.repeat(80));

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  let database;
  let spannerClient;

  if (IS_MOCK) {
    console.log('Using Mock Database with 5ms sleep time...');
    database = new MockSpannerDatabase();
  } else {
    console.log('Initializing live Google Cloud Spanner Client...');
    spannerClient = new Spanner({ projectId: PROJECT });
    const instance = spannerClient.instance(INSTANCE);
    database = instance.database(DATABASE);
    // Ignore unhandled background pool errors
    database.on('error', () => {});
  }

  // Define Workload Functions
  const pointSelectSql = `SELECT * FROM ${TABLE} WHERE id = @id`;
  const limit1000Sql = `SELECT * FROM ${TABLE} LIMIT 1000`;

  async function executePointSelect() {
    const randomId = `user-${Math.floor(Math.random() * 100000)}`;
    const [rows] = await database.run({
      sql: pointSelectSql,
      params: { id: randomId },
    });
    // Process rows to simulate full application consumption
    return rows.map((r) => r.toJSON());
  }

  async function executeLimit1000Read() {
    const [rows] = await database.run(limit1000Sql);
    // Process all 1000 rows to evaluate row decoding & JSON translation
    return rows.map((r) => r.toJSON());
  }

  // Scenarios Definition
  const scenarios = [
    {
      id: 1,
      name: 'Point select with single concurrency (c=1)',
      filename: 'profile_point_select_c1.cpuprofile',
      fn: executePointSelect,
      concurrency: 1,
    },
    {
      id: 2,
      name: 'Point select with 32 concurrency (c=32)',
      filename: 'profile_point_select_c32.cpuprofile',
      fn: executePointSelect,
      concurrency: 32,
    },
    {
      id: 3,
      name: 'Limit 1000 read for >10 column table (c=1)',
      filename: 'profile_limit_1000_read.cpuprofile',
      fn: executeLimit1000Read,
      concurrency: 1,
    },
  ];

  const scenariosToRun =
    SCENARIO_ARG === 'all'
      ? scenarios
      : scenarios.filter((s) => String(s.id) === String(SCENARIO_ARG));

  if (scenariosToRun.length === 0) {
    console.error(`Invalid scenario: ${SCENARIO_ARG}. Use 1, 2, 3, or all.`);
    process.exit(1);
  }

  const generatedProfiles = [];

  for (const sc of scenariosToRun) {
    console.log(`\n${'─'.repeat(80)}`);
    console.log(`[SCENARIO ${sc.id}] ${sc.name}`);
    console.log(`Concurrency: ${sc.concurrency} | Warmup: ${WARMUP_MS}ms | Record Duration: ${DURATION_MS}ms`);
    console.log(`${'─'.repeat(80)}`);

    // 1. WARMUP PHASE (5 seconds)
    console.log(`⏳ Step 1/3: Warming up connection and JIT for ${WARMUP_MS}ms...`);
    const warmupResult = await runLoad(sc.fn, sc.concurrency, WARMUP_MS);
    const warmupStats = calculateStats(warmupResult.latencies, warmupResult.totalElapsedMs, warmupResult.errors);
    console.log(`   Warmup Done: ${warmupStats.count} reqs | ${warmupStats.qps} QPS | avg lat: ${warmupStats.avg}ms`);

    // 2. CPU PROFILING PHASE
    console.log(`🔴 Step 2/3: Starting V8 CPU Profiler recording for ${DURATION_MS}ms...`);
    const profiler = new ProfilerManager(SAMPLING_INTERVAL_US);
    await profiler.start();

    const benchResult = await runLoad(sc.fn, sc.concurrency, DURATION_MS);

    console.log(`⏹️  Step 3/3: Stopping profiler and saving .cpuprofile file...`);
    const outputPath = path.join(OUTPUT_DIR, sc.filename);
    const profileData = await profiler.stop(outputPath);
    profiler.close();

    const benchStats = calculateStats(benchResult.latencies, benchResult.totalElapsedMs, benchResult.errors);
    const fileSizeKb = (fs.statSync(outputPath).size / 1024).toFixed(1);
    const sampleCount = profileData.samples ? profileData.samples.length : 0;

    console.log(`\n  📊 Scenario ${sc.id} Results:`);
    console.log(`     Total Requests     : ${benchStats.count} (Errors: ${benchStats.errors})`);
    console.log(`     Throughput         : ${benchStats.qps} QPS`);
    console.log(`     Latency (p50 / p95): ${benchStats.p50}ms / ${benchStats.p95}ms (avg: ${benchStats.avg}ms)`);
    console.log(`     CPU Profile Samples: ${sampleCount} samples`);
    console.log(`     Saved Profile File : ${outputPath} (${fileSizeKb} KB)`);

    generatedProfiles.push({
      scenario: sc.id,
      name: sc.name,
      concurrency: sc.concurrency,
      file: sc.filename,
      fullPath: outputPath,
      qps: benchStats.qps,
      p50: benchStats.p50,
      p95: benchStats.p95,
      sampleCount,
      fileSizeKb,
    });
  }

  // Summary Table
  console.log(`\n${'='.repeat(80)}`);
  console.log('SUMMARY OF GENERATED CPU PROFILES');
  console.log('='.repeat(80));
  console.table(
    generatedProfiles.map((p) => ({
      Scenario: `Scenario ${p.scenario}`,
      Description: p.name,
      QPS: p.qps,
      'p50 (ms)': p.p50,
      'p95 (ms)': p.p95,
      'Samples Recorded': p.sampleCount,
      'File Size (KB)': p.fileSizeKb,
      'Profile File': p.file,
    }))
  );

  console.log(`\nAll profile files are located in:`);
  console.log(`  ${OUTPUT_DIR}\n`);
  console.log(`To visualize flame graphs:`);
  console.log(`  1. Open Chrome -> DevTools -> Performance tab -> Click "Load profile..." icon`);
  console.log(`  2. Or drag-and-drop into https://speedscope.app`);
  console.log(`  3. Or open directly in VS Code (supports .cpuprofile flame graphs)`);
  console.log('='.repeat(80));

  if (database && typeof database.close === 'function') {
    await database.close();
  }
}

main()
  .then(() => {
    process.exit(0);
  })
  .catch((err) => {
    console.error('Fatal error in profiling suite:', err);
    process.exit(1);
  });
